// data/baseClasses/crusader.ts
import { BaseClass } from "../../types";

export const crusader: BaseClass = {
    name: "Crusader",
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Diplomacy", "Intimidate", "Jump", "Knowledge (history)", "Knowledge (religion)", "Martial Lore", "Ride"],
    bab: 'good',
    saves: { fort: 'good', ref: 'poor', will: 'good' },
    primaryAbility: 'str',
    role: 'melee',
    classFeatures: [
        { level: 1, name: "Steely Resolve", description: "Can delay taking damage, up to 5 points." },
        { level: 1, name: "Furious Counterstrike", description: "Gain a bonus on attack rolls when you have delayed damage." },
        { level: 2, name: "Indomitable Soul", description: "Gain a bonus on Will saves against fear effects." },
        { level: 3, name: "Zealous Fervor", description: "Gain a morale bonus on saves against mind-affecting effects." },
        { level: 4, name: "Smite", description: "1/day, can smite a foe, dealing +level damage." },
        { level: 6, name: "Die Hard", description: "Gain Die Hard as a bonus feat." },
        { level: 8, name: "Mettle", description: "No effect on successful Fortitude or Will saves." },
        { level: 21, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 24, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 27, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 30, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 33, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 36, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 39, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};