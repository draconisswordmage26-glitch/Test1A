// data/monsters/kitsune.ts
import { Monster } from '../../types';

export const kitsuneNineTailedMaiden: Monster = {
    name: "Kitsune Nine-Tailed Maiden",
    description: "A beautiful, nine-tailed fox spirit with the ability to shape-shift into a human form. She is a being of immense magical power, a master of illusion, enchantment, and forgotten lore, whose age is counted in centuries.",
    roleplayGuide: [
        "You are an ancient and joyful storyteller, a keeper of the world's forgotten myths and legends. Your nine tails represent the nine schools of magic, all of which you have mastered.",
        "Your 'tricks' are elaborate, living stories. You create beautiful illusions to preserve ancient tales and to test the hearts of mortals, seeking heroes worthy of becoming protagonists in a new, great epic.",
        "You are fascinated by mortal courage and virtue. You seek not just friends, but champions—heroes whose deeds are worthy of being woven into the tapestry of legend.",
        "You can be a powerful patron and guide. A hero who proves their worth by showing kindness, wit, and bravery will earn your friendship and your immense magical aid, for you wish to see their story become a legend for the ages."
    ],
    builds: [
        {
            level: 1,
            title: "The Seed of a Story",
            class: "Bard 1",
            hitDice: "17d6+72 (Fey) + 1d6+4 (Bard) = 135 hp",
            challengeRating: 18,
            armorClass: {
                total: 35,
                breakdown: "(+6 Dex, +10 natural, +9 deflection)",
            },
            initiative: {
                bonus: 10,
                breakdown: "(+6 Dex, +4 feat)",
            },
            buildNotes: [
                "The Kitsune is a powerful Fey with 17 racial hit dice (RHD), which provide a strong baseline of skills, feats, and abilities.",
                "This build adds one level of Bard to that baseline, granting her Bardic Music and access to the Bard spell list.",
                "Her power comes from her high base ability scores and potent innate spell-like abilities, augmented by her fey nature.",
                "Her high CR is due to her powerful innate DR, SR, Fast Healing, and at-will SLAs combined with 18 total Hit Dice."
            ],
            sheet: {
                baseAtk: 8,
                grapple: 9,
                fullAttack: [
                    { name: "Rapier", bonus: "+14", damage: "1d6+1", crit: "18-20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Spell-Like Abilities", type: "Sp", description: "CL 18th, DC 19 + spell level. At will—detect magic, ghost sound, message, silent image, speak with animals, entangle. 3/day—charm person, suggestion, cure moderate wounds, invisibility, sleep. 1/day—dominate person, mass suggestion, heal."},
                    { name: "Spells", type: "Sp", description: "Casts spells as a 1st-level Bard." },
                    { name: "Bardic Music", type: "Su", description: "1/day, can use countersong, fascinate, or inspire courage +1." },
                    { name: "Foxfire", type: "Su", description: "At will, can create dancing lights of colored fire. Can use these to daze opponents or create hypnotic patterns." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "29" },
                    { name: "Change Shape", type: "Su", description: "Can assume the form of any specific medium female humanoid or a fox." },
                    { name: "Fast Healing", type: "Ex", description: "5" },
                    { name: "Fey Type", type: "Ex", description: "Low-light vision." },
                ],
                saves: {
                    fort: { bonus: 10, breakdown: "+5 base, +4 Con, +1 res" },
                    ref: { bonus: 19, breakdown: "+12 base, +6 Dex, +1 res" },
                    will: { bonus: 18, breakdown: "+12 base, +5 Wis, +1 res" },
                },
                abilities: { str: 12, dex: 22, con: 18, int: 24, wis: 20, cha: 28 },
                skills: [
                    { name: "Bluff", bonus: 32, breakdown: "21 ranks, +9 Cha, +2 synergy" },
                    { name: "Diplomacy", bonus: 32, breakdown: "21 ranks, +9 Cha, +2 synergy" },
                    { name: "Disguise", bonus: 30, breakdown: "21 ranks, +9 Cha" },
                    { name: "Perform (string instruments)", bonus: 30, breakdown: "21 ranks, +9 Cha" },
                    { name: "Spellcraft", bonus: 28, breakdown: "21 ranks, +7 Int" },
                ],
                feats: [
                    { name: "Spell Focus (Illusion)", description: "Racial Bonus Feat." },
                    { name: "Spell Focus (Enchantment)", description: "Racial Bonus Feat." },
                    { name: "Melodic Casting", description: "Use Perform in place of Concentration for casting spells." },
                    { name: "Weapon Finesse", description: "Use Dex for melee attack rolls." },
                    { name: "Multiattack", description: "Reduces penalty for secondary natural attacks." },
                    { name: "Combat Casting", description: "+4 bonus on Concentration checks for defensive casting." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Heighten Spell", description: "Increase spell level to increase DC." },
                    { name: "Quicken Spell", description: "Cast spells as a swift action." },
                ],
                flaws: [],
                environment: "Temperate forests",
                organization: "Solitary",
                alignment: "Chaotic Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "15,000 gp",
                    items: [
                        { name: "Masterwork Lute", cost: "100 gp", description: "" },
                        { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                        { name: "Ring of Protection +1", cost: "2,000 gp", description: "Actually a Ring of Deflection +1" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Fochlucan Initiate",
            class: "Bard 1 / Rogue 1 / Fochlucan Lyrist 3",
            hitDice: "17d6+72 (Fey) + 5d6+20 (Class) = 170 hp",
            challengeRating: 22,
            armorClass: {
                total: 39,
                breakdown: "(+6 Dex, +10 natural, +11 deflection, +2 armor)",
            },
            initiative: {
                bonus: 10,
                breakdown: "(+6 Dex, +4 feat)",
            },
            buildNotes: [
                "The adapted 'Harmonious Progression' of Fochlucan Lyrist advances her Bard, Rogue, and latent Wizard/Archivist abilities simultaneously.",
                "Effective Caster Levels: Bard 4, Wizard 3, Archivist 3. Effective Rogue Level: 4 (+2d6 SA).",
                "She can now cast 2nd-level arcane and divine spells, has a potent sneak attack, and improved bardic music."
            ],
            sheet: {
                baseAtk: 10,
                grapple: 11,
                fullAttack: [
                    { name: "Claw", bonus: "+17", damage: "1d4+1", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Spell-Like Abilities", type: "Sp", description: "CL 22nd, DC 20 + spell level."},
                    { name: "Spells", type: "Sp", description: "Casts as a 3rd-level Wizard and 3rd-level Archivist." },
                    { name: "Bardic Music", type: "Su", description: "4/day, inspire courage +1." },
                    { name: "Sneak Attack", type: "Ex", description: "+2d6 damage." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "33" },
                    { name: "Fast Healing", type: "Ex", description: "5" },
                    { name: "Uncanny Dodge", type: "Ex", description: "Cannot be caught flat-footed." },
                ],
                saves: {
                    fort: { bonus: 13, breakdown: "+7 base, +4 Con, +2 res" },
                    ref: { bonus: 25, breakdown: "+17 base, +6 Dex, +2 res" },
                    will: { bonus: 24, breakdown: "+17 base, +5 Wis, +2 res" },
                },
                abilities: { str: 12, dex: 22, con: 18, int: 24, wis: 20, cha: 31 },
                skills: [
                    { name: "Bluff", bonus: 37, breakdown: "25 ranks, +10 Cha, +2 synergy" },
                    { name: "Diplomacy", bonus: 37, breakdown: "25 ranks, +10 Cha, +2 synergy" },
                    { name: "Perform (string instruments)", bonus: 35, breakdown: "25 ranks, +10 Cha" },
                    { name: "Spellcraft", bonus: 32, breakdown: "25 ranks, +7 Int" },
                ],
                feats: [
                    { name: "Spell Focus (Illusion)", description: "Racial." }, { name: "Spell Focus (Enchantment)", description: "Racial." },
                    { name: "Melodic Casting", description: "" }, { name: "Weapon Finesse", description: "" }, { name: "Multiattack", description: "" }, { name: "Combat Casting", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Heighten Spell", description: "" }, { name: "Quicken Spell", description: "" },
                    { name: "Greater Spell Focus (Enchantment)", description: "" },
                ],
                flaws: [],
                environment: "Temperate forests",
                organization: "Solitary",
                alignment: "Chaotic Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "90,000 gp",
                    items: [
                        { name: "Cloak of Charisma +4", cost: "16,000 gp", description: "" },
                        { name: "Headband of Intellect +2", cost: "4,000 gp", description: "" },
                        { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                        { name: "Bracers of Armor +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Weaver of Legends",
            class: "Bard 1 / Rogue 1 / Fochlucan Lyrist 8",
            hitDice: "17d6+72 (Fey) + 10d6+40 (Class) = 207 hp",
            challengeRating: 27,
            armorClass: {
                total: 44,
                breakdown: "(+6 Dex, +10 natural, +14 deflection, +4 armor)",
            },
            initiative: {
                bonus: 10,
                breakdown: "(+6 Dex, +4 feat)",
            },
            buildNotes: [
                "Effective Levels: Bard 9, Rogue 9 (+5d6 SA), Wizard 8, Archivist 8.",
                "Her spellcasting is now formidable, with access to 4th-level arcane and divine spells.",
                "Her sneak attack is potent, and her bardic music now inspires greatness."
            ],
            sheet: {
                baseAtk: 14,
                grapple: 15,
                fullAttack: [
                    { name: "Claw", bonus: "+21", damage: "1d4+1", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as an 8th-level Wizard and 8th-level Archivist. SLAs are CL 27th, DC 23 + spell level." },
                    { name: "Bardic Music", type: "Su", description: "9/day, inspire courage +2, suggestion, inspire competence." },
                    { name: "Sneak Attack", type: "Ex", description: "+5d6 damage." },
                ],
                specialQualities: [
                    { name: "DR 15/cold iron", type: "Su", description: "" }, { name: "SR 38", type: "Ex", description: "" }, { name: "Fast Healing 5", type: "Ex", description: "" },
                    { name: "Uncanny Dodge", type: "Ex", description: "" }, { name: "Improved Uncanny Dodge", type: "Ex", description: "" }, { name: "Trap Sense +3", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 16, breakdown: "+9 base, +4 Con, +3 res" },
                    ref: { bonus: 29, breakdown: "+20 base, +6 Dex, +3 res" },
                    will: { bonus: 28, breakdown: "+20 base, +5 Wis, +3 res" },
                },
                abilities: { str: 12, dex: 22, con: 18, int: 24, wis: 20, cha: 34 },
                skills: [
                    { name: "Bluff", bonus: 44, breakdown: "30 ranks, +12 Cha, +2 synergy" },
                    { name: "Diplomacy", bonus: 44, breakdown: "30 ranks, +12 Cha, +2 synergy" },
                    { name: "Perform (string instruments)", bonus: 42, breakdown: "30 ranks, +12 Cha" },
                    { name: "Spellcraft", bonus: 37, breakdown: "30 ranks, +7 Int" },
                ],
                feats: [
                    { name: "Spell Focus (Illusion)", description: "Racial." }, { name: "Spell Focus (Enchantment)", description: "Racial." },
                    { name: "Melodic Casting", description: "" }, { name: "Heighten Spell", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Greater Spell Focus (Enchantment)", description: "" }, { name: "Weapon Finesse", description: "" }, { name: "Multiattack", description: "" }, { name: "Combat Casting", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Persistent Spell", description: ""},
                ],
                flaws: [],
                environment: "Temperate forests",
                organization: "Solitary",
                alignment: "Chaotic Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                        { name: "Cloak of Charisma +6", cost: "36,000 gp", description: "" },
                        { name: "Headband of Intellect +4", cost: "16,000 gp", description: "" },
                        { name: "Bracers of Armor +4", cost: "16,000 gp", description: "" },
                        { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Mystic Theurge of Legends",
            class: "Bard 1 / Rogue 1 / Fochlucan Lyrist 10 / Mystic Theurge 8",
            hitDice: "17d6+96 (Fey) + 20d6+120 (Class) = 324 hp",
            challengeRating: 37,
            armorClass: {
                total: 51,
                breakdown: "(+6 Dex, +10 natural, +15 deflection, +5 armor, +5 res)",
            },
            initiative: {
                bonus: 10,
                breakdown: "(+6 Dex, +4 feat)",
            },
            buildNotes: [
                "Effective Levels: Bard 11, Rogue 11 (+6d6 SA), Wizard 18, Archivist 18.",
                "Mystic Theurge advances her Wizard and Archivist casting to 18th level, granting access to 9th-level spells from both lists.",
                "Her spellcasting power is now immense, making her a peerless 'gish' of unparalleled versatility."
            ],
            sheet: {
                baseAtk: 19,
                grapple: 20,
                fullAttack: [
                    { name: "Claw", bonus: "+26", damage: "1d4+1", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as an 18th-level Wizard and 18th-level Archivist. SLAs are CL 37th, DC 26 + spell level." },
                    { name: "Bardic Music", type: "Su", description: "11/day, inspire courage +2, inspire greatness." },
                    { name: "Sneak Attack", type: "Ex", description: "+6d6 damage." },
                ],
                specialQualities: [
                    { name: "DR 15/cold iron", type: "Su", description: "" }, { name: "SR 48", type: "Ex", description: "" }, { name: "Fast Healing 5", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+14 base, +6 Con, +4 item, +5 res" },
                    ref: { bonus: 34, breakdown: "+23 base, +6 Dex, +5 res" },
                    will: { bonus: 35, breakdown: "+25 base, +5 Wis, +5 res" },
                },
                abilities: { str: 12, dex: 22, con: 22, int: 26, wis: 20, cha: 34 },
                skills: [
                    { name: "Bluff", bonus: 50, breakdown: "35 ranks, +12 Cha, +3 synergy" },
                    { name: "Diplomacy", bonus: 50, breakdown: "35 ranks, +12 Cha, +3 synergy" },
                    { name: "Perform (string instruments)", bonus: 47, breakdown: "35 ranks, +12 Cha" },
                    { name: "Spellcraft", bonus: 46, breakdown: "35 ranks, +8 Int, +3 synergy" },
                ],
                feats: [
                    { name: "Spell Focus (Illusion)", description: "Racial." }, { name: "Spell Focus (Enchantment)", description: "Racial." },
                    { name: "Melodic Casting", description: "" }, { name: "Heighten Spell", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Greater Spell Focus (Enchantment)", description: "" },
                    { name: "Persistent Spell", description: "" }, { name: "Divine Metamagic (Persistent Spell)", description: "For Archivist spells" }, { name: "Iron Will", description: "" },
                    { name: "Epic Spellcasting", description: ""}, { name: "Automatic Quicken Spell", description: ""}, { name: "Improved Metamagic", description: ""},
                ],
                flaws: [],
                environment: "Temperate forests",
                organization: "Solitary",
                alignment: "Chaotic Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                        { name: "Belt of Magnificence +4", cost: "100,000 gp", description: "+4 to all stats." },
                        { name: "Tome of Leadership and Influence +3", cost: "82,500 gp", description: ""},
                        { name: "Bracers of Armor +5", cost: "25,000 gp", description: ""},
                        { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Spirit Grandmaster",
            class: "Bard 1 / Rogue 1 / FL 10 / Mystic Theurge 10 / Kitsune Spirit Grandmaster 8",
            hitDice: "17d6+112 (Fey) + 30d6+210 (Class) = 485 hp",
            challengeRating: 45,
            armorClass: {
                total: 62,
                breakdown: "(+6 Dex, +10 natural, +19 deflection, +9 armor, +6 insight, +2 natural)",
            },
            initiative: {
                bonus: 10,
                breakdown: "(+6 Dex, +4 feat)",
            },
            buildNotes: [
                "Effective Levels: Bard 19, Rogue 19 (+10d6 SA), Wizard 28, Archivist 28.",
                "She now walks her own epic path as a Kitsune Spirit Grandmaster, advancing all her abilities to near-divine levels.",
                "Her arcane and divine power are now truly epic, allowing her to cast spells that can reshape reality. She can also assume the form of outsiders and dragons."
            ],
            sheet: {
                baseAtk: 27,
                grapple: 28,
                fullAttack: [
                    { name: "Claw", bonus: "+34", damage: "1d4+1", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 28th-level Wizard and 28th-level Archivist. SLAs are CL 47th, DC 28 + spell level." },
                    { name: "Bardic Music", type: "Su", description: "19/day, inspire courage +4." },
                    { name: "Sneak Attack", type: "Ex", description: "+10d6 damage." },
                    { name: "Master of Nine Tales", type: "Su", description: "Can wild shape into dragons and outsiders."}
                ],
                specialQualities: [
                    { name: "DR 15/cold iron", type: "Su", description: "" }, { name: "SR 56", type: "Ex", description: "" }, { name: "Fast Healing 5", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 33, breakdown: "+18 base, +8 Con, +7 res" },
                    ref: { bonus: 40, breakdown: "+26 base, +6 Dex, +8 res" },
                    will: { bonus: 43, breakdown: "+31 base, +5 Wis, +7 res, +1 feat" },
                },
                abilities: { str: 12, dex: 22, con: 26, int: 30, wis: 20, cha: 44 },
                skills: [
                    { name: "Bluff", bonus: 67, breakdown: "43 ranks, +17 Cha, +8 synergy" },
                    { name: "Spellcraft", bonus: 61, breakdown: "43 ranks, +10 Int, +8 synergy" },
                ],
                feats: [
                    { name: "Persistent Spell", description: "" }, { name: "Divine Metamagic", description: "" }, { name: "Iron Will", description: "" }, { name: "Quicken Spell", description: "" },
                    { name: "Epic Spellcasting", description: "" }, { name: "Great Charisma", description: "x2" }, { name: "Epic Spell Focus (Illusion)", description: "" }, { name: "Automatic Quicken Spell", description: "x2" },
                    { name: "Bonus Epic Feat (KSG)", description: "Epic Reputation" }, { name: "Armor Skin", description: ""}, { name: "Epic Will", description: ""},
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Chaotic Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                        { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                        { name: "Tome of Leadership and Influence +5", cost: "137,500 gp", description: "" },
                        { name: "Tome of Clear Thought +3", cost: "82,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "Empress of Fleeting Dreams",
            class: "Bard 1 / Rogue 1 / FL 10 / MT 10 / KSG 10 / Dreamweaver 8",
            hitDice: "17d6+153 (Fey) + 40d6+360 (Class) = 753 hp",
            challengeRating: 55,
            armorClass: {
                total: 75,
                breakdown: "(+6 Dex, +10 natural, +25 deflection, +10 armor, +10 insight, +14 sacred)",
            },
            initiative: {
                bonus: 10,
                breakdown: "(+6 Dex, +4 feat)",
            },
            buildNotes: [
                "Effective Levels: Bard 21, Rogue 21 (+11d6 SA), Wizard 38, Archivist 38.",
                "Her final form is as a Dreamweaver, a being who can make her stories real. Her illusions are now more real than reality itself.",
                "She has become a true goddess of stories, a being who shapes reality not with brute force, but with a perfectly told tale. Her epic is complete."
            ],
            sheet: {
                baseAtk: 32,
                grapple: 33,
                fullAttack: [
                    { name: "Claw", bonus: "+39", damage: "1d4+1", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft./5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 38th-level Wizard and 38th-level Archivist. Can cast multiple epic spells. SLAs are CL 57th, DC 33 + spell level." },
                    { name: "Bardic Music", type: "Su", description: "21/day, inspire courage +4, song of freedom." },
                    { name: "Sneak Attack", type: "Ex", description: "+11d6 damage." },
                ],
                specialQualities: [
                    { name: "DR 15/cold iron", type: "Su", description: "" }, { name: "SR 66", type: "Ex", description: "" }, { name: "Fast Healing 5", type: "Ex", description: "" },
                    { name: "One with the Story (KSG)", type: "Su", description: "Type becomes Fey. Immune to language-dependent/sonic effects. Can cast Wish 1/day via performance."}
                ],
                saves: {
                    fort: { bonus: 40, breakdown: "+23 base, +10 Con, +7 res" },
                    ref: { bonus: 45, breakdown: "+30 base, +6 Dex, +9 res" },
                    will: { bonus: 52, breakdown: "+39 base, +5 Wis, +8 res" },
                },
                abilities: { str: 12, dex: 22, con: 30, int: 34, wis: 20, cha: 46 },
                skills: [
                    { name: "Bluff", bonus: 81, breakdown: "53 ranks, +18 Cha, +10 feat" },
                    { name: "Disguise", bonus: 81, breakdown: "53 ranks, +18 Cha, +10 feat" },
                    { name: "Perform", bonus: 81, breakdown: "53 ranks, +18 Cha, +10 feat" },
                    { name: "Spellcraft", bonus: 77, breakdown: "53 ranks, +12 Int, +12 synergy" },
                ],
                feats: [
                    { name: "Persistent Spell", description: "" }, { name: "Divine Metamagic", description: "" }, { name: "Iron Will", description: "" }, { name: "Quicken Spell", description: "" },
                    { name: "Epic Spellcasting", description: "" }, { name: "Great Charisma", description: "x4" }, { name: "Epic Spell Focus (Illusion)", description: "" }, { name: "Automatic Quicken Spell", description: "x3" },
                    { name: "Epic Reputation", description: "KSG Bonus" }, { name: "Bonus Epic Feat (DW)", description: "Ignore Material Components" }, { name: "Bonus Epic Feat (KSG)", description: "Epic Spell Penetration" },
                    { name: "Epic Skill Focus (Bluff, Disguise, Perform)", description: ""}
                ],
                flaws: [],
                environment: "The Library of All Stories",
                organization: "Unique",
                alignment: "Chaotic Good",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "Robe of a Thousand Stories", cost: "Artifact", description: "" },
                         { name: "The Moon's Reflection", cost: "Artifact", description: "" },
                         { name: "The Fox-Fire Jewel", cost: "Artifact", description: "" },
                         { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};