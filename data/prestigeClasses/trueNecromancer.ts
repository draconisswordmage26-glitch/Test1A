// data/prestigeClasses/trueNecromancer.ts
import { PrestigeClass } from '../../types';

export const trueNecromancer: PrestigeClass = {
    name: "True Necromancer",
    description: "The true necromancer has transcended the simple animation of the dead to become a master of the forces of life and death itself. They can command armies of undead, drain life with a touch, and their very presence is anathema to the living.",
    requirements: [
        "Type: Undead.",
        "Skills: Knowledge (religion) 30 ranks, Spellcraft 30 ranks.",
        "Feats: Epic Spellcasting, any three other necromancy-related Epic feats.",
        "Spells: Ability to cast 9th-level necromancy spells.",
        "Special: Must be a lich."
    ],
    prerequisites: {
        skills: { "Knowledge (religion)": 30, "Spellcraft": 30 },
        feats: ["Epic Spellcasting"],
        spells: { arcane: 9 },
        special: "Must be a lich",
        type: "Undead",
    },
    hitDie: 12,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Heal", "Intimidate", "Knowledge (arcana)", "Knowledge (religion)", "Profession", "Spellcraft"],
    bab: 'average',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing spellcasting progression at every level." },
        { level: 1, name: "Lord of the Undead", description: "The HD limit of undead you can control is quadrupled." },
        { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat related to necromancy." },
        { level: 3, name: "Necrotic Pulse", description: "You constantly radiate waves of negative energy, healing undead and harming living creatures in a 60-ft. radius for 5d6 damage each round." },
        { level: 4, name: "Master of the Grave", description: "You can cast 'Create Undead' and 'Create Greater Undead' at will." },
        { level: 5, name: "Touch of the Grave", description: "Your touch attacks bestow 1d4 negative levels." },
        { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat related to necromancy." },
        { level: 7, name: "Final End", description: "Creatures slain by you or your undead minions cannot be resurrected by non-deific magic." },
        { level: 8, name: "Lich Transformation", description: "If you are not already a lich, you become one, gaining all associated abilities and a phylactery. If you are already a lich, your phylactery becomes an artifact." },
        { level: 9, name: "Mass Animate Dead", description: "Once per day, you can animate all corpses in a 1-mile radius as zombies or skeletons under your permanent control." },
        { level: 10, "name": "God of Undeath", "description": "You gain a Divine Rank of 0. You can grant spells to followers and are treated as a deity by undead creatures." }
    ]
};