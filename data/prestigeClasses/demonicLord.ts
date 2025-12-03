// data/prestigeClasses/demonicLord.ts
import { PrestigeClass } from '../../types';

export const demonicLord: PrestigeClass = {
    name: "Demonic Lord",
    description: "The demonic lord is a creature of the Abyss that has clawed its way to the pinnacle of power. Through sheer will and chaotic might, it has carved out its own domain in the infinite layers of the Abyss, becoming a true prince of chaos.",
    requirements: [
        "Type: Outsider (Chaotic, Evil).",
        "Base Attack Bonus: +21.",
        "Feats: Epic Leadership, Epic Toughness.",
        "Special: Must control a significant portion of an Abyssal layer."
    ],
    prerequisites: {
        bab: 21,
        feats: ["Epic Leadership", "Epic Toughness"],
        special: "control of an Abyssal layer",
        alignment: ["Chaotic Evil"],
        type: "Outsider (Chaotic, Evil)",
    },
    hitDie: 12,
    skillPoints: 6,
    classSkills: ["Bluff", "Concentration", "Craft", "Diplomacy", "Intimidate", "Jump", "Knowledge (the planes)", "Listen", "Search", "Sense Motive", "Spellcraft", "Spot", "Survival", "Use Magic Device"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Lord of the Abyss", description: "You can grant spells to followers as if you were a deity. You gain a +2 inherent bonus to an ability score of your choice." },
      { level: 2, name: "Create Abyssal Layer", description: "You can create a personal demiplane with the traits of the Abyss. This layer is connected to a random layer of the Abyss." },
      { level: 3, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 4, name: "Profane Aura", description: "You gain a profane bonus to your AC equal to your Charisma modifier." },
      { level: 5, name: "Shape the Chaos", description: "Within your own Abyssal layer, you can use the 'Wish' spell at will." },
      { level: 6, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to an ability score of your choice." },
      { level: 7, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 8, name: "Demonic Apotheosis", description: "You gain a Divine Rank of 0. You are now a quasi-deity." },
      { level: 9, name: "One with the Abyss", description: "You become intrinsically linked to the Abyss itself. You can only be permanently slain if the entire Abyss is destroyed." },
      { level: 10, "name": "Apocalyptic Rage", "description": "Once per day, you can enter a rage so powerful it can shatter landscapes, unravel magic, and temporarily gain a Divine Rank of 1." }
    ],
    progression: ["Barbarian"],
};