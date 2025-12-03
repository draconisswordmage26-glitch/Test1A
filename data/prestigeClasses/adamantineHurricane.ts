// data/prestigeClasses/adamantineHurricane.ts
import { PrestigeClass } from '../../types';

export const adamantineHurricane: PrestigeClass = {
    name: "Adamantine Hurricane",
    description: "The Adamantine Hurricane is a paragon of martial discipline, a warrior who has become a living storm of perfectly executed attacks. They are a whirlwind of motion and steel from which there is no escape.",
    requirements: [
        "Base Attack Bonus: +21",
        "Feats: Combat Reflexes, Whirlwind Attack, Epic Weapon Focus",
        "Skills: Tumble 30 ranks"
    ],
    prerequisites: {
        bab: 21,
        feats: ["Combat Reflexes", "Whirlwind Attack", "Epic Weapon Focus"],
        skills: { "Tumble": 30 }
    },
    hitDie: 12,
    skillPoints: 6,
    classSkills: ["Balance", "Climb", "Craft", "Intimidate", "Jump", "Tumble"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'poor'
    },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Roving Whirlwind", description: "As a full-round action, you may move up to double your speed and make one attack against every enemy you can reach at any point during your movement. You gain a +2 inherent bonus to Strength or Dexterity." },
      { level: 2, name: "Perfect Poise", description: "You can no longer be tripped, bull rushed, or otherwise moved against your will. You gain your Int bonus as an insight bonus to AC." },
      { level: 3, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter bonus feat list." },
      { level: 4, name: "Storm of Steel", description: "When using Whirlwind Attack or Roving Whirlwind, you make two attacks against each target instead of one." },
      { level: 5, name: "Inherent Bonus", description: "Gain another +2 inherent bonus to Strength or Dexterity." },
      { level: 6, name: "Flowing Combat", description: "You can take a 5-foot step before, during, and after a full attack action. This movement does not provoke attacks of opportunity." },
      { level: 7, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter bonus feat list." },
      { level: 8, name: "Unstoppable Flurry", description: "Your attacks can no longer be parried or blocked by magical means (like the Shield spell). Your weapon cannot be sundered." },
      { level: 9, name: "Inherent Bonus", description: "Gain another +2 inherent bonus to Strength or Dexterity." },
      { level: 10, name: "Eye of the Hurricane", description: "You are the calm center of a storm of attacks. Once per round, you can make a full attack action as a standard action. You are permanently under the effects of a Haste spell." },
    ],
    progression: ["Warblade"],
};