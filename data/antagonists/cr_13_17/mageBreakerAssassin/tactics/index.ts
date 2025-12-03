
// data/antagonists/cr_13_17/mageBreakerAssassin/tactics/index.ts
import { Tactics } from '../../../../types';

export const mageBreakerAssassinTactics: Tactics = {
  name: "Mage-Breaker Assassin",
  title: "Tactics: Mage-Breaker Assassin",
  description: "The Mage-Breaker is a dedicated hunter of arcane spellcasters. Its tactics are swift, silent, and brutal. It aims to neutralize an enemy wizard or sorcerer in the opening moments of a fight, before they can bring their reality-warping power to bear.",
  sections: [
    {
      title: "Round 1: The Ambush",
      content: [
        "The Mage-Breaker will always try to initiate combat from stealth, ideally after studying its target for 3 rounds to set up its Death Attack.",
        "It uses its 'Phase Jaunt' ability as a swift action to teleport directly behind the enemy spellcaster.",
        "Its standard action is to make its Death Attack. The DC is high, but even if the target saves, it's still a sneak attack that deals massive damage (11d6) and drains Intelligence.",
      ]
    },
    {
      title: "Round 2: The Spell-Sunder",
      content: [
        "If the caster survives, the Mage-Breaker unleashes a full attack. With five attacks per round and a high chance to hit, it is very likely to score a critical hit.",
        "Upon a critical hit, it uses its 'Spell-Sunder' ability to cast a free 'Greater Dispel Magic' on the target, stripping away their most powerful defensive buff (like 'Mind Blank' or 'Contingency').",
        "Each hit drains more Intelligence, reducing the caster's spell save DCs and making them unable to cast their highest-level spells.",
      ]
    },
    {
      title: "Round 3+: The Finisher",
      content: [
        "By this round, the enemy caster should be crippled: their buffs dispelled, their Intelligence drained, and their HP low.",
        "The Mage-Breaker will continue to full attack until the target is dead.",
        "If other enemies intervene, it will use Tumble to move away and 'Phase Jaunt' to escape, hiding to set up another ambush.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Mage-Breakers are lone wolves, but they are often the vanguard for a larger imperial force. They teleport in, kill the command-and-control, and then the main army advances.",
        "Weaknesses: Its primary weakness is 'True Seeing', which negates its stealth. Creatures immune to critical hits or ability drain are also difficult opponents. While its SR is high, a caster who can overcome it with a spell that doesn't target SR (like 'Solid Fog' or many conjuration spells) can shut it down."
      ]
    }
  ]
};
