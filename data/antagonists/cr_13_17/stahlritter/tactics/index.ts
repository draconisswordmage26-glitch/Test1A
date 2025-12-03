// data/antagonists/cr_13_17/stahlritter/tactics/index.ts
import { Tactics } from '../../../../types';

export const stahlritterTactics: Tactics = {
  name: "Stahlritter",
  title: "Tactics: Stahlritter",
  description: "The Stahlritter is an 'ubercharger', a build focused on dealing the maximum possible damage in a single, devastating charge. It relies on its fiendish mount's superior mobility to line up these attacks and its heavy armor to survive the counter-attack.",
  sections: [
    {
      title: "The Alpha Strike",
      content: [
        "The Stahlritter's first action will always be a charge.",
        "It will use Spirited Charge to deal triple damage with its lance.",
        "It will use Power Attack for its full Base Attack Bonus (-25), and use the Shock Trooper feat to shift this penalty to its AC instead of its attack roll. This results in a +25 bonus to damage.",
        "Against a good-aligned foe, it will also use Smite Good for a massive bonus to its attack roll and another +25 damage.",
      ]
    },
    {
      title: "Ride-By Annihilation",
      content: [
        "After its initial charge, the Stahlritter will use its Ride-By Attack feat. This allows it to move, make its charge attack, and then continue moving to a safe distance, ready to charge again on its next turn.",
        "It will use its Nightmare's 90-foot fly speed to ignore difficult terrain and enemy front lines, targeting the most vulnerable or high-value targets in the back.",
        "The Nightmare can use its 'Smoke' ability to provide concealment for the rider after a charge.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Stahlritters are the hammer of the imperial army. They work best with a solid anvil of Imperial Phalanx troopers to hold the enemy in place.",
        "Weaknesses: The Stahlritter is completely reliant on its mount and its ability to charge. Spells that create difficult terrain ('Solid Fog', 'Grease'), block movement ('Wall of Force'), or dismount the rider are extremely effective. If it is dismounted and unable to charge, it is just a standard, if tough, fighter."
      ]
    }
  ]
};
