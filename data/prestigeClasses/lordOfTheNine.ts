// data/prestigeClasses/lordOfTheNine.ts
import { PrestigeClass } from '../../types';

export const lordOfTheNine: PrestigeClass = {
    name: "Lord of the Nine",
    description: "The Lord of the Nine is a devil who has ascended to the ruling council of Hell. Through masterful intrigue, unbreakable contracts, and absolute military discipline, they have claimed one of the nine layers as their personal domain.",
    requirements: [
        "Type: Outsider (Lawful, Evil).",
        "Base Attack Bonus: +21.",
        "Feats: Epic Leadership, Epic Reputation.",
        "Special: Must have successfully overthrown a current Lord of the Nine or been appointed by Asmodeus."
    ],
    prerequisites: {
        bab: 21,
        feats: ["Epic Leadership", "Epic Reputation"],
        special: "rule a layer of Hell",
        alignment: ["Lawful Evil"],
        type: "Outsider (Lawful, Evil)",
    },
    hitDie: 10,
    skillPoints: 8,
    classSkills: ["Appraise", "Bluff", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Forgery", "Intimidate", "Knowledge (any)", "Perform", "Profession", "Sense Motive", "Spellcraft"],
    bab: 'average',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing spell-like ability caster level at every level." },
      { level: 1, name: "Archduke of Hell", description: "You can grant spells to followers. You gain a +2 inherent bonus to an ability score of your choice." },
      { level: 2, name: "Master of Contracts", description: "The save DCs for your enchantment and compulsion effects increase by 4." },
      { level: 3, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 4, name: "Infernal Aura", description: "You gain a profane bonus to your AC and saves equal to your Intelligence modifier." },
      { level: 5, name: "Lord of Your Layer", description: "Within your layer of Hell, you can use the 'Wish' spell at will." },
      { level: 6, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to an ability score of your choice." },
      { level: 7, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 8, name: "Diabolical Apotheosis", description: "You gain a Divine Rank of 0. You are now a quasi-deity." },
      { level: 9, name: "One with Hell", description: "You become intrinsically linked to the Nine Hells. You can only be permanently slain if the entire plane is destroyed." },
      { level: 10, "name": "Word of Law", "description": "Once per day, you can speak a Word of Law that functions as the epic spell 'Axiomatic Edict' but affects all creatures on the plane." }
    ],
    progression: ["Knight", "Hellfire Warlock"],
};