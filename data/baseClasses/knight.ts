// data/baseClasses/knight.ts
import { BaseClass } from "../../types";

export const knight: BaseClass = {
    name: "Knight",
    hitDie: 12,
    skillPoints: 2,
    classSkills: ["Climb", "Concentration", "Diplomacy", "Handle Animal", "Heal", "Intimidate", "Jump", "Ride", "Sense Motive"],
    bab: 'good',
    saves: { fort: 'good', ref: 'poor', will: 'poor' },
    primaryAbility: 'str',
    role: 'melee',
    classFeatures: [
        { level: 1, name: "Knight's Challenge", description: "Compel a foe to attack you." },
        { level: 1, name: "Mounted Combat", description: "Gain Mounted Combat as a bonus feat." },
        { level: 2, name: "Bulwark of Defense", description: "Grant shield bonus to adjacent allies." },
        { level: 3, name: "Shield Block", description: "Add shield bonus to Reflex saves." },
        { level: 5, name: "Test of Mettle", description: "Foes who ignore your challenge are shaken." },
        { level: 20, name: "Impervious Defense", description: "Gain DR 10/- for one round." },
        { level: 21, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 24, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 27, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 30, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 33, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 36, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 39, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};