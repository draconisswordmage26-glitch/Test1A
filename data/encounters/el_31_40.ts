
// data/encounters/el_31_40.ts
import { Encounter } from '../../types';

export const el31_40_encounters: Encounter[] = [
    {
        name: "The Unmasker's Hunt",
        el: 33,
        description: "The party has attracted the personal attention of Inquisitor-Lord Kravchenko. Believing one of the party members to be a powerful shapeshifter or illusionist in disguise, he has begun a relentless hunt. This is not an ambush, but a formal, terrifying duel. He will confront the party openly, declare his target, and proceed to dismantle them with cold, surgical precision.",
        setup: [
            "The encounter can happen anywhere, but Kravchenko will choose a place with clear sight lines and little cover, like an open plain or a grand plaza.",
            "Kravchenko (CR 33) will appear alone, announcing his presence and his purpose: to expose and purge the 'liar' in the party's midst.",
            "He will focus entirely on one character, whichever one he perceives as the most deceptive (this could be a rogue, a bard, a sorcerer, or a wild-shaping druid)."
        ],
        monsters: [
            { name: "Inquisitor-Lord Kravchenko", quantity: 1, notes: "CR 33" },
        ],
        tactics: [
            "Kravchenko's 'Unveiling Aura' immediately negates any illusions or shapechanging in a 120-foot radius.",
            "His first action will be to use 'Sever Connection' on his chosen target. If they fail the DC 48 Will save, their primary abilities are suppressed, and the fight is likely over.",
            "If 'Sever Connection' fails, he will close to melee. His 'Truth-Seeker's Strike' prevents teleportation, trapping his quarry.",
            "He will ignore other party members unless they present an immediate and overwhelming threat, his focus entirely on his hunt. He will use his high AC and saves to weather their attacks while he dispatches his primary target."
        ],
        scaling: {
            increase: "Kravchenko is accompanied by a pair of Truth-Bearer Clerics (CR 15 each), who provide support and counter-magic (EL 34).",
            decrease: "Kravchenko's 'Sever Connection' ability is on cooldown, and he can only use it once after 1d4 rounds of combat (EL 32).",
        },
        treasure: [
            "Kravchenko's powerful magical equipment, including his +8 Truth-Seeker Greatsword.",
            "A writ of execution from the God-Kaiser himself, a valuable piece of intelligence.",
            "The respect and potential aid of a powerful shapeshifting faction that Kravchenko was also hunting."
        ],
    },
    {
        name: "The Bell Tolls",
        el: 33,
        description: "The party has located a secret imperial research bunker where a terrifying new super-weapon, 'Die Glocke', is being activated. They must disable the device before its temporal distortion field expands and rips a hole in the fabric of reality. The bunker is defended by the Empæryen's most elite psionic and anti-psionic troops.",
        setup: [
            "The encounter takes place in a large, circular chamber made of an unknown, black metal. In the center, 'Die Glocke' (CR 32) is humming and slowly spinning.",
            "A Silent Sybil (CR 26) is overseeing the activation from a raised platform.",
            "Four Null-Psion Troopers (CR 14) are positioned around the room, their purpose to protect the Sybil and the device from psionic interference."
        ],
        monsters: [
            { name: "Die Glocke", quantity: 1, notes: "CR 32. The primary objective. It is stationary." },
            { name: "The Silent Sybil", quantity: 1, notes: "CR 26. The commander and main threat." },
            { name: "Null-Psion Trooper", quantity: 4, notes: "CR 14. Positioned to protect the Sybil." },
        ],
        tactics: [
            "Die Glocke's 'Temporal Distortion Field' is active from the start, forcing a Will save (DC 40) each round to avoid being slowed.",
            "The Silent Sybil will use her psychic assassination abilities, targeting the party's primary psion or arcane caster. She will stay near her Null-Psion guards for protection.",
            "The Null-Psion Troopers will form a wall around the Sybil, their auras creating a massive 'no-psionics' zone.",
            "Die Glocke will fire its Chronal Cannon every round, targeting any creature that gets close to it or the Sybil. Its attacks can age a target into dust.",
            "This is a complex fight with multiple, overlapping threats. The party must decide whether to focus on the Sybil, the psion-killers, or the doomsday device itself."
        ],
        scaling: {
            increase: "The Sybil is accompanied by a Thought-Reaver (CR 25), making the psychic assault even more deadly (EL 34).",
            decrease: "There are only two Null-Psion Troopers, creating a smaller safe zone for the Sybil (EL 32).",
        },
        treasure: [
            "The remains of Die Glocke contain unique materials that can be used to craft powerful chronomancy-related items.",
            "The Silent Sybil's potent psionic gear.",
            "Research notes detailing the Empæryen's experiments with temporal mechanics."
        ],
    },
];
