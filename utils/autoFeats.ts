// utils/autoFeats.ts
import { CharacterBuild, Feat, BaseClass, PrestigeClass, AbilityName, FeatPrerequisites } from '../types';
import { feats as allFeats } from '../data/feats';

export interface FeatSlot {
    level: number;
    type: 'normal' | 'bonus' | 'racial';
    source: string;
}

export function getFeatSlots(build: CharacterBuild): FeatSlot[] {
    if (!build.base) return [];

    const featSlots: FeatSlot[] = [];
    const racialHd = parseInt(build.base.racialHitDice.split('d')[0], 10) || 0;
    
    build.base.feats.forEach(featName => {
        featSlots.push({ level: 0, type: 'racial', source: build.base.name });
    });

    const totalClassLevels = build.levels.reduce((sum, l) => sum + l.level, 0);
    const totalHd = racialHd + totalClassLevels;

    for (let hd = 1; hd <= totalHd; hd++) {
        if (hd === 1 || hd % 3 === 0) {
            featSlots.push({ level: hd, type: 'normal', source: `HD ${hd}` });
        }
    }
    
    let currentHd = racialHd;
    build.levels.forEach(l => {
        const classDef = l.class as BaseClass | PrestigeClass;
        const features = 'classFeatures' in classDef ? classDef.classFeatures : classDef.features;
        for(let i = 1; i <= l.level; i++) {
            currentHd++;
            features.forEach(feature => {
                if (feature.level === i && feature.name.toLowerCase().includes('bonus feat')) {
                    featSlots.push({ level: currentHd, type: 'bonus', source: `${classDef.name} ${i}` });
                }
            });
        }
    });

    return featSlots.sort((a, b) => a.level - b.level);
}

const checkPrereqs = (feat: Feat, build: CharacterBuild, takenFeats: string[], currentLevel: number): boolean => {
    const p = feat.prerequisites;
    
    const racialHd = parseInt(build.base.racialHitDice.split('d')[0], 10) || 0;
    const classLevels = build.levels.reduce((sum, l) => sum + (l.level > (currentLevel - racialHd) ? (currentLevel - racialHd) : l.level) , 0);
    if(feat.isEpic && (racialHd + classLevels) < 21) return false;
    
    if (!p) return true;
    const { bab, feats, abilityScores, skills, special } = p;

    let totalBab = 0;
    if(racialHd > 0) {
        totalBab += Math.floor(racialHd * 0.75); // Assuming average BAB for monsters
    }
     build.levels.forEach(l => {
        const levelInClass = Math.min(l.level, Math.max(0, currentLevel - racialHd - build.levels.filter(cl => cl.class.name !== l.class.name).reduce((sum, cl) => sum + cl.level, 0)));
        const classDef = l.class;
        if (classDef.bab === 'good') totalBab += levelInClass;
        if (classDef.bab === 'average') totalBab += Math.floor(levelInClass * 0.75);
        if (classDef.bab === 'poor') totalBab += Math.floor(levelInClass * 0.5);
    });

    if (bab && totalBab < bab) return false;
    if (feats && !feats.every(f => takenFeats.includes(f))) return false;
    if (abilityScores) {
        for (const [ability, score] of Object.entries(abilityScores)) {
            if (build.base.abilities[ability as AbilityName] < score!) return false;
        }
    }
     if (skills) {
      for (const [skill, ranks] of Object.entries(skills)) {
        if ((build.allocatedSkills[skill] || 0) < ranks) return false;
      }
    }
    if (special) {
      const classFeatures = build.levels.flatMap(l => {
        const features = 'classFeatures' in l.class ? l.class.classFeatures : l.class.features;
        return features.filter(f => f.level <= l.level).map(f => f.name.toLowerCase());
      });
      if (!classFeatures.some(fName => fName.includes(special.toLowerCase()))) return false;
    }
    return true;
};


export function autoSelectFeats(build: CharacterBuild, slots: FeatSlot[], goalClass?: PrestigeClass): { [key: string]: string } {
    const primaryClass = build.levels.length > 0 ? build.levels[0].class as BaseClass : null;
    const role = primaryClass?.role || 'melee';

    const featChains: { [key: string]: string[] } = {
        "Great Cleave": ["Power Attack", "Cleave"], "Improved Sunder": ["Power Attack"], "Improved Bull Rush": ["Power Attack"], "Awesome Blow": ["Improved Bull Rush", "Power Attack"], "Spirited Charge": ["Mounted Combat", "Ride-By Attack"],
        "Bounding Assault": ["Dodge", "Mobility", "Spring Attack"], "Rapid Blitz": ["Bounding Assault"], "Greater Weapon Focus": ["Weapon Focus"], "Epic Weapon Focus": ["Greater Weapon Focus"], "Greater Weapon Specialization": ["Greater Weapon Focus", "Weapon Specialization"],
        "Greater Spell Focus": ["Spell Focus"], "Greater Spell Penetration": ["Spell Penetration"], "Greater Power Penetration": ["Power Penetration"],
        "Divine Metamagic (Quicken Spell)": ["Quicken Spell"], "Divine Metamagic (Persist Spell)": ["Persistent Spell"], "Persistent Spell": ["Extend Spell"],
    };

    const featPriorities: { [key: string]: string[] } = {
        melee: ["Power Attack", "Cleave", "Improved Bull Rush", "Awesome Blow", "Weapon Focus", "Improved Critical", "Weapon Specialization", "Great Cleave", "Shock Trooper"],
        arcane: ["Spell Focus", "Greater Spell Focus", "Spell Penetration", "Greater Spell Penetration", "Quicken Spell", "Maximize Spell", "Empower Spell", "Combat Casting"],
        divine: ["Extra Turning", "Persistent Spell", "Divine Metamagic (Persist Spell)", "Quicken Spell", "Divine Metamagic (Quicken Spell)", "Power Attack", "Divine Might", "Spell Focus"],
        psionic: ["Psionic Body", "Power Penetration", "Greater Power Penetration", "Quicken Power", "Maximize Power", "Psionic Meditation"],
        skill: ["Dodge", "Mobility", "Spring Attack", "Weapon Finesse"],
        ranged: ["Point Blank Shot", "Precise Shot", "Rapid Shot", "Manyshot", "Greater Manyshot"]
    };
    
    const selected: { [key: string]: string } = {};
    const takenFeatNames: string[] = [...build.base.feats];
    
    const requiredFeats: Set<string> = new Set();
    if (goalClass?.prerequisites?.feats) {
        goalClass.prerequisites.feats.forEach(f => {
            if (Array.isArray(f)) {
                // For OR conditions, just add the first one. A smarter system could check which is "easiest" to get.
                if(f.length > 0) requiredFeats.add(f[0]);
            } else {
                requiredFeats.add(f);
            }
        });
    }

    slots.forEach((slot, index) => {
        const key = `${slot.level}-${slot.source.replace(/\s+/g, '-')}-${index}`;
        const availableFeats = allFeats.filter(f => !takenFeatNames.includes(f.name) && checkPrereqs(f, build, takenFeatNames, slot.level));
        
        let bestFeat: Feat | null = null;
        
        // 1. Try to take a required feat
        const neededNow = Array.from(requiredFeats).filter(fName => !takenFeatNames.includes(fName));
        for(const featName of neededNow) {
            const feat = availableFeats.find(f => f.name === featName);
            if (feat) {
                bestFeat = feat;
                break;
            }
        }

        // 2. Try to take a prerequisite for a needed feat
        if (!bestFeat) {
            for (const neededFeatName of neededNow) {
                const prereqs = featChains[neededFeatName] || allFeats.find(f => f.name === neededFeatName)?.prerequisites?.feats || [];
                for (const prereqName of prereqs) {
                    if (!takenFeatNames.includes(prereqName)) {
                        const feat = availableFeats.find(f => f.name === prereqName);
                        if (feat) {
                            bestFeat = feat;
                            break;
                        }
                    }
                }
                if(bestFeat) break;
            }
        }

        // 3. Fallback to role-based priorities
        if (!bestFeat) {
            for(const featName of featPriorities[role] || []) {
                const feat = availableFeats.find(f => f.name.startsWith(featName));
                if (feat) {
                    bestFeat = feat;
                    break;
                }
            }
        }
        
        // 4. Fallback to any available feat
        if (!bestFeat && availableFeats.length > 0) {
            bestFeat = availableFeats[0];
        }

        if (bestFeat) {
            selected[key] = bestFeat.name;
            takenFeatNames.push(bestFeat.name);
        }
    });

    return selected;
}
