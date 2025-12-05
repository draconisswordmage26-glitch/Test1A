// data/baselineMonsters/adamantineGolem.ts
import { BaselineMonster } from '../../types';

export const adamantineGolem: BaselineMonster = {
  name: "Adamantine Golem, Unstoppable Juggernaut",
  description: "A massive, humanoid-shaped construct forged from pure adamantine. It is a mindless engine of destruction, nearly impervious to harm and capable of immense devastation.",
  racialHitDice: "25d10+150 (400 hp)",
  sizeAndType: "Huge Construct",
  sizeModifier: -2,
  naturalArmor: 26,
  speed: "20 ft.",
  armorClass: {
    base: 33,
    breakdown: "(-2 size, -1 Dex, +26 natural)",
    touch: 7,
    flatFooted: 33,
  },
  baseAttack: 18,
  grapple: 32,
  attacks: ["Slam +24 melee (2d10+11)"],
  fullAttack: ["2 slams +24 melee (2d10+11)"],
  spaceReach: "15 ft./15 ft.",
  specialAttacks: [
    { name: "Haste", type: "Su", description: "As a free action, can activate Haste for 3 rounds, once per day." },
    { name: "Ground Stomp", type: "Ex", description: "As a standard action, the golem can stomp the ground, creating a shockwave in a 30-foot radius. All creatures on the ground in the area must make a DC 25 Reflex save or be knocked prone." },
    { name: "Overwhelming Critical", type: "Ex", description: "On a successful critical hit, the target must make a DC 25 Fortitude save or be stunned for 1 round from the sheer force." },
  ],
  specialQualities: [
    { name: "Damage Reduction", type: "Ex", description: "20/adamantine" },
    { name: "Construct Traits", type: "Ex", description: "Immune to mind-affecting, poison, sleep, etc. and any effect requiring a Fortitude save." },
    { name: "Magic Immunity", type: "Ex", description: "Immune to any spell or spell-like ability that allows spell resistance." },
  ],
  saves: { fort: 8, ref: 5, will: 5 },
  abilities: { str: 45, dex: 13, con: 0, int: 0, wis: 11, cha: 1 },
  skills: [],
  feats: ["Power Attack", "Cleave", "Great Cleave", "Improved Sunder"],
  environment: "Any",
  challengeRating: 20,
  levelAdjustment: "-",
  advancement: "19-36 HD (Huge)",
  alignment: "Unaligned",
};