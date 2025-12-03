// data/prestigeClasses/celestialParagon.ts
import { PrestigeClass } from '../../types';

export const celestialParagon: PrestigeClass = {
    name: "Celestial Paragon",
    description: "The Celestial Paragon is a good-aligned outsider who has achieved a state of physical and spiritual perfection, becoming a true demigod and a living embodiment of the virtues of the upper planes.",
    requirements: [
        "Type: Outsider (Good).",
        "Base Attack Bonus: +21.",
        "Feats: Great Smiting, Armor Skin.",
        "Alignment: Any Good."
    ],
    prerequisites: {
        bab: 21,
        feats: ["Great Smiting", "Armor Skin"],
        alignment: ["Lawful Good", "Neutral Good", "Chaotic Good"],
        type: "Outsider (Good)",
    },
    hitDie: 12,
    skillPoints: 6,
    classSkills: ["Climb", "Concentration", "Craft", "Diplomacy", "Heal", "Intimidate", "Jump", "Knowledge (religion)", "Sense Motive"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Aura of Sanctity", description: "Allies within 60 ft. gain a +4 sacred bonus on AC and saves, and are under a constant Magic Circle against Evil effect." },
      { level: 2, name: "Divine Body", description: "Your natural armor bonus increases by 3." },
      { level: 3, name: "Smite Evil", description: "Gain three additional uses of Smite Evil per day." },
      { level: 4, name: "Paragon of Virtue", description: "Gain a +4 inherent bonus to an ability score of your choice." },
      { level: 5, name: "Holy Strike", description: "Your attacks are treated as having the 'holy' and 'axiomatic'/'anarchic' properties and deal an additional 4d6 holy damage." },
      { level: 6, name: "Divine Body", description: "Your natural armor bonus increases by another 3." },
      { level: 7, name: "Smite Evil", description: "Gain another three additional uses of Smite Evil per day. Your smites now bypass all DR." },
      { level: 8, name: "Paragon of Virtue", description: "Gain a +4 inherent bonus to a different ability score." },
      { level: 9, name: "Aura of Divine Fury", description: "Allies in your aura gain your Charisma bonus as a sacred bonus on attack and damage rolls against evil creatures." },
      { level: 10, name: "Divine Apotheosis", description: "You gain a Divine Rank of 0. You are immune to death effects, ability drain, and negative energy. You can only be permanently slain on your home plane by a creature of at least equal divine rank." },
    ],
    progression: ["Warblade"],
};