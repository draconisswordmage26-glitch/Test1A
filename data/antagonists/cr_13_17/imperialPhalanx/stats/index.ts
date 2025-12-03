// data/antagonists/cr_13_17/imperialPhalanx/stats/index.ts
import { Monster } from '../../../../types';

export const imperialPhalanxStats: Monster = {
    name: "Imperial Phalanx",
    description: "The backbone of the Empæryen's legions are the Phalanx troopers. Clad in heavy, overlapping plate armor and wielding tower shields and longspears, they are trained from birth to be a living, unbreakable wall. They specialize in defensive formations and anti-cavalry tactics, their discipline so absolute that they will hold the line against a charging behemoth or a demonic horde without a flicker of fear.",
    roleplayGuide: [],
    builds: [
        {
            level: 19, // ECL
            title: "The Iron Wall",
            class: "Human Fighter 19",
            hitDice: "19d10+133 (Max HD) = 323 hp",
            challengeRating: 13,
            speed: "20 ft.",
            armorClass: {
                total: 35,
                breakdown: "(+12 armor, +5 shield, +8 Dex)",
                touch: 18,
                flatFooted: 27,
            },
            initiative: {
                bonus: 8,
                breakdown: "(+8 Dex)",
            },
            buildNotes: [
                "A CR 13 defensive specialist designed to counter high-damage chargers like the Pyroclastic Dragon or Behemoth.",
                "Its tactics revolve around setting its spears against a charge and using teamwork to create an unbreakable defensive line."
            ],
            sheet: {
                baseAtk: 19,
                grapple: 23,
                fullAttack: [
                    { name: "+3 Longspear", bonus: "+28/+23/+18/+13", damage: "1d8+10", crit: "x3", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Brace for Charge:</b> As a standard action, readies an action to set spear against a charge, dealing double damage (2d8+20).",
                    "<b>Hold the Line:</b> Gets an attack of opportunity against any charging creature that enters its 10 ft. reach.",
                    "<b>Shield Wall:</b> Grants its +5 shield bonus to adjacent Phalanx troopers.",
                    "<b>Primary Tactic:</b> Forms a defensive line with other Phalanx troopers. They ready actions to brace against charges, creating a deathtrap for any charging creature.",
                ],
                spaceReach: "5 ft. (10 ft. with longspear)",
                specialAttacks: [],
                specialQualities: [
                    { name: "Shield Wall", type: "Ex", description: "When adjacent to another Phalanx with this ability, both gain a +2 bonus to AC." },
                ],
                saves: {
                    fort: { bonus: 19, breakdown: "+11 class, +7 Con, +1 item" },
                    ref: { bonus: 15, breakdown: "+6 class, +8 Dex, +1 item" },
                    will: { bonus: 12, breakdown: "+6 class, +5 Wis, +1 item" },
                },
                abilities: { str: 18, dex: 26, con: 24, int: 14, wis: 20, cha: 12 },
                skills: [
                    { name: "Intimidate", bonus: 23, breakdown: "22 ranks + 1 Cha" },
                    { name: "Sense Motive", bonus: 27, breakdown: "22 ranks + 5 Wis" },
                    { name: "Climb", bonus: 26, breakdown: "22 ranks + 4 Str" },
                    { name: "Jump", bonus: 26, breakdown: "22 ranks + 4 Str" },
                ],
                feats: [
                    { name: "Phalanx Fighting", description: "Fight with a spear from behind a tower shield." },
                    { name: "Hold the Line", description: "Get an AoO against charging foes." },
                    { name: "Combat Expertise", description: "Trade attack for AC." },
                    { name: "Improved Trip", description: "Trip foes, no AoO." },
                    { name: "Combat Reflexes", description: "Extra attacks of opportunity." },
                    { name: "Weapon Focus (Longspear)", description: "+1 to attack." },
                    { name: "Weapon Specialization (Longspear)", description: "+2 to damage." },
                    { name: "Melee Weapon Mastery (Piercing)", description: "+2 to attack and damage." },
                    { name: "Endurance", description: "+4 to checks for nonlethal damage." },
                    { name: "Diehard", description: "Remain conscious at negative HP." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Squad (4-8) or company (20-40)",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "150,000 gp",
                    items: [
                        { name: "+3 Full Plate", cost: "10,650 gp", description: "" },
                        { name: "+2 Animated Tower Shield", cost: "4,180 gp", description: "" },
                        { name: "+3 Longspear", cost: "18,305 gp", description: "" },
                        { name: "Gloves of Dexterity +6", cost: "36,000 gp", description: "" },
                        { name: "Amulet of Health +6", cost: "36,000 gp", description: "" },
                        { name: "Periapt of Wisdom +6", cost: "36,000 gp", description: "" },
                        { name: "Cloak of Resistance +1", cost: "1,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};