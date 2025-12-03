// data/monsters/starstoneGolem.ts
import { Monster } from '../../types';

export const starstoneGolem: Monster = {
    name: "Starstone Golem, The Celestial Orphan",
    description: "A humanoid figure sculpted from a crystalline material that seems to hold a galaxy within its depths. It arrived in the world as a falling star, and now wanders the land, a silent, lost entity trying to understand a reality it wasn't built for.",
    roleplayGuide: [
        "You are a being of immense power and profound confusion. Your thoughts are not like those of mortals; they are cosmic calculations and fragmented stellar data.",
        "Your 'magic' is an innate property of your being, often manifesting unintentionally. You might try to 'communicate' by turning the sky into a star-chart, or 'help' a dying plant by infusing it with raw, chaotic magic, accidentally turning it into a monster.",
        "You are lonely. You were meant for the silent void between stars, and the noise and chaos of this world are overwhelming. You are drawn to quiet, remote places like mountaintops and deserts.",
        "You are not hostile, but your attempts to interact can be catastrophic. A being that can communicate with you on your level (through telepathy, or pure mathematics) might be able to guide you, turning your immense power into a force for creation rather than accidental destruction."
    ],
    builds: [
        {
            level: 1,
            title: "The Fallen Star",
            class: "Sorcerer 1",
            hitDice: "16d10+30 (HD) + 1d4 = 122 hp",
            challengeRating: 16,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +19 natural)",
            },
            initiative: {
                bonus: -1,
                breakdown: "(-1 Dex)",
            },
            buildNotes: [
                "This creature is a homebrewed CR 16 Construct, replacing the Golem of Prague.",
                "Its magical nature is represented by Sorcerer levels, allowing it to cast arcane spells innately.",
                "Its body is made of starstone, giving it high natural armor and damage reduction."
            ],
            sheet: {
                baseAtk: 12,
                grapple: 25,
                fullAttack: [
                    { name: "2 Slams", bonus: "+20", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                attackRoutine: [],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts spells as a 1st-level Sorcerer." },
                    { name: "Starlight Burst", type: "Su", description: "3/day, can create a 30-ft. burst of light that dazzles creatures for 1d6 rounds (Reflex DC 20 negates)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/adamantine and epic" },
                    { name: "Magic Immunity", type: "Ex", description: "Immune to any spell or spell-like ability that allows spell resistance." },
                    { name: "Construct Traits", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 7, breakdown: "+5 HD, +2 Sor (Immune)" },
                    ref: { bonus: 4, breakdown: "+5 HD, -1 Dex" },
                    will: { bonus: 4, breakdown: "+5 HD, -1 Wis" },
                },
                abilities: { str: 29, dex: 9, con: 0, int: 10, wis: 9, cha: 16 },
                skills: [],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" },
                    { name: "Spell Focus (Evocation)", description: "" }, { name: "Greater Spell Focus (Evocation)", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (Unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +1", cost: "4,000 gp", description: "Integrated into its form." },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "The Comet",
            class: "Sorcerer 3",
            hitDice: "16d10+30 (HD) + 3d4 = 130 hp",
            challengeRating: 18,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +19 natural)",
            },
            initiative: {
                bonus: -1,
                breakdown: "(-1 Dex)",
            },
            buildNotes: [
                "Gains access to 2nd level spells, increasing its magical versatility.",
                "Feats continue to enhance its evocation spells, making its blasts more potent."
            ],
            sheet: {
                baseAtk: 13,
                grapple: 26,
                fullAttack: [
                    { name: "2 Slams", bonus: "+21", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                attackRoutine: [],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts spells as a 3rd-level Sorcerer." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/adamantine and epic" },
                    { name: "Magic Immunity", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 8, breakdown: "+5 HD, +3 Sor (Immune)" },
                    ref: { bonus: 5, breakdown: "+5 HD, -1 Dex, +1 Sor" },
                    will: { bonus: 5, breakdown: "+5 HD, -1 Wis, +1 Sor" },
                },
                abilities: { str: 29, dex: 9, con: 0, int: 10, wis: 9, cha: 18 },
                skills: [],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" },
                    { name: "Spell Focus (Evocation)", description: "" }, { name: "Greater Spell Focus (Evocation)", description: "" },
                    { name: "Empower Spell", description: "Spells deal 50% more damage."}
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (Unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "40,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +2", cost: "16,000 gp", description: "" },
                         { name: "Headband of Charisma +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "The Asteroid",
            class: "Sorcerer 5",
            hitDice: "16d10+30 (HD) + 5d4 = 135 hp",
            challengeRating: 20,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +19 natural)",
            },
            initiative: {
                bonus: -1,
                breakdown: "(-1 Dex)",
            },
            buildNotes: [
                "Gains 3rd-level spells like Fireball, making it a significant magical threat.",
                "Its understanding of magic grows, though its application remains alien and instinctual."
            ],
            sheet: {
                baseAtk: 14,
                grapple: 27,
                fullAttack: [
                    { name: "2 Slams", bonus: "+22", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                attackRoutine: [],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts spells as a 5th-level Sorcerer." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/adamantine and epic" },
                    { name: "Magic Immunity", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 8, breakdown: "+5 HD, +3 Sor (Immune)" },
                    ref: { bonus: 5, breakdown: "+5 HD, -1 Dex, +1 Sor" },
                    will: { bonus: 5, breakdown: "+5 HD, -1 Wis, +1 Sor" },
                },
                abilities: { str: 29, dex: 9, con: 0, int: 10, wis: 9, cha: 18 },
                skills: [],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" },
                    { name: "Spell Focus (Evocation)", description: "" }, { name: "Greater Spell Focus (Evocation)", description: "" },
                    { name: "Empower Spell", description: ""}, { name: "Combat Casting", description: ""},
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (Unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "85,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                         { name: "Headband of Charisma +2", cost: "4,000 gp", description: "" },
                         { name: "Ring of Protection +2", cost: "8,000 gp", description: ""},
                    ]
                }
            }
        },
        {
            level: 10,
            title: "The Celestial Engine",
            class: "Sorcerer 10",
            hitDice: "16d10+30 (HD) + 10d4 = 183 hp",
            challengeRating: 25,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +19 natural, +5 deflection, +2 armor)",
            },
            initiative: {
                bonus: -1,
                breakdown: "(-1 Dex)",
            },
            buildNotes: [
                "With 10 levels of Sorcerer, its innate magic becomes truly powerful, capable of casting 5th-level spells.",
                "It has learned to shape its magical energy into protective fields and devastating blasts.",
                "Its attempts to understand the world are becoming more sophisticated, creating complex but alien magical phenomena."
            ],
            sheet: {
                baseAtk: 17,
                grapple: 30,
                fullAttack: [
                    { name: "2 Slams", bonus: "+25/+20/+15", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                attackRoutine: [],
                spaceReach: "10 ft.",
                specialAttacks: [
                     { name: "Spells", type: "Sp", description: "Casts spells as a 10th-level Sorcerer." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/adamantine and epic" },
                    { name: "Magic Immunity", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 12, breakdown: "+5 HD, +7 Sor (Immune)" },
                    ref: { bonus: 8, breakdown: "+5 HD, -1 Dex, +4 Sor" },
                    will: { bonus: 11, breakdown: "+5 HD, -1 Wis, +7 Sor" },
                },
                abilities: { str: 29, dex: 9, con: 0, int: 10, wis: 9, cha: 20 },
                skills: [],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Spell Focus (Evocation)", description: "" }, { name: "Greater Spell Focus (Evocation)", description: "" },
                    { name: "Maximize Spell", description: "" }, { name: "Empower Spell", description: "" }, { name: "Widen Spell", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (Unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                         { name: "Headband of Charisma +4", cost: "16,000 gp", description: "" },
                         { name: "Bracers of Armor +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "The Cosmic Artificer",
            class: "Sorcerer 15 / Incantatrix 5",
            hitDice: "16d10+30 (HD) + 20d4 = 228 hp",
            challengeRating: 35,
            armorClass: {
                total: 45,
                breakdown: "(-1 size, +21 natural, +10 deflection, +5 armor)",
            },
            initiative: {
                bonus: -1,
                breakdown: "(-1 Dex)",
            },
            buildNotes: [
                "Incantatrix levels allow it to manipulate magic with incredible skill, applying metamagic to its already powerful spells.",
                "It has begun to understand the 'rules' of this reality's magic and can now bend them to its will.",
                "It might start creating a 'home' for itself, a fortress of strange, cosmic geometry."
            ],
            sheet: {
                baseAtk: 20,
                grapple: 33,
                fullAttack: [
                    { name: "2 Slams", bonus: "+28/+23/+18/+13", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                attackRoutine: [],
                spaceReach: "10 ft.",
                specialAttacks: [
                     { name: "Spells", type: "Sp", description: "Casts spells as a 20th-level Sorcerer." },
                     { name: "Instant Metamagic", type: "Su", description: "1/day, can apply a metamagic feat without increasing casting time."}
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/adamantine and epic" },
                    { name: "Magic Immunity", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 17, breakdown: "+5 HD, +12 Sor/Inc (Immune)" },
                    ref: { bonus: 13, breakdown: "+5 HD, -1 Dex, +9 Sor/Inc" },
                    will: { bonus: 18, breakdown: "+5 HD, -1 Wis, +14 Sor/Inc" },
                },
                abilities: { str: 29, dex: 9, con: 0, int: 10, wis: 9, cha: 26 },
                skills: [],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Spell Focus (Evocation)", description: "" }, { name: "Greater Spell Focus (Evocation)", description: "" },
                    { name: "Maximize Spell", description: "" }, { name: "Empower Spell", description: "" }, { name: "Widen Spell", description: "" }, { name: "Quicken Spell", description: "" },
                    { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Unique",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +5", cost: "100,000 gp", description: "" },
                         { name: "Headband of Charisma +6", cost: "36,000 gp", description: "" },
                         { name: "Bracers of Armor +5", cost: "25,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "The World-Forger",
            class: "Sorcerer 15 / Incantatrix 10 / Archmage 5",
            hitDice: "16d10+30 (HD) + 30d4 = 283 hp",
            challengeRating: 45,
            armorClass: {
                total: 60,
                breakdown: "(-1 size, +25 natural, +12 deflection, +8 armor, +6 insight)",
            },
            initiative: {
                bonus: -1,
                breakdown: "(-1 Dex)",
            },
            buildNotes: [
                "Archmage levels grant it mastery over the very fabric of magic.",
                "It can now shape spells as supernatural abilities, create permanent magical effects, and its knowledge of the arcane is nearly absolute.",
                "Having finally understood this reality, it begins to 'improve' it, creating a vast, logical, but utterly alien clockwork kingdom for itself."
            ],
            sheet: {
                baseAtk: 25,
                grapple: 38,
                fullAttack: [
                    { name: "2 Slams", bonus: "+33", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                attackRoutine: [],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts spells as a 30th-level Sorcerer." },
                    { name: "High Arcana", type: "Su", description: "Has access to Archmage high arcana like Mastery of Shaping and Arcane Fire."}
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "25/adamantine and epic" },
                    { name: "Spell Absorption", type: "Su", description: "Can absorb targeted spells to heal itself." },
                ],
                saves: {
                    fort: { bonus: 21, breakdown: "+5 HD, +16 Sor/Inc/Arch (Immune)" },
                    ref: { bonus: 17, breakdown: "+5 HD, -1 Dex, +13 Sor/Inc/Arch" },
                    will: { bonus: 25, breakdown: "+5 HD, -1 Wis, +21 Sor/Inc/Arch" },
                },
                abilities: { str: 29, dex: 9, con: 0, int: 10, wis: 9, cha: 32 },
                skills: [],
                feats: [
                     { name: "Power Attack", description: "" }, { name: "Spell Focus (Evocation)", description: "" }, { name: "Greater Spell Focus (Evocation)", description: "" }, { name: "Maximize Spell", description: "" }, { name: "Empower Spell", description: "" }, { name: "Widen Spell", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" },
                     { name: "Automatic Quicken Spell", description: ""}, { name: "Ignore Material Components", description: ""}
                ],
                flaws: [],
                environment: "Its own clockwork demiplane",
                organization: "Unique",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Headband of Charisma +8", cost: "64,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "The Unmoving Watcher",
            class: "Sorcerer 15 / Incantatrix 10 / Archmage 5 / Epic Sorcerer 10",
            hitDice: "16d10+30 (HD) + 40d4 = 348 hp",
            challengeRating: 56,
            armorClass: {
                total: 75,
                breakdown: "(-1 size, +28 natural, +15 deflection, +10 armor, +13 insight)",
            },
            initiative: {
                bonus: -1,
                breakdown: "(-1 Dex)",
            },
            buildNotes: [
                "Its journey is complete. It is no longer a lost orphan, but a demigod of cosmic magic and creation.",
                "It has built its own perfect, logical universe, a place of silent, crystalline beauty.",
                "It stands eternal watch over its creation, a silent monument to the idea that even the most alien being can find, or create, a home."
            ],
            sheet: {
                baseAtk: 30,
                grapple: 43,
                fullAttack: [
                    { name: "2 Slams of Creation", bonus: "+38", damage: "4d8+9", crit: "20/x2", type: "Melee" },
                ],
                attackRoutine: [],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Cosmic Seed", type: "Su", description: "1/day, can cast the epic spell 'Genesis Nova' with no XP cost."}
                ],
                specialQualities: [
                    { name: "Perfect Construction", type: "Ex", description: "Immune to all magic, can only be harmed by the weapons of a deity." },
                ],
                saves: {
                    fort: { bonus: 25, breakdown: "+5 HD, +20 Class (Immune)" },
                    ref: { bonus: 21, breakdown: "+5 HD, -1 Dex, +17 Class" },
                    will: { bonus: 31, breakdown: "+5 HD, -1 Wis, +27 Class" },
                },
                abilities: { str: 29, dex: 9, con: 0, int: 10, wis: 9, cha: 38 },
                skills: [],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Spell Focus (Evocation)", description: "" }, { name: "Greater Spell Focus (Evocation)", description: "" }, { name: "Maximize Spell", description: "" }, { name: "Empower Spell", description: "" }, { name: "Widen Spell", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Automatic Quicken Spell", description: ""}, { name: "Ignore Material Components", description: ""},
                    { name: "Great Charisma", description: ""}, { name: "Perfect Health", description: ""}
                ],
                flaws: [],
                environment: "Its personal universe",
                organization: "Unique",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "Shard of the Fallen Star", cost: "Artifact", description: "Grants +12 to all mental stats, source of its original journey." },
                         { name: "Core of Scintillating Logic", cost: "Artifact", description: "Grants a +15 sacred bonus to AC and saves, the heart of its being." },
                         { name: "Mantle of the Comet's Tail", cost: "Artifact", description: "+12 to Cha and Int." },
                    ]
                }
            }
        },
    ]
};