import { Tactics } from '../../../types';

export const behemothTactics: Tactics = {
    name: "Lonesome Behemoth",
    title: "Tactics: Lonesome Behemoth",
    description: "The Behemoth is a creature of pure, primal power, a guardian of the wild places. Its tactics are straightforward but brutally effective: charge, smash, and destroy any who would defile its domain. Its immense physical stats and rage abilities make it one of an unstoppable force in melee combat, a living mountain fighting to protect the natural world.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Behemoth is all about the alpha strike. Its first action in combat should almost always be a charge against the most significant threat.",
                "Power Attack is its best friend. With its incredibly high attack bonus, it can take a huge penalty for a massive increase in damage.",
                "Its 'Meteor' spell-like ability is a potent tool for dealing with flying enemies or softening up a group of foes before it charges in.",
                "Use feats like 'Awesome Blow' and 'Improved Sunder' to control the battlefield by knocking enemies away and destroying their equipment."
            ]
        },
        {
            title: "Level 1-5 Builds (The Grieving Giant / The Raging Scar / Mountain-Breaker)",
            content: [
                "At these levels, the Behemoth is a straightforward brawler. Its rage, combined with Power Attack and Cleave, allows it to carve through enemy front lines.",
                "Use 'Intimidating Rage' to demoralize enemies, making them easier to hit and more susceptible to its spell-like abilities.",
                "Its high Strength means its Jump and Climb checks are massive. Use the terrain to its advantage, scaling cliffs or leaping over obstacles to get to the back line."
            ]
        },
        {
            title: "Level 10 Build (King of the Forgotten Wilds)",
            content: [
                "With 'Greater Rage', its Strength score becomes truly epic. A full Power Attack can deal enough damage to one-shot many powerful creatures.",
                "'Destructive Rage' makes it a master of sundering. It should target the weapons of powerful martial characters or the holy symbols of clerics to disarm them.",
                "Its bite is its primary weapon, with an improved critical threat range. Focus on landing that critical for massive damage."
            ]
        },
        {
            title: "Level 20-40 Builds (The World's Grief / The World-Smasher / King of the Forgotten Wilds)",
            content: [
                "At epic levels, the Behemoth is a world-level threat. 'Mighty Rage' and epic feats push its physical stats to godlike levels.",
                "As a World-Smasher, its 'Earthshaker Strike' turns the battlefield into a deathtrap for its enemies. Its charge can shatter fortifications. The `Dire Charge` epic feat transforms its combat style, allowing it to make a full attack at the end of a charge, turning it from a single-target annihilator into an army-breaking juggernaut.",
                "The King of the Forgotten Wilds (Level 40) is a primal god of nature. Its 'World-Ending Roar' is an encounter-ending ability that can neutralize an entire party of spellcasters. It should be played as a force of nature whose every step shakes the world, a protector whose wrath is as devastating as any cataclysm."
            ]
        },
        {
            title: "Signature Moves & Combos",
            content: [
                "The Mountain-Shattering Charge (Pre-Epic): This is the Behemoth's ultimate expression of single-target physical power. It combines its Rage, Power Attack, and Awesome Blow into a single, devastating charge. Example (Level 20 The World's Grief): It enters a Mighty Rage (Strength 55), charges, and uses Power Attack for -38 to get +38 damage. The resulting bite deals 2d8+60 damage and forces a Reflex save (DC ~70) to avoid being knocked 10 feet and falling prone.",
                "World-Breaker's Onslaught (Epic Levels): Upon gaining the `Dire Charge` feat, the Behemoth's tactical options expand. It can now move its full speed and deliver a full attack (bite and two claws) at the end of the charge. While this means it cannot use Awesome Blow on the same turn, the sheer damage output from three powerful natural attacks, each enhanced by Power Attack and its immense Strength, is often superior, especially against high-HP targets that can't be one-shot. This turns the Behemoth into a mobile engine of destruction, capable of charging into a group and delivering multiple devastating attacks in a single turn."
            ]
        }
    ]
};