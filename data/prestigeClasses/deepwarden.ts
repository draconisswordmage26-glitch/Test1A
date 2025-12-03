// data/prestigeClasses/deepwarden.ts
import { PrestigeClass } from '../../types';

export const deepwarden: PrestigeClass = {
    name: "Deepwarden",
    description: "A dwarven defender of the ancient underground citadels, the deepwarden is a master of defensive combat in tight quarters. They are unmovable walls of stone and steel, experts at holding a line against the horrors of the deep.",
    requirements: [
        "Race: Dwarf.",
        "Base Attack Bonus: +7.",
        "Feats: Dodge, Toughness.",
        "Special: Defensive Stance class feature."
    ],
    prerequisites: {
        bab: 7,
        feats: ["Dodge", "Toughness"],
        special: "Defensive Stance|Must be a Dwarf."
    },
    hitDie: 12,
    skillPoints: 2,
    classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Listen", "Search", "Spot"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Defensive Stance", description: "Improves uses per day of defensive stance." },
      { level: 1, name: "AC Bonus", description: "Gains a +1 dodge bonus to AC." },
      { level: 2, name: "Stoneward", description: "Gain a +2 bonus on saves against spells from the earth subtype." },
      { level: 3, name: "Damage Reduction", description: "Gains DR 1/-." },
      { level: 4, "name": "AC Bonus", "description": "Dodge bonus to AC increases to +2." },
      { level: 5, name: "Improved Defensive Stance", description: "Gains +2 to Str and Con while in defensive stance." },
      { level: 6, name: "Damage Reduction", description: "DR increases to 2/-." },
      { level: 7, "name": "AC Bonus", "description": "Dodge bonus to AC increases to +3." },
      { level: 8, name: "Trap Sense", description: "Gains +2 on saves vs traps." },
      { level: 9, name: "Damage Reduction", description: "DR increases to 3/-." },
      { level: 10, name: "Mobile Defense", description: "Can take a 5-foot step while in a defensive stance." },
    ],
};