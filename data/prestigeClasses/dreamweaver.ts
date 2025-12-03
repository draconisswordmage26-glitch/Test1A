// data/prestigeClasses/dreamweaver.ts
import { PrestigeClass } from '../../types';

export const dreamweaver: PrestigeClass = {
    name: "Dreamweaver",
    description: "The Dreamweaver is an epic spellcaster who walks the line between illusion and reality. They have learned to pull threads from the dimension of dreams, weaving them into the material world to create effects that are both wondrous and terrifying.",
    requirements: [
        "Skills: Spellcraft 24 ranks, Bluff 24 ranks, Disguise 24 ranks.",
        "Feats: Epic Spellcasting, Spell Focus (Illusion), Greater Spell Focus (Illusion).",
        "Spells: Ability to cast 9th-level arcane or divine spells, including at least one illusion spell."
    ],
    prerequisites: {
        skills: { "Spellcraft": 24, "Bluff": 24, "Disguise": 24 },
        feats: ["Epic Spellcasting", "Spell Focus (Illusion)", "Greater Spell Focus (Illusion)"],
        // FIX: Corrected 'spells' property to match PrestigeClassPrerequisites interface. Assumed arcane path.
        special: "Ability to cast 9th-level arcane spells",
    },
    hitDie: 6,
    skillPoints: 4,
    classSkills: ["Bluff", "Concentration", "Craft", "Diplomacy", "Disguise", "Intimidate", "Knowledge (any)", "Perform", "Profession", "Sense Motive", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing spellcasting progression at every level." },
      { level: 1, name: "Weave the Dream", description: "Your illusion spells are now 10% more real per class level (to a maximum of 100%). Creatures interacting with them are subject to their real effects, though a successful Will save can reduce the effect." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat related to spellcasting." },
      { level: 3, name: "Dreamscape", description: "3/day, you can create a 100-ft. radius area that is an overlapping fusion of the material plane and the dimension of dreams. Within this area, your illusion spells are automatically heightened by 2 levels." },
      { level: 4, name: "Inherent Bonus", description: "You gain a +2 inherent bonus to your primary spellcasting statistic." },
      { level: 5, name: "Lucid Reality", description: "You can make your illusion spells real. Once per day, you can declare one illusion spell to be permanent and real, as if by a Wish spell." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat related to spellcasting." },
      { level: 7, name: "Dream Prison", description: "You can trap a creature's consciousness inside one of your illusions. They are treated as if under the effects of the 'Imprisonment' spell until the illusion is dispelled." },
      { level: 8, name: "Inherent Bonus", description: "You can gain another +2 inherent bonus to your primary spellcasting statistic." },
      { level: 9, name: "One with the Dream", description: "You are constantly under the effects of a Mind Blank spell and are immune to all illusion spells." },
      { level: 10, name: "Hyper-Reality Weaving", description: "Your mastery over dreams and reality is absolute. Your illusion spells are now 120% real. Creatures interacting with them do not get a saving throw to disbelieve, as the illusion is more real than the world around it. Effects created by your illusions are not only real, but are also infused with a touch of dream-logic, causing them to have amplified or bizarre side-effects at the DM's discretion (e.g., an illusory wall of fire might also cause targets to vividly hallucinate their worst fears)." },
    ],
};