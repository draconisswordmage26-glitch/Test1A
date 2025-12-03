
// data/antagonists/cr_13_17/mageBreakerAssassin/stats/index.ts
import { Monster } from '../../../../types';

export const mageBreakerAssassinStats: Monster = {
    name: "Mage-Breaker Assassin",
    description: "The Empæryen recognizes that rogue mages are one of the greatest threats to its absolute order. To counter them, it created the Mage-Breakers. These assassins are infused with the blood of phase spiders and cloaked in null-magic alloys. They are silent, teleporting hunters whose sole purpose is to appear in a flash of displaced air behind an enemy spellcaster and cut them down before they can utter a single word of power.",
    roleplayGuide: [],
    builds: [
        {
            level: 25, // ECL
            title: "The Arcane Antidote",
            class: "Human Ranger 10 / Assassin 10 / Mage Slayer 5",
            hitDice: "25d6+125 (Max HD) = 275 hp",
            challengeRating: 17,
            speed: "30 ft.",
            armorClass: {
                total: 38,
                breakdown: "(+9 Dex, +8 armor, +5 deflection, +6 insight)",
                touch: 30,
                flatFooted: 29,
            },
            initiative: {
                bonus: 13,
                breakdown: "(+9 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 17 'anti-mage' specialist, a perfect foil for characters like the Worm That Walks or the Kitsune.",
                "Its high Spell Resistance, mobility, and ability to disrupt spellcasting make it a dedicated wizard-hunter."
            ],
            sheet: {
                baseAtk: 18,
                grapple: 21,
                fullAttack: [
                    { name: "+4 Spell-Storing Rapier", bonus: "+32/+27/+22/+17", damage: "1d6+7 and 1d6 Int drain", crit: "15-20/x2", type: "Melee" },
                    { name: "+4 Spell-Storing Short Sword", bonus: "+32", damage: "1d6+5 and 1d6 Int drain", crit: "17-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Death Attack:</b> After 3 rounds of study, delivers a sneak attack that forces a DC 28 Fort save or die.",
                    "<b>Full Attack:</b> 5 attacks (+32 rapier, +32 short sword, +27 rapier, +22 rapier, +17 rapier).",
                    "<b>Typical Round DPR:</b> ~70 damage plus ~11d6 sneak attack and 5d6 Intelligence drain.",
                    "<b>Primary Tactic:</b> Uses 'Phase Jaunt' to teleport behind an enemy caster. Full attacks, using its 'Spell-Sunder' ability on a critical hit to dispel the target's most powerful buff. Its high attack bonus and multiple attacks all but guarantee a crit.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Sneak Attack", type: "Ex", description: "+11d6 damage." },
                    { name: "Death Attack", type: "Ex", description: "DC 28 Fortitude save or die." },
                    { name: "Phase Jaunt", type: "Su", description: "3/day, can teleport up to 100 ft. as a swift action." },
                    { name: "Spell-Sunder", type: "Su", description: "On a critical hit, the assassin can cast a targeted 'Greater Dispel Magic' on the opponent as a free action (CL 25)." },
                    { name: "Mage Slayer's Rebuke", type: "Ex", description: "Any creature struck by the assassin must make a Concentration check (DC 15 + damage dealt) to cast a spell in the next round." }
                ],
                specialQualities: [
                    { name: "Spell Resistance", type: "Ex", description: "35" },
                    { name: "Improved Uncanny Dodge", type: "Ex", description: "Cannot be flanked." },
                    { name: "Hide in Plain Sight", type: "Su", description: "" },
                ],
                saves: {
                    fort: { bonus: 18, breakdown: "+11 class, +5 Con, +2 item" },
                    ref: { bonus: 26, breakdown: "+17 class, +9 Dex" },
                    will: { bonus: 15, breakdown: "+9 class, +4 Wis, +2 item" },
                },
                abilities: { str: 16, dex: 28, con: 20, int: 22, wis: 18, cha: 14 },
                skills: [
                    { name: "Hide", bonus: 37, breakdown: "28 ranks + 9 Dex" },
                    { name: "Move Silently", bonus: 37, breakdown: "28 ranks + 9 Dex" },
                    { name: "Tumble", bonus: 37, breakdown: "28 ranks + 9 Dex" },
                    { name: "Spellcraft", bonus: 34, breakdown: "28 ranks + 6 Int" },
                    { name: "Use Magic Device", bonus: 30, breakdown: "28 ranks + 2 Cha" },
                    { name: "Listen", bonus: 32, breakdown: "28 ranks + 4 Wis" },
                    { name: "Spot", bonus: 32, breakdown: "28 ranks + 4 Wis" },
                ],
                feats: [
                    { name: "Two-Weapon Fighting", description: "Reduce penalties." },
                    { name: "Improved Two-Weapon Fighting", description: "Get a second off-hand attack." },
                    { name: "Greater Two-Weapon Fighting", description: "Get a third off-hand attack." },
                    { name: "Weapon Finesse", description: "Use Dex for attack rolls." },
                    { name: "Improved Critical (Rapier)", description: "Threat range becomes 15-20." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Spell Penetration", description: "+2 to overcome SR." },
                    { name: "Greater Spell Penetration", description: "+2 to overcome SR." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or cell (2-3)",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "600,000 gp",
                    items: [
                        { name: "+4 Spell-Storing Intellect Drain Rapier", cost: "128,320 gp", description: "" },
                        { name: "+4 Spell-Storing Intellect Drain Short Sword", cost: "128,310 gp", description: "" },
                        { name: "+5 Mithral Chain Shirt", cost: "26,100 gp", description: "" },
                        { name: "Gloves of Dexterity +6", cost: "36,000 gp", description: "" },
                        { name: "Headband of Intellect +6", cost: "36,000 gp", description: "" },
                        { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                        { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};
