// data/monsters/adityanAgathion.ts
import { Monster } from '../../types';

export const adityanAgathion: Monster = {
    name: "Adityan Agathion, Warblade Scourge",
    description: "Adityans are powerful leonine celestials from Nirvana, embodying the virtues of honor, courage, and righteous fury. They are the divine scourges sent against fiends and the irredeemably evil.",
    roleplayGuide: [
        "You are a force of righteous anger. Your every action is dedicated to the destruction of evil.",
        "Speak with the roar of a lion. Your voice should boom with authority and divine power.",
        "You are honorable, but not foolish. You will use tactics and your martial knowledge to defeat your foes.",
        "Protect the innocent at all costs. You are a shield for the weak and a sword against the wicked."
    ],
    builds: [
        {
            level: 1,
            title: "Fist of Nirvana",
            class: "Warblade 1",
            hitDice: "12d8+48 (HD) + 1d12+4 (Warblade) = 115 hp",
            challengeRating: 16,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +5 Dex, +14 natural)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "Base creature is an Adityan Agathion (12 Outsider HD).",
                "Warblade level adds martial maneuvers, turning the Adityan into a master of combat.",
                "The build focuses on mobility and precise strikes, using its maneuvers to control the battlefield.",
                "Its Lay on Hands and spell-like abilities provide excellent utility and support."
            ],
            sheet: {
                baseAtk: 13,
                grapple: 25,
                fullAttack: [
                    { name: "Masterwork Holy Greatsword", bonus: "+20/+15/+10", damage: "3d6+12 plus 2d6 vs evil", crit: "19-20/x2", type: "Melee" },
                    { name: "Bite", bonus: "+18", damage: "1d8+4", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Pounce", type: "Ex", description: "Can make a full attack on a charge." },
                    { name: "Lay on Hands", type: "Su", description: "Can heal 60 hit points per day." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Gains maneuvers from Diamond Mind, Iron Heart, and Tiger Claw disciplines." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/evil" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Protective Aura", type: "Su", description: "As a magic circle against evil and a lesser globe of invulnerability." },
                ],
                saves: {
                    fort: { bonus: 14, breakdown: "+8 HD, +4 Con, +2 Warblade" },
                    ref: { bonus: 13, breakdown: "+8 HD, +5 Dex" },
                    will: { bonus: 10, breakdown: "+8 HD, +2 Wis" },
                },
                abilities: { str: 27, dex: 21, con: 19, int: 16, wis: 14, cha: 16 },
                skills: [
                    { name: "Balance", bonus: 24, breakdown: "19 ranks, +5 Dex" },
                    { name: "Intimidate", bonus: 22, breakdown: "19 ranks, +3 Cha" },
                    { name: "Jump", bonus: 27, breakdown: "19 ranks, +8 Str" },
                    { name: "Listen", bonus: 20, breakdown: "18 ranks, +2 Wis" },
                    { name: "Sense Motive", bonus: 20, breakdown: "18 ranks, +2 Wis" },
                    { name: "Spot", bonus: 20, breakdown: "18 ranks, +2 Wis" },
                    { name: "Tumble", bonus: 24, breakdown: "19 ranks, +5 Dex" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Improved Sunder", description: "No AoO for sundering, +4 bonus." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 attack with greatsword." },
                ],
                flaws: [],
                environment: "Nirvana",
                organization: "Solitary",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         { name: "Masterwork Greatsword", cost: "350 gp", description: "Will be enchanted to Holy." },
                         { name: "Amulet of Natural Armor +1", cost: "2,000 gp", description: "" },
                         { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "The Sun-Render",
            class: "Warblade 5",
            hitDice: "12d8+60 (HD) + 5d12+25 (Warblade) = 155 hp",
            challengeRating: 16,
            armorClass: {
                total: 30,
                breakdown: "(-1 size, +5 Dex, +14 natural, +2 armor)",
            },
            initiative: {
                bonus: 9,
                breakdown: "(+5 Dex, +4 Improved Initiative)",
            },
             buildNotes: [
                "Gains Battle Clarity, adding its high Int bonus to Reflex saves.",
                "Access to higher-level maneuvers allows for devastating attacks and superior defense.",
                "Improved Initiative makes it a much faster threat on the battlefield."
            ],
            sheet: {
                baseAtk: 17,
                grapple: 29,
                fullAttack: [
                    { name: "+2 Holy Greatsword", bonus: "+26/+21/+16/+11", damage: "3d6+13 plus 2d6 vs evil", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                 specialAttacks: [
                    { name: "Pounce", type: "Ex", description: "Can make a full attack on a charge." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Access to 3rd-level maneuvers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/evil" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 18, breakdown: "+8 HD, +5 Con, +5 Warblade" },
                    ref: { bonus: 18, breakdown: "+8 HD, +5 Dex, +2 Warblade, +3 Int" },
                    will: { bonus: 11, breakdown: "+8 HD, +2 Wis, +1 Warblade" },
                },
                abilities: { str: 27, dex: 21, con: 20, int: 16, wis: 14, cha: 16 },
                skills: [
                    { name: "Balance", bonus: 28, breakdown: "23 ranks, +5 Dex" },
                    { name: "Intimidate", bonus: 26, breakdown: "23 ranks, +3 Cha" },
                    { name: "Jump", bonus: 31, breakdown: "23 ranks, +8 Str" },
                    { name: "Listen", bonus: 24, breakdown: "22 ranks, +2 Wis" },
                    { name: "Sense Motive", bonus: 24, breakdown: "22 ranks, +2 Wis" },
                    { name: "Spot", bonus: 24, breakdown: "22 ranks, +2 Wis" },
                    { name: "Tumble", bonus: 28, breakdown: "23 ranks, +5 Dex" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Improved Sunder", description: "No AoO for sundering, +4 bonus." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 attack with greatsword." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                ],
                 flaws: [],
                environment: "Nirvana",
                organization: "Solitary",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "49,000 gp",
                    items: [
                         { name: "+2 Holy Greatsword", cost: "18,350 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Bracers of Armor +2", cost: "4,000 gp", description: "" },
                         { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Scourge of the Unrighteous",
            class: "Warblade 10",
            hitDice: "12d8+72 (HD) + 10d12+60 (Warblade) = 202 hp",
            challengeRating: 17,
            armorClass: {
                total: 33,
                breakdown: "(-1 size, +5 Dex, +14 natural, +4 armor)",
            },
            initiative: {
                bonus: 9,
                breakdown: "(+5 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "With access to 5th-level maneuvers like 'Iron Heart Surge', it can shrug off debilitating effects.",
                "Stormguard Warrior feat chain turns it into a master of battlefield control, punishing enemies for attacking it or its allies.",
                "Top-tier equipment enhances its already formidable combat abilities."
            ],
            sheet: {
                baseAtk: 22,
                grapple: 34,
                fullAttack: [
                    { name: "+3 Holy Greatsword", bonus: "+32/+27/+22/+17", damage: "3d6+14 plus 2d6 vs evil", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                 specialAttacks: [
                    { name: "Pounce", type: "Ex", description: "Can make a full attack on a charge." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Access to 5th-level maneuvers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/evil" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 22, breakdown: "+8 HD, +6 Con, +8 Warblade" },
                    ref: { bonus: 20, breakdown: "+8 HD, +5 Dex, +4 Warblade, +3 Int" },
                    will: { bonus: 14, breakdown: "+8 HD, +2 Wis, +4 Warblade" },
                },
                abilities: { str: 27, dex: 21, con: 22, int: 16, wis: 14, cha: 16 },
                skills: [
                    { name: "Balance", bonus: 33, breakdown: "28 ranks, +5 Dex" },
                    { name: "Intimidate", bonus: 31, breakdown: "28 ranks, +3 Cha" },
                    { name: "Jump", bonus: 36, breakdown: "28 ranks, +8 Str" },
                    { name: "Listen", bonus: 29, breakdown: "27 ranks, +2 Wis" },
                    { name: "Sense Motive", bonus: 29, breakdown: "27 ranks, +2 Wis" },
                    { name: "Spot", bonus: 29, breakdown: "27 ranks, +2 Wis" },
                    { name: "Tumble", bonus: 33, breakdown: "28 ranks, +5 Dex" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Improved Sunder", description: "No AoO for sundering, +4 bonus." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 attack with greatsword." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Combat Expertise", description: "Trade attack bonus for AC (prereq)." },
                    { name: "Stormguard Warrior", description: "Gain +4 AC or +4 damage when giving up attacks." },
                ],
                 flaws: [],
                environment: "Nirvana",
                organization: "Solitary",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "+3 Holy Greatsword", cost: "32,350 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Bracers of Armor +4", cost: "16,000 gp", description: "" },
                         { name: "Ring of Protection +2", cost: "8,000 gp", description: "" },
                         { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Lion of the Heavens",
            class: "Warblade 20",
            hitDice: "12d8+84 (HD) + 20d12+140 (Warblade) = 422 hp",
            challengeRating: 21,
            armorClass: {
                total: 45,
                breakdown: "(-1 size, +5 Dex, +16 natural, +8 armor, +5 deflection, +5 insight)",
            },
            initiative: {
                bonus: 9,
                breakdown: "(+5 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "With 9th-level maneuvers and Stance Mastery, it is a peerless duelist.",
                "Its righteous fury can sunder the weapons of demon lords and the gates of the Hells.",
                "It leads celestial armies, a golden-maned comet of righteous destruction."
            ],
            sheet: {
                baseAtk: 32,
                grapple: 48,
                fullAttack: [
                    { name: "+5 Holy Greatsword", bonus: "+45/+40/+35/+30", damage: "3d6+18 plus 2d6 vs evil", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                 specialAttacks: [],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/evil and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "31" },
                ],
                saves: {
                    fort: { bonus: 28, breakdown: "+8 HD, +8 Con, +12 Warblade" },
                    ref: { bonus: 26, breakdown: "+8 HD, +5 Dex, +10 Warblade, +3 Int" },
                    will: { bonus: 18, breakdown: "+8 HD, +2 Wis, +8 Warblade" },
                },
                abilities: { str: 32, dex: 21, con: 24, int: 16, wis: 14, cha: 16 },
                skills: [
                    { name: "Balance", bonus: 40, breakdown: "35 ranks, +5 Dex" },
                    { name: "Intimidate", bonus: 38, breakdown: "35 ranks, +3 Cha" },
                    { name: "Jump", bonus: 46, breakdown: "35 ranks, +11 Str" },
                    { name: "Listen", bonus: 36, breakdown: "34 ranks, +2 Wis" },
                    { name: "Sense Motive", bonus: 36, breakdown: "34 ranks, +2 Wis" },
                    { name: "Spot", bonus: 36, breakdown: "34 ranks, +2 Wis" },
                    { name: "Tumble", bonus: 40, breakdown: "35 ranks, +5 Dex" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Improved Sunder", description: "No AoO for sundering, +4 bonus." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 attack with greatsword." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Combat Expertise", description: "Trade attack bonus for AC (prereq)." },
                    { name: "Stormguard Warrior", description: "Gain +4 AC or +4 damage when giving up attacks." },
                    { name: "Robilar's Gambit", description: "Make AoOs against foes who attack you, but grant them an attack bonus." },
                    { name: "Epic Weapon Focus (Greatsword)", description: "Epic Feat. +2 to attack with greatsword." },
                    { name: "Armor Skin", description: "Epic Feat. +1 Natural Armor." },
                    { name: "Epic Prowess", description: "Epic Feat. +1 to all attack rolls." },
                    { name: "Overwhelming Critical (Greatsword)", description: "Epic Feat. +1d6 crit damage." },
                ],
                 flaws: [],
                environment: "Nirvana",
                organization: "Solitary or leading celestial hosts",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "+5 Holy Greatsword", cost: "98,350 gp", description: "" },
                         { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                         { name: "Bracers of Armor +8", cost: "64,000 gp", description: "" },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                         { name: "Belt of Giant Strength +6", cost: "36,000 gp", description: "" },
                         { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                         { name: "Tome of Strength +3", cost: "82,500 gp", description: "+3 inherent bonus to Strength." },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Celestial Paragon",
            class: "Warblade 20 / Celestial Paragon 10",
            hitDice: "12d8+120 (HD) + 20d12+200 (Warblade) + 10d8+100 (CP) = 744 hp",
            challengeRating: 27,
            armorClass: {
                total: 60,
                breakdown: "(-1 size, +5 Dex, +20 natural, +10 armor, +8 deflection, +8 insight)",
            },
            initiative: {
                bonus: 9,
                breakdown: "(+5 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The Celestial Paragon prestige class from Librim Eternia elevates its divine nature to near-godhood.",
                "It gains powerful auras, enhanced damage reduction that is bypassed only by epic evil, and the ability to smite foes with pure, holy light.",
                "It is a true champion of the upper planes, a living beacon of hope and a symbol of righteous fury."
            ],
            sheet: {
                baseAtk: 42,
                grapple: 60,
                fullAttack: [
                    { name: "+8 Holy Greatsword", bonus: "+60/+55/+50/+45", damage: "3d6+25 plus 4d6 vs evil", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                 specialAttacks: [
                    { name: "Smite Evil", type: "Su", description: "5/day, add Charisma bonus to attack and class level to damage." },
                    { name: "Aura of Sanctity", type: "Su", description: "30-ft aura provides allies with +4 sacred bonus to AC and saves." }
                 ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/epic and evil" },
                    { name: "Spell Resistance", type: "Ex", description: "37" },
                ],
                saves: {
                    fort: { bonus: 40, breakdown: "+8 HD, +10 Con, +12 Warblade, +10 CP" },
                    ref: { bonus: 36, breakdown: "+8 HD, +5 Dex, +10 Warblade, +10 CP, +3 Int" },
                    will: { bonus: 30, breakdown: "+8 HD, +2 Wis, +8 Warblade, +10 CP" },
                },
                abilities: { str: 36, dex: 21, con: 28, int: 16, wis: 14, cha: 20 },
                skills: [
                    { name: "Balance", bonus: 47, breakdown: "42 ranks, +5 Dex" },
                    { name: "Intimidate", bonus: 47, breakdown: "42 ranks, +5 Cha" },
                    { name: "Jump", bonus: 55, breakdown: "42 ranks, +13 Str" },
                    { name: "Tumble", bonus: 47, breakdown: "42 ranks, +5 Dex" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Weapon Focus (Greatsword)", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Combat Expertise", description: "" }, { name: "Stormguard Warrior", description: "" }, { name: "Robilar's Gambit", description: "" }, { name: "Epic Weapon Focus (Greatsword)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Overwhelming Critical (Greatsword)", description: "" },
                    { name: "Great Strength", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Great Smiting", description: "" }
                ],
                 flaws: [],
                environment: "Nirvana",
                organization: "Solitary",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                         { name: "Tome of Strength +5", cost: "137,500 gp", description: "" },
                         { name: "+8 Holy Greatsword", cost: "128,350 gp", description: ""},
                         { name: "+8 Full Plate", cost: "65,650 gp", description: ""}
                    ]
                }
            }
        },
        {
            level: 40,
            title: "God-King of Nirvana",
            class: "Warblade 20 / Celestial Paragon 10 / Epic Warblade 10",
            hitDice: "12d8+144 (HD) + 30d12+360 (Warblade) + 10d8+120 (CP) = 1100 hp",
            challengeRating: 35,
            armorClass: {
                total: 75,
                breakdown: "(-1 size, +5 Dex, +23 natural, +12 armor, +10 deflection, +11 insight, +15 sacred)",
            },
            initiative: {
                bonus: 9,
                breakdown: "(+5 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "It has achieved apotheosis, becoming a true demigod of righteous battle.",
                "It is a king of the celestial planes, its roars of challenge echoing across the heavens.",
                "Its final purpose is to lead the final charge against the Abyss, a golden meteor of fury to end the Blood War."
            ],
            sheet: {
                baseAtk: 52,
                grapple: 70,
                fullAttack: [
                    { name: "+10 Holy Greatsword", bonus: "+75/+70/+65/+60", damage: "3d6+30 plus 4d6 vs evil", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                 specialAttacks: [
                    { name: "The Final Charge", type: "Su", description: "1/day, can lead a charge that grants all allies within 1 mile the benefits of the 'Celestial' template for 1 hour."}
                 ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "25/epic and evil" },
                    { name: "Divine Rank 1", type: "Ex", description: "Is a quasi-deity."}
                ],
                saves: {
                    fort: { bonus: 52, breakdown: "+8 HD, +12 Con, +20 Warblade, +12 CP" },
                    ref: { bonus: 48, breakdown: "+8 HD, +5 Dex, +18 Warblade, +12 CP, +5 Int" },
                    will: { bonus: 42, breakdown: "+8 HD, +2 Wis, +18 Warblade, +12 CP" },
                },
                abilities: { str: 40, dex: 21, con: 32, int: 20, wis: 14, cha: 24 },
                skills: [
                    { name: "Balance", bonus: 57, breakdown: "52 ranks" },
                    { name: "Intimidate", bonus: 59, breakdown: "52 ranks" },
                    { name: "Jump", bonus: 67, breakdown: "52 ranks" },
                    { name: "Tumble", bonus: 57, breakdown: "52 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Weapon Focus (Greatsword)", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Combat Expertise", description: "" }, { name: "Stormguard Warrior", description: "" }, { name: "Robilar's Gambit", description: "" }, { name: "Epic Weapon Focus (Greatsword)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Overwhelming Critical (Greatsword)", description: "" }, { name: "Great Strength", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Great Smiting", description: "" },
                    { name: "Perfect Health", description: ""}, { name: "Epic Toughness", description: ""}, { name: "Epic Will", description: ""}
                ],
                 flaws: [],
                environment: "Nirvana",
                organization: "Unique",
                alignment: "Neutral Good",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Sunstone of Invictus", cost: "Artifact", description: "" },
                         { name: "Greaves of the Solar Charge", cost: "Artifact", description: "" },
                         { name: "Shield of the Dawnflower", cost: "Artifact", description: "" },
                         { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};