// data/prestigeClasses/worldSmasher.ts
import { PrestigeClass } from '../../types';

export const worldSmasher: PrestigeClass = {
    name: "World-Smasher",
    description: "The World-Smasher is the apex of physical might, a being whose rage and strength have reached a geological scale. Their blows shatter mountains, their charges break armies, and their very presence is a threat to the stability of the world.",
    requirements: [
        "Base Attack Bonus: +21",
        "Strength: 30+",
        "Feats: Power Attack, Awesome Blow, Epic Toughness"
    ],
    prerequisites: {
        bab: 21,
        abilityScores: { str: 30 },
        feats: ["Power Attack", "Awesome Blow", "Epic Toughness"]
    },
    hitDie: 20,
    skillPoints: 4,
    classSkills: ["Climb", "Craft", "Intimidate", "Jump", "Survival"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'poor'
    },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Earthshaker Strike", description: "As a full-round action, strike the ground to create an Earthquake effect (DC 15 + 1/2 character level + Str mod). You also gain a +2 inherent bonus to Strength." },
      { level: 2, name: "Sundering Power", description: "You automatically destroy any unattended non-magical object you strike. Your attacks bypass all hardness." },
      { level: 3, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter bonus feat list." },
      { level: 4, name: "Irresistible Force", description: "You are treated as one size category larger for Bull Rush and Overrun. You can charge through any terrain, solid or liquid, without penalty." },
      { level: 5, name: "World-Breaker's Grip", description: "You can grapple and crush creatures of any size, even incorporeal ones, as if they were solid. Gain another +2 inherent bonus to Strength." },
      { level: 6, name: "Shatter Artifact", description: "3/day, you can make a sunder attempt against an artifact. Make a Strength check (DC 40) to destroy it." },
      { level: 7, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter bonus feat list." },
      { level: 8, name: "Fissure of the World", description: "1/day, as a full-round action, you can strike the ground to create a chasm 500 ft. deep, 100 ft. wide, and a mile long." },
      { level: 9, name: "Inherent Bonus", description: "Gain another +2 inherent bonus to Strength." },
      { level: 10, name: "God-Slayer's Blow", description: "Once per day, declare one attack as a God-Slayer's Blow. The attack deals an extra 20d6 damage plus 1d6 per point of the target's damage reduction. It bypasses all DR and regeneration. If the target is a structure, it deals 1000 points of damage." },
    ],
    progression: ["Fighter"],
};