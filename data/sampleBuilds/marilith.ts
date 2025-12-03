// data/sampleBuilds/marilith.ts
import { MonsterSampleBuilds } from '../../types';

export const marilithBuilds: MonsterSampleBuilds = {
    monsterName: "Marilith, Blade of the Abyss",
    builds: [
        {
            category: 'Basic',
            title: 'The Abyssal Warlord',
            progression: 'Warblade 40',
            feats: 'Multiweapon Fighting series, Power Attack, and epic feats to enhance melee damage and number of attacks.',
            skills: 'Intimidate, Tumble, Martial Lore',
            lore: 'This build perfects the Marilith\'s natural talent for multi-weapon combat. She becomes a living whirlwind of steel, a peerless duelist and a terrifying general of demonic armies.',
            tactics: 'A pure damage dealer. Teleports into the middle of the enemy and uses a full attack to annihilate them. Maneuvers from Iron Heart and Diamond Mind provide defensive options, but her primary tactic is overwhelming offense.',
        },
        {
            category: 'Beginner',
            title: 'The Six-Armed Sorceress',
            progression: 'Sorcerer 40',
            feats: 'Combat Casting, Spell Penetration, and metamagic feats like Quicken Spell and Empower Spell.',
            skills: 'Spellcraft, Concentration, Use Magic Device',
            lore: 'Forsaking the blade for pure magical power, this Marilith becomes a master of arcane devastation. Her six arms allow her to use multiple wands and staves at once, making her a terrifying magical artillery platform.',
            tactics: 'A powerful blaster-caster. She uses her at-will Teleport to maintain distance, bombarding foes with spells. She can hold a staff in each of her six hands, giving her a massive number of spell charges to burn through.',
        },
        {
            category: 'Standard',
            title: 'The Unstoppable Whirlwind',
            progression: 'Warblade 20 / Unstoppable Whirlwind 10 / Epic Warblade 10',
            feats: 'Perfect Multiweapon Fighting, Bounding Assault, and feats that enhance mobility.',
            skills: 'Tumble, Jump, Balance',
            lore: 'This Marilith becomes a true storm of destruction. The Unstoppable Whirlwind prestige class allows her to move and make a full attack, turning her from a static damage dealer into a mobile engine of slaughter.',
            tactics: 'The ultimate mobile melee threat. She can move across the battlefield, unleashing her 30+ attacks per round on any target she can reach. She is a one-woman army, capable of carving a path through an entire legion.',
        },
        {
            category: 'Expert',
            title: 'The Blade-Dancer of the Abyss',
            progression: 'Warblade 20 / Bard 10 / Eldritch Knight 10',
            feats: 'Melodic Casting, Combat Casting, and feats that blend spellcasting and melee.',
            skills: 'Perform (Dance), Tumble, Spellcraft',
            lore: 'This Marilith sees combat not as war, but as a deadly art form. She becomes a Bard, her movements a mesmerizing dance, her songs weaving buffs and debuffs as her six blades sing a song of death.',
            tactics: 'A true "gish". She uses her Bardic music to buff herself and her allies, then teleports into combat. Melodic Casting allows her to cast spells while fighting, making her a whirlwind of both steel and magic.',
        },
        {
            category: 'Legend',
            title: 'The Architect of the Blade',
            progression: 'Warblade 20 / Psion (Shaper) 10 / Slayer 10',
            feats: 'Psionic Body, Boost Construct, and feats that enhance her psionic creations.',
            skills: 'Psicraft, Concentration, Martial Lore',
            lore: 'This Marilith transcends physical weapons, learning to forge blades from pure thought. She becomes a Shaper, her six arms wielding swords of solidified psionic energy, each with unique, custom-made properties.',
            tactics: 'A psionic warrior. She creates an arsenal of psychic weapons, each with different abilities (a blade that drains Willpower, a sword that bypasses armor, etc.). She can also create Astral Constructs to fight alongside her, making her a versatile and unpredictable commander.',
        }
    ]
};
