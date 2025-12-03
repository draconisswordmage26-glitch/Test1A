// data/antagonists/cr_13_17/glaubenskrieger/stats/index.ts
import { Monster } from '../../../../types';

export const glaubenskriegerStats: Monster = {
    name: "Glaubenskrieger",
    description: "The Glaubenskrieger ('Faith-Warriors') are the fanatical warrior-priests of the God-Kaiser's imperial cult. They are the spiritual backbone of the legions, their divine power twisted to serve a doctrine of human supremacy and absolute, brutal order. They march into battle chanting hymns of hate, their maces glowing with profane energy, ready to die for the glory of the Empæryen and their god-made-man.",
    roleplayGuide: [],
    builds: [
        {
            level: 20, // ECL
            title: "The Iron Zealot",
            class: "Human Cleric 15 / Fighter 5",
            hitDice: "20d8+120 (Max HD) = 280 hp",
            challengeRating: 14,
            speed: "20 ft.",
            armorClass: {
                total: 35,
                breakdown: "(+12 armor, +5 shield, +3 Dex, +5 deflection)",
                touch: 18,
                flatFooted: 32,
            },
            initiative: {
                bonus: 7,
                breakdown: "(+3 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 14 divine support caster and melee combatant.",
                "It is a 'gish' build, using its Cleric spells to buff itself into a formidable fighter.",
                "Its primary role is to support other imperial troops and provide magical firepower."
            ],
            sheet: {
                baseAtk: 16,
                grapple: 20,
                fullAttack: [
                    { name: "+3 Unholy Heavy Mace", bonus: "+24/+19/+14", damage: "1d8+8", crit: "x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Pre-Buff:</b> Casts 'Divine Power' to get BAB of 20, and 'Righteous Might' for size and Strength.",
                    "<b>Swift Action:</b> DMM (Quicken Spell) to cast a debuff like 'Bestow Curse'.",
                    "<b>Full Attack (Buffed):</b> 4 attacks (+29/+24/+19/+14, avg. 20 dmg).",
                    "<b>Primary Tactic:</b> Acts as a force multiplier. It will buff the most powerful imperial ally (like a Stahlritter), then use its own spells and attacks to support them and eliminate weaker targets.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 15th-level Cleric (Domains: Law, War, Domination, Destruction)." },
                    { name: "Turn/Rebuke Undead", type: "Su", description: "6/day." },
                ],
                specialQualities: [
                    { name: "Fanatical Zeal", type: "Ex", description: "Immune to fear and charm effects." },
                ],
                saves: {
                    fort: { bonus: 16, breakdown: "+9 class, +6 Con, +1 item" },
                    ref: { bonus: 11, breakdown: "+5 class, +3 Dex, +3 item" },
                    will: { bonus: 16, breakdown: "+9 class, +6 Wis, +1 item" },
                },
                abilities: { str: 18, dex: 16, con: 22, int: 14, wis: 22, cha: 16 },
                skills: [
                    { name: "Concentration", bonus: 29, breakdown: "23 ranks + 6 Con" },
                    { name: "Knowledge (religion)", bonus: 25, breakdown: "23 ranks + 2 Int" },
                    { name: "Intimidate", bonus: 26, breakdown: "23 ranks + 3 Cha" },
                    { name: "Spellcraft", bonus: 25, breakdown: "23 ranks + 2 Int" },
                ],
                feats: [
                    { name: "Power Attack", description: "" },
                    { name: "Improved Initiative", description: "" },
                    { name: "Weapon Focus (Heavy Mace)", description: "(War Domain Bonus Feat)" },
                    { name: "Quicken Spell", description: "" },
                    { name: "Divine Metamagic (Quicken Spell)", description: "" },
                    { name: "Extra Turning", description: "" },
                    { name: "Combat Casting", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Squad (3-5)",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "180,000 gp",
                    items: [
                        { name: "+3 Unholy Heavy Mace", cost: "32,312 gp", description: "" },
                        { name: "+4 Full Plate", cost: "17,650 gp", description: "" },
                        { name: "+3 Heavy Shield", cost: "9,170 gp", description: "" },
                        { name: "Periapt of Wisdom +4", cost: "16,000 gp", description: "" },
                        { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                        { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};