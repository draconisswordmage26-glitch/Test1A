// data/baselineMonsters/wormThatWalks.ts
import { BaselineMonster } from '../../types';

export const wormThatWalks: BaselineMonster = {
    name: "The Worm that Walks",
    description: "A being that was once a powerful mortal spellcaster, but through a vile ritual, has become a sentient swarm of worms.",
    racialHitDice: "16d4+112 (168 hp)",
    sizeAndType: "Medium Aberration (Swarm)",
    sizeModifier: 0,
    naturalArmor: 10,
    speed: "30 ft.",
    armorClass: { base: 25, breakdown: "(+5 Dex, +10 natural)", touch: 15, flatFooted: 20 },
    baseAttack: 8,
    grapple: 0,
    attacks: ["Swarm (4d6 plus poison)"],
    fullAttack: ["Swarm (4d6 plus poison)"],
    spaceReach: "10 ft./0 ft.",
    specialAttacks: [
        { name: "Spells", type: "Sp", description: "Casts spells as a 16th-level Wizard." },
        { name: "Distraction", type: "Ex", description: "Living creatures in swarm are nauseated for 1 round (Fort DC 24 negates)." },
        { name: "Poison", type: "Ex", description: "Injury, Fortitude DC 24, initial and secondary damage 1d6 Con." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "15/magic" },
        { name: "Spell Resistance", type: "Ex", description: "28" },
        { name: "Swarm Traits", type: "Ex", description: "Immune to weapon damage." },
        { name: "Fast Healing", type: "Ex", description: "10" },
    ],
    saves: { fort: 14, ref: 10, will: 15 },
    abilities: { str: 10, dex: 20, con: 28, int: 25, wis: 20, cha: 14 },
    skills: [{ name: "Concentration", bonus: 32 }, { name: "Knowledge (arcana)", bonus: 30 }, { name: "Spellcraft", bonus: 30 }],
    feats: ["Combat Casting", "Spell Penetration", "Greater Spell Penetration", "Heighten Spell", "Maximize Spell", "Quicken Spell"],
    environment: "Any",
    challengeRating: 17,
    levelAdjustment: "+5",
    advancement: "By character class",
    alignment: "Neutral Evil",
    };