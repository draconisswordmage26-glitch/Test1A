// data/antagonists/cr_18_22/boundSeraph/stats/index.ts
import { Monster } from '../../../../types';

export const boundSeraphStats: Monster = {
    name: "Imperium Judicator",
    description: "A seraph is a being of pure light and goodness, a high-ranking angel in the celestial choir. To bind one is considered an act of ultimate blasphemy. The Novolograd Empæryen has perfected the art, encasing these celestial champions in Stygian armor that doesn't just corrupt their will, but inverts it. They are now high-ranking commissars who take a perverse, ecstatic joy in twisting their divine gifts to serve the God-Kaiser's profane ends. They heal imperial troops with agonizing, soul-searing light and rain down holy fire that causes rapture-like torment upon their foes. They are walking blasphemies, and they revel in it.",
    roleplayGuide: [],
    builds: [
        {
            level: 30, // ECL
            title: "The Emperor's Voice",
            class: "Outsider 15 / Cleric 15",
            hitDice: "30d8+270 (Max HD) + 30 (Epic Toughness) = 540 hp",
            challengeRating: 20,
            speed: "30 ft., fly 90 ft. (good)",
            armorClass: {
                total: 44,
                breakdown: "(+2 Dex, +12 natural, +16 armor, +4 deflection)",
                touch: 16,
                flatFooted: 42,
            },
            initiative: {
                bonus: 6,
                breakdown: "(+2 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "A powerful divine spellcaster and capable melee combatant, built as a CR 20 monster with 30 HD.",
                "Its spell list is its primary weapon, filled with powerful buffs, debuffs, and area-of-effect damage.",
                "The Stygian armor is a plot device as much as an item, the source of its enslavement."
            ],
            sheet: {
                baseAtk: 26,
                grapple: 36,
                fullAttack: [
                    { name: "+3 Unholy Greatsword", bonus: "+38/+33/+28/+23", damage: "2d8+12 plus 2d6 vs good", crit: "19-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Swift Action:</b> Divine Metamagic (Quicken Spell) to cast a buff ('Divine Favor') or a debuff ('Bestow Curse', DC 32 Will).",
                    "<b>Standard Action:</b> Cast a powerful spell like 'Blasphemy' (DC 36), 'Destruction' (DC 36 Fort), or 'Blade Barrier'.",
                    "<b>Primary Tactic:</b> Breaks the action economy by casting two spells per round. Uses battlefield control to divide the party, then uses save-or-die/suck spells to eliminate threats one by one.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Spells", type: "Sp", description: "Casts spells as a 25th-level Cleric (Domains: Law, Evil, Destruction, War)." },
                    { name: "Smite Good", type: "Su", description: "5/day, +6 attack, +30 damage against good creatures." },
                    { name: "Turn/Rebuke Undead", type: "Su", description: "9/day." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/silver, good, and epic" },
                    { name: "Spell Resistance", type: "Ex", description: "32" },
                    { name: "Aura of Menace", type: "Su", description: "20-ft radius, enemies take -2 to AC, attacks, and saves. (Will DC 29 negates)." },
                    { name: "Regeneration", type: "Ex", description: "10 (bypassed by epic, good-aligned spells and effects)." },
                    { name: "Immunities", type: "Ex", description: "Immune to electricity, petrification, and poison."}
                ],
                saves: {
                    fort: { bonus: 27, breakdown: "+9 HD, +8 Con, +10 class" },
                    ref: { bonus: 16, breakdown: "+9 HD, +2 Dex, +5 class" },
                    will: { bonus: 28, breakdown: "+9 HD, +10 Wis, +9 class" },
                },
                abilities: { str: 24, dex: 14, con: 26, int: 21, wis: 30, cha: 22 },
                skills: [
                    { name: "Concentration", bonus: 41, breakdown: "33 ranks + 8 Con" },
                    { name: "Diplomacy", bonus: 39, breakdown: "33 ranks + 6 Cha" },
                    { name: "Knowledge (religion)", bonus: 38, breakdown: "33 ranks + 5 Int" },
                    { name: "Spellcraft", bonus: 38, breakdown: "33 ranks + 5 Int" },
                    { name: "Sense Motive", bonus: 43, breakdown: "33 ranks + 10 Wis" },
                ],
                feats: [
                    { name: "Combat Casting", description: "+4 on Concentration checks for defensive casting." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Power Attack", description: "Trade attack for damage." },
                    { name: "Quicken Spell", description: "Cast spells as a swift action." },
                    { name: "Divine Metamagic (Quicken Spell)", description: "Spend turn attempts to quicken spells." },
                    { name: "Extra Turning", description: "+4 turn attempts (x2)." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 to attack with greatsword (War Domain Bonus Feat)." },
                    { name: "Iron Will", description: "+2 to Will saves." },
                    { name: "Maximize Spell", description: "Maximize spell variables." },
                    { name: "Empower Spell", description: "Spells are 50% more effective." },
                    { name: "Epic Toughness", description: "+30 HP." },
                ],
                flaws: [],
                environment: "The God-Kaiser's Palace",
                organization: "Solitary or pair",
                alignment: "Lawful Evil",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "350,000 gp",
                    items: [
                        { name: "+5 Stygian Full Plate", cost: "Artifact Component", description: "Binds the Judicator to its master's will." },
                        { name: "+3 Unholy Greatsword", cost: "50,350 gp", description: "" },
                        { name: "Periapt of Wisdom +6", cost: "36,000 gp", description: "" },
                        { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                        { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                        { name: "Ring of Protection +4", cost: "32,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};