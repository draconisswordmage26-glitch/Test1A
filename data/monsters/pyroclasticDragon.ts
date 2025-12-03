// data/monsters/pyroclasticDragon.ts
import { Monster } from '../../types';

export const pyroclasticDragon: Monster = {
    name: "Pyroclastic Dragon, The Calamity's Charge",
    description: "A terrifying dragon whose scales are hardened magma and whose blood is molten rock. It is a creature of pure volcanic fury, its every charge a miniature eruption of destructive force.",
    roleplayGuide: [
        "You are the last of your kind, a being whose volcanic home was shattered by a cosmic cataclysm. Your rage is not born of malice, but of grief and a profound sense of loss.",
        "You charge through the world seeking a new home, a place of sufficient heat and pressure to soothe the roaring furnace in your heart. You mistake powerful sources of energy—cities, magical nexuses, even gods—for nascent volcanoes.",
        "Your destructive charges are not intentional acts of evil, but the tragic side-effects of your desperate, instinctual search for a place to rest.",
        "You are a force of nature, but one with a flicker of intelligence. If a creature could withstand your charge and offer you a path to a new home, your rampage could be ended."
    ],
    builds: [
        {
            level: 1,
            title: "Rumbling Heart",
            class: "Fighter 1",
            hitDice: "16d12+112 (HD) + 1d10+7 (Fighter) = 227 hp",
            challengeRating: 17,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +1 Dex, +18 natural)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "This build is based on a custom CR 17 version of the Pyroclastic Dragon, with its racial hit dice set to 16 to meet the power level.",
                "The build is a classic 'Ubercharger', focusing all its feats and abilities into a single, devastating charge attack.",
                "Fighter levels are taken for the abundance of bonus feats required to make the charge build function."
            ],
            sheet: {
                baseAtk: 17,
                grapple: 32,
                fullAttack: [
                    { name: "Bite", bonus: "+27", damage: "2d6+11", crit: "19-20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+25", damage: "1d8+5", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Breath Weapon", type: "Su", description: "60-ft. cone of fire and rock, 12d6 fire damage and 6d6 bludgeoning damage, Reflex DC 25 half." },
                    { name: "Charge Attack", type: "Ex", description: "Power Attack for -17 to hit, +34 damage. With Shock Trooper, penalty shifts to AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "5/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "25" },
                    { name: "Fire Immunity", type: "Ex", description: "Immune to fire damage." },
                ],
                saves: {
                    fort: { bonus: 19, breakdown: "+10 HD, +7 Con, +2 Fighter" },
                    ref: { bonus: 11, breakdown: "+10 HD, +1 Dex" },
                    will: { bonus: 13, breakdown: "+10 HD, +3 Wis" },
                },
                abilities: { str: 33, dex: 12, con: 25, int: 16, wis: 17, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 24, breakdown: "21 ranks" },
                    { name: "Jump", bonus: 32, breakdown: "21 ranks" },
                    { name: "Listen", bonus: 24, breakdown: "21 ranks" },
                    { name: "Spot", bonus: 24, breakdown: "21 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "Core of the charger build." },
                    { name: "Improved Bull Rush", description: "Prerequisite for Shock Trooper." },
                    { name: "Shock Trooper", description: "Shift Power Attack penalty from attack roll to AC." },
                    { name: "Cleave", description: "Standard dragon feat." },
                    { name: "Weapon Focus (Bite)", description: "Standard dragon feat." },
                ],
                flaws: [],
                environment: "Volcanic mountains",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "Molten Fury",
            class: "Fighter 3",
            hitDice: "16d12+112 (HD) + 3d10+21 (Fighter) = 267 hp",
            challengeRating: 19,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +1 Dex, +18 natural)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Gains another bonus feat from Fighter, further enhancing its charge.",
                "Its singular focus makes it an incredibly efficient, if predictable, killing machine."
            ],
            sheet: {
                baseAtk: 19,
                grapple: 34,
                fullAttack: [
                    { name: "Bite", bonus: "+29", damage: "2d6+11", crit: "19-20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+27", damage: "1d8+5", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Charge Attack", type: "Ex", description: "Power Attack for -19 to hit, +38 damage. With Shock Trooper, penalty shifts to AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "5/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "26" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+10 HD, +7 Con, +3 Fighter" },
                    ref: { bonus: 12, breakdown: "+10 HD, +1 Dex, +1 Fighter" },
                    will: { bonus: 14, breakdown: "+10 HD, +3 Wis, +1 Fighter" },
                },
                abilities: { str: 33, dex: 12, con: 25, int: 16, wis: 17, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 26, breakdown: "23 ranks" },
                    { name: "Jump", bonus: 34, breakdown: "23 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Shock Trooper", description: "" }, { name: "Cleave", description: "" }, { name: "Weapon Focus (Bite)", description: "" },
                    { name: "Leap Attack", description: "Multiply Power Attack damage on a charge."}
                ],
                flaws: [],
                environment: "Volcanic mountains",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "40000 gp",
                    items: [
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "The Caldera's Rage",
            class: "Fighter 5",
            hitDice: "16d12+128 (HD) + 5d10+40 (Fighter) = 300 hp",
            challengeRating: 21,
            armorClass: {
                total: 30,
                breakdown: "(-1 size, +1 Dex, +18 natural, +3 armor)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "More feats continue to stack, increasing the damage potential of its charge to truly terrifying levels.",
                "It is a living battering ram, a force of pure kinetic and thermal energy."
            ],
            sheet: {
                baseAtk: 21,
                grapple: 38,
                fullAttack: [
                    { name: "Bite", bonus: "+33", damage: "2d6+13", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Charge Attack", type: "Ex", description: "Power Attack for -21 to hit, +63 damage (with Leap Attack)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "27" },
                ],
                saves: {
                    fort: { bonus: 23, breakdown: "+10 HD, +8 Con, +5 Fighter" },
                    ref: { bonus: 13, breakdown: "+10 HD, +1 Dex, +2 Fighter" },
                    will: { bonus: 15, breakdown: "+10 HD, +3 Wis, +2 Fighter" },
                },
                abilities: { str: 37, dex: 12, con: 27, int: 16, wis: 17, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 28, breakdown: "25 ranks" },
                    { name: "Jump", bonus: 40, breakdown: "25 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Shock Trooper", description: "" }, { name: "Cleave", description: "" }, { name: "Weapon Focus (Bite)", description: "" },
                    { name: "Leap Attack", description: ""}, { name: "Headlong Rush", description: "+2 to attack/damage on charge."}
                ],
                flaws: [],
                environment: "Volcanic mountains",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "85000 gp",
                    items: [
                         { name: "+1 Full Plate", cost: "2,650 gp", description: "" },
                         { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Living Eruption",
            class: "Fighter 10",
            hitDice: "16d12+144 (HD) + 10d10+90 (Fighter) = 400 hp",
            challengeRating: 26,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +1 Dex, +18 natural, +7 armor)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Gains more feats to enhance its charge, including Leap Attack for even more damage multiplication.",
                "Fighter levels provide more bonus feats than any other class, making it the ideal chassis for this specialized build.",
                "It is now a true one-trick pony, but that one trick is to hit with the force of a meteor."
            ],
            sheet: {
                baseAtk: 26,
                grapple: 43,
                fullAttack: [
                    { name: "Bite", bonus: "+39/+34/+29/+24", damage: "2d6+13", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Charge Attack", type: "Ex", description: "With Leap Attack, Power Attack for -26 for +78 damage." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 26, breakdown: "+10 HD, +9 Con, +7 Fighter" },
                    ref: { bonus: 14, breakdown: "+10 HD, +1 Dex, +3 Fighter" },
                    will: { bonus: 16, breakdown: "+10 HD, +3 Wis, +3 Fighter" },
                },
                abilities: { str: 37, dex: 12, con: 29, int: 16, wis: 17, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 32, breakdown: "29 ranks" },
                    { name: "Jump", bonus: 47, breakdown: "29 ranks (for Leap Attack)" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Shock Trooper", description: "" }, { name: "Cleave", description: "" }, { name: "Weapon Focus (Bite)", description: "" },
                    { name: "Leap Attack", description: "Double Power Attack damage bonus on a charge." },
                    { name: "Headlong Rush", description: "+2 to attack and damage on charge." },
                    { name: "Improved Critical (Bite)", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "+3 Full Plate", cost: "10,650 gp", description: "" },
                         { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Comet of Fury",
            class: "Fighter 20",
            hitDice: "16d12+176 (HD) + 20d10+220 (Fighter) = 630 hp",
            challengeRating: 36,
            armorClass: {
                total: 45,
                breakdown: "(-1 size, +1 Dex, +20 natural, +10 armor, +5 deflection)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "With 20 levels of Fighter, it has access to a staggering number of feats, perfecting its charge.",
                "Epic feats enhance its raw physical power, making its charge an extinction-level event.",
                "Its singular focus has made it one of the most dangerous physical combatants in existence."
            ],
            sheet: {
                baseAtk: 36,
                grapple: 55,
                fullAttack: [
                    { name: "Bite", bonus: "+51/+46/+41/+36", damage: "2d6+15", crit: "17-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Charge Attack", type: "Ex", description: "Power Attack for -36 for +108 damage (before multipliers)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/magic and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "32" },
                ],
                saves: {
                    fort: { bonus: 35, breakdown: "+10 HD, +11 Con, +12 Fighter, +2 feat" },
                    ref: { bonus: 19, breakdown: "+10 HD, +1 Dex, +8 Fighter" },
                    will: { bonus: 21, breakdown: "+10 HD, +3 Wis, +8 Fighter" },
                },
                abilities: { str: 41, dex: 12, con: 33, int: 16, wis: 17, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 42, breakdown: "39 ranks" },
                    { name: "Jump", bonus: 60, breakdown: "39 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Shock Trooper", description: "" }, { name: "Cleave", description: "" }, { name: "Weapon Focus (Bite)", description: "" }, { name: "Leap Attack", description: "" }, { name: "Headlong Rush", description: "" }, { name: "Improved Critical (Bite)", description: "" },
                    { name: "Greater Weapon Focus (Bite)", description: "" }, { name: "Epic Weapon Focus (Bite)", description: "" }, { name: "Overwhelming Critical (Bite)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "+5 Full Plate", cost: "26,650 gp", description: "" },
                         { name: "Belt of Giant Strength +6", cost: "36,000 gp", description: "" },
                         { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "World-Smasher",
            class: "Fighter 20 / World-Smasher 10",
            hitDice: "16d12+208 (HD) + 30d12+390 (Classes) = 950 hp",
            challengeRating: 46,
            armorClass: {
                total: 60,
                breakdown: "(-1 size, +1 Dex, +23 natural, +12 armor, +10 deflection, +5 insight)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "The World-Smasher prestige class is the perfect culmination of this build, enhancing its physical power to a godly level.",
                "Its charge can now shatter mountains, and its very presence destabilizes the earth around it.",
                "It has become a true force of nature, its quest for a home now a geological-scale threat."
            ],
            sheet: {
                baseAtk: 46,
                grapple: 69,
                fullAttack: [
                    { name: "Bite", bonus: "+68/+63/+58/+53", damage: "2d6+21", crit: "17-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Earthshaker Charge", type: "Su", description: "Its charge attack now creates an earthquake along its path." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/epic and lawful" },
                    { name: "Spell Resistance", type: "Ex", description: "38" },
                ],
                saves: {
                    fort: { bonus: 47, breakdown: "+10 HD, +13 Con, +24 Class" },
                    ref: { bonus: 29, breakdown: "+10 HD, +1 Dex, +18 Class" },
                    will: { bonus: 31, breakdown: "+10 HD, +3 Wis, +18 Class" },
                },
                abilities: { str: 47, dex: 12, con: 37, int: 16, wis: 17, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 52, breakdown: "49 ranks" },
                    { name: "Jump", bonus: 76, breakdown: "49 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Shock Trooper", description: "" }, { name: "Cleave", description: "" }, { name: "Weapon Focus (Bite)", description: "" }, { name: "Leap Attack", description: "" }, { name: "Headlong Rush", description: "" }, { name: "Improved Critical (Bite)", description: "" }, { name: "Greater Weapon Focus (Bite)", description: "" }, { name: "Epic Weapon Focus (Bite)", description: "" }, { name: "Overwhelming Critical (Bite)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" },
                    { name: "Great Strength", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Devastating Critical (Bite)", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                         { name: "Tome of Strength +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "The Unstoppable Force",
            class: "Fighter 20 / World-Smasher 10 / Epic Fighter 10",
            hitDice: "16d12+240 (HD) + 40d12+600 (Classes) = 1300 hp",
            challengeRating: 56,
            armorClass: {
                total: 75,
                breakdown: "(-1 size, +1 Dex, +26 natural, +15 armor, +12 deflection, +11 insight, +10 sacred)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "At the apex of its power, it is less a creature and more a living concept: the Unstoppable Force.",
                "Its charge is a law of physics. Nothing can stand in its way. If it were to charge an Immovable Object, a new universe would be born from the paradox.",
                "Its tragedy is that it may never find a home, for any place it tries to settle is inevitably shattered by the sheer force of its existence."
            ],
            sheet: {
                baseAtk: 56,
                grapple: 83,
                fullAttack: [
                    { name: "Bite of the Unstoppable Force", bonus: "+84/+79/+74/+69", damage: "2d6+27", crit: "17-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Inevitable Charge", type: "Su", description: "Its charge attack cannot be intercepted, blocked, or avoided by any means short of deific intervention. It bypasses all miss chances and immunities."}
                ],
                specialQualities: [
                    { name: "Primal Force", type: "Ex", description: "Immune to any effect that would stop its movement or alter its trajectory." },
                ],
                saves: {
                    fort: { bonus: 59, breakdown: "+10 HD, +15 Con, +34 Class" },
                    ref: { bonus: 41, breakdown: "+10 HD, +1 Dex, +30 Class" },
                    will: { bonus: 43, breakdown: "+10 HD, +3 Wis, +30 Class" },
                },
                abilities: { str: 55, dex: 12, con: 41, int: 16, wis: 17, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 62, breakdown: "59 ranks" },
                    { name: "Jump", bonus: 91, breakdown: "59 ranks" },
                ],
                feats: [
                     { name: "Power Attack", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Shock Trooper", description: "" }, { name: "Cleave", description: "" }, { name: "Weapon Focus (Bite)", description: "" }, { name: "Leap Attack", description: "" }, { name: "Headlong Rush", description: "" }, { name: "Improved Critical (Bite)", description: "" }, { name: "Greater Weapon Focus (Bite)", description: "" }, { name: "Epic Weapon Focus (Bite)", description: "" }, { name: "Overwhelming Critical (Bite)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Great Strength", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Devastating Critical (Bite)", description: "" },
                     { name: "Perfect Health", description: "" }, { name: "Epic Weapon Specialization (Bite)", description: "" }
                ],
                flaws: [],
                environment: "The end of the line",
                organization: "Unique",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Mountain's Heart", cost: "Artifact", description: "+12 to all physical stats, grants the ability to ignore hardness." },
                         { name: "Hide of the Comet", cost: "Artifact", description: "+15 sacred bonus to AC and saves, grants immunity to force effects." },
                         { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};