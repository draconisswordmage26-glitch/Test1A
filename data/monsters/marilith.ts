// data/monsters/marilith.ts
import { Monster } from '../../types';

export const marilith: Monster = {
    name: "Marilith, Blade of the Abyss",
    description: "A powerful demon with the upper body of a humanoid female and the lower body of a great serpent. They possess six arms, each capable of wielding a weapon, making them terrifying whirlwinds of destruction in combat.",
    roleplayGuide: [
      "You are a weary general, a master strategist trapped in the eternal, pointless Blood War. Your arrogance is a shield, forged from millennia of battle and betrayal.",
      "You see combat as a grim, deadly art form. You take no joy in it, only a professional satisfaction in a victory well-executed.",
      "You despise Chaos for its own sake. You seek order and efficiency, even within the Abyss, and see the endless war as the ultimate inefficiency.",
      "You are pragmatic. You will ally with anyone—even celestials—if it serves your ultimate goal: escaping the Blood War and carving out your own dominion, free from the whims of demon lords."
    ],
    builds: [
      {
        level: 1,
        title: "Abyssal Duelist",
        class: "Warblade 1",
        hitDice: "16d8+128 (HD) + 1d12+8 (Warblade) = 212 hp",
        challengeRating: 17,
        armorClass: {
          total: 29,
          breakdown: "(−1 size, +9 Dex, +11 natural)",
        },
        initiative: {
          bonus: 9,
          breakdown: "(+9 Dex)",
        },
        buildNotes: [
          "The base Marilith is a CR 17 threat with 16 Outsider HD.",
          "Adding a Warblade level provides tactical maneuvers without significantly increasing CR.",
          "Maneuvers from Iron Heart and Diamond Mind add precision and resilience."
        ],
        sheet: {
          baseAtk: 17, // 16 HD + 1 Warblade
          grapple: 35,
          fullAttack: [
            { name: "Primary Masterwork Longsword", bonus: "+29/+24/+19/+14", damage: "2d6+9", crit: "19-20/x2", type: "Melee" },
            { name: "5 Secondary Masterwork Longswords", bonus: "+29", damage: "2d6+4", crit: "19-20/x2", type: "Melee" },
            { name: "Tail Slap", bonus: "+24", damage: "4d6+4", crit: "20/x2", type: "Melee" },
          ],
          spaceReach: "10 ft./10 ft.",
          specialAttacks: [
            { name: "Martial Maneuvers", type: "Ex", description: "Can ready 3 maneuvers from disciplines like Iron Heart and Diamond Mind." },
            { name: "Constrict", type: "Ex", description: "On a successful grapple check, automatically deals 4d6+13 points of damage." },
            { name: "Spell-Like Abilities", type: "Sp", description: "At will—align weapon, blade barrier (DC 22), magic weapon, project image (DC 22), see invisibility, telekinesis (DC 21), teleport, unholy aura (DC 24)." },
            { name: "Summon Demon", type: "Sp", description: "Once per day, can summon 1d10 dretches, 1d4 babau, or one nalfeshnee, glabrezu, or hezrou (50% chance)." }
          ],
          specialQualities: [
            { name: "Damage Reduction", type: "Su", description: "10/good and cold iron" },
            { name: "Spell Resistance", type: "Ex", description: "28" },
          ],
          saves: {
            fort: { bonus: 20, breakdown: "+10 HD, +8 Con, +2 Warblade" },
            ref: { bonus: 19, breakdown: "+10 HD, +9 Dex" },
            will: { bonus: 12, breakdown: "+10 HD, +2 Wis" }
          },
          abilities: { str: 29, dex: 29, con: 27, int: 18, wis: 18, cha: 24 },
          skills: [
              { name: "Bluff", bonus: 29, breakdown: "29 ranks" },
              { name: "Concentration", bonus: 30, breakdown: "30 ranks" },
              { name: "Diplomacy", bonus: 31, breakdown: "29 ranks +2 synergy" },
              { name: "Intimidate", bonus: 31, breakdown: "29 ranks +2 synergy" },
              { name: "Sense Motive", bonus: 26, breakdown: "26 ranks" },
          ],
          feats: [
            { name: "Combat Reflexes", description: "Make extra attacks of opportunity." },
            { name: "Multiweapon Fighting", description: "Reduces penalties for fighting with multiple weapons." },
            { name: "Improved Multiweapon Fighting", description: "Grants a second attack with each off-hand weapon." },
            { name: "Greater Multiweapon Fighting", description: "Grants a third attack with each off-hand weapon." },
            { name: "Weapon Focus (Longsword)", description: "+1 to attack rolls with longswords." },
            { name: "Power Attack", description: "Trade attack bonus for damage." },
          ],
          flaws: [],
          environment: "The Abyss",
          organization: "Solitary, pair, or troop (1 marilith, 2-5 glabrezus)",
          alignment: "Chaotic Evil",
          levelAdjustment: "-",
          advancement: "By character class",
          equipment: {
            totalValue: "9,000 gp",
            items: [
              { name: "Six Masterwork Longswords", cost: "1,900 gp", description: "" },
              { name: "Amulet of Natural Armor +1", cost: "2,000 gp", description: "" },
              { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
            ]
          }
        }
      },
      {
        level: 5,
        title: "Six-Armed Strategist",
        class: "Warblade 5",
        hitDice: "16d8+128 (HD) + 5d12+40 (Warblade) = 252 hp",
        challengeRating: 17,
        armorClass: { total: 33, breakdown: "(−1 size, +9 Dex, +11 natural, +4 Int)" },
        initiative: { bonus: 9, breakdown: "(+9 Dex)" },
        buildNotes: ["Battle Clarity adds her high Intelligence bonus to Reflex saves, shoring up a potential weakness.", "Access to 3rd-level maneuvers provides powerful new combat options.", "Equipment improves her already formidable offensive power."],
        sheet: {
            baseAtk: 21,
            grapple: 39,
            fullAttack: [
                { name: "Primary +2 Longsword", bonus: "+33/+28/+23/+18", damage: "2d6+11", crit: "19-20/x2", type: "Melee" },
                { name: "5 Secondary +2 Longswords", bonus: "+33", damage: "2d6+5", crit: "19-20/x2", type: "Melee" },
            ],
            spaceReach: "10 ft./10 ft.",
            specialAttacks: [
                { name: "Martial Maneuvers", type: "Ex", description: "Can ready 4 maneuvers, access to 3rd-level maneuvers." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "10/good and cold iron" },
                { name: "Spell Resistance", type: "Ex", description: "28" },
                { name: "Battle Clarity", type: "Ex", description: "Add Intelligence bonus to Reflex saves." },
            ],
            saves: {
                fort: { bonus: 22, breakdown: "+10 HD, +8 Con, +4 Warblade" },
                ref: { bonus: 24, breakdown: "+10 HD, +9 Dex, +1 Warblade, +4 Int" },
                will: { bonus: 13, breakdown: "+10 HD, +2 Wis, +1 Warblade" }
            },
            abilities: { str: 29, dex: 29, con: 27, int: 18, wis: 18, cha: 24 },
            skills: [
                { name: "Bluff", bonus: 33, breakdown: "33 ranks" },
                { name: "Concentration", bonus: 34, breakdown: "34 ranks" },
                { name: "Diplomacy", bonus: 35, breakdown: "33 ranks +2 synergy" },
                { name: "Intimidate", bonus: 35, breakdown: "33 ranks +2 synergy" },
                { name: "Sense Motive", bonus: 30, breakdown: "30 ranks" },
                { name: "Tumble", bonus: 35, breakdown: "33 ranks" },
            ],
            feats: [
                { name: "Combat Reflexes", description: "Make extra attacks of opportunity." },
                { name: "Multiweapon Fighting", description: "Reduces penalties for fighting with multiple weapons." },
                { name: "Improved Multiweapon Fighting", description: "Grants a second attack with each off-hand weapon." },
                { name: "Greater Multiweapon Fighting", description: "Grants a third attack with each off-hand weapon." },
                { name: "Weapon Focus (Longsword)", description: "+1 to attack rolls with longswords." },
                { name: "Power Attack", description: "Trade attack bonus for damage." },
                { name: "Ironheart Aura", description: "Allies within 30ft gain +2 bonus on saves." }
            ],
            flaws: [],
            environment: "The Abyss",
            organization: "Solitary or troop",
            alignment: "Chaotic Evil",
            levelAdjustment: "-",
            advancement: "By character class",
            equipment: {
                totalValue: "49,000 gp",
                items: [
                    { name: "Six +2 Longswords", cost: "48,780 gp", description: "" },
                    { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                ]
            }
        }
      },
      {
        level: 10,
        title: "Warlord of the Endless Dance",
        class: "Warblade 10",
        hitDice: "16d8+144 (HD) + 10d12+90 (Warblade) = 314 hp",
        challengeRating: 20,
        armorClass: { total: 35, breakdown: "(−1 size, +9 Dex, +11 natural, +4 Int, +2 deflection)" },
        initiative: { bonus: 9, breakdown: "(+9 Dex)" },
        buildNotes: ["Gains access to 5th-level maneuvers like Iron Heart Surge, allowing her to shrug off debilitating effects.", "Greater Weapon Focus and Specialization increase her accuracy and damage significantly.", "Top-tier equipment makes her a true abyssal general."],
        sheet: {
            baseAtk: 26,
            grapple: 45,
            fullAttack: [
                { name: "Primary +3 Keen Longsword", bonus: "+38/+33/+28/+23", damage: "2d6+14", crit: "17-20/x2", type: "Melee" },
                { name: "5 Secondary +3 Keen Longswords", bonus: "+38", damage: "2d6+7", crit: "17-20/x2", type: "Melee" },
            ],
            spaceReach: "10 ft./10 ft.",
            specialAttacks: [
                { name: "Martial Maneuvers", type: "Ex", description: "Can ready 6 maneuvers, access to 5th-level maneuvers." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "10/good and cold iron" },
                { name: "Spell Resistance", type: "Ex", description: "28" },
            ],
            saves: {
                fort: { bonus: 26, breakdown: "+10 HD, +9 Con, +7 Warblade" },
                ref: { bonus: 27, breakdown: "+10 HD, +9 Dex, +4 Warblade, +4 Int" },
                will: { bonus: 16, breakdown: "+10 HD, +2 Wis, +4 Warblade" }
            },
            abilities: { str: 31, dex: 29, con: 29, int: 18, wis: 18, cha: 24 },
            skills: [
                { name: "Bluff", bonus: 38, breakdown: "38 ranks" },
                { name: "Concentration", bonus: 39, breakdown: "39 ranks" },
                { name: "Diplomacy", bonus: 40, breakdown: "38 ranks +2 synergy" },
                { name: "Intimidate", bonus: 40, breakdown: "38 ranks +2 synergy" },
                { name: "Sense Motive", bonus: 35, breakdown: "35 ranks" },
                { name: "Tumble", bonus: 40, breakdown: "38 ranks" },
            ],
            feats: [
                { name: "Combat Reflexes", description: "Make extra attacks of opportunity." },
                { name: "Multiweapon Fighting", description: "Reduces penalties for fighting with multiple weapons." },
                { name: "Improved Multiweapon Fighting", description: "Grants a second attack with each off-hand weapon." },
                { name: "Greater Multiweapon Fighting", description: "Grants a third attack with each off-hand weapon." },
                { name: "Weapon Focus (Longsword)", description: "+1 to attack rolls with longswords." },
                { name: "Power Attack", description: "Trade attack bonus for damage." },
                { name: "Ironheart Aura", description: "Allies within 30ft gain +2 bonus on saves." },
                { name: "Greater Weapon Focus (Longsword)", description: "Another +1 to attack rolls with longswords." },
                { name: "Weapon Specialization (Longsword)", description: "+2 to damage with longswords (Fighter bonus feat)." },
            ],
            flaws: [],
            environment: "The Abyss",
            organization: "Solitary or troop",
            alignment: "Chaotic Evil",
            levelAdjustment: "-",
            advancement: "By character class",
            equipment: {
                totalValue: "185,000 gp",
                items: [
                    { name: "Six +3 Keen Longswords", cost: "108,990 gp", description: "" },
                    { name: "Belt of Giant Strength +2", cost: "4,000 gp", description: "" },
                    { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                    { name: "Ring of Protection +2", cost: "8,000 gp", description: "" },
                    { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                ]
            }
        }
      },
       {
        level: 20,
        title: "Queen of the Blade Tide",
        class: "Warblade 20",
        hitDice: "16d8+160 (HD) + 20d12+200 (Warblade) = 500 hp",
        challengeRating: 22,
        armorClass: { total: 48, breakdown: "(−1 size, +12 Dex, +11 natural, +5 Int, +5 deflection, +6 armor)" },
        initiative: { bonus: 12, breakdown: "(+12 Dex)" },
        buildNotes: ["Stance Mastery allows her to have two active stances, combining offense and defense.", "Access to 9th-level maneuvers like 'Strike of Perfect Clarity' allows her to overcome any DR.", "Epic-level gear makes her a whirlwind of death."],
        sheet: {
            baseAtk: 36,
            grapple: 57,
            fullAttack: [
                { name: "Primary +5 Vorpal Longsword", bonus: "+51/+46/+41/+36", damage: "2d6+20", crit: "17-20/x2", type: "Melee" },
                { name: "5 Secondary +5 Vorpal Longswords", bonus: "+51", damage: "2d6+12", crit: "17-20/x2", type: "Melee" },
            ],
            spaceReach: "10 ft./10 ft.",
            specialAttacks: [
                { name: "Martial Maneuvers", type: "Ex", description: "Access to 9th-level maneuvers." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "15/good, cold iron, and epic" },
                { name: "Spell Resistance", type: "Ex", description: "32" },
            ],
            saves: {
                fort: { bonus: 34, breakdown: "+10 HD, +10 Con, +12 Warblade, +2 resistance" },
                ref: { bonus: 34, breakdown: "+10 HD, +12 Dex, +7 Warblade, +5 Int" },
                will: { bonus: 24, breakdown: "+10 HD, +4 Wis, +8 Warblade, +2 resistance" }
            },
            abilities: { str: 34, dex: 34, con: 30, int: 20, wis: 18, cha: 26 },
            skills: [
                { name: "Bluff", bonus: 48, breakdown: "48 ranks" },
                { name: "Concentration", bonus: 49, breakdown: "49 ranks" },
                { name: "Diplomacy", bonus: 50, breakdown: "48 ranks +2 synergy" },
                { name: "Intimidate", bonus: 50, breakdown: "48 ranks +2 synergy" },
                { name: "Sense Motive", bonus: 45, breakdown: "45 ranks" },
                { name: "Tumble", bonus: 51, breakdown: "48 ranks" },
            ],
            feats: [
                { name: "Combat Reflexes", description: "Make extra attacks of opportunity." },
                { name: "Multiweapon Fighting", description: "Reduces penalties for fighting with multiple weapons." },
                { name: "Improved Multiweapon Fighting", description: "Grants a second attack with each off-hand weapon." },
                { name: "Greater Multiweapon Fighting", description: "Grants a third attack with each off-hand weapon." },
                { name: "Weapon Focus (Longsword)", description: "+1 to attack rolls with longswords." },
                { name: "Power Attack", description: "Trade attack bonus for damage." },
                { name: "Ironheart Aura", description: "Allies within 30ft gain +2 bonus on saves." },
                { name: "Greater Weapon Focus (Longsword)", description: "Another +1 to attack rolls with longswords." },
                { name: "Weapon Specialization (Longsword)", description: "+2 to damage with longswords." },
                { name: "Stormguard Warrior", description: "Trade attacks for AC or damage bonuses." },
                { name: "Robilar's Gambit", description: "Make AoOs against foes who attack you, but grant them an attack bonus." },
                { name: "Epic Weapon Focus (Longsword)", description: "Epic Feat, +2 attack with longsword." },
                { name: "Epic Weapon Specialization (Longsword)", description: "Epic Feat, +4 damage with longsword." },
                { name: "Perfect Multiweapon Fighting", description: "Epic Feat, No penalty for secondary weapons." },
            ],
            flaws: [],
            environment: "The Abyss",
            organization: "Solitary",
            alignment: "Chaotic Neutral",
            levelAdjustment: "-",
            advancement: "By character class",
            equipment: {
                totalValue: "760,000 gp",
                items: [
                    { name: "Six +5 Vorpal Longswords", cost: "600,990 gp", description: "A legendary arsenal." },
                    { name: "Belt of Giant Strength +6", cost: "36,000 gp", description: "" },
                    { name: "Gloves of Dexterity +6", cost: "36,000 gp", description: "" },
                    { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                    { name: "Bracers of Armor +6", cost: "36,000 gp", description: "" },
                    { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                ]
            }
        }
      },
      {
        level: 30,
        title: "Abyssal Hurricane",
        class: "Warblade 20 / Unstoppable Whirlwind 10",
        hitDice: "16d8+192 (HD) + 20d12+240 (Warblade) + 10d10+120 (UW) = 870 hp",
        challengeRating: 28,
        armorClass: { total: 65, breakdown: "(−1 size, +15 Dex, +15 natural, +6 Int, +10 deflection, +10 armor)" },
        initiative: { bonus: 15, breakdown: "(+15 Dex)" },
        buildNotes: ["The Unstoppable Whirlwind prestige class from Librim Eternia elevates her multi-weapon fighting to an art form.", "She can move and make full attacks, becoming a true hurricane of steel across the battlefield.", "Her speed and number of attacks are nearly impossible to track, a blur of motion and death."],
        sheet: {
            baseAtk: 46,
            grapple: 72,
            fullAttack: [
                { name: "Primary +8 Keen Anarchic Longsword", bonus: "+70/+65/+60/+55", damage: "2d6+30", crit: "17-20/x2", type: "Melee" },
                { name: "5 Secondary +8 Keen Anarchic Longswords", bonus: "+70", damage: "2d6+20", crit: "17-20/x2", type: "Melee" },
            ],
            spaceReach: "10 ft./10 ft.",
            specialAttacks: [
                { name: "Roving Whirlwind", type: "Ex", description: "Can move up to her speed and make a full attack, spreading attacks out among any targets in reach." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "20/good, cold iron, and epic" },
                { name: "Spell Resistance", type: "Ex", description: "38" },
                { name: "Uncanny Dodge", type: "Ex", description: "Retains Dex bonus to AC if flat-footed." },
            ],
            saves: {
                fort: { bonus: 46, breakdown: "+10 HD, +12 Con, +17 Classes, +7 resistance" },
                ref: { bonus: 45, breakdown: "+10 HD, +15 Dex, +13 Classes, +7 resistance" },
                will: { bonus: 34, breakdown: "+10 HD, +4 Wis, +13 Classes, +7 resistance" }
            },
            abilities: { str: 40, dex: 40, con: 34, int: 22, wis: 18, cha: 26 },
            skills: [
                { name: "Bluff", bonus: 60, breakdown: "58 ranks" },
                { name: "Concentration", bonus: 62, breakdown: "58 ranks" },
                { name: "Intimidate", bonus: 60, breakdown: "58 ranks" },
                { name: "Sense Motive", bonus: 56, breakdown: "58 ranks" },
                { name: "Tumble", bonus: 68, breakdown: "58 ranks" },
            ],
            feats: [
                { name: "Combat Reflexes", description: "" }, { name: "Multiweapon Fighting", description: "" }, { name: "Improved Multiweapon Fighting", description: "" }, { name: "Greater Multiweapon Fighting", description: "" }, { name: "Weapon Focus (Longsword)", description: "" }, { name: "Power Attack", description: "" }, { name: "Ironheart Aura", description: "" }, { name: "Greater Weapon Focus (Longsword)", description: "" }, { name: "Weapon Specialization (Longsword)", description: "" }, { name: "Stormguard Warrior", description: "" }, { name: "Robilar's Gambit", description: "" }, { name: "Epic Weapon Focus (Longsword)", description: "" }, { name: "Epic Weapon Specialization (Longsword)", description: "" }, { name: "Perfect Multiweapon Fighting", description: "" },
                { name: "Dire Charge", description: "Move and make a full attack on a charge." }, { name: "Overwhelming Critical", description: "+1d6 crit damage." }, { name: "Epic Prowess", description: "+1 to all attacks." }, { name: "Armor Skin", description: "+1 natural armor." }
            ],
            flaws: [],
            environment: "The Abyss",
            organization: "Solitary",
            alignment: "Chaotic Neutral",
            levelAdjustment: "-",
            advancement: "By character class",
            equipment: {
                totalValue: "3,000,000 gp",
                items: [
                    { name: "Six +8 Keen Anarchic Longswords", cost: "1,500,000 gp", description: "" },
                    { name: "Belt of Giant Strength +8", cost: "64,000 gp", description: "" },
                    { name: "Gloves of Dexterity +8", cost: "64,000 gp", description: "" },
                    { name: "Amulet of Health +8", cost: "64,000 gp", description: "" },
                    { name: "Bracers of Armor +10", cost: "100,000 gp", description: "" },
                    { name: "Ring of Protection +10", cost: "200,000 gp", description: "" },
                ]
            }
        }
      },
      {
        level: 40,
        title: "Embodiment of the Blade",
        class: "Warblade 20 / Unstoppable Whirlwind 10 / Epic Fighter 10",
        hitDice: "16d8+224 (HD) + 20d12+280 (Warblade) + 10d10+140 (UW) + 10d10+140 (Fighter) = 1198 hp",
        challengeRating: 34,
        armorClass: { total: 80, breakdown: "(−1 size, +18 Dex, +18 natural, +7 Int, +12 deflection, +12 armor, +4 insight)" },
        initiative: { bonus: 18, breakdown: "(+18 Dex)" },
        buildNotes: ["Adding levels of Epic Fighter provides a massive influx of bonus feats, perfecting her combat style.", "She is no longer just a general; she is a self-contained army, a living weapon that embodies the chaotic, deadly nature of the Abyss itself.", "Her goal is no longer to escape the Blood War, but to win it on her own terms and rewrite the laws of the lower planes."],
        sheet: {
            baseAtk: 56,
            grapple: 86,
            fullAttack: [
                { name: "Primary +10 Speed Anarchic Longsword", bonus: "+90/+90/+85/+80/+75", damage: "2d6+40", crit: "17-20/x2", type: "Melee" },
                { name: "5 Secondary +10 Speed Anarchic Longswords", bonus: "+90", damage: "2d6+25", crit: "17-20/x2", type: "Melee" },
            ],
            spaceReach: "10 ft./10 ft.",
            specialAttacks: [
                { name: "Infinite Flurry", type: "Ex", description: "Gains an additional attack with each weapon at her highest base attack bonus." },
            ],
            specialQualities: [
                { name: "Damage Reduction", type: "Su", description: "25/good, cold iron, and epic" },
                { name: "Spell Resistance", type: "Ex", description: "42" },
            ],
            saves: {
                fort: { bonus: 57, breakdown: "+10 HD, +14 Con, +24 Classes, +9 resistance" },
                ref: { bonus: 55, breakdown: "+10 HD, +18 Dex, +18 Classes, +9 resistance" },
                will: { bonus: 43, breakdown: "+10 HD, +4 Wis, +20 Classes, +9 resistance" }
            },
            abilities: { str: 44, dex: 46, con: 38, int: 24, wis: 18, cha: 26 },
            skills: [
                { name: "Bluff", bonus: 72, breakdown: "68 ranks" },
                { name: "Concentration", bonus: 75, breakdown: "68 ranks" },
                { name: "Intimidate", bonus: 72, breakdown: "68 ranks" },
                { name: "Sense Motive", bonus: 68, breakdown: "68 ranks" },
                { name: "Tumble", bonus: 82, breakdown: "68 ranks" },
            ],
            feats: [
                { name: "Combat Reflexes", description: "" }, { name: "Multiweapon Fighting", description: "" }, { name: "Improved Multiweapon Fighting", description: "" }, { name: "Greater Multiweapon Fighting", description: "" }, { name: "Weapon Focus (Longsword)", description: "" }, { name: "Power Attack", description: "" }, { name: "Ironheart Aura", description: "" }, { name: "Greater Weapon Focus (Longsword)", description: "" }, { name: "Weapon Specialization (Longsword)", description: "" }, { name: "Stormguard Warrior", description: "" }, { name: "Robilar's Gambit", description: "" }, { name: "Epic Weapon Focus (Longsword)", description: "" }, { name: "Epic Weapon Specialization (Longsword)", description: "" }, { name: "Perfect Multiweapon Fighting", description: "" }, { name: "Dire Charge", description: "" }, { name: "Overwhelming Critical", description: "" }, { name: "Epic Prowess", description: "" }, { name: "Armor Skin", description: "" },
                { name: "Devastating Critical", description: "DC on crit or die." }, { name: "Epic Toughness", description: "Massive HP boost." }, { name: "Legendary Rider", description: "For her serpentine body control." }, { name: "Penetrate Damage Reduction", description: "Bypass DR of certain types." }
            ],
            flaws: [],
            environment: "Her personal Abyssal layer",
            organization: "Unique, leading a massive army",
            alignment: "Chaotic Neutral",
            levelAdjustment: "-",
            advancement: "-",
            equipment: {
                totalValue: "12,000,000 gp",
                items: [
                    { name: "Six +10 Speed Anarchic Longswords of Annihilation", cost: "Artifact", description: "" },
                    { name: "Vest of the Unseen Blade", cost: "Artifact", description: "" },
                    { name: "Amulet of the Abyssal Storm", cost: "Artifact", description: "" },
                    { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                ]
            }
        }
      }
    ]
  };