// data/prestigeClasses/hellfireWarlock.ts
import { PrestigeClass } from '../../types';

export const hellfireWarlock: PrestigeClass = {
    name: "Hellfire Warlock",
    description: "The hellfire warlock has forged a pact with the powers of the Nine Hells to infuse their eldritch blast with the very essence of hellfire. This power comes at a terrible price, burning away their own life force with every use.",
    requirements: [
        "Skills: Intimidate 6 ranks, Knowledge (the planes) 6 ranks, Spellcraft 6 ranks.",
        "Special: Must be able to use a 2d6 eldritch blast."
    ],
    prerequisites: {
        skills: { "Intimidate": 6, "Knowledge (the planes)": 6, "Spellcraft": 6 },
        special: "Eldritch Blast 2d6"
    },
    hitDie: 6,
    skillPoints: 2,
    classSkills: ["Bluff", "Concentration", "Craft", "Diplomacy", "Intimidate", "Jump", "Knowledge (arcana)", "Knowledge (the planes)", "Knowledge (religion)", "Profession", "Sense Motive", "Spellcraft", "Use Magic Device"],
    bab: 'average',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Hellfire Blast", description: "By taking 1 point of Constitution burn, you can augment your eldritch blast to deal an extra 2d6 points of hellfire damage per class level. Hellfire is not subject to fire resistance." },
        { level: 2, name: "Summon Diabolical Familiar", description: "You can summon an Imp as a familiar." },
        { level: 3, name: "Hellfire Shield", description: "By taking 1 point of Constitution burn, you can create a shield of hellfire that damages attackers for 1d6 per two class levels." }
    ],
    progression: ['Warlock'],
};