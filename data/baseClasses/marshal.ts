// data/baseClasses/marshal.ts
import { BaseClass } from "../../types";

export const marshal: BaseClass = {
    name: "Marshal",
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Bluff", "Diplomacy", "Handle Animal", "Intimidate", "Knowledge (history)", "Knowledge (local)", "Knowledge (nobility and royalty)", "Listen", "Ride", "Sense Motive", "Spot"],
    bab: 'good',
    saves: { fort: 'good', ref: 'poor', will: 'good' },
    primaryAbility: 'cha',
    role: 'skill',
    classFeatures: [
        { level: 1, name: "Minor Aura", description: "Grants a bonus to allies within 60 feet (e.g., +Cha mod to damage)." },
        { level: 2, name: "Grant Move Action", description: "1/day, grant an ally an extra move action." },
        { level: 6, name: "Major Aura", description: "Gain a second, more powerful aura (e.g., allies can move 5 ft as a free action)." },
        { level: 11, name: "Second Minor Aura", description: "Gain another minor aura." },
        { level: 16, name: "Second Major Aura", description: "Gain another major aura." },
        { level: 20, name: "Aura of Command", description: "The range of your auras increases to 120 feet." },
        { level: 22, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 25, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 28, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 31, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 34, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 37, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 40, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};