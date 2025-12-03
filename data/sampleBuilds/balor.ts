// data/sampleBuilds/balor.ts
import { MonsterSampleBuilds } from '../../types';

export const balorBuilds: MonsterSampleBuilds = {
    monsterName: "Balor, The Fallen Angel",
    builds: [
        {
            category: 'Basic',
            title: 'The Abyssal Lord',
            progression: 'Barbarian 40',
            feats: 'Power Attack, Cleave, Intimidating Rage, and epic feats that enhance rage and strength.',
            skills: 'Intimidate, Jump, Listen, Spot',
            lore: 'This build focuses on the Balor\'s raw, destructive power. It is a being of pure rage and fire, a classic demon lord who seeks to burn the world to ashes. Its angelic past is a forgotten memory, buried under millennia of abyssal fury.',
            tactics: 'A straightforward brute. It teleports into the middle of the enemy, rages, and uses its massive Strength and Power Attack to destroy everything in sight. Its spell-like abilities are used to soften up targets or control the battlefield before it closes for the kill.',
        },
        {
            category: 'Beginner',
            title: 'The Hellfire General',
            progression: 'Barbarian 20 / Warlock 10 / Hellfire Warlock 10',
            feats: 'Power Attack, and feats that enhance its Eldritch Blast and Hellfire abilities.',
            skills: 'Intimidate, Use Magic Device, Spellcraft',
            lore: 'This Balor supplements its raw physical power with the ranged devastation of a Hellfire Warlock. It is a more tactical combatant, a true general who can command the battlefield from any range.',
            tactics: 'A versatile damage dealer. It opens combat with a devastating Hellfire Blast from a distance, then teleports into melee to finish off the survivors with its rage-fueled attacks. The Constitution burn from Hellfire is easily offset by its massive health pool.',
        },
        {
            category: 'Standard',
            title: 'The Corrupted Templar',
            progression: 'Crusader 20 / Blackguard 10 / Exotic Weapon Master 10',
            feats: 'Focuses on feats for the spiked chain, such as Combat Reflexes, as well as divine feats like Divine Might.',
            skills: 'Intimidate, Tumble, Knowledge (Religion)',
            lore: 'In this build, the Balor\'s angelic past resurfaces, twisted and corrupted. It fights with the discipline of a holy warrior, but its power is drawn from the depths of the Abyss. It is a dark mockery of a paladin, a champion of unholy law.',
            tactics: 'A battlefield controller and duelist. It uses its spiked chain and Crusader maneuvers to lock down enemies, then uses its Blackguard abilities like Smite Good to deal massive damage. It is a surprisingly tactical and resilient build.',
        },
        {
            category: 'Expert',
            title: 'The Demonic Lord',
            progression: 'Barbarian 20 / Demonic Lord 10 / Epic Barbarian 10',
            feats: 'Epic Leadership and feats that enhance its divine rank and demonic abilities.',
            skills: 'Diplomacy, Intimidate, Knowledge (The Planes)',
            lore: 'This Balor has achieved true apotheosis, becoming a Demonic Lord with its own layer of the Abyss. It is a quasi-deity of fire, destruction, and chaotic fury, commanding a legion of lesser demons.',
            tactics: 'A high-level commander. It fights surrounded by its demonic host, using its powerful auras and spell-like abilities to support them. Its \'Apocalyptic Rage\' can reshape the battlefield, and its raw power is sufficient to challenge other demon lords.'
        },
        {
            category: 'Legend',
            title: 'The Angel of the Abyss',
            progression: 'Crusader 10 / Paladin of Tyranny 10 / Soldier of Light 10 / Divine Agent 10',
            feats: 'This build is a paradox, taking feats that enhance both good and evil abilities. Great Smiting (Good and Evil), Divine Might, Leadership.',
            skills: 'Diplomacy, Bluff, Sense Motive',
            lore: 'This Balor has never truly fallen. It is an angel on a deep-cover mission, playing the long game to destroy the Abyss from within. It wields both holy and unholy power, its soul a constant battlefield. It is a tragic hero, a figure of immense power who has sacrificed its purity for the greater good.',
            tactics: 'A truly unpredictable character. It can use Smite Good one round and Smite Evil the next. It commands both celestial and demonic allies. It might aid a party of heroes against a demon lord, only to demand a terrible price for its help. It is a master manipulator, its true goals known only to itself.',
        }
    ]
};
