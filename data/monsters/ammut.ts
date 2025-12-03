// data/monsters/ammut.ts
import { Monster } from '../../types';

export const ammut: Monster = {
    name: "Am-mut, The Living Thunderstorm",
    description: "A being that was once a mortal caught in a storm of divine power. Their soul was shattered and fused with the raw, chaotic energy of the tempest, transforming them into a sentient thunderstorm of immense power. It drifts across the sky, a being of roaring wind, crackling lightning, and sorrowful rain.",
    roleplayGuide: [
        "You were once a mortal who made the ultimate sacrifice, merging your soul with a storm to stop a world-ending magical cataclysm. You are now a living tempest, a guardian of the skies.",
        "Your consciousness is the calm eye of the storm. The wind and rain are your extensions, used to protect the lands below from greater threats.",
        "You are drawn to places of heroism, your thunderstorms acting as a herald for champions and a cleansing force against great evil.",
        "You are a symbol of nature's power turned to a heroic purpose. While your form is frightening, a hero who sees the soul within the storm will find a powerful ally, a force of nature dedicated to the cause of good."
    ],
    builds: [
        {
            level: 1,
            title: "Wandering Squall",
            class: "Druid 1",
            hitDice: "17d8+119 (HD) + 1d8+7 (Druid) = 208 hp",
            challengeRating: 17,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +8 Dex, +11 deflection)",
            },
            initiative: {
                bonus: 12,
                breakdown: "(+8 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "This creature is a homebrewed CR 17 Outsider (Air, Elemental) to serve as a baseline.",
                "Its form is a swirling vortex of wind and lightning, giving it a high deflection bonus to AC but no natural armor.",
                "Druid levels enhance its connection to nature and weather, providing a solid spellcasting base for its progression."
            ],
            sheet: {
                baseAtk: 13,
                grapple: 25,
                fullAttack: [
                    { name: "Slam", bonus: "+24", damage: "2d8+8 plus 2d6 electricity", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Call Lightning", type: "Sp", description: "At will, as the spell. Caster Level 17th." },
                    { name: "Storm Burst", type: "Su", description: "As a standard action, can create a 30-ft. burst of wind and rain, forcing Fortitude saves (DC 25) to avoid being knocked prone." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic" },
                    { name: "Elemental Traits", type: "Ex", description: "Immunity to poison, sleep, paralysis, stunning. Immunity to electricity." },
                    { name: "Amorphous", type: "Ex", description: "Immune to critical hits." },
                ],
                saves: {
                    fort: { bonus: 19, breakdown: "+10 HD, +7 Con, +2 Druid" },
                    ref: { bonus: 18, breakdown: "+10 HD, +8 Dex" },
                    will: { bonus: 15, breakdown: "+10 HD, +3 Wis, +2 Druid" },
                },
                abilities: { str: 27, dex: 27, con: 25, int: 16, wis: 17, cha: 20 },
                skills: [
                    { name: "Concentration", bonus: 29, breakdown: "21 ranks" },
                    { name: "Knowledge (nature)", bonus: 25, breakdown: "21 ranks" },
                    { name: "Listen", bonus: 25, breakdown: "21 ranks" },
                    { name: "Spot", bonus: 25, breakdown: "21 ranks" },
                    { name: "Survival", bonus: 25, breakdown: "21 ranks" },
                ],
                feats: [
                    { name: "Alertness", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Dodge", description: "" },
                    { name: "Improved Initiative", description: "" }, { name: "Lightning Reflexes", description: "" }, { name: "Flyby Attack", description: "" },
                ],
                flaws: [],
                environment: "Any (sky)",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
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
            title: "Raging Cyclone",
            class: "Druid 3",
            hitDice: "17d8+119 (HD) + 3d8+21 (Druid) = 224 hp",
            challengeRating: 19,
            armorClass: {
                total: 30,
                breakdown: "(-1 size, +8 Dex, +11 deflection, +2 armor)",
            },
            initiative: {
                bonus: 12,
                breakdown: "(+8 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains access to 2nd level druid spells, enhancing its control over weather and nature.",
                "Woodland Stride allows it to move through its natural domain with ease."
            ],
            sheet: {
                baseAtk: 15,
                grapple: 27,
                fullAttack: [
                    { name: "Slam", bonus: "+26", damage: "2d8+8 plus 2d6 electricity", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Call Lightning", type: "Sp", description: "At will, Caster Level 19th." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic" },
                    { name: "Woodland Stride", type: "Ex", description: "Move through natural thorns, briars, and overgrown areas at normal speed." },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+10 HD, +7 Con, +3 Druid" },
                    ref: { bonus: 19, breakdown: "+10 HD, +8 Dex, +1 Druid" },
                    will: { bonus: 16, breakdown: "+10 HD, +3 Wis, +3 Druid" },
                },
                abilities: { str: 27, dex: 27, con: 25, int: 16, wis: 17, cha: 20 },
                skills: [
                    { name: "Concentration", bonus: 31, breakdown: "23 ranks" },
                    { name: "Knowledge (nature)", bonus: 27, breakdown: "23 ranks" },
                    { name: "Survival", bonus: 27, breakdown: "23 ranks" },
                ],
                feats: [
                     { name: "Alertness", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Dodge", description: "" },
                    { name: "Improved Initiative", description: "" }, { name: "Lightning Reflexes", description: "" }, { name: "Flyby Attack", description: "" }, {name: "Natural Spell", description: "Cast spells in wild shape."},
                ],
                flaws: [],
                environment: "Any (sky)",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "38,000 gp",
                    items: [
                         { name: "Bracers of Armor +2", cost: "4000 gp", description: ""},
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Periapt of Wisdom +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Eye of the Storm",
            class: "Druid 5",
            hitDice: "17d8+119 (HD) + 5d8+35 (Druid) = 248 hp",
            challengeRating: 21,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +8 Dex, +11 deflection, +5 armor)",
            },
            initiative: {
                bonus: 12,
                breakdown: "(+8 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains Wild Shape, allowing it to assume the form of powerful elementals.",
                "Access to 3rd level spells like Sleet Storm and Call Lightning further solidifies its role as a master of weather."
            ],
            sheet: {
                baseAtk: 16,
                grapple: 28,
                fullAttack: [
                    { name: "Slam", bonus: "+27", damage: "2d8+8 plus 2d6 electricity", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Wild Shape", type: "Su", description: "2/day, can turn into a Medium elemental." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic" },
                    { name: "Trackless Step", type: "Ex", description: "Leaves no trail in natural surroundings." },
                ],
                saves: {
                    fort: { bonus: 21, breakdown: "+10 HD, +7 Con, +4 Druid" },
                    ref: { bonus: 20, breakdown: "+10 HD, +8 Dex, +2 Druid" },
                    will: { bonus: 17, breakdown: "+10 HD, +3 Wis, +4 Druid" },
                },
                abilities: { str: 27, dex: 27, con: 25, int: 16, wis: 17, cha: 20 },
                skills: [
                    { name: "Concentration", bonus: 33, breakdown: "25 ranks" },
                    { name: "Knowledge (nature)", bonus: 29, breakdown: "25 ranks" },
                    { name: "Survival", bonus: 29, breakdown: "25 ranks" },
                ],
                feats: [
                     { name: "Alertness", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Dodge", description: "" },
                    { name: "Improved Initiative", description: "" }, { name: "Lightning Reflexes", description: "" }, { name: "Flyby Attack", description: "" }, {name: "Natural Spell", description: ""},
                ],
                flaws: [],
                environment: "Any (sky)",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "85,000 gp",
                    items: [
                         { name: "Bracers of Armor +5", cost: "25000 gp", description: ""},
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Periapt of Wisdom +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Heart of the Gale",
            class: "Druid 5 / Stormcaster 5",
            hitDice: "17d8+136 (HD) + 10d8+80 (Classes) = 337 hp",
            challengeRating: 27,
            armorClass: {
                total: 40,
                breakdown: "(-1 size, +8 Dex, +13 deflection, +10 armor)",
            },
            initiative: {
                bonus: 12,
                breakdown: "(+8 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The Stormcaster prestige class (from Stormwrack) grants powerful weather-related abilities.",
                "It can now see through any weather, is never hindered by wind, and its electrical attacks are empowered.",
                "It gains the ability to transform into a true storm elemental, becoming a massive whirlwind of destructive power."
            ],
            sheet: {
                baseAtk: 20,
                grapple: 32,
                fullAttack: [
                    { name: "Slam", bonus: "+31/+26/+21/+16", damage: "2d8+8 plus 4d6 electricity", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Storm Elemental Wild Shape", type: "Su", description: "3/day, can transform into a Huge storm elemental." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic" },
                    { name: "Immunity to Electricity", type: "Ex", description: "" },
                    { name: "Storm Eyes", type: "Ex", description: "Can see perfectly in any weather conditions." },
                ],
                saves: {
                    fort: { bonus: 27, breakdown: "+10 HD, +9 Con, +8 Class" },
                    ref: { bonus: 21, breakdown: "+10 HD, +8 Dex, +3 Class" },
                    will: { bonus: 22, breakdown: "+10 HD, +3 Wis, +9 Class" },
                },
                abilities: { str: 27, dex: 27, con: 29, int: 16, wis: 17, cha: 20 },
                skills: [
                    { name: "Concentration", bonus: 38, breakdown: "29 ranks" },
                    { name: "Knowledge (nature)", bonus: 33, breakdown: "29 ranks" },
                    { name: "Survival", bonus: 33, breakdown: "29 ranks" },
                ],
                feats: [
                    { name: "Alertness", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Dodge", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Lightning Reflexes", description: "" }, { name: "Flyby Attack", description: "" },
                    { name: "Empower Spell-Like Ability (Call Lightning)", description: "" }, { name: "Natural Spell", description: "" }
                ],
                flaws: [],
                environment: "Any (sky)",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                         { name: "Periapt of Wisdom +4", cost: "16,000 gp", description: "" },
                         { name: "Gloves of Dexterity +4", cost: "16,000 gp", description: "" },
                         { name: "Bracers of Armor +8", cost: "64,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Maelstrom Incarnate",
            class: "Druid 5 / Stormcaster 10 / Elemental Savant (Air) 5",
            hitDice: "17d8+170 (HD) + 20d8+200 (Classes) = 545 hp",
            challengeRating: 37,
            armorClass: {
                total: 50,
                breakdown: "(-1 size, +8 Dex, +15 deflection, +10 armor, +8 insight)",
            },
            initiative: {
                bonus: 12,
                breakdown: "(+8 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Elemental Savant prestige class grants mastery over Air and Electricity.",
                "It is now permanently surrounded by a powerful whirlwind and can transform its physical form into pure lightning to travel.",
                "Its connection to its mortal past is fading, replaced by the pure, raw consciousness of the storm."
            ],
            sheet: {
                baseAtk: 25,
                grapple: 37,
                fullAttack: [
                    { name: "Slam", bonus: "+36/+31/+26/+21", damage: "2d8+8 plus 8d6 electricity", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Greater Whirlwind", type: "Su", description: "Constantly surrounded by a whirlwind that impedes movement and ranged attacks." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/magic and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "37" },
                ],
                saves: {
                    fort: { bonus: 36, breakdown: "+10 HD, +12 Con, +14 Class" },
                    ref: { bonus: 26, breakdown: "+10 HD, +8 Dex, +8 Class" },
                    will: { bonus: 29, breakdown: "+10 HD, +3 Wis, +16 Class" },
                },
                abilities: { str: 27, dex: 27, con: 35, int: 16, wis: 17, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 50, breakdown: "38 ranks" },
                    { name: "Knowledge (nature)", bonus: 43, breakdown: "38 ranks" },
                    { name: "Survival", bonus: 43, breakdown: "38 ranks" },
                ],
                feats: [
                    { name: "Alertness", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Dodge", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Lightning Reflexes", description: "" }, { name: "Flyby Attack", description: "" }, { name: "Empower Spell-Like Ability (Call Lightning)", description: "" }, { name: "Natural Spell", description: "" },
                    { name: "Epic Toughness", description: "" }, { name: "Armor Skin", description: "" }, { name: "Maximize Spell-Like Ability (Call Lightning)", description: "" }
                ],
                flaws: [],
                environment: "Any (sky)",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                         { name: "Bracers of Armor +10", cost: "100,000 gp", description: "" }, // Not a valid item
                    ]
                }
            }
        },
        {
            level: 30,
            title: "The Tempest",
            class: "Druid 5 / Stormcaster 10 / Elemental Savant 5 / Tempest 10",
            hitDice: "17d8+204 (HD) + 30d8+360 (Classes) = 850 hp",
            challengeRating: 47,
            armorClass: {
                total: 65,
                breakdown: "(-1 size, +8 Dex, +18 deflection, +12 armor, +18 sacred)",
            },
            initiative: {
                bonus: 12,
                breakdown: "(+8 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The Tempest epic prestige class from Librim Eternia makes it a true god of storms.",
                "It can create continent-spanning hurricanes, its voice is the thunder, and its gaze is the lightning.",
                "It has found a new purpose not as a mortal soul, but as a fundamental force of nature, the cleansing rain and the destructive wind in perfect, chaotic balance."
            ],
            sheet: {
                baseAtk: 32,
                grapple: 44,
                fullAttack: [
                    { name: "Slam", bonus: "+43/+38/+33/+28", damage: "2d8+8 plus 12d6 electricity", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Eye of the Hurricane", type: "Su", description: "Can create a hurricane a mile in diameter, with a calm eye at its center where it resides." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/magic, epic, and lawful" },
                    { name: "Spell Resistance", type: "Ex", description: "47" },
                ],
                saves: {
                    fort: { bonus: 46, breakdown: "+10 HD, +14 Con, +22 Class" },
                    ref: { bonus: 36, breakdown: "+10 HD, +8 Dex, +18 Class" },
                    will: { bonus: 39, breakdown: "+10 HD, +3 Wis, +26 Class" },
                },
                abilities: { str: 27, dex: 27, con: 39, int: 20, wis: 17, cha: 28 },
                skills: [
                    { name: "Concentration", bonus: 64, breakdown: "50 ranks" },
                    { name: "Knowledge (nature)", bonus: 57, breakdown: "50 ranks" },
                    { name: "Survival", bonus: 55, breakdown: "50 ranks" },
                ],
                feats: [
                    { name: "Alertness", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Dodge", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Lightning Reflexes", description: "" }, { name: "Flyby Attack", description: "" }, { name: "Empower Spell-Like Ability (Call Lightning)", description: "" }, { name: "Natural Spell", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Armor Skin", description: "" }, { name: "Maximize Spell-Like Ability (Call Lightning)", description: "" },
                    { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Energy Substitution (Sonic)", description: "" }
                ],
                flaws: [],
                environment: "The heart of a perpetual storm",
                organization: "Unique",
                alignment: "Chaotic Neutral",
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
            title: "God of the Sky",
            class: "Druid 5 / Stormcaster 10 / Elemental Savant 5 / Tempest 10 / Epic Druid 10",
            hitDice: "17d8+238 (HD) + 40d8+560 (Classes) = 1150 hp",
            challengeRating: 57,
            armorClass: {
                total: 80,
                breakdown: "(-1 size, +8 Dex, +22 deflection, +15 armor, +20 sacred, +16 insight)",
            },
            initiative: {
                bonus: 12,
                breakdown: "(+8 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Having achieved apotheosis, it is the storm, the sky, and the fury of nature itself.",
                "Its whims shape the weather of entire continents. It is a primal god, worshiped in fear and awe.",
                "The mortal soul within is a distant, quiet echo, the still point at the center of the raging hurricane that is its divine existence."
            ],
            sheet: {
                baseAtk: 40,
                grapple: 52,
                fullAttack: [
                    { name: "Slam", bonus: "+51/+46/+41/+36", damage: "2d8+8 plus 20d6 electricity", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "World Storm", type: "Su", description: "1/day, can cover an entire planet in a storm that lasts for a year and a day."}
                ],
                specialQualities: [
                    { name: "One with the Sky", type: "Ex", description: "Cannot be harmed by anything that cannot reach the sky. It is as omnipresent and indestructible as the atmosphere itself." },
                ],
                saves: {
                    fort: { bonus: 56, breakdown: "+10 HD, +16 Con, +30 Class" },
                    ref: { bonus: 46, breakdown: "+10 HD, +8 Dex, +28 Class" },
                    will: { bonus: 49, breakdown: "+10 HD, +3 Wis, +36 Class" },
                },
                abilities: { str: 27, dex: 27, con: 43, int: 22, wis: 17, cha: 32 },
                skills: [
                    { name: "Concentration", bonus: 79, breakdown: "63 ranks" },
                    { name: "Knowledge (nature)", bonus: 72, breakdown: "63 ranks" },
                    { name: "Survival", bonus: 70, breakdown: "63 ranks" },
                ],
                feats: [
                    { name: "Alertness", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Dodge", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Lightning Reflexes", description: "" }, { name: "Flyby Attack", description: "" }, { name: "Empower Spell-Like Ability (Call Lightning)", description: "" }, { name: "Natural Spell", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Armor Skin", description: "" }, { name: "Maximize Spell-Like Ability (Call Lightning)", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Energy Substitution (Sonic)", description: "" },
                    { name: "Great Charisma", description: "" }, { name: "Perfect Health", description: "" }, { name: "Epic Reputation", description: "" }
                ],
                flaws: [],
                environment: "The sky of any world",
                organization: "Unique",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "Heart of the Maelstrom", cost: "Artifact", description: "+12 to all physical stats, grants control over all weather." },
                         { name: "Crown of Thunder", cost: "Artifact", description: "+12 to all mental stats, can summon epic storms at will." },
                    ]
                }
            }
        },
    ]
};