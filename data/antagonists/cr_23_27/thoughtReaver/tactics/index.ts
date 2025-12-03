// data/antagonists/cr_23_27/thoughtReaver/tactics/index.ts
import { Tactics } from '../../../../types';

export const thoughtReaverTactics: Tactics = {
  name: "Thought-Reaver",
  title: "Tactics: Thought-Reaver",
  description: "The Thought-Reaver is a psychic assassin. It avoids direct confrontation, preferring to use stealth and its powerful telepathy to neutralize targets before they are even aware of its presence. Its goal is a clean, silent kill, not just of the body, but of the mind.",
  sections: [
    {
      title: "Round 1: Infiltration and Assessment",
      content: [
        "The Thought-Reaver will almost always initiate combat from stealth or invisibility.",
        "Its first action is to study its primary target for its Psychic Assassination ability.",
        "As a swift action, it will manifest a quickened 'Ego Whip' or 'Id Insinuation' to soften up the target's Will save.",
      ]
    },
    {
      title: "Round 2: Mental Assault",
      content: [
        "The Reaver continues to study its target.",
        "It manifests a powerful single-target control power like 'Dominate, Psionic' or 'Mindscape Prison', now targeting a debuffed Will save.",
        "If it feels threatened, it will use powers like 'Psionic Dimension Door' to reposition to a safe, hidden location.",
      ]
    },
    {
      title: "Round 3+: The Killing Thought",
      content: [
        "Having studied its target for 3 rounds, the Reaver unleashes its Psychic Assassination. It will pair this with its most powerful damage-dealing power, such as 'Psychic Crush' or an empowered 'Mind Thrust', forcing a very high DC Will save or die.",
        "If the target survives, it will resort to melee, using its Mind Blade to drain their mental stats to 0, leaving them a mindless vegetable.",
        "Its 'Erase Memory' ability ensures that even if a target survives, they will have no recollection of their attacker, making the Thought-Reaver a perfect ghost."
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Thought-Reaver works best alone or with other stealthy units. It is an excellent advance scout for larger imperial forces, capable of eliminating enemy command and control before the battle begins.",
        "Weaknesses: It is not a frontline combatant. Spells and effects that prevent flanking or reveal invisible creatures (like 'Glitterdust' or 'True Seeing') are its bane. Creatures immune to mind-affecting effects are very difficult for it to deal with, forcing it into melee where it is less effective."
      ]
    }
  ]
};