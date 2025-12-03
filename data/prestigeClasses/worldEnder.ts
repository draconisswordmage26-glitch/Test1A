// data/prestigeClasses/worldEnder.ts
import { PrestigeClass } from '../../types';

export const worldEnder: PrestigeClass = {
    name: "World-Ender",
    description: "The World-Ender is not a creature of malice, but of grim, cosmic necessity. It is a being that has embraced the role of entropy, becoming a methodical agent of destruction to unmake a flawed or dying reality. Its power is not about rage, but about the cold, quiet finality of nonexistence.",
    requirements: [
        "Base Attack Bonus: +21",
        "Feats: Awesome Blow, Epic Toughness, Power Attack",
        "Special: Must have destroyed an artifact or slain a creature with a CR of 25 or higher."
    ],
    prerequisites: {
        bab: 21,
        feats: ["Awesome Blow", "Epic Toughness", "Power Attack"],
        special: "Destroy an artifact or slay a creature of CR 25+."
    },
    hitDie: 20,
    skillPoints: 4,
    classSkills: ["Climb", "Intimidate", "Jump", "Knowledge (the planes)", "Survival"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Unmaking Touch", description: "Your natural attacks deal an extra 2d6 points of 'unmaking' damage. This damage can only be healed by epic magic or a 'Wish' or 'Miracle' spell. You also gain a +2 inherent bonus to Constitution." },
      { level: 2, name: "Shatter Reality", description: "3/day, as a full-round action, you can attempt to shatter a 30-ft area into nothingness. All magical effects are dispelled, and structures are destroyed." },
      { level: 3, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter or Barbarian bonus feat list." },
      { level: 4, name: "Final End", description: "Creatures slain by you cannot be resurrected by non-deific magic." },
      { level: 5, name: "Unmaking Aura", description: "You are surrounded by a 30-ft. aura of entropy. Creatures in the aura lose any fast healing or regeneration they possess. You gain another +2 inherent bonus to Constitution." },
      { level: 6, name: "Inevitable", description: "You are immune to any effect that would hinder your movement, including paralysis and solid walls." },
      { level: 7, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter or Barbarian bonus feat list." },
      { level: 8, name: "Absolute Destruction", description: "Any object or creature brought to 0 hit points by your attacks is utterly annihilated, bypassing immunities to disintegration." },
      { level: 9, name: "Inherent Bonus", description: "Gain another +2 inherent bonus to Constitution." },
      { level: 10, name: "One with the Void", description: "You become immune to all mind-affecting effects and can't be detected by divination magic short of a deity's. Once per day, you can declare one attack to be an 'unmaking blow'. If it hits, the target must make a Fortitude save (DC 20 + class level + Con mod) or be erased from existence." },
    ],
    progression: ["Barbarian"],
};