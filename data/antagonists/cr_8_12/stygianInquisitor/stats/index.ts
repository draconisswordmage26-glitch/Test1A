
// data/antagonists/cr_8_12/stygianInquisitor/stats/index.ts
import { Monster } from '../../../../types';

export const stygianInquisitorStats: Monster = {
    name: "Imperium Inquisitor",
    description: "Once an angel of justice, this celestial has been broken and bound in rune-etched Stygian iron that weeps oily tears of absolute despair. Its grace has been perverted into a tool of exquisite torture, its divine light extinguished and replaced by the cold, endless void of the God-Kaiser's sadism. It serves as an enforcer of doctrinal purity and a political officer on the battlefield, its presence a source of abject terror for friend and foe alike. The Inquisitor does not just seek victory; it seeks to inflict the maximum possible suffering before death.",
    roleplayGuide: [],
    builds: [
        {
            level: 15, // ECL
            title: "Imperium Inquisitor",
            class: "Outsider 8 / Fighter 7",
            hitDice: "15d8+120 (Max HD) + 7d10+56 (Max HD) = 311 hp",
            challengeRating: 10,
            speed: "20 ft., fly 60 ft. (average)",
            armorClass: {
                total: 28,
                breakdown: "(+1 Dex, +9 natural, +8 armor)",
                touch: 11,
                flatFooted: 27,
            },
            initiative: {
                bonus: 5,
                breakdown: "(+1 Dex, +4 Improved Initiative)",
            },
            buildNotes: [
                "A CR 10 elite controller and melee threat, built as a monster with class levels.",
                "Its power is scaled to an ECL of 15, making it exceptionally deadly for its CR.",
                "Tactics revolve around using its reach and fear effects to lock down and demoralize opponents."
            ],
            sheet: {
                baseAtk: 15,
                grapple: 25,
                fullAttack: [
                    { name: "Masterwork Stygian Chain", bonus: "+23/+18/+13", damage: "2d4+10 plus 1d6 cold and fear", crit: "x2", type: "Melee" },
                    { name: "Bite", bonus: "+20", damage: "1d8+5", crit: "20/x2", type: "Melee" }
                ],
                attackRoutine: [
                    "<b>Full Attack:</b> Stygian Chain x3 (+23/+18/+13, avg. 15 dmg + Fear) and Bite (+20, avg. 9 dmg).",
                    "<b>Typical Round DPR:</b> ~54 physical/cold damage.",
                    "<b>Primary Tactic:</b> Uses Fear Gaze (DC 21 Will) on a key target, then attacks them with the chain to stack fear effects (Shaken -> Frightened). Uses its 15 ft. reach and Combat Reflexes to make attacks of opportunity.",
                ],
                spaceReach: "5 ft. (15 ft. with chain)",
                specialAttacks: [
                    { name: "Fear Gaze", type: "Su", description: "30 ft. range, Will DC 21 or become shaken for 2d6 rounds." },
                    { name: "Stygian Fear", type: "Su", description: "Any creature struck by the Stygian Steel Chain must make a Will save (DC 21) or become shaken for 1 minute. This stacks with its gaze, potentially causing a Frightened condition." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "15/good and silver" },
                    { name: "Spell Resistance", type: "Ex", description: "25" },
                    { name: "Darkvision", type: "Ex", description: "60 ft." },
                    { name: "Bound", type: "Ex", description: "The Inquisitor cannot move more than 1 mile from its designated commander without suffering 1d6 Con drain per hour." },
                    { name: "Immunities", type: "Ex", description: "Immune to cold and fear."}
                ],
                saves: {
                    fort: { bonus: 17, breakdown: "+6 HD, +7 Con, +4 class" },
                    ref: { bonus: 8, breakdown: "+6 HD, +1 Dex, +1 class" },
                    will: { bonus: 11, breakdown: "+6 HD, +2 Wis, +3 class" },
                },
                abilities: { str: 24, dex: 13, con: 24, int: 12, wis: 14, cha: 19 },
                skills: [
                    { name: "Intimidate", bonus: 22, breakdown: "18 ranks + 4 Cha" },
                    { name: "Sense Motive", bonus: 20, breakdown: "18 ranks + 2 Wis" },
                    { name: "Climb", bonus: 25, breakdown: "18 ranks + 7 Str" },
                    { name: "Listen", bonus: 20, breakdown: "18 ranks + 2 Wis" },
                    { name: "Spot", bonus: 20, breakdown: "18 ranks + 2 Wis" },
                ],
                feats: [
                    { name: "Exotic Weapon Proficiency (Spiked Chain)", description: "Use spiked chain." },
                    { name: "Combat Reflexes", description: "Make extra attacks of opportunity based on Dexterity." },
                    { name: "Improved Initiative", description: "+4 bonus on initiative checks." },
                    { name: "Weapon Focus (Spiked Chain)", description: "+1 bonus on attack rolls with spiked chain." },
                    { name: "Power Attack", description: "Trade attack bonus for damage." },
                    { name: "Ability Focus (Fear Gaze)", description: "+2 bonus to the DC of Fear Gaze." },
                    { name: "Iron Will", description: "+2 bonus on Will saves (Fighter Bonus Feat)." },
                    { name: "Toughness", description: "+3 hit points (Fighter Bonus Feat)." },
                    { name: "Weapon Specialization (Spiked Chain)", description: "+2 bonus on damage rolls with spiked chain (Fighter Bonus Feat)." },
                    { name: "Melee Weapon Mastery (Slashing)", description: "+2 on attack rolls and +2 on damage rolls with slashing weapons (Fighter Bonus Feat)." },
                ],
                flaws: [],
                environment: "Any (Novolograd Empæryen territory)",
                organization: "Squad (2-4) or Legion (10-20)",
                alignment: "Lawful Evil",
                advancement: "By character class",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "25,000 gp",
                    items: [
                        { name: "Masterwork Stygian Steel Chain", cost: "Unique", description: "A weapon that deals bonus cold damage and induces fear." },
                        { name: "Masterwork Full Plate", cost: "1,650 gp", description: "" },
                        { name: "Amulet of Health +4", cost: "16,000 gp", description: "" },
                        { name: "Cloak of Charisma +2", cost: "4,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};
