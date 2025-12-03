// data/soulmelds/feet.ts
import { Soulmeld } from '../../types';

export const feetSoulmelds: Soulmeld[] = [
  {
    name: "Airstep Sandals",
    levelReq: 22,
    essentia: "For every point of essentia invested, your fly speed increases by 5 feet.",
    description: "These sandals allow you to treat the air as solid ground. You gain the ability to walk on air as per the 'Air Walk' spell, with a speed of 60 feet.",
    category: "Feet",
    chakraBind: [{
      chakra: "Feet",
      description: "You gain a true fly speed of 100 feet with perfect maneuverability. You are permanently under the effects of a 'Freedom of Movement' spell.",
    }],
  },
  {
    name: "Boots of the Comet's Charge",
    levelReq: 23,
    essentia: "For every point of essentia invested, you gain a +2 bonus on damage rolls made as part of a charge.",
    description: "These boots of solidified starlight increase your base land speed by 30 feet and allow you to charge over difficult terrain without penalty.",
    category: "Feet",
    chakraBind: [{
      chakra: "Feet",
      description: "When you charge, you gain a fly speed equal to double your land speed for the duration of the charge. The damage from your charge is maximized, and you may make a free trip attempt that does not provoke an attack of opportunity.",
    }],
  },
  {
    name: "Soul of the Juggernaut",
    levelReq: 36,
    essentia: "For every point of essentia invested, you gain a +2 bonus on checks to resist being bull rushed, tripped, or grappled.",
    description: "Your connection to the earth becomes absolute. You gain the benefit of the Stability extraordinary ability, and you are constantly under the effect of a Freedom of Movement spell.",
    category: "Feet",
    chakraBind: [{
      chakra: "Feet",
      description: "You become truly unstoppable. You are immune to any effect that would hinder your movement, including paralysis, solid walls (you pass through them), and magical effects like Wall of Force. You may move at your full speed through any terrain.",
    }],
  },
  {
    name: "Sandals of the Desert Wind",
    levelReq: 24,
    essentia: "For every point of essentia invested, the fire damage from this soulmeld increases by 1d6.",
    description: "These sandals are woven from shimmering heat haze. Your land speed increases by 20 feet. Any square you leave is set ablaze, dealing 2d6 fire damage to any creature that enters it for 1 round.",
    category: "Feet",
    chakraBind: [{
      chakra: "Feet",
      description: "You gain fire resistance 30. As a standard action, you can stomp the ground to create a 'Wall of Fire' as per the spell.",
    }],
  },
  {
    name: "Greaves of the Earth-Shaker",
    levelReq: 30,
    essentia: "For every point of essentia invested, the DC of your stomp's save increases by 1.",
    description: "These heavy iron greaves make your steps shake the very ground. You cannot be knocked prone. As a standard action, you can stomp to create a shockwave in a 20-foot radius, forcing creatures to make a Reflex save or be knocked prone.",
    category: "Feet",
    chakraBind: [{
      chakra: "Feet",
      description: "When you stomp, the effect is now a full-fledged 'Earthquake' spell centered on you. You are not affected by this earthquake.",
    }],
  },
  {
    name: "Boots of the Voidwalker",
    levelReq: 32,
    essentia: "For every point of essentia invested, you can use your teleport ability one additional time per day.",
    description: "These boots are made of solidified shadow. Once per day, you can use 'Dimension Door' as a spell-like ability.",
    category: "Feet",
    chakraBind: [{
      chakra: "Feet",
      description: "You can use 'Greater Teleport' as a spell-like ability at will.",
    }],
  },
  {
    name: "Spurs of the Wyvern's Sting",
    levelReq: 26,
    essentia: "For every point of essentia invested, the DC of your poison increases by 1.",
    description: "Barbed spurs of bone grow from your heels. As part of a charge, you can make an extra attack with these spurs, dealing 1d8 damage and injecting a poison (Fort DC 18 + Con mod, 1d6 Con initial and secondary damage).",
    category: "Feet",
    chakraBind: [{
      chakra: "Feet",
      description: "Your speed increases by 10 feet. The poison from your spurs now deals Constitution drain instead of damage.",
    }],
  },
  {
    name: "Slippers of the Spider's Climb",
    levelReq: 21,
    essentia: "For every point of essentia invested, you gain a +2 bonus on Climb checks.",
    description: "These soft slippers allow you to climb sheer surfaces as if under the effect of a 'Spider Climb' spell.",
    category: "Feet",
    chakraBind: [{
      chakra: "Feet",
      description: "You grow spinnerets, allowing you to shoot webs as a standard action. You can create a 'Web' spell effect 3 times per day.",
    }],
  },
  {
    name: "Anklets of the Tsunami",
    levelReq: 28,
    essentia: "For every point of essentia invested, the damage of your water jet increases by 1d8.",
    description: "These anklets are constantly dripping with seawater. You can walk on water (as 'Water Walk'). As a standard action, you can fire a 60-foot line of water that deals 5d8 bludgeoning damage.",
    category: "Feet",
    chakraBind: [{
      chakra: "Feet",
      description: "You gain a swim speed of 60 feet and can breathe underwater. Once per day, you can cast 'Tsunami' as a spell-like ability (CL 20).",
    }],
  },
];
