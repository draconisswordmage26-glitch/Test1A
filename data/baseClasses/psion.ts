// data/baseClasses/psion.ts
import { BaseClass } from "../../types";

export const psion: BaseClass = {
    name: "Psion",
    hitDie: 4,
    skillPoints: 2,
    classSkills: ["Autohypnosis", "Concentration", "Craft", "Knowledge (all)", "Profession", "Psicraft"],
    bab: 'poor',
    saves: { fort: 'poor', ref: 'poor', will: 'good' },
    primaryAbility: 'int',
    role: 'psionic',
    classFeatures: [
        { level: 1, name: "Psionics", description: "Manifests powers from the Psion discipline list." },
        { level: 1, name: "Discipline", description: "Chooses a discipline (e.g., Shaper, Telepath) which grants bonus powers." },
        { level: 5, name: "Bonus Feat", description: "Gains a bonus psionic or metapsionic feat." },
        { level: 10, name: "Bonus Feat", description: "Gains a bonus psionic or metapsionic feat." },
        { level: 15, name: "Bonus Feat", description: "Gains a bonus psionic or metapsionic feat." },
        { level: 20, name: "Bonus Feat", description: "Gains a bonus psionic or metapsionic feat." },
        { level: 22, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 25, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 28, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 31, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 34, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 37, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 40, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};