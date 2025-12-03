// data/prestigeClasses/pactBoundAscendant.ts
import { PrestigeClass } from '../../types';

export const pactBoundAscendant: PrestigeClass = {
    name: "Pact-Bound Ascendant",
    description: "The Pact-Bound Ascendant is a binder who has reached beyond the veil of known vestiges to forge pacts with entities of cosmic power: dead gods, nascent ideas, and the lingering echoes of previous realities.",
    requirements: [
        "Skills: Knowledge (the planes) 25 ranks.",
        "Feats: Epic Toughness, Improved Binding.",
        "Special: Ability to bind 8th-level vestiges."
    ],
    prerequisites: {
        skills: { "Knowledge (the planes)": 25 },
        feats: ["Epic Toughness", "Improved Binding"],
        special: "Ability to bind 8th-level vestiges"
    },
    hitDie: 10,
    skillPoints: 4,
    classSkills: ["Bluff", "Concentration", "Decipher Script", "Diplomacy", "Intimidate", "Knowledge (any)", "Profession", "Sense Motive"],
    bab: 'average',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Binder Level Progression", description: "Your binder level and vestiges known/bound progress as if you had taken a level in your previous binder class." },
      { level: 1, name: "Bind Epic Vestige", description: "You can now bind epic-level vestiges, forging pacts with entities of immense power." },
      { level: 2, name: "Ignore Special Requirement", description: "You can ignore the special requirements for binding all vestiges you know." },
      { level: 3, name: "Ascendant Power", description: "The DC for your vestiges' supernatural abilities increases by 3." },
      { level: 4, name: "Bonus Epic Feat", description: "Gain a bonus binding-related epic feat." },
      { level: 5, name: "Channel Ascendant", description: "3/day, you can manifest a major power of a bound epic vestige, such as a dead god's ability to sunder reality or a forgotten creator's ability to forge life." },
      { level: 6, name: "Ascendant Power", description: "The DC for your vestiges' supernatural abilities increases by another 3." },
      { level: 7, name: "Pact of the Soul", description: "You can now make a pact in 1 round, and the process can no longer be interrupted." },
      { level: 8, name: "Bonus Epic Feat", description: "Gain a bonus binding-related epic feat." },
      { level: 9, name: "One with the Vestige", description: "You gain a +6 profane bonus to an ability score of your choice from one of your bound vestiges." },
      { level: 10, name: "Nexus of Dead Gods", description: "You can bind a number of additional vestiges equal to your Charisma modifier." },
    ],
    progression: ["Binder"],
};