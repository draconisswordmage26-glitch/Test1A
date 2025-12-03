// data/prestigeClasses/ironGolemParagon.ts
import { PrestigeClass } from '../../types';

export const ironGolemParagon: PrestigeClass = {
    name: "Iron Golem Paragon",
    description: "A construct that has transcended its original programming to achieve a semblance of martial perfection. It is a living fortress of iron, its every movement a calculated act of destruction.",
    requirements: [
        "Type: Construct.",
        "Base Attack Bonus: +15.",
        "Feats: Power Attack, Cleave, Awesome Blow."
    ],
    prerequisites: {
        bab: 15,
        feats: ["Power Attack", "Cleave", "Awesome Blow"],
        type: "Construct",
    },
    hitDie: 12,
    skillPoints: 0,
    classSkills: [],
    bab: 'good',
    saves: { fort: 'good', ref: 'poor', will: 'poor' },
    features: [
        { level: 1, name: "Improved Damage Reduction", description: "Your damage reduction increases by 5/adamantine." },
        { level: 2, name: "Poison Breath", description: "You gain a breath weapon that releases a cloud of poisonous gas (as the iron golem ability)." },
        { level: 3, name: "Bonus Feat", description: "Gain a bonus feat from the Fighter bonus feat list." },
    ],
};