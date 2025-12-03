// data/antagonists/cr_33_37/hexLegionnaire/stats/index.ts
import { Monster } from '../../../../types';

export const hexLegionnaireStats: Monster = {
    name: "Hex-Legionnaire",
    description: "The ultimate soldiers of the Empæryen are not born, but grotesquely crafted. A Hex-Legionnaire is a veteran warrior who has undergone a horrific series of surgeries and profane rituals, having their limbs amputated and replaced with living, bound fiends. Their arms might be replaced with bearded devils, their tentacles used as whips, while their legs are replaced with the powerful bodies of hellcats for speed and stealth. The soldier's mind is shattered in the process, becoming a battleground between their original personality and the whispers of the half-dozen demons grafted to their torso. The result is an insane, unpredictable, and utterly terrifying whirlwind of steel and abyssal fury.",
    roleplayGuide: [],
    builds: [
        {
            level: 52, // ECL
            title: "The Flesh-Vessel",
            class: "Human Fighter 20 / Warlock 20 / Eldritch Knight 10 / Epic Fighter 2",
            hitDice: "52d10+1040 (Max HD) + 60 (Epic Toughness) = 1620 hp",
            challengeRating: 35,
            armorClass: {
                total: 68,
                breakdown: "(+5 Dex, +15 armor, +15 natural, +13 deflection, +10 shield)",
            },
            initiative: {
                bonus: 9,
                breakdown: "(+5 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 35 martial powerhouse with significant magical support.",
                "Its main feature is the 'Six-Armed Abomination' ability, granting it a staggering number of attacks.",
                "It is a 'gish' build, blending the full attack of a Fighter with the magical blasts of a Warlock."
            ],
            sheet: {
                baseAtk: 45,
                grapple: 65,
                fullAttack: [
                    { name: "2 +5 Greatswords", bonus: "+70/+65/+60/+55", damage: "2d6+25", crit: "17-20/x2", type: "Melee" },
                    { name: "4 +5 Tentacle Whips", bonus: "+68", damage: "1d8+12 and wound", crit: "20/x2", type: "Melee" },
                    { name: "2 Hellcat Claw Rakes", bonus: "+68", damage: "2d6+12", crit: "20/x2", type: "Melee" },
                    { name: "Eldritch Blast", bonus: "+50", damage: "15d6", crit: "N/A", type: "Ranged Touch"},
                ],
                attackRoutine: [
                    "<b>Full Attack:</b> 8 melee attacks (2 Greatsword, 4 Tentacle, 2 Rakes).",
                    "<b>Power Attack:</b> Can take up to -45 penalty for +90 damage on greatsword and +45 on others.",
                    "<b>Typical Round DPR:</b> ~360 without Power Attack.",
                    "<b>Primary Tactic:</b> A pure damage dealer. It closes to melee as fast as possible and uses its full attack action to annihilate a single target. It will use its Eldritch Blast on flying or out-of-reach foes.",
                ],
                spaceReach: "10 ft. (20 ft. with whips)",
                specialAttacks: [
                    { name: "Six-Armed Abomination", type: "Ex", description: "The Legionnaire's fiendish grafts allow it to wield four one-handed weapons or two two-handed weapons with no penalty, in addition to its natural attacks. It possesses the Multiweapon Fighting and Multiattack feats." },
                    { name: "Eldritch Blast", type: "Sp", description: "As a 25th-level Warlock, can fire a 15d6 blast." },
                    { name: "Fiendish Whispers", type: "Su", description: "The bound fiends constantly whisper threats and secrets, forcing all enemies within 30 feet to make a DC 45 Will save or be shaken." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "25/epic and good" },
                    { name: "Spell Resistance", type: "Ex", description: "42" },
                    { name: "Fiendish Resilience", type: "Ex", description: "Gains the resistances (fire, acid, cold 20) and immunities (poison, critical hits) of its bound fiends." },
                ],
                saves: {
                    fort: { bonus: 45, breakdown: "+28 class, +17 Con" },
                    ref: { bonus: 32, breakdown: "+17 class, +5 Dex, +10 item" },
                    will: { bonus: 34, breakdown: "+20 class, +4 Wis, +10 item" },
                },
                abilities: { str: 40, dex: 20, con: 44, int: 18, wis: 18, cha: 30 },
                skills: [
                    { name: "Intimidate", bonus: 65, breakdown: "55 ranks + 10 Cha" },
                    { name: "Jump", bonus: 70, breakdown: "55 ranks + 15 Str" },
                    { name: "Use Magic Device", bonus: 65, breakdown: "55 ranks + 10 Cha" },
                ],
                feats: [
                    { name: "Multiweapon Fighting", description: "Reduce penalties for multiple weapons." },
                    { name: "Multiattack", description: "Reduce penalties for natural weapons." },
                    { name: "Power Attack", description: "Trade attack for damage." },
                    { name: "Cleave", description: "Extra attack on felling a foe." },
                    { name: "Epic Prowess", description: "+1 to all attacks (x3)." },
                    { name: "Epic Toughness", description: "+30 HP (x2)." },
                    { name: "Epic Weapon Focus (Greatsword)", description: "+2 to attack." },
                    { name: "Epic Weapon Specialization (Greatsword)", description: "+4 to damage." },
                    { name: "Improved Critical (Greatsword)", description: "Threat range 17-20." },
                    { name: "Great Strength", description: "+1 to Strength (x5)." },
                    { name: "Great Constitution", description: "+1 to Constitution (x5)." },
                    { name: "Armor Skin", description: "+1 to natural armor (x3)." },
                    { name: "Eldritch Master", description: "Fire Eldritch Blast as a standard action without provoking." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or Hex-Squad (6)",
                alignment: "Chaotic Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "1,800,000 gp",
                    items: [
                        { name: "2x +5 Vorpal Greatswords", cost: "200,700 gp", description: "" },
                        { name: "+8 Full Plate of Heavy Fortification", cost: "89,650 gp", description: "" },
                        { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                        { name: "Ring of Protection +8", cost: "128,000 gp", description: "" },
                        { name: "Tome of Strength +5", cost: "137,500 gp", description: "" },
                        { name: "Tome of Constitution +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
    ]
};