// data/prestigeClasses/godOfRage.ts
import { PrestigeClass } from '../../types';

export const godOfRage: PrestigeClass = {
    name: "God of Rage",
    description: "This being has transcended mortal fury to become a primal god of rage. Its anger is a creative and destructive force, the power that grinds mountains to dust and forges new stars from the debris.",
    requirements: [
        "Must have completed the Frenzied Berserker or World-Smasher prestige class.",
        "Feats: Epic Toughness, Great Strength x5.",
        "Special: Must have the Rage or Frenzy class feature."
    ],
    prerequisites: {
        feats: ["Epic Toughness", "Great Strength"],
        special: "Rage or frenzy ability, AND Frenzied Berserker or World-Smasher class features"
    },
    hitDie: 20,
    skillPoints: 4,
    classSkills: ["Climb", "Intimidate", "Jump", "Survival"],
    bab: 'good',
    saves: { fort: 'good', ref: 'poor', will: 'good' },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Primal Essence", description: "You are immune to polymorph, petrification, and any effect that would alter your form. You gain a +2 inherent bonus to Strength." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Barbarian or Fighter list." },
      { level: 3, name: "Apocalyptic Rage", description: "When you enter a rage or frenzy, you can choose to create an 'Earthquake' effect centered on yourself that does not affect you." },
      { level: 4, name: "Inherent Bonus", description: "You gain a +2 inherent bonus to Constitution." },
      { level: 5, name: "Unstoppable Fury", description: "Your rage/frenzy cannot be ended prematurely by any means, and you are immune to fatigue and exhaustion." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 7, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to Strength." },
      { level: 8, "name": "World-Breaker's Blow", "description": "Your melee attacks bypass all hardness." },
      { level: 9, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 10, name: "Apotheosis of Wrath", description: "You gain a Divine Rank of 1. You become a quasi-deity of rage and strength. Once per day, you can perform the 'Star-Shattering Blow', dealing an extra 100d6 damage on a single attack." },
    ],
};
