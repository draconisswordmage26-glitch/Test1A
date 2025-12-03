// data/prestigeClasses/godMind.ts
import { PrestigeClass } from '../../types';

export const godMind: PrestigeClass = {
    name: "God-Mind",
    description: "The God-Mind is a psionic being who has achieved apotheosis, becoming a true god of thought and creation. Their thoughts are the laws of their own, perfect, alien universe.",
    requirements: [
        "Must have completed the Mind-Bender prestige class.",
        "Feats: Epic Psionic Focus, Great Intelligence x3.",
        "Skills: Psicraft 40 ranks, Knowledge (psionics) 40 ranks."
    ],
    prerequisites: {
        skills: { "Psicraft": 40, "Knowledge (psionics)": 40 },
        feats: ["Epic Psionic Focus", "Great Intelligence"],
        special: "Mind-Bender class features"
    },
    hitDie: 6,
    skillPoints: 4,
    classSkills: ["Concentration", "Knowledge (any)", "Psicraft", "Use Psionic Device"],
    bab: 'poor',
    saves: { fort: 'poor', ref: 'poor', will: 'good' },
    features: [
      { level: 1, name: "Full Manifester Level Progression", description: "Advances your existing psionic manifesting progression at every level." },
      { level: 1, name: "One with the Dream", description: "You cannot be killed by normal means as long as sentient creatures dream. You gain a +2 inherent bonus to Intelligence." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic psionic feat." },
      { level: 3, name: "Create Reality", description: "You can make your psionic illusions real. Once per day, you can declare one illusion power to be permanent and real, as if by a 'Wish' spell." },
      { level: 4, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to Intelligence." },
      { level: 5, name: "Dream Apocalypse", description: "Once per day, you can merge your personal dreamscape with reality in a 10-mile radius, permanently reshaping it according to your will." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic psionic feat." },
      { level: 7, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to Intelligence." },
      { level: 8, "name": "Psychic Omniscience", "description": "You can read the surface thoughts of all creatures on the same plane, bypassing all defenses short of a deity's." },
      { level: 9, name: "Bonus Epic Feat", description: "Gain a bonus epic psionic feat." },
      { level: 10, name: "Apotheosis of Thought", description: "You gain a Divine Rank of 1. You become a quasi-deity of dreams, creation, and psionics. You can grant powers to your followers and create your own divine domain." },
    ],
};
