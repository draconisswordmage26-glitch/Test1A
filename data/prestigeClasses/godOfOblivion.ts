// data/prestigeClasses/godOfOblivion.ts
import { PrestigeClass } from '../../types';

export const godOfOblivion: PrestigeClass = {
    name: "God of Oblivion",
    description: "This being has embraced its role as cosmic entropy and become a true god of the void. It is a silent, inevitable apocalypse, the final period at the end of the universe's last sentence.",
    requirements: [
        "Must have completed the World-Ender prestige class.",
        "Feats: Ruinous Rage, Epic Toughness x5.",
        "Special: Must have erased a creature with a CR of 30 or higher from existence."
    ],
    prerequisites: {
        feats: ["Ruinous Rage", "Epic Toughness"],
        special: "World-Ender class features, must have erased a CR 30+ creature"
    },
    hitDie: 20,
    skillPoints: 2,
    classSkills: ["Intimidate", "Knowledge (the planes)", "Survival"],
    bab: 'good',
    saves: { fort: 'good', ref: 'poor', will: 'good' },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "One with the Void", description: "You are immune to all mind-affecting effects and cannot be detected by divination. You gain a +2 inherent bonus to Constitution (or Charisma if undead)." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 3, name: "Absolute Destruction", description: "Any creature or object brought to 0 hit points by your attacks is utterly annihilated, bypassing all immunities." },
      { level: 4, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to Constitution (or Charisma)." },
      { level: 5, name: "Spell Immunity", description: "You become immune to all spells of 9th level or lower." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 7, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to Constitution (or Charisma)." },
      { level: 8, "name": "Lord of Nightmares", "description": "You gain the 'Lord of Nightmares' epic feat, causing an aura of fear and despair." },
      { level: 9, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 10, name: "Apotheosis of Entropy", description: "You gain a Divine Rank of 1, becoming a quasi-deity of oblivion. Once per day, you can cast 'Final Word of the Unmaker' as a spell-like ability." },
    ],
};
