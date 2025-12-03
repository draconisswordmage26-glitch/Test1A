// data/antagonists/cr_13_17/obduriumWarGolem/stats/index.ts
import { Monster } from '../../../../types';

export const obduriumWarGolemStats: Monster = {
    name: "Imperium War-Golem",
    description: "Forged in the deepest geo-furnaces of the Empæryen, the Imperium War-Golem is the ultimate siege engine. Its chassis is made from Obdurium, a magically inert metal of impossible density, smelted with the powdered bones of priests and paladins. It is slow, implacable, and designed for a single purpose: to utterly annihilate any fortification or battle line that stands in the way of imperial expansion, its every step an insult to the sacred ground it desecrates.",
    roleplayGuide: [],
    builds: [
        {
            level: 24, // ECL
            title: "Siege Engine Prime",
            class: "Construct 24",
            hitDice: "24d10+40+60 (Max HD + Epic Toughness x3) = 340 hp",
            challengeRating: 16,
            speed: "20 ft.",
            armorClass: {
                total: 40,
                breakdown: "(-2 size, -2 Dex, +34 natural)",
                touch: 6,
                flatFooted: 40,
            },
            initiative: {
                bonus: -2,
                breakdown: "(-2 Dex)",
            },
            buildNotes: [
                "A CR 16 line-breaker and siege monster, built with 24 HD to be exceptionally tough for its CR.",
                "Its primary defense is its immense Damage Reduction and immunity to magic, making it a puzzle for parties to solve.",
                "Its 'Sunder Keystone' ability makes it a terrifying threat to any structure, including magical ones like a Wall of Force."
            ],
            sheet: {
                baseAtk: 18,
                grapple: 38,
                fullAttack: [
                    { name: "2 Slams", bonus: "+28", damage: "2d10+14", crit: "20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Full Attack:</b> 2 Slams (+28, avg. 25 dmg each).",
                    "<b>Power Attack:</b> Can take up to a -18 penalty on attacks to gain +18 damage on each slam.",
                    "<b>Typical Round DPR:</b> ~50 damage, or ~86 with full Power Attack.",
                    "<b>Primary Tactic:</b> Mindlessly advances on its designated target. Uses 'Sunder Keystone' on any structure (including magical walls) in its path. Uses 'Awesome Blow' to knock aside defenders.",
                ],
                spaceReach: "15 ft.",
                specialAttacks: [
                    { name: "Siege Fists", type: "Ex", description: "The golem's slam attacks deal double damage to objects and structures. They bypass all hardness below 20." },
                    { name: "Sunder Keystone", type: "Su", description: "3/day, as a full-round action, the golem can make a single slam attack against a structure, fortification, or wall-like magical effect (e.g., Wall of Force). If the attack hits, it deals 150 points of damage and the structure is treated as having a hardness of 0." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Ex", description: "25/adamantine and epic" },
                    { name: "Magic Immunity", type: "Ex", description: "Immune to any spell or spell-like ability that allows for spell resistance." },
                    { name: "Construct Traits", type: "Ex", description: "Immunity to mind-affecting effects, poison, sleep, paralysis, stunning, disease, death effects, necromancy effects, and any effect that requires a Fortitude save." },
                    { name: "Obdurium Body", type: "Ex", description: "The golem has Hardness 25. Any critical hit or sneak attack against it is treated as a normal hit." },
                ],
                saves: {
                    fort: { bonus: 8, breakdown: "+8 HD (Immune)" },
                    ref: { bonus: 6, breakdown: "+8 HD, -2 Dex" },
                    will: { bonus: 8, breakdown: "+8 HD" },
                },
                abilities: { str: 39, dex: 7, con: 0, int: 0, wis: 11, cha: 1 },
                skills: [],
                feats: [
                    { name: "Power Attack", description: "Trade attack for damage." },
                    { name: "Cleave", description: "Extra attack on felling a foe." },
                    { name: "Great Cleave", description: "More Cleave attacks." },
                    { name: "Improved Sunder", description: "+4 to sunder, no AoO." },
                    { name: "Awesome Blow", description: "Send smaller foes flying." },
                    { name: "Improved Bull Rush", description: "+4 to bull rush, no AoO." },
                    { name: "Toughness", description: "+3 HP." },
                    { name: "Epic Toughness", description: "+30 HP (x3)." },
                ],
                flaws: [],
                environment: "Any battlefield",
                organization: "Solitary or vanguard (1 plus a legion of troops)",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "N/A (Construct)",
                    items: []
                }
            }
        },
    ]
};