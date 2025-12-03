// data/prestigeClasses/godOfCausality.ts
import { PrestigeClass } from '../../types';

export const godOfCausality: PrestigeClass = {
    name: "God of Causality",
    description: "The God of Causality is a being who has transcended the role of observing fate to become its ultimate arbiter. They are a living nexus of time and probability, their every thought a law of the multiverse.",
    requirements: [
        "Must have completed the Fate-Ender prestige class.",
        "Feats: Epic Spellcasting, Epic Will.",
        "Skills: Knowledge (the planes) 40 ranks, Sense Motive 40 ranks."
    ],
    prerequisites: {
        skills: { "Knowledge (the planes)": 40, "Sense Motive": 40 },
        feats: ["Epic Spellcasting", "Epic Will"],
        special: "Fate-Ender class features"
    },
    hitDie: 8,
    skillPoints: 6,
    classSkills: ["Concentration", "Decipher Script", "Diplomacy", "Knowledge (any)", "Profession", "Sense Motive", "Spellcraft"],
    bab: 'poor',
    saves: { fort: 'poor', ref: 'good', will: 'good' },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "Advances your existing spellcasting progression at every level." },
      { level: 1, name: "One with the Timeline", description: "You are immune to all paradoxes and time-altering effects. You gain a +2 inherent bonus to Wisdom." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 3, name: "Rewrite Causality", description: "Once per day, you can force the reroll of any d20 roll that has occurred on the same plane, as the epic psionic power. This can be used after the result is known." },
      { level: 4, name: "Inherent Bonus", description: "You gain a +2 inherent bonus to Intelligence." },
      { level: 5, name: "Isolate", description: "You can cast the epic spell 'Isolate' once per day as a spell-like ability." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 7, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to Wisdom." },
      { level: 8, name: "Unravel Reality", description: "You can use 'Unravel Reality' once per day, as the epic spell." },
      { level: 9, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 10, name: "Apotheosis of Fate", description: "You gain a Divine Rank of 1. You become a quasi-deity of fate and time. Once per year, you can cast 'Rewrite History' with no XP cost, but the consequences are still vast and unpredictable." },
    ],
};
