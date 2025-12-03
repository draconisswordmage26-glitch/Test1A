import { Tactics } from '../../../types';

export const adamantineGolemTactics: Tactics = {
    name: "Adamantine Golem, Unstoppable Juggernaut",
    title: "Tactics: Adamantine Golem",
    description: "The Adamantine Golem is a straightforward but terrifying opponent. Its strategy is simple: advance and destroy. Its near-total immunity to magic and massive damage reduction mean that only very specific strategies can harm it. It should be played as a force of nature, a mobile siege engine that relentlessly pursues its objective.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The golem is mindless. It follows its last command to the letter. This can be a weakness if players can trick it or use its programming against it.",
                "Its primary advantage is its DR 20/adamantine and Magic Immunity. It should ignore any creature that cannot bypass these defenses and focus on its objective or on the biggest physical threat.",
                "The martial maneuvers from Warblade levels are 'programmed' combat routines. It doesn't make intelligent choices but can execute these complex actions perfectly.",
                "Use its Haste ability to close distances quickly or get an extra slam attack in a crucial round."
            ]
        },
        {
            title: "Level 1-5 Builds (The Unmaker's Fist / The Juggernaut)",
            content: [
                "At this stage, its maneuvers are its main tactical flexibility. Use Stone Dragon maneuvers to bypass hardness when sundering equipment or walls.",
                "Its goal is to get into melee and stay there. Its attacks are powerful, and its defenses are nearly absolute against a low-level party without adamantine weapons.",
                "It should ignore spellcasters unless they are directly impeding its path with physical obstacles (e.g., Wall of Stone)."
            ]
        },
        {
            title: "Level 10-20 Builds (The Mountain that Walks / God-Engine)",
            content: [
                "Gains access to Iron Heart Surge. This is a critical ability. Since the golem is immune to Fortitude saves, this maneuver should be used to shrug off effects that target its Reflex or Will saves, or other non-magical debilitating effects.",
                "With Devastating Critical at level 20, its main goal is to land a critical hit on the most dangerous physical opponent. With its high attack bonus, this is a very real threat.",
                "Its damage output is immense. Use Power Attack liberally, as its attack bonus is high enough to absorb the penalty."
            ]
        },
        {
            title: "Level 30-40 Builds (Adamantine Hurricane / Worldbreaker)",
            content: [
                "The Whirlwind of Adamant ability makes it a crowd-control nightmare. If surrounded, it can attack every enemy within its 15 ft. reach.",
                "The Annihilator Beam is its ultimate weapon. Use it to target multiple enemies in a line, especially those who stay at range. It's a rare non-melee option that can surprise players.",
                "As the Worldbreaker, it is a mobile fortress. Its Total Magic Immunity makes it impervious to almost all spells. It should march relentlessly forward, its Annihilator Beam targeting celestial beings or other epic threats while its fists pulverize anything that gets close."
            ]
        },
        {
            title: "Signature Move: The Unstoppable Siege",
            content: [
              "This combo showcases the Golem's role as an unstoppable engine of destruction. The Golem activates its innate Haste as a free action, increasing its speed and giving it an extra slam attack. It then charges the most heavily armored foe or a fortified position.",
              "It initiates the 'Irresistible Mountain Strike' maneuver (from Stone Dragon discipline), which allows its attack to ignore all damage reduction and hardness. Combined with a full Power Attack (-33 to hit for +33 damage at level 20), the blow is devastating.",
              "Example (Level 20 God-Engine): The Golem charges. Its attack is at +47 (+33 BAB +17 Str -2 size +1 haste -2 charge) - 33 (Power Attack) = +14. The damage is 2d10 + 17 (Str) + 33 (Power Attack) = 2d10+50, and this damage ignores all DR and hardness, making it perfect for shattering epic gear, artifacts, or the gates of a fortress."
            ]
        }
    ]
};