// data/prestigeClasses/exoticWeaponMaster.ts
import { PrestigeClass } from '../../types';

export const exoticWeaponMaster: PrestigeClass = {
    name: "Exotic Weapon Master",
    description: "The exotic weapon master has dedicated themselves to the mastery of a single, unusual weapon, unlocking abilities and techniques that no ordinary warrior could dream of.",
    requirements: [
        "Base Attack Bonus: +6",
        "Feats: Weapon Focus with an exotic weapon, Exotic Weapon Proficiency"
    ],
    prerequisites: {
        bab: 6,
        feats: ["Weapon Focus", "Exotic Weapon Proficiency"]
    },
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Climb", "Craft", "Intimidate", "Jump", "Ride"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'poor'
    },
    features: [
        { level: 1, name: "Exotic Weapon Stunt", description: "Gain a special stunt with your chosen weapon, like Trip Attack or Disarm." },
        { level: 2, name: "Exotic Reach", description: "Increase the reach of your weapon by 5 feet." },
        { level: 3, name: "Uncanny Blow", description: "Deal an extra 1d6 damage with your exotic weapon." },
    ],
};
