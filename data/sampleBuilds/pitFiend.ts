// data/sampleBuilds/pitFiend.ts
import { MonsterSampleBuilds } from '../../types';

export const pitFiendBuilds: MonsterSampleBuilds = {
    monsterName: "Pit Fiend, The Dissident General",
    builds: [
        {
            category: 'Basic',
            title: 'The Infernal Warlord',
            progression: 'Knight 40',
            feats: 'Power Attack, Cleave, and epic feats enhancing its melee attacks and Knight\'s Challenge.',
            skills: 'Intimidate, Diplomacy, Sense Motive',
            lore: 'This build focuses on the Pit Fiend\'s role as a supreme battlefield commander. It is a master of tactics and discipline, its every action calculated to enforce its perfect, unyielding vision of order.',
            tactics: 'A battlefield controller. It uses its Knight\'s Challenge to lock down the most dangerous enemy, forcing them to engage it while its allies (or summoned devils) pick off the rest. It is an unmovable anchor in a sea of chaos.',
        },
        {
            category: 'Beginner',
            title: 'The Hellfire Warlock',
            progression: 'Knight 5 / Warlock 15 / Hellfire Warlock 10 / Eldritch Knight 10',
            feats: 'Focuses on feats that enhance its Eldritch Blast and Hellfire abilities.',
            skills: 'Intimidate, Use Magic Device, Spellcraft',
            lore: 'Seeking greater power to enforce its will, the Pit Fiend forges a pact for hellfire. It combines its martial discipline with the raw, destructive power of a Hellfire Warlock.',
            tactics: 'A versatile damage dealer. It can blast foes from afar with its powerful Hellfire Blast or engage them in melee with its formidable natural attacks. The Constitution burn is a small price to pay for such devastating power, easily offset by its regeneration.',
        },
        {
            category: 'Standard',
            title: 'The Devil-Binder',
            progression: 'Knight 5 / Binder 15 / Devil-Binder 10 / Epic Binder 10',
            feats: 'Improved Binding and feats that enhance its summoned devils and pact-making abilities.',
            skills: 'Diplomacy, Knowledge (The Planes), Bluff',
            lore: 'This Pit Fiend delves into the forbidden art of binding vestiges, seeing it as the ultimate form of contract. It becomes a master of diabolical pacts, wielding the powers of forgotten entities alongside its own infernal might.',
            tactics: 'A versatile summoner and controller. It uses its Binder abilities to gain a wide range of supernatural powers, adapting to any foe. Its Devil-Binder abilities make its summoned devils incredibly powerful, allowing it to command a small but elite army.',
        },
        {
            category: 'Expert',
            title: 'The Lord of the Nine',
            progression: 'Knight 5 / Hellfire Warlock 10 / Lord of the Nine 10 / Epic Knight 15',
            feats: 'Epic Leadership, Legendary Commander, and feats enhancing its divine rank and command abilities.',
            skills: 'Diplomacy, Intimidate, Knowledge (The Planes)',
            lore: 'The Pit Fiend achieves its ultimate ambition, overthrowing a rival and claiming a layer of Hell as its own. It is now a true Archduke, a demigod of law, tyranny, and ambition.',
            tactics: 'A supreme commander. It leads a legion of devils, using its powerful auras and epic spells to dominate the battlefield. Its \'Diabolical Edict\' can command all devils on its plane. It fights not as a soldier, but as a king.'
        },
        {
            category: 'Legend',
            title: 'The Final Contract',
            progression: 'Knight 5 / Lord of the Nine 10 / Lawgiver 25 (Custom Epic PrC)',
            feats: 'Epic Spellcasting (to gain access to epic law spells) and feats that make its commands absolute.',
            skills: 'Diplomacy, Bluff, Sense Motive',
            lore: 'This Pit Fiend has become something more than a devil. It is the living embodiment of the contract, the ultimate expression of absolute, unyielding law. Its goal is to bind the entire multiverse in a single, perfect, and inescapable pact.',
            tactics: 'A conceptual warrior. Its \'Word of Law\' can stun an entire army of chaotic foes. Its custom epic abilities allow it to literally rewrite the laws of reality in its domain. An encounter with it is a legal battle as much as a physical one, where finding a loophole in its divine contract is the only path to victory.'
        }
    ]
};
