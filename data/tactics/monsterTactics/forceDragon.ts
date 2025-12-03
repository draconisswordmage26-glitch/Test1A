import { Tactics } from '../../../types';

export const forceDragonTactics: Tactics = {
    name: "Force Dragon, Guardian of Reality",
    title: "Tactics: Force Dragon",
    description: "The Force Dragon is a thinking creature's dragon. It combines the raw power of a dragon, the intellectual might of a psion, and the tactical flexibility of a warblade. Its strategy should be precise, logical, and controlling, using its array of abilities to dismantle its opponents' plans before crushing them.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Force Dragon fights with a combination of psionics, maneuvers, and its natural draconic abilities. It should weave all three together for maximum effect.",
                "Its breath weapon is a cone of pure force, which is very difficult to resist. This is its primary area-of-effect weapon.",
                "Its psi-like abilities ('force screen', 'telekinetic thrust') are excellent for battlefield control and defense. It should use these to protect itself and manipulate the position of its enemies.",
                "As a Warblade, it has access to maneuvers that can supplement its attacks, provide defensive boosts ('Wall of Blades'), or negate enemy abilities ('Iron Heart Surge')."
            ]
        },
        {
            title: "Level 1-5 Builds (Psionic Wyrmling / Kinetic Adept / Warden of Law)",
            content: [
                "At this stage, the dragon is a versatile combatant. It should use its breath weapon to open a fight, then charge into melee.",
                "Battle Clarity is a key ability, adding its high Intelligence to its weak Reflex save. This makes it much more resilient against spells like Fireball.",
                "It should use its maneuvers to enhance its natural attacks. A 'Charging Minotaur' strike combined with a charge and pounce (if it takes the feat) can be devastating."
            ]
        },
        {
            title: "Level 10-20 Builds (Kinetic Master / Architect of Force)",
            content: [
                "With access to higher-level maneuvers and more power points (implicitly), its tactical options expand significantly.",
                "It can use 'Iron Heart Surge' to shrug off nearly any debuff. It should use its psionics to create walls of force to divide the enemy party, then use its flight and maneuvers to eliminate them one by one.",
                "Its physical attacks are now epic, and its breath weapon is a serious threat to entire groups. It should be played as a highly intelligent and strategic commander, always thinking several steps ahead of its opponents."
            ]
        },
        {
            title: "Level 30-40 Builds (Genesis Avatar / The Constant)",
            content: [
                "As a Genesis Avatar, the dragon becomes a creator god. Its personal demiplane of pure force should be its ultimate fortress, a place where it controls the very laws of physics.",
                "'Impose Planar Trait' is a powerful ability, allowing it to create areas where magic doesn't function or gravity is reversed, completely disrupting enemy spellcasters.",
                "The Constant is a fundamental law of the universe. Its 'Breath of Entropy' doesn't just damage; it unmakes reality. It should be played as a cosmic warden, a being of immense, dispassionate power whose goal is to preserve the structural integrity of the multiverse against the forces of chaos."
            ]
        },
        {
            title: "Signature Move: The Checkmate in Three Moves",
            content: [
                "This combo showcases the dragon's tactical genius. It's a three-round plan to dismantle a party.",
                "Round 1: The dragon, flying high above, unleashes its breath weapon: a 60-ft. cone of force dealing 12d10 damage (Reflex DC 29 at level 10). It then uses its 'Psionic Teleport' to move to a new, safe position.",
                "Round 2: The dragon uses its psionics to control the battlefield. It manifests 'Wall of Ectoplasm' to divide the party, isolating the toughest fighter from the healers. It then uses its martial maneuvers, perhaps a White Raven boost to grant an ally another move action to get into position.",
                "Round 3: With the party divided and weakened, the dragon uses its Eternal Blade 'Island in Time' ability to gain an extra action. It teleports next to the isolated cleric, uses its extra action to unleash a full attack, and then uses its normal action to unleash another full attack, very likely killing the cleric before the rest of the party can intervene."
            ]
        }
    ]
};