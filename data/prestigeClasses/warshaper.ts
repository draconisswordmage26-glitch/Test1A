// data/prestigeClasses/warshaper.ts
import { PrestigeClass } from '../../types';

export const warshaper: PrestigeClass = {
    name: "Warshaper",
    description: "The warshaper is a combatant who uses shapeshifting to become a more perfect engine of destruction. They can mold their bodies into living weapons, growing claws, tentacles, or whatever is needed to defeat their foes.",
    requirements: [
        "Base Attack Bonus: +4.",
        "Feats: Combat Expertise.",
        "Special: Must have the ability to change shape in one of the following ways: change shape supernatural ability, wild shape class feature, or the ability to cast a polymorph spell."
    ],
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Balance", "Climb", "Craft", "Disguise", "Escape Artist", "Intimidate", "Jump", "Swim"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'poor'
    },
    features: [
        { level: 1, name: "Morphic Immunities", description: "While in a shifted form, you are immune to stunning and critical hits." },
        { level: 1, name: "Morphic Weapons", description: "While shifted, you can grow natural weapons such as claws or a bite as a free action. These weapons deal damage appropriate for your size." },
        { level: 2, name: "Morphic Body", description: "While shifted, you gain a +4 morphic bonus to Strength and Constitution." },
        { level: 3, name: "Morphic Reach", description: "While shifted, you can extend your limbs, increasing your reach by 5 feet." },
        { level: 4, name: "Morphic Body", description: "Your morphic bonus to Strength and Constitution increases to +6." },
        { level: 5, name: "Morphic Self", description: "You can use your morphic abilities even in your natural form." }
    ]
};