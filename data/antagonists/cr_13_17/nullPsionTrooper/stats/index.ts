
// data/antagonists/cr_13_17/nullPsionTrooper/stats/index.ts
import { Monster } from '../../../../types';

export const nullPsionTrooperStats: Monster = {
    name: "Null-Psion Trooper",
    description: "Psionic power is a threat the Empæryen takes very seriously. To counter it, their bio-magi created the Null-Psion Troopers. These creatures are vat-grown clones, engineered without a consciousness and encased in armor lined with lead and psionically-inert crystals. They are mindless automatons whose very presence disrupts and dampens psychic energy, making them the perfect hunters of psionicists and other mentalists.",
    roleplayGuide: [],
    builds: [
        {
            level: 21, // ECL
            title: "The Psychic Void",
            class: "Construct 21",
            hitDice: "21d10+30 (Max HD) = 240 hp",
            challengeRating: 14,
            speed: "20 ft.",
            armorClass: {
                total: 38,
                breakdown: "(+8 armor, +10 natural, +10 shield)",
                touch: 10,
                flatFooted: 36,
            },
            initiative: {
                bonus: 6,
                breakdown: "(+2 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 14 anti-psionic specialist.",
                "Its high Power Resistance and 'Cognition-Dampening Field' make it a nightmare for psionic characters like the Aelder or Dream Larva.",
                "It is a construct with no mind, making it immune to telepathy and mind-affecting powers."
            ],
            sheet: {
                baseAtk: 15,
                grapple: 22,
                fullAttack: [
                    { name: "+3 Psychic Static Longsword", bonus: "+21/+16/+11", damage: "1d8+8", crit: "19-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Aura:</b> Constant 'Cognition-Dampening Field' (30 ft. radius, Concentration DC 25 + power level to manifest).",
                    "<b>Full Attack:</b> 3 longsword swings (+21/+16/+11, avg. 12 dmg).",
                    "<b>Primary Tactic:</b> Mindlessly advances on the nearest psionic manifester. Its aura disrupts their powers while it closes to melee. It has no complex tactics.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [],
                specialQualities: [
                    { name: "Power Resistance", type: "Ex", description: "35" },
                    { name: "Cognition-Dampening Field", type: "Su", description: "In a 30-ft. radius, any creature attempting to manifest a psionic power must make a Concentration check (DC 25 + power level) or the power fails." },
                    { name: "Construct Traits", type: "Ex", description: "Immunity to mind-affecting effects, etc." },
                    { name: "Mindless", type: "Ex", description: "Completely immune to all mind-affecting powers and spells." },
                ],
                saves: {
                    fort: { bonus: 7, breakdown: "+7 HD (Immune)" },
                    ref: { bonus: 9, breakdown: "+7 HD, +2 Dex" },
                    will: { bonus: 7, breakdown: "+7 HD" },
                },
                abilities: { str: 20, dex: 15, con: 0, int: 0, wis: 11, cha: 1 },
                skills: [],
                feats: [
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Weapon Focus (Longsword)", description: "+1 to attack." },
                    { name: "Power Attack", description: "Trade attack for damage." },
                    { name: "Toughness", description: "+3 HP (x3)." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Squad (2-5)",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "100,000 gp",
                    items: [
                        { name: "+3 Full Plate", cost: "10,650 gp", description: "" },
                        { name: "+3 Heavy Shield", cost: "9,170 gp", description: "" },
                        { name: "+3 Longsword", cost: "18,315 gp", description: "" },
                    ]
                }
            }
        },
    ]
};
