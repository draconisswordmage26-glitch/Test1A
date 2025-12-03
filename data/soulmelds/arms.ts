// data/soulmelds/arms.ts
import { Soulmeld } from '../../types';

export const armsSoulmelds: Soulmeld[] = [
  {
    name: "Armbands of the Grasping Void",
    levelReq: 25,
    essentia: "For every point of essentia invested, you gain a +2 insight bonus on grapple checks.",
    description: "These black iron armbands seem to absorb the light around them. You gain the benefit of the Improved Grapple feat, and any creature you grapple is considered entangled.",
    category: "Arms",
    chakraBind: [{
      chakra: "Arms",
      description: "Your arms become long, shadowy tentacles, increasing your reach by 10 feet for the purpose of making grapple checks. Once per round, you can use a standard action to create a 'Black Tentacles' effect centered on yourself that does not affect you.",
    }],
  },
  {
    name: "Bracers of the Unbroken Wall",
    levelReq: 23,
    essentia: "For every point of essentia invested, you gain a +1 shield bonus to your AC.",
    description: "These thick, stone bracers grant you a +4 bonus on checks to resist being bull rushed or overrun. You can wield a two-handed weapon as if it were a one-handed weapon.",
    category: "Arms",
    chakraBind: [{
      chakra: "Arms",
      description: "You gain the benefit of the Mettle extraordinary ability. If you succeed on a Fortitude or Will save against an effect with a partial effect, you instead suffer no effect.",
    }],
  },
  {
    name: "Vambraces of the Arrow-Storm",
    levelReq: 26,
    essentia: "For every point of essentia invested, you gain a +1 insight bonus on ranged attack rolls.",
    description: "These sleek, silver vambraces hum with stored kinetic energy. You gain the benefit of the Far Shot and Rapid Shot feats.",
    category: "Arms",
    chakraBind: [{
      chakra: "Arms",
      description: "You gain the benefit of the Manyshot feat. Once per day, you can make a full attack action as a standard action with a ranged weapon.",
    }],
  },
  {
    name: "Manacles of the Bound Fiend",
    levelReq: 28,
    essentia: "For every point of essentia invested, the save DC to escape your grapples increases by 1.",
    description: "Chains of cold iron wrap around your forearms. Any extraplanar creature you successfully grapple cannot use any of its teleportation or planar travel abilities for as long as you maintain the grapple.",
    category: "Arms",
    chakraBind: [{
      chakra: "Arms",
      description: "When you successfully grapple an outsider, they must make a Will save (DC 20 + Cha mod) or be affected by a 'Dimensional Anchor' spell for 24 hours.",
    }],
  },
  {
    name: "Armlets of the Serpent's Strike",
    levelReq: 22,
    essentia: "For every point of essentia invested, you gain a +1 bonus on attack rolls with your attacks of opportunity.",
    description: "Coiled serpents of green metal wrap around your arms. You gain the Combat Reflexes feat, allowing you to make a number of attacks of opportunity equal to your Dexterity modifier each round.",
    category: "Arms",
    chakraBind: [{
      chakra: "Arms",
      description: "Your reach increases by 5 feet. Any creature you strike with an attack of opportunity is poisoned (Fort DC 15 + Con mod, 1d6 Str initial and secondary damage).",
    }],
  },
  {
    name: "Bracers of the Aegis",
    levelReq: 30,
    essentia: "For every point of essentia invested, you gain a +1 deflection bonus to AC.",
    description: "These golden bracers project a faint shield of force. You gain a +5 shield bonus to AC.",
    category: "Arms",
    chakraBind: [{
      chakra: "Arms",
      description: "Once per round, when you or an adjacent ally would be struck by an attack, you can grant that target total cover against the attack as an immediate action.",
    }],
  },
  {
    name: "Armguards of the Iron Saint",
    levelReq: 27,
    essentia: "For every point of essentia invested, your DR from this soulmeld increases by 1.",
    description: "These heavy, ornate armguards make your arms feel like pillars of iron. You gain DR 5/-.",
    category: "Arms",
    chakraBind: [{
      chakra: "Arms",
      description: "You gain the benefit of the Diehard feat. Additionally, once per day, when you are reduced to 0 or fewer hit points, you can continue to fight for one more round as if you were not disabled. At the end of that round, you die if you are still at negative hit points.",
    }],
  },
  {
    name: "Wraps of the Patient Master",
    levelReq: 24,
    essentia: "For every point of essentia invested, you gain a +2 bonus on checks made to feint in combat.",
    description: "These simple cloth wraps improve your control over your weapons. You gain the benefit of the Combat Expertise and Improved Feint feats.",
    category: "Arms",
    chakraBind: [{
      chakra: "Arms",
      description: "When you successfully feint against an opponent, they are considered flat-footed against all of your attacks until the start of your next turn. This allows you to make a full attack with sneak attack damage against the target.",
    }],
  },
];
