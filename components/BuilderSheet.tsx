
// components/BuilderSheet.tsx
import React, { useMemo, useEffect } from 'react';
import { CharacterBuild, ClassFeature, Feat, MagicItem, BaseClass, PrestigeClass, AbilityName, SpecialAbility, ItemBonus, BonusType, EquippedWeapon, WeaponProperty, BaseSpell, EpicSpell, PsionicPower, MartialManeuver } from '../types';
import { feats as allFeats } from '../data/feats';
import { allSkills } from '../data/skills';
import { baseSpells } from '../data/base_spells';
import { epicSpells } from '../data/epicSpells';
import { basePsionicPowers } from '../data/base_psionic_powers';
import { psionicPowers } from '../data/psionicPowers';
import { baseManeuvers } from '../data/base_maneuvers';
import { martialManeuvers } from '../data/martialManeuvers';
import { getDetailedCasterInfo } from '../utils/casterHelpers';

const getAbilityModifier = (score: number) => Math.floor((score - 10) / 2);

const getBabForLevel = (progression: 'good' | 'average' | 'poor', level: number): number => {
    if (progression === 'good') return level;
    if (progression === 'average') return Math.floor(level * 0.75);
    return Math.floor(level * 0.5);
};

const getSaveForLevel = (progression: 'good' | 'poor', level: number): number => {
    if (progression === 'good') return Math.floor(level / 2) + 2;
    return Math.floor(level / 3);
};

const calculateCritRange = (baseCrit: string, properties: WeaponProperty[]): string => {
    if (!properties.some(p => p.name === 'Keen')) return baseCrit;

    const parts = baseCrit.split('/');
    const rangePart = parts[0];
    const multiplier = parts[1] || 'x2';

    if (rangePart.includes('-')) {
        const [start, end] = rangePart.split('-').map(Number);
        const rangeSize = end - start + 1;
        const newStart = Math.max(1, 21 - (rangeSize * 2));
        return `${newStart}-${end}/${multiplier}`;
    } else {
        // Handle "x3" or "20" cases, treating "x3" as threat 20
        let val = Number(rangePart);
        if (isNaN(val) && rangePart.startsWith('x')) {
            val = 20;
        }
        if (isNaN(val)) return baseCrit;
        
        // Double threat range (1 -> 2)
        const newStart = 19; 
        return `${newStart}-20/${multiplier}`;
    }
}

const generatePlainTextSheet = (build: CharacterBuild | null, derivedStats: any): string => {
    if (!build || !derivedStats) return "";

    let sheet = `${build.base.name}\n`;
    sheet += `${build.base.sizeAndType} (${build.levels.map(l => `${l.class.name} ${l.level}`).join(' / ') || 'No classes'})\n`;
    sheet += `Character Level: ${derivedStats.totalHd}\n`;
    sheet += `------------------------------\n\n`;
    
    sheet += `STATISTICS\n`;
    sheet += `HP: ${Math.floor(derivedStats.totalHp)} (${derivedStats.totalHd} HD)\n`;
    sheet += `AC: ${derivedStats.totalAC} (${derivedStats.acBreakdown})\n`;
    sheet += `  Touch: ${derivedStats.touchAC}, Flat-Footed: ${derivedStats.flatFootedAC}\n`;
    sheet += `Speed: ${build.base.speed}\n`;
    sheet += `Initiative: ${derivedStats.initiative >= 0 ? '+' : ''}${derivedStats.initiative}\n`;
    sheet += `Base Attack/Grapple: +${derivedStats.totalBab} / +${derivedStats.grapple}\n\n`;

    sheet += `ATTACK ROUTINE\n`;
    if (derivedStats.attackRoutines.length > 0) {
        derivedStats.attackRoutines.forEach((routine: any) => {
            sheet += `- ${routine.name}: ${routine.bonus} (${routine.damage}, ${routine.crit}, ${routine.type})\n`;
        });
    } else {
        sheet += "No weapons equipped.\n";
    }
    sheet += '\n';
    
    sheet += `Saves:\n`;
    sheet += `  Fort: +${derivedStats.finalSaves.fort} ${derivedStats.fortBreakdown}\n`;
    sheet += `  Ref: +${derivedStats.finalSaves.ref} ${derivedStats.refBreakdown}\n`;
    sheet += `  Will: +${derivedStats.finalSaves.will} ${derivedStats.willBreakdown}\n\n`;

    sheet += `Abilities:\n`;
    sheet += `  STR: ${derivedStats.finalAbilities.str} (${derivedStats.finalMods.str >= 0 ? '+' : ''}${derivedStats.finalMods.str})\n`;
    sheet += `  DEX: ${derivedStats.finalAbilities.dex} (${derivedStats.finalMods.dex >= 0 ? '+' : ''}${derivedStats.finalMods.dex})\n`;
    sheet += `  CON: ${build.base.abilities.con > 0 ? `${derivedStats.finalAbilities.con} (${derivedStats.finalMods.con >= 0 ? '+' : ''}${derivedStats.finalMods.con})` : '—'}\n`;
    sheet += `  INT: ${derivedStats.finalAbilities.int} (${derivedStats.finalMods.int >= 0 ? '+' : ''}${derivedStats.finalMods.int})\n`;
    sheet += `  WIS: ${derivedStats.finalAbilities.wis} (${derivedStats.finalMods.wis >= 0 ? '+' : ''}${derivedStats.finalMods.wis})\n`;
    sheet += `  CHA: ${derivedStats.finalAbilities.cha} (${derivedStats.finalMods.cha >= 0 ? '+' : ''}${derivedStats.finalMods.cha})\n\n`;
    
    sheet += `------------------------------\n`;
    sheet += `FEATS\n`;
    sheet += `Racial: ${build.base.feats.join(', ')}\n`;
    const sortedFeats = derivedStats.chosenFeats.sort((a: Feat, b: Feat) => a.name.localeCompare(b.name));
    if (sortedFeats.length > 0) {
        sheet += `Selected: ${sortedFeats.map((feat: Feat) => feat.name).join(', ')}\n`;
    }
    sheet += `\n`;

    sheet += `SKILLS\n`;
    if (derivedStats.finalSkills.length > 0) {
        sheet += derivedStats.finalSkills.map((skill: { name: string; bonus: number }) => `${skill.name} +${skill.bonus}`).join(', ');
        sheet += '\n';
    } else {
        sheet += "No skills allocated.\n";
    }
    sheet += `\n`;
    
    // Abilities
    if (derivedStats.groupedAbilities && Object.keys(derivedStats.groupedAbilities).length > 0) {
        sheet += `SPELLS, POWERS & MANEUVERS\n`;
        Object.entries(derivedStats.groupedAbilities).forEach(([sourceName, abilities]: [string, any]) => {
             sheet += `--- ${sourceName} ---\n`;
             Object.entries(abilities).forEach(([level, list]: [string, any]) => {
                 sheet += `${level}: ${list.join(', ')}\n`;
             });
             sheet += `\n`;
        });
    } else {
        // Fallback legacy
        if (build.selectedSpells?.length) sheet += `SPELLS\n${build.selectedSpells.join(', ')}\n\n`;
        if (build.selectedPowers?.length) sheet += `POWERS\n${build.selectedPowers.join(', ')}\n\n`;
        if (build.selectedManeuvers?.length) sheet += `MANEUVERS\n${build.selectedManeuvers.join(', ')}\n\n`;
    }


    sheet += `EQUIPMENT (Value: ${derivedStats.totalItemValue.toLocaleString()} gp)\n`;
    if (build.selectedItems.length > 0) {
        build.selectedItems.forEach(item => {
            sheet += `- ${item.name} (${item.cost > 0 ? `${item.cost.toLocaleString()} gp` : 'Artifact'})\n`;
        });
    } else {
        sheet += "No equipment selected.\n";
    }

    return sheet;
};


const BuilderSheet: React.FC<{ build: CharacterBuild, setSheetText: (text: string) => void }> = ({ build, setSheetText }) => {
    
    const allSpells = useMemo(() => [...baseSpells, ...epicSpells], []);
    const allPowers = useMemo(() => [...basePsionicPowers, ...psionicPowers], []);
    const allManeuvers = useMemo(() => [...baseManeuvers, ...martialManeuvers], []);

    const derivedStats = useMemo(() => {
        if (!build) return null;
        const { base, levels, selectedFeats, allocatedSkills, selectedItems, equippedWeapons } = build;

        const finalAbilities = { ...base.abilities };
        const itemBonuses: { [key: string]: { [key in BonusType]?: number } } = {};
        
        selectedItems.forEach(item => {
            item.bonuses?.forEach(bonus => {
                if (!itemBonuses[bonus.target]) itemBonuses[bonus.target] = {};
                itemBonuses[bonus.target][bonus.type] = Math.max(itemBonuses[bonus.target][bonus.type] || 0, bonus.value);
            });
        });

        (Object.keys(finalAbilities) as AbilityName[]).forEach(ability => {
            if (itemBonuses[ability]) {
                Object.values(itemBonuses[ability]).forEach(val => finalAbilities[ability] += val);
            }
        });
        
        const finalMods = {
            str: getAbilityModifier(finalAbilities.str),
            dex: getAbilityModifier(finalAbilities.dex),
            con: finalAbilities.con > 0 ? getAbilityModifier(finalAbilities.con) : 0,
            int: getAbilityModifier(finalAbilities.int),
            wis: getAbilityModifier(finalAbilities.wis),
            cha: getAbilityModifier(finalAbilities.cha),
        };

        const chosenFeats = Object.values(selectedFeats)
          .map(featName => allFeats.find(f => f.name === featName))
          .filter((f): f is Feat => f !== undefined);

        const racialHdCount = parseInt(base.racialHitDice.split('d')[0], 10) || 0;
        const racialHdDie = parseInt(base.racialHitDice.split('(')[0].split('d')[1], 10) || 8;
        let totalHp = racialHdCount > 0 ? (racialHdDie + (racialHdCount-1)*(racialHdDie/2+1)) + (racialHdCount * finalMods.con) : 0;
        
        let totalClassLevels = 0;
        levels.forEach(l => {
            for (let i = 0; i < l.level; i++) {
                const hit = (totalClassLevels === 0 && racialHdCount === 0) ? l.class.hitDie + finalMods.con : (l.class.hitDie / 2 + 1) + finalMods.con;
                totalHp += Math.max(1, hit);
                totalClassLevels++;
            }
        });

        const featHp = chosenFeats.reduce((acc, feat) => {
            if (feat.name.includes("Epic Toughness")) return acc + 30;
            if (feat.name === "Toughness") return acc + 3;
            return acc;
        }, 0);
        totalHp += featHp;
        
        let classFort = 0, classRef = 0, classWill = 0;
        levels.forEach(l => {
            classFort += getSaveForLevel(l.class.saves.fort, l.level);
            classRef += getSaveForLevel(l.class.saves.ref, l.level);
            classWill += getSaveForLevel(l.class.saves.will, l.level);
        });

        const resistanceBonus = itemBonuses.saves?.resistance || 0;
        const finalSaves = {
            fort: base.saves.fort + classFort + finalMods.con + resistanceBonus,
            ref: base.saves.ref + classRef + finalMods.dex + resistanceBonus,
            will: base.saves.will + classWill + finalMods.wis + resistanceBonus,
        };
        const fortBreakdown = `(${base.saves.fort} base + ${classFort} class + ${finalMods.con} con + ${resistanceBonus} res)`;
        const refBreakdown = `(${base.saves.ref} base + ${classRef} class + ${finalMods.dex} dex + ${resistanceBonus} res)`;
        const willBreakdown = `(${base.saves.will} base + ${classWill} class + ${finalMods.wis} wis + ${resistanceBonus} res)`;
        
        const armorBonus = itemBonuses.ac?.armor || 0;
        const shieldBonus = itemBonuses.ac?.shield || 0;
        const deflectionBonus = itemBonuses.ac?.deflection || 0;
        const naturalArmorBonus = base.naturalArmor + (itemBonuses.ac?.natural_armor || 0) + (chosenFeats.filter(f=>f.name === "Armor Skin").length);
        const insightBonus = itemBonuses.ac?.insight || 0;
        
        const totalAC = 10 + base.sizeModifier + finalMods.dex + naturalArmorBonus + armorBonus + shieldBonus + deflectionBonus + insightBonus;
        const touchAC = 10 + base.sizeModifier + finalMods.dex + deflectionBonus + insightBonus;
        const flatFootedAC = 10 + base.sizeModifier + naturalArmorBonus + armorBonus + shieldBonus + deflectionBonus + insightBonus;
        const acBreakdown = `10 + ${base.sizeModifier} size + ${finalMods.dex} dex + ${naturalArmorBonus} natural + ${armorBonus} armor + ${shieldBonus} shield + ${deflectionBonus} deflection + ${insightBonus} insight`;

        const totalBab = base.baseAttack + levels.reduce((sum, l) => sum + getBabForLevel(l.class.bab, l.level), 0);
        
        const sizeGrappleMod = base.sizeModifier === -1 ? 4 : base.sizeModifier === -2 ? 8 : base.sizeModifier === -4 ? 16 : 0;
        const grapple = totalBab + finalMods.str + sizeGrappleMod;

        const finalSkills = allSkills.map(skillInfo => {
            const ranks = allocatedSkills[skillInfo.name] || 0;
            if (ranks === 0) return null;
            const abilityMod = finalMods[skillInfo.ability as AbilityName];
            return { name: skillInfo.name, bonus: Math.floor(ranks) + abilityMod };
        }).filter((s): s is { name: string; bonus: number } => s !== null).sort((a,b) => a.name.localeCompare(b.name));
        
        const totalHd = racialHdCount + totalClassLevels;
        const totalItemValue = selectedItems.reduce((acc, item) => acc + item.cost, 0);
        const initiative = finalMods.dex + (chosenFeats.some(f => f.name === "Improved Initiative") ? 4 : 0);
        
        const attackRoutines = equippedWeapons.map(ew => {
            const { baseWeapon, enhancement, properties } = ew;
            const isMelee = baseWeapon.type === 'Melee';
            const isRanged = baseWeapon.type === 'Ranged';
            const hasWeaponFinesse = chosenFeats.some(f => f.name === 'Weapon Finesse');
            const isLightWeapon = baseWeapon.handedness === 'Light';
            const canFinesse = hasWeaponFinesse && isLightWeapon;
            
            let attackAbilityMod = isRanged ? finalMods.dex : finalMods.str;
            if (isMelee && canFinesse) {
                attackAbilityMod = Math.max(finalMods.dex, finalMods.str);
            }

            let damageAbilityMod = (baseWeapon.handedness === 'Two-Handed' && isMelee) ? Math.floor(finalMods.str * 1.5) : finalMods.str;
            if(isRanged) damageAbilityMod = 0; 

            const getFeatBonus = (featNameFragment: string, weaponName: string): number => {
                let bonus = 0;
                chosenFeats.forEach(feat => {
                    if (feat.name.includes(featNameFragment) && feat.name.toLowerCase().includes(weaponName.toLowerCase())) {
                        if (feat.name.includes('Epic')) bonus += (featNameFragment === 'Focus' ? 2 : 4);
                        else if (feat.name.includes('Greater')) bonus += (featNameFragment === 'Focus' ? 1 : 2);
                        else bonus += (featNameFragment === 'Focus' ? 1 : 2);
                    }
                });
                return bonus;
            };

            const weaponFocusBonus = getFeatBonus('Focus', baseWeapon.name);
            const weaponSpecBonus = getFeatBonus('Specialization', baseWeapon.name);
            
            let iteratives = [totalBab];
            let currentBab = totalBab;
            while(currentBab - 5 > 0) {
                currentBab -= 5;
                iteratives.push(currentBab);
            }
            if (properties.some(p => p.name === 'Speed')) {
                iteratives.unshift(totalBab);
            }
            
            const bonusString = iteratives.map(b => {
                const total = b + attackAbilityMod + enhancement + weaponFocusBonus;
                return `${total >= 0 ? '+' : ''}${total}`;
            }).join('/');

            let damageBonus = damageAbilityMod + enhancement + weaponSpecBonus;
            const propertyDamageParts: string[] = [];
            const critEffects: string[] = [];
            const specialNotes: string[] = [];

            properties.forEach(p => {
                switch(p.effect.type) {
                    case 'damage':
                        if (!isNaN(Number(p.effect.value))) {
                            damageBonus += Number(p.effect.value);
                        } else {
                            propertyDamageParts.push(`${p.effect.value} ${p.effect.condition || ''}`.trim());
                        }
                        if (p.effect.condition?.includes('crit')) {
                            critEffects.push(`+${p.effect.value}`);
                        }
                        break;
                    case 'ability_drain':
                         propertyDamageParts.push(p.effect.value || '');
                         break;
                    case 'crit':
                        if (p.effect.value?.includes('sonic')) critEffects.push(`+${p.effect.value}`);
                        break;
                    case 'special':
                        if (p.name === 'Disruption') specialNotes.push('vs Undead: Will save or destroyed');
                        if (p.name === 'Brilliant Energy') specialNotes.push('Ignores nonliving matter');
                        if (p.name === 'Ghost Touch') specialNotes.push('Affects incorporeal');
                        if (p.name === 'Seeking') specialNotes.push('Ignores concealment');
                        break;
                }
            });

            const baseDamageString = `${baseWeapon.damage_m}${damageBonus !== 0 ? `${damageBonus > 0 ? '+' : ''}${damageBonus}` : ''}`;
            const propertyDamageString = propertyDamageParts.length > 0 ? ` plus ${propertyDamageParts.join(' plus ')}` : '';
            const finalDamageString = `${baseDamageString}${propertyDamageString}`.trim();

            const critString = calculateCritRange(baseWeapon.crit, properties);
            const critEffectString = critEffects.length > 0 ? ` plus ${critEffects.join(', ')}` : '';
            const finalCritString = `${critString}${critEffectString}`;
            
            return {
                name: ew.name,
                bonus: bonusString,
                damage: finalDamageString,
                crit: finalCritString,
                type: `${baseWeapon.damage_type}${specialNotes.length > 0 ? ` (${specialNotes.join(', ')})` : ''}`,
            };
        });

        // Calculate Grouped Abilities for Display
        const sources = getDetailedCasterInfo(build, finalAbilities);
        const groupedAbilities: Record<string, Record<string, string[]>> = {};

        // If we have explicit selections, map them
        if (build.abilitySelections) {
             Object.entries(build.abilitySelections).forEach(([sourceName, abilities]: [string, string[]]) => {
                 const sourceDef = sources.find(s => s.name === sourceName);
                 const levelLabel = sourceDef ? `Level ${sourceDef.level}` : '';
                 const header = `${sourceName} ${levelLabel ? `(${levelLabel})` : ''}`;
                 
                 groupedAbilities[header] = {};

                 abilities.forEach(name => {
                     let groupKey = "General";
                     const spell = allSpells.find(s => s.name === name);
                     const power = allPowers.find(p => p.name === name);
                     const maneuver = allManeuvers.find(m => m.name === name);

                     if (spell) {
                         if ('casterLevelReq' in spell) groupKey = "Epic Spells";
                         else {
                            // Try to find level for this class specifically
                            // We approximate by listAbbrev
                            const abbrev = sourceDef?.listAbbrev || 'Wiz';
                            // If abbrev exists in level object, use it, else first one found
                            const spellLvl = spell.level[abbrev] ?? Object.values(spell.level)[0];
                            groupKey = `Level ${spellLvl}`;
                         }
                     } else if (power) {
                         // Extract level number from string "Psion/Wilder 1" -> "Level 1"
                         const match = power.level.match(/\d+/);
                         groupKey = match ? `Level ${match[0]}` : "Powers";
                     } else if (maneuver) {
                         groupKey = `${maneuver.discipline} ${maneuver.level}`;
                     }

                     if (!groupedAbilities[header][groupKey]) groupedAbilities[header][groupKey] = [];
                     groupedAbilities[header][groupKey].push(name);
                 });

                 // Sort keys
                 // Custom sort to put levels in order
                 const sortedKeys = Object.keys(groupedAbilities[header]).sort((a,b) => {
                     const getLvl = (s: string) => {
                         const m = s.match(/Level (\d+)/);
                         return m ? parseInt(m[1]) : -1;
                     };
                     const lvA = getLvl(a);
                     const lvB = getLvl(b);
                     if (lvA !== -1 && lvB !== -1) return lvA - lvB;
                     return a.localeCompare(b);
                 });
                 
                 const sortedGroup: Record<string, string[]> = {};
                 sortedKeys.forEach(k => sortedGroup[k] = groupedAbilities[header][k]);
                 groupedAbilities[header] = sortedGroup;
             });
        }

        return { finalAbilities, finalMods, totalHp, finalSaves, fortBreakdown, refBreakdown, willBreakdown, totalAC, acBreakdown, touchAC, flatFootedAC, totalBab, totalHd, grapple, chosenFeats, finalSkills, totalItemValue, initiative, attackRoutines, groupedAbilities };
    }, [build, allSpells, allPowers, allManeuvers]);
    
    useEffect(() => {
      if (build && derivedStats) {
        setSheetText(generatePlainTextSheet(build, derivedStats));
      }
    }, [build, derivedStats, setSheetText]);

    if (!build || !derivedStats) return <div id="builder-sheet-container" className="p-6 bg-gray-800 rounded-lg text-gray-400 italic">Select a baseline monster to begin building your character.</div>;
    
    const { base, levels, selectedItems } = build;
    const allClassFeatures: ClassFeature[] = levels.flatMap(l => {
        const features = 'classFeatures' in l.class ? l.class.classFeatures : l.class.features;
        return features.filter(feature => feature.level <= l.level);
    });
    
    const allSpecialAbilities: SpecialAbility[] = [...base.specialAttacks, ...base.specialQualities];

    return (
        <div id="builder-sheet-container" className="bg-gray-800 print-bg-white p-6 rounded-lg text-gray-200 print-text-black">
            <h2 className="text-3xl font-bold text-blue-400 print-text-black mb-2">{base.name}</h2>
            <p className="mb-4 italic text-gray-400 print-text-black">{base.sizeAndType} / {levels.map(l => `${l.class.name} ${l.level}`).join(' / ')} (Character Level {derivedStats.totalHd})</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 mb-4 text-sm">
                <div><strong>HP:</strong> {Math.floor(derivedStats.totalHp)} ({derivedStats.totalHd} HD)</div>
                <div><strong>Initiative:</strong> {derivedStats.initiative >= 0 ? '+' : ''}{derivedStats.initiative}</div>
                <div><strong>Speed:</strong> {base.speed}</div>
                <div className="col-span-full"><strong>AC:</strong> {derivedStats.totalAC} <span className="text-gray-400 text-xs">{derivedStats.acBreakdown}</span></div>
                <div><strong>Touch/Flat-Footed:</strong> {derivedStats.touchAC} / {derivedStats.flatFootedAC}</div>
                <div className="col-span-2"><strong>Base Attack/Grapple:</strong> +{derivedStats.totalBab} / +{derivedStats.grapple}</div>
            </div>

            <div className="mb-4">
                <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Attack Routine</h4>
                {derivedStats.attackRoutines.length > 0 ? (
                    <ul className="list-disc list-inside text-sm space-y-1">
                    {derivedStats.attackRoutines.map((routine: any, i: number) => (
                        <li key={i}><strong>{routine.name}:</strong> {routine.bonus} ({routine.damage}, Crit: {routine.crit}, Type: {routine.type})</li>
                    ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-400 italic">No weapons equipped.</p>
                )}
            </div>

            <div className="grid grid-cols-6 gap-2 text-center border-t border-b border-gray-700 print-border-gray py-2 my-4">
                <div><strong>STR</strong><br/>{derivedStats.finalAbilities.str} ({derivedStats.finalMods.str >= 0 ? '+' : ''}{derivedStats.finalMods.str})</div>
                <div><strong>DEX</strong><br/>{derivedStats.finalAbilities.dex} ({derivedStats.finalMods.dex >= 0 ? '+' : ''}{derivedStats.finalMods.dex})</div>
                <div><strong>CON</strong><br/>{base.abilities.con > 0 ? `${derivedStats.finalAbilities.con} (${derivedStats.finalMods.con >= 0 ? '+' : ''}${derivedStats.finalMods.con})` : '—'}</div>
                <div><strong>INT</strong><br/>{derivedStats.finalAbilities.int} ({derivedStats.finalMods.int >= 0 ? '+' : ''}${derivedStats.finalMods.int})</div>
                <div><strong>WIS</strong><br/>{derivedStats.finalAbilities.wis} ({derivedStats.finalMods.wis >= 0 ? '+' : ''}{derivedStats.finalMods.wis})</div>
                <div><strong>CHA</strong><br/>{derivedStats.finalAbilities.cha} ({derivedStats.finalMods.cha >= 0 ? '+' : ''}${derivedStats.finalMods.cha})</div>
            </div>
            
             <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-4 mb-4 text-sm">
                <div><strong>Fort:</strong> +{derivedStats.finalSaves.fort} <span className="text-gray-400 text-xs">{derivedStats.fortBreakdown}</span></div>
                <div><strong>Ref:</strong> +{derivedStats.finalSaves.ref} <span className="text-gray-400 text-xs">{derivedStats.refBreakdown}</span></div>
                <div><strong>Will:</strong> +{derivedStats.finalSaves.will} <span className="text-gray-400 text-xs">{derivedStats.willBreakdown}</span></div>
            </div>

            <div className="mb-4">
              <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Feats</h4>
              <p className="text-sm text-gray-400 mb-1"><strong>Racial:</strong> {base.feats.join(', ')}</p>
              <p className="text-sm"><strong>Selected:</strong> {derivedStats.chosenFeats.length > 0 ? derivedStats.chosenFeats.map(f => f.name).join(', ') : "None"}</p>
            </div>
            
            <div className="mb-4">
                <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Skills</h4>
                <p className="text-sm">{derivedStats.finalSkills.map(s => `${s.name} +${s.bonus}`).join(', ')}</p>
            </div>
            
            {Object.keys(derivedStats.groupedAbilities).length > 0 && (
                <div className="mb-4">
                     <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Spells, Powers & Maneuvers</h4>
                     {Object.entries(derivedStats.groupedAbilities).map(([sourceName, abilities]: [string, any]) => (
                        <div key={sourceName} className="mb-2">
                            <h5 className="text-sm font-bold text-gray-300 print-text-black underline">{sourceName}</h5>
                            {Object.entries(abilities).map(([level, list]: [string, any]) => (
                                <p key={level} className="text-sm ml-2"><strong className="text-gray-400 print-text-black">{level}:</strong> {list.join(', ')}</p>
                            ))}
                        </div>
                     ))}
                </div>
            )}
            
            {/* Fallback for legacy display if groupedAbilities is empty but lists exist */}
             {Object.keys(derivedStats.groupedAbilities).length === 0 && (build.selectedSpells?.length || 0) > 0 && (
                <div className="mb-4">
                     <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Spells Known (Legacy View)</h4>
                     <p className="text-sm">{build.selectedSpells?.join(', ')}</p>
                </div>
            )}


             <div className="mb-4">
                <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Special Abilities</h4>
                <ul className="list-disc list-inside text-sm">
                    {[...allSpecialAbilities.map(a => `(Racial) ${a.name}: ${a.description}`), ...allClassFeatures.map(f => `(${f.level}) ${f.name}: ${f.description}`)].map((text, i) => <li key={i}>{text}</li>)}
                </ul>
            </div>
            
            <div className="mb-4">
                 <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Magic Items (Value: {derivedStats.totalItemValue.toLocaleString()} gp)</h4>
                <ul className="list-disc list-inside text-sm">
                    {selectedItems.map(item => <li key={item.name}><strong>{item.name}</strong> ({item.cost > 0 ? `${item.cost.toLocaleString()} gp` : 'Artifact'})</li>)}
                </ul>
            </div>
        </div>
    );
};

export default BuilderSheet;