// data/prestigeClasses/mysticTheurge.ts
import { PrestigeClass } from '../../types';

export const mysticTheurge: PrestigeClass = {
    name: "Mystic Theurge",
    description: "The mystic theurge is a powerful spellcaster who has dedicated themselves to mastering both arcane and divine magic. They weave spells from both disciplines into a single, potent force, commanding a versatility that few can match.",
    requirements: [
        "Skills: Knowledge (arcana) 6 ranks, Knowledge (religion) 6 ranks.",
        "Spells: Ability to cast 2nd-level arcane spells and 2nd-level divine spells."
    ],
    prerequisites: {
        skills: { "Knowledge (arcana)": 6, "Knowledge (religion)": 6 },
        spells: { arcane: 2, divine: 2 },
    },
    hitDie: 4,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (arcana)", "Knowledge (religion)", "Profession", "Spellcraft", "Sense Motive"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Spellcasting", description: "At each level, you gain new spells per day as if you had also gained a level in an arcane spellcasting class and a divine spellcasting class you belonged to before adding the prestige class." },
      { level: 2, name: "Spellcasting", description: "Advances arcane and divine spellcasting." },
      { level: 3, name: "Spellcasting", description: "Advances arcane and divine spellcasting." },
      { level: 4, name: "Spellcasting", description: "Advances arcane and divine spellcasting." },
      { level: 5, name: "Spellcasting", description: "Advances arcane and divine spellcasting." },
      { level: 6, name: "Spellcasting", description: "Advances arcane and divine spellcasting." },
      { level: 7, name: "Spellcasting", description: "Advances arcane and divine spellcasting." },
      { level: 8, name: "Spellcasting", description: "Advances arcane and divine spellcasting." },
      { level: 9, name: "Spellcasting", description: "Advances arcane and divine spellcasting." },
      { level: 10, name: "Spellcasting", description: "Advances arcane and divine spellcasting." },
    ],
    advancesArcane: true,
    advancesDivine: true,
    progression: ['Wizard', 'Cleric'],
};