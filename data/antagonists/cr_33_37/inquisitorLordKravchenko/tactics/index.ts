// data/antagonists/cr_33_37/inquisitorLordKravchenko/tactics/index.ts
import { Tactics } from '../../../../types';

export const inquisitorLordKravchenkoTactics: Tactics = {
  name: "Inquisitor-Lord Kravchenko, the Soul-Sever",
  title: "Tactics: Inquisitor-Lord Kravchenko",
  description: "Kravchenko is a hunter. His tactics are those of a patient, relentless predator. He identifies his quarry, strips them of their defenses and deceptions, and then moves in for a clean, efficient kill. He sees combat as a sacred hunt for the truth.",
  sections: [
    {
      title: "Round 1: The Revelation",
      content: [
        "Kravchenko's 'Unveiling Aura' makes him immune to surprise from shapeshifters or illusionists. He always sees them for what they are.",
        "He will begin by studying his primary target, often the most obvious shapeshifter or binder.",
        "His first action is to use 'Sever Connection'. This ranged touch attack is his most powerful tool. If it hits and the target fails their DC 48 Will save, the fight is practically over. A Rakshasa without its forms or an Oni Mage without its soulmelds is severely crippled.",
      ]
    },
    {
      title: "Round 2: The Anchor",
      content: [
        "If 'Sever Connection' fails, Kravchenko closes to melee.",
        "He will use his high attack bonus and Power Attack to land a blow with his 'Truth-Seeker' greatsword. Even a single hit is a major problem for his foes, as it applies a 'Dimensional Anchor' effect, preventing teleportation or planar escape.",
        "He will focus all his attacks on his Favored Enemy, gaining a massive bonus to damage.",
      ]
    },
    {
      title: "Round 3+: The Purge",
      content: [
        "With the target revealed, suppressed, and anchored, Kravchenko will use his full attacks to methodically destroy them.",
        "He is a patient fighter and will use his high AC and saves to weather his opponent's desperate counter-attacks.",
        "He will not be distracted by other foes until his primary quarry, the 'liar', is dead. His focus is absolute.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Kravchenko is a solo hunter, but he often works with Truth-Bearer Clerics who can provide divine support and further reveal deceptions.",
        "Weaknesses: Like most specialists, he is less effective against straightforward opponents. A powerful brute like the Behemoth or a dedicated spellcaster who doesn't rely on illusions or shapechanging can be a major threat. His 'Sever Connection' ability is also Will-save based, so a foe with a very high Will save can resist his primary tool."
      ]
    }
  ]
};