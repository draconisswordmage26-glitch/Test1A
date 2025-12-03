// data/prestigeClasses/genesisAvatar.ts
import { PrestigeClass } from '../../types';

export const genesisAvatar: PrestigeClass = {
    name: "Genesis Avatar",
    description: "The Genesis Avatar is a master of a specific planar essence who has learned the ultimate act of creation: the ability to form a personal demiplane. They are architects of reality, shaping worlds from the raw stuff of the cosmos.",
    requirements: [
      "Skills: Knowledge (the planes) 30 ranks, Spellcraft or Psicraft 30 ranks.",
      "Spells/Powers: Ability to cast 9th-level spells or manifest 9th-level powers.",
      "Special: Must have the Planar Shepherd's 'Planar Apotheosis' class feature or similar ability to merge with a plane."
    ],
    prerequisites: {
        skills: { "Knowledge (the planes)": 30, "Spellcraft": 30 },
        spells: { divine: 9 },
        special: "Planar Apotheosis class feature"
    },
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Concentration", "Craft", "Knowledge (any)", "Profession", "Spellcraft", "Psicraft"],
    bab: 'average',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing spellcasting or manifesting progression at every level." },
      { level: 1, name: "Worldseed", description: "You can plant a 'seed' of your home plane's essence. This creates a permanent 1-mile radius area with your plane's traits. You can have multiple seeds." },
      { level: 2, name: "Impose Planar Trait", description: "At will, you can imbue a 1-mile area with one of your home plane's traits for 24 hours." },
      { level: 3, name: "Create Demiplane", description: "You can cast the Genesis spell as a full-round action once per day." },
      { level: 4, name: "Planar Mastery", description: "You gain a +4 bonus to caster/manifester level when on a plane that shares one of your home plane's traits, or within your own demiplane." },
      { level: 5, name: "Pocket Universe", description: "Your demiplane can be of any size, and you can add or remove planar traits at will as a full-round action." },
      { level: 6, name: "Impose Greater Planar Trait", description: "Your 'Impose Planar Trait' ability can now affect a 10-mile radius and can be made permanent." },
      { level: 7, name: "Lord of Your Domain", description: "Within your own demiplane, you can use Wish at will as a spell-like ability with no component or XP cost." },
      { level: 8, name: "Inherent Bonus", description: "You gain a +2 inherent bonus to the ability score of your choice." },
      { level: 9, name: "Planar Bubble", description: "You can create a mobile, 100-ft radius demiplane around yourself that travels with you, protecting you with its planar traits." },
      { level: 10, name: "Forge Reality", description: "You can permanently merge your demiplane with an existing plane, overwriting its traits in a 100-mile radius, or create a new, stable plane within the multiverse." },
    ],
    progression: ["Druid", "Planar Shepherd"],
};