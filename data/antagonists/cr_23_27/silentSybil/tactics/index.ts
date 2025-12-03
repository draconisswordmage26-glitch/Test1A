
// data/antagonists/cr_23_27/silentSybil/tactics/index.ts
import { Tactics } from '../../../../types';

export const silentSybilTactics: Tactics = {
  name: "The Silent Sybil",
  title: "Tactics: The Silent Sybil",
  description: "The Silent Sybil is the ultimate predator of psionic beings. Her tactics are designed to drain, disable, and consume psionic energy, turning a manifester's greatest strength into their most crippling weakness. She fights a war of psionic attrition that her enemies cannot win.",
  sections: [
    {
      title: "Round 1: The Psychic Drought",
      content: [
        "The Sybil will attempt to start combat within 60 feet of the enemy psion to immediately activate her 'Aura of Psychic Static'. This begins draining their power points and makes manifesting difficult.",
        "Her first action will be 'Consume Power', a ranged touch attack to drain even more power points and heal herself.",
        "She will use her own psionic powers to stay safe, manifesting 'Inertial Armor' and 'Force Screen' for protection.",
      ]
    },
    {
      title: "Round 2: Power Starvation",
      content: [
        "The Sybil continues to use 'Consume Power' every round. Her goal is to completely empty the enemy's power point reserve as quickly as possible.",
        "If the enemy manages to manifest a power through her aura, the 'Power Feedback' ability will damage them, making it a painful choice.",
        "She will use her high Hide and Move Silently skills to break line of sight and reposition, forcing the psion to waste actions trying to find her.",
      ]
    },
    {
      title: "Round 3+: The Final Silence",
      content: [
        "Once the enemy psion is out of power points, they are helpless. The Sybil will close to melee.",
        "She will use her 'Mind-Leech Dagger' to drain the target's Wisdom, making them even more vulnerable and eventually rendering them comatose.",
        "She takes a cruel, intellectual pleasure in this process, dissecting the mind of her victim as she drains them of all thought and power.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Silent Sybil is a specialized hunter. She is often escorted by Null-Psion Troopers, creating overlapping fields of psionic disruption that are nearly impossible to overcome.",
        "Weaknesses: She is a hyper-specialist. Against a party with no psionics, she is just a high-level rogue/telepath with decent, but not overwhelming, powers. Her physical defenses are not exceptional, and a powerful martial character or arcane spellcaster can be a major threat if they can get close."
      ]
    }
  ]
};
