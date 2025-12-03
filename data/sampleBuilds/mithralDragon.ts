// data/sampleBuilds/mithralDragon.ts
import { MonsterSampleBuilds } from '../../types';

export const mithralDragonBuilds: MonsterSampleBuilds = {
    monsterName: "Young Adult Mithral Dragon, Crusader Knight",
    builds: [
        {
            category: 'Basic',
            title: 'The Adamant Crusader',
            progression: 'Crusader 40',
            feats: 'Power Attack, Stone Power, and epic feats enhancing martial maneuvers and durability.',
            skills: 'Intimidate, Martial Lore, Concentration',
            lore: 'This build focuses on the dragon\'s lawful nature and martial aptitude. It becomes the ultimate holy warrior, a paragon of the Devoted Spirit and Stone Dragon disciplines, its every action a testament to unbreakable law.',
            tactics: 'A durable frontline tank and healer. It uses its Crusader maneuvers to absorb damage for its allies and heal them with strikes like \'Revitalizing Strike\'. It is an unmovable anchor for any battle line.',
        },
        {
            category: 'Beginner',
            title: 'The Psionic Blade',
            progression: 'Crusader 10 / Psion (Psychokineticist) 10 / Psychic Warrior 20',
            feats: 'Psionic Meditation, Power Attack, and feats that blend psionic and martial power.',
            skills: 'Psicraft, Concentration, Autohypnosis',
            lore: 'The dragon embraces its innate psionic power, weaving it into its martial style. It becomes a Psychic Warrior, its mind and body a single, perfectly honed weapon.',
            tactics: 'A powerful "gish". It uses its psionic powers to buff itself (Inertial Armor, Vigor) and for ranged attacks (Energy Ray), then charges into melee, using its maneuvers to control the fight. Its psionic focus can be expended to fuel its martial strikes.',
        },
        {
            category: 'Standard',
            title: 'The Eternal Blade',
            progression: 'Crusader 5 / Warblade 5 / Eternal Blade 10 / Epic Warblade 20',
            feats: 'Blade Meditation, Stormguard Warrior, and feats enhancing its tactical maneuvers and action economy.',
            skills: 'Tumble, Martial Lore, Concentration',
            lore: 'This dragon becomes a master of martial time-manipulation. It sees moments ahead in battle, its strikes perfectly timed, its defenses impenetrable. It is a living nexus of combat and causality.',
            tactics: 'The ultimate duelist. It uses its Eternal Blade abilities to gain extra actions and add its high Intelligence to attack, damage, and AC. It combines this with its powerful draconic body and Warblade maneuvers to be a nearly unbeatable single combatant.'
        },
        {
            category: 'Expert',
            title: 'The Chronomancer',
            progression: 'Crusader 5 / Psion 15 / Chronomancer 10 / Epic Psion 10',
            feats: 'Epic Spellcasting (to qualify for Chronomancer with psionics), Quicken Power, and feats that enhance its control over time.',
            skills: 'Knowledge (The Planes), Psicraft, Concentration',
            lore: 'The Mithral Dragon achieves its ultimate purpose as a guardian of order by becoming a master of time itself. It is no longer just a guardian of the present, but of the past and future as well. It is a living law of causality.',
            tactics: 'A god of time. It can use \'Stop Time\' to set up devastating combos of psionic powers. It can rewind its own mistakes or force enemies to reroll successful saves. Its ultimate ability, \'Unravel Timeline\', can erase a creature from existence. It is a plot device, a being whose power can be the solution or the cause of a campaign\'s central conflict.',
        },
        {
            category: 'Legend',
            title: 'The Nexus of Infinity',
            progression: 'Crusader 5 / Warblade 5 / Eternal Blade 10 / Chronomancer 10 / Legendary Leader 10',
            feats: 'Epic Leadership, and feats that enhance both its martial and temporal abilities.',
            skills: 'Diplomacy, Psicraft, Martial Lore',
            lore: 'This dragon has become a true master of all forms of order, both martial and temporal. It commands legions of echoes of itself from other timelines, a perfect, ordered army. It is a living law of the multiverse, a guardian of the proper flow of time against the forces of chaos.',
            tactics: 'A cosmic commander. It leads an army of temporal duplicates while personally engaging the enemy\'s most powerful champion. It can stop time to issue perfect orders, and its personal combat prowess is second to none. It fights not just to win, but to preserve the integrity of all timelines.',
        }
    ]
};