// data/baselineMonsters/behemoth.ts
import { BaselineMonster } from '../../types';

export const behemoth: BaselineMonster = {
    name: "Lonesome Behemoth",
    description: "A colossal magical beast with thick, purple hide, immense horns, and a muscular frame that ripples with primal power. It is a force of nature, its rage capable of leveling mountains and its roar of shattering the sky.",
    racialHitDice: "18d10+144 (243 hp)",
    sizeAndType: "Huge Magical Beast",
    sizeModifier: -2,
    naturalArmor: 18,
    speed: "50 ft.",
    armorClass: { base: 28, breakdown: "(-2 size, +2 Dex, +18 natural)", touch: 10, flatFooted: 26 },
    baseAttack: 18,
    grapple: 40,
    attacks: ["Bite +31 melee (2d8+14/19-20)"],
    fullAttack: ["Bite +31 melee (2d8+14/19-20) and 2 Claws +29 melee (2d6+7)"],
    spaceReach: "15 ft./15 ft.",
    specialAttacks: [
        { name: "Meteor", type: "Sp", description: "3/day, can call down a meteor as per the spell (CL 18th)." },
        { name: "Earthshaker", type: "Ex", description: "Whenever the behemoth charges or uses its Awesome Blow feat, the ground shakes in a 30-foot radius. Creatures in the area must make a DC 28 Reflex save or be knocked prone." },
        { name: "Primal Roar", type: "Su", description: "3/day, as a standard action, the behemoth can unleash a devastating roar in a 60-foot cone. Creatures in the cone take 10d6 sonic damage and are deafened for 1d6 minutes (Fortitude DC 27 half damage and negates deafness). Unattended objects take full damage." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/magic" },
        { name: "Spell Resistance", type: "Ex", description: "25" },
        { name: "Scent", type: "Ex", description: "" },
    ],
    saves: { fort: 19, ref: 13, will: 10 },
    abilities: { str: 39, dex: 15, con: 27, int: 8, wis: 9, cha: 14 },
    skills: [{ name: "Intimidate", bonus: 24 }, { name: "Jump", bonus: 34 }, { name: "Listen", bonus: 22 }, { name: "Spot", bonus: 22 }],
    feats: ["Power Attack", "Cleave", "Great Cleave", "Awesome Blow", "Improved Bull Rush", "Improved Sunder", "Improved Critical (Bite)", "Improved Toughness"],
    environment: "Desolate plains, ruined cities",
    challengeRating: 17,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "Chaotic Neutral",
  };