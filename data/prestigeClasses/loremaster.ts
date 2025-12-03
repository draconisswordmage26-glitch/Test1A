// data/prestigeClasses/loremaster.ts
import { PrestigeClass } from '../../types';

export const loremaster: PrestigeClass = {
    name: "Loremaster",
    description: "The loremaster is a scholar of the obscure, a collector of forgotten secrets and lost knowledge. Their power comes not from raw magical might, but from knowing the perfect piece of information for any situation.",
    requirements: [
        "Skills: Any two Knowledge skills with 10 ranks each.",
        "Feats: Any three metamagic or item creation feats, plus Skill Focus in any Knowledge skill.",
        "Spells: Ability to cast at least seven different divination spells, one of which must be 3rd level or higher."
    ],
    prerequisites: {
        skills: { "Knowledge (any)": 10 },
        feats: ["Skill Focus (Knowledge)"], // Simplified
        spells: { arcane: 3 },
    },
    hitDie: 4,
    skillPoints: 4,
    classSkills: ["Appraise", "Concentration", "Craft", "Decipher Script", "Gather Information", "Heal", "Knowledge (all)", "Perform", "Profession", "Scry", "Speak Language", "Spellcraft", "Use Magic Device"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Secret", description: "At 1st level and every two levels thereafter, you choose one secret from the Loremaster secrets list, such as Secret of True Stamina (+2 Con) or Secret of Instant Mastery (gain a new feat)." },
        { level: 1, name: "Lore", description: "You can make a special lore check (d20 + class level + Int modifier) to recall obscure information." },
        { level: 2, name: "Bonus Language", description: "You learn a new language." },
        { level: 3, name: "Secret", description: "Gain another secret." },
        { level: 4, name: "Bonus Spell", description: "You learn a new spell of any level you can cast." },
        { level: 5, name: "Secret", description: "Gain another secret." },
        { level: 6, name: "Greater Lore", description: "You can use your Lore ability to identify magic items as if using the Identify spell." },
        { level: 7, name: "Secret", description: "Gain another secret." },
        { level: 8, name: "Bonus Spell", description: "You learn a new spell of any level you can cast." },
        { level: 9, name: "Secret", description: "Gain another secret." },
        { level: 10, name: "True Lore", description: "Once per day, you can use your Lore ability as if you had cast a Legend Lore spell." }
    ],
    progression: ['Wizard'],
};