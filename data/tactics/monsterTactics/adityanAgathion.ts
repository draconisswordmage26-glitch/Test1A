import { Tactics } from '../../../types';

export const adityanAgathionTactics: Tactics = {
    name: "Adityan Agathion, Warblade Scourge",
    title: "Tactics: Adityan Agathion",
    description: "The Adityan is a holy warrior, a perfect fusion of celestial power and martial discipline. Its tactics revolve around mobility, righteous fury, and the precise application of its martial maneuvers to dismantle evil.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Adityan is a shock trooper. It excels at charging into the fray, using Pounce to deliver a full attack against a high-value target.",
                "Its maneuvers from Diamond Mind, Iron Heart, and Tiger Claw provide a versatile toolkit. Diamond Mind offers counters and saves, Iron Heart provides resilience (Iron Heart Surge is key), and Tiger Claw offers devastating offensive strikes.",
                "Use its spell-like abilities for support and control. Lay on Hands is a powerful healing tool, and its Protective Aura makes it an excellent anchor for allied lines.",
                "Its high Tumble and Balance scores allow it to navigate the battlefield with ease, avoiding attacks of opportunity and setting up perfect charges."
            ]
        },
        {
            title: "Level 1-5 Builds (Fist of Nirvana / The Sun-Render)",
            content: [
                "At this level, the Adityan is a whirlwind of steel. Its primary tactic should be to charge and pounce on isolated or high-priority targets like enemy casters or leaders.",
                "Use maneuvers like 'Steel Wind' to strike multiple foes or 'Moment of Perfect Mind' to substitute a Concentration check for a Will save against a dangerous spell.",
                "With Battle Clarity (Int to Reflex saves), its weakest save becomes one of its strongest, making it very resilient to area-of-effect spells."
            ]
        },
        {
            title: "Level 10 Build (Scourge of the Unrighteous)",
            content: [
                "Access to 5th-level maneuvers is a game-changer. 'Iron Heart Surge' allows it to shrug off almost any debilitating condition, making it incredibly hard to shut down.",
                "The Stormguard Warrior feat is complex but powerful. The Adityan can give up attacks to gain AC (Combat Rhythm) or to add the damage to its next attack (Channel the Storm). This is great for weathering a full attack from a powerful foe and then retaliating with a massive hit.",
                "Its damage output is now high enough to threaten most creatures. Focus on eliminating threats quickly and decisively."
            ]
        },
        {
            title: "Level 20-40 Builds (Lion of the Heavens / Celestial Paragon / God-King of Nirvana)",
            content: [
                "At epic levels, the Adityan is a true demigod of battle. With 9th-level maneuvers like 'Strike of Perfect Clarity', it can bypass any DR.",
                "As a Celestial Paragon, its Smite Evil becomes a primary weapon, capable of one-shotting powerful fiends. The Aura of Sanctity makes it a beacon for any allied force.",
                "The God-King of Nirvana is a strategic leader and an unstoppable combatant. 'Perfect Strike' ensures a hit when it absolutely needs one. Its final ability, 'The Final Charge', is a campaign-ending power that should be used to shatter the armies of Hell or the Abyss in a climactic encounter."
            ]
        },
        {
            title: "Signature Move: The Sun-Shattering Pounce",
            content: [
                "This combo combines the Adityan's mobility, multi-attack prowess, and martial maneuvers into a single, devastating alpha strike. The ideal target is a powerful evil spellcaster or monster.",
                "The Adityan uses a charge action. Thanks to the Pounce ability, this allows it to make a full attack at the end of the charge. Before the attack, it initiates the 'Pouncing Charge' maneuver (from Tiger Claw), which grants an additional 5d6 damage on the charge.",
                "Example (Level 20 Lion of the Heavens): It charges an evil wizard. It makes a full attack: a greatsword swing at +45, then +40, +35, +30. Each hit deals 3d6+18 + 2d6 holy damage. The first hit also deals an extra 5d6 from the maneuver. Using Power Attack for -10, the first hit alone would deal 3d6+28 + 2d6 holy + 5d6 maneuver damage. A single round could easily deal over 150 damage, likely killing the wizard before they can react."
            ]
        }
    ]
};