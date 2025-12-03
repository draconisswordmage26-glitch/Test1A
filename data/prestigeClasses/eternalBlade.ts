// data/prestigeClasses/eternalBlade.ts
import { PrestigeClass } from '../../types';

export const eternalBlade: PrestigeClass = {
    name: "Eternal Blade",
    description: "The eternal blade is a master of martial arts who has tapped into the flow of time itself. They see moments ahead in battle, and can even borrow actions from their own future to overwhelm their opponents in the present.",
    requirements: [
        "Base Attack Bonus: +10",
        "Feats: Combat Reflexes, Dodge, Improved Initiative, Mobility.",
        "Skills: Tumble 13 ranks.",
        "Maneuvers: Must know at least one Diamond Mind maneuver and one Iron Heart maneuver."
    ],
    prerequisites: {
        bab: 10,
        feats: ["Combat Reflexes", "Dodge", "Improved Initiative", "Mobility"],
        skills: { "Tumble": 13 },
        special: "Knowledge of Diamond Mind and Iron Heart maneuvers"
    },
    hitDie: 10,
    skillPoints: 4,
    classSkills: ["Balance", "Concentration", "Craft", "Intimidate", "Jump", "Knowledge (history)", "Sense Motive", "Tumble"],
    bab: 'good',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Full Initiator Level Progression", description: "This class advances your existing martial maneuver progression at every level." },
        { level: 1, name: "Blade Guide", description: "Add your Intelligence modifier as an insight bonus to your AC." },
        { level: 2, name: "Eternal Training", description: "Gain a bonus combat feat." },
        { level: 3, name: "Defensive Insight", description: "When fighting defensively or using Combat Expertise, you can add your Intelligence modifier to your attack rolls." },
        { level: 4, name: "Armored Uncanny Dodge", description: "Retain your Dexterity bonus to AC if flat-footed, even in medium or heavy armor." },
        { level: 5, name: "Island in Time", description: "As a swift action, you can enter a state of heightened perception for 1 round. You can take an extra move or standard action during this round." },
        { level: 6, name: "Bonus Feat", description: "Gain a bonus combat feat." },
        { level: 7, name: "Tactical Insight", description: "Add your Intelligence modifier as an insight bonus on damage rolls." },
        { level: 8, "name": "Improved Armored Uncanny Dodge", "description": "You can no longer be flanked." },
        { level: 9, name: "Bonus Feat", description: "Gain a bonus combat feat." },
        { level: 10, name: "Eternal Blade Stance", description: "As a free action, you can assume all of your known stances simultaneously for a number of rounds equal to your Intelligence modifier." }
    ]
};
