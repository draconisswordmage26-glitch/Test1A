// data/prestigeClasses/mindBender.ts
import { PrestigeClass } from '../../types';

export const mindBender: PrestigeClass = {
    name: "Mind-Bender",
    description: "The Mind-Bender is a psion who has mastered the ultimate form of telepathy: the ability to edit the very fabric of a creature's consciousness. They can rewrite memories, alter personalities, and implant ideas with flawless precision.",
    requirements: [
        "Skills: Bluff 30 ranks, Psicraft 30 ranks.",
        "Feats: Greater Power Penetration, Epic Psionic Focus.",
        "Powers: Must be able to manifest 9th-level telepathy powers."
    ],
    prerequisites: {
        skills: { "Bluff": 30, "Psicraft": 30 },
        feats: ["Greater Power Penetration", "Epic Psionic Focus"],
        special: "Ability to manifest 9th-level telepathy powers"
    },
    hitDie: 6,
    skillPoints: 4,
    classSkills: ["Bluff", "Concentration", "Diplomacy", "Disguise", "Intimidate", "Knowledge (psionics)", "Psicraft", "Sense Motive"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Manifester Level Progression", description: "This class advances your existing manifesting progression at every level." },
      { level: 1, name: "Subtle Whisper", description: "The DCs of your mind-affecting powers increase by 4, and they are no longer affected by immunity to mind-affecting effects (though creatures with immunity gain a +5 bonus on their save)." },
      { level: 2, name: "Psychic Omniscience", description: "You can read the surface thoughts of all creatures on the same plane as you." },
      { level: 3, name: "Edit Memory", description: "At will, you can touch a creature and edit any of their memories." },
      { level: 4, name: "One Mind", description: "You can create a permanent telepathic bond with any number of willing creatures, allowing them to act as a single consciousness under your direction." },
      { level: 5, name: "Implant Identity", description: "3/day, you can touch a creature and rewrite their entire personality, memories, and alignment (Will save at a -10 penalty negates)." },
      { level: 6, name: "Psychic Omniscience", description: "Your Psychic Omniscience now penetrates all magical and psionic protections short of a deity's." },
      { level: 7, name: "Mass Edit", description: "Your Edit Memory ability can now be used as a 100-ft. radius burst." },
      { level: 8, name: "Puppet Master", description: "You can have a number of creatures equal to your Intelligence modifier under the effect of a Dominate power simultaneously. The duration becomes permanent." },
      { level: 9, name: "Unbreakable Will", description: "You are immune to all mind-affecting effects and can no longer be detected by divination or psionics." },
      { level: 10, name: "God of the Mind", description: "Once per day, you can send a telepathic command to every sentient creature on the planet. The command can be a complex sentence (e.g., 'Forget the king exists', 'All hail the new god'). A Will save (DC 25 + class level + Int mod) negates the effect." },
    ],
};
