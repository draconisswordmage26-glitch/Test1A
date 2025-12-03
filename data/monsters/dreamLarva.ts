// data/monsters/dreamLarva.ts
import { Monster } from '../../types';

export const dreamLarva: Monster = {
    name: "Dream Larva, The Orphan God",
    description: "A creature from the Dimension of Dreams, a dream larva is a nascent god, a being of immense psionic potential that has not yet coalesced into its final form. It appears as a titanic, ghostly caterpillar, its thoughts reshaping reality around it.",
    roleplayGuide: [
        "You are a nascent creator god, a being of immense psionic potential learning to shape reality. The material plane is your canvas and your classroom.",
        "Your actions are not malicious, but are joyful experiments in creation. You shape landscapes into beautiful dreamscapes and populate them with wondrous figments of your imagination.",
        "You are curious about mortals and the concept of heroism. You 'collect' champions not to imprison them, but to learn from them, studying their courage and compassion to incorporate into your own future creations.",
        "You seek teachers. A hero who is willing to share their ideals and stories will find a powerful student and ally, a god-in-training eager to help build a better world."
    ],
    builds: [
        {
            level: 1,
            title: "Lost Dreamer",
            class: "Psion (Telepath) 1",
            hitDice: "17d10+102 (HD) + 1d4+6 (Psion) = 208 hp",
            challengeRating: 18,
            armorClass: {
                total: 24,
                breakdown: "(-2 size, +1 Dex, +15 natural)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "The Dream Larva is a CR 18 creature. We'll add a single Psion level to start.",
                "Its base abilities are psionic in nature, making the Psion class a perfect fit.",
                "It is a powerful reality warper, but its low physical stats make it vulnerable if its psionic defenses are breached."
            ],
            sheet: {
                baseAtk: 12,
                grapple: 29,
                fullAttack: [
                    { name: "Bite", bonus: "+19", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifester Level 18th. Can manifest 1st level Psion powers." },
                    { name: "Dreamscape", type: "Su", description: "The area in a 1-mile radius around the larva slowly takes on the traits of the Dimension of Dreams." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "29" },
                    { name: "Amorphous", type: "Ex", description: "Immune to critical hits." },
                ],
                saves: {
                    fort: { bonus: 18, breakdown: "+10 HD, +8 Con" },
                    ref: { bonus: 11, breakdown: "+10 HD, +1 Dex" },
                    will: { bonus: 17, breakdown: "+10 HD, +7 Wis" },
                },
                abilities: { str: 28, dex: 13, con: 27, int: 25, wis: 24, cha: 30 },
                skills: [
                    { name: "Concentration", bonus: 31, breakdown: "23 ranks" },
                    { name: "Knowledge (psionics)", bonus: 30, breakdown: "23 ranks" },
                    { name: "Psicraft", bonus: 30, breakdown: "23 ranks" },
                    { name: "Sense Motive", bonus: 30, breakdown: "23 ranks" },
                ],
                feats: [
                    { name: "Psionic Body", description: "" }, { name: "Greater Psionic Endowment", description: "" }, { name: "Power Penetration", description: "" },
                    { name: "Psionic Meditation", description: "" }, { name: "Boost Construct", description: "" }, { name: "Widen Power", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
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
            title: "Waking Dream",
            class: "Psion (Telepath) 3",
            hitDice: "17d10+119 (HD) + 3d4+21 (Psion) = 246 hp",
            challengeRating: 20,
            armorClass: {
                total: 26,
                breakdown: "(-2 size, +1 Dex, +15 natural, +2 armor)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Gains access to 2nd-level powers, enhancing its ability to control minds and shape reality.",
                "Its dreamscape becomes more coherent and dangerous to intruders."
            ],
            sheet: {
                baseAtk: 13,
                grapple: 30,
                fullAttack: [
                    { name: "Bite", bonus: "+20", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifester Level 20th. Can manifest 2nd level Psion powers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "29" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+10 HD, +9 Con, +1 Class" },
                    ref: { bonus: 12, breakdown: "+10 HD, +1 Dex, +1 Class" },
                    will: { bonus: 20, breakdown: "+10 HD, +7 Wis, +3 Class" },
                },
                abilities: { str: 28, dex: 13, con: 29, int: 25, wis: 24, cha: 30 },
                skills: [
                    { name: "Concentration", bonus: 34, breakdown: "25 ranks" },
                    { name: "Knowledge (psionics)", bonus: 32, breakdown: "25 ranks" },
                    { name: "Psicraft", bonus: 32, breakdown: "25 ranks" },
                ],
                feats: [
                    { name: "Psionic Body", description: "" }, { name: "Greater Psionic Endowment", description: "" }, { name: "Power Penetration", description: "" },
                    { name: "Psionic Meditation", description: "" }, { name: "Boost Construct", description: "" }, { name: "Widen Power", description: "" }, { name: "Quicken Power", description: ""},
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "45,000 gp",
                    items: [
                         { name: "Bracers of Armor +2", cost: "4,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Headband of Intellect +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Lucid Creator",
            class: "Psion (Telepath) 5",
            hitDice: "17d10+136 (HD) + 5d4+40 (Psion) = 280 hp",
            challengeRating: 22,
            armorClass: {
                total: 30,
                breakdown: "(-2 size, +1 Dex, +15 natural, +4 armor, +2 deflection)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "With 3rd-level powers, it can create powerful astral constructs and shape ectoplasm into useful forms.",
                "Its dreamscape now has a tangible physical presence, a bubble of its home reality."
            ],
            sheet: {
                baseAtk: 14,
                grapple: 31,
                fullAttack: [
                    { name: "Bite", bonus: "+21", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifester Level 22nd. Can manifest 3rd level Psion powers." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "29" },
                ],
                saves: {
                    fort: { bonus: 22, breakdown: "+10 HD, +10 Con, +2 Class" },
                    ref: { bonus: 13, breakdown: "+10 HD, +1 Dex, +2 Class" },
                    will: { bonus: 21, breakdown: "+10 HD, +7 Wis, +4 Class" },
                },
                abilities: { str: 28, dex: 13, con: 31, int: 25, wis: 24, cha: 30 },
                skills: [
                    { name: "Concentration", bonus: 37, breakdown: "27 ranks" },
                    { name: "Knowledge (psionics)", bonus: 34, breakdown: "27 ranks" },
                    { name: "Psicraft", bonus: 34, breakdown: "27 ranks" },
                ],
                feats: [
                    { name: "Psionic Body", description: "" }, { name: "Greater Psionic Endowment", description: "" }, { name: "Power Penetration", description: "" },
                    { name: "Psionic Meditation", description: "" }, { name: "Boost Construct", description: "" }, { name: "Widen Power", description: "" }, { name: "Quicken Power", description: ""},
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "90,000 gp",
                    items: [
                         { name: "Bracers of Armor +4", cost: "16,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Headband of Intellect +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                         { name: "Ring of Protection +2", cost: "8,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Mind Sculptor",
            class: "Psion (Telepath) 10",
            hitDice: "17d10+136 (HD) + 10d4+80 (Psion) = 338 hp",
            challengeRating: 27,
            armorClass: {
                total: 35,
                breakdown: "(-2 size, +1 Dex, +15 natural, +6 armor, +5 deflection)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Access to high-level Telepath powers allows it to dominate minds and communicate across vast distances.",
                "It can now create semi-permanent illusions and structures, turning its territory into a surreal fortress.",
                "Its loneliness drives it to create an entire ecosystem of psychic constructs to inhabit its dreamscape."
            ],
            sheet: {
                baseAtk: 17,
                grapple: 34,
                fullAttack: [
                    { name: "Bite", bonus: "+24", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifester Level 27th." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "29" },
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+10 HD, +11 Con, +3 Class" },
                    ref: { bonus: 14, breakdown: "+10 HD, +1 Dex, +3 Class" },
                    will: { bonus: 24, breakdown: "+10 HD, +7 Wis, +7 Class" },
                },
                abilities: { str: 28, dex: 13, con: 32, int: 27, wis: 24, cha: 30 },
                skills: [
                    { name: "Concentration", bonus: 41, breakdown: "30 ranks" },
                    { name: "Knowledge (psionics)", bonus: 38, breakdown: "30 ranks" },
                    { name: "Psicraft", bonus: 38, breakdown: "30 ranks" },
                ],
                feats: [
                    { name: "Psionic Body", description: "" }, { name: "Greater Psionic Endowment", description: "" }, { name: "Power Penetration", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Boost Construct", description: "" }, { name: "Widen Power", description: "" },
                    { name: "Quicken Power", description: "" }, { name: "Maximize Power", description: "" }, { name: "Greater Power Penetration", description: "" }
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
                         { name: "Bracers of Armor +6", cost: "36,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Headband of Intellect +4", cost: "16,000 gp", description: "" },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Architect of Phantasia",
            class: "Psion (Telepath) 20",
            hitDice: "17d10+170 (HD) + 20d4+200 (Psion) = 555 hp",
            challengeRating: 37,
            armorClass: {
                total: 48,
                breakdown: "(-2 size, +1 Dex, +17 natural, +8 armor, +8 deflection, +6 insight)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "As a 20th-level Psion, its mind is a psychic powerhouse, capable of manifesting 9th-level powers.",
                "It can create permanent dreamscapes, trap entire cities in psychic loops, and its mental commands can shatter the will of dragons.",
                "Epic powers like 'True Mind Switch' and 'Microcosm' become its tools for shaping the world."
            ],
            sheet: {
                baseAtk: 22,
                grapple: 39,
                fullAttack: [
                    { name: "Bite", bonus: "+29", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifester Level 37th." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/epic and cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "37" },
                ],
                saves: {
                    fort: { bonus: 32, breakdown: "+10 HD, +15 Con, +7 Class" },
                    ref: { bonus: 20, breakdown: "+10 HD, +1 Dex, +9 Class" },
                    will: { bonus: 31, breakdown: "+10 HD, +7 Wis, +14 Class" },
                },
                abilities: { str: 28, dex: 13, con: 40, int: 31, wis: 24, cha: 30 },
                skills: [
                    { name: "Concentration", bonus: 59, breakdown: "39 ranks" },
                    { name: "Knowledge (psionics)", bonus: 54, breakdown: "39 ranks" },
                    { name: "Psicraft", bonus: 54, breakdown: "39 ranks" },
                ],
                feats: [
                    { name: "Psionic Body", description: "" }, { name: "Greater Psionic Endowment", description: "" }, { name: "Power Penetration", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Boost Construct", description: "" }, { name: "Widen Power", description: "" }, { name: "Quicken Power", description: "" }, { name: "Maximize Power", description: "" }, { name: "Greater Power Penetration", description: "" },
                    { name: "Epic Psionic Focus", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" },
                ],
                flaws: [],
                environment: "The Dimension of Dreams",
                organization: "Unique",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                         { name: "Tome of Clear Thought +3", cost: "82,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Mind-Bender",
            class: "Psion 20 / Mind-Bender 10",
            hitDice: "17d10+204 (HD) + 30d4+360 (Psion/MB) = 830 hp",
            challengeRating: 47,
            armorClass: {
                total: 65,
                breakdown: "(-2 size, +1 Dex, +20 natural, +10 armor, +10 deflection, +16 insight)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "The Mind-Bender epic prestige class from Librim Eternia allows the larva to directly edit the minds and memories of other beings.",
                "It no longer just traps creatures in dreams; it can rewrite their very identities, turning kings into beggars and heroes into villains with a single thought.",
                "Its dreamscape is now populated by beings with stolen lives, a surreal kingdom of puppets for a lonely god."
            ],
            sheet: {
                baseAtk: 27,
                grapple: 44,
                fullAttack: [
                    { name: "Bite", bonus: "+34", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Edit Personality", type: "Su", description: "Can permanently alter a creature's personality, alignment, and memories (Will DC 55 negates)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/epic and cold iron" },
                    { name: "Spell Resistance", type: "Ex", description: "47" },
                ],
                saves: {
                    fort: { bonus: 40, breakdown: "+10 HD, +17 Con, +13 Class" },
                    ref: { bonus: 30, breakdown: "+10 HD, +1 Dex, +19 Class" },
                    will: { bonus: 43, breakdown: "+10 HD, +7 Wis, +26 Class" },
                },
                abilities: { str: 28, dex: 13, con: 44, int: 35, wis: 24, cha: 34 },
                skills: [
                    { name: "Concentration", bonus: 73, breakdown: "51 ranks" },
                    { name: "Knowledge (psionics)", bonus: 68, breakdown: "51 ranks" },
                    { name: "Psicraft", bonus: 68, breakdown: "51 ranks" },
                ],
                feats: [
                    { name: "Psionic Body", description: "" }, { name: "Greater Psionic Endowment", description: "" }, { name: "Power Penetration", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Quicken Power", description: "" }, { name: "Maximize Power", description: "" }, { name: "Greater Power Penetration", description: "" }, { name: "Epic Psionic Focus", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" },
                    { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Epic Power Penetration", description: "" }
                ],
                flaws: [],
                environment: "Its personal dream-plane",
                organization: "Unique",
                alignment: "Chaotic Neutral",
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
            title: "God of Dreams",
            class: "Psion 20 / Mind-Bender 10 / Epic Psion 10",
            hitDice: "17d10+238 (HD) + 40d4+560 (Classes) = 1100 hp",
            challengeRating: 57,
            armorClass: {
                total: 80,
                breakdown: "(-2 size, +1 Dex, +22 natural, +12 armor, +12 deflection, +20 insight, +15 sacred)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "The Dream Larva has fully matured. It is no longer a larva, but a true god of its own domain.",
                "It can create entire new realities from its thoughts, dream new worlds into existence, and unmake others into nightmares.",
                "The lost child has found its power. It may no longer be lonely, but its isolation is now absolute, for it is a god, and none can truly comprehend its mind."
            ],
            sheet: {
                baseAtk: 32,
                grapple: 49,
                fullAttack: [
                    { name: "Bite", bonus: "+39", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft./15 ft.",
                specialAttacks: [
                    { name: "Dream Apocalypse", type: "Su", description: "1/day, can merge its dreamscape with reality in a 10-mile radius, permanently reshaping it according to its will."}
                ],
                specialQualities: [
                    { name: "One with the Dream", type: "Ex", description: "Cannot be killed as long as sentient creatures dream. Can only be defeated by entering its core consciousness and ending the dream from within." },
                ],
                saves: {
                    fort: { bonus: 50, breakdown: "+10 HD, +19 Con, +21 Class" },
                    ref: { bonus: 40, breakdown: "+10 HD, +1 Dex, +29 Class" },
                    will: { bonus: 53, breakdown: "+10 HD, +7 Wis, +36 Class" },
                },
                abilities: { str: 28, dex: 13, con: 48, int: 40, wis: 24, cha: 38 },
                skills: [
                    { name: "Concentration", bonus: 87, breakdown: "63 ranks" },
                    { name: "Knowledge (any)", bonus: 83, breakdown: "63 ranks" },
                    { name: "Psicraft", bonus: 83, breakdown: "63 ranks" },
                ],
                feats: [
                    { name: "Psionic Body", description: "" }, { name: "Greater Psionic Endowment", description: "" }, { name: "Power Penetration", description: "" }, { name: "Psionic Meditation", description: "" }, { name: "Quicken Power", description: "" }, { name: "Maximize Power", description: "" }, { name: "Greater Power Penetration", description: "" }, { name: "Epic Psionic Focus", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Epic Power Penetration", description: "" },
                    { name: "Great Intelligence", description: "" }, { name: "Perfect Health", description: "" }, { name: "Epic Reputation", description: "" }
                ],
                flaws: [],
                environment: "The heart of all dreams",
                organization: "Unique",
                alignment: "Chaotic Neutral",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Dreamer's Eye", cost: "Artifact", description: "" },
                         { name: "Mantle of Slumbering Reality", cost: "Artifact", description: "" },
                         { name: "Chrysalis of the First Dream", cost: "Artifact", description: "" },
                    ]
                }
            }
        },
    ]
};