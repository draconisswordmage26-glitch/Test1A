import { Tactics } from '../../../types';

export const valkyrieTactics: Tactics = {
    name: "Valkyrie, The Shieldmaiden",
    title: "Tactics: Valkyrie",
    description: "The Valkyrie is a holy warrior, a perfect blend of divine power and martial discipline. Her tactics should be mobile, resilient, and focused on protecting her allies while leading the charge against evil. As a Crusader, she can absorb incredible punishment and turn it back against her foes. Having grown weary of endless war, she now fights to preserve life rather than glorify death.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Valkyrie is a master of mounted combat. With feats like Ride-By Attack and Spirited Charge, she can deal massive damage with her spear on a charge, then move to a safe position.",
                "As a Crusader, her 'Steely Resolve' ability allows her to delay damage, making her seem much tougher than she is. She can absorb a full attack and then unleash her own, healing herself with maneuvers like 'Revitalizing Strike'.",
                "Her spell-like abilities provide good utility. 'Call Lightning' is a solid ranged option, and 'Cure Serious Wounds' can save an ally in a pinch.",
                "'Ethereal Jaunt' is her ultimate escape tool, allowing her to phase out of reality to heal, regroup, or bypass obstacles."
            ]
        },
        {
            title: "Level 1-5 Builds (Chooser of the Slain / Shield of the Einherjar / War-Maiden)",
            content: [
                "At these levels, the Valkyrie is a durable frontline fighter. She should use her maneuvers from the Devoted Spirit and Stone Dragon schools to enhance her defenses.",
                "'Shield Wall' makes her an excellent partner for another melee combatant, as she can grant her shield bonus to them.",
                "Her main damage comes from a well-placed Spirited Charge with her spear, which can deal triple damage."
            ]
        },
        {
            title: "Level 10-20 Builds (War-Maiden of the Host / Vanguard of the Gods)",
            content: [
                "With Mettle, she becomes highly resistant to spells that target her Fortitude or Will saves. This, combined with her high saves, makes her a nightmare for enemy spellcasters.",
                "Pious Templar levels grant her full Base Attack Bonus and the ability to Smite Evil. Her charge is now a divine thunderbolt, capable of one-shotting powerful demons and devils.",
                "Her 'Divine Shield' feat allows her to expend a turn attempt to add her high Charisma bonus to her shield's AC, making her incredibly difficult to hit."
            ]
        },
        {
            title: "Level 30-40 Builds (Soldier of Light / Goddess of the Final Charge)",
            content: [
                "As a Soldier of Light, she becomes a beacon of divine power. Her 'Consecrated Aura' weakens all evil creatures around her, while her attacks are infused with holy energy.",
                "Her 'Positive Energy Burst' can heal her entire army or devastate a legion of undead.",
                "The Goddess of the Final Charge is a demigod of valor. Her 'Final Ride' is a battle-winning, and potentially campaign-ending, ability that can turn an army of mortals into a host of angels. She should be played as a figure of legend, a warrior whose courage can inspire gods and terrify archfiends."
            ]
        },
        {
            title: "Signature Move: The Einherjar's Lance",
            content: [
                "This combo is the Valkyrie's ultimate single-target strike, perfect for taking down a powerful evil champion. It combines her mounted combat feats with her Crusader maneuvers.",
                "Aboard her flying steed, she charges her target. Before the attack, she initiates the 'Revitalizing Strike' maneuver. This allows her to heal herself or an ally for 3d6 + her initiator level if the attack hits.",
                "The charge itself utilizes the Spirited Charge feat, which triples the damage from her spear. She can also declare a Smite Evil on the attack for a massive bonus to hit and damage.",
                "Example (Level 20 Vanguard of the Gods): Her steed charges a Pit Fiend. She uses 'Revitalizing Strike'. She smites evil, gaining +8 to hit and +35 to damage. The attack with her +5 Holy Axiomatic Spear deals triple damage on the charge. The base damage is (1d8 + 5(enh) + 8(str) + 2d6(holy) + 2d6(axiomatic)). The total damage from the charge is (1d8+13)*3 + 35(smite) + 6d6(holy) + 6d6(axiomatic). This works out to an average of 3d8+74 + 12d6, or roughly 159 damage on a single hit. The blow also heals an ally for 3d6+25 HP. It's a move that both devastates an enemy and supports her team."
            ]
        }
    ]
};