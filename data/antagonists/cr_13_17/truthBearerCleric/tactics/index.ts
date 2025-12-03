
// data/antagonists/cr_13_17/truthBearerCleric/tactics/index.ts
import { Tactics } from '../../../../types';

export const truthBearerClericTactics: Tactics = {
  name: "Truth-Bearer Cleric",
  title: "Tactics: Truth-Bearer Cleric",
  description: "The Truth-Bearer Cleric is a dedicated counter to any creature that relies on deception. Its tactics are straightforward: reveal, suppress, and purge. It will use its divine magic to strip away its foe's defenses and expose their true form before moving in for the kill.",
  sections: [
    {
      title: "Round 1: The Great Unmasking",
      content: [
        "The cleric's 'Aura of Truth' will immediately reveal any invisible creatures or illusions within 120 feet. There is no surprise round against a Truth-Bearer.",
        "Its first action is to cast a spell that hinders mobility or escape. 'Dimensional Anchor' is a perfect choice against creatures with teleportation like the Oni Mage. 'Hold Person' can lock down a humanoid form.",
        "As a swift action, it will use Divine Metamagic to cast a quickened 'Shield of Faith' or 'Divine Favor' on itself.",
      ]
    },
    {
      title: "Round 2: Suppress and Purge",
      content: [
        "The cleric moves into melee with its chosen target.",
        "It will cast a spell like 'Searing Light' (no SR) or 'Flame Strike' to deal damage.",
        "Its goal is to score a critical hit with its 'Truth-Seeker' mace to activate the 'Suppress Form' ability. This will temporarily disable a shapeshifter's wild shape, a soulmelder's soulmelds, or an illusionist's magical effects.",
      ]
    },
    {
      title: "Round 3+: The Purge",
      content: [
        "Once the target's primary abilities are suppressed, the cleric will use its full attacks and offensive spells to destroy them.",
        "It will use 'Dispel Magic' to strip away any remaining buffs.",
        "It will fight with zealous fury, believing it is performing a sacred duty by cleansing the world of a lie.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Truth-Bearers work well with heavy hitters like Plague-Knights or Hex-Legionnaires. The cleric suppresses the enemy's defenses, and the brute deals the damage.",
        "Weaknesses: It is a Cleric, and vulnerable to many of the same things. A powerful martial character can overwhelm it in melee if it can't get its spells off. Its saves are good, but not unbeatable. It is highly specialized; against a straightforward enemy with no tricks, it's just a standard cleric."
      ]
    }
  ]
};
