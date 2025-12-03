// data/prestigeClasses/swiftblade.ts
import { PrestigeClass } from '../../types';

export const swiftblade: PrestigeClass = {
    name: "Swiftblade",
    description: "The swiftblade is a gish who has dedicated their art to the mastery of the Haste spell. They can move and attack with blinding speed, becoming a blur of motion and steel.",
    requirements: [
        "Base Attack Bonus: +3",
        "Feats: Dodge, Mobility, Combat Casting",
        "Spells: Must be able to cast 'Haste' and at least one other 1st-level arcane spell."
    ],
    prerequisites: {
        bab: 3,
        feats: ["Dodge", "Mobility", "Combat Casting"],
        spells: { arcane: 3 },
        special: "Ability to cast Haste"
    },
    hitDie: 8,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Jump", "Spellcraft", "Tumble"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'poor'
    },
    features: [
      { level: 1, name: "Swift Surge", description: "When under the effects of Haste, gain a +1 bonus on attack rolls." },
      { level: 2, name: "Blurred Alacrity", description: "When under Haste, gain concealment (20% miss chance)." },
      { level: 3, name: "Sudden Casting", description: "Can cast a personal-range spell as a swift action 1/day." },
      { level: 4, name: "Arcane Reflexes", description: "Add your caster level to your initiative checks." },
      { level: 5, name: "Evasive Celerity", description: "When hasted, you gain the Evasion ability." },
    ],
    advancesArcane: true,
    progression: ['Wizard'],
};