
// utils/autoSkills.ts
import { CharacterBuild, BaseClass, PrestigeClass, AbilityName } from '../types';
import { allSkills } from '../data/skills';

export function calculateTotalSkillPoints(build: CharacterBuild): number {
    if (!build.base) return 0;
    const { base, levels, selectedItems } = build;
    const finalAbilities = { ...base.abilities };
    selectedItems.forEach(item => {
        item.bonuses?.forEach(bonus => {
            if (bonus.type === 'enhancement' && bonus.target in finalAbilities) {
                finalAbilities[bonus.target as AbilityName] = Math.max(finalAbilities[bonus.target as AbilityName], base.abilities[bonus.target as AbilityName] + bonus.value);
            }
        });
    });
    const intMod = Math.floor((finalAbilities.int - 10) / 2);
    let totalPoints = 0;
    levels.forEach(l => {
        const classDef = l.class as BaseClass | PrestigeClass;
        const pointsPerLevel = classDef.skillPoints + intMod;
        totalPoints += Math.max(1, pointsPerLevel) * l.level;
    });
    // Add racial HD skill points
    const racialHd = parseInt(base.racialHitDice.split('d')[0], 10) || 0;
    if (racialHd > 0) {
        let racialSkillFactor = 2;
        const type = base.sizeAndType.toLowerCase();
        if (type.includes('outsider')) racialSkillFactor = 8;
        else if (type.includes('dragon')) racialSkillFactor = 6;
        else if (type.includes('fey')) racialSkillFactor = 6;
        else if (type.includes('undead')) racialSkillFactor = 4;
        else if (type.includes('magical beast')) racialSkillFactor = 2;
        else if (type.includes('aberration')) racialSkillFactor = 2;
        else if (type.includes('giant')) racialSkillFactor = 2;
        else if (type.includes('elemental')) racialSkillFactor = 2;
        else if (type.includes('humanoid')) racialSkillFactor = 2;
        // Most others default to 2

        totalPoints += Math.max(1, racialSkillFactor + intMod) * racialHd;
    }

    return totalPoints;
}

export function autoAllocateSkills(build: CharacterBuild, goalClass?: PrestigeClass): { [key: string]: number } {
    if (!build.levels.length && !goalClass) return {};
    let availablePoints = calculateTotalSkillPoints(build);
    const allocatedSkills: { [key: string]: number } = {};

    const primaryClass = build.levels.length > 0 ? build.levels[0].class as BaseClass : null;
    const role = primaryClass?.role || 'melee';
    const totalHd = (parseInt(build.base.racialHitDice.split('d')[0], 10) || 0) + build.levels.reduce((sum, l) => sum + l.level, 0);
    const maxRanks = totalHd + 3;

    const allClassSkills = new Set<string>();
    build.levels.forEach(l => {
        (l.class.classSkills || []).forEach(s => allClassSkills.add(s));
    });

    const getCost = (skillName: string) => allClassSkills.has(skillName) ? 1 : 2;

    // 1. Fulfill prerequisites for goal class
    if (goalClass?.prerequisites?.skills) {
        const prereqSkills = goalClass.prerequisites.skills;
        for (const [skill, ranksOrObj] of Object.entries(prereqSkills)) {
            if (availablePoints <= 0) break;
            if (skill === '__or__') {
                const orSkills = ranksOrObj as { [key: string]: number };
                // Find the cheapest OR option
                const cheapestSkill = Object.keys(orSkills).sort((a, b) => getCost(a) - getCost(b))[0];
                const ranksNeeded = orSkills[cheapestSkill];
                const cost = ranksNeeded * getCost(cheapestSkill);
                if (availablePoints >= cost) {
                    allocatedSkills[cheapestSkill] = ranksNeeded;
                    availablePoints -= cost;
                }
            } else {
                const ranksNeeded = ranksOrObj as number;
                const cost = ranksNeeded * getCost(skill);
                if (availablePoints >= cost) {
                    allocatedSkills[skill] = ranksNeeded;
                    availablePoints -= cost;
                }
            }
        }
    }
    
    // 2. Allocate to role-based skills
    const skillPriorities: { [key: string]: string[] } = {
        melee: ["Intimidate", "Jump", "Climb", "Survival"],
        arcane: ["Spellcraft", "Concentration", "Knowledge (arcana)", "Knowledge (the planes)"],
        divine: ["Concentration", "Spellcraft", "Knowledge (religion)", "Heal"],
        psionic: ["Psicraft", "Concentration", "Knowledge (psionics)", "Autohypnosis"],
        skill: ["Tumble", "Hide", "Move Silently", "Use Magic Device", "Sense Motive", "Bluff"],
        ranged: ["Spot", "Listen", "Hide", "Move Silently", "Tumble"],
    };

    const priorities = skillPriorities[role] || [];
    
    for (const skillName of priorities) {
        if (availablePoints <= 0) break;
        const cost = getCost(skillName);
        const currentRanks = allocatedSkills[skillName] || 0;
        const maxSkillRanks = cost === 1 ? maxRanks : Math.floor(maxRanks / 2);
        const ranksToAllocate = Math.min(maxSkillRanks - currentRanks, Math.floor(availablePoints / cost));
        if (ranksToAllocate > 0) {
            allocatedSkills[skillName] = currentRanks + ranksToAllocate;
            availablePoints -= ranksToAllocate * cost;
        }
    }

    // 3. Dump remaining points into the highest priority class skill
    if (availablePoints > 0 && priorities.length > 0) {
        const topPriority = priorities.find(p => allClassSkills.has(p));
        if (topPriority) {
            const currentRanks = allocatedSkills[topPriority] || 0;
            const ranksToAllocate = Math.min(maxRanks - currentRanks, availablePoints);
            allocatedSkills[topPriority] = currentRanks + ranksToAllocate;
            availablePoints -= ranksToAllocate;
        }
    }

    return allocatedSkills;
}
