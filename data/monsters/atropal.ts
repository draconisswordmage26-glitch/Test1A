// data/monsters/atropal.ts
import { Monster } from '../../types';

export const atropal: Monster = {
    name: "Atropal, The Stillborn God",
    description: "An atropal is the horrifying, unfinished, and undead fetus of a god. Its very presence sucks the life and warmth from the world, and its wails are of pure, divine despair.",
    roleplayGuide: [
        "You are a divine paradox: a being of undeath born with a spark of pure, good-aligned celestial energy. You were cast out, an unfinished miracle deemed a failure by the gods.",
        "You see yourself not as a monster, but as a grim warden. You are a guardian of the natural cycle of life and death, and you despise necromancers and others who would pervert it for their own gain.",
        "Your goal is to find your purpose and prove your divine parents wrong. You use your fearsome powers to protect the sanctity of the soul and bring true rest to the desecrated dead.",
        "You are a champion of finality and peace. A hero who can look past your horrifying form might find an unlikely ally, a being who understands the importance of life because they were denied it."
    ],
    builds: [
        {
            level: 1,
            title: "Wailing Remnant",
            class: "Cleric 1",
            hitDice: "17d12 (HD) + 1d8 (Cleric) = 119 hp",
            challengeRating: 18,
            armorClass: {
                total: 26,
                breakdown: "(-1 size, +1 Dex, +16 natural)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "The Atropal is a CR 22 creature. To scale it to CR 17, its HD is reduced from 34 to 17.",
                "Cleric level (with Death and Undeath domains) is a natural fit, enhancing its connection to negative energy.",
                "As an undead, it uses Charisma for HP and concentration checks."
            ],
            sheet: {
                baseAtk: 9,
                grapple: 21,
                fullAttack: [
                    { name: "2 Touches", bonus: "+16", damage: "1d8+8 plus 2d6 Con drain", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Aura of Death", type: "Su", description: "30-ft. radius, living creatures must make a DC 24 Fortitude save or gain one negative level." },
                    { name: "Turn Undead", type: "Su", description: "As a 1st level Cleric with +4 Cha bonus, can rebuke or command undead." },
                    { name: "Death domain power", type: "Su", description: "Death Touch 1/day." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and silver" },
                    { name: "Spell Resistance", type: "Ex", description: "29" },
                    { name: "Undead Traits", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 12, breakdown: "+5 HD, +7 Cha" },
                    ref: { bonus: 11, breakdown: "+5 HD, +1 Dex, +5 insight" },
                    will: { bonus: 15, breakdown: "+10 HD, +5 Wis" },
                },
                abilities: { str: 27, dex: 13, con: 0, int: 13, wis: 20, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 28, breakdown: "19 ranks, +9 Cha" },
                    { name: "Knowledge (religion)", bonus: 21, breakdown: "19 ranks, +2 Int" },
                    { name: "Spellcraft", bonus: 21, breakdown: "19 ranks, +2 Int" },
                ],
                feats: [
                    { name: "Ability Focus (Aura of Death)", description: "+2 to DC of Aura of Death." },
                    { name: "Combat Casting", description: "+4 bonus on Concentration checks to cast defensively." },
                    { name: "Dodge", description: "+1 dodge bonus to AC." },
                    { name: "Great Fortitude", description: "+2 on Fortitude saves." },
                    { name: "Improved Toughness", description: "+1 hp per HD." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Neutral Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +1", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Charisma +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "Whisper of the Grave",
            class: "Cleric 3",
            hitDice: "17d12 + 3d8 + 40 = 158 hp",
            challengeRating: 20,
            armorClass: {
                total: 28,
                breakdown: "(-1 size, +1 Dex, +16 natural, +2 armor)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Gains access to 2nd-level cleric spells like Desecrate and Death Knell.",
                "Takes Extra Turning, preparing for the Divine Metamagic feat to persist powerful buffs later."
            ],
            sheet: {
                baseAtk: 10,
                grapple: 22,
                fullAttack: [
                    { name: "2 Touches", bonus: "+17", damage: "1d8+8 plus 2d6 Con drain", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 3rd." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and silver" },
                    { name: "Spell Resistance", type: "Ex", description: "29" },
                ],
                saves: {
                    fort: { bonus: 14, breakdown: "+5 HD, +7 Cha, +2 Class" },
                    ref: { bonus: 12, breakdown: "+5 HD, +1 Dex, +1 Class, +5 insight" },
                    will: { bonus: 18, breakdown: "+10 HD, +5 Wis, +3 Class" },
                },
                abilities: { str: 27, dex: 13, con: 0, int: 13, wis: 20, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 30, breakdown: "21 ranks, +9 Cha" },
                    { name: "Knowledge (religion)", bonus: 23, breakdown: "21 ranks, +2 Int" },
                ],
                feats: [
                    { name: "Ability Focus (Aura of Death)", description: "" }, { name: "Combat Casting", description: "" }, { name: "Dodge", description: "" }, { name: "Great Fortitude", description: "" }, { name: "Improved Toughness", description: "" },
                    { name: "Extra Turning", description: "More turn attempts for Divine Metamagic." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Neutral Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "45,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +2", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Charisma +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                         { name: "Bracers of Armor +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Soul-Drinker",
            class: "Cleric 5",
            hitDice: "17d12 + 5d8 + 80 = 200 hp",
            challengeRating: 22,
            armorClass: {
                total: 30,
                breakdown: "(-1 size, +1 Dex, +16 natural, +4 armor)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Gains Divine Metamagic, allowing it to persist its buffs.",
                "Its spellcasting becomes a much more significant threat."
            ],
            sheet: {
                baseAtk: 12,
                grapple: 24,
                fullAttack: [
                    { name: "2 Touches", bonus: "+19", damage: "1d8+8 plus 2d6 Con drain", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 5th. Can persist 1st level spells." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and silver" },
                    { name: "Spell Resistance", type: "Ex", description: "29" },
                ],
                saves: {
                    fort: { bonus: 16, breakdown: "+5 HD, +7 Cha, +4 Class" },
                    ref: { bonus: 13, breakdown: "+5 HD, +1 Dex, +2 Class, +5 insight" },
                    will: { bonus: 20, breakdown: "+10 HD, +5 Wis, +5 Class" },
                },
                abilities: { str: 27, dex: 13, con: 0, int: 13, wis: 20, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 32, breakdown: "23 ranks" },
                    { name: "Knowledge (religion)", bonus: 25, breakdown: "23 ranks" },
                ],
                feats: [
                    { name: "Ability Focus (Aura of Death)", description: "" }, { name: "Combat Casting", description: "" }, { name: "Dodge", description: "" }, { name: "Great Fortitude", description: "" }, { name: "Improved Toughness", description: "" }, { name: "Extra Turning", description: "" },
                    { name: "Divine Metamagic (Persist Spell)", description: "Spend turn attempts to persist spells." },
                ],
                 flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Neutral Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "85,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                         { name: "Cloak of Charisma +4", cost: "16,000 gp", description: "" },
                         { name: "Bracers of Armor +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Priest of Non-Life",
            class: "Cleric 10",
            hitDice: "17d12 + 10d8 + 140 = 275 hp",
            challengeRating: 27,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +1 Dex, +16 natural, +6 armor, +3 deflection)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Can now persist powerful spells like Divine Power, making it a terrifying melee threat.",
                "Its high caster level and Charisma make it a formidable commander of undead."
            ],
            sheet: {
                baseAtk: 16,
                grapple: 28,
                fullAttack: [
                    { name: "2 Touches (w/ Divine Power)", bonus: "+30/+25/+20", damage: "1d8+12 plus 2d6 Con drain", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 10th. Can persist 4th level spells." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/epic and silver" },
                    { name: "Spell Resistance", type: "Ex", description: "29" },
                ],
                saves: {
                    fort: { bonus: 19, breakdown: "+5 HD, +7 Cha, +7 Class" },
                    ref: { bonus: 14, breakdown: "+5 HD, +1 Dex, +3 Class, +5 insight" },
                    will: { bonus: 24, breakdown: "+10 HD, +5 Wis, +9 Class" },
                },
                abilities: { str: 27, dex: 13, con: 0, int: 13, wis: 20, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 37, breakdown: "28 ranks" },
                    { name: "Knowledge (religion)", bonus: 30, breakdown: "28 ranks" },
                ],
                feats: [
                    { name: "Ability Focus (Aura of Death)", description: "" }, { name: "Combat Casting", description: "" }, { name: "Dodge", description: "" }, { name: "Great Fortitude", description: "" }, { name: "Improved Toughness", description: "" }, { name: "Extra Turning", description: "" }, { name: "Divine Metamagic (Persist Spell)", description: "" },
                    { name: "Quicken Spell", description: "" },
                ],
                 flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Neutral Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +4", cost: "64,000 gp", description: "" },
                         { name: "Cloak of Charisma +6", cost: "36,000 gp", description: "" },
                         { name: "Bracers of Armor +6", cost: "36,000 gp", description: "" },
                         { name: "Ring of Protection +3", cost: "18,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Patriarch of the Final Rest",
            class: "Cleric 10 / True Necromancer 10",
            hitDice: "17d12 + 20d8 + 220 = 425 hp",
            challengeRating: 37,
            armorClass: {
                total: 45,
                breakdown: "(-1 size, +1 Dex, +18 natural, +8 armor, +8 deflection)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "True Necromancer prestige class makes it the ultimate master of undeath.",
                "Its control over undead is absolute, and its necromantic spells are nearly impossible to resist.",
                "Its touch now bestows negative levels, a devastating debuff."
            ],
            sheet: {
                baseAtk: 26,
                grapple: 38,
                fullAttack: [
                    { name: "2 Touches (w/ Divine Power)", bonus: "+42/+37/+32/+27", damage: "1d8+12 plus 2d6 Con drain and 1d4 negative levels", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 20th." },
                    { name: "Touch of the Grave", type: "Su", description: "Touch bestows 1d4 negative levels."}
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/epic and silver" },
                    { name: "Spell Resistance", type: "Ex", description: "37" },
                ],
                saves: {
                    fort: { bonus: 27, breakdown: "+5 HD, +7 Cha, +15 Class" },
                    ref: { bonus: 20, breakdown: "+5 HD, +1 Dex, +9 Class, +5 insight" },
                    will: { bonus: 32, breakdown: "+10 HD, +5 Wis, +17 Class" },
                },
                abilities: { str: 27, dex: 13, con: 0, int: 13, wis: 20, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 47, breakdown: "38 ranks" },
                    { name: "Knowledge (religion)", bonus: 40, breakdown: "38 ranks" },
                ],
                feats: [
                    { name: "Ability Focus (Aura of Death)", description: "" }, { name: "Combat Casting", description: "" }, { name: "Dodge", description: "" }, { name: "Great Fortitude", description: "" }, { name: "Improved Toughness", description: "" }, { name: "Extra Turning", description: "" }, { name: "Divine Metamagic (Persist Spell)", description: "" }, { name: "Quicken Spell", description: "" },
                    { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }
                ],
                 flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Neutral Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +5", cost: "100,000 gp", description: "" },
                         { name: "Cloak of Charisma +6", cost: "36,000 gp", description: "" },
                         { name: "Bracers of Armor +8", cost: "64,000 gp", description: "" },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "God of the Final Rest",
            class: "Cleric 10 / True Necromancer 10 / Epic Cleric 20",
            hitDice: "17d12 + 40d8 + 440 = 825 hp",
            challengeRating: 47,
            armorClass: {
                total: 60,
                breakdown: "(-1 size, +1 Dex, +20 natural, +10 armor, +10 deflection, +18 sacred)",
            },
            initiative: {
                bonus: 1,
                breakdown: "(+1 Dex)",
            },
            buildNotes: [
                "Achieves apotheosis, becoming a demigod of death and the grave.",
                "Its command over negative energy is absolute, its spells can slay gods, and its touch is oblivion.",
                "It has found its purpose: to be the guardian of the final peace, a grim shepherd for all souls."
            ],
            sheet: {
                baseAtk: 41,
                grapple: 53,
                fullAttack: [
                    { name: "2 Touches of Oblivion", bonus: "+60/+55/+50/+45", damage: "1d8+12 plus 4d6 Con drain and 2d4 negative levels", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Caster Level 30th. Can cast epic spells." },
                    { name: "Aura of Unlife", type: "Su", description: "Aura of Death now affects a 100-ft radius and bestows 1d4 negative levels."}
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/epic, silver, and good" },
                    { name: "Spell Resistance", type: "Ex", description: "47" },
                ],
                saves: {
                    fort: { bonus: 37, breakdown: "+5 HD, +7 Cha, +25 Class" },
                    ref: { bonus: 28, breakdown: "+5 HD, +1 Dex, +17 Class, +5 insight" },
                    will: { bonus: 44, breakdown: "+10 HD, +5 Wis, +29 Class" },
                },
                abilities: { str: 27, dex: 13, con: 0, int: 13, wis: 20, cha: 24 },
                skills: [
                    { name: "Concentration", bonus: 60, breakdown: "51 ranks" },
                    { name: "Knowledge (religion)", bonus: 52, breakdown: "51 ranks" },
                ],
                feats: [
                    { name: "Ability Focus (Aura of Death)", description: "" }, { name: "Combat Casting", description: "" }, { name: "Dodge", description: "" }, { name: "Great Fortitude", description: "" }, { name: "Improved Toughness", description: "" }, { name: "Extra Turning", description: "" }, { name: "Divine Metamagic (Persist Spell)", description: "" }, { name: "Quicken Spell", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" },
                    { name: "Epic Will", description: "" }, { name: "Negative Energy Burst", description: "" }
                ],
                 flaws: [],
                environment: "The Negative Energy Plane",
                organization: "Unique",
                alignment: "Neutral Evil",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Heart of the Grave", cost: "Artifact", description: "Phylactery, +12 to mental stats." },
                         { name: "Scythe of the Unborn", cost: "Artifact", description: "+10 Unholy Scythe that renders foes sterile." },
                         { name: "Shroud of the Stillborn", cost: "Artifact", description: "+15 insight to AC/saves, aura of negative levels." },
                    ]
                }
            }
        },
    ]
};