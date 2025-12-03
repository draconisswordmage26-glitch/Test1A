// data/sampleBuilds/titan.ts
import { MonsterSampleBuilds } from '../../types';

export const titanBuilds: MonsterSampleBuilds = {
    monsterName: "Titan, The Unchained",
    builds: [
        {
            category: 'Basic',
            title: 'The Primal Storm',
            progression: 'Barbarian 40',
            feats: 'Power Attack, Awesome Blow, Intimidating Rage, and epic feats to maximize Strength and rage.',
            skills: 'Intimidate, Jump, Survival',
            lore: 'This build focuses on the Titan\'s raw, untamed power. Its rage is the fury of the storm, its blows the impact of meteors. It is a pure force of nature, its quest for vengeance a roaring tempest.',
            tactics: 'A straightforward but devastating brute. Rage, charge, and use Power Attack to obliterate the biggest threat. Its spell-like abilities like \'Chain Lightning\' and \'Fire Storm\' are used to soften up targets before it closes for the kill.'
        },
        {
            category: 'Beginner',
            title: 'The Frenzied World-Breaker',
            progression: 'Barbarian 10 / Frenzied Berserker 10 / Epic Barbarian 20',
            feats: 'Focuses on feats that enhance its Frenzy, such as Destructive Rage and Supreme Cleave.',
            skills: 'Intimidate, Jump',
            lore: 'The Titan\'s rage becomes an uncontrollable frenzy, a burning madness that consumes all in its path. It is a being of pure, mindless destruction, its sorrow turned to an apocalyptic fury.',
            tactics: 'A high-risk, high-reward powerhouse. It enters a frenzy and attacks the nearest creature until everything is dead. Its damage output is astronomical, but its lack of control makes it a danger to everyone on the battlefield.',
        },
        {
            category: 'Standard',
            title: 'The God-Slayer',
            progression: 'Barbarian 10 / Fighter 10 / Ranger 10 / Epic Fighter 10',
            feats: 'Favored Enemy (Outsiders), and a host of feats for sundering and destroying divine artifacts.',
            skills: 'Survival, Knowledge (Religion), Intimidate',
            lore: 'The Titan\'s rage becomes a focused, cold hatred for the gods. It becomes a dedicated hunter, a God-Slayer who uses its knowledge of the divine to dismantle its creators.',
            tactics: 'A strategic hunter. It uses its Ranger abilities to track its divine foes and its Fighter feats to master the art of killing them. Its Favored Enemy bonus makes it incredibly accurate and damaging against celestials and fiends.'
        },
        {
            category: 'Expert',
            title: 'The World-Smasher',
            progression: 'Barbarian 10 / World-Smasher 10 / Epic Barbarian 20',
            feats: 'Epic feats that enhance its physical power to a geological scale.',
            skills: 'Intimidate, Jump',
            lore: 'The Titan\'s physical power becomes a force that can reshape the world. Its blows shatter mountains, its rage causes earthquakes. It is no longer just a warrior; it is a walking cataclysm.',
            tactics: 'A dedicated siege engine and area-of-effect brute. Its \'Earthshaker\' ability can destroy entire battlefields. Its charge can break down castle walls. The Dire Charge feat makes it a mobile engine of destruction, able to full attack at the end of a charge.'
        },
        {
            category: 'Legend',
            title: 'The Last Titan',
            progression: 'Barbarian 10 / World-Smasher 10 / God of Rage 20 (Custom Epic PrC)',
            feats: 'Epic Spellcasting (to access custom epic spells of destruction) and divine feats.',
            skills: 'Intimidate, Knowledge (The Planes)',
            lore: 'The Titan has achieved its revenge, shattering the thrones of the gods and taking its place as a primal force of the multiverse. Its rage is now a creative and destructive force, the power that grinds mountains to dust and forges new stars from the debris.',
            tactics: 'A plot device. Its \'Star-Shattering Blow\' can one-shot almost any non-deity. It is a being of immense, tragic power, whose every action carries the weight of a world\'s creation and destruction.'
        }
    ]
};
