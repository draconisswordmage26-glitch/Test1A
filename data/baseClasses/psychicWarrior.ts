// data/baseClasses/psychicWarrior.ts
import { BaseClass } from "../../types";

export const psychicWarrior: BaseClass = {
    name: "Psychic Warrior",
    hitDie: 8,
    skillPoints: 2,
    classSkills: ["Autohypnosis", "Climb", "Concentration", "Craft", "Jump", "Listen", "Profession", "Ride", "Search", "Spot", "Swim", "Tumble"],
    bab: 'good',
    saves: { fort: 'good', ref: 'poor', will: 'poor' },
    primaryAbility: 'wis',
    role: 'psionic',
    classFeatures: [
        { level: 1, name: "Psionics", description: "Manifests powers from the Psychic Warrior power list." },
        { level: 1, name: "Bonus Feat", description: "Gains a bonus psionic or fighter feat." },
        { level: 2, name: "Bonus Feat", description: "Gains a bonus psionic or fighter feat." },
        { level: 5, name: "Bonus Feat", description: "Gains a bonus psionic or fighter feat." },
        { level: 8, name: "Bonus Feat", description: "Gains a bonus psionic or fighter feat." },
        { level: 11, name: "Bonus Feat", description: "Gains a bonus psionic or fighter feat." },
        { level: 14, name: "Bonus Feat", description: "Gains a bonus psionic or fighter feat." },
        { level: 17, name: "Bonus Feat", description: "Gains a bonus psionic or fighter feat." },
        { level: 20, name: "Bonus Feat", description: "Gains a bonus psionic or fighter feat." },
        { level: 22, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 25, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 28, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 31, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 34, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 37, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 40, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};
