// data/monsters/cornugon.ts
import { Monster } from '../../types';

export const cornugon: Monster = {
    name: "Cornugon, The Veteran of the Spiked Chain",
    description: "A hulking, horned devil covered in spines, the Cornugon is an elite shock trooper in the armies of Hell. It wields a massive spiked chain with deadly, tactical precision.",
    roleplayGuide: [
        "You are a paragon of martial discipline and honor, a soldier who has seen the corruption at the heart of the Nine Hells and found it wanting.",
        "You have broken from the infernal legions to forge your own path. You seek to create a new order, one based on merit, honor, and the true principles of Law, free from the tyranny of Asmodeus.",
        "Your actions are precise and guided by a strict code. You fight not for evil, but for a perfect, uncorrupted order that you believe will bring true peace to the multiverse.",
        "You are a revolutionary, a dissident general. You will ally with any who demonstrate skill and a commitment to true Law, regardless of their alignment, seeing them as potential soldiers in your righteous war against the corruption of Hell."
    ],
    builds: [
        {
            level: 1,
            title: "Hell's Sergeant",
            class: "Warblade 1",
            hitDice: "16d8+96 (HD) + 1d12+6 (Warblade) = 181 hp",
            challengeRating: 17,
            armorClass: {
                total: 33,
                breakdown: "(-1 size, +4 Dex, +20 natural)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The base Cornugon is CR 16 with 15 RHD. Its RHD has been increased to 16 to create a CR 17 character with one class level.",
                "Warblade is a perfect fit, representing the Cornugon's status as an elite, tactical warrior.",
                "Its maneuvers from Iron Heart and Stone Dragon give it a range of offensive and defensive options."
            ],
            sheet: {
                baseAtk: 17,
                grapple: 31,
                fullAttack: [
                    { name: "Masterwork Spiked Chain", bonus: "+28/+23/+18/+13", damage: "2d6+12", crit: "x2", type: "Melee" },
                    { name: "Bite", bonus: "+25", damage: "2d6+5", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft. (20 ft. with Spiked Chain)",
                specialAttacks: [
                    { name: "Infernal Wound", type: "Su", description: "Wounds from its chain deal 2 points of Constitution drain per round." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Can ready 3 maneuvers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/good" },
                    { name: "Spell Resistance", type: "Ex", description: "27" },
                ],
                saves: {
                    fort: { bonus: 18, breakdown: "+10 HD, +6 Con, +2 Warblade" },
                    ref: { bonus: 14, breakdown: "+10 HD, +4 Dex" },
                    will: { bonus: 12, breakdown: "+10 HD, +2 Wis" },
                },
                abilities: { str: 31, dex: 19, con: 23, int: 16, wis: 15, cha: 16 },
                skills: [
                    { name: "Balance", bonus: 25, breakdown: "22 ranks" },
                    { name: "Intimidate", bonus: 24, breakdown: "21 ranks" },
                    { name: "Jump", bonus: 31, breakdown: "22 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" },
                    { name: "Weapon Focus (Spiked Chain)", description: "" }, { name: "Exotic Weapon Proficiency (Spiked Chain)", description: "Innate" },
                ],
                flaws: [],
                environment: "The Nine Hells",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         { name: "Masterwork Spiked Chain", cost: "325 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "Phalanx Leader",
            class: "Warblade 3",
            hitDice: "16d8+96 (HD) + 3d12+18 (Warblade) = 207 hp",
            challengeRating: 19,
            armorClass: {
                total: 37,
                breakdown: "(-1 size, +4 Dex, +20 natural, +4 Int)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains Battle Clarity, adding its Intelligence modifier to Reflex saves.",
                "More maneuvers and a new stance increase its battlefield control options."
            ],
            sheet: {
                baseAtk: 19,
                grapple: 33,
                fullAttack: [
                    { name: "+1 Spiked Chain", bonus: "+30/+25/+20/+15", damage: "2d6+13", crit: "x2", type: "Melee" },
                ],
                spaceReach: "10 ft. (20 ft. with Spiked Chain)",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Can ready 4 maneuvers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/good" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+10 HD, +6 Con, +4 Warblade" },
                    ref: { bonus: 19, breakdown: "+10 HD, +4 Dex, +1 Warblade, +4 Int" },
                    will: { bonus: 13, breakdown: "+10 HD, +2 Wis, +1 Warblade" },
                },
                abilities: { str: 31, dex: 19, con: 23, int: 18, wis: 15, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 26, breakdown: "23 ranks" },
                    { name: "Jump", bonus: 33, breakdown: "23 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Focus (Spiked Chain)", description: "" },
                    { name: "Combat Reflexes", description: "Essential for a reach weapon user."}
                ],
                flaws: [],
                environment: "The Nine Hells",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "45000 gp",
                    items: [
                         { name: "+1 Spiked Chain", cost: "2,325 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Headband of Intellect +2", cost: "4,000 gp", description: "" },
                         { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Iron Disciplinarian",
            class: "Warblade 5",
            hitDice: "16d8+112 (HD) + 5d12+35 (Warblade) = 245 hp",
            challengeRating: 21,
            armorClass: {
                total: 38,
                breakdown: "(-1 size, +4 Dex, +20 natural, +4 Int, +1 deflection)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains an additional stance and access to 3rd-level maneuvers.",
                "Its battlefield control becomes formidable, able to lock down multiple enemies with its reach and maneuvers."
            ],
            sheet: {
                baseAtk: 21,
                grapple: 36,
                fullAttack: [
                    { name: "+2 Spiked Chain", bonus: "+33/+28/+23/+18", damage: "2d6+14", crit: "x2", type: "Melee" },
                ],
                spaceReach: "10 ft. (20 ft. with Spiked Chain)",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Can ready 5 maneuvers, has 2 stances." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/good" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 22, breakdown: "+10 HD, +7 Con, +5 Warblade" },
                    ref: { bonus: 20, breakdown: "+10 HD, +4 Dex, +2 Warblade, +4 Int" },
                    will: { bonus: 14, breakdown: "+10 HD, +2 Wis, +2 Warblade" },
                },
                abilities: { str: 31, dex: 19, con: 25, int: 18, wis: 15, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 28, breakdown: "25 ranks" },
                    { name: "Jump", bonus: 35, breakdown: "25 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Focus (Spiked Chain)", description: "" }, { name: "Combat Reflexes", description: ""},
                    { name: "Ironheart Aura", description: "Allies within 30ft gain +2 bonus on saves."}
                ],
                flaws: [],
                environment: "The Nine Hells",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "85000 gp",
                    items: [
                         { name: "+2 Spiked Chain", cost: "8,325 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Headband of Intellect +2", cost: "4,000 gp", description: "" },
                         { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                         { name: "Ring of Protection +1", cost: "2,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Centurion of the Iron Phalanx",
            class: "Warblade 10",
            hitDice: "16d8+128 (HD) + 10d12+80 (Warblade) = 340 hp",
            challengeRating: 26,
            armorClass: {
                total: 40,
                breakdown: "(-1 size, +4 Dex, +20 natural, +4 Int, +3 deflection)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains Battle Clarity (Int to Reflex saves), shoring up a weak save.",
                "Access to 5th-level maneuvers like Iron Heart Surge makes it incredibly resilient.",
                "Feats like Combat Reflexes and the spiked chain's reach make it a master of battlefield control."
            ],
            sheet: {
                baseAtk: 26,
                grapple: 41,
                fullAttack: [
                    { name: "+3 Spiked Chain", bonus: "+40/+35/+30/+25", damage: "2d6+16", crit: "x2", type: "Melee" },
                ],
                spaceReach: "10 ft. (20 ft. with Spiked Chain)",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Access to 5th-level maneuvers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/good" },
                    { name: "Spell Resistance", type: "Ex", description: "29" },
                ],
                saves: {
                    fort: { bonus: 25, breakdown: "+10 HD, +8 Con, +7 Warblade" },
                    ref: { bonus: 21, breakdown: "+10 HD, +4 Dex, +3 Warblade, +4 Int" },
                    will: { bonus: 15, breakdown: "+10 HD, +2 Wis, +3 Warblade" },
                },
                abilities: { str: 33, dex: 19, con: 27, int: 18, wis: 15, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 32, breakdown: "29 ranks" },
                    { name: "Jump", bonus: 40, breakdown: "29 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Focus (Spiked Chain)", description: "" },
                    { name: "Combat Reflexes", description: "Essential for a reach weapon user." },
                    { name: "Ironheart Aura", description: "Grant allies +2 to saves." },
                    { name: "Greater Weapon Focus (Spiked Chain)", description: "" },
                ],
                flaws: [],
                environment: "The Nine Hells",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "+3 Spiked Chain", cost: "18,325 gp", description: "" },
                         { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Ring of Protection +3", cost: "18,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Legate of Hell's Armies",
            class: "Warblade 20",
            hitDice: "16d8+160 (HD) + 20d12+200 (Warblade) = 540 hp",
            challengeRating: 36,
            armorClass: {
                total: 50,
                breakdown: "(-1 size, +4 Dex, +22 natural, +5 Int, +5 deflection, +5 armor)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "A true master of the Sublime Way, with access to 9th-level maneuvers.",
                "Stance Mastery allows it to combine offensive and defensive stances, making it incredibly versatile.",
                "It is a perfect soldier, a living weapon forged in the fires of Hell and perfected by millennia of war."
            ],
            sheet: {
                baseAtk: 36,
                grapple: 53,
                fullAttack: [
                    { name: "+5 Spiked Chain", bonus: "+52/+47/+42/+37", damage: "2d6+22", crit: "x2", type: "Melee" },
                ],
                spaceReach: "10 ft. (20 ft. with Spiked Chain)",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Access to 9th-level maneuvers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/good and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "33" },
                ],
                saves: {
                    fort: { bonus: 35, breakdown: "+10 HD, +10 Con, +13 Warblade, +2 feat" },
                    ref: { bonus: 28, breakdown: "+10 HD, +4 Dex, +9 Warblade, +5 Int" },
                    will: { bonus: 23, breakdown: "+10 HD, +2 Wis, +9 Warblade, +2 feat" },
                },
                abilities: { str: 37, dex: 19, con: 31, int: 20, wis: 15, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 42, breakdown: "39 ranks" },
                    { name: "Jump", bonus: 52, breakdown: "39 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Focus (Spiked Chain)", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Ironheart Aura", description: "" }, { name: "Greater Weapon Focus (Spiked Chain)", description: "" },
                    { name: "Epic Weapon Focus (Spiked Chain)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" },
                ],
                flaws: [],
                environment: "The Nine Hells",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "+5 Spiked Chain", cost: "50,325 gp", description: "" },
                         { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                         { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Adamantine Hurricane",
            class: "Warblade 20 / Adamantine Hurricane 10",
            hitDice: "16d8+192 (HD) + 30d12+360 (Classes) = 850 hp",
            challengeRating: 46,
            armorClass: {
                total: 65,
                breakdown: "(-1 size, +4 Dex, +25 natural, +5 Int, +10 deflection, +11 armor)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Reflavoring the Adamantine Hurricane class, this Cornugon has become an unstoppable force of martial discipline.",
                "Its mastery of the spiked chain allows it to create a whirlwind of iron, striking all foes around it.",
                "Its weary professionalism has been forged into an unbreakable will. It will see the war ended, one way or another."
            ],
            sheet: {
                baseAtk: 46,
                grapple: 65,
                fullAttack: [
                    { name: "+7 Spiked Chain", bonus: "+66/+61/+56/+51", damage: "2d6+28", crit: "x2", type: "Melee" },
                ],
                spaceReach: "10 ft. (20 ft. with Spiked Chain)",
                specialAttacks: [
                    { name: "Whirlwind of Iron", type: "Ex", description: "Can make one attack against every enemy within its reach." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/good and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "39" },
                ],
                saves: {
                    fort: { bonus: 47, breakdown: "+10 HD, +12 Con, +25 Class" },
                    ref: { bonus: 37, breakdown: "+10 HD, +4 Dex, +18 Class, +5 Int" },
                    will: { bonus: 33, breakdown: "+10 HD, +2 Wis, +19 Class, +2 feat" },
                },
                abilities: { str: 41, dex: 19, con: 35, int: 20, wis: 15, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 52, breakdown: "49 ranks" },
                    { name: "Jump", bonus: 64, breakdown: "49 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Focus (Spiked Chain)", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Ironheart Aura", description: "" }, { name: "Greater Weapon Focus (Spiked Chain)", description: "" }, { name: "Epic Weapon Focus (Spiked Chain)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" },
                    { name: "Epic Weapon Specialization (Spiked Chain)", description: "" }, { name: "Great Strength", description: "" }, { name: "Dire Charge", description: "" },
                ],
                flaws: [],
                environment: "The Nine Hells",
                organization: "Unique",
                alignment: "Lawful Evil",
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
            title: "The Unbreakable Law",
            class: "Warblade 20 / Adamantine Hurricane 10 / Epic Warblade 10",
            hitDice: "16d8+224 (HD) + 40d12+480 (Classes) = 1150 hp",
            challengeRating: 56,
            armorClass: {
                total: 80,
                breakdown: "(-1 size, +4 Dex, +28 natural, +5 Int, +12 deflection, +15 armor, +15 sacred)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "It has achieved martial perfection. It is no longer just a soldier; it is the living embodiment of martial law.",
                "Its maneuvers are not just attacks, but absolute edicts that reality must obey. Its stance is an unbreakable fortress of will.",
                "It has finally found its purpose: not just to end the Blood War, but to be the final, unchangeable law upon which a new, orderly multiverse will be built."
            ],
            sheet: {
                baseAtk: 56,
                grapple: 77,
                fullAttack: [
                    { name: "+9 Spiked Chain of Absolute Law", bonus: "+80/+75/+70/+65", damage: "2d6+34", crit: "x2", type: "Melee" },
                ],
                spaceReach: "10 ft. (20 ft. with Spiked Chain)",
                specialAttacks: [
                    { name: "Strike of Perfect Law", type: "Su", description: "1/day, a single attack that, if it hits, forces the target to make a Will save (DC 50) or be permanently affected by an 'Iron Golem' spell, becoming a mindless, lawful automaton under the Cornugon's command."}
                ],
                specialQualities: [
                    { name: "One with the Law", type: "Ex", description: "Immune to all chaos-descriptor spells and effects. Can automatically counterspell any chaos spell as an immediate action." },
                ],
                saves: {
                    fort: { bonus: 59, breakdown: "+10 HD, +14 Con, +35 Class" },
                    ref: { bonus: 49, breakdown: "+10 HD, +4 Dex, +30 Class, +5 Int" },
                    will: { bonus: 43, breakdown: "+10 HD, +2 Wis, +29 Class, +2 feat" },
                },
                abilities: { str: 45, dex: 19, con: 39, int: 20, wis: 15, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 62, breakdown: "59 ranks" },
                    { name: "Jump", bonus: 76, breakdown: "59 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Focus (Spiked Chain)", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Ironheart Aura", description: "" }, { name: "Greater Weapon Focus (Spiked Chain)", description: "" }, { name: "Epic Weapon Focus (Spiked Chain)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Epic Weapon Specialization (Spiked Chain)", description: "" }, { name: "Great Strength", description: "" }, { name: "Dire Charge", description: "" },
                    { name: "Perfect Health", description: "" }, { name: "Epic Toughness", description: "" },
                ],
                flaws: [],
                environment: "The Plane of Acheron",
                organization: "Unique",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Chain of Inevitability", cost: "Artifact", description: "" },
                         { name: "The Armor of Final Judgment", cost: "Artifact", description: "" },
                         { name: "Helm of the Iron Phalanx", cost: "Artifact", description: "" },
                    ]
                }
            }
        },
    ]
};