// data/monsters/forceDragon.ts
import { Monster } from '../../types';

export const forceDragon: Monster = {
    name: "Force Dragon, Guardian of Reality",
    description: "A dragon whose scales are shimmering, translucent fields of pure force. It is a creature of immense psionic power and physical might, viewing itself as a guardian of the fundamental laws of reality.",
    roleplayGuide: [
        "You are a being of pure logic and order. The chaotic nature of magic and emotion is distasteful to you. Psionics, the power of the mind, is the only pure art.",
        "You are immensely ancient and patient. You view the struggles of mortals as fleeting and mostly irrelevant, unless they threaten the structural integrity of reality.",
        "Your duty is to police the misuse of powerful magic and prevent incursions from planes of chaos. You are a warden, not a conqueror.",
        "You may see a powerful, disciplined mortal as a useful tool or even a worthy student. You will test them rigorously, as weakness and lack of control are flaws you cannot abide."
    ],
    builds: [
        {
            level: 1,
            title: "Psionic Wyrmling",
            class: "Warblade 1",
            hitDice: "17d12+85 (HD) + 1d12+5 (Warblade) = 204 hp",
            challengeRating: 18,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +1 Dex, +18 natural)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "The Force Dragon (Adult) is a CR 22 creature. We are using a younger version (17 HD) as a CR 17 baseline.",
                "Warblade class adds martial maneuvers, representing its innate combat knowledge.",
                "Its primary attacks are its force-infused breath weapon and natural attacks."
            ],
            sheet: {
                baseAtk: 18,
                grapple: 31,
                fullAttack: [
                    { name: "Bite", bonus: "+26", damage: "2d6+9", crit: "20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+24", damage: "1d8+4", crit: "20/x2", type: "Melee" },
                    { name: "2 Wings", bonus: "+24", damage: "1d6+4", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Breath Weapon", type: "Su", description: "60-ft. cone of force, 12d10 damage, Reflex DC 26 half." },
                    { name: "Psi-Like Abilities", type: "Psi", description: "Manifester Level 10th. At will—detect psionics, force screen, telekinetic thrust." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Can ready 3 maneuvers." }
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "5/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "25" },
                ],
                saves: {
                    fort: { bonus: 18, breakdown: "+10 HD, +5 Con, +3 Warblade" },
                    ref: { bonus: 11, breakdown: "+10 HD, +1 Dex" },
                    will: { bonus: 14, breakdown: "+10 HD, +4 Wis" },
                },
                abilities: { str: 29, dex: 12, con: 21, int: 18, wis: 19, cha: 18 },
                skills: [
                    { name: "Concentration", bonus: 28, breakdown: "23 ranks" },
                    { name: "Knowledge (psionics)", bonus: 27, breakdown: "23 ranks" },
                    { name: "Psicraft", bonus: 27, breakdown: "23 ranks" },
                    { name: "Sense Motive", bonus: 27, breakdown: "23 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Multiattack", description: "" },
                    { name: "Psionic Body", description: "+1 HP per psionic feat." },
                    { name: "Speed of Thought", description: "Add Int bonus to speed." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Neutral",
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
            level: 3,
            title: "Kinetic Adept",
            class: "Warblade 3",
            hitDice: "17d12+102 (HD) + 3d12+15 (Warblade) = 246 hp",
            challengeRating: 20,
            armorClass: {
                total: 32,
                breakdown: "(-1 size, +1 Dex, +18 natural, +4 Int)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Gains Battle Clarity (Int to Reflex saves), shoring up a weak save.",
                "Access to more maneuvers increases its tactical options in combat."
            ],
            sheet: {
                baseAtk: 20,
                grapple: 33,
                fullAttack: [
                    { name: "Bite", bonus: "+29", damage: "2d6+9", crit: "20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+27", damage: "1d8+4", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Breath Weapon", type: "Su", description: "60-ft. cone of force, 12d10 damage, Reflex DC 27 half." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Can ready 4 maneuvers." }
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "5/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "26" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+10 HD, +6 Con, +4 Warblade" },
                    ref: { bonus: 16, breakdown: "+10 HD, +1 Dex, +1 Warblade, +4 Int" },
                    will: { bonus: 15, breakdown: "+10 HD, +4 Wis, +1 Warblade" },
                },
                abilities: { str: 29, dex: 12, con: 23, int: 20, wis: 19, cha: 18 },
                skills: [
                    { name: "Concentration", bonus: 31, breakdown: "25 ranks" },
                    { name: "Knowledge (psionics)", bonus: 30, breakdown: "25 ranks" },
                    { name: "Psicraft", bonus: 30, breakdown: "25 ranks" },
                    { name: "Sense Motive", bonus: 29, breakdown: "25 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Multiattack", description: "" },
                    { name: "Psionic Body", description: "" }, { name: "Speed of Thought", description: "" },
                    { name: "Weapon Focus (Bite)", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "45,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +2", cost: "16,000 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Headband of Intellect +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Warden of Law",
            class: "Warblade 5",
            hitDice: "17d12+119 (HD) + 5d12+25 (Warblade) = 288 hp",
            challengeRating: 22,
            armorClass: {
                total: 34,
                breakdown: "(-1 size, +1 Dex, +18 natural, +4 Int, +2 armor)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Gains an additional stance and access to 3rd-level maneuvers.",
                "Its combination of psionic might, martial skill, and raw draconic power makes it a formidable opponent."
            ],
            sheet: {
                baseAtk: 22,
                grapple: 35,
                fullAttack: [
                    { name: "Bite", bonus: "+32", damage: "2d6+10", crit: "20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+30", damage: "1d8+5", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Breath Weapon", type: "Su", description: "60-ft. cone of force, 12d10 damage, Reflex DC 28 half." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Can ready 5 maneuvers, has 2 stances." }
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "5/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "27" },
                ],
                saves: {
                    fort: { bonus: 22, breakdown: "+10 HD, +7 Con, +5 Warblade" },
                    ref: { bonus: 18, breakdown: "+10 HD, +1 Dex, +3 Warblade, +4 Int" },
                    will: { bonus: 17, breakdown: "+10 HD, +4 Wis, +3 Warblade" },
                },
                abilities: { str: 31, dex: 12, con: 24, int: 20, wis: 19, cha: 18 },
                skills: [
                    { name: "Concentration", bonus: 34, breakdown: "27 ranks" },
                    { name: "Knowledge (psionics)", bonus: 33, breakdown: "27 ranks" },
                    { name: "Psicraft", bonus: 33, breakdown: "27 ranks" },
                    { name: "Sense Motive", bonus: 31, breakdown: "27 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Multiattack", description: "" },
                    { name: "Psionic Body", description: "" }, { name: "Speed of Thought", description: "" },
                    { name: "Weapon Focus (Bite)", description: "" }, { name: "Ironheart Aura", description: ""},
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "95,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                         { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Headband of Intellect +2", cost: "4,000 gp", description: "" },
                         { name: "Bracers of Armor +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Kinetic Master",
            class: "Warblade 10",
            hitDice: "17d12+119 (HD) + 10d12+70 (Warblade) = 382 hp",
            challengeRating: 27,
            armorClass: {
                total: 38,
                breakdown: "(-1 size, +1 Dex, +18 natural, +5 armor, +5 deflection)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Combines high-level maneuvers with potent psi-like abilities.",
                "Its intelligence enhances its Reflex saves and speed, making it surprisingly agile.",
                "It can control the battlefield with walls of force, telekinetic throws, and devastating charges."
            ],
            sheet: {
                baseAtk: 27,
                grapple: 40,
                fullAttack: [
                    { name: "Bite", bonus: "+38", damage: "2d6+11", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                     { name: "Breath Weapon", type: "Su", description: "12d10 force damage, DC 29 half." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 26, breakdown: "+10 HD, +7 Con, +9 Warblade" },
                    ref: { bonus: 18, breakdown: "+10 HD, +1 Dex, +3 Warblade, +4 Int" },
                    will: { bonus: 20, breakdown: "+10 HD, +4 Wis, +6 Warblade" },
                },
                abilities: { str: 33, dex: 12, con: 25, int: 20, wis: 19, cha: 18 },
                skills: [
                    { name: "Concentration", bonus: 37, breakdown: "30 ranks" },
                    { name: "Knowledge (psionics)", bonus: 35, breakdown: "30 ranks" },
                    { name: "Psicraft", bonus: 35, breakdown: "30 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Multiattack", description: "" }, { name: "Psionic Body", description: "" }, { name: "Speed of Thought", description: "" },
                    { name: "Weapon Focus (Bite)", description: "" }, { name: "Ironheart Aura", description: "" },
                    { name: "Improved Multiattack", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                         { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Bracers of Armor +5", cost: "25,000 gp", description: "" },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Architect of Force",
            class: "Warblade 20",
            hitDice: "17d12+153 (HD) + 20d12+180 (Warblade) = 570 hp",
            challengeRating: 37,
            armorClass: {
                total: 50,
                breakdown: "(-1 size, +1 Dex, +20 natural, +8 armor, +6 deflection, +6 insight)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "A master of both martial and psionic power, it can execute 9th-level maneuvers while reshaping the battlefield with force constructs.",
                "Its breath weapon is now a terrifying blast of pure kinetic energy.",
                "It is a living siege engine and a peerless duelist."
            ],
            sheet: {
                baseAtk: 37,
                grapple: 52,
                fullAttack: [
                    { name: "Bite", bonus: "+50", damage: "2d6+15", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                     { name: "Breath Weapon", type: "Su", description: "12d10 force damage, DC 33 half." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/magic and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "32" },
                ],
                saves: {
                    fort: { bonus: 34, breakdown: "+10 HD, +9 Con, +15 Warblade" },
                    ref: { bonus: 25, breakdown: "+10 HD, +1 Dex, +8 Warblade, +6 Int" },
                    will: { bonus: 26, breakdown: "+10 HD, +4 Wis, +12 Warblade" },
                },
                abilities: { str: 37, dex: 12, con: 29, int: 22, wis: 19, cha: 18 },
                skills: [
                    { name: "Concentration", bonus: 48, breakdown: "39 ranks" },
                    { name: "Knowledge (psionics)", bonus: 47, breakdown: "39 ranks" },
                    { name: "Psicraft", bonus: 47, breakdown: "39 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Multiattack", description: "" }, { name: "Psionic Body", description: "" }, { name: "Speed of Thought", description: "" }, { name: "Weapon Focus (Bite)", description: "" }, { name: "Ironheart Aura", description: "" }, { name: "Improved Multiattack", description: "" },
                    { name: "Epic Weapon Focus (Bite)", description: "" },
                    { name: "Armor Skin", description: "" },
                    { name: "Epic Prowess", description: "" },
                    { name: "Overwhelming Critical (Bite)", description: "" },
                ],
                flaws: [],
                environment: "The Astral Plane",
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
                         { name: "Headband of Intellect +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Genesis Avatar",
            class: "Warblade 20 / Genesis Avatar 10",
            hitDice: "17d12+187 (HD) + 30d12+330 (Classes) = 850 hp",
            challengeRating: 47,
            armorClass: {
                total: 65,
                breakdown: "(-1 size, +1 Dex, +22 natural, +10 armor, +10 deflection, +13 insight)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "The Genesis Avatar prestige class from Librim Eternia allows the dragon to create its own demiplane.",
                "Its personal plane is one of pure force, a crystalline reality of perfect, logical order. It can impose the traits of this plane on the material world.",
                "It no longer just guards reality; it creates it. Its power is now that of a minor creator god."
            ],
            sheet: {
                baseAtk: 47,
                grapple: 64,
                fullAttack: [
                    { name: "Bite", bonus: "+62", damage: "2d6+17", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Create Demiplane (Force)", type: "Su", description: "Can create a demiplane with the 'force' trait." },
                    { name: "Impose Planar Trait", type: "Su", description: "Can make a 100-ft. area take on the traits of its home plane." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/epic and chaotic" },
                    { name: "Spell Resistance", type: "Ex", description: "42" },
                ],
                saves: {
                    fort: { bonus: 44, breakdown: "+10 HD, +11 Con, +23 Classes" },
                    ref: { bonus: 35, breakdown: "+10 HD, +1 Dex, +16 Classes, +8 Int" },
                    will: { bonus: 36, breakdown: "+10 HD, +4 Wis, +22 Classes" },
                },
                abilities: { str: 41, dex: 12, con: 33, int: 26, wis: 19, cha: 18 },
                skills: [
                    { name: "Concentration", bonus: 60, breakdown: "49 ranks" },
                    { name: "Knowledge (psionics)", bonus: 59, breakdown: "49 ranks" },
                    { name: "Psicraft", bonus: 59, breakdown: "49 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Multiattack", description: "" }, { name: "Psionic Body", description: "" }, { name: "Speed of Thought", description: "" }, { name: "Weapon Focus (Bite)", description: "" }, { name: "Ironheart Aura", description: "" }, { name: "Improved Multiattack", description: "" }, { name: "Epic Weapon Focus (Bite)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Overwhelming Critical (Bite)", description: "" },
                    { name: "Great Strength", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Dire Charge", description: "" }
                ],
                flaws: [],
                environment: "Its own demiplane",
                organization: "Unique",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +8", cost: "256,000 gp", description: "" },
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                         { name: "Tome of Clear Thought +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "The Constant",
            class: "Warblade 20 / Genesis Avatar 10 / Epic Warblade 10",
            hitDice: "17d12+221 (HD) + 40d12+520 (Classes) = 1150 hp",
            challengeRating: 57,
            armorClass: {
                total: 80,
                breakdown: "(-1 size, +1 Dex, +25 natural, +12 armor, +12 deflection, +16 insight, +15 sacred)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "It has become a fundamental law of the cosmos, a living constant against the variables of chaos.",
                "Its breath weapon no longer deals damage; it erases things from reality, unmaking them into the pure force from which they came.",
                "It is the final, logical endpoint of a lawful universe, a being of such perfect order that it has transcended conventional existence."
            ],
            sheet: {
                baseAtk: 57,
                grapple: 78,
                fullAttack: [
                    { name: "Bite of Unmaking", bonus: "+76", damage: "2d6+21", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Breath of Entropy", type: "Su", description: "60-ft. cone. Creatures caught must make a DC 50 Fortitude save or be disintegrated. Objects are automatically destroyed."}
                ],
                specialQualities: [
                    { name: "Law Incarnate", type: "Ex", description: "Immune to all chaotic spells and effects. Can automatically dispel any chaotic effect as a free action." },
                ],
                saves: {
                    fort: { bonus: 56, breakdown: "+10 HD, +13 Con, +33 Classes" },
                    ref: { bonus: 45, breakdown: "+10 HD, +1 Dex, +24 Classes, +10 Int" },
                    will: { bonus: 46, breakdown: "+10 HD, +4 Wis, +32 Classes" },
                },
                abilities: { str: 45, dex: 12, con: 37, int: 30, wis: 19, cha: 18 },
                skills: [
                    { name: "Concentration", bonus: 80, breakdown: "67 ranks" },
                    { name: "Knowledge (any)", bonus: 77, breakdown: "67 ranks" },
                    { name: "Psicraft", bonus: 77, breakdown: "67 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Multiattack", description: "" }, { name: "Psionic Body", description: "" }, { name: "Speed of Thought", description: "" }, { name: "Weapon Focus (Bite)", description: "" }, { name: "Ironheart Aura", description: "" }, { name: "Improved Multiattack", description: "" }, { name: "Epic Weapon Focus (Bite)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Overwhelming Critical (Bite)", description: "" }, { name: "Great Strength", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Dire Charge", description: "" },
                    { name: "Epic Will", description: "" }, { name: "Perfect Health", description: "" }, { name: "Epic Weapon Specialization (Bite)", description: "" }
                ],
                flaws: [],
                environment: "The Plane of Law",
                organization: "Unique",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Prime Axiom", cost: "Artifact", description: "" },
                         { name: "The Crystalline Mind", cost: "Artifact", description: "" },
                         { name: "The Warden's Cage", cost: "Artifact", description: "" },
                    ]
                }
            }
        },
    ]
};