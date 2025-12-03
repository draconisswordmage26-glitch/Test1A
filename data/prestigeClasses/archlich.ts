// data/prestigeClasses/archlich.ts
import { PrestigeClass } from '../../types';

export const archlich: PrestigeClass = {
    name: "Archlich",
    description: "The archlich is a master of undeath who has transcended the limitations of a normal lich. Their command over negative energy is absolute, and their phylactery is a masterpiece of arcane engineering, making them nearly impossible to destroy.",
    requirements: [
        "Type: Undead.",
        "Skills: Knowledge (arcana) 30 ranks, Knowledge (religion) 30 ranks.",
        "Feats: Epic Spellcasting, Craft Wondrous Item.",
        "Special: Must be a lich."
    ],
    prerequisites: {
        skills: { "Knowledge (arcana)": 30, "Knowledge (religion)": 30 },
        feats: ["Epic Spellcasting", "Craft Wondrous Item"],
        special: "Lich template",
        type: "Undead",
    },
    hitDie: 12,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Hide", "Intimidate", "Knowledge (any)", "Listen", "Move Silently", "Search", "Sense Motive", "Spot", "Spellcraft"],
    bab: 'average',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing arcane spellcasting progression at every level." },
        { level: 1, name: "Paralyzing Touch", description: "Your touch attack now forces a Fortitude save (DC 15 + 1/2 HD + Cha mod) or paralyzes the target permanently." },
        { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
        { level: 3, name: "Master of Undeath", description: "You can control twice the normal number of HD of undead with Command Undead." },
        { level: 4, name: "Improved Phylactery", description: "Your phylactery can only be destroyed by an artifact or a direct act of a deity." },
        { level: 5, name: "Negative Energy Aura", description: "You are constantly surrounded by an aura that deals 5d6 negative energy damage to all living creatures within 30 feet." },
        { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
        { level: 7, name: "Fear Aura", description: "Your fear aura now causes creatures to become panicked on a failed save." },
        { level: 8, name: "Apotheosis of Undeath", description: "You are immune to turning and positive energy effects." },
        { level: 9, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
        { level: 10, name: "Lord of the Grave", description: "Once per day, you can cast 'Mass Animate Dead', animating all corpses in a 1-mile radius as zombies or skeletons under your permanent control." }
    ]
};