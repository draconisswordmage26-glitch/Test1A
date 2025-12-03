// data/soulmelds/crown.ts
import { Soulmeld } from '../../types';

export const crownSoulmelds: Soulmeld[] = [
  {
    name: "Crown of the God-Mind",
    levelReq: 38,
    essentia: "For every point of essentia invested, the DC of your mind-affecting abilities increases by 1.",
    description: "A crown of psychic energy coalesces on your brow. You are immune to all mind-affecting spells and abilities.",
    category: "Crown",
    chakraBind: [{
      chakra: "Crown",
      description: "You gain a divine rank of 0. You are considered a quasi-deity and can grant spells to followers. You gain a +10 profane/sacred bonus on all saving throws.",
    }],
  },
  {
    name: "Diadem of Perfect Intellect",
    levelReq: 31,
    essentia: "For every point of essentia invested, you gain a +1 insight bonus on all Knowledge and Spellcraft/Psicraft checks.",
    description: "This crystalline diadem grants you a +8 enhancement bonus to Intelligence and makes you immune to all divinations used against you.",
    category: "Crown",
    chakraBind: [{
      chakra: "Crown",
      description: "Your mind becomes a fortress of pure logic. You are immune to all mind-affecting effects. Once per week, you can perfectly replicate the effect of a Genesis or Genesis Nova epic spell, as your mind calculates the precise parameters for a stable new reality.",
    }],
  },
  {
    name: "Halo of the Dying Star",
    levelReq: 35,
    essentia: "For every point of essentia invested, the damage from your aura increases by 1d6.",
    description: "A halo of black, necrotic light floats above your head. You radiate an aura of negative energy in a 60-foot radius. Allies in the aura gain the benefits of a 'Death Ward' spell. Enemies take 5d6 points of negative energy damage each round.",
    category: "Crown",
    chakraBind: [{
      chakra: "Crown",
      description: "You become immune to positive and negative energy effects. As a standard action, you can unleash a 100-ft. burst of necrotic energy that bestows 2d4 negative levels on all enemies in the area (Fortitude save negates, DC 25 + Cha mod).",
    }],
  },
  {
    name: "Crown of the World-Tree",
    levelReq: 36,
    essentia: "For every point of essentia invested, the healing from your aura increases by 5.",
    description: "A crown of living, golden wood rests on your head. You radiate an aura of positive energy in a 60-foot radius. All allies in the aura gain fast healing 10.",
    category: "Crown",
    chakraBind: [{
      chakra: "Crown",
      description: "You become immune to all diseases and poisons. Once per day, you can cast 'Mass Heal' as a spell-like ability. You are treated as the center of a permanent 'Hallow' effect.",
    }],
  },
  {
    name: "Diadem of the Storm Lord",
    levelReq: 30,
    essentia: "For every point of essentia invested, the save DC of your weather-based abilities increases by 1.",
    description: "A crown of solidified lightning crackles with energy. You can cast 'Control Weather' at will.",
    category: "Crown",
    chakraBind: [{
      chakra: "Crown",
      description: "You gain a fly speed of 120 feet (perfect). Once per day, you can create a 'Whirlwind' as per the spell, but its duration is 1 minute per character level.",
    }],
  },
  {
    name: "Laurel of the Victor",
    levelReq: 25,
    essentia: "For every point of essentia invested, you gain a +1 morale bonus on attack rolls and saving throws.",
    description: "A simple laurel of golden leaves, this soulmeld marks you as a true champion. You are immune to fear effects.",
    category: "Crown",
    chakraBind: [{
      chakra: "Crown",
      description: "You radiate an aura of victory. All allies within 60 feet of you are also immune to fear and gain the benefit of the 'Heroism' spell.",
    }],
  },
  {
    name: "Helm of the Overlord",
    levelReq: 34,
    essentia: "For every point of essentia invested, your Leadership score increases by 2.",
    description: "This fearsome iron helm makes you appear as a great and terrible commander. You gain a +10 competence bonus on Intimidate checks.",
    category: "Crown",
    chakraBind: [{
      chakra: "Crown",
      description: "You can use 'Dominate Monster' as a spell-like ability three times per day (DC 22 + Cha mod). Any creature you dominate serves you with absolute loyalty until it dies.",
    }],
  },
  {
    name: "Cap of the Silent Master",
    levelReq: 27,
    essentia: "For every point of essentia invested, you gain a +2 bonus on Hide and Move Silently checks.",
    description: "This simple, dark cap seems to absorb sound and light. You are constantly under the effects of a 'Nondetection' spell.",
    category: "Crown",
    chakraBind: [{
      chakra: "Crown",
      description: "You gain the Hide in Plain Sight extraordinary ability, allowing you to hide without cover or concealment. You can cast 'Greater Invisibility' as a spell-like ability at will.",
    }],
  },
  {
    name: "Circlet of the Planeswalker",
    levelReq: 37,
    essentia: "For every point of essentia invested, you gain a +1 bonus to your caster level for spells that affect outsiders.",
    description: "This circlet is made from the interwoven rings of different worlds. You can cast 'Plane Shift' at will.",
    category: "Crown",
    chakraBind: [{
      chakra: "Crown",
      description: "You are constantly under the effects of a 'Freedom of Movement' spell and are immune to the negative effects of any plane's environment. Once per week, you can cast 'Gate' as a spell-like ability.",
    }],
  },
];
