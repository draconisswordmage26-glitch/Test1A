
// data/antagonists/cr_28_32/kriegsmeisterValerius/stats/index.ts
import { Monster } from '../../../../types';

export const kriegsmeisterValeriusStats: Monster = {
    name: "Kriegsmeister Valerius",
    description: "Valerius was once the greatest sword-master of a forgotten age, a true prodigy of the Sublime Way. When the Empæryen conquered his homeland, he was offered a choice: teach them his secrets, or die. He chose a third option: to teach them so perfectly that he became indispensable. Now, centuries later, he is the Empæryen's Kriegsmeister, a withered old man kept alive by strange alchemy. He has analyzed every maneuver, every stance, every possible combination of strikes. He no longer fights to win, but to dissect, his every counter a cold, academic lesson in his opponent's failure.",
    roleplayGuide: [],
    builds: [
        {
            level: 42, // ECL
            title: "The Perfect Duelist",
            class: "Human Warblade 20 / Eternal Blade 10 / Master of Nine 5 / Epic Warblade 7",
            hitDice: "42d12+420 (Max HD) = 924 hp",
            challengeRating: 28,
            speed: "30 ft.",
            armorClass: {
                total: 65,
                breakdown: "(+8 armor, +5 shield, +7 Dex, +5 deflection, +5 insight)",
                touch: 47,
                flatFooted: 58,
            },
            initiative: {
                bonus: 16,
                breakdown: "(+8 Dex, +8 feat)",
            },
            buildNotes: [
                "A CR 28 anti-martial-adept grandmaster.",
                "His abilities are designed to perfectly counter and dismantle any character who relies on the Tome of Battle.",
                "He is the ultimate duelist, a thinking machine of counters and ripostes."
            ],
            sheet: {
                baseAtk: 38,
                grapple: 48,
                fullAttack: [
                    { name: "+8 Keen Greatsword", bonus: "+60/+55/+50/+45", damage: "2d6+24", crit: "15-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Stance:</b> 'Atemporal Awareness' (Foresight/Mind Blank) and 'Stance of the God-Slayer' (ignore all DR).",
                    "<b>Counter-Analysis:</b> As an immediate action, can identify any maneuver being initiated (no check needed) and force the initiator to make a Concentration check (DC 45) or the maneuver fails.",
                    "<b>Steal Maneuver:</b> If a maneuver fails, Valerius can immediately use that maneuver himself as a free action.",
                    "<b>Primary Tactic:</b> Valerius is a patient duelist. He waits for his opponent to act, then uses his immediate actions and AoOs to punish them, turning their offense into openings for its own devastating strikes.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Initiator Level 42. Knows every maneuver from every discipline." },
                    { name: "Counter-Analysis", type: "Ex", description: "As an immediate action, can identify and attempt to counter an enemy's maneuver, forcing a Concentration check (DC 45) to avoid failure." },
                    { name: "Steal Maneuver", type: "Ex", description: "If an enemy's maneuver fails due to Counter-Analysis, Valerius can immediately use that maneuver himself as a free action." },
                ],
                specialQualities: [
                    { name: "Stance Mastery", type: "Ex", description: "Can have two stances active at once." },
                    { name: "Perfect Mind", type: "Ex", description: "Immune to all mind-affecting effects." },
                    { name: "Prescience", type: "Su", description: "Cannot be surprised or caught flat-footed." },
                ],
                saves: {
                    fort: { bonus: 35, breakdown: "+23 class, +10 Con, +2 item" },
                    ref: { bonus: 34, breakdown: "+18 class, +8 Dex, +8 Int" },
                    will: { bonus: 32, breakdown: "+21 class, +6 Wis, +5 Int" },
                },
                abilities: { str: 30, dex: 26, con: 30, int: 26, wis: 22, cha: 20 },
                skills: [
                    { name: "Tumble", bonus: 53, breakdown: "45 ranks + 8 Dex" },
                    { name: "Concentration", bonus: 55, breakdown: "45 ranks + 10 Con" },
                    { name: "Sense Motive", bonus: 51, breakdown: "45 ranks + 6 Wis" },
                    { name: "Intimidate", bonus: 50, breakdown: "45 ranks + 5 Cha" },
                    { name: "Martial Lore", bonus: 53, breakdown: "45 ranks + 8 Int" },
                ],
                feats: [
                    { name: "Combat Reflexes", description: "Extra attacks of opportunity." },
                    { name: "Robilar's Gambit", description: "Make AoOs against foes who attack you." },
                    { name: "Stormguard Warrior", description: "Trade attacks for AC or damage bonuses." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Epic Prowess", description: "+1 to all attacks (x3)." },
                    { name: "Epic Weapon Focus (Greatsword)", description: "+2 to attack." },
                    { name: "Improved Critical (Greatsword)", description: "Threat range 15-20." },
                    { name: "Great Strength", description: "+1 to Strength (x3)." },
                    { name: "Great Dexterity", description: "+1 to Dexterity (x3)." },
                    { name: "Great Constitution", description: "+1 to Constitution (x3)." },
                    { name: "Armor Skin", description: "+1 to natural armor." },
                    { name: "Epic Toughness", description: "+30 HP." },
                ],
                flaws: [],
                environment: "His personal training salle",
                organization: "Unique",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "1,100,000 gp",
                    items: [
                        { name: "+8 Keen Greatsword", cost: "128,350 gp", description: "" },
                        { name: "+8 Mithral Full Plate", cost: "65,500 gp", description: "" },
                        { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                        { name: "Ring of Protection +8", cost: "128,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};
