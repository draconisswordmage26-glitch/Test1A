// data/prestigeClasses/godOfDestruction.ts
import { PrestigeClass } from '../../types';

export const godOfDestruction: PrestigeClass = {
    name: "God of Destruction",
    description: "This being has transcended mere physical might to become a conceptual force of destruction. Its rage is a cosmic storm, its charge an extinction-level event.",
    requirements: [
        "Must have completed the World-Smasher prestige class.",
        "Feats: Dire Charge, Great Strength x5.",
        "Special: Must have destroyed an artifact."
    ],
    prerequisites: {
        feats: ["Dire Charge", "Great Strength"],
        special: "World-Smasher class features, must have destroyed an artifact"
    },
    hitDie: 20,
    skillPoints: 2,
    classSkills: ["Intimidate", "Jump", "Survival"],
    bab: 'good',
    saves: { fort: 'good', ref: 'poor', will: 'poor' },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Inevitable Charge", description: "Your charge attacks cannot be intercepted or avoided by any non-deific means. You bypass all miss chances and difficult terrain. You gain a +2 inherent bonus to Strength." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter or Barbarian list." },
      { level: 3, name: "Sunder the Unbreakable", description: "Your sunder attempts can now target and destroy creatures, treating their AC as the object's hardness. A creature sundered this way is destroyed." },
      { level: 4, name: "Inherent Bonus", description: "You gain a +2 inherent bonus to Constitution." },
      { level: 5, name: "Primal Force", description: "You are immune to any effect that would stop your movement or alter your form, including petrification." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 7, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to Strength." },
      { level: 8, name: "Apocalyptic Rage", description: "Your rage can now shatter landscapes. When you enter a rage, you can create an 'Earthquake' effect centered on yourself." },
      { level: 9, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 10, name: "Star-Shattering Blow", description: "Once per day, you can declare one attack to be a Star-Shattering Blow. If it hits a creature, it deals an extra 100d6 damage. If it hits the ground, it creates a 1-mile radius crater." },
    ],
};
