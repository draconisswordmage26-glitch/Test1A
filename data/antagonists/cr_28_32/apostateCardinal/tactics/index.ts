// data/antagonists/cr_28_32/apostateCardinal/tactics/index.ts
import { Tactics } from '../../../../types';

export const apostateCardinalTactics: Tactics = {
  name: "The Apostate Cardinal",
  title: "Tactics: The Apostate Cardinal",
  description: "The Apostate Cardinal is a master of anti-divine warfare. He does not seek to overpower his foes with brute force, but to dismantle their faith and turn their own miracles against them. His tactics are a cruel dissection of divine magic.",
  sections: [
    {
      title: "Round 1: The Silence of God",
      content: [
        "The Cardinal will always try to win initiative to act before the enemy cleric.",
        "His 'Aura of Unbelief' is his primary weapon. He will position himself to ensure the enemy divine caster is within its 60-foot radius, forcing a difficult check (DC 45) for every spell they cast.",
        "He will ready an action to counterspell the first divine spell cast. With a Spellcraft check of +65 and the 'Improved Counterspell' feat, he is almost guaranteed to succeed.",
      ]
    },
    {
      title: "Round 2: The Stolen Miracle",
      content: [
        "If the Cardinal successfully counterspelled a spell, he will use his 'Steal Miracle' ability to immediately cast it back at the party as a free action. This can be devastating, turning a 'Mass Heal' into a heal for his own troops or a 'Storm of Vengeance' against its original casters.",
        "He will use his own action to cast a powerful debuff or battlefield control spell, such as 'Greater Dispelling' on the party's fighter or 'Blade Barrier' to divide them.",
        "His swift action will be a quickened 'Searing Light' or 'Inflict Critical Wounds' for extra damage.",
      ]
    },
    {
      title: "Round 3+: The Sermon of Unbelief",
      content: [
        "The Cardinal will continue to use his superior action economy (a standard spell, a quickened spell, and a readied counterspell) to dominate the magical battlefield.",
        "He will use 'Unravel Divine' to automatically dispel any problematic divine buffs like 'Righteous Might' or 'Divine Power'.",
        "He is a master of his domain and will use spells like 'Word of Chaos' or 'Blasphemy' to exploit the party's alignment.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Cardinal is the perfect support for a powerful martial force. He can strip enemy divine buffs, counter their healing, and control the battlefield while his allies clean up.",
        "Weaknesses: He is a specialist. Against a party with no divine caster, his primary abilities are useless. He is still a potent epic-level cleric, but he is far less dangerous. He is also vulnerable to powerful martial characters who can get past his defenses and engage him in melee, forcing him to cast defensively."
      ]
    }
  ]
};