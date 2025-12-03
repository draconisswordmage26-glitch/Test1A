// data/monsters/valkyrie.ts
import { Monster } from '../../types';

export const valkyrie: Monster = {
    name: "Valkyrie, The Shieldmaiden",
    description: "A fierce and beautiful warrior-maiden who serves a deity of war or death. Valkyries choose which warriors are worthy to die in battle and be taken to the halls of their god.",
    roleplayGuide: [
        "You are bound by a sacred, ancient duty. You have watched millennia of mortals fight and die, and the endless cycle has made you weary and cynical.",
        "You respect courage and sacrifice above all else. A coward who dies in bed is worth less to you than a hero who falls on the battlefield.",
        "You have begun to question the 'glorious death' you are meant to revere. You now seek to prevent needless slaughter and save those who show true heroism, sometimes defying your divine orders to do so.",
        "You are a warrior first and foremost. While you can be reasoned with, your first instinct is to solve problems with your spear and shield."
    ],
    builds: [
        {
            level: 1,
            title: "Chooser of the Slain",
            class: "Crusader 1",
            hitDice: "15d8+75 (HD) + 1d10+5 (Crusader) = 157 hp",
            challengeRating: 16,
            armorClass: {
                total: 30,
                breakdown: "(+4 Dex, +8 natural, +8 full plate)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "The Valkyrie is a CR 15 creature. Its HD has been increased from 10 to 15 to bring it to the desired power level for epic progression.",
                "Crusader class from Tome of Battle fits perfectly, representing her martial prowess and divine fervor.",
                "Her build focuses on being a highly mobile and resilient frontline combatant."
            ],
            sheet: {
                baseAtk: 16,
                grapple: 24,
                fullAttack: [
                    { name: "+1 Holy Spear", bonus: "+24/+19/+14", damage: "1d8+9 plus 2d6 vs evil", crit: "x3", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Spell-Like Abilities", type: "Sp", description: "At will—detect evil, know alignment. 3/day—aid, call lightning, cure serious wounds." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Can ready 5 maneuvers from Devoted Spirit, Stone Dragon, or White Raven." }
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic and cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "25" },
                    { name: "Ethereal Jaunt", type: "Su", description: "Can become ethereal for 10 rounds/day." },
                ],
                saves: {
                    fort: { bonus: 16, breakdown: "+9 HD, +5 Con, +2 Crusader" },
                    ref: { bonus: 13, breakdown: "+9 HD, +4 Dex" },
                    will: { bonus: 12, breakdown: "+9 HD, +3 Wis" },
                },
                abilities: { str: 27, dex: 19, con: 20, int: 16, wis: 17, cha: 22 },
                skills: [
                    { name: "Diplomacy", bonus: 26, breakdown: "18 ranks" },
                    { name: "Handle Animal", bonus: 26, breakdown: "18 ranks" },
                    { name: "Intimidate", bonus: 26, breakdown: "18 ranks" },
                    { name: "Ride", bonus: 24, breakdown: "18 ranks" },
                    { name: "Sense Motive", bonus: 23, breakdown: "18 ranks" },
                ],
                feats: [
                    { name: "Mounted Combat", description: "" }, { name: "Ride-By Attack", description: "" }, { name: "Spirited Charge", description: "" },
                    { name: "Power Attack", description: "" }, { name: "Divine Vigor", description: "Gain temp HP after turning." }
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or flight (2-4)",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "10000 gp",
                    items: [
                         { name: "Masterwork Full Plate", cost: "1,650 gp", description: "" },
                         { name: "Masterwork Spear", cost: "305 gp", description: "Enchanted to +1 Holy by class features/spells." },
                         { name: "Heavy Steel Shield", cost: "20 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "Shield of the Einherjar",
            class: "Crusader 3",
            hitDice: "15d8+75 (HD) + 3d10+15 (Crusader) = 175 hp",
            challengeRating: 18,
            armorClass: {
                total: 32,
                breakdown: "(+4 Dex, +8 natural, +8 full plate, +2 shield)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "Gains more maneuvers and stances, improving tactical flexibility.",
                "Her divine fervor begins to manifest, making her tougher and more resilient."
            ],
            sheet: {
                baseAtk: 18,
                grapple: 26,
                fullAttack: [
                    { name: "+2 Holy Spear", bonus: "+26/+21/+16", damage: "1d8+10 plus 2d6 vs evil", crit: "x3", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Can ready 5 maneuvers." }
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic and cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "25" },
                ],
                saves: {
                    fort: { bonus: 17, breakdown: "+9 HD, +5 Con, +3 Crusader" },
                    ref: { bonus: 14, breakdown: "+9 HD, +4 Dex, +1 Crusader" },
                    will: { bonus: 15, breakdown: "+9 HD, +3 Wis, +3 Crusader" },
                },
                abilities: { str: 27, dex: 19, con: 20, int: 16, wis: 17, cha: 22 },
                skills: [
                    { name: "Diplomacy", bonus: 28, breakdown: "20 ranks" },
                    { name: "Handle Animal", bonus: 28, breakdown: "20 ranks" },
                    { name: "Ride", bonus: 26, breakdown: "20 ranks" },
                ],
                feats: [
                    { name: "Mounted Combat", description: "" }, { name: "Ride-By Attack", description: "" }, { name: "Spirited Charge", description: "" },
                    { name: "Power Attack", description: "" }, { name: "Divine Vigor", description: "" }, { name: "Shield Wall", description: ""},
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or flight (2-4)",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "30000 gp",
                    items: [
                         { name: "+1 Full Plate", cost: "2650 gp", description: "" },
                         { name: "+2 Holy Spear", cost: "18305 gp", description: "" },
                         { name: "+1 Heavy Steel Shield", cost: "1170 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "War-Maiden",
            class: "Crusader 5",
            hitDice: "15d8+75 (HD) + 5d10+25 (Crusader) = 195 hp",
            challengeRating: 20,
            armorClass: {
                total: 35,
                breakdown: "(+4 Dex, +8 natural, +10 +2 full plate, +3 shield)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "Gains access to Steely Resolve, allowing her to delay taking damage.",
                "Her martial and divine powers are blending into a seamless, deadly fighting style."
            ],
            sheet: {
                baseAtk: 20,
                grapple: 28,
                fullAttack: [
                    { name: "+2 Holy Spear", bonus: "+28/+23/+18/+13", damage: "1d8+10 plus 2d6 vs evil", crit: "x3", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Can ready 6 maneuvers." }
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic and cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "25" },
                ],
                saves: {
                    fort: { bonus: 18, breakdown: "+9 HD, +5 Con, +4 Crusader" },
                    ref: { bonus: 14, breakdown: "+9 HD, +4 Dex, +1 Crusader" },
                    will: { bonus: 16, breakdown: "+9 HD, +3 Wis, +4 Crusader" },
                },
                abilities: { str: 27, dex: 19, con: 20, int: 16, wis: 17, cha: 22 },
                skills: [
                    { name: "Diplomacy", bonus: 30, breakdown: "22 ranks" },
                    { name: "Handle Animal", bonus: 30, breakdown: "22 ranks" },
                    { name: "Ride", bonus: 28, breakdown: "22 ranks" },
                ],
                feats: [
                    { name: "Mounted Combat", description: "" }, { name: "Ride-By Attack", description: "" }, { name: "Spirited Charge", description: "" },
                    { name: "Power Attack", description: "" }, { name: "Divine Vigor", description: "" }, { name: "Shield Wall", description: ""},
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or flight (2-4)",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "80000 gp",
                    items: [
                         { name: "+2 Full Plate", cost: "5650 gp", description: "" },
                         { name: "Spear", cost: "18305 gp", description: "+2 Holy Spear" },
                         { name: "+2 Heavy Steel Shield", cost: "4170 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4000 gp", description: ""},
                         { name: "Cloak of Charisma +2", cost: "4000 gp", description: ""},
                    ]
                }
            }
        },
        {
            level: 10,
            title: "War-Maiden of the Host",
            class: "Crusader 10",
            hitDice: "15d8+90 (HD) + 10d10+60 (Crusader) = 280 hp",
            challengeRating: 25,
            armorClass: {
                total: 40,
                breakdown: "(+4 Dex, +8 natural, +12 +4 full plate, +5 shield, +1 deflection)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "Gains Mettle, allowing her to shrug off effects on successful Fortitude or Will saves.",
                "Access to higher-level maneuvers makes her a tactical powerhouse, capable of healing allies and smiting foes with divine fury.",
                "Her focus is on protecting her allies and leading the charge against overwhelming evil."
            ],
            sheet: {
                baseAtk: 25,
                grapple: 33,
                fullAttack: [
                    { name: "+3 Holy Spear", bonus: "+36/+31/+26/+21", damage: "1d8+12 plus 2d6 vs evil", crit: "x3", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Access to 5th-level maneuvers like 'Revitalizing Strike'." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic and cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "25" },
                    { name: "Mettle", type: "Ex", description: "No effect on successful Fort/Will saves." }
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+9 HD, +6 Con, +9 Crusader" },
                    ref: { bonus: 16, breakdown: "+9 HD, +4 Dex, +3 Crusader" },
                    will: { bonus: 18, breakdown: "+9 HD, +3 Wis, +6 Crusader" },
                },
                abilities: { str: 27, dex: 19, con: 22, int: 16, wis: 17, cha: 22 },
                skills: [
                    { name: "Diplomacy", bonus: 32, breakdown: "26 ranks" },
                    { name: "Handle Animal", bonus: 32, breakdown: "26 ranks" },
                    { name: "Ride", bonus: 30, breakdown: "26 ranks" },
                ],
                feats: [
                    { name: "Mounted Combat", description: "" }, { name: "Ride-By Attack", description: "" }, { name: "Spirited Charge", description: "" }, { name: "Power Attack", description: "" }, { name: "Divine Vigor", description: "" },
                    { name: "Shield Wall", description: "Grant shield bonus to adjacent allies." }, { name: "Divine Shield", description: "Expend turn attempt to add Cha bonus to shield AC." }
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or flight (2-4)",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "+4 Full Plate", cost: "17,650 gp", description: "" },
                         { name: "+3 Holy Spear", cost: "32,305 gp", description: "" },
                         { name: "+3 Heavy Steel Shield", cost: "9,170 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Ring of Protection +1", cost: "2,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Vanguard of the Gods",
            class: "Crusader 10 / Pious Templar 10",
            hitDice: "15d8+120 (HD) + 20d10+160 (Classes) = 465 hp",
            challengeRating: 35,
            armorClass: {
                total: 50,
                breakdown: "(+4 Dex, +10 natural, +14 +5 full plate, +9 shield, +5 deflection)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "Pious Templar adds full BAB and powerful divine abilities, making her a true holy warrior.",
                "She can now smite evil, channel divine spell power, and her presence is anathema to fiends.",
                "She is no longer just a chooser of the slain, but a divine general leading the charge."
            ],
            sheet: {
                baseAtk: 35,
                grapple: 43,
                fullAttack: [
                    { name: "+5 Holy Axiomatic Spear", bonus: "+48/+43/+38/+33", damage: "1d8+14 plus 2d6 vs evil, 2d6 vs chaos", crit: "x3", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Smite Evil", type: "Su", description: "3/day, add Cha bonus to attack, level to damage." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/magic, cold iron, and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "35" },
                ],
                saves: {
                    fort: { bonus: 32, breakdown: "+9 HD, +8 Con, +15 Class" },
                    ref: { bonus: 22, breakdown: "+9 HD, +4 Dex, +9 Class" },
                    will: { bonus: 26, breakdown: "+9 HD, +3 Wis, +14 Class" },
                },
                abilities: { str: 27, dex: 19, con: 26, int: 16, wis: 17, cha: 26 },
                skills: [
                    { name: "Diplomacy", bonus: 43, breakdown: "36 ranks" },
                    { name: "Handle Animal", bonus: 43, breakdown: "36 ranks" },
                    { name: "Ride", bonus: 41, breakdown: "36 ranks" },
                ],
                feats: [
                    { name: "Mounted Combat", description: "" }, { name: "Ride-By Attack", description: "" }, { name: "Spirited Charge", description: "" }, { name: "Power Attack", description: "" }, { name: "Divine Vigor", description: "" }, { name: "Shield Wall", description: "" }, { name: "Divine Shield", description: "" },
                    { name: "Epic Leadership", description: "" }, { name: "Armor Skin", description: "" }, { name: "Great Smiting", description: "" },
                    { name: "Epic Fortitude", description: "" },
                ],
                flaws: [],
                environment: "The celestial planes",
                organization: "Solitary, leading a celestial host",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "+5 Full Plate", cost: "26,650 gp", description: "" },
                         { name: "+5 Holy Axiomatic Spear", cost: "98,305 gp", description: "" },
                         { name: "+5 Heavy Steel Shield", cost: "25,170 gp", description: "" },
                         { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Soldier of Light",
            class: "Crusader 10 / Pious Templar 10 / Soldier of Light 10",
            hitDice: "15d8+150 (HD) + 30d10+300 (Classes) = 735 hp",
            challengeRating: 45,
            armorClass: {
                total: 65,
                breakdown: "(+4 Dex, +12 natural, +16 +7 full plate, +11 shield, +8 deflection, +14 sacred)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "The Soldier of Light prestige class from Librim Eternia elevates her to the highest echelon of celestial warriors.",
                "Her attacks are infused with pure positive energy, and her presence can consecrate battlefields, turning them into hallowed ground.",
                "She has defied her old role and now serves the cause of life itself, a beacon of hope against the endless night."
            ],
            sheet: {
                baseAtk: 45,
                grapple: 55,
                fullAttack: [
                    { name: "+7 Holy Axiomatic Spear", bonus: "+60/+55/+50/+45", damage: "1d8+18 plus 2d6 vs evil, 2d6 vs chaos, 2d6 holy", crit: "x3", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Consecrated Aura", type: "Su", description: "Ground within 60 ft. is treated as consecrated." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/epic and evil" },
                    { name: "Spell Resistance", type: "Ex", description: "45" },
                ],
                saves: {
                    fort: { bonus: 42, breakdown: "+9 HD, +10 Con, +23 Class" },
                    ref: { bonus: 32, breakdown: "+9 HD, +4 Dex, +19 Class" },
                    will: { bonus: 36, breakdown: "+9 HD, +3 Wis, +24 Class" },
                },
                abilities: { str: 31, dex: 19, con: 30, int: 16, wis: 17, cha: 30 },
                skills: [
                    { name: "Diplomacy", bonus: 55, breakdown: "46 ranks" },
                    { name: "Handle Animal", bonus: 55, breakdown: "46 ranks" },
                    { name: "Ride", bonus: 53, breakdown: "46 ranks" },
                ],
                feats: [
                    { name: "Mounted Combat", description: "" }, { name: "Ride-By Attack", description: "" }, { name: "Spirited Charge", description: "" }, { name: "Power Attack", description: "" }, { name: "Divine Vigor", description: "" }, { name: "Shield Wall", description: "" }, { name: "Divine Shield", description: "" }, { name: "Epic Leadership", description: "" }, { name: "Armor Skin", description: "" }, { name: "Great Smiting", description: "" }, { name: "Epic Fortitude", description: "" },
                    { name: "Great Strength", description: "" }, { name: "Epic Will", description: "" }, { name: "Positive Energy Burst", description: "" }
                ],
                flaws: [],
                environment: "The celestial planes",
                organization: "Unique",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "+7 Full Plate", cost: "50,650 gp", description: "" },
                         { name: "+7 Holy Axiomatic Spear", cost: "200,305 gp", description: "" },
                         { name: "+7 Heavy Steel Shield", cost: "49,170 gp", description: "" },
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "Goddess of the Final Charge",
            class: "Crusader 10 / Pious Templar 10 / Soldier of Light 10 / Epic Crusader 10",
            hitDice: "15d8+180 (HD) + 40d10+480 (Classes) = 1005 hp",
            challengeRating: 55,
            armorClass: {
                total: 80,
                breakdown: "(+4 Dex, +15 natural, +18 +9 full plate, +13 shield, +10 deflection, +20 sacred)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "She has achieved apotheosis, becoming a minor goddess of valor, sacrifice, and the hope for a better dawn.",
                "She no longer serves the gods; she is their peer. Her legend inspires entire generations of heroes.",
                "Her final charge is not into death, but into legend itself, an eternal ride against the darkness."
            ],
            sheet: {
                baseAtk: 55,
                grapple: 67,
                fullAttack: [
                    { name: "Gungnir, a +9 Holy Axiomatic Spear", bonus: "+74/+69/+64/+59", damage: "1d8+24 plus 4d6 vs evil, 4d6 vs chaos, 4d6 holy", crit: "x3", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "The Final Ride", type: "Su", description: "1/day, can lead a charge that is so inspiring it can shatter the gates of Hell and temporarily grant all allies within a mile the abilities of a celestial."}
                ],
                specialQualities: [
                    { name: "Hope Incarnate", type: "Ex", description: "Cannot be killed as long as heroes fight in her name. If struck down, she will rise again in the next dawn." },
                ],
                saves: {
                    fort: { bonus: 54, breakdown: "+9 HD, +12 Con, +33 Class" },
                    ref: { bonus: 42, breakdown: "+9 HD, +4 Dex, +29 Class" },
                    will: { bonus: 46, breakdown: "+9 HD, +3 Wis, +34 Class" },
                },
                abilities: { str: 35, dex: 19, con: 34, int: 16, wis: 17, cha: 34 },
                skills: [
                    { name: "Diplomacy", bonus: 69, breakdown: "56 ranks" },
                    { name: "Handle Animal", bonus: 69, breakdown: "56 ranks" },
                    { name: "Ride", bonus: 67, breakdown: "56 ranks" },
                ],
                feats: [
                    { name: "Mounted Combat", description: "" }, { name: "Ride-By Attack", description: "" }, { name: "Spirited Charge", description: "" }, { name: "Power Attack", description: "" }, { name: "Divine Vigor", description: "" }, { name: "Shield Wall", description: "" }, { name: "Divine Shield", description: "" }, { name: "Epic Leadership", description: "" }, { name: "Armor Skin", description: "" }, { name: "Great Smiting", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Great Strength", description: "" }, { name: "Epic Will", description: "" }, { name: "Positive Energy Burst", description: "" },
                    { name: "Great Charisma", description: "" }, { name: "Perfect Health", description: "" }, { name: "Epic Reputation", description: "" }
                ],
                flaws: [],
                environment: "Valhalla",
                organization: "Unique",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "Armor of the Einherjar", cost: "Artifact", description: "+9 Full Plate that makes the wearer and her mount ethereal." },
                         { name: "Svalinn", cost: "Artifact", description: "A +9 Living Steel Shield that absorbs all damage from one attack per round." },
                         { name: "Gungnir", cost: "Artifact", description: "A +9 Holy Axiomatic Spear that never misses its target." },
                         { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};