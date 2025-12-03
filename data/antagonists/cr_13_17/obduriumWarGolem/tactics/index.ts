// data/antagonists/cr_13_17/obduriumWarGolem/tactics/index.ts
import { Tactics } from '../../../../types';

export const obduriumWarGolemTactics: Tactics = {
  name: "Imperium War-Golem",
  title: "Tactics: Imperium War-Golem",
  description: "The Imperium War-Golem is a simple but terrifying foe. It is a walking wall, designed to absorb punishment and break enemy lines and fortifications. It is mindless and will follow its last order to the letter, whether that's 'destroy that castle gate' or 'kill every elf in this valley'.",
  sections: [
    {
      title: "Round 1: Advance and Identify",
      content: [
        "The golem's speed is its main weakness. It will use its first round to simply advance towards the primary target designated by its commander.",
        "It will ignore any attacks that do not bypass its Damage Reduction or Magic Immunity.",
        "If a creature deals significant damage (i.e., has an epic adamantine weapon), the golem will identify that creature as a primary threat and switch its focus to them.",
      ]
    },
    {
      title: "Round 2: Smash the Wall",
      content: [
        "If its target is a structure, it will use 'Sunder Keystone' to breach it as quickly as possible.",
        "If its targets are creatures, it will use Awesome Blow to knock the most heavily armored foe prone and out of position.",
        "If it is blocked by a magical wall (like Wall of Force), it will immediately use 'Sunder Keystone' to shatter it.",
      ]
    },
    {
      title: "Round 3+: Relentless Annihilation",
      content: [
        "The golem will use its full attack action every round, using Power Attack for its full Base Attack Bonus against any target it can reliably hit.",
        "It will use Great Cleave to destroy any groups of weaker enemies that get too close.",
        "It will not stop, it will not retreat, and it will not deviate from its orders unless a new, more immediate threat presents itself (i.e., something that can reliably damage it)."
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The golem is the perfect anvil for a hammer. It should be supported by ranged attackers (like Kaiserjäger) and spellcasters who can exploit the chaos it creates.",
        "Weaknesses: Its saves are very low, especially Reflex. While it is immune to many spells, it is vulnerable to effects that don't allow SR, such as certain epic spells or spells like 'Grease'. Spells that create difficult terrain can slow its already ponderous advance to a crawl. A party with epic adamantine weapons and high-damage output can bring it down with focused fire."
      ]
    }
  ]
};
