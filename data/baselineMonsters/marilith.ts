// data/baselineMonsters/marilith.ts
import { BaselineMonster } from '../../types';

export const marilith: BaselineMonster = {
  name: "Marilith, Blade of the Abyss",
  description: "A powerful demon with the upper body of a humanoid female and the lower body of a great serpent. They possess six arms, each capable of wielding a weapon, making them terrifying whirlwinds of destruction in combat.",
  racialHitDice: "20d8+160 (250 hp)",
  sizeAndType: "Large Outsider (Chaotic, Evil, Tanar'ri)",
  sizeModifier: -1,
  naturalArmor: 11,
  speed: "40 ft., swim 40 ft.",
  armorClass: {
    base: 29,
    breakdown: "(-1 size, +9 Dex, +15 natural)",
    touch: 18,
    flatFooted: 20,
  },
  baseAttack: 20,
  grapple: 34,
  attacks: ["Slam +28 melee (1d8+9)"],
  fullAttack: ["6 slams +28 melee (1d8+9) and tail slap +26 melee (4d6+4)"],
  spaceReach: "10 ft./10 ft.",
  specialAttacks: [
    { name: "Constrict", type: "Ex", description: "On a successful grapple check, automatically deals 4d6+13 points of damage." },
    { name: "Pounce", type: "Ex", description: "When a marilith makes a charge, it can follow with a full attack." },
    { name: "Spell-Like Abilities", type: "Sp", description: "At will—align weapon, blade barrier (DC 22), magic weapon, project image (DC 22), see invisibility, telekinesis (DC 21), greater teleport, unholy aura (DC 24)." },
    { name: "Summon Demon", type: "Sp", description: "1/day, can summon 1d10 dretches, 1d4 babau, or one nalfeshnee, glabrezu, or hezrou (50% chance)." },
  ],
  specialQualities: [
    { name: "Damage Reduction", type: "Su", description: "10/good and cold iron" },
    { name: "Spell Resistance", type: "Ex", description: "28" },
  ],
  saves: { fort: 20, ref: 21, will: 16 },
  abilities: { str: 29, dex: 29, con: 27, int: 18, wis: 18, cha: 24 },
  skills: [{ name: "Bluff", bonus: 29 }, { name: "Concentration", bonus: 30 }, { name: "Diplomacy", bonus: 31 }, { name: "Intimidate", bonus: 31 }, { name: "Sense Motive", bonus: 26 }],
  feats: ["Combat Reflexes", "Multiweapon Fighting", "Improved Multiweapon Fighting", "Greater Multiweapon Fighting", "Power Attack", "Travel Devotion"],
  environment: "The Abyss",
  challengeRating: 17,
  levelAdjustment: "-",
  advancement: "By character class",
  alignment: "Chaotic Evil",
};