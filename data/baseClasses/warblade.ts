// data/baseClasses/warblade.ts
import { BaseClass } from "../../types";

export const warblade: BaseClass = {
    name: "Warblade",
    hitDie: 12,
    skillPoints: 4,
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Intimidate", "Jump", "Knowledge (history)", "Knowledge (local)", "Martial Lore", "Sense Motive", "Swim", "Tumble"],
    bab: 'good',
    saves: { fort: 'good', ref: 'poor', will: 'poor' },
    primaryAbility: 'int',
    role: 'melee',
    classFeatures: [
        { level: 1, name: "Battle Clarity", description: "Add Intelligence modifier to Reflex saves." },
        { level: 2, name: "Uncanny Dodge", description: "Retains Dex bonus to AC when flat-footed." },
        { level: 3, name: "Battle Ardor", description: "Add Intelligence modifier to confirm critical hits." },
        { level: 4, name: "Bonus Feat", description: "Gains a bonus feat from the Fighter list." },
        { level: 5, name: "Battle Cunning", description: "Add Intelligence modifier to damage against flat-footed or flanked opponents." },
        { level: 6, name: "Improved Uncanny Dodge", description: "Can no longer be flanked." },
        { level: 8, name: "Bonus Feat", description: "Gains a bonus feat." },
        { level: 21, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 24, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 27, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 30, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 33, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 36, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 39, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};