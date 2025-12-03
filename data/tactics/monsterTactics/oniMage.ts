import { Tactics } from '../../../types';

export const oniMageTactics: Tactics = {
    name: "Oni Mage (Japanese Ogre Mage)",
    title: "Tactics: Oni Mage",
    description: "The Oni Mage is a cunning and versatile opponent, blending powerful innate spell-like abilities with the adaptable supernatural powers of soulmelds. Its tactics should be deceptive and unpredictable, switching between a powerful melee combatant, a tricky spellcaster, and a bizarre monster wreathed in the spiritual essence of magical beasts.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Oni Mage's spell-like abilities are its core strength. 'Invisibility' and 'Change Shape' should be used to control its engagements, allowing it to strike from surprise or retreat to safety.",
                "'Cone of Cold' is its primary area-of-effect damage, while 'Charm Monster' and 'Deep Slumber' are excellent single-target control options.",
                "As a Totemist, it can shape soulmelds that grant it a wide array of powers. It should choose its soulmelds at the start of the day based on the enemies it expects to face.",
                "Its Regeneration makes it very durable, but it is vulnerable to fire and acid. It should use its flight and teleportation to avoid enemies who wield these damage types."
            ]
        },
        {
            title: "Level 1-5 Builds (Horned Exile / Beast-Souled Trickster)",
            content: [
                "At this stage, the Oni is a mix of spellcaster and melee threat. It can use 'Polymorph' to turn into a more powerful combat form, or shape soulmelds like 'Girallon Arms' to gain extra attacks.",
                "'Pegasus Cloak' provides flight, which is a massive tactical advantage. It should stay airborne, using its spell-like abilities from a safe distance.",
                "Its high Bluff and Disguise skills should be used to deceive and mislead its opponents before combat even begins."
            ]
        },
        {
            title: "Level 10-20 Builds (Lord of the Spirit-Skin / Spirit Shogun)",
            content: [
                "With Totem Bind, its soulmelds become much more powerful. Binding 'Girallon Arms' to its Totem chakra grants it four powerful claw attacks, turning it into a melee monster.",
                "It can shape more soulmelds, allowing for potent combinations. 'Phase Tunic' for defense, 'Beast Tamer's Circlet' to augment summoned creatures, and 'Kraken Mantle' for grappling are all excellent choices.",
                "As a Spirit Shogun, it can bind soulmelds to all its chakras, becoming a true avatar of magical beasts, covered in claws, tentacles, wings, and carapaces."
            ]
        },
        {
            title: "Level 30-40 Builds (Soul Eater / King of a Thousand Souls)",
            content: [
                "As a Soul Eater, the Oni's focus shifts from emulating spirits to consuming them. It should focus on killing enemies to fuel its 'Devour Soul' ability.",
                "The souls it consumes can be used to heal, gain skills, or unleash a devastating 'Soulblast'. It becomes a snowballing threat, growing more powerful as the fight goes on.",
                "The King of a Thousand Souls is a gestalt entity. Its 'Echo of the Slain' ability allows it to use the powers of any creature it has ever consumed. This gives it an unparalleled level of versatility. It should be played as a chorus of voices, its tactics shifting wildly as it channels the abilities of fallen heroes and vanquished monsters."
            ]
        },
        {
            title: "Signature Move: The Spirit Beast Onslaught",
            content: [
                "This combo showcases the Oni's terrifying power as a high-level Totemist. It involves shaping the perfect combination of soulmelds to become a melee nightmare.",
                "At the start of the day, the Oni shapes 'Girallon Arms', 'Kraken Mantle', and 'Phase Tunic'. It binds the 'Girallon Arms' to its Totem chakra.",
                "In combat, it uses its 'Invisibility' spell-like ability to approach the enemy. It then attacks from surprise. The Totem-bound 'Girallon Arms' grant it four claw attacks (2d6+Str) in addition to its normal attacks. The 'Kraken Mantle' grants it two tentacle attacks (1d8+Str) and improved grapple. The 'Phase Tunic' gives it a 20% miss chance.",
                "Example (Level 10 Lord of the Spirit-Skin): The Oni turns invisible and flies up to the party's wizard. It makes a full attack: a greatsword swing at +20, plus four claw attacks at +18, plus two tentacle attacks at +18. That's seven attacks in one round, most likely killing the wizard instantly. If anyone tries to retaliate, they have a 20% chance to miss due to the 'Phase Tunic'."
            ]
        }
    ]
};