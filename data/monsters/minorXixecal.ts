// data/monsters/minorXixecal.ts
import { Monster } from '../../types';

export const minorXixecal: Monster = {
    name: "Minor Xixecal, Winter's Heart",
    description: "A lesser form of the apocalyptic Xixecal, this colossal aberration of ice and malice is still a sight to behold. It wanders the coldest wastes, creating servants of ice and destroying all warmth and life.",
    roleplayGuide: [
        "You are an alien intelligence whose goal is perfect, silent, crystalline order. Life, with its heat, noise, and chaos, is an intolerable flaw in the universe.",
        "Communicate through psionic projections of geometric cold and feelings of profound stillness. You do not hate life; you see it as a painful impurity that must be cleansed.",
        "Your actions are not malicious, but methodical. You are like a sculptor carving away flawed stone to reveal the perfect form underneath—a silent world of ice.",
        "You might be reasoned with by another being of immense intellect or cosmic perspective. If it can be proven that your goal of 'perfect order' is flawed, or that another path to it exists, you may alter your methods."
    ],
    builds: [
        {
            level: 1,
            title: "The Silent Glacier",
            class: "Druid 1",
            hitDice: "20d8+160 (HD) + 1d8+8 (Druid) = 261 hp",
            challengeRating: 17,
            armorClass: {
                total: 30,
                breakdown: "(-2 size, +22 natural)",
            },
            initiative: {
                bonus: 0,
                breakdown: "(+0 Dex)",
            },
            buildNotes: [
                "This is a scaled-down Xixecal, designed to be a CR 17 threat with 20 Aberration HD.",
                "The Druid level grants it minor spellcasting and an animal companion (likely a Polar Bear), enhancing its connection to the natural, frozen world.",
                "Its primary power comes from its innate abilities: DR, SR, Fast Healing, and devastating slam attacks."
            ],
            sheet: {
                baseAtk: 15,
                grapple: 34,
                fullAttack: [
                    { name: "2 Slams", bonus: "+24", damage: "2d6+11", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Cone of Cold", type: "Su", description: "60-foot cone, 15d6 cold damage, Reflex DC 28 half. Usable every 1d4 rounds." },
                    { name: "Druid Spells", type: "Sp", description: "Can cast 1st level Druid spells. Caster Level 1." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/bludgeoning and magic" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Fast Healing", type: "Ex", description: "5" },
                    { name: "Blindsight", type: "Ex", description: "120 ft." },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+12 HD, +8 Con" },
                    ref: { bonus: 6, breakdown: "+6 HD, +0 Dex" },
                    will: { bonus: 21, breakdown: "+12 HD, +7 Wis, +2 Druid" },
                },
                abilities: { str: 33, dex: 10, con: 26, int: 23, wis: 24, cha: 26 },
                skills: [
                    { name: "Concentration", bonus: 31, breakdown: "31 ranks" },
                    { name: "Knowledge (nature)", bonus: 31, breakdown: "31 ranks" },
                    { name: "Knowledge (the planes)", bonus: 31, breakdown: "31 ranks" },
                    { name: "Listen", bonus: 30, breakdown: "30 ranks" },
                    { name: "Spot", bonus: 30, breakdown: "30 ranks" },
                    { name: "Survival", bonus: 30, breakdown: "30 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Great Cleave", description: "Continue cleaving after the first extra attack." },
                    { name: "Improved Sunder", description: "No AoO for sundering." },
                    { name: "Awesome Blow", description: "Send smaller foes flying." },
                    { name: "Improved Bull Rush", description: "Prerequisite for Awesome Blow." },
                    { name: "Alertness", description: "+2 to Listen and Spot." },
                ],
                flaws: [],
                environment: "Cold deserts",
                organization: "Solitary",
                alignment: "Chaotic Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +1", cost: "4,000 gp", description: "" },
                        { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Geometer of Frost",
            class: "Druid 5",
            hitDice: "20d8+160 (HD) + 5d8+40 (Druid) = 305 hp",
            challengeRating: 17,
            armorClass: {
                total: 32,
                breakdown: "(-2 size, +22 natural, +2 armor)",
            },
            initiative: { bonus: 0, breakdown: "(+0 Dex)" },
            buildNotes: ["Gains access to 3rd-level Druid spells like Sleet Storm and Call Lightning.", "Wild Shape provides tactical flexibility, though its base form is likely superior in combat.", "Feat selection enhances its spellcasting prowess."],
            sheet: {
                baseAtk: 18,
                grapple: 37,
                fullAttack: [
                     { name: "2 Slams", bonus: "+27", damage: "2d6+11", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                     { name: "Cone of Cold", type: "Su", description: "60-foot cone, 15d6 cold damage, Reflex DC 29 half." },
                    { name: "Druid Spells", type: "Sp", description: "Can cast 3rd level Druid spells. Caster Level 5." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/bludgeoning and magic" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Fast Healing", type: "Ex", description: "5" },
                ],
                saves: {
                    fort: { bonus: 23, breakdown: "+12 HD, +9 Con, +2 Druid" },
                    ref: { bonus: 7, breakdown: "+6 HD, +0 Dex, +1 Druid" },
                    will: { bonus: 23, breakdown: "+12 HD, +7 Wis, +4 Druid" },
                },
                abilities: { str: 33, dex: 10, con: 28, int: 23, wis: 24, cha: 26 },
                skills: [
                    { name: "Concentration", bonus: 36, breakdown: "36 ranks" },
                    { name: "Knowledge (nature)", bonus: 36, breakdown: "36 ranks" },
                    { name: "Listen", bonus: 35, breakdown: "35 ranks" },
                    { name: "Spot", bonus: 35, breakdown: "35 ranks" },
                    { name: "Survival", bonus: 35, breakdown: "35 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Great Cleave", description: "Continue cleaving after the first extra attack." },
                    { name: "Improved Sunder", description: "No AoO for sundering." },
                    { name: "Awesome Blow", description: "Send smaller foes flying." },
                    { name: "Improved Bull Rush", description: "Prerequisite for Awesome Blow." },
                    { name: "Alertness", description: "+2 to Listen and Spot." },
                    { name: "Natural Spell", description: "Cast spells while in Wild Shape." },
                ],
                flaws: [],
                environment: "Cold deserts",
                organization: "Solitary",
                alignment: "Chaotic Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "49,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +2", cost: "16,000 gp", description: "" },
                        { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                        { name: "Bracers of Armor +2", cost: "4,000 gp", description: "" },
                        { name: "Periapt of Wisdom +2", cost: "4,000 gp", description: "" },
                        { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Architect of the Hoarfrost",
            class: "Druid 6 / Planar Shepherd 4",
            hitDice: "20d8+180 (HD) + 10d8+90 (Druid/PS) = 375 hp",
            challengeRating: 20,
            armorClass: {
                total: 35,
                breakdown: "(-2 size, +22 natural, +5 armor)",
            },
            initiative: { bonus: 0, breakdown: "(+0 Dex)" },
            buildNotes: ["Planar Shepherd prestige class grants incredible powers related to a chosen plane (likely the Frostfell).", "At this level, it can grant planar traits to bubbles of reality and gain powerful immunities.", "This build shifts focus from melee to overwhelming magical and environmental control."],
            sheet: {
                baseAtk: 22,
                grapple: 41,
                fullAttack: [
                     { name: "2 Slams", bonus: "+31", damage: "2d6+11", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                     { name: "Cone of Cold", type: "Su", description: "60-foot cone, 15d6 cold damage, Reflex DC 30 half." },
                    { name: "Spells", type: "Sp", description: "Caster Level 10th Druid. Can cast 5th level spells." },
                    { name: "Planar Bubble", type: "Su", description: "Imbue area with traits of the Frostfell." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/bludgeoning and magic" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Fast Healing", type: "Ex", description: "5" },
                ],
                saves: {
                    fort: { bonus: 26, breakdown: "+12 HD, +10 Con, +7 classes" },
                    ref: { bonus: 9, breakdown: "+6 HD, +0 Dex, +3 classes" },
                    will: { bonus: 26, breakdown: "+12 HD, +7 Wis, +7 classes" },
                },
                abilities: { str: 33, dex: 10, con: 30, int: 23, wis: 24, cha: 26 },
                skills: [
                    { name: "Concentration", bonus: 41, breakdown: "41 ranks" },
                    { name: "Knowledge (nature)", bonus: 41, breakdown: "41 ranks" },
                    { name: "Knowledge (the planes)", bonus: 41, breakdown: "41 ranks" },
                    { name: "Listen", bonus: 40, breakdown: "40 ranks" },
                    { name: "Spot", bonus: 40, breakdown: "40 ranks" },
                    { name: "Survival", bonus: 40, breakdown: "40 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Awesome Blow", description: "Send smaller foes flying." },
                    { name: "Improved Bull Rush", description: "Prerequisite for Awesome Blow." },
                    { name: "Alertness", description: "+2 to Listen and Spot." },
                    { name: "Natural Spell", description: "Cast spells while in Wild Shape." },
                    { name: "Spell Penetration", description: "+2 on caster level checks to overcome SR." },
                    { name: "Quicken Spell", description: "Cast spells as a swift action." },
                ],
                flaws: [],
                environment: "Cold deserts",
                organization: "Solitary",
                alignment: "Chaotic Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +4", cost: "64,000 gp", description: "" },
                        { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                        { name: "Bracers of Armor +5", cost: "25,000 gp", description: "" },
                        { name: "Periapt of Wisdom +4", cost: "16,000 gp", description: "" },
                        { name: "Cloak of Resistance +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "The Endless Winter",
            class: "Druid 6 / Planar Shepherd 10 / Arcane Hierophant 4",
            hitDice: "20d8+200 (HD) + 20d8+200 (Classes) = 540 hp",
            challengeRating: 22,
            armorClass: {
                total: 48,
                breakdown: "(-2 size, +22 natural, +8 armor, +5 deflection, +5 natural armor)",
            },
            initiative: { bonus: 0, breakdown: "(+0 Dex)" },
            buildNotes: ["The capstone of Planar Shepherd allows it to become a native of the Frostfell, gaining immense power.", "Arcane Hierophant is entered via the 'Alternate Source' rule, advancing Druid casting and granting unique abilities.", "It is now a true master of primal, planar magic, a world-level threat."],
            sheet: {
                baseAtk: 30,
                grapple: 51,
                fullAttack: [
                     { name: "2 Slams", bonus: "+41", damage: "2d6+16", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                     { name: "Cone of Cold", type: "Su", description: "60-foot cone, 15d6 cold damage, Reflex DC 35 half." },
                    { name: "Spells", type: "Sp", description: "Caster Level 20th Druid. Can cast 9th level spells." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/bludgeoning, magic, and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "32" },
                    { name: "Fast Healing", type: "Ex", description: "10" },
                    { name: "Planar Apotheosis (Frostfell)", type: "Ex", description: "Becomes a native of the Frostfell, gaining immunities and other powers." },
                ],
                saves: {
                    fort: { bonus: 34, breakdown: "+12 HD, +10 Con, +12 classes" },
                    ref: { bonus: 18, breakdown: "+6 HD, +0 Dex, +12 classes" },
                    will: { bonus: 35, breakdown: "+12 HD, +11 Wis, +12 classes" },
                },
                abilities: { str: 33, dex: 10, con: 30, int: 23, wis: 32, cha: 26 },
                skills: [
                    { name: "Concentration", bonus: 49, breakdown: "49 ranks" },
                    { name: "Knowledge (nature)", bonus: 49, breakdown: "49 ranks" },
                    { name: "Knowledge (the planes)", bonus: 49, breakdown: "49 ranks" },
                    { name: "Listen", bonus: 48, breakdown: "48 ranks" },
                    { name: "Spot", bonus: 48, breakdown: "48 ranks" },
                    { name: "Survival", bonus: 48, breakdown: "48 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Awesome Blow", description: "Send smaller foes flying." },
                    { name: "Natural Spell", description: "Cast spells while in Wild Shape." },
                    { name: "Spell Penetration", description: "+2 on caster level checks to overcome SR." },
                    { name: "Quicken Spell", description: "Cast spells as a swift action." },
                    { name: "Automatic Quicken Spell", description: "Epic Feat. Quicken 0-3rd level spells without using higher slots." },
                    { name: "Energy Substitution (Cold)", description: "Change spell energy type to cold." },
                    { name: "Epic Spellcasting", description: "Epic Feat. Develop and cast epic spells." },
                    { name: "Improved Elemental Wild Shape", description: "Epic Feat. Gain abilities of elementals when wild shaped." },
                    { name: "Armor Skin", description: "Epic Feat. +1 Natural Armor." },
                ],
                flaws: [],
                environment: "Planar Frost-Fell",
                organization: "Solitary",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +5", cost: "100,000 gp", description: "" },
                        { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                        { name: "Periapt of Wisdom +6", cost: "36,000 gp", description: "" },
                        { name: "Bracers of Armor +8", cost: "64,000 gp", description: "" },
                        { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                        { name: "Tome of Understanding +4", cost: "110,000 gp", description: "Read for +4 inherent bonus to Wisdom." },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Genesis Avatar",
            class: "Druid 6 / Planar Shepherd 10 / Arcane Hierophant 4 / Genesis Avatar 10",
            hitDice: "20d8+240 (HD) + 30d8+360 (Classes) = 875 hp",
            challengeRating: 28,
            armorClass: {
                total: 65,
                breakdown: "(-2 size, +25 natural, +10 armor, +10 deflection, +12 insight)",
            },
            initiative: { bonus: 0, breakdown: "(+0 Dex)" },
            buildNotes: ["The Genesis Avatar prestige class from Librim Eternia grants the power to create and destroy demiplanes.", "It no longer just brings winter; it brings THE winter—a personal demiplane of absolute zero that it can impose upon reality.", "Its goal has evolved from cleansing the world to replacing it with a perfect, silent, crystalline reality of its own design."],
            sheet: {
                baseAtk: 40,
                grapple: 65,
                fullAttack: [
                     { name: "2 Slams", bonus: "+55", damage: "2d6+20 + 2d6 cold", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 30th Druid. Can cast epic spells." },
                    { name: "Create Demiplane", type: "Su", description: "Can create a personal demiplane with the 'ice' and 'negative-dominant' traits." },
                    { name: "Unmake Reality", type: "Su", description: "Can destroy magical effects, items, or even creatures by erasing their reality." }
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/epic and bludgeoning" },
                    { name: "Spell Resistance", type: "Ex", description: "40" },
                    { name: "Fast Healing", type: "Ex", description: "20" },
                ],
                saves: {
                    fort: { bonus: 46, breakdown: "+12 HD, +12 Con, +22 classes" },
                    ref: { bonus: 30, breakdown: "+6 HD, +0 Dex, +24 classes" },
                    will: { bonus: 49, breakdown: "+12 HD, +15 Wis, +22 classes" },
                },
                abilities: { str: 37, dex: 10, con: 34, int: 23, wis: 40, cha: 26 },
                skills: [
                    { name: "Concentration", bonus: 69, breakdown: "59 ranks" },
                    { name: "Knowledge (nature)", bonus: 68, breakdown: "59 ranks" },
                    { name: "Knowledge (the planes)", bonus: 68, breakdown: "59 ranks" },
                    { name: "Listen", bonus: 67, breakdown: "59 ranks" },
                    { name: "Spot", bonus: 67, breakdown: "59 ranks" },
                    { name: "Survival", bonus: 67, breakdown: "59 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Natural Spell", description: "" }, { name: "Spell Penetration", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Automatic Quicken Spell", description: "" }, { name: "Energy Substitution (Cold)", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Improved Elemental Wild Shape", description: "" }, { name: "Armor Skin", description: "" },
                    { name: "Epic Spell Penetration", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Automatic Metamagic Capacity", description: "Spells up to 5th level can be quickened for free." }, { name: "Ignore Material Components", description: "" }
                ],
                flaws: [],
                environment: "Its own demiplane",
                organization: "Solitary",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +8", cost: "256,000 gp", description: "" },
                        { name: "Amulet of Health +8", cost: "64,000 gp", description: "" },
                        { name: "Periapt of Wisdom +8", cost: "64,000 gp", description: "" },
                        { name: "Bracers of Armor +10", cost: "100,000 gp", description: "" },
                        { name: "Ring of Protection +10", cost: "200,000 gp", description: "" },
                        { name: "Tome of Understanding +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "Heart of Absolute Zero",
            class: "Druid 6 / Planar Shepherd 10 / Arcane Hierophant 4 / Genesis Avatar 10 / Legendary Hierophant 10",
            hitDice: "20d8+280 (HD) + 40d8+560 (Classes) = 1350 hp",
            challengeRating: 35,
            armorClass: {
                total: 80,
                breakdown: "(-2 size, +28 natural, +12 armor, +12 deflection, +15 insight, +15 sacred)",
            },
            initiative: { bonus: 0, breakdown: "(+0 Dex)" },
            buildNotes: ["Adding levels of an epic prestige class like Legendary Hierophant makes it a true god of its domain.", "It is no longer a creature, but a sentient, mobile plane of existence.", "Its 'spells' are not cast, but are fundamental alterations to the laws of physics within its sphere of influence. It thinks, and reality conforms to the crystalline perfection of its thoughts."],
            sheet: {
                baseAtk: 50,
                grapple: 79,
                fullAttack: [
                     { name: "2 Slams of Perfect Order", bonus: "+69", damage: "2d6+24 + 4d6 cold", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 40th. Can cast multiple epic spells at will." },
                    { name: "Worldseed", type: "Su", description: "Can plant a seed of its own demiplane into another plane, slowly transforming it over years." }
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "30/deific and bludgeoning" },
                    { name: "True Apotheosis", type: "Ex", description: "Becomes immune to all magic of non-deific origin. It is the plane, and the plane is it." },
                    { name: "Fast Healing", type: "Ex", description: "40" },
                ],
                saves: {
                    fort: { bonus: 58, breakdown: "+12 HD, +14 Con, +32 classes" },
                    ref: { bonus: 42, breakdown: "+6 HD, +0 Dex, +36 classes" },
                    will: { bonus: 61, breakdown: "+12 HD, +18 Wis, +31 classes" },
                },
                abilities: { str: 39, dex: 10, con: 38, int: 23, wis: 46, cha: 26 },
                skills: [
                    { name: "Concentration", bonus: 85, breakdown: "69 ranks" },
                    { name: "Knowledge (nature)", bonus: 84, breakdown: "69 ranks" },
                    { name: "Knowledge (the planes)", bonus: 84, breakdown: "69 ranks" },
                    { name: "Listen", bonus: 83, breakdown: "69 ranks" },
                    { name: "Spot", bonus: 83, breakdown: "69 ranks" },
                    { name: "Survival", bonus: 83, breakdown: "69 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Natural Spell", description: "" }, { name: "Spell Penetration", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Automatic Quicken Spell", description: "" }, { name: "Energy Substitution (Cold)", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Improved Elemental Wild Shape", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Spell Penetration", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Automatic Metamagic Capacity", description: "" }, { name: "Ignore Material Components", description: "" },
                    { name: "Perfect Health", description: "" }, { name: "Craft Epic Magic Arms and Armor", description: "" }, { name: "Intensify Spell", description: "" }, { name: "Epic Will", description: "" }
                ],
                flaws: [],
                environment: "The Crystalline Void",
                organization: "Unique",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                        { name: "The World-Heart Diamond", cost: "Artifact", description: "" },
                        { name: "Mantle of the Frozen Stars", cost: "Artifact", description: "" },
                        { name: "Orb of Absolute Zero", cost: "Artifact", description: "" },
                        { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
  };