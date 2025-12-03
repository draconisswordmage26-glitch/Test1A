// data/baselineMonsters/minorXixecal.ts
import { BaselineMonster } from '../../types';

export const minorXixecal: BaselineMonster = {
    name: "Minor Xixecal, Winter's Heart",
    description: "A lesser form of the apocalyptic Xixecal, this colossal aberration of ice and malice is still a sight to behold. It wanders the coldest wastes, creating servants of ice and destroying all warmth and life.",
    racialHitDice: "20d8+160 (250 hp)",
    sizeAndType: "Huge Aberration (Cold)",
    sizeModifier: -2,
    naturalArmor: 22,
    speed: "40 ft.",
    armorClass: { base: 30, breakdown: "(-2 size, +22 natural)", touch: 8, flatFooted: 30 },
    baseAttack: 15,
    grapple: 34,
    attacks: ["Slam +24 melee (2d6+11)"],
    fullAttack: ["2 slams +24 melee (2d6+11)"],
    spaceReach: "15 ft./15 ft.",
    specialAttacks: [
        { name: "Cone of Cold", type: "Su", description: "60-foot cone, 15d6 cold damage, Reflex DC 28 half. Usable every 1d4 rounds." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/bludgeoning and magic" },
        { name: "Spell Resistance", type: "Ex", description: "28" },
        { name: "Fast Healing", type: "Ex", description: "5" },
        { name: "Blindsight", type: "Ex", description: "120 ft." },
        { name: "Immunity to Cold", type: "Ex", description: "" },
        { name: "Vulnerability to Fire", type: "Ex", description: "" },
    ],
    saves: { fort: 20, ref: 6, will: 19 },
    abilities: { str: 33, dex: 10, con: 26, int: 23, wis: 24, cha: 26 },
    skills: [{ name: "Concentration", bonus: 31 }, { name: "Knowledge (nature)", bonus: 31 }, { name: "Knowledge (the planes)", bonus: 31 }, { name: "Listen", bonus: 30 }, { name: "Spot", bonus: 30 }, { name: "Survival", bonus: 30 }],
    feats: ["Power Attack", "Cleave", "Great Cleave", "Improved Sunder", "Awesome Blow", "Improved Bull Rush", "Alertness"],
    environment: "Cold deserts",
    challengeRating: 17,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "Chaotic Evil",
  };