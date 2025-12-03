// data/baseClasses/binder.ts
import { BaseClass } from "../../types";

export const binder: BaseClass = {
    name: "Binder",
    hitDie: 8,
    skillPoints: 2,
    classSkills: ["Bluff", "Concentration", "Decipher Script", "Diplomacy", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Profession", "Sense Motive"],
    bab: 'average',
    saves: { fort: 'good', ref: 'poor', will: 'good' },
    primaryAbility: 'cha',
    role: 'arcane', // Closest fit
    classFeatures: [
        { level: 1, name: "Soul Binding", description: "Can bind one vestige at a time." },
        { level: 1, name: "Pact Augmentation", description: "Gain an ability based on the number of abilities you suppress." },
        { level: 2, name: "Suppress Sign", description: "Can suppress the physical sign of a bound vestige." },
        { level: 4, name: "Bonus Feat", description: "Gains a bonus feat from a select list." },
        { level: 5, name: "Bind Second Vestige", description: "Can bind two vestiges at a time." },
        { level: 8, name: "Bonus Feat", description: "Gains a bonus feat." },
        { level: 10, name: "Pact Augmentation", description: "Gains another pact augmentation option." },
        { level: 11, name: "Bind Third Vestige", description: "Can bind three vestiges at a time." },
        { level: 12, name: "Bonus Feat", description: "Gains a bonus feat." },
        { level: 16, name: "Bonus Feat", description: "Gains a bonus feat." },
        { level: 17, name: "Bind Fourth Vestige", description: "Can bind four vestiges at a time." },
        { level: 20, name: "Bonus Feat", description: "Gains a bonus feat." },
        { level: 22, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 25, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 28, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 31, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 34, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 37, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 40, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};