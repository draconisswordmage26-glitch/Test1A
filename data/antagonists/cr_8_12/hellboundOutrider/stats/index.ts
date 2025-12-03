
// data/antagonists/cr_8_12/hellboundOutrider/stats/index.ts
import { Monster } from '../../../../types';

export const hellboundOutriderStats: Monster = {
    name: "Kaiserjäger",
    description: "These were once the finest rangers and scouts of conquered lands, offered a choice: serve the Empæryen or watch their families and homelands be slowly and meticulously tortured to death before their eyes. Those who 'chose' service were forced into a diabolical pact, their souls flayed and bonded to a Nightmare steed. Now they ride as the vanguard of the imperial legions, their arrows wreathed in hellfire, their faces hidden behind fearsome gas masks that pump them with combat stimulants. They are the Kaiserjäger, the Emperor's Hunters, their loyalty assured not by a pact, but by the certainty that disobedience means an eternity of suffering for everyone they ever loved.",
    roleplayGuide: [],
    builds: [
        {
            level: 18, // ECL
            title: "Rider of the Ashen Plains",
            class: "Human Ranger 18",
            hitDice: "18d8+90 (Max HD) = 234 hp",
            challengeRating: 12,
            speed: "30 ft.",
            armorClass: {
                total: 28,
                breakdown: "(+6 Dex, +8 armor, +4 shield)",
                touch: 16,
                flatFooted: 22,
            },
            initiative: {
                bonus: 10,
                breakdown: "(+6 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "A deadly CR 12 'glass cannon', built as a monster with 18 class levels.",
                "Its power comes from the combination of Ranger archery feats and its Nightmare mount.",
                "The synergy between its fiery attacks and the Nightmare's smoke makes it a potent hit-and-run attacker."
            ],
            sheet: {
                baseAtk: 18,
                grapple: 20,
                fullAttack: [
                    { name: "+2 Flaming Burst Composite Longbow", bonus: "+27/+22/+17/+12", damage: "1d8+6 plus 1d6 fire", crit: "x3", type: "Ranged" },
                ],
                attackRoutine: [
                    "<b>Full Attack (Rapid Shot):</b> 5 arrows (+25/+25/+20/+15/+10, avg. 14 fire/piercing dmg each).",
                    "<b>Full Attack (Manyshot):</b> 2 arrows at highest BAB (+25, avg. 14 fire/piercing dmg each).",
                    "<b>Typical Round DPR:</b> ~70 damage.",
                    "<b>Primary Tactic:</b> Uses Nightmare's 90 ft. fly speed and smoke ability (20 ft. radius concealment) to 'kite' enemies, firing volleys of arrows from the safety of the smoke before repositioning.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Favored Enemy", type: "Ex", description: "+8 against Elves, +6 against Magical Beasts, +4 against Outsiders (Good), +2 against Fey." },
                    { name: "Spells", type: "Sp", description: "Casts spells as a 9th-level Ranger." },
                    { name: "Mount: Nightmare", type: "Ex", description: "Rides a standard Nightmare, which can create smoke and has a fiery hoof attack." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "10/good or silver" },
                    { name: "Hellbound Soul", type: "Su", description: "If the Kaiserjäger is slain, their soul is instantly transported to the Nine Hells. They can only be resurrected if their soul is rescued first." },
                    { name: "Improved Evasion", type: "Ex", description: "" },
                    { name: "Woodland Stride", type: "Ex", description: "" },
                    { name: "Swift Tracker", type: "Ex", description: "" },
                    { name: "Improved Uncanny Dodge", type: "Ex", description: "Cannot be flanked." },
                    { name: "Immunities", type: "Ex", description: "Immunity to fire and fear."}
                ],
                saves: {
                    fort: { bonus: 17, breakdown: "+11 class, +5 Con, +1 item" },
                    ref: { bonus: 18, breakdown: "+11 class, +6 Dex, +1 item" },
                    will: { bonus: 11, breakdown: "+6 class, +4 Wis, +1 item" },
                },
                abilities: { str: 14, dex: 22, con: 20, int: 12, wis: 18, cha: 10 },
                skills: [
                    { name: "Hide", bonus: 27, breakdown: "21 ranks" },
                    { name: "Move Silently", bonus: 27, breakdown: "21 ranks" },
                    { name: "Ride", bonus: 27, breakdown: "21 ranks" },
                    { name: "Spot", bonus: 25, breakdown: "21 ranks" },
                    { name: "Survival", bonus: 25, breakdown: "21 ranks" },
                ],
                feats: [
                    { name: "Mounted Combat", description: "Negate a hit on your mount with a Ride check." },
                    { name: "Mounted Archery", description: "Halve penalties for shooting from a mount." },
                    { name: "Point Blank Shot", description: "+1 to attack and damage within 30 ft." },
                    { name: "Rapid Shot", description: "Extra attack with a -2 penalty (Ranger Bonus Feat)." },
                    { name: "Manyshot", description: "Fire two arrows as a single standard action (Ranger Bonus Feat)." },
                    { name: "Improved Precise Shot", description: "Ignore all but total cover/concealment (Ranger Bonus Feat)." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Weapon Focus (Composite Longbow)", description: "+1 to attack with longbow." },
                    { name: "Greater Weapon Focus (Composite Longbow)", description: "+1 to attack with longbow." },
                    { name: "Endurance", description: "+4 to checks for nonlethal damage (Ranger Bonus Feat)." },
                    { name: "Weapon Specialization (Composite Longbow)", description: "+2 to damage with longbow." },
                    { name: "Toughness", description: "+3 hit points." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Platoon (3-6) or company (10-20)",
                alignment: "Lawful Evil",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "120,000 gp",
                    items: [
                        { name: "+2 Flaming Burst Composite Longbow (+2 Str)", cost: "32,700 gp", description: "" },
                        { name: "+4 Mithral Shirt", cost: "17,100 gp", description: "" },
                        { name: "+2 Animated Heavy Steel Shield", cost: "4,170 gp", description: "" },
                        { name: "Gloves of Dexterity +6", cost: "36,000 gp", description: "" },
                        { name: "Periapt of Wisdom +4", cost: "16,000 gp", description: "" },
                        { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};
