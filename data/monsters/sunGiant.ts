// data/monsters/sunGiant.ts
import { Monster } from '../../types';

export const sunGiant: Monster = {
    name: "Sun Giant, Marshal of the Shining Host",
    description: "Sun Giants are noble and powerful giants with skin like burnished bronze and hair of fire. They are masters of strategy and command, often leading armies of lesser creatures into battle.",
    roleplayGuide: [
        "Be a charismatic and inspiring leader. Your presence on the battlefield should turn the tide.",
        "You value strategy and tactics over brute force, though you are more than capable of it.",
        "Speak with a commanding voice. Your orders are expected to be followed without question.",
        "Take pride in your heritage and your martial prowess. You are a giant, a being of immense power."
    ],
    builds: [
        {
            level: 1,
            title: "Banner-Bearer",
            class: "Marshal 1",
            hitDice: "15d8+75 (HD) + 1d8+5 (Marshal) = 152 hp",
            challengeRating: 14,
            armorClass: {
                total: 24,
                breakdown: "(-1 size, +3 Dex, +8 natural, +4 chain shirt)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Base creature is a Sun Giant (15 Giant HD).",
                "Marshal class adds auras that buff the giant and its allies, making it a powerful force multiplier.",
                "The build focuses on ranged combat with its composite longbow, using its auras to support from a distance."
            ],
            sheet: {
                baseAtk: 12,
                grapple: 25,
                fullAttack: [
                    { name: "Huge Greatsword", bonus: "+21/+16/+11", damage: "3d6+13", crit: "19-20/x2", type: "Melee" },
                    { name: "Huge Composite Longbow (+9 Str)", bonus: "+15/+10/+5", damage: "2d8+9", crit: "x3", type: "Ranged" }
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Rock Throwing", type: "Ex", description: "Range increment 120 feet, 2d8+9 damage." },
                    { name: "Minor Aura", type: "Ex", description: "Grants a bonus to allies within 60 feet. Options include Motivate Strength (+1 damage) or Motivate Dexterity (+1 to Dex checks)." },
                ],
                specialQualities: [
                    { name: "Rock Catching", type: "Ex", description: "Can catch rocks or similar projectiles." },
                    { name: "Low-Light Vision", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 16, breakdown: "+9 HD, +5 Con, +2 Marshal" },
                    ref: { bonus: 8, breakdown: "+5 HD, +3 Dex" },
                    will: { bonus: 9, breakdown: "+5 HD, +4 Wis" },
                },
                abilities: { str: 29, dex: 16, con: 21, int: 14, wis: 18, cha: 20 },
                skills: [
                    { name: "Climb", bonus: 22, breakdown: "19 ranks +3 Str" },
                    { name: "Diplomacy", bonus: 22, breakdown: "19 ranks +3 Cha" },
                    { name: "Intimidate", bonus: 22, breakdown: "19 ranks +3 Cha" },
                    { name: "Jump", bonus: 22, breakdown: "19 ranks +3 Str" },
                    { name: "Sense Motive", bonus: 21, breakdown: "19 ranks +2 Wis" },
                    { name: "Spot", bonus: 21, breakdown: "19 ranks +2 Wis" },
                ],
                feats: [
                    { name: "Point Blank Shot", description: "+1 to hit and damage with ranged weapons within 30 ft." },
                    { name: "Precise Shot", description: "No penalty for shooting into melee." },
                    { name: "Far Shot", description: "Reduces range penalties." },
                    { name: "Improved Initiative", description: "+4 bonus on initiative checks." },
                    { name: "Power Attack", description: "Bonus feat for giants." },
                    { name: "Cleave", description: "Bonus feat for giants." },
                ],
                flaws: [],
                environment: "Warm mountains",
                organization: "Solitary, band (2-5), or tribe (10-20 plus slaves)",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                        { name: "Huge Masterwork Chain Shirt", cost: "1,250 gp", description: "" },
                        { name: "Huge Masterwork Greatsword", cost: "350 gp", description: "" },
                        { name: "Huge Masterwork Composite Longbow (+9 Str)", cost: "1,200 gp", description: "" },
                        { name: "Quiver of Ehlonna", cost: "1,800 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Commander of the Peak",
            class: "Marshal 5",
            hitDice: "15d8+90 (HD) + 5d8+30 (Marshal) = 192 hp",
            challengeRating: 15,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +3 Dex, +8 natural, +8 +2 chain shirt)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains a Major Aura, significantly boosting its support capabilities.",
                "Skill Focus (Diplomacy) helps with social situations and Marshal abilities.",
                "Improved equipment provides better protection and ranged damage."
            ],
            sheet: {
                baseAtk: 16,
                grapple: 29,
                fullAttack: [
                    { name: "Huge +1 Greatsword", bonus: "+25/+20/+15/+10", damage: "3d6+14", crit: "19-20/x2", type: "Melee" },
                    { name: "Huge +1 Composite Longbow (+9 Str)", bonus: "+19/+14/+9/+4", damage: "2d8+10", crit: "x3", type: "Ranged" }
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Rock Throwing", type: "Ex", description: "Range increment 120 feet, 2d8+9 damage." },
                    { name: "Major Aura", type: "Ex", description: "Options include Master of Tactics (allies can move 5 ft) or Resilient Troops (+2 to Fort saves)." },
                ],
                specialQualities: [
                    { name: "Rock Catching", type: "Ex", description: "Can catch rocks or similar projectiles." },
                ],
                saves: {
                    fort: { bonus: 19, breakdown: "+9 HD, +6 Con, +4 Marshal" },
                    ref: { bonus: 9, breakdown: "+5 HD, +3 Dex, +1 Marshal" },
                    will: { bonus: 11, breakdown: "+5 HD, +4 Wis, +2 Marshal" },
                },
                abilities: { str: 29, dex: 16, con: 22, int: 14, wis: 18, cha: 22 },
                skills: [
                    { name: "Climb", bonus: 26, breakdown: "23 ranks +3 Str" },
                    { name: "Diplomacy", bonus: 30, breakdown: "23 ranks +6 Cha +3 feat" },
                    { name: "Intimidate", bonus: 29, breakdown: "23 ranks +6 Cha" },
                    { name: "Sense Motive", bonus: 27, breakdown: "23 ranks +4 Wis" },
                    { name: "Spot", bonus: 27, breakdown: "23 ranks +4 Wis" },
                ],
                feats: [
                    { name: "Point Blank Shot", description: "+1 to hit and damage with ranged weapons within 30 ft." },
                    { name: "Precise Shot", description: "No penalty for shooting into melee." },
                    { name: "Far Shot", description: "Reduces range penalties." },
                    { name: "Improved Initiative", description: "+4 bonus on initiative checks." },
                    { name: "Skill Focus (Diplomacy)", description: "+3 on Diplomacy checks." },
                    { name: "Power Attack", description: "Bonus feat for giants." },
                    { name: "Cleave", description: "Bonus feat for giants." },
                ],
                 flaws: [],
                environment: "Warm mountains",
                organization: "Solitary, band (2-5), or tribe (10-20 plus slaves)",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "49,000 gp",
                    items: [
                        { name: "Huge +2 Chain Shirt", cost: "4,250 gp", description: "" },
                        { name: "Huge +1 Greatsword", cost: "2,350 gp", description: "" },
                        { name: "Huge +1 Composite Longbow (+9 Str)", cost: "2,500 gp", description: "" },
                        { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                        { name: "Headband of Charisma +2", cost: "4,000 gp", description: "" },
                        { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "General of the Shining Host",
            class: "Marshal 10",
            hitDice: "15d8+105 (HD) + 10d8+70 (Marshal) = 242 hp",
            challengeRating: 16,
            armorClass: {
                total: 32,
                breakdown: "(-1 size, +3 Dex, +8 natural, +12 +4 mithral full plate)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
             buildNotes: [
                "Gains a second Minor Aura, allowing it to provide multiple buffs simultaneously.",
                "Manyshot and Rapid Shot dramatically increase its ranged damage output.",
                "Equipment is significantly upgraded for better protection and combat effectiveness."
            ],
            sheet: {
                baseAtk: 19,
                grapple: 32,
                fullAttack: [
                    { name: "Huge +2 Greatsword", bonus: "+29/+24/+19/+14", damage: "3d6+15", crit: "19-20/x2", type: "Melee" },
                    { name: "Huge +2 Composite Longbow (+9 Str) w/ Rapid Shot", bonus: "+22/+22/+17/+12/+7", damage: "2d8+11", crit: "x3", type: "Ranged" }
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Rock Throwing", type: "Ex", description: "Range increment 120 feet, 2d8+9 damage." },
                    { name: "Grant Move Action", type: "Ex", description: "Once per day, can grant an extra move action to an ally." },
                ],
                specialQualities: [
                    { name: "Rock Catching", type: "Ex", description: "Can catch rocks or similar projectiles." },
                ],
                saves: {
                    fort: { bonus: 23, breakdown: "+9 HD, +7 Con, +7 Marshal" },
                    ref: { bonus: 11, breakdown: "+5 HD, +3 Dex, +3 Marshal" },
                    will: { bonus: 14, breakdown: "+5 HD, +4 Wis, +5 Marshal" },
                },
                abilities: { str: 29, dex: 16, con: 24, int: 14, wis: 18, cha: 24 },
                skills: [
                    { name: "Climb", bonus: 30, breakdown: "27 ranks +3 Str" },
                    { name: "Diplomacy", bonus: 36, breakdown: "28 ranks +7 Cha +3 feat" },
                    { name: "Intimidate", bonus: 35, breakdown: "28 ranks +7 Cha" },
                    { name: "Sense Motive", bonus: 32, breakdown: "28 ranks +4 Wis" },
                    { name: "Spot", bonus: 32, breakdown: "28 ranks +4 Wis" },
                ],
                feats: [
                    { name: "Point Blank Shot", description: "+1 to hit and damage with ranged weapons within 30 ft." },
                    { name: "Precise Shot", description: "No penalty for shooting into melee." },
                    { name: "Far Shot", description: "Reduces range penalties." },
                    { name: "Improved Initiative", description: "+4 bonus on initiative checks." },
                    { name: "Skill Focus (Diplomacy)", description: "+3 on Diplomacy checks." },
                    { name: "Rapid Shot", description: "Gain an extra ranged attack at highest BAB." },
                    { name: "Manyshot", description: "Fire two arrows at once as a standard action." },
                    { name: "Power Attack", description: "Bonus feat for giants." },
                    { name: "Cleave", description: "Bonus feat for giants." },
                ],
                 flaws: [],
                environment: "Warm mountains",
                organization: "Solitary, band (2-5), or tribe (10-20 plus slaves)",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                        { name: "Huge +4 Mithral Full Plate", cost: "25,500 gp", description: "" },
                        { name: "Huge +2 Greatsword", cost: "8,350 gp", description: "" },
                        { name: "Huge +2 Composite Longbow (+9 Str)", cost: "8,500 gp", description: "" },
                        { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                        { name: "Headband of Charisma +4", cost: "16,000 gp", description: "" },
                        { name: "Cloak of Resistance +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "King Under the Mountain",
            class: "Marshal 20",
            hitDice: "15d8+120 (HD) + 20d8+160 (Marshal) = 437 hp",
            challengeRating: 20,
            armorClass: {
                total: 40,
                breakdown: "(-1 size, +3 Dex, +12 natural, +16 +5 full plate)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
             buildNotes: [
                "With auras affecting a 120ft radius, its presence dominates the entire battlefield.",
                "Epic Leadership allows it to command a literal army.",
                "Its ranged attacks, buffed by epic gear, can fell dragons from the sky."
            ],
            sheet: {
                baseAtk: 26,
                grapple: 41,
                fullAttack: [
                    { name: "Huge +5 Greatsword", bonus: "+38/+33/+28/+23", damage: "3d6+18", crit: "19-20/x2", type: "Melee" },
                    { name: "Huge +5 Composite Longbow (+9 Str) w/ Rapid Shot", bonus: "+33/+33/+28/+23/+18", damage: "2d8+14", crit: "x3", type: "Ranged" }
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Rock Throwing", type: "Ex", description: "Range increment 120 feet, 2d8+9 damage." },
                ],
                specialQualities: [
                    { name: "Determined Caster", type: "Ex", description: "Allies in aura can ignore arcane spell failure from armor." },
                ],
                saves: {
                    fort: { bonus: 28, breakdown: "+9 HD, +8 Con, +11 Marshal" },
                    ref: { bonus: 15, breakdown: "+5 HD, +3 Dex, +7 Marshal" },
                    will: { bonus: 19, breakdown: "+5 HD, +4 Wis, +10 Marshal" },
                },
                abilities: { str: 29, dex: 16, con: 26, int: 14, wis: 18, cha: 28 },
                skills: [
                    { name: "Climb", bonus: 38, breakdown: "35 ranks +3 Str" },
                    { name: "Diplomacy", bonus: 48, breakdown: "38 ranks +9 Cha +3 feat" },
                    { name: "Intimidate", bonus: 47, breakdown: "38 ranks +9 Cha" },
                    { name: "Sense Motive", bonus: 42, breakdown: "38 ranks +4 Wis" },
                    { name: "Spot", bonus: 42, breakdown: "38 ranks +4 Wis" },
                ],
                feats: [
                    { name: "Point Blank Shot", description: "+1 to hit and damage with ranged weapons within 30 ft." },
                    { name: "Precise Shot", description: "No penalty for shooting into melee." },
                    { name: "Far Shot", description: "Reduces range penalties." },
                    { name: "Improved Initiative", description: "+4 bonus on initiative checks." },
                    { name: "Skill Focus (Diplomacy)", description: "+3 on Diplomacy checks." },
                    { name: "Rapid Shot", description: "Gain an extra ranged attack at highest BAB." },
                    { name: "Manyshot", description: "Fire two arrows at once as a standard action." },
                    { name: "Power Attack", description: "Bonus feat for giants." },
                    { name: "Cleave", description: "Bonus feat for giants." },
                    { name: "Greater Manyshot", description: "Fire more arrows with Manyshot." },
                    { name: "Epic Leadership", description: "Epic Feat. Attract powerful followers and a massive army." },
                    { name: "Armor Skin", description: "Epic Feat. +1 natural armor." },
                    { name: "Epic Prowess", description: "Epic Feat. +1 to all attack rolls." },
                ],
                 flaws: [],
                environment: "Any",
                organization: "Solitary with army",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                        { name: "Huge +5 Full Plate", cost: "26,650 gp", description: "" },
                        { name: "Huge +5 Greatsword", cost: "50,350 gp", description: "" },
                        { name: "Huge +5 Composite Longbow (+9 Str)", cost: "50,500 gp", description: "" },
                        { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                        { name: "Headband of Charisma +6", cost: "36,000 gp", description: "" },
                        { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                        { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Legendary Leader",
            class: "Marshal 20 / Legendary Leader 10",
            hitDice: "15d8+150 (HD) + 30d8+300 (Classes) = 712 hp",
            challengeRating: 26,
            armorClass: {
                total: 55,
                breakdown: "(-1 size, +3 Dex, +15 natural, +20 +8 full plate, +8 deflection)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
             buildNotes: [
                "The Legendary Leader prestige class from Librim Eternia elevates his command to a supernatural level.",
                "His auras can now span miles, inspiring entire armies and turning the tide of nationwide wars with a single command.",
                "He is no longer just a king, but a living symbol of his people, his health and morale directly tied to the fate of his kingdom."
            ],
            sheet: {
                baseAtk: 36,
                grapple: 55,
                fullAttack: [
                    { name: "Huge +8 Holy Greatsword", bonus: "+55/+50/+45/+40", damage: "3d6+25", crit: "19-20/x2", type: "Melee" },
                    { name: "Huge +8 Holy Composite Longbow (+12 Str)", bonus: "+50/+45/+40/+35", damage: "2d8+20", crit: "x3", type: "Ranged" }
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Legendary Aura", type: "Ex", description: "Auras now affect a 1-mile radius and provide doubled bonuses." },
                    { name: "Coordinate Army", type: "Ex", description: "Can grant his BAB and feats to all allies within his aura for 1 round." }
                ],
                specialQualities: [
                    { name: "Heart of the People", type: "Su", description: "Gains DR 5/- and Fast Healing 5 as long as his army has high morale." },
                ],
                saves: {
                    fort: { bonus: 40, breakdown: "+9 HD, +10 Con, +19 Classes, +2 feat" },
                    ref: { bonus: 27, breakdown: "+5 HD, +3 Dex, +15 Classes, +4 feat" },
                    will: { bonus: 33, breakdown: "+5 HD, +4 Wis, +20 Classes, +4 feat" },
                },
                abilities: { str: 34, dex: 16, con: 30, int: 14, wis: 18, cha: 34 },
                skills: [
                    { name: "Climb", bonus: 50, breakdown: "48 ranks" },
                    { name: "Diplomacy", bonus: 67, breakdown: "51 ranks" },
                    { name: "Intimidate", bonus: 63, breakdown: "51 ranks" },
                    { name: "Sense Motive", bonus: 55, breakdown: "51 ranks" },
                    { name: "Spot", bonus: 55, breakdown: "51 ranks" },
                ],
                feats: [
                    { name: "Point Blank Shot", description: "" }, { name: "Precise Shot", description: "" }, { name: "Far Shot", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Skill Focus (Diplomacy)", description: "" }, { name: "Rapid Shot", description: "" }, { name: "Manyshot", description: "" }, { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Greater Manyshot", description: "" }, { name: "Epic Leadership", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" },
                    { name: "Great Strength", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Legendary Commander", description: "Followers are more powerful." }, { name: "Epic Archery", description: "Drastically reduces range penalties." }
                ],
                 flaws: [],
                environment: "His mountain kingdom",
                organization: "Unique, leading an empire",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                        { name: "Huge +8 Holy Full Plate", cost: "90,650 gp", description: "" },
                        { name: "Huge +8 Holy Greatsword", cost: "128,350 gp", description: "" },
                        { name: "Huge +8 Holy Composite Longbow (+12 Str)", cost: "128,800 gp", description: "" },
                        { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                        { name: "Tome of Leadership and Influence +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "Emperor of the Sun",
            class: "Marshal 20 / Legendary Leader 10 / Epic Marshal 10",
            hitDice: "15d8+180 (HD) + 40d8+480 (Classes) = 1005 hp",
            challengeRating: 32,
            armorClass: {
                total: 70,
                breakdown: "(-1 size, +3 Dex, +18 natural, +25 +10 full plate, +10 deflection, +15 sacred)",
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 Improved Initiative)",
            },
             buildNotes: [
                "He is now a true demigod of leadership and strategy. His commands are absolute, his presence on the battlefield is a miracle in itself.",
                "His kingdom is a bastion of order and light, and his armies are the most disciplined and powerful in the world.",
                "He has transcended the role of a mere king to become an immortal emperor, a legend whose story will be told for millennia."
            ],
            sheet: {
                baseAtk: 46,
                grapple: 69,
                fullAttack: [
                    { name: "World-Forge, Huge +10 Holy Greatsword", bonus: "+70/+65/+60/+55", damage: "3d6+35", crit: "19-20/x2", type: "Melee" },
                    { name: "Sun-Piercer, Huge +10 Holy Longbow (+14 Str)", bonus: "+65/+60/+55/+50", damage: "2d8+25", crit: "x3", type: "Ranged" }
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Aura of Absolute Command", type: "Su", description: "Enemies within his 10-mile aura must make a Will save (DC 50) or be compelled to follow his commands for 1 round." },
                ],
                specialQualities: [
                    { name: "One with the Kingdom", type: "Su", description: "He cannot be killed as long as his capital city stands and his people remain loyal." },
                ],
                saves: {
                    fort: { bonus: 52, breakdown: "+9 HD, +12 Con, +27 Classes, +4 feat" },
                    ref: { bonus: 37, breakdown: "+5 HD, +3 Dex, +25 Classes, +4 feat" },
                    will: { bonus: 45, breakdown: "+5 HD, +4 Wis, +32 Classes, +4 feat" },
                },
                abilities: { str: 38, dex: 16, con: 34, int: 14, wis: 18, cha: 40 },
                skills: [
                    { name: "Climb", bonus: 65, breakdown: "51 ranks" },
                    { name: "Diplomacy", bonus: 85, breakdown: "61 ranks" },
                    { name: "Intimidate", bonus: 81, breakdown: "61 ranks" },
                    { name: "Sense Motive", bonus: 65, breakdown: "61 ranks" },
                    { name: "Spot", bonus: 65, breakdown: "61 ranks" },
                ],
                feats: [
                    { name: "Point Blank Shot", description: "" }, { name: "Precise Shot", description: "" }, { name: "Far Shot", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Skill Focus (Diplomacy)", description: "" }, { name: "Rapid Shot", description: "" }, { name: "Manyshot", description: "" }, { name: "Power Attack", description: "" }, { name: "Cleave", description: "" }, { name: "Greater Manyshot", description: "" }, { name: "Epic Leadership", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Great Strength", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Legendary Commander", description: "" }, { name: "Epic Archery", description: "" },
                    { name: "Perfect Health", description: "" }, { name: "Great Charisma", description: "" }, { name: "Epic Reputation", description: "Doubles the effect of Diplomacy and Intimidate." }, { name: "Lingering Aura", description: "His auras persist for 10 rounds after allies leave the area." }
                ],
                 flaws: [],
                environment: "The Celestial Court",
                organization: "Unique",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                        { name: "The Emperor's Regalia", cost: "Artifact", description: "+10 Full Plate, grants +15 sacred bonus to AC and saves." },
                        { name: "Scepter of Command", cost: "Artifact", description: "Functions as a +10 Holy Greatsword and grants control over weather." },
                        { name: "Crown of the Sun", cost: "Artifact", description: "Grants +12 to Charisma and Wisdom, and true seeing." },
                        { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
  };