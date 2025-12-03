// data/soulmelds/hands.ts
import { Soulmeld } from '../../types';

export const handsSoulmelds: Soulmeld[] = [
  {
    name: "Claws of the Astral Predator",
    levelReq: 28,
    essentia: "For every point of essentia invested, you gain a +2 insight bonus on attack rolls with your natural weapons.",
    description: "Your hands transform into shimmering claws of astral energy. These claws are treated as primary natural weapons dealing 3d6 damage and are considered to have the Ghost Touch property.",
    category: "Hands",
    chakraBind: [{
      chakra: "Hands",
      description: "Your natural attacks can now strike creatures on other planes as if you were standing adjacent to them. You can make a full attack against a creature on the Ethereal Plane, even while you are on the Material Plane.",
    }],
  },
  {
    name: "Gloves of the Lifespark",
    levelReq: 24,
    essentia: "For every point of essentia invested, your positive energy attacks (like 'turn undead') deal an extra 1d6 damage, and your healing spells/powers heal an extra 5 points.",
    description: "Your hands glow with a gentle, golden light. You gain a touch attack that heals a living creature for 10d8 points of damage or damages an undead creature for the same amount.",
    category: "Hands",
    chakraBind: [{
      chakra: "Hands",
      description: "You can cast 'Mass Heal' as a spell-like ability three times per day. Once per day, you can cast 'True Resurrection' as a spell-like ability.",
    }],
  },
  {
    name: "Grasp of the All-Thing",
    levelReq: 37,
    essentia: "For every point of essentia invested, the save DC to escape your grapple increases by 1.",
    description: "Your hands can grasp concepts as if they were physical objects. You gain a +10 bonus on grapple checks, and can initiate grapples against incorporeal and ethereal creatures.",
    category: "Hands",
    chakraBind: [{
      chakra: "Hands",
      description: "You can attempt to grapple with magical effects. You can make a grapple check against a spell or power as if it were a creature (using its caster/manifester level in place of its grapple bonus). If successful, you can hold the effect, move it, or even crush it, instantly ending its duration.",
    }],
  },
  {
    name: "Gauntlets of the Sunderer",
    levelReq: 26,
    essentia: "For every point of essentia invested, you gain a +2 bonus on Sunder attempts.",
    description: "Your hands are encased in thick iron gauntlets. You gain the benefit of the Improved Sunder feat, and your attacks deal an extra 2d6 damage to objects.",
    category: "Hands",
    chakraBind: [{
      chakra: "Hands",
      description: "Your attacks bypass 20 points of hardness. Once per day, you can make a sunder attempt against an artifact. On a successful attempt, the artifact is rendered inert for 1d4 rounds.",
    }],
  },
  {
    name: "Gloves of the Master Alchemist",
    levelReq: 22,
    essentia: "For every point of essentia invested, the DC of your alchemical touch increases by 1.",
    description: "These leather gloves are stained with a thousand chemicals. You can use a touch attack to inflict one of the following effects: 5d6 acid damage, tanglefoot bag, or smokestick effect.",
    category: "Hands",
    chakraBind: [{
      chakra: "Hands",
      description: "You can replicate the effects of any alchemical item with your touch attack. Three times per day, you can cast 'Transmute Metal to Wood' or 'Transmute Rock to Mud' as a spell-like ability.",
    }],
  },
  {
    name: "Handguards of the Iron Grip",
    levelReq: 23,
    essentia: "For every point of essentia invested, you gain a +2 bonus on Disarm checks.",
    description: "These reinforced handguards give you an unbreakable grip. You gain the benefit of the Improved Disarm feat, and you can never be disarmed yourself.",
    category: "Hands",
    chakraBind: [{
      chakra: "Hands",
      description: "When you successfully disarm an opponent, you can choose to immediately make an attack with their weapon against them as a free action.",
    }],
  },
  {
    name: "Gloves of the Spell-Siphon",
    levelReq: 32,
    essentia: "For every point of essentia invested, you gain a +1 bonus on touch attack rolls to deliver this effect.",
    description: "These dark silk gloves hunger for magic. With a successful melee touch attack, you can attempt to drain a prepared spell or spell slot from a target, as a targeted 'Dispel Magic' against their highest-level spell. If successful, you gain temporary hit points equal to 5 times the spell's level.",
    category: "Hands",
    chakraBind: [{
      chakra: "Hands",
      description: "When you successfully drain a spell, you can choose to cast that spell yourself on your next turn as a spell-like ability, using your own caster level.",
    }],
  },
  {
    name: "Gauntlets of the Stone Giant",
    levelReq: 28,
    essentia: "For every point of essentia invested, the damage of your thrown rocks increases by 1d6.",
    description: "Your hands become like carved stone. You gain a rock throwing ability, able to hurl rocks that deal 2d8 damage with a range increment of 120 feet.",
    category: "Hands",
    chakraBind: [{
      chakra: "Hands",
      description: "You gain the Rock Catching extraordinary ability. Additionally, any rock you throw is treated as an adamantine weapon for the purpose of overcoming damage reduction and hardness.",
    }],
  },
];
