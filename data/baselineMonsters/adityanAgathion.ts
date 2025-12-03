// data/baselineMonsters/adityanAgathion.ts
import { BaselineMonster } from '../../types';

export const adityanAgathion: BaselineMonster = {
    name: "Adityan Agathion, Warblade Scourge",
    description: "Adityans are powerful leonine celestials from Nirvana, embodying the virtues of honor, courage, and righteous fury.",
    racialHitDice: "12d8+48 (102 hp)",
    sizeAndType: "Large Outsider (Good)",
    sizeModifier: -1,
    naturalArmor: 14,
    speed: "60 ft.",
    armorClass: { base: 28, breakdown: "(-1 size, +5 Dex, +14 natural)", touch: 14, flatFooted: 23 },
    baseAttack: 12,
    grapple: 24,
    attacks: ["Bite +18 melee (1d8+4)", "Slam +20 melee (1d8+8)"],
    fullAttack: ["2 Slams +20 melee (1d8+8)", "Bite +18 melee (1d8+4)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Pounce", type: "Ex", description: "Can make a full attack on a charge." },
        { name: "Lay on Hands", type: "Su", description: "Can heal 60 hit points per day." },
        { name: "Spell-Like Abilities", type: "Sp", description: "At will—aid, continual flame, holy smite, searing light. 3/day—chain lightning, dimensional anchor. 1/day—sunburst." },
        { name: "Roar of the Righteous", type: "Su", description: "As a standard action, can unleash a powerful roar. All evil creatures within 60 ft. must make a DC 22 Will save or be frightened for 1d4 rounds. All good creatures in the area gain a +2 morale bonus on attack rolls and saves against fear for the same duration." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/evil" },
        { name: "Spell Resistance", type: "Ex", description: "28" },
        { name: "Protective Aura", type: "Su", description: "As a magic circle against evil and a lesser globe of invulnerability." },
    ],
    saves: { fort: 12, ref: 13, will: 10 },
    abilities: { str: 27, dex: 21, con: 19, int: 16, wis: 14, cha: 16 },
    skills: [{ name: "Balance", bonus: 24 }, { name: "Intimidate", bonus: 22 }, { name: "Jump", bonus: 27 }, { name: "Tumble", bonus: 24 }],
    feats: ["Power Attack", "Cleave", "Improved Sunder", "Weapon Focus (Greatsword)"],
    environment: "Nirvana",
    challengeRating: 16,
    levelAdjustment: "+8",
    advancement: "By character class",
    alignment: "Neutral Good",
  };