import { Tactics } from '../../../types';

export const ammutTactics: Tactics = {
    name: "Am-mut, The Living Thunderstorm",
    title: "Tactics: Am-mut, The Living Thunderstorm",
    description: "Am-mut is a mobile area-of-effect damage dealer and battlefield controller. As a sentient storm, it should be played as a heroic force of nature, using its superior flight and weather-based abilities to protect the innocent and cleanse the land of evil from a distance. It is not a creature that lands and fights; it is the sky itself made righteous.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "Am-mut's greatest asset is its permanent flight and high Dexterity. It should always stay airborne and out of melee reach if possible.",
                "Its primary attack is its at-will 'Call Lightning'. It should be using this every round, targeting clumps of enemies or high-priority targets like spellcasters to disrupt their concentration.",
                "The 'Storm Burst' ability is for crowd control. Use it to knock flyers out of the sky or to break up enemy formations on the ground.",
                "Its slam attack is a last resort, but still powerful. Use Flyby Attack to swoop in, strike a foe, and fly out of reach in the same turn."
            ]
        },
        {
            title: "Level 1-5 Builds (Wandering Squall / Raging Cyclone / Eye of the Storm)",
            content: [
                "At these levels, its Druid spellcasting is its main source of versatility. Spells like 'Fog Cloud' can provide cover, while 'Gust of Wind' can push enemies around.",
                "Wild Shape into an air elemental can be used for scouting or to gain the whirlwind ability, but its base form is generally more powerful in a direct fight.",
                "The strategy is simple: fly high, rain down lightning with 'Call Lightning', and use 'Storm Burst' on anyone who gets too close or tries to fly up to it."
            ]
        },
        {
            title: "Level 10 Build (Heart of the Gale)",
            content: [
                "The Stormcaster prestige class makes Am-mut a true terror of the skies. Its electrical attacks are now empowered, making its 'Call Lightning' even more deadly.",
                "The 'Storm Elemental Wild Shape' is a major power boost. Transforming into a Huge storm elemental grants it a powerful whirlwind attack that can scoop up and batter enemies. This should be its go-to form for major engagements.",
                "With 'Storm Eyes', it can create weather effects like 'Sleet Storm' or 'Control Weather' to obscure the battlefield for its enemies while seeing perfectly itself."
            ]
        },
        {
            title: "Level 20-40 Builds (Maelstrom Incarnate / The Tempest / God of the Sky)",
            content: [
                "At epic levels, Am-mut is a god of storms. Its 'Greater Whirlwind' aura is a constant threat to anything that gets near it.",
                "As The Tempest, its 'Eye of the Hurricane' ability turns it into a mobile lair. It can control a massive storm system and attack with impunity from its calm center.",
                "The God of the Sky is a world-level threat. Its 'World Storm' ability is a campaign-defining event. It should be played as a primal deity, its actions shaping the climate of the entire campaign world. It doesn't participate in battles; it *is* the battlefield."
            ]
        },
        {
            title: "Signature Move: The Hurricane's Embrace",
            content: [
                "This combo showcases Am-mut's ultimate control over the battlefield. It begins by casting 'Control Weather' to summon a hurricane-level storm, plunging the area into magical darkness, torrential rain, and buffeting winds that penalize all enemy actions.",
                "It then uses its Storm Elemental Wild Shape to become a Huge storm elemental. In this form, it flies into the midst of the enemy. Its 'Greater Whirlwind' aura automatically buffets and damages nearby foes, while it uses its own whirlwind attack to scoop up the most dangerous enemy (e.g., a powerful fighter).",
                "While the fighter is trapped in the whirlwind, taking 2d8 damage each round, Am-mut uses its at-will Empowered 'Call Lightning' (now dealing 1.5x damage) to strike at the enemy spellcasters who are struggling to see or cast in the magical storm.",
                "Example (Level 20 Maelstrom Incarnate): It creates a hurricane. It turns into a Huge storm elemental and scoops up the party's barbarian. The barbarian is trapped, taking damage. Am-mut then flies over the wizard and cleric, calling down a lightning bolt that deals 19d6 x 1.5 damage (average 99 damage) each round, forcing massive concentration checks while they are pelted by rain and unable to see."
            ]
        }
    ]
};