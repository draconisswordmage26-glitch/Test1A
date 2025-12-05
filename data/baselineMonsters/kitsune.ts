// data/baselineMonsters/kitsune.ts
import { BaselineMonster } from '../../types';

export const kitsune: BaselineMonster = {
    name: "Kitsune Nine-Tailed Maiden",
    description: "A beautiful, nine-tailed fox spirit with the ability to shape-shift into a human form. She is a being of immense magical power, a master of illusion, enchantment, and forgotten lore.",
    racialHitDice: "20d6+140 (260 hp)",
    sizeAndType: "Medium Fey",
    sizeModifier: 0,
    naturalArmor: 10,
    speed: "40 ft.",
    armorClass: { base: 35, breakdown: "(+6 Dex, +10 natural, +9 deflection)", touch: 25, flatFooted: 29 },
    baseAttack: 10,
    grapple: 9,
    attacks: ["Claw +14 melee (1d4+1)"],
    fullAttack: ["2 Claws +14 melee (1d4+1) and Bite +9 melee (1d6)"],
    spaceReach: "5 ft./5 ft.",
    specialAttacks: [
        { name: "Spell-Like Abilities", type: "Sp", description: "CL 20th, DC 21 + spell level. At will—dominate person, project image, silent image. 3/day—mass suggestion, heal, scintillating pattern. 1/day—weird." },
        { name: "Foxfire", type: "Su", description: "At will, can create dancing lights of colored fire. Can use these to daze opponents or create hypnotic patterns." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "15/cold iron" },
        { name: "Spell Resistance", type: "Ex", description: "29" },
        { name: "Change Shape", type: "Su", description: "Can assume the form of any specific medium female humanoid or a fox." },
        { name: "Fast Healing", type: "Ex", description: "5" },
        { name: "Nine Tails, Nine Lives", type: "Su", description: "The first 8 times the Kitsune would be reduced to 0 or fewer hit points, one of her tails vanishes and she is instantly restored to her full hit point total. This does not prevent death from massive damage if the damage exceeds her full hit points." },
    ],
    saves: { fort: 9, ref: 18, will: 17 },
    abilities: { str: 14, dex: 30, con: 24, int: 28, wis: 24, cha: 34 },
    skills: [{ name: "Bluff", bonus: 32 }, { name: "Diplomacy", bonus: 32 }, { name: "Disguise", bonus: 30 }, { name: "Perform", bonus: 30 }, { name: "Spellcraft", bonus: 28 }],
    feats: ["Spell Focus (Illusion)", "Spell Focus (Enchantment)", "Melodic Casting", "Weapon Finesse", "Multiattack", "Combat Casting", "Improved Initiative", "Heighten Spell", "Quicken Spell"],
    environment: "Temperate forests",
    challengeRating: 20,
    levelAdjustment: "+6",
    advancement: "By character class",
    alignment: "Chaotic Good",
};