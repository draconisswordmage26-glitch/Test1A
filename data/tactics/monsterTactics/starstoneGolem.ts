import { Tactics } from '../../../types';

export const starstoneGolemTactics: Tactics = {
    name: "Starstone Golem, The Celestial Orphan",
    title: "Tactics: Starstone Golem",
    description: "The Starstone Golem is a unique opponent that blends the near-invulnerability of a golem with the innate magical power of a Sorcerer. Its tactics should reflect its alien and confused nature: periods of inaction punctuated by devastating bursts of magical and physical power. It is a puzzle to be solved, a lost entity whose unintentional attempts to understand and interact with the world can be catastrophic.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Golem's greatest defense is its Magic Immunity. It is immune to any spell that allows spell resistance, which includes most of the spellbook. It should ignore spellcasters who cannot bypass this immunity.",
                "Its DR 10/adamantine and epic makes it highly resistant to physical attacks. Only epic characters with adamantine weapons can reliably harm it.",
                "Its innate Sorcerer spellcasting is its primary offensive tool. It should use its spells to control the battlefield and deal damage from a distance.",
                "Its slam attacks are a powerful backup, especially with its high Strength score. It should use them against enemies who get too close or who are resistant to its spells."
            ]
        },
        {
            title: "Level 1-5 Builds (The Fallen Star / The Comet / The Asteroid)",
            content: [
                "At this stage, its spellcasting is still developing. It relies on its 'Starlight Burst' to dazzle foes and its powerful slam attacks in melee.",
                "Its low-level Sorcerer spells should be chosen for utility and area control. 'Grease' can slow down enemies, while 'Magic Missile' is a reliable source of damage that bypasses its own magic immunity.",
                "Its feats are focused on Evocation. Spells like 'Fireball' (at level 5) become its main area-of-effect damage."
            ]
        },
        {
            title: "Level 10-20 Builds (The Celestial Engine / The Cosmic Artificer)",
            content: [
                "With higher-level Sorcerer spells and Incantatrix abilities, its magical power becomes formidable. It can use 'Instant Metamagic' to quicken a powerful spell for a surprise burst of damage.",
                "Its spell selection should include powerful evocations ('Chain Lightning'), battlefield control ('Wall of Force'), and buffs ('Greater Invisibility').",
                "It should use its magic to create a dangerous environment, then march through it with its immunities to pick off weakened foes."
            ]
        },
        {
            title: "Level 30-40 Builds (The World-Forger / The Unmoving Watcher)",
            content: [
                "As an Archmage, it gains High Arcana, allowing it to shape magic in unique ways. 'Mastery of Elements' can make all its damage spells deal force damage, bypassing all resistances.",
                "Its 'Spell Absorption' ability makes it even more resilient, allowing it to heal from spells that manage to bypass its immunity.",
                "The Unmoving Watcher is a demigod of creation. Its 'Cosmic Seed' ability can create a new demiplane. It should be played as a silent, godlike being, its actions dictated by a cosmic logic. It no longer fights; it reshapes reality, and its enemies are simply part of the material being reshaped."
            ]
        },
        {
            title: "Signature Move: The Meteor Storm Barrage",
            content: [
                "This combo showcases the Golem's surprising magical firepower, combining its innate spellcasting with metamagic mastery.",
                "The Golem uses its Incantatrix 'Instant Metamagic' ability to apply the Quicken Spell feat to one of its most powerful spells. This allows it to cast it as a swift action.",
                "Its standard action is then used to cast another powerful, area-of-effect spell. This one-two punch can devastate an entire party before they have a chance to react.",
                "Example (Level 20 Cosmic Artificer): The Golem identifies a cluster of enemies. As a swift action, it uses Instant Metamagic to cast a quickened 'Chain Lightning', dealing 20d6 electricity damage to the primary target and half that to several secondary targets. As its standard action, it then casts a maximized 'Fireball', dealing a flat 60 points of fire damage to everyone in a 20-foot radius. The combined damage from these two spells in a single round is enough to kill or severely wound most non-epic parties. All the while, the party's own spellcasters are struggling to find a spell that can even affect the Golem."
            ]
        }
    ]
};