// data/tactics/buffSuites.ts
import { Tactics } from '../../types';

export const buffSuitesTactics: Tactics = {
  name: "Buff & Debuff Suites",
  title: "Tactics: Buff & Debuff Suites by Level",
  description: "In D&D 3.5e, battles are often won or lost before the first blow is struck. A well-prepared party with the right buffs can overcome a much stronger foe, while a powerful enemy can be crippled by a single, well-placed debuff. This guide outlines some of the most effective and commonly used buffs and debuffs across different tiers of play.",
  sections: [
    {
      title: "The Art of Stacking: Know Your Bonuses",
      content: [
        "Bonuses of the same type generally do not stack. For example, two 'morale' bonuses to attack do not stack; you only take the highest. However, a 'morale' bonus and an 'insight' bonus *do* stack.",
        "Key Bonus Types: Enhancement (from magic items/spells), Morale (from spells like Bless/Heroism), Insight (from divination/psionics), Sacred/Profane (from divine sources), Circumstance (from situational advantages), and Untyped Dodge bonuses to AC.",
        "The Goal: A successful buff suite uses spells and items that provide different types of bonuses to all your key stats (AC, saves, attack rolls).",
      ]
    },
    {
      title: "Low-Level Suite (Levels 1-5): The Fundamentals",
      content: [
        "Core Buffs: 'Enlarge Person' (Transmutation) for melee damage/reach. 'Mage Armor' (Conjuration) for arcane casters. 'Bless' (Enchantment) for a small party-wide morale bonus. 'Protection from Evil' (Abjuration) for crucial immunity to mental control.",
        "Core Debuffs: 'Grease' (Conjuration) for no-save battlefield control. 'Sleep' (Enchantment) to end encounters with low-HD foes. 'Glitterdust' (Conjuration) to blind enemies and reveal invisible ones. 'Ray of Enfeeblement' (Necromancy) to cripple an enemy's Strength.",
      ]
    },
    {
        title: "Mid-Level Suite (Levels 6-12): The Game Changers",
        content: [
            "Core Buffs: 'Haste' (Transmutation) is the single best party buff, granting extra attacks and bonuses everywhere. 'Heroism, Greater' (Enchantment) is a long-duration, high-power morale bonus. 'Divine Power' (Evocation) turns a Cleric into a full-BAB martial combatant. 'Righteous Might' (Transmutation) makes them bigger and stronger.",
            "Core Debuffs: 'Slow' (Transmutation) is a devastating party-wide debuff. 'Solid Fog' (Conjuration) shuts down entire areas with no save. 'Black Tentacles' (Conjuration) grapples and damages groups. 'Bestow Curse' (Necromancy) is a versatile and potent single-target debuff that can cripple saves or actions.",
            "The Persistent Powerhouse: At this tier, Clerics can get the 'Persistent Spell' and 'Divine Metamagic' feats. This allows them to make their personal-range buffs (like Divine Power) last for 24 hours, entering every fight already at full power. This is a major turning point in caster supremacy.",
        ]
    },
    {
        title: "High-Level Suite (Levels 13-20): Reshaping Reality",
        content: [
            "Core Buffs: 'Mind Blank' (Abjuration) is an absolutely essential 24-hour buff, granting immunity to all mind-affecting effects and scrying. 'Shapechange' (Transmutation) is the ultimate personal buff, allowing a caster to assume the form of almost any creature. 'Foresight' (Divination) makes you immune to surprise and grants a constant insight bonus to AC and saves.",
            "Core Debuffs: 'Forcecage' (Evocation) is a no-save prison for any single target. 'Maze' (Conjuration) is another no-save lockdown for low-Intelligence creatures. 'Prismatic Spray/Wall' (Evocation) can inflict a host of devastating effects. 'Finger of Death' (Necromancy) and 'Disintegrate' (Transmutation) are the classic save-or-die spells.",
            "Action Economy Breakers: 'Time Stop' (Transmutation) is the ultimate setup tool, giving the caster 1d4+1 free rounds. 'Celerity' (Transmutation) allows an immediate action, breaking the initiative order. Quicken Spell and Divine Metamagic allow for multiple spells per round.",
        ]
    }
  ]
};