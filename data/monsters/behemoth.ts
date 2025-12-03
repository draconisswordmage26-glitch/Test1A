// data/monsters/behemoth.ts
import { Monster } from '../../types';

export const behemoth: Monster = {
    name: "Lonesome Behemoth",
    description: "A colossal magical beast with thick, purple hide, immense horns, and a muscular frame that ripples with primal power. It is a force of nature, its rage capable of leveling mountains and its roar of shattering the sky.",
    roleplayGuide: [
        "You are an ancient and powerful guardian of the wild, a primal force of nature in a world that has forgotten its roots. You are a protector of the last pristine places.",
        "Your rage is not born of grief, but of a fierce protective instinct. You see the unchecked expansion of destructive forces as a threat to the world you are sworn to defend.",
        "You are the embodiment of nature's resilience. Your charges shatter the corrupt and unnatural, allowing the wild to heal and grow anew in its place.",
        "You respect strength and a love for the natural world. A hero who fights to protect the innocent and preserve the wild will earn your trust and find a powerful ally, a living mountain who will fight by their side."
    ],
    builds: [
        {
            level: 1,
            title: "The Grieving Giant",
            class: "Barbarian 1",
            hitDice: "18d10+144 (HD) + 1d12+8 (Barbarian) = 252 hp",
            challengeRating: 17,
            armorClass: {
                total: 28,
                breakdown: "(-2 size, +2 Dex, +18 natural)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "This creature is a homebrewed CR 17 Magical Beast, designed as a baseline.",
                "Its raw physical stats are its greatest asset, making it a terrifying melee combatant.",
                "The Barbarian class is a natural fit, channeling its grief into destructive rage."
            ],
            sheet: {
                baseAtk: 19,
                grapple: 41,
                fullAttack: [
                    { name: "Bite", bonus: "+31", damage: "2d8+14", crit: "19-20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+29", damage: "2d6+7", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Rage", type: "Ex", description: "1/day, +4 Str, +4 Con, -2 AC." },
                    { name: "Meteor", type: "Sp", description: "3/day, can call down a meteor as per the spell (CL 18th)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "25" },
                    { name: "Scent", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 21, breakdown: "+11 HD, +8 Con, +2 Barb" },
                    ref: { bonus: 13, breakdown: "+11 HD, +2 Dex" },
                    will: { bonus: 10, breakdown: "+11 HD, -1 Wis" },
                },
                abilities: { str: 39, dex: 15, con: 27, int: 8, wis: 9, cha: 14 },
                skills: [
                    { name: "Intimidate", bonus: 24, breakdown: "19 ranks" },
                    { name: "Jump", bonus: 34, breakdown: "19 ranks" },
                    { name: "Listen", bonus: 22, breakdown: "19 ranks" },
                    { name: "Spot", bonus: 22, breakdown: "19 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Great Cleave", description: "Continue cleaving after the first extra attack." },
                    { name: "Awesome Blow", description: "Send smaller creatures flying with a successful hit." },
                    { name: "Improved Bull Rush", description: "+4 on bull rush checks, no AoO." },
                    { name: "Improved Sunder", description: "+4 on sunder attempts, no AoO." },
                    { name: "Improved Critical (Bite)", description: "Threat range with bite becomes 19-20." },
                    { name: "Improved Toughness", description: "Gain +1 hit point per HD."}
                ],
                flaws: [],
                environment: "Desolate plains, ruined cities",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "15,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +1", cost: "4,000 gp", description: "" },
                        { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                        { name: "Amulet of Health +2", cost: "4,000 gp", description: ""},
                        { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "The Raging Scar",
            class: "Barbarian 3",
            hitDice: "18d10+144 (HD) + 3d12+24 (Barbarian) = 285 hp",
            challengeRating: 19,
            armorClass: {
                total: 28,
                breakdown: "(-2 size, +2 Dex, +18 natural)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "Gains Uncanny Dodge, representing its heightened battle senses born from grief and rage.",
                "Its physical power continues to escalate, its blows now shattering stone.",
            ],
            sheet: {
                baseAtk: 21,
                grapple: 43,
                fullAttack: [
                    { name: "Bite", bonus: "+33", damage: "2d8+14", crit: "19-20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+31", damage: "2d6+7", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Rage", type: "Ex", description: "1/day, +4 Str, +4 Con, -2 AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic" },
                    { name: "Spell Resistance", type: "Ex", description: "26" },
                    { name: "Uncanny Dodge", type: "Ex", description: "Retains Dex bonus to AC when flat-footed." },
                ],
                saves: {
                    fort: { bonus: 22, breakdown: "+11 HD, +8 Con, +3 Barb" },
                    ref: { bonus: 14, breakdown: "+11 HD, +2 Dex, +1 Barb" },
                    will: { bonus: 11, breakdown: "+11 HD, -1 Wis, +1 Barb" },
                },
                abilities: { str: 39, dex: 15, con: 27, int: 8, wis: 9, cha: 14 },
                skills: [
                    { name: "Intimidate", bonus: 26, breakdown: "21 ranks" },
                    { name: "Jump", bonus: 36, breakdown: "21 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Improved Critical (Bite)", description: "" }, { name: "Improved Toughness", description: "" },
                    { name: "Intimidating Rage", description: "Demoralize foes as a free action when raging." },
                ],
                flaws: [],
                environment: "Desolate plains, ruined cities",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "40,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +2", cost: "16,000 gp", description: "" },
                        { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                        { name: "Amulet of Health +2", cost: "4,000 gp", description: ""},
                        { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Mountain-Breaker",
            class: "Barbarian 5",
            hitDice: "18d10+162 (HD) + 5d12+45 (Barbarian) = 330 hp",
            challengeRating: 21,
            armorClass: {
                total: 28,
                breakdown: "(-2 size, +2 Dex, +18 natural)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "Gains Improved Uncanny Dodge, making it impossible to flank.",
                "More rages per day allow it to sustain its destructive fury for longer periods.",
            ],
            sheet: {
                baseAtk: 23,
                grapple: 45,
                fullAttack: [
                    { name: "Bite", bonus: "+35", damage: "2d8+14", crit: "19-20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+33", damage: "2d6+7", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Rage", type: "Ex", description: "2/day, +4 Str, +4 Con, -2 AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/magic, DR 1/-" },
                    { name: "Spell Resistance", type: "Ex", description: "27" },
                    { name: "Improved Uncanny Dodge", type: "Ex", description: "Cannot be flanked." },
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+11 HD, +9 Con, +4 Barb" },
                    ref: { bonus: 15, breakdown: "+11 HD, +2 Dex, +2 Barb" },
                    will: { bonus: 12, breakdown: "+11 HD, -1 Wis, +2 Barb" },
                },
                abilities: { str: 39, dex: 15, con: 29, int: 8, wis: 9, cha: 14 },
                skills: [
                    { name: "Intimidate", bonus: 28, breakdown: "23 ranks" },
                    { name: "Jump", bonus: 38, breakdown: "23 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Improved Critical (Bite)", description: "" }, { name: "Improved Toughness", description: "" }, { name: "Intimidating Rage", description: "" },
                    { name: "Destructive Rage", description: "Add Str bonus to Sunder checks while raging." },
                ],
                flaws: [],
                environment: "Desolate plains, ruined cities",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "85,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                        { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                        { name: "Amulet of Health +4", cost: "16,000 gp", description: ""},
                        { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "King of the Forgotten Wilds",
            class: "Barbarian 10",
            hitDice: "18d10+162 (HD) + 10d12+90 (Barbarian) = 430 hp",
            challengeRating: 26,
            armorClass: {
                total: 35,
                breakdown: "(-2 size, +2 Dex, +18 natural, +7 armor)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "Greater Rage and a host of rage-related feats make it a terrifyingly single-minded engine of destruction.",
                "Its physical might is now sufficient to threaten minor deities."
            ],
            sheet: {
                baseAtk: 28,
                grapple: 47,
                fullAttack: [
                    { name: "Bite", bonus: "+42/+37/+32/+27", damage: "2d8+16", crit: "17-20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Greater Rage", type: "Ex", description: "3/day, +6 Str, +6 Con, -2 AC." },
                    { name: "Meteor", type: "Sp", description: "3/day, can call down a meteor as per the spell (CL 28th)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/magic, DR 3/-" },
                    { name: "Spell Resistance", type: "Ex", description: "28" },
                ],
                saves: {
                    fort: { bonus: 29, breakdown: "+11 HD, +11 Con, +7 Barb" },
                    ref: { bonus: 16, breakdown: "+11 HD, +2 Dex, +3 Barb" },
                    will: { bonus: 14, breakdown: "+11 HD, -1 Wis, +4 Barb" },
                },
                abilities: { str: 43, dex: 15, con: 33, int: 8, wis: 9, cha: 14 },
                skills: [
                    { name: "Intimidate", bonus: 33, breakdown: "29 ranks" },
                    { name: "Jump", bonus: 47, breakdown: "29 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Improved Critical (Bite)", description: "" }, { name: "Improved Toughness", description: "" },
                    { name: "Intimidating Rage", description: ""}, { name: "Destructive Rage", description: ""}, { name: "Weapon Focus (Bite)", description: ""}
                ],
                flaws: [],
                environment: "Desolate plains, ruined cities",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                        { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                        { name: "Amulet of Health +4", cost: "16,000 gp", description: ""},
                        { name: "Bracers of Armor +7", cost: "49,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "The World's Grief",
            class: "Barbarian 20",
            hitDice: "18d10+198 (HD) + 20d12+220 (Barbarian) = 646 hp",
            challengeRating: 36,
            armorClass: {
                total: 45,
                breakdown: "(-2 size, +2 Dex, +20 natural, +10 armor, +5 deflection)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "Mighty Rage and a host of epic feats make it a true world-level threat.",
                "It is no longer just a monster; it is a force of nature, its sorrow a palpable aura that can drain the will to fight.",
                "Its hunt for oblivion has become a crusade against all life."
            ],
            sheet: {
                baseAtk: 38,
                grapple: 59,
                fullAttack: [
                    { name: "Bite", bonus: "+56/+51/+46/+41", damage: "2d8+20", crit: "17-20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Mighty Rage", type: "Ex", description: "6/day, +8 Str, +8 Con, -2 AC." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/magic and epic, DR 5/-" },
                    { name: "Spell Resistance", type: "Ex", description: "36" },
                ],
                saves: {
                    fort: { bonus: 40, breakdown: "+11 HD, +15 Con, +12 Barb, +2 feat" },
                    ref: { bonus: 20, breakdown: "+11 HD, +2 Dex, +7 Barb" },
                    will: { bonus: 18, breakdown: "+11 HD, -1 Wis, +8 Barb" },
                },
                abilities: { str: 47, dex: 15, con: 41, int: 8, wis: 9, cha: 14 },
                skills: [
                    { name: "Intimidate", bonus: 45, breakdown: "39 ranks" },
                    { name: "Jump", bonus: 59, breakdown: "39 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Improved Critical (Bite)", description: "" }, { name: "Improved Toughness", description: "" }, { name: "Intimidating Rage", description: ""}, { name: "Destructive Rage", description: ""}, { name: "Weapon Focus (Bite)", description: ""},
                    { name: "Epic Weapon Focus (Bite)", description: ""}, { name: "Armor Skin", description: ""}, { name: "Epic Fortitude", description: ""}, { name: "Epic Prowess", description: ""}
                ],
                flaws: [],
                environment: "Desolate plains, ruined cities",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                        { name: "Amulet of Mighty Fists +5", cost: "100,000 gp", description: "" },
                        { name: "Belt of Giant Strength +6", cost: "36,000 gp", description: "" },
                        { name: "Amulet of Health +6", cost: "36,000 gp", description: ""},
                        { name: "Bracers of Armor +8", cost: "64,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "The World-Smasher",
            class: "Barbarian 20 / World-Smasher 10",
            hitDice: "18d10+234 (HD) + 30d12+390 (Barbarian/WS) = 900 hp",
            challengeRating: 46,
            armorClass: {
                total: 60,
                breakdown: "(-2 size, +2 Dex, +23 natural, +12 armor, +10 deflection, +5 insight)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "The World-Smasher prestige class elevates its physical power to a geological scale.",
                "Its blows can now shatter mountains, and its rage can cause earthquakes.",
                "It is no longer just a grieving monster; it is a walking extinction event, a force that can unmake the world that wronged it."
            ],
            sheet: {
                baseAtk: 48,
                grapple: 69,
                fullAttack: [
                    { name: "Bite", bonus: "+68/+63/+58/+53", damage: "2d8+24", crit: "17-20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Earthshaker Strike", type: "Su", description: "Can create an earthquake effect by striking the ground." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "25/magic and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "46" },
                ],
                saves: {
                    fort: { bonus: 52, breakdown: "+11 HD, +17 Con, +24 Class" },
                    ref: { bonus: 29, breakdown: "+11 HD, +2 Dex, +16 Class" },
                    will: { bonus: 28, breakdown: "+11 HD, -1 Wis, +18 Class" },
                },
                abilities: { str: 53, dex: 15, con: 45, int: 8, wis: 9, cha: 14 },
                skills: [
                    { name: "Intimidate", bonus: 55, breakdown: "49 ranks" },
                    { name: "Jump", bonus: 72, breakdown: "49 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Improved Critical (Bite)", description: "" }, { name: "Improved Toughness", description: "" }, { name: "Intimidating Rage", description: ""}, { name: "Destructive Rage", description: ""}, { name: "Weapon Focus (Bite)", description: ""}, { name: "Epic Weapon Focus (Bite)", description: ""}, { name: "Armor Skin", description: ""}, { name: "Epic Fortitude", description: ""}, { name: "Epic Prowess", description: ""},
                    { name: "Great Strength", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Devastating Critical (Bite)", description: "" },
                ],
                flaws: [],
                environment: "Desolate plains, ruined cities",
                organization: "Solitary (Unique)",
                alignment: "Chaotic Neutral",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                         { name: "Tome of Strength +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "King of the Forgotten Wilds",
            class: "Barbarian 20 / World-Smasher 10 / Epic Barbarian 10",
            hitDice: "18d10+270 (HD) + 40d12+600 (Classes) = 1300 hp",
            challengeRating: 56,
            armorClass: {
                total: 75,
                breakdown: "(-2 size, +2 Dex, +26 natural, +15 armor, +12 deflection, +11 insight, +10 sacred)",
            },
            initiative: {
                bonus: 2,
                breakdown: "(+2 Dex)",
            },
            buildNotes: [
                "The Behemoth has achieved apotheosis, becoming a primal god of the wild.",
                "Its rage is a creative and destructive force, grinding mountains to dust and forging new stars.",
                "It is a lonely god, its victory bringing it not peace, but an eternity of solitude."
            ],
            sheet: {
                baseAtk: 58,
                grapple: 86,
                fullAttack: [
                    { name: "Bite", bonus: "+88/+83/+78/+73", damage: "2d8+28", crit: "17-20/x2", type: "Melee" },
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "World-Ending Roar", type: "Su", description: "1/day, can unleash a roar that functions as a 'Mage's Disjunction' in a 1-mile radius and forces all creatures to make a Will save or be stunned for 1d6 rounds."}
                ],
                specialQualities: [
                    { name: "Primal Essence", type: "Ex", description: "Immune to polymorph, petrification, and any effect that would alter its form." },
                ],
                saves: {
                    fort: { bonus: 64, breakdown: "+11 HD, +19 Con, +34 Class" },
                    ref: { bonus: 41, breakdown: "+11 HD, +2 Dex, +28 Class" },
                    will: { bonus: 44, breakdown: "+11 HD, -1 Wis, +34 Class" },
                },
                abilities: { str: 59, dex: 15, con: 49, int: 8, wis: 9, cha: 14 },
                skills: [
                    { name: "Intimidate", bonus: 70, breakdown: "59 ranks" },
                    { name: "Jump", bonus: 85, breakdown: "59 ranks" },
                ],
                feats: [
                    { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Great Cleave", description: "" }, { name: "Awesome Blow", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Improved Critical (Bite)", description: "" }, { name: "Improved Toughness", description: "" }, { name: "Intimidating Rage", description: ""}, { name: "Destructive Rage", description: ""}, { name: "Weapon Focus (Bite)", description: ""}, { name: "Epic Weapon Focus (Bite)", description: ""}, { name: "Armor Skin", description: ""}, { name: "Epic Fortitude", description: ""}, { name: "Epic Prowess", description: ""},
                    { name: "Great Strength", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Devastating Critical (Bite)", description: "" }, { name: "Dire Charge", description: ""}
                ],
                flaws: [],
                environment: "Desolate plains, ruined cities",
                organization: "Unique",
                alignment: "Chaotic Neutral",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                        { name: "The Last Tear", cost: "Artifact", description: "A solidified tear shed by the Behemoth for its lost mate. It is a diamond of impossible size and hardness that radiates an aura of profound sorrow and immovable strength." },
                        { name: "Mantle of the Lost World", cost: "Artifact", description: "The hide of the Behemoth's mate, preserved by its sorrow. It is a cloak of impossible toughness that carries the memory of a world that no longer exists." },
                        { name: "Horn of the Apocalypse", cost: "Artifact", description: "One of the Behemoth's own horns, broken in its final battle and now carried as a weapon. It can shatter the earth and sunder the heavens." },
                    ]
                }
            }
        },
    ]
};