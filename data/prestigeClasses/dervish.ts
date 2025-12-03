// data/prestigeClasses/dervish.ts
import { PrestigeClass } from '../../types';

export const dervish: PrestigeClass = {
    name: "Dervish",
    description: "The dervish is a whirlwind of motion and steel, a dancer who turns combat into an art form. They specialize in dual-wielding scimitars and moving across the battlefield in a blur.",
    requirements: [
        "Base Attack Bonus: +5",
        "Skills: Tumble 5 ranks, Perform (dance) 5 ranks",
        "Feats: Dodge, Mobility, Combat Expertise"
    ],
    prerequisites: {
        bab: 5,
        skills: { "Tumble": 5, "Perform": 5 },
        feats: ["Dodge", "Mobility", "Combat Expertise"]
    },
    hitDie: 10,
    skillPoints: 4,
    classSkills: ["Balance", "Escape Artist", "Jump", "Perform", "Tumble"],
    bab: 'good',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'poor'
    },
    features: [
        { level: 1, name: "Dervish Dance", description: "1/day, can enter a state that allows a full attack at the end of a move action." },
        { level: 2, name: "AC Bonus", description: "Gain a dodge bonus to AC that increases with level." },
        { level: 3, name: "Movement Mastery", description: "+5ft to speed." },
        { level: 4, name: "Dance of Death", description: "While in a dervish dance, you can attack an additional foe." },
        { level: 5, name: "Improved Reaction", description: "+2 on initiative checks." },
        { level: 6, name: "Elaborate Parry", description: "Gain a +4 bonus to AC when fighting defensively." },
        { level: 7, name: "Tireless Dance", description: "You are no longer fatigued after a dervish dance." },
        { level: 8, name: "A Thousand Cuts", description: "Your dervish dance becomes a Whirlwind Attack that can be used while moving." },
    ],
    progression: ['Fighter'],
};