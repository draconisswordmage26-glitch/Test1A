// data/baseClasses/fighter.ts
import { BaseClass } from "../../types";

export const fighter: BaseClass = {
    name: "Fighter",
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Ride", "Swim"],
    bab: 'good' as const,
    saves: { fort: 'good' as const, ref: 'poor' as const, will: 'poor' as const },
    classFeatures: [
        { level: 1, name: "Bonus Feat", description: "Gains a bonus combat feat." },
        { level: 2, name: "Bonus Feat", description: "Gains a bonus combat feat." },
        { level: 4, name: "Bonus Feat", description: "Gains a bonus combat feat." },
        { level: 6, name: "Bonus Feat", description: "Gains a bonus combat feat." },
        { level: 8, name: "Bonus Feat", description: "Gains a bonus combat feat." },
        { level: 10, name: "Bonus Feat", description: "Gains a bonus combat feat." },
        { level: 12, name: "Bonus Feat", description: "Gains a bonus combat feat." },
        { level: 14, name: "Bonus Feat", description: "Gains a bonus combat feat." },
        { level: 16, name: "Bonus Feat", description: "Gains a bonus combat feat." },
        { level: 18, name: "Bonus Feat", description: "Gains a bonus combat feat." },
        { level: 20, name: "Bonus Feat", description: "Gains a bonus combat feat." },
        { level: 22, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 24, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 26, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 28, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 30, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 32, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 34, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 36, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 38, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 40, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};