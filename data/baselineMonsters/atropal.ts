// data/baselineMonsters/atropal.ts
import { BaselineMonster } from '../../types';

export const atropal: BaselineMonster = {
    name: "Atropal, The Stillborn God",
    description: "An atropal is the horrifying, unfinished, and undead fetus of a god. Its very presence sucks the life and warmth from the world.",
    racialHitDice: "17d12 (110 hp)",
    sizeAndType: "Large Undead",
    sizeModifier: -1,
    naturalArmor: 16,
    speed: "Fly 40 ft. (perfect)",
    armorClass: { base: 26, breakdown: "(-1 size, +1 Dex, +16 natural)", touch: 10, flatFooted: 25 },
    baseAttack: 8,
    grapple: 21,
    attacks: ["Touch +16 melee (1d8+8 plus 2d6 Con drain)"],
    fullAttack: ["2 Touches +16 melee (1d8+8 plus 2d6 Con drain)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Aura of Death", type: "Su", description: "30-ft. radius, living creatures gain one negative level (Fort DC 24 negates)." },
        { name: "Spell-Like Abilities", type: "Sp", description: "At will—animate dead, blasphemy, cone of cold, contagion, desecrate, greater dispel magic, horrid wilting, greater teleport, unholy aura." },
        { name: "Summon Undead", type: "Sp", description: "1/day, can attempt to summon 1d3 Spectres or 1 Nightwalker with a 40% chance of success." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/epic and silver" },
        { name: "Spell Resistance", type: "Ex", description: "29" },
        { name: "Undead Traits", type: "Ex", description: "" },
    ],
    saves: { fort: 12, ref: 11, will: 15 },
    abilities: { str: 27, dex: 13, con: 0, int: 13, wis: 20, cha: 24 },
    skills: [{ name: "Concentration", bonus: 28 }, { name: "Knowledge (religion)", bonus: 21 }, { name: "Spellcraft", bonus: 21 }],
    feats: ["Ability Focus (Aura of Death)", "Combat Casting", "Dodge", "Great Fortitude", "Improved Toughness"],
    environment: "Any",
    challengeRating: 17,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "Neutral Evil",
  };