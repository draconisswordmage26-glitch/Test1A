// data/baseClasses/sorcerer.ts
import { BaseClass } from "../../types";

export const sorcerer: BaseClass = {
    name: "Sorcerer",
    hitDie: 4,
    skillPoints: 2,
    classSkills: ["Bluff", "Concentration", "Craft", "Knowledge (arcana)", "Profession", "Spellcraft"],
    bab: 'poor' as const,
    saves: { fort: 'poor' as const, ref: 'poor' as const, will: 'good' as const },
    role: 'arcane',
    casterProgression: 'full',
    primaryAbility: 'cha',
    classFeatures: [
        { level: 1, name: "Summon Familiar", description: "A sorcerer can summon a familiar." },
        { level: 23, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 26, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 29, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 32, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 35, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 38, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};