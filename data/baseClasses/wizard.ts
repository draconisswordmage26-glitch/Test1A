// data/baseClasses/wizard.ts
import { BaseClass } from "../../types";

export const wizard: BaseClass = {
    name: "Wizard",
    hitDie: 4,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (all)", "Profession", "Spellcraft"],
    bab: 'poor' as const,
    saves: { fort: 'poor' as const, ref: 'poor' as const, will: 'good' as const },
    role: 'arcane',
    casterProgression: 'full',
    primaryAbility: 'int',
    classFeatures: [
        { level: 1, name: "Summon Familiar", description: "A wizard can summon a familiar." },
        { level: 1, name: "Scribe Scroll", description: "A wizard gains Scribe Scroll as a bonus feat." },
        { level: 5, name: "Bonus Feat", description: "Gains a bonus metamagic or item creation feat." },
        { level: 10, name: "Bonus Feat", description: "Gains a bonus metamagic or item creation feat." },
        { level: 15, name: "Bonus Feat", description: "Gains a bonus metamagic or item creation feat." },
        { level: 20, name: "Bonus Feat", description: "Gains a bonus metamagic or item creation feat." },
        { level: 23, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 25, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 28, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 30, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 33, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 35, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 38, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 40, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};