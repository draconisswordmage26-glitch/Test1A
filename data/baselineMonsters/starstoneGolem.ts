// data/baselineMonsters/starstoneGolem.ts
import { BaselineMonster } from '../../types';

export const starstoneGolem: BaselineMonster = {
    name: "Starstone Golem, The Celestial Orphan",
    description: "A humanoid figure sculpted from a crystalline material that seems to hold a galaxy within its depths. It arrived in the world as a falling star, and now wanders the land, a silent, lost entity trying to understand a reality it wasn't built for.",
    racialHitDice: "25d10+150 (400 hp)",
    sizeAndType: "Large Construct",
    sizeModifier: -1,
    naturalArmor: 20,
    speed: "20 ft.",
    armorClass: { base: 28, breakdown: "(-1 size, -1 Dex, +20 natural)", touch: 8, flatFooted: 28 },
    baseAttack: 18,
    grapple: 25,
    attacks: ["Slam +20 melee (2d8+9)"],
    fullAttack: ["2 Slams +20 melee (2d8+9)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Starlight Burst", type: "Su", description: "3/day, can create a 30-ft. burst of light that dazzles creatures for 1d6 rounds (Reflex DC 20 negates)." },
        { name: "Spells", type: "Sp", description: "Casts spells as a 16th-level Sorcerer (CL 20th)." },
        { name: "Comet's Charge", type: "Su", description: "1/day, as a full-round action, can launch itself in a 120-ft. line. This is a charge attack that deals an additional 10d6 force damage and leaves a trail of light that dazzles creatures within 10 feet for 1 minute." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/adamantine and epic" },
        { name: "Magic Immunity", type: "Ex", description: "Immune to any spell or spell-like ability that allows spell resistance." },
        { name: "Construct Traits", type: "Ex", description: "Immunity to mind-affecting effects, etc." },
        { name: "Gravity Well", type: "Su", description: "Flying creatures within 60 feet of the golem must make a DC 20 Fortitude save each round or have their fly speed halved." },
    ],
    saves: { fort: 7, ref: 4, will: 4 },
    abilities: { str: 36, dex: 9, con: 0, int: 10, wis: 9, cha: 20 },
    skills: [],
    feats: ["Power Attack", "Cleave", "Great Cleave", "Spell Focus (Evocation)", "Greater Spell Focus (Evocation)"],
    environment: "Any",
    challengeRating: 20,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "True Neutral",
};