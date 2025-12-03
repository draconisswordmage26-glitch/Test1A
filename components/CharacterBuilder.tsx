
// components/CharacterBuilder.tsx
import React, { useState, useMemo, useCallback } from 'react';
import { CharacterBuild, BaselineMonster, BaseClass, PrestigeClass, MagicItem, AppliedClassLevel, Feat, FeatPrerequisites, PrestigeClassPrerequisites, AbilityName, EquippedWeapon, Weapon, WeaponProperty } from '../types';
import { baselineMonsters } from '../data/baselineMonsters';
import { monsters } from '../data/monsters';
import { baseClasses } from '../data/baseClasses';
import { prestigeClasses } from '../data/prestigeClasses';
import { feats as allFeats } from '../data/feats';
import { allSkills } from '../data/skills';
import { wealthByLevel } from '../data/wealthByLevel';
import { getFeatSlots, autoSelectFeats, FeatSlot } from '../utils/autoFeats';
import { calculateTotalSkillPoints, autoAllocateSkills } from '../utils/autoSkills';
import { autoEquip } from '../utils/autoEquip';
import BuilderSheet from './BuilderSheet';
import Accordion from './Accordion';
import { allWeapons } from '../data/weapons';
import { allWeaponProperties } from '../data/weaponProperties';
import SpellPowerManager from './SpellPowerManager';

const getBabForLevel = (progression: 'good' | 'average' | 'poor', level: number): number => {
    if (progression === 'good') return level;
    if (progression === 'average') return Math.floor(level * 0.75);
    return Math.floor(level * 0.5);
};


const getMinimumLevelForPrereqs = (
    targetPc: PrestigeClass,
    providingClass: BaseClass | PrestigeClass,
    currentBuildState: {
        base: BaselineMonster;
        levels: AppliedClassLevel[];
    }
): number => {
    let minLevel = 0;
    const p = targetPc.prerequisites;
    if (!p) return 1;

    // 1. BAB requirement
    if (p.bab) {
        const babFromOtherSources = currentBuildState.base.baseAttack + 
            currentBuildState.levels
                .reduce((sum, l) => sum + getBabForLevel(l.class.bab, l.level), 0);
        
        const babNeeded = p.bab - babFromOtherSources;
        if (babNeeded > 0) {
            const babProg = providingClass.bab;
            let levelForBab = 0;
            if (babProg === 'good') levelForBab = babNeeded;
            else if (babProg === 'average') levelForBab = Math.ceil(babNeeded / 0.75);
            else levelForBab = Math.ceil(babNeeded / 0.5);
            minLevel = Math.max(minLevel, levelForBab);
        }
    }

    // 2. Skills requirement
    if (p.skills) {
        const allRanks = Object.values(p.skills).map(r => {
            if (typeof r === 'number') return r;
            if (typeof r === 'object') return Math.max(...Object.values(r as object));
            return 0;
        });
        const maxRanksNeeded = Math.max(0, ...allRanks);
        if (maxRanksNeeded > 0) {
            // Heuristic: Min level to get X ranks is usually X if it's a class skill.
            const levelForSkill = maxRanksNeeded;
            minLevel = Math.max(minLevel, levelForSkill);
        }
    }
    
    // 3. Spells/Powers requirement
    if (p.spells) {
        const role = 'role' in providingClass ? providingClass.role : undefined;
        
        const isArcaneProvider = role === 'arcane' || ('advancesArcane' in providingClass && providingClass.advancesArcane);
        const isDivineProvider = role === 'divine' || ('advancesDivine' in providingClass && providingClass.advancesDivine);
        const isPsionicProvider = role === 'psionic';
        
        if (p.spells.arcane && isArcaneProvider) {
            const levelForSpells = (p.spells.arcane * 2) - 1;
            minLevel = Math.max(minLevel, levelForSpells);
        }
        if (p.spells.divine && isDivineProvider) {
            const levelForSpells = (p.spells.divine * 2) - 1;
            minLevel = Math.max(minLevel, levelForSpells);
        }
        if (p.spells.psionic && isPsionicProvider) {
            const levelForPowers = (p.spells.psionic * 2) - 1;
            minLevel = Math.max(minLevel, levelForPowers);
        }
    }

    // 4. Special abilities requirement
    if (p.special) {
        const features = 'classFeatures' in providingClass ? providingClass.classFeatures : providingClass.features;
        
        const findMinLevelForFeature = (req: string): number => {
            const feature = features.find(f => f.name.toLowerCase().includes(req.toLowerCase()));
            return feature ? feature.level : 99; // Return a high number if not found
        };

        if (p.special.includes('|')) { // OR logic
            const specials = p.special.split('|').map(s => s.trim());
            const minLevelForOr = Math.min(...specials.map(sp => findMinLevelForFeature(sp)));
            if (minLevelForOr < 99) {
                minLevel = Math.max(minLevel, minLevelForOr);
            }
        } else {
             const specials = p.special.split(',').map(s => s.trim());
             specials.forEach(sp => {
                 const levelFound = findMinLevelForFeature(sp);
                 if (levelFound < 99) {
                     minLevel = Math.max(minLevel, levelFound);
                 }
             });
        }
    }
    
    return Math.max(1, minLevel);
};

const checkClassPrereqs = (pc: PrestigeClass, prereqStats: any | null, build: CharacterBuild | null): string[] => {
    const unmet: string[] = [];
    if (!prereqStats || !build) return ["Character data not loaded."];
    const p = pc.prerequisites;
    if (!p) return [];

    const { totalBab, takenFeats, allocatedSkills, hasSpecial, maxArcaneSpell, maxDivineSpell, maxPsionicPower, finalAbilities } = prereqStats;

    if (p.bab && totalBab < p.bab) {
        unmet.push(`BAB +${p.bab} (Currently: +${totalBab})`);
    }

    if (p.feats) {
        p.feats.forEach(f => {
            if (Array.isArray(f)) { // It's an OR condition
                if (!f.some(orFeat => takenFeats.includes(orFeat))) {
                    unmet.push(`Feat: ${f.join(' or ')}`);
                }
            } else { // It's an AND condition
                if (!takenFeats.includes(f)) {
                    unmet.push(`Feat: ${f}`);
                }
            }
        });
    }

    if (p.abilityScores) {
        for (const [ability, score] of Object.entries(p.abilityScores)) {
            if (finalAbilities[ability as AbilityName] < score!) {
                unmet.push(`${(ability as string).toUpperCase()} ${score}+ (Currently: ${finalAbilities[ability as AbilityName]})`);
            }
        }
    }

    if (p.skills) {
        for (const [skill, ranksOrObj] of Object.entries(p.skills)) {
            if (skill === '__or__') {
                const orSkills = ranksOrObj as { [key: string]: number };
                const met = Object.entries(orSkills).some(([orSkill, orRanks]) => (allocatedSkills[orSkill] || 0) >= orRanks);
                if (!met) {
                    unmet.push(Object.entries(orSkills).map(([s, r]) => `${r} ranks in ${s}`).join(' or '));
                }
            } else {
                const ranks = ranksOrObj as number;
                if ((allocatedSkills[skill] || 0) < ranks) {
                    unmet.push(`${ranks} ranks in ${skill} (Currently: ${allocatedSkills[skill] || 0})`);
                }
            }
        }
    }
    
    if (p.spells?.arcane && maxArcaneSpell < p.spells.arcane) {
        unmet.push(`Ability to cast ${p.spells.arcane}th-level arcane spells (Currently: ${maxArcaneSpell}th)`);
    }
    if (p.spells?.divine && maxDivineSpell < p.spells.divine) {
        unmet.push(`Ability to cast ${p.spells.divine}th-level divine spells (Currently: ${maxDivineSpell}th)`);
    }
    if (p.spells?.psionic && maxPsionicPower < p.spells.psionic) {
        unmet.push(`Ability to manifest ${p.spells.psionic}th-level psionic powers (Currently: ${maxPsionicPower}th)`);
    }

    if (p.special) {
        if (p.special.includes('|')) { // OR logic
            const specials = p.special.split('|').map(s => s.trim());
            if (!specials.some(sp => hasSpecial(sp))) {
                unmet.push(`Special: ${specials.join(' or ')}`);
            }
        } else { // AND logic
            const specials = p.special.split(',').map(s => s.trim());
            specials.forEach(sp => {
                if (!hasSpecial(sp)) {
                    unmet.push(`Special: ${sp}`);
                }
            });
        }
    }

    if (p.alignment && p.alignment.length > 0) {
        const currentAlignment = build.base.alignment;
        const requiredAlignments = p.alignment;

        if (requiredAlignments.includes("Within one step of deity")) {
             unmet.push(`Alignment: Within one step of deity (Deity selection not implemented)`);
        } else if (!requiredAlignments.some(req => req.toLowerCase() === currentAlignment.toLowerCase())) {
             unmet.push(`Alignment: ${requiredAlignments.join(' or ')} (Currently: ${currentAlignment})`);
        }
    }

    if (p.type && !build.base.sizeAndType.toLowerCase().includes(p.type.toLowerCase())) {
        unmet.push(`Type: ${p.type} (Currently: ${build.base.sizeAndType})`);
    }

    return unmet;
};


const getClassRole = (build: CharacterBuild): string => {
    if (build.levels.length === 0) return 'melee';
    const primaryClass = build.levels[0].class;
    return 'role' in primaryClass ? primaryClass.role || 'melee' : 'melee';
};

const CharacterBuilder: React.FC = () => {
    const [build, setBuild] = useState<CharacterBuild | null>(null);
    const [sheetText, setSheetText] = useState("");
    const [newWeapon, setNewWeapon] = useState<{ baseWeaponName: string; enhancement: number; selectedProperties: string[] }>({ baseWeaponName: "", enhancement: 0, selectedProperties: [] });

    const derivedStatsForPrereqs = useMemo(() => {
        if (!build) return null;

        const { base, levels, selectedItems, allocatedSkills, selectedFeats } = build;

        const finalAbilities = { ...base.abilities };
        selectedItems.forEach(item => {
            item.bonuses?.forEach(bonus => {
                if (bonus.type === 'enhancement' && bonus.target in finalAbilities) {
                    finalAbilities[bonus.target as AbilityName] = Math.max(
                        finalAbilities[bonus.target as AbilityName],
                        base.abilities[bonus.target as AbilityName] + bonus.value
                    );
                }
            });
        });

        const totalClassLevels = levels.reduce((sum, l) => sum + l.level, 0);
        const racialHd = parseInt(base.racialHitDice.split('d')[0], 10) || 0;
        const totalHd = racialHd + totalClassLevels;
        
        const totalBab = base.baseAttack + levels.reduce((sum, l) => {
            const babProg = l.class.bab;
            if (babProg === 'good') return sum + l.level;
            if (babProg === 'average') return sum + Math.floor(l.level * 0.75);
            return sum + Math.floor(l.level * 0.5);
        }, 0);

        const takenFeats = [...base.feats, ...Object.values(selectedFeats)];

        const specialQualitiesAndFeatures = [
            ...levels.flatMap(l => {
                const features = 'classFeatures' in l.class ? l.class.classFeatures : l.class.features;
                return features.filter(f => f.level <= l.level).map(f => f.name.toLowerCase());
            }),
            ...base.specialQualities.map(sq => sq.name.toLowerCase()),
            ...base.specialAttacks.map(sa => sa.name.toLowerCase()),
        ];
        const hasSpecial = (req: string) => specialQualitiesAndFeatures.some(fName => fName.includes(req.toLowerCase()));
        
        let arcaneCasterLevel = 0;
        let divineCasterLevel = 0;
        let psionicCasterLevel = 0;

        levels.forEach(l => {
            const classDef = l.class;
            const role = 'role' in classDef ? classDef.role : undefined;
            if (role === 'arcane') arcaneCasterLevel += l.level;
            if (role === 'divine') divineCasterLevel += l.level;
            if (role === 'psionic') psionicCasterLevel += l.level;
            if ('advancesArcane' in classDef && classDef.advancesArcane) arcaneCasterLevel += l.level;
            if ('advancesDivine' in classDef && classDef.advancesDivine) divineCasterLevel += l.level;
            // Note: advancesPsionic is not a property yet, add if needed.
        });

        const getMaxSpellLevel = (cl: number) => cl > 0 ? Math.min(9, Math.floor((cl + 1) / 2)) : 0;
        const getMaxPsionicPowerLevel = (ml: number) => ml > 0 ? Math.min(9, Math.floor((ml + 1) / 2)) : 0;
        
        const levelAdjustment = parseInt(build.base.levelAdjustment, 10) || 0;
        const effectiveCharacterLevel = racialHd + totalClassLevels + levelAdjustment;


        return { totalBab, takenFeats, finalAbilities, allocatedSkills, totalClassLevels, totalHd, hasSpecial, maxArcaneSpell: getMaxSpellLevel(arcaneCasterLevel), maxDivineSpell: getMaxSpellLevel(divineCasterLevel), maxPsionicPower: getMaxPsionicPowerLevel(psionicCasterLevel), effectiveCharacterLevel };
    }, [build]);


    const isFeatAvailable = useCallback((feat: Feat) => {
        if (!derivedStatsForPrereqs || !build) return false;
        const { totalBab, takenFeats, finalAbilities, totalClassLevels, hasSpecial, allocatedSkills } = derivedStatsForPrereqs;
        if (feat.isEpic && totalClassLevels < 21) return false;
        const p = feat.prerequisites;
        if (!p) return true;

        if (p.bab && totalBab < p.bab) return false;
        if (p.feats && !p.feats.every(f => takenFeats.includes(f))) return false;
        if (p.abilityScores) {
            for (const [ability, score] of Object.entries(p.abilityScores)) {
                if (finalAbilities[ability as AbilityName] < score!) return false;
            }
        }
        if (p.skills) {
            for (const [skill, ranks] of Object.entries(p.skills)) {
                if ((allocatedSkills[skill] || 0) < ranks) return false;
            }
        }
        if (p.special && !hasSpecial(p.special)) return false;
        
        return true;
    }, [derivedStatsForPrereqs, build]);
    
    // UI Handlers
    const handleSelectBase = (monsterName: string) => {
        const selectedMonster = baselineMonsters.find(m => m.name === monsterName);
        if (selectedMonster) {
            setBuild({
                base: selectedMonster,
                levels: [],
                selectedFeats: {},
                allocatedSkills: {},
                selectedItems: [],
                equippedWeapons: [],
                selectedSpells: [],
                selectedPowers: [],
                selectedManeuvers: [],
            });
        }
    };
    const handleAddClass = (className: string) => {
        if (!build || build.levels.reduce((acc, l) => acc + l.level, 0) >= 40) return;
        const allClassDefs = [...baseClasses, ...prestigeClasses];
        const classDef = allClassDefs.find(c => c.name === className);
        if (classDef && !build.levels.find(l => l.class.name === className)) {
            setBuild({ ...build, levels: [...build.levels, { class: classDef, level: 1 }], selectedFeats: {}, allocatedSkills: {} });
        }
    };

    const handleSetGoal = useCallback((goalClassName: string) => {
        if (!build) return;
    
        const goalClass = prestigeClasses.find(pc => pc.name === goalClassName);
        if (!goalClass) return;
    
        // 1. Get the full, ordered progression chain of class definitions
        const progressionChain: (BaseClass | PrestigeClass)[] = [];
        const queue: string[] = [goalClassName];
        const processed = new Set<string>();
        const allClassDefs = [...baseClasses, ...prestigeClasses];
    
        while (queue.length > 0) {
            const currentClassName = queue.shift();
            if (!currentClassName || processed.has(currentClassName)) continue;
            processed.add(currentClassName);
    
            const classDef = allClassDefs.find(c => c.name === currentClassName);
            if (classDef) {
                progressionChain.unshift(classDef); // Add to front to get correct order [Base, PrC1, PrC2]
                const prereqClasses = ('progression' in classDef && classDef.progression) ? classDef.progression : [];
                queue.unshift(...prereqClasses);
            }
        }
    
        // 2. Calculate minimum levels for each class in the chain
        const newLevels: AppliedClassLevel[] = [];
        for (let i = 0; i < progressionChain.length; i++) {
            const currentClass = progressionChain[i];
            const nextClass = progressionChain[i + 1] as PrestigeClass | undefined;
            let requiredLevel = 1;
    
            if (nextClass) {
                requiredLevel = getMinimumLevelForPrereqs(nextClass, currentClass, { 
                    base: build.base,
                    levels: newLevels // Pass the levels determined so far to calculate cumulative prereqs
                });
            }
    
            newLevels.push({ class: currentClass, level: requiredLevel });
        }
    
        // The final class in the chain only needs to be level 1 to start
        if (newLevels.length > 0) {
            newLevels[newLevels.length - 1].level = 1;
        }
    
        // 3. Update build state and auto-allocate
        let tempBuild = { ...build, levels: newLevels };
    
        const newSkills = autoAllocateSkills(tempBuild, goalClass);
        tempBuild.allocatedSkills = newSkills;
    
        const featSlots = getFeatSlots(tempBuild).filter(s => s.type !== 'racial');
        const newFeats = autoSelectFeats(tempBuild, featSlots, goalClass);
    
        setBuild({
            ...tempBuild,
            selectedFeats: newFeats,
        });
    
    }, [build]);
    
    const handleClassLevelChange = (classIndex: number, newLevel: number) => {
        if (!build || isNaN(newLevel) || newLevel < 0 || newLevel > 40) return;
        const newLevels = [...build.levels];
        newLevels[classIndex].level = newLevel;
        const totalLevels = newLevels.reduce((sum, l) => sum + l.level, 0);
        if (totalLevels <= 40) {
            setBuild({ ...build, levels: newLevels, selectedFeats: {}, allocatedSkills: {} });
        }
    };
    const handleRemoveClass = (classIndex: number) => {
        setBuild(build ? { ...build, levels: build.levels.filter((_, i) => i !== classIndex), selectedFeats: {}, allocatedSkills: {} } : null);
    };
    const handleFeatSelect = (key: string, featName: string) => setBuild(prev => prev ? { ...prev, selectedFeats: { ...prev.selectedFeats, [key]: featName } } : null);
    const handleSkillChange = (skillName: string, ranks: number) => {
        setBuild(prev => {
            if (!prev) return null;
            const newSkills = { ...prev.allocatedSkills };
            if (isNaN(ranks) || ranks <= 0) {
                delete newSkills[skillName];
            } else {
                newSkills[skillName] = ranks;
            }
            return { ...prev, allocatedSkills: newSkills };
        });
    };
    const handleAutoEquip = () => {
        if (build) setBuild({ ...build, selectedItems: autoEquip(build, wealthByLevel[build.levels.reduce((sum, l) => sum + l.level, 0)]) });
    };
    const handleAutoFeats = () => {
        if (build) {
            const featSlots = getFeatSlots(build).filter(s => s.type !== 'racial');
            setBuild({ ...build, selectedFeats: autoSelectFeats(build, featSlots) });
        }
    };
    const handleAutoSkills = () => {
        if (build) setBuild({ ...build, allocatedSkills: autoAllocateSkills(build) });
    };
    const handleAddWeapon = () => {
        if (!build || !newWeapon.baseWeaponName) return;
        const baseWeapon = allWeapons.find(w => w.name === newWeapon.baseWeaponName);
        if (!baseWeapon) return;
    
        const properties = newWeapon.selectedProperties.map(pName => allWeaponProperties.find(p => p.name === pName)).filter((p): p is WeaponProperty => !!p);
        
        let propNames = properties.map(p => p.name).join(' ');
        let name = `+${newWeapon.enhancement} ${propNames} ${baseWeapon.name}`.trim().replace(/\s+/g, ' ');
        if (newWeapon.enhancement === 0 && properties.length === 0) {
            name = baseWeapon.name;
        } else if (newWeapon.enhancement === 0) {
            name = `${propNames} ${baseWeapon.name}`.trim().replace(/\s+/g, ' ');
        }
    
        const equippedWeapon: EquippedWeapon = {
            baseWeapon,
            enhancement: newWeapon.enhancement,
            properties,
            name,
        };
    
        setBuild({ ...build, equippedWeapons: [...build.equippedWeapons, equippedWeapon] });
        setNewWeapon({ baseWeaponName: "", enhancement: 0, selectedProperties: [] });
    };
    
    const handleRemoveWeapon = (indexToRemove: number) => {
        setBuild(prev => prev ? { ...prev, equippedWeapons: prev.equippedWeapons.filter((_, index) => index !== indexToRemove) } : null);
    };

    const maxTotalBonus = useMemo(() => {
        if (!derivedStatsForPrereqs) return 0;
        return Math.min(15, Math.floor((derivedStatsForPrereqs.effectiveCharacterLevel + 2) / 3));
    }, [derivedStatsForPrereqs]);


    const handleAutoMagic = (weaponIndex: number) => {
        if (!build) return;
        const newEquippedWeapons = [...build.equippedWeapons];
        const weaponToUpdate = newEquippedWeapons[weaponIndex];
        
        const role = getClassRole(build);
        const alignment = build.base.alignment.toLowerCase();
        let budget = maxTotalBonus - weaponToUpdate.enhancement;

        let priorities: string[] = [];
        if (role === 'melee' || role === 'divine') {
            if (alignment.includes('good')) priorities.push('Holy');
            if (alignment.includes('evil')) priorities.push('Unholy');
            if (alignment.includes('lawful')) priorities.push('Axiomatic');
            if (alignment.includes('chaotic')) priorities.push('Anarchic');
            priorities.push('Speed', 'Collision', 'Keen');
        } else {
             priorities.push('Speed', 'Keen');
        }
         priorities.push(...allWeaponProperties.map(p => p.name).filter(pName => !priorities.includes(pName)));

        const newProperties: WeaponProperty[] = [];
        
        // Parse the base weapon threat range correctly (e.g., "x3" -> 20, "19-20/x2" -> 19)
        let baseCritStart = 20;
        const rangePart = weaponToUpdate.baseWeapon.crit.split('/')[0];
        if (rangePart.includes('-')) {
            baseCritStart = parseInt(rangePart.split('-')[0], 10);
        } else if (!rangePart.startsWith('x')) {
             const parsed = parseInt(rangePart, 10);
             if(!isNaN(parsed)) baseCritStart = parsed;
        }

        for (const propName of priorities) {
            const prop = allWeaponProperties.find(p => p.name === propName);
            if (prop && prop.cost <= budget) {
                // Logic: Don't add Keen if it's already keen or if range is 20 (sometimes keen isn't worth it on 20, but 3.5e math says it usually is)
                // Actually, just check if we already have it.
                if (prop.name === 'Keen' && newProperties.some(p => p.name === 'Keen')) continue;
                
                newProperties.push(prop);
                budget -= prop.cost;
            }
        }
        
        let propNames = newProperties.map(p => p.name).join(' ');
        let name = `+${weaponToUpdate.enhancement} ${propNames} ${weaponToUpdate.baseWeapon.name}`.trim().replace(/\s+/g, ' ');
        weaponToUpdate.properties = newProperties;
        weaponToUpdate.name = name;
        
        setBuild({...build, equippedWeapons: newEquippedWeapons});
    };

    const handlePrint = () => window.print();
    const handleCopy = () => {
        if (sheetText) {
            navigator.clipboard.writeText(sheetText).then(() => alert('Sheet copied to clipboard!'));
        }
    };

    const selectedMonsterLore = useMemo(() => {
        if (!build) return null;
        return monsters.find(m => m.name === build.base.name);
    }, [build]);

    const featSlots = useMemo(() => build ? getFeatSlots(build) : [], [build]);
    const totalSkillPoints = useMemo(() => build && derivedStatsForPrereqs ? calculateTotalSkillPoints(build) : 0, [build, derivedStatsForPrereqs]);
    
    const allocatedPoints = useMemo(() => {
        if (!build) return 0;
        const allClassSkills = new Set<string>();
        build.levels.forEach(l => { (l.class.classSkills || []).forEach(s => allClassSkills.add(s)); });
        let totalCost = 0;
        for (const [skillName, ranks] of Object.entries(build.allocatedSkills)) {
            const cost = allClassSkills.has(skillName) ? 1 : 2;
            totalCost += Number(ranks) * cost;
        }
        return totalCost;
    }, [build]);

    const currentWeaponBonus = useMemo(() => {
        return newWeapon.enhancement + newWeapon.selectedProperties.reduce((sum, pName) => {
            const prop = allWeaponProperties.find(p => p.name === pName);
            return sum + (prop ? prop.cost : 0);
        }, 0);
    }, [newWeapon]);

    if (!build) {
        return (
            <div className="p-4 bg-gray-800 rounded-lg">
                <label htmlFor="base-monster-select" className="block text-lg font-medium text-blue-300 mb-2">1. Select a Baseline Monster</label>
                <select id="base-monster-select" onChange={(e) => handleSelectBase(e.target.value)} className="w-full max-w-md px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500" defaultValue="">
                    <option value="" disabled>Choose a monster...</option>
                    {baselineMonsters.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                </select>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4 no-print">
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <h2 className="text-xl font-bold text-blue-300">Builder Controls</h2>
                    <div className="flex gap-2">
                        <button onClick={handlePrint} className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-md font-semibold transition-colors text-sm">Print</button>
                        <button onClick={handleCopy} className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded-md font-semibold transition-colors text-sm">Copy</button>
                        <button onClick={() => setBuild(null)} className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition-colors text-sm">Reset</button>
                    </div>
                </div>

                {selectedMonsterLore && (
                    <Accordion title="Lore & Roleplaying Suggestions" startOpen={true}>
                        <div className="p-4 bg-gray-800/50 rounded-b-lg space-y-4 prose prose-invert prose-sm max-w-none">
                            <p className="italic text-gray-400">{selectedMonsterLore.description}</p>
                            <h4 className="text-md font-semibold text-blue-300 border-t border-gray-700 pt-2">Roleplaying Guide</h4>
                            <ul className="list-disc list-inside space-y-2">
                                {selectedMonsterLore.roleplayGuide.map((guide, index) => <li key={index}>{guide}</li>)}
                            </ul>
                        </div>
                    </Accordion>
                )}

                <Accordion title="Class Levels" startOpen={true}>
                    <div className="p-4 bg-gray-800/50 rounded-b-lg space-y-3">
                        <div className="space-y-2 border-b border-gray-700 pb-4">
                             <select onChange={(e) => { handleSetGoal(e.target.value); e.target.value = ""; }} className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500" defaultValue="">
                                <option value="" disabled>Set Prestige Class Goal...</option>
                                {prestigeClasses.filter(pc => pc.progression && pc.progression.length > 0).map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                             </select>
                             <p className="text-xs text-gray-400 italic">Select a goal to automatically set required class levels and pre-populate feats/skills.</p>
                        </div>
                        {build.levels.map((l, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="flex-grow text-gray-300">{l.class.name}</span>
                                <input type="number" value={l.level} onChange={(e) => handleClassLevelChange(index, parseInt(e.target.value))} className="w-20 px-2 py-1 bg-gray-700 border border-gray-600 rounded-md" min="0" max="40" />
                                <button onClick={() => handleRemoveClass(index)} className="px-2 py-1 bg-red-700 hover:bg-red-800 rounded-md text-xs">X</button>
                            </div>
                        ))}
                         <select onChange={(e) => { handleAddClass(e.target.value); e.target.value = ""; }} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500" defaultValue="">
                             <option value="" disabled>Add a class...</option>
                             <optgroup label="Base Classes">
                                {baseClasses.filter(bc => !build.levels.find(l => l.class.name === bc.name)).map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                             </optgroup>
                             <optgroup label="Prestige Classes">
                                {prestigeClasses
                                    .filter(pc => !build.levels.find(l => l.class.name === pc.name))
                                    .sort((a, b) => {
                                        const aUnmet = checkClassPrereqs(a, derivedStatsForPrereqs, build).length;
                                        const bUnmet = checkClassPrereqs(b, derivedStatsForPrereqs, build).length;
                                        if (aUnmet === 0 && bUnmet > 0) return -1;
                                        if (aUnmet > 0 && bUnmet === 0) return 1;
                                        return a.name.localeCompare(b.name);
                                    })
                                    .map(c => {
                                        const unmetReqs = checkClassPrereqs(c, derivedStatsForPrereqs, build);
                                        const isAvailable = unmetReqs.length === 0;
                                        const title = isAvailable ? `Add ${c.name}` : `Prerequisites not met:\n- ${unmetReqs.join('\n- ')}`;
                                        
                                        return (
                                            <option 
                                                key={c.name} 
                                                value={c.name} 
                                                disabled={!isAvailable} 
                                                title={title}
                                                className={!isAvailable ? 'text-gray-500' : 'text-white'}
                                            >
                                                {c.name} {!isAvailable ? ' (Locked)' : ''}
                                            </option>
                                        );
                                    })}
                            </optgroup>
                        </select>
                        <p className="text-gray-400 mt-2 text-xs italic">
                            Note: Detailed prerequisites for all Prestige Classes can be viewed in the 'Prestige Classes' tab.
                        </p>
                        <p className="text-gray-400 mt-2 text-sm">Total Class Levels: {build.levels.reduce((sum, l) => sum + l.level, 0)} / 40</p>
                    </div>
                </Accordion>

                <SpellPowerManager build={build} setBuild={setBuild} />

                <Accordion title="Feats & Skills">
                    <div className="p-4 bg-gray-800/50 rounded-b-lg space-y-6">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-lg font-semibold text-blue-300">Feats</h4>
                                <button onClick={handleAutoFeats} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors text-xs">Auto-Feats</button>
                            </div>
                            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                {featSlots.filter(s => s.type !== 'racial').map((slot, index) => {
                                    const key = `${slot.level}-${slot.source.replace(/\s+/g, '-')}-${index}`;
                                    const availableFeats = allFeats.filter(f => isFeatAvailable(f) || build.selectedFeats[key] === f.name);
                                    return (
                                        <div key={key}>
                                            <label className="block text-xs font-medium text-gray-400">Lvl {slot.level} ({slot.type}, from {slot.source})</label>
                                            <select onChange={(e) => handleFeatSelect(key, e.target.value)} className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded-md text-sm" value={build.selectedFeats[key] || ""}>
                                                <option value="" disabled>Select a feat...</option>
                                                {availableFeats.map(f => <option key={f.name} value={f.name}>{f.name}</option>)}
                                            </select>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="border-t border-gray-700 pt-4">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-lg font-semibold text-blue-300">Skills</h4>
                                <button onClick={handleAutoSkills} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors text-xs">Auto-Skills</button>
                            </div>
                            <p className="text-gray-400 mb-4 text-sm">Total Points Available: {totalSkillPoints} / Points Spent: {allocatedPoints}</p>
                            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                {allSkills.map(skill => {
                                    const totalHd = (parseInt(build.base.racialHitDice.split('d')[0]) || 0) + build.levels.reduce((sum, l) => sum + l.level, 0);
                                    const maxRanks = totalHd + 3;
                                    const isClassSkill = build.levels.some(l => (l.class.classSkills || []).includes(skill.name));
                                    const currentRanks = build.allocatedSkills[skill.name] || 0;
                                    return (
                                        <div key={skill.name} className="grid grid-cols-3 items-center gap-2">
                                            <label className={`col-span-2 block text-xs font-medium truncate ${isClassSkill ? 'text-gray-300' : 'text-gray-500'}`}>{skill.name} ({skill.ability.toUpperCase()})</label>
                                            <input type="number" min="0" max={isClassSkill ? maxRanks : Math.floor(maxRanks/2)} value={currentRanks} onChange={e => handleSkillChange(skill.name, parseInt(e.target.value, 10))} className="col-span-1 w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded-md text-sm" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Accordion>
                
                <Accordion title="Weapons">
                    <div className="p-4 bg-gray-800/50 rounded-b-lg space-y-4">
                        {build.equippedWeapons.map((weapon, index) => (
                            <div key={index} className="flex items-center justify-between text-sm bg-gray-900/50 p-2 rounded gap-2">
                                <span className="truncate">{weapon.name}</span>
                                <div className="flex-shrink-0 flex gap-1">
                                    <button onClick={() => handleAutoMagic(index)} className="px-2 py-1 bg-purple-600 hover:bg-purple-700 rounded-md text-xs">Auto</button>
                                    <button onClick={() => handleRemoveWeapon(index)} className="px-2 py-1 bg-red-700 hover:bg-red-800 rounded-md text-xs">X</button>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-gray-700 pt-4 space-y-2">
                            <h5 className="text-md font-semibold text-blue-300">Add Weapon (ECL {derivedStatsForPrereqs?.effectiveCharacterLevel || 0})</h5>
                            <select value={newWeapon.baseWeaponName} onChange={e => setNewWeapon({...newWeapon, baseWeaponName: e.target.value})} className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded-md text-sm">
                                <option value="" disabled>Select base weapon...</option>
                                {allWeapons.map(w => <option key={w.name} value={w.name}>{w.name} ({w.category})</option>)}
                            </select>
                             <input type="number" placeholder="Enhancement Bonus" value={newWeapon.enhancement} onChange={e => setNewWeapon({...newWeapon, enhancement: Math.min(maxTotalBonus, parseInt(e.target.value) || 0)})} min="0" max={maxTotalBonus} className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded-md text-sm" />
                            <div>
                                <label className="text-xs text-gray-400">Properties (Current Bonus: +{currentWeaponBonus} / Max: +{maxTotalBonus})</label>
                                 <select 
                                    multiple 
                                    value={newWeapon.selectedProperties} 
                                    onChange={e => setNewWeapon({...newWeapon, selectedProperties: Array.from(e.target.selectedOptions, (option: HTMLOptionElement) => option.value)})} 
                                    className="w-full h-32 px-2 py-1 bg-gray-700 border border-gray-600 rounded-md text-sm"
                                >
                                    {allWeaponProperties.map(prop => {
                                        const isSelected = newWeapon.selectedProperties.includes(prop.name);
                                        const futureBonus = currentWeaponBonus + (isSelected ? 0 : prop.cost);
                                        return (
                                            <option key={prop.name} value={prop.name} disabled={!isSelected && futureBonus > maxTotalBonus}>
                                                {prop.name} (+{prop.cost})
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <button onClick={handleAddWeapon} className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors">Add Weapon</button>
                        </div>
                    </div>
                </Accordion>

                <Accordion title="Magic Items">
                    <div className="p-4 bg-gray-800/50 rounded-b-lg">
                        <button onClick={handleAutoEquip} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors w-full">Auto-Equip Gear</button>
                        <p className="text-gray-400 text-xs italic mt-2">Automatically selects appropriate gear based on class and level, including artifacts at levels 30 and 40.</p>
                    </div>
                </Accordion>
            </div>
            <div className="lg:col-span-2">
                <BuilderSheet build={build} setSheetText={setSheetText} />
            </div>
        </div>
    );
};

export default CharacterBuilder;
