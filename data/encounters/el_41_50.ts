
// data/encounters/el_41_50.ts
import { Encounter } from '../../types';

export const el41_50_encounters: Encounter[] = [
    {
        name: "The Chessmaster's Gambit",
        el: 47,
        description: "The party must launch a desperate assault on the command bunker of Grand Strategos Vorn, the Empæryen's master tactician. This is not a single fight, but a grueling, multi-stage dungeon crawl against a foe who is always three steps ahead.",
        setup: [
            "The encounter is the bunker itself. It is a labyrinth of kill-zones, traps, and elite guards.",
            "Vorn (CR 45) is not physically present until the final room. His voice and his powers, however, are everywhere.",
            "The party will face relentless, perfectly orchestrated waves of imperial troops, tailored to counter their specific abilities."
        ],
        monsters: [
            { name: "Grand Strategos Vorn", quantity: 1, notes: "CR 45, in the final room" },
            { name: "Imperial Legions", quantity: 1, notes: "Endless waves. A mix of all imperial troop types, from Phalanx to Hex-Legionnaires." },
            { name: "The Inviolate", quantity: 1, notes: "CR 38, guarding the final door." },
        ],
        tactics: [
            "Vorn will use his remote abilities to harass the party throughout the entire dungeon. He will use 'Wall of Force' to split them up, 'Solid Fog' to obscure their path, and 'Summon Legion' to drop elite enemies right on top of them.",
            "His 'Aura of Absolute Command' means that any charmed allies or powerful summons the party brings could be turned against them at any moment.",
            "The final battle involves getting past The Inviolate, a colossal anti-mage golem, while Vorn continues to summon reinforcements and control the battlefield from his throne.",
            "Defeating Vorn requires destroying his throne, as he himself is physically frail."
        ],
        scaling: {
            increase: "Add a second Inviolate to the final room (EL 48). Vorn has epic spells prepared.",
            decrease: "The Inviolate is not present (EL 46). Vorn can only use his abilities once every few rounds.",
        },
        treasure: [
            "The Strategos Throne, a powerful artifact of command and control.",
            "Access to the imperial war plans, a document that could change the course of a global conflict.",
            "The personal treasury of one of the Empæryen's highest-ranking officials."
        ],
    },
];
