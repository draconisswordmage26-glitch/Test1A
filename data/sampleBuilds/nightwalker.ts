// data/sampleBuilds/nightwalker.ts
import { MonsterSampleBuilds } from '../../types';

export const nightwalkerBuilds: MonsterSampleBuilds = {
    monsterName: "Nightwalker, Soul Drinker",
    builds: [
        {
            category: 'Basic',
            title: 'The Unrelenting Shadow',
            progression: 'Barbarian 40',
            feats: 'Power Attack, Awesome Blow, and epic feats for Strength, Constitution (in its case, Charisma), and rage.',
            skills: 'Intimidate, Listen, Spot, Move Silently',
            lore: 'This build leans into the Nightwalker\'s role as a pure engine of destruction. It is a being of mindless, relentless fury, its only goal to extinguish the light of life. Its entropic nature is expressed through pure, overwhelming physical violence.',
            tactics: 'A straightforward but terrifying brute. Rage, Haste, and charge the nearest living creature. Use Awesome Blow to knock enemies around the battlefield. It is a force of nature that cannot be reasoned with or stopped by conventional means.',
        },
        {
            category: 'Beginner',
            title: 'The Soul Eater',
            progression: 'Barbarian 10 / Soul Eater 10 / Epic Barbarian 20',
            feats: 'Focuses on feats that enhance its soul-devouring abilities and its rage.',
            skills: 'Intimidate, Knowledge (Religion)',
            lore: 'The Nightwalker learns to feed on the souls of those it slays, growing stronger with each life it extinguishes. Its rampage is no longer mindless; it is a hungry, targeted hunt for powerful souls.',
            tactics: 'A snowballing threat. It focuses on killing weaker enemies first to fuel its \'Devour Soul\' ability, healing itself and gaining temporary hit points. It can then use its \'Soulblast\' to deal massive area damage or \'Echo of the Slain\' to mimic the abilities of its victims.'
        },
        {
            category: 'Standard',
            title: 'The Knight of the Un-Light',
            progression: 'Barbarian 10 / Blackguard 10 / Epic Barbarian 20',
            feats: 'Divine Might, and feats that enhance its smite and command over undead.',
            skills: 'Intimidate, Knowledge (Religion)',
            lore: 'This Nightwalker develops a twisted form of consciousness and dedicates itself to a dark god or the concept of oblivion itself. It becomes a Blackguard, an unholy champion of the void.',
            tactics: 'A divine brute. It can use Smite Good to deal massive damage to paladins and clerics. Its \'Aura of Despair\' debuffs its enemies, and it can command other undead. It is a leader of a legion of shadows, a true general of the forces of un-death.'
        },
        {
            category: 'Expert',
            title: 'The World-Ender',
            progression: 'Barbarian 20 / World-Ender 10 / Epic Barbarian 10',
            feats: 'A suite of epic feats focused on destruction, such as Ruinous Rage and Dire Charge.',
            skills: 'Intimidate, Jump, Survival',
            lore: 'The Nightwalker embraces its role as an agent of entropy, becoming a methodical World-Ender. It seeks not just to kill, but to unmake reality itself, to ensure that what is destroyed can never be rebuilt.',
            tactics: 'A terrifyingly efficient killer. Its \'Ruinous Rage\' deals damage that is nearly impossible to heal, and \'Final End\' prevents resurrection. It uses \'Shatter Reality\' to destroy magical defenses before charging in to erase its foes from existence.'
        },
        {
            category: 'Legend',
            title: 'The Last Constant',
            progression: 'Barbarian 20 / World-Ender 10 / God of Oblivion 10 (Custom Epic PrC)',
            feats: 'Epic Spellcasting (to access custom epic spells of oblivion), and feats that grant it divine immunities.',
            skills: 'Knowledge (The Planes), Intimidate',
            lore: 'The Nightwalker has achieved apotheosis, becoming a true god of entropy and the void. It is no longer a creature, but a fundamental law of the cosmos: all things must end. It is the final period at the end of the universe\'s last sentence.',
            tactics: 'A plot device. Its \'Absolute Destruction\' ability means anything it kills is gone forever. Its \'Spell Immunity\' and \'One with the Void\' make it nearly untouchable. It doesn\'t fight battles; it ends them, its very presence a silent, inevitable apocalypse.'
        }
    ]
};
