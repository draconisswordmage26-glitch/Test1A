
// data/antagonists/cr_13_17/ironDisciplinarian/stats/index.ts
import { Monster } from '../../../../types';

export const ironDisciplinarianStats: Monster = {
    name: "Iron-Disciplinarian",
    description: "The Empæryen recognizes the power of the Sublime Way and has trained its own masters to counter it. The Iron-Disciplinarians are grim, silent warriors who have studied every martial discipline for the sole purpose of learning how to break them. They see the fluid grace of a Warblade or the perfect stillness of a Diamond Mind master not as art, but as a flaw to be exploited. They are the ultimate counter-punchers, turning an enemy's perfect strike into their final, fatal mistake.",
    roleplayGuide: [],
    builds: [
        {
            level: 24, // ECL
            title: "The Unblinking Blade",
            class: "Human Warblade 20 / Iron Heart Duelist 4",
            hitDice: "24d12+168 (Max HD) = 456 hp",
            challengeRating: 16,
            speed: "30 ft.",
            armorClass: {
                total: 40,
                breakdown: "(+8 armor, +5 shield, +7 Dex, +5 deflection, +5 insight)",
                touch: 37,
                flatFooted: 33,
            },
            initiative: {
                bonus: 11,
                breakdown: "(+7 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 16 anti-martial-adept duelist.",
                "Its high initiative, AC, and access to numerous counter maneuvers make it a nightmare for characters from the Tome of Battle.",
                "Its 'Adaptive Style' and 'Robilar's Gambit' feats allow it to react and punish its foes with brutal efficiency."
            ],
            sheet: {
                baseAtk: 24,
                grapple: 30,
                fullAttack: [
                    { name: "+4 Keen Greatsword", bonus: "+36/+31/+26/+21", damage: "2d6+12", crit: "17-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Stance:</b> Always in 'Thicket of Blades' stance to make AoOs against any movement within its reach.",
                    "<b>Immediate Actions:</b> Has a huge list of counter maneuvers ('Wall of Blades', 'Moment of Perfect Mind') to negate attacks or failed saves.",
                    "<b>Robilar's Gambit:</b> Takes a -4 AC penalty to make an AoO against anyone who attacks it, a trade it will gladly make.",
                    "<b>Primary Tactic:</b> A patient duelist. It waits for the enemy to act, then uses its immediate actions and AoOs to punish them, turning their offense into openings for its own devastating strikes.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Initiator Level 24. Knows dozens of maneuvers, specializing in Diamond Mind and Iron Heart counters." },
                ],
                specialQualities: [
                    { name: "Stance Mastery", type: "Ex", description: "Can have two stances active at once." },
                    { name: "Disruptive", type: "Ex", description: "Foes within 5 ft. who attempt to cast a spell provoke an attack of opportunity." },
                    { name: "Spell Reflection", type: "Su", description: "Can reflect a targeted spell back at the caster 1/day (Will DC 25)." },
                ],
                saves: {
                    fort: { bonus: 22, breakdown: "+14 class, +7 Con, +1 item" },
                    ref: { bonus: 21, breakdown: "+10 class, +7 Dex, +4 Int" },
                    will: { bonus: 18, breakdown: "+10 class, +4 Wis, +4 Int" },
                },
                abilities: { str: 22, dex: 24, con: 24, int: 18, wis: 18, cha: 16 },
                skills: [
                    { name: "Tumble", bonus: 34, breakdown: "27 ranks + 7 Dex" },
                    { name: "Intimidate", bonus: 30, breakdown: "27 ranks + 3 Cha" },
                    { name: "Sense Motive", bonus: 31, breakdown: "27 ranks + 4 Wis" },
                    { name: "Concentration", bonus: 34, breakdown: "27 ranks + 7 Con" },
                    { name: "Balance", bonus: 34, breakdown: "27 ranks + 7 Dex" },
                    { name: "Jump", bonus: 33, breakdown: "27 ranks + 6 Str" },
                    { name: "Martial Lore", bonus: 31, breakdown: "27 ranks + 4 Int" },
                ],
                feats: [
                    { name: "Combat Expertise", description: "Trade attack for AC." },
                    { name: "Improved Feint", description: "Feint as a move action." },
                    { name: "Robilar's Gambit", description: "Make AoOs against foes who attack you, but grant them an attack bonus." },
                    { name: "Karmic Strike", description: "Make an AoO against foes who hit you, but grant them an attack bonus." },
                    { name: "Combat Reflexes", description: "Extra attacks of opportunity." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Adaptive Style", description: "Change readied maneuvers as a full-round action." },
                    { name: "Stormguard Warrior", description: "Trade attacks for AC or damage bonuses." },
                    { name: "Iron Will", description: "+2 to Will saves." },
                    { name: "Weapon Focus (Greatsword)", description: "+1 to attack." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or pair",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "300,000 gp",
                    items: [
                        { name: "+4 Keen Greatsword", cost: "50,350 gp", description: "" },
                        { name: "+5 Mithral Full Plate", cost: "26,500 gp", description: "" },
                        { name: "Gloves of Dexterity +6", cost: "36,000 gp", description: "" },
                        { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                        { name: "Headband of Intellect +4", cost: "16,000 gp", description: "" },
                        { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                        { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};
