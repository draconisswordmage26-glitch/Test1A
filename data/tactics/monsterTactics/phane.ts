import { Tactics } from '../../../types';

export const phaneTactics: Tactics = {
    name: "Phane, The Timeless Hunter",
    title: "Tactics: Phane",
    description: "The Phane is a predator that exists outside of time. Its tactics should be confusing, elusive, and utterly alien. It relies on its superior mobility and time-altering abilities to engage enemies on its own terms, striking from unexpected moments and disappearing before they can retaliate. As a confused being trapped in linear time, its 'hunts' are desperate attempts to understand or escape its temporal prison.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Phane is a Scout, and its primary source of damage is Skirmish. It must move at least 10 feet each round to deal this bonus damage and gain an AC bonus. Its entire strategy is built around mobility.",
                "Its spell-like abilities are its most powerful tools. 'Time Stop' allows it to set up the battlefield, buff itself, or position itself perfectly for a strike. 'Haste' and 'Slow' are excellent for controlling the action economy.",
                "'Temporal Disruption' is a potent single-target 'save-or-suck' ability. Removing an enemy from the fight for 1d4 rounds can be decisive. This should be used on the most dangerous foe.",
                "Its 'Timeless' quality makes it immune to enemy time-manipulation, a key defense against high-level spellcasters."
            ]
        },
        {
            title: "Level 1-5 Builds (Temporal Anomaly / Echo in Time / Temporal Predator)",
            content: [
                "At this stage, the Phane is a classic hit-and-run skirmisher. It should use Spring Attack and Bounding Assault to move in, attack a single target, and move away to a safe distance.",
                "Its high Hide and Move Silently scores should be used to gain surprise rounds whenever possible.",
                "Weapon Finesse allows it to use its good Dexterity for its claw attacks, making it an accurate combatant."
            ]
        },
        {
            title: "Level 10-20 Builds (Chronal Predator / Hunter of Moments)",
            content: [
                "With more skirmish dice and feats like Rapid Blitz, its damage output during a mobile attack increases significantly.",
                "'Epic Dodge' makes it incredibly hard to hit. Once per round, an attack that would hit simply misses.",
                "'Flee the Scene' (from Scout 20) is a perfect escape tool, allowing it to teleport away after dealing its damage.",
                "Its strategy is one of attrition and frustration. It should never stay in one place, constantly moving and chipping away at its enemies' health while they struggle to land a hit."
            ]
        },
        {
            title: "Level 30-40 Builds (Timeless Hunter / Paradox Incarnate)",
            content: [
                "As a Timeless Hunter, its abilities become truly epic. 'Temporal Flurry' allows it to unleash three full attacks on a target in a single action, a devastating alpha strike.",
                "'Acausal' makes it immune to paradoxes, a key defense if fighting other time-manipulators.",
                "The Paradox Incarnate is a living timeline knot. Its 'Unmake Timeline' ability is one of the most powerful save-or-die effects in the game, erasing a creature from existence entirely. This should be reserved for its ultimate prey. It no longer just hunts creatures; it hunts timelines, pruning away realities that threaten its own fractured existence."
            ]
        },
        {
            title: "Signature Move: The Time-Stop Ambush",
            content: [
                "This is the Phane's ultimate expression of its temporal mastery. It uses 'Time Stop' to set up a guaranteed kill on a high-priority target.",
                "During the 1d4+1 rounds of stopped time, the Phane moves to the target. It can't attack them directly, but it can set up the battlefield. It might use its Scout abilities to create caltrops or other hazards around the other enemies to slow them down when time resumes.",
                "On its last round of stopped time, it positions itself next to the target and readies an action to use its 'Temporal Disruption' touch attack the instant time resumes. As time starts again, the touch goes off. The target must make a high-DC Fortitude save or be shunted into the future, effectively removed from the fight.",
                "Example (Level 20 Hunter of Moments): The Phane casts 'Time Stop'. It ignores the party's fighter and rogue, floating directly to the wizard. It spends the stopped time observing the wizard's gear and preparing. As time is about to resume, it readies its 'Temporal Disruption'. Time starts, the touch attack hits, and the wizard (with their likely low Fortitude save) vanishes for 1d4 rounds. The Phane then uses its incredible speed and Spring Attack to strike at the cleric before retreating to a safe distance, having neutralized the two biggest threats in the opening moments of the fight."
            ]
        }
    ]
};