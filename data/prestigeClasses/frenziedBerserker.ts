// data/prestigeClasses/frenziedBerserker.ts
import { PrestigeClass } from '../../types';

export const frenziedBerserker: PrestigeClass = {
    name: "Frenzied Berserker",
    description: "The frenzied berserker is a warrior who has tapped into a primal, unstoppable rage. In their frenzy, they become incapable of distinguishing friend from foe, a whirlwind of destruction that only ends when all others have fallen.",
    requirements: [
        "Base Attack Bonus: +6",
        "Feats: Cleave, Great Cleave, Power Attack, Destructive Rage.",
        "Alignment: Any nonlawful."
    ],
    prerequisites: {
        bab: 6,
        feats: ["Cleave", "Great Cleave", "Power Attack", "Destructive Rage"],
        alignment: ["Chaotic Good", "Chaotic Neutral", "Chaotic Evil", "Neutral", "Neutral Good"]
    },
    hitDie: 12,
    skillPoints: 2,
    classSkills: ["Climb", "Intimidate", "Jump", "Ride", "Swim"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'poor'
    },
    features: [
        { level: 1, name: "Frenzy", description: "Once per day, you can enter a frenzy that grants a +6 morale bonus to Strength, but you take a -4 penalty to AC and must attack the nearest creature each round. The frenzy lasts for 3 + your Con modifier rounds." },
        { level: 2, name: "Supreme Cleave", description: "When you fell a creature with Cleave or Great Cleave, you may take a 5-foot step before making the extra attack." },
        { level: 3, name: "Enhanced Frenzy", description: "Your frenzy now grants a +8 morale bonus to Strength." },
        { level: 4, name: "Inspire Frenzy", description: "You can inspire frenzy in all willing allies within 10 feet." },
        { level: 5, name: "Greater Frenzy", description: "You can enter a frenzy twice per day, and it now grants a +10 morale bonus to Strength." },
        { level: 6, name: "Tireless Frenzy", description: "You are no longer fatigued at the end of a frenzy." },
        { level: 7, name: "Deathless Frenzy", description: "While in a frenzy, you are not considered disabled or dying until your hit points reach -20." },
        { level: 8, name: "Improved Power Attack", description: "You gain a +3 bonus on damage rolls for every -2 penalty you take on attack rolls with Power Attack." },
        { level: 9, name: "Inspire Frenzy", description: "The range of your inspire frenzy ability increases to 20 feet." },
        { level: 10, name: "Supreme Frenzy", description: "You can enter a frenzy three times per day, and it no longer has a limited duration. You can end it voluntarily with a DC 20 Will save." }
    ],
    progression: ['Barbarian'],
};