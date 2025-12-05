// data/baselineMonsters/kami.ts
import { BaselineMonster } from '../../types';

export const kami: BaselineMonster = {
    name: "Ryu-jin, Kami of the World-Coil River",
    description: "A great spirit of nature, a Kami is the sentient essence of a specific, significant natural feature.",
    racialHitDice: "20d8+140 (300 hp)",
    sizeAndType: "Large Outsider (Native, Water, Shapechanger)",
    sizeModifier: -1,
    naturalArmor: 14,
    speed: "30 ft., swim 90 ft.",
    armorClass: { base: 29, breakdown: "(-1 size, +6 Dex, +14 natural)", touch: 15, flatFooted: 23 },
    baseAttack: 20,
    grapple: 25,
    attacks: ["Bite +21 melee (2d6+9)"],
    fullAttack: ["Bite +21 melee (2d6+9) and tail slap +19 melee (2d8+4 and constrict)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Water Jet", type: "Su", description: "60-ft. line of water, 10d6 damage, Reflex DC 26 half." },
        { name: "Constrict", type: "Ex", description: "On a successful grapple with tail, deals 2d8+12 damage." },
        { name: "Spell-Like Abilities", type: "Sp", description: "Caster Level 20th. At will—control water. 3/day—summon nature's ally IX (water creatures only), horrid wilting (as a desiccating blast). 1/day—tsunami." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/cold iron" },
        { name: "Spell Resistance", type: "Ex", description: "28" },
        { name: "Amphibious", type: "Ex", description: "Can breathe air and water." },
        { name: "River's Embrace", type: "Su", description: "While fully immersed in water, the Kami has fast healing 10 and concealment." },
    ],
    saves: { fort: 16, ref: 16, will: 14 },
    abilities: { str: 32, dex: 27, con: 24, int: 19, wis: 23, cha: 24 },
    skills: [{ name: "Concentration", bonus: 28 }, { name: "Diplomacy", bonus: 30 }, { name: "Knowledge (nature)", bonus: 27 }, { name: "Sense Motive", bonus: 27 }, { name: "Swim", bonus: 35 }],
    feats: ["Alertness", "Cleave", "Dodge", "Improved Natural Attack (Bite)", "Power Attack", "Weapon Focus (Bite)"],
    environment: "Any aquatic",
    challengeRating: 17,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "True Neutral",
};