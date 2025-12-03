
// data/antagonists/cr_18_22/anathemaKnight/tactics/index.ts
import { Tactics } from '../../../../types';

export const anathemaKnightTactics: Tactics = {
  name: "Anathema Knight",
  title: "Tactics: Anathema Knight",
  description: "The Anathema Knight is a dedicated hunter of divine spellcasters. Its tactics are simple and direct: close the distance to the enemy cleric, paladin, or druid, and let its profane auras do their work. It is a walking zone of anti-divine energy.",
  sections: [
    {
      title: "Round 1: The Godless Approach",
      content: [
        "The Knight will ignore other threats to charge the most powerful divine character on the battlefield.",
        "As soon as it is within 60 feet, its 'Aura of Profane Unction' and 'Aura of Anti-Healing' immediately take effect, crippling the enemy's ability to cast spells and heal.",
        "It will use its Smite Good on its first attack for a massive damage spike.",
      ]
    },
    {
      title: "Round 2: Suppress and Slay",
      content: [
        "The Knight will use its full attack action on the divine caster. With its high damage output and the caster's spells likely failing, it is a race against time for the party to save their healer.",
        "It will use its 'Divine Might' feat, spending a turn attempt to add its Charisma bonus to all damage rolls for the round, further increasing its damage output.",
      ]
    },
    {
      title: "Round 3+: Press the Advantage",
      content: [
        "Once the primary divine threat is neutralized, the Anathema Knight will turn its attention to the next biggest good-aligned threat.",
        "It will continue to use its auras to suppress healing for the entire enemy party, making any damage they take much more significant.",
        "It is a zealot and will fight to the death, believing its cause is just."
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Anathema Knights are devastating when paired with spellcasters who can further debuff enemy saves or provide arcane support. They are the perfect tool for eliminating the backbone of a good-aligned party.",
        "Weaknesses: The Knight is a one-trick pony. Its auras have no effect on arcane casters, psions, or martial characters. A party without a divine caster will find it to be just a standard, if tough, fighter. Its saves are solid but not unbeatable, and it is vulnerable to battlefield control that can keep it away from its preferred target."
      ]
    }
  ]
};
