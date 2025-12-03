// data/monsters/norn.ts
import { Monster } from '../../types';

const roleplayGuide = [
    "You are burdened by knowledge. You see the beginning and end of all things, a weight that lends you an air of profound melancholy and detachment.",
    "Your actions are guided by the preservation of causality and the integrity of the timeline. You are not good or evil, but a guardian of what must be.",
    "You speak in riddles and paradoxes, as your perception of time is not linear. You may answer a question that has not yet been asked.",
    "You may intervene to prevent a great temporal catastrophe, even if it means allying with mortals. You do so not out of compassion, but out of grim necessity."
];

export const norn: Monster = {
    name: "Norn, Weaver of Fate",
    description: "Norns are powerful, fey-like beings who can see the threads of fate and destiny that bind all creatures. They often appear as three women—one young, one middle-aged, and one ancient—but are in fact a single entity existing at multiple points in time.",
    roleplayGuide: roleplayGuide,
    builds: [
        {
            level: 1,
            title: "Fate's Handmaiden",
            class: "Seer 1",
            hitDice: "16d6+80 (HD) + 1d4+5 (Seer) = 144 hp",
            challengeRating: 17,
            armorClass: {
                total: 30,
                breakdown: "(-1 size, +5 Dex, +10 natural, +6 insight)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "The Norn is a CR 23 creature from the Epic Level Handbook. To create a CR 17 baseline, its HD has been reduced from 32 to 16.",
                "Seer class from Dragon Magazine #309 fits perfectly, enhancing its divinatory powers.",
                "The build focuses on its spell-like abilities and its unique insight bonus to AC and saves."
            ],
            sheet: {
                baseAtk: 8,
                grapple: 17,
                fullAttack: [
                    { name: "Dagger", bonus: "+12", damage: "1d6+4", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Spell-Like Abilities", type: "Sp", description: "At will—augury, divination, greater scrying, true strike. 3/day—foresight, moment of prescience." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/cold iron and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "See Fate", type: "Su", description: "Gains an insight bonus equal to its Wisdom modifier (+6) on AC and saves." }
                ],
                saves: {
                    fort: { bonus: 16, breakdown: "+5 HD, +5 Con, +6 insight" },
                    ref: { bonus: 16, breakdown: "+5 HD, +5 Dex, +6 insight" },
                    will: { bonus: 19, breakdown: "+10 HD, +3 Wis, +6 insight" },
                },
                abilities: { str: 18, dex: 21, con: 20, int: 25, wis: 23, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 26, breakdown: "21 ranks, +5 Con" },
                    { name: "Diplomacy", bonus: 28, breakdown: "21 ranks, +7 Cha" },
                    { name: "Knowledge (any two)", bonus: 28, breakdown: "21 ranks, +7 Int" },
                    { name: "Sense Motive", bonus: 27, breakdown: "21 ranks, +6 Wis" },
                    { name: "Spellcraft", bonus: 28, breakdown: "21 ranks, +7 Int" },
                ],
                feats: [
                    { name: "Combat Casting", description: "+4 bonus on Concentration checks to cast defensively." },
                    { name: "Dodge", description: "+1 dodge bonus to AC." },
                    { name: "Mobility", description: "+4 dodge bonus to AC against AoOs." },
                    { name: "Improved Initiative", description: "+4 on initiative checks." },
                    { name: "Quicken Spell-Like Ability (Divination)", description: "Use Divination as a free action 3/day." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (unique)",
                alignment: "True Neutral",
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
            title: "Fate's Weaver",
            class: "Seer 1 / Fatespinner 2",
            hitDice: "16d6+80 (HD) + 3d4+15 (Classes) = 160 hp",
            challengeRating: 19,
            armorClass: {
                total: 32,
                breakdown: "(-1 size, +5 Dex, +10 natural, +6 insight, +2 armor)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "Begins taking levels in Fatespinner, gaining the ability to manipulate probability.",
                "Its role shifts from a passive observer of fate to an active participant."
            ],
            sheet: {
                baseAtk: 9,
                grapple: 18,
                fullAttack: [
                    { name: "+1 Dagger", bonus: "+14", damage: "1d6+5", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Spin Fate", type: "Su", description: "Can spend fate points to add a +1d6 luck bonus to any d20 roll." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/cold iron and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 18, breakdown: "+5 HD, +5 Con, +2 Classes, +6 insight" },
                    ref: { bonus: 18, breakdown: "+5 HD, +5 Dex, +2 Classes, +6 insight" },
                    will: { bonus: 22, breakdown: "+10 HD, +3 Wis, +3 Classes, +6 insight" },
                },
                abilities: { str: 18, dex: 21, con: 20, int: 25, wis: 23, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 29, breakdown: "24 ranks" },
                    { name: "Diplomacy", bonus: 31, breakdown: "24 ranks" },
                    { name: "Knowledge (any two)", bonus: 31, breakdown: "24 ranks" },
                    { name: "Sense Motive", bonus: 30, breakdown: "24 ranks" },
                    { name: "Spellcraft", bonus: 31, breakdown: "24 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Quicken Spell-Like Ability (Divination)", description: "" },
                    { name: "Iron Will", description: "+2 to Will saves." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "35,000 gp",
                    items: [
                         { name: "Bracers of Armor +2", cost: "4,000 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Periapt of Wisdom +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Spinner of Destiny",
            class: "Seer 1 / Fatespinner 4",
            hitDice: "16d6+96 (HD) + 5d4+25 (Classes) = 184 hp",
            challengeRating: 21,
            armorClass: {
                total: 34,
                breakdown: "(-1 size, +5 Dex, +10 natural, +7 insight, +3 armor)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "Can now 'Seal Fate', ensuring a critical success or failure for any creature it can see.",
                "This powerful ability makes it a terrifying opponent, capable of turning victory into defeat with a single thought."
            ],
            sheet: {
                baseAtk: 10,
                grapple: 19,
                fullAttack: [
                    { name: "+1 Defending Dagger", bonus: "+15", damage: "1d6+5", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Seal Fate", type: "Su", description: "Can spend 3 fate points to make a d20 roll result of '1' or '20' for any creature in sight." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/cold iron and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "29" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+5 HD, +6 Con, +2 Classes, +7 insight" },
                    ref: { bonus: 20, breakdown: "+5 HD, +5 Dex, +3 Classes, +7 insight" },
                    will: { bonus: 24, breakdown: "+10 HD, +3 Wis, +4 Classes, +7 insight" },
                },
                abilities: { str: 18, dex: 21, con: 22, int: 25, wis: 25, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 32, breakdown: "26 ranks" },
                    { name: "Diplomacy", bonus: 34, breakdown: "26 ranks" },
                    { name: "Knowledge (any two)", bonus: 34, breakdown: "26 ranks" },
                    { name: "Sense Motive", bonus: 34, breakdown: "26 ranks" },
                    { name: "Spellcraft", bonus: 34, breakdown: "26 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Quicken Spell-Like Ability (Divination)", description: "" },
                    { name: "Iron Will", description: "+2 to Will saves." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "80,000 gp",
                    items: [
                         { name: "Bracers of Armor +3", cost: "9,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Periapt of Wisdom +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Tapestry Tender",
            class: "Seer 1 / Fatespinner 9",
            hitDice: "16d6+112 (HD) + 10d4+70 (Classes) = 240 hp",
            challengeRating: 26,
            armorClass: {
                total: 38,
                breakdown: "(-1 size, +5 Dex, +10 natural, +8 insight, +6 armor)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "Fatespinner prestige class allows the Norn to directly manipulate probability.",
                "It can force rerolls, add bonuses or penalties to rolls, and even declare a d20 roll to be a '20' or a '1'.",
                "Its focus shifts from passively seeing the future to actively shaping it."
            ],
            sheet: {
                baseAtk: 12,
                grapple: 21,
                fullAttack: [
                    { name: "+2 Defending Dagger", bonus: "+16/+11", damage: "1d6+6", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Spin Fate", type: "Su", description: "Can spend fate points to alter d20 rolls, grant actions, or impose penalties." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/cold iron and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "30" },
                ],
                saves: {
                    fort: { bonus: 22, breakdown: "+5 HD, +7 Con, +2 Classes, +8 insight" },
                    ref: { bonus: 22, breakdown: "+5 HD, +5 Dex, +4 Classes, +8 insight" },
                    will: { bonus: 27, breakdown: "+10 HD, +3 Wis, +6 Classes, +8 insight" },
                },
                abilities: { str: 18, dex: 21, con: 24, int: 25, wis: 27, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 35, breakdown: "28 ranks" },
                    { name: "Diplomacy", bonus: 37, breakdown: "28 ranks" },
                    { name: "Knowledge (any two)", bonus: 37, breakdown: "28 ranks" },
                    { name: "Sense Motive", bonus: 38, breakdown: "28 ranks" },
                    { name: "Spellcraft", bonus: 37, breakdown: "28 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Quicken Spell-Like Ability (Divination)", description: "" },
                    { name: "Iron Will", description: "+2 to Will saves." },
                    { name: "Heighten Spell", description: "Increase spell level to increase DC." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary (unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Bracers of Armor +6", cost: "36,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Periapt of Wisdom +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +4", cost: "16,000 gp", description: "" },
                         { name: "Ring of Protection +4", cost: "32,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Architect of Destiny",
            class: "Seer 1 / Fatespinner 10 / Loremaster 9",
            hitDice: "16d6+144 (HD) + 20d4+180 (Classes) = 392 hp",
            challengeRating: 36,
            armorClass: {
                total: 48,
                breakdown: "(-1 size, +5 Dex, +12 natural, +11 insight, +8 armor, +5 deflection)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "Loremaster levels add a vast repository of knowledge and secrets, including bonus feats and spells.",
                "The Norn now knows not just the future, but all the hidden knowledge of the past.",
                "It can pluck secrets from the ether and use them to ensure the timeline proceeds as it should."
            ],
            sheet: {
                baseAtk: 16,
                grapple: 25,
                fullAttack: [
                    { name: "+5 Defending Dagger", bonus: "+20/+15/+10", damage: "1d6+9", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Greater Lore", type: "Ex", description: "Can recall any piece of information as if taking 20 on a Knowledge check." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/cold iron and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "36" },
                ],
                saves: {
                    fort: { bonus: 30, breakdown: "+5 HD, +9 Con, +5 Classes, +11 insight" },
                    ref: { bonus: 30, breakdown: "+5 HD, +5 Dex, +9 Classes, +11 insight" },
                    will: { bonus: 37, breakdown: "+10 HD, +5 Wis, +11 Classes, +11 insight" },
                },
                abilities: { str: 18, dex: 21, con: 28, int: 29, wis: 32, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 47, breakdown: "38 ranks" },
                    { name: "Diplomacy", bonus: 49, breakdown: "38 ranks" },
                    { name: "Knowledge (any five)", bonus: 49, breakdown: "38 ranks" },
                    { name: "Sense Motive", bonus: 50, breakdown: "38 ranks" },
                    { name: "Spellcraft", bonus: 49, breakdown: "38 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Quicken Spell-Like Ability (Divination)", description: "" }, { name: "Iron Will", description: "" }, { name: "Heighten Spell", description: "" },
                    { name: "Epic Spellcasting", description: "Can cast epic spells." },
                    { name: "Automatic Quicken Spell", description: "Quicken 0-3rd level spells for free." },
                    { name: "Armor Skin", description: "+1 natural armor." },
                    { name: "Epic Will", description: "+4 to Will saves." },
                ],
                flaws: [],
                environment: "The Nexus of Time",
                organization: "Solitary (unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Bracers of Armor +8", cost: "64,000 gp", description: "" },
                         { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                         { name: "Tome of Clear Thought +3", cost: "82,500 gp", description: "" },
                         { name: "Tome of Understanding +3", cost: "82,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Fate-Ender",
            class: "Seer 1 / Fatespinner 10 / Loremaster 9 / Fate-Ender 10",
            hitDice: "16d6+192 (HD) + 30d4+360 (Classes) = 660 hp",
            challengeRating: 46,
            armorClass: {
                total: 65,
                breakdown: "(-1 size, +5 Dex, +15 natural, +15 insight, +10 armor, +11 deflection, +10 sacred)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "The Fate-Ender epic prestige class from Librim Eternia gives the Norn the ultimate power: the ability to cut a creature's thread of fate.",
                "It can now erase a creature from the timeline, making it so they never existed. This is a power it uses with extreme reluctance, as it can unravel causality.",
                "Its role has shifted from guardian of fate to its final arbiter, a necessary end to beings that threaten the fabric of reality itself."
            ],
            sheet: {
                baseAtk: 21,
                grapple: 30,
                fullAttack: [
                    { name: "Thread-Cutter, a +8 Dagger", bonus: "+28/+23/+18", damage: "1d6+12", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Cut the Thread", type: "Su", description: "1/day, as a full-round action, can target one non-deity. The target must make a Will save (DC 50) or be erased from existence." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/cold iron and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "40" },
                    { name: "Unraveled", type: "Ex", description: "Immune to any effect that would alter its personal history." },
                ],
                saves: {
                    fort: { bonus: 35, breakdown: "+5 HD, +12 Con, +7 Classes, +11 insight" },
                    ref: { bonus: 35, breakdown: "+5 HD, +5 Dex, +14 Classes, +11 insight" },
                    will: { bonus: 43, breakdown: "+10 HD, +5 Wis, +17 Classes, +11 insight" },
                },
                abilities: { str: 18, dex: 21, con: 34, int: 29, wis: 32, cha: 28 },
                skills: [
                    { name: "Concentration", bonus: 55, breakdown: "49 ranks" },
                    { name: "Diplomacy", bonus: 55, breakdown: "49 ranks" },
                    { name: "Knowledge (any five)", bonus: 55, breakdown: "49 ranks" },
                    { name: "Sense Motive", bonus: 56, breakdown: "49 ranks" },
                    { name: "Spellcraft", bonus: 55, breakdown: "49 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Quicken Spell-Like Ability (Divination)", description: "" }, { name: "Iron Will", description: "" }, { name: "Heighten Spell", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Automatic Quicken Spell", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Will", description: "" },
                    { name: "Epic Fortitude", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Automatic Metamagic Capacity", description: "" }
                ],
                 flaws: [],
                environment: "The Nexus of Time",
                organization: "Solitary (unique)",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "The Loom of Fate", cost: "Artifact", description: "Grants +12 to all mental stats, can cast Rewrite History once per month." },
                         { name: "The Threads of What-Will-Be", cost: "Artifact", description: "Grants +15 sacred bonus to AC and saves, constant Displacement and Blink." },
                         { name: "Atropos, the Final Cut", cost: "Artifact", description: "A +10 dagger that can use the 'Cut the Thread' ability at will." },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "The Final Moment",
            class: "Seer 1 / Fatespinner 10 / Loremaster 9 / Fate-Ender 10 / Epic Seer 10",
            hitDice: "16d6+224 (HD) + 40d4+480 (Classes) = 848 hp",
            challengeRating: 56,
            armorClass: {
                total: 80,
                breakdown: "(-1 size, +5 Dex, +18 natural, +18 insight, +12 armor, +12 deflection, +15 sacred)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+5 Dex)",
            },
            buildNotes: [
                "Having achieved apotheosis, the Norn is no longer a guardian of fate, but its ultimate expression. It does not see the future; it is the future.",
                "Its power transcends mortal understanding. It can unmake realities with a thought and weave new ones from the threads of what never was.",
                "It is a silent, melancholy god at the end of all timelines, its only companion the knowledge of how everything will end."
            ],
            sheet: {
                baseAtk: 26,
                grapple: 35,
                fullAttack: [
                    { name: "Atropos, the Final Cut", bonus: "+30", damage: "1d6+12", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Unravel Reality", type: "Su", description: "1/day, as a full-round action, can permanently erase a 1-mile cube of reality. This cannot be undone by anything short of a greater deity's intervention."}
                ],
                specialQualities: [
                    { name: "One with Causality", type: "Ex", description: "Immune to all paradoxes and time-altering effects. Exists outside of the timeline and cannot be targeted by effects that manipulate the past or future." },
                ],
                saves: {
                    fort: { bonus: 50, breakdown: "+5 HD, +14 Con, +13 Class, +18 insight" },
                    ref: { bonus: 50, breakdown: "+5 HD, +5 Dex, +22 Class, +18 insight" },
                    will: { bonus: 58, breakdown: "+10 HD, +7 Wis, +23 Class, +18 insight" },
                },
                abilities: { str: 18, dex: 21, con: 38, int: 35, wis: 36, cha: 32 },
                skills: [
                    { name: "Concentration", bonus: 71, breakdown: "57 ranks" },
                    { name: "Diplomacy", bonus: 70, breakdown: "57 ranks" },
                    { name: "Knowledge (any ten)", bonus: 70, breakdown: "57 ranks" },
                    { name: "Sense Motive", bonus: 71, breakdown: "57 ranks" },
                    { name: "Spellcraft", bonus: 70, breakdown: "57 ranks" },
                ],
                feats: [
                    { name: "Combat Casting", description: "" }, { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Quicken Spell-Like Ability (Divination)", description: "" }, { name: "Iron Will", description: "" }, { name: "Heighten Spell", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Automatic Quicken Spell", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Will", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Automatic Metamagic Capacity", description: "" },
                    { name: "Great Intelligence", description: "" }, { name: "Great Wisdom", description: "" }, { name: "Perfect Health", description: "" }, { name: "Ignore Material Components", description: "" }
                ],
                 flaws: [
                     { name: "Duty Bound", description: roleplayGuide[1] },
                 ],
                environment: "The end of all things",
                organization: "Unique",
                alignment: "True Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Loom of Fate", cost: "Artifact", description: "" },
                         { name: "The Threads of What-Will-Be", cost: "Artifact", description: "" },
                         { name: "Atropos, the Final Cut", cost: "Artifact", description: "" },
                    ]
                }
            }
        },
    ]
};