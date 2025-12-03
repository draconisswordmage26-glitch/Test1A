// data/prestigeClasses/tempest.ts
import { PrestigeClass } from '../../types';

export const tempest: PrestigeClass = {
    name: "Tempest",
    description: "The Tempest is a being who has become one with the storm. They are primal forces of nature, their thoughts the howling wind and their emotions the crackling lightning. They can command the weather on a continental scale.",
    requirements: [
        "Type: Elemental or Outsider (Air).",
        "Skills: Knowledge (nature) 30 ranks, Survival 30 ranks.",
        "Special: Stormcaster's 'Storm Elemental' Wild Shape or similar ability."
    ],
    hitDie: 12,
    skillPoints: 4,
    classSkills: ["Concentration", "Craft", "Intimidate", "Knowledge (nature)", "Listen", "Spot", "Survival"],
    bab: 'average',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing spellcasting progression at every level." },
      { level: 1, name: "One with the Storm", description: "You are immune to all wind and electricity effects. Your electrical and sonic attacks deal an extra 5d6 damage." },
      { level: 2, name: "Voice of Thunder", description: "You can use Greater Shout at will as a spell-like ability." },
      { level: 3, name: "Call Hurricane", description: "3/day, you can cast Control Weather to create continent-spanning hurricane-force winds that last for a week." },
      { level: 4, name: "Living Lightning", description: "At will, you can transform into a bolt of lightning to travel, as the spell." },
      { level: 5, name: "Eye of the Hurricane", description: "You can create a permanent hurricane 10 miles in diameter, with a calm eye at its center where you reside. You can move this storm at will." },
      { level: 6, name: "One with the Storm", description: "Your electrical and sonic damage bonus increases to 10d6." },
      { level: 7, name: "Deafening Thunder", description: "Your Voice of Thunder now also stuns creatures for 1d4 rounds on a failed save." },
      { level: 8, name: "Call Epic Storm", description: "Your Call Hurricane ability can now affect an entire hemisphere of a planet." },
      { level: 9, name: "Perfect Storm", description: "You are constantly surrounded by a Whirlwind that deals 8d6 damage and a Storm of Vengeance effect." },
      { level: 10, name: "World Storm", description: "Once per month, you can create a storm that covers an entire planet, altering its climate permanently." },
    ],
};