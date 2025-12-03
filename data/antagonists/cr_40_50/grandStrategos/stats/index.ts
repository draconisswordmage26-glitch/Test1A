
// data/antagonists/cr_40_50/grandStrategos/stats/index.ts
import { Monster } from '../../../../types';

export const grandStrategosStats: Monster = {
    name: "Grand Strategos Vorn",
    description: "Not all of the Empæryen's monsters are brutes. Vorn is a being of pure, sadistic intellect. Once a grandmaster of games, his mind was 'recruited' by Zharov and placed in a decaying, life-sustaining command throne. Physically atrophied and powerless on his own, he wages war as a grand, bloody game. He commands his legions from miles away, viewing the battlefield on a scrying matrix, sacrificing thousands of his own troops without a flicker of emotion to achieve the perfect, most aesthetically pleasing victory. He doesn't just want to win; he wants to create a masterpiece of slaughter.",
    roleplayGuide: [],
    builds: [
        {
            level: 67, // ECL
            title: "The Chessmaster",
            class: "Human Marshal 20 / Legendary Leader 10 / Expert 37",
            hitDice: "67d6+201 (Max HD) = 603 hp",
            challengeRating: 45,
            speed: "5 ft. (in throne)",
            armorClass: {
                total: 50,
                breakdown: "(+10 deflection, +15 insight, +25 profane from throne)",
                touch: 50,
                flatFooted: 45,
            },
            initiative: {
                bonus: 15,
                breakdown: "(+5 Dex, +10 feat)",
            },
            buildNotes: [
                "A CR 45 commander and support villain.",
                "He has almost no personal combat ability. The challenge is not fighting him, but surviving his army, traps, and battlefield control to reach him.",
                "His power is entirely derived from his Command Throne artifact and his leadership feats."
            ],
            sheet: {
                baseAtk: 44,
                grapple: 40,
                fullAttack: [
                    { name: "Dagger", bonus: "+43", damage: "1d4-1", crit: "19-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Action 1 (Battlefield Control):</b> At-will 'Wall of Force' or 'Solid Fog' to divide and conquer the party.",
                    "<b>Action 2 (Summoning):</b> Uses 'Summon Legion' to deploy waves of troops to wear down the heroes.",
                    "<b>Action 3 (Aura):</b> His 'Aura of Absolute Command' constantly debuffs the party and risks turning their own allies against them (DC 55 Will).",
                    "<b>Primary Tactic:</b> Vorn never fights directly. He is a remote general who uses his endless minions and battlefield-wide powers to create an unwinnable war of attrition.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Aura of Absolute Command", type: "Su", description: "His Marshal and Legendary Leader auras affect all allies on the same plane, broadcast through his throne. Enemies affected by his auras (Will DC 55) must attack their nearest ally." },
                    { name: "Battlefield Control", type: "Su", description: "From his throne, Vorn can cast 'Wall of Force', 'Solid Fog', and 'Blade Barrier' at will anywhere on the battlefield." },
                    { name: "Summon Legion", type: "Su", description: "3/day, can summon a legion of 50 imperial soldiers, 10 Imperium Inquisitors, or 4 Hex-Legionnaires." },
                ],
                specialQualities: [
                    { name: "DR 25/epic, good, and chaotic (from throne)", type: "Su", description: "" },
                    { name: "Remote Command", type: "Su", description: "Vorn sees the battlefield through a scrying pool. He is not physically present unless the heroes breach his command center." },
                    { name: "Contingency Plan", type: "Ex", description: "If his throne is destroyed or he is personally threatened, he has multiple 'Teleport' contingencies to escape." },
                    { name: "Immunities", type: "Ex", description: "Immune to mind-affecting effects, divination, and scrying (from throne)."}
                ],
                saves: {
                    fort: { bonus: 35, breakdown: "+22 class, +3 Con, +10 item" },
                    ref: { bonus: 37, breakdown: "+22 class, +5 Dex, +10 item" },
                    will: { bonus: 50, breakdown: "+35 class, +15 Wis" },
                },
                abilities: { str: 8, dex: 20, con: 16, int: 50, wis: 40, cha: 50 },
                skills: [
                    { name: "Bluff", bonus: 90, breakdown: "70 ranks + 20 Cha" },
                    { name: "Diplomacy", bonus: 90, breakdown: "70 ranks + 20 Cha" },
                    { name: "Intimidate", bonus: 90, breakdown: "70 ranks + 20 Cha" },
                    { name: "Knowledge (nobility and royalty)", bonus: 90, breakdown: "70 ranks + 20 Int" },
                    { name: "Sense Motive", bonus: 85, breakdown: "70 ranks + 15 Wis" },
                ],
                feats: [
                    { name: "Epic Leadership", description: "Attract a massive army of followers." },
                    { name: "Legendary Commander", description: "Followers are more powerful and numerous." },
                    { name: "Epic Reputation", description: "Doubles effect of Diplomacy/Intimidate." },
                    { name: "Great Charisma", description: "+1 to Charisma (x5)." },
                    { name: "Great Intelligence", description: "+1 to Intelligence (x5)." },
                    { name: "Great Wisdom", description: "+1 to Wisdom (x5)." },
                    { name: "Epic Skill Focus (Diplomacy)", description: "+10 to Diplomacy." },
                    { name: "Epic Will", description: "+4 to Will saves." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Epic Fortitude", description: "+4 to Fortitude saves." },
                    { name: "Epic Reflexes", description: "+4 to Reflex saves." },
                    { name: "Toughness", description: "+3 HP (x10)." },
                ],
                flaws: [],
                environment: "A sealed command bunker miles from the front line",
                organization: "Unique",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "Artifacts",
                    items: [
                        { name: "The Strategos Throne", cost: "Artifact", description: "A life-sustaining command chair that projects Vorn's consciousness and powers across the battlefield." },
                        { name: "All Tomes/Manuals +5", cost: "1,375,000 gp", description: "Has read all of them." },
                    ]
                }
            }
        },
    ]
};
