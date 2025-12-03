
// data/antagonists/cr_18_22/blasphemyChoirAcolyte/stats/index.ts
import { Monster } from '../../../../types';

export const blasphemyChoirAcolyteStats: Monster = {
    name: "Blasphemy Choir Acolyte",
    description: "These were once the most devout singers from the choirs of the upper planes, their voices conduits of divine power. Captured and tortured by the Empæryen, their faith was broken and their songs were inverted. Now they sing hymns of despair and anthems of tyranny. Individually, they are powerful fallen clerics. Together, their voices can combine into a 'Blasphemy Choir', a sonic wave of pure evil that can kill, paralyze, or weaken all who hear it.",
    roleplayGuide: [],
    builds: [
        {
            level: 30, // ECL
            title: "Voice of the Apostate",
            class: "Human Cleric 20 / Bard 10",
            hitDice: "30d8+210 (Max HD) = 450 hp",
            challengeRating: 22,
            speed: "20 ft.",
            armorClass: {
                total: 45,
                breakdown: "(+10 armor, +5 shield, +5 Dex, +8 deflection, +7 natural)",
                touch: 23,
                flatFooted: 40,
            },
            initiative: {
                bonus: 9,
                breakdown: "(+5 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 22 divine spellcaster and buffer/debuffer.",
                "Its primary strength comes from the 'Blasphemy Choir' ability, making a group of them a devastating encounter.",
                "It combines the powerful spell list of a Cleric with the support abilities of a Bard."
            ],
            sheet: {
                baseAtk: 22,
                grapple: 26,
                fullAttack: [
                    { name: "+5 Unholy Heavy Mace", bonus: "+31/+26/+21/+16", damage: "1d8+9", crit: "x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Blasphemy Choir:</b> If 3 or more Acolytes are present, they can use their standard actions to unleash a 'Blasphemy' spell (DC 35 Will).",
                    "<b>Bardic Music:</b> Inspire Courage +3 for allies, or use 'Song of Discord' on the party.",
                    "<b>Spells:</b> Uses quickened debuffs ('Bestow Curse') and powerful standard action spells ('Destruction', 'Harm').",
                    "<b>Primary Tactic:</b> Fights in a group. They will use their Choir ability every round while using their swift actions and move actions to cast spells and reposition.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 20th-level Cleric and 10th-level Bard." },
                    { name: "Blasphemy Choir", type: "Su", description: "If three or more Acolytes are within 30 feet of each other, they can use their standard actions to produce a 'Blasphemy' spell effect as a 30th-level caster (DC 35)." },
                    { name: "Bardic Music", type: "Su", description: "10/day, Inspire Courage +3, Song of Discord, etc." },
                ],
                specialQualities: [
                    { name: "Spell Resistance", type: "Ex", description: "32" },
                ],
                saves: {
                    fort: { bonus: 26, breakdown: "+12 class, +7 Con, +7 item" },
                    ref: { bonus: 25, breakdown: "+10 class, +5 Dex, +10 item" },
                    will: { bonus: 29, breakdown: "+17 class, +8 Wis, +4 item" },
                },
                abilities: { str: 18, dex: 20, con: 24, int: 22, wis: 26, cha: 30 },
                skills: [
                    { name: "Perform (sing)", bonus: 43, breakdown: "33 ranks + 10 Cha" },
                    { name: "Spellcraft", bonus: 39, breakdown: "33 ranks + 6 Int" },
                    { name: "Concentration", bonus: 40, breakdown: "33 ranks + 7 Con" },
                    { name: "Knowledge (religion)", bonus: 39, breakdown: "33 ranks + 6 Int" },
                    { name: "Diplomacy", bonus: 43, breakdown: "33 ranks + 10 Cha" },
                    { name: "Bluff", bonus: 43, breakdown: "33 ranks + 10 Cha" },
                ],
                feats: [
                    { name: "Quicken Spell", description: "Cast as swift action." },
                    { name: "Divine Metamagic (Quicken Spell)", description: "Use turn attempts to quicken." },
                    { name: "Extra Turning", description: "+4 turn attempts." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Combat Casting", description: "+4 to Concentration." },
                    { name: "Lingering Song", description: "Bardic music effects last 1 minute longer." },
                    { name: "Epic Spellcasting", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Choir (3-6)",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "600,000 gp",
                    items: [
                        { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                        { name: "Tome of Understanding +3", cost: "82,500 gp", description: "" },
                        { name: "+5 Full Plate", cost: "26,650 gp", description: "" },
                        { name: "+5 Heavy Shield", cost: "25,170 gp", description: "" },
                    ]
                }
            }
        },
    ]
};
