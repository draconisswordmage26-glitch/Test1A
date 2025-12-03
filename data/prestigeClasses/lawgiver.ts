// data/prestigeClasses/lawgiver.ts
import { PrestigeClass } from '../../types';

export const lawgiver: PrestigeClass = {
    name: "Lawgiver",
    description: "The Lawgiver has become the living embodiment of martial law, a being whose every move is a perfect expression of unyielding order. They fight not for victory, but to impose a final, unbreakable peace upon a chaotic multiverse.",
    requirements: [
        "Must have completed the Lord of the Nine or Iron Disciplinarian prestige class.",
        "Feats: Epic Leadership, Epic Prowess.",
        "Alignment: Lawful."
    ],
    prerequisites: {
        feats: ["Epic Leadership", "Epic Prowess"],
        special: "Lord of the Nine or Iron Disciplinarian class features",
        alignment: ["Lawful Good", "Lawful Neutral", "Lawful Evil"]
    },
    hitDie: 12,
    skillPoints: 6,
    classSkills: ["Diplomacy", "Intimidate", "Knowledge (the planes)", "Martial Lore", "Sense Motive"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "One with the Law", description: "You are immune to all chaos-descriptor spells and effects. You gain a +2 inherent bonus to an ability score of your choice." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 3, name: "Aura of Perfect Order", description: "Within a 120-foot aura, all d20 rolls (for allies and enemies) are treated as if the result were an 11. Random chance is eliminated." },
      { level: 4, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to an ability score." },
      { level: 5, name: "Strike of Perfect Law", description: "Once per day, you can make a single attack that, if it hits, forces the target to make a Will save (DC 25 + class level + key ability mod) or be permanently affected by an 'Iron Golem' spell, becoming a mindless, lawful automaton under your command." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 7, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to an ability score." },
      { level: 8, "name": "Unbreakable Edict", "description": "You can cast 'Dictum' as a spell-like ability at will. The DC is based on your character level." },
      { level: 9, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 10, "name": "Apotheosis of Law", "description": "You gain a Divine Rank of 1. You become a quasi-deity of law and order. Once per day, you can cast 'Axiomatic Edict' as a spell-like ability." }
    ],
};
