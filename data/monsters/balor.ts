// data/monsters/balor.ts
import { Monster } from '../../types';

export const balor: Monster = {
    name: "Balor, The Fallen Angel",
    description: "A hulking, demonic figure wreathed in fire and shadow, armed with a flaming whip and a vorpal sword. Balors are the generals of abyssal armies, embodiments of fiery destruction and pure chaotic evil.",
    roleplayGuide: [
        "You were once a great angel, a general in the celestial host. You took the greatest risk of all: you descended into the Abyss not as a conqueror, but as a spy, taking on a monstrous form to learn the secrets of your enemy.",
        "Your long eons in the Abyss have changed you, but your mission remains. You fight to protect the multiverse from the chaos of the Abyss, using its own weapons against it.",
        "Your rage is a tool, a holy fire you use to scour the demonic taint from the planes. It is a righteous fury, not a hateful despair.",
        "You seek worthy allies to aid your secret war. You test mortals with fire and fury, seeking champions strong enough to stand with you against the endless hordes of chaos. To them, you are a fearsome but noble commander."
    ],
    builds: [
        {
            level: 1,
            title: "Smoldering Ember",
            class: "Barbarian 1",
            hitDice: "17d8+136 (HD) + 1d12+8 (Barbarian) = 230 hp",
            challengeRating: 18,
            armorClass: {
                total: 30,
                breakdown: "(-1 size, +4 Dex, +17 natural)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The Balor is a CR 20 creature with 20 HD. To scale it down to CR 17, its HD is reduced to 17.",
                "Barbarian class is a natural fit, representing its demonic rage.",
                "Its primary threat comes from its powerful weapons and spell-like abilities."
            ],
            sheet: {
                baseAtk: 18,
                grapple: 35,
                fullAttack: [
                    { name: "+1 Vorpal Greatsword", bonus: "+31/+26/+21/+16", damage: "3d6+14", crit: "19-20/x2", type: "Melee" },
                    { name: "+1 Flaming Whip", bonus: "+29", damage: "1d4+8 plus 1d6 fire and entangle", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft. (20 ft. with whip)",
                specialAttacks: [
                    { name: "Rage", type: "Ex", description: "1/day, +4 Str, +4 Con, -2 AC." },
                    { name: "Spell-Like Abilities", type: "Sp", description: "At will—blasphemy, dominate monster, greater dispel magic, greater teleport, insanity, power word stun, unholy aura." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/cold iron and good" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Death Throes", type: "Su", description: "Explodes in a 20d6 blast of fire upon death." },
                ],
                saves: {
                    fort: { bonus: 21, breakdown: "+10 HD, +9 Con, +2 Barb" },
                    ref: { bonus: 14, breakdown: "+10 HD, +4 Dex" },
                    will: { bonus: 14, breakdown: "+10 HD, +4 Wis" },
                },
                abilities: { str: 35, dex: 19, con: 29, int: 22, wis: 18, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 32, breakdown: "23 ranks" },
                    { name: "Diplomacy", bonus: 30, breakdown: "23 ranks" },
                    { name: "Intimidate", bonus: 30, breakdown: "23 ranks" },
                    { name: "Listen", bonus: 27, breakdown: "23 ranks" },
                    { name: "Sense Motive", bonus: 27, breakdown: "23 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Initiative", description: "" },
                    { name: "Power Attack", description: "" }, { name: "Quicken Spell-Like Ability (Teleport)", description: "" }, { name: "Weapon Focus (Greatsword)", description: "" },
                ],
                flaws: [],
                environment: "The Abyss",
                organization: "Solitary",
                alignment: "Chaotic Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         // Vorpal and Flaming are inherent abilities, not enchantments on the weapon for base Balor.
                         { name: "Masterwork Greatsword", cost: "350 gp", description: "" },
                         { name: "Masterwork Whip", cost: "301 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "Inferno's Heart",
            class: "Barbarian 3",
            hitDice: "17d8+136 (HD) + 3d12+24 (Barbarian) = 250 hp",
            challengeRating: 20,
            armorClass: {
                total: 30,
                breakdown: "(-1 size, +4 Dex, +17 natural)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains Uncanny Dodge, making it harder to catch off-guard.",
                "Intimidating Rage feat makes its already terrifying presence even more potent in combat."
            ],
            sheet: {
                baseAtk: 20,
                grapple: 37,
                fullAttack: [
                    { name: "+2 Vorpal Greatsword", bonus: "+33/+28/+23/+18", damage: "3d6+15", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Rage", type: "Ex", description: "1/day, +4 Str, +4 Con, -2 AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/cold iron and good" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Uncanny Dodge", type: "Ex", description: "Cannot be caught flat-footed."}
                ],
                saves: {
                    fort: { bonus: 22, breakdown: "+10 HD, +9 Con, +3 Barb" },
                    ref: { bonus: 15, breakdown: "+10 HD, +4 Dex, +1 Barb" },
                    will: { bonus: 15, breakdown: "+10 HD, +4 Wis, +1 Barb" },
                },
                abilities: { str: 35, dex: 19, con: 29, int: 22, wis: 18, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 34, breakdown: "25 ranks" },
                    { name: "Intimidate", bonus: 32, breakdown: "25 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Power Attack", description: "" }, { name: "Quicken Spell-Like Ability (Teleport)", description: "" }, { name: "Weapon Focus (Greatsword)", description: "" },
                    { name: "Intimidating Rage", description: "Demoralize foes as a free action when raging."}
                ],
                flaws: [],
                environment: "The Abyss",
                organization: "Solitary",
                alignment: "Chaotic Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "40000 gp",
                    items: [
                         { name: "+2 Greatsword", cost: "8,350 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Avatar of Wrath",
            class: "Barbarian 5",
            hitDice: "17d8+136 (HD) + 5d12+40 (Barbarian) = 280 hp",
            challengeRating: 22,
            armorClass: {
                total: 30,
                breakdown: "(-1 size, +4 Dex, +17 natural)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains Improved Uncanny Dodge, making it impossible to flank.",
                "More rages per day allow it to maintain peak destructive power."
            ],
            sheet: {
                baseAtk: 22,
                grapple: 41,
                fullAttack: [
                    { name: "+2 Vorpal Greatsword", bonus: "+35/+30/+25/+20", damage: "3d6+17", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Rage", type: "Ex", description: "2/day, +4 Str, +4 Con, -2 AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/cold iron and good, DR 1/-" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Improved Uncanny Dodge", type: "Ex", description: "Cannot be flanked."}
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+10 HD, +10 Con, +4 Barb" },
                    ref: { bonus: 16, breakdown: "+10 HD, +4 Dex, +2 Barb" },
                    will: { bonus: 16, breakdown: "+10 HD, +4 Wis, +2 Barb" },
                },
                abilities: { str: 37, dex: 19, con: 31, int: 22, wis: 18, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 36, breakdown: "27 ranks" },
                    { name: "Intimidate", bonus: 34, breakdown: "27 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Power Attack", description: "" }, { name: "Quicken Spell-Like Ability (Teleport)", description: "" }, { name: "Weapon Focus (Greatsword)", description: "" }, { name: "Intimidating Rage", description: ""}
                ],
                flaws: [],
                environment: "The Abyss",
                organization: "Solitary",
                alignment: "Chaotic Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "85000 gp",
                    items: [
                         { name: "+2 Greatsword", cost: "8,350 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Abyssal General",
            class: "Barbarian 10",
            hitDice: "17d8+153 (HD) + 10d12+90 (Barbarian) = 370 hp",
            challengeRating: 27,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +4 Dex, +17 natural, +5 deflection)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Greater Rage makes its physical attacks truly devastating.",
                "Its command of abyssal armies is represented by its powerful spell-like abilities and sheer intimidating presence.",
                "It is a whirlwind of destruction on the battlefield, a true general of the Blood War."
            ],
            sheet: {
                baseAtk: 27,
                grapple: 44,
                fullAttack: [
                    { name: "+3 Vorpal Greatsword", bonus: "+43/+38/+33/+28", damage: "3d6+18", crit: "19-20/x2", type: "Melee" },
                    { name: "Whip", bonus: "+39", damage: "1d4+10 plus 1d6 fire and entangle", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft. (20 ft. with whip)",
                specialAttacks: [
                    { name: "Greater Rage", type: "Ex", description: "3/day, +6 Str, +6 Con, -2 AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/cold iron and good" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 29, breakdown: "+10 HD, +12 Con, +7 Barb" },
                    ref: { bonus: 17, breakdown: "+10 HD, +4 Dex, +3 Barb" },
                    will: { bonus: 18, breakdown: "+10 HD, +4 Wis, +4 Barb" },
                },
                abilities: { str: 37, dex: 19, con: 33, int: 22, wis: 18, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 40, breakdown: "29 ranks" },
                    { name: "Intimidate", bonus: 37, breakdown: "29 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Power Attack", description: "" }, { name: "Quicken Spell-Like Ability (Teleport)", description: "" }, { name: "Weapon Focus (Greatsword)", description: "" },
                    { name: "Intimidating Rage", description: "Demoralize foes as a free action when raging." }, { name: "Improved Critical (Greatsword)", description: "" }
                ],
                flaws: [],
                environment: "The Abyss",
                organization: "Solitary",
                alignment: "Chaotic Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "+3 Greatsword", cost: "18,350 gp", description: "" },
                         { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                    ]
                }
            }
        },
       {
        level: 20,
        title: "Lord of the Balefire",
        class: "Barbarian 20",
        hitDice: "17d8+187 (HD) + 20d12+220 (Barbarian) = 595 hp",
        challengeRating: 37,
        armorClass: {
            total: 45,
            breakdown: "(-1 size, +4 Dex, +19 natural, +7 deflection, +6 armor)",
        },
        initiative: {
            bonus: 8,
            breakdown: "(+4 Dex, +4 Improved Initiative)",
        },
        buildNotes: [
            "Mighty Rage turns it into an avatar of destruction, nearly unstoppable in its fury.",
            "Epic feats make its attacks even more lethal and its presence more terrifying.",
            "It is a true demon lord, a being of immense power whose rage can shatter worlds."
        ],
        sheet: {
            baseAtk: 37,
            grapple: 56,
            fullAttack: [
                { name: "+5 Vorpal Greatsword", bonus: "+54/+49/+44/+39", damage: "3d6+24", crit: "17-20/x2", type: "Melee" },
            ],
            spaceReach: "10 ft.",
            specialAttacks: [
                { name: "Mighty Rage", type: "Ex", description: "6/day, +8 Str, +8 Con, -2 AC." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "20/cold iron, good, and epic" },
                { name: "Spell Resistance", type: "Ex", description: "37" },
            ],
            saves: {
                fort: { bonus: 39, breakdown: "+10 HD, +15 Con, +12 Barb, +2 feat" },
                ref: { bonus: 23, breakdown: "+10 HD, +4 Dex, +7 Barb, +2 feat" },
                will: { bonus: 25, breakdown: "+10 HD, +4 Wis, +9 Barb, +2 feat" },
            },
            abilities: { str: 41, dex: 19, con: 39, int: 22, wis: 18, cha: 24 },
            skills: [
                { name: "Concentration", bonus: 53, breakdown: "39 ranks" },
                { name: "Intimidate", bonus: 47, breakdown: "39 ranks" },
            ],
            feats: [
                { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Power Attack", description: "" }, { name: "Quicken Spell-Like Ability (Teleport)", description: "" }, { name: "Weapon Focus (Greatsword)", description: "" }, { name: "Intimidating Rage", description: "" }, { name: "Improved Critical (Greatsword)", description: "" },
                { name: "Epic Weapon Focus (Greatsword)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" },
                { name: "Devastating Critical (Greatsword)", description: "" }, { name: "Epic Will", description: "" },
            ],
            flaws: [],
            environment: "The Abyss",
            organization: "Solitary",
            alignment: "Chaotic Evil",
            levelAdjustment: "-",
            advancement: "By character class",
            equipment: {
                totalValue: "760,000 gp",
                items: [
                     { name: "+5 Greatsword", cost: "50,350 gp", description: "" },
                     { name: "Belt of Giant Strength +6", cost: "36,000 gp", description: "" },
                     { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                ]
            }
        }
      },
      {
        level: 30,
        title: "Demonic Lord",
        class: "Barbarian 20 / Demonic Lord 10",
        hitDice: "17d8+221 (HD) + 30d12+390 (Classes) = 870 hp",
        challengeRating: 47,
        armorClass: {
            total: 60,
            breakdown: "(-1 size, +4 Dex, +22 natural, +10 deflection, +15 profane)",
        },
        initiative: {
            bonus: 8,
            breakdown: "(+4 Dex, +4 Improved Initiative)",
        },
        buildNotes: [
            "The Demonic Lord prestige class from Librim Eternia grants it true demonic apotheosis.",
            "It can now grant spells to followers, create its own abyssal layer, and its rage is a force that can warp reality.",
            "Its tragic fall is complete. It has become a true prince of the Abyss, its angelic past a forgotten, painful dream."
        ],
        sheet: {
            baseAtk: 47,
            grapple: 68,
            fullAttack: [
                { name: "+7 Vorpal Anarchic Greatsword", bonus: "+68/+63/+58/+53", damage: "3d6+28", crit: "17-20/x2", type: "Melee" },
            ],
            spaceReach: "10 ft.",
            specialAttacks: [
                { name: "Lord of the Abyss", type: "Su", description: "Can grant spells and create a personal abyssal domain." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "25/cold iron, good, and epic" },
                { name: "Spell Resistance", type: "Ex", description: "47" },
            ],
            saves: {
                fort: { bonus: 51, breakdown: "+10 HD, +17 Con, +24 Class" },
                ref: { bonus: 33, breakdown: "+10 HD, +4 Dex, +19 Class" },
                will: { bonus: 35, breakdown: "+10 HD, +4 Wis, +21 Class" },
            },
            abilities: { str: 45, dex: 19, con: 43, int: 22, wis: 18, cha: 28 },
            skills: [
                { name: "Concentration", bonus: 66, breakdown: "49 ranks" },
                { name: "Intimidate", bonus: 59, breakdown: "49 ranks" },
            ],
            feats: [
                 { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Power Attack", description: "" }, { name: "Quicken Spell-Like Ability (Teleport)", description: "" }, { name: "Weapon Focus (Greatsword)", description: "" }, { name: "Intimidating Rage", description: "" }, { name: "Improved Critical (Greatsword)", description: "" }, { name: "Epic Weapon Focus (Greatsword)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Devastating Critical (Greatsword)", description: "" }, { name: "Epic Will", description: "" },
                { name: "Epic Weapon Specialization (Greatsword)", description: "" }, { name: "Great Strength", description: "" }, { name: "Dire Charge", description: "" }
            ],
            flaws: [],
            environment: "Its personal Abyssal layer",
            organization: "Unique",
            alignment: "Chaotic Evil",
            levelAdjustment: "-",
            advancement: "By character class",
            equipment: {
                totalValue: "3,000,000 gp",
                items: [
                     { name: "+7 Anarchic Greatsword", cost: "200,350 gp", description: "" },
                     { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                ]
            }
        }
      },
      {
        level: 40,
        title: "The Unmaker",
        class: "Barbarian 20 / Demonic Lord 10 / Epic Barbarian 10",
        hitDice: "17d8+255 (HD) + 40d12+600 (Classes) = 1200 hp",
        challengeRating: 57,
        armorClass: {
            total: 75,
            breakdown: "(-1 size, +4 Dex, +25 natural, +12 deflection, +15 profane, +20 armor)",
        },
        initiative: {
            bonus: 8,
            breakdown: "(+4 Dex, +4 Improved Initiative)",
        },
        buildNotes: [
            "It is now a fundamental force of destruction, a being whose rage is a cosmic storm.",
            "It no longer seeks to destroy creation out of spite, but because it now believes that non-existence is the only true purity, the only escape from the pain of being.",
            "Its final goal is to unmake the Abyss itself, and then finally, to unmake itself, achieving the peace of oblivion it has craved for eons."
        ],
        sheet: {
            baseAtk: 57,
            grapple: 80,
            fullAttack: [
                { name: "World-Ender, a +9 Vorpal Anarchic Greatsword", bonus: "+80/+75/+70/+65", damage: "3d6+35", crit: "17-20/x2", type: "Melee" },
            ],
            spaceReach: "10 ft.",
            specialAttacks: [
                { name: "Apocalyptic Rage", type: "Su", description: "Its rage can now shatter landscapes and unravel magic."}
            ],
            specialQualities: [
                { name: "One with the Abyss", type: "Ex", description: "Cannot be permanently killed as long as the Abyss exists." },
            ],
            saves: {
                fort: { bonus: 63, breakdown: "+10 HD, +20 Con, +33 Class" },
                ref: { bonus: 43, breakdown: "+10 HD, +4 Dex, +29 Class" },
                will: { bonus: 45, breakdown: "+10 HD, +4 Wis, +31 Class" },
            },
            abilities: { str: 51, dex: 19, con: 49, int: 22, wis: 18, cha: 32 },
            skills: [
                { name: "Concentration", bonus: 83, breakdown: "59 ranks" },
                { name: "Intimidate", bonus: 72, breakdown: "59 ranks" },
            ],
            feats: [
                { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Power Attack", description: "" }, { name: "Quicken Spell-Like Ability (Teleport)", description: "" }, { name: "Weapon Focus (Greatsword)", description: "" }, { name: "Intimidating Rage", description: "" }, { name: "Improved Critical (Greatsword)", description: "" }, { name: "Epic Weapon Focus (Greatsword)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Devastating Critical (Greatsword)", description: "" }, { name: "Epic Will", description: "" }, { name: "Epic Weapon Specialization (Greatsword)", description: "" }, { name: "Great Strength", description: "" }, { name: "Dire Charge", description: "" },
                { name: "Perfect Health", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Ruinous Rage", description: "" }
            ],
            flaws: [],
            environment: "The Heart of the Abyss",
            organization: "Unique",
            alignment: "Chaotic Evil",
            levelAdjustment: "-",
            advancement: "-",
            equipment: {
                totalValue: "12,000,000 gp",
                items: [
                     { name: "The Unmaker's Edge", cost: "Artifact", description: "" },
                     { name: "The Heart of Rage", cost: "Artifact", description: "" },
                     { name: "Crown of the Fallen Star", cost: "Artifact", description: "" },
                ]
            }
        }
      },
    ]
};