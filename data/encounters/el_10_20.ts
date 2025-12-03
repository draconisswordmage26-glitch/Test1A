
// data/encounters/el_10_20.ts
import { Encounter } from '../../types';

export const el10_20_encounters: Encounter[] = [
    {
        name: "The Emperor's Toll",
        el: 14,
        description: "The party's road is blocked by an imperial checkpoint. The commander, a Hellbound Outrider, demands an exorbitant toll. Refusal is met with swift, overwhelming force as Stygian Inquisitors emerge from the shadows.",
        setup: [
            "The encounter takes place on a road passing through a dark forest or a narrow canyon.",
            "A fortified checkpoint blocks the road. The Hellbound Outrider and their Nightmare are visible, seemingly alone.",
            "Two Stygian Inquisitors are hidden (Hide +21) in the trees or rocks on either side of the road, 30 feet from the checkpoint."
        ],
        monsters: [
            { name: "Hellbound Outrider ('Kaiserjäger')", quantity: 1, notes: "CR 12. Acts as the commander and initiates dialogue." },
            { name: "Stygian Inquisitor", quantity: 2, notes: "CR 10. Hidden, waiting for the signal to attack." },
        ],
        tactics: [
            "The Outrider will attempt to extort the party. If they refuse or attack, the Nightmare uses its Smoke ability to provide concealment.",
            "On the first round of combat, the Inquisitors will use their Fear Gaze on the party's spellcasters from their hidden positions.",
            "The Outrider will use its mobility to stay at range, peppering the party with flaming arrows from the cover of the smoke.",
            "The Inquisitors will use their reach and Combat Reflexes to create a kill zone around the checkpoint, using their fear effects to control the party's movement."
        ],
        scaling: {
            increase: "Add another Hellbound Outrider (EL 15). The Inquisitors have prepared an ambush with caltrops or a tripwire.",
            decrease: "Remove one Stygian Inquisitor (EL 13).",
        },
        treasure: [
            "Standard treasure for a CR 14 encounter.",
            "The Hellbound Outrider's +2 Flaming Burst Composite Longbow.",
            "An imperial dispatch case containing valuable intelligence about troop movements."
        ],
    },
    {
        name: "The Steel Lance",
        el: 19,
        description: "An imperial patrol of elite heavy cavalry, led by a Stahlritter captain, intercepts the party on an open plain. Their orders are to eliminate any potential threats to the Empæryen's supply lines, and they see the party as just such a threat.",
        setup: [
            "The encounter takes place on open, grassy plains, ideal for cavalry charges.",
            "The imperial force consists of one Stahlritter and four Hellbound Outriders.",
        ],
        monsters: [
            { name: "Stahlritter", quantity: 1, notes: "CR 17. The commander of the unit." },
            { name: "Hellbound Outrider ('Kaiserjäger')", quantity: 4, notes: "CR 12. The Stahlritter's squires and support." },
        ],
        tactics: [
            "The Stahlritter will lead a devastating charge, using Spirited Charge and Power Attack to deal massive damage to the party's frontline.",
            "The Outriders will use their mobility to skirmish on the flanks, using their Nightmares' smoke ability for cover while firing volleys of flaming arrows.",
            "The Stahlritter will use its Knight's Challenge to lock down the most powerful melee combatant, while the Outriders focus fire on spellcasters.",
            "This is a fast, brutal encounter that favors mobility and overwhelming force."
        ],
        scaling: {
            increase: "The patrol includes a Glaubenskrieger (CR 14) who provides divine buffs and healing (EL 20).",
            decrease: "Remove two of the Hellbound Outriders (EL 18).",
        },
        treasure: [
            "Standard treasure for an EL 19 encounter.",
            "The Stahlritter's +5 Unholy Adamantine Lance.",
            "The fiendish warhorses might be captured and 'redeemed' by a powerful paladin."
        ],
    },
];
