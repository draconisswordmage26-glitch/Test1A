import { Tactics } from '../../../types';

export const sunGiantTactics: Tactics = {
    name: "Sun Giant, Marshal of the Shining Host",
    title: "Tactics: Sun Giant",
    description: "The Sun Giant is a born leader and a versatile combatant. Its strength lies in its ability to command and enhance its allies with its Marshal auras while providing powerful support with both its greatsword and its mighty composite longbow. Its tactics should be strategic, focusing on force multiplication and controlling the battlefield from a position of strength.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Sun Giant is a Marshal, and its auras are its key feature. It should always have its auras active, choosing the one that best suits the situation ('Motivate Strength' for melee, 'Master of Tactics' for positioning, etc.).",
                "It is equally proficient in melee and ranged combat. It should use its longbow to soften up targets from a distance, then switch to its greatsword when enemies close the gap.",
                "Its high Charisma and Diplomacy skill make it a powerful social character, but in combat, this translates to potent Marshal abilities.",
                "Its Rock Throwing and Rock Catching abilities make it a threat even without its manufactured weapons and provide a solid defense against similar foes."
            ]
        },
        {
            title: "Level 1-5 Builds (Banner-Bearer / Commander of the Peak)",
            content: [
                "At this stage, the Sun Giant is primarily a support character. Its auras provide small but significant bonuses to its allies.",
                "It should stay at range, using its longbow and rock throwing to contribute to the damage while its auras buff the front line.",
                "Its 'Major Aura' at level 5 is a significant boost. 'Resilient Troops' can be a lifesaver against enemy spellcasters."
            ]
        },
        {
            title: "Level 10-20 Builds (General of the Shining Host / King Under the Mountain)",
            content: [
                "With feats like Rapid Shot and Manyshot, its ranged damage output becomes truly impressive. A full attack with its longbow can devastate a single target.",
                "It can now provide two Minor Auras at once, allowing it to buff both offense and defense simultaneously.",
                "As a King, its 'Epic Leadership' feat means it should be leading a small army of followers. Its tactics should shift to commanding its troops, using its auras to make them an unstoppable force."
            ]
        },
        {
            title: "Level 30-40 Builds (Legendary Leader / Emperor of the Sun)",
            content: [
                "As a Legendary Leader, its auras can span for miles, inspiring entire armies. It is no longer a mere combatant; it is a strategic-level asset.",
                "'Coordinate Army' allows it to grant its powerful combat feats to all its followers, turning a peasant levy into a legion of expert warriors for a crucial round.",
                "The Emperor of the Sun is a demigod of command. Its 'Aura of Absolute Command' can end a battle before it begins by turning enemies into allies. It should be played as a brilliant, benevolent, and utterly untouchable commander whose true weapon is his unshakeable authority."
            ]
        },
        {
            title: "Signature Move: The Arrow of Command",
            content: [
                "This combo showcases the Sun Giant's ability to be a devastating damage dealer and a master commander in the same round.",
                "The Sun Giant activates its auras, such as 'Motivate Attack' (+4 to hit) and 'Motivate Care' (+4 to AC). He then uses his 'Grant Move Action' ability on his cohort or an allied rogue, allowing them to get into a flanking position.",
                "He then unleashes a full attack with his longbow, using Rapid Shot and Manyshot. This allows him to fire a volley of arrows at a single target with incredible speed and precision.",
                "Example (Level 20 King Under the Mountain): His auras are active. He grants his cohort a move action. He then targets the enemy dragon. He uses Manyshot to fire two arrows with his first attack, and Rapid Shot to gain an extra attack. His attack sequence is (+33/+33 from Manyshot, then a second +33 from Rapid Shot, then +28, +23, +18). Each arrow deals 2d8+14 damage. A successful volley could deal upwards of 120 damage in a single round from a distance, all while he is safely commanding his forces and buffing them with his auras."
            ]
        }
    ]
};