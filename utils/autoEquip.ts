// utils/autoEquip.ts
import { CharacterBuild, MagicItem, AbilityName, EquipSlot } from '../types';
import { allMagicItems } from '../data/magicItems';
import { artifacts } from '../data/artifacts';

const getPrimaryAbility = (build: CharacterBuild): AbilityName => {
    if (build.levels.length === 0) return 'str';
    const primaryClass = build.levels[0].class;
    if ('primaryAbility' in primaryClass && primaryClass.primaryAbility) {
        return primaryClass.primaryAbility;
    }
    return 'str';
};

const getClassRole = (build: CharacterBuild): string => {
    if (build.levels.length === 0) return 'melee';
    const primaryClass = build.levels[0].class;
    return 'role' in primaryClass ? primaryClass.role || 'melee' : 'melee';
};

export function autoEquip(build: CharacterBuild, budget: number): MagicItem[] {
    let remainingBudget = budget;
    const equipped: MagicItem[] = [];
    const equipSlots = new Set<EquipSlot>();
    let ringSlots = 0;

    const sortedItems = [...allMagicItems].sort((a, b) => b.cost - a.cost);

    const tryEquip = (item: MagicItem | undefined) => {
        if (!item) return;
        
        let slot = item.equipSlot;
        if (slot === 'ring') {
            if (ringSlots < 2) {
                ringSlots++;
            } else {
                return; // Both ring slots are full
            }
        } else if (equipSlots.has(slot)) {
            return; // Slot is full
        }

        equipped.push(item);
        remainingBudget -= item.cost;
        if(slot !== 'ring') equipSlots.add(slot);
    };

    // "Big 6" + Weapon priority list
    const priorities: { slot: EquipSlot, name_includes: string, bonus_target?: AbilityName | 'saves' | 'ac' }[] = [
        { slot: 'weapon', name_includes: 'Greatsword' }, // Generic powerful weapon
        { slot: 'armor', name_includes: 'Full Plate' },
        { slot: 'shoulders', name_includes: 'Cloak of Resistance', bonus_target: 'saves' },
        { slot: 'throat', name_includes: 'Natural Armor', bonus_target: 'ac'},
        { slot: 'ring', name_includes: 'Protection', bonus_target: 'ac'},
        { slot: 'waist', name_includes: 'Strength', bonus_target: 'str'},
        { slot: 'throat', name_includes: 'Health', bonus_target: 'con'},
    ];
    
    // Add primary stat to priorities if not already there
    const primaryAbility = getPrimaryAbility(build);
    if (primaryAbility !== 'str' && primaryAbility !== 'con') {
        const primaryStatItemMap = { dex: 'hands', int: 'head', wis: 'head', cha: 'head' };
        priorities.push({ slot: primaryStatItemMap[primaryAbility] as EquipSlot, name_includes: '', bonus_target: primaryAbility });
    }

    for (const priority of priorities) {
        const item = sortedItems.find(item => 
            item.equipSlot === priority.slot &&
            (priority.name_includes ? item.name.includes(priority.name_includes) : true) &&
            (priority.bonus_target ? item.bonuses?.some(b => b.target === priority.bonus_target) : true) &&
            item.cost <= remainingBudget * 0.4 // Spend up to 40% on a priority item
        );
        tryEquip(item);
    }
    
    // Fill remaining slots
    const remainingSlots: EquipSlot[] = ['head', 'arms', 'feet', 'torso'];
    for(const slot of remainingSlots) {
         const item = sortedItems.find(i => i.equipSlot === slot && i.cost <= remainingBudget * 0.15);
         tryEquip(item);
    }

    // Artifacts for high levels
    const classLevel = build.levels.reduce((sum, l) => sum + l.level, 0);
    const role = getClassRole(build);

    const roleToUserMap: { [key: string]: string } = {
        melee: "Titan", // Generic melee
        arcane: "Worm that Walks", // Generic arcane
        divine: "Planetar", // Generic divine
    };
    
    if (classLevel >= 30) {
        const artifact1 = artifacts.find(a => a.user.includes(roleToUserMap[role] || "Titan"));
        if(artifact1) equipped.push({ ...artifact1, cost: 0, equipSlot: 'no-slot' });
    }
    if (classLevel >= 40) {
        const artifact2 = artifacts.find(a => a.user.includes(roleToUserMap[role] || "Titan") && !equipped.some(e => e.name === a.name));
        const fallback = artifacts.find(a => !equipped.some(e => e.name === a.name));
        if(artifact2) equipped.push({ ...artifact2, cost: 0, equipSlot: 'no-slot' });
        else if(fallback) equipped.push({ ...fallback, cost: 0, equipSlot: 'no-slot' });
    }

    return equipped;
}