// data/prestigeClasses/legendaryHierophant.ts
import { PrestigeClass } from '../../types';

export const legendaryHierophant: PrestigeClass = {
    name: "Legendary Hierophant",
    description: "The legendary hierophant is a being who has become one with the divine essence of nature itself. They are no longer a mere priest of the natural world, but a living embodiment of its power, a demigod of the wilderness.",
    requirements: [
        "Skills: Knowledge (nature) 30 ranks, Knowledge (religion) 30 ranks.",
        "Feats: Epic Spellcasting, any three other Epic feats.",
        "Spells: Ability to cast 9th-level divine spells."
    ],
    prerequisites: {
        skills: { "Knowledge (nature)": 30, "Knowledge (religion)": 30 },
        feats: ["Epic Spellcasting"],
        // FIX: Corrected 'spells' property to match PrestigeClassPrerequisites interface.
        special: "Ability to cast 9th-level divine spells",
    },
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (any)", "Profession", "Spellcraft", "Survival"],
    bab: 'average',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing divine spellcasting progression at every level." },
        { level: 1, name: "One with Nature", description: "You are treated as a fey for the purpose of spells and effects. You gain DR 5/cold iron." },
        { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
        { level: 3, name: "Divine Reach", description: "The range of all your spells is doubled." },
        { level: 4, name: "Master of the Wild", description: "Your Wild Shape ability is now a free action, and you can assume the form of any creature (as the Shapechange spell)." },
        { level: 5, name: "Primal Power", description: "The save DCs for all your spells increase by 2." },
        { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
        { level: 7, name: "Undying Nature", description: "You are immune to death effects, ability drain, and negative energy. You no longer age." },
        { level: 8, name: "Nature's Avatar", description: "You can cast any spell on the Druid spell list as if it were on your spell list." },
        { level: 9, name: "Primal Power", description: "The save DCs for all your spells increase by another 2." },
        { level: 10, name: "God of the Wild", description: "You gain a Divine Rank of 0, becoming a quasi-deity of nature, animals, and the elements. You can grant spells to followers and establish a divine domain." }
    ],
    advancesDivine: true,
};