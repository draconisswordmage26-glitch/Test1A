// data/prestigeClasses/contemplative.ts
import { PrestigeClass } from '../../types';

export const contemplative: PrestigeClass = {
    name: "Contemplative",
    description: "The contemplative is a divine spellcaster who, through deep meditation and spiritual insight, has achieved a direct connection to the divine. They are one step closer to their deity, a conduit for pure divine power.",
    requirements: [
        "Skills: Knowledge (religion) 13 ranks.",
        "Feats: Iron Will.",
        "Special: Must have had direct, personal contact with their deity or a direct servant thereof."
    ],
    prerequisites: {
        skills: { "Knowledge (religion)": 13 },
        feats: ["Iron Will"],
        special: "Direct contact with deity/servant"
    },
    hitDie: 6,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (religion)", "Profession", "Sense Motive", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing divine spellcasting progression at every level." },
        { level: 1, name: "Bonus Domain", description: "You gain access to a new domain, chosen from your deity's list." },
        { level: 1, name: "Divine Health", description: "You are immune to all diseases, both magical and mundane." },
        { level: 2, name: "Slippery Mind", description: "If you fail a save against an enchantment effect, you can attempt the save again one round later." },
        { level: 3, name: "Divine Body", description: "You become immune to all poisons." },
        { level: 4, name: "Divine Wholeness", description: "You can heal yourself of 4 times your character level in hit points per day." },
        { level: 5, name: "Bonus Domain", description: "You gain access to another bonus domain." },
        { level: 6, name: "Timeless Body", description: "You no longer age and are immune to magical aging effects." },
        { level: 7, name: "Divine Touch", description: "You can touch a creature to remove any curse, disease, or poison." },
        { level: 8, name: "Eternity", description: "You are immune to all forms of energy drain." },
        { level: 9, name: "Bonus Domain", description: "You gain access to another bonus domain." },
        { level: 10, name: "Mystic Union", description: "Your type changes to Outsider. You have become a native of your deity's home plane." }
    ]
};
