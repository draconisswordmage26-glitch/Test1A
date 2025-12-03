
// data/antagonists/cr_60_plus/godEmperorZarthus/stats/index.ts
import { Monster } from '../../../../types';

export const godEmperorZarthusStats: Monster = {
    name: "God-Kaiser Zharov",
    description: "The God-Kaiser of the Novolograd Empæryen is a being of such profound and meticulous evil that even Asmodeus finds his methods distasteful. He is an ancient human general who achieved immortality not through a desire for life, but through a bottomless appetite for the suffering of others. His body is a grotesque fusion of necrotic flesh and soul-fueled machinery, every inch of it a monument to his sadism. He believes that humanity can only be perfected by burning away all weakness, compassion, and empathy, and that all non-human life is simply fuel for this agonizing apotheosis. His regime is not just a tyranny; it is a meticulously crafted engine of pain, designed to inflict maximum despair before its inevitable, grinding victory.",
    roleplayGuide: [],
    builds: [
        {
            level: 105, // ECL
            title: "The First and Final Tyrant",
            class: "Marshal 20 / Warblade 20 / Legendary Leader 10 / Eternal Blade 10 / Lord of the Nine 10 / Adamantine Hurricane 10 / Epic Warblade 25",
            hitDice: "105d12+2100 (Max HD) + 300 (Epic Toughness) = 3660 hp",
            challengeRating: 70,
            speed: "60 ft.",
            armorClass: {
                total: 112,
                breakdown: "(+8 Dex, +25 armor, +15 deflection, +25 natural, +14 insight, +25 profane)",
                touch: 82,
                flatFooted: 104,
            },
            initiative: {
                bonus: 16,
                breakdown: "(+8 Dex, +8 feat)",
            },
            buildNotes: [
                "The ultimate BBEG, a CR 70 monster designed to be a challenge for a party of four level 40 characters.",
                "His class build has been refactored to make him a supreme martial combatant, blending the command abilities of a Marshal/Lord of the Nine with the devastating melee power of a Warblade/Eternal Blade.",
                "He is a true solo threat, capable of taking on an entire epic party by himself through a masterful combination of maneuvers, stances, and overwhelming attacks."
            ],
            sheet: {
                baseAtk: 98,
                grapple: 113,
                fullAttack: [
                    { name: "World-Ender, a +10 Vorpal Anarchic Greatsword", bonus: "+121/+116/+111/+106", damage: "2d6+35", crit: "17-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Swift Action:</b> Initiate a powerful Stance like 'Stance of the God-Slayer' (ignore all DR/hardness) or 'Atemporal Awareness' (Foresight/Mind Blank).",
                    "<b>Standard Action:</b> Initiate a maneuver like 'Time Stands Still' to make two full attacks this round.",
                    "<b>Full Attack:</b> 4 attacks with his greatsword (+121/+116/+111/+106, avg. 42 dmg each).",
                    "<b>Typical Round DPR:</b> With 'Time Stands Still', he can make 8 attacks for an average DPR of ~336, not counting Power Attack or critical hits.",
                    "<b>Primary Tactic:</b> Uses his supreme mobility and action economy from maneuvers to unleash an overwhelming number of attacks. He will use 'Iron Heart Surge' to negate any debilitating effect and 'Strike of Timeless Mind' to permanently remove a single target from the fight.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Martial Maneuvers", type: "Ex", description: "Initiator Level 105. Knows dozens of maneuvers, including every maneuver from the Diamond Mind, Iron Heart, and White Raven disciplines. Can use epic maneuvers." },
                    { name: "Epic Spells", type: "Sp", description: "As a Lord of the Nine, possesses a repertoire of epic spells, including 'Hellfire Apocalypse' and 'Isolate'." },
                    { name: "Word of Law", type: "Su", description: "1/day, can stun all non-lawful creatures on the plane (Will DC 68 negates)." },
                    { name: "Diabolical Edict", type: "Su", description: "Can issue commands that all devils on his plane must obey." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "35/epic, good, and chaotic" },
                    { name: "Spell Resistance", type: "Ex", description: "82" },
                    { name: "Divine Rank 1", type: "Ex", description: "Possesses a divine rank, granting numerous immunities and abilities." },
                    { name: "One with Hell", type: "Ex", description: "Can only be permanently killed on his home plane of Nessus." },
                    { name: "Regeneration", type: "Ex", description: "40 (bypassed by epic, good-aligned weapons wielded by a creature of at least divine rank 1)." },
                    { name: "Immunities", type: "Ex", description: "Immune to death effects, ability drain, mind-affecting effects, and critical hits." },
                ],
                saves: {
                    fort: { bonus: 70, breakdown: "+45 base, +18 Con, +7 item" },
                    ref: { bonus: 63, breakdown: "+38 base, +8 Dex, +17 item" },
                    will: { bonus: 77, breakdown: "+54 base, +12 Wis, +11 item" },
                },
                abilities: { str: 40, dex: 26, con: 46, int: 38, wis: 34, cha: 46 },
                skills: [
                    { name: "Diplomacy", bonus: 126, breakdown: "108 ranks + 18 Cha" },
                    { name: "Intimidate", bonus: 126, breakdown: "108 ranks + 18 Cha" },
                    { name: "Sense Motive", bonus: 120, breakdown: "108 ranks + 12 Wis" },
                    { name: "Concentration", bonus: 126, breakdown: "108 ranks + 18 Con" },
                    { name: "Tumble", bonus: 116, breakdown: "108 ranks + 8 Dex" },
                    { name: "Martial Lore", bonus: 122, breakdown: "108 ranks + 14 Int" },
                ],
                feats: [
                    { name: "Epic Leadership", description: "" },
                    { name: "Legendary Commander", description: "" },
                    { name: "Great Charisma", description: "" },
                    { name: "Great Intelligence", description: "" },
                    { name: "Great Wisdom", description: "" },
                    { name: "Epic Reputation", description: "" },
                ],
                flaws: [],
                environment: "The Iron Throne of Hell",
                organization: "Unique",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "Artifacts",
                    items: [
                        { name: "The Iron Crown of Hell", cost: "Artifact", description: "" },
                        { name: "The Chains of Asmodeus", cost: "Artifact", description: "" },
                        { name: "The Scepter of Nessus", cost: "Artifact", description: "" },
                    ]
                }
            }
        },
    ]
};
