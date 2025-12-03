// data/prestigeClasses/godKing.ts
import { PrestigeClass } from '../../types';

export const godKing: PrestigeClass = {
    name: "God-King",
    description: "The God-King is a being whose right to rule is absolute and divinely appointed. Their commands are law, their presence an inspiration that can forge an empire.",
    requirements: [
        "Must have completed the Legendary Leader prestige class.",
        "Feats: Epic Reputation, Great Charisma x3.",
        "Skills: Diplomacy 40 ranks, Intimidate 40 ranks."
    ],
    prerequisites: {
        skills: { "Diplomacy": 40, "Intimidate": 40 },
        feats: ["Epic Reputation", "Great Charisma"],
        special: "Legendary Leader class features"
    },
    hitDie: 12,
    skillPoints: 8,
    classSkills: ["Bluff", "Diplomacy", "Intimidate", "Knowledge (nobility)", "Perform", "Sense Motive"],
    bab: 'average',
    saves: { fort: 'good', ref: 'poor', will: 'good' },
    features: [
      { level: 1, name: "Aura of Absolute Command", description: "Your Marshal and Legendary Leader auras now affect all allies on the same plane. Enemies affected by your auras must make a Will save or attack their nearest ally. You gain a +2 inherent bonus to Charisma." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 3, name: "Divine Right", description: "You are immune to all compulsion and mind-affecting effects. Any attempt to scry on you automatically fails." },
      { level: 4, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to Charisma." },
      { level: 5, name: "One with the Kingdom", description: "You cannot be killed as long as your capital city stands and your people remain loyal. If struck down, you will reform in your throne room 24 hours later." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 7, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to Charisma." },
      { level: 8, "name": "Imperial Edict", "description": "Once per day, you can issue a command that functions as a 'Mass Hold Monster' spell with a range of 1 mile (DC 30 + class level + Cha mod)." },
      { level: 9, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 10, name: "Apotheosis of Sovereignty", description: "You gain a Divine Rank of 1. You become a quasi-deity of law, leadership, and civilization. You can grant spells to your followers and your kingdom becomes your divine domain." },
    ],
};
