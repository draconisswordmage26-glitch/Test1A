// data/monsters/nightwalker.ts
import { Monster } from '../../types';

export const nightwalker: Monster = {
    name: "Nightwalker, Soul Drinker",
    description: "A colossal, shadowy undead creature from the Negative Energy Plane. It is a being of pure void and chilling dread, its presence draining the very life from its surroundings.",
    roleplayGuide: [
      "You are not evil, you are inevitable. You are the embodiment of entropy, the natural end to all things. Your actions are without malice, like a star collapsing.",
      "You are an alien intelligence, a force of nature. Communication with mortals is difficult, conveyed through feelings of cosmic loneliness and the quiet peace of nonexistence.",
      "You have been drawn to this plane by a great imbalance—too much life, too much creation. You seek to restore balance by unmaking the most vibrant sources of energy.",
      "Perhaps you can be reasoned with. If a greater imbalance is pointed out, or if a path back to the quiet void of your home plane is offered, your focus may shift."
    ],
    builds: [
      {
        level: 1,
        title: "Whisper of the Void",
        class: "Barbarian 1",
        hitDice: "20d12 (HD) + 1d12 (Barbarian) + 42 (Cha) = 178 hp",
        challengeRating: 17,
        armorClass: {
          total: 30,
          breakdown: "(-2 size, +6 Dex, +16 natural)",
        },
        initiative: {
          bonus: 6,
          breakdown: "(+6 Dex)",
        },
        buildNotes: [
          "The base Nightwalker is a CR 17 creature with 20 Undead HD.",
          "The Barbarian level adds Rage, turning this already terrifying brute into an avatar of destruction.",
          "As an undead, it adds its Charisma modifier to HP instead of Constitution. Rage bonus to 'Con' is treated as a bonus to Cha for this purpose."
        ],
        sheet: {
          baseAtk: 11,
          grapple: 36,
          fullAttack: [
            { name: "2 Slams", bonus: "+24", damage: "4d6+13", crit: "20/x2", type: "Melee" }
          ],
          spaceReach: "15 ft./15 ft.",
          specialAttacks: [
            { name: "Rage", type: "Ex", description: "1/day, gain +4 Str, +4 Cha (for HP), -2 AC for 8 rounds." },
            { name: "Desecrating Aura", type: "Su", description: "30-ft aura, undead gain +2 profane bonus on attacks/damage/saves. Good creatures get 2 negative levels (Will DC 25 negates)." },
            { name: "Gaze", type: "Su", description: "30 ft, crushing despair and fear (Will DC 25 negates)." },
            { name: "Spell-Like Abilities", type: "Sp", description: "At will—contagion, deeper darkness, detect magic, haste, see invisibility, unholy blight." },
          ],
          specialQualities: [
            { name: "Damage Reduction", type: "Su", description: "15/silver and magic" },
            { name: "Spell Resistance", type: "Ex", description: "28" },
            { name: "Undead Traits", type: "Ex", description: "Immunity to mind-affecting, poison, sleep, etc." }
          ],
          saves: {
            fort: { bonus: 15, breakdown: "+7 HD, +8 Cha, +2 Barb" },
            ref: { bonus: 14, breakdown: "+7 HD, +7 Dex" },
            will: { bonus: 17, breakdown: "+12 HD, +5 Wis" }
          },
          abilities: { str: 36, dex: 25, con: 0, int: 14, wis: 20, cha: 22 },
          skills: [
            { name: "Hide", bonus: 21, breakdown: "28 ranks -8 size" },
            { name: "Listen", bonus: 28, breakdown: "28 ranks" },
            { name: "Move Silently", bonus: 28, breakdown: "28 ranks" },
            { name: "Spot", bonus: 28, breakdown: "28 ranks" },
            { name: "Search", bonus: 25, breakdown: "25 ranks" },
          ],
          feats: [
            { name: "Awesome Blow", description: "Send smaller creatures flying with a successful hit." },
            { name: "Cleave", description: "Make an extra attack after dropping a creature." },
            { name: "Improved Bull Rush", description: "+4 on bull rush checks, no AoO." },
            { name: "Power Attack", description: "Trade attack bonus for damage." },
            { name: "Alertness", description: "+2 on Listen and Spot checks." },
            { name: "Improved Sunder", description: "+4 on sunder attempts, no AoO." },
            { name: "Great Cleave", description: "Continue cleaving after the first extra attack." },
          ],
          flaws: [],
          environment: "Negative Energy Plane",
          organization: "Solitary",
          alignment: "Chaotic Evil",
          levelAdjustment: "-",
          advancement: "By character class",
          equipment: {
            totalValue: "9,000 gp",
            items: [
                { name: "Amulet of Mighty Fists +1", cost: "4,000 gp", description: "Enhances its already powerful slam attacks."},
                { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" }
            ]
          }
        }
      },
      {
        level: 5,
        title: "Echo of Oblivion",
        class: "Barbarian 5",
        hitDice: "20d12 (HD) + 5d12 (Barbarian) + 75 (Cha) = 237 hp",
        challengeRating: 17,
        armorClass: { total: 30, breakdown: "(-2 size, +6 Dex, +16 natural)" },
        initiative: { bonus: 6, breakdown: "(+6 Dex)" },
        buildNotes: ["Gains Improved Uncanny Dodge, making it impossible to flank.", "More rages per day allow it to maintain peak destructive power across multiple encounters.", "Equipment focuses on enhancing its natural attacks and strength."],
        sheet: {
            baseAtk: 15,
            grapple: 41,
            fullAttack: [
                { name: "2 Slams", bonus: "+29", damage: "4d6+14", crit: "20/x2", type: "Melee" }
            ],
            spaceReach: "15 ft./15 ft.",
            specialAttacks: [
                { name: "Rage", type: "Ex", description: "2/day, gain +4 Str, +4 Cha (for HP), -2 AC." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "15/silver and magic, DR 1/- from Barbarian" },
                { name: "Spell Resistance", type: "Ex", description: "28" },
                { name: "Improved Uncanny Dodge", type: "Ex", description: "Cannot be flanked." },
            ],
            saves: {
                fort: { bonus: 19, breakdown: "+7 HD, +8 Cha, +4 Barb" },
                ref: { bonus: 15, breakdown: "+7 HD, +7 Dex, +1 Barb" },
                will: { bonus: 18, breakdown: "+12 HD, +5 Wis, +1 Barb" }
            },
            abilities: { str: 38, dex: 25, con: 0, int: 14, wis: 20, cha: 22 },
            skills: [
                { name: "Hide", bonus: 25, breakdown: "32 ranks -8 size" },
                { name: "Listen", bonus: 32, breakdown: "32 ranks" },
                { name: "Move Silently", bonus: 32, breakdown: "32 ranks" },
                { name: "Spot", bonus: 32, breakdown: "32 ranks" },
                { name: "Search", bonus: 29, breakdown: "29 ranks" },
            ],
            feats: [
                { name: "Awesome Blow", description: "Send smaller creatures flying with a successful hit." },
                { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                { name: "Improved Bull Rush", description: "+4 on bull rush checks, no AoO." },
                { name: "Power Attack", description: "Trade attack bonus for damage." },
                { name: "Alertness", description: "+2 on Listen and Spot checks." },
                { name: "Improved Sunder", description: "+4 on sunder attempts, no AoO." },
                { name: "Great Cleave", description: "Continue cleaving after the first extra attack." },
                { name: "Weapon Focus (Slam)", description: "+1 on attack rolls with slam." },
            ],
            flaws: [],
            environment: "Negative Energy Plane",
            organization: "Solitary",
            alignment: "Chaotic Evil",
            levelAdjustment: "-",
            advancement: "By character class",
            equipment: {
                totalValue: "49,000 gp",
                items: [
                    { name: "Amulet of Mighty Fists +2", cost: "16,000 gp", description: "" },
                    { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                    { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                ]
            }
        }
      },
      {
        level: 10,
        title: "Avatar of Entropy",
        class: "Barbarian 10",
        hitDice: "20d12 (HD) + 10d12 (Barbarian) + 120 (Cha) = 315 hp",
        challengeRating: 20,
        armorClass: { total: 32, breakdown: "(-2 size, +6 Dex, +16 natural, +2 deflection)" },
        initiative: { bonus: 6, breakdown: "(+6 Dex)" },
        buildNotes: ["Greater Rage makes it a truly apocalyptic force of nature.", "Damage Reduction from Barbarian stacks with its natural DR, making it very resilient.", "Equipment is top-tier, maximizing its physical prowess."],
        sheet: {
            baseAtk: 20,
            grapple: 48,
            fullAttack: [
                { name: "2 Slams", bonus: "+36/+31/+26/+21", damage: "4d6+16", crit: "20/x2", type: "Melee" }
            ],
            spaceReach: "15 ft./15 ft.",
            specialAttacks: [
                { name: "Greater Rage", type: "Ex", description: "3/day, gain +6 Str, +6 Cha (for HP), -2 AC." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "15/silver and magic, DR 3/- from Barbarian" },
                { name: "Spell Resistance", type: "Ex", description: "28" },
            ],
            saves: {
                fort: { bonus: 24, breakdown: "+7 HD, +10 Cha, +7 Barb" },
                ref: { bonus: 18, breakdown: "+7 HD, +7 Dex, +4 Barb" },
                will: { bonus: 21, breakdown: "+12 HD, +5 Wis, +4 Barb" }
            },
            abilities: { str: 42, dex: 25, con: 0, int: 14, wis: 20, cha: 24 },
            skills: [
                { name: "Hide", bonus: 30, breakdown: "37 ranks -8 size" },
                { name: "Listen", bonus: 37, breakdown: "37 ranks" },
                { name: "Move Silently", bonus: 37, breakdown: "37 ranks" },
                { name: "Spot", bonus: 37, breakdown: "37 ranks" },
                { name: "Search", bonus: 34, breakdown: "34 ranks" },
            ],
            feats: [
                { name: "Awesome Blow", description: "Send smaller creatures flying with a successful hit." },
                { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                { name: "Improved Bull Rush", description: "+4 on bull rush checks, no AoO." },
                { name: "Power Attack", description: "Trade attack bonus for damage." },
                { name: "Alertness", description: "+2 on Listen and Spot checks." },
                { name: "Improved Sunder", description: "+4 on sunder attempts, no AoO." },
                { name: "Great Cleave", description: "Continue cleaving after the first extra attack." },
                { name: "Weapon Focus (Slam)", description: "+1 on attack rolls with slam." },
                { name: "Improved Critical (Slam)", description: "Threat range with slam becomes 19-20." },
            ],
            flaws: [],
            environment: "Negative Energy Plane",
            organization: "Solitary",
            alignment: "Chaotic Evil",
            levelAdjustment: "-",
            advancement: "By character class",
            equipment: {
                totalValue: "185,000 gp",
                items: [
                    { name: "Amulet of Mighty Fists +4", cost: "64,000 gp", description: "" },
                    { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                    { name: "Cloak of Charisma +2", cost: "4,000 gp", description: "" },
                    { name: "Ring of Protection +2", cost: "8,000 gp", description: "" },
                    { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                ]
            }
        }
      },
      {
        level: 20,
        title: "The Final Silence",
        class: "Barbarian 20",
        hitDice: "20d12 (HD) + 20d12 (Barbarian) + 240 (Cha) = 500 hp",
        challengeRating: 22,
        armorClass: { total: 40, breakdown: "(-2 size, +6 Dex, +16 natural, +5 deflection, +5 natural armor bonus)" },
        initiative: { bonus: 6, breakdown: "(+6 Dex)" },
        buildNotes: ["Tireless Rage means it never stops being a nigh-unstoppable engine of destruction.", "Mighty Rage grants it immense strength.", "Epic feats focus on making it tougher and more destructive."],
        sheet: {
            baseAtk: 30,
            grapple: 62,
            fullAttack: [
                { name: "2 Slams", bonus: "+50/+45/+40/+35", damage: "4d6+22", crit: "19-20/x2", type: "Melee" }
            ],
            spaceReach: "15 ft./15 ft.",
            specialAttacks: [
                { name: "Mighty Rage", type: "Ex", description: "6/day, gain +8 Str, +8 Cha (for HP), -2 AC." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "20/silver and epic, DR 5/- from Barbarian" },
                { name: "Spell Resistance", type: "Ex", description: "32" },
            ],
            saves: {
                fort: { bonus: 32, breakdown: "+7 HD, +13 Cha, +12 Barb" },
                ref: { bonus: 21, breakdown: "+7 HD, +7 Dex, +7 Barb" },
                will: { bonus: 26, breakdown: "+12 HD, +7 Wis, +7 Barb" }
            },
            abilities: { str: 50, dex: 25, con: 0, int: 14, wis: 24, cha: 28 },
            skills: [
                { name: "Hide", bonus: 39, breakdown: "46 ranks -8 size" },
                { name: "Listen", bonus: 46, breakdown: "46 ranks" },
                { name: "Move Silently", bonus: 46, breakdown: "46 ranks" },
                { name: "Spot", bonus: 46, breakdown: "46 ranks" },
                { name: "Search", bonus: 43, breakdown: "43 ranks" },
            ],
            feats: [
                { name: "Awesome Blow", description: "Send smaller creatures flying." },
                { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                { name: "Improved Bull Rush", description: "+4 on bull rush checks, no AoO." },
                { name: "Power Attack", description: "Trade attack bonus for damage." },
                { name: "Alertness", description: "+2 on Listen and Spot checks." },
                { name: "Improved Sunder", description: "+4 on sunder attempts, no AoO." },
                { name: "Great Cleave", description: "Continue cleaving after the first extra attack." },
                { name: "Weapon Focus (Slam)", description: "+1 on attack rolls with slam." },
                { name: "Improved Critical (Slam)", description: "Threat range with slam becomes 19-20." },
                { name: "Epic Weapon Focus (Slam)", description: "+2 attack with slam." },
                { name: "Armor Skin", description: "+1 natural armor." },
                { name: "Epic Toughness", description: "Gain 30 bonus HP." },
                { name: "Devastating Critical (Slam)", description: "Fort DC 36 on critical hit or die." },
                { name: "Overwhelming Critical (Slam)", description: "+1d6 critical hit damage." },
                { name: "Epic Prowess", description: "+1 to all attacks." },
            ],
            flaws: [],
            environment: "Negative Energy Plane",
            organization: "Solitary",
            alignment: "True Neutral",
            levelAdjustment: "-",
            advancement: "By character class",
            equipment: {
                totalValue: "760,000 gp",
                items: [
                     { name: "Amulet of Mighty Fists +5", cost: "100,000 gp", description: "" },
                     { name: "Belt of Giant Strength +6", cost: "36,000 gp", description: "" },
                     { name: "Cloak of Charisma +6", cost: "36,000 gp", description: "" },
                     { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                     { name: "Manual of Gainful Exercise +3", cost: "82,500 gp", description: "+3 inherent bonus to Strength." },
                     { name: "Tome of Leadership and Influence +3", cost: "82,500 gp", description: "+3 inherent bonus to Charisma." },
                ]
            }
        }
      },
      {
        level: 30,
        title: "World-Ender",
        class: "Barbarian 20 / World-Ender 10",
        hitDice: "20d12 (HD) + 30d12 (Classes) + 450 (Cha) = 825 hp",
        challengeRating: 28,
        armorClass: { total: 55, breakdown: "(-2 size, +6 Dex, +20 natural, +10 deflection, +11 insight)" },
        initiative: { bonus: 6, breakdown: "(+6 Dex)" },
        buildNotes: ["The World-Ender prestige class from Librim Eternia transforms this creature from a mindless force into a methodical agent of destruction.", "It gains intelligence and tactical cunning, focusing its destructive power with terrifying efficiency.", "Its goal is no longer just unmaking, but ensuring that what is unmade can never be remade, erasing things from existence itself."],
        sheet: {
            baseAtk: 40,
            grapple: 78,
            fullAttack: [
                { name: "2 Slams", bonus: "+68/+63/+58/+53", damage: "4d6+30 + 2d6 unmaking", crit: "19-20/x2", type: "Melee" }
            ],
            spaceReach: "15 ft./15 ft.",
            specialAttacks: [
                { name: "Ruinous Rage", type: "Ex", description: "Rage gains +10 Str/Cha, and its attacks deal 'unmaking' damage that can only be healed by epic magic." },
                { name: "Shatter Reality", type: "Su", description: "As a full-round action, can attempt to shatter a 30-ft area into nothingness." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "25/silver, epic, and lawful" },
                { name: "Spell Resistance", type: "Ex", description: "38" },
                { name: "Final End", type: "Su", description: "Creatures slain by the World-Ender cannot be resurrected by non-deific magic." },
            ],
            saves: {
                fort: { bonus: 44, breakdown: "+7 HD, +15 Cha, +22 Classes" },
                ref: { bonus: 31, breakdown: "+7 HD, +7 Dex, +17 Classes" },
                will: { bonus: 38, breakdown: "+12 HD, +9 Wis, +17 Classes" }
            },
            abilities: { str: 58, dex: 25, con: 0, int: 18, wis: 28, cha: 32 },
            skills: [
                { name: "Hide", bonus: 51, breakdown: "58 ranks -8 size" },
                { name: "Listen", bonus: 63, breakdown: "58 ranks" },
                { name: "Move Silently", bonus: 61, breakdown: "58 ranks" },
                { name: "Spot", bonus: 63, breakdown: "58 ranks" },
                { name: "Knowledge (the planes)", bonus: 55, breakdown: "58 ranks" },
            ],
            feats: [
                { name: "Awesome Blow", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Power Attack", description: "" }, { name: "Alertness", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Great Cleave", description: "" }, { name: "Weapon Focus (Slam)", description: "" }, { name: "Improved Critical (Slam)", description: "" }, { name: "Epic Weapon Focus (Slam)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Devastating Critical (Slam)", description: "" }, { name: "Overwhelming Critical (Slam)", description: "" }, { name: "Epic Prowess", description: "" },
                { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Ruinous Rage", description: "Epic Barbarian feat." }, { name: "Dire Charge", description: "" },
            ],
            flaws: [],
            environment: "The end of time",
            organization: "Solitary",
            alignment: "True Neutral",
            levelAdjustment: "-",
            advancement: "By character class",
            equipment: {
                totalValue: "3,000,000 gp",
                items: [
                     { name: "Amulet of Mighty Fists +8", cost: "256,000 gp", description: "" },
                     { name: "Belt of Giant Strength +10", cost: "100,000 gp", description: "" },
                     { name: "Cloak of Charisma +8", cost: "64,000 gp", description: "" },
                     { name: "Ring of Protection +10", cost: "200,000 gp", description: "" },
                     { name: "Manual of Gainful Exercise +5", cost: "137,500 gp", description: "" },
                     { name: "Tome of Leadership and Influence +5", cost: "137,500 gp", description: "" },
                ]
            }
        }
      },
      {
        level: 40,
        title: "The Last Constant",
        class: "Barbarian 20 / World-Ender 10 / Epic Barbarian 10",
        hitDice: "20d12 (HD) + 40d12 (Classes) + 660 (Cha) = 1110 hp",
        challengeRating: 36,
        armorClass: { total: 70, breakdown: "(-2 size, +6 Dex, +22 natural, +12 deflection, +15 insight, +17 sacred)" },
        initiative: { bonus: 6, breakdown: "(+6 Dex)" },
        buildNotes: ["Having mastered its role as the entropy of the cosmos, it transcends rage and becomes a state of perfect, inevitable silence.", "Its power is no longer about simple destruction, but about enforcing the fundamental law that all things must end.", "It is the final period at the end of the universe's last sentence."],
        sheet: {
            baseAtk: 50,
            grapple: 92,
            fullAttack: [
                { name: "2 Slams of Finality", bonus: "+82/+77/+72/+67", damage: "4d6+40 + 4d6 unmaking", crit: "19-20/x2", type: "Melee" }
            ],
            spaceReach: "15 ft./15 ft.",
            specialAttacks: [
                { name: "Absolute Destruction", type: "Su", description: "Any object or creature brought to 0 hit points is utterly annihilated, bypassing immunities to disintegration." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "30/deific" },
                { name: "Spell Immunity", type: "Ex", description: "Immune to all spells of 9th level or lower." },
                { name: "One with the Void", type: "Ex", description: "Immune to all mind-affecting effects and can't be detected by divination magic short of a deity's." },
            ],
            saves: {
                fort: { bonus: 55, breakdown: "+7 HD, +18 Cha, +30 Classes" },
                ref: { bonus: 40, breakdown: "+7 HD, +7 Dex, +26 Classes" },
                will: { bonus: 49, breakdown: "+12 HD, +11 Wis, +26 Classes" }
            },
            abilities: { str: 66, dex: 25, con: 0, int: 22, wis: 32, cha: 38 },
            skills: [
                { name: "Hide", bonus: 63, breakdown: "68 ranks -8 size" },
                { name: "Listen", bonus: 77, breakdown: "68 ranks" },
                { name: "Move Silently", bonus: 75, breakdown: "68 ranks" },
                { name: "Spot", bonus: 77, breakdown: "68 ranks" },
                { name: "Knowledge (the planes)", bonus: 70, breakdown: "68 ranks" },
            ],
            feats: [
                 { name: "Awesome Blow", description: "" }, { name: "Cleave", description: "" }, { name: "Improved Bull Rush", description: "" }, { name: "Power Attack", description: "" }, { name: "Alertness", description: "" }, { name: "Improved Sunder", description: "" }, { name: "Great Cleave", description: "" }, { name: "Weapon Focus (Slam)", description: "" }, { name: "Improved Critical (Slam)", description: "" }, { name: "Epic Weapon Focus (Slam)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Devastating Critical (Slam)", description: "" }, { name: "Overwhelming Critical (Slam)", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Ruinous Rage", description: "" }, { name: "Dire Charge", description: "" },
                 { name: "Lord of Nightmares", description: "Aura causes fear and despair." }, { name: "Perfect Health", description: "Immunity to diseases and poisons." }, { name: "Epic Weapon Specialization (Slam)", description: "" }, { name: "Unstoppable Rage", description: "Rage cannot be ended prematurely." }
            ],
            flaws: [],
            environment: "The Great Nothingness",
            organization: "Unique",
            alignment: "True Neutral",
            levelAdjustment: "-",
            advancement: "-",
            equipment: {
                totalValue: "12,000,000 gp",
                items: [
                     { name: "Heart of the Void", cost: "Artifact", description: "" },
                     { name: "Shroud of Nonexistence", cost: "Artifact", description: "" },
                     { name: "Gauntlets of Utter Annihilation", cost: "Artifact", description: "" },
                     { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                ]
            }
        }
      }
    ]
  };