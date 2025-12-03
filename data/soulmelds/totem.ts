// data/soulmelds/totem.ts
import { Soulmeld } from '../../types';

export const totemSoulmelds: Soulmeld[] = [
  {
    name: "Aspect of the World-Serpent",
    levelReq: 22,
    essentia: "For every point of essentia invested, your reach with your natural weapons increases by 5 feet.",
    description: "Your lower body transforms into the coils of a massive serpent, granting you a +8 enhancement bonus to Strength and the constrict special attack (4d6 + 1.5x Str mod). You do not lose your base land speed.",
    category: "Totem",
    chakraBind: [{
      chakra: "Totem",
      description: "Your size increases by one category, and the base damage of your natural attacks increases by one step. You also gain a tail slap attack that deals 2d8 damage.",
    }],
  },
  {
    name: "Behemoth's Hide",
    levelReq: 33,
    essentia: "For every point of essentia invested, you gain 10 temporary hit points.",
    description: "Your skin becomes as thick and tough as a behemoth's hide, granting you a +10 enhancement bonus to your natural armor.",
    category: "Totem",
    chakraBind: [{
      chakra: "Totem",
      description: "You gain the Awesome Blow epic feat, even if you do not meet the prerequisites. When you hit with a charge attack, you may initiate a free trip attempt.",
    }],
  },
  {
    name: "Aspect of the Chimera",
    levelReq: 27,
    essentia: "For every point of essentia invested, you gain a +1 bonus on attack rolls with one of your natural weapons.",
    description: "You grow two additional heads: a dragon's and a goat's. You gain two primary bite attacks and a primary gore attack. The dragon head also has a breath weapon (30-ft. cone of fire, 6d6 damage, usable every 1d4 rounds).",
    category: "Totem",
    chakraBind: [{
      chakra: "Totem",
      description: "You gain the Pounce extraordinary ability, allowing you to make a full attack at the end of a charge. Your breath weapon's damage increases to 12d6.",
    }],
  },
  {
    name: "Hide of the Tarrasque",
    levelReq: 40,
    essentia: "For every point of essentia invested, your natural armor bonus increases by 1.",
    description: "Your skin becomes a thick, carapaced hide like that of the Tarrasque. You gain DR 15/epic and a +15 enhancement bonus to natural armor.",
    category: "Totem",
    chakraBind: [{
      chakra: "Totem",
      description: "You gain Regeneration 40, bypassed only by epic weapons wielded by a deity. Your hide reflects all rays, lines, cones, and magic missile spells back at their caster.",
    }],
  },
  {
    name: "Claws of the Roc",
    levelReq: 25,
    essentia: "For every point of essentia invested, you gain a +2 bonus on grapple checks.",
    description: "Your hands become massive talons. You gain two primary claw attacks that deal 2d6 damage and the Improved Grab ability.",
    category: "Totem",
    chakraBind: [{
      chakra: "Totem",
      description: "You grow immense wings, granting you a fly speed of 120 feet (average). When you successfully grapple a creature, you can fly away with it at your full speed.",
    }],
  },
  {
    name: "Mind of the Sphinx",
    levelReq: 29,
    essentia: "For every point of essentia invested, you gain a +2 bonus on Riddle and Knowledge checks.",
    description: "Your mind expands with ancient knowledge. You gain a +10 insight bonus on all Knowledge checks and can speak and read all languages.",
    category: "Totem",
    chakraBind: [{
      chakra: "Totem",
      description: "Once per day, you can ask a single question, as the 'Commune' spell. Three times per day, you can unleash a roar that functions as a 'Symbol of Insanity' (DC 20 + Cha mod).",
    }],
  },
  {
    name: "Jaws of the Purple Worm",
    levelReq: 31,
    essentia: "For every point of essentia invested, the damage of your bite attack increases by 1d8.",
    description: "Your jaw unhinges and grows powerful mandibles. You gain a primary bite attack that deals 2d8 damage and the Improved Grab ability.",
    category: "Totem",
    chakraBind: [{
      chakra: "Totem",
      description: "You gain the Swallow Whole extraordinary ability. Any creature you swallow takes 2d8 points of bludgeoning damage and 8 points of acid damage per round.",
    }],
  },
  {
    name: "Heart of the Hydra",
    levelReq: 37,
    essentia: "For every point of essentia invested, your fast healing increases by 2.",
    description: "Your vitality becomes legendary. You gain Fast Healing 10 and are immune to poison.",
    category: "Totem",
    chakraBind: [{
      chakra: "Totem",
      description: "You grow two additional heads, each granting an extra bite attack. If you are decapitated, two new heads will sprout in its place in 1d4 rounds unless the stump is seared with fire.",
    }],
  },
];
