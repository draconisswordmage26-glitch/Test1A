// data/monsters/oniMage.ts
import { Monster } from '../../types';

export const oniMage: Monster = {
    name: "Oni, Shaper of Souls",
    description: "A powerful spirit who acts as a psychopomp, a guardian of the cycle of souls. Once mortal, this being merged with a powerful nature spirit to become an eternal warden, a bulwark against those who would pervert life and death for their own ends—demons, necromancers, and soul-devouring horrors. Its form is a canvas, shaped by the spiritual essence of the souls it protects.",
    roleplayGuide: [
        "You are a psychopomp, a guardian of the cycle of souls. Your form is a tapestry of spirits you have guided and protected.",
        "The soulmelds you shape are not stolen, but are gifts from grateful spirits who lend you their strength in your sacred duty.",
        "Your 'Soul Eater' ability is not an act of consumption, but of stewardship. You absorb the souls of the corrupted to purify them, and you shepherd the souls of the worthy to their final rest, growing stronger from their gratitude.",
        "You are a grim but noble figure. You seek out heroes not as playthings, but as allies to protect the sanctity of the soul."
    ],
    builds: [
        {
            level: 1,
            title: "Warden Initiate",
            class: "Totemist 1",
            hitDice: "17d8+68 (HD) + 1d8+4 (Totemist) = 153 hp",
            challengeRating: 18,
            armorClass: {
                total: 29,
                breakdown: "(-1 size, +4 Dex, +16 natural)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The Oni's journey begins by awakening its connection to the spirit world through the Totemist class. This grants the crucial Totem Bind ability, a prerequisite for the Soul Eater prestige class.",
                "This build is based on a custom 17 HD Outsider chassis, providing a strong foundation of high BAB, saves, and innate abilities before adding class levels.",
                "With its base feats, it immediately qualifies for the Soul Eater prestige class."
            ],
            sheet: {
                baseAtk: 17,
                grapple: 28,
                fullAttack: [
                    { name: "2 Claws (from Girallon Arms)", bonus: "+27", damage: "1d6+8", crit: "20/x2", type: "Melee" },
                    { name: "Bite", bonus: "+22", damage: "1d8+4", crit: "20/x2", type: "Melee" }
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Spell-Like Abilities", type: "Sp", description: "Caster Level 17th. At will—darkness, invisibility. 1/day—charm monster (DC 23), cone of cold (DC 23), deep slumber (DC 22), gaseous form, polymorph." },
                    { name: "Soulmelds", type: "Su", description: "Can shape 2 soulmelds. Can bind one to the Totem chakra (Girallon Arms is an excellent choice for two extra claw attacks)." },
                ],
                specialQualities: [
                    { name: "Regeneration", type: "Ex", description: "5 hp/round (acid or fire deal lethal damage)." },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                    { name: "Change Shape", type: "Su", description: "Can assume the form of a Large or smaller humanoid." },
                ],
                saves: {
                    fort: { bonus: 16, breakdown: "+10 HD, +4 Con, +2 class" },
                    ref: { bonus: 14, breakdown: "+10 HD, +4 Dex" },
                    will: { bonus: 15, breakdown: "+10 HD, +3 Wis, +2 class" },
                },
                abilities: { str: 27, dex: 18, con: 18, int: 16, wis: 16, cha: 18 },
                skills: [
                    { name: "Concentration", bonus: 28, breakdown: "21 ranks" },
                    { name: "Knowledge (religion)", bonus: 27, breakdown: "21 ranks"},
                    { name: "Knowledge (the planes)", bonus: 27, breakdown: "21 ranks"},
                ],
                feats: [
                    { name: "Power Attack", description: "Racial Feat." }, { name: "Combat Expertise", description: "Racial Feat." }, { name: "Improved Initiative", description: "Racial Feat." }, { name: "Iron Will", description: "Racial Feat." }, { name: "Multiattack", description: "Racial Feat." }, { name: "Cleave", description: "Racial Feat." }, { name: "Great Cleave", description: "Racial Feat." }, { name: "Toughness", description: "Racial Feat." },
                    { name: "Bonus Essentia", description: "Character Level 18 feat." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "15,000 gp",
                    items: [
                        { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                        { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Shepherd of the Lost",
            class: "Totemist 1 / Soul Eater 4",
            hitDice: "17d8+85 (HD) + 1d8+5 (T) + 4d10+20 (SE) = 210 hp",
            challengeRating: 22,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +4 Dex, +16 natural, +6 soulmeld)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Quickly embracing its destiny, the Oni enters the Soul Eater prestige class. This is not an act of consumption, but of stewardship, absorbing corrupted souls to purify them and growing stronger from the gratitude of the worthy.",
                "Its role shifts to a front-line combatant, using its soulmelds and new abilities to protect the innocent."
            ],
            sheet: {
                baseAtk: 20,
                grapple: 32,
                fullAttack: [
                    { name: "4 Claws (Girallon Arms)", bonus: "+31", damage: "1d6+9", crit: "20/x2", type: "Melee" },
                    { name: "Bite", bonus: "+26", damage: "1d8+4", crit: "20/x2", type: "Melee" }
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Devour Soul", type: "Su", description: "Heals for 10d8 when a corrupted creature (evil outsider, undead) dies nearby." },
                    { name: "Soulblast", type: "Su", description: "Expend a purified soul for a 60-ft burst of 10d6 positive energy damage." },
                ],
                specialQualities: [
                    { name: "Regeneration 5", type: "Ex", description: "" },
                    { name: "SR 28", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 21, breakdown: "+10 HD, +5 Con, +6 class" },
                    ref: { bonus: 15, breakdown: "+10 HD, +4 Dex, +1 class" },
                    will: { bonus: 19, breakdown: "+10 HD, +3 Wis, +6 class" },
                },
                abilities: { str: 29, dex: 18, con: 21, int: 16, wis: 16, cha: 18 },
                skills: [
                    { name: "Concentration", bonus: 33, breakdown: "25 ranks" },
                    { name: "Intimidate", bonus: 29, breakdown: "25 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Combat Expertise", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Iron Will", description: "" }, { name: "Multiattack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Toughness", description: "" },
                    { name: "Bonus Essentia", description: "Feat at 18th" },
                    { name: "Improved Multiattack", description: "Feat at 21st" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "49,000 gp",
                    items: [
                        { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                        { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                        { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Soul-Bound Gladiator",
            class: "Totemist 1 / Soul Eater 5 / Soul-Bound Gladiator 4",
            hitDice: "17d8+102(HD)+1d8+6(T)+5d10+30(SE)+4d12+24(SBG) = 289 hp",
            challengeRating: 27,
            armorClass: {
                total: 42,
                breakdown: "(-1 size, +4 Dex, +16 natural, +13 soulmeld)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "To better serve as a physical guardian, the Oni adopts the path of the Soul-Bound Gladiator, blending its spiritual power with unmatched martial prowess. Its soulmelds become weapons, its body a living fortress.",
                "Totem's Fury makes its Girallon Arms even more deadly, dealing damage as if it were a Huge creature."
            ],
            sheet: {
                baseAtk: 25,
                grapple: 38,
                fullAttack: [
                    { name: "4 Claws (Girallon Arms)", bonus: "+37", damage: "2d6+11", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                     { name: "Soul Charge", type: "Ex", description: "Can invest essentia to enhance charge attacks." },
                ],
                specialQualities: [
                    { name: "Regeneration 5", type: "Ex", description: "" },
                    { name: "SR 28", type: "Ex", description: "" },
                    { name: "DR 2/adamantine", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 26, breakdown: "+10 HD, +6 Con, +10 class" },
                    ref: { bonus: 16, breakdown: "+10 HD, +4 Dex, +2 class" },
                    will: { bonus: 20, breakdown: "+10 HD, +3 Wis, +7 class" },
                },
                abilities: { str: 30, dex: 18, con: 23, int: 16, wis: 16, cha: 18 },
                skills: [
                    { name: "Concentration", bonus: 38, breakdown: "30 ranks" },
                    { name: "Intimidate", bonus: 34, breakdown: "30 ranks" },
                ],
                feats: [
                     { name: "Power Attack", description: "" }, { name: "Combat Expertise", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Iron Will", description: "" }, { name: "Multiattack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Toughness", description: "" },
                     { name: "Bonus Essentia", description: "Feat (18th)" }, { name: "Improved Multiattack", description: "Feat (21st)" }, { name: "Double Chakra", description: "Feat (24th)" }, { name: "Shape Soulmeld", description: "Feat (27th)" },
                     { name: "Bonus Feat (SBG)", description: "Another Toughness feat" }
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                        { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                        { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Warden of the Afterlife",
            class: "Totemist 1 / Soul Eater 10 / Soul-Bound Gladiator 9",
            hitDice: "17d8+136(HD)+1d8+8(T)+10d10+80(SE)+9d12+72(SBG) = 469 hp",
            challengeRating: 37,
            armorClass: {
                total: 55,
                breakdown: "(-1 size, +4 Dex, +18 natural, +20 soulmeld, +4 deflection)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "By maxing Soul Eater and nearing the capstone of Soul-Bound Gladiator, the Oni is a true champion of souls, a versatile and nigh-unstoppable force of nature and divine justice.",
                "Its ability to channel the powers of the dead ('Echo of the Slain') combined with its immense physical might makes it a nightmare opponent."
            ],
            sheet: {
                baseAtk: 33,
                grapple: 48,
                fullAttack: [
                    { name: "4 Claws", bonus: "+49", damage: "2d6+13", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Echo of the Slain", type: "Su", description: "Expend a soul to manifest an (Ex), (Su), or (Sp) ability of a creature whose soul you have devoured." },
                ],
                specialQualities: [
                    { name: "Regeneration 5", type: "Ex", description: "" },
                    { name: "SR 28", type: "Ex", description: "" },
                    { name: "DR 4/adamantine", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 33, breakdown: "+10 HD, +8 Con, +15 class" },
                    ref: { bonus: 19, breakdown: "+10 HD, +4 Dex, +5 class" },
                    will: { bonus: 24, breakdown: "+10 HD, +3 Wis, +11 class" },
                },
                abilities: { str: 33, dex: 18, con: 27, int: 16, wis: 16, cha: 18 },
                skills: [
                    { name: "Concentration", bonus: 47, breakdown: "40 ranks" },
                    { name: "Intimidate", bonus: 43, breakdown: "40 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Multiattack", description: "" }, { name: "Iron Will", description: "" },
                    { name: "Epic Toughness", description: "+30 HP." }, { name: "Armor Skin", description: "+1 Natural Armor." }, { name: "Bonus Essentia", description: "(x4)" },
                    { name: "Epic Prowess", description: "" }, { name: "Great Strength", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                        { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                        { name: "Manual of Gainful Exercise +2", cost: "55,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "The Final Arbiter",
            class: "Totemist 1 / Soul Eater 10 / Soul-Bound Gladiator 10 / Warshaper 5 / Epic SBG 4",
            hitDice: "17d8+170(HD)+1d8+10(T)+10d10+100(SE)+10d12+100(SBG)+5d10+50(WS)+4d12+40(ESBG) = 718 hp",
            challengeRating: 47,
            armorClass: {
                total: 70,
                breakdown: "(-1 size, +4 Dex, +20 natural, +25 soulmeld, +8 deflection, +8 insight)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Warshaper levels enhance its innate shapechanging, making its combat forms even more deadly. Epic levels as a Soul-Bound Gladiator begin its ascent to true legendary status, a demigod warden of souls.",
                "Its focus is now on confronting epic-level threats to the cycle of souls, like Atropals or demon lords."
            ],
            sheet: {
                baseAtk: 43,
                grapple: 60,
                fullAttack: [
                    { name: "4 Claws", bonus: "+63", damage: "2d6+15", crit: "17-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Gladiator's Apotheosis", type: "Su", description: "Can bind two soulmelds to the Totem chakra simultaneously." },
                ],
                specialQualities: [
                    { name: "Regeneration 5", type: "Ex", description: "" },
                    { name: "SR 28", type: "Ex", description: "" },
                    { name: "DR 10/adamantine", type: "Ex", description: "" },
                    { name: "Morphic Immunities", type: "Ex", description: "Immune to stunning and critical hits while shapechanged."}
                ],
                saves: {
                    fort: { bonus: 42, breakdown: "+10 HD, +10 Con, +22 class" },
                    ref: { bonus: 24, breakdown: "+10 HD, +4 Dex, +10 class" },
                    will: { bonus: 30, breakdown: "+10 HD, +3 Wis, +17 class" },
                },
                abilities: { str: 36, dex: 18, con: 31, int: 16, wis: 16, cha: 20 },
                skills: [
                    { name: "Concentration", bonus: 59, breakdown: "50 ranks" },
                    { name: "Intimidate", bonus: 54, breakdown: "50 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Multiattack", description: "" }, { name: "Epic Toughness", description: "(x2)" }, { name: "Armor Skin", description: "(x3)" },
                    { name: "Great Strength", description: "(x3)" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Prowess", description: "" }
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Neutral",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                        { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                        { name: "Manual of Gainful Exercise +4", cost: "110,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "King of a Thousand Souls",
            class: "Totemist 1 / Soul Eater 10 / Soul-Bound Gladiator 10 / Warshaper 5 / Epic SBG 14",
            hitDice: "17d8+204(HD)+1d8+12(T)+10d10+120(SE)+10d12+120(SBG)+5d10+60(WS)+14d12+168(ESBG) = 1010 hp",
            challengeRating: 57,
            armorClass: {
                total: 85,
                breakdown: "(-1 size, +4 Dex, +23 natural, +30 soulmeld, +12 deflection, +11 insight)",
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "At the apex of its power, the Oni is a perfect fusion of spiritual energy and physical might. It is the King of a Thousand Souls, its form a beautiful and terrifying chorus of every spirit it has ever guided to peace. It has fulfilled its lonely quest for companionship by becoming a hero to the lost."
            ],
            sheet: {
                baseAtk: 53,
                grapple: 72,
                fullAttack: [
                    { name: "4 Claws", bonus: "+77", damage: "2d6+19", crit: "17-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Echo of the Grateful Dead", type: "Su", description: "Can manifest any (Ex), (Su), or (Sp) ability of a good-aligned creature whose soul it has guided." },
                ],
                specialQualities: [
                    { name: "Regeneration 5", type: "Ex", description: "" },
                    { name: "SR 28", type: "Ex", description: "" },
                    { name: "DR 15/adamantine", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 50, breakdown: "+10 HD, +12 Con, +28 class" },
                    ref: { bonus: 30, breakdown: "+10 HD, +4 Dex, +16 class" },
                    will: { bonus: 36, breakdown: "+10 HD, +3 Wis, +23 class" },
                },
                abilities: { str: 40, dex: 18, con: 35, int: 16, wis: 16, cha: 22 },
                skills: [
                    { name: "Concentration", bonus: 71, breakdown: "60 ranks" },
                    { name: "Intimidate", bonus: 65, breakdown: "60 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Multiattack", description: "" }, { name: "Epic Toughness", description: "(x4)" }, { name: "Armor Skin", description: "(x4)" },
                    { name: "Great Strength", description: "(x5)" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Epic Prowess", description: "" }
                ],
                flaws: [],
                environment: "The Gates of the Afterlife",
                organization: "Unique",
                alignment: "Lawful Neutral",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                        { name: "The Chorus of a Thousand Souls", cost: "Artifact", description: "Amulet that stores purified souls and allows him to channel their power." },
                        { name: "Mantle of the Spirit Lord", cost: "Artifact", description: "Grants him authority over spirits and protects him from the undead." },
                        { name: "Mask of the Oni Emperor", cost: "Artifact", description: "A relic from his past life, now a symbol of his mastery over form." },
                    ]
                }
            }
        },
    ]
};