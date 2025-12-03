// data/prestigeClasses/piousTemplar.ts
import { PrestigeClass } from '../../types';

export const piousTemplar: PrestigeClass = {
    name: "Pious Templar",
    description: "A holy warrior who blends martial prowess with divine power, serving as a militant arm of their church. They are stalwart defenders of the faith and relentless foes of heretics and fiends.",
    requirements: [
        "Base Attack Bonus: +5",
        "Feats: Weapon Focus (deity's favored weapon), Power Attack",
        "Alignment: Within one step of deity's",
        "Special: Ability to turn or rebuke undead"
    ],
    prerequisites: {
        bab: 5,
        feats: ["Weapon Focus", "Power Attack"],
        special: "Turn or rebuke undead",
        alignment: ["Within one step of deity"]
    },
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Climb", "Concentration", "Craft", "Diplomacy", "Heal", "Intimidate", "Jump", "Knowledge (religion)", "Profession", "Ride", "Sense Motive"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
        { level: 1, name: "Smite Evil/Good", description: "Gains the ability to smite foes of the opposite alignment (1/day)." },
        { level: 2, name: "Mettle", description: "If you succeed on a Fortitude or Will save against an effect with a partial effect, you instead suffer no effect." },
        { level: 3, name: "Bonus Feat", description: "Gain a bonus feat from the Fighter bonus feat list." },
        { level: 4, name: "Divine Grace", description: "Add your Charisma bonus to all saving throws." },
        { level: 5, name: "Smite Evil/Good", description: "Gain an additional use of smite per day." },
        { level: 6, name: "Bonus Feat", description: "Gain a bonus feat from the Fighter bonus feat list." },
        { level: 7, name: "True Believer", description: "You are immune to fear effects, and allies within 30 feet gain a +4 morale bonus on saves against fear." },
        { level: 8, name: "Smite Evil/Good", description: "Gain an additional use of smite per day." },
        { level: 9, name: "Bonus Feat", description: "Gain a bonus feat from the Fighter bonus feat list." },
        { level: 10, name: "Aura of Sanctity", description: "You are constantly surrounded by a Magic Circle against Evil/Good effect." }
    ],
    progression: ['Cleric'],
};