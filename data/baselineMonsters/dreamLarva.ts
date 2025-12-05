// data/baselineMonsters/dreamLarva.ts
import { BaselineMonster } from '../../types';

export const dreamLarva: BaselineMonster = {
    name: "Dream Larva, The Orphan God",
    description: "A creature from the Dimension of Dreams, a dream larva is a nascent god, a being of immense psionic potential that has not yet coalesced into its final form.",
    racialHitDice: "20d8+160 (320 hp)",
    sizeAndType: "Huge Aberration",
    sizeModifier: -2,
    naturalArmor: 15,
    speed: "20 ft., fly 40 ft. (clumsy)",
    armorClass: { base: 24, breakdown: "(-2 size, +1 Dex, +15 natural)", touch: 9, flatFooted: 23 },
    baseAttack: 15,
    grapple: 29,
    attacks: ["Bite +19 melee (2d8+9)"],
    fullAttack: ["Bite +19 melee (2d8+9)"],
    spaceReach: "15 ft./15 ft.",
    specialAttacks: [
        { name: "Psionics", type: "Psi", description: "Manifester Level 20th. Can manifest powers as a 20th-level Psion (Telepath)." },
        { name: "Dreamscape", type: "Su", description: "The area in a 1-mile radius around the larva slowly takes on the traits of the Dimension of Dreams." },
        { name: "Oneiric Phantoms", type: "Su", description: "3/day, the larva can pull a nightmare from a creature's mind and give it terrifying form, as the 'Weird' spell (Will DC 29)." },
    ],
    specialQualities: [
        { name: "Damage Reduction", type: "Su", description: "10/epic and cold iron" },
        { name: "Spell Resistance", type: "Ex", description: "29" },
        { name: "Amorphous", type: "Ex", description: "Immune to critical hits." },
        { name: "Lullaby", type: "Su", description: "The larva hums a soothing, psychic lullaby. All creatures within 60 feet must make a DC 29 Will save or fall asleep for 1 minute." },
    ],
    saves: { fort: 18, ref: 11, will: 17 },
    abilities: { str: 32, dex: 13, con: 27, int: 28, wis: 26, cha: 34 },
    skills: [{ name: "Concentration", bonus: 31 }, { name: "Knowledge (psionics)", bonus: 30 }, { name: "Psicraft", bonus: 30 }, { name: "Sense Motive", bonus: 30 }],
    feats: ["Psionic Body", "Greater Psionic Endowment", "Power Penetration", "Psionic Meditation", "Boost Construct", "Widen Power"],
    environment: "Any",
    challengeRating: 18,
    levelAdjustment: "-",
    advancement: "By character class",
    alignment: "Chaotic Neutral",
};