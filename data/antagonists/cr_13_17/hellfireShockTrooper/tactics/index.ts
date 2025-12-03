// data/antagonists/cr_13_17/hellfireShockTrooper/tactics/index.ts
import { Tactics } from '../../../../types';

export const hellfireShockTrooperTactics: Tactics = {
  name: "Hellfire Shock Trooper",
  title: "Tactics: Hellfire Shock Trooper",
  description: "The Hellfire Shock Trooper is a versatile and durable frontline combatant. It uses its Hellfire abilities to apply pressure at range and deal significant burst damage in melee. It is a disciplined soldier who will work in formation and focus fire on designated targets.",
  sections: [
    {
      title: "Opening Volley",
      content: [
        "The trooper will open combat by using its Hellfire Blast on a high-priority target, like a spellcaster or healer. It will always take the 1 point of Constitution burn to maximize the damage.",
        "It will then advance with its squad, using cover and its heavy armor to protect itself.",
      ]
    },
    {
      title: "Melee Engagement",
      content: [
        "Before entering melee, it will use a standard action to activate its Hellfire Infusion, taking another point of Constitution burn to add 5d6 hellfire damage to its greatsword.",
        "Once in melee, it will use its full attack action, using Power Attack if it has a high chance to hit.",
        "It will focus its attacks on a single target, coordinating with other troopers to bring down foes quickly.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Works best in a squad, where they can focus their Hellfire Blasts and melee attacks. They are often supported by Truth-Bearer Clerics who can heal their Constitution burn and provide buffs.",
        "Weaknesses: Its reliance on Constitution burn can be a liability in long fights. Its Reflex and Will saves are relatively low, making it vulnerable to battlefield control and mental effects. Spells that deal cold damage are also effective against its fire-based abilities."
      ]
    }
  ]
};