// data/monsters/upasundaAsura.ts
import { Monster } from '../../types';

export const upasundaAsura: Monster = {
    name: "Upasunda Asura, Binder Adept",
    description: "A powerful, six-armed fiend born from the divine entropy at the end of a world's life cycle. Upasundas are master tacticians and warriors, their multiple limbs allowing for a flurry of attacks.",
    roleplayGuide: [
        "You are a cosmic revolutionary. You have seen the endless, repeating cycle of suffering that is creation, and you find it flawed.",
        "Your goal is to unmake the current, imperfect reality to allow a better one to finally be born. This is not destruction for its own sake, but a necessary reset.",
        "You are patient, logical, and utterly convinced of your righteousness. You will explain your philosophy to those who will listen, seeing it as a mercy before their inevitable dissolution.",
        "An alliance with 'good' forces is a temporary, pragmatic step. If they can help you dismantle a greater, more immediate source of cosmic stagnation (like a Demon Lord or a tyrannical god), you will honor the arrangement with cold, professional courtesy."
    ],
    builds: [
        {
            level: 1,
            title: "Agent of Entropy",
            class: "Binder 1",
            hitDice: "12d8+60 (HD) + 1d8+5 (Binder) = 124 hp",
            challengeRating: 15,
            armorClass: {
                total: 26,
                breakdown: "(-1 size, +4 Dex, +13 natural)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "Base creature is an Upasunda Asura (12 Outsider HD).",
                "Binder level grants access to vestiges, supernatural entities that grant powers.",
                "Binding Amon allows the Asura to add fire damage to its attacks and gain a powerful ram attack.",
                "Its main strength is its sheer number of attacks, overwhelming most defenses."
            ],
            sheet: {
                baseAtk: 12,
                grapple: 25,
                fullAttack: [
                    { name: "4 Claws", bonus: "+20", damage: "1d6+9", crit: "20/x2", type: "Melee" },
                    { name: "2 Bites", bonus: "+18", damage: "1d8+4", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Pounce", type: "Ex", description: "Can make a full attack on a charge." },
                    { name: "Soul Binding", type: "Su", description: "Can bind one vestige (e.g., Amon for fire damage and ram attack)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/good" },
                    { name: "Spell Resistance", type: "Ex", description: "25" },
                    { name: "Fast Healing", type: "Ex", description: "5 hp/round." },
                ],
                saves: {
                    fort: { bonus: 15, breakdown: "+8 HD, +5 Con, +2 Binder" },
                    ref: { bonus: 12, breakdown: "+8 HD, +4 Dex" },
                    will: { bonus: 12, breakdown: "+8 HD, +4 Wis" },
                },
                abilities: { str: 28, dex: 19, con: 20, int: 15, wis: 18, cha: 17 },
                skills: [
                    { name: "Bluff", bonus: 19, breakdown: "16 ranks, +3 Cha" },
                    { name: "Diplomacy", bonus: 21, breakdown: "16 ranks, +3 Cha, +2 synergy" },
                    { name: "Intimidate", bonus: 21, breakdown: "16 ranks, +3 Cha, +2 synergy" },
                    { name: "Knowledge (the planes)", bonus: 18, breakdown: "16 ranks, +2 Int" },
                    { name: "Sense Motive", bonus: 20, breakdown: "16 ranks, +4 Wis" },
                ],
                feats: [
                    { name: "Multiattack", description: "Reduces penalty for secondary natural attacks." },
                    { name: "Improved Multiattack", description: "Further reduces penalty." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Combat Reflexes", description: "Extra attacks of opportunity." },
                ],
                flaws: [],
                environment: "Any evil-aligned plane",
                organization: "Solitary or pair",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "9,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +1", cost: "4,000 gp", description: "" },
                         { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 5,
            title: "Bearer of Forgotten Names",
            class: "Binder 5",
            hitDice: "12d8+72 (HD) + 5d8+30 (Binder) = 160 hp",
            challengeRating: 16,
            armorClass: {
                total: 31,
                breakdown: "(-1 size, +4 Dex, +13 natural, +3 armor, +2 deflection)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
             buildNotes: [
                "Can now bind two vestiges, greatly increasing its versatility.",
                "Binding Paimon provides useful skills and abilities like dance, weapon proficiency, and a sonic blast.",
                "Equipment starts to shore up its defenses."
            ],
            sheet: {
                baseAtk: 15,
                grapple: 28,
                fullAttack: [
                    { name: "4 Claws", bonus: "+23", damage: "1d6+9", crit: "20/x2", type: "Melee" },
                    { name: "2 Bites", bonus: "+21", damage: "1d8+4", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Pounce", type: "Ex", description: "Can make a full attack on a charge." },
                    { name: "Soul Binding", type: "Su", description: "Can bind two vestiges (e.g., Amon and Paimon)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/good" },
                    { name: "Spell Resistance", type: "Ex", description: "25" },
                    { name: "Fast Healing", type: "Ex", description: "5 hp/round." },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+8 HD, +6 Con, +4 Binder, +2 resistance" },
                    ref: { bonus: 15, breakdown: "+8 HD, +4 Dex, +1 Binder, +2 resistance" },
                    will: { bonus: 18, breakdown: "+8 HD, +4 Wis, +4 Binder, +2 resistance" },
                },
                abilities: { str: 28, dex: 19, con: 22, int: 15, wis: 18, cha: 17 },
                skills: [
                    { name: "Bluff", bonus: 23, breakdown: "20 ranks, +3 Cha" },
                    { name: "Diplomacy", bonus: 25, breakdown: "20 ranks, +3 Cha, +2 synergy" },
                    { name: "Intimidate", bonus: 25, breakdown: "20 ranks, +3 Cha, +2 synergy" },
                    { name: "Knowledge (the planes)", bonus: 22, breakdown: "20 ranks, +2 Int" },
                    { name: "Sense Motive", bonus: 24, breakdown: "20 ranks, +4 Wis" },
                ],
                feats: [
                    { name: "Multiattack", description: "Reduces penalty for secondary natural attacks." },
                    { name: "Improved Multiattack", description: "Further reduces penalty." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Combat Reflexes", description: "Extra attacks of opportunity." },
                    { name: "Improved Binding", description: "+1 to binding checks and access to higher level vestiges." }
                ],
                flaws: [],
                environment: "Any evil-aligned plane",
                organization: "Solitary or pair",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "49,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +2", cost: "16,000 gp", description: "" },
                         { name: "Cloak of Resistance +2", cost: "4,000 gp", description: "" },
                         { name: "Ring of Protection +2", cost: "8,000 gp", description: "" },
                         { name: "Bracers of Armor +3", cost: "9,000 gp", description: "" },
                         { name: "Amulet of Health +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 10,
            title: "Pact-Keeper",
            class: "Binder 10",
            hitDice: "12d8+84 (HD) + 10d8+70 (Binder) = 244 hp",
            challengeRating: 17,
            armorClass: {
                total: 35,
                breakdown: "(-1 size, +4 Dex, +13 natural, +5 armor, +4 deflection)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "Can bind three vestiges at once, allowing for potent combinations of powers.",
                "Binding a vestige like Focalor grants an aura of sadness and a powerful lightning strike.",
                "Its tactical flexibility makes it a formidable opponent for any party."
            ],
            sheet: {
                baseAtk: 19,
                grapple: 32,
                fullAttack: [
                    { name: "4 Claws", bonus: "+27/+22/+17/+12", damage: "1d6+9", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                 specialAttacks: [
                     { name: "Soul Binding", type: "Su", description: "Can bind three vestiges, including 5th level ones." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/good" },
                    { name: "Spell Resistance", type: "Ex", description: "25" },
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+8 HD, +7 Con, +7 Binder, +2 resistance" },
                    ref: { bonus: 18, breakdown: "+8 HD, +4 Dex, +4 Binder, +2 resistance" },
                    will: { bonus: 21, breakdown: "+8 HD, +4 Wis, +7 Binder, +2 resistance" },
                },
                abilities: { str: 28, dex: 19, con: 24, int: 15, wis: 18, cha: 17 },
                skills: [
                    { name: "Bluff", bonus: 28, breakdown: "25 ranks, +3 Cha" },
                    { name: "Diplomacy", bonus: 30, breakdown: "25 ranks, +3 Cha, +2 synergy" },
                    { name: "Intimidate", bonus: 30, breakdown: "25 ranks, +3 Cha, +2 synergy" },
                    { name: "Knowledge (the planes)", bonus: 27, breakdown: "25 ranks, +2 Int" },
                    { name: "Sense Motive", bonus: 29, breakdown: "25 ranks, +4 Wis" },
                ],
                feats: [
                    { name: "Multiattack", description: "Reduces penalty for secondary natural attacks." },
                    { name: "Improved Multiattack", description: "Further reduces penalty." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Combat Reflexes", description: "Extra attacks of opportunity." },
                    { name: "Improved Binding", description: "+1 to binding checks." },
                    { name: "Expel Vestige", description: "Banish a bound vestige to bind another." },
                ],
                flaws: [],
                environment: "Any evil-aligned plane",
                organization: "Solitary or pair",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "185,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +3", cost: "36,000 gp", description: "" },
                         { name: "Cloak of Resistance +4", cost: "16,000 gp", description: "" },
                         { name: "Ring of Protection +4", cost: "32,000 gp", description: "" },
                         { name: "Bracers of Armor +5", cost: "25,000 gp", description: "" },
                         { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 20,
            title: "Lord of a Hundred Voices",
            class: "Binder 20",
            hitDice: "12d8+96 (HD) + 20d8+160 (Binder) = 404 hp",
            challengeRating: 21,
            armorClass: {
                total: 45,
                breakdown: "(-1 size, +4 Dex, +15 natural, +8 armor, +7 deflection, +2 insight)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "As a 20th level Binder, it can bind four vestiges at once, including the legendary Zceryll.",
                "Zceryll grants powerful summoning abilities and a host of pseudo-divinations.",
                "It is a true master of pact magic, wielding the powers of dozens of forgotten entities."
            ],
            sheet: {
                baseAtk: 27,
                grapple: 40,
                fullAttack: [
                    { name: "4 Claws", bonus: "+36/+31/+26/+21", damage: "1d6+10", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Soul Binding", type: "Su", description: "Can bind four vestiges, including 8th level ones." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/good and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "30" },
                    { name: "Fast Healing", type: "Ex", description: "10 hp/round." },
                ],
                saves: {
                    fort: { bonus: 32, breakdown: "+8 HD, +8 Con, +12 Binder, +4 resistance" },
                    ref: { bonus: 23, breakdown: "+8 HD, +4 Dex, +7 Binder, +4 resistance" },
                    will: { bonus: 28, breakdown: "+8 HD, +4 Wis, +12 Binder, +4 resistance" },
                },
                abilities: { str: 30, dex: 19, con: 26, int: 15, wis: 18, cha: 22 },
                skills: [
                    { name: "Bluff", bonus: 39, breakdown: "33 ranks, +6 Cha" },
                    { name: "Diplomacy", bonus: 41, breakdown: "33 ranks, +6 Cha, +2 synergy" },
                    { name: "Intimidate", bonus: 41, breakdown: "33 ranks, +6 Cha, +2 synergy" },
                    { name: "Knowledge (the planes)", bonus: 35, breakdown: "33 ranks, +2 Int" },
                    { name: "Sense Motive", bonus: 37, breakdown: "33 ranks, +4 Wis" },
                ],
                feats: [
                    { name: "Multiattack", description: "" }, { name: "Improved Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Improved Binding", description: "" }, { name: "Expel Vestige", description: "" }, { name: "Rapid Pact Making", description: "Make a pact in 1 round." }, { name: "Favored Vestige (Amon)", description: "Gain bonuses when binding Amon." },
                    { name: "Epic Toughness", description: "+30 HP." },
                    { name: "Armor Skin", description: "+1 Natural Armor." },
                    { name: "Epic Fortitude", description: "+4 to Fortitude saves." },
                ],
                flaws: [],
                environment: "The End of Time",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "760,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +5", cost: "100,000 gp", description: "" },
                         { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                         { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                         { name: "Bracers of Armor +8", cost: "64,000 gp", description: "" },
                         { name: "Belt of Magnificence +4", cost: "100,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 30,
            title: "Pact-Bound Ascendant",
            class: "Binder 20 / Pact-Bound Ascendant 10",
            hitDice: "12d8+120 (HD) + 30d8+300 (Binder/PBA) = 678 hp",
            challengeRating: 26,
            armorClass: {
                total: 60,
                breakdown: "(-1 size, +4 Dex, +18 natural, +10 armor, +10 deflection, +9 insight)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "The Pact-Bound Ascendant from Librim Eternia allows the binding of demigod-level vestiges.",
                "It now forges pacts with dead gods and nascent cosmic entities, wielding truly epic power.",
                "Its goal of 'resetting' the universe now seems achievable, as it can channel the powers of entities that existed before the current creation."
            ],
            sheet: {
                baseAtk: 37,
                grapple: 54,
                fullAttack: [
                    { name: "4 Claws", bonus: "+49/+44/+39/+34", damage: "1d6+13", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "Soul Binding", type: "Su", description: "Can bind four vestiges, including epic ones like 'The World Serpent'." },
                    { name: "Channel Ascendant", type: "Su", description: "Can manifest a major ability of a dead god, like 'Sundered Reality' or 'Echo of the First Word'."}
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/good and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "35" },
                ],
                saves: {
                    fort: { bonus: 42, breakdown: "+8 HD, +10 Con, +19 Classes, +5 resistance" },
                    ref: { bonus: 33, breakdown: "+8 HD, +4 Dex, +16 Classes, +5 resistance" },
                    will: { bonus: 41, breakdown: "+8 HD, +4 Wis, +24 Classes, +5 resistance" },
                },
                abilities: { str: 36, dex: 19, con: 30, int: 15, wis: 18, cha: 28 },
                skills: [
                    { name: "Bluff", bonus: 50, breakdown: "33 ranks" },
                    { name: "Diplomacy", bonus: 52, breakdown: "33 ranks" },
                    { name: "Intimidate", bonus: 52, breakdown: "33 ranks" },
                    { name: "Knowledge (the planes)", bonus: 45, breakdown: "33 ranks" },
                    { name: "Sense Motive", bonus: 47, breakdown: "33 ranks" },
                ],
                feats: [
                    { name: "Multiattack", description: "" }, { name: "Improved Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Improved Binding", description: "" }, { name: "Rapid Pact Making", description: "" }, { name: "Favored Vestige (Amon)", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" },
                    { name: "Great Strength", description: "" }, { name: "Epic Will", description: "" }, { name: "Favored Vestige, Epic", description: "Choose an epic vestige." }, { name: "Ignore Special Requirements", description: "Can bind vestiges without meeting their special needs."}
                ],
                flaws: [],
                environment: "The Far Realms",
                organization: "Solitary",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "By character class",
                equipment: {
                    totalValue: "3,000,000 gp",
                    items: [
                         { name: "Amulet of Mighty Fists +8", cost: "256,000 gp", description: "" },
                         { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                         { name: "Tome of Leadership and Influence +5", cost: "137,500 gp", description: "" },
                         { name: "Ring of Protection +10", cost: "200,000 gp", description: "" },
                    ]
                }
            }
        },
        {
            level: 40,
            title: "Nexus of Dead Gods",
            class: "Binder 20 / Pact-Bound Ascendant 10 / Epic Binder 10",
            hitDice: "12d8+144 (HD) + 40d8+480 (Classes) = 1002 hp",
            challengeRating: 32,
            armorClass: {
                total: 75,
                breakdown: "(-1 size, +4 Dex, +20 natural, +12 armor, +12 deflection, +18 insight)",
            },
            initiative: {
                bonus: 4,
                breakdown: "(+4 Dex)",
            },
            buildNotes: [
                "It no longer just binds vestiges; it has become a living vestige itself.",
                "Other binders can attempt to forge a pact with it, should it be defeated or choose to allow it.",
                "It walks the multiverse as a living library of dead gods, a paradox of supreme power and borrowed existence."
            ],
            sheet: {
                baseAtk: 47,
                grapple: 68,
                fullAttack: [
                    { name: "4 Claws", bonus: "+63/+58/+53/+48", damage: "1d6+17 + 2d6 unholy", crit: "20/x2", type: "Melee" },
                ],
                spaceReach: "10 ft./10 ft.",
                specialAttacks: [
                    { name: "The Final Word", type: "Su", description: "1/day, can speak a word of unmaking, forcing a non-deity to make a Fortitude save (DC 55) or be erased from existence."}
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "25/good, epic, and chaos" },
                    { name: "Amalgam of Souls", type: "Ex", description: "Immune to mind-affecting effects, soul-trapping, and death effects." },
                ],
                saves: {
                    fort: { bonus: 54, breakdown: "+8 HD, +12 Con, +29 Classes, +5 resistance" },
                    ref: { bonus: 43, breakdown: "+8 HD, +4 Dex, +26 Classes, +5 resistance" },
                    will: { bonus: 53, breakdown: "+8 HD, +4 Wis, +36 Classes, +5 resistance" },
                },
                abilities: { str: 44, dex: 19, con: 34, int: 15, wis: 18, cha: 36 },
                skills: [
                    { name: "Bluff", bonus: 65, breakdown: "43 ranks" },
                    { name: "Diplomacy", bonus: 67, breakdown: "43 ranks" },
                    { name: "Intimidate", bonus: 67, breakdown: "43 ranks" },
                    { name: "Knowledge (the planes)", bonus: 55, breakdown: "43 ranks" },
                    { name: "Sense Motive", bonus: 57, breakdown: "43 ranks" },
                ],
                feats: [
                    { name: "Multiattack", description: "" }, { name: "Improved Multiattack", description: "" }, { name: "Power Attack", description: "" }, { name: "Combat Reflexes", description: "" }, { name: "Improved Binding", description: "" }, { name: "Rapid Pact Making", description: "" }, { name: "Favored Vestige (Amon)", description: "" }, { name: "Epic Toughness", description: "" }, { name: "Armor Skin", description: "" }, { name: "Epic Fortitude", description: "" }, { name: "Great Strength", description: "" }, { name: "Epic Will", description: "" }, { name: "Favored Vestige, Epic", description: "" }, { name: "Ignore Special Requirements", description: ""},
                    { name: "Great Charisma", description: ""}, { name: "Perfect Health", description: ""}, { name: "Epic Reputation", description: ""}
                ],
                flaws: [],
                environment: "A pocket dimension of its own creation",
                organization: "Unique",
                alignment: "Lawful Evil",
                levelAdjustment: "-",
                advancement: "-",
                equipment: {
                    totalValue: "12,000,000 gp",
                    items: [
                         { name: "The Asuran Crown", cost: "Artifact", description: "" },
                         { name: "Vestments of the First Pact", cost: "Artifact", description: "" },
                         { name: "Bracers of the Cosmic Wheel", cost: "Artifact", description: "" },
                         { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};