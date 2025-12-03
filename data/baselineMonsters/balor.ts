// data/baselineMonsters/balor.ts
import { BaselineMonster } from '../../types';

export const balor: BaselineMonster = {
    name: "Balor, The Fallen Angel",
    description: "A hulking, demonic figure wreathed in fire and shadow, armed with a flaming whip and a vorpal sword. Balors are the generals of abyssal armies, embodiments of fiery destruction and pure chaotic evil.",
    racialHitDice: "20d8+200 (290 hp)",
    sizeAndType: "Large Outsider (Chaotic, Evil, Tanar'ri)",
    sizeModifier: -1,
    naturalArmor: 19,
    speed: "40 ft., fly 90 ft. (good)",
    armorClass: {
      base: 35,
      breakdown: "(-1 size, +7 Dex, +19 natural)",
      touch: 16,
      flatFooted: 28,
    },
    baseAttack: 20,
    grapple: 36,
    attacks: ["Slam +31 melee (1d8+12)"],
    fullAttack: ["2 slams +31 melee (1d8+12)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Spell-Like Abilities", type: "Sp", description: "At will—blasphemy (DC 23), dominate monster (DC 25), fire storm (DC 24), greater dispel magic, greater teleport, insanity (DC 23), power word stun, unholy aura (DC 24)." },
        { name: "Summon Demon", type: "Sp", description: "1/day, can summon 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, or 1 marilith (35% chance)." },
        { name: "Flaming Body", type: "Su", description: "A creature striking the balor with a natural weapon or handheld weapon takes 6d6 fire damage." },
        { name: "Death Throes", type: "Su", description: "When killed, explodes in a 100-ft. burst for 100 points of damage (Reflex DC 30 half)." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "15/cold iron and good" },
        { name: "Spell Resistance", type: "Ex", description: "32" },
        { name: "Regeneration", type: "Ex", description: "5 (bypassed by good-aligned weapons and spells)." },
    ],
    saves: { fort: 22, ref: 19, will: 19 },
    abilities: { str: 35, dex: 25, con: 31, int: 24, wis: 24, cha: 26 },
    skills: [{ name: "Concentration", bonus: 33 }, { name: "Diplomacy", bonus: 31 }, { name: "Intimidate", bonus: 31 }, { name: "Knowledge (any two)", bonus: 30 }, { name: "Listen", bonus: 30 }, { name: "Search", bonus: 30 }, { name: "Sense Motive", bonus: 30 }, { name: "Spot", bonus: 30 }, { name: "Use Magic Device", bonus: 31 }],
    feats: ["Cleave", "Great Cleave", "Improved Initiative", "Power Attack", "Quicken Spell-Like Ability (Teleport)", "Weapon Focus (longsword)"],
    environment: "The Abyss",
    challengeRating: 20,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "Chaotic Evil",
  };
