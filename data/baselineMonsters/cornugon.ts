// data/baselineMonsters/cornugon.ts
import { BaselineMonster } from '../../types';

export const cornugon: BaselineMonster = {
  name: "Cornugon, The Veteran of the Spiked Chain",
  description: "A hulking, horned devil covered in spines, the Cornugon is an elite shock trooper in the armies of Hell. It wields a massive spiked chain with deadly, tactical precision.",
  racialHitDice: "20d8+120 (210 hp)",
  sizeAndType: "Large Outsider (Baatezu, Evil, Lawful)",
  sizeModifier: -1,
  naturalArmor: 20,
  speed: "30 ft., fly 60 ft. (good)",
  armorClass: {
    base: 33,
    breakdown: "(-1 size, +4 Dex, +20 natural)",
    touch: 13,
    flatFooted: 29,
  },
  baseAttack: 20,
  grapple: 30,
  attacks: ["Spiked chain +26 melee (2d6+11/x2)"],
  fullAttack: ["+1 spiked chain +32/+27/+22/+17 melee (2d6+17/x2 plus stun); bite +30 melee (2d6+8); and tail +30 melee (1d8+8 plus stun)"],
  spaceReach: "10 ft./10 ft. (20 ft. with spiked chain)",
  specialAttacks: [
    { name: "Infernal Wound", type: "Su", description: "Wounds from its chain deal 2 points of Constitution drain per round." },
    { name: "Stun", type: "Su", description: "A creature struck by the tail must make a DC 23 Fortitude save or be stunned for 1d4 rounds." },
    { name: "Spell-Like Abilities", type: "Sp", description: "At will—persistent image (DC 21), greater teleport, wall of fire (DC 20). 3/day—lightning bolt (DC 19), dispel magic." },
    { name: "Fear Aura", type: "Su", description: "10-ft. radius, creatures must make a DC 20 Will save or be affected by fear." },
  ],
  specialQualities: [
    { name: "Damage Reduction", type: "Su", description: "10/good" },
    { name: "Spell Resistance", type: "Ex", description: "27" },
    { name: "Regeneration", type: "Ex", description: "5 (bypassed by good-aligned, silver weapons)." },
  ],
  saves: { fort: 18, ref: 16, will: 14 },
  abilities: { str: 36, dex: 19, con: 23, int: 16, wis: 15, cha: 16 },
  skills: [{ name: "Balance", bonus: 25 }, { name: "Intimidate", bonus: 24 }, { name: "Jump", bonus: 31 }],
  feats: ["Cleave", "Improved Initiative", "Iron Will", "Power Attack", "Weapon Focus (spiked chain)", "Exotic Weapon Proficiency (spiked chain)"],
  environment: "The Nine Hells",
  challengeRating: 16,
  levelAdjustment: "+7",
  advancement: "By character class",
  alignment: "Lawful Evil",
};