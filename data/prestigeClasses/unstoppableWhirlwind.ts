// data/prestigeClasses/unstoppableWhirlwind.ts
import { PrestigeClass } from '../../types';

export const unstoppableWhirlwind: PrestigeClass = {
    name: "Unstoppable Whirlwind",
    description: "The Unstoppable Whirlwind is a master of multi-weapon combat who has transcended physical limits to become a living storm of steel. They can move and attack with blinding speed, a blur of motion from which few escape.",
    requirements: [
        "Base Attack Bonus: +21",
        "Feats: Perfect Multiweapon Fighting, Combat Reflexes, Bounding Assault",
        "Skills: Tumble 30 ranks"
    ],
    prerequisites: {
        bab: 21,
        feats: ["Perfect Multiweapon Fighting", "Combat Reflexes", "Bounding Assault"],
        skills: { "Tumble": 30 }
    },
    hitDie: 12,
    skillPoints: 4,
    classSkills: ["Balance", "Climb", "Craft", "Intimidate", "Jump", "Tumble"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'poor'
    },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Roving Whirlwind", description: "You can move up to your full speed and make a full attack at any point during your movement without penalty, distributing your attacks among any targets you can reach." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter bonus feat list." },
      { level: 3, name: "Improved Uncanny Dodge", description: "You retain your Dexterity bonus to AC if flat-footed and can no longer be flanked." },
      { level: 4, name: "Speed of the Gale", description: "Your land speed increases by 50 feet. This is an enhancement bonus." },
      { level: 5, name: "One with the Blade", description: "You are always considered to be wielding your weapons, can never be disarmed, and your weapons cannot be sundered. The enhancement bonus of your weapons increases by 2." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter bonus feat list." },
      { level: 7, name: "Steel Hurricane", description: "Your movement, including charges and tumbles, no longer provokes attacks of opportunity under any circumstances." },
      { level: 8, name: "Inherent Speed", description: "You are permanently under the effect of a Haste spell." },
      { level: 9, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter bonus feat list." },
      { level: 10, name: "Infinite Flurry", description: "When making a full attack, you can make your full iterative attack sequence with each of your wielded weapons, instead of just one additional attack." },
    ],
    progression: ["Warblade"],
};