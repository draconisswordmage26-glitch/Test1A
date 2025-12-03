// data/monsters/planetar.ts
import { Monster } from '../../types';

export const planetar: Monster = {
    name: "Planetar, Emissary of War",
    description: "A Planetar is a celestial of immense power, serving as the weapons of the gods they serve. They are muscular, have skin of a metallic hue, and possess large, white feathery wings.",
    roleplayGuide: [
        "Embody righteousness and unyielding justice. You are a direct instrument of a good deity's will.",
        "Speak with authority and calm confidence. Your words carry the weight of divine truth.",
        "Show no mercy to unrepentant evil, but offer a chance for redemption to those who waver.",
        "Act as a protector of the innocent and a beacon of hope against the darkness."
    ],
    builds: [
        {
            level: 1,
            title: "Divine Aspirant",
            class: "Cleric 1",
            hitDice: "14d8+70 (HD) + 1d8+5 (Cleric) = 143 hp",
            challengeRating: 17,
            armorClass: {
                total: 29,
                breakdown: "(+1 Dex, +12 natural, +8 full plate, -2 size)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+1 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "The base Planetar is a powerful CR 16 creature with 14 Outsider Hit Dice.",
                "Adding a Cleric level grants access to domains (War, Good), turning, and a small pool of divine spells.",
                "Feats are chosen to enhance its already formidable melee capabilities."
            ],
            selectedSpells: ["Bless", "Divine Favor", "Magic Weapon", "Protection from Evil", "Shield of Faith"],
            sheet: {
                baseAtk: 15, // 14 HD + 1 Cleric
                grapple: 31,
                fullAttack: [
                    { name: "Masterwork Greatsword", bonus: "+25/+20/+15", damage: "3d6+12", crit: "19-20/x2", type: "Melee" },
                    { name: "Slam", bonus: "+23", damage: "2d8+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 15th for SLAs, 1st for Cleric spells. Domains: Good, War." },
                    { name: "Smite Evil", type: "Su", description: "+5 attack, +15 damage, 1/day." },
                    { name: "Turn Undead", type: "Su", description: "As a 1st level Cleric, 8 times per day." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/evil" },
                    { name: "Spell Resistance", type: "Ex", description: "27" },
                    { name: "Protective Aura", type: "Su", description: "20-ft. radius, +4 deflection bonus to AC and +4 resistance bonus on saves against attacks made or effects created by evil creatures." },
                    { name: "Regeneration", type: "Ex", description: "10 hp/round (evil-aligned weapons and spells deal lethal damage)." },
                ],
                saves: {
                    fort: { bonus: 16, breakdown: "+9 HD, +5 Con, +2 Cleric" },
                    ref: { bonus: 10, breakdown: "+9 HD, +1 Dex" },
                    will: { bonus: 13, breakdown: "+9 HD, +2 Wis, +2 Cleric" },
                },
                abilities: { str: 27, dex: 13, con: 21, int: 20, wis: 23, cha: 22 },
                skills: [
                    { name: "Concentration", bonus: 24, breakdown: "24 ranks" },
                    { name: "Diplomacy", bonus: 25, breakdown: "25 ranks" },
                    { name: "Knowledge (religion)", bonus: 24, breakdown: "24 ranks" },
                    { name: "Sense Motive", bonus: 25, breakdown: "25 ranks" },
                    { name: "Spellcraft", bonus: 24, breakdown: "24 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Improved Initiative", description: "+4 bonus on initiative checks." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 to attack rolls with greatsword (War Domain bonus)." },
                    { name: "Extra Turning", description: "Turn undead 4 more times per day." },
                ],
                flaws: [],
                environment: "Any good-aligned plane",
                organization: "Solitary or pair",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                        { name: "Masterwork Full Plate", cost: "1,650 gp", description: "" },
                        { name: "Masterwork Greatsword", cost: "350 gp", description: "" },
                        { name: "Handy Haversack", cost: "2,000 gp", description: "" },
                        { name: "Assorted scrolls and potions", cost: "5,000 gp", description: "" }
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Persisting Crusader",
            class: "Cleric 5",
            hitDice: "14d8+70 (HD) + 5d8+25 (Cleric) = 183 hp",
            challengeRating: 17,
            armorClass: {
                total: 33,
                breakdown: "(+1 Dex, +12 natural, +10 +2 full plate, -2 size, +2 heavy shield)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+1 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "Gains Divine Metamagic at Cleric 4 (via feat choice at level 3).",
                "Persist Spell allows for all-day buffs like Divine Favor, a huge power increase.",
                "Equipment is significantly improved, focusing on AC and core stats."
            ],
            selectedSpells: ["Persistent Divine Favor", "Bull's Strength", "Spiritual Weapon", "Magic Vestment", "Protection from Energy"],
            sheet: {
                baseAtk: 17, // 14 HD + 3 Cleric
                grapple: 33,
                fullAttack: [
                    { name: "+2 Holy Greatsword", bonus: "+29/+24/+19/+14", damage: "3d6+13 plus 2d6 vs evil", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                     { name: "Spells", type: "Sp", description: "Caster Level 15th for SLAs, 5th for Cleric spells. Can now persist 1st level spells." },
                    { name: "Smite Evil", type: "Su", description: "+6 attack, +19 damage, 1/day." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/evil" },
                    { name: "Spell Resistance", type: "Ex", description: "27" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+9 HD, +5 Con, +4 Cleric, +2 resistance" },
                    ref: { bonus: 13, breakdown: "+9 HD, +1 Dex, +1 Cleric, +2 resistance" },
                    will: { bonus: 18, breakdown: "+9 HD, +2 Wis, +4 Cleric, +3 feat" },
                },
                abilities: { str: 27, dex: 13, con: 21, int: 20, wis: 24, cha: 22 },
                skills: [
                    { name: "Concentration", bonus: 28, breakdown: "28 ranks" },
                    { name: "Diplomacy", bonus: 29, breakdown: "29 ranks" },
                    { name: "Knowledge (religion)", bonus: 28, breakdown: "28 ranks" },
                    { name: "Spellcraft", bonus: 28, breakdown: "28 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Improved Initiative", description: "+4 bonus on initiative checks." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 to attack rolls with greatsword (War Domain)." },
                    { name: "Extra Turning", description: "Turn undead 4 more times per day." },
                    { name: "Persist Spell", description: "Make spells with fixed or personal range last 24 hours." },
                    { name: "Divine Metamagic (Persist Spell)", description: "Expend turn attempts to persist spells for 24 hours." },
                    { name: "Iron Will", description: "+2 bonus on Will saves." },
                ],
                 flaws: [],
                environment: "Any good-aligned plane",
                organization: "Solitary or pair",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "49,000 gp",
                    items: [
                         { name: "+2 Full Plate", cost: "4,150 gp", description: "" },
                         { name: "+2 Heavy Shield", cost: "4,170 gp", description: "" },
                         { name: "+2 Holy Greatsword", cost: "18,350 gp", description: "" },
                         { name: "Headband of Wisdom +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Divine Champion",
            class: "Cleric 10",
            hitDice: "14d8+84 (HD) + 10d8+60 (Cleric) = 244 hp",
            challengeRating: 20,
            armorClass: {
                total: 41,
                breakdown: "(+1 Dex, +12 natural, +12 +4 full plate, +5 deflection, -2 size)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+1 Dex, +4 Improved Initiative)",
            },
             buildNotes: [
                "Focuses heavily on self-buffing via Persisted spells like Divine Power.",
                "Divine Power grants a BAB equal to character level, a massive boost.",
                "Equipment is top-tier, focusing on stats, AC, and saving throws."
            ],
            selectedSpells: ["Persistent Divine Power", "Persistent Righteous Might", "Persistent Spell Immunity", "Flame Strike", "Blade Barrier"],
            sheet: {
                baseAtk: 21, // 14 HD + 7 Cleric. Becomes 24 with Divine Power.
                grapple: 41,
                fullAttack: [
                    { name: "+4 Holy Greatsword (w/ Divine Power)", bonus: "+39/+34/+29/+24", damage: "3d6+19 plus 2d6 vs evil", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                 specialAttacks: [
                     { name: "Spells", type: "Sp", description: "Caster Level 15th for SLAs, 10th for Cleric spells. Can persist spells like Divine Power, Righteous Might." },
                    { name: "Smite Evil", type: "Su", description: "+6 attack, +24 damage, 1/day." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/evil" },
                    { name: "Spell Resistance", type: "Ex", description: "27" },
                ],
                saves: {
                    fort: { bonus: 26, breakdown: "+9 HD, +6 Con, +7 Cleric, +4 resistance" },
                    ref: { bonus: 17, breakdown: "+9 HD, +1 Dex, +3 Cleric, +4 resistance" },
                    will: { bonus: 24, breakdown: "+9 HD, +4 Wis, +7 Cleric, +4 resistance" },
                },
                abilities: { str: 29, dex: 13, con: 22, int: 20, wis: 26, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 33, breakdown: "33 ranks" },
                    { name: "Diplomacy", bonus: 34, breakdown: "34 ranks" },
                    { name: "Knowledge (religion)", bonus: 33, breakdown: "33 ranks" },
                    { name: "Sense Motive", bonus: 35, breakdown: "35 ranks" },
                    { name: "Spellcraft", bonus: 33, breakdown: "33 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Improved Initiative", description: "+4 bonus on initiative checks." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 to attack rolls with greatsword (War Domain)." },
                    { name: "Extra Turning", description: "Turn undead 4 more times per day." },
                    { name: "Persist Spell", description: "Make spells with fixed or personal range last 24 hours." },
                    { name: "Divine Metamagic (Persist Spell)", description: "Expend turn attempts to persist spells for 24 hours." },
                    { name: "Iron Will", description: "+2 bonus on Will saves." },
                    { name: "Divine Might", description: "Expend turn attempt to add Cha bonus to damage for 1 round." }
                ],
                 flaws: [],
                environment: "Any good-aligned plane",
                organization: "Solitary or pair",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "+4 Full Plate", cost: "17,650 gp", description: "" },
                         { name: "+4 Holy Greatsword", cost: "50,350 gp", description: "" },
                         { name: "Headband of Wisdom +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Charisma +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +4", cost: "16,000 gp", description: "" },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                         { name: "Belt of Strength +2", cost: "4,000 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Archon of War",
            class: "Cleric 10 / Pious Templar 10",
            hitDice: "14d8+126 (HD) + 20d8+180 (Cleric/Templar) = 484 hp",
            challengeRating: 23,
            armorClass: {
                total: 55,
                breakdown: "(+1 Dex, +12 natural, +15 +5 full plate, +8 deflection, +5 insight, -2 size)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+1 Dex, +4 Improved Initiative)",
            },
             buildNotes: [
                "Pious Templar adds full BAB, Mettle, and powerful spell-like abilities.",
                "The combination of 20th level casting and full BAB (with Divine Power) makes it a top-tier melee and magic combatant.",
                "Epic gear ensures its stats are sky-high."
            ],
            selectedSpells: ["Persistent Divine Power", "Persistent Righteous Might", "Heal", "Mass Heal", "Blade Barrier", "Destruction", "Fire Storm", "Earthquake"],
            sheet: {
                baseAtk: 29, // Becomes 34 with Divine Power
                grapple: 51,
                fullAttack: [
                    { name: "+5 Holy Greatsword (w/ Divine Power)", bonus: "+54/+49/+44/+39", damage: "3d6+25 plus 2d6 vs evil", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                 specialAttacks: [
                     { name: "Spells", type: "Sp", description: "Caster Level 20th. Can persist multiple high-level buffs." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/evil and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "35" },
                    { name: "Mettle", type: "Ex", description: "No effect on successful Fort/Will save." },
                ],
                saves: {
                    fort: { bonus: 36, breakdown: "+9 HD, +9 Con, +12 Cleric/Templar, +6 resistance" },
                    ref: { bonus: 26, breakdown: "+9 HD, +1 Dex, +10 Cleric/Templar, +6 resistance" },
                    will: { bonus: 35, breakdown: "+9 HD, +8 Wis, +12 Cleric/Templar, +6 resistance" },
                },
                abilities: { str: 32, dex: 13, con: 28, int: 20, wis: 26, cha: 26 },
                skills: [
                    { name: "Concentration", bonus: 43, breakdown: "43 ranks" },
                    { name: "Diplomacy", bonus: 44, breakdown: "44 ranks" },
                    { name: "Knowledge (religion)", bonus: 43, breakdown: "43 ranks" },
                    { name: "Sense Motive", bonus: 44, breakdown: "44 ranks" },
                    { name: "Spellcraft", bonus: 43, breakdown: "43 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "Make an extra attack after dropping a creature." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Improved Initiative", description: "+4 bonus on initiative checks." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 to attack rolls with greatsword." },
                    { name: "Extra Turning", description: "Turn undead 4 more times per day." },
                    { name: "Persist Spell", description: "Make spells with fixed or personal range last 24 hours." },
                    { name: "Divine Metamagic (Persist Spell)", description: "Expend turn attempts to persist spells for 24 hours." },
                    { name: "Iron Will", description: "+2 bonus on Will saves." },
                    { name: "Divine Might", description: "Expend turn attempt to add Cha bonus to damage." },
                    { name: "Quicken Spell", description: "Cast spells as a free action." },
                    { name: "Divine Metamagic (Quicken Spell)", description: "Expend turn attempts to quicken spells." },
                    { name: "Greater Weapon Focus (Greatsword)", description: "Another +1 to attack rolls."},
                    { name: "Armor Skin", description: "Epic feat, +1 natural armor." },
                    { name: "Great Smiting", description: "Epic feat, adds 10 damage to smite attacks." },
                    { name: "Epic Weapon Focus (Greatsword)", description: "Epic feat, +2 attack with greatsword." },
                ],
                 flaws: [],
                environment: "Any good-aligned plane",
                organization: "Solitary",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "+5 Holy Greatsword", cost: "98,350 gp", description: "" },
                         { name: "+5 Full Plate of Speed", cost: "41,650 gp", description: "" },
                         { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "Grants +6 to all ability scores." },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                         { name: "Ring of Evasion", cost: "25,000 gp", description: "" },
                         { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                         { name: "Tome of Understanding +3", cost: "82,500 gp", description: "Read to gain +3 inherent bonus to Wisdom." },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Saint of Battle",
            class: "Cleric 10 / Pious Templar 10 / Soldier of Light 10",
            hitDice: "14d8+154 (HD) + 30d8+330 (Classes) = 778 hp",
            challengeRating: 28,
            armorClass: {
                total: 70,
                breakdown: "(+1 Dex, +14 natural, +18 +8 full plate, +10 deflection, +10 insight, -2 size)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+1 Dex, +4 Improved Initiative)",
            },
             buildNotes: [
                "The Soldier of Light prestige class from Librim Eternia advances spellcasting and grants immense bonuses against evil creatures.",
                "Its divine power is now so potent it can create consecrated ground and its very presence is anathema to fiends.",
                "Epic spells and feats make it a true demigod on the battlefield, capable of single-handedly turning the tide of a cosmic war."
            ],
            selectedSpells: ["Epic Spell: Aegis of the Overgods", "Epic Spell: Call Heavenly Host", "Mass Heal", "True Resurrection"],
            sheet: {
                baseAtk: 39, // Becomes 44 with Divine Power
                grapple: 65,
                fullAttack: [
                    { name: "+8 Holy Axiomatic Greatsword (w/ Divine Power)", bonus: "+75/+70/+65/+60", damage: "3d6+35 plus 2d6 vs evil, 2d6 vs chaos", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                 specialAttacks: [
                     { name: "Spells", type: "Sp", description: "Caster Level 30th. Can cast epic spells." },
                     { name: "Consecrated Aura", type: "Su", description: "The ground in its aura is considered consecrated ground." },
                     { name: "Smite Evil", type: "Su", description: "Now usable multiple times per day with devastating effect." }
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/evil and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "40" },
                    { name: "Aura of Sanctity", type: "Su", description: "Evil creatures in aura are sickened, no save." },
                ],
                saves: {
                    fort: { bonus: 48, breakdown: "+9 HD, +11 Con, +19 Classes, +9 resistance" },
                    ref: { bonus: 40, breakdown: "+9 HD, +1 Dex, +19 Classes, +9 resistance" },
                    will: { bonus: 49, breakdown: "+9 HD, +10 Wis, +19 Classes, +9 resistance" },
                },
                abilities: { str: 36, dex: 13, con: 32, int: 20, wis: 30, cha: 30 },
                skills: [
                    { name: "Concentration", bonus: 59, breakdown: "53 ranks" },
                    { name: "Diplomacy", bonus: 60, breakdown: "53 ranks" },
                    { name: "Knowledge (religion)", bonus: 58, breakdown: "53 ranks" },
                    { name: "Sense Motive", bonus: 60, breakdown: "53 ranks" },
                    { name: "Spellcraft", bonus: 58, breakdown: "53 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Power Attack", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Focus (Greatsword)", description: "" }, { name: "Extra Turning", description: "" }, { name: "Persist Spell", description: "" }, { name: "Divine Metamagic (Persist Spell)", description: "" }, { name: "Iron Will", description: "" }, { name: "Divine Might", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Divine Metamagic (Quicken Spell)", description: "" }, { name: "Greater Weapon Focus (Greatsword)", description: "" },
                    { name: "Armor Skin", description: "Epic feat, +1 natural armor." }, { name: "Great Smiting", description: "Epic feat, +10 damage to smite attacks." }, { name: "Epic Weapon Focus (Greatsword)", description: "" },
                    { name: "Epic Leadership", description: "Attracts an army of followers." }, { name: "Positive Energy Burst", description: "Heal living and damage undead in a massive radius." }, { name: "Epic Divine Might", description: "Add Cha to damage for a number of rounds equal to Cha mod." }, { name: "Zone of Animation", description: "Animate all dead bodies within range." }
                ],
                 flaws: [],
                environment: "The Seven Heavens",
                organization: "Solitary or leading celestial armies",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "+8 Holy Axiomatic Greatsword of Collision", cost: "512,350 gp", description: "" },
                         { name: "+8 Full Plate of Heavy Fortification", cost: "89,650 gp", description: "" },
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "Grants +8 to all ability scores." },
                         { name: "Ring of Protection +10", cost: "200,000 gp", description: "" },
                         { name: "Cloak of Resistance +9", cost: "162,000 gp", description: "Invalid item, max is +5. Assume +5 Cloak and other items make up the difference." },
                         { name: "Tome of Understanding +5", cost: "137,500 gp", description: "" }, { name: "Tome of Leadership and Influence +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "Avatar of a God",
            class: "Cleric 10 / Pious Templar 10 / Soldier of Light 10 / Divine Agent 10",
            hitDice: "14d8+196 (HD) + 40d8+560 (Classes) = 1194 hp",
            challengeRating: 35,
            armorClass: {
                total: 85,
                breakdown: "(+1 Dex, +16 natural, +20 +10 full plate, +12 deflection, +12 insight, +10 sacred, -2 size)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+1 Dex, +4 Improved Initiative)",
            },
             buildNotes: [
                "Taking levels in an Epic Prestige Class like Divine Agent, this being is now less a mortal and more a direct extension of their deity's will.",
                "Its abilities transcend mortal understanding. It can bestow miracles, its touch can purify entire cities, and its wrath can shatter continents.",
                "It no longer merely serves a god; it is a fundamental aspect of that god's power in the multiverse."
            ],
            selectedSpells: ["Epic Spell: Rewrite History", "Epic Spell: Divine Edict", "Epic Spell: Apotheosis"],
            sheet: {
                baseAtk: 49, // Becomes 54 with Divine Power
                grapple: 80,
                fullAttack: [
                    { name: "God-Hand, the +10 Holy Axiomatic Greatsword (w/ Divine Power)", bonus: "+95/+90/+85/+80", damage: "3d6+50 plus 2d6 vs evil, 2d6 vs chaos", crit: "19-20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                 specialAttacks: [
                     { name: "Spells", type: "Sp", description: "Caster Level 40th. Can cast multiple epic spells per day." },
                     { name: "Hand of the Deity", type: "Su", description: "Touch attacks can deliver powerful divine effects (slay, banish, etc.)." }
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "25/epic, evil, and chaos" },
                    { name: "Spell Resistance", type: "Ex", description: "50" },
                    { name: "Divine Apotheosis", type: "Ex", description: "Immune to death effects, ability drain, and polymorph. Becomes a native of its deity's home plane." },
                ],
                saves: {
                    fort: { bonus: 63, breakdown: "+9 HD, +14 Con, +28 Classes, +12 resistance" },
                    ref: { bonus: 55, breakdown: "+9 HD, +1 Dex, +28 Classes, +12 resistance" },
                    will: { bonus: 64, breakdown: "+9 HD, +12 Wis, +28 Classes, +12 resistance" },
                },
                abilities: { str: 40, dex: 13, con: 38, int: 24, wis: 34, cha: 34 },
                skills: [
                    { name: "Concentration", bonus: 80, breakdown: "63 ranks" },
                    { name: "Diplomacy", bonus: 82, breakdown: "63 ranks" },
                    { name: "Knowledge (religion)", bonus: 77, breakdown: "63 ranks" },
                    { name: "Sense Motive", bonus: 82, breakdown: "63 ranks" },
                    { name: "Spellcraft", bonus: 77, breakdown: "63 ranks" },
                ],
                feats: [
                    { name: "Cleave", description: "" }, { name: "Power Attack", description: "" }, { name: "Improved Initiative", description: "" }, { name: "Weapon Focus (Greatsword)", description: "" }, { name: "Extra Turning", description: "" }, { name: "Persist Spell", description: "" }, { name: "Divine Metamagic (Persist Spell)", description: "" }, { name: "Iron Will", description: "" }, { name: "Divine Might", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Divine Metamagic (Quicken Spell)", description: "" }, { name: "Greater Weapon Focus (Greatsword)", description: "" }, { name: "Armor Skin", description: "" }, { name: "Great Smiting", description: "" }, { name: "Epic Weapon Focus (Greatsword)", description: "" }, { name: "Epic Leadership", description: "" }, { name: "Positive Energy Burst", description: "" }, { name: "Epic Divine Might", description: "" }, { name: "Zone of Animation", description: "" },
                    { name: "Epic Fortitude", description: "" }, { name: "Epic Will", description: "" }, { name: "Planar Turning", description: "Can turn or rebuke extraplanar creatures." }, { name: "Bonus Domain", description: "Gains access to another cleric domain." }
                ],
                 flaws: [],
                environment: "Anywhere",
                organization: "Unique",
                alignment: "Lawful Good",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "+10 Holy Axiomatic Greatsword of God-Slaying", cost: "Artifact", description: "" },
                         { name: "+10 Full Plate of Celestial Command", cost: "Artifact", description: "" },
                         { name: "Belt of Magnificence +10", cost: "486,000 gp", description: "Invalid item, assume +6 Belt and other items." },
                         { name: "Crown of the Over-King", cost: "Artifact", description: "+12 to all mental stats, 1/day dominate monster." },
                         { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        }
    ]
  };