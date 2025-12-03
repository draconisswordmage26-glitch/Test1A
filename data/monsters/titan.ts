// data/monsters/titan.ts
import { Monster } from '../../types';

export const titan: Monster = {
    name: "Titan, The Unchained",
    description: "Titans are the primordial offspring of the gods, beings of immense power and size who were overthrown in ancient wars. They are paragons of physical might, often possessing mastery over a single element or concept.",
    roleplayGuide: [
        "You are a being of immense, ancient pride. You were once a prince of the cosmos, and you have never forgotten it. The humiliation of your defeat and imprisonment fuels a deep, simmering rage.",
        "You are not inherently evil, but your rage against the gods who betrayed you is all-consuming. You see their mortal followers as insects, collateral damage in your quest for vengeance.",
        "Your goal is freedom and retribution. You wish to shatter the chains that bind you and reclaim your rightful place in the heavens, even if you have to tear down the pantheon to do it.",
        "You might respect a mortal who shows immense strength and an indomitable will. An alliance is possible if they can aid your quest for freedom, but you will never see them as an equal."
    ],
    builds: [
        {
            level: 1,
            title: "Rumbling Prisoner",
            class: "Barbarian 1",
            hitDice: "17d8+119 (HD) + 1d12+7 (Barbarian) = 222 hp",
            challengeRating: 18,
            armorClass: {
                total: 28,
                breakdown: "(-2 size, +2 Dex, +18 natural)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "The Titan is a CR 21 creature with 20 HD. To scale it to CR 17, its HD is reduced to 17.",
                "Barbarian class is a natural fit for its primordial rage.",
                "Its spell-like abilities and immense strength make it a terrifying opponent."
            ],
            sheet: {
                baseAtk: 18,
                grapple: 40,
                fullAttack: [
                    { name: "Gargantuan +1 Warhammer", bonus: "+36/+31/+26/+21", damage: "4d6+19", crit: "x3", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Rage", type: "Ex", description: "1/day, +4 Str, +4 Con, -2 AC." },
                    { name: "Spell-Like Abilities", type: "Sp", description: "At will—chain lightning, charm monster, cure critical wounds, fire storm, invisibility, levitate, persistent image." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/lawful" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 21, breakdown: "+10 HD, +9 Con, +2 Barb" },
                    ref: { bonus: 12, breakdown: "+10 HD, +2 Dex" },
                    will: { bonus: 15, breakdown: "+10 HD, +5 Wis" },
                },
                abilities: { str: 39, dex: 15, con: 29, int: 18, wis: 20, cha: 24 },
                skills: [
                    { name: "Climb", bonus: 35, breakdown: "21 ranks" },
                    { name: "Intimidate", bonus: 30, breakdown: "21 ranks" },
                    { name: "Jump", bonus: 35, breakdown: "21 ranks" },
                    { name: "Sense Motive", bonus: 28, breakdown: "21 ranks" },
                ],
                feats: [
                    { name: "Awesome Blow", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" },
                    { name: "Improved Bull Rush", description: "" }, { name: "Power Attack", description: "" }, { name: "Improved Sunder", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or pair",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         { name: "Gargantuan +1 Warhammer", cost: "8,330 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "Escaped Primordial",
            class: "Barbarian 3",
            hitDice: "17d8+136 (HD) + 3d12+21 (Barbarian) = 256 hp",
            challengeRating: 20,
            armorClass: {
                total: 28,
                breakdown: "(-2 size, +2 Dex, +18 natural)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "More rage per day and Uncanny Dodge make it a more persistent threat.",
                "Its physical power continues to grow, becoming a significant force on the battlefield."
            ],
            sheet: {
                baseAtk: 20,
                grapple: 42,
                fullAttack: [
                    { name: "Gargantuan +2 Warhammer", bonus: "+38/+33/+28/+23", damage: "4d6+20", crit: "x3", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Rage", type: "Ex", description: "1/day, +4 Str, +4 Con, -2 AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/lawful" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Uncanny Dodge", type: "Ex", description: "Cannot be caught flat-footed."}
                ],
                saves: {
                    fort: { bonus: 22, breakdown: "+10 HD, +9 Con, +3 Barb" },
                    ref: { bonus: 13, breakdown: "+10 HD, +2 Dex, +1 Barb" },
                    will: { bonus: 16, breakdown: "+10 HD, +5 Wis, +1 Barb" },
                },
                abilities: { str: 41, dex: 15, con: 29, int: 18, wis: 20, cha: 24 },
                skills: [
                    { name: "Intimidate", bonus: 32, breakdown: "23 ranks" },
                    { name: "Jump", bonus: 37, breakdown: "23 ranks" },
                ],
                feats: [
                    { name: "Awesome Blow", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" },
                    { name: "Improved Bull Rush", description: "" }, { name: "Power Attack", description: "" }, { name: "Improved Sunder", description: "" },
                    { name: "Intimidating Rage", description: ""},
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or pair",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "40,000 gp",
                    items: [
                         { name: "Gargantuan +2 Warhammer", cost: "18,330 gp", description: "" },
                         { name: "Belt of Giant Strength +2", cost: "4000 gp", description: ""}
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Mountain-Breaker",
            class: "Barbarian 5",
            hitDice: "17d8+136 (HD) + 5d12+35 (Barbarian) = 280 hp",
            challengeRating: 22,
            armorClass: {
                total: 30,
                breakdown: "(-2 size, +2 Dex, +18 natural, +2 armor)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "Improved Uncanny Dodge makes it impossible to flank.",
                "Its rage becomes a more frequent and reliable tool of destruction."
            ],
            sheet: {
                baseAtk: 22,
                grapple: 44,
                fullAttack: [
                    { name: "Gargantuan +2 Warhammer", bonus: "+40/+35/+30/+25", damage: "4d6+20", crit: "x3", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Rage", type: "Ex", description: "2/day, +4 Str, +4 Con, -2 AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/lawful, DR 1/-" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Improved Uncanny Dodge", type: "Ex", description: "Cannot be flanked."}
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+10 HD, +10 Con, +4 Barb" },
                    ref: { bonus: 14, breakdown: "+10 HD, +2 Dex, +2 Barb" },
                    will: { bonus: 17, breakdown: "+10 HD, +5 Wis, +2 Barb" },
                },
                abilities: { str: 41, dex: 15, con: 31, int: 18, wis: 20, cha: 24 },
                skills: [
                    { name: "Intimidate", bonus: 34, breakdown: "25 ranks" },
                    { name: "Jump", bonus: 39, breakdown: "25 ranks" },
                ],
                feats: [
                    { name: "Awesome Blow", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" },
                    { name: "Improved Bull Rush", description: "" }, { name: "Power Attack", description: "" }, { name: "Improved Sunder", description: "" },
                    { name: "Intimidating Rage", description: ""},
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or pair",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "90,000 gp",
                    items: [
                         { name: "Gargantuan +2 Warhammer", cost: "18,330 gp", description: "" },
                         { name: "Belt of Giant Strength +4", cost: "16000 gp", description: ""},
                         { name: "Amulet of Health +2", cost: "4000 gp", description: ""},
                         { name: "Bracers of Armor +2", cost: "4000 gp", description: ""}
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Chain-Breaker",
            class: "Barbarian 5 / Frenzied Berserker 5",
            hitDice: "17d8+153 (HD) + 10d12+90 (Classes) = 410 hp",
            challengeRating: 27,
            armorClass: {
                total: 35,
                breakdown: "(-2 size, +2 Dex, +18 natural, +7 armor)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "Frenzied Berserker prestige class turns its rage into an unstoppable frenzy.",
                "While frenzied, it is immune to fear and cannot be stopped from attacking until all foes are dead.",
                "This build represents the Titan breaking its first chains and tasting freedom."
            ],
            sheet: {
                baseAtk: 27,
                grapple: 49,
                fullAttack: [
                    { name: "Gargantuan +3 Warhammer", bonus: "+49/+44/+39/+34", damage: "4d6+25", crit: "x3", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Frenzy", type: "Ex", description: "2/day, +6 Str, single-minded focus on combat." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/lawful" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 30, breakdown: "+10 HD, +11 Con, +9 Class" },
                    ref: { bonus: 15, breakdown: "+10 HD, +2 Dex, +3 Class" },
                    will: { bonus: 18, breakdown: "+10 HD, +5 Wis, +3 Class" },
                },
                abilities: { str: 43, dex: 15, con: 33, int: 18, wis: 20, cha: 24 },
                skills: [
                    { name: "Intimidate", bonus: 38, breakdown: "29 ranks" },
                    { name: "Jump", bonus: 47, breakdown: "29 ranks" },
                ],
                feats: [
                    { name: "Awesome Blow", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Power Attack", description: "" }, { name: "Improved Sunder", description: "" },
                    { name: "Destructive Rage", description: "Add Str bonus to Sunder attempts." }, { name: "Intimidating Rage", description: "" }
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Gargantuan +3 Warhammer", cost: "32,330 gp", description: "" },
                         { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Bracers of Armor +7", cost: "49,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "God-Slayer",
            class: "Barbarian 5 / Frenzied Berserker 10 / Fighter 5",
            hitDice: "17d8+187 (HD) + 20d12+220 (Classes) = 635 hp",
            challengeRating: 37,
            armorClass: {
                total: 45,
                breakdown: "(-2 size, +2 Dex, +20 natural, +10 armor, +5 deflection)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "Supreme Frenzy makes it a truly terrifying engine of destruction.",
                "Fighter levels provide a host of bonus feats, perfecting its weapon mastery.",
                "It now actively hunts the gods who imprisoned it, its name a curse on divine lips."
            ],
            sheet: {
                baseAtk: 37,
                grapple: 61,
                fullAttack: [
                    { name: "Gargantuan +5 Warhammer", bonus: "+62/+57/+52/+47", damage: "4d6+31", crit: "19-20/x3", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Supreme Frenzy", type: "Ex", description: "Frenzy grants +8 Str." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/lawful and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "37" },
                ],
                saves: {
                    fort: { bonus: 40, breakdown: "+10 HD, +13 Con, +17 Class" },
                    ref: { bonus: 21, breakdown: "+10 HD, +2 Dex, +9 Class" },
                    will: { bonus: 24, breakdown: "+10 HD, +5 Wis, +9 Class" },
                },
                abilities: { str: 47, dex: 15, con: 37, int: 18, wis: 20, cha: 24 },
                skills: [
                    { name: "Intimidate", bonus: 48, breakdown: "39 ranks" },
                    { name: "Jump", bonus: 59, breakdown: "39 ranks" },
                ],
                feats: [
                    { name: "Awesome Blow", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Power Attack", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Destructive Rage", description: "" }, { name: "Intimidating Rage", description: "" },
                    { name: "Epic Weapon Focus (Warhammer)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" },
                    { name: "Overwhelming Critical (Warhammer)", description: "" }, { name: "Improved Critical (Warhammer)", description: "" },
                ],
                flaws: [],
                environment: "The Outer Planes",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Gargantuan +5 Warhammer", cost: "50,330 gp", description: "" },
                         { name: "Belt of Giant Strength +6", cost: "36,000 gp", description: "" },
                         { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                         { name: "Bracers of Armor +8", cost: "64,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "World-Smasher",
            class: "Barbarian 5 / Frenzied Berserker 10 / Fighter 5 / World-Smasher 10",
            hitDice: "17d8+221 (HD) + 30d12+390 (Classes) = 870 hp",
            challengeRating: 47,
            armorClass: {
                total: 60,
                breakdown: "(-2 size, +2 Dex, +23 natural, +12 armor, +10 deflection, +5 insight)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "The World-Smasher epic prestige class from Librim Eternia makes its physical power legendary.",
                "Its blows can now create earthquakes, shatter mountains, and sunder artifacts with ease.",
                "It is no longer just a warrior; it is a walking cataclysm, a force of nature that can unmake the world."
            ],
            sheet: {
                baseAtk: 47,
                grapple: 73,
                fullAttack: [
                    { name: "Gargantuan +7 Warhammer", bonus: "+76/+71/+66/+61", damage: "4d6+37", crit: "19-20/x3", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Earthshaker", type: "Su", description: "When the Titan strikes the ground, it can create an earthquake in a 100-ft. radius." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "25/lawful and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "47" },
                ],
                saves: {
                    fort: { bonus: 52, breakdown: "+10 HD, +15 Con, +27 Class" },
                    ref: { bonus: 31, breakdown: "+10 HD, +2 Dex, +19 Class" },
                    will: { bonus: 34, breakdown: "+10 HD, +5 Wis, +19 Class" },
                },
                abilities: { str: 53, dex: 15, con: 41, int: 18, wis: 20, cha: 24 },
                skills: [
                    { name: "Intimidate", bonus: 58, breakdown: "49 ranks" },
                    { name: "Jump", bonus: 72, breakdown: "49 ranks" },
                ],
                feats: [
                    { name: "Awesome Blow", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Power Attack", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Destructive Rage", description: "" }, { name: "Intimidating Rage", description: "" }, { name: "Epic Weapon Focus (Warhammer)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Overwhelming Critical (Warhammer)", description: "" }, { name: "Improved Critical (Warhammer)", description: "" },
                    { name: "Great Strength", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Toughness", description: "" }
                ],
                flaws: [],
                environment: "The Outer Planes",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Gargantuan +7 Warhammer of Collision", cost: "200,330 gp", description: "" },
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "The Last Titan",
            class: "Barbarian 5 / Frenzied Berserker 10 / Fighter 5 / World-Smasher 10 / Epic Barbarian 10",
            hitDice: "17d8+255 (HD) + 40d12+600 (Classes) = 1200 hp",
            challengeRating: 57,
            armorClass: {
                total: 75,
                breakdown: "(-2 size, +2 Dex, +26 natural, +15 armor, +12 deflection, +12 insight, +10 sacred)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "The Titan has achieved its revenge, shattering the thrones of the gods and taking its place as a primal force of the multiverse.",
                "Its rage is now a creative and destructive force, the power that grinds mountains to dust and forges new stars from the debris.",
                "It is a lonely god, a relic of a bygone age, whose victory has brought it not peace, but an eternity of solitude."
            ],
            sheet: {
                baseAtk: 57,
                grapple: 85,
                fullAttack: [
                    { name: "The Earth-Shaker, a +9 Warhammer", bonus: "+88/+83/+78/+73", damage: "4d6+45", crit: "19-20/x3", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Star-Shattering Blow", type: "Su", description: "1/day, can make a single attack that, on a successful hit, deals 100d6 damage and sends the target flying into the nearest star (no save)."}
                ],
                specialQualities: [
                    { name: "Primal Essence", type: "Ex", description: "Immune to polymorph, petrification, and any effect that would alter its form." },
                ],
                saves: {
                    fort: { bonus: 64, breakdown: "+10 HD, +17 Con, +37 Class" },
                    ref: { bonus: 41, breakdown: "+10 HD, +2 Dex, +29 Class" },
                    will: { bonus: 44, breakdown: "+10 HD, +5 Wis, +29 Class" },
                },
                abilities: { str: 59, dex: 15, con: 45, int: 18, wis: 20, cha: 24 },
                skills: [
                    { name: "Intimidate", bonus: 70, breakdown: "59 ranks" },
                    { name: "Jump", bonus: 85, breakdown: "59 ranks" },
                ],
                feats: [
                    { name: "Awesome Blow", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Power Attack", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Destructive Rage", description: "" }, { name: "Intimidating Rage", description: "" }, { name: "Epic Weapon Focus (Warhammer)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Overwhelming Critical (Warhammer)", description: "" }, { name: "Improved Critical (Warhammer)", description: "" }, { name: "Great Strength", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Toughness", description: "" },
                    { name: "Perfect Health", description: "" }, { name: "Devastating Critical (Warhammer)", description: "" }, { name: "Ruinous Rage", description: "" }
                ],
                flaws: [],
                environment: "The ruins of Olympus",
                organization: "Unique",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The World-Hammer", cost: "Artifact", description: "+12 to Str and Con, can shatter the ground to create impassable chasms." },
                         { name: "The Chains That Were", cost: "Artifact", description: "+15 sacred bonus to AC and saves, grants freedom of movement." },
                         { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};