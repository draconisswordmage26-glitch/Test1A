// data/antagonists/cr_13_17/stahlritter/stats/index.ts
import { Monster } from '../../../../types';

export const stahlritterStats: Monster = {
    name: "Stahlritter",
    description: "The personal guards of the imperial nobility, Stahlritters ('Steel-Riders') are the pinnacle of heavy cavalry. Each is a fanatical warrior bonded to a powerful fiendish warhorse. Clad in rune-forged plate armor and wielding lances that crackle with unholy energy, they are the Empæryen's iron fist, a living battering ram of terror and disciplined fury. Their charge is a thunderous, unstoppable force that has broken the lines of angelic hosts and demonic legions alike.",
    roleplayGuide: [],
    builds: [
        {
            level: 25, // ECL
            title: "The Iron Lance",
            class: "Human Fighter 10 / Paladin of Tyranny 10 / Cavalier 5",
            hitDice: "25d10+200 (Max HD) = 475 hp",
            challengeRating: 17,
            speed: "20 ft.",
            armorClass: {
                total: 40,
                breakdown: "(+14 armor, +7 shield, +4 Dex, +5 deflection)",
                touch: 19,
                flatFooted: 36,
            },
            initiative: {
                bonus: 8,
                breakdown: "(+4 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 17 elite mounted combatant.",
                "Its power comes from the synergy of its charger feats and its fiendish mount.",
                "It is designed to deliver a single, devastating alpha strike with its lance."
            ],
            sheet: {
                baseAtk: 25,
                grapple: 32,
                fullAttack: [
                    { name: "+5 Unholy Adamantine Lance", bonus: "+38/+33/+28/+23", damage: "1d8+12", crit: "x3", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Charge:</b> Spirited Charge with lance deals triple damage (3d8+36).",
                    "<b>Smite Good:</b> 4/day, adds +7 to attack and +25 to damage against a good creature.",
                    "<b>Aura of Despair:</b> Enemies within 10 ft. take a -2 penalty on all saves.",
                    "<b>Primary Tactic:</b> Uses its Nightmare's 90 ft. fly speed and Ride-By Attack to make devastating charges every round. It will always use Power Attack for its full BAB, accepting the AC penalty from Shock Trooper.",
                ],
                spaceReach: "5 ft. (10 ft. with lance)",
                specialAttacks: [
                    { name: "Smite Good", type: "Su", description: "4/day, +7 to attack, +25 to damage." },
                    { name: "Aura of Despair", type: "Su", description: "Enemies within 10 ft. take a -2 penalty on all saves." },
                    { name: "Mount: Nightmare", type: "Ex", description: "Rides a Nightmare with a full complement of its own abilities." },
                ],
                specialQualities: [
                    { name: "Divine Grace", type: "Su", description: "Adds Charisma bonus (+7) to all saves." },
                    { name: "DR 10/good", type: "Su", description: "" },
                ],
                saves: {
                    fort: { bonus: 26, breakdown: "+14 class, +8 Con, +4 Cha" },
                    ref: { bonus: 19, breakdown: "+8 class, +4 Dex, +7 Cha" },
                    will: { bonus: 20, breakdown: "+12 class, +1 Wis, +7 Cha" },
                },
                abilities: { str: 24, dex: 18, con: 26, int: 12, wis: 12, cha: 24 },
                skills: [
                    { name: "Ride", bonus: 32, breakdown: "28 ranks + 4 Dex" },
                    { name: "Intimidate", bonus: 35, breakdown: "28 ranks + 7 Cha" },
                    { name: "Handle Animal", bonus: 35, breakdown: "28 ranks + 7 Cha" },
                ],
                feats: [
                    { name: "Mounted Combat", description: "" },
                    { name: "Ride-By Attack", description: "" },
                    { name: "Spirited Charge", description: "" },
                    { name: "Power Attack", description: "" },
                    { name: "Improved Bull Rush", description: "" },
                    { name: "Shock Trooper", description: "" },
                    { name: "Leap Attack", description: "" },
                    { name: "Improved Initiative", description: "" },
                    { name: "Weapon Focus (Lance)", description: "" },
                    { name: "Divine Might", description: "" },
                ],
                flaws: [],
                environment: "Any",
                organization: "Lance (1 Stahlritter and 4 Hellbound Outriders)",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "400,000 gp",
                    items: [
                        { name: "+5 Unholy Adamantine Lance", cost: "98,310 gp", description: "" },
                        { name: "+5 Full Plate", cost: "26,650 gp", description: "" },
                        { name: "+5 Heavy Shield", cost: "25,170 gp", description: "" },
                        { name: "Belt of Magnificence +4", cost: "100,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};