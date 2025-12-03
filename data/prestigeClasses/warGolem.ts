// data/prestigeClasses/warGolem.ts
import { PrestigeClass } from '../../types';

export const warGolem: PrestigeClass = {
    name: "War Golem",
    description: "A war golem is the pinnacle of construct engineering, a mindless engine of destruction upgraded with superior armor, integrated weapons, and a tactical command module that allows it to execute complex combat routines.",
    requirements: [
        "Type: Construct.",
        "Base Attack Bonus: +21.",
        "Feats: Power Attack, Improved Sunder."
    ],
    prerequisites: {
        bab: 21,
        feats: ["Power Attack", "Improved Sunder"],
        type: "Construct",
    },
    hitDie: 12,
    skillPoints: 0,
    classSkills: [],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'poor'
    },
    features: [
        { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
        { level: 1, name: "Adamantine Plating", description: "Your natural armor bonus increases by 3, and your DR increases by 5/adamantine." },
        { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter bonus feat list." },
        { level: 3, name: "Integrated Weaponry", description: "Your slam attacks are treated as having a +2 enhancement bonus." },
        { level: 4, name: "Improved Magic Immunity", description: "Your immunity extends to spells of up to 4th level, even if they do not allow spell resistance." },
        { level: 5, name: "Siege Engine", description: "You deal double damage to objects and structures." },
        { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter bonus feat list." },
        { level: 7, name: "Adamantine Plating", description: "Your natural armor bonus increases by another 3, and your DR by another 5/adamantine." },
        { level: 8, name: "Integrated Weaponry", description: "The enhancement bonus of your slam attacks increases to +4." },
        { level: 9, name: "Ablative Armor", description: "Once per day, you can ignore the damage from a single attack or spell." },
        { level: 10, name: "Annihilator Beam", description: "Once per day, you can fire a 300-ft. line of force dealing 40d6 damage (Reflex DC 50 half)." }
    ]
};