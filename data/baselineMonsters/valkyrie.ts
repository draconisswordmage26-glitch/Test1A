// data/baselineMonsters/valkyrie.ts
import { BaselineMonster } from '../../types';

export const valkyrie: BaselineMonster = {
  name: "Valkyrie, The Shieldmaiden",
  description: "A fierce and beautiful warrior-maiden who serves a deity of war or death. Valkyries choose which warriors are worthy to die in battle and be taken to the halls of their god.",
  racialHitDice: "20d8+120 (210 hp)",
  sizeAndType: "Medium Outsider (Good)",
  sizeModifier: 0,
  naturalArmor: 8,
  speed: "40 ft., fly 90 ft. (good)",
  armorClass: {
    base: 22,
    breakdown: "(+4 Dex, +8 natural)",
    touch: 14,
    flatFooted: 18,
  },
  baseAttack: 20,
  grapple: 23,
  attacks: ["Slam +23 melee (1d6+8)"],
  fullAttack: ["2 slams +23 melee (1d6+8)"],
  spaceReach: "5 ft./5 ft.",
  specialAttacks: [
    { name: "Spell-Like Abilities", type: "Sp", description: "At will—detect evil, know alignment. 3/day—flame strike, call lightning. 1/day—slay living." },
    { name: "Choose the Slain", type: "Su", description: "As a standard action, can designate one creature with less than 50% of its hit points remaining. If that creature dies within the next minute, the Valkyrie gains a +4 morale bonus to attack, damage, and saves for the rest of the encounter." },
    { name: "Ride the Lightning", type: "Su", description: "When she uses her 'call lightning' spell-like ability, she can choose to instantly teleport to the location where the lightning bolt strikes as a free action." },
  ],
  specialQualities: [
    { name: "Damage Reduction", type: "Su", description: "10/magic and cold iron" },
    { name: "Spell Resistance", type: "Ex", description: "25" },
    { name: "Ethereal Jaunt", type: "Su", description: "Can become ethereal for 10 rounds/day." },
  ],
  saves: { fort: 14, ref: 13, will: 12 },
  abilities: { str: 34, dex: 19, con: 22, int: 16, wis: 17, cha: 22 },
  skills: [{ name: "Diplomacy", bonus: 26 }, { name: "Handle Animal", bonus: 26 }, { name: "Intimidate", bonus: 26 }, { name: "Ride", bonus: 24 }, { name: "Sense Motive", bonus: 23 }],
  feats: ["Mounted Combat", "Ride-By Attack", "Spirited Charge", "Power Attack", "Improved Initiative"],
  environment: "Any",
  challengeRating: 16,
  levelAdjustment: "+5",
  advancement: "By character class",
  alignment: "Neutral Good",
};