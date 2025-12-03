// data/sampleBuilds/wormThatWalks.ts
import { MonsterSampleBuilds } from '../../types';

export const wormThatWalksBuilds: MonsterSampleBuilds = {
    monsterName: "The Worm that Walks",
    builds: [
        {
            category: 'Basic',
            title: 'The Arcane Swarm',
            progression: 'Wizard 40',
            feats: 'Spell Focus (Necromancy), Greater Spell Focus, and epic feats enhancing spellcasting and save DCs.',
            skills: 'Spellcraft, Knowledge (Arcana), Concentration',
            lore: 'This build focuses on the Worm\'s origins as a powerful wizard. It continues its pursuit of arcane knowledge, its swarm-form merely an immortal vessel for its vast intellect.',
            tactics: 'A pure spellcaster. It uses its immunity to weapon damage to position itself safely, then unleashes its most powerful spells. It will use battlefield control like \'Solid Fog\' to protect itself while bombarding foes from afar.'
        },
        {
            category: 'Beginner',
            title: 'The Incantatrix',
            progression: 'Wizard 15 / Incantatrix 10 / Epic Wizard 15',
            feats: 'A host of metamagic feats, including Quicken Spell and Persistent Spell.',
            skills: 'Spellcraft, Knowledge (Arcana), Concentration',
            lore: 'The Worm\'s alien mind begins to understand not just magic, but the rules that govern it. It becomes an Incantatrix, able to bend and shape spells with a skill that defies its horrifying form.',
            tactics: 'A master of metamagic. It can use \'Instant Metamagic\' to apply Quicken Spell to its most powerful attacks, unleashing two devastating spells in a single round. It can also manipulate ongoing magical effects, turning an enemy\'s buffs against them.'
        },
        {
            category: 'Standard',
            title: 'The True Necromancer',
            progression: 'Wizard 10 / Cleric 5 / Mystic Theurge 5 / True Necromancer 10 / Epic Theurge 10',
            feats: 'Divine Metamagic, Corpsecrafter series, and feats that enhance its command over undead.',
            skills: 'Knowledge (Religion), Spellcraft',
            lore: 'The Worm embraces its undead-like nature, delving into the secrets of divine necromancy. It becomes a True Necromancer, a master of both arcane and divine death magic.',
            tactics: 'A master of minions. It uses its arcane spells for battlefield control and its divine spells to create and command legions of powerful undead. It is a one-being army of death and decay.',
        },
        {
            category: 'Expert',
            title: 'The Archlich',
            progression: 'Wizard 15 / Incantatrix 10 / Archmage 5 / Archlich 10',
            feats: 'Epic Spellcasting, Craft Wondrous Item, and feats for creating its phylactery.',
            skills: 'Spellcraft, Knowledge (Arcana), Craft (Alchemy)',
            lore: 'The Worm achieves the pinnacle of undeath, its swarm becoming its own, unique phylactery. It is now a true Archlich, an immortal being of supreme magical power whose consciousness is distributed among a million tiny bodies.',
            tactics: 'An immortal spell-master. Its \'Swarm Phylactery\' makes it nearly impossible to kill. Its archmage abilities allow it to shape magic in unique ways, while its lich powers can paralyze or kill with a touch. It is a patient, calculating foe who will wear its enemies down over centuries if it has to.'
        },
        {
            category: 'Legend',
            title: 'The Final Syllable',
            progression: 'Wizard 15 / Incantatrix 10 / Archmage 5 / Archlich 10 / Epic Wizard 10',
            feats: 'Epic Spellcasting (to develop custom epic spells of knowledge and silence) and divine feats.',
            skills: 'Knowledge (all), Spellcraft',
            lore: 'It has achieved its goal: ultimate magical knowledge and immortality. It has learned a final, terrible secret: the word that unmakes reality. It now serves as the silent guardian of this knowledge, its inhuman mind the only thing standing between creation and oblivion.',
            tactics: 'A plot device. Its \'Word of Unmaking\' can destroy a city. Its \'One with Magic\' ability makes it nearly immune to spells. An encounter with it is not a fight, but a race to stop it from speaking the word that will end everything.'
        }
    ]
};
