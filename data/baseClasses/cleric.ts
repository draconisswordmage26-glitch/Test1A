// data/baseClasses/cleric.ts
import { BaseClass } from "../../types";

export const cleric: BaseClass = {
    name: "Cleric",
    hitDie: 8,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (arcana)", "Knowledge (history)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Spellcraft"],
    bab: 'average' as const,
    saves: { fort: 'good' as const, ref: 'poor' as const, will: 'good' as const },
    role: 'divine',
    casterProgression: 'full',
    primaryAbility: 'wis',
    classFeatures: [
        { level: 1, name: "Turn or Rebuke Undead", description: "A cleric can turn or rebuke undead." },
        { level: 1, name: "Domains", description: "A cleric chooses two domains, granting access to domain spells and powers." },
        { level: 1, name: "Spontaneous Casting", description: "Can spontaneously cast 'cure' or 'inflict' spells." },
        { level: 21, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 24, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 27, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 30, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 33, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 36, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 39, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};