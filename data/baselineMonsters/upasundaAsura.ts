// data/baselineMonsters/upasundaAsura.ts
import { BaselineMonster } from '../../types';

export const upasundaAsura: BaselineMonster = {
  name: "Upasunda Asura, Binder Adept",
  description: "A powerful, six-armed fiend born from the divine entropy at the end of a world's life cycle. Upasundas are master tacticians and warriors.",
  racialHitDice: "20d8+120 (210 hp)",
  sizeAndType: "Large Outsider (Asura, Evil, Lawful)",
  sizeModifier: -1,
  naturalArmor: 13,
  speed: "50 ft.",
  armorClass: {
    base: 26,
    breakdown: "(-1 size, +4 Dex, +13 natural)",
    touch: 13,
    flatFooted: 22,
  },
  baseAttack: 20,
  grapple: 25,
  attacks: ["Claw +20 melee (1d6+9)"],
  fullAttack: ["4 claws +20 melee (1d6+9) and 2 bites +18 melee (1d8+4)"],
  spaceReach: "10 ft./10 ft.",
  specialAttacks: [
    { name: "Pounce", type: "Ex", description: "Can make a full attack on a charge." },
    { name: "Spell-Like Abilities", type: "Sp", description: "At will—greater teleport. 3/day—haste, blade barrier." },
    { name: "Flurry of Blows", type: "Ex", description: "When making a full attack, the asura can make all six of its natural attacks at its highest base attack bonus, with no penalty for secondary attacks." },
    { name: "Tactical Insight", type: "Su", description: "As a swift action, can analyze a foe to gain a +4 insight bonus to AC and attack rolls against that foe for 1 round." },
  ],
  specialQualities: [
    { name: "Damage Reduction", type: "Su", description: "10/good" },
    { name: "Spell Resistance", type: "Ex", description: "25" },
    { name: "Fast Healing", type: "Ex", description: "5" },
  ],
  saves: { fort: 13, ref: 12, will: 12 },
  abilities: { str: 34, dex: 24, con: 22, int: 15, wis: 18, cha: 17 },
  skills: [{ name: "Bluff", bonus: 19 }, { name: "Diplomacy", bonus: 21 }, { name: "Intimidate", bonus: 21 }, { name: "Knowledge (the planes)", bonus: 18 }, { name: "Sense Motive", bonus: 20 }],
  feats: ["Multiattack", "Improved Multiattack", "Power Attack", "Combat Reflexes"],
  environment: "Any evil-aligned plane",
  challengeRating: 15,
  levelAdjustment: "+6",
  advancement: "By character class",
  alignment: "Lawful Evil",
};