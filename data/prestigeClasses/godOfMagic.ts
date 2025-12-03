// data/prestigeClasses/godOfMagic.ts
import { PrestigeClass } from '../../types';

export const godOfMagic: PrestigeClass = {
    name: "God of Magic",
    description: "The God of Magic is a being who has transcended the mere casting of spells to become a living font of arcane power, a fundamental law of the magical cosmos.",
    requirements: [
        "Must have completed the Archmage prestige class.",
        "Feats: Epic Spellcasting, Ignore Material Components.",
        "Skills: Spellcraft 40 ranks, Knowledge (arcana) 40 ranks."
    ],
    prerequisites: {
        skills: { "Spellcraft": 40, "Knowledge (arcana)": 40 },
        feats: ["Epic Spellcasting", "Ignore Material Components"],
        special: "Archmage class features"
    },
    hitDie: 6,
    skillPoints: 4,
    classSkills: ["Concentration", "Craft", "Knowledge (all)", "Spellcraft", "Use Magic Device"],
    bab: 'poor',
    saves: { fort: 'poor', ref: 'poor', will: 'good' },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "Advances your existing arcane spellcasting progression at every level." },
      { level: 1, name: "One with Magic", description: "You are immune to all spells of 6th level or lower. You gain a +2 inherent bonus to your primary spellcasting statistic." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic spellcasting feat." },
      { level: 3, name: "Metamagic Freedom", description: "Twice per day, you can apply any metamagic feat you know to a spell without increasing its spell level or casting time." },
      { level: 4, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to your primary spellcasting statistic." },
      { level: 5, name: "Perfect Counterspell", description: "You can counterspell any spell without needing to ready an action, as an immediate action, as long as you have a spell of the appropriate level available." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic spellcasting feat." },
      { level: 7, name: "One with Magic", description: "Your immunity extends to all spells of 9th level or lower." },
      { level: 8, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to your primary spellcasting statistic." },
      { level: 9, name: "Metamagic Freedom", description: "You can now use Metamagic Freedom five times per day." },
      { level: 10, name: "Apotheosis of Magic", description: "You gain a Divine Rank of 1. You become a quasi-deity of magic. Once per day, you can cast the epic spell 'Unravel Reality', destroying all magic in a 1-mile radius." },
    ],
};
