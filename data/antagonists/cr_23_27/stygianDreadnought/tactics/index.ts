
// data/antagonists/cr_23_27/stygianDreadnought/tactics/index.ts
import { Tactics } from '../../../../types';

export const stygianDreadnoughtTactics: Tactics = {
  name: "Stygian Dreadnought",
  title: "Tactics: Stygian Dreadnought",
  description: "The Stygian Dreadnought is a slow, implacable engine of destruction. It does not use clever tactics. It is a mobile fortress that grinds its enemies down through sheer resilience and its horrifying ability to consume the souls of its victims.",
  sections: [
    {
      title: "The Inexorable Advance",
      content: [
        "The Dreadnought will always advance on the largest group of enemies.",
        "Its 'Aura of Despair' is its primary tool for softening up targets, inflicting a penalty on their saves and attack rolls.",
        "It is immune to most magic and highly resistant to physical damage. It will ignore lesser threats to focus on the most powerful-looking melee combatant.",
      ]
    },
    {
      title: "The Soul Harvest",
      content: [
        "The Dreadnought's slam attacks are its primary weapon. Every hit forces a DC 35 Will save to avoid instant death and soul capture.",
        "It will use its full attack every round, trying to land both slams on a single target to force multiple saves.",
        "As it traps souls, its 'Soul-Fueled' ability kicks in, granting it fast healing and making it even harder to destroy.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Dreadnought is the ultimate anchor for a defensive formation. It works well with ranged attackers and spellcasters who can pick off enemies debuffed by its aura.",
        "Weaknesses: Its speed is its greatest weakness. A mobile party can potentially 'kite' it, staying out of range of its slams. While its saves are not terrible, they are its most vulnerable point. Spells that do not allow spell resistance and target its Reflex or Will saves are the most effective way to deal with it. Its Soul Trap is a mind-affecting effect, making creatures immune to them a major problem for the Dreadnought."
      ]
    }
  ]
};
