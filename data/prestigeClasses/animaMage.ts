// data/prestigeClasses/animaMage.ts
import { PrestigeClass } from '../../types';

export const animaMage: PrestigeClass = {
    name: "Anima Mage",
    description: "The anima mage is a spellcaster who has learned to fuel their arcane magic with the power of bound vestiges. They are masters of both soul binding and spellcasting, weaving the two arts together into a unique and powerful synthesis.",
    requirements: [
        "Skills: Knowledge (arcana) 4 ranks, Knowledge (the planes) 4 ranks.",
        "Spells: Ability to cast 2nd-level arcane spells.",
        "Special: Soul Binding class feature."
    ],
    prerequisites: {
        skills: { "Knowledge (arcana)": 4, "Knowledge (the planes)": 4 },
        spells: { arcane: 2 },
        special: "Soul Binding class feature"
    },
    hitDie: 4,
    skillPoints: 2,
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Profession", "Sense Motive", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Vestige Metamagic", description: "Once per day, you can apply a metamagic feat you know to a spell you are casting by temporarily expelling a bound vestige." },
      { level: 2, name: "Spellcasting", description: "Advances arcane spellcasting." },
      { level: 3, name: "Soul Binding", description: "Advances soul binding." },
      { level: 4, name: "Spellcasting", description: "Advances arcane spellcasting." },
      { level: 5, name: "Soul Binding", description: "Advances soul binding." },
      { level: 6, name: "Spellcasting", description: "Advances arcane spellcasting." },
      { level: 7, name: "Soul Binding", description: "Advances soul binding." },
      { level: 8, name: "Spellcasting", description: "Advances arcane spellcasting." },
      { level: 9, name: "Soul Binding", description: "Advances soul binding." },
      { level: 10, name: "Vestige Casting", description: "You can choose to lose a prepared spell to gain one of the spell-like abilities of a bound vestige for the day." },
    ],
};