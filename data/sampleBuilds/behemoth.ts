// data/sampleBuilds/behemoth.ts
import { MonsterSampleBuilds } from '../../types';

export const behemothBuilds: MonsterSampleBuilds = {
    monsterName: "Lonesome Behemoth",
    builds: [
        {
            category: 'Basic',
            title: 'The Primal Juggernaut',
            progression: 'Barbarian 40',
            feats: 'Power Attack, Awesome Blow, Intimidating Rage, and a host of epic feats to maximize Strength and rage effectiveness.',
            skills: 'Intimidate, Jump, Survival',
            lore: 'Embracing its nature as a creature of pure physical power, this build turns the Behemoth into the ultimate engine of destruction. It is a walking mountain of muscle and rage, its grief expressed through world-shaking fury.',
            tactics: 'Simple and brutally effective. Rage, charge, and Power Attack the biggest thing on the battlefield. Use Awesome Blow to knock enemies into hazardous terrain or off cliffs. It is a straightforward but nearly unstoppable force of nature.',
        },
        {
            category: 'Beginner',
            title: 'The World-Smasher',
            progression: 'Barbarian 20 / Fighter 10 / World-Smasher 10',
            feats: 'Power Attack, Improved Sunder, and feats that enhance its ability to destroy objects and structures.',
            skills: 'Intimidate, Jump',
            lore: 'This Behemoth\'s grief has turned to a focused rage against the creations of mortals. It seeks to shatter the cities and fortresses of the world, to return everything to the primal wilderness it remembers.',
            tactics: 'A dedicated siege engine. It uses its World-Smasher abilities to create earthquakes and sunder artifacts. Its charge can break down castle walls. Against creatures, it remains a devastating physical threat.',
        },
        {
            category: 'Standard',
            title: 'The Frenzied Apocalypse',
            progression: 'Barbarian 20 / Frenzied Berserker 10 / Epic Barbarian 10',
            feats: 'Focuses on feats that enhance its Frenzy, such as Destructive Rage and Supreme Cleave.',
            skills: 'Intimidate, Jump',
            lore: 'Its grief has driven it mad. The Behemoth can now enter a frenzy so profound that it cannot distinguish friend from foe, a true whirlwind of mindless destruction.',
            tactics: 'A high-risk, high-reward build. It enters a frenzy and attacks the nearest creature until everything is dead. Its damage output is astronomical, but its lack of control makes it a danger to everyone on the battlefield, including its own allies (if any).',
        },
        {
            category: 'Expert',
            title: 'The Guardian of the Wilds',
            progression: 'Barbarian 10 / Ranger 10 / Deepwarden 10 / Epic Ranger 10',
            feats: 'Feats that enhance its connection to nature and its role as a guardian, such as Track and various Favored Enemy selections (targeting Aberrations, Undead, etc.).',
            skills: 'Survival, Knowledge (Nature), Listen, Spot',
            lore: 'This Behemoth has found a new purpose. Instead of grieving for what was lost, it has become the fierce protector of what remains. It is the guardian of the last pristine wildernesses, a primal force of nature that stands against corruption.',
            tactics: 'A more strategic combatant. It uses its Ranger abilities to track its foes and set ambushes. Its Favored Enemy bonuses make it incredibly effective against specific threats. It is still a physical powerhouse, but its rage is now tempered with a hunter\'s cunning.',
        },
        {
            category: 'Legend',
            title: 'The Primal God',
            progression: 'Barbarian 10 / Warshaper 5 / All-Beast 10 / God of the Wild 15 (Custom Epic PrC)',
            feats: 'Epic Spellcasting (to gain Druid spells), Natural Spell, and feats that enhance its shapeshifting.',
            skills: 'Knowledge (Nature), Spellcraft, Survival',
            lore: 'The Behemoth has transcended its physical form. Through its grief, it has touched the primal soul of the world, becoming a true nature god. It can assume the form of any creature, command the elements, and its rage is the fury of the storm and the earthquake.',
            tactics: 'A divine shapeshifter. It can assume the form of a dragon to gain flight and a breath weapon, then switch to a hydra for multiple attacks. It can cast epic Druid spells to reshape the battlefield. It is no longer just a monster; it is a force of nature with a god\'s intellect and power.',
        }
    ]
};
