// data/tactics/intermediate35.ts
import { Tactics } from '../../types';

export const intermediate35Tactics: Tactics = {
  name: "Intermediate 3.5e Tactics",
  title: "A 5e Veteran's Guide to 3.5e",
  description: "Coming from Dungeons & Dragons 5th Edition? Welcome! While both are d20 systems, 3.5e is a different beast with more complexity and a higher power ceiling. This guide will help you understand the key differences in mechanics and tactical thinking.",
  sections: [
    {
      title: "Bounded Accuracy vs. Stacking Bonuses",
      content: [
        "The biggest difference. 5e has 'bounded accuracy', meaning bonuses are small and rare. A level 20 character's attack bonus might only be a +11.",
        "3.5e is all about stacking bonuses. A level 20 character can easily have an attack bonus of +30, +40, or even higher by stacking enhancement bonuses, morale bonuses, insight bonuses, etc. The same is true for Armor Class and saves.",
        "The Tactical Shift: Because of this, buffs and debuffs are king. A -2 penalty to AC is a much bigger deal in 5e than in 3.5e, where a fighter might have an AC of 50. In 3.5e, you need to stack multiple, powerful debuffs to make a difference.",
      ]
    },
    {
      title: "Action Economy: Swift/Immediate vs. Bonus Action/Reaction",
      content: [
        "In 5e, you get a Bonus Action (only on your turn, for specific abilities) and a Reaction (once per round, for specific triggers).",
        "3.5e has Swift Actions (like a Bonus Action, but you can use it for any spell or ability with a swift cast time) and Immediate Actions (like a Reaction, but it costs your next turn's swift action).",
        "The Tactical Shift: 3.5e's action economy is more flexible and powerful. The ability to cast powerful spells as a swift action (via the Quicken Spell feat) is a cornerstone of high-level play, allowing casters to cast multiple spells per round. Immediate actions allow for powerful defensive abilities like a Diamond Mind martial adept's 'Moment of Perfect Mind' to substitute a Concentration check for a Will save.",
      ]
    },
    {
        title: "Attack Progression: Extra Attack vs. Iterative Attacks",
        content: [
            "In 5e, martials get the 'Extra Attack' feature, allowing them to make a set number of attacks with their action.",
            "In 3.5e, you get 'iterative attacks' based on your Base Attack Bonus (BAB). For every 5 points of BAB above 1, you get an additional attack at a -5 penalty. A character with +20 BAB gets four attacks (+20/+15/+10/+5).",
            "The Tactical Shift: This makes a 'full attack' a full-round action that requires you to stand still. Mobility is thus traded for damage output. This makes abilities that let you move and full attack (like Pounce or the 'Dire Charge' epic feat) incredibly powerful.",
        ]
    },
    {
        title: "The Caster-Martial Disparity is Real",
        content: [
            "While both editions have powerful spells, the gap between spellcasters and non-spellcasters in 3.5e is a canyon. By level 15, a well-played Wizard or Cleric is a god compared to a Fighter.",
            "This is due to spells that break the game in ways 5e's magic does not: 'Time Stop', 'Gate', 'Shapechange', and persistent buffs that last 24 hours.",
            "The Tactical Shift: As a player, this means that buffing, protecting, and enabling your spellcaster is often the optimal strategy. As a DM, it means that spellcasters are almost always the highest priority target.",
        ]
    },
    {
        title: "The '15-Minute Adventuring Day'",
        content: [
            "Because high-level characters have access to so many powerful, resource-intensive abilities, the optimal strategy is often to use them all at once ('go nova') to end a single, massive encounter, and then rest for the day.",
            "The Tactical Shift: DMs running high-level 3.5e need to plan for this. A single, deadly encounter is often a better challenge than a series of smaller ones. This compendium is built with that philosophy in mind, providing epic-level threats designed to be the 'one big fight' of the day.",
        ]
    }
  ]
};