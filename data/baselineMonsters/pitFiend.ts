// data/baselineMonsters/pitFiend.ts
import { BaselineMonster } from '../../types';

export const pitFiend: BaselineMonster = {
    name: "Pit Fiend, The Dissident General",
    description: "A towering, winged devil of immense power and cunning, wreathed in hellfire. Pit Fiends are the generals of the Nine Hells, masters of strategy and the art of corruption.",
    racialHitDice: "18d8+144 (225 hp)",
    sizeAndType: "Large Outsider (Baatezu, Evil, Lawful)",
    sizeModifier: -1,
    naturalArmor: 27,
    speed: "40 ft., fly 60 ft. (average)",
    armorClass: {
      base: 40,
      breakdown: "(-1 size, +4 Dex, +27 natural)",
      touch: 13,
      flatFooted: 36,
    },
    baseAttack: 18,
    grapple: 33,
    attacks: ["Claw +29 melee (2d8+10)"],
    fullAttack: ["2 claws +29 melee (2d8+10); 2 wings +27 melee (2d6+5); bite +27 melee (4d6+5 and poison plus disease); and tail slap +27 melee (2d8+5 and constrict)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Constrict", type: "Ex", description: "On a successful grapple with tail, deals 2d8+15 damage." },
        { name: "Disease", type: "Su", description: "Devil chills, bite, Fort DC 27, incubation 1d4 days, 1d4 Str damage." },
        { name: "Poison", type: "Ex", description: "Injury, bite, Fort DC 27, initial damage 1d6 Con, secondary damage death." },
        { name: "Spell-Like Abilities", type: "Sp", description: "At will—blasphemy (DC 23), create undead, greater dispel magic, greater teleport, invisibility, unholy aura (DC 24). 1/day—meteor swarm (DC 25), symbol of pain (DC 21)." },
        { name: "Fear Aura", type: "Su", description: "20-ft. radius, creatures must make a DC 26 Will save or be affected by fear." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "15/good and silver" },
        { name: "Spell Resistance", type: "Ex", description: "32" },
        { name: "Regeneration", type: "Ex", description: "5 (bypassed by good-aligned, silver weapons)." },
    ],
    saves: { fort: 19, ref: 15, will: 17 },
    abilities: { str: 31, dex: 19, con: 27, int: 24, wis: 22, cha: 24 },
    skills: [{ name: "Bluff", bonus: 28 }, { name: "Diplomacy", bonus: 30 }, { name: "Intimidate", bonus: 28 }, { name: "Knowledge (the planes)", bonus: 28 }],
    feats: ["Cleave", "Great Cleave", "Improved Initiative", "Multiattack", "Power Attack", "Weapon Focus (Claw)"],
    environment: "The Nine Hells",
    challengeRating: 20,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "Lawful Evil",
  };