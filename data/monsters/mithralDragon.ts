// data/monsters/mithralDragon.ts
import { Monster } from '../../types';

export const mithralDragon: Monster = {
    name: "Young Adult Mithral Dragon, Crusader Knight",
    description: "A sleek, intelligent dragon with scales that shimmer like polished mithral. It is a creature of logic, order, and psionic power, often found in high, secluded mountain peaks.",
    roleplayGuide: [
        "Be calm, logical, and analytical. You assess threats and opportunities with a detached mind.",
        "Speak with precision. You dislike wasted words and appreciate intellectual conversation.",
        "Your alignment is Lawful Neutral, but you lean towards good. You value order and justice above all.",
        "Use your psionic abilities and martial maneuvers to control the flow of combat. You are a strategist, not a berserker."
    ],
    builds: [
        {
            level: 1,
            title: "Adamant Aspirant",
            class: "Crusader 1",
            hitDice: "18d12+72 (HD) + 1d10+4 (Crusader) = 200 hp",
            challengeRating: 17,
            armorClass: {
                total: 29,
                breakdown: "(-1 size, +1 Dex, +19 natural)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Base creature is a Young Adult Mithral Dragon (18 Dragon HD).",
                "Crusader level adds martial maneuvers and stances from Tome of Battle.",
                "The build focuses on battlefield control and sustainable damage."
            ],
            sheet: {
                baseAtk: 19,
                grapple: 32,
                fullAttack: [
                    { name: "Bite", bonus: "+27", damage: "2d6+9", crit: "20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+25", damage: "1d8+4", crit: "20/x2", type: "Melee" },
                    { name: "2 Wings", bonus: "+25", damage: "1d6+4", crit: "20/x2", type: "Melee" },
                    { name: "Tail Slap", bonus: "+25", damage: "1d8+13", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Breath Weapon", type: "Su", description: "Cone of force, 12d8 damage, Reflex DC 23 half." },
                    { name: "Psi-Like Abilities", type: "Psi", description: "At will—detect psionics, read thoughts. 3/day—psionic levitate, psionic teleport." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Gains maneuvers from the Devoted Spirit, Stone Dragon, and White Raven disciplines. Can ready 5 maneuvers, gains 1 stance." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "5/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "23" },
                    { name: "Alternate Form", type: "Su", description: "Can assume any humanoid form of Medium size or smaller." },
                ],
                saves: {
                    fort: { bonus: 18, breakdown: "+11 HD, +4 Con, +3 Crusader" },
                    ref: { bonus: 12, breakdown: "+11 HD, +1 Dex" },
                    will: { bonus: 14, breakdown: "+11 HD, +3 Wis" },
                },
                abilities: { str: 29, dex: 12, con: 19, int: 16, wis: 17, cha: 16 },
                skills: [
                    { name: "Concentration", bonus: 26, breakdown: "26 ranks" },
                    { name: "Diplomacy", bonus: 25, breakdown: "25 ranks" },
                    { name: "Knowledge (psionics)", bonus: 25, breakdown: "25 ranks" },
                    { name: "Listen", bonus: 27, breakdown: "25 ranks +2 feat" },
                    { name: "Psychic Ken", bonus: 25, breakdown: "25 ranks" },
                    { name: "Sense Motive", bonus: 25, breakdown: "25 ranks" },
                    { name: "Spot", bonus: 27, breakdown: "25 ranks +2 feat" },
                ],
                feats: [
                    { name: "Multiattack", description: "Reduces penalty for secondary natural attacks." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Improved Multiattack", description: "Further reduces penalty for secondary attacks." },
                    { name: "Psionic Meditation", description: "Regain psionic focus as a move action." },
                    { name: "Weapon Focus (Bite)", description: "+1 to attack rolls with bite." },
                    { name: "Alertness", description: "Bonus feat for dragons." },
                    { name: "Flyby Attack", description: "Bonus feat for dragons." }
                ],
                flaws: [],
                environment: "Temperate mountains",
                organization: "Solitary or clutch (2-5)",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +1", cost: "4,000 gp", description: "+1 enhancement to all natural attacks." },
                        { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" }
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Logic of Steel",
            class: "Crusader 5",
            hitDice: "18d12+90 (HD) + 5d10+25 (Crusader) = 250 hp",
            challengeRating: 17,
            armorClass: {
                total: 30,
                breakdown: "(-1 size, +1 Dex, +20 natural)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Crusader's recovery mechanic becomes more reliable.",
                "Gains access to higher-level maneuvers and another stance.",
                "Feats focus on improving martial prowess."
            ],
            sheet: {
                baseAtk: 22,
                grapple: 35,
                fullAttack: [
                    { name: "Bite", bonus: "+31", damage: "2d6+10", crit: "20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+29", damage: "1d8+5", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Breath Weapon", type: "Su", description: "Cone of force, 12d8 damage, Reflex DC 24 half." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Gains more maneuvers. Can ready 6 maneuvers, has 2 stances." },
                ],
                 specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "5/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "23" },
                ],
                saves: {
                    fort: { bonus: 21, breakdown: "+11 HD, +5 Con, +5 Crusader" },
                    ref: { bonus: 13, breakdown: "+11 HD, +1 Dex, +1 Crusader" },
                    will: { bonus: 15, breakdown: "+11 HD, +3 Wis, +1 Crusader" },
                },
                abilities: { str: 31, dex: 12, con: 21, int: 16, wis: 17, cha: 16 },
                 skills: [
                    { name: "Concentration", bonus: 30, breakdown: "30 ranks" },
                    { name: "Diplomacy", bonus: 28, breakdown: "28 ranks" },
                    { name: "Knowledge (psionics)", bonus: 28, breakdown: "28 ranks" },
                    { name: "Listen", bonus: 30, breakdown: "28 ranks +2 feat" },
                    { name: "Psychic Ken", bonus: 28, breakdown: "28 ranks" },
                    { name: "Sense Motive", bonus: 28, breakdown: "28 ranks" },
                    { name: "Spot", bonus: 30, breakdown: "28 ranks +2 feat" },
                ],
                feats: [
                    { name: "Multiattack", description: "Reduces penalty for secondary natural attacks." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Improved Multiattack", description: "Further reduces penalty for secondary attacks." },
                    { name: "Psionic Meditation", description: "Regain psionic focus as a move action." },
                    { name: "Weapon Focus (Bite)", description: "+1 to attack rolls with bite." },
                    { name: "Stone Power", description: "Gain temporary HP when using Stone Dragon maneuvers." },
                    { name: "Alertness", description: "Bonus feat for dragons." },
                    { name: "Flyby Attack", description: "Bonus feat for dragons." }
                ],
                flaws: [],
                environment: "Temperate mountains",
                organization: "Solitary or clutch (2-5)",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "49,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +2", cost: "16,000 gp", description: "+2 enhancement to all natural attacks." },
                        { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                        { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                        { name: "Ring of Protection +1", cost: "2,000 gp", description: "" },
                        { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Knight of the Unblinking Eye",
            class: "Crusader 5 / Warblade 5",
            hitDice: "18d12+108 (HD) + 5d10+30 (Crusader) + 5d12+30 (Warblade) = 300 hp",
            challengeRating: 20,
            armorClass: {
                total: 34,
                breakdown: "(-1 size, +1 Dex, +21 natural, +3 Int)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
             buildNotes: [
                "Multiclassing into Warblade grants access to a wider array of maneuvers and the Battle Clarity feature (Int to Reflex saves).",
                "This combination makes for a highly versatile and intelligent martial combatant.",
                "Equipment provides significant boosts to core abilities."
            ],
            sheet: {
                baseAtk: 27,
                grapple: 40,
                fullAttack: [
                     { name: "Bite", bonus: "+37", damage: "2d6+13", crit: "20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+35", damage: "1d8+6", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                     { name: "Breath Weapon", type: "Su", description: "Cone of force, 12d8 damage, Reflex DC 26 half." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Initiator Level 14. Access to high-level maneuvers from five disciplines." },
                ],
                 specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "5/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "23" },
                ],
                saves: {
                    fort: { bonus: 25, breakdown: "+11 HD, +6 Con, +5 Crusader, +4 Warblade" },
                    ref: { bonus: 18, breakdown: "+11 HD, +1 Dex, +1 Crusader, +1 Warblade, +4 Int" },
                    will: { bonus: 17, breakdown: "+11 HD, +3 Wis, +1 Crusader, +1 Warblade" },
                },
                abilities: { str: 33, dex: 12, con: 23, int: 18, wis: 17, cha: 16 },
                 skills: [
                    { name: "Concentration", bonus: 35, breakdown: "35 ranks" },
                    { name: "Diplomacy", bonus: 33, breakdown: "33 ranks" },
                    { name: "Intimidate", bonus: 33, breakdown: "33 ranks" },
                    { name: "Knowledge (psionics)", bonus: 33, breakdown: "33 ranks" },
                    { name: "Listen", bonus: 33, breakdown: "31 ranks +2 feat" },
                    { name: "Sense Motive", bonus: 33, breakdown: "33 ranks" },
                    { name: "Spot", bonus: 33, breakdown: "31 ranks +2 feat" },
                ],
                feats: [
                    { name: "Multiattack", description: "Reduces penalty for secondary natural attacks." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Improved Multiattack", description: "Further reduces penalty for secondary attacks." },
                    { name: "Psionic Meditation", description: "Regain psionic focus as a move action." },
                    { name: "Weapon Focus (Bite)", description: "+1 to attack rolls with bite." },
                    { name: "Stone Power", description: "Gain temporary HP when using Stone Dragon maneuvers." },
                    { name: "Ironheart Aura", description: "Grant allies +2 to saves." },
                    { name: "Alertness", description: "Bonus feat for dragons." },
                    { name: "Flyby Attack", description: "Bonus feat for dragons." }
                ],
                flaws: [],
                environment: "Temperate mountains",
                organization: "Solitary or clutch (2-5)",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +4", cost: "64,000 gp", description: "+4 enhancement to all natural attacks." },
                        { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                        { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                        { name: "Headband of Intellect +2", cost: "4,000 gp", description: "" },
                        { name: "Ring of Protection +2", cost: "8,000 gp", description: "" },
                        { name: "Ioun Stone (Dusty Rose Prism)", cost: "5,000 gp", description: "+1 insight bonus to AC" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Wyrm of Perfect Order",
            class: "Crusader 5 / Warblade 5 / Eternal Blade 10",
            hitDice: "18d12+144 (HD) + 20d10+160 (Classes) = 497 hp",
            challengeRating: 22,
            armorClass: {
                total: 45,
                breakdown: "(-1 size, +1 Dex, +25 natural, +5 deflection, +5 armor, +4 Int)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
             buildNotes: [
                "The Eternal Blade prestige class grants incredible tactical flexibility, allowing it to add its Int bonus to attack/damage, and gain extra actions.",
                "Its martial strikes are now infused with temporal power, making it a terrifying combatant.",
                "Epic gear makes it a true paragon of psionic and martial power."
            ],
            sheet: {
                baseAtk: 37,
                grapple: 52,
                fullAttack: [
                     { name: "Bite", bonus: "+47", damage: "2d6+17", crit: "20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+45", damage: "1d8+8", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                     { name: "Breath Weapon", type: "Su", description: "Cone of force, 20d8 damage, Reflex DC 30 half." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Initiator Level 24." },
                    { name: "Eternal Training", type: "Su", description: "Gain any combat feat for one round as a swift action." },
                ],
                 specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "30" },
                ],
                saves: {
                    fort: { bonus: 32, breakdown: "+11 HD, +8 Con, +13 Classes" },
                    ref: { bonus: 23, breakdown: "+11 HD, +1 Dex, +8 Classes, +4 Int" },
                    will: { bonus: 25, breakdown: "+11 HD, +3 Wis, +11 Classes" },
                },
                abilities: { str: 35, dex: 12, con: 27, int: 18, wis: 17, cha: 16 },
                skills: [
                    { name: "Concentration", bonus: 45, breakdown: "45 ranks" },
                    { name: "Diplomacy", bonus: 43, breakdown: "43 ranks" },
                    { name: "Intimidate", bonus: 43, breakdown: "43 ranks" },
                    { name: "Knowledge (psionics)", bonus: 43, breakdown: "43 ranks" },
                    { name: "Listen", bonus: 43, breakdown: "41 ranks +2 feat" },
                    { name: "Sense Motive", bonus: 43, breakdown: "43 ranks" },
                    { name: "Spot", bonus: 43, breakdown: "41 ranks +2 feat" },
                ],
                feats: [
                    { name: "Multiattack", description: "Reduces penalty for secondary natural attacks." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Psionic Meditation", description: "Regain psionic focus as a move action." },
                    { name: "Weapon Focus (Bite)", description: "+1 to attack rolls with bite." },
                    { name: "Stone Power", description: "Gain temporary HP when using Stone Dragon maneuvers." },
                    { name: "Ironheart Aura", description: "Grant allies +2 to saves." },
                    { name: "Blade Meditation", description: "Use Int instead of Str/Dex for certain combat skills." },
                    { name: "Alertness", description: "Bonus feat for dragons." },
                    { name: "Flyby Attack", description: "Bonus feat for dragons." },
                    { name: "Epic Weapon Focus (Bite)", description: "+2 attack with bite." },
                    { name: "Armor Skin", description: "+1 natural armor." },
                    { name: "Epic Prowess", description: "+1 to all attack rolls." },
                    { name: "Overwhelming Critical (Bite)", description: "On a critical hit, target must make a Fort save or die." },
                ],
                flaws: [],
                environment: "Astral Plane",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +5", cost: "100,000 gp", description: "" },
                        { name: "Belt of Giant Strength +6", cost: "36,000 gp", description: "" },
                        { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                        { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                        { name: "Bracers of Armor +5", cost: "25,000 gp", description: "" },
                        { name: "Tome of Clear Thought +3", cost: "82,500 gp", description: "+3 inherent bonus to Intelligence." },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Master of Causality",
            class: "Crusader 5 / Warblade 5 / Eternal Blade 10 / Chronomancer 10",
            hitDice: "18d12+180 (HD) + 30d10+300 (Classes) = 819 hp",
            challengeRating: 28,
            armorClass: {
                total: 60,
                breakdown: "(-1 size, +1 Dex, +28 natural, +10 deflection, +8 armor, +8 Int, +6 insight)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
             buildNotes: [
                "The Chronomancer prestige class from Librim Eternia elevates the Eternal Blade's time manipulation to a cosmic scale.",
                "It can now literally stop time, rewind its own mistakes, and peer into future timelines to ensure victory.",
                "This dragon is no longer just a warrior; it is a living nexus of time and a guardian of causality, its lair existing moments ahead of the present."
            ],
            sheet: {
                baseAtk: 47,
                grapple: 70,
                fullAttack: [
                     { name: "Bite", bonus: "+65", damage: "2d6+25", crit: "19-20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+63", damage: "1d8+12", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                     { name: "Breath Weapon", type: "Su", description: "Cone of force, 30d8 damage, Reflex DC 38 half." },
                    { name: "Stop Time", type: "Su", description: "As the spell, 3/day. Can act for 1d4+1 rounds of apparent time." },
                    { name: "Temporal Stutter", type: "Su", description: "As a free action, can force an enemy to reroll any one d20 roll that just occurred." }
                ],
                 specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/magic and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "38" },
                    { name: "Prescience", type: "Ex", description: "Cannot be surprised or caught flat-footed." },
                ],
                saves: {
                    fort: { bonus: 42, breakdown: "+11 HD, +10 Con, +21 Classes" },
                    ref: { bonus: 33, breakdown: "+11 HD, +1 Dex, +13 Classes, +8 Int" },
                    will: { bonus: 37, breakdown: "+11 HD, +3 Wis, +23 Classes" },
                },
                abilities: { str: 40, dex: 12, con: 30, int: 26, wis: 17, cha: 16 },
                skills: [
                    { name: "Concentration", bonus: 60, breakdown: "55 ranks" },
                    { name: "Diplomacy", bonus: 58, breakdown: "55 ranks" },
                    { name: "Intimidate", bonus: 58, breakdown: "55 ranks" },
                    { name: "Knowledge (psionics)", bonus: 63, breakdown: "55 ranks" },
                    { name: "Listen", bonus: 58, breakdown: "53 ranks" },
                    { name: "Sense Motive", bonus: 58, breakdown: "55 ranks" },
                    { name: "Spot", bonus: 58, breakdown: "53 ranks" },
                ],
                feats: [
                    { name: "Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Weapon Focus (Bite)", description: "" }, { name: "Stone Power", description: "" }, { name: "Ironheart Aura", description: "" }, { name: "Blade Meditation", description: "" }, { name: "Alertness", description: "" }, { name: "Flyby Attack", description: "" }, { name: "Epic Weapon Focus (Bite)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Overwhelming Critical (Bite)", description: "" },
                    { name: "Epic Toughness", description: "" }, { name: "Improved Multiattack", description: "" }, { name: "Devastating Critical (Bite)", description: "" }, { name: "Dire Charge", description: "" }
                ],
                flaws: [],
                environment: "The Planes of Order",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +8", cost: "256,000 gp", description: "" },
                        { name: "Belt of Giant Strength +8", cost: "64,000 gp", description: "" },
                        { name: "Amulet of Health +8", cost: "64,000 gp", description: "" },
                        { name: "Headband of Intellect +8", cost: "64,000 gp", description: "" },
                        { name: "Ring of Protection +10", cost: "200,000 gp", description: "" },
                        { name: "Tome of Clear Thought +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "Nexus of Infinity",
            class: "Crusader 5 / Warblade 5 / Eternal Blade 10 / Chronomancer 10 / Legendary Leader 10",
            hitDice: "18d12+216 (HD) + 40d10+480 (Classes) = 1170 hp",
            challengeRating: 35,
            armorClass: {
                total: 75,
                breakdown: "(-1 size, +1 Dex, +30 natural, +12 deflection, +10 armor, +10 Int, +13 insight)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
             buildNotes: [
                "Taking levels in Legendary Leader, the dragon now commands legions of 'echoes' of itself from other timelines, a perfect, ordered army.",
                "Its mastery of time is absolute. It doesn't experience time linearly but perceives all possibilities at once, acting with perfect knowledge.",
                "It has become a living law of the multiverse, a guardian of the proper flow of time against the forces of chaos."
            ],
            sheet: {
                baseAtk: 57,
                grapple: 84,
                fullAttack: [
                     { name: "Bite of Causality", bonus: "+80", damage: "2d6+30 + 2d6 axiomatic", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                     { name: "Breath Weapon", type: "Su", description: "Cone of force, 40d8 damage, Reflex DC 46 half." },
                     { name: "Unravel Timeline", type: "Su", description: "1/day, can erase a single creature from existence. No save, but can only be used on non-deities." }
                ],
                 specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/epic and chaos" },
                    { name: "Spell Resistance", type: "Ex", description: "45" },
                    { name: "Lord of Time", type: "Ex", description: "Immune to all time-altering effects. Can choose to act in any time stream." },
                ],
                saves: {
                    fort: { bonus: 54, breakdown: "+11 HD, +12 Con, +31 Classes" },
                    ref: { bonus: 45, breakdown: "+11 HD, +1 Dex, +23 Classes, +10 Int" },
                    will: { bonus: 50, breakdown: "+11 HD, +3 Wis, +36 Classes" },
                },
                abilities: { str: 44, dex: 12, con: 34, int: 30, wis: 17, cha: 26 },
                skills: [
                    { name: "Concentration", bonus: 76, breakdown: "66 ranks" },
                    { name: "Diplomacy", bonus: 75, breakdown: "66 ranks" },
                    { name: "Intimidate", bonus: 75, breakdown: "66 ranks" },
                    { name: "Knowledge (any)", bonus: 76, breakdown: "66 ranks" },
                    { name: "Listen", bonus: 71, breakdown: "66 ranks" },
                    { name: "Sense Motive", bonus: 71, breakdown: "66 ranks" },
                    { name: "Spot", bonus: 71, breakdown: "66 ranks" },
                ],
                feats: [
                    { name: "Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Weapon Focus (Bite)", description: "" }, { name: "Stone Power", description: "" }, { name: "Ironheart Aura", description: "" }, { name: "Blade Meditation", description: "" }, { name: "Alertness", description: "" }, { name: "Flyby Attack", description: "" }, { name: "Epic Weapon Focus (Bite)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Overwhelming Critical (Bite)", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Improved Multiattack", description: "" }, { name: "Devastating Critical (Bite)", description: "" }, { name: "Dire Charge", description: "" },
                    { name: "Epic Leadership", description: "" }, { name: "Legendary Commander", description: "" }, { name: "Perfect Health", description: "" }, { name: "Epic Will", description: "" }
                ],
                flaws: [],
                environment: "The Axis of Time",
                organization: "Unique",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                        { name: "Heart of the Mithral Mountain", cost: "Artifact", description: "" },
                        { name: "Scales of Inevitability", cost: "Artifact", description: "" },
                        { name: "Third Eye of the Chronovore", cost: "Artifact", description: "" },
                        { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
  };