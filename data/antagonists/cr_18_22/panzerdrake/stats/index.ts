
// data/antagonists/cr_18_22/panzerdrake/stats/index.ts
import { Monster } from '../../../../types';

export const panzerdrakeStats: Monster = {
    name: "Panzerdrake",
    description: "The Panzerdrake is not a true dragon, but a horrifying testament to the Empæryen's cruelty and arcane engineering. A lesser dragon, captured and broken, has had its body grotesquely fused with rune-etched adamantine plates. Its natural breath has been replaced with an alchemical furnace that spews gouts of hellfire. Chained and goaded into battle by imperial priests, the Panzerdrake is a living siege engine, a creature of pure agony and destructive power whose only release is the annihilation of everything in its path.",
    roleplayGuide: [],
    builds: [
        {
            level: 30, // ECL
            title: "The Living Battering Ram",
            class: "Magical Beast 30",
            hitDice: "30d10+270 (Max HD) = 570 hp",
            challengeRating: 22,
            speed: "30 ft., fly 60 ft. (clumsy)",
            armorClass: {
                total: 45,
                breakdown: "(-2 size, +30 natural, +7 armor)",
                touch: 8,
                flatFooted: 45,
            },
            initiative: {
                bonus: 0,
                breakdown: "(+0 Dex)",
            },
            buildNotes: [
                "A CR 22 siege monster, designed to be a slow but incredibly tough damage dealer.",
                "Its main weapon is its 'Hellfire Cannon' breath weapon.",
                "Its high DR and Hardness make it a very difficult creature to damage with conventional attacks."
            ],
            sheet: {
                baseAtk: 30,
                grapple: 52,
                fullAttack: [
                    { name: "Bite", bonus: "+42", damage: "4d6+14", crit: "19-20/x2", type: "Melee" },
                    { name: "2 Claws", bonus: "+40", damage: "2d8+7", crit: "20/x2", type: "Melee" },
                    { name: "Tail Slap", bonus: "+40", damage: "2d8+21", crit: "20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Breath Weapon:</b> 150 ft. line of hellfire (25d6 fire/unholy, DC 35 Reflex half). Usable every 1d4 rounds.",
                    "<b>Full Attack:</b> 4 attacks (Bite, 2 Claws, Tail).",
                    "<b>Primary Tactic:</b> Unleashes its breath weapon at the start of combat, targeting as many foes as possible. Then it will lumber into melee, using its powerful physical attacks and Awesome Blow to break up enemy formations.",
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Hellfire Cannon", type: "Su", description: "150-ft. line, 25d6 damage (half fire, half unholy), DC 35 Reflex for half. Usable every 1d4 rounds." },
                    { name: "Siege Monster", type: "Ex", description: "Deals double damage to objects and structures." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Ex", description: "20/adamantine and epic" },
                    { name: "Hardness", type: "Ex", description: "15 (from adamantine plates)." },
                    { name: "Spell Resistance", type: "Ex", description: "33" },
                    { name: "Immunities", type: "Ex", description: "Immune to fire." },
                ],
                saves: {
                    fort: { bonus: 26, breakdown: "+17 class, +9 Con" },
                    ref: { bonus: 17, breakdown: "+17 class" },
                    will: { bonus: 15, breakdown: "+17 class, +8 Wis" },
                },
                abilities: { str: 38, dex: 10, con: 28, int: 5, wis: 26, cha: 12 },
                skills: [
                    { name: "Listen", bonus: 39, breakdown: "31 ranks + 8 Wis" },
                    { name: "Spot", bonus: 39, breakdown: "31 ranks + 8 Wis" },
                ],
                feats: [
                    { name: "Power Attack", description: "" },
                    { name: "Cleave", description: "" },
                    { name: "Great Cleave", description: "" },
                    { name: "Awesome Blow", description: "" },
                    { name: "Improved Bull Rush", description: "" },
                    { name: "Improved Critical (Bite)", description: "" },
                    { name: "Toughness", description: "" },
                    { name: "Improved Natural Attack (Bite)", description: "" },
                    { name: "Improved Natural Armor", description: "" },
                    { name: "Ability Focus (Breath Weapon)", description: "" },
                ],
                flaws: [],
                environment: "Any battlefield",
                organization: "Solitary",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "N/A",
                    items: []
                }
            }
        },
    ]
};
