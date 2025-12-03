
// data/antagonists/cr_18_22/panzerdrake/tactics/index.ts
import { Tactics } from '../../../../types';

export const panzerdrakeTactics: Tactics = {
  name: "Panzerdrake",
  title: "Tactics: Panzerdrake",
  description: "The Panzerdrake is a straightforward and brutal opponent. It is a living siege engine, and its tactics reflect this. It will use its breath weapon to inflict massive damage from a distance, then lumber into melee to crush any survivors. It is a creature of pure agony and will fight with mindless, desperate fury.",
  sections: [
    {
      title: "Opening Salvo",
      content: [
        "The Panzerdrake will always open combat with its Hellfire Cannon breath weapon.",
        "It will attempt to line up as many targets as possible, prioritizing spellcasters and other ranged threats.",
        "Its goal is to soften up the enemy before they can close the distance.",
      ]
    },
    {
      title: "The Unstoppable Advance",
      content: [
        "After its initial blast, the Panzerdrake will move relentlessly towards the largest group of enemies.",
        "It is slow, but its high DR and Hardness make it incredibly difficult to stop.",
        "It will use its breath weapon again as soon as it recharges.",
      ]
    },
    {
      title: "Melee Annihilation",
      content: [
        "Once in melee, the Panzerdrake is a terror. It will use its full attack action every round, targeting the most heavily armored foe.",
        "It will use Awesome Blow to knock smaller creatures away, creating space and disrupting enemy formations.",
        "It is not a tactical genius. It is a blunt instrument of destruction and will fight until it or its enemies are destroyed.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Panzerdrake is the ultimate line-breaker. It is often supported by Glaubenskrieger who can buff its already impressive stats and heal it.",
        "Weaknesses: Its Dexterity and Reflex save are its main weaknesses. A powerful spell that targets its Reflex save and bypasses SR can be effective. Its speed is low, making it vulnerable to kiting by a mobile party. If the party can somehow sunder its chains without getting killed, its rage can be turned against its masters."
      ]
    }
  ]
};
