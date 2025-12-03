// data/baselineMonsters/norn.ts
import { BaselineMonster } from '../../types';

export const norn: BaselineMonster = {
    name: "Norn, Weaver of Fate",
    description: "Norns are powerful, fey-like beings who can see the threads of fate and destiny that bind all creatures.",
    racialHitDice: "16d6+80 (136 hp)",
    sizeAndType: "Large Fey",
    sizeModifier: -1,
    naturalArmor: 10,
    speed: "40 ft.",
    armorClass: { base: 30, breakdown: "(-1 size, +5 Dex, +10 natural, +6 insight)", touch: 20, flatFooted: 25 },
    baseAttack: 8,
    grapple: 17,
    attacks: ["Dagger +12 melee (1d6+4/19-20)"],
    fullAttack: ["Dagger +12 melee (1d6+4/19-20)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Spell-Like Abilities", type: "Sp", description: "At will—augury, divination, greater scrying, true strike. 3/day—foresight, moment of prescience." },
        { name: "Sever Fate", type: "Su", description: "3/day, as a touch attack, forces a target to make a DC 25 Will save. On a failure, for 1 minute, the target must roll all d20s twice and take the worse result." },
        { name: "Inevitable Future", type: "Su", description: "1/encounter, as an immediate action, the Norn can declare the result of any single d20 roll made by a creature within line of sight to be either a natural 1 or a natural 20." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/cold iron and epic" },
        { name: "Spell Resistance", type: "Ex", description: "28" },
        { name: "See Fate", type: "Su", description: "Gains an insight bonus equal to its Wisdom modifier (+6) on AC and saves." },
    ],
    saves: { fort: 10, ref: 10, will: 13 },
    abilities: { str: 18, dex: 21, con: 20, int: 25, wis: 23, cha: 24 },
    skills: [{ name: "Concentration", bonus: 26 }, { name: "Diplomacy", bonus: 28 }, { name: "Knowledge (any two)", bonus: 28 }, { name: "Sense Motive", bonus: 27 }, { name: "Spellcraft", bonus: 28 }],
    feats: ["Combat Casting", "Dodge", "Mobility", "Improved Initiative", "Quicken Spell-Like Ability (Divination)"],
    environment: "Any",
    challengeRating: 17,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "True Neutral",
  };