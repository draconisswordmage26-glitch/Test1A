
// data/antagonists/cr_18_22/anathemaKnight/stats/index.ts
import { Monster } from '../../../../types';

export const anathemaKnightStats: Monster = {
    name: "Anathema Knight",
    description: "The Empæryen views foreign gods as rival sovereigns and their clerics as enemy agents. The Anathema Knights are their answer. These warriors are atheists, their souls scoured of all divine influence and rebound to the God-Kaiser's profane will. They are clad in armor quenched in the blood of faithless priests and wield weapons that unravel divine magic. Their very presence is a blasphemy, causing holy symbols to tarnish and divine spells to fail on the caster's lips.",
    roleplayGuide: [],
    builds: [
        {
            level: 27, // ECL
            title: "The Godless",
            class: "Human Fighter 10 / Blackguard 10 / Knight of the Profane Unction 7",
            hitDice: "27d10+216 (Max HD) = 486 hp",
            challengeRating: 18,
            speed: "30 ft.",
            armorClass: {
                total: 42,
                breakdown: "(+12 armor, +5 shield, +5 Dex, +5 deflection, +5 natural)",
                touch: 20,
                flatFooted: 37,
            },
            initiative: {
                bonus: 9,
                breakdown: "(+5 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 18 anti-divine specialist, designed to counter characters like the Planetar or Kami.",
                "Its unique abilities cause divine spell failure and suppress healing, making it a nightmare for any party reliant on a cleric."
            ],
            sheet: {
                baseAtk: 26,
                grapple: 33,
                fullAttack: [
                    { name: "+4 Unholy Greatsword", bonus: "+39/+34/+29/+24", damage: "2d6+15 plus 2d6 vs good", crit: "17-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Aura of Profane Unction:</b> Constant 60 ft. aura forces divine casters to make a CL check (DC 30) or their spell fails.",
                    "<b>Aura of Anti-Healing:</b> All healing within 60 ft. is halved.",
                    "<b>Full Attack:</b> 4 greatsword swings (+39/+34/+29/+24, avg. 22 dmg).",
                    "<b>Primary Tactic:</b> Closes with the enemy divine caster. Its auras cripple their spellcasting and healing, while it uses its powerful melee attacks to finish them off.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Smite Good", type: "Su", description: "4/day, +7 to attack, +27 to damage." },
                    { name: "Aura of Profane Unction", type: "Su", description: "Within a 60-ft. radius, any divine spellcaster must make a Caster Level check (DC 30) to successfully cast a spell. Failure means the spell is lost." },
                    { name: "Aura of Anti-Healing", type: "Su", description: "All magical and supernatural healing within 60 feet is halved." },
                ],
                specialQualities: [
                    { name: "Divine Rebuke", type: "Su", description: "Can rebuke/command outsiders as a 27th-level cleric." },
                    { name: "DR 15/good", type: "Su", description: "" },
                ],
                saves: {
                    fort: { bonus: 24, breakdown: "+15 class, +8 Con, +1 item" },
                    ref: { bonus: 20, breakdown: "+11 class, +5 Dex, +4 Cha" },
                    will: { bonus: 20, breakdown: "+11 class, +5 Wis, +4 Cha" },
                },
                abilities: { str: 24, dex: 20, con: 26, int: 16, wis: 20, cha: 24 },
                skills: [
                    { name: "Intimidate", bonus: 37, breakdown: "30 ranks + 7 Cha" },
                    { name: "Knowledge (religion)", bonus: 33, breakdown: "30 ranks + 3 Int" },
                    { name: "Spellcraft", bonus: 33, breakdown: "30 ranks + 3 Int" },
                    { name: "Ride", bonus: 35, breakdown: "30 ranks + 5 Dex" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack for damage." },
                    { name: "Cleave", description: "Extra attack on felling a foe." },
                    { name: "Improved Critical (Greatsword)", description: "Threat range 17-20." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 to attack." },
                    { name: "Weapon Specialization (Greatsword)", description: "+2 to damage." },
                    { name: "Greater Weapon Focus (Greatsword)", description: "+1 to attack." },
                    { name: "Greater Weapon Specialization (Greatsword)", description: "+2 to damage." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Divine Might", description: "Spend turn attempts to add Cha to damage." },
                    { name: "Extra Turning", description: "+4 turn attempts." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or pair",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "450,000 gp",
                    items: [
                        { name: "+4 Unholy Greatsword", cost: "72,350 gp", description: "" },
                        { name: "+5 Full Plate", cost: "26,650 gp", description: "" },
                        { name: "Belt of Magnificence +4", cost: "100,000 gp", description: "" },
                        { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};
