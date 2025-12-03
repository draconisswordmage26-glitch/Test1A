// data/antagonists/cr_28_32/apostateCardinal/stats/index.ts
import { Monster } from '../../../../types';

export const apostateCardinalStats: Monster = {
    name: "The Apostate Cardinal",
    description: "Cardinal Valerius was once the most pious servant of a god of light. But his faith was shattered when he saw the hypocrisy and corruption at the heart of his own church. Now, he serves the God-Kaiser, believing that Zharov's brutal, honest tyranny is a purer form of order than the gilded lies of the heavens. He has not forsaken his divine power; he has perfected it, twisting it into a weapon against his former masters. He is a master of divine magic, and his specialty is unmaking the miracles of other gods.",
    roleplayGuide: [],
    builds: [
        {
            level: 48, // ECL
            title: "The Unbeliever",
            class: "Human Cleric 20 / Loremaster 10 / True Necromancer 10 / Epic Cleric 8",
            hitDice: "48d8+528 (Max HD) = 912 hp",
            challengeRating: 32,
            speed: "20 ft.",
            armorClass: {
                total: 62,
                breakdown: "(+12 armor, +8 shield, +8 Dex, +10 deflection, +14 natural)",
                touch: 28,
                flatFooted: 54,
            },
            initiative: {
                bonus: 12,
                breakdown: "(+8 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 32 anti-divine caster specialist.",
                "His high caster level, counterspelling feats, and unique abilities make him a nightmare for any cleric, druid, or paladin.",
                "He combines immense divine power with a scholar's knowledge of its every weakness."
            ],
            sheet: {
                baseAtk: 34,
                grapple: 40,
                fullAttack: [
                    { name: "+8 Unholy Heavy Mace", bonus: "+50/+45/+40/+35", damage: "1d8+14", crit: "x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Immediate Action:</b> Readies a counterspell against any divine spell cast within 120 ft. His Spellcraft check is +65.",
                    "<b>Swift Action:</b> DMM (Quicken Spell) to cast a debuff like 'Greater Dispelling' or 'Bestow Curse'.",
                    "<b>Standard Action:</b> Casts a powerful offensive spell like 'Harm', 'Destruction', or an empowered 'Searing Light'.",
                    "<b>Primary Tactic:</b> Shuts down the enemy divine caster with counterspells and targeted dispels. Uses 'Aura of Unbelief' to make their spells fail. Once their magic is neutralized, he destroys them with his own.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 38th-level Cleric (Domains: Magic, Knowledge, Evil, Law, Inquisition)." },
                    { name: "Aura of Unbelief", type: "Su", description: "60-ft. aura. Any creature attempting to cast a divine spell must make a Spellcraft check (DC 45) or the spell fizzles." },
                    { name: "Unravel Divine", type: "Su", description: "As a standard action, can make a targeted 'Greater Dispel Magic' that automatically succeeds against divine spells. 5/day." },
                    { name: "Steal Miracle", type: "Su", description: "If he successfully counterspells a divine spell, he can immediately cast that same spell as a free action, using the original caster's slot." },
                ],
                specialQualities: [
                    { name: "Spell Resistance", type: "Ex", description: "45" },
                    { name: "Divine Rebuke", type: "Su", description: "Can turn or rebuke outsiders as a 38th-level cleric." },
                    { name: "Immunities", type: "Ex", description: "Immune to divine spells of 6th level or lower." },
                ],
                saves: {
                    fort: { bonus: 35, breakdown: "+21 class, +11 Con, +3 item" },
                    ref: { bonus: 29, breakdown: "+14 class, +8 Dex, +7 item" },
                    will: { bonus: 42, breakdown: "+28 class, +11 Wis, +3 item" },
                },
                abilities: { str: 22, dex: 26, con: 32, int: 35, wis: 32, cha: 30 },
                skills: [
                    { name: "Spellcraft", bonus: 63, breakdown: "51 ranks + 12 Int" },
                    { name: "Knowledge (religion)", bonus: 63, breakdown: "51 ranks + 12 Int" },
                    { name: "Concentration", bonus: 62, breakdown: "51 ranks + 11 Con" },
                    { name: "Sense Motive", bonus: 62, breakdown: "51 ranks + 11 Wis" },
                    { name: "Diplomacy", bonus: 61, breakdown: "51 ranks + 10 Cha" },
                ],
                feats: [
                    { name: "Improved Counterspell", description: "Counterspell with a spell of the same school." },
                    { name: "Reactive Counterspell", description: "Counterspell even when flat-footed." },
                    { name: "Quicken Spell", description: "Cast as a swift action." },
                    { name: "Divine Metamagic (Quicken Spell)", description: "Use turn attempts to quicken." },
                    { name: "Extra Turning", description: "+4 turn attempts (x3)." },
                    { name: "Epic Spellcasting", description: "" },
                    { name: "Epic Spell Penetration", description: "+6 to overcome SR." },
                    { name: "Automatic Quicken Spell", description: "Quicken 0-3rd level spells for free." },
                    { name: "Great Wisdom", description: "+1 to Wisdom (x3)." },
                    { name: "Great Constitution", description: "+1 to Constitution (x3)." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Epic Toughness", description: "+30 HP." },
                ],
                flaws: [],
                environment: "The God-Kaiser's profane cathedral",
                organization: "Unique",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "1,400,000 gp",
                    items: [
                        { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                        { name: "Tome of Understanding +5", cost: "137,500 gp", description: "" },
                        { name: "Tome of Clear Thought +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
    ]
};