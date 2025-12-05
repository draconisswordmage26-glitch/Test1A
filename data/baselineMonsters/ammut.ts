// data/baselineMonsters/ammut.ts
import { BaselineMonster } from '../../types';

export const ammut: BaselineMonster = {
    name: "Am-mut, The Living Thunderstorm",
    description: "A being that was once a mortal caught in a storm of divine power. Their soul was shattered and fused with the raw, chaotic energy of the tempest, transforming them into a sentient thunderstorm of immense power.",
    racialHitDice: "20d8+160 (320 hp)",
    sizeAndType: "Large Outsider (Air, Elemental)",
    sizeModifier: -1,
    naturalArmor: 0,
    speed: "Fly 100 ft. (perfect)",
    armorClass: { base: 28, breakdown: "(-1 size, +8 Dex, +11 deflection)", touch: 17, flatFooted: 20 },
    baseAttack: 20,
    grapple: 25,
    attacks: ["Slam +24 melee (2d8+8 plus 2d6 electricity)"],
    fullAttack: ["Slam +24 melee (2d8+8 plus 2d6 electricity)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Call Lightning", type: "Sp", description: "At will, as the spell. Caster Level 20th. (Swift Action)" },
        { name: "Storm Burst", type: "Su", description: "30-ft. burst of wind and rain, Fort DC 25 or knocked prone." },
        { name: "Thunderclap", type: "Su", description: "3/day, as a standard action, creates a stunning sonic burst in a 20-foot radius. Creatures must make a DC 25 Fortitude save or be stunned for 1d4 rounds." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/magic" },
        { name: "Elemental Traits", type: "Ex", description: "Immunity to poison, sleep, paralysis, stunning. Immunity to electricity." },
        { name: "Amorphous", type: "Ex", description: "Immune to critical hits." },
        { name: "Whirlwind Aura", type: "Su", description: "Constantly surrounded by powerful winds, granting it a +4 deflection bonus to AC against ranged attacks and forcing smaller creatures to make a Fortitude save to approach it." },
    ],
    saves: { fort: 17, ref: 18, will: 13 },
    abilities: { str: 31, dex: 31, con: 27, int: 16, wis: 17, cha: 24 },
    skills: [{ name: "Concentration", bonus: 29 }, { name: "Knowledge (nature)", bonus: 25 }, { name: "Survival", bonus: 25 }],
    feats: ["Alertness", "Combat Reflexes", "Dodge", "Improved Initiative", "Lightning Reflexes", "Flyby Attack"],
    environment: "Any (sky)",
    challengeRating: 17,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "Chaotic Neutral",
};