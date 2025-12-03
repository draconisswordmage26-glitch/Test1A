// data/antagonists/cr_13_17/voidTouchedAssassin/stats/index.ts
import { Monster } from '../../../../types';

export const voidTouchedAssassinStats: Monster = {
    name: "Void-Touched Assassin",
    description: "These elite assassins are the Emperor's scalpels, surgically removing threats to the regime. They are infused with the essence of the Plane of Shadow, allowing them to step through darkness and strike without warning. Their blades are coated in a soul-numbing poison that drains the will to live, leaving their victims to die in quiet despair.",
    roleplayGuide: [],
    builds: [
        {
            level: 20, // ECL
            title: "Shadow Killer",
            class: "Human Rogue 10 / Assassin 10",
            hitDice: "20d6+80 (Max HD) = 200 hp",
            challengeRating: 15,
            speed: "30 ft.",
            armorClass: {
                total: 35,
                breakdown: "(+8 Dex, +8 armor, +5 deflection, +4 natural)",
                touch: 23,
                flatFooted: 27,
            },
            initiative: {
                bonus: 12,
                breakdown: "(+8 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 15 stealth-based assassin focused on single-target elimination.",
                "Its high sneak attack damage and death attack make it a lethal threat to any character it can catch unaware."
            ],
            sheet: {
                baseAtk: 15,
                grapple: 18,
                fullAttack: [
                    { name: "+3 Wounding Rapier", bonus: "+27/+22/+17", damage: "1d6+6 plus 1 Con drain", crit: "15-20/x2", type: "Melee" },
                    { name: "+3 Wounding Short Sword", bonus: "+27", damage: "1d6+4 plus 1 Con drain", crit: "19-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Death Attack:</b> After 3 rounds of study, DC 25 Fort save or die.",
                    "<b>Full Attack:</b> 4 attacks (+27/+27/+22/+17). Sneak Attack adds +10d6 damage.",
                    "<b>Typical Round DPR (Sneak Attack):</b> ~30 piercing/con drain + ~35 sneak attack = ~65 damage.",
                    "<b>Primary Tactic:</b> Uses 'Shadow Jump' to get into a flanking position, then uses a full attack to deliver multiple sneak attacks. Uses poison and wounding weapons to wear down tough targets.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Sneak Attack", type: "Ex", description: "+10d6 damage." },
                    { name: "Death Attack", type: "Ex", description: "After 3 rounds of study, a sneak attack can force a DC 25 Fortitude save or die." },
                    { name: "Poison Use", type: "Ex", description: "Uses Despair Toxin (DC 22 Fort, 1d6 Wis drain/2d6 Wis drain)." },
                    { name: "Shadow Jump", type: "Su", description: "As a move action, can teleport between shadows up to 60 feet." },
                ],
                specialQualities: [
                    { name: "Improved Uncanny Dodge", type: "Ex", description: "Cannot be flanked." },
                    { name: "Hide in Plain Sight", type: "Su", description: "" },
                ],
                saves: {
                    fort: { bonus: 13, breakdown: "+6 class, +4 Con, +3 item" },
                    ref: { bonus: 24, breakdown: "+12 class, +8 Dex, +4 item" },
                    will: { bonus: 11, breakdown: "+6 class, +2 Wis, +3 item" },
                },
                abilities: { str: 16, dex: 26, con: 18, int: 20, wis: 14, cha: 12 },
                skills: [
                    { name: "Hide", bonus: 31, breakdown: "23 ranks + 8 Dex" },
                    { name: "Move Silently", bonus: 31, breakdown: "23 ranks + 8 Dex" },
                    { name: "Tumble", bonus: 31, breakdown: "23 ranks + 8 Dex" },
                    { name: "Use Magic Device", bonus: 24, breakdown: "23 ranks + 1 Cha" },
                    { name: "Listen", bonus: 25, breakdown: "23 ranks + 2 Wis" },
                    { name: "Spot", bonus: 25, breakdown: "23 ranks + 2 Wis" },
                    { name: "Search", bonus: 28, breakdown: "23 ranks + 5 Int" },
                ],
                feats: [
                    { name: "Two-Weapon Fighting", description: "Reduce penalties." },
                    { name: "Improved Two-Weapon Fighting", description: "Second off-hand attack." },
                    { name: "Weapon Finesse", description: "Use Dex for attacks." },
                    { name: "Improved Critical (Rapier)", description: "Threat range 15-20." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Craven", description: "Add character level to sneak attack damage, but take -2 on fear saves." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or pair",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "250,000 gp",
                    items: [
                        { name: "+3 Wounding Rapier", cost: "50,320 gp", description: "" },
                        { name: "+3 Wounding Short Sword", cost: "50,310 gp", description: "" },
                        { name: "+5 Mithral Shirt", cost: "26,100 gp", description: "" },
                        { name: "Gloves of Dexterity +6", cost: "36,000 gp", description: "" },
                        { name: "Headband of Intellect +4", cost: "16,000 gp", description: "" },
                        { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};