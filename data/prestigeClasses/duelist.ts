// data/prestigeClasses/duelist.ts
import { PrestigeClass } from '../../types';

export const duelist: PrestigeClass = {
    name: "Duelist",
    description: "The duelist is a nimble, intelligent fighter who forgoes heavy armor and shields in favor of speed, agility, and cunning. They are masters of the one-handed piercing blade.",
    requirements: [
        "Base Attack Bonus: +6",
        "Skills: Tumble 5 ranks, Perform 3 ranks",
        "Feats: Dodge, Mobility, Weapon Finesse"
    ],
    prerequisites: {
        bab: 6,
        skills: { "Tumble": 5, "Perform": 3 },
        feats: ["Dodge", "Mobility", "Weapon Finesse"]
    },
    hitDie: 10,
    skillPoints: 4,
    classSkills: ["Balance", "Bluff", "Escape Artist", "Jump", "Listen", "Perform", "Sense Motive", "Spot", "Tumble"],
    bab: 'good',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'poor'
    },
    features: [
        { level: 1, name: "Canny Defense", description: "Add your Intelligence bonus (up to your class level) as a dodge bonus to your AC." },
        { level: 2, name: "Precise Strike", description: "Add 1d6 to your damage rolls with a light or one-handed piercing weapon." },
        { level: 3, name: "Improved Reaction", description: "+2 bonus on initiative checks." },
        { level: 4, name: "Parry", description: "Can make an opposed attack roll to parry an incoming attack." },
        { level: 5, name: "Riposte", description: "If you successfully parry an attack, you can make an attack of opportunity." },
    ],
    progression: ['Rogue'],
};