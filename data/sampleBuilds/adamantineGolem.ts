// data/sampleBuilds/adamantineGolem.ts
import { MonsterSampleBuilds } from '../../types';

export const adamantineGolemBuilds: MonsterSampleBuilds = {
    monsterName: "Adamantine Golem, Unstoppable Juggernaut",
    builds: [
        {
            category: 'Basic',
            title: 'The Unstoppable Wall',
            progression: 'Warblade 40',
            feats: 'Power Attack, Cleave, Great Cleave, Improved Sunder, Epic Weapon Focus (Slam), Epic Weapon Specialization (Slam), Epic Prowess, Armor Skin, Epic Toughness, Devastating Critical.',
            skills: 'N/A (Construct)',
            lore: 'This build embraces the golem\'s nature as a straightforward, unstoppable engine of destruction. It enhances its natural slam attacks to their absolute limit, becoming a walking battering ram that simply marches forward and smashes whatever is in its path.',
            tactics: 'Advance relentlessly. Use maneuvers like Mountain Hammer to bypass hardness and Iron Heart Surge to shrug off debilitating effects. Full attack every round with Power Attack. Its goal is to crush the most durable target through sheer, overwhelming force.',
        },
        {
            category: 'Beginner',
            title: 'The Juggernaut',
            progression: 'Fighter 10 / Warblade 30',
            feats: 'Builds on the Basic concept with more bonus feats from Fighter to acquire key abilities like Improved Critical and Overwhelming Critical earlier, making its slam attacks even more lethal.',
            skills: 'N/A (Construct)',
            lore: 'Leaning into martial discipline, this golem\'s combat routines have been upgraded. It is a more refined engine of war, a juggernaut that combines raw power with a greater degree of tactical precision.',
            tactics: 'Similar to the basic build, but with more feat options. It can use its Fighter feats to specialize in sundering enemy equipment or bull rushing foes off cliffs, adding a layer of battlefield control to its raw damage.',
        },
        {
            category: 'Standard',
            title: 'The Berserk Engine',
            progression: 'Warblade 20 / Frenzied Berserker 10 / Barbarian 10',
            feats: 'Power Attack, Cleave, Destructive Rage, Intimidating Rage, Epic feats focusing on Strength and rage enhancement.',
            skills: 'N/A (Construct)',
            lore: 'An attempt to grant the golem a more "adaptive" combat programming went horribly wrong, resulting in a construct that can enter a state of uncontrollable frenzy. It is a terrifying, unpredictable force of destruction.',
            tactics: 'Enter Frenzy at the start of combat. This makes it immune to many effects and grants a massive Strength bonus. The downside is it must attack the nearest creature, friend or foe. This build is a high-risk, high-reward powerhouse that can wipe out an entire encounter (including its own allies) in a whirlwind of destruction.',
        },
        {
            category: 'Expert',
            title: 'The War-Grafted Colossus',
            progression: 'Warblade 20 / War Golem 10 / Fighter 10',
            feats: 'Power Attack, Improved Sunder, Epic Prowess, Great Strength, focusing on feats that enhance its new integrated weapon systems from the War Golem prestige class.',
            skills: 'N/A (Construct)',
            lore: 'This golem has been upgraded in the forges of the Empæryen, its chassis fused with advanced weaponry. It is the pinnacle of non-magical artifice, a walking fortress armed with devastating energy cannons and reinforced plating.',
            tactics: 'Uses its Annihilator Beam to soften up targets from a distance, especially flying foes it cannot reach. In melee, it remains a devastating physical threat, its slams now enhanced and its defenses even more formidable. Its Total Magic Immunity makes it a nightmare for arcane spellcasters.',
        },
        {
            category: 'Legend',
            title: 'The Soul-Forged Paradox',
            progression: 'Warblade 10 / Totemist 10 / War Golem 10 / Soul-Bound Gladiator 10',
            feats: 'Power Attack, Bonus Essentia, Double Chakra, and other Incarnum feats to maximize the power of its soulmelds.',
            skills: 'N/A (Construct)',
            lore: 'A truly bizarre and unique creation, this golem was part of a heretical experiment to forge a soul using Incarnum. The result is a paradox: a mindless construct that can shape soul-stuff into powerful magical forms. It is covered in ghostly, bestial appendages that function alongside its adamantine fists.',
            tactics: 'This build is unpredictable. It can shape soulmelds like Pegasus Cloak (for flight) or Girallon Arms (for extra attacks), gaining abilities constructs should not have. Binding these to its chakras as a Soul-Bound Gladiator makes them even more potent. It combines its golem immunities with the versatility of a meldshaper, creating a truly legendary and terrifying opponent.',
        }
    ]
};
