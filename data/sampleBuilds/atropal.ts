// data/sampleBuilds/atropal.ts
import { MonsterSampleBuilds } from '../../types';

export const atropalBuilds: MonsterSampleBuilds = {
    monsterName: "Atropal, The Stillborn God",
    builds: [
        {
            category: 'Basic',
            title: 'The Death-Priest',
            progression: 'Cleric 40',
            feats: 'Divine Metamagic (Persist), Extra Turning, Power Attack, and epic feats to enhance spellcasting and necromancy.',
            skills: 'Knowledge (Religion), Spellcraft, Concentration',
            lore: 'This build leans into the Atropal\'s divine heritage, making it a supreme master of divine magic. As a grim warden of the natural order, it uses its power to command the undead and bring final rest to those who defy death.',
            tactics: 'A classic "DMM Persist" Cleric. Starts each day with 24-hour buffs like Divine Power and Righteous Might. In combat, it uses its Aura of Death to weaken foes, then destroys them with quickened spells and powerful melee touch attacks.',
        },
        {
            category: 'Beginner',
            title: 'The Soul Warden',
            progression: 'Cleric 10 / Pious Templar 10 / Cleric +20',
            feats: 'Power Attack, Cleave, Divine Might, and feats to enhance its smiting and melee capabilities.',
            skills: 'Intimidate, Knowledge (Religion), Concentration',
            lore: 'Embracing a more martial path, the Atropal becomes a holy (or unholy) warrior. It is a grim champion who enforces the sanctity of death with its own terrifying power.',
            tactics: 'A powerful "gish" build. It uses its persisted Cleric buffs to become a full-BAB combatant, then uses its Pious Templar abilities like Smite to deal massive damage in melee. Its spellcasting is used for support and debuffing.',
        },
        {
            category: 'Standard',
            title: 'The True Necromancer',
            progression: 'Cleric 10 / True Necromancer 10 / Epic Cleric 20',
            feats: 'Spell Focus (Necromancy), Corpsecrafter series, and epic feats that enhance control over undead.',
            skills: 'Knowledge (Religion), Spellcraft',
            lore: 'The Atropal fully embraces its connection to undeath, becoming the ultimate master of necromancy. It commands legions of the dead, its goal to impose the perfect, silent order of the grave upon the chaotic world of the living.',
            tactics: 'A master summoner. It enters battle with an army of powerful, buffed undead. Its \'Touch of the Grave\' bestows negative levels, and its necromantic spells have impossibly high save DCs. It lets its minions do the fighting while it controls the battlefield from afar.'
        },
        {
            category: 'Expert',
            title: 'The Void-Touched',
            progression: 'Cleric 10 / Alienist 10 / Epic Cleric 20',
            feats: 'Augment Summoning and feats that enhance its otherworldly summons and abilities.',
            skills: 'Knowledge (The Planes), Knowledge (Religion)',
            lore: 'Seeking answers about its own paradoxical nature, the Atropal looks beyond the gods to the alien entities of the Far Realm. It becomes an Alienist, summoning pseudonatural creatures and gaining bizarre, reality-bending powers.',
            tactics: 'A summoner with a twist. Its summoned creatures are incredibly tough and have strange abilities. It gains alien immunities and powers that make it unpredictable. It fights by overwhelming its foes with creatures that should not exist.'
        },
        {
            category: 'Legend',
            title: 'The God of the Final Rest',
            progression: 'Cleric 10 / True Necromancer 10 / Divine Agent 10 / Epic Cleric 10',
            feats: 'Epic Spellcasting, Great Charisma, and feats that enhance its divine and necromantic power.',
            skills: 'Diplomacy, Knowledge (Religion), Intimidate',
            lore: 'The Atropal achieves apotheosis, becoming a demigod of death, the grave, and the sanctity of the soul\'s final journey. It is no longer a tragic monster, but a grim, necessary deity who ensures that all things come to their proper end.',
            tactics: 'A divine plot device. Its \'Hand of the Deity\' can slay with a touch. Its epic spells can raise entire cities as undead armies. It should be played as a true god, its actions shaping the fate of the campaign world as it wages a cosmic war against those who would pervert the cycle of life and death.'
        }
    ]
};
