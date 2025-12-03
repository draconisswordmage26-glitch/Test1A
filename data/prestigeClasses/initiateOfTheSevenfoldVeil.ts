// data/prestigeClasses/initiateOfTheSevenfoldVeil.ts
import { PrestigeClass } from '../../types';

export const initiateOfTheSevenfoldVeil: PrestigeClass = {
    name: "Initiate of the Sevenfold Veil",
    description: "The Initiate of the Sevenfold Veil is a master of abjuration, a wizard who can weave prismatic light into impenetrable walls of force and color.",
    requirements: [
        "Skills: Spellcraft 10 ranks, Knowledge (arcana) 10 ranks",
        "Feats: Spell Focus (Abjuration), Greater Spell Focus (Abjuration)",
        "Spells: Must be able to cast at least five abjuration spells, one of which must be 5th level or higher."
    ],
    prerequisites: {
        skills: { "Spellcraft": 10, "Knowledge (arcana)": 10 },
        feats: ["Spell Focus (Abjuration)", "Greater Spell Focus (Abjuration)"],
        spells: { arcane: 5 },
        special: "Must know five abjuration spells."
    },
    hitDie: 4,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Knowledge (all)", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Warding", description: "Can create a personal ward that provides a +1 deflection bonus to AC." },
        { level: 2, name: "Unraveling", description: "Gain a bonus on dispel checks." },
        { level: 3, name: "Veils", description: "Learn to create magical veils that mimic the layers of a 'prismatic wall'." },
        { level: 7, name: "Reactive Warding", description: "Can activate a ward as an immediate action." },
        { level: 10, name: "Kaleidoscopic Doom", description: "Can turn your veils into a devastating offensive weapon." },
    ],
    advancesArcane: true,
    progression: ['Wizard'],
};