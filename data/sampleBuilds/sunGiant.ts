// data/sampleBuilds/sunGiant.ts
import { MonsterSampleBuilds } from '../../types';

export const sunGiantBuilds: MonsterSampleBuilds = {
    monsterName: "Sun Giant, Marshal of the Shining Host",
    builds: [
        {
            category: 'Basic',
            title: 'The Shining General',
            progression: 'Marshal 40',
            feats: 'Point Blank Shot, Rapid Shot, Manyshot, and epic feats enhancing archery and leadership.',
            skills: 'Diplomacy, Intimidate, Sense Motive',
            lore: 'This build focuses on the Sun Giant\'s natural talent for leadership. He becomes the ultimate commander, his auras capable of turning a militia into a legion of heroes.',
            tactics: 'A pure support and ranged damage character. He stays in the back, using his powerful longbow to pick off key targets while his auras provide massive buffs to his allies. His \'Grant Move Action\' can be a game-changer for positioning.'
        },
        {
            category: 'Beginner',
            title: 'The Divine Commander',
            progression: 'Marshal 20 / Cleric 10 / Pious Templar 10',
            feats: 'Divine Metamagic, Power Attack, and feats that blend divine power with his command abilities.',
            skills: 'Diplomacy, Knowledge (Religion), Concentration',
            lore: 'The Sun Giant embraces a deeper faith, becoming a war-priest and a general. His commands are now backed by divine authority, his presence on the battlefield a miracle in itself.',
            tactics: 'A powerful "gish" commander. He can use persisted Cleric buffs to enhance his own combat prowess, then lead the charge. His Marshal auras stack with his Cleric spells, making his army incredibly powerful.',
        },
        {
            category: 'Standard',
            title: 'The Legendary Leader',
            progression: 'Marshal 20 / Legendary Leader 10 / Epic Marshal 10',
            feats: 'Epic Leadership, Legendary Commander, and feats that make his auras continental in scope.',
            skills: 'Diplomacy, Intimidate',
            lore: 'The Sun Giant\'s fame spreads across the planes. He becomes a Legendary Leader, a king whose command can sway the course of cosmic wars. His kingdom is a beacon of order and light.',
            tactics: 'A strategic-level commander. His auras can affect an entire battlefield, and his \'Coordinate Army\' ability can grant his epic feats to thousands of soldiers at once. He rarely fights personally, as his presence as a commander is far more valuable.'
        },
        {
            category: 'Expert',
            title: 'The Dragon Rider',
            progression: 'Marshal 20 / Dragon Rider 10 / Epic Marshal 10',
            feats: 'Mounted Combat, Spirited Charge, and feats from the Dragon Rider prestige class.',
            skills: 'Handle Animal, Ride, Diplomacy',
            lore: 'This Sun Giant forges a bond with a mighty Gold Dragon, becoming one of the legendary Dragon Riders. Together, they are an unstoppable force for good, a symbol of the perfect alliance between giant-kin and dragon-kind.',
            tactics: 'An incredibly mobile and powerful cavalry commander. He uses his dragon mount for superior aerial positioning, raining down arrows while his dragon unleashes its breath weapon. His Marshal auras affect both his mount and his allies on the ground.'
        },
        {
            category: 'Legend',
            title: 'The Emperor of the Sun',
            progression: 'Marshal 20 / Legendary Leader 10 / God-King 10 (Custom Epic PrC)',
            feats: 'Epic Spellcasting (to gain access to epic leadership spells) and divine feats.',
            skills: 'Diplomacy, Intimidate',
            lore: 'The Sun Giant achieves apotheosis, becoming a demigod of leadership, strategy, and the sun. He is an immortal emperor, his kingdom a bastion of order that will last for millennia.',
            tactics: 'A plot device. His \'Aura of Absolute Command\' can end a battle by turning his enemies into loyal followers. He is a being of supreme authority, an encounter with whom is more of a diplomatic summit than a fight.'
        }
    ]
};
