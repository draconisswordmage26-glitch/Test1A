
// data/encounters/el_51_plus.ts
import { Encounter } from '../../types';

export const el51_plus_encounters: Encounter[] = [
    {
        name: "The Day the Music Died",
        el: 57,
        description: "The Kaiser's Voice, a colossal mobile fortress of propaganda and sonic despair, is slowly advancing on the last free capital city. The party must lead an all-out assault to destroy the war machine before its demoralizing broadcast shatters the will of the city's defenders and its Vox Cannon levels the walls.",
        setup: [
            "The battlefield is a 10-mile stretch of war-torn plains between the party's command tent and the slowly advancing Kaiser's Voice (CR 55).",
            "The Voice is surrounded by a full legion of imperial troops, including elite Hex-Legionnaires and Plague-Knights.",
            "The party has access to an army of their own, but the Voice's 'Propaganda Broadcast' is inflicting a crippling -10 penalty on all their Will saves, causing mass desertions.",
        ],
        monsters: [
            { name: "The Kaiser's Voice", quantity: 1, notes: "CR 55" },
            { name: "Imperial Army", quantity: 1, notes: "1 Legion. Includes numerous elite units like The Inviolate (CR 38) and Kriegsmeister Valerius (CR 28) as lieutenants." },
        ],
        tactics: [
            "This is a mass combat encounter on an epic scale. The party must lead the charge against the imperial army.",
            "The primary objective is the Kaiser's Voice. It will bombard the battlefield with its Vox Cannon every round from miles away, targeting the party and their command structure.",
            "The party must first break through the defensive screen of elite imperial champions before they can even attempt to damage the colossal, magic-immune war machine.",
            "This encounter should feel like a desperate, almost hopeless siege against an unkillable foe."
        ],
        scaling: {
            increase: "The Kaiser's Voice is escorted by Inquisitor-Lord Kravchenko and the Apostate Cardinal, who are coordinating the defense (EL 58+).",
            decrease: "The Voice's defensive legion is smaller and lacks its most elite champions (EL 56).",
        },
        treasure: [
            "The wreckage of the Kaiser's Voice contains enough Obdurium and rare metals to fund a kingdom for a century.",
            "The captured banners of a dozen conquered worlds.",
            "The gratitude of an entire nation and the title of 'World-Saviors'."
        ],
    },
    {
        name: "Checkmate on the Iron Throne",
        el: 70,
        description: "The final confrontation. The party has breached the heart of the Novolograd Empæryen and now stands before the God-Kaiser Zharov himself. This is a battle not for a kingdom, but for the soul of the multiverse, against a being of supreme, meticulous evil.",
        setup: [
            "The encounter takes place in the Iron Throne Room, a vast cathedral of black iron and tortured souls. The room is a manifest zone of the Nine Hells, granting Zharov even greater power.",
            "The God-Kaiser Zharov (CR 70) sits on his throne, waiting. He will not rise until he is personally attacked.",
        ],
        monsters: [
            { name: "God-Kaiser Zharov", quantity: 1, notes: "CR 70" },
        ],
        reinforcements: [
            "If Zharov is ever brought below 50% health, his contingency teleports him to a hidden sanctum, and the party must face his four most loyal generals at once: General Gorn, Kriegsmeister Valerius, The Apostate Cardinal, and Inquisitor-Lord Kravchenko, before they can pursue him for the final battle."
        ],
        tactics: [
            "Zharov is the ultimate solo villain. He will use his full array of martial, magical, and diabolical abilities with perfect, sadistic precision.",
            "He will open with his 'Word of Law' to stun the party. He will then use his epic spells and maneuvers to isolate and destroy them one by one.",
            "'Time Stands Still' combined with his multiple attacks per round allows him to deal thousands of points of damage in a single turn.",
            "He is not just a monster to be killed; he is a puzzle to be solved. His regeneration, immunities, and contingencies make him nearly unkillable through brute force alone.",
            "This fight should be the ultimate test of the party's epic abilities, teamwork, and tactical thinking."
        ],
        scaling: {
            increase: "Zharov has achieved a higher divine rank and can take two full turns each round (EL 75+).",
            decrease: "Zharov does not have his reinforcements; the fight is a direct confrontation (EL 69).",
        },
        treasure: [
            "The Iron Crown of Hell and the other artifacts of a fallen god.",
            "The fate of the multiverse.",
            "The chance to build a new world from the ashes of the old."
        ],
    },
];
