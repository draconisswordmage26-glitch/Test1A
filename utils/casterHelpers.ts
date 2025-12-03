
// utils/casterHelpers.ts
import { CharacterBuild, AbilityName, BaseClass, PrestigeClass } from '../types';

export interface CasterInfo {
    arcane: { has: boolean; type: string; level: number; spells: number[]; spellsKnown?: number[] };
    divine: { has: boolean; type: string; level: number; spells: number[]; };
    psionic: { has: boolean; type: string; level: number; powers: number[]; };
    martial: { has: boolean; type: string; level: number; known: number; readied: number; stances: number; };
}

export interface AbilitySource {
    name: string; // Display name e.g. "Wizard", "Druid", "Warblade"
    className: string; // The actual class name for logic mapping
    type: 'arcane' | 'divine' | 'psionic' | 'martial' | 'invocation' | 'soulmeld';
    level: number; // Effective Caster/Manifester/Initiator level
    slots: number[]; // [L0, L1, L2...] or [Known, Readied, Stances] for martial
    known?: number[]; // For spontaneous casters
    listAbbrev?: string; // "Wiz", "Clr", etc.
    disciplines?: string[]; // For martial
    maneuverStats?: { known: number; readied: number; stances: number };
}

// Spells per Day table (as per SRD)
const spellsPerDayTable = {
    // level: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Wizard: [
        [3,1], [4,2], [4,2,1], [4,3,2], [4,3,2,1], [4,3,3,2], [4,4,3,2,1], [4,4,3,3,2], [4,4,4,3,2,1], [4,4,4,3,3,2],
        [4,4,4,4,3,2,1], [4,4,4,4,3,3,2], [4,4,4,4,4,3,2,1], [4,4,4,4,4,3,3,2], [4,4,4,4,4,4,3,2,1], [4,4,4,4,4,4,3,3,2],
        [4,4,4,4,4,4,4,3,2,1], [4,4,4,4,4,4,4,3,3,2], [4,4,4,4,4,4,4,4,3,3], [4,4,4,4,4,4,4,4,4,4],
        // Epic progression approximation
        [4,4,4,4,4,4,4,4,4,4], [4,4,4,4,4,4,4,4,4,4], [4,4,4,4,4,4,4,4,4,4], [4,4,4,4,4,4,4,4,4,4], [4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4], [4,4,4,4,4,4,4,4,4,4], [4,4,4,4,4,4,4,4,4,4], [4,4,4,4,4,4,4,4,4,4], [4,4,4,4,4,4,4,4,4,4]
    ],
    Sorcerer: [
        [5,3], [6,4], [6,5,3], [6,6,4,1], [6,6,5,2], [6,6,5,3], [6,6,6,4,1], [6,6,6,5,2], [6,6,6,5,3], [6,6,6,6,4,1],
        [6,6,6,6,5,2], [6,6,6,6,5,3], [6,6,6,6,6,4,1], [6,6,6,6,6,5,2], [6,6,6,6,6,5,3], [6,6,6,6,6,6,4,1],
        [6,6,6,6,6,6,5,2], [6,6,6,6,6,6,5,3], [6,6,6,6,6,6,6,4], [6,6,6,6,6,6,6,5],
        [6,6,6,6,6,6,6,6], [6,6,6,6,6,6,6,6], [6,6,6,6,6,6,6,6], [6,6,6,6,6,6,6,6]
    ],
    Bard: [
        [2], [3,0], [3,1], [4,2,0], [4,2,1], [4,3,2], [4,3,2,0], [4,3,3,1], [4,4,3,2], [4,4,3,2,0],
        [4,4,3,3,1], [4,4,4,3,2], [4,4,4,3,2,0], [4,4,4,3,3,1], [4,4,4,4,3,2], [4,4,4,4,3,2,0],
        [4,4,4,4,3,3,1], [4,4,4,4,4,3,2], [4,4,4,4,4,3,2,0], [4,4,4,4,4,3,3,1]
    ],
    Cleric: [
        [3,1], [4,2], [4,2,1], [5,3,2], [5,3,2,1], [5,3,3,2], [6,4,3,2,1], [6,4,3,3,2], [6,4,4,3,2,1], [6,5,4,3,3,2],
        [6,5,4,4,3,2,1], [6,5,4,4,3,3,2], [6,5,5,4,4,3,2,1], [6,5,5,4,4,3,3,2], [6,5,5,5,4,4,3,2,1], [6,5,5,5,4,4,3,3,2],
        [6,5,5,5,5,4,4,3,2,1], [6,5,5,5,5,4,4,3,3,2], [6,5,5,5,5,5,4,4,3,3], [6,6,5,5,5,5,4,4,4,4],
        [6,6,6,5,5,5,5,4,4,4], [6,6,6,6,5,5,5,5,4,4], [6,6,6,6,6,5,5,5,5,4], [6,6,6,6,6,6,5,5,5,5]
    ],
    // Half-Casters (Paladin/Ranger) - roughly CL/2
    Paladin: [
        [0], [0], [0], [0,0], [0,0], [0,1], [0,1], [0,1,0], [0,1,0], [0,1,1],
        [0,1,1,0], [0,1,1,1], [0,1,1,1], [0,2,1,1,0], [0,2,1,1,1], [0,2,2,1,1], [0,2,2,2,1], [0,3,2,2,1], [0,3,3,3,2], [0,3,3,3,3]
    ],
    Psion: [ // Powers Known
        [3,1], [5,2], [7,2,1], [9,3,2], [11,3,2,1], [13,3,3,2], [15,4,3,2,1], [17,4,3,3,2], [19,4,4,3,2,1], [21,5,4,3,3,2],
        [23,5,4,4,3,2,1], [25,5,4,4,3,3,2], [27,5,5,4,4,3,2,1], [29,5,5,4,4,3,3,2], [31,5,5,5,4,4,3,2,1], [33,5,5,5,4,4,3,3,2],
        [35,5,5,5,5,4,4,3,2,1], [37,5,5,5,5,4,4,3,3,2], [39,5,5,5,5,5,4,4,3,3], [41,6,5,5,5,5,4,4,4,4]
    ],
    PsychicWarrior: [ // Powers Known
        [1], [2], [3,1], [3,2], [4,2], [4,3,1], [5,3,2], [5,4,2], [6,4,3,1], [6,5,3,2],
        [7,5,4,2], [7,6,4,3,1], [8,6,5,3,2], [8,7,5,4,2], [9,7,6,4,3,1], [9,8,6,5,3,2],
        [10,8,7,5,4,2], [10,9,7,6,4,3], [11,9,8,6,5,3], [11,10,8,7,5,4]
    ],
    Warlock: [ // Invocations Known (approx)
        [1], [2], [2], [3], [3], [4], [4], [5], [5], [6], [6], [7], [7], [8], [8], [9], [9], [10], [10], [11]
    ]
};

const spellsKnownTable = {
    // Spells Known: [0, 1, 2, 3, 4, 5, 6] for Bard, [0, 1, ..., 9] for Sorc
    Sorcerer: [
        [4,2], [5,2], [5,3,1], [6,3,2], [6,4,2,1], [6,4,3,2], [6,5,3,2,1], [6,5,4,3,2], [6,5,4,3,2,1], [6,5,4,3,3,2],
        [6,5,4,4,3,2,1], [6,5,4,4,3,3,2], [6,5,5,4,4,3,2,1], [6,5,5,4,4,3,3,2], [6,6,5,5,4,4,3,2,1], [6,6,5,5,4,4,3,3,2],
        [6,6,5,5,5,4,4,3,2,1], [6,6,6,5,5,4,4,3,3,2], [6,6,6,5,5,5,4,4,3,3], [6,6,6,6,5,5,4,4,4,4],
        [9,6,6,6,6,5,5,5,5,5], [9,7,6,6,6,6,5,5,5,5], [9,7,7,6,6,6,6,5,5,5], [9,7,7,7,6,6,6,6,5,5]
    ],
    Bard: [
        [4,2], [5,3], [6,3,1], [6,4,2], [6,4,2,1], [6,4,3,2], [6,4,3,2,1], [6,4,3,3,2], [6,4,4,3,2,1], [6,4,4,3,3,2],
        [6,4,4,4,3,2,1], [6,4,4,4,3,3,2], [6,5,4,4,4,3,2,1], [6,5,4,4,4,3,3,2], [6,5,5,4,4,4,3,2,1], [6,5,5,4,4,4,3,3,2],
        [6,5,5,5,4,4,4,3,2,1], [6,5,5,5,4,4,4,3,3,2], [6,5,5,5,5,4,4,4,3,3], [6,5,5,5,5,5,4,4,4,4]
    ]
};

const maneuversKnownTable = {
    // level: [known, readied, stances]
    Warblade: [
        [3,3,1], [4,3,1], [5,4,2], [6,4,2], [7,5,2], [8,5,2], [9,6,3], [10,6,3],
        [11,7,3], [12,7,3], [13,8,4], [14,8,4], [15,9,4], [16,9,4], [17,10,5], [18,10,5],
        [19,11,5], [20,11,5]
    ],
    Crusader: [
        [5,2,1], [5,2,1], [6,3,2], [6,3,2], [7,3,2], [7,3,2], [8,4,2], [8,4,2],
        [9,4,3], [9,4,3], [10,5,3], [10,5,3], [11,5,3], [11,5,3], [12,6,4], [12,6,4],
        [13,6,4], [13,6,4], [14,7,4], [14,7,4]
    ]
};

const getBonusSpells = (abilityScore: number) => {
    const mod = Math.floor((abilityScore - 10) / 2);
    if (mod <= 0) return Array(9).fill(0);
    const bonuses = Array(9).fill(0);
    for (let i = 1; i <= 9; i++) {
        bonuses[i-1] = Math.floor((mod - i + 4) / 4);
    }
    return bonuses;
};

const classToAbbrev: Record<string, string> = {
    'Wizard': 'Wiz',
    'Sorcerer': 'Sor',
    'Bard': 'Brd',
    'Cleric': 'Clr',
    'Druid': 'Drd',
    'Paladin': 'Pal',
    'Ranger': 'Rgr',
    'Archivist': 'Clr', // Uses Cleric spell list
    'Psion': 'Psion',
    'Wilder': 'Psion',
    'Psychic Warrior': 'PsychicWarrior',
    'Warlock': 'Warlock',
};

const martialDisciplines: Record<string, string[]> = {
    'Warblade': ['Diamond Mind', 'Iron Heart', 'Stone Dragon', 'Tiger Claw', 'White Raven'],
    'Crusader': ['Devoted Spirit', 'Stone Dragon', 'White Raven'],
};

// Helper to count actual progression levels for a PrC
const getAdvancementCount = (cls: PrestigeClass, level: number): number => {
    let count = 0;
    const regex = /spellcasting|manifester|harmonious|hierophant|existing/i;
    const totalMatchingFeatures = cls.features.filter(f => regex.test(f.name)).length;
    
    // If the class is marked as advancing but has no specific "Spellcasting" features listed (data entry shortcut),
    // assume 1:1 progression.
    if (totalMatchingFeatures === 0) {
        return level; 
    }

    // Otherwise, count the specific features up to the current level.
    for (let i = 1; i <= level; i++) {
        const features = cls.features.filter(f => f.level === i);
        const advances = features.some(f => regex.test(f.name) || /spells per day|powers known/i.test(f.description));
        if (advances) count++;
    }
    
    return count;
};

export const getDetailedCasterInfo = (build: CharacterBuild, finalAbilities: any): AbilitySource[] => {
    const sources: AbilitySource[] = [];

    // 1. Identify Base Classes
    const baseLevels: Record<string, number> = {};
    const martialLevels: Record<string, number> = {}; // Track initiating class levels separately
    let totalMartialLevels = 0;
    let totalCharacterLevel = 0;

    const racialHd = parseInt(build.base.racialHitDice.split('d')[0], 10) || 0;
    totalCharacterLevel += racialHd;

    build.levels.forEach(l => {
        totalCharacterLevel += l.level;
        if ('classFeatures' in l.class) { // Base Class
             // Check for distinct spellcasting classes
             if (['Wizard', 'Sorcerer', 'Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Archivist', 'Psion', 'Psychic Warrior', 'Wilder', 'Warlock'].includes(l.class.name)) {
                 baseLevels[l.class.name] = (baseLevels[l.class.name] || 0) + l.level;
             }
             
             // Check for martial classes
             if (['Warblade', 'Crusader'].includes(l.class.name)) {
                 martialLevels[l.class.name] = (martialLevels[l.class.name] || 0) + l.level;
                 totalMartialLevels += l.level;
             }
        }
    });

    // 2. Handle Prestige Classes and distribute levels
    build.levels.forEach(l => {
        if (!('classFeatures' in l.class)) { // Prestige Class
            const pc = l.class as PrestigeClass;
            const levelsToAdd = getAdvancementCount(pc, l.level);

            // Assign Arcane/Divine advancement
            if (pc.advancesArcane) {
                // Include Warlock in arcane targets
                const target = Object.keys(baseLevels).find(c => ['Wizard', 'Sorcerer', 'Bard', 'Warlock'].includes(c));
                if (target) baseLevels[target] += levelsToAdd;
            }
            if (pc.advancesDivine) {
                 const target = Object.keys(baseLevels).find(c => ['Cleric', 'Druid', 'Archivist'].includes(c));
                 if (target) baseLevels[target] += levelsToAdd;
                 else {
                    // Check half-casters
                     const halfTarget = Object.keys(baseLevels).find(c => ['Paladin', 'Ranger'].includes(c));
                     if (halfTarget) baseLevels[halfTarget] += levelsToAdd;
                 }
            }
            // Very basic psionic check
            if (pc.name === 'Cerebremancer' || pc.name.includes('Psion') || pc.name.includes('Mind') || pc.name === 'Thrallherd' || pc.name === 'Slayer') {
                 const target = Object.keys(baseLevels).find(c => ['Psion', 'Wilder'].includes(c));
                 if (target) baseLevels[target] += levelsToAdd;
            }

            // Martial progression: PrCs add to Initiator Level (1:1 for martial PrCs, 0.5 for others)
            if (['Eternal Blade', 'Master of Nine', 'Bloodstorm Blade', 'Deepstone Sentinel', 'Ruby Knight Vindicator'].includes(pc.name) || pc.name.includes('Warblade') || pc.name.includes('Crusader') || pc.name.includes('Hurricane')) {
                 // Add to the primary martial class found
                 const target = Object.keys(martialLevels)[0];
                 if (target) martialLevels[target] += l.level;
                 else totalMartialLevels += l.level; 
            } 
        }
    });

    // 3. Build Source Objects
    
    // Spellcasters & Psionics
    Object.entries(baseLevels).forEach(([className, level]) => {
        let type: AbilitySource['type'] = 'arcane';
        if (['Cleric', 'Druid', 'Paladin', 'Ranger', 'Archivist'].includes(className)) type = 'divine';
        if (['Psion', 'Wilder', 'Psychic Warrior'].includes(className)) type = 'psionic';
        if (className === 'Warlock') type = 'invocation';

        // Adjust for half-casters
        let effectiveLevel = level;
        if (['Paladin', 'Ranger'].includes(className)) effectiveLevel = Math.floor(level / 2);

        const source: AbilitySource = {
            name: className,
            className: className,
            type,
            level: effectiveLevel,
            slots: [],
            listAbbrev: classToAbbrev[className]
        };

        const tableIndex = Math.min(29, Math.max(0, effectiveLevel - 1)); // Cap at 30 for tables
        
        if (type === 'psionic') {
             const table = (className === 'Psychic Warrior') ? spellsPerDayTable.PsychicWarrior : spellsPerDayTable.Psion;
             source.slots = table[Math.min(table.length-1, tableIndex)] || [];
        } else if (type === 'invocation') {
             const table = spellsPerDayTable.Warlock;
             // Warlocks don't have slots per se, but invocations known. We use slots array to represent count of knowns.
             // Map index 0 to Least, 1 to Lesser, 2 to Greater, 3 to Dark roughly, or just total known count
             const knownCount = table[Math.min(table.length-1, tableIndex)]?.[0] || 0;
             // Distribute roughly for auto-selection
             source.slots = [knownCount]; 
        } else {
             // Spells per day
             const tableKey = (className === 'Druid' || className === 'Archivist') ? 'Cleric' : className;
             const baseSlots = (spellsPerDayTable as any)[tableKey] ? (spellsPerDayTable as any)[tableKey][Math.min((spellsPerDayTable as any)[tableKey].length - 1, tableIndex)] : [];
             
             // Bonus spells
             const statMap: Record<string, number> = {
                 'Wizard': finalAbilities.int, 'Archivist': finalAbilities.int,
                 'Sorcerer': finalAbilities.cha, 'Bard': finalAbilities.cha, 'Paladin': finalAbilities.wis, 'Ranger': finalAbilities.wis,
                 'Cleric': finalAbilities.wis, 'Druid': finalAbilities.wis
             };
             const bonus = getBonusSpells(statMap[className] || 10);
             
             source.slots = (baseSlots || []).map((s: number, i: number) => s + (bonus[i] || 0));

             // Spells Known (Sor/Brd)
             if (className === 'Sorcerer' || className === 'Bard') {
                 const knownKey = className as keyof typeof spellsKnownTable;
                 source.known = spellsKnownTable[knownKey][Math.min(spellsKnownTable[knownKey].length - 1, tableIndex)];
             }
        }
        
        if (source.slots.length > 0) sources.push(source);
    });

    // Martial Adepts
    Object.entries(martialLevels).forEach(([className, classLevels]) => {
        // Initiator Level = Class Level + 1/2 Other Levels
        const otherLevels = totalCharacterLevel - classLevels;
        const initiatorLevel = classLevels + Math.floor(otherLevels / 2);
        
        const tableIndex = Math.min(19, classLevels - 1);
        const table = maneuversKnownTable[className as keyof typeof maneuversKnownTable];
        
        if (table && table[tableIndex]) {
            sources.push({
                name: className,
                className: className,
                type: 'martial',
                level: initiatorLevel,
                slots: [], // Not used for martial
                maneuverStats: {
                    known: table[tableIndex][0],
                    readied: table[tableIndex][1],
                    stances: table[tableIndex][2]
                },
                disciplines: martialDisciplines[className]
            });
        }
    });

    return sources;
};

// Legacy wrapper for backward compatibility
export const getCasterInfo = (build: CharacterBuild, finalAbilities: any): CasterInfo => {
    const sources = getDetailedCasterInfo(build, finalAbilities);
    const info: CasterInfo = {
        arcane: { has: false, type: 'Wizard', level: 0, spells: Array(10).fill(0) },
        divine: { has: false, type: 'Cleric', level: 0, spells: Array(10).fill(0) },
        psionic: { has: false, type: 'Psion', level: 0, powers: Array(10).fill(0) },
        martial: { has: false, type: 'Warblade', level: 0, known: 0, readied: 0, stances: 0 }
    };

    sources.forEach(s => {
        if ((s.type === 'arcane' || s.type === 'invocation') && !info.arcane.has) {
            info.arcane = { has: true, type: s.name, level: s.level, spells: s.slots, spellsKnown: s.known };
        }
        if (s.type === 'divine' && !info.divine.has) {
            info.divine = { has: true, type: s.name, level: s.level, spells: s.slots };
        }
        if (s.type === 'psionic' && !info.psionic.has) {
            info.psionic = { has: true, type: s.name, level: s.level, powers: s.slots };
        }
        if (s.type === 'martial' && !info.martial.has) {
            info.martial = { has: true, type: s.name, level: s.level, known: s.maneuverStats?.known || 0, readied: s.maneuverStats?.readied || 0, stances: s.maneuverStats?.stances || 0 };
        }
    });
    return info;
};
