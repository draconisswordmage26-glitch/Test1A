// data/prestigeClasses/blackguard.ts
import { PrestigeClass } from '../../types';

export const blackguard: PrestigeClass = {
    name: "Blackguard",
    description: "The blackguard is a vile champion of evil, a dark reflection of the paladin. They command the undead, smite the good, and serve the darkest powers of the multiverse.",
    requirements: [
        "Base Attack Bonus: +6",
        "Skills: Hide 5 ranks, Knowledge (religion) 2 ranks.",
        "Feats: Power Attack, Cleave.",
        "Alignment: Any evil."
    ],
    prerequisites: {
        bab: 6,
        skills: { "Hide": 5, "Knowledge (religion)": 2 },
        feats: ["Power Attack", "Cleave"],
        alignment: ["Lawful Evil", "Neutral Evil", "Chaotic Evil"]
    },
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Hide", "Intimidate", "Knowledge (religion)", "Profession", "Ride"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'poor'
    },
    features: [
      { level: 1, name: "Aura of Evil", description: "Has a powerful evil aura." },
      { level: 1, name: "Detect Good", description: "Can detect good at will." },
      { level: 2, name: "Smite Good", description: "1/day, can add Cha bonus to attack and level to damage against a good foe." },
      { level: 2, name: "Dark Blessing", description: "Adds Charisma bonus to all saving throws." },
      { level: 3, name: "Command Undead", description: "Can command or rebuke undead as a cleric of two levels lower." },
      { level: 3, name: "Aura of Despair", description: "Enemies within 10 ft. take a -2 penalty on all saves." },
      { level: 4, name: "Sneak Attack", description: "Gains +1d6 sneak attack damage." },
      { level: 5, name: "Fiendish Servant", description: "Gains a fiendish animal companion." },
      { level: 7, name: "Sneak Attack", description: "Sneak attack damage increases to +2d6." },
      { level: 10, name: "Smite Good", description: "Can use Smite Good an additional time per day." },
      { level: 10, name: "Sneak Attack", description: "Sneak attack damage increases to +3d6." },
    ],
    progression: ['Fighter'],
};