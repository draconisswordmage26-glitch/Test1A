// data/prestigeClasses/planarShepherd.ts
import { PrestigeClass } from '../../types';

export const planarShepherd: PrestigeClass = {
    name: "Planar Shepherd",
    description: "A druid who has devoted themselves to a single plane of existence, becoming its guardian and embodying its essence. They can draw upon the plane's power, shaping the material world to resemble their chosen home.",
    requirements: [
        "Skills: Knowledge (the planes) 8 ranks, Survival 8 ranks.",
        "Feats: Greenbound Summoning.",
        "Special: Wild shape class feature."
    ],
    prerequisites: {
        skills: { "Knowledge (the planes)": 8, "Survival": 8 },
        feats: ["Greenbound Summoning"],
        special: "Wild Shape class feature"
    },
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (nature)", "Knowledge (the planes)", "Profession", "Ride", "Spellcraft", "Survival"],
    bab: 'average',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing druidic spellcasting progression at every level." },
        { level: 1, name: "Shepherd of the Land", description: "Choose a plane of existence you are familiar with. This is your chosen plane." },
        { level: 2, name: "Planar Bubble", description: "You can create a 10-ft radius emanation that has the planar traits of your chosen plane." },
        { level: 3, name: "Detect Manifest Zone", description: "You can detect areas where the borders between planes are thin." },
        { level: 4, name: "Planar Attunement", description: "You gain resistance 10 to one energy type common on your chosen plane." },
        { level: 5, name: "Power of the Plane", description: "Your caster level for spells that share a descriptor with your plane's alignment increases by 2." },
        { level: 6, name: "Planar Bubble", description: "The radius of your planar bubble increases to 30 feet." },
        { level: 7, name: "Planar Attunement", description: "Your energy resistance increases to 20." },
        { level: 8, name: "Spirit of the Land", description: "You gain DR 5/-, bypassed by attacks aligned opposite to your plane." },
        { level: 9, name: "Planar Bubble", description: "The radius of your planar bubble increases to 60 feet." },
        { level: 10, name: "Planar Apotheosis", description: "You become a native of your chosen plane. Your type changes to Outsider, and you gain any subtypes associated with creatures from that plane." }
    ],
    progression: ['Druid'],
};