// data/prestigeClasses/eldritchKnight.ts
import { PrestigeClass } from '../../types';

export const eldritchKnight: PrestigeClass = {
    name: "Eldritch Knight",
    description: "The eldritch knight is the quintessential warrior-mage, a combatant who seamlessly blends the martial prowess of a fighter with the arcane might of a wizard. They are a versatile and deadly force on the battlefield.",
    requirements: [
        "Proficiency: Martial weapon proficiency.",
        "Spells: Ability to cast 3rd-level arcane spells."
    ],
    prerequisites: {
        spells: { arcane: 3 },
        special: "Martial weapon proficiency"
    },
    hitDie: 8,
    skillPoints: 2,
    classSkills: ["Climb", "Concentration", "Craft", "Decipher Script", "Intimidate", "Jump", "Knowledge (arcana)", "Knowledge (nobility and royalty)", "Ride", "Sense Motive", "Spellcraft", "Swim"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'poor'
    },
    features: [
      { level: 1, name: "Bonus Feat", description: "Gain a bonus feat from the Fighter bonus feat list." },
      { level: 2, name: "Spellcasting", description: "At levels 2-10, you advance your arcane spellcasting as if you had gained a level in your arcane spellcasting class." },
      { level: 3, name: "Spellcasting", description: "Advances arcane spellcasting." },
      { level: 4, name: "Spellcasting", description: "Advances arcane spellcasting." },
      { level: 5, name: "Spellcasting", description: "Advances arcane spellcasting." },
      { level: 6, name: "Spellcasting", description: "Advances arcane spellcasting." },
      { level: 7, name: "Spellcasting", description: "Advances arcane spellcasting." },
      { level: 8, name: "Spellcasting", description: "Advances arcane spellcasting." },
      { level: 9, name: "Spellcasting", description: "Advances arcane spellcasting." },
      { level: 10, name: "Spellcasting", description: "Advances arcane spellcasting." },
    ],
    advancesArcane: true,
    progression: ['Fighter', 'Wizard'],
};