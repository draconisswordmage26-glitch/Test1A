// data/antagonists/cr_33_37/inquisitorLordKravchenko/stats/index.ts
import { Monster } from '../../../../types';

export const inquisitorLordKravchenkoStats: Monster = {
    name: "Inquisitor-Lord Kravchenko, the Soul-Sever",
    description: "Kravchenko is the Empæryen's ultimate hunter of the uncanny. He is a man whose paranoia has been honed into a supernatural weapon. He sees lies and deception in every shadow and believes that any who hide their true form are enemies of natural law. He has dedicated his long life to the art of unmasking, and has developed profane techniques to not just reveal, but to violently sever a being's connection to its assumed shape, its bound spirits, or its illusory magic.",
    roleplayGuide: [],
    builds: [
        {
            level: 50, // ECL
            title: "The Unmasker",
            class: "Human Ranger 20 / Inquisitor 10 / Slayer 10 / Epic Ranger 10",
            hitDice: "50d8+600 (Max HD) = 1000 hp",
            challengeRating: 33,
            speed: "40 ft.",
            armorClass: {
                total: 65,
                breakdown: "(+10 Dex, +12 armor, +10 deflection, +15 natural, +8 insight)",
                touch: 38,
                flatFooted: 55,
            },
            initiative: {
                bonus: 14,
                breakdown: "(+10 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 33 hunter and slayer, designed to counter characters like the Rakshasa Maharaja, Oni Mage, or Kitsune.",
                "His abilities are focused on seeing through deceptions and forcibly reverting his foes to their true forms."
            ],
            sheet: {
                baseAtk: 43,
                grapple: 50,
                fullAttack: [
                    { name: "+8 Truth-Seeker Greatsword", bonus: "+63/+58/+53/+48", damage: "2d6+25", crit: "17-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Constant Aura:</b> 'Unveiling Aura' (120 ft. True Seeing).",
                    "<b>Swift Action:</b> Activate 'Discern Lies' to gain +20 on Sense Motive.",
                    "<b>Standard Action:</b> 'Sever Connection' ranged touch attack (+53) to force a shapeshifter/binder to make a DC 48 Will save or lose their powers.",
                    "<b>Primary Tactic:</b> Uses his aura to identify the true form of his target. He then uses 'Sever Connection' to strip them of their primary abilities before closing for the kill with his greatsword.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Favored Enemy", type: "Ex", description: "+10 against Shapechangers, +8 against Outsiders, +6 against Fey." },
                    { name: "Sever Connection", type: "Su", description: "3/day, ranged touch attack. A shapeshifter, binder, or soulmelder struck must make a DC 48 Will save or lose access to all shapechanging, binding, and meldshaping abilities for 1d4 hours." },
                    { name: "Truth-Seeker's Strike", type: "Su", description: "Any creature struck by his greatsword is affected by a 'Dimensional Anchor' spell." },
                ],
                specialQualities: [
                    { name: "Unveiling Aura", type: "Su", description: "Constant 'True Seeing' effect in a 120-foot radius." },
                    { name: "Immunity to Illusions", type: "Ex", description: "" },
                    { name: "Immunity to Mind-Affecting", type: "Ex", description: "" },
                    { name: "DR 20/epic and chaotic", type: "Su", description: "" },
                ],
                saves: {
                    fort: { bonus: 37, breakdown: "+22 class, +12 Con, +3 item" },
                    ref: { bonus: 38, breakdown: "+22 class, +10 Dex, +6 item" },
                    will: { bonus: 35, breakdown: "+22 class, +8 Wis, +5 item" },
                },
                abilities: { str: 24, dex: 30, con: 34, int: 26, wis: 26, cha: 22 },
                skills: [
                    { name: "Sense Motive", bonus: 61, breakdown: "53 ranks + 8 Wis" },
                    { name: "Spot", bonus: 61, breakdown: "53 ranks + 8 Wis" },
                    { name: "Survival", bonus: 61, breakdown: "53 ranks + 8 Wis" },
                    { name: "Hide", bonus: 63, breakdown: "53 ranks + 10 Dex" },
                    { name: "Move Silently", bonus: 63, breakdown: "53 ranks + 10 Dex" },
                    { name: "Listen", bonus: 61, breakdown: "53 ranks + 8 Wis" },
                ],
                feats: [
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Power Attack", description: "Trade attack for damage." },
                    { name: "Epic Prowess", description: "+1 to all attacks (x3)." },
                    { name: "Epic Weapon Focus (Greatsword)", description: "+2 to attack." },
                    { name: "Improved Critical (Greatsword)", description: "Threat range 17-20." },
                    { name: "Great Strength", description: "+1 to Strength (x3)." },
                    { name: "Great Dexterity", description: "+1 to Dexterity (x3)." },
                    { name: "Great Constitution", description: "+1 to Constitution (x3)." },
                    { name: "Armor Skin", description: "+1 to natural armor (x3)." },
                    { name: "Epic Toughness", description: "+30 HP." },
                    { name: "Blinding Speed", description: "Increase speed and gain concealment." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "1,600,000 gp",
                    items: [
                        { name: "+8 Truth-Seeker Greatsword", cost: "200,350 gp", description: "Custom artifact component." },
                        { name: "+8 Mithral Full Plate", cost: "65,500 gp", description: "" },
                        { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                    ]
                }
            }
        },
    ]
};