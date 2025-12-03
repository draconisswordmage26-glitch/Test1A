import { Tactics } from '../../../types';

export const planetarTactics: Tactics = {
    name: "Planetar, Emissary of War",
    title: "Tactics: Planetar, Emissary of War",
    description: "The Planetar is a premier melee combatant, combining the raw power of an outsider with the divine might of a high-level Cleric. Its strategy revolves around overwhelming divine self-buffs and then closing to melee to annihilate its foes.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Planetar's key is the combination of Divine Metamagic and Persist Spell. At the start of the day, it should use its turn attempts to make its most powerful personal buffs last for 24 hours.",
                "Primary persisted spells should include Divine Power (setting its Base Attack Bonus to its character level), Righteous Might (for size and stat increases), and other defensive buffs like Spell Immunity.",
                "In combat, its first action should often be a quickened Divine Favor for an extra luck bonus to attack and damage. It then uses its immense mobility (flight) to charge the most dangerous threat, typically an enemy spellcaster.",
                "Use its powerful spell-like abilities like Blade Barrier to control the battlefield and protect its flanks."
            ]
        },
        {
            title: "Level 1-5 Builds (Divine Aspirant / Persisting Crusader)",
            content: [
                "At this stage, the Planetar is just coming into its Cleric powers. It already has Persist Spell and DMM.",
                "Daily Prep: Persist 'Divine Favor'. This simple +1 to +3 luck bonus is a significant boost at this level.",
                "Combat: Lead with a charge, using Power Attack to crush softer targets. Use its innate SLAs for battlefield control. Its Turn Undead is plentiful fuel for DMM.",
            ]
        },
        {
            title: "Level 10 Build (Divine Champion)",
            content: [
                "This is where the Planetar becomes a true terror. It now has access to 4th-level Cleric spells.",
                "Daily Prep: Persist 'Divine Power'. This is the single most important spell, making its attack bonus skyrocket. Also persist 'Righteous Might' and any defensive buffs.",
                "Combat: With Divine Power active, its full attack is devastating. Use 'Flyby Attack' if available, or simply charge. A quickened 'Divine Favor' or 'Shield of Faith' is a great opening move. Divine Might can be used for a massive damage spike against a single target."
            ]
        },
        {
            title: "Level 20-40 Builds (Archon of War / Saint of Battle / Avatar of a God)",
            content: [
                "At epic levels, the Planetar is a demigod of war. Its buff routine is now a litany of powerful, persisted divine spells.",
                "Daily Prep: Persist Divine Power, Righteous Might, and every other useful personal buff it has. It has enough turn attempts to fuel multiple persisted spells.",
                "Combat: Its strategy is now about overwhelming force. It can use Quicken Spell with DMM to cast offensively while still making a full attack. Its smite attacks are apocalyptic. Its auras from prestige classes like Soldier of Light make it a walking force multiplier for any allied army.",
                "The Avatar-level build is a plot device. Its 'Hand of the Deity' and other epic abilities can end encounters before they begin. It should be played as a direct extension of a god's will, its actions shaping the fate of nations."
            ]
        },
        {
            title: "Signature Move: The Divine Nova",
            content: [
                "This combo showcases the Planetar's ability to 'go nova' by combining its persisted buffs with quickened spells and powerful melee strikes for a truly devastating opening round.",
                "Pre-Combat: The Planetar has 'Divine Power' and 'Righteous Might' active via Persist Spell. This already grants it a huge bonus to BAB, Strength, and size.",
                "Opening Round: As a swift action, it uses Divine Metamagic (Quicken Spell) to cast 'Divine Favor', granting it a luck bonus to attack and damage (e.g., +5 at CL 20). It then uses its standard action to charge an enemy.",
                "The Charge: It uses Power Attack for its full BAB. The attack is incredibly accurate and deals massive damage. If the target is evil, it can also declare a Smite Evil on the charge.",
                "Example (Level 20 Archon of War): With persisted Divine Power, its BAB is 34. It quickens Divine Favor (+5). It charges and uses Power Attack for -29, gaining +29 damage. The attack roll is +54 (+34 BAB, +11 Str, +2 Charge, +5 Weapon, +5 Luck) - 29 (PA) = +25. Still a likely hit. The damage is 3d6 (Greatsword) + 16 (1.5x Str) + 29 (PA) + 5 (Weapon) + 5 (Luck) + 2d6 (Holy) = 3d6+55 + 2d6 holy. If it also uses Great Smiting, it adds another +20 damage. A single charge can deal over 100 damage."
            ]
        }
    ]
};