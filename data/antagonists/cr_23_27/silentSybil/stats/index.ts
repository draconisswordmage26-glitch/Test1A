
// data/antagonists/cr_23_27/silentSybil/stats/index.ts
import { Monster } from '../../../../types';

export const silentSybilStats: Monster = {
    name: "The Silent Sybil",
    description: "The leader of the Empæryen's psychic inquisitors is a terrifying paradox. She is a psionic void, a being whose own psychic presence has been inverted. She does not project thoughts; she consumes them. She is a psychic black hole, and her very presence drains psionic energy from the air. She hunts powerful psions not just to eliminate a threat, but to feed, growing ever stronger on the stolen thoughts and powers of her victims.",
    roleplayGuide: [],
    builds: [
        {
            level: 39, // ECL
            title: "The Psychic Vampire",
            class: "Human Psion (Telepath) 20 / Slayer 10 / Mind-Eater 9",
            hitDice: "39d6+312 (Max HD) = 546 hp",
            challengeRating: 26,
            speed: "30 ft.",
            armorClass: {
                total: 50,
                breakdown: "(+9 Dex, +10 armor, +8 deflection, +8 insight, +5 natural)",
                touch: 35,
                flatFooted: 41,
            },
            initiative: {
                bonus: 13,
                breakdown: "(+9 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 26 unique anti-psionic assassin.",
                "Her abilities are focused on draining power points, suppressing psionic abilities, and turning a psion's own power against them."
            ],
            sheet: {
                baseAtk: 24,
                grapple: 28,
                fullAttack: [
                    { name: "+5 Mind-Leech Dagger", bonus: "+38/+33/+28/+23", damage: "1d4+9 and 1d6 Wis drain", crit: "17-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Aura of Psychic Static:</b> Constant 60ft aura. Psionic creatures lose 10 power points per round. Manifesters must make a CL check (DC 35) or their power fails.",
                    "<b>Consume Power:</b> As a standard action, ranged touch attack (+33) that drains 5d6 power points and heals the Sybil for the same amount.",
                    "<b>Power Feedback:</b> When a psionic power fails in her aura, the manifester takes 1d6 damage per level of the failed power.",
                    "<b>Primary Tactic:</b> Uses her aura and 'Consume Power' to drain an enemy psion dry. Once their power points are gone, she closes for the kill with her Wisdom-draining dagger.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Psionics", type: "Psi", description: "Manifests as a 29th-level Psion." },
                    { name: "Consume Power", type: "Su", description: "Ranged touch attack drains 5d6 power points and heals the Sybil for the same amount." },
                    { name: "Power Feedback", type: "Su", description: "When a psionic power fails in her aura, the manifester takes 1d6 damage per level of the failed power." },
                ],
                specialQualities: [
                    { name: "Aura of Psychic Static", type: "Su", description: "60 ft. radius. Psionic creatures lose 10 power points per round. Any power manifested in the aura requires a Caster Level check (DC 35) or it fails." },
                    { name: "Power Resistance", type: "Ex", description: "40" },
                    { name: "Psionic Sink", type: "Ex", description: "Immune to all mind-affecting psionic powers. She has no mind to affect, only a void." },
                ],
                saves: {
                    fort: { bonus: 23, breakdown: "+13 class, +8 Con, +2 item" },
                    ref: { bonus: 27, breakdown: "+16 class, +9 Dex, +2 item" },
                    will: { bonus: 33, breakdown: "+22 class, +9 Wis, +2 item" },
                },
                abilities: { str: 18, dex: 28, con: 26, int: 35, wis: 28, cha: 24 },
                skills: [
                    { name: "Psicraft", bonus: 54, breakdown: "42 ranks + 12 Int" },
                    { name: "Concentration", bonus: 50, breakdown: "42 ranks + 8 Con" },
                    { name: "Hide", bonus: 51, breakdown: "42 ranks + 9 Dex" },
                    { name: "Move Silently", bonus: 51, breakdown: "42 ranks + 9 Dex" },
                    { name: "Bluff", bonus: 49, breakdown: "42 ranks + 7 Cha" },
                ],
                feats: [
                    { name: "Psionic Body", description: "+1 HP per psionic feat." },
                    { name: "Power Penetration", description: "+2 to overcome PR." },
                    { name: "Greater Power Penetration", description: "+2 to overcome PR." },
                    { name: "Epic Power Penetration", description: "+4 to overcome PR." },
                    { name: "Quicken Power", description: "Manifest as a swift action." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Weapon Finesse", description: "Use Dex for attack rolls." },
                    { name: "Improved Critical (Dagger)", description: "Threat range 17-20." },
                    { name: "Epic Toughness", description: "+30 HP." },
                    { name: "Epic Will", description: "+4 to Will saves." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "900,000 gp",
                    items: [
                        { name: "+5 Mind-Leech Dagger", cost: "128,302 gp", description: "" },
                        { name: "+5 Mithral Chain Shirt", cost: "26,100 gp", description: "" },
                        { name: "Belt of Magnificence +6", cost: "200,000 gp", description: "" },
                        { name: "Tome of Clear Thought +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
    ]
};
