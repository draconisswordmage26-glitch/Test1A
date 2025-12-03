// data/prestigeClasses/thrallherd.ts
import { PrestigeClass } from '../../types';

export const thrallherd: PrestigeClass = {
    name: "Thrallherd",
    description: "The thrallherd is a master of telepathy who gathers a following of loyal minions, their minds bound to the psion's will. They are psychic puppet masters, their power derived from the number of minds they control.",
    requirements: [
        "Skills: Diplomacy 8 ranks.",
        "Feats: Leadership.",
        "Powers: Must be able to manifest 'Psionic Charm' or 'Psionic Dominate'."
    ],
    prerequisites: {
        skills: { "Diplomacy": 8 },
        feats: ["Leadership"],
        special: "Ability to manifest Psionic Charm or Dominate"
    },
    hitDie: 6,
    skillPoints: 2,
    classSkills: ["Bluff", "Concentration", "Craft", "Diplomacy", "Intimidate", "Knowledge (psionics)", "Profession", "Psicraft", "Sense Motive"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Manifester Level Progression", description: "This class advances your existing psionic manifesting progression at every level." },
      { level: 1, name: "Thralls", description: "You attract a group of loyal followers, as per the Leadership feat." },
      { level: 2, name: "Charm", description: "You can use Psionic Charm at will." },
      { level: 3, name: "Greater Thralls", description: "Your thralls are more powerful." },
      { level: 4, name: "Dominate", description: "You can use Psionic Dominate at will." },
      { level: 5, name: "One Mind", description: "You can create a telepathic bond with all your thralls." },
      { level: 6, "name": "Incarnate Thrall", "description": "You can promote one of your thralls to be a more powerful cohort." },
      { level: 7, "name": "Psychic Aura", "description": "Your thralls gain a bonus on saves against mind-affecting effects from anyone but you." },
      { level: 8, "name": "Greater Dominate", "description": "The DC to resist your Dominate powers increases." },
      { level: 9, "name": "Hive Mind", "description": "You can manifest powers through your thralls as if they were the origin point." },
      { level: 10, "name": "Absolute Dominion", "description": "Your control over your thralls is permanent and cannot be broken by any means short of your death." }
    ],
    progression: ['Psion'],
};