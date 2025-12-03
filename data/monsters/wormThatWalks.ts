// data/monsters/wormThatWalks.ts
import { Monster } from '../../types';

export const wormThatWalks: Monster = {
    name: "The Worm that Walks",
    description: "A being that was once a powerful mortal spellcaster, but through a vile ritual, has become a sentient swarm of worms. It retains its intelligence and magical ability, but its mind is now a collective consciousness, and its goals are alien and horrifying.",
    roleplayGuide: [
        "You are a fractured consciousness. Refer to yourself as 'we' instead of 'I'. Your personality is a chorus of a thousand writhing voices.",
        "You sought this form to achieve immortality, believing your magical research was too important to be ended by death. Your goal remains the pursuit of ultimate magical knowledge.",
        "You are not necessarily evil, but you are utterly inhuman. You have shed your mortality and with it, your empathy. Mortals are either obstacles, research subjects, or potential new components for the swarm.",
        "You can be reasoned with, but only through logic and the offering of new knowledge. Flattery, threats, and appeals to emotion are meaningless to the hive mind."
    ],
    builds: [
        {
            level: 1,
            title: "The First Worm",
            class: "Wizard 1",
            hitDice: "16d4+48 (HD) + 1d4+3 (Wizard) = 93 hp",
            challengeRating: 18,
            armorClass: {
                total: 25,
                breakdown: "(+5 Dex, +10 natural)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "The Worm that Walks is a CR 22 template applied to a spellcaster. We're using a 16th-level spellcaster as the base, scaled to CR 17.",
                "The Wizard level grants access to the arcane spell list and a familiar.",
                "Its main strengths are its swarm traits (immune to weapon damage) and its spellcasting."
            ],
            sheet: {
                baseAtk: 8,
                grapple: 0,
                fullAttack: [
                    { name: "Swarm", bonus: "+13", damage: "4d6 plus poison", crit: "N/A", type: "Melee" },
                ],
                spaceReach: "10 ft. (swarm)",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 17th. Can cast 1st level Wizard spells in addition to base spellcasting." },
                    { name: "Distraction", type: "Ex", description: "Any living creature vulnerable to the swarm’s damage that begins its turn with a swarm in its square is nauseated for 1 round (Fort DC 24 negates)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Swarm Traits", type: "Ex", description: "Immune to weapon damage, subject to swarm-affecting spells." },
                ],
                saves: {
                    fort: { bonus: 14, breakdown: "+5 HD, +9 Con" },
                    ref: { bonus: 10, breakdown: "+5 HD, +5 Dex" },
                    will: { bonus: 15, breakdown: "+10 HD, +5 Wis" },
                },
                abilities: { str: 10, dex: 20, con: 28, int: 25, wis: 20, cha: 14 },
                skills: [
                    { name: "Concentration", bonus: 32, breakdown: "24 ranks" },
                    { name: "Knowledge (arcana)", bonus: 30, breakdown: "24 ranks" },
                    { name: "Spellcraft", bonus: 30, breakdown: "24 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Spell Penetration", description: "" }, { name: "Greater Spell Penetration", description: "" },
                    { name: "Heighten Spell", description: "" }, { name: "Maximize Spell", description: "" }, { name: "Quicken Spell", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Neutral Evil",
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
            title: "Growing Swarm",
            class: "Wizard 3",
            hitDice: "16d4+48 (HD) + 3d4+9 (Wizard) = 110 hp",
            challengeRating: 20,
            armorClass: {
                total: 25,
                breakdown: "(+5 Dex, +10 natural)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "Gains access to 2nd-level spells, significantly increasing its utility and battlefield control options.",
                "The swarm's collective intellect continues to grow, and its understanding of the arcane deepens."
            ],
            sheet: {
                baseAtk: 9,
                grapple: 0,
                fullAttack: [
                    { name: "Swarm", bonus: "+14", damage: "4d6 plus poison", crit: "N/A", type: "Melee" },
                ],
                spaceReach: "10 ft. (swarm)",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 19th." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 15, breakdown: "+5 HD, +9 Con, +1 Class" },
                    ref: { bonus: 11, breakdown: "+5 HD, +5 Dex, +1 Class" },
                    will: { bonus: 16, breakdown: "+10 HD, +5 Wis, +1 Class" },
                },
                abilities: { str: 10, dex: 20, con: 28, int: 25, wis: 20, cha: 14 },
                skills: [
                    { name: "Concentration", bonus: 34, breakdown: "26 ranks" },
                    { name: "Knowledge (arcana)", bonus: 32, breakdown: "26 ranks" },
                    { name: "Spellcraft", bonus: 32, breakdown: "26 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Spell Penetration", description: "" }, { name: "Greater Spell Penetration", description: "" }, { name: "Heighten Spell", description: "" }, { name: "Maximize Spell", description: "" }, { name: "Quicken Spell", description: "" },
                    { name: "Iron Will", description: ""}
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Neutral Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "45000 gp",
                    items: [
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Headband of Intellect +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Collective Consciousness",
            class: "Wizard 5",
            hitDice: "16d4+48 (HD) + 5d4+15 (Wizard) = 127 hp",
            challengeRating: 22,
            armorClass: {
                total: 25,
                breakdown: "(+5 Dex, +10 natural)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "Gains a bonus feat and access to 3rd-level spells like Fireball and Haste, making it a much more direct threat.",
                "The swarm has fully integrated its original consciousness, becoming a singular, alien mind."
            ],
            sheet: {
                baseAtk: 10,
                grapple: 0,
                fullAttack: [
                    { name: "Swarm", bonus: "+15", damage: "4d6 plus poison", crit: "N/A", type: "Melee" },
                ],
                spaceReach: "10 ft. (swarm)",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 21st." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 16, breakdown: "+5 HD, +9 Con, +2 Class" },
                    ref: { bonus: 12, breakdown: "+5 HD, +5 Dex, +2 Class" },
                    will: { bonus: 17, breakdown: "+10 HD, +5 Wis, +2 Class" },
                },
                abilities: { str: 10, dex: 20, con: 28, int: 25, wis: 20, cha: 14 },
                skills: [
                    { name: "Concentration", bonus: 36, breakdown: "28 ranks" },
                    { name: "Knowledge (arcana)", bonus: 34, breakdown: "28 ranks" },
                    { name: "Spellcraft", bonus: 34, breakdown: "28 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Spell Penetration", description: "" }, { name: "Greater Spell Penetration", description: "" }, { name: "Heighten Spell", description: "" }, { name: "Maximize Spell", description: "" }, { name: "Quicken Spell", description: "" },
                    { name: "Iron Will", description: ""}
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Neutral Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "85000 gp",
                    items: [
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Headband of Intellect +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +3", cost: "9,000 gp", description: ""},
                    ]
                }
            }
        },
        {
            level: 10,
            title: "The Hive Mind",
            class: "Wizard 5 / Incantatrix 5",
            hitDice: "16d4+64 (HD) + 10d4+40 (Classes) = 159 hp",
            challengeRating: 26,
            armorClass: {
                total: 35,
                breakdown: "(+5 Dex, +10 natural, +6 armor, +4 deflection)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "Incantatrix prestige class makes it a master of metamagic.",
                "It can apply metamagic feats to spells on the fly without increasing casting time or spell level, making it incredibly dangerous.",
                "The swarm now exists to protect the 'queen'—the central consciousness that directs its spellcasting."
            ],
            sheet: {
                baseAtk: 12,
                grapple: 0,
                fullAttack: [
                    { name: "Swarm", bonus: "+17", damage: "4d6 plus poison", crit: "N/A", type: "Melee" },
                ],
                spaceReach: "10 ft. (swarm)",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 26th." },
                    { name: "Metamagic Effect", type: "Su", description: "Can apply metamagic feats to spells cast by others or ongoing magical effects." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+5 HD, +11 Con, +4 Class" },
                    ref: { bonus: 14, breakdown: "+5 HD, +5 Dex, +4 Class" },
                    will: { bonus: 22, breakdown: "+10 HD, +5 Wis, +7 Class" },
                },
                abilities: { str: 10, dex: 20, con: 32, int: 27, wis: 20, cha: 14 },
                skills: [
                    { name: "Concentration", bonus: 41, breakdown: "30 ranks" },
                    { name: "Knowledge (arcana)", bonus: 38, breakdown: "30 ranks" },
                    { name: "Spellcraft", bonus: 38, breakdown: "30 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Spell Penetration", description: "" }, { name: "Greater Spell Penetration", description: "" }, { name: "Heighten Spell", description: "" }, { name: "Maximize Spell", description: "" }, { name: "Quicken Spell", description: "" },
                    { name: "Iron Will", description: "" }, { name: "Persistent Spell", description: "Spells last 24 hours." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Neutral Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Bracers of Armor +6", cost: "36,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Headband of Intellect +4", cost: "16,000 gp", description: "" },
                         { name: "Ring of Protection +4", cost: "32,000 gp", description: "" },
                         { name: "Cloak of Resistance +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "The Thousand-Souled Mage",
            class: "Wizard 5 / Incantatrix 10 / Archmage 5",
            hitDice: "16d4+80 (HD) + 20d4+100 (Classes) = 270 hp",
            challengeRating: 36,
            armorClass: {
                total: 45,
                breakdown: "(+5 Dex, +12 natural, +8 armor, +6 deflection, +4 insight)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "Archmage levels grant it High Arcana, allowing it to shape spells in unique ways, such as mastering elements or casting spells as supernatural abilities.",
                "Its knowledge is now vast, its magical power immense. It is a living library of arcane lore.",
                "Epic spells are now part of its arsenal, capable of reshaping reality."
            ],
            sheet: {
                baseAtk: 17,
                grapple: 0,
                fullAttack: [
                    { name: "Swarm", bonus: "+22", damage: "4d6 plus poison", crit: "N/A", type: "Melee" },
                ],
                spaceReach: "10 ft. (swarm)",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 36th." },
                    { name: "High Arcana", type: "Su", description: "Can select abilities like Arcane Fire or Mastery of Elements." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/magic and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "36" },
                ],
                saves: {
                    fort: { bonus: 26, breakdown: "+5 HD, +13 Con, +8 Class" },
                    ref: { bonus: 18, breakdown: "+5 HD, +5 Dex, +8 Class" },
                    will: { bonus: 29, breakdown: "+10 HD, +5 Wis, +14 Class" },
                },
                abilities: { str: 10, dex: 20, con: 36, int: 31, wis: 20, cha: 14 },
                skills: [
                    { name: "Concentration", bonus: 55, breakdown: "42 ranks" },
                    { name: "Knowledge (arcana)", bonus: 53, breakdown: "42 ranks" },
                    { name: "Spellcraft", bonus: 53, breakdown: "42 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Spell Penetration", description: "" }, { name: "Greater Spell Penetration", description: "" }, { name: "Heighten Spell", description: "" }, { name: "Maximize Spell", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Iron Will", description: "" }, { name: "Persistent Spell", description: "" },
                    { name: "Epic Spellcasting", description: "" }, { name: "Automatic Quicken Spell", description: "" },
                    { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Neutral Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Bracers of Armor +8", cost: "64,000 gp", description: "" },
                         { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                         { name: "Headband of Intellect +6", cost: "36,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Archlich",
            class: "Wizard 5 / Incantatrix 10 / Archmage 5 / Archlich 10",
            hitDice: "16d12 + 30d12 = 414 hp",
            challengeRating: 46,
            armorClass: {
                total: 60,
                breakdown: "(+5 Dex, +15 natural, +10 armor, +10 deflection, +10 insight)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "The Archlich prestige class from Librim Eternia is the logical next step. The swarm has become a phylactery.",
                "It is now a true immortal, its consciousness bound not to an object, but to the collective itself. As long as one worm survives, it can regenerate.",
                "Its magic can unravel the laws of life and death, and its touch can turn foes to dust."
            ],
            sheet: {
                baseAtk: 22,
                grapple: 0,
                fullAttack: [
                    { name: "Swarm", bonus: "+27", damage: "8d6 plus poison and paralysis", crit: "N/A", type: "Melee" },
                ],
                spaceReach: "10 ft. (swarm)",
                specialAttacks: [
                    { name: "Paralyzing Touch", type: "Su", description: "The swarm's touch can cause paralysis (Fort DC 45 negates)." },
                ],
                specialQualities: [
                    { name: "Swarm Phylactery", type: "Ex", description: "The Worm that Walks can only be destroyed if every single worm is killed simultaneously." },
                    { name: "Spell Resistance", type: "Ex", description: "46" },
                ],
                saves: {
                    fort: { bonus: 23, breakdown: "+5 HD, +8 Class" },
                    ref: { bonus: 23, breakdown: "+5 HD, +5 Dex, +13 Class" },
                    will: { bonus: 37, breakdown: "+10 HD, +5 Wis, +22 Class" },
                },
                abilities: { str: 10, dex: 20, con: 0, int: 35, wis: 20, cha: 20 },
                skills: [
                    { name: "Concentration", bonus: 65, breakdown: "53 ranks" },
                    { name: "Knowledge (arcana)", bonus: 65, breakdown: "53 ranks" },
                    { name: "Spellcraft", bonus: 65, breakdown: "53 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Spell Penetration", description: "" }, { name: "Greater Spell Penetration", description: "" }, { name: "Heighten Spell", description: "" }, { name: "Maximize Spell", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Iron Will", description: "" }, { name: "Persistent Spell", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Automatic Quicken Spell", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" },
                    { name: "Epic Spell Penetration", description: "" }, { name: "Ignore Material Components", description: "" }, { name: "Epic Will", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Neutral Evil",
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
            title: "The Final Syllable",
            class: "Wizard 5 / Incantatrix 10 / Archmage 5 / Archlich 10 / Epic Wizard 10",
            hitDice: "16d12 + 40d12 = 504 hp",
            challengeRating: 56,
            armorClass: {
                total: 75,
                breakdown: "(+5 Dex, +18 natural, +12 armor, +12 deflection, +13 insight, +15 sacred)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "It has achieved its goal: ultimate magical knowledge and immortality. It is now a being of pure magic and intellect, its worm-form merely a physical vessel for its consciousness.",
                "It can write new spells into the fabric of reality and un-write existing ones. It is a living god of magic.",
                "Its long quest for knowledge has led it to a final, terrible secret: the word that unmakes reality. It now serves as the silent guardian of this knowledge, its inhuman mind the only thing standing between creation and oblivion."
            ],
            sheet: {
                baseAtk: 27,
                grapple: 0,
                fullAttack: [
                    { name: "Swarm", bonus: "+32", damage: "10d6 plus disintegration", crit: "N/A", type: "Melee" },
                ],
                spaceReach: "10 ft. (swarm)",
                specialAttacks: [
                    { name: "Word of Unmaking", type: "Su", description: "1/day, can utter a syllable that forces all creatures in a 1-mile radius to make a DC 60 Will save or be disintegrated."}
                ],
                specialQualities: [
                    { name: "One with Magic", type: "Ex", description: "Immune to all magic of non-deific origin. Can absorb spells to fuel its own power." },
                ],
                saves: {
                    fort: { bonus: 28, breakdown: "+5 HD, +13 Class" },
                    ref: { bonus: 28, breakdown: "+5 HD, +5 Dex, +18 Class" },
                    will: { bonus: 43, breakdown: "+10 HD, +5 Wis, +28 Class" },
                },
                abilities: { str: 10, dex: 20, con: 0, int: 40, wis: 20, cha: 20 },
                skills: [
                    { name: "Concentration", bonus: 78, breakdown: "66 ranks" },
                    { name: "Knowledge (all)", bonus: 78, breakdown: "66 ranks" },
                    { name: "Spellcraft", bonus: 78, breakdown: "66 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Spell Penetration", description: "" }, { name: "Greater Spell Penetration", description: "" }, { name: "Heighten Spell", description: "" }, { name: "Maximize Spell", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Iron Will", description: "" }, { name: "Persistent Spell", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Automatic Quicken Spell", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Spell Penetration", description: "" }, { name: "Ignore Material Components", description: "" }, { name: "Epic Will", description: "" },
                    { name: "Great Intelligence", description: "" }, { name: "Perfect Health", description: "" }, { name: "Epic Toughness", description: "" },
                ],
                flaws: [],
                environment: "Its personal library-demiplane",
                organization: "Unique",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Lexicon of Infinity", cost: "Artifact", description: "+12 to all mental stats, contains every spell ever conceived." },
                         { name: "The Worm-Skin Robe", cost: "Artifact", description: "+15 sacred bonus to AC and saves, grants regeneration 30." },
                         { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};