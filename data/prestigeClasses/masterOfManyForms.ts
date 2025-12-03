// data/prestigeClasses/masterOfManyForms.ts
import { PrestigeClass } from '../../types';

export const masterOfManyForms: PrestigeClass = {
    name: "Master of Many Forms",
    description: "The master of many forms is a druid who has focused their studies on the art of shapeshifting, transcending the normal limits of wild shape to assume a dazzling array of forms from across the planes.",
    requirements: [
        "Skills: Disguise 5 ranks, Knowledge (nature) 5 ranks.",
        "Feats: Alertness, Endurance.",
        "Special: Wild shape class feature."
    ],
    prerequisites: {
        skills: { "Disguise": 5, "Knowledge (nature)": 5 },
        feats: ["Alertness", "Endurance"],
        special: "Wild Shape class feature"
    },
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Bluff", "Climb", "Craft", "Diplomacy", "Disguise", "Handle Animal", "Hide", "Intimidate", "Knowledge (nature)", "Listen", "Move Silently", "Spot", "Survival", "Swim", "Use Magic Device"],
    bab: 'average',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Improved Wild Shape (Humanoid)", description: "You can assume humanoid forms. Add aberration, dragon, elemental, fey, giant, humanoid, magical beast, monstrous humanoid, ooze, plant, and vermin to your list of available forms." },
        { level: 2, name: "Fast Wild Shape", description: "You can use wild shape as a move action." },
        { level: 3, name: "Extraordinary Wild Shape", description: "You gain the extraordinary special attacks of any form you assume." },
        { level: 4, name: "Improved Wild Shape (Monstrous Humanoid)", description: "Your size limit for wild shape increases to Huge. You can assume monstrous humanoid forms." },
        { level: 5, name: "Everchanging Form", description: "You can change from one wild shape form to another without returning to your natural form." },
        { level: 6, name: "Supernatural Wild Shape", description: "You gain the supernatural special qualities and attacks of any form you assume." },
        { level: 7, name: "Infinite Variety", description: "You can use wild shape at will." },
        { level: 7, name: "Improved Wild Shape (Outsider)", description: "You can assume the form of outsiders." },
        { level: 8, name: "Improved Wild Shape (Giant)", description: "Your size limit for wild shape increases to Gargantuan. You can assume giant forms." },
        { level: 9, name: "Inherent Bonus", description: "You gain a +1 inherent bonus to a physical ability score." },
        { level: 10, name: "Improved Wild Shape (Aberration)", description: "Your size limit for wild shape increases to Colossal. You can assume aberration forms." }
    ],
    progression: ['Druid'],
};