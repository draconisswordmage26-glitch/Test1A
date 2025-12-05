// data/baselineMonsters/sunGiant.ts
import { BaselineMonster } from '../../types';

export const sunGiant: BaselineMonster = {
  name: "Sun Giant, Marshal of the Shining Host",
  description: "Sun Giants are noble and powerful giants with skin like burnished bronze and hair of fire. They are masters of strategy and command.",
  racialHitDice: "25d8+200 (400 hp)",
  sizeAndType: "Huge Giant",
  sizeModifier: -2,
  naturalArmor: 13,
  speed: "40 ft.",
  armorClass: {
    base: 24,
    breakdown: "(-2 size, +3 Dex, +13 natural)",
    touch: 11,
    flatFooted: 21,
  },
  baseAttack: 18,
  grapple: 28,
  attacks: ["Slam +20 melee (1d6+9)"],
  fullAttack: ["2 slams +20 melee (1d6+9)"],
  spaceReach: "15 ft./15 ft.",
  specialAttacks: [
    { name: "Rock Throwing", type: "Ex", description: "Range increment 120 feet, 2d8+9 damage." },
    { name: "Spell-Like Abilities", type: "Sp", description: "At will—searing light (DC 18). 3/day—sunbeam (DC 22)." },
    { name: "Solar Flare", type: "Ex", description: "When it throws a rock, it can choose to have it explode on impact, dealing an additional 4d6 fire damage in a 10-foot radius." },
  ],
  specialQualities: [
    { name: "Rock Catching", type: "Ex", description: "Can catch rocks or similar projectiles." },
    { name: "Low-Light Vision", type: "Ex", description: "" },
    { name: "Blinding Aura", type: "Su", description: "In a 30-foot radius, the giant radiates intense light. Creatures entering the aura must make a DC 21 Fortitude save or be blinded for 1d4 rounds." },
  ],
  saves: { fort: 14, ref: 8, will: 9 },
  abilities: { str: 40, dex: 16, con: 26, int: 14, wis: 18, cha: 20 },
  skills: [{ name: "Climb", bonus: 22 }, { name: "Diplomacy", bonus: 22 }, { name: "Intimidate", bonus: 22 }, { name: "Jump", bonus: 22 }, { name: "Sense Motive", bonus: 21 }, { name: "Spot", bonus: 21 }],
  feats: ["Point Blank Shot", "Precise Shot", "Far Shot", "Improved Initiative", "Power Attack", "Cleave"],
  environment: "Warm mountains",
  challengeRating: 14,
  levelAdjustment: "+4",
  advancement: "By character class",
  alignment: "Lawful Good",
};