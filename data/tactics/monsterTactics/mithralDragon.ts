import { Tactics } from '../../../types';

export const mithralDragonTactics: Tactics = {
    name: "Young Adult Mithral Dragon, Crusader Knight",
    title: "Tactics: Mithral Dragon",
    description: "The Mithral Dragon is a thinking warrior's dragon. It blends the raw power of a dragon with the tactical precision of a martial adept and the mental might of a psion. Its strategy should be logical, adaptable, and focused on controlling the battlefield and exploiting enemy weaknesses.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The dragon's breath weapon is a cone of pure force, making it very difficult to resist. This should be its opening move against groups of enemies.",
                "It is both a Crusader and a Warblade, giving it access to a wide variety of maneuvers. It should use these to control the flow of combat, buff itself and allies ('White Raven Tactics'), and deliver precise, powerful strikes.",
                "Its psi-like abilities are excellent for utility and defense. 'Force Screen' can provide cover, and 'Psionic Teleport' grants it exceptional mobility.",
                "Its Alternate Form ability is a superb tool for infiltration and surprise. It can approach enemies in a harmless humanoid form before revealing its true, terrifying nature."
            ]
        },
        {
            title: "Level 1-5 Builds (Adamant Aspirant / Logic of Steel)",
            content: [
                "At this stage, it's a versatile frontline combatant. It can lead with its breath weapon, then charge into melee.",
                "Its Crusader maneuvers from Devoted Spirit provide healing and defensive options, making it very durable. The delayed damage pool of Steely Resolve allows it to weather heavy hits.",
                "Use maneuvers like 'Stone Bones' to gain DR, or 'Crusader's Strike' to heal while attacking."
            ]
        },
        {
            title: "Level 10-20 Builds (Knight of the Unblinking Eye / Wyrm of Perfect Order)",
            content: [
                "Adding Warblade levels and eventually Eternal Blade makes it a tactical genius. Battle Clarity adds its high Intelligence to Reflex saves, and Blade Guide adds it to AC.",
                "The Eternal Blade's 'Island in Time' ability is a game-changer, granting it an extra action. This can be used for another attack, a quickened spell-like ability, or to reposition with teleport.",
                "Its damage output becomes very high, especially when it can add its Intelligence bonus to attacks and damage. It should focus on eliminating key threats with focused, intelligent attacks."
            ]
        },
        {
            title: "Level 30-40 Builds (Master of Causality / Nexus of Infinity)",
            content: [
                "As a Chronomancer, the dragon becomes a master of time. It can stop time, rewind its own mistakes, and force enemies to reroll successful attacks or saves.",
                "Its battlefield control is now absolute. It can use 'Stop Time' to set up devastating combinations of maneuvers, spells, and breath weapon attacks.",
                "The Nexus of Infinity is a living law of the multiverse. Its 'Unravel Timeline' ability can erase a creature from existence. It should be played as a cosmic guardian, a being of immense power whose goal is to preserve the integrity of the timeline against those who would threaten it."
            ]
        },
        {
            title: "Signature Move: The Time-Shattering Alpha Strike",
            content: [
                "This combo uses the dragon's Eternal Blade and Chronomancer abilities to unleash an overwhelming assault in what appears to be a single moment.",
                "The dragon uses its 'Stop Time' ability. During the 1d4+1 rounds of stopped time, it activates its most powerful martial stances and boosts. It then positions itself perfectly next to the most dangerous foe.",
                "When time is about to resume, on its last action in the time stop, it activates its 'Island in Time' ability. As time resumes, it immediately gets its extra action from 'Island in Time', which it uses to make a full attack. It then uses its normal turn's actions to make another full attack.",
                "Example (Level 30 Master of Causality): The dragon stops time for 3 rounds. It activates boosts like 'White Raven Tactics' on itself. It moves next to the enemy archlich. As its last action, it activates 'Island in Time'. Time resumes. It immediately gets a full attack (Bite at +65, 2 Claws at +63, etc). Then it takes its normal turn, unleashing another full attack. The archlich, who was just standing there a moment ago, is suddenly hit by 10+ attacks before it can even register that time has resumed."
            ]
        }
    ]
};