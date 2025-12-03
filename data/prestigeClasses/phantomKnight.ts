// data/prestigeClasses/phantomKnight.ts
import { PrestigeClass } from '../../types';

export const phantomKnight: PrestigeClass = {
    name: "Phantom Knight",
    description: "The phantom knight is a soulknife who has learned to project their mind blade as a semi-solid, spectral suit of armor and weapons. They are ghostly warriors, their forms flickering between the material and ethereal planes.",
    requirements: [
        "Base Attack Bonus: +5",
        "Skills: Autohypnosis 8 ranks, Concentration 8 ranks",
        "Feats: Weapon Focus (mind blade)",
        "Special: Mind Blade class feature"
    ],
    prerequisites: {
        bab: 5,
        skills: { "Autohypnosis": 8, "Concentration": 8 },
        feats: ["Weapon Focus (mind blade)"],
        special: "Mind Blade class feature"
    },
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Autohypnosis", "Concentration", "Knowledge (psionics)", "Psicraft", "Tumble"],
    bab: 'good',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Phantom Armor", description: "You can form your mind blade into a suit of spectral full plate armor." },
        { level: 2, name: "Ethereal Strike", description: "Your mind blade is treated as a 'ghost touch' weapon." },
        { level: 3, name: "Phase Lunge", description: "As part of a charge, you can become incorporeal for a moment, passing through a single wall or obstacle." },
    ],
};
