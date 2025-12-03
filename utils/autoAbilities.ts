
// utils/autoAbilities.ts
import { CharacterBuild } from '../types';
import { getDetailedCasterInfo } from './casterHelpers';
import { baseSpells } from '../data/base_spells';
import { epicSpells } from '../data/epicSpells';
import { basePsionicPowers } from '../data/base_psionic_powers';
import { psionicPowers } from '../data/psionicPowers';
import { baseManeuvers } from '../data/base_maneuvers';
import { martialManeuvers } from '../data/martialManeuvers';

const allSpells = [...baseSpells, ...epicSpells];
const allPowers = [...basePsionicPowers, ...psionicPowers];
const allManeuvers = [...baseManeuvers, ...martialManeuvers];

const shuffleArray = <T>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export function autoSelectAbilities(build: CharacterBuild, finalAbilities: any): { 
    selectedSpells: string[], 
    selectedPowers: string[], 
    selectedManeuvers: string[],
    abilitySelections: { [sourceName: string]: string[] } 
} {
    const sources = getDetailedCasterInfo(build, finalAbilities);
    
    // Consolidated lists for backward compatibility
    const allSelectedSpells: string[] = [];
    const allSelectedPowers: string[] = [];
    const allSelectedManeuvers: string[] = [];
    const abilitySelections: { [sourceName: string]: string[] } = {};

    sources.forEach(source => {
        const selectedForSource: string[] = [];

        if (source.type === 'arcane' || source.type === 'divine') {
            const abbrev = source.listAbbrev || 'Wiz';
            const slots = source.known || source.slots; // Use spells known if available, else slots

            slots.forEach((count, levelIndex) => {
                // levelIndex 0 = Spell Level 0 (Cantrips/Orisons) or Level 1 for some tables?
                // Standard tables usually are [L0, L1, L2...].
                // Paladin/Ranger tables in helper start at L1.
                
                let spellLevel = levelIndex;
                if (source.name === 'Paladin' || source.name === 'Ranger') {
                    spellLevel = levelIndex + 1;
                }

                if (count > 0) {
                     // Filter spells that are on this class list
                     const available = shuffleArray(baseSpells.filter(s => s.level[abbrev] === spellLevel));
                     
                     // Epic spells
                     if (source.level >= 21 && spellLevel === 9) {
                         const epicAvailable = shuffleArray(epicSpells);
                         // Just grab a couple epic spells if we are high level
                         if (epicAvailable.length > 0) {
                            for(let k=0; k<Math.min(2, epicAvailable.length); k++) {
                                if(!selectedForSource.includes(epicAvailable[k].name)) {
                                    selectedForSource.push(epicAvailable[k].name);
                                    allSelectedSpells.push(epicAvailable[k].name);
                                }
                            }
                         }
                     }

                     if (available.length > 0) {
                        // For prepared casters (slots), we pick 'count' spells. 
                        // For spontaneous (known), we pick 'count' spells.
                        // Logic is roughly the same for auto-generation.
                        for (let i = 0; i < count; i++) {
                            const spell = available[i % available.length];
                            if (!selectedForSource.includes(spell.name)) {
                                selectedForSource.push(spell.name);
                                allSelectedSpells.push(spell.name);
                            }
                        }
                     }
                }
            });
        }

        else if (source.type === 'psionic') {
            const powersKnown = source.slots; // Table returns powers known
             // Psion/Wilder levels in data are strings like "Psion/Wilder 1".
             // Psychic Warriors use "Psion/Wilder" list generally in this data set? 
             // Actually basePsionicPowers has `level: "Psion/Wilder 1"`.
             // We need to be loose with matching if we don't have specific PsyWar data.
             
            powersKnown.forEach((count, levelIndex) => {
                const powerLevel = levelIndex + 1;
                // Basic filter: does the level string contain the number?
                // e.g. "Psion/Wilder 1" contains "1". 
                // Note: This is imperfect but works for the current data structure.
                const available = shuffleArray(allPowers.filter(p => p.level.includes(`${powerLevel}`)));
                
                if (available.length > 0) {
                    for (let i = 0; i < count; i++) {
                         const power = available[i % available.length];
                         if (!selectedForSource.includes(power.name)) {
                             selectedForSource.push(power.name);
                             allSelectedPowers.push(power.name);
                         }
                    }
                }
            });
        }

        else if (source.type === 'martial' && source.maneuverStats) {
            const { known, stances } = source.maneuverStats;
            const disciplines = source.disciplines || [];
            const maxLevel = Math.min(9, Math.ceil(source.level / 2));

            // Select Stances
            const availableStances = shuffleArray(allManeuvers.filter(m => disciplines.includes(m.discipline) && m.type === 'Stance' && m.level <= maxLevel));
            for(let i=0; i < stances && i < availableStances.length; i++) {
                selectedForSource.push(availableStances[i].name);
                allSelectedManeuvers.push(availableStances[i].name);
            }

            // Select Maneuvers
            const availableManeuversList = shuffleArray(allManeuvers.filter(m => disciplines.includes(m.discipline) && m.type !== 'Stance' && m.level <= maxLevel));
            
            // Simple distribution: try to get highest level first
            let remainingKnown = known;
            // Sort by level descending to pick high level stuff first
            availableManeuversList.sort((a, b) => b.level - a.level);
            
            // Pick diverse maneuvers
            for (const m of availableManeuversList) {
                if (remainingKnown <= 0) break;
                // Check if we already have it (unlikely with shuffle, but safe)
                if (!selectedForSource.includes(m.name)) {
                     selectedForSource.push(m.name);
                     allSelectedManeuvers.push(m.name);
                     remainingKnown--;
                }
            }
        }

        if (selectedForSource.length > 0) {
            abilitySelections[source.name] = selectedForSource.sort();
        }
    });

    return { 
        selectedSpells: [...new Set(allSelectedSpells)].sort(), 
        selectedPowers: [...new Set(allSelectedPowers)].sort(), 
        selectedManeuvers: [...new Set(allSelectedManeuvers)].sort(),
        abilitySelections
    };
}
