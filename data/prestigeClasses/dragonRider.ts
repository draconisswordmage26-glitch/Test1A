// data/prestigeClasses/dragonRider.ts
import { PrestigeClass } from '../../types';

export const dragonRider: PrestigeClass = {
    name: "Dragon Rider",
    description: "The dragon rider is a warrior who has forged a bond with a dragon, becoming a peerless master of aerial combat. They are the ultimate cavalry, a fusion of rider and mount into a single, devastating weapon of war.",
    requirements: [
        "Base Attack Bonus: +5.",
        "Skills: Handle Animal 8 ranks, Ride 8 ranks.",
        "Feats: Mounted Combat, Ride-By Attack.",
        "Special: Must have a dragon mount."
    ],
    prerequisites: {
        bab: 5,
        skills: { "Handle Animal": 8, "Ride": 8 },
        feats: ["Mounted Combat", "Ride-By Attack"],
        special: "Must have a dragon mount."
    },
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Diplomacy", "Handle Animal", "Heal", "Intimidate", "Jump", "Listen", "Ride", "Spot"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'poor'
    },
    features: [
      { level: 1, name: "Bonus Feat", description: "Gain a bonus feat from a select list (e.g., Spirited Charge)." },
      { level: 2, name: "Dragon Empathy", description: "Can communicate telepathically with their dragon mount." },
      { level: 3, name: "Armored Mount", description: "Your dragon mount is considered proficient with all armor." },
      { level: 4, name: "Bonus Feat", description: "Gain another bonus feat." },
      { level: 5, name: "Shared Fortitude", description: "Your mount gains your Fortitude save bonus if it is higher." },
      { level: 6, name: "Coordinated Charge", description: "When you charge, your mount can also make a full attack at the end of the charge." },
      { level: 7, name: "Bonus Feat", description: "Gain another bonus feat." },
      { level: 8, name: "Shared Evasion", description: "Your mount gains the Evasion ability." },
      { level: 9, name: "Mind and Body", description: "You and your mount are immune to fear effects." },
      { level: 10, name: "One with the Wyrm", description: "You and your mount act on the same initiative count and can share spells cast by either of you." },
    ],
};
