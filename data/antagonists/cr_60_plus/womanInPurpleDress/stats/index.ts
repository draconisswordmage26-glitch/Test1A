
// data/antagonists/cr_60_plus/womanInPurpleDress/stats/index.ts
import { Monster } from '../../../../types';

export const womanInPurpleDressStats: Monster = {
    name: "The Woman in the Purple Dress",
    description: "A being who exists as a fundamental concept: the Boundary. The Woman in the Purple Dress, known in forgotten histories as Yukariko, is a youkai sage from a reality that brushes against this one. She is not a creature of good or evil, but of profound, whimsical curiosity and terrifying, lazy power. She perceives reality as a tapestry of concepts, and she can casually pull at the threads that separate them: the boundary between dream and reality, life and death, existence and nothingness. She is a guardian of the Great Barrier that protects her hidden world, and she sometimes steps into other realities for amusement, to observe, or to correct a story that has gone terribly wrong.",
    roleplayGuide: [],
    builds: [
        {
            level: 200, // ECL
            title: "The Youkai Sage of Boundaries",
            class: "Tristalt: (Path 1: Outsider 200) // (Path 2: Martial Adept 200) // (Path 3: Arch-Spellcaster 200)",
            hitDice: "200d12+4000 (Max HD) + 600 (Epic Toughness) = 7000 hp",
            challengeRating: 100,
            armorClass: {
                total: 155,
                breakdown: "(+8 Dex, +30 natural, +30 deflection (Cha), +30 insight (Wis), +25 armor (profane), +22 armor)",
            },
            initiative: {
                bonus: 22,
                breakdown: "(+8 Dex, +14 feat)",
            },
            buildNotes: [
                "Yukariko is a being of immense, near-deific power, intended to be used as a plot device rather than a conventional antagonist.",
                "Her CR is an approximation of her ability to rewrite reality itself. She does not 'fight' in a traditional sense; she ends conflicts by redefining the terms of existence.",
                "Her Tristalt nature grants her the full abilities of a 200-level martial character, a 200-level spellcaster, and a 200-HD outsider simultaneously.",
                "She is accompanied by her two powerful shikigami, Ran Yakumo and Chen, who often act as her agents."
            ],
            sheet: {
                baseAtk: 140,
                grapple: 150,
                fullAttack: [
                    { name: "Parasol of Boundaries", bonus: "+160", damage: "Varies", crit: "N/A", type: "Varies" },
                ],
                attackRoutine: [
                    "<b>She does not engage in physical combat.</b> Her attacks are conceptual and reality-bending.",
                    "<b>Gap Attack:</b> As a standard action, she opens a 'Gap' filled with a bizarre assortment of objects (a speeding train, a storm of masterwork spears, a laser barrage) to attack a target. Ranged Touch Attack +148, deals 50d100 untyped damage and bypasses all defenses.",
                    "<b>Boundary Manipulation:</b> Her primary 'attack' is to simply declare a change in reality. For example: 'The boundary between you and the floor is now gone.' (Target falls through the world), or 'The boundary between living and dead for you is now paper-thin.' (Target must make a DC 100 Fortitude save or die).",
                    "<b>Plot Device:</b> If the campaign is derailed, she might declare 'The boundary between this timeline and the one where the hero succeeded is now open,' effectively resetting a catastrophic event.",
                ],
                spaceReach: "5 ft.",
                specialAttacks: [
                    { name: "Onmyodo Mastery", type: "Sp", description: "Casts spells as a 200th-level Wizard and Cleric. Knows all spells. Can apply any metamagic feat she knows to her spells at will with no increase in casting time or spell level. Her spell save DC is 80 + spell level." },
                    { name: "Martial Prowess", type: "Ex", description: "Possesses the full maneuver progression of a 200th-level Warblade. Knows all maneuvers from all disciplines. Can use epic maneuvers like 'Strike of Timeless Mind' at will." },
                    { name: "Manipulation of Boundaries", type: "Su", description: "As a standard action, Yukariko can declare her intent to manipulate the boundary between any two concepts. The effect is nearly limitless and subject to DM discretion. Examples: Boundary of Illusion/Reality (makes an illusion real or vice-versa), Boundary of Life/Death (functions as a DC 100 save-or-die or a true resurrection), Boundary of Existence/Non-Existence (erases a creature or object from reality, Fortitude DC 100 to resist)." },
                    { name: "Gaps (Sukima)", type: "Su", description: "At will, as a move action, can open a rift in space to any location, plane, or dimension. She can see, hear, and act through these gaps. She can use them for travel, to attack, or to redirect enemy attacks back at them." },
                    { name: "Shikigami Summons", type: "Su", description: "Yukariko can summon her shikigami at will. If slain, they can be resummoned 24 hours later." },
                    { name: "Summon Ran Yakumo", type: "Su", description: "As a standard action, she can summon her primary shikigami, Ran Yakumo. Ran is a CR 50 epic nine-tailed fox who is a master of mathematics and formulas. (Stats: Outsider 40 / Wizard 40 Gestalt, INT 70, Caster Level 40, can summon Chen)." },
                    { name: "Summon Chen", type: "Su", description: "Ran can summon her own shikigami, Chen. Chen is a CR 25 bakeneko (magical cat) of incredible speed and ferocity. (Stats: Magical Beast 20 / Rogue 20 Gestalt, DEX 60, +15d6 Sneak Attack)." },
                ],
                specialQualities: [
                    { name: "Divine Rank 60 (High Lord)", type: "Ex", description: "Yukariko is a High Lord, a being just one step below the Supernal. She is effectively omniscient and omnipresent within her portfolio of Boundaries, Space, and Stories. She can take 60 free actions per round. She has a portfolio of Boundaries, Space, and Stories." },
                ],
                saves: {
                    fort: { bonus: 80, breakdown: "+66 base, +12 Con, +2 item" },
                    ref: { bonus: 76, breakdown: "+66 base, +8 Dex, +2 item" },
                    will: { bonus: 98, breakdown: "+66 base, +30 Wis, +2 item" },
                },
                abilities: { str: 30, dex: 26, con: 34, int: 70, wis: 70, cha: 70 },
                skills: [
                    { name: "Spellcraft", bonus: 233, breakdown: "203 ranks + 30 Int" },
                    { name: "Knowledge (arcana)", bonus: 233, breakdown: "203 ranks + 30 Int" },
                    { name: "Knowledge (the planes)", bonus: 233, breakdown: "203 ranks + 30 Int" },
                    { name: "Bluff", bonus: 233, breakdown: "203 ranks + 30 Cha" },
                    { name: "Diplomacy", bonus: 233, breakdown: "203 ranks + 30 Cha" },
                ],
                feats: [
                    { name: "Epic Spellcasting", description: "" },
                    { name: "Automatic Quicken Spell", description: "(x4)" },
                    { name: "Improved Metamagic", description: "(x5)" },
                    { name: "Great Charisma", description: "(x10)" },
                    { name: "Great Wisdom", description: "(x10)" },
                    { name: "Great Intelligence", description: "(x10)" },
                    { name: "Epic Reputation", description: "" },
                    { name: "Epic Skill Focus (Spellcraft)", description: "" },
                    { name: "Improved Initiative", description: "" },
                ],
                flaws: [],
                environment: "The Boundary of Reality",
                organization: "Unique (with shikigami)",
                alignment: "True Neutral",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "Artifacts",
                    items: [
                        { name: "The Parasol of Boundaries", cost: "Artifact", description: "A simple-looking purple parasol that is the focal point of her power. It allows her to define the 'inside' and 'outside' of a concept, such as the inside of a dream or the outside of reality. It can function as an unbreakable shield or a weapon that ignores all defenses." },
                        { name: "The Prime Clay", cost: "Artifact", description: "A shapeless, silvery mass that is the primordial, unformed substance of creation. It is life's ultimate potential, and in the hands of a master shapeshifter, it can become anything. She can use it to create perfect copies of any creature or object, indistinguishable from the original." },
                        { name: "The Mask of a Thousand Faces", cost: "Artifact", description: "A simple, porcelain mask that is blank until worn. It then becomes the face of whoever the wearer wishes to be, a perfect, undetectable disguise. It allows her to not only change her appearance but her entire conceptual identity, making her undetectable even to other gods." },
                    ]
                }
            }
        },
    ]
};
