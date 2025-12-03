
// data/antagonists/cr_28_32/dieGlocke/stats/index.ts
import { Monster } from '../../../../types';

export const dieGlockeStats: Monster = {
    name: "Die Glocke ('The Bell')",
    description: "A bizarre and terrifying super-weapon from a secret imperial research bunker. This colossal, bell-shaped construct of unknown black metal hums with temporal energy, its surface rippling with impossible chronal patterns. It does not move, but its very presence distorts time, slowing its enemies to a crawl while its main weapon fires blasts of force that can age a creature to dust in an instant. It is the Empæryen's ultimate area-denial weapon, a silent, terrifying monument to their mastery of forbidden science.",
    roleplayGuide: [],
    builds: [
        {
            level: 50, // ECL
            title: "The Chronal Anomaly",
            class: "Construct 50",
            hitDice: "50d10+80 (Max HD) = 630 hp",
            challengeRating: 32,
            speed: "0 ft.",
            armorClass: {
                total: 60,
                breakdown: "(-4 size, -2 Dex, +40 natural, +16 armor)",
                touch: 4,
                flatFooted: 60,
            },
            initiative: {
                bonus: -2,
                breakdown: "(-2 Dex)",
            },
            buildNotes: [
                "A CR 32 stationary artillery platform and area-denial boss.",
                "Its main threat is its 'Temporal Distortion Field' and its powerful 'Chronal Cannon'.",
                "The challenge is not just destroying it, but surviving the temporal chaos it creates."
            ],
            sheet: {
                baseAtk: 37,
                grapple: 65,
                fullAttack: [
                    { name: "Chronal Cannon", bonus: "+30", damage: "20d6 force plus 1d4x10 years age", crit: "N/A", type: "Ranged Touch" },
                ],
                attackRoutine: [
                    "<b>Aura:</b> Constant 200 ft. 'Temporal Distortion Field' (DC 40 Will or slowed).",
                    "<b>Chronal Cannon:</b> Fires every round at the nearest target. Ranged Touch Attack +30.",
                    "<b>Primary Tactic:</b> Die Glocke is stationary. It will fire its cannon every round while its aura slows and weakens any who approach. It relies on its immense defenses and its guards to protect it.",
                ],
                spaceReach: "20 ft.",
                specialAttacks: [
                    { name: "Chronal Cannon", type: "Su", description: "Ranged touch attack, 1000 ft. range. Deals 20d6 force damage. A creature hit must also make a DC 40 Fortitude save or be aged 1d4x10 years." },
                ],
                specialQualities: [
                    { name: "Temporal Distortion Field", type: "Su", description: "In a 200-ft. radius, all creatures must make a DC 40 Will save each round or be affected by a 'Slow' spell. Time-related magic (like 'Haste' or 'Time Stop') does not function in this area." },
                    { name: "Damage Reduction", type: "Ex", description: "30/epic and adamantine" },
                    { name: "Hardness", type: "Ex", description: "40" },
                    { name: "Spell Resistance", type: "Ex", description: "45" },
                    { name: "Construct Traits", type: "Ex", description: "" },
                    { name: "Immunities", type: "Ex", description: "Immune to any effect that would alter time." },
                ],
                saves: {
                    fort: { bonus: 16, breakdown: "+16 HD (Immune)" },
                    ref: { bonus: 14, breakdown: "+16 HD, -2 Dex" },
                    will: { bonus: 16, breakdown: "+16 HD" },
                },
                abilities: { str: 40, dex: 6, con: 0, int: 0, wis: 11, cha: 1 },
                skills: [],
                feats: [
                    { name: "Epic Toughness", description: "+30 HP (x5)." },
                    { name: "Armor Skin", description: "+1 to natural armor (x5)." },
                ],
                flaws: [],
                environment: "Secret imperial bunkers",
                organization: "Unique",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "Artifact level",
                    items: []
                }
            }
        },
    ]
};
