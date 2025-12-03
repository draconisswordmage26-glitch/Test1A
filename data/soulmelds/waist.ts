// data/soulmelds/waist.ts
import { Soulmeld } from '../../types';

export const waistSoulmelds: Soulmeld[] = [
  {
    name: "Belt of the Colossus",
    levelReq: 30,
    essentia: "For every point of essentia invested, you gain a +1 enhancement bonus to Strength.",
    description: "This wide leather belt is studded with giant's teeth. You gain a +8 enhancement bonus to your Strength score.",
    category: "Waist",
    chakraBind: [{
      chakra: "Waist",
      description: "You can use 'Righteous Might' as a spell-like ability three times per day. Your size increases by one category, stacking with other size-increasing effects, up to a maximum of Colossal.",
    }],
  },
  {
    name: "Sash of the Flowing River",
    levelReq: 24,
    essentia: "For every point of essentia invested, you gain a +2 bonus on Escape Artist checks.",
    description: "This silken sash seems to flow like water. You are constantly under the effects of a 'Freedom of Movement' spell.",
    category: "Waist",
    chakraBind: [{
      chakra: "Waist",
      description: "You can no longer be entangled, paralyzed, or otherwise held. You can pass through solid objects as if you were ethereal for a number of rounds per day equal to your character level.",
    }],
  },
  {
    name: "Girdle of the Unfettered Mind",
    levelReq: 28,
    essentia: "For every point of essentia invested, you gain a +1 morale bonus on Will saves.",
    description: "This simple rope belt calms your mind and emotions. You are immune to all fear effects.",
    category: "Waist",
    chakraBind: [{
      chakra: "Waist",
      description: "You become immune to all mind-affecting spells and abilities, including compulsions and charms.",
    }],
  },
  {
    name: "Belt of the Hellcat",
    levelReq: 26,
    essentia: "For every point of essentia invested, you gain a +2 bonus on Hide and Move Silently checks.",
    description: "This belt is made from the hide of a hellcat, and two spectral tails swish behind you. You gain a +10 competence bonus on Hide and Move Silently checks, and you can see perfectly in magical darkness.",
    category: "Waist",
    chakraBind: [{
      chakra: "Waist",
      description: "You can become invisible as the 'Greater Invisibility' spell at will. While invisible, you are also perfectly silent, and even creatures with blindsense or tremorsense cannot detect you.",
    }],
  },
  {
    name: "Girdle of the Formless",
    levelReq: 32,
    essentia: "For every point of essentia invested, you gain a +2 bonus on Disguise checks.",
    description: "This belt is made of a strange, clay-like substance that constantly shifts. You can use 'Alter Self' at will.",
    category: "Waist",
    chakraBind: [{
      chakra: "Waist",
      description: "You gain the Change Shape supernatural ability, allowing you to assume the form of any humanoid, giant, or monstrous humanoid as a standard action.",
    }],
  },
  {
    name: "Sash of the Vitality Font",
    levelReq: 29,
    essentia: "For every point of essentia invested, your fast healing increases by 1.",
    description: "This bright red sash makes you feel vigorous and alive. You gain Fast Healing 5.",
    category: "Waist",
    chakraBind: [{
      chakra: "Waist",
      description: "You become immune to all ability drain and ability damage. Your fast healing increases to 15.",
    }],
  },
  {
    name: "Belt of the Gorgon's Might",
    levelReq: 27,
    essentia: "For every point of essentia invested, you gain a +1 enhancement bonus to your natural armor.",
    description: "This belt is made of overlapping iron plates. You gain a +8 enhancement bonus to your Constitution score.",
    category: "Waist",
    chakraBind: [{
      chakra: "Waist",
      description: "You become immune to petrification. Once per day, you can use a breath weapon that functions as a 'Flesh to Stone' spell in a 30-foot cone (Fortitude save DC 20 + Con mod).",
    }],
  },
  {
    name: "Girdle of the Achaierai",
    levelReq: 25,
    essentia: "For every point of essentia invested, the save DC of your black cloud increases by 1.",
    description: "This unsettling girdle is made of the feathers of a flightless, infernal bird. Once per day, you can release a cloud of black, insanity-inducing gas, as the 'Insanity' spell (30-ft. cloud, Will save negates).",
    category: "Waist",
    chakraBind: [{
      chakra: "Waist",
      description: "You can use your black cloud ability three times per day. Any creature that fails its save against your black cloud also takes 2d6 points of temporary Intelligence, Wisdom, and Charisma damage.",
    }],
  },
];
