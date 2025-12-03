// data/sampleBuilds/pyroclasticDragon.ts
import { MonsterSampleBuilds } from '../../types';

export const pyroclasticDragonBuilds: MonsterSampleBuilds = {
    monsterName: "Pyroclastic Dragon, The Calamity's Charge",
    builds: [
        {
            category: 'Basic',
            title: 'The Ubercharger',
            progression: 'Fighter 40',
            feats: 'Power Attack, Improved Bull Rush, Shock Trooper, Leap Attack, Headlong Rush, and a host of epic feats to maximize Strength and charge damage.',
            skills: 'Jump, Intimidate',
            lore: 'This build leans into the Pyroclastic Dragon\'s core identity as a living battering ram. It focuses every single feat and ability into creating the most devastating charge attack possible.',
            tactics: 'A one-trick pony, but the trick is hitting with the force of a meteor. It uses Shock Trooper to shift its massive Power Attack penalty to its AC, then multiplies the damage with Leap Attack. The goal is to one-shot the most dangerous enemy on the field in the first round.',
        },
        {
            category: 'Beginner',
            title: 'The Frenzied Comet',
            progression: 'Fighter 10 / Barbarian 10 / Frenzied Berserker 10 / Epic Fighter 10',
            feats: 'Combines the core charger feats with rage-enhancing feats like Intimidating Rage and Destructive Rage.',
            skills: 'Intimidate, Jump',
            lore: 'The dragon\'s desperate search for a home has driven it into a state of near-constant fury. Its charges are not just powerful; they are fueled by an apocalyptic rage.',
            tactics: 'Combines the ubercharger strategy with the raw power of Frenzy. It enters a frenzy, charges, and unleashes a devastating blow. The frenzy makes it even stronger and immune to many status effects, though it may lose control.',
        },
        {
            category: 'Standard',
            title: 'The World-Smasher',
            progression: 'Fighter 20 / World-Smasher 10 / Epic Fighter 10',
            feats: 'Focuses on epic feats that enhance its physical power, such as Great Strength and Epic Toughness.',
            skills: 'Jump, Intimidate',
            lore: 'This dragon has become a true force of nature, its physical might reaching a geological scale. Its charge doesn\'t just kill; it shatters the very earth beneath its feet.',
            tactics: 'A dedicated siege engine and area-of-effect brute. Its \'Earthshaker Charge\' can create earthquakes, and its blows can sunder artifacts. It is a walking cataclysm.'
        },
        {
            category: 'Expert',
            title: 'The Wyrm of the Fiery Mountain',
            progression: 'Fighter 10 / Sorcerer 10 / Eldritch Knight 10 / Epic Eldritch Knight 10',
            feats: 'A mix of charger feats and metamagic feats like Quicken Spell.',
            skills: 'Spellcraft, Concentration, Jump',
            lore: 'This dragon learns to control its innate fiery nature, becoming a master of both physical and magical devastation. It is a fusion of a tactical nuke and a freight train.',
            tactics: 'A powerful "gish". It can use its Sorcerer spells for ranged attacks (like \'Fireball\') or to buff itself (\'Haste\', \'Greater Invisibility\'). It can cast a quickened spell and still make a full charge attack in the same round, making it incredibly versatile and deadly.'
        },
        {
            category: 'Legend',
            title: 'The Unstoppable Force',
            progression: 'Fighter 20 / World-Smasher 10 / God of Destruction 10 (Custom Epic PrC)',
            feats: 'Epic Spellcasting (to access custom epic spells of destruction) and divine feats.',
            skills: 'Intimidate, Jump',
            lore: 'The dragon has achieved apotheosis, becoming a primal god of destruction and kinetic energy. It is a living concept: the Unstoppable Force. Its charge is a law of physics. Nothing can stand in its way. If it were to charge an Immovable Object, a new universe would be born from the paradox. Its tragedy is that it may never find a home, for any place it tries to settle is inevitably shattered by the sheer force of its existence.',
            tactics: 'A plot device. Its \'Inevitable Charge\' cannot be stopped by any means. Its every blow has the potential to shatter continents. It is a being of immense, tragic power, whose every action carries the weight of a world\'s creation and destruction.'
        }
    ]
};
