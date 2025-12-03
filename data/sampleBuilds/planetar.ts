// data/sampleBuilds/planetar.ts
import { MonsterSampleBuilds } from '../../types';

export const planetarBuilds: MonsterSampleBuilds = {
    monsterName: "Planetar, Emissary of War",
    builds: [
        {
            category: 'Basic',
            title: 'The Divine Crusader',
            progression: 'Cleric 40',
            feats: 'Power Attack, Cleave, Divine Metamagic (Persist Spell), Extra Turning, and epic feats for spellcasting.',
            skills: 'Concentration, Knowledge (Religion), Diplomacy',
            lore: 'This build focuses on the Planetar\'s core identity as a divine champion. It becomes the ultimate Cleric, a walking conduit of its deity\'s power, capable of healing armies and smiting the mightiest of fiends.',
            tactics: 'The classic "DMM Persist" Cleric. It enters every battle with a host of 24-hour buffs like Divine Power and Righteous Might, making it a full-BAB melee powerhouse. It uses its spell slots for battlefield control, healing, and devastating offensive spells.',
        },
        {
            category: 'Beginner',
            title: 'The Pious Templar',
            progression: 'Cleric 10 / Pious Templar 10 / Epic Cleric 20',
            feats: 'Power Attack, Great Smiting, and feats that enhance its melee combat and smite abilities.',
            skills: 'Intimidate, Knowledge (Religion), Ride',
            lore: 'This Planetar dedicates itself to the martial aspects of its faith, becoming a Pious Templar. It is a holy warrior, a knight of the celestial hosts whose every blow is a prayer.',
            tactics: 'A powerful "gish" build. It uses its Cleric spells to buff itself into a formidable melee combatant, then uses its Pious Templar abilities like Mettle and Smite to dominate the front line. It is a perfect fusion of martial skill and divine power.',
        },
        {
            category: 'Standard',
            title: 'The Soldier of Light',
            progression: 'Cleric 10 / Pious Templar 10 / Soldier of Light 10 / Epic Cleric 10',
            feats: 'A mix of divine and epic combat feats, such as Positive Energy Burst and Epic Leadership.',
            skills: 'Diplomacy, Intimidate, Sense Motive',
            lore: 'This Planetar becomes a true beacon of hope and a general of celestial armies. As a Soldier of Light, its very presence consecrates the battlefield, and its attacks are infused with pure positive energy.',
            tactics: 'A battlefield commander and force multiplier. Its \'Consecrated Aura\' weakens evil foes, while its other abilities buff its allies. It leads from the front, a walking bastion of divine power that can turn the tide of a cosmic war.'
        },
        {
            category: 'Expert',
            title: 'The Arcane Hierophant',
            progression: 'Cleric 5 / Wizard 5 / Arcane Hierophant 10 / Mystic Theurge 10 / Epic Theurge 10',
            feats: 'A suite of metamagic feats, including Persistent Spell and Divine Metamagic, to apply to both arcane and divine spells.',
            skills: 'Spellcraft, Knowledge (Arcana), Knowledge (Religion)',
            lore: 'This Planetar seeks to understand all forms of cosmic power, not just the divine. It becomes a master of both arcane and divine magic, a Mystic Theurge whose knowledge of the cosmos is unparalleled.',
            tactics: 'The ultimate utility caster. With access to the two best spell lists in the game, it has the perfect tool for any situation. It can use arcane buffs like \'Haste\' and \'Shapechange\' alongside its powerful divine spells, making it incredibly versatile and unpredictable.'
        },
        {
            category: 'Legend',
            title: 'The Avatar of a God',
            progression: 'Cleric 10 / Pious Templar 10 / Soldier of Light 10 / Divine Agent 10',
            feats: 'Epic Spellcasting, Great Charisma, and feats that enhance its divine rank and abilities.',
            skills: 'Diplomacy, Knowledge (Religion), Intimidate',
            lore: 'This Planetar achieves its ultimate purpose, becoming a true Divine Agent, a demigod who is a direct extension of its deity\'s will. It is no longer just a servant of a god; it is a fundamental aspect of that god\'s power in the multiverse.',
            tactics: 'A divine plot device. Its \'Hand of the Deity\' can slay with a touch. Its epic spells can reshape worlds. It should be played as a being of absolute divine power, its actions the will of a god made manifest.'
        }
    ]
};
