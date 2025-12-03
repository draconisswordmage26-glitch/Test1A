// data/prestigeClasses/horizonWalker.ts
import { PrestigeClass } from '../../types';

export const horizonWalker: PrestigeClass = {
    name: "Horizon Walker",
    description: "The horizon walker is a master of planar travel and survival, at home in any environment, no matter how hostile or alien. They are the ultimate explorers of the multiverse.",
    requirements: [
        "Feats: Endurance.",
        "Skills: Knowledge (geography) 8 ranks."
    ],
    prerequisites: {
        feats: ["Endurance"],
        skills: { "Knowledge (geography)": 8 }
    },
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Climb", "Concentration", "Craft", "Handle Animal", "Heal", "Hide", "Jump", "Knowledge (geography)", "Knowledge (the planes)", "Listen", "Move Silently", "Profession", "Ride", "Spot", "Survival", "Swim"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'poor'
    },
    features: [
        { level: 1, name: "Terrain Mastery", description: "Choose a terrain type. You gain bonuses while in that terrain." },
        { level: 2, name: "Planar Attunement", description: "Gain resistance to an energy type associated with a plane." },
        { level: 3, name: "Terrain Mastery", description: "Choose another terrain." },
        { level: 4, name: "Dimensional Step", description: "Can use Dimension Door 1/day." },
        { level: 5, name: "Ethereal Jaunt", description: "Can become ethereal for short periods." },
    ],
};
