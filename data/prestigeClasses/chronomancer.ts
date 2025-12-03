// data/prestigeClasses/chronomancer.ts
import { PrestigeClass } from '../../types';

export const chronomancer: PrestigeClass = {
    name: "Chronomancer",
    description: "The Chronomancer is a master of time itself. They perceive the flow of causality not as a line, but as a web of possibilities, and they have learned to pluck the strings to create the outcome they desire.",
    requirements: [
        "Skills: Knowledge (the planes) 25 ranks.",
        "Feats: Improved Initiative, and one of (Quicken Spell, Quicken Power, or a class feature that grants extra actions).",
        "Spells/Powers: Ability to cast Time Stop or a similar 9th-level effect."
    ],
    prerequisites: {
        skills: { "Knowledge (the planes)": 25 },
        feats: ["Improved Initiative", ["Quicken Spell", "Quicken Power"]],
        spells: { arcane: 9 },
        special: "or a class feature that grants extra actions"
    },
    hitDie: 8,
    skillPoints: 6,
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (any)", "Profession", "Psicraft", "Spellcraft", "Use Magic/Psionic Device"],
    bab: 'average',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing spellcasting or manifesting progression at every level." },
      { level: 1, name: "Temporal Stutter", description: "At will, as an immediate action, you can force any creature to reroll a d20 roll they just made." },
      { level: 2, name: "Prescience", description: "You can no longer be surprised or caught flat-footed. You gain your Int bonus as an insight bonus to AC and Reflex saves." },
      { level: 3, name: "Rewind", description: "3/day, you can rewind your own personal timeline to the start of your previous turn, negating any actions or damage that occurred." },
      { level: 4, name: "See the Timeline", description: "You are constantly under the effects of a Foresight spell and can see a few seconds into the future, granting you a +10 insight bonus on all attack rolls." },
      { level: 5, name: "Stop Time", description: "You gain three additional daily uses of the Time Stop spell. The duration is 1d4+2 rounds." },
      { level: 6, name: "Temporal Acceleration", description: "You are permanently under the effects of a Haste spell that stacks with other haste effects." },
      { level: 7, name: "Rewind Other", description: "3/day, you can use your Rewind ability on any creature in line of sight." },
      { level: 8, name: "Pocket Dimension", description: "You can create a permanent bubble of altered time, where time flows up to 1000 times faster or slower." },
      { level: 9, name: "Inherent Bonus", description: "You gain a +2 inherent bonus to your primary spellcasting/manifesting statistic." },
      { level: 10, name: "Unravel Timeline", description: "Once per day, you can touch a non-deity and force them to make a Will save (DC 20 + class level + Int mod). On a failure, they are removed from the timeline, and all memory of their existence is erased." },
    ],
    progression: ["Warblade", "Eternal Blade"],
};