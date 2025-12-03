// data/antagonists/cr_13_17/hellfireShockTrooper/stats/index.ts
import { Monster } from '../../../../types';

export const hellfireShockTrooperStats: Monster = {
    name: "Hellfire Shock Trooper",
    description: "The elite heavy infantry of the Empæryen are granted a terrible gift: a direct tap into the fires of Hell. Through a profane ritual, their souls are partially replaced with a bound spirit of hellfire, allowing them to channel this energy through their weapons and bodies. They are encased in heavy plate, their faces hidden behind grim masks, serving as implacable and terrifying line-breakers on the battlefield.",
    roleplayGuide: [],
    builds: [
        {
            level: 20, // ECL
            title: "Bearer of the Flame",
            class: "Human Fighter 10 / Warlock 5 / Hellfire Warlock 5",
            hitDice: "20d10+140 (Max HD) = 350 hp",
            challengeRating: 14,
            armorClass: {
                total: 32,
                breakdown: "(+12 armor, +5 shield, +5 natural)",
            },
            initiative: {
                bonus: 6,
                breakdown: "(+2 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 14 elite soldier combining martial prowess with the devastating power of Hellfire.",
                "It can switch between a powerful melee attacker and a ranged blaster, making it a versatile threat."
            ],
            sheet: {
                baseAtk: 18,
                grapple: 25,
                fullAttack: [
                    { name: "+3 Hellfire Greatsword", bonus: "+29/+24/+19", damage: "2d6+12 plus 5d6 hellfire", crit: "19-20/x2", type: "Melee" },
                    { name: "Hellfire Blast", bonus: "+20", damage: "8d6 fire plus 10d6 hellfire", crit: "N/A", type: "Ranged Touch" },
                ],
                attackRoutine: [
                    "<b>Melee:</b> 3 greatsword swings (+29/+24/+19, avg. 19 phys + 17 hellfire dmg).",
                    "<b>Ranged:</b> Hellfire Blast (+20 touch, avg. 63 fire/hellfire dmg).",
                    "<b>Primary Tactic:</b> Uses Hellfire Blast to soften up targets from range, then closes to melee to finish them. Will take Constitution burn to empower its attacks, relying on its high HP and imperial healers.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Hellfire Blast", type: "Su", description: "By taking 1 point of Constitution burn, can add 10d6 hellfire damage to its Eldritch Blast." },
                    { name: "Hellfire Infusion", type: "Su", description: "By taking 1 point of Constitution burn, can infuse its weapon with 5d6 hellfire damage for 1 minute." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/good or silver" },
                    { name: "Fire Resistance", type: "Ex", description: "20" },
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+12 class, +7 Con, +1 item" },
                    ref: { bonus: 13, breakdown: "+7 class, +2 Dex, +4 item" },
                    will: { bonus: 11, breakdown: "+9 class, +2 Wis" },
                },
                abilities: { str: 24, dex: 14, con: 24, int: 10, wis: 14, cha: 16 },
                skills: [
                    { name: "Intimidate", bonus: 26, breakdown: "23 ranks + 3 Cha" },
                    { name: "Jump", bonus: 25, breakdown: "18 ranks + 7 Str" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack for damage." },
                    { name: "Cleave", description: "Extra attack on felling a foe." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 to attack." },
                    { name: "Weapon Specialization (Greatsword)", description: "+2 to damage." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Toughness", description: "+3 HP (x3)." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Squad (3-6)",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "180,000 gp",
                    items: [
                        { name: "+3 Greatsword", cost: "18,350 gp", description: "" },
                        { name: "+4 Full Plate", cost: "17,650 gp", description: "" },
                        { name: "+4 Heavy Shield", cost: "16,170 gp", description: "" },
                        { name: "Belt of Giant Strength +4", cost: "16,000 gp", description: "" },
                        { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                        { name: "Cloak of Resistance +4", cost: "16,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};