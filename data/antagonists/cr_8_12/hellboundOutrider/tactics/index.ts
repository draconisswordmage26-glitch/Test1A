
// data/antagonists/cr_8_12/hellboundOutrider/tactics/index.ts
import { Tactics } from '../../../../types';

export const hellboundOutriderTactics: Tactics = {
  name: "Kaiserjäger",
  title: "Tactics: Kaiserjäger",
  description: "The Kaiserjäger is a highly mobile skirmisher and ranged damage dealer. Its tactics revolve around using its Nightmare's speed and special abilities to maintain distance and attack with impunity. It should never willingly engage in melee combat.",
  sections: [
    {
      title: "Round 1: Smoke and Fire",
      content: [
        "The Kaiserjäger begins by having its Nightmare use its 'Smoke' ability (creates a 20-ft radius of smoke) to provide concealment.",
        "From within the smoke, it uses its full attack action with Rapid Shot to fire a volley of arrows at the most dangerous-looking ranged opponent or spellcaster.",
        "Thanks to Improved Precise Shot, it can fire through the smoke and into melee without penalty, ignoring all but total cover and concealment.",
      ]
    },
    {
      title: "Round 2: Reposition and Rain Death",
      content: [
        "The Kaiserjäger uses its Nightmare's incredible 90-foot fly speed to move to a new, advantageous position, preferably one with cover or elevation.",
        "It uses Manyshot to deliver a powerful two-arrow strike against a high-priority target that has been wounded.",
        "Its Ranger spells are prepared in advance. 'Animal Growth' might be used on allied war beasts, or 'Spike Growth' to cut off enemy retreat.",
      ]
    },
    {
      title: "Round 3+: Kiting and Harassing",
      content: [
        "The Kaiserjäger and its Nightmare continue to use their superior mobility to stay out of reach of melee combatants.",
        "It will use its Nightmare's 'Astral Projection' and 'Etherealness' abilities to escape if cornered or if the battle is lost.",
        "It will focus its fire on any creature that can fly or has powerful ranged abilities, aiming to maintain its aerial superiority.",
        "Against its favored enemies (especially Elves), its damage output is significantly higher. It will always prioritize these targets with extreme prejudice."
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Kaiserjäger work best in groups, able to create large areas of smoke and focus fire on single targets. They are excellent support for a slower, heavily armored melee force like Imperium Inquisitors.",
        "Weaknesses: The Kaiserjäger itself is not particularly tough, with low HP and saves. Spells that can ground its Nightmare (like 'Solid Fog') or that can bypass concealment (like 'Glitterdust') are highly effective. If separated from its mount, it is very vulnerable."
      ]
    }
  ]
};
