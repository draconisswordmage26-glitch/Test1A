// data/sampleBuilds/aelder.ts
import { MonsterSampleBuilds } from '../../types';

export const aelderBuilds: MonsterSampleBuilds = {
    monsterName: "Aelder, The Inscrutable Seeker",
    builds: [
        {
            category: 'Basic',
            title: 'The Psionic Savant',
            progression: 'Psion (Shaper) 40',
            feats: 'Psionic Body, Power Penetration, Boost Construct, and epic feats that enhance manifesting and shaping.',
            skills: 'Psicraft, Concentration, Knowledge (Psionics)',
            lore: 'This build focuses on the Aelder\'s core identity as a master of shaping ectoplasm. It perfects its art, learning to create ever more powerful astral constructs and eventually shaping reality itself.',
            tactics: 'A classic "summoner". The Aelder stays in the back, protected by defensive powers, while its powerful Astral Constructs do the fighting. It uses its other powers for battlefield control, creating walls and traps of ectoplasm.',
        },
        {
            category: 'Beginner',
            title: 'The Telepathic Emissary',
            progression: 'Psion (Telepath) 40',
            feats: 'Greater Psionic Endowment, Power Penetration, and feats that increase the save DCs of its mind-affecting powers.',
            skills: 'Bluff, Diplomacy, Sense Motive, Psicraft',
            lore: 'Seeking to better understand this new reality, the Aelder focuses its studies on the minds of its inhabitants. It becomes a master telepath, its goal to communicate and learn, using its powers to soothe rather than harm.',
            tactics: 'A powerful controller. It uses powers like Dominate and Mind Seed to turn enemies into allies. It avoids direct damage, preferring to end fights by winning the hearts and minds of its opponents.',
        },
        {
            category: 'Standard',
            title: 'The Cerebremancer',
            progression: 'Psion (Shaper) 20 / Wizard 10 / Cerebremancer 10',
            feats: 'Focuses on feats that enhance both arcane and psionic power, such as Epic Spellcasting and Epic Psionic Focus.',
            skills: 'Spellcraft, Psicraft, Knowledge (Arcana), Concentration',
            lore: 'In its quest for knowledge, the Aelder discovers arcane magic and sees it as another fascinating system of reality-shaping. It dedicates itself to mastering both, becoming a powerful Cerebremancer.',
            tactics: 'A versatile spellcaster. It can combine arcane buffs with psionic summons, or use psionic debuffs to set up a powerful arcane spell. The ability to use both systems makes it incredibly unpredictable.',
        },
        {
            category: 'Expert',
            title: 'The Thrallherd',
            progression: 'Psion (Telepath) 20 / Thrallherd 10 / Mind-Bender 10',
            feats: 'Epic Leadership and feats that enhance its mind-control abilities.',
            skills: 'Diplomacy, Intimidate, Bluff',
            lore: 'The Aelder\'s attempts to understand mortals lead it down a darker path. It begins to "collect" followers, creating a cult of personality around itself. It sees this not as tyranny, but as a more efficient way to conduct its research.',
            tactics: 'A master of minions. It enters combat with a retinue of powerful thralls and believers. It stays in the back, using its telepathy to direct its army and disable any threats that get past its front line.',
        },
        {
            category: 'Legend',
            title: 'The Genesis Avatar',
            progression: 'Psion (Shaper) 20 / Genesis Avatar 10 / Epic Psion 10',
            feats: 'Epic Psionic Focus, Epic Power Penetration, and feats for creating and controlling its own demiplane.',
            skills: 'Psicraft, Knowledge (The Planes), Concentration',
            lore: 'Having learned all it can from this reality, the Aelder decides to create its own. As a Genesis Avatar, it forges a personal demiplane, a perfect, stable fusion of its home reality and this new one. It becomes a god in its own small universe.',
            tactics: 'A true reality warper. It fights on its home turf, its own demiplane where it controls the laws of physics. It can use its \'Impose Planar Trait\' ability to turn the battlefield into a bizarre, alien landscape that cripples its foes. It is a god fighting in its own divine domain.'
        }
    ]
};
