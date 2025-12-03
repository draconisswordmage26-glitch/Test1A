// data/prestigeClasses/archmage.ts
import { PrestigeClass } from '../../types';

export const archmage: PrestigeClass = {
    name: "Archmage",
    description: "The archmage is a wizard or sorcerer who has achieved a supreme mastery of the arcane arts. They can manipulate the very fabric of magic, creating effects that are beyond the reach of lesser spellcasters.",
    requirements: [
        "Skills: Knowledge (arcana) 15 ranks, Spellcraft 15 ranks.",
        "Feats: Skill Focus (Spellcraft), Spell Focus in two schools.",
        "Spells: Ability to cast 7th-level arcane spells, including at least five from one school."
    ],
    prerequisites: {
        skills: { "Knowledge (arcana)": 15, "Spellcraft": 15 },
        feats: ["Skill Focus (Spellcraft)", "Spell Focus"],
        spells: { arcane: 7 },
    },
    hitDie: 4,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Knowledge (all)", "Profession", "Scry", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "High Arcana", description: "At each level, you can choose a high arcana ability. To select one, you must permanently sacrifice one of your spell slots." },
        { level: 2, name: "High Arcana", description: "Select another high arcana." },
        { level: 3, name: "High Arcana", description: "Select another high arcana." },
        { level: 4, name: "High Arcana", description: "Select another high arcana." },
        { level: 5, name: "High Arcana", description: "Select another high arcana." }
    ],
    progression: ['Wizard'],
};