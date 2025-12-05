// data/baselineMonsters/mithralDragon.ts
import { BaselineMonster } from '../../types';

export const mithralDragon: BaselineMonster = {
    name: "Young Adult Mithral Dragon, Crusader Knight",
    description: "A sleek, intelligent dragon with scales that shimmer like polished mithral. It is a creature of logic, order, and psionic power.",
    racialHitDice: "20d12+160 (400 hp)",
    sizeAndType: "Large Dragon (Psionic)",
    sizeModifier: -1,
    naturalArmor: 19,
    speed: "40 ft., fly 150 ft. (poor)",
    armorClass: { base: 29, breakdown: "(-1 size, +1 Dex, +19 natural)", touch: 10, flatFooted: 28 },
    baseAttack: 20,
    grapple: 31,
    attacks: ["Bite +27 melee (2d6+9)"],
    fullAttack: ["Bite +27 melee (2d6+9), 2 claws +25 melee (1d8+4), 2 wings +25 melee (1d6+4), tail slap +25 melee (1d8+13)"],
    spaceReach: "10 ft./10 ft. (5 ft. with bite)",
    specialAttacks: [
        { name: "Breath Weapon", type: "Su", description: "Cone of force, 12d8 damage, Reflex DC 23 half." },
        { name: "Psi-Like Abilities", type: "Psi", description: "Manifester Level 20th. At will—force screen, telekinetic maneuver. 3/day—wall of ectoplasm, telekinetic thrust. 1/day—psionic disintegrate." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "5/magic" },
        { name: "Spell Resistance", type: "Ex", description: "23" },
        { name: "Alternate Form", type: "Su", description: "Can assume any humanoid form of Medium size or smaller." },
        { name: "Kinetic Control", type: "Su", description: "As an immediate action, the dragon can attempt to counter any projectile, ranged spell, or ranged power by making a manifester level check against a DC of 20 + the spell/power level. On a success, the effect is negated." },
    ],
    saves: { fort: 15, ref: 12, will: 14 },
    abilities: { str: 39, dex: 12, con: 27, int: 22, wis: 23, cha: 22 },
    skills: [{ name: "Concentration", bonus: 26 }, { name: "Diplomacy", bonus: 25 }, { name: "Knowledge (psionics)", bonus: 25 }, { name: "Listen", bonus: 27 }, { name: "Psychic Ken", bonus: 25 }, { name: "Sense Motive", bonus: 25 }, { name: "Spot", bonus: 27 }],
    feats: ["Multiattack", "Power Attack", "Improved Multiattack", "Psionic Meditation", "Weapon Focus (Bite)", "Alertness", "Flyby Attack"],
    environment: "Temperate mountains",
    challengeRating: 20,
    levelAdjustment: "+7",
    advancement: "By character class",
    alignment: "Lawful Neutral",
};