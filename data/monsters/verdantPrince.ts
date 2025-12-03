// data/monsters/verdantPrince.ts
import { Monster } from '../../types';

export const verdantPrince: Monster = {
    name: "The Verdant Prince",
    description: "A being that was once a mortal druid who merged with a primordial force of nature to halt a world-ending cataclysm. Now, he is less a man and more the sentient will of the wilds, a figure of terrifying, rampant life.",
    roleplayGuide: [
        "You sacrificed your humanity for the greater good, and you are bitter about it. You saved the world, but you cannot be a part of it anymore.",
        "You struggle to control the immense, chaotic life force you embody. The rampant growth of your forest is not a conscious act of aggression, but the result of a moment's distraction, a sigh of sorrow.",
        "You are the protector of the wild, but your methods are extreme. You see civilization as a disease, a scar on the world that must be overgrown and healed, regardless of who gets in the way.",
        "Your human heart still beats somewhere within the tangle of vines and wood. A genuine appeal to your lost humanity, or a promise to help you control your overwhelming power, might be the only way to reason with you."
    ],
    builds: [
        {
            level: 1,
            title: "The Seed of Sorrow",
            class: "Druid 1",
            hitDice: "18d8+108 (HD) + 1d8+6 (Druid) = 200 hp",
            challengeRating: 18,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +3 Dex, +16 natural)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "This creature is a homebrewed CR 18 Outsider (Native, Plant).",
                "Its form is a humanoid shape made of living vines, wood, and flowers, constantly shifting.",
                "Druid is the core of its build, representing its absolute mastery over the natural world."
            ],
            sheet: {
                baseAtk: 13,
                grapple: 27,
                fullAttack: [
                    { name: "2 Slams", bonus: "+22", damage: "2d6+10", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 1st-level Druid." },
                    { name: "Entangling Aura", type: "Su", description: "The ground in a 30-ft. radius around him is constantly affected by an 'Entangle' spell (DC 25)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/slashing and epic" },
                    { name: "Plant Traits", type: "Ex", description: "Immunity to poison, sleep, paralysis, stunning, polymorphing, and mind-affecting effects." },
                    { name: "Regeneration", type: "Ex", description: "10 (fire and cold)." },
                ],
                saves: {
                    fort: { bonus: 19, breakdown: "+11 HD, +6 Con, +2 Druid" },
                    ref: { bonus: 14, breakdown: "+11 HD, +3 Dex" },
                    will: { bonus: 17, breakdown: "+11 HD, +4 Wis, +2 Druid" },
                },
                abilities: { str: 31, dex: 17, con: 23, int: 18, wis: 19, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 29, breakdown: "22 ranks" },
                    { name: "Knowledge (nature)", bonus: 27, breakdown: "22 ranks" },
                    { name: "Listen", bonus: 27, breakdown: "22 ranks" },
                    { name: "Spot", bonus: 27, breakdown: "22 ranks" },
                    { name: "Survival", bonus: 27, breakdown: "22 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" },
                    { name: "Great Fortitude", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" },
                ],
                flaws: [],
                environment: "Any forest",
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
            title: "The Spreading Wood",
            class: "Druid 3",
            hitDice: "18d8+126 (HD) + 3d8+18 (Druid) = 230 hp",
            challengeRating: 20,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +3 Dex, +16 natural)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains access to 2nd-level Druid spells and Trackless Step.",
                "Its control over the surrounding wilderness grows, the forest becoming an extension of its body."
            ],
            sheet: {
                baseAtk: 15,
                grapple: 29,
                fullAttack: [
                    { name: "2 Slams", bonus: "+24", damage: "2d6+10", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 3rd-level Druid." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/slashing and epic" },
                    { name: "Regeneration", type: "Ex", description: "10 (fire and cold)." },
                    { name: "Trackless Step", type: "Ex", description: "Leaves no trail in natural surroundings." },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+11 HD, +6 Con, +3 Druid" },
                    ref: { bonus: 15, breakdown: "+11 HD, +3 Dex, +1 Druid" },
                    will: { bonus: 18, breakdown: "+11 HD, +4 Wis, +3 Druid" },
                },
                abilities: { str: 31, dex: 17, con: 23, int: 18, wis: 19, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 31, breakdown: "24 ranks" },
                    { name: "Knowledge (nature)", bonus: 29, breakdown: "24 ranks" },
                ],
                feats: [
                     { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" },
                    { name: "Great Fortitude", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Natural Spell", description: "Cast spells in Wild Shape." },
                ],
                flaws: [],
                environment: "Any forest",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "45,000 gp",
                    items: [
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Periapt of Wisdom +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Heart of the Wild",
            class: "Druid 5",
            hitDice: "18d8+126 (HD) + 5d8+30 (Druid) = 260 hp",
            challengeRating: 22,
            armorClass: {
                total: 30,
                breakdown: "(-1 size, +3 Dex, +16 natural, +2 armor)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains Wild Shape, allowing it to become one with the beasts of his forest.",
                "Access to 3rd-level spells like Plant Growth makes his domain expand at an alarming rate."
            ],
            sheet: {
                baseAtk: 16,
                grapple: 30,
                fullAttack: [
                    { name: "2 Slams", bonus: "+25", damage: "2d6+10", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 5th-level Druid." },
                    { name: "Wild Shape", type: "Su", description: "3/day, can assume animal form up to Large size."}
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/slashing and epic" },
                    { name: "Regeneration", type: "Ex", description: "10 (fire and cold)." },
                ],
                saves: {
                    fort: { bonus: 21, breakdown: "+11 HD, +6 Con, +4 Druid" },
                    ref: { bonus: 15, breakdown: "+11 HD, +3 Dex, +1 Druid" },
                    will: { bonus: 19, breakdown: "+11 HD, +4 Wis, +4 Druid" },
                },
                abilities: { str: 31, dex: 17, con: 23, int: 18, wis: 19, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 33, breakdown: "26 ranks" },
                    { name: "Knowledge (nature)", bonus: 31, breakdown: "26 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Great Fortitude", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Natural Spell", description: "" },
                    { name: "Greenbound Summoning", description: "Summoned creatures gain the Greenbound template."},
                ],
                flaws: [],
                environment: "Any forest",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "85,000 gp",
                    items: [
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Periapt of Wisdom +4", cost: "16,000 gp", description: "" },
                         { name: "Bracers of Armor +2", cost: "4,000 gp", description: ""},
                         { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "The Forest's Will",
            class: "Druid 6 / Planar Shepherd 4",
            hitDice: "18d8+126 (HD) + 10d8+70 (Classes) = 338 hp",
            challengeRating: 27,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +3 Dex, +16 natural, +6 armor, +5 deflection)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Planar Shepherd prestige class grants incredible powers related to a chosen plane (likely the Feywild or a plane of pure nature).",
                "This build focuses on overwhelming magical and environmental control, turning the entire forest into a weapon."
            ],
            sheet: {
                baseAtk: 20,
                grapple: 34,
                fullAttack: [
                    { name: "2 Slams", bonus: "+29/+24/+19/+14", damage: "2d6+10", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 10th Druid. Can cast 5th level spells." },
                    { name: "Planar Bubble", type: "Su", description: "Imbue area with traits of a primal forest." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/slashing and epic" },
                    { name: "Regeneration", type: "Ex", description: "10 (fire and cold)." },
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+11 HD, +6 Con, +7 Class" },
                    ref: { bonus: 16, breakdown: "+11 HD, +3 Dex, +2 Class" },
                    will: { bonus: 22, breakdown: "+11 HD, +4 Wis, +7 Class" },
                },
                abilities: { str: 31, dex: 17, con: 23, int: 18, wis: 19, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 35, breakdown: "28 ranks" },
                    { name: "Knowledge (nature)", bonus: 33, breakdown: "28 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Great Fortitude", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Natural Spell", description: "" },
                    { name: "Greenbound Summoning", description: "Summoned creatures gain the Greenbound template."},
                    { name: "Empower Spell", description: ""}
                ],
                flaws: [],
                environment: "Any forest",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                         { name: "Periapt of Wisdom +6", cost: "36,000 gp", description: "" },
                         { name: "Bracers of Armor +6", cost: "36,000 gp", description: ""},
                         { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: ""},
                    ]
                }
            }
        },
        {
            level: 20,
            title: "The Verdant King",
            class: "Druid 6 / Planar Shepherd 10 / Contemplative 4",
            hitDice: "18d8+180 (HD) + 20d8+200 (Classes) = 545 hp",
            challengeRating: 37,
            armorClass: {
                total: 50,
                breakdown: "(-1 size, +3 Dex, +18 natural, +8 armor, +6 deflection, +5 insight)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Contemplative prestige class represents its divine ascension, becoming a quasi-deity of its domain.",
                "Gains a divine spark, immunity to disease, and powerful spell-like abilities.",
                "It is now a true nature god in miniature, its forest a sacred place."
            ],
            sheet: {
                baseAtk: 25,
                grapple: 39,
                fullAttack: [
                    { name: "2 Slams", bonus: "+34/+29/+24/+19", damage: "2d6+10", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 20th-level Druid." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/slashing and epic" },
                    { name: "Regeneration", type: "Ex", description: "15 (fire and cold)." },
                    { name: "Divine Health", type: "Ex", description: "Immune to all diseases." },
                ],
                saves: {
                    fort: { bonus: 34, breakdown: "+11 HD, +10 Con, +13 Class" },
                    ref: { bonus: 21, breakdown: "+11 HD, +3 Dex, +7 Class" },
                    will: { bonus: 32, breakdown: "+11 HD, +4 Wis, +17 Class" },
                },
                abilities: { str: 31, dex: 17, con: 31, int: 18, wis: 19, cha: 28 },
                skills: [
                    { name: "Concentration", bonus: 49, breakdown: "38 ranks" },
                    { name: "Knowledge (nature)", bonus: 45, breakdown: "38 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Great Fortitude", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Natural Spell", description: "" }, { name: "Greenbound Summoning", description: "" }, { name: "Empower Spell", description: "" },
                    { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Automatic Quicken Spell", description: "" },
                ],
                flaws: [],
                environment: "His sacred grove",
                organization: "Unique",
                alignment: "Chaotic Neutral",
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
            title: "God of the Primal Green",
            class: "Druid 6 / Planar Shepherd 10 / Contemplative 4 / Genesis Avatar 10",
            hitDice: "18d8+216 (HD) + 30d8+360 (Classes) = 850 hp",
            challengeRating: 47,
            armorClass: {
                total: 65,
                breakdown: "(-1 size, +3 Dex, +20 natural, +10 armor, +10 deflection, +12 insight)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The Genesis Avatar epic prestige class allows it to create demiplanes.",
                "In response to the corruption of his forest, he has learned to create a new, perfect one in a pocket dimension, a sanctuary for pure life.",
                "He now has a choice: cleanse the old world with a divine flood of growth, or shepherd the last remnants of unsullied nature into his new one."
            ],
            sheet: {
                baseAtk: 35,
                grapple: 49,
                fullAttack: [
                    { name: "2 Slams", bonus: "+44", damage: "2d6+10", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 30th Druid. Can cast epic spells." },
                    { name: "Create Demiplane", type: "Su", description: "Can create a demiplane with the 'wild' and 'life-giving' traits." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/slashing, epic, and lawful" },
                    { name: "Regeneration", type: "Ex", description: "20 (fire and cold)." },
                ],
                saves: {
                    fort: { bonus: 45, breakdown: "+11 HD, +12 Con, +22 Class" },
                    ref: { bonus: 31, breakdown: "+11 HD, +3 Dex, +17 Class" },
                    will: { bonus: 42, breakdown: "+11 HD, +4 Wis, +27 Class" },
                },
                abilities: { str: 31, dex: 17, con: 35, int: 22, wis: 19, cha: 32 },
                skills: [
                    { name: "Concentration", bonus: 64, breakdown: "50 ranks" },
                    { name: "Knowledge (nature)", bonus: 60, breakdown: "50 ranks" },
                ],
                feats: [
                     { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Great Fortitude", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Natural Spell", description: "" }, { name: "Greenbound Summoning", description: "" }, { name: "Empower Spell", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Automatic Quicken Spell", description: "" },
                    { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Ignore Material Components", description: "" },
                ],
                flaws: [],
                environment: "His personal demiplane",
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
            title: "The Verdant King",
            class: "Druid 6 / Planar Shepherd 10 / Contemplative 4 / Genesis Avatar 10 / Legendary Hierophant 10",
            hitDice: "18d8+252 (HD) + 40d8+560 (Classes) = 1200 hp",
            challengeRating: 57,
            armorClass: {
                total: 80,
                breakdown: "(-1 size, +3 Dex, +22 natural, +12 armor, +12 deflection, +16 insight, +15 sacred)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "He has achieved true divinity. He is no longer the spirit of one forest, but the concept of 'Wilderness' itself.",
                "His body is a walking ecosystem, and his magic can create or destroy continents with rampant growth.",
                "The bitter man is gone, replaced by a primal god of nature, a force of creation and destruction, his sorrow now the rain that nourishes the world he both loves and hates."
            ],
            sheet: {
                baseAtk: 45,
                grapple: 59,
                fullAttack: [
                    { name: "2 Slams", bonus: "+54", damage: "2d6+10", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Green Rebuke", type: "Su", description: "1/day, can cause all traces of civilization (buildings, roads, etc.) in a 100-mile radius to be instantly overgrown and reclaimed by a magical forest."}
                ],
                specialQualities: [
                    { name: "One with the Green", type: "Ex", description: "Cannot be killed as long as a single tree remains on the plane. Can reform his body from any tree." },
                    { name: "Regeneration", type: "Ex", description: "40 (fire, cold, and deific power)." },
                ],
                saves: {
                    fort: { bonus: 55, breakdown: "+11 HD, +14 Con, +30 Class" },
                    ref: { bonus: 41, breakdown: "+11 HD, +3 Dex, +27 Class" },
                    will: { bonus: 52, breakdown: "+11 HD, +4 Wis, +37 Class" },
                },
                abilities: { str: 31, dex: 17, con: 39, int: 24, wis: 19, cha: 36 },
                skills: [
                    { name: "Concentration", bonus: 78, breakdown: "63 ranks" },
                    { name: "Knowledge (nature)", bonus: 75, breakdown: "63 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Great Fortitude", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Natural Spell", description: "" }, { name: "Greenbound Summoning", description: "" }, { name: "Empower Spell", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Automatic Quicken Spell", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Ignore Material Components", description: "" },
                    { name: "Great Charisma", description: "" }, { name: "Perfect Health", description: "" },
                ],
                flaws: [],
                environment: "The heart of the world's forests",
                organization: "Unique",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Seed of the First Tree", cost: "Artifact", description: "" },
                         { name: "Mantle of Living Seasons", cost: "Artifact", description: "" },
                         { name: "Crown of the Verdant King", cost: "Artifact", description: "" },
                    ]
                }
            }
        },
    ]
};