// data/baselineMonsters/titan.ts
import { BaselineMonster } from '../../types';

export const titan: BaselineMonster = {
    name: "Titan, The Unchained",
    description: "Titans are the primordial offspring of the gods, beings of immense power and size who were overthrown in ancient wars.",
    racialHitDice: "17d8+119 (195 hp)",
    sizeAndType: "Huge Outsider (Chaotic)",
    sizeModifier: -2,
    naturalArmor: 18,
    speed: "60 ft.",
    armorClass: { base: 28, breakdown: "(-2 size, +2 Dex, +18 natural)", touch: 10, flatFooted: 26 },
    baseAttack: 17,
    grapple: 39,
    attacks: ["Slam +29 melee (1d8+14)"],
    fullAttack: ["2 slams +29 melee (1d8+14)"],
    spaceReach: "15 ft./15 ft.",
    specialAttacks: [
        { name: "Spell-Like Abilities", type: "Sp", description: "Caster Level 20th. At will—chain lightning, charm monster, cure critical wounds, fire storm, invisibility, levitate, persistent image." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "15/lawful" },
        { name: "Spell Resistance", type: "Ex", description: "28" },
    ],
    saves: { fort: 19, ref: 12, will: 15 },
    abilities: { str: 39, dex: 15, con: 29, int: 18, wis: 20, cha: 24 },
    skills: [{ name: "Climb", bonus: 35 }, { name: "Intimidate", bonus: 30 }, { name: "Jump", bonus: 35 }, { name: "Sense Motive", bonus: 28 }],
    feats: ["Awesome Blow", "Cleave", "Great Cleave", "Improved Bull Rush", "Power Attack", "Improved Sunder"],
    environment: "Any",
    challengeRating: 18,
    levelAdjustment: "+7",
    advancement: "By character class",
    alignment: "Chaotic Neutral",
  };