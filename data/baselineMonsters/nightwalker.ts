// data/baselineMonsters/nightwalker.ts
import { BaselineMonster } from '../../types';

export const nightwalker: BaselineMonster = {
    name: "Nightwalker, Soul Drinker",
    description: "A colossal, shadowy undead creature from the Negative Energy Plane. It is a being of pure void and chilling dread, its presence draining the very life from its surroundings.",
    racialHitDice: "20d12+60 (190 hp)",
    sizeAndType: "Huge Undead",
    sizeModifier: -2,
    naturalArmor: 16,
    speed: "40 ft.",
    armorClass: {
      base: 30,
      breakdown: "(-2 size, +6 Dex, +16 natural)",
      touch: 14,
      flatFooted: 24,
    },
    baseAttack: 10,
    grapple: 34,
    attacks: ["Slam +24 melee (4d6+13 plus 1d6 Con drain)"],
    fullAttack: ["2 slams +24 melee (4d6+13 plus 1d6 Con drain)"],
    spaceReach: "15 ft./15 ft.",
    specialAttacks: [
        { name: "Constitution Drain", type: "Su", description: "Any living creature hit by a nightwalker's slam attack takes 1d6 points of Constitution drain." },
        { name: "Desecrating Aura", type: "Su", description: "30-ft aura, undead gain +2 profane bonus on attacks/damage/saves. Good creatures get 2 negative levels (Will DC 25 negates)." },
        { name: "Gaze", type: "Su", description: "30 ft, crushing despair and fear (Will DC 25 negates)." },
        { name: "Spell-Like Abilities", type: "Sp", description: "At will—contagion, deeper darkness, detect magic, haste, see invisibility, unholy blight." },
        { name: "Summon Undead", type: "Sp", description: "1/day, can attempt to summon 1d3 Wraiths or 1 Dread Wraith with a 50% chance of success." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "15/silver and magic" },
        { name: "Spell Resistance", type: "Ex", description: "28" },
        { name: "Undead Traits", type: "Ex", description: "Immunity to mind-affecting, poison, sleep, etc." },
    ],
    saves: { fort: 12, ref: 12, will: 17 },
    abilities: { str: 36, dex: 25, con: 0, int: 14, wis: 20, cha: 22 },
    skills: [{ name: "Hide", bonus: 21 }, { name: "Listen", bonus: 28 }, { name: "Move Silently", bonus: 28 }, { name: "Spot", bonus: 28 }, { name: "Search", bonus: 25 }],
    feats: ["Awesome Blow", "Cleave", "Improved Bull Rush", "Power Attack", "Alertness", "Improved Sunder", "Great Cleave"],
    environment: "Negative Energy Plane",
    challengeRating: 17,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "Chaotic Evil",
  };