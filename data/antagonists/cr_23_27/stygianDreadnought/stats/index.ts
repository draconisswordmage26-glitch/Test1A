
// data/antagonists/cr_23_27/stygianDreadnought/stats/index.ts
import { Monster } from '../../../../types';

export const stygianDreadnoughtStats: Monster = {
    name: "Stygian Dreadnought",
    description: "A Stygian Dreadnought is a mobile fortress forged from the soul-infused iron of the River Styx. It is a semi-sentient construct powered by the captured souls of heroes and paladins, their fading light used as a profane power source. The Dreadnought's armor is etched with symbols of despair, and its fists can not only crush the body but trap the soul of its victims. It is the Empæryen's ultimate tool for breaking the morale of celestial armies.",
    roleplayGuide: [],
    builds: [
        {
            level: 40, // ECL
            title: "The Soul-Cage",
            class: "Construct 40",
            hitDice: "40d10+60 (Max HD) + 90 (Epic Toughness) = 590 hp",
            challengeRating: 25,
            speed: "30 ft.",
            armorClass: {
                total: 50,
                breakdown: "(-4 size, -1 Dex, +40 natural, +5 deflection)",
                touch: 10,
                flatFooted: 50,
            },
            initiative: {
                bonus: -1,
                breakdown: "(-1 Dex)",
            },
            buildNotes: [
                "A CR 25 epic construct, a slow but incredibly durable melee threat.",
                "Its main purpose is to absorb damage and disrupt enemy lines with its auras and soul-trapping abilities."
            ],
            sheet: {
                baseAtk: 30,
                grapple: 55,
                fullAttack: [
                    { name: "2 Slams", bonus: "+51", damage: "4d8+21 and soul trap", crit: "20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Aura of Despair:</b> 60ft aura, Will DC 35 or become shaken.",
                    "<b>Full Attack:</b> 2 slams (+51, avg. 48 dmg + Soul Trap).",
                    "<b>Primary Tactic:</b> Advances relentlessly. Its aura debuffs the party while it uses its powerful slams to trap the souls of the party's frontline fighters. It is a massive, walking attrition engine.",
                ],
                spaceReach: "20 ft.",
                specialAttacks: [
                    { name: "Soul Trap", type: "Su", description: "Any living creature struck by the Dreadnought's slam must make a DC 35 Will save or its soul is trapped within the construct's body, as the 'Trap the Soul' spell. The creature's body dies instantly." },
                    { name: "Aura of Despair", type: "Su", description: "All enemies within 60 feet are shaken (Will DC 35 negates). This is a mind-affecting fear effect." },
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Ex", description: "20/adamantine and epic" },
                    { name: "Magic Immunity", type: "Ex", description: "Immune to any spell or spell-like ability that allows for spell resistance." },
                    { name: "Construct Traits", type: "Ex", description: "" },
                    { name: "Soul-Fueled", type: "Su", description: "For each soul trapped, the Dreadnought gains Fast Healing 5 (max 25)." },
                ],
                saves: {
                    fort: { bonus: 13, breakdown: "+13 HD (Immune)" },
                    ref: { bonus: 12, breakdown: "+13 HD, -1 Dex" },
                    will: { bonus: 13, breakdown: "+13 HD" },
                },
                abilities: { str: 52, dex: 8, con: 0, int: 0, wis: 11, cha: 1 },
                skills: [],
                feats: [
                    { name: "Power Attack", description: "" },
                    { name: "Cleave", description: "" },
                    { name: "Great Cleave", description: "" },
                    { name: "Improved Sunder", description: "" },
                    { name: "Awesome Blow", description: "" },
                    { name: "Epic Toughness", description: "+30 HP (x3)." },
                    { name: "Armor Skin", description: "+1 natural armor (x3)." },
                    { name: "Epic Prowess", description: "+1 to all attacks (x2)." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "N/A",
                    items: []
                }
            }
        },
    ]
};
