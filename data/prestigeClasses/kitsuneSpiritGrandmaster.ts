// data/prestigeClasses/kitsuneSpiritGrandmaster.ts
import { PrestigeClass } from '../../types';

export const kitsuneSpiritGrandmaster: PrestigeClass = {
    name: "Kitsune Spirit Grandmaster",
    description: "The Kitsune Spirit Grandmaster is an epic figure of legend who has perfected the harmonious blend of arcane magic, divine lore, roguish cunning, and bardic inspiration. She is a living story, a master of form and fate whose power is drawn from the endless well of narrative itself.",
    requirements: [
        "Race: Kitsune",
        "Class Feature: Must have completed the Fochlucan Lyrist prestige class.",
        "Feats: Epic Spellcasting, Great Charisma.",
        "Skills: Perform 30 ranks, Spellcraft 30 ranks, Bluff 30 ranks."
    ],
    prerequisites: {
        skills: { "Perform": 30, "Spellcraft": 30, "Bluff": 30 },
        feats: ["Epic Spellcasting", "Great Charisma"],
        special: "Fochlucan Lyrist class features"
    },
    hitDie: 6,
    skillPoints: 8,
    classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Disguise", "Escape Artist", "Gather Information", "Hide", "Jump", "Knowledge (all)", "Listen", "Move Silently", "Open Lock", "Perform", "Profession", "Search", "Sense Motive", "Sleight of Hand", "Speak Language", "Spellcraft", "Tumble", "Use Magic Device"],
    bab: 'average',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Harmonious Progression", description: "At each level, you advance your arcane spellcasting, divine spellcasting, bardic music abilities, and rogue special abilities (like sneak attack and trapfinding) as if you had gained a level in all of your original base classes (Bard, Rogue, Wizard, Archivist)." },
      { level: 1, name: "Inherent Bonus", description: "You gain a +2 inherent bonus to your Charisma score." },
      { level: 2, name: "Bonus Epic Feat", description: "You gain a bonus epic feat." },
      { level: 3, name: "Master of Nine Tales", description: "Your command of form becomes absolute. You can use your Change Shape or Wild Shape ability to assume the form of any creature of the Dragon or Outsider type (including unique individuals)." },
      { level: 4, name: "Inherent Bonus", description: "You gain a +2 inherent bonus to your Intelligence score." },
      { level: 5, name: "Improved Foxfire", description: "3/day, you can replicate the effect of a 'Symbol of Death', 'Symbol of Insanity', or 'Symbol of Stunning' spell (DC 20 + 1/2 character level + Cha modifier)." },
      { level: 6, name: "Bonus Epic Feat", description: "You gain a bonus epic feat." },
      { level: 7, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to your Charisma score." },
      { level: 8, name: "One with the Story", description: "You become a being of pure narrative. Your type changes to Fey, and you are immune to all language-dependent and sonic effects as you are the author of your own story. You gain DR 10/cold iron." },
      { level: 9, name: "Bonus Epic Feat", description: "You gain a bonus epic feat." },
      { level: 10, name: "Apotheosis of Legends", description: "You have become a true demigod of stories. Once per day, by telling a perfect, epic tale (a full-round action), you can produce the effect of a 'Wish' spell. You gain a Divine Rank of 0." },
    ],
    progression: ['Fochlucan Lyrist (Adapted)'],
};