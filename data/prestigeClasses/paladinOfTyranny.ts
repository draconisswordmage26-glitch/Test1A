// data/prestigeClasses/paladinOfTyranny.ts
import { PrestigeClass } from '../../types';

export const paladinOfTyranny: PrestigeClass = {
    name: "Paladin of Tyranny",
    description: "The paladin of tyranny is an iron-fisted enforcer of a brutal, lawful evil regime. They believe that true order can only be achieved through absolute control and the subjugation of the weak. They are dark champions, their divine power drawn from a god of oppression.",
    requirements: [
        "Base Attack Bonus: +5",
        "Alignment: Lawful Evil",
        "Special: Must serve a lawful evil deity."
    ],
    prerequisites: {
        bab: 5,
        alignment: ["Lawful Evil"],
        special: "Serves a lawful evil deity."
    },
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Intimidate", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Profession", "Ride", "Sense Motive"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Smite Good", description: "1/day, can add Cha bonus to attack and level to damage against a good foe." },
      { level: 1, name: "Detect Good", description: "Can detect good at will." },
      { level: 2, name: "Dark Blessing", description: "Adds Charisma bonus to all saving throws." },
      { level: 3, name: "Aura of Despair", description: "Enemies within 10 ft. take a -2 penalty on all saves." },
      { level: 4, name: "Rebuke Undead", description: "Can rebuke undead as a cleric of three levels lower." },
      { level: 5, name: "Smite Good", description: "Can use Smite Good 2/day." },
      { level: 5, name: "Fiendish Mount", description: "Gains a fiendish warhorse as a mount." },
    ],
};
