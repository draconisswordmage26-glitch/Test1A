// data/soulmelds/shoulders.ts
import { Soulmeld } from '../../types';

export const shouldersSoulmelds: Soulmeld[] = [
  {
    name: "Adamant Pauldrons",
    levelReq: 29,
    essentia: "For every point of essentia invested, you gain a +1 bonus to your natural armor.",
    description: "Your shoulders are covered in plates of shining adamantine. You gain DR 5/adamantine and are immune to the effects of the Sunder combat maneuver.",
    category: "Shoulders",
    chakraBind: [{
      chakra: "Shoulders",
      description: "Your damage reduction increases to 15/adamantine. Once per round, when you would be struck by a critical hit, you can negate the critical hit, taking normal damage instead.",
    }],
  },
  {
    name: "Mantle of the Primeval Sun",
    levelReq: 24,
    essentia: "For every point of essentia invested, the healing and damage of your aura increases by 2d6.",
    description: "You radiate an aura of blinding, pure positive energy in a 60-foot radius. Allies in the aura have fast healing 10. Undead and evil outsiders take 5d6 points of holy damage each round.",
    category: "Shoulders",
    chakraBind: [{
      chakra: "Shoulders",
      description: "You become immune to negative energy and death effects. You can, as a standard action, unleash a 100-ft. burst of sunlight that duplicates the Searing Light spell, dealing 10d8 damage to enemies (20d8 to undead).",
    }],
  },
  {
    name: "Phase-Cloak of the Ethereal",
    levelReq: 21,
    essentia: "For every point of essentia invested, you gain a +1 deflection bonus to AC against attacks from corporeal creatures.",
    description: "This shimmering, translucent cloak allows you to exist partially on the Ethereal Plane. You gain the benefits of being incorporeal (50% miss chance against corporeal sources, move through solid objects). You can suppress or resume this ability as a move action.",
    category: "Shoulders",
    chakraBind: [{
      chakra: "Shoulders",
      description: "You become permanently ethereal, as per the Etherealness spell, though you can still perceive and affect the Material Plane. You can manifest a corporeal form for 1 minute per day per point of essentia invested.",
    }],
  },
  {
    name: "Wings of the Void-Glider",
    levelReq: 32,
    essentia: "For every point of essentia invested, your fly speed increases by 10 feet.",
    description: "Vast wings of shimmering darkness sprout from your back, granting you a fly speed of 100 ft. (perfect).",
    category: "Shoulders",
    chakraBind: [{
      chakra: "Shoulders",
      description: "Your fly speed becomes supernatural and is no longer impeded by environmental conditions. You can fly through the void of space and use Planar Travel at will as a spell-like ability.",
    }],
  },
  {
    name: "Mantle of the Star-Strewn Void",
    levelReq: 27,
    essentia: "For every point of essentia invested, the damage from your aura increases by 1d6.",
    description: "This deep black cloak is filled with pinpricks of light like distant stars. It grants you concealment (20% miss chance). You radiate an aura of profound cold in a 15-foot radius, dealing 3d6 cold damage to creatures in the area.",
    category: "Shoulders",
    chakraBind: [{
      chakra: "Shoulders",
      description: "Your concealment becomes total (50% miss chance). You become immune to cold damage.",
    }],
  },
  {
    name: "Pauldrons of the Unflinching Sentinel",
    levelReq: 23,
    essentia: "For every point of essentia invested, you gain a +1 bonus on Sense Motive checks to avoid being feinted.",
    description: "These large, imposing pauldrons feature stylized, ever-open eyes. You gain the benefit of the Uncanny Dodge ability, retaining your Dexterity bonus to AC even if flat-footed.",
    category: "Shoulders",
    chakraBind: [{
      chakra: "Shoulders",
      description: "You gain the Improved Uncanny Dodge ability. You cannot be flanked.",
    }],
  },
  {
    name: "Cape of the Soaring Eagle",
    levelReq: 25,
    essentia: "For every point of essentia invested, you gain a +2 competence bonus on Spot checks.",
    description: "This feathered cape lightens your step and sharpens your eyes. You gain a +10 enhancement bonus to your land speed and a +5 competence bonus on Spot checks.",
    category: "Shoulders",
    chakraBind: [{
      chakra: "Shoulders",
      description: "You grow powerful eagle's wings, granting you a fly speed of 90 feet with good maneuverability.",
    }],
  },
  {
    name: "Mantle of the Infernal Prince",
    levelReq: 31,
    essentia: "For every point of essentia invested, your fire resistance increases by 5.",
    description: "A cape of smoldering embers and solidified shadow, this mantle marks you as nobility in the Nine Hells. You gain fire resistance 20 and a +4 profane bonus to your Charisma score.",
    category: "Shoulders",
    chakraBind: [{
      chakra: "Shoulders",
      description: "You are immune to fire. You can use 'Greater Teleport' as a spell-like ability at will.",
    }],
  },
  {
    name: "Shawl of the Spirit-Binder",
    levelReq: 29,
    essentia: "For every point of essentia invested, the DC to resist your summoned creature's special abilities increases by 1.",
    description: "This shawl is woven from the ethereal threads of the Astral Plane. You can cast 'Summon Monster VII' as a spell-like ability once per day.",
    category: "Shoulders",
    chakraBind: [{
      chakra: "Shoulders",
      description: "Any creature you summon with a Conjuration (summoning) spell or spell-like ability has its duration doubled and gains the benefits of the 'Augment Summoning' feat.",
    }],
  },
];
