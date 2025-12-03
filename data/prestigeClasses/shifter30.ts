// data/prestigeClasses/shifter30.ts
import { PrestigeClass } from '../../types';

export const shifter30: PrestigeClass = {
    name: "Shifter (3.0)",
    description: "The shifter is a master of shapeshifting from the 3.0 sourcebook 'Masters of the Wild', able to assume a wider variety of forms than even the most powerful druid. They can become magical beasts, plants, and eventually even outsiders, truly mastering the art of transformation.",
    requirements: [
        "Feats: Alertness, Track.",
        "Skills: Knowledge (nature) 8 ranks, Survival 10 ranks.",
        "Special: Wild shape class feature."
    ],
    prerequisites: {
        skills: { "Knowledge (nature)": 8, "Survival": 10 },
        feats: ["Alertness", "Track"],
        special: "Wild shape class feature"
    },
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Handle Animal", "Concentration", "Craft", "Heal", "Hide", "Survival", "Knowledge (nature)", "Move Silently", "Profession", "Spot", "Swim"],
    bab: 'average',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'poor'
    },
    advancesDivine: true,
    progression: ['Druid'],
    features: [
        { level: 1, name: "Spellcasting", description: "At each level, you gain new spells per day and an increase in caster level as if you had also gained a level in a divine spellcasting class to which you belonged before adding the prestige class." },
        { level: 1, name: "Additional Wild Shape (1/day)", description: "You can use your wild shape ability one additional time per day." },
        { level: 2, name: "Humanoid Shape", description: "You can assume the form of any Small or Medium humanoid creature as a supernatural ability." },
        { level: 3, name: "Additional Wild Shape (2/day)", description: "You can use your wild shape ability another time per day (for a total of two additional uses)." },
        { level: 4, name: "Fantastic Shape", description: "You can assume the form of a magical beast. This is a supernatural ability." },
        { level: 5, name: "Additional Wild Shape (3/day)", description: "You can use your wild shape ability another time per day (for a total of three additional uses)." },
        { level: 6, name: "Greater Wild Shape", description: "You can take the form of creatures up to Huge size or down to Diminutive size. The HD limit of your wild shape increases to your character level." },
        { level: 7, name: "Unlimited Wild Shape", description: "You can use your wild shape ability an unlimited number of times per day." },
        { level: 8, name: "Plant Shape", description: "You can assume the form of a plant creature. This is a supernatural ability." },
        { level: 9, name: "Undead Shape", description: "You can assume the form of a corporeal undead creature (such as a ghoul, but not a ghost). This is a supernatural ability." },
        { level: 10, name: "Outsider Shape", description: "You can assume the form of an outsider. This is a supernatural ability." },
    ],
};
