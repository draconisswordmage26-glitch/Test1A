// data/baseClasses/totemist.ts
import { BaseClass } from "../../types";

export const totemist: BaseClass = {
    name: "Totemist",
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Craft", "Handle Animal", "Knowledge (nature)", "Listen", "Ride", "Spot", "Survival", "Swim"],
    bab: 'average',
    saves: { fort: 'good', ref: 'good', will: 'poor' },
    primaryAbility: 'con',
    role: 'melee',
    classFeatures: [
        { level: 1, name: "Meldshaping", description: "Can shape soulmelds from the Totemist list." },
        { level: 1, name: "Wild Empathy", description: "Can improve the attitude of an animal." },
        { level: 2, name: "Totem Bind", description: "Can bind a soulmeld to the Totem chakra, gaining powerful abilities." },
        { level: 4, name: "Totem's Protection", description: "Gain a +1 bonus on saves against the supernatural abilities of magical beasts." },
        { level: 22, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 25, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 28, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 31, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 34, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 37, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 40, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};