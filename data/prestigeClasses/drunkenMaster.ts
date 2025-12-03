// data/prestigeClasses/drunkenMaster.ts
import { PrestigeClass } from '../../types';

export const drunkenMaster: PrestigeClass = {
    name: "Drunken Master",
    description: "The drunken master appears to be a staggering fool, but their unpredictable movements hide a potent and deadly martial art. They turn their apparent clumsiness into a weapon.",
    requirements: [
        "Base Attack Bonus: +4",
        "Feats: Dodge, Improved Unarmed Strike",
        "Skills: Tumble 8 ranks, Escape Artist 8 ranks"
    ],
    prerequisites: {
        bab: 4,
        feats: ["Dodge", "Improved Unarmed Strike"],
        skills: { "Tumble": 8, "Escape Artist": 8 }
    },
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Balance", "Climb", "Escape Artist", "Jump", "Perform", "Sleight of Hand", "Tumble"],
    bab: 'average',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'poor'
    },
    features: [
        { level: 1, name: "Drink Like a Demon", description: "Can consume alcohol to gain special abilities." },
        { level: 1, name: "Stagger", description: "Can make a 5-foot step even when it's not your turn." },
        { level: 2, name: "Swaying Waist", description: "+2 dodge bonus to AC." },
        { level: 3, name: "Improvised Weapons", description: "Suffer no penalties for using improvised weapons." },
        { level: 4, name: "Drunken Rage", description: "Can enter a rage, similar to a barbarian." },
    ],
};
