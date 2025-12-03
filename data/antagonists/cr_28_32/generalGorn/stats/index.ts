// data/antagonists/cr_28_32/generalGorn/stats/index.ts
import { Monster } from '../../../../types';

export const generalGornStats: Monster = {
    name: "General Gorn, 'The Unmovable'",
    description: "General Gorn is a legend in the imperial legions, a dwarf of impossible toughness and stubbornness. He has mastered the Stone Dragon discipline to such a degree that he has become a literal mountain of a man. He does not lead from the back; he is the front line. His personal banner is a simple, unadorned slab of granite. He is the anchor of the Empæryen's armies, the unmovable object against which all unstoppable forces are broken.",
    roleplayGuide: [],
    builds: [
        {
            level: 45, // ECL
            title: "The Mountain King",
            class: "Dwarf Fighter 10 / Warblade 20 / Stone Dragon Adept 10 / Epic Fighter 5",
            hitDice: "45d12+720 (Max HD) + 60 (Epic Toughness) = 1320 hp",
            challengeRating: 30,
            speed: "20 ft.",
            armorClass: {
                total: 75,
                breakdown: "(+15 armor, +8 shield, +10 Dex, +15 natural, +12 deflection, +5 insight)",
                touch: 42,
                flatFooted: 65,
            },
            initiative: {
                bonus: 10,
                breakdown: "(+10 Dex)",
            },
            buildNotes: [
                "A CR 30 defensive juggernaut, the perfect foil for charger builds.",
                "His abilities focus on being completely immune to forced movement and punishing any who dare to charge him.",
                "He is designed to be the ultimate 'tank', absorbing incredible punishment while controlling the battlefield."
            ],
            sheet: {
                baseAtk: 40,
                grapple: 55,
                fullAttack: [
                    { name: "+8 Adamantine Dwarven Waraxe", bonus: "+65/+60/+55/+50", damage: "1d10+25", crit: "x3", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Stance:</b> 'Stance of the Unmoving Mountain' (Regen 20, immune to teleport/planar travel).",
                    "<b>Counters:</b> Has a massive list of counters. 'Counter Charge' stops a charge dead. 'Iron Heart Surge' ends any effect. 'Wall of Blades' blocks any melee attack.",
                    "<b>Primary Tactic:</b> Gorn stands his ground and invites the charge. He uses 'Counter Charge' to negate it, then on his turn, unleashes a devastating full attack or a maneuver like 'Mountain Tombstone Strike' (DC 40 Fort) to entomb his foe in stone.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Initiator Level 45. Knows all Stone Dragon maneuvers and many from Iron Heart and Devoted Spirit." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "30/adamantine and epic" },
                    { name: "Unmovable", type: "Ex", description: "Immune to bull rush, trip, overrun, and any effect that would forcibly move him. This includes telekinesis." },
                    { name: "Regeneration", type: "Ex", description: "20 (bypassed by adamantine). Granted by stance." },
                    { name: "Hardness", type: "Ex", description: "15" },
                ],
                saves: {
                    fort: { bonus: 45, breakdown: "+24 class, +16 Con, +5 item" },
                    ref: { bonus: 35, breakdown: "+15 class, +10 Dex, +10 item" },
                    will: { bonus: 32, breakdown: "+17 class, +5 Wis, +10 item" },
                },
                abilities: { str: 40, dex: 30, con: 42, int: 20, wis: 20, cha: 18 },
                skills: [
                    { name: "Intimidate", bonus: 52, breakdown: "48 ranks + 4 Cha" },
                    { name: "Concentration", bonus: 64, breakdown: "48 ranks + 16 Con" },
                    { name: "Balance", bonus: 58, breakdown: "48 ranks + 10 Dex" },
                    { name: "Jump", bonus: 63, breakdown: "48 ranks + 15 Str" },
                ],
                feats: [
                    { name: "Hold the Line", description: "Get an AoO against charging foes." },
                    { name: "Combat Reflexes", description: "Extra attacks of opportunity." },
                    { name: "Power Attack", description: "Trade attack for damage." },
                    { name: "Epic Prowess", description: "+1 to all attacks (x3)." },
                    { name: "Epic Weapon Focus (Dwarven Waraxe)", description: "+2 to attack." },
                    { name: "Epic Weapon Specialization (Dwarven Waraxe)", description: "+4 to damage." },
                    { name: "Great Strength", description: "+1 to Strength (x5)." },
                    { name: "Great Constitution", description: "+1 to Constitution (x5)." },
                    { name: "Great Dexterity", description: "+1 to Dexterity (x5)." },
                    { name: "Armor Skin", description: "+1 to natural armor (x5)." },
                    { name: "Epic Toughness", description: "+30 HP (x2)." },
                    { name: "Epic Fortitude", description: "+4 to Fortitude saves." },
                    { name: "Epic Reflexes", description: "+4 to Reflex saves." },
                ],
                flaws: [],
                environment: "The front line of any battle",
                organization: "Unique",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "1,500,000 gp",
                    items: [
                        { name: "+8 Adamantine Dwarven Waraxe", cost: "128,310 gp", description: "" },
                        { name: "+8 Adamantine Full Plate", cost: "65,500 gp", description: "" },
                        { name: "+8 Heavy Steel Shield", cost: "64,170 gp", description: "" },
                        { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                        { name: "Ring of Protection +8", cost: "128,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};