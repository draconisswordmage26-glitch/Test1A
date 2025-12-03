// data/prestigeClasses/allBeast.ts
import { PrestigeClass } from '../../types';

export const allBeast: PrestigeClass = {
    name: "All-Beast",
    description: "The All-Beast is the ultimate shapeshifter, a being who has mastered the forms of all living things and can now combine their traits to create new, perfect forms. They are a living catalogue of all of life's potential.",
    requirements: [
        "Skills: Disguise 30 ranks, Knowledge (nature) 30 ranks.",
        "Feats: Metamorphic Transfer.",
        "Special: Master of Many Forms 'Aberrant Wild Shape' or 'Outsider Wild Shape' class feature."
    ],
    prerequisites: {
        skills: { "Disguise": 30, "Knowledge (nature)": 30 },
        feats: ["Metamorphic Transfer"],
        special: "Aberrant Wild Shape or Outsider Wild Shape"
    },
    hitDie: 12,
    skillPoints: 6,
    classSkills: ["Balance", "Bluff", "Climb", "Disguise", "Handle Animal", "Hide", "Jump", "Knowledge (nature)", "Move Silently", "Survival", "Swim"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'poor'
    },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Perfect Form", description: "When you assume a form, you gain a +8 enhancement bonus to all its physical ability scores (Str, Dex, Con)." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus feat from the list of epic wild shape feats." },
      { level: 3, name: "Amalgam Form (Ex)", description: "You can apply any number of extraordinary special attacks from previous forms to your current form." },
      { level: 4, name: "Assume God-Form", description: "You can now assume the form of magical beasts or outsiders of any HD." },
      { level: 5, name: "Perfect Form", description: "The enhancement bonus increases to +12." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus feat from the list of epic wild shape feats." },
      { level: 7, name: "Amalgam Form (Su)", description: "You can now apply any number of supernatural special attacks from previous forms to your current form." },
      { level: 8, name: "Assume Dragon-Form", description: "You can now assume the form of true dragons of any age category." },
      { level: 9, name: "Perfect Form", description: "The enhancement bonus increases to +16." },
      { level: 10, name: "One with the Pattern", description: "You can now assume the form of any corporeal creature, regardless of type or HD. You can create a new form by combining the base statistics of one creature with the abilities (Ex, Su, and Sp) of up to five others." },
    ],
    progression: ["Druid", "Master of Many Forms"],
};