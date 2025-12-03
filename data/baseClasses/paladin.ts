// data/baseClasses/paladin.ts
import { BaseClass } from "../../types";

export const paladin: BaseClass = {
    name: "Paladin",
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Profession", "Ride", "Sense Motive"],
    bab: 'good' as const,
    saves: { fort: 'good' as const, ref: 'poor' as const, will: 'good' as const },
    role: 'melee',
    casterType: 'divine',
    casterProgression: 'half',
    primaryAbility: 'cha',
    classFeatures: [
        { level: 1, name: "Smite Evil", description: "1/day, can add Cha bonus to attack and level to damage against an evil foe." },
        { level: 1, name: "Detect Evil", description: "Can detect evil at will." },
        { level: 2, name: "Divine Grace", description: "Adds Charisma bonus to all saving throws." },
        { level: 2, name: "Lay on Hands", description: "Can heal damage equal to Cha bonus x level." },
        { level: 3, name: "Aura of Courage", description: "Immune to fear, and allies within 10 ft. gain +4 morale bonus on saves against fear." },
        { level: 3, name: "Divine Health", description: "Immune to all diseases." },
        { level: 4, name: "Turn Undead", description: "Can turn undead as a cleric of three levels lower." },
        { level: 5, name: "Smite Evil", description: "Can use Smite Evil 2/day." },
        { level: 5, name: "Special Mount", description: "Gains a powerful, intelligent mount." },
        { level: 6, name: "Remove Disease", description: "Can use 'remove disease' 1/week." },
        { level: 9, name: "Remove Disease", description: "Can use 'remove disease' 2/week." },
        { level: 10, name: "Smite Evil", description: "Can use Smite Evil 3/day." },
        { level: 15, name: "Smite Evil", description: "Can use Smite Evil 4/day." },
        { level: 20, name: "Smite Evil", description: "Can use Smite Evil 5/day." },
        { level: 23, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 26, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 29, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 32, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 35, name: "Bonus Feat", description: "Gains a bonus epic feat." },
        { level: 38, name: "Bonus Feat", description: "Gains a bonus epic feat." },
    ]
};