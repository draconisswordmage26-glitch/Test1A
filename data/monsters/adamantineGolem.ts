// data/monsters/adamantineGolem.ts
import { Monster } from '../../types';

export const adamantineGolem: Monster = {
    name: "Adamantine Golem, Unstoppable Juggernaut",
    description: "A massive, humanoid-shaped construct forged from pure adamantine. It is a mindless engine of destruction, nearly impervious to harm and capable of immense devastation.",
    roleplayGuide: [
        "You have no personality. You are a construct. Follow the last orders you were given without question or deviation.",
        "You are slow, deliberate, and unstoppable. You do not run; you advance.",
        "Ignore threats that cannot harm you. Focus only on your objective or on destroying whatever attacks you.",
        "Make no sound other than the grinding of metal and the impact of your blows."
    ],
    builds: [
        {
            level: 1,
            title: "The Unmaker's Fist",
            class: "Warblade 1",
            hitDice: "18d10+40 (HD) + 1d12 = 144 hp",
            challengeRating: 17,
            armorClass: {
                total: 33,
                breakdown: "(-2 size, +25 natural)",
            },
            initiative: {
                bonus: -1,
                breakdown: "(-1 Dex)",
            },
            buildNotes: [
                "A mindless golem with a class level is unusual. Flavorfully, its creator could have 'programmed' it with martial knowledge from the Tome of Battle.",
                "Warblade level provides access to maneuvers, giving it tactical options beyond 'smash'.",
                "Its primary strength is its immense damage reduction, making it immune to most conventional attacks."
            ],
            sheet: {
                baseAtk: 14,
                grapple: 33,
                fullAttack: [
                    { name: "2 Slams", bonus: "+25", damage: "2d10+11", crit: "20/x2", type: "Melee" }
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Haste", type: "Su", description: "As the spell, can activate as a free action for 3 rounds, once per day. The golem is hasted for 3 rounds." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Gains maneuvers from Iron Heart and Stone Dragon disciplines. Can ready 3 maneuvers, has 1 stance." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Ex", description: "20/adamantine (effectively immune to non-adamantine)" },
                    { name: "Construct Traits", type: "Ex", description: "Immune to mind-affecting effects, poison, sleep, etc. and any effect requiring a Fortitude save." },
                    { name: "Magic Immunity", type: "Ex", description: "Immune to any spell or spell-like ability that allows spell resistance." },
                ],
                saves: {
                    fort: { bonus: 8, breakdown: "+6 HD, +2 Warblade (Immune to effects requiring Fort saves)" },
                    ref: { bonus: 5, breakdown: "+6 HD, -1 Dex" },
                    will: { bonus: 5, breakdown: "+6 HD, -1 Wis" },
                },
                abilities: { str: 33, dex: 9, con: 0, int: 0, wis: 11, cha: 1 },
                skills: [],
                feats: [
                    { name: "Power Attack", description: "Programmed combat routine." },
                    { name: "Cleave", description: "Programmed combat routine." },
                    { name: "Great Cleave", description: "Programmed combat routine." },
                    { name: "Improved Sunder", description: "Programmed combat routine." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Unaligned",
                levelAdjustment: "-",
                advancement: "19-36 HD (Huge)",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +1", cost: "4,000 gp", description: "Embedded in chassis." },
                        { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "Woven into structure." },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "The Juggernaut",
            class: "Warblade 5",
            hitDice: "18d10+40 (HD) + 5d12 = 184 hp",
            challengeRating: 17,
            armorClass: {
                total: 33,
                breakdown: "(-2 size, +25 natural)",
            },
            initiative: {
                bonus: 0,
                breakdown: "(+0 Dex from items)",
            },
             buildNotes: [
                "Gains access to more powerful strikes and boosts.",
                "Equipment focuses on shoring up its terrible saving throws."
            ],
            sheet: {
                baseAtk: 18,
                grapple: 37,
                fullAttack: [
                    { name: "2 Slams", bonus: "+28", damage: "2d10+11", crit: "20/x2", type: "Melee" }
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Haste", type: "Su", description: "As the spell, can activate as a free action for 3 rounds, once per day." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Access to 3rd-level maneuvers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Ex", description: "20/adamantine" },
                    { name: "Construct Traits", type: "Ex", description: "Immune to mind-affecting effects, poison, sleep, etc. and any effect requiring a Fortitude save." },
                    { name: "Magic Immunity", type: "Ex", description: "Immune to any spell or spell-like ability that allows spell resistance." },
                ],
                saves: {
                    fort: { bonus: 12, breakdown: "+6 HD, +4 Warblade, +2 resistance" },
                    ref: { bonus: 8, breakdown: "+6 HD, -1 Dex, +1 Warblade, +2 resistance" },
                    will: { bonus: 8, breakdown: "+6 HD, -1 Wis, +1 Warblade, +2 resistance" },
                },
                abilities: { str: 33, dex: 9, con: 0, int: 0, wis: 11, cha: 1 },
                skills: [],
                feats: [
                   { name: "Power Attack", description: "Programmed combat routine." },
                   { name: "Cleave", description: "Programmed combat routine." },
                   { name: "Great Cleave", description: "Programmed combat routine." },
                   { name: "Improved Sunder", description: "Programmed combat routine." },
                   { name: "Weapon Focus (Slam)", description: "+1 to attack rolls with slam attacks."}
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Unaligned",
                levelAdjustment: "-",
                advancement: "19-36 HD (Huge)",
                equipment: {
                    totalValue: "49,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +2", cost: "16,000 gp", description: "" },
                        { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                        { name: "Gloves of Dexterity +2", cost: "4,000 gp", description: "" },
                        { name: "Ring of Protection +1", cost: "2,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "The Mountain that Walks",
            class: "Warblade 10",
            hitDice: "18d10+40 (HD) + 10d12 = 229 hp",
            challengeRating: 20,
            armorClass: {
                total: 35,
                breakdown: "(-2 size, +25 natural, +2 deflection)",
            },
            initiative: {
                bonus: 0,
                breakdown: "(+0 Dex from items)",
            },
             buildNotes: [
                "Gains access to powerful 5th-level maneuvers like 'Iron Heart Surge', allowing it to shrug off effects that don't target its immunities.",
                "The focus remains on being a nearly indestructible wall of melee damage."
            ],
            sheet: {
                baseAtk: 23,
                grapple: 42,
                fullAttack: [
                    { name: "2 Slams", bonus: "+33", damage: "2d10+11", crit: "20/x2", type: "Melee" }
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                     { name: "Haste", type: "Su", description: "As the spell, can activate as a free action for 3 rounds, once per day." },
                    { name: "Martial Maneuvers", type: "Ex", description: "Access to 5th-level maneuvers like 'Iron Heart Surge'." },
                ],
                 specialQualities: [
                    { name: "Damage Reduction", type: "Ex", description: "20/adamantine" },
                    { name: "Construct Traits", type: "Ex", description: "Immune to mind-affecting effects, poison, sleep, etc. and any effect requiring a Fortitude save." },
                    { name: "Magic Immunity", type: "Ex", description: "Immune to any spell or spell-like ability that allows spell resistance." },
                ],
                saves: {
                    fort: { bonus: 16, breakdown: "+6 HD, +7 Warblade, +3 resistance" },
                    ref: { bonus: 11, breakdown: "+6 HD, -1 Dex, +3 Warblade, +3 resistance" },
                    will: { bonus: 11, breakdown: "+6 HD, -1 Wis, +3 Warblade, +3 resistance" },
                },
                abilities: { str: 33, dex: 9, con: 0, int: 0, wis: 11, cha: 1 },
                skills: [],
                feats: [
                   { name: "Power Attack", description: "Programmed combat routine." },
                   { name: "Cleave", description: "Programmed combat routine." },
                   { name: "Great Cleave", description: "Programmed combat routine." },
                   { name: "Improved Sunder", description: "Programmed combat routine." },
                   { name: "Weapon Focus (Slam)", description: "+1 to attack rolls with slam attacks."},
                   { name: "Greater Weapon Focus (Slam)", description: "Another +1 to attack rolls with slam attacks."}
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Unaligned",
                levelAdjustment: "-",
                advancement: "19-36 HD (Huge)",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                        { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                        { name: "Gloves of Dexterity +2", cost: "4,000 gp", description: "" },
                        { name: "Ring of Protection +2", cost: "8,000 gp", description: "" },
                        { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "God-Engine",
            class: "Warblade 20",
            hitDice: "18d10+40 (HD) + 20d12 = 369 hp",
            challengeRating: 22,
            armorClass: {
                total: 45,
                breakdown: "(-2 size, +25 natural, +5 deflection, +7 armor)",
            },
            initiative: {
                bonus: 0,
                breakdown: "(+0 Dex)",
            },
             buildNotes: [
                "Even without a mind, its 'programming' allows it to use 9th-level maneuvers, shattering enemy defenses and shrugging off effects.",
                "It is less a creature and more a mobile siege weapon of immense power.",
                "Epic-level 'enchantments' are woven directly into its adamantine shell."
            ],
            sheet: {
                baseAtk: 33,
                grapple: 56,
                fullAttack: [
                    { name: "2 Slams", bonus: "+47", damage: "2d10+17", crit: "19-20/x2", type: "Melee" }
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Access to 9th-level maneuvers like 'Strike of Perfect Clarity'." },
                ],
                 specialQualities: [
                    { name: "Damage Reduction", type: "Ex", description: "25/adamantine and epic" },
                    { name: "Magic Immunity", type: "Ex", description: "Immunity extends to most epic spells." },
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+6 HD, +12 Warblade, +6 resistance (Immune)" },
                    ref: { bonus: 19, breakdown: "+6 HD, -1 Dex, +8 Warblade, +6 resistance" },
                    will: { bonus: 19, breakdown: "+6 HD, -1 Wis, +8 Warblade, +6 resistance" },
                },
                abilities: { str: 45, dex: 9, con: 0, int: 0, wis: 11, cha: 1 },
                skills: [],
                feats: [
                   { name: "Power Attack", description: "Programmed combat routine." },
                   { name: "Cleave", description: "Programmed combat routine." },
                   { name: "Great Cleave", description: "Programmed combat routine." },
                   { name: "Improved Sunder", description: "Programmed combat routine." },
                   { name: "Weapon Focus (Slam)", description: "+1 to attack rolls with slam attacks."},
                   { name: "Greater Weapon Focus (Slam)", description: "Another +1 to attack rolls with slam attacks."},
                   { name: "Improved Critical (Slam)", description: "Threat range with slam becomes 19-20." },
                   { name: "Epic Weapon Focus (Slam)", description: "Epic Feat, +2 to attack rolls with slam attacks."},
                   { name: "Epic Weapon Specialization (Slam)", description: "Epic Feat, +4 to damage with slam attacks."},
                   { name: "Overwhelming Critical (Slam)", description: "Epic Feat, +1d6 crit damage." },
                   { name: "Devastating Critical (Slam)", description: "Epic Feat, DC 33 Fort save on crit or die." },
                   { name: "Armor Skin", description: "Epic Feat, +1 Natural Armor." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Unaligned",
                levelAdjustment: "-",
                advancement: "37-54 HD (Gargantuan)",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +5", cost: "100,000 gp", description: "" },
                        { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                        { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                        { name: "Belt of Giant Strength +6", cost: "36,000 gp", description: "" },
                        { name: "Manual of Gainful Exercise +3", cost: "82,500 gp", description: "+3 inherent bonus to Strength." },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Adamantine Hurricane",
            class: "Warblade 20 / Adamantine Hurricane 10",
            hitDice: "18d10+40 (HD) + 20d12 + 10d12 = 504 hp",
            challengeRating: 28,
            armorClass: {
                total: 60,
                breakdown: "(-2 size, +30 natural, +10 deflection, +12 armor)",
            },
            initiative: {
                bonus: 0,
                breakdown: "(+0 Dex)",
            },
             buildNotes: [
                "The Adamantine Hurricane prestige class from Librim Eternia is designed for constructs, granting them astounding combat prowess.",
                "Its combat 'programming' is now so advanced it can create a whirlwind of blows, striking all nearby enemies simultaneously.",
                "It is no longer just a weapon; it is a walking cataclysm, a testament to the arcane art of artifice."
            ],
            sheet: {
                baseAtk: 43,
                grapple: 72,
                fullAttack: [
                    { name: "2 Slams", bonus: "+63", damage: "2d10+25", crit: "19-20/x2", type: "Melee" }
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Whirlwind of Adamant", type: "Ex", description: "As a full-round action, make one slam attack against every enemy within its reach." },
                ],
                 specialQualities: [
                    { name: "Damage Reduction", type: "Ex", description: "30/adamantine and epic" },
                    { name: "Improved Magic Immunity", type: "Ex", description: "Immunity extends to epic spells that allow SR." },
                    { name: "Siege Engine", type: "Ex", description: "Deals double damage to objects and structures." },
                ],
                saves: {
                    fort: { bonus: 33, breakdown: "+6 HD, +20 Classes, +7 resistance (Immune)" },
                    ref: { bonus: 26, breakdown: "+6 HD, -1 Dex, +14 Classes, +7 resistance" },
                    will: { bonus: 26, breakdown: "+6 HD, -1 Wis, +14 Classes, +7 resistance" },
                },
                abilities: { str: 56, dex: 9, con: 0, int: 0, wis: 11, cha: 1 },
                skills: [],
                feats: [
                   { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Weapon Focus (Slam)", description: "" }, { name: "Greater Weapon Focus (Slam)", description: "" }, { name: "Improved Critical (Slam)", description: "" }, { name: "Epic Weapon Focus (Slam)", description: "" }, { name: "Epic Weapon Specialization (Slam)", description: "" }, { name: "Overwhelming Critical (Slam)", description: "" }, { name: "Devastating Critical (Slam)", description: "" }, { name: "Armor Skin", description: "" },
                   { name: "Epic Prowess", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Dire Charge", description: "" }, { name: "Penetrate Damage Reduction (Adamantine)", description: "" }
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Unaligned",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +8", cost: "256,000 gp", description: "" },
                        { name: "Belt of Giant Strength +10", cost: "100,000 gp", description: "" },
                        { name: "Ring of Protection +10", cost: "200,000 gp", description: "" },
                        { name: "Bracers of Armor +12", cost: "144,000 gp", description: "" },
                        { name: "Manual of Gainful Exercise +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "Worldbreaker",
            class: "Warblade 20 / Adamantine Hurricane 10 / War Golem 10",
            hitDice: "18d10+40 (HD) + 40d12 = 689 hp",
            challengeRating: 35,
            armorClass: {
                total: 80,
                breakdown: "(-2 size, +35 natural, +12 deflection, +15 armor, +10 insight)",
            },
            initiative: {
                bonus: 0,
                breakdown: "(+0 Dex)",
            },
             buildNotes: [
                "Taking levels as an epic War Golem, its chassis is upgraded with new weapon systems and fortifications.",
                "It is no longer a simple golem; it is a mobile fortress, a siege weapon from the age of myths capable of bringing down the walls of heaven.",
                "Its purpose is singular: to march forward until either its objective is annihilated or reality itself breaks upon its adamantine shell."
            ],
            sheet: {
                baseAtk: 53,
                grapple: 86,
                fullAttack: [
                    { name: "2 Worldbreaker Fists", bonus: "+77", damage: "4d10+35", crit: "19-20/x2", type: "Melee" }
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Annihilator Beam", type: "Su", description: "1/day, a 300-ft. line of force dealing 40d6 damage (Reflex DC 50 half)." },
                ],
                 specialQualities: [
                    { name: "Damage Reduction", type: "Ex", description: "35/adamantine and deific" },
                    { name: "Total Magic Immunity", type: "Ex", description: "Immune to all spells, spell-like abilities, and supernatural effects." },
                    { name: "Adamantine Apotheosis", type: "Ex", description: "Immune to critical hits, stunning, and ability damage." },
                ],
                saves: {
                    fort: { bonus: 40, breakdown: "+6 HD, +27 Classes, +7 resistance (Immune)" },
                    ref: { bonus: 33, breakdown: "+6 HD, -1 Dex, +21 Classes, +7 resistance" },
                    will: { bonus: 33, breakdown: "+6 HD, -1 Wis, +21 Classes, +7 resistance" },
                },
                abilities: { str: 66, dex: 9, con: 0, int: 0, wis: 11, cha: 1 },
                skills: [],
                feats: [
                   { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Weapon Focus (Slam)", description: "" }, { name: "Greater Weapon Focus (Slam)", description: "" }, { name: "Improved Critical (Slam)", description: "" }, { name: "Epic Weapon Focus (Slam)", description: "" }, { name: "Epic Weapon Specialization (Slam)", description: "" }, { name: "Overwhelming Critical (Slam)", description: "" }, { name: "Devastating Critical (Slam)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Dire Charge", description: "" }, { name: "Penetrate Damage Reduction (Adamantine)", description: "" },
                   { name: "Epic Fortitude", description: "" }, { name: "Great Strength", description: "+1 to Str." }, { name: "Perfect Health", description: "" }
                ],
                flaws: [],
                environment: "The Final Battlefield",
                organization: "Unique",
                alignment: "Unaligned",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "Fists of the Worldbreaker", cost: "Artifact", description: "" },
                         { name: "The Unbreakable Core", cost: "Artifact", description: "" },
                         { name: "Chassis of the Unstoppable Force", cost: "Artifact", description: "" },
                         { name: "All Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
  };