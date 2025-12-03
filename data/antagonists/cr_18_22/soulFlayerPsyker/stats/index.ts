// data/antagonists/cr_18_22/soulFlayerPsyker/stats/index.ts
import { Monster } from '../../../../types';

export const soulFlayerPsykerStats: Monster = {
    name: "Soul-Flayer Psyker",
    description: "The Soul-Flayers are the intelligence arm of the Empæryen's secret police. They are powerful telepaths who have undergone profane rituals to enhance their powers, allowing them to flay the thoughts and memories from a victim's mind, leaving behind a mindless, obedient shell. They serve as interrogators, political officers, and psychic assassins.",
    roleplayGuide: [],
    builds: [
        {
            level: 25, // ECL
            title: "The Mind's End",
            class: "Human Psion (Telepath) 20 / Slayer 5",
            hitDice: "25d6+125 (Max HD) = 275 hp",
            challengeRating: 19,
            speed: "30 ft.",
            armorClass: {
                total: 40,
                breakdown: "(+8 Dex, +8 armor, +8 deflection, +6 insight)",
                touch: 32,
                flatFooted: 32,
            },
            initiative: {
                bonus: 12,
                breakdown: "(+8 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 19 psionic specialist focused on save-or-lose effects and psychic assassination.",
                "It combines the raw power of a high-level Telepath with the Slayer's ability to study and execute a target."
            ],
            sheet: {
                baseAtk: 13,
                grapple: 15,
                fullAttack: [
                    { name: "+4 Mind-Bender Dagger", bonus: "+25", damage: "1d4+6", crit: "19-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Swift Action:</b> Quicken a debuff like 'Ego Whip' (DC 30 Will, 4d4 Cha dmg) or 'Id Insinuation'.",
                    "<b>Standard Action:</b> Manifest a save-or-lose power like 'Dominate, Psionic' (DC 30 Will) or 'Mindscape Prison' (DC 30 Will).",
                    "<b>Primary Tactic:</b> Uses its high Initiative to act first, disabling the most dangerous foe with a quickened debuff followed by a powerful 'Dominate' or 'Mindscape Prison'. It avoids physical combat, relying on its puppets and powers.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifests as a 25th-level Psion (Telepath)." },
                    { name: "Psychic Assassination", type: "Psi", description: "Can study a target for 3 rounds to deliver a death attack with a psionic power, increasing the power's save DC by its Slayer level (+5)." },
                    { name: "Soul Flay", type: "Su", description: "3/day, can force a helpless or willing creature to make a DC 30 Will save or have their mind wiped, becoming a mindless thrall." },
                ],
                specialQualities: [
                    { name: "Mind Blank", type: "Ex", description: "Constantly under the effect of a Mind Blank spell." },
                    { name: "Power Resistance", type: "Ex", description: "30" },
                ],
                saves: {
                    fort: { bonus: 15, breakdown: "+8 class, +5 Con, +2 item" },
                    ref: { bonus: 21, breakdown: "+11 class, +8 Dex, +2 item" },
                    will: { bonus: 26, breakdown: "+17 class, +7 Wis, +2 item" },
                },
                abilities: { str: 14, dex: 26, con: 20, int: 30, wis: 24, cha: 22 },
                skills: [
                    { name: "Psicraft", bonus: 38, breakdown: "28 ranks + 10 Int" },
                    { name: "Concentration", bonus: 33, breakdown: "28 ranks + 5 Con" },
                    { name: "Bluff", bonus: 34, breakdown: "28 ranks + 6 Cha" },
                    { name: "Intimidate", bonus: 34, breakdown: "28 ranks + 6 Cha" },
                    { name: "Hide", bonus: 36, breakdown: "28 ranks + 8 Dex" },
                    { name: "Move Silently", bonus: 36, breakdown: "28 ranks + 8 Dex" },
                ],
                feats: [
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Power Penetration", description: "+2 to overcome PR." },
                    { name: "Greater Power Penetration", description: "+2 to overcome PR." },
                    { name: "Quicken Power", description: "Manifest as a swift action." },
                    { name: "Psionic Meditation", description: "Regain focus as a move action." },
                    { name: "Greater Psionic Endowment", description: "+2 to save DCs." },
                    { name: "Toughness", description: "+3 HP." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "450,000 gp",
                    items: [
                        { name: "Belt of Magnificence +4", cost: "100,000 gp", description: "" },
                        { name: "Tome of Clear Thought +3", cost: "82,500 gp", description: "" },
                        { name: "+5 Mithral Chain Shirt", cost: "26,100 gp", description: "" },
                    ]
                }
            }
        },
    ]
};