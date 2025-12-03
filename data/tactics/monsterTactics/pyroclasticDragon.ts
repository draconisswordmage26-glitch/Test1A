import { Tactics } from '../../../types';

export const pyroclasticDragonTactics: Tactics = {
    name: "Pyroclastic Dragon, The Calamity's Charge",
    title: "Tactics: Pyroclastic Dragon",
    description: "The Pyroclastic Dragon is a tragic and terrifying creature, a being whose desperate search for a new home leaves a trail of destruction. Its primary tactic is the 'ubercharge', a build that focuses every feat and ability into dealing the maximum possible damage on a charge attack. It is a one-trick pony, but that trick is hitting with the force of a meteor. It doesn't fight with malice, but with the desperate, unstoppable force of a natural disaster.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The core of this build is the combination of Power Attack, Leap Attack, and Shock Trooper. This allows the dragon to take a massive penalty to its AC instead of its attack roll, and gain two or three times that penalty as bonus damage.",
                "Its first action in any combat should be to identify the most dangerous enemy and charge it. With its high speed and likely flight, it should almost always be able to line one up.",
                "The breath weapon is a secondary tool, useful for softening up a group of enemies or dealing with foes it cannot charge (e.g., in a tight corridor).",
                "This build is a glass cannon. By shifting its attack penalty to its AC, it becomes very easy to hit. The strategy is to kill the enemy before they have a chance to retaliate.",
                "Flyby Attack: This feat allows the dragon to use a standard action (like its breath weapon) at any point during its flight without provoking an attack of opportunity from the target. This is ideal for strafing groups of enemies with its cone of fire and rock before flying to a safe distance."
            ]
        },
        {
            title: "Level 1-5 Builds (Rumbling Heart / Molten Fury / The Caldera's Rage)",
            content: [
                "At these early levels, the combo is already online. 'Shock Trooper' is the key feat, allowing it to trade AC for damage.",
                "With 'Leap Attack' (requiring a Jump check), it can double the damage bonus from Power Attack. With its high Strength, it should have no problem making the check.",
                "A charge should look like this: Declare charge. Declare Power Attack for the maximum penalty. Use Shock Trooper to apply the penalty to AC. Make a Jump check to activate Leap Attack. Hit the target for massive damage."
            ]
        },
        {
            title: "Level 10-20 Builds (Living Eruption / Comet of Fury)",
            content: [
                "With more feats, the damage continues to stack. 'Headlong Rush' adds more bonus damage, and 'Improved Critical' increases the chance of a truly spectacular hit.",
                "Its Base Attack Bonus is now high enough that it can take the maximum penalty from Power Attack and still be very likely to hit its target.",
                "The damage output at this stage is enough to one-shot most creatures of a similar CR. It is a dedicated assassin, a guided missile of tooth and claw."
            ]
        },
        {
            title: "Level 30-40 Builds (World-Smasher / The Unstoppable Force)",
            content: [
                "As a World-Smasher, its charge literally shakes the earth. It is no longer just a single-target threat; it is an area-of-effect disaster.",
                "Its physical stats are now so high that its damage bonus from Power Attack is astronomical. A successful charge is an extinction-level event.",
                "The Unstoppable Force is the logical conclusion of this build. Its 'Inevitable Charge' cannot be stopped by any means. It should be played as a fundamental law of physics: if it charges, something is going to be obliterated. Its tragic search for a home has turned it into a being that can shatter worlds just by trying to land."
            ]
        },
        {
            title: "Signature Moves & Combos",
            content: [
                "The Extinction Charge (Single Target Annihilation): This is the one and only move the Pyroclastic Dragon needs for single targets. It is the culmination of every feat and ability choice. The dragon identifies its target, charges, and makes a Jump check for Leap Attack. It declares a Power Attack for its full Base Attack Bonus and uses Shock Trooper to apply this penalty to its AC. The result is a single, incredibly high-damage bite attack designed to end a fight in one hit. Example (Level 20 Comet of Fury): Power Attacking for -36 to get +72 damage on its bite from Leap Attack, resulting in a single blow dealing 2d6+89 damage.",
                "The Eruptive Barrage (Full Attack): While the charge is its signature, a stationary dragon is also a massive threat. If unable to charge, it can unleash a volley of six natural attacks: a bite, two claws, two wing buffets, and a tail slap. It can still use Power Attack to add significant damage to each of these six attacks, making it deadly to anyone who survives the initial charge and dares to remain in melee.",
                "Flyby Breath Weapon: Against groups, the optimal tactic is to use Flyby Attack. The dragon flies 150 feet, unleashes its 60-ft. cone of fire and rock (12d6 fire, 6d6 bludgeoning at level 17) over the enemy formation, and then continues its movement to safety, setting up a charge against a priority survivor on its next turn."
            ]
        }
    ]
};