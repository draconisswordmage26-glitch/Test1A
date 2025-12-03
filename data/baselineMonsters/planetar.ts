// data/baselineMonsters/planetar.ts
import { BaselineMonster } from '../../types';

export const planetar: BaselineMonster = {
    name: "Planetar, Emissary of War",
    description: "A Planetar is a celestial of immense power, serving as the weapons of the gods they serve. They are muscular, have skin of a metallic hue, and possess large, white feathery wings.",
    racialHitDice: "14d8+70 (133 hp)",
    sizeAndType: "Large Outsider (Angel, Good)",
    sizeModifier: -1,
    naturalArmor: 19,
    speed: "50 ft., fly 100 ft. (good)",
    armorClass: {
      base: 32,
      breakdown: "(-1 size, +1 Dex, +19 natural, +4 deflection)",
      touch: 14,
      flatFooted: 31,
    },
    baseAttack: 14,
    grapple: 27,
    attacks: ["Slam +23 melee (2d8+9)"],
    fullAttack: ["2 slams +23 melee (2d8+9)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Spell-Like Abilities", type: "Sp", description: "At will—continual flame, dispel magic, holy smite, lesser restoration, remove curse, speak with dead. 3/day—blade barrier, flame strike, power word stun, raise dead, waves of fatigue. 1/day—earthquake, greater restoration, waves of exhaustion." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/evil" },
        { name: "Spell Resistance", type: "Ex", description: "27" },
        { name: "Regeneration", type: "Ex", description: "10 (bypassed by evil-aligned weapons and spells)." },
        { name: "Protective Aura", type: "Su", description: "20-ft. radius, +4 deflection bonus to AC and +4 resistance bonus on saves against attacks from evil creatures." },
    ],
    saves: { fort: 14, ref: 10, will: 13 },
    abilities: { str: 27, dex: 13, con: 21, int: 20, wis: 23, cha: 22 },
    skills: [{ name: "Concentration", bonus: 24 }, { name: "Diplomacy", bonus: 25 }, { name: "Knowledge (religion)", bonus: 24 }, { name: "Sense Motive", bonus: 25 }, { name: "Spellcraft", bonus: 24 }],
    feats: ["Cleave", "Power Attack", "Improved Initiative", "Iron Will"],
    environment: "Any good-aligned plane",
    challengeRating: 16,
    levelAdjustment: "+8",
    advancement: "By character class",
    alignment: "Lawful Good",
  };