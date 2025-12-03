
// data/antagonists/cr_33_37/theInviolate/stats/index.ts
import { Monster } from '../../../../types';

export const theInviolateStats: Monster = {
    name: "The Inviolate",
    description: "The ultimate expression of the Empæryen's hatred for arcane magic is the Inviolate. This colossal construct is forged from a lattice of Obdurium and the petrified souls of a thousand executed archmages. It is not just immune to magic; it consumes it. Its slow, inexorable advance across a battlefield is a death sentence for any wizard, sorcerer, or warlock, its very presence unraveling their spells and draining their power. It is a walking, silent rebuke to the arcane arts.",
    roleplayGuide: [],
    builds: [
        {
            level: 57, // ECL
            title: "The Arcane Void",
            class: "Construct 57",
            hitDice: "57d10+80 (Max HD) + 120 (Epic Toughness) = 770 hp",
            challengeRating: 38,
            speed: "30 ft.",
            armorClass: {
                total: 70,
                breakdown: "(-4 size, -1 Dex, +50 natural, +15 armor)",
                touch: 5,
                flatFooted: 70,
            },
            initiative: {
                bonus: -1,
                breakdown: "(-1 Dex)",
            },
            buildNotes: [
                "A CR 38 anti-arcane specialist.",
                "Its primary ability is its 'Mobile Antimagic Field', which completely shuts down any arcane spellcasters nearby.",
                "It is designed to be the ultimate mage-slayer, a puzzle that cannot be solved with conventional magic."
            ],
            sheet: {
                baseAtk: 42,
                grapple: 68,
                fullAttack: [
                    { name: "2 Slams", bonus: "+60", damage: "4d8+26", crit: "20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Aura:</b> Constant 300 ft. 'Mobile Antimagic Field'.",
                    "<b>Spell Absorption:</b> Heals 5 HP for every level of an arcane spell that fails in its aura.",
                    "<b>Full Attack:</b> 2 slams (+60, avg. 53 dmg each).",
                    "<b>Primary Tactic:</b> Advances slowly towards the most powerful arcane caster. Its aura neutralizes them completely. It will then methodically crush them in melee. It is a slow but inevitable death for any magic-user.",
                ],
                spaceReach: "20 ft.",
                specialAttacks: [
                    { name: "Unravel Magic", type: "Su", description: "3/day, can cast a targeted 'Mordenkainen's Disjunction' (CL 40) as a standard action." },
                ],
                specialQualities: [
                    { name: "Mobile Antimagic Field", type: "Su", description: "The Inviolate projects an 'Antimagic Field' in a 300-foot radius. This field only affects arcane magic and devices. It is immune to its own field." },
                    { name: "Spell Absorption", type: "Su", description: "Whenever an arcane spell fails within its aura, the Inviolate is healed for 5 hit points per level of the spell." },
                    { name: "DR 30/epic and adamantine", type: "Ex", description: "" },
                    { name: "Hardness", type: "Ex", description: "30" },
                    { name: "Construct Traits", type: "Ex", description: "" },
                ],
                saves: {
                    fort: { bonus: 19, breakdown: "+19 HD (Immune)" },
                    ref: { bonus: 18, breakdown: "+19 HD, -1 Dex" },
                    will: { bonus: 19, breakdown: "+19 HD" },
                },
                abilities: { str: 62, dex: 8, con: 0, int: 0, wis: 11, cha: 1 },
                skills: [],
                feats: [
                    { name: "Power Attack", description: "Trade attack for damage." },
                    { name: "Cleave", description: "Extra attack on felling a foe." },
                    { name: "Great Cleave", description: "More Cleave attacks." },
                    { name: "Improved Sunder", description: "+4 to sunder, no AoO." },
                    { name: "Awesome Blow", description: "Send smaller foes flying." },
                    { name: "Epic Toughness", description: "+30 HP (x4)." },
                    { name: "Armor Skin", description: "+1 to natural armor (x5)." },
                    { name: "Epic Prowess", description: "+1 to all attacks (x3)." },
                    { name: "Great Strength", description: "+1 to Strength (x5)." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Unique",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "Artifact level",
                    items: [
                        { name: "+10 Adamantine Armor Plating", cost: "Artifact Component", description: "" },
                    ]
                }
            }
        },
    ]
};
