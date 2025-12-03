// data/baselineMonsters/pyroclasticDragon.ts
import { BaselineMonster } from '../../types';

export const pyroclasticDragon: BaselineMonster = {
    name: "Pyroclastic Dragon, The Calamity's Charge",
    description: "A terrifying dragon whose scales are hardened magma and whose blood is molten rock. It is a creature of pure volcanic fury, its every charge a miniature eruption of destructive force.",
    racialHitDice: "16d12+112 (216 hp)",
    sizeAndType: "Large Dragon (Fire)",
    sizeModifier: -1,
    naturalArmor: 18,
    speed: "40 ft., fly 150 ft. (poor)",
    armorClass: { base: 28, breakdown: "(-1 size, +1 Dex, +18 natural)", touch: 10, flatFooted: 27 },
    baseAttack: 16,
    grapple: 31,
    attacks: ["Bite +27 melee (2d6+11/19-20)"],
    fullAttack: ["Bite +27 melee (2d6+11/19-20), 2 claws +25 melee (1d8+5)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Breath Weapon", type: "Su", description: "60-ft. cone of fire and rock, 12d6 fire damage and 6d6 bludgeoning damage, Reflex DC 25 half." },
        { name: "Spell-Like Abilities", type: "Sp", description: "At will—stone shape, wall of fire. 1/day—earthquake." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "5/magic" },
        { name: "Spell Resistance", type: "Ex", description: "25" },
        { name: "Immunity to Fire", type: "Ex", description: "" },
        { name: "Vulnerability to Cold", type: "Ex", description: "" },
        { name: "Magma Aura", type: "Su", description: "An aura of intense heat surrounds the dragon in a 10-foot radius, dealing 2d6 fire damage to any creature that begins its turn in the area." },
    ],
    saves: { fort: 17, ref: 11, will: 13 },
    abilities: { str: 33, dex: 12, con: 25, int: 16, wis: 17, cha: 16 },
    skills: [{ name: "Intimidate", bonus: 24 }, { name: "Jump", bonus: 32 }, { name: "Listen", bonus: 24 }, { name: "Spot", bonus: 24 }],
    feats: ["Power Attack", "Improved Bull Rush", "Shock Trooper", "Cleave", "Weapon Focus (Bite)"],
    environment: "Volcanic mountains",
    challengeRating: 17,
    levelAdjustment: "+6",
    advancement: "By character class",
    alignment: "Chaotic Neutral",
  };