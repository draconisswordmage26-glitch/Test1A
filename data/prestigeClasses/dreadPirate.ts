// data/prestigeClasses/dreadPirate.ts
import { PrestigeClass } from '../../types';

export const dreadPirate: PrestigeClass = {
    name: "Dread Pirate",
    description: "The dread pirate is a terror of the high seas, a master of acrobatics, intimidation, and naval combat. Their reputation alone is a weapon.",
    requirements: [
        "Base Attack Bonus: +8",
        "Skills: Tumble 10 ranks, Intimidate 6 ranks, Use Rope 6 ranks",
        "Feats: Improved Initiative, Weapon Finesse"
    ],
    prerequisites: {
        bab: 8,
        skills: { "Tumble": 10, "Intimidate": 6, "Use Rope": 6 },
        feats: ["Improved Initiative", "Weapon Finesse"]
    },
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Intimidate", "Jump", "Profession (sailor)", "Swim", "Tumble", "Use Rope"],
    bab: 'good',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'poor'
    },
    features: [
        { level: 1, name: "Fearsome Reputation", description: "Gain a +2 bonus on Intimidate and Bluff checks." },
        { level: 2, name: "Acrobatic Charge", description: "You can charge over difficult terrain." },
        { level: 3, name: "Scourge of the Seas", description: "Gain a +1 bonus on attack and damage rolls while on a ship." },
        { level: 4, name: "Take 'em Alive!", description: "Can deal nonlethal damage with a lethal weapon without penalty." },
        { level: 5, name: "Dread Pirate's Cunning", description: "Gain an additional attack of opportunity per round." },
    ],
};
