// data/sampleBuilds/cornugon.ts
import { MonsterSampleBuilds } from '../../types';

export const cornugonBuilds: MonsterSampleBuilds = {
    monsterName: "Cornugon, The Veteran of the Spiked Chain",
    builds: [
        {
            category: 'Basic',
            title: 'The Iron Disciplinarian',
            progression: 'Warblade 40',
            feats: 'Exotic Weapon Proficiency (Spiked Chain), Combat Reflexes, Power Attack, and epic feats to enhance melee combat.',
            skills: 'Intimidate, Tumble, Balance',
            lore: 'This build perfects the Cornugon\'s innate mastery of martial combat. It is the ultimate soldier, a being of pure discipline and skill who has honed its use of the spiked chain into a deadly art form.',
            tactics: 'A battlefield controller. Uses its 20-foot reach and Combat Reflexes to create a zone of death around it. Maneuvers from Iron Heart and Diamond Mind make it incredibly resilient and precise. Its goal is to lock down the battlefield and methodically dismantle its foes.',
        },
        {
            category: 'Beginner',
            title: 'The Hellfire Knight',
            progression: 'Warblade 20 / Knight 10 / Hellfire Warlock 10',
            feats: 'Focuses on feats that enhance its Hellfire Blast and Knight\'s Challenge abilities.',
            skills: 'Intimidate, Diplomacy, Use Magic Device',
            lore: 'Seeking more power to enforce its vision of order, this Cornugon forges a pact for hellfire. It combines the ranged power of a warlock with the battlefield command of a Knight, all built on a solid Warblade foundation.',
            tactics: 'A versatile leader and damage dealer. It uses its Knight\'s Challenge to force enemies to engage it, then blasts them with Hellfire or locks them down with its spiked chain. It can switch between ranged and melee roles as needed.',
        },

        {
            category: 'Standard',
            title: 'The Adamantine Hurricane',
            progression: 'Warblade 20 / Adamantine Hurricane 10 / Epic Warblade 10',
            feats: 'Whirlwind Attack and epic feats that enhance mobility and multi-target attacks.',
            skills: 'Tumble, Jump, Balance',
            lore: 'This Cornugon has taken its mastery of the spiked chain to its logical conclusion, becoming a living whirlwind of steel. It is no longer a static controller, but a mobile storm of destruction.',
            tactics: 'A mobile area-of-effect monster. Its \'Roving Whirlwind\' ability, combined with its 20-foot reach, allows it to attack every enemy in a massive area while moving across the battlefield. It is a perfect answer to large groups of enemies.'
        },
        {
            category: 'Expert',
            title: 'The Lord of the Nine',
            progression: 'Warblade 10 / Marshal 10 / Lord of the Nine 10 / Legendary Leader 10',
            feats: 'Epic Leadership, Legendary Commander, and feats that enhance its auras and command abilities.',
            skills: 'Diplomacy, Intimidate, Sense Motive',
            lore: 'This Cornugon\'s ambition has led it to the pinnacle of Hell\'s hierarchy. It has transcended the role of a mere soldier to become an Archduke, a true Lord of the Nine. Its power is now political and strategic as much as it is martial.',
            tactics: 'A supreme commander. It leads a legion of devils, using its Marshal and Legendary Leader auras to make them an unstoppable force. It rarely fights personally, preferring to use its diabolical edicts and epic spells to control the battlefield from the rear.'
        },
        {
            category: 'Legend',
            title: 'The Unbreakable Law',
            progression: 'Warblade 20 / Iron Disciplinarian 10 (Custom PrC) / Lawgiver 10 (Custom Epic PrC)',
            feats: 'Focuses on epic counter-maneuvers and abilities that enforce order.',
            skills: 'Sense Motive, Concentration, Intimidate',
            lore: 'This Cornugon has become something more than a devil. It is the living embodiment of martial law, a being whose every move is a perfect expression of unyielding order. It seeks to end the Blood War not through victory, but by imposing a final, unbreakable peace upon both sides.',
            tactics: 'The ultimate anti-chaos warrior. Its abilities are designed to counter the unpredictable nature of demons. It can create zones of absolute order where dice rolls are no longer random, and its strikes can force enemies to obey its commands. It is a conceptual warrior, fighting chaos itself.',
        }
    ]
};
