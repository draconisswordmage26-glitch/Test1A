// data/antagonists/cr_33_37/hexLegionnaire/tactics/index.ts
import { Tactics } from '../../../../types';

export const hexLegionnaireTactics: Tactics = {
  name: "Hex-Legionnaire",
  title: "Tactics: Hex-Legionnaire",
  description: "The Hex-Legionnaire is an engine of pure offensive power. It does not use subtle tactics. Its goal is to close the distance and annihilate the most dangerous foe with an overwhelming number of attacks in a single round. Its fiendish grafts and magical abilities make it a terrifyingly versatile engine of destruction.",
  sections: [
    {
      title: "Round 1: Close the Distance and Blast",
      content: [
        "The Legionnaire uses its superior speed (from its hellcat legs) to charge or simply move into a flanking position.",
        "It will use its Warlock abilities to open the fight, perhaps using an 'Eldritch Glaive' invocation to make a reach touch attack as it moves, or a quickened 'Eldritch Blast' as a swift action before it charges.",
        "Its 'Fiendish Whispers' aura will immediately start to debuff any nearby enemies.",
      ]
    },
    {
      title: "Round 2: The Blender",
      content: [
        "The Legionnaire unleashes its full attack. This is its signature move and the core of its strategy. It can make up to eight attacks in a single round (two greatswords, four tentacles, two rakes).",
        "It will use Power Attack for its full Base Attack Bonus, accepting the penalty to hit in exchange for a massive damage increase on each of its eight attacks.",
        "It will focus all of its attacks on a single target, aiming to kill them in one round before moving to the next.",
      ]
    },
    {
      title: "Round 3+: Mop Up",
      content: [
        "With its primary target eliminated, the Legionnaire will use Cleave and Great Cleave to dispatch any weaker enemies that surround it.",
        "It will use its Eldritch Blast on any flying or out-of-reach opponents.",
        "Its high HP and DR make it incredibly tough, but it will use its mobility to retreat and regroup if it becomes overwhelmed, blasting its pursuers with Eldritch energy as it withdraws."
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Hex-Legionnaires are devastating shock troops. They work well with support casters who can buff their already impressive stats or further debuff their enemies.",
        "Weaknesses: Its Will save is its primary weakness. A powerful 'Dominate Monster' or 'Maze' spell can neutralize it. Spells that create difficult terrain can hamper its mobility. While it has many attacks, it is still just one creature, and a party that can spread out and attack from multiple directions can overwhelm it."
      ]
    }
  ]
};