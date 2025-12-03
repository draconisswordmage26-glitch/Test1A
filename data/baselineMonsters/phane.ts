// data/baselineMonsters/phane.ts
import { BaselineMonster } from '../../types';

export const phane: BaselineMonster = {
    name: "Phane, The Timeless Hunter",
    description: "Phanes are alien predators that exist outside of the normal flow of time. They hunt mortals not for sustenance, but for some unknowable purpose.",
    racialHitDice: "17d8+85 (161 hp)",
    sizeAndType: "Medium Aberration (Extraplanar)",
    sizeModifier: 0,
    naturalArmor: 16,
    speed: "50 ft.",
    armorClass: { base: 30, breakdown: "(+4 Dex, +16 natural)", touch: 14, flatFooted: 26 },
    baseAttack: 12,
    grapple: 21,
    attacks: ["Claw +18 melee (2d6+5)"],
    fullAttack: ["2 Claws +18 melee (2d6+5)"],
    spaceReach: "5 ft./5 ft.",
    specialAttacks: [
        { name: "Temporal Disruption", type: "Su", description: "3/day, as a touch attack, target must make a DC 25 Fortitude save or be shifted 1d4 rounds into the future." },
        { name: "Spell-Like Abilities", type: "Sp", description: "At will—haste, slow. 3/day—time stop." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/epic and chaotic" },
        { name: "Spell Resistance", type: "Ex", description: "30" },
        { name: "Timeless", type: "Ex", description: "Immune to spells and effects that manipulate time." },
    ],
    saves: { fort: 15, ref: 15, will: 14 },
    abilities: { str: 20, dex: 19, con: 21, int: 18, wis: 19, cha: 22 },
    skills: [{ name: "Hide", bonus: 26 }, { name: "Listen", bonus: 26 }, { name: "Move Silently", bonus: 26 }, { name: "Spot", bonus: 26 }, { name: "Tumble", bonus: 26 }],
    feats: ["Dodge", "Mobility", "Spring Attack", "Improved Initiative", "Weapon Finesse"],
    environment: "Any",
    challengeRating: 17,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "Lawful Neutral",
  };