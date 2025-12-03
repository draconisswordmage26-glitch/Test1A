// data/prestigeClasses/shadowdancer.ts
import { PrestigeClass } from '../../types';

export const shadowdancer: PrestigeClass = {
    name: "Shadowdancer",
    description: "The shadowdancer is a master of the shadows, a warrior who can step through darkness and strike from unseen angles. They are elusive and mysterious, their movements as silent as the night.",
    requirements: [
        "Skills: Move Silently 8 ranks, Hide 10 ranks, Perform (dance) 5 ranks",
        "Feats: Dodge, Mobility, Combat Reflexes"
    ],
    prerequisites: {
        skills: { "Move Silently": 8, "Hide": 10, "Perform": 5 },
        feats: ["Dodge", "Mobility", "Combat Reflexes"]
    },
    hitDie: 8,
    skillPoints: 6,
    classSkills: ["Balance", "Bluff", "Decipher Script", "Diplomacy", "Disguise", "Escape Artist", "Hide", "Jump", "Listen", "Move Silently", "Perform", "Search", "Spot", "Tumble", "Use Rope"],
    bab: 'average',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'poor'
    },
    features: [
        { level: 1, name: "Hide in Plain Sight", description: "Can use the Hide skill even while being observed, as long as you are within 10 feet of a shadow." },
        { level: 2, name: "Evasion", description: "Take no damage on a successful Reflex save." },
        { level: 2, name: "Darkvision", description: "Gain darkvision out to 60 feet." },
        { level: 2, name: "Uncanny Dodge", description: "Retain your Dexterity bonus to AC when flat-footed." },
        { level: 3, name: "Shadow Illusion", description: "Can create an illusion from shadows, as the 'silent image' spell." },
        { level: 3, name: "Summon Shadow", description: "Can summon a shadow, an undead creature." },
        { level: 4, name: "Shadow Jump", description: "Can teleport between shadows." },
        { level: 5, name: "Defensive Roll", description: "Can attempt to negate a lethal blow with a Reflex save." },
    ],
    progression: ['Rogue'],
};