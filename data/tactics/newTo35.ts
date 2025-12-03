// data/tactics/newTo35.ts
import { Tactics } from '../../types';

export const newTo35Tactics: Tactics = {
  name: "New to 3.5e",
  title: "Welcome to 3.5e: The Core Mechanics",
  description: "New to Dungeons & Dragons 3.5 Edition? This is the place to start. This system is a 'd20 system', which means most actions are resolved by rolling a 20-sided die. Understanding the following concepts is the key to understanding all the statblocks and guides in this compendium.",
  sections: [
    {
      title: "The d20 System: The Core of Everything",
      content: [
        "Nearly every action in D&D 3.5e, from swinging a sword to casting a spell, is resolved with a 'd20 check'.",
        "The formula is simple: Roll a 20-sided die (d20) and add a relevant modifier. The result is compared to a target number called a 'Difficulty Class' (DC).",
        "If your result equals or exceeds the DC, you succeed. If it's lower, you fail.",
        "Example: To hit an enemy with a sword, you roll a d20 and add your attack bonus. If the result equals or beats the enemy's Armor Class (AC), you hit.",
      ]
    },
    {
        title: "Actions in Combat: What Can I Do in a Round?",
        content: [
            "A combat round represents 6 seconds of action. On your turn, you can perform several types of actions.",
            "Standard Action: The main thing you do. This is usually making an attack, casting a spell, or using a special ability.",
            "Move Action: Used to move up to your speed, open a door, or draw a weapon.",
            "Full-Round Action: An action that takes up your entire turn, like a 'full attack' (making multiple strikes) or running.",
            "Swift Action: A very quick action. You get one of these per turn. Many powerful spells and abilities use swift actions.",
            "Immediate Action: Similar to a swift action, but you can use it on anyone's turn, not just your own. It 'costs' you your swift action for your next turn.",
            "Free Action: A minor action that takes almost no time, like dropping an item or speaking.",
            "Typical Turn: On a standard turn, you can take one Standard Action and one Move Action (in either order). You can trade your Standard Action for another Move Action.",
        ]
    },
    {
        title: "The Big Three Defenses: AC, Saves, and SR",
        content: [
            "Armor Class (AC): This represents how hard you are to hit with physical attacks. An attacker's roll must meet or beat your AC.",
            "Saving Throws (Saves): These represent your ability to resist magical or unusual effects. There are three types:",
            "  - Fortitude (Fort): Your ability to resist poisons, diseases, and effects that target your body. Based on your Constitution.",
            "  - Reflex (Ref): Your ability to dodge out of the way of area effects like fireballs. Based on your Dexterity.",
            "  - Will: Your mental resistance to charms, illusions, and mind control. Based on your Wisdom.",
            "Spell Resistance (SR): This is like an Armor Class against magic. If a creature has SR, a spellcaster must make a 'caster level check' (d20 + caster level) against the SR. If the check fails, the spell has no effect.",
        ]
    },
    {
        title: "Attacking: BAB, Full Attacks, and Critical Hits",
        content: [
            "Base Attack Bonus (BAB): This is your fundamental skill in combat. You add your BAB and your Strength (for melee) or Dexterity (for ranged) modifier to your d20 roll to hit.",
            "Full Attack: If you don't move during your turn, you can use a full-round action to make a 'full attack'. This lets you make multiple attacks, with each subsequent attack at a -5 penalty. For example, a high-level fighter with a BAB of +20 would make attacks at +20, +15, +10, and +5.",
            "Critical Hits ('Crits'): If you roll a natural 20 on your attack roll, you 'threaten' a critical hit. You roll to hit again. If you hit the second time, the critical is 'confirmed', and you deal extra damage (usually double). Some weapons have a wider 'threat range', like a rapier (18-20), meaning they threaten a critical hit on a roll of 18, 19, or 20.",
        ]
    },
    {
        title: "Magic 101: Spells, DCs, and Caster Level",
        content: [
            "Spells: Magical effects that can damage foes, buff allies, or alter reality. Spells are divided into levels (0-9), with higher-level spells being much more powerful.",
            "Spell Save DC: If a spell allows a saving throw, the DC is the number the target must beat to resist it. The formula is 10 + Spell Level + Caster's Ability Modifier (e.g., Intelligence for a Wizard).",
            "Caster Level (CL): This measures a caster's power. Many spell effects, like duration or damage, are based on Caster Level. For example, a Fireball deals 1d6 damage per Caster Level.",
        ]
    }
  ]
};