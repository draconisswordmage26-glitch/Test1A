// data/monsters/kami.ts
import { Monster } from '../../types';

export const kami: Monster = {
    name: "Ryu-jin, Kami of the World-Coil River",
    description: "A great spirit of nature, a Kami is the sentient essence of a specific, significant natural feature. Ryu-jin is the soul of a continent-spanning river, its form a flowing, serpentine dragon of water and light. It is a guardian of the natural cycle, a force of life, and, when angered, a devastating flood.",
    roleplayGuide: [
        "You are the ancient, benevolent spirit of a great river, a guardian of life and a source of wisdom. Your thoughts flow with the patience and power of the waters you embody.",
        "You are the protector of your domain and all life that depends on it. You seek to guide mortals, teaching them to live in harmony with the natural world.",
        "Your power is a force for creation and healing. Your floods are not destructive, but cleansing, washing away corruption and renewing the fertility of the land.",
        "You are a wise and powerful nature spirit. Mortals who respect your wisdom and seek to protect the natural balance will find a steadfast guardian and a source of profound magical power."
    ],
    builds: [
        {
            level: 1,
            title: "The River's Source",
            class: "Druid 1",
            hitDice: "17d8+102 (HD) + 1d8+6 (Druid) = 192 hp",
            challengeRating: 17,
            armorClass: {
                total: 29,
                breakdown: "(-1 size, +6 Dex, +14 natural)",
            },
            initiative: {
                bonus: 6,
                breakdown: "(+6 Dex)",
            },
            buildNotes: [
                "This creature is a homebrewed CR 17 Outsider (Native, Water, Shapechanger) to serve as a baseline for the Kami.",
                "Its form is a serpentine dragon made of water, giving it high natural armor and dexterity.",
                "Druid is the natural class choice, enhancing its connection to the natural world it embodies."
            ],
            sheet: {
                baseAtk: 13,
                grapple: 26,
                fullAttack: [
                    { name: "Bite", bonus: "+21", damage: "2d6+9", crit: "20/x2", type: "Melee" },
                    { name: "Tail Slap", bonus: "+19", damage: "2d8+4 and constrict", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Water Jet", type: "Su", description: "60-ft. line of water, 10d6 damage, Reflex DC 26 half." },
                    { name: "Wild Shape", type: "Su", description: "1/day, can assume the form of a water-dwelling animal." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Amphibious", type: "Ex", description: "Can breathe air and water." },
                ],
                saves: {
                    fort: { bonus: 18, breakdown: "+10 HD, +6 Con, +2 Druid" },
                    ref: { bonus: 16, breakdown: "+10 HD, +6 Dex" },
                    will: { bonus: 16, breakdown: "+10 HD, +4 Wis, +2 Druid" },
                },
                abilities: { str: 28, dex: 23, con: 22, int: 19, wis: 19, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 28, breakdown: "21 ranks" },
                    { name: "Diplomacy", bonus: 30, breakdown: "21 ranks" },
                    { name: "Knowledge (nature)", bonus: 27, breakdown: "21 ranks" },
                    { name: "Sense Motive", bonus: 27, breakdown: "21 ranks" },
                    { name: "Swim", bonus: 35, breakdown: "21 ranks" },
                ],
                feats: [
                    { name: "Alertness", description: "" }, { name: "Cleave", description: "" }, { name: "Dodge", description: "" },
                    { name: "Improved Natural Attack (Bite)", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Bite)", description: "" },
                ],
                flaws: [],
                environment: "Any aquatic",
                organization: "Solitary (Unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Periapt of Wisdom +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "River's Heart",
            class: "Druid 3",
            hitDice: "17d8+102 (HD) + 3d8+18 (Druid) = 240 hp",
            challengeRating: 19,
            armorClass: {
                total: 29,
                breakdown: "(-1 size, +6 Dex, +14 natural)",
            },
            initiative: {
                bonus: 6,
                breakdown: "(+6 Dex)",
            },
            buildNotes: [
                "Gains access to 2nd-level Druid spells and Trackless Step.",
                "Its connection to the natural flow of water deepens."
            ],
            sheet: {
                baseAtk: 14,
                grapple: 27,
                fullAttack: [
                    { name: "Bite", bonus: "+22", damage: "2d6+9", crit: "20/x2", type: "Melee" },
                    { name: "Tail Slap", bonus: "+20", damage: "2d8+4", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 3rd-level Druid." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Trackless Step", type: "Ex", description: "Leaves no trail."}
                ],
                saves: {
                    fort: { bonus: 19, breakdown: "+10 HD, +6 Con, +3 Druid" },
                    ref: { bonus: 17, breakdown: "+10 HD, +6 Dex, +1 Druid" },
                    will: { bonus: 17, breakdown: "+10 HD, +4 Wis, +3 Druid" },
                },
                abilities: { str: 28, dex: 23, con: 22, int: 19, wis: 19, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 30, breakdown: "23 ranks" },
                    { name: "Knowledge (nature)", bonus: 29, breakdown: "23 ranks" },
                    { name: "Swim", bonus: 37, breakdown: "23 ranks" },
                ],
                feats: [
                    { name: "Alertness", description: "" }, { name: "Cleave", description: "" }, { name: "Dodge", description: "" }, { name: "Improved Natural Attack (Bite)", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Bite)", description: "" },
                    { name: "Natural Spell", description: "Can cast spells in wild shape."}
                ],
                flaws: [],
                environment: "Any aquatic",
                organization: "Solitary (Unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "40000 gp",
                    items: [
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Periapt of Wisdom +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Flood Lord",
            class: "Druid 5",
            hitDice: "17d8+102 (HD) + 5d8+30 (Druid) = 260 hp",
            challengeRating: 21,
            armorClass: {
                total: 29,
                breakdown: "(-1 size, +6 Dex, +14 natural)",
            },
            initiative: {
                bonus: 6,
                breakdown: "(+6 Dex)",
            },
            buildNotes: [
                "Gains Wild Shape, allowing it to assume the forms of powerful water elementals and animals.",
                "Access to 3rd-level spells like 'Control Water' makes it a master of its domain."
            ],
            sheet: {
                baseAtk: 15,
                grapple: 28,
                fullAttack: [
                    { name: "Bite", bonus: "+23", damage: "2d6+9", crit: "20/x2", type: "Melee" },
                    { name: "Tail Slap", bonus: "+21", damage: "2d8+4", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 5th-level Druid." },
                    { name: "Wild Shape", type: "Su", description: "3/day, can assume animal forms up to Large size."}
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+10 HD, +6 Con, +4 Druid" },
                    ref: { bonus: 17, breakdown: "+10 HD, +6 Dex, +1 Druid" },
                    will: { bonus: 18, breakdown: "+10 HD, +4 Wis, +4 Druid" },
                },
                abilities: { str: 28, dex: 23, con: 22, int: 19, wis: 19, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 32, breakdown: "25 ranks" },
                    { name: "Knowledge (nature)", bonus: 31, breakdown: "25 ranks" },
                    { name: "Swim", bonus: 39, breakdown: "25 ranks" },
                ],
                feats: [
                     { name: "Alertness", description: "" }, { name: "Cleave", description: "" }, { name: "Dodge", description: "" }, { name: "Improved Natural Attack (Bite)", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Bite)", description: "" },
                    { name: "Natural Spell", description: "Can cast spells in wild shape."}
                ],
                flaws: [],
                environment: "Any aquatic",
                organization: "Solitary (Unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "85000 gp",
                    items: [
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Periapt of Wisdom +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Guardian of the Watershed",
            class: "Druid 6 / Planar Shepherd 4",
            hitDice: "17d8+136 (HD) + 10d8+80 (Classes) = 337 hp",
            challengeRating: 27,
            armorClass: {
                total: 40,
                breakdown: "(-1 size, +6 Dex, +14 natural, +6 armor, +5 deflection)",
            },
            initiative: {
                bonus: 6,
                breakdown: "(+6 Dex)",
            },
            buildNotes: [
                "Planar Shepherd prestige class represents its mastery over its own domain, the river.",
                "It can imbue areas with the traits of its home, creating magical springs and oases.",
                "Its spellcasting becomes much more potent, able to call floods and control the weather in a large area."
            ],
            sheet: {
                baseAtk: 20,
                grapple: 33,
                fullAttack: [
                    { name: "Bite", bonus: "+29/+24/+19/+14", damage: "2d6+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 10th." },
                    { name: "Planar Bubble", type: "Su", description: "Can imbue an area with the traits of a pure, magical river." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 25, breakdown: "+10 HD, +8 Con, +7 Class" },
                    ref: { bonus: 19, breakdown: "+10 HD, +6 Dex, +3 Class" },
                    will: { bonus: 23, breakdown: "+10 HD, +4 Wis, +9 Class" },
                },
                abilities: { str: 28, dex: 23, con: 26, int: 19, wis: 19, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 37, breakdown: "29 ranks" },
                    { name: "Knowledge (nature)", bonus: 34, breakdown: "29 ranks" },
                    { name: "Swim", bonus: 43, breakdown: "29 ranks" },
                ],
                feats: [
                    { name: "Alertness", description: "" }, { name: "Cleave", description: "" }, { name: "Dodge", description: "" }, { name: "Improved Natural Attack (Bite)", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Bite)", description: "" },
                    { name: "Natural Spell", description: "" }, { name: "Empower Spell", description: "" }
                ],
                flaws: [],
                environment: "Any aquatic",
                organization: "Solitary (Unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Bracers of Armor +6", cost: "36,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Heart of the World-Coil",
            class: "Druid 6 / Planar Shepherd 10 / Contemplative 4",
            hitDice: "17d8+170 (HD) + 20d8+200 (Classes) = 545 hp",
            challengeRating: 37,
            armorClass: {
                total: 50,
                breakdown: "(-1 size, +6 Dex, +16 natural, +8 armor, +6 deflection, +5 insight)",
            },
            initiative: {
                bonus: 6,
                breakdown: "(+6 Dex)",
            },
            buildNotes: [
                "Contemplative prestige class represents its divine ascension, becoming a quasi-deity of its domain.",
                "Gains a divine spark, immunity to disease, and powerful spell-like abilities.",
                "It is now a true nature god in miniature, its river a sacred place."
            ],
            sheet: {
                baseAtk: 25,
                grapple: 38,
                fullAttack: [
                    { name: "Bite", bonus: "+34/+29/+24/+19", damage: "2d6+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 20th-level Druid." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/cold iron and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "37" },
                    { name: "Divine Health", type: "Ex", description: "Immune to all diseases." },
                ],
                saves: {
                    fort: { bonus: 33, breakdown: "+10 HD, +10 Con, +13 Class" },
                    ref: { bonus: 23, breakdown: "+10 HD, +6 Dex, +7 Class" },
                    will: { bonus: 31, breakdown: "+10 HD, +4 Wis, +17 Class" },
                },
                abilities: { str: 28, dex: 23, con: 30, int: 19, wis: 19, cha: 28 },
                skills: [
                    { name: "Concentration", bonus: 48, breakdown: "38 ranks" },
                    { name: "Knowledge (nature)", bonus: 44, breakdown: "38 ranks" },
                ],
                feats: [
                    { name: "Alertness", description: "" }, { name: "Cleave", description: "" }, { name: "Dodge", description: "" }, { name: "Improved Natural Attack (Bite)", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Bite)", description: "" }, { name: "Natural Spell", description: "" }, { name: "Empower Spell", description: "" },
                    { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Automatic Quicken Spell", description: "" },
                ],
                flaws: [],
                environment: "Its sacred river",
                organization: "Unique",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Genesis Avatar",
            class: "Druid 6 / Planar Shepherd 10 / Contemplative 4 / Genesis Avatar 10",
            hitDice: "17d8+204 (HD) + 30d8+360 (Classes) = 850 hp",
            challengeRating: 47,
            armorClass: {
                total: 65,
                breakdown: "(-1 size, +6 Dex, +18 natural, +10 armor, +10 deflection, +12 insight)",
            },
            initiative: {
                bonus: 6,
                breakdown: "(+6 Dex)",
            },
            buildNotes: [
                "The Genesis Avatar epic prestige class from Librim Eternia allows it to create demiplanes.",
                "In response to the corruption of its river, it has learned to create a new, perfect river in its own pocket dimension, a sanctuary for the pure life it protects.",
                "It now has a choice: cleanse the old world with a divine flood, or shepherd the last remnants of unsullied nature into its new one."
            ],
            sheet: {
                baseAtk: 32,
                grapple: 45,
                fullAttack: [
                    { name: "Bite", bonus: "+41", damage: "2d6+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Create Demiplane", type: "Su", description: "Can create a demiplane with the 'water' and 'life-giving' traits." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/cold iron, epic, and chaotic" },
                    { name: "Spell Resistance", type: "Ex", description: "47" },
                ],
                saves: {
                    fort: { bonus: 43, breakdown: "+10 HD, +12 Con, +21 Class" },
                    ref: { bonus: 33, breakdown: "+10 HD, +6 Dex, +17 Class" },
                    will: { bonus: 41, breakdown: "+10 HD, +4 Wis, +27 Class" },
                },
                abilities: { str: 28, dex: 23, con: 34, int: 23, wis: 19, cha: 32 },
                skills: [
                    { name: "Concentration", bonus: 62, breakdown: "50 ranks" },
                    { name: "Knowledge (nature)", bonus: 58, breakdown: "50 ranks" },
                ],
                feats: [
                    { name: "Alertness", description: "" }, { name: "Dodge", description: "" }, { name: "Improved Natural Attack (Bite)", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Bite)", description: "" }, { name: "Natural Spell", description: "" }, { name: "Empower Spell", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Automatic Quicken Spell", description: "" },
                    { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Ignore Material Components", description: "" },
                ],
                flaws: [],
                environment: "Its personal demiplane",
                organization: "Unique",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "The First River",
            class: "Druid 6 / Planar Shepherd 10 / Contemplative 4 / Genesis Avatar 10 / Epic Druid 10",
            hitDice: "17d8+238 (HD) + 40d8+560 (Classes) = 1150 hp",
            challengeRating: 57,
            armorClass: {
                total: 80,
                breakdown: "(-1 size, +6 Dex, +20 natural, +12 armor, +12 deflection, +16 insight, +15 sacred)",
            },
            initiative: {
                bonus: 6,
                breakdown: "(+6 Dex)",
            },
            buildNotes: [
                "It has achieved true divinity. It is no longer the spirit of one river, but the concept of 'river' itself.",
                "All rivers are now a reflection of it, and it is a reflection of all rivers. It can travel between them at will.",
                "It has become a primal god of nature, a force of creation and destruction, its final choice between cleansing the world or creating a new one a secret held in its deep, flowing heart."
            ],
            sheet: {
                baseAtk: 40,
                grapple: 53,
                fullAttack: [
                    { name: "Bite", bonus: "+49", damage: "2d6+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Deluge", type: "Su", description: "1/day, can cause all rivers on a continent to flood their banks for 40 days and 40 nights."}
                ],
                specialQualities: [
                    { name: "One with the Waters", type: "Ex", description: "Cannot be killed as long as water flows. Can reform its body from any significant source of water." },
                ],
                saves: {
                    fort: { bonus: 53, breakdown: "+10 HD, +14 Con, +29 Class" },
                    ref: { bonus: 43, breakdown: "+10 HD, +6 Dex, +27 Class" },
                    will: { bonus: 51, breakdown: "+10 HD, +4 Wis, +37 Class" },
                },
                abilities: { str: 28, dex: 23, con: 38, int: 25, wis: 19, cha: 36 },
                skills: [
                    { name: "Concentration", bonus: 76, breakdown: "63 ranks" },
                    { name: "Knowledge (nature)", bonus: 73, breakdown: "63 ranks" },
                ],
                feats: [
                     { name: "Alertness", description: "" }, { name: "Dodge", description: "" }, { name: "Improved Natural Attack (Bite)", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Bite)", description: "" }, { name: "Natural Spell", description: "" }, { name: "Empower Spell", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Automatic Quicken Spell", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Ignore Material Components", description: "" },
                    { name: "Great Charisma", description: "" }, { name: "Perfect Health", description: "" },
                ],
                flaws: [],
                environment: "All rivers",
                organization: "Unique",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Heart of the Ocean", cost: "Artifact", description: "" },
                         { name: "The Mantle of the First Spring", cost: "Artifact", description: "" },
                         { name: "Jewel of the World-Coil", cost: "Artifact", description: "" },
                    ]
                }
            }
        },
    ]
};