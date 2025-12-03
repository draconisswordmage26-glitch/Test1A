// data/prestigeClasses/godOfTheWild.ts
import { PrestigeClass } from '../../types';

export const godOfTheWild: PrestigeClass = {
    name: "God of the Wild",
    description: "The God of the Wild is a being who has transcended their physical form to become a primal god of nature. They can assume the form of any creature, command the elements, and their rage is the fury of the storm and the earthquake.",
    requirements: [
        "Must have completed the All-Beast or Genesis Avatar prestige class.",
        "Feats: Epic Spellcasting (to gain Druid spells if not already a caster), Natural Spell.",
        "Skills: Knowledge (nature) 40 ranks, Survival 40 ranks."
    ],
    prerequisites: {
        skills: { "Knowledge (nature)": 40, "Survival": 40 },
        feats: ["Epic Spellcasting", "Natural Spell"],
        special: "All-Beast or Genesis Avatar class features"
    },
    hitDie: 12,
    skillPoints: 6,
    classSkills: ["Concentration", "Handle Animal", "Heal", "Knowledge (nature)", "Listen", "Spot", "Spellcraft", "Survival"],
    bab: 'good',
    saves: { fort: 'good', ref: 'good', will: 'good' },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing divine spellcasting progression at every level." },
      { level: 1, name: "Primal Form", description: "You are immune to polymorph and petrification. You gain a +2 inherent bonus to a physical ability score of your choice." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 3, name: "One with Nature", description: "You can speak with all animals and plants, and you can use 'Transport via Plants' at will." },
      { level: 4, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to a physical ability score." },
      { level: 5, name: "Master of the Wild", description: "Your Wild Shape ability allows you to assume the form of any creature (as 'Shapechange'), and you can change forms as a free action." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 7, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to a physical ability score." },
      { level: 8, "name": "Nature's Wrath", "description": "You can cast 'Storm of Vengeance' or 'Earthquake' as a spell-like ability, at will." },
      { level: 9, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 10, name: "Apotheosis of the Wild", description: "You gain a Divine Rank of 1. You become a quasi-deity of nature, animals, and the elements. You can no longer be permanently killed as long as the natural world exists." },
    ],
};
