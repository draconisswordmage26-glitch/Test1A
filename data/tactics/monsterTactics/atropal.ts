import { Tactics } from '../../../types';

export const atropalTactics: Tactics = {
    name: "Atropal, The Stillborn God",
    title: "Tactics: Atropal, The Stillborn God",
    description: "The Atropal is a terrifying and tragic figure, blending the raw power of a high-level undead with the divine magic of a Cleric. Its strategy is to weaken foes from a distance with its 'Aura of Death' and spells, then close in to finish them with its Constitution-draining touch. Its heroic backstory gives it a unique focus: destroying other undead and those who would pervert the cycle of life and death, acting as a grim warden of the natural order.",
    sections: [
        {
            title: "General Strategy",
            content: [
                "The Atropal's 'Aura of Death' is its most potent weapon. It should try to stay within 30 feet of as many living enemies as possible to inflict negative levels. This softens them up for its other attacks and spells.",
                "Its high Charisma makes it a powerful user of Divine Metamagic. It should use its many turn/rebuke attempts to fuel feats like Persist Spell.",
                "Despite its horrifying form, its mission is to enforce the natural order. It will prioritize attacking necromancers, liches, and other powerful undead, using its rebuke ability to command lesser undead against their masters.",
                "Its touch attack is devastating, draining Constitution with no save. This is its primary means of dealing with single, tough opponents."
            ]
        },
        {
            title: "Level 1-5 Builds (Wailing Remnant / Whisper of the Grave / Soul-Drinker)",
            content: [
                "At this stage, the Atropal's spellcasting is still developing. It relies heavily on its Aura and touch attacks.",
                "It should use its low-level Cleric spells for utility and defense. 'Desecrate' can be used to create an area that bolsters its undead minions.",
                "The goal is to get Divine Metamagic (Persist Spell) online as quickly as possible. The key is to survive long enough to become a true divine spellcasting threat."
            ]
        },
        {
            title: "Level 10 Build (Priest of Non-Life)",
            content: [
                "This is the Atropal's major power spike. With Divine Power persisted, its Base Attack Bonus becomes equal to its character level, making its touch attacks incredibly accurate.",
                "Daily Prep: Persist 'Divine Power' and any defensive spells like 'Spell Immunity' or 'Death Ward' (ironically).",
                "Combat: Float into the middle of the enemy, letting the Aura do its work. Use quickened spells for debuffs or summons, and then full attack the biggest living threat to drain their Constitution to zero."
            ]
        },
        {
            title: "Level 20-40 Builds (Patriarch / True Necromancer / God of the Final Rest)",
            content: [
                "At epic levels, the Atropal becomes a master of undeath. Its spell list is filled with epic necromancy and powerful save-or-die effects.",
                "Its Aura becomes so powerful it can kill weaker creatures outright. As a True Necromancer, it can then instantly animate them with 'Mass Animate Dead'.",
                "The God of the Final Rest is a true deity. Its 'Aura of Unlife' can turn entire armies into its puppets. It should be played as a grim, implacable judge, passing sentence on those who defy the sanctity of death. Its 'Touches of Oblivion' don't just kill; they enforce its divine will, turning victims into powerful undead servants."
            ]
        },
        {
            title: "Signature Move: The Persistent Annihilator",
            content: [
                "This combo showcases the Atropal's devastating synergy between its undead nature and its Cleric levels. At the start of the day, the Atropal uses its multiple turn/rebuke undead attempts to fuel Divine Metamagic (Persist Spell).",
                "The primary target for persistence is 'Divine Power'. This sets its Base Attack Bonus equal to its character level, a massive increase. Other good targets are 'Righteous Might' for a size increase and more stats, and 'Spell Immunity' to defend against specific threats.",
                "Example (Level 20 Patriarch): The Atropal enters combat with a persisted 'Divine Power' active, giving it a BAB of +37. It uses a quickened 'Divine Favor' for a +5 luck bonus. Its full attack with its two touches is at +40 (+37 BAB, +8 Str, -1 size, +1 Mighty Fists, -5 Power Attack). Each hit deals 1d8+13 + 2d6 Con drain. Against a living foe, it can use its Aura of Death (DC 26) and a quickened 'Destruction' spell (DC 28 Fort save or die) in the same round it makes a full attack. This combination of passive debuffs, save-or-die spells, and powerful physical attacks makes it a nightmare for any living creature."
            ]
        }
    ]
};