
// data/antagonists/cr_18_22/blasphemyChoirAcolyte/tactics/index.ts
import { Tactics } from '../../../../types';

export const blasphemyChoirAcolyteTactics: Tactics = {
  name: "Blasphemy Choir Acolyte",
  title: "Tactics: Blasphemy Choir Acolyte",
  description: "The Blasphemy Choir is a force multiplier. A single Acolyte is a potent divine caster; a group of them is a death sentence for any good-aligned party. Their tactics revolve around using their combined voices to paralyze and weaken their foes before picking them off with powerful spells.",
  sections: [
    {
      title: "Opening Act: The Profane Hymn",
      content: [
        "The Choir will always be encountered in a group of at least three.",
        "Their first action in combat is to use their 'Blasphemy Choir' ability. With a DC of 35, it is very likely that some or all of the party's non-evil characters will be paralyzed, weakened, or dazed.",
        "They will simultaneously use their Bardic Music to 'Inspire Courage' for any allied imperial troops.",
      ]
    },
    {
      title: "Crescendo of Despair",
      content: [
        "The Choir will continue to use their 'Blasphemy Choir' ability every round as long as there are viable targets.",
        "They will use their swift actions to cast quickened spells via Divine Metamagic. 'Bestow Curse' can further debuff a paralyzed target's saves, while 'Searing Light' can be used to damage foes who saved.",
        "They will use their Bardic 'Song of Discord' ability to try and turn the party against any members who were unaffected by the Blasphemy.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Choir is the ultimate support unit for a large imperial force. They can buff their allies and debuff an entire enemy army simultaneously. They are often protected by Anathema Knights or Bound Seraphs.",
        "Weaknesses: Their primary ability requires them to be clustered together, making them extremely vulnerable to area-of-effect spells like 'Fireball' or a dragon's breath weapon. Spells that create magical silence can completely neutralize their Choir and Bardic abilities. As they are evil, a Paladin's Smite Evil is devastating against them."
      ]
    }
  ]
};
