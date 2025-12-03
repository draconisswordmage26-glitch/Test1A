// data/prestigeClasses/abjurantChampion.ts
import { PrestigeClass } from '../../types';

export const abjurantChampion: PrestigeClass = {
    name: "Abjurant Champion",
    description: "The abjurant champion is a warrior-mage who has learned to blend arcane shields with martial prowess, becoming a protected and deadly combatant.",
    requirements: [
        "Base Attack Bonus: +5.",
        "Feats: Combat Casting.",
        "Spells: Ability to cast 1st-level arcane spells, including at least one abjuration spell."
    ],
    prerequisites: {
        bab: 5,
        feats: ["Combat Casting"],
        spells: { arcane: 1 },
        special: "Must be able to cast at least one abjuration spell."
    },
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Intimidate", "Jump", "Knowledge (arcana)", "Ride", "Spellcraft"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Abjurant Armor", description: "Your abjuration spells that grant an armor or shield bonus have their bonus increased by your class level." },
      { level: 1, name: "Spellcasting", description: "At each level, you advance your arcane spellcasting." },
      { level: 2, name: "Swift Abjuration", description: "You can cast abjuration spells as a swift action." },
      { level: 3, name: "Arcane Boost", description: "You can sacrifice a spell to gain a bonus on attack and damage rolls." },
      { level: 4, name: "Extended Abjuration", description: "The duration of your abjuration spells is doubled." },
      { level: 5, name: "Arcane Strike", description: "You can sacrifice a spell to imbue your weapon with magical energy, dealing extra damage." },
    ],
    advancesArcane: true,
};
