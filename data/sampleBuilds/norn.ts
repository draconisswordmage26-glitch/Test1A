// data/sampleBuilds/norn.ts
import { MonsterSampleBuilds } from '../../types';

export const nornBuilds: MonsterSampleBuilds = {
    monsterName: "Norn, Weaver of Fate",
    builds: [
        {
            category: 'Basic',
            title: 'The Oracle',
            progression: 'Wizard (Diviner) 40',
            feats: 'Spell Focus (Divination), Greater Spell Focus (Divination), and epic feats enhancing spellcasting.',
            skills: 'Spellcraft, Knowledge (all), Concentration',
            lore: 'This build focuses on the Norn\'s innate ability to see the future, making her the ultimate master of divination magic. Her knowledge of what will be is her greatest weapon and defense.',
            tactics: 'A pure support and control caster. She uses her divination spells to gain perfect knowledge of her enemies\' weaknesses and plans. She then uses her other spells to exploit that knowledge, ending fights before they begin with a perfectly chosen save-or-lose spell.',
        },
        {
            category: 'Beginner',
            title: 'The Fatespinner',
            progression: 'Wizard 5 / Fatespinner 10 / Epic Wizard 25',
            feats: 'Iron Will and metamagic feats to enhance her spellcasting versatility.',
            skills: 'Spellcraft, Profession (Gambler), Sense Motive',
            lore: 'The Norn learns not just to see fate, but to manipulate it. She becomes a Fatespinner, a weaver of probability who can ensure success or failure with a subtle twist of destiny\'s threads.',
            tactics: 'A powerful controller. She uses her \'Spin Fate\' ability to alter crucial d20 rolls. Her \'Seal Fate\' ability can guarantee a failed save for an enemy or a critical hit for an ally, turning the tide of any battle.'
        },
        {
            category: 'Standard',
            title: 'The Loremaster',
            progression: 'Wizard 10 / Loremaster 10 / Epic Wizard 20',
            feats: 'Skill Focus (Knowledge), and a variety of metamagic and item creation feats.',
            skills: 'Knowledge (all), Spellcraft, Decipher Script',
            lore: 'The Norn\'s perception of time gives her access not just to the future, but to all the forgotten secrets of the past. She becomes a Loremaster, a living library of all knowledge.',
            tactics: 'The ultimate utility caster. Her \'Lore\' ability allows her to know the weakness of any creature. Her \'Secrets\' grant her bonus feats and spells, making her incredibly versatile. She wins fights by always having the perfect tool for the job.'
        },
        {
            category: 'Expert',
            title: 'The Fate-Ender',
            progression: 'Wizard 10 / Fatespinner 10 / Fate-Ender 10 / Epic Wizard 10',
            feats: 'Epic Will, and feats that enhance her control over fate.',
            skills: 'Sense Motive, Knowledge (The Planes), Spellcraft',
            lore: 'The Norn accepts her grim duty as not just a weaver, but an arbiter of fate. She becomes a Fate-Ender, a being with the power to cut the threads of beings who threaten the fabric of causality.',
            tactics: 'A conceptual warrior. Her \'Cut the Thread\' ability can erase a creature from existence. This is her final solution for world-ending threats. She fights by rewriting the rules of the encounter, her power over fate making her nearly unbeatable.'
        },
        {
            category: 'Legend',
            title: 'The Final Moment',
            progression: 'Wizard 10 / Fatespinner 10 / Fate-Ender 10 / God of Causality 10 (Custom Epic PrC)',
            feats: 'Epic Spellcasting (Rewrite History), and feats that grant divine immunities.',
            skills: 'Knowledge (all), Spellcraft, Sense Motive',
            lore: 'The Norn transcends her role as a mere observer or enforcer of fate and becomes causality itself. She is the Final Moment, a god of time and destiny whose every thought is a law of the multiverse.',
            tactics: 'A plot device. Her \'Unravel Reality\' is a world-altering power. She should be played as a detached, melancholy guardian of the timeline, whose interventions are rare but absolute. She doesn\'t fight battles; she determines their outcomes before they even begin.',
        }
    ]
};
