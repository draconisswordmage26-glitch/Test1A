import { Tactics } from '../../../types';

export const marilithTactics: Tactics = {
    name: "Marilith, Blade of the Abyss",
    title: "Tactics: Marilith",
    description: "The Marilith is a whirlwind of steel, a master strategist who overwhelms opponents with a sheer volume of attacks. Her tactics revolve around engaging multiple foes at once, using her six arms and martial maneuvers to control the flow of combat and methodically dismantle her enemies. As a weary general, she fights with cold, pragmatic efficiency.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Marilith's key feature is her six arms, allowing for a devastating full attack. She should always try to make a full attack, using her teleport spell-like ability to position herself perfectly.",
                "Her high Dexterity and Combat Reflexes feat grant her many attacks of opportunity. She should position herself in the middle of her enemies to maximize this.",
                "As a Warblade, she has access to a wide range of maneuvers. Iron Heart provides resilience ('Iron Heart Surge'), Diamond Mind provides counters ('Moment of Perfect Mind'), and Tiger Claw provides raw damage ('Pouncing Charge').",
                "Her spell-like abilities like 'Blade Barrier' and 'Unholy Aura' are excellent for setting up the battlefield before she teleports into the fray."
            ]
        },
        {
            title: "Level 1-5 Builds (Abyssal Duelist / Six-Armed Strategist)",
            content: [
                "At this stage, her number of attacks is her greatest advantage. She can eliminate weaker foes in a single round.",
                "Use maneuvers to supplement her attacks. A 'Sapphire Nightmare Blade' strike can leave an enemy flat-footed for her next volley of attacks.",
                "Battle Clarity adds her decent Intelligence bonus to her already high Reflex save, making her very durable against area-of-effect spells."
            ]
        },
        {
            title: "Level 10-20 Builds (Warlord of the Endless Dance / Queen of the Blade Tide)",
            content: [
                "Access to high-level maneuvers and feats like Robilar's Gambit and Stormguard Warrior make her a master of action denial and punishment.",
                "Robilar's Gambit is a high-risk, high-reward tactic. She takes a penalty to AC, but can make an attack of opportunity against anyone who attacks her. With her many AoOs, this can be devastating.",
                "Stormguard Warrior allows her to trade attacks for AC or for bonus damage on her next turn. This is perfect for weathering an enemy's full attack and then retaliating with a single, massive hit.",
                "At level 20, with Perfect Multiweapon Fighting, the penalties for her off-hand attacks are removed, massively increasing her damage output."
            ]
        },
        {
            title: "Level 30-40 Builds (Abyssal Hurricane / Embodiment of the Blade)",
            content: [
                "As an Unstoppable Whirlwind, she can move and make a full attack. This is a massive boost to her mobility and threat range. She can now carve a path through an entire army.",
                "Her epic-level gear and stats make her a true demigod of combat. Her Vorpal swords are a constant threat to any creature with a head.",
                "The Embodiment of the Blade is a force of nature. 'Infinite Flurry' grants even more attacks. She is no longer just a general; she is a self-contained army, a living weapon that should be played as an unstoppable, chaotic force seeking to end the Blood War on her own terms."
            ]
        },
        {
            title: "Signature Move: The Six-Armed Cyclone",
            content: [
                "This combo demonstrates the Marilith's overwhelming offensive power. It's designed to eliminate a single, high-priority target in one round.",
                "The Marilith uses her at-will 'Greater Teleport' to appear next to her target. As part of her full attack, she initiates the 'Time Stands Still' maneuver (from Diamond Mind). This allows her to make two full attacks instead of one.",
                "With her six arms and feats like Greater Multiweapon Fighting, a single full attack consists of one primary longsword attack and five off-hand attacks, each with three iterative attacks (at -0, -5, -10). That's 1 + (5*3) = 16 attacks in a standard full attack. 'Time Stands Still' doubles this to 32 attacks in one round.",
                "Example (Level 20 Queen): Her attack bonus is +51. She teleports next to a foe and uses 'Time Stands Still'. She unleashes 32 strikes with her +5 Vorpal Longswords, each dealing 2d6+20 damage. The sheer volume of attacks almost guarantees multiple critical threats, which with Vorpal weapons, can instantly kill the target. Even without a decapitation, the raw damage from 32 hits is astronomical, likely exceeding 800 points of damage in a single round."
            ]
        }
    ]
};