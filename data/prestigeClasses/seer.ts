// data/prestigeClasses/seer.ts
import { PrestigeClass } from '../../types';

export const seer: PrestigeClass = {
    name: "Seer",
    description: "The Seer is a master of divination, a spellcaster who has peered beyond the veil of time to glimpse the patterns of fate. Their power lies not in destruction, but in perfect knowledge and preparation.",
    requirements: [
        "Skills: Knowledge (any two) 10 ranks, Spellcraft 10 ranks.",
        "Feats: Iron Will, Skill Focus (Spellcraft).",
        "Spells: Ability to cast at least five different divination spells, one of which must be 3rd level or higher."
    ],
    prerequisites: {
        skills: { "Knowledge (any)": 10, "Spellcraft": 10 },
        feats: ["Iron Will", "Skill Focus (Spellcraft)"],
        spells: { arcane: 3 },
    },
    hitDie: 4,
    skillPoints: 4,
    classSkills: ["Concentration", "Craft", "Decipher Script", "Gather Information", "Knowledge (all)", "Profession", "Scry", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing spellcasting progression at every level." },
      { level: 1, name: "Prescience", description: "You can no longer be surprised or caught flat-footed. You gain a +2 insight bonus on initiative checks." },
      { level: 2, name: "See the Unseen", description: "You are constantly under the effects of a 'See Invisibility' spell." },
      { level: 3, name: "Glimpse of the Future", description: "3/day, you can gain a +5 insight bonus on any single d20 roll you make. You must declare this before the roll." },
      { level: 4, name: "Immune to Illusions", description: "You are immune to all illusion spells and effects." },
      { level: 5, name: "Foretell", description: "Once per day, you can cast 'Foresight' as a spell-like ability." },
    ],
    advancesArcane: true,
};