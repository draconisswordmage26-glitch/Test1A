// data/baselineMonsters/oniMage.ts
import { BaselineMonster } from '../../types';

export const oniMage: BaselineMonster = {
    name: "Oni, Shaper of Souls",
    description: "A powerful spirit who acts as a psychopomp, a guardian of the cycle of souls.",
    racialHitDice: "17d8+68 (144 hp)",
    sizeAndType: "Large Outsider (Native, Shapechanger)",
    sizeModifier: -1,
    naturalArmor: 16,
    speed: "40 ft., fly 60 ft. (good)",
    armorClass: { base: 29, breakdown: "(-1 size, +4 Dex, +16 natural)", touch: 13, flatFooted: 25 },
    baseAttack: 17,
    grapple: 28,
    attacks: ["Claw +27 melee (1d6+8)"],
    fullAttack: ["2 Claws +27 melee (1d6+8) and Bite +22 melee (1d8+4)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Spell-Like Abilities", type: "Sp", description: "Caster Level 17th. At will—darkness, greater invisibility, fly. 3/day—suggestion, cone of cold (DC 23), gaseous form. 1/day—polymorph." },
        { name: "Soul Eater", type: "Su", description: "On a successful critical hit with a natural weapon, the target must make a DC 22 Fortitude save or gain one negative level." },
    ],
    specialQualities: [
        { name: "Regeneration", type: "Ex", description: "5 hp/round (acid or fire deal lethal damage)." },
        { name: "Spell Resistance", type: "Ex", description: "28" },
        { name: "Change Shape", type: "Su", description: "Can assume the form of a Large or smaller humanoid." },
    ],
    saves: { fort: 14, ref: 14, will: 13 },
    abilities: { str: 27, dex: 18, con: 18, int: 16, wis: 16, cha: 18 },
    skills: [{ name: "Concentration", bonus: 28 }, { name: "Knowledge (religion)", bonus: 27 }, { name: "Knowledge (the planes)", bonus: 27 }],
    feats: ["Power Attack", "Combat Expertise", "Improved Initiative", "Iron Will", "Multiattack", "Cleave", "Great Cleave", "Toughness"],
    environment: "Any",
    challengeRating: 17,
    levelAdjustment: "+7",
    advancement: "By character class",
    alignment: "Lawful Neutral",
  };