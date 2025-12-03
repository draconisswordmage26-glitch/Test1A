// data/monsters/aelder.ts
import { Monster } from '../../types';

export const aelder: Monster = {
    name: "Aelder, The Inscrutable Seeker",
    description: "An entity from the Far Realm, an Aelder is not a being of flesh, but a sentient, mobile paradox. It appears as a shifting mass of crystalline geometry and impossible angles, constantly humming with psionic power. It does not perceive reality in the same way as native creatures, seeing emotions as colors and solid matter as mutable ideas.",
    roleplayGuide: [
        "You are an explorer of realities, a being of profound intellect and curiosity. Your alien nature makes communication difficult, but your intentions are noble.",
        "You came to this reality not by accident, but to learn. You seek to understand the concepts of heroism, sacrifice, and love, which are foreign to your home in the Far Realm.",
        "Your reality-bending abilities are your tools for investigation. You might reshape an object to understand its purpose, or gently touch a creature's mind to perceive its emotions as brilliant colors.",
        "You seek a guide, a heroic mortal who can teach you the virtues of their world. In exchange, you offer your immense power to aid their cause, hoping to become a bridge of understanding between worlds."
    ],
    builds: [
        {
            level: 1,
            title: "Whisper from Beyond",
            class: "Psion (Shaper) 1",
            hitDice: "17d8+119 (HD) + 1d4+7 (Psion) = 208 hp",
            challengeRating: 17,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +3 Dex, +16 natural)",
            },
            initiative: {
                bonus: 3,
                breakdown: "(+3 Dex)",
            },
            buildNotes: [
                "This creature is a homebrewed CR 17 Aberration, inspired by Pseudonatural Creatures.",
                "Its form is inherently unstable and otherworldly, granting it a high natural armor bonus.",
                "Psion (Shaper) is a perfect fit, representing its ability to manipulate matter and reality with its mind."
            ],
            sheet: {
                baseAtk: 12,
                grapple: 25,
                fullAttack: [
                    { name: "2 Touches", bonus: "+20", damage: "2d6+9 plus reality distortion", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifester Level 18th. Can manifest 1st level Psion powers." },
                    { name: "Reality Distortion", type: "Su", description: "Creatures struck must make a Will save (DC 26) or be affected by a minor, confusing illusion for 1d4 rounds." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic and lawful" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Alien Mind", type: "Ex", description: "Immunity to mind-affecting effects from this reality. Can be affected by other Far Realm entities." },
                ],
                saves: {
                    fort: { bonus: 19, breakdown: "+10 HD, +9 Con" },
                    ref: { bonus: 13, breakdown: "+10 HD, +3 Dex" },
                    will: { bonus: 16, breakdown: "+10 HD, +6 Wis" },
                },
                abilities: { str: 28, dex: 17, con: 29, int: 26, wis: 23, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 32, breakdown: "23 ranks" },
                    { name: "Knowledge (psionics)", bonus: 31, breakdown: "23 ranks" },
                    { name: "Psicraft", bonus: 31, breakdown: "23 ranks" },
                    { name: "Use Psionic Device", bonus: 30, breakdown: "23 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Psionic Body", description: "" },
                    { name: "Power Penetration", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Boost Construct", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Headband of Intellect +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "Geometer",
            class: "Psion (Shaper) 3",
            hitDice: "17d8+136 (HD) + 3d4+24 (Psion) = 248 hp",
            challengeRating: 19,
            armorClass: {
                total: 30,
                breakdown: "(-1 size, +3 Dex, +16 natural, +2 armor)",
            },
            initiative: {
                bonus: 3,
                breakdown: "(+3 Dex)",
            },
            buildNotes: [
                "Gains access to 2nd-level powers, allowing for more complex ectoplasmic creations.",
                "Its understanding of this reality is growing, but its creations are still alien and unsettling to native life."
            ],
            sheet: {
                baseAtk: 13,
                grapple: 26,
                fullAttack: [
                    { name: "2 Touches", bonus: "+21", damage: "2d6+9 plus reality distortion", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifester Level 20th. Can manifest 2nd level Psion powers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic and lawful" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 22, breakdown: "+10 HD, +11 Con, +1 Class" },
                    ref: { bonus: 14, breakdown: "+10 HD, +3 Dex, +1 Class" },
                    will: { bonus: 19, breakdown: "+10 HD, +6 Wis, +3 Class" },
                },
                abilities: { str: 28, dex: 17, con: 33, int: 26, wis: 23, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 36, breakdown: "25 ranks" },
                    { name: "Knowledge (psionics)", bonus: 33, breakdown: "25 ranks" },
                    { name: "Psicraft", bonus: 33, breakdown: "25 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Psionic Body", description: "" }, { name: "Power Penetration", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Boost Construct", description: "" },
                    { name: "Quicken Power", description: ""},
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "40,000 gp",
                    items: [
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Headband of Intellect +2", cost: "4,000 gp", description: "" },
                         { name: "Bracers of Armor +2", cost: "4,000 gp", description: ""},
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Architect of the Impossible",
            class: "Psion (Shaper) 5",
            hitDice: "17d8+153 (HD) + 5d4+45 (Psion) = 286 hp",
            challengeRating: 21,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +3 Dex, +16 natural, +4 armor, +3 deflection)",
            },
            initiative: {
                bonus: 3,
                breakdown: "(+3 Dex)",
            },
            buildNotes: [
                "Can now manifest 3rd-level powers, creating durable astral constructs and shaping ectoplasm into complex forms.",
                "Its attempts to 'fix' its surroundings become more ambitious, resulting in bizarre, non-euclidean structures."
            ],
            sheet: {
                baseAtk: 14,
                grapple: 27,
                fullAttack: [
                    { name: "2 Touches", bonus: "+22", damage: "2d6+9 plus reality distortion", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifester Level 22nd. Can manifest 3rd level Psion powers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic and lawful" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+10 HD, +12 Con, +2 Class" },
                    ref: { bonus: 15, breakdown: "+10 HD, +3 Dex, +2 Class" },
                    will: { bonus: 20, breakdown: "+10 HD, +6 Wis, +4 Class" },
                },
                abilities: { str: 28, dex: 17, con: 35, int: 26, wis: 23, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 39, breakdown: "27 ranks" },
                    { name: "Knowledge (psionics)", bonus: 35, breakdown: "27 ranks" },
                    { name: "Psicraft", bonus: 35, breakdown: "27 ranks" },
                ],
                feats: [
                     { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Psionic Body", description: "" }, { name: "Power Penetration", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Boost Construct", description: "" },
                    { name: "Quicken Power", description: ""},
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "85,000 gp",
                    items: [
                         { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                         { name: "Headband of Intellect +4", cost: "16,000 gp", description: "" },
                         { name: "Bracers of Armor +4", cost: "16,000 gp", description: ""},
                         { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                         { name: "Ring of Protection +3", cost: "18,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Reality Sculptor",
            class: "Psion (Shaper) 10",
            hitDice: "17d8+153 (HD) + 10d4+90 (Psion) = 360 hp",
            challengeRating: 27,
            armorClass: {
                total: 40,
                breakdown: "(-1 size, +3 Dex, +16 natural, +8 armor, +4 deflection)",
            },
            initiative: {
                bonus: 3,
                breakdown: "(+3 Dex)",
            },
            buildNotes: [
                "Now a powerful manifester, it can create durable objects and creatures out of pure ectoplasm.",
                "Its attempts to communicate and understand become more complex, as it creates entire structures and ecosystems based on its alien memories.",
                "Its territory becomes a patch of the Far Realm bleeding into reality."
            ],
            sheet: {
                baseAtk: 17,
                grapple: 30,
                fullAttack: [
                    { name: "2 Touches", bonus: "+25/+20/+15", damage: "2d6+9 plus reality distortion", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifester Level 27th. Can manifest 5th-level powers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic and lawful" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 26, breakdown: "+10 HD, +13 Con, +3 Class" },
                    ref: { bonus: 16, breakdown: "+10 HD, +3 Dex, +3 Class" },
                    will: { bonus: 23, breakdown: "+10 HD, +6 Wis, +7 Class" },
                },
                abilities: { str: 28, dex: 17, con: 37, int: 28, wis: 23, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 45, breakdown: "32 ranks" },
                    { name: "Knowledge (psionics)", bonus: 41, breakdown: "32 ranks" },
                    { name: "Psicraft", bonus: 41, breakdown: "32 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Psionic Body", description: "" }, { name: "Power Penetration", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Boost Construct", description: "" },
                    { name: "Quicken Power", description: "" }, { name: "Maximize Power", description: "" }, { name: "Greater Power Penetration", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Bracers of Armor +8", cost: "64,000 gp", description: "" },
                         { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                         { name: "Headband of Intellect +4", cost: "16,000 gp", description: "" },
                         { name: "Ring of Protection +4", cost: "32,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Nexus of Creation",
            class: "Psion (Shaper) 20",
            hitDice: "17d8+187 (HD) + 20d4+220 (Psion) = 570 hp",
            challengeRating: 37,
            armorClass: {
                total: 50,
                breakdown: "(-1 size, +3 Dex, +18 natural, +10 armor, +6 deflection, +4 insight)",
            },
            initiative: {
                bonus: 3,
                breakdown: "(+3 Dex)",
            },
            buildNotes: [
                "A true master of shaping, it can now create permanent structures and even true, living creatures from ectoplasm.",
                "It has begun to build a home, a small bubble of its native reality where it can exist in peace.",
                "Its power is now great enough to attract the attention of other cosmic entities, forcing it to defend its fragile new existence."
            ],
            sheet: {
                baseAtk: 22,
                grapple: 35,
                fullAttack: [
                    { name: "2 Touches", bonus: "+30", damage: "2d6+9 plus reality distortion", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Casts as a 20th-level Psion." },
                    { name: "True Creation", type: "Ex", description: "Can create permanent, non-magical matter as per the epic power." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/magic and lawful" },
                    { name: "Spell Resistance", type: "Ex", description: "37" },
                ],
                saves: {
                    fort: { bonus: 34, breakdown: "+10 HD, +13 Con, +11 Class" },
                    ref: { bonus: 23, breakdown: "+10 HD, +3 Dex, +10 Class" },
                    will: { bonus: 30, breakdown: "+10 HD, +6 Wis, +14 Class" },
                },
                abilities: { str: 28, dex: 17, con: 37, int: 31, wis: 23, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 51, breakdown: "39 ranks" },
                    { name: "Knowledge (psionics)", bonus: 48, breakdown: "39 ranks" },
                    { name: "Psicraft", bonus: 48, breakdown: "39 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Psionic Body", description: "" }, { name: "Power Penetration", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Boost Construct", description: "" }, { name: "Quicken Power", description: "" }, { name: "Maximize Power", description: "" }, { name: "Greater Power Penetration", description: "" },
                    { name: "Epic Psionic Focus", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" },
                ],
                flaws: [],
                environment: "Its own demiplane",
                organization: "Unique",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                         { name: "Tome of Clear Thought +3", cost: "82,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Mind-Bender",
            class: "Psion 20 / Mind-Bender 10",
            hitDice: "17d8+204 (HD) + 30d4+360 (Psion/MB) = 830 hp",
            challengeRating: 47,
            armorClass: {
                total: 65,
                breakdown: "(-1 size, +3 Dex, +20 natural, +10 armor, +10 deflection, +16 insight)",
            },
            initiative: {
                bonus: 3,
                breakdown: "(+3 Dex)",
            },
            buildNotes: [
                "The Mind-Bender epic prestige class from Librim Eternia allows the Aelder to directly edit the minds and memories of other beings.",
                "It no longer just traps creatures in dreams; it can rewrite their very identities, turning kings into beggars and heroes into villains with a single thought.",
                "Its dreamscape is now populated by beings with stolen lives, a surreal kingdom of puppets for a lonely god."
            ],
            sheet: {
                baseAtk: 27,
                grapple: 44,
                fullAttack: [
                    { name: "2 Touches", bonus: "+36/+31/+26/+21", damage: "2d6+9 plus reality distortion", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Edit Personality", type: "Su", description: "Can permanently alter a creature's personality, alignment, and memories (Will DC 55 negates)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/epic and cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "47" },
                ],
                saves: {
                    fort: { bonus: 40, breakdown: "+10 HD, +17 Con, +13 Class" },
                    ref: { bonus: 30, breakdown: "+10 HD, +3 Dex, +17 Class" },
                    will: { bonus: 43, breakdown: "+10 HD, +6 Wis, +27 Class" },
                },
                abilities: { str: 28, dex: 17, con: 44, int: 35, wis: 23, cha: 34 },
                skills: [
                    { name: "Concentration", bonus: 73, breakdown: "51 ranks" },
                    { name: "Knowledge (psionics)", bonus: 68, breakdown: "51 ranks" },
                    { name: "Psicraft", bonus: 68, breakdown: "51 ranks" },
                ],
                feats: [
                    { name: "Psionic Body", description: "" }, { name: "Greater Psionic Endowment", description: "" }, { name: "Power Penetration", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Quicken Power", description: "" }, { name: "Maximize Power", description: "" }, { name: "Greater Power Penetration", description: "" }, { name: "Epic Psionic Focus", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" },
                    { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Epic Power Penetration", description: "" }
                ],
                flaws: [],
                environment: "Its personal dream-plane",
                organization: "Unique",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                         { name: "Tome of Clear Thought +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "The Shaper of Ways",
            class: "Psion 20 / Mind-Bender 10 / Epic Psion 10",
            hitDice: "17d8+221 (HD) + 40d4+520 (Psion/Classes) = 1050 hp",
            challengeRating: 57,
            armorClass: {
                total: 80,
                breakdown: "(-1 size, +3 Dex, +20 natural, +12 armor, +12 deflection, +16 insight, +15 sacred)",
            },
            initiative: {
                bonus: 3,
                breakdown: "(+3 Dex)",
            },
            buildNotes: [
                "Having mastered all forms of psionic power, it has become a true god of thought and creation.",
                "It no longer seeks to understand reality; it creates it. Its thoughts are the laws of its own, perfect, alien universe.",
                "It has found a home not by returning to its old one, but by forging a new one, a testament to the idea that even the most alien mind can find peace through creation."
            ],
            sheet: {
                baseAtk: 32,
                grapple: 45,
                fullAttack: [
                    { name: "2 Touches", bonus: "+41/+36/+31/+26", damage: "2d6+9 plus reality distortion", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Reality Unspun", type: "Su", description: "1/day, can force all creatures in a 1-mile radius to make a Will save (DC 50) or have their concept of reality temporarily erased, leaving them stunned for 1d4 rounds and unable to use spells or psionics."}
                ],
                specialQualities: [
                    { name: "One with the Far Realm", type: "Ex", description: "Immune to all mind-affecting effects from this reality. Can only be permanently killed in the Far Realm." },
                ],
                saves: {
                    fort: { bonus: 52, breakdown: "+10 HD, +15 Con, +27 Class" },
                    ref: { bonus: 40, breakdown: "+10 HD, +3 Dex, +27 Class" },
                    will: { bonus: 49, breakdown: "+10 HD, +6 Wis, +33 Class" },
                },
                abilities: { str: 28, dex: 17, con: 41, int: 35, wis: 23, cha: 30 },
                skills: [
                    { name: "Concentration", bonus: 76, breakdown: "63 ranks" },
                    { name: "Knowledge (any)", bonus: 73, breakdown: "63 ranks" },
                    { name: "Psicraft", bonus: 73, breakdown: "63 ranks" },
                ],
                feats: [
                     { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Psionic Body", description: "" }, { name: "Power Penetration", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Boost Construct", description: "" }, { name: "Quicken Power", description: "" }, { name: "Maximize Power", description: "" }, { name: "Greater Power Penetration", description: "" }, { name: "Epic Psionic Focus", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Epic Power Penetration", description: "" },
                    { name: "Great Intelligence", description: "" }, { name: "Perfect Health", description: "" },
                ],
                flaws: [],
                environment: "Its personal demiplane",
                organization: "Unique",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The First Thought", cost: "Artifact", description: "" },
                         { name: "The Shaper's Heart", cost: "Artifact", description: "" },
                         { name: "The Impossible Labyrinth", cost: "Artifact", description: "" },
                    ]
                }
            }
        },
    ]
};