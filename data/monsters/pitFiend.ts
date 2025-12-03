// data/monsters/pitFiend.ts
import { Monster } from '../../types';

export const pitFiend: Monster = {
    name: "Pit Fiend, The Dissident General",
    description: "A towering, winged devil of immense power and cunning, wreathed in hellfire. Pit Fiends are the generals of the Nine Hells, masters of strategy and the art of corruption.",
    roleplayGuide: [
        "You are a being of immense intellect and discipline, a master strategist in an endless, soul-crushing war.",
        "You are utterly disillusioned with the rigid, stagnant tyranny of the Nine Hells. You see Asmodeus's rule not as perfect order, but as the ultimate bureaucracy, stifling all ambition and progress.",
        "Your goal is to overthrow the current regime and impose your own vision of order—a ruthlessly efficient meritocracy where power is earned through victory, not backroom deals.",
        "You are pragmatic. You will make alliances with anyone, even angels, if it helps you weaken your rivals in the Hells. You will honor your word to the letter, because a contract is the only law you still respect."
    ],
    builds: [
        {
            level: 1,
            title: "Infernal Lieutenant",
            class: "Knight 1",
            hitDice: "16d8+96 (HD) + 1d12+6 (Knight) = 181 hp",
            challengeRating: 17,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +4 Dex, +22 natural)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The Pit Fiend is a CR 20 creature. To create a CR 17 baseline, its HD has been reduced from 18 to 16.",
                "Knight class from Player's Handbook II is a perfect fit, representing its tactical discipline and leadership.",
                "Its primary strengths are its powerful natural attacks, spell-like abilities, and tactical acumen."
            ],
            sheet: {
                baseAtk: 17,
                grapple: 31,
                fullAttack: [
                    { name: "2 Claws", bonus: "+27", damage: "2d8+10", crit: "20/x2", type: "Melee" },
                    { name: "2 Wings", bonus: "+25", damage: "2d6+5", crit: "20/x2", type: "Melee" },
                    { name: "Bite", bonus: "+25", damage: "4d6+5 and poison", crit: "20/x2", type: "Melee" },
                    { name: "Tail Slap", bonus: "+25", damage: "2d8+5 and constrict", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Knight's Challenge", type: "Ex", description: "Can compel a foe to attack it." },
                    { name: "Spell-Like Abilities", type: "Sp", description: "At will—blasphemy, create undead, greater dispel magic, greater teleport, invisibility, unholy aura." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/good and silver" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+10 HD, +8 Con, +2 Knight" },
                    ref: { bonus: 14, breakdown: "+10 HD, +4 Dex" },
                    will: { bonus: 16, breakdown: "+10 HD, +6 Wis" },
                },
                abilities: { str: 31, dex: 19, con: 27, int: 24, wis: 22, cha: 24 },
                skills: [
                    { name: "Bluff", bonus: 28, breakdown: "21 ranks" },
                    { name: "Diplomacy", bonus: 30, breakdown: "21 ranks" },
                    { name: "Intimidate", bonus: 28, breakdown: "21 ranks" },
                    { name: "Knowledge (the planes)", bonus: 28, breakdown: "21 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Initiative", description: "" },
                    { name: "Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Claw)", description: "" },
                ],
                flaws: [],
                environment: "The Nine Hells",
                organization: "Solitary, pair, or troop (1 pit fiend, 2-5 bone devils, 6-10 bearded devils)",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +1", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "Hell's Tactician",
            class: "Knight 3",
            hitDice: "16d8+96 (HD) + 3d12+18 (Knight) = 219 hp",
            challengeRating: 19,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +4 Dex, +22 natural)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains more uses of Knight's Challenge and the Bulwark of Defense ability.",
                "His tactical leadership skills begin to shine, making him a formidable commander."
            ],
            sheet: {
                baseAtk: 19,
                grapple: 33,
                fullAttack: [
                    { name: "2 Claws", bonus: "+29", damage: "2d8+10", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Knight's Challenge", type: "Ex", description: "3/day." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/good and silver" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 21, breakdown: "+10 HD, +8 Con, +3 Knight" },
                    ref: { bonus: 15, breakdown: "+10 HD, +4 Dex, +1 Knight" },
                    will: { bonus: 17, breakdown: "+10 HD, +6 Wis, +1 Knight" },
                },
                abilities: { str: 31, dex: 19, con: 27, int: 24, wis: 22, cha: 24 },
                skills: [
                    { name: "Diplomacy", bonus: 32, breakdown: "23 ranks" },
                    { name: "Intimidate", bonus: 30, breakdown: "23 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Claw)", description: "" },
                    { name: "Ability Focus (Poison)", description: "+2 DC to poison."}
                ],
                flaws: [],
                environment: "The Nine Hells",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "40000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +2", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Master of the Phalanx",
            class: "Knight 5",
            hitDice: "16d8+96 (HD) + 5d12+30 (Knight) = 255 hp",
            challengeRating: 21,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +4 Dex, +22 natural)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains Test of Mettle, punishing any foe who dares to ignore his challenge.",
                "His control of the battlefield is becoming absolute."
            ],
            sheet: {
                baseAtk: 21,
                grapple: 35,
                fullAttack: [
                    { name: "2 Claws", bonus: "+31", damage: "2d8+10", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Test of Mettle", type: "Ex", description: "Foes who ignore his challenge are shaken." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/good and silver" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 22, breakdown: "+10 HD, +8 Con, +4 Knight" },
                    ref: { bonus: 15, breakdown: "+10 HD, +4 Dex, +1 Knight" },
                    will: { bonus: 17, breakdown: "+10 HD, +6 Wis, +1 Knight" },
                },
                abilities: { str: 31, dex: 19, con: 27, int: 24, wis: 22, cha: 24 },
                skills: [
                    { name: "Diplomacy", bonus: 34, breakdown: "25 ranks" },
                    { name: "Intimidate", bonus: 32, breakdown: "25 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Claw)", description: "" },
                    { name: "Ability Focus (Poison)", description: "+2 DC to poison."}
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
                         { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                         { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: ""},
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Hellfire Commander",
            class: "Knight 5 / Hellfire Warlock 5",
            hitDice: "16d8+112 (HD) + 5d12+35 (Knight) + 5d6+35 (Warlock) = 280 hp",
            challengeRating: 26,
            armorClass: {
                total: 45,
                breakdown: "(-1 size, +4 Dex, +22 natural, +6 armor, +4 shield)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Multiclassing into Hellfire Warlock grants powerful ranged attacks and the ability to channel the very essence of Hell.",
                "Hellfire Blast deals Constitution damage to the Pit Fiend but adds immense power to its attacks.",
                "This build combines tactical melee control with devastating ranged power."
            ],
            sheet: {
                baseAtk: 22,
                grapple: 36,
                fullAttack: [
                    { name: "2 Claws", bonus: "+33", damage: "2d8+11", crit: "20/x2", type: "Melee" },
                    { name: "Hellfire Blast", bonus: "+25", damage: "8d6 fire + 10d6 hellfire", crit: "N/A", type: "Ranged Touch" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Hellfire Blast", type: "Su", description: "Deals bonus damage equal to 2d6 per class level, but costs 1 point of Constitution burn per use." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/good and silver, DR 5/adamantine from hellfire" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+10 HD, +9 Con, +5 Knight" },
                    ref: { bonus: 15, breakdown: "+10 HD, +4 Dex, +1 Knight" },
                    will: { bonus: 21, breakdown: "+10 HD, +6 Wis, +1 Knight, +4 Warlock" },
                },
                abilities: { str: 33, dex: 19, con: 28, int: 24, wis: 22, cha: 24 },
                skills: [
                    { name: "Bluff", bonus: 33, breakdown: "26 ranks" },
                    { name: "Diplomacy", bonus: 35, breakdown: "26 ranks" },
                    { name: "Intimidate", bonus: 33, breakdown: "26 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Claw)", description: "" },
                    { name: "Ability Focus (Poison)", description: "" }, { name: "Hellfire Resistance", description: "Take less Con burn." }
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
                         { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                         { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Bracers of Armor +6", cost: "36,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Archduke of the Ninth",
            class: "Knight 5 / Hellfire Warlock 10 / Devil-Binder 5",
            hitDice: "16d8+128 (HD) + 20d8+160 (Classes) = 456 hp",
            challengeRating: 36,
            armorClass: {
                total: 55,
                breakdown: "(-1 size, +4 Dex, +24 natural, +8 armor, +6 shield, +4 deflection)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Adding levels in a homebrewed 'Devil-Binder' class to represent mastery over diabolical pacts.",
                "It can now bind lesser devils to its will, call upon the power of Hell itself, and its hellfire blasts can melt citadels.",
                "It is a true rival to the Archdukes of Hell, its ambition matched only by its power."
            ],
            sheet: {
                baseAtk: 29,
                grapple: 43,
                fullAttack: [
                    { name: "2 Claws", bonus: "+42", damage: "2d8+13", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Greater Hellfire Blast", type: "Su", description: "Hellfire Blast now deals 20d6 bonus damage." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/good, silver, and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "36" },
                ],
                saves: {
                    fort: { bonus: 32, breakdown: "+10 HD, +11 Con, +11 Class" },
                    ref: { bonus: 21, breakdown: "+10 HD, +4 Dex, +7 Class" },
                    will: { bonus: 28, breakdown: "+10 HD, +6 Wis, +12 Class" },
                },
                abilities: { str: 35, dex: 19, con: 32, int: 26, wis: 22, cha: 28 },
                skills: [
                    { name: "Bluff", bonus: 43, breakdown: "34 ranks" },
                    { name: "Diplomacy", bonus: 45, breakdown: "34 ranks" },
                    { name: "Intimidate", bonus: 43, breakdown: "34 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Claw)", description: "" }, { name: "Ability Focus (Poison)", description: "" }, { name: "Hellfire Resistance", description: "" },
                    { name: "Epic Leadership", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" },
                ],
                flaws: [],
                environment: "The Nine Hells",
                organization: "Solitary with legion",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +5", cost: "100,000 gp", description: "" },
                         { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Lord of the Nine",
            class: "Knight 5 / Hellfire Warlock 10 / Devil-Binder 5 / Lord of the Nine 10",
            hitDice: "16d8+160 (HD) + 30d8+300 (Classes) = 708 hp",
            challengeRating: 46,
            armorClass: {
                total: 70,
                breakdown: "(-1 size, +4 Dex, +25 natural, +10 armor, +8 shield, +8 deflection, +15 profane)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The Lord of the Nine epic prestige class from Librim Eternia represents its apotheosis.",
                "It can now rewrite the contracts that bind devils, command entire legions with a thought, and wield the fires of Hell as a personal weapon.",
                "It has achieved its goal, overthrowing a rival and claiming an entire layer of Hell as its own. Its new order is brutal, efficient, and absolute."
            ],
            sheet: {
                baseAtk: 39,
                grapple: 55,
                fullAttack: [
                    { name: "2 Claws of Damnation", bonus: "+56", damage: "2d8+17 and soul trap", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Diabolical Edict", type: "Su", description: "Can issue a command that all devils on its plane must obey." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "25/good, silver, and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "46" },
                ],
                saves: {
                    fort: { bonus: 42, breakdown: "+10 HD, +13 Con, +19 Class" },
                    ref: { bonus: 31, breakdown: "+10 HD, +4 Dex, +17 Class" },
                    will: { bonus: 38, breakdown: "+10 HD, +6 Wis, +22 Class" },
                },
                abilities: { str: 39, dex: 19, con: 36, int: 28, wis: 22, cha: 32 },
                skills: [
                    { name: "Bluff", bonus: 55, breakdown: "44 ranks" },
                    { name: "Diplomacy", bonus: 57, breakdown: "44 ranks" },
                    { name: "Intimidate", bonus: 55, breakdown: "44 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Claw)", description: "" }, { name: "Ability Focus (Poison)", description: "" }, { name: "Hellfire Resistance", description: "" }, { name: "Epic Leadership", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" },
                    { name: "Great Strength", description: "" }, { name: "Epic Will", description: "" }, { name: "Epic Reputation", description: "" }
                ],
                flaws: [],
                environment: "Its layer of Hell",
                organization: "Unique, ruling a layer of Hell",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +8", cost: "256,000 gp", description: "" },
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "The Final Contract",
            class: "Knight 5 / Hellfire Warlock 10 / Devil-Binder 5 / Lord of the Nine 10 / Epic Knight 10",
            hitDice: "16d8+192 (HD) + 40d12+480 (Classes) = 1020 hp",
            challengeRating: 56,
            armorClass: {
                total: 85,
                breakdown: "(-1 size, +4 Dex, +28 natural, +12 armor, +10 shield, +10 deflection, +20 profane)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "It is now a true god of tyranny, law, and ambition. Its name is spoken in hushed tones across the planes.",
                "Its final goal is the ultimate contract: to bind the entire multiverse into a single, perfect, inescapable order under its rule.",
                "The dissident has become the ultimate tyrant, its rebellion merely a means to achieve a more perfect form of the prison it once sought to escape."
            ],
            sheet: {
                baseAtk: 49,
                grapple: 67,
                fullAttack: [
                    { name: "2 Claws of Absolute Law", bonus: "+70", damage: "2d8+21 and binding", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Word of Law", type: "Su", description: "1/day, can speak a word that stuns all non-lawful creatures in a mile radius (DC 60 Will negates)." }
                ],
                specialQualities: [
                    { name: "Law Incarnate", type: "Ex", description: "Immune to all chaotic spells and effects." },
                ],
                saves: {
                    fort: { bonus: 54, breakdown: "+10 HD, +15 Con, +29 Class" },
                    ref: { bonus: 41, breakdown: "+10 HD, +4 Dex, +27 Class" },
                    will: { bonus: 48, breakdown: "+10 HD, +6 Wis, +32 Class" },
                },
                abilities: { str: 43, dex: 19, con: 40, int: 30, wis: 22, cha: 36 },
                skills: [
                    { name: "Bluff", bonus: 68, breakdown: "55 ranks" },
                    { name: "Diplomacy", bonus: 70, breakdown: "55 ranks" },
                    { name: "Intimidate", bonus: 68, breakdown: "55 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Weapon Focus (Claw)", description: "" }, { name: "Ability Focus (Poison)", description: "" }, { name: "Hellfire Resistance", description: "" }, { name: "Epic Leadership", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Great Strength", description: "" }, { name: "Epic Will", description: "" }, { name: "Epic Reputation", description: "" },
                    { name: "Perfect Health", description: "" }, { name: "Great Charisma", description: "" }, { name: "Epic Toughness", description: "" }
                ],
                flaws: [],
                environment: "The Throne of Hell",
                organization: "Unique",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Iron Crown of Hell", cost: "Artifact", description: "+12 to all mental stats, grants true sight." },
                         { name: "The Chains of Asmodeus", cost: "Artifact", description: "+20 profane bonus to AC and saves, can bind any creature on a failed save." },
                         { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};