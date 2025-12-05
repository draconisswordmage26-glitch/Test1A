// data/baselineMonsters/forceDragon.ts
import { BaselineMonster } from '../../types';

export const forceDragon: BaselineMonster = {
    name: "Force Dragon, Guardian of Reality",
    description: "A dragon whose scales are shimmering, translucent fields of pure force. It is a creature of immense psionic power and physical might, viewing itself as a guardian of the fundamental laws of reality.",
    racialHitDice: "20d12+140 (380 hp)",
    sizeAndType: "Large Dragon (Psionic)",
    sizeModifier: -1,
    naturalArmor: 18,
    speed: "40 ft., fly 150 ft. (poor)",
    armorClass: { base: 28, breakdown: "(-1 size, +1 Dex, +18 natural)", touch: 10, flatFooted: 27 },
    baseAttack: 20,
    grapple: 30,
    attacks: ["Bite +26 melee (2d6+9)"],
    fullAttack: ["Bite +26 melee (2d6+9), 2 claws +24 melee (1d8+4), 2 wings +24 melee (1d6+4)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Breath Weapon", type: "Su", description: "60-ft. cone of force, 12d10 damage, Reflex DC 26 half." },
        { name: "Psi-Like Abilities", type: "Psi", description: "Manifester Level 20th. At will—force screen, telekinetic maneuver. 3/day—wall of ectoplasm, telekinetic thrust. 1/day—psionic disintegrate." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "5/magic" },
        { name: "Spell Resistance", type: "Ex", description: "25" },
        { name: "Kinetic Control", type: "Su", description: "As an immediate action, the dragon can attempt to counter any projectile, ranged spell, or ranged power by making a manifester level check against a DC of 20 + the spell/power level. On a success, the effect is negated." },
    ],
    saves: { fort: 15, ref: 11, will: 14 },
    abilities: { str: 38, dex: 12, con: 25, int: 22, wis: 23, cha: 22 },
    skills: [{ name: "Concentration", bonus: 28 }, { name: "Knowledge (psionics)", bonus: 27 }, { name: "Psicraft", bonus: 27 }, { name: "Sense Motive", bonus: 27 }],
    feats: ["Power Attack", "Cleave", "Multiattack", "Psionic Body", "Speed of Thought"],
    environment: "Any",
    challengeRating: 20,
    levelAdjustment: "+6",
    advancement: "By character class",
    alignment: "Lawful Neutral",
};