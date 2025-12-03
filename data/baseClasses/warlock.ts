// data/baseClasses/warlock.ts
import { BaseClass } from "../../types";

export const warlock: BaseClass = {
    name: "Warlock",
    hitDie: 6,
    skillPoints: 2,
    classSkills: ["Bluff", "Concentration", "Craft", "Disguise", "Intimidate", "Jump", "Knowledge (arcana)", "Knowledge (the planes)", "Profession", "Sense Motive", "Spellcraft", "Use Magic Device"],
    bab: 'average',
    saves: { fort: 'poor', ref: 'poor', will: 'good' },
    primaryAbility: 'cha',
    role: 'arcane',
    classFeatures: [
        { level: 1, name: "Eldritch Blast", description: "Gains an at-will ranged touch attack that deals 1d6 damage." },
        { level: 1, name: "Invocations", description: "Learns magical invocations." },
        { level: 2, name: "Detect Magic", description: "Can use Detect Magic at will." },
        { level: 3, name: "Damage Reduction", description: "Gains DR 1/cold iron." },
        { level: 21, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 24, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 27, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 30, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 33, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 36, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 39, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};