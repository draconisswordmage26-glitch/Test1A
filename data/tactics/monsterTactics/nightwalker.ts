import { Tactics } from '../../../types';

export const nightwalkerTactics: Tactics = {
    name: "Nightwalker, Soul Drinker",
    title: "Tactics: Nightwalker",
    description: "The Nightwalker is not a creature of malice, but of inevitable entropy. Its tactics should be relentless and overwhelming, a force of nature that cannot be reasoned with or stopped. It combines the terrifying traits of a high-level undead with the raw fury of a Barbarian, focusing on closing the distance and annihilating all life.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Nightwalker's 'Desecrating Aura' is a constant threat, bestowing negative levels on good creatures. It should try to keep as many enemies as possible within its 30-foot radius.",
                "Its Gaze attack can inflict 'crushing despair' and 'fear', softening up targets before it charges in. This is a great way to open an encounter.",
                "As a Barbarian, its primary tactic is to Rage and smash. With its immense Strength and Power Attack, its slam attacks can deal incredible amounts of damage.",
                "Its spell-like abilities provide excellent utility. 'Haste' should be used to close the distance quickly, while 'Deeper Darkness' can blind enemies who rely on normal sight."
            ]
        },
        {
            title: "Level 1-5 Builds (Whisper of the Void / Echo of Oblivion)",
            content: [
                "At this stage, the Nightwalker is a pure brute. Its goal is to get into melee as quickly as possible.",
                "Rage is its most powerful tool. It should use it in the first round of a serious combat to maximize its damage and hit points (using its Charisma modifier for HP as an undead).",
                "Improved Uncanny Dodge makes it impossible to flank, allowing it to wade into the midst of its enemies without fear of being surrounded."
            ]
        },
        {
            title: "Level 10-20 Builds (Avatar of Entropy / The Final Silence)",
            content: [
                "With 'Greater Rage' and eventually 'Mighty Rage', its Strength score becomes truly legendary. A full Power Attack can obliterate most targets.",
                "Its DR from Barbarian levels stacks with its innate DR, making it exceptionally resilient to physical attacks.",
                "At level 20, 'Devastating Critical' makes every critical hit a potential death sentence. Combined with its high attack bonus and multiple attacks, this is a serious threat to even the toughest foes."
            ]
        },
        {
            title: "Level 30-40 Builds (World-Ender / The Last Constant)",
            content: [
                "As a World-Ender, the Nightwalker becomes a methodical agent of destruction. Its 'Ruinous Rage' deals 'unmaking' damage that is nearly impossible to heal, and 'Final End' prevents resurrection. It should focus on eliminating one target at a time to ensure they stay dead.",
                "'Shatter Reality' is a powerful tool for destroying magical effects or creating openings in fortifications.",
                "The Last Constant is a cosmic force. Its 'Absolute Destruction' ability means that anything it kills is gone forever. It should be played as a silent, inevitable apocalypse, the final period at the end of the universe's story."
            ]
        },
        {
            title: "Signature Move: The Inevitable End",
            content: [
                "This combo showcases the Nightwalker's role as a terrifying and unstoppable force of destruction.",
                "The opening move is its Gaze attack (Will DC 25), inflicting crushing despair (-2 on saves, checks, attacks, damage) and fear on those who fail. It then activates its Mighty Rage as a free action and uses its 'Haste' spell-like ability to charge.",
                "It uses a full Power Attack, taking a massive penalty to hit for a huge damage bonus. Its target, already debuffed by the gaze, is unlikely to survive the blow.",
                "Example (Level 20 The Final Silence): It fixes its gaze on the party's paladin. The paladin must make a DC 31 Will save. It then rages (+8 Str, +8 Cha for HP) and charges. It Power Attacks for -30 to hit, gaining +30 damage. The attack is at +50 (BAB) + 20 (Str) + 2 (Charge) - 2 (size) - 30 (PA) = +40. A hit deals 4d6+20(Str)+30(PA) = 4d6+50 damage. If this is a critical hit (and it has Devastating Critical), the Paladin must make a DC 36 Fortitude save or die instantly. All the while, the party's good-aligned cleric is taking negative levels from the 'Desecrating Aura'."
            ]
        }
    ]
};