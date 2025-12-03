// data/baselineMonsters/rakshasaMaharaja.ts
import { BaselineMonster } from '../../types';

export const rakshasaMaharaja: BaselineMonster = {
    name: "Ak'chazar, Rakshasa Maharaja",
    description: "A Rakshasa Maharaja is a lord among its kind, a being of immense power, cunning, and vanity.",
    racialHitDice: "17d8+85 (161 hp)",
    sizeAndType: "Medium Outsider (Native, Shapechanger)",
    sizeModifier: 0,
    naturalArmor: 17,
    speed: "40 ft.",
    armorClass: { base: 31, breakdown: "(+4 Dex, +17 natural)", touch: 14, flatFooted: 27 },
    baseAttack: 17,
    grapple: 22,
    attacks: ["Claw +22 melee (1d6+5)"],
    fullAttack: ["2 Claws +22 melee (1d6+5) and Bite +20 melee (1d8+2)"],
    spaceReach: "5 ft./5 ft.",
    specialAttacks: [
        { name: "Spells", type: "Sp", description: "Casts spells as a 17th-level Sorcerer." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "15/good and piercing" },
        { name: "Spell Resistance", type: "Ex", description: "31" },
        { name: "Change Shape", type: "Su", description: "Can assume any humanoid form." },
    ],
    saves: { fort: 15, ref: 14, will: 16 },
    abilities: { str: 20, dex: 18, con: 20, int: 23, wis: 23, cha: 26 },
    skills: [{ name: "Bluff", bonus: 31 }, { name: "Diplomacy", bonus: 33 }, { name: "Disguise", bonus: 31 }, { name: "Knowledge (arcana)", bonus: 29 }],
    feats: ["Combat Expertise", "Dodge", "Improved Combat Casting", "Alertness", "Silent Spell", "Still Spell"],
    environment: "Any",
    challengeRating: 17,
    levelAdjustment: "+7",
    advancement: "By character class",
    alignment: "Lawful Evil",
  };