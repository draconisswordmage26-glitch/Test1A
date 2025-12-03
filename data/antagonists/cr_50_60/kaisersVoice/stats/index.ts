
// data/antagonists/cr_50_60/kaisersVoice/stats/index.ts
import { Monster } from '../../../../types';

export const kaisersVoiceStats: Monster = {
    name: "The Kaiser's Voice",
    description: "When a world's morale must be shattered utterly, the God-Kaiser deploys his masterpiece of psychological warfare: The Kaiser's Voice. This colossal war machine is part mobile fortress, part siege engine, and part profane cathedral. It moves on immense, city-crushing treads, its primary weapon a 'Vox Cannon' that fires blasts of pure sonic despair. Its entire chassis is a massive amplifier, broadcasting Zharov's edicts across the continent, a psychic static that erodes hope and enforces a terrifying, logical obedience. To see it on the horizon is to know that your world is about to end, not with a bang, but with a perfectly modulated, soul-crushing sermon.",
    roleplayGuide: [],
    builds: [
        {
            level: 82, // ECL
            title: "Mobile Cathedral of Pain",
            class: "Construct 82",
            hitDice: "82d10+120 (Construct) + 300 (Epic Toughness) = 1240 hp",
            challengeRating: 55,
            speed: "100 ft.",
            armorClass: {
                total: 80,
                breakdown: "(-8 size, -2 Dex, +60 natural, +20 armor)",
                touch: 0,
                flatFooted: 80,
            },
            initiative: {
                bonus: -2,
                breakdown: "(-2 Dex)",
            },
            buildNotes: [
                "A CR 55 colossal siege engine and psychological weapon.",
                "It is designed for long-range bombardment and massive area-of-effect debuffing.",
                "It is extremely tough but very slow, a true juggernaut."
            ],
            sheet: {
                baseAtk: 61,
                grapple: 95,
                fullAttack: [
                    { name: "2 Siege Hammers", bonus: "+79", damage: "6d8+22", crit: "20/x2", type: "Melee" },
                    { name: "Vox Cannon", bonus: "+51", damage: "30d8 sonic/divine", crit: "N/A", type: "Ranged Touch" },
                ],
                attackRoutine: [
                    "<b>Ranged:</b> Vox Cannon (+51 touch, 5-mile range, avg. 135 sonic/divine damage + Symbol of Despair, DC 50 Will).",
                    "<b>Melee:</b> 2 Siege Hammers (+79, avg. 49 dmg each).",
                    "<b>Aura:</b> Constant 10-mile 'Propaganda Broadcast' (-10 penalty on enemy Will saves, +5 morale bonus for allies).",
                    "<b>Primary Tactic:</b> Sits miles away from the battle, firing its Vox Cannon every round at strategic targets. Deploys its legion of troops to defend it.",
                ],
                spaceReach: "30 ft.",
                specialAttacks: [
                    { name: "Vox Cannon", type: "Su", description: "Range 5 miles. Fires a blast of sonic energy infused with Zharov's will. Deals 30d8 damage (half sonic, half divine). Creatures hit must make a DC 50 Will save or be affected by 'Symbol of Despair'." },
                    { name: "Propaganda Broadcast", type: "Su", description: "Constant 10-mile aura. All enemies in the aura take a -10 penalty on Will saves and concentration checks. Imperial allies gain a +5 morale bonus to attack and damage." },
                    { name: "Legion Deployment", type: "Ex", description: "The Kaiser's Voice can carry and deploy an entire legion of imperial troops (up to 1,000 soldiers)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Ex", description: "35/epic and adamantine" },
                    { name: "Spell Resistance", type: "Ex", description: "60" },
                    { name: "Hardness", type: "Ex", description: "40" },
                    { name: "Construct Traits", type: "Ex", description: "" },
                    { name: "Immunities", type: "Ex", description: "Immune to sonic, mind-affecting effects, and critical hits." },
                ],
                saves: {
                    fort: { bonus: 27, breakdown: "+27 HD (Immune)" },
                    ref: { bonus: 25, breakdown: "+27 HD, -2 Dex" },
                    will: { bonus: 37, breakdown: "+27 HD, +10 Wis" },
                },
                abilities: { str: 55, dex: 6, con: 0, int: 0, wis: 30, cha: 1 },
                skills: [],
                feats: [
                    { name: "Awesome Blow", description: "Send smaller foes flying." },
                    { name: "Improved Sunder", description: "+4 to sunder, no AoO." },
                    { name: "Epic Toughness", description: "+30 HP (x10)." },
                    { name: "Armor Skin", description: "+1 to natural armor (x5)." },
                    { name: "Epic Weapon Focus (Siege Hammer)", description: "+2 to attack." },
                    { name: "Epic Prowess", description: "+1 to all attacks (x3)." },
                ],
                flaws: [],
                environment: "Any battlefield",
                organization: "Unique",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "Artifact level",
                    items: [
                        { name: "+10 Adamantine Armor Plating", cost: "Artifact Component", description: "" },
                    ]
                }
            }
        },
    ]
};
