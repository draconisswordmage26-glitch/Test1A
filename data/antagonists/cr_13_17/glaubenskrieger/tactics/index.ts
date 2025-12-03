// data/antagonists/cr_13_17/glaubenskrieger/tactics/index.ts
import { Tactics } from '../../../../types';

export const glaubenskriegerTactics: Tactics = {
  name: "Glaubenskrieger",
  title: "Tactics: Glaubenskrieger",
  description: "The Glaubenskrieger is a divine support caster and a capable frontline combatant. Its primary role is to act as a force multiplier for its allies, using its powerful Cleric buffs and debuffs to control the flow of battle.",
  sections: [
    {
      title: "Round 1: Buffs and Debuffs",
      content: [
        "The Glaubenskrieger will always have long-duration buffs like 'Magic Vestment' active before combat.",
        "Its first action is to cast 'Divine Power', using its high BAB to become a credible melee threat.",
        "As a swift action, it will use Divine Metamagic to cast a quickened 'Bestow Curse' on the party's main damage dealer, crippling their effectiveness.",
      ]
    },
    {
      title: "Round 2: Control and Command",
      content: [
        "The priest will cast a battlefield control spell like 'Blade Barrier' or 'Symbol of Pain' to disrupt the party's formation.",
        "It will use its Domination domain power to attempt to take control of a weak-willed party member, turning them against their allies.",
        "It will stay behind the main imperial battle line, providing support and healing where needed.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Glaubenskrieger are the glue that holds an imperial legion together. They provide crucial healing, buffs for the brutes like Plague-Knights, and magical support against enemy casters.",
        "Weaknesses: While it has a wide range of spells, it is still just one caster. A party that can counterspell or focus fire on it can neutralize it quickly. Its saves are good, but not unbeatable. An arcane caster with powerful save-or-lose spells that target its weaker Reflex save is a major threat."
      ]
    }
  ]
};
