// data/prestigeClasses/fateEnder.ts
import { PrestigeClass } from '../../types';

export const fateEnder: PrestigeClass = {
    name: "Fate-Ender",
    description: "The Fate-Ender is a being who has moved beyond merely seeing destiny to enforcing it. They are the silent arbiters of causality, tasked with pruning the timelines of paradoxes and ending beings whose existence threatens the fabric of reality.",
    requirements: [
        "Skills: Knowledge (the planes) 30 ranks, Sense Motive 30 ranks.",
        "Feats: Iron Will, Epic Will.",
        "Special: Must have the Fatespinner's 'Spin Fate' class feature or a similar ability to manipulate probability."
    ],
    prerequisites: {
        skills: { "Knowledge (the planes)": 30, "Sense Motive": 30 },
        feats: ["Iron Will", "Epic Will"],
        special: "Spin Fate class feature"
    },
    hitDie: 8,
    skillPoints: 6,
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Knowledge (any)", "Sense Motive", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing spellcasting or manifesting progression at every level." },
      { level: 1, name: "Fated Moment", description: "3/day, you can declare a single d20 roll made by anyone within sight to be a natural 20 or a natural 1." },
      { level: 2, name: "Unraveled", description: "You are immune to any effect that would alter your personal history, force you to reroll a die, or divine your future." },
      { level: 3, name: "See the Threads", description: "You are constantly under the effects of a True Seeing and Foresight spell." },
      { level: 4, name: "Inevitable", description: "You gain an insight bonus on all saving throws equal to your primary spellcasting ability modifier." },
      { level: 5, name: "Snip the Thread", description: "3/day, as a ranged touch attack, you can force a creature to make a Will save (DC 20 + class level + key ability mod) or be affected by a Temporal Stasis spell that bypasses SR." },
      { level: 6, name: "Fated Moment", description: "You can now use Fated Moment 5/day." },
      { level: 7, name: "Acausal Mind", description: "You are immune to all mind-affecting effects and automatically know when someone is lying." },
      { level: 8, name: "Weaver of Destiny", description: "As a full-round action, you can grant an ally the benefit of one of your epic feats for 1 minute." },
      { level: 9, name: "Inherent Bonus", description: "You gain a +2 inherent bonus to your primary spellcasting statistic." },
      { level: 10, name: "Cut the Thread", description: "Once per day, you can target one non-deity. The target must make a Will save (DC 25 + class level + key ability mod) or be erased from existence, with all memory of them removed from the timeline." },
    ],
    progression: ["Fatespinner"],
};