// data/antagonists/cr_18_22/boundSeraph/tactics/index.ts
import { Tactics } from '../../../../types';

export const boundSeraphTactics: Tactics = {
  name: "Imperium Judicator",
  title: "Tactics: Imperium Judicator",
  description: "The Imperium Judicator is a premier divine spellcaster. Its tactics are those of a high-level cleric: buff, debuff, control, and destroy. It will use its Divine Metamagic to break the action economy and overwhelm the party with a barrage of powerful spells. It is a tragic figure, but in combat, it is a ruthless and efficient commander of divine power.",
  sections: [
    {
      title: "Round 1: Buffs and Battlefield Control",
      content: [
        "The Judicator will have long-duration buffs like 'Magic Vestment' and 'Greater Magic Weapon' cast before combat.",
        "Its first action in combat is to cast a powerful, persistent battlefield control spell. 'Blade Barrier' or 'Wall of Stone' can be used to divide the party.",
        "As a swift action, it will use Divine Metamagic (Quicken Spell) to cast a personal buff like 'Divine Favor' or 'Shield of Faith'. It has plenty of turn attempts to fuel this.",
      ]
    },
    {
      title: "Round 2: Debuff and Destroy",
      content: [
        "The Judicator casts a powerful offensive spell targeting the party's weak saves. 'Blasphemy' is an excellent choice against non-evil parties, as it can paralyze or weaken them. 'Destruction' is a potent single-target save-or-die.",
        "It uses another quickened spell to either heal an imperial ally ('Cure Critical Wounds') or further debuff an enemy ('Bestow Curse').",
        "It will use its Smite Good ability on any paladin or good-aligned cleric, focusing its melee attacks on them if they get close.",
      ]
    },
    {
      title: "Round 3+: Overwhelm with Divine Might",
      content: [
        "The Judicator continues to use its action economy advantage, casting a standard action spell and a quickened spell each round.",
        "It will use 'Summon Monster' to bog down melee fighters and 'Harm' to bring a high-HP foe to the brink of death.",
        "It will use its superior mobility (flight) to stay out of reach of melee attackers, raining down divine judgment from above.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Judicator is the perfect commander for a legion of imperial troops. It can heal them, buff them, and provide devastating magical support.",
        "Weaknesses: 'Antimagic Field' completely shuts it down. Spells that target Reflex saves are also effective, as it's the Judicator's lowest save. An enemy who can get close and grapple it can prevent it from casting its most powerful spells. Finally, a hero who can somehow break the Stygian armor's curse might find a powerful, if temporary, ally."
      ]
    }
  ]
};
