// data/prestigeClasses/fatespinner.ts
import { PrestigeClass } from '../../types';

export const fatespinner: PrestigeClass = {
    name: "Fatespinner",
    description: "The fatespinner learns to see the threads of probability that weave the future, and with a touch, can make them bend to their will. They are masters of luck, able to ensure success or guarantee failure with a subtle twist of fate.",
    requirements: [
        "Skills: Profession (gambler) 6 ranks or Decipher Script 6 ranks.",
        "Feats: Iron Will.",
        "Spells: Ability to cast 3rd-level spells."
    ],
    prerequisites: {
        skills: { "__or__": { "Profession (gambler)": 6, "Decipher Script": 6 } },
        feats: ["Iron Will"],
        spells: { arcane: 3 },
    },
    hitDie: 6,
    skillPoints: 2,
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Knowledge (any)", "Profession", "Sense Motive", "Sleight of Hand", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing spellcasting progression at every level." },
        { level: 1, name: "Spin Fate", description: "You gain a pool of 'fate points' equal to your class level + your key ability modifier. You can spend a point to add a +1d6 luck bonus to any d20 roll, before or after the roll is made." },
        { level: 2, name: "Fickle Finger of Fate", description: "You can spend a fate point to force an opponent to reroll a d20 roll they just made." },
        { level: 3, name: "Deny the Reaper", description: "You can spend 5 fate points to automatically stabilize when dying." },
        { level: 4, name: "Seal Fate", description: "You can spend 3 fate points to make a d20 roll result of '1' or '20' for a single roll made by any creature in sight." },
        { level: 5, name: "Twist of Fate", description: "When you use Fickle Finger of Fate, you can choose which of the two rolls the opponent uses." }
    ],
    advancesArcane: true,
    progression: ['Wizard'],
};