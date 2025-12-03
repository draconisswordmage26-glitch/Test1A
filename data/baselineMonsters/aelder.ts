// data/baselineMonsters/aelder.ts
import { BaselineMonster } from '../../types';

export const aelder: BaselineMonster = {
    name: "Aelder, The Inscrutable Seeker",
    description: "An entity from the Far Realm, an Aelder is not a being of flesh, but a sentient, mobile paradox. It appears as a shifting mass of crystalline geometry and impossible angles, constantly humming with psionic power.",
    racialHitDice: "17d8+119 (195 hp)",
    sizeAndType: "Large Aberration",
    sizeModifier: -1,
    naturalArmor: 16,
    speed: "30 ft.",
    armorClass: { base: 28, breakdown: "(-1 size, +3 Dex, +16 natural)", touch: 12, flatFooted: 25 },
    baseAttack: 12,
    grapple: 25,
    attacks: ["Touch +20 melee (2d6+9 plus reality distortion)"],
    fullAttack: ["2 Touches +20 melee (2d6+9 plus reality distortion)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Psionics", type: "Psi", description: "Manifester Level 17th. Can manifest powers as a 17th-level Psion (Shaper)." },
        { name: "Reality Distortion", type: "Su", description: "Creatures struck must make a Will save (DC 26) or be affected by a minor, confusing illusion for 1d4 rounds." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/magic and lawful" },
        { name: "Spell Resistance", type: "Ex", description: "28" },
        { name: "Alien Mind", type: "Ex", description: "Immunity to mind-affecting effects from this reality." },
        { name: "Unknowable Form", type: "Ex", description: "Its form is a constantly shifting paradox, granting it concealment (20% miss chance)." },
        { name: "Psychic Static", type: "Su", description: "An aura of mental noise in a 30-foot radius forces spellcasters and manifesters to make a DC 26 Concentration check to use their abilities." },
    ],
    saves: { fort: 19, ref: 13, will: 16 },
    abilities: { str: 28, dex: 17, con: 29, int: 26, wis: 23, cha: 24 },
    skills: [{ name: "Concentration", bonus: 32 }, { name: "Knowledge (psionics)", bonus: 31 }, { name: "Psicraft", bonus: 31 }],
    feats: ["Power Attack", "Cleave", "Psionic Body", "Power Penetration", "Psionic Meditation", "Boost Construct"],
    environment: "Any",
    challengeRating: 17,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "Chaotic Neutral",
  };