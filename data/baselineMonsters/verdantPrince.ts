// data/baselineMonsters/verdantPrince.ts
import { BaselineMonster } from '../../types';

export const verdantPrince: BaselineMonster = {
    name: "The Verdant Prince",
    description: "A being that was once a mortal druid who merged with a primordial force of nature to halt a world-ending cataclysm.",
    racialHitDice: "20d8+140 (230 hp)",
    sizeAndType: "Large Outsider (Native, Plant)",
    sizeModifier: -1,
    naturalArmor: 16,
    speed: "40 ft.",
    armorClass: { base: 28, breakdown: "(-1 size, +3 Dex, +16 natural)", touch: 12, flatFooted: 25 },
    baseAttack: 20,
    grapple: 27,
    attacks: ["Slam +22 melee (2d6+10)"],
    fullAttack: ["2 Slams +22 melee (2d6+10)"],
    spaceReach: "10 ft./10 ft.",
    specialAttacks: [
        { name: "Entangling Aura", type: "Su", description: "The ground in a 30-ft. radius around him is constantly affected by an 'Entangle' spell (DC 25)." },
        { name: "Spell-Like Abilities", type: "Sp", description: "Caster Level 20th. At will—entangle, transport via plants, wall of thorns. 3/day—command plants, summon nature's ally VIII (as 'shambler')." },
        { name: "Grasping Forest", type: "Su", description: "The ground in a 60-foot radius is treated as if under a constant 'grasping hand' effect made of vines, which attempts to grapple any enemy who enters the area." },
        { name: "Thorn Volley", type: "Ex", description: "As a standard action, can fire a volley of thorns in a 30-foot cone, dealing 8d6 piercing damage (Reflex DC 25 half)." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/slashing and epic" },
        { name: "Plant Traits", type: "Ex", description: "Immunity to poison, sleep, paralysis, stunning, polymorphing, and mind-affecting effects." },
        { name: "Regeneration", type: "Ex", description: "10 (bypassed by fire and cold)." },
    ],
    saves: { fort: 17, ref: 14, will: 15 },
    abilities: { str: 31, dex: 17, con: 23, int: 18, wis: 19, cha: 24 },
    skills: [{ name: "Concentration", bonus: 29 }, { name: "Knowledge (nature)", bonus: 27 }, { name: "Listen", bonus: 27 }, { name: "Spot", bonus: 27 }, { name: "Survival", bonus: 27 }],
    feats: ["Power Attack", "Cleave", "Improved Initiative", "Great Fortitude", "Awesome Blow", "Improved Bull Rush"],
    environment: "Any forest",
    challengeRating: 18,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "Chaotic Neutral",
};