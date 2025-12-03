// data/prestigeClasses/divineAgent.ts
import { PrestigeClass } from '../../types';

export const divineAgent: PrestigeClass = {
    name: "Divine Agent",
    description: "A divine agent is a mortal who has been chosen to act as a direct extension of their deity's will in the world. They are imbued with a spark of divine power, becoming more than mortal.",
    requirements: [
        "Base Attack Bonus: +21",
        "Feats: Epic Leadership, any two other Epic feats",
        "Alignment: Same as deity",
        "Special: Must have performed a legendary service for their deity."
    ],
    prerequisites: {
        bab: 21,
        feats: ["Epic Leadership"],
        special: "Performed legendary service for deity",
        alignment: ["Same as deity"]
    },
    hitDie: 10,
    skillPoints: 4,
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Intimidate", "Knowledge (religion)", "Profession", "Sense Motive"],
    bab: 'average',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing divine spellcasting progression at every level." },
        { level: 1, name: "Divine Spark", description: "You gain a +2 inherent bonus to your primary divine spellcasting ability score." },
        { level: 2, name: "Aura of the Deity", description: "You gain a divine aura that provides a +4 sacred/profane bonus to AC and saves to all allies within 60 feet." },
        { level: 3, name: "Bonus Domain", description: "You gain access to one of your deity's domains as a bonus domain." },
        { level: 4, name: "Divine Health", description: "You are immune to all diseases, both magical and mundane." },
        { level: 5, name: "Hand of the Deity", description: "You can channel your deity's power. Once per day, you can replicate any spell from your deity's domains as a spell-like ability." },
        { level: 6, name: "Divine Spark", description: "Gain another +2 inherent bonus to your primary divine spellcasting ability score." },
        { level: 7, name: "Planar Travel", description: "You can use Plane Shift at will, but only to travel to or from your deity's home plane." },
        { level: 8, name: "Bonus Domain", description: "You gain access to a second bonus domain from your deity's list." },
        { level: 9, name: "Divine Body", description: "You become immune to poison and gain DR 10/epic." },
        { level: 10, name: "Divine Apotheosis", description: "You become a quasi-deity, gaining a Divine Rank of 0. Your type changes to Outsider, and you become a native of your deity's home plane." }
    ],
    progression: ["Cleric", "Pious Templar"],
};