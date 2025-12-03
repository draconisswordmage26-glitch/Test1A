// data/tactics/ubercharger.ts
import { Tactics } from '../../types';

export const uberchargerTactics: Tactics = {
  name: "Ubercharger Combo",
  title: "Tactics: The Ubercharger's Handbook",
  description: "The 'Ubercharger' is one of the most iconic and powerful martial builds in D&D 3.5e. It is a highly specialized character designed to deal the maximum possible amount of damage in a single, devastating charge attack. This guide breaks down the key components of this 'alpha strike' build.",
  sections: [
    {
      title: "The Core Engine: Power Attack & Shock Trooper",
      content: [
        "Power Attack: The foundation of the build. This feat allows you to take a penalty on your attack roll to gain a bonus on your damage roll. For a two-handed weapon, you gain double the penalty as bonus damage (e.g., -5 to hit for +10 damage).",
        "Shock Trooper (Feat - Complete Warrior): This is the lynchpin. It allows you to shift the penalty from your Power Attack from your attack roll to your Armor Class. This means you can take a massive penalty for huge damage without making it harder to hit. A -20 penalty to AC is a small price to pay for +40 damage when the goal is to kill the enemy in one hit.",
      ]
    },
    {
      title: "Damage Multipliers: Leap Attack & Spirited Charge",
      content: [
        "Leap Attack (Feat - Complete Adventurer): If you charge and make a Jump check as part of the charge, you double the damage bonus from Power Attack. With a two-handed weapon, this means you get a 4-to-1 return (+4 damage for every -1 penalty). A -20 penalty now yields +80 damage.",
        "Spirited Charge (Feat - Player's Handbook): The classic for mounted combat. When charging with a lance, you deal double damage (or triple with a Valorous lance). This multiplies the *entire* damage of the hit, including Strength and Power Attack bonuses.",
        "The Ultimate Combo: A character with a Valorous Lance, Spirited Charge, Leap Attack, and Shock Trooper can deal truly astronomical damage. A -20 Power Attack penalty becomes +80 damage, which is then tripled by the lance to +240 damage from Power Attack alone.",
      ]
    },
    {
        title: "Action Economy: Pounce & Friends",
        content: [
            "The Problem: A standard charge only allows a single attack. This is great, but many monsters have thousands of hit points.",
            "The Solution: The Pounce special ability. This allows a creature to make a full attack at the end of a charge. Now, your massive charge damage bonus can be applied to multiple attacks in one turn.",
            "Getting Pounce: Barbarians can get Pounce from the Spirit Lion Totem ACF (Complete Champion). The 'Lion's Charge' spell (3rd level Ranger/Druid) grants it. The 'Dire Charge' epic feat also grants it.",
            "The Result: A pouncing ubercharger can deliver 4-5 attacks in a single charge, each one benefiting from the massive damage bonus from Power Attack, turning them into a living blender.",
        ]
    },
    {
        title: "Putting It All Together: A Sample Charge",
        content: [
            "Our Character: A level 20 Barbarian with Pounce, a Valorous Greatsword (+1 Valorous enhancement = x2 damage on charge), and all the key feats.",
            "The Setup: He enters a Rage for bonus Strength. He identifies his target.",
            "The Charge: He charges, making a Jump check for Leap Attack. He uses Power Attack for his full BAB (-20 penalty), which Shock Trooper shifts to his AC.",
            "The Math: The Power Attack bonus is +20 (base) x 2 (two-handed) x 2 (Leap Attack) = +80 damage.",
            "The Attack: He makes a full attack at the end of the charge. Each hit deals [Weapon Damage + Strength + 80 (Power Attack) + other bonuses] x 2 (Valorous weapon). A single hit can easily deal over 200 damage. Four such hits can destroy almost any non-deity.",
        ]
    },
    {
        title: "Essential Gear and Spells",
        content: [
            "Valorous Weapon Enhancement (Unapproachable East): Doubles the total damage dealt on a charge. This is the single most important magic item for the build.",
            "Rhino's Rush (Spell - Spell Compendium): A 1st-level spell that doubles the damage of your next charge attack. It is a swift action to cast, making it easy to use.",
            "Battle Jump (Feat - Unapproachable East): If you can charge from a height of at least 10 feet, you can treat the attack as a charge and deal double damage. This stacks with other multipliers.",
        ]
    }
  ]
};