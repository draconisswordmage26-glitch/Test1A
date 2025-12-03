import { Tactics } from '../../../types';

export const nornTactics: Tactics = {
    name: "Norn, Weaver of Fate",
    title: "Tactics: Norn",
    description: "The Norn does not fight; she architects victory. Her tactics are subtle and indirect, focusing on manipulating probability and knowledge to ensure her enemies fail at crucial moments while her allies succeed. She is the ultimate support character and a terrifyingly potent controller, for whom the battlefield is a tapestry she can re-weave at will.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Norn's greatest defense is her 'See Fate' ability, adding her massive Wisdom bonus as an insight bonus to AC and saves. This makes her incredibly difficult to harm.",
                "Her spell-like abilities are all divinations, providing perfect information. She should use 'Foresight' and 'Moment of Prescience' on herself or her most important ally before a battle begins.",
                "As a Fatespinner, she can directly alter d20 rolls. This is her primary mechanic. She should hoard her fate points for the most critical moments: forcing an enemy to fail a save against a 'save-or-die' spell, or ensuring an ally's attack is a critical hit.",
                "She should never engage in melee. Her role is to stay in the back, protected by her defenses and allies, and control the flow of the battle from afar."
            ]
        },
        {
            title: "Level 1-5 Builds (Fate's Handmaiden / Fate's Weaver / Spinner of Destiny)",
            content: [
                "At this stage, her power is growing. She should use her 'Spin Fate' ability to add small bonuses to her allies' rolls or force rerolls on enemy attacks.",
                "'Seal Fate' is her first truly game-changing ability. Forcing a natural 20 on an ally's attack or a natural 1 on an enemy's saving throw can end an encounter. This should be used to eliminate the biggest threat on the board immediately."
            ]
        },
        {
            title: "Level 10-20 Builds (Tapestry Tender / Architect of Destiny)",
            content: [
                "With more fate points and Loremaster secrets, her versatility increases. She can grant bonus feats or spells to her allies, or use her knowledge to identify any enemy's weakness.",
                "Her 'Greater Lore' means she can never be surprised by an enemy's abilities. She should act as the party's strategist, using her perfect knowledge to direct the fight.",
                "With Epic Spellcasting, she can develop custom divination spells to gain even more information, or epic abjurations to protect her allies."
            ]
        },
        {
            title: "Level 30-40 Builds (Fate-Ender / The Final Moment)",
            content: [
                "As a Fate-Ender, the Norn gains the ultimate power: 'Cut the Thread'. This is a save-or-be-erased-from-history ability. This should be her final solution for beings that threaten causality itself, like powerful demons or aberrations.",
                "Her Fated Moment ability becomes more frequent, allowing her to dictate the outcome of multiple rolls per encounter.",
                "The Final Moment is a god of causality. Her 'Unravel Reality' is a world-altering power. She should be played as a detached, melancholy guardian of the timeline, whose interventions are rare but absolute. She doesn't fight battles; she determines their outcomes before they even begin."
            ]
        },
        {
            title: "Signature Move: The Inevitable Checkmate",
            content: [
                "This combo demonstrates the Norn's absolute control over probability. It's designed to neutralize the most powerful enemy leader or spellcaster with near-certainty.",
                "The Norn identifies the target. She uses her 'Foretell' ability to grant herself or an ally the effect of a 'Foresight' spell, making them aware of the target's actions.",
                "An allied spellcaster casts a potent 'save-or-lose' spell (e.g., 'Finger of Death', 'Flesh to Stone'). As the target is about to roll their saving throw, the Norn uses her 'Seal Fate' ability, spending 3 fate points to declare that the result of the roll is a natural 1.",
                "The target automatically fails their save and is removed from the fight. This bypasses high saving throw bonuses, spell resistance, and any other defense. It is a simple, elegant, and almost unstoppable way to eliminate a single key threat.",
                "Example (Level 10 Tapestry Tender): The party is facing a powerful dragon with a massive Fortitude save. The party wizard casts 'Flesh to Stone'. The dragon would normally have a very high chance of saving. The Norn uses 'Seal Fate'. The dragon's d20 roll is treated as a 1, causing it to fail its save and become a statue. The fight is effectively over."
            ]
        }
    ]
};