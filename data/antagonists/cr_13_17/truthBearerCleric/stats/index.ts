
// data/antagonists/cr_13_17/truthBearerCleric/stats/index.ts
import { Monster } from '../../../../types';

export const truthBearerClericStats: Monster = {
    name: "Truth-Bearer Cleric",
    description: "In the fanatical dogma of the Empæryen, deception is a form of weakness and impurity. The Truth-Bearer Clerics are a holy order dedicated to violently excising lies from the world. They see shapeshifters, illusionists, and binders as the ultimate heretics. Wielding maces forged from 'truth-silver' and eyes that pierce all falsehoods, they march into battle to strip away all masks and expose the 'true' ugliness of their foes before purifying them with holy fire.",
    roleplayGuide: [],
    builds: [
        {
            level: 22, // ECL
            title: "The Inescapable Gaze",
            class: "Human Cleric 22",
            hitDice: "22d8+132 (Max HD) = 308 hp",
            challengeRating: 15,
            speed: "20 ft.",
            armorClass: {
                total: 35,
                breakdown: "(+10 armor, +5 shield, +5 deflection, +5 natural)",
                touch: 15,
                flatFooted: 34,
            },
            initiative: {
                bonus: 5,
                breakdown: "(+1 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 15 divine caster specialized in countering deception-based characters like the Rakshasa Maharaja or Oni Mage.",
                "Its primary abilities revolve around 'True Seeing' and suppressing shapechanging and soulmelds."
            ],
            sheet: {
                baseAtk: 16,
                grapple: 19,
                fullAttack: [
                    { name: "+3 Truth-Seeker Heavy Mace", bonus: "+22/+17/+12", damage: "1d8+6", crit: "x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Constant Aura:</b> 'True Seeing' in a 120 ft. radius.",
                    "<b>Standard Action:</b> Casts a spell like 'Dimensional Anchor' on a shapeshifter, 'Dispel Magic' on a soulmelder, or 'Searing Light' for damage.",
                    "<b>On Critical Hit:</b> 'Truth-Seeker' mace forces a DC 28 Fort save or the target's shapechanging, soulmelds, and illusions are suppressed for 1d4 rounds.",
                    "<b>Primary Tactic:</b> Uses its 'True Seeing' to identify the true threat. It then uses spells to lock them down and moves into melee to suppress their powers with its mace.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts as a 22nd-level Cleric (Domains: Law, Inquisition, Sun, Purification)." },
                    { name: "Aura of Truth", type: "Su", description: "Constant 'True Seeing' effect in a 120-foot radius." },
                    { name: "Suppress Form", type: "Su", description: "On a confirmed critical hit with its mace, the target must make a DC 28 Fortitude save or have all of its shapechanging abilities, soulmelds, and active illusions suppressed for 1d4 rounds." },
                ],
                specialQualities: [
                    { name: "Immunity to Illusions", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+13 class, +6 Con, +1 item" },
                    ref: { bonus: 9, breakdown: "+7 class, +1 Dex, +1 item" },
                    will: { bonus: 23, breakdown: "+13 class, +9 Wis, +1 item" },
                },
                abilities: { str: 16, dex: 12, con: 22, int: 18, wis: 28, cha: 20 },
                skills: [
                    { name: "Concentration", bonus: 31, breakdown: "25 ranks + 6 Con" },
                    { name: "Knowledge (religion)", bonus: 29, breakdown: "25 ranks + 4 Int" },
                    { name: "Spellcraft", bonus: 29, breakdown: "25 ranks + 4 Int" },
                    { name: "Sense Motive", bonus: 34, breakdown: "25 ranks + 9 Wis" },
                ],
                feats: [
                    { name: "Combat Casting", description: "+4 on Concentration checks." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Spell Penetration", description: "+2 to overcome SR." },
                    { name: "Greater Spell Penetration", description: "+2 to overcome SR." },
                    { name: "Empower Spell", description: "Spells are 50% more effective." },
                    { name: "Maximize Spell", description: "Maximize spell variables." },
                    { name: "Quicken Spell", description: "Cast spells as a swift action." },
                    { name: "Divine Metamagic (Quicken Spell)", description: "Spend turn attempts to quicken spells." },
                    { name: "Extra Turning", description: "+4 turn attempts." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Truth-Cult (3-5)",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "400,000 gp",
                    items: [
                        { name: "+3 Truth-Seeker Heavy Mace", cost: "50,312 gp", description: "Custom magic item with 'Suppress Form' ability." },
                        { name: "+4 Full Plate", cost: "17,650 gp", description: "" },
                        { name: "+3 Heavy Shield", cost: "9,170 gp", description: "" },
                        { name: "Periapt of Wisdom +6", cost: "36,000 gp", description: "" },
                        { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                        { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                        { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};
