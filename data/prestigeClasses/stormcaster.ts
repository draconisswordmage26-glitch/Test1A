// data/prestigeClasses/stormcaster.ts
import { PrestigeClass } from '../../types';

export const stormcaster: PrestigeClass = {
    name: "Stormcaster",
    description: "The stormcaster is a spellcaster who has dedicated themselves to the raw, untamed power of the storm. They can call lightning, command the winds, and their very presence can bring on a hurricane.",
    requirements: [
        "Skills: Knowledge (nature) 8 ranks, Survival 4 ranks.",
        "Feats: Endurance.",
        "Spells: Ability to cast 'Call Lightning' and 'Sleet Storm'."
    ],
    prerequisites: {
        skills: { "Knowledge (nature)": 8, "Survival": 4 },
        feats: ["Endurance"],
        spells: { divine: 3 },
    },
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Concentration", "Craft", "Handle Animal", "Knowledge (nature)", "Listen", "Profession", "Ride", "Spellcraft", "Spot", "Survival", "Swim"],
    bab: 'average',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing divine spellcasting progression at every level." },
      { level: 1, name: "Storm Eyes", description: "You can see perfectly in any weather conditions, magical or mundane." },
      { level: 2, name: "Wind's Embrace", description: "You are never checked or blown away by winds." },
      { level: 3, name: "Thunderclap", description: "You can create a clap of thunder that deafens foes in a 20-ft. burst." },
      { level: 4, name: "Empower Electricity", description: "Your electrical spells are automatically empowered." },
      { level: 5, name: "Storm Elemental Wild Shape", description: "You can use your Wild Shape ability to become a Huge storm elemental." },
      { level: 6, name: "Body of the Storm", description: "You gain electricity resistance 10." },
      { level: 7, name: "Deafening Thunderclap", description: "Your thunderclap now also stuns foes." },
      { level: 8, name: "Maximize Electricity", description: "Your electrical spells are automatically maximized." },
      { level: 9, name: "Unimpeded", description: "You can walk on water and are immune to Freedom of Movement effects." },
      { level: 10, name: "Eye of the Hurricane", description: "You are constantly surrounded by a whirlwind that damages and buffets your foes, but not you." },
    ],
    advancesDivine: true,
    progression: ['Druid'],
};