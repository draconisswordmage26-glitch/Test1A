
// components/SpellPowerManager.tsx
import React, { useMemo } from 'react';
import { CharacterBuild } from '../types';
import Accordion from './Accordion';
import { getDetailedCasterInfo } from '../utils/casterHelpers';
import { autoSelectAbilities } from '../utils/autoAbilities';
import { baseSpells } from '../data/base_spells';
import { epicSpells } from '../data/epicSpells';
import { basePsionicPowers } from '../data/base_psionic_powers';
import { psionicPowers } from '../data/psionicPowers';
import { baseManeuvers } from '../data/base_maneuvers';
import { martialManeuvers } from '../data/martialManeuvers';

// Combine data for lookup
const allSpells = [...baseSpells, ...epicSpells];
const allPowers = [...basePsionicPowers, ...psionicPowers];
const allManeuvers = [...baseManeuvers, ...martialManeuvers];

interface SpellPowerManagerProps {
    build: CharacterBuild;
    setBuild: React.Dispatch<React.SetStateAction<CharacterBuild | null>>;
}

const SpellPowerManager: React.FC<SpellPowerManagerProps> = ({ build, setBuild }) => {
    
    const finalAbilities = useMemo(() => {
        const abilities = { ...build.base.abilities };
        build.selectedItems.forEach(item => {
            item.bonuses?.forEach(bonus => {
                if (bonus.type === 'enhancement' && (bonus.target in abilities)) {
                     (abilities as any)[bonus.target] += bonus.value;
                }
            });
        });
        return abilities;
    }, [build.base.abilities, build.selectedItems]);
    
    const sources = useMemo(() => getDetailedCasterInfo(build, finalAbilities), [build, finalAbilities]);

    const handleAutoSelect = () => {
        const { selectedSpells, selectedPowers, selectedManeuvers, abilitySelections } = autoSelectAbilities(build, finalAbilities);
        setBuild(prev => prev ? { ...prev, selectedSpells, selectedPowers, selectedManeuvers, abilitySelections } : null);
    };

    const renderAbilityList = (sourceName: string, abilities: string[]) => {
        if (!abilities || abilities.length === 0) return <p className="text-xs text-gray-500 italic">No abilities selected.</p>;

        // Group by level/discipline for display
        const grouped: Record<string, string[]> = {};
        abilities.forEach(name => {
            let key = "Unknown";
            const spell = allSpells.find(s => s.name === name);
            const power = allPowers.find(p => p.name === name);
            const maneuver = allManeuvers.find(m => m.name === name);

            if (spell) {
                // Try to find level for this class
                // We need to find the class abbreviation from the source name potentially, or just check all
                // Simplified: Just use the first level found or "Epic"
                if ('casterLevelReq' in spell) key = "Epic";
                else {
                     // HACK: We don't have the specific abbreviation easily available here without passing it down.
                     // We'll just list it under "Spells" if we can't determine level, or grab the first level found.
                     const levels = Object.values(spell.level);
                     key = levels.length > 0 ? `Level ${levels[0]}` : "Spells";
                }
            } else if (power) {
                key = `Level ${power.level.replace(/\D/g, '') || '?'}`;
            } else if (maneuver) {
                key = `${maneuver.discipline} ${maneuver.level}`;
            }

            if (!grouped[key]) grouped[key] = [];
            grouped[key].push(name);
        });

        // Sort keys (Level 0, Level 1... or Alphabetical for disciplines)
        const sortedKeys = Object.keys(grouped).sort((a, b) => {
            if (a.startsWith("Level") && b.startsWith("Level")) {
                return parseInt(a.replace(/\D/g, '')) - parseInt(b.replace(/\D/g, ''));
            }
            return a.localeCompare(b);
        });

        return (
            <div className="ml-2 mt-1 space-y-1">
                {sortedKeys.map(key => (
                    <p key={key} className="text-xs text-gray-300">
                        <span className="font-semibold text-gray-400">{key}:</span> {grouped[key].join(', ')}
                    </p>
                ))}
            </div>
        );
    };

    return (
        <Accordion title="Spells, Powers, & Maneuvers" startOpen={true}>
            <div className="p-4 bg-gray-800/50 rounded-b-lg space-y-4">
                <button onClick={handleAutoSelect} className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold transition-colors">Auto-Select Abilities</button>
                
                {sources.length === 0 && <p className="text-sm text-gray-400 italic">No classes selected that grant spells, powers, or maneuvers.</p>}

                {sources.map((source, index) => (
                    <div key={`${source.name}-${index}`} className="border-b border-gray-700 pb-2 mb-2">
                        <h5 className="text-sm font-bold text-blue-300">
                            {source.name} <span className="text-xs font-normal text-gray-400">({source.type}, Lvl {source.level})</span>
                        </h5>
                        
                        {/* Slots/Known Display */}
                        <div className="text-xs text-gray-500 mb-1">
                            {source.type === 'martial' && source.maneuverStats ? (
                                <span>Known: {source.maneuverStats.known} | Readied: {source.maneuverStats.readied} | Stances: {source.maneuverStats.stances}</span>
                            ) : (
                                <span>
                                    {source.known ? "Known: " : "Slots: "}
                                    {(source.known || source.slots).map((count, i) => {
                                        if (count === 0) return null;
                                        const lvl = (source.name === 'Paladin' || source.name === 'Ranger') ? i + 1 : i;
                                        return `L${lvl}:${count}`;
                                    }).filter(Boolean).join(' | ')}
                                </span>
                            )}
                        </div>

                        {/* Selected Abilities */}
                        <div className="bg-gray-900/30 p-2 rounded">
                            {renderAbilityList(source.name, build.abilitySelections?.[source.name] || [])}
                        </div>
                    </div>
                ))}
            </div>
        </Accordion>
    );
};

export default SpellPowerManager;
