
// data/antagonists/cr_33_37/theInviolate/tactics/index.ts
import { Tactics } from '../../../../types';

export const theInviolateTactics: Tactics = {
  name: "The Inviolate",
  title: "Tactics: The Inviolate",
  description: "The Inviolate is the ultimate anti-mage weapon. Its tactics are brutally simple: it moves towards the enemy and lets its aura do the work. An encounter with the Inviolate is a puzzle. How does a high-level party, heavily reliant on arcane magic, defeat a creature that is immune to their greatest strength?",
  sections: [
    {
      title: "The Inexorable Advance",
      content: [
        "The Inviolate's 'Mobile Antimagic Field' has a 300-foot radius. It will position itself to ensure that the entire battlefield is within this aura.",
        "It is slow, but its reach is long. It will advance methodically, its aura shutting down all arcane spellcasting and suppressing all magic items in its path.",
        "Its 'Spell Absorption' ability means that every failed spell heals it, making it even harder to kill.",
      ]
    },
    {
      title: "Disjunction and Destruction",
      content: [
        "The Inviolate will use its 'Unravel Magic' ability to target any pesky artifacts or epic magic items the party might be using. A successful disjunction can render a powerful character helpless.",
        "Once its aura has suppressed the party's magical defenses, it will move into melee.",
        "Its slam attacks are devastatingly powerful, with an incredibly high attack bonus and damage. It will focus on crushing the now-defenseless wizards and sorcerers first.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Inviolate is the perfect centerpiece for an imperial army. While it neutralizes the enemy's arcane support, the rest of the army can advance with impunity.",
        "Weaknesses: Its aura only affects arcane magic. Divine spellcasters, psionic manifesters, and martial adepts are completely unaffected by its primary ability. A party with a powerful cleric or psion can still be very effective against it. While its DR and hardness are immense, it can be brought down by epic adamantine weapons wielded by a high-damage martial character."
      ]
    }
  ]
};
