// data/monsters/phane.ts
import { Monster } from '../../types';

export const phane: Monster = {
    name: "Phane, The Timeless Hunter",
    description: "Phanes are alien predators that exist outside of the normal flow of time. They hunt mortals not for sustenance, but for some unknowable purpose, appearing and disappearing from the timeline to strike at their prey's weakest moments.",
    roleplayGuide: [
        "You are not a creature of malice, but of alien instinct. Your hunt is a fundamental drive, like a shark's need to swim.",
        "You perceive time as a landscape. You see a mortal's life not as a sequence, but as a single, static object—a river from birth to death that you can step into at any point.",
        "Your 'sympathy' is that of a confused and powerful entity. You have been trapped in this linear reality, and your 'hunts' are attempts to understand or break free from the temporal prison you find yourself in.",
        "You might be bargained with. If a mortal can offer you something you cannot get by hunting—a new perspective, a piece of knowledge about your origins, or a path home—you may cease your hunt."
    ],
    builds: [
        {
            level: 1,
            title: "Temporal Anomaly",
            class: "Scout 1",
            hitDice: "17d8+85 (HD) + 1d8+5 (Scout) = 176 hp",
            challengeRating: 18,
            armorClass: {
                total: 30,
                breakdown: "(+4 Dex, +16 natural)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The Phane is a CR 25 creature. Its HD is reduced from 35 to 17 to reach the CR 17 baseline.",
                "Scout is a perfect class, enhancing its mobility and granting skirmish damage.",
                "Its primary strength is its ability to manipulate time, which is represented by its spell-like abilities."
            ],
            sheet: {
                baseAtk: 12,
                grapple: 21,
                fullAttack: [
                    { name: "2 Claws", bonus: "+18", damage: "2d6+5", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Skirmish", type: "Ex", description: "+1d6 damage and +1 competence bonus to AC when moving 10 ft. or more." },
                    { name: "Temporal Disruption", type: "Su", description: "3/day, as a touch attack, target must make a DC 25 Fortitude save or be shifted 1d4 rounds into the future." },
                    { name: "Spell-Like Abilities", type: "Sp", description: "At will—haste, slow. 3/day—time stop." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and chaotic" },
                    { name: "Spell Resistance", type: "Ex", description: "30" },
                    { name: "Timeless", type: "Ex", description: "Immune to spells and effects that manipulate time." },
                ],
                saves: {
                    fort: { bonus: 18, breakdown: "+10 HD, +5 Con, +3 Scout" },
                    ref: { bonus: 16, breakdown: "+10 HD, +4 Dex, +2 Scout" },
                    will: { bonus: 14, breakdown: "+10 HD, +4 Wis" },
                },
                abilities: { str: 20, dex: 19, con: 21, int: 18, wis: 19, cha: 22 },
                skills: [
                    { name: "Hide", bonus: 26, breakdown: "21 ranks, +5 Dex" },
                    { name: "Listen", bonus: 26, breakdown: "22 ranks, +4 Wis" },
                    { name: "Move Silently", bonus: 26, breakdown: "21 ranks, +5 Dex" },
                    { name: "Spot", bonus: 26, breakdown: "22 ranks, +4 Wis" },
                    { name: "Tumble", bonus: 26, breakdown: "21 ranks, +5 Dex" },
                ],
                feats: [
                    { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Spring Attack", description: "" },
                    { name: "Improved Initiative", description: "" }, { name: "Weapon Finesse", description: "Use Dex for melee attack rolls." },
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
            title: "Echo in Time",
            class: "Scout 3",
            hitDice: "17d8+102 (HD) + 3d8+15 (Scout) = 208 hp",
            challengeRating: 20,
            armorClass: {
                total: 32,
                breakdown: "(+4 Dex, +16 natural, +2 skirmish)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains increased skirmish damage and Battle Fortitude, adding its Constitution bonus to Fortitude saves.",
                "Its hit-and-run tactics become more effective."
            ],
            sheet: {
                baseAtk: 14,
                grapple: 23,
                fullAttack: [
                    { name: "2 Claws", bonus: "+20", damage: "2d6+5 plus 2d6 skirmish", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Skirmish", type: "Ex", description: "+2d6 damage and +2 competence bonus to AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and chaotic" },
                    { name: "Spell Resistance", type: "Ex", description: "30" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+10 HD, +6 Con, +4 Scout" },
                    ref: { bonus: 17, breakdown: "+10 HD, +4 Dex, +3 Scout" },
                    will: { bonus: 15, breakdown: "+10 HD, +4 Wis, +1 Scout" },
                },
                abilities: { str: 20, dex: 19, con: 23, int: 18, wis: 19, cha: 22 },
                skills: [
                    { name: "Hide", bonus: 29, breakdown: "24 ranks" },
                    { name: "Listen", bonus: 29, breakdown: "25 ranks" },
                    { name: "Move Silently", bonus: 29, breakdown: "24 ranks" },
                    { name: "Spot", bonus: 29, breakdown: "25 ranks" },
                    { name: "Tumble", bonus: 29, breakdown: "24 ranks" },
                ],
                feats: [
                    { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Spring Attack", description: "" },
                    { name: "Improved Initiative", description: "" }, { name: "Weapon Finesse", description: "" },
                    { name: "Bounding Assault", description: "Move before and after a standard action attack."}
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "40,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +2", cost: "16,000 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Temporal Predator",
            class: "Scout 5",
            hitDice: "17d8+119 (HD) + 5d8+25 (Scout) = 240 hp",
            challengeRating: 22,
            armorClass: {
                total: 33,
                breakdown: "(+4 Dex, +16 natural, +3 skirmish)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains Uncanny Dodge and more skirmish damage.",
                "Now a truly elusive and deadly hunter, almost impossible to pin down."
            ],
            sheet: {
                baseAtk: 16,
                grapple: 25,
                fullAttack: [
                    { name: "2 Claws", bonus: "+22", damage: "2d6+5 plus 3d6 skirmish", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Skirmish", type: "Ex", description: "+3d6 damage and +3 competence bonus to AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and chaotic" },
                    { name: "Spell Resistance", type: "Ex", description: "30" },
                    { name: "Uncanny Dodge", type: "Ex", description: "Cannot be caught flat-footed."}
                ],
                saves: {
                    fort: { bonus: 21, breakdown: "+10 HD, +7 Con, +4 Scout" },
                    ref: { bonus: 18, breakdown: "+10 HD, +4 Dex, +4 Scout" },
                    will: { bonus: 16, breakdown: "+10 HD, +4 Wis, +2 Scout" },
                },
                abilities: { str: 20, dex: 19, con: 25, int: 18, wis: 19, cha: 22 },
                skills: [
                    { name: "Hide", bonus: 32, breakdown: "27 ranks" },
                    { name: "Listen", bonus: 32, breakdown: "28 ranks" },
                    { name: "Move Silently", bonus: 32, breakdown: "27 ranks" },
                    { name: "Spot", bonus: 32, breakdown: "28 ranks" },
                    { name: "Tumble", bonus: 32, breakdown: "27 ranks" },
                ],
                feats: [
                    { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Spring Attack", description: "" },
                    { name: "Improved Initiative", description: "" }, { name: "Weapon Finesse", description: "" },
                    { name: "Bounding Assault", description: "Move before and after a standard action attack."}
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "90,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Chronal Predator",
            class: "Scout 10",
            hitDice: "17d8+119 (HD) + 10d8+70 (Scout) = 310 hp",
            challengeRating: 27,
            armorClass: {
                total: 40,
                breakdown: "(+4 Dex, +16 natural, +6 armor, +4 deflection)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Skirmish damage increases significantly, making it a deadly hit-and-run attacker.",
                "Gains Evasion and Uncanny Dodge, enhancing its survivability.",
                "Feats like Bounding Assault allow it to move, attack, and move away in a single action."
            ],
            sheet: {
                baseAtk: 19,
                grapple: 28,
                fullAttack: [
                    { name: "2 Claws", bonus: "+26/+21/+16/+11", damage: "2d6+5 plus 3d6 skirmish", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Skirmish", type: "Ex", description: "+3d6 damage and +3 AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and chaotic" },
                    { name: "Spell Resistance", type: "Ex", description: "30" },
                    { name: "Evasion", type: "Ex", description: "Take no damage on successful Reflex saves." }
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+10 HD, +7 Con, +7 Scout" },
                    ref: { bonus: 23, breakdown: "+10 HD, +4 Dex, +9 Scout" },
                    will: { bonus: 17, breakdown: "+10 HD, +4 Wis, +3 Scout" },
                },
                abilities: { str: 20, dex: 19, con: 25, int: 18, wis: 19, cha: 22 },
                skills: [
                    { name: "Hide", bonus: 35, breakdown: "30 ranks" },
                    { name: "Listen", bonus: 35, breakdown: "31 ranks" },
                    { name: "Move Silently", bonus: 35, breakdown: "30 ranks" },
                    { name: "Spot", bonus: 35, breakdown: "31 ranks" },
                    { name: "Tumble", bonus: 35, breakdown: "30 ranks" },
                ],
                feats: [
                    { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Spring Attack", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Finesse", description: "" },
                    { name: "Bounding Assault", description: "Move, attack, and move again." },
                    { name: "Rapid Blitz", description: "Make two attacks during Bounding Assault." }
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
                         { name: "Bracers of Armor +6", cost: "36,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Ring of Protection +4", cost: "32,000 gp", description: "" },
                         { name: "Cloak of Resistance +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Hunter of Moments",
            class: "Scout 20",
            hitDice: "17d8+153 (HD) + 20d8+180 (Scout) = 500 hp",
            challengeRating: 37,
            armorClass: {
                total: 50,
                breakdown: "(+4 Dex, +18 natural, +8 armor, +6 deflection, +4 insight)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Becomes a master of skirmish combat, its movement a blur of deadly attacks.",
                "Can now 'Flee the Scene', effectively teleporting away after an attack.",
                "Epic feats enhance its speed and killing power, making it a ghost on the battlefield."
            ],
            sheet: {
                baseAtk: 27,
                grapple: 36,
                fullAttack: [
                    { name: "2 Claws", bonus: "+36/+31/+26/+21", damage: "2d6+5 plus 5d6 skirmish", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Skirmish", type: "Ex", description: "+5d6 damage and +5 AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/epic and chaotic" },
                    { name: "Spell Resistance", type: "Ex", description: "37" },
                ],
                saves: {
                    fort: { bonus: 32, breakdown: "+10 HD, +9 Con, +13 Scout" },
                    ref: { bonus: 29, breakdown: "+10 HD, +4 Dex, +15 Scout" },
                    will: { bonus: 23, breakdown: "+10 HD, +4 Wis, +9 Scout" },
                },
                abilities: { str: 20, dex: 19, con: 28, int: 18, wis: 19, cha: 22 },
                skills: [
                    { name: "Hide", bonus: 45, breakdown: "40 ranks" },
                    { name: "Listen", bonus: 45, breakdown: "41 ranks" },
                    { name: "Move Silently", bonus: 45, breakdown: "40 ranks" },
                    { name: "Spot", bonus: 45, breakdown: "41 ranks" },
                    { name: "Tumble", bonus: 45, breakdown: "40 ranks" },
                ],
                feats: [
                    { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Spring Attack", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Finesse", description: "" }, { name: "Bounding Assault", description: "" }, { name: "Rapid Blitz", description: "" },
                    { name: "Epic Dodge", description: "Once per round, an attack that hits becomes a miss." },
                    { name: "Blinding Speed", description: "Increase speed by 30ft, gain concealment." },
                    { name: "Armor Skin", description: "+1 natural armor." },
                    { name: "Epic Toughness", description: "" },
                ],
                flaws: [],
                environment: "The currents of time",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +5", cost: "100,000 gp", description: "" },
                         { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                         { name: "Bracers of Armor +8", cost: "64,000 gp", description: "" },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                         { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Timeless Hunter",
            class: "Scout 20 / Timeless Hunter 10",
            hitDice: "17d8+187 (HD) + 30d8+330 (Scout/TH) = 750 hp",
            challengeRating: 47,
            armorClass: {
                total: 65,
                breakdown: "(+4 Dex, +20 natural, +10 armor, +10 deflection, +11 insight)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The Timeless Hunter prestige class from Librim Eternia makes the Phane a true master of time.",
                "It can now exist in multiple points in time at once, attacking its prey from the past, present, and future simultaneously.",
                "It no longer just visits timelines; it can create small, temporary pockets of time to trap its foes or prepare an ambush."
            ],
            sheet: {
                baseAtk: 37,
                grapple: 46,
                fullAttack: [
                    { name: "2 Temporal Claws", bonus: "+50", damage: "2d6+5 plus 5d6 skirmish and temporal disruption", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Temporal Flurry", type: "Su", description: "As a full-round action, attack a single target. The target is hit by three versions of you from different times, taking damage from three full attacks." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/epic and chaotic" },
                    { name: "Spell Resistance", type: "Ex", description: "47" },
                    { name: "Acausal", type: "Ex", description: "Immune to paradox and effects that would alter its past." },
                ],
                saves: {
                    fort: { bonus: 42, breakdown: "+10 HD, +11 Con, +21 Classes" },
                    ref: { bonus: 39, breakdown: "+10 HD, +4 Dex, +25 Classes" },
                    will: { bonus: 33, breakdown: "+10 HD, +4 Wis, +19 Classes" },
                },
                abilities: { str: 20, dex: 19, con: 32, int: 18, wis: 19, cha: 26 },
                skills: [
                    { name: "Hide", bonus: 58, breakdown: "53 ranks" },
                    { name: "Listen", bonus: 58, breakdown: "54 ranks" },
                    { name: "Move Silently", bonus: 58, breakdown: "53 ranks" },
                    { name: "Spot", bonus: 58, breakdown: "54 ranks" },
                    { name: "Tumble", bonus: 58, breakdown: "53 ranks" },
                ],
                feats: [
                    { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Spring Attack", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Finesse", description: "" }, { name: "Bounding Assault", description: "" }, { name: "Rapid Blitz", description: "" }, { name: "Epic Dodge", description: "" }, { name: "Blinding Speed", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" },
                    { name: "Self-Concealment", description: "Total concealment 10 rounds/day." }, { name: "Epic Fortitude", description: "" }, { name: "Epic Reflexes", description: "" }
                ],
                flaws: [],
                environment: "The Untime",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +8", cost: "256,000 gp", description: "" },
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                         { name: "Bracers of Armor +10", cost: "100,000 gp", description: "" },
                         { name: "Ring of Protection +10", cost: "200,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "Paradox Incarnate",
            class: "Scout 20 / Timeless Hunter 10 / Epic Scout 10",
            hitDice: "17d8+221 (HD) + 40d8+520 (Scout/TH) = 1050 hp",
            challengeRating: 57,
            armorClass: {
                total: 80,
                breakdown: "(+4 Dex, +22 natural, +12 armor, +12 deflection, +15 insight, +15 sacred)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The Phane has become a living paradox, a creature whose existence is a knot in the timeline.",
                "It no longer hunts for instinct or to escape; it hunts to stabilize its own fractured existence, trimming away timelines that threaten to unravel it.",
                "It is a necessary evil of the cosmos, a predator that keeps the infinitely branching possibilities of time from collapsing into chaos."
            ],
            sheet: {
                baseAtk: 47,
                grapple: 56,
                fullAttack: [
                    { name: "2 Paradox Claws", bonus: "+65", damage: "2d6+5 plus 7d6 skirmish and reality erasure", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Unmake Timeline", type: "Su", description: "1/day, can touch a creature and force a DC 60 Will save. On a failure, the creature and its entire personal timeline are erased from reality, leaving no memory of their existence."}
                ],
                specialQualities: [
                    { name: "Lord of Time", type: "Ex", description: "Immune to all time-related effects and cannot be perceived by non-deific divination." },
                ],
                saves: {
                    fort: { bonus: 52, breakdown: "+10 HD, +13 Con, +29 Classes" },
                    ref: { bonus: 49, breakdown: "+10 HD, +4 Dex, +35 Classes" },
                    will: { bonus: 43, breakdown: "+10 HD, +4 Wis, +29 Classes" },
                },
                abilities: { str: 20, dex: 19, con: 36, int: 18, wis: 19, cha: 30 },
                skills: [
                    { name: "Hide", bonus: 70, breakdown: "65 ranks" },
                    { name: "Listen", bonus: 70, breakdown: "66 ranks" },
                    { name: "Move Silently", bonus: 70, breakdown: "65 ranks" },
                    { name: "Spot", bonus: 70, breakdown: "66 ranks" },
                    { name: "Tumble", bonus: 70, breakdown: "65 ranks" },
                ],
                feats: [
                    { name: "Dodge", description: "" }, { name: "Mobility", description: "" }, { name: "Spring Attack", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Finesse", description: "" }, { name: "Bounding Assault", description: "" }, { name: "Rapid Blitz", description: "" }, { name: "Epic Dodge", description: "" }, { name: "Blinding Speed", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Self-Concealment", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Reflexes", description: "" },
                    { name: "Great Charisma", description: "" }, { name: "Epic Speed", description: "Speed becomes supernatural." }, { name: "Perfect Health", description: "" }
                ],
                flaws: [],
                environment: "The space between seconds",
                organization: "Unique",
                alignment: "Lawful Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Paradox Engine", cost: "Artifact", description: "+12 to Dex and Int, extra standard action per round." },
                         { name: "The Moment's Edge", cost: "Artifact", description: "Grants +12 to physical stats, its claws strike in the past, present and future." },
                         { name: "Shroud of a Billion Timelines", cost: "Artifact", description: "+15 insight bonus to AC and saves, grants total concealment." },
                    ]
                }
            }
        },
    ]
};