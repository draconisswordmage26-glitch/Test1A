// data/prestigeClasses/godOfPacts.ts
import { PrestigeClass } from '../../types';

export const godOfPacts: PrestigeClass = {
    name: "God of Pacts",
    description: "The God of Pacts no longer just binds vestiges; it has become a living vestige itself. It is a nexus of dead gods, a living library of forgotten divine power.",
    requirements: [
        "Must have completed the Pact-Bound Ascendant prestige class.",
        "Feats: Epic Leadership, Ignore Special Requirements.",
        "Skills: Diplomacy 40 ranks, Knowledge (the planes) 40 ranks."
    ],
    prerequisites: {
        skills: { "Diplomacy": 40, "Knowledge (the planes)": 40 },
        feats: ["Epic Leadership", "Ignore Special Requirements"],
        special: "Pact-Bound Ascendant class features"
    },
    hitDie: 10,
    skillPoints: 6,
    classSkills: ["Bluff", "Concentration", "Diplomacy", "Intimidate", "Knowledge (any)", "Sense Motive"],
    bab: 'average',
    saves: { fort: 'poor', ref: 'poor', will: 'good' },
    features: [
      { level: 1, name: "Full Binder Level Progression", description: "Advances your existing soul binding progression at every level." },
      { level: 1, name: "Amalgam of Souls", description: "You are immune to mind-affecting effects, soul-trapping, and death effects. You gain a +2 inherent bonus to Charisma." },
      { level: 2, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 3, name: "Nexus of Dead Gods", description: "You can bind an additional number of vestiges equal to your Charisma modifier." },
      { level: 4, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to Charisma." },
      { level: 5, name: "Become Vestige", description: "Your soul becomes a nascent vestige. Other binders can attempt to make a pact with you, though doing so is incredibly difficult (Binding DC 50)." },
      { level: 6, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 7, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to Charisma." },
      { level: 8, "name": "Command Vestige", "description": "You can attempt to command other binders' vestiges, forcing a binding check contest to seize control of their powers for 1d4 rounds." },
      { level: 9, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 10, name: "Apotheosis of the Pact", description: "You gain a Divine Rank of 1. You become a quasi-deity of contracts and forgotten lore. Once per day, you can speak 'The Final Word', a save-or-die effect that erases a creature from existence on a failed Will save (DC 30 + class level + Cha mod)." },
    ],
};
