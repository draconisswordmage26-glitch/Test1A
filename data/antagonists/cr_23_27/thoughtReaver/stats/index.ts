// data/antagonists/cr_23_27/thoughtReaver/stats/index.ts
import { Monster } from '../../../../types';

export const thoughtReaverStats: Monster = {
    name: "Thought-Reaver",
    description: "The Novolograd Empæryen's secret police, the Silent Sybils, are feared for their ability to root out dissent before it even begins. When a truly problematic mind is discovered, they dispatch a Thought-Reaver. This creature is a psionic monstrosity, a living weapon that hunts not people, but memories and ideas. It moves unseen through the minds of its targets, erasing dissidents from history by excising them from the memories of everyone who ever knew them. Its victims don't just disappear; they cease to have ever existed.",
    roleplayGuide: [],
    builds: [
        {
            level: 37, // ECL
            title: "Memory Eater",
            class: "Psion (Telepath) 20 / Slayer 10 / Cerebremancer 7",
            hitDice: "37d6+296 (Max HD) + 30 (Epic Toughness) = 548 hp",
            challengeRating: 25,
            speed: "30 ft.",
            armorClass: {
                total: 42,
                breakdown: "(+8 Dex, +10 armor, +8 deflection, +6 insight)",
                touch: 32,
                flatFooted: 34,
            },
            initiative: {
                bonus: 12,
                breakdown: "(+8 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 25 psionic assassin and infiltrator.",
                "Combines the raw power of a Psion with the stealth and precision of a Slayer.",
                "Its tactics revolve around mental assaults, memory manipulation, and psychic assassination."
            ],
            sheet: {
                baseAtk: 23,
                grapple: 25,
                fullAttack: [
                    { name: "+5 Mind Blade", bonus: "+36/+31/+26/+21", damage: "1d8+7 plus mind drain", crit: "19-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Swift Action:</b> Quicken a debuff like 'Ego Whip' (DC 35 Will, 4d4 Cha dmg) or 'Id Insinuation'.",
                    "<b>Standard Action:</b> Manifest a save-or-lose power like 'Dominate, Psionic' (DC 35 Will) or 'Mindscape Prison' (DC 35 Will).",
                    "<b>Psychic Assassination:</b> After 3 rounds of study, pairs a power like 'Psychic Crush' (DC 35 Will) with its Death Attack for an incredibly high save DC to avoid death.",
                    "<b>Typical Round DPR:</b> Varies by power. A maximized 'Mind Thrust' deals 96 damage. Melee DPR is ~30 plus 1d4 Int/Wis drain per hit.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifests as a 27th-level Psion." },
                    { name: "Mind Drain", type: "Su", description: "A creature struck by the Mind Blade takes 1d4 Int and Wis drain." },
                    { name: "Erase Memory", type: "Su", description: "On a critical hit with its Mind Blade, the target must make a Will save (DC 35) or have all memory of the past 24 hours erased." },
                    { name: "Psychic Assassination", type: "Psi", description: "Can study a target for 3 rounds to deliver a death attack with a psionic power, forcing a Will save or die (DC 10 + class level + Int mod)." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "20/epic and chaotic" },
                    { name: "Power Resistance", type: "Ex", description: "35" },
                    { name: "Mind Blank", type: "Ex", description: "Constantly under the effect of a Mind Blank spell." },
                    { name: "Immunities", type: "Ex", description: "Immune to mind-affecting effects, divination, and scrying."}
                ],
                saves: {
                    fort: { bonus: 20, breakdown: "+12 class, +6 Con, +2 item" },
                    ref: { bonus: 24, breakdown: "+14 class, +8 Dex, +2 item" },
                    will: { bonus: 30, breakdown: "+20 class, +8 Wis, +2 item" },
                },
                abilities: { str: 14, dex: 26, con: 22, int: 30, wis: 26, cha: 20 },
                skills: [
                    { name: "Autohypnosis", bonus: 48, breakdown: "40 ranks + 8 Wis" },
                    { name: "Bluff", bonus: 45, breakdown: "40 ranks + 5 Cha" },
                    { name: "Concentration", bonus: 46, breakdown: "40 ranks + 6 Con" },
                    { name: "Hide", bonus: 48, breakdown: "40 ranks + 8 Dex" },
                    { name: "Move Silently", bonus: 48, breakdown: "40 ranks + 8 Dex" },
                    { name: "Psicraft", bonus: 50, breakdown: "40 ranks + 10 Int" },
                ],
                feats: [
                    { name: "Weapon Finesse", description: "Use Dex for melee attack rolls." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Power Penetration", description: "+2 to overcome Power Resistance." },
                    { name: "Greater Power Penetration", description: "+2 to overcome Power Resistance." },
                    { name: "Psionic Meditation", description: "Regain focus as a move action." },
                    { name: "Quicken Power", description: "Manifest a power as a swift action." },
                    { name: "Maximize Power", description: "Maximize a power's variable effects." },
                    { name: "Epic Power Penetration", description: "Another +4 to overcome Power Resistance." },
                    { name: "Epic Psionic Focus", description: "Gain your ML as a bonus on concentration checks." },
                    { name: "Epic Toughness", description: "+30 HP." },
                    { name: "Epic Will", description: "+4 to Will saves." },
                    { name: "Improved Critical (Short Sword)", description: "Threat range becomes 17-20." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "800,000 gp",
                    items: [
                        { name: "+5 Mind Blade Short Sword", cost: "98,310 gp", description: "" },
                        { name: "+5 Mithral Chain Shirt of Silent Moves", cost: "41,100 gp", description: "" },
                        { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                        { name: "Cloak of Resistance +5", cost: "25,000 gp", description: "" },
                        { name: "Ring of Protection +5", cost: "50,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};