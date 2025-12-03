// data/monsters/rakshasaMaharaja.ts
import { Monster } from '../../types';

export const rakshasaMaharaja: Monster = {
    name: "Ak'chazar, Rakshasa Maharaja",
    description: "A Rakshasa Maharaja is a lord among its kind, a being of immense power, cunning, and vanity. Ak'chazar is unique among them, for he sees the cycle of reincarnation not as a privilege, but as a prison. He has dedicated his millennia-long existence to mastering the physical forms of all creatures, believing that by understanding all shapes, he can transcend them and achieve a final, perfect form.",
    roleplayGuide: [
        "You are the height of arrogance and sophistication. You see all other creatures as crude, temporary drafts of a reality you are working to perfect.",
        "Your deceptions are not mere trickery, but elaborate experiments. You adopt new forms and lives to study them from within, learning their strengths and weaknesses.",
        "You view combat as a failure of intellect, but when forced, you treat it as an art form, shifting between powerful forms to perfectly counter your opponent.",
        "Your quest is a philosophical one. You might ally with others if they can provide access to a new, powerful form to study (like that of a god or a Far Realm entity), but you will inevitably see them as mere tools in your grand experiment."
    ],
    builds: [
        {
            level: 1,
            title: "The Shapeshifter Prince",
            class: "Druid 1",
            hitDice: "17d8+85 (HD) + 1d8+5 (Druid) = 176 hp",
            challengeRating: 18,
            armorClass: {
                total: 31,
                breakdown: "(+4 Dex, +17 natural)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "The Rakshasa Maharaja is a CR 21 creature. To scale it to CR 17, its HD is reduced from 21 to 17.",
                "Druid class provides the foundation for its wildshaping focus, complementing its innate Sorcerer casting.",
                "It can switch between being a powerful spellcaster and a formidable melee combatant."
            ],
            sheet: {
                baseAtk: 13,
                grapple: 22,
                fullAttack: [
                    { name: "2 Claws", bonus: "+22", damage: "1d6+5", crit: "20/x2", type: "Melee" },
                    { name: "Bite", bonus: "+20", damage: "1d8+2", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts spells as a 17th-level Sorcerer and 1st-level Druid." },
                    { name: "Wild Shape", type: "Su", description: "1/day, can change into a Small or Medium animal." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/good and piercing" },
                    { name: "Spell Resistance", type: "Ex", description: "31" },
                    { name: "Change Shape", type: "Su", description: "Can assume any humanoid form." },
                ],
                saves: {
                    fort: { bonus: 17, breakdown: "+10 HD, +5 Con, +2 Druid" },
                    ref: { bonus: 16, breakdown: "+10 HD, +4 Dex, +2 class" },
                    will: { bonus: 18, breakdown: "+10 HD, +6 Wis, +2 Druid" },
                },
                abilities: { str: 20, dex: 18, con: 20, int: 23, wis: 23, cha: 26 },
                skills: [
                    { name: "Bluff", bonus: 31, breakdown: "20 ranks" },
                    { name: "Diplomacy", bonus: 33, breakdown: "20 ranks" },
                    { name: "Disguise", bonus: 31, breakdown: "20 ranks" },
                    { name: "Knowledge (arcana)", bonus: 29, breakdown: "20 ranks" },
                ],
                feats: [
                    { name: "Combat Expertise", description: "" }, { name: "Dodge", description: "" }, { name: "Improved Combat Casting", description: "" },
                    { name: "Alertness", description: "" }, { name: "Silent Spell", description: "" }, { name: "Still Spell", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Headband of Wisdom +2", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 3,
            title: "Student of Forms",
            class: "Druid 3",
            hitDice: "17d8+85 (HD) + 3d8+15 (Druid) = 200 hp",
            challengeRating: 19,
            armorClass: {
                total: 31,
                breakdown: "(+4 Dex, +17 natural)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "Gains access to 2nd-level Druid spells and Trackless Step.",
                "Feat selection focuses on enhancing its shapeshifting abilities."
            ],
            sheet: {
                baseAtk: 14,
                grapple: 23,
                fullAttack: [
                    { name: "2 Claws", bonus: "+23", damage: "1d6+5", crit: "20/x2", type: "Melee" },
                    { name: "Bite", bonus: "+21", damage: "1d8+2", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 17th-level Sorcerer and 3rd-level Druid." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/good and piercing" },
                    { name: "Spell Resistance", type: "Ex", description: "31" },
                    { name: "Trackless Step", type: "Ex", description: "Leaves no trail in natural surroundings."}
                ],
                saves: {
                    fort: { bonus: 18, breakdown: "+10 HD, +5 Con, +3 Druid" },
                    ref: { bonus: 17, breakdown: "+10 HD, +4 Dex, +3 class" },
                    will: { bonus: 19, breakdown: "+10 HD, +6 Wis, +3 Druid" },
                },
                abilities: { str: 20, dex: 18, con: 20, int: 23, wis: 23, cha: 26 },
                skills: [
                    { name: "Bluff", bonus: 33, breakdown: "22 ranks" },
                    { name: "Disguise", bonus: 33, breakdown: "22 ranks" },
                    { name: "Knowledge (nature)", bonus: 31, breakdown: "22 ranks" },
                ],
                feats: [
                    { name: "Combat Expertise", description: "" }, { name: "Dodge", description: "" }, { name: "Alertness", description: "" }, { name: "Silent Spell", description: "" }, { name: "Still Spell", description: "" },
                    { name: "Natural Spell", description: "Cast spells while in Wild Shape."}
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "40000 gp",
                    items: [
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                         { name: "Headband of Wisdom +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Adept of Shapes",
            class: "Druid 5",
            hitDice: "17d8+85 (HD) + 5d8+25 (Druid) = 220 hp",
            challengeRating: 21,
            armorClass: {
                total: 31,
                breakdown: "(+4 Dex, +17 natural)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "Unlocks Wild Shape, allowing it to take on powerful new forms.",
                "This marks the true beginning of its journey to master all of life's shapes."
            ],
            sheet: {
                baseAtk: 15,
                grapple: 24,
                fullAttack: [
                    { name: "2 Claws", bonus: "+24", damage: "1d6+5", crit: "20/x2", type: "Melee" },
                    { name: "Bite", bonus: "+22", damage: "1d8+2", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 17th-level Sorcerer and 5th-level Druid." },
                    { name: "Wild Shape", type: "Su", description: "3/day, can assume animal forms up to Large size."}
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/good and piercing" },
                    { name: "Spell Resistance", type: "Ex", description: "31" },
                ],
                saves: {
                    fort: { bonus: 19, breakdown: "+10 HD, +5 Con, +4 Druid" },
                    ref: { bonus: 17, breakdown: "+10 HD, +4 Dex, +3 class" },
                    will: { bonus: 20, breakdown: "+10 HD, +6 Wis, +4 Druid" },
                },
                abilities: { str: 20, dex: 18, con: 20, int: 23, wis: 23, cha: 26 },
                skills: [
                    { name: "Bluff", bonus: 35, breakdown: "24 ranks" },
                    { name: "Disguise", bonus: 35, breakdown: "24 ranks" },
                    { name: "Knowledge (nature)", bonus: 33, breakdown: "24 ranks" },
                ],
                feats: [
                    { name: "Combat Expertise", description: "" }, { name: "Dodge", description: "" }, { name: "Alertness", description: "" }, { name: "Silent Spell", description: "" }, { name: "Still Spell", description: "" },
                    { name: "Natural Spell", description: "Cast spells while in Wild Shape."}
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "85000 gp",
                    items: [
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Headband of Wisdom +4", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +3", cost: "9,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Master of Many Forms",
            class: "Druid 5 / Master of Many Forms 5",
            hitDice: "17d8+102 (HD) + 10d8+60 (Classes) = 280 hp",
            challengeRating: 27,
            armorClass: {
                total: 40,
                breakdown: "(Varies by form, base +4 Dex, +17 natural, +5 armor, +4 deflection)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "Master of Many Forms prestige class grants extraordinary wildshaping abilities, allowing it to assume forms of giants, monstrous humanoids, and magical beasts.",
                "It can now seamlessly blend its potent innate spellcasting with the powerful physical forms it assumes.",
                "This build is a true toolbox, with a form for every situation."
            ],
            sheet: {
                baseAtk: 19,
                grapple: 28,
                fullAttack: [
                    { name: "Varies by form", bonus: "+28", damage: "Varies", crit: "Varies", type: "Melee" },
                ],
                spaceReach: "Varies",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 17th-level Sorcerer." },
                    { name: "Extraordinary Wild Shape", type: "Ex", description: "Can assume forms of different creature types and retain (Ex) special attacks." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/good and piercing" },
                    { name: "Spell Resistance", type: "Ex", description: "31" },
                ],
                saves: {
                    fort: { bonus: 21, breakdown: "+10 HD, +6 Con, +5 Class" },
                    ref: { bonus: 18, breakdown: "+10 HD, +4 Dex, +4 Class" },
                    will: { bonus: 22, breakdown: "+10 HD, +6 Wis, +6 Class" },
                },
                abilities: { str: 20, dex: 18, con: 22, int: 23, wis: 23, cha: 26 },
                skills: [
                    { name: "Bluff", bonus: 37, breakdown: "27 ranks" },
                    { name: "Disguise", bonus: 37, breakdown: "27 ranks" },
                    { name: "Knowledge (nature)", bonus: 34, breakdown: "27 ranks" },
                ],
                feats: [
                    { name: "Combat Expertise", description: "" }, { name: "Dodge", description: "" }, { name: "Alertness", description: "" }, { name: "Silent Spell", description: "" }, { name: "Still Spell", description: "" },
                    { name: "Natural Spell", description: "Cast spells in wild shape." }, { name: "Metamorphic Transfer", description: "Carry over enhancement bonuses to new forms." }
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                         { name: "Headband of Wisdom +4", cost: "16,000 gp", description: "" },
                         { name: "Bracers of Armor +5", cost: "25,000 gp", description: "" },
                         { name: "Ring of Protection +4", cost: "32,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "The All-Beast",
            class: "Druid 5 / Master of Many Forms 10 / Warshaper 5",
            hitDice: "17d8+136 (HD) + 20d8+160 (Classes) = 450 hp",
            challengeRating: 37,
            armorClass: {
                total: 50,
                breakdown: "(Varies by form, base +4 Dex, +21 natural, +8 armor, +6 deflection)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "Warshaper prestige class adds combat bonuses to its forms, including extra Str/Con and immunity to critical hits while shifted.",
                "It can now assume the form of outsiders and aberrations, truly expanding its library of shapes.",
                "Epic feats enhance its spellcasting and shapeshifting even further."
            ],
            sheet: {
                baseAtk: 26,
                grapple: 35,
                fullAttack: [
                    { name: "Varies by form", bonus: "+39", damage: "Varies", crit: "Varies", type: "Melee" },
                ],
                spaceReach: "Varies",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 17th-level Sorcerer." },
                    { name: "Aberrant Wild Shape", type: "Ex", description: "Can assume the form of aberrations." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/good, piercing, and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "37" },
                ],
                saves: {
                    fort: { bonus: 29, breakdown: "+10 HD, +8 Con, +11 Class" },
                    ref: { bonus: 21, breakdown: "+10 HD, +4 Dex, +7 Class" },
                    will: { bonus: 25, breakdown: "+10 HD, +6 Wis, +9 Class" },
                },
                abilities: { str: 20, dex: 18, con: 26, int: 23, wis: 23, cha: 30 },
                skills: [
                    { name: "Bluff", bonus: 47, breakdown: "37 ranks" },
                    { name: "Disguise", bonus: 47, breakdown: "37 ranks" },
                    { name: "Knowledge (nature)", bonus: 44, breakdown: "37 ranks" },
                ],
                feats: [
                    { name: "Combat Expertise", description: "" }, { name: "Dodge", description: "" }, { name: "Alertness", description: "" }, { name: "Silent Spell", description: "" }, { name: "Still Spell", description: "" }, { name: "Natural Spell", description: "" }, { name: "Metamorphic Transfer", description: "" },
                    { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" },
                    { name: "Automatic Quicken Spell", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                         { name: "Tome of Leadership and Influence +3", cost: "82,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "The All-Beast",
            class: "Druid 5 / Master of Many Forms 10 / Warshaper 5 / All-Beast 10",
            hitDice: "17d8+170 (HD) + 30d8+300 (Classes) = 700 hp",
            challengeRating: 47,
            armorClass: {
                total: 65,
                breakdown: "(Varies by form, base +4 Dex, +25 natural, +10 armor, +10 deflection, +6 insight)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "The All-Beast epic prestige class from Librim Eternia is the pinnacle of shapeshifting.",
                "It can now assume the form of any creature, regardless of type, and even combine traits from multiple forms.",
                "Its quest is nearing completion. It has almost mastered all of life's forms, and the secrets of reality feel within its grasp."
            ],
            sheet: {
                baseAtk: 36,
                grapple: 45,
                fullAttack: [
                    { name: "Varies by form", bonus: "+51", damage: "Varies", crit: "Varies", type: "Melee" },
                ],
                spaceReach: "Varies",
                specialAttacks: [
                    { name: "Perfect Form", type: "Su", description: "Can assume the form of any corporeal creature, gaining all its abilities." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "25/good, piercing, and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "47" },
                ],
                saves: {
                    fort: { bonus: 39, breakdown: "+10 HD, +10 Con, +19 Class" },
                    ref: { bonus: 31, breakdown: "+10 HD, +4 Dex, +17 Class" },
                    will: { bonus: 35, breakdown: "+10 HD, +6 Wis, +19 Class" },
                },
                abilities: { str: 20, dex: 18, con: 30, int: 27, wis: 23, cha: 34 },
                skills: [
                    { name: "Bluff", bonus: 59, breakdown: "47 ranks" },
                    { name: "Disguise", bonus: 59, breakdown: "47 ranks" },
                    { name: "Knowledge (any)", bonus: 55, breakdown: "47 ranks" },
                ],
                feats: [
                    { name: "Combat Expertise", description: "" }, { name: "Dodge", description: "" }, { name: "Alertness", description: "" }, { name: "Silent Spell", description: "" }, { name: "Still Spell", description: "" }, { name: "Natural Spell", description: "" }, { name: "Metamorphic Transfer", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Automatic Quicken Spell", description: "" },
                    { name: "Epic Will", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Great Charisma", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Unique",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                         { name: "Tome of Leadership and Influence +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "The Final Form",
            class: "Druid 5 / Master of Many Forms 10 / Warshaper 5 / All-Beast 10 / Epic Sorcerer 10",
            hitDice: "17d8+204 (HD) + 40d8+480 (Classes) = 1020 hp",
            challengeRating: 57,
            armorClass: {
                total: 80,
                breakdown: "(Varies by form, base +4 Dex, +28 natural, +12 armor, +12 deflection, +14 insight, +10 sacred)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "Having mastered all physical forms, it now focuses on perfecting its innate magical power.",
                "It has achieved its goal. By understanding all forms, it has unlocked a secret of the cosmos: form is an illusion. It can now exist as a being of pure will and magic, its shape whatever it desires.",
                "The prison of reincarnation is broken. It is a new, unique kind of god, a master of both the flesh and the spirit, and the multiverse is its canvas."
            ],
            sheet: {
                baseAtk: 41,
                grapple: 50,
                fullAttack: [
                    { name: "Varies by form", bonus: "+58", damage: "Varies", crit: "Varies", type: "Melee" },
                ],
                spaceReach: "Varies",
                specialAttacks: [
                    { name: "Metamagic Freedom", type: "Su", description: "Can apply any metamagic feat to its spells at will without increasing spell level or casting time."}
                ],
                specialQualities: [
                    { name: "One with the Pattern", type: "Ex", description: "Immune to polymorph and reality-altering effects. It is now a fundamental law of reality itself." },
                ],
                saves: {
                    fort: { bonus: 48, breakdown: "+10 HD, +12 Con, +26 Class" },
                    ref: { bonus: 40, breakdown: "+10 HD, +4 Dex, +26 Class" },
                    will: { bonus: 47, breakdown: "+10 HD, +6 Wis, +31 Class" },
                },
                abilities: { str: 20, dex: 18, con: 34, int: 31, wis: 23, cha: 40 },
                skills: [
                    { name: "Bluff", bonus: 72, breakdown: "57 ranks" },
                    { name: "Disguise", bonus: 72, breakdown: "57 ranks" },
                    { name: "Knowledge (any)", bonus: 66, breakdown: "57 ranks" },
                ],
                feats: [
                     { name: "Combat Expertise", description: "" }, { name: "Dodge", description: "" }, { name: "Alertness", description: "" }, { name: "Silent Spell", description: "" }, { name: "Still Spell", description: "" }, { name: "Natural Spell", description: "" }, { name: "Metamorphic Transfer", description: "" }, { name: "Epic Spellcasting", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Automatic Quicken Spell", description: "" }, { name: "Epic Will", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Great Charisma", description: "" },
                    { name: "Ignore Material Components", description: "" }, { name: "Perfect Health", description: "" }, { name: "Epic Reputation", description: "" }
                ],
                flaws: [],
                environment: "A personal demiplane of infinite forms",
                organization: "Unique",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Prime Clay", cost: "Artifact", description: "+12 to all physical stats, allows assumption of god-forms." },
                         { name: "The Mask of a Thousand Faces", cost: "Artifact", description: "+12 to all mental stats, grants constant Mind Blank." },
                         { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};