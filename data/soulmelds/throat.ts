// data/soulmelds/throat.ts
import { Soulmeld } from '../../types';

export const throatSoulmelds: Soulmeld[] = [
  {
    name: "Vestments of the Ebon Speaker",
    levelReq: 28,
    essentia: "For every point of essentia invested, the HD of undead you create or command increases by 2.",
    description: "You are clad in robes of pure shadow that whisper with the voices of the damned. You gain a +10 profane bonus on all turning/rebuking checks, and the save DC of your necromancy spells increases by 2.",
    category: "Throat",
    chakraBind: [{
      chakra: "Throat",
      description: "You can cast 'Command Undead' as a spell-like ability at will. Once per day, you can cast the epic spell 'Mass Animate Dead'.",
    }],
  },
  {
    name: "Gorget of the Silver Tongue",
    levelReq: 22,
    essentia: "For every point of essentia invested, you gain a +2 bonus on Diplomacy and Bluff checks.",
    description: "This ornate silver gorget enhances the power and persuasiveness of your voice. You gain a +5 competence bonus on all Charisma-based skill checks.",
    category: "Throat",
    chakraBind: [{
      chakra: "Throat",
      description: "You can use 'Suggestion' as a spell-like ability at will. Your language-dependent spells and effects can now affect creatures that do not understand your language.",
    }],
  },
  {
    name: "Amulet of the Spell-Eater",
    levelReq: 35,
    essentia: "For every point of essentia invested, you gain a +1 bonus on your dispel check when using this soulmeld's ability.",
    description: "An amulet of shifting, iridescent metal hangs at your throat. As an immediate action, you can attempt to counter a spell targeted at you by making a dispel check (1d20 + your character level).",
    category: "Throat",
    chakraBind: [{
      chakra: "Throat",
      description: "When you successfully counter a spell with this soulmeld, you absorb its energy. You are healed for 5 hit points per level of the spell, and you gain the spell's energy type as a bonus on your damage rolls for 1 round.",
    }],
  },
  {
    name: "Necklace of the Raging Inferno",
    levelReq: 27,
    essentia: "For every point of essentia invested, the damage of your breath weapon increases by 1d6.",
    description: "This necklace of glowing embers makes your throat feel hot. You gain a breath weapon: a 30-foot cone of fire that deals 8d6 fire damage (Reflex save for half, DC 15 + Con mod). Usable every 1d4 rounds.",
    category: "Throat",
    chakraBind: [{
      chakra: "Throat",
      description: "Your breath weapon's damage increases to 15d6, and the cone extends to 60 feet. You are immune to fire damage.",
    }],
  },
  {
    name: "Medallion of the Unseen Legion",
    levelReq: 25,
    essentia: "For every point of essentia invested, your summoned creatures gain a +1 morale bonus to their AC.",
    description: "This medallion is engraved with the sigil of a forgotten army. Any creature you summon with a Conjuration (summoning) spell gains the benefits of an 'Invisibility' spell.",
    category: "Throat",
    chakraBind: [{
      chakra: "Throat",
      description: "Your summoned creatures gain the benefits of 'Greater Invisibility' instead. You can communicate with them telepathically.",
    }],
  },
  {
    name: "Brooch of the Truespeaker",
    levelReq: 29,
    essentia: "For every point of essentia invested, the save DC of your words of creation increases by 1.",
    description: "This intricate brooch allows you to speak the language of creation. You gain a +5 bonus on Truespeak checks, and you know three additional utterances.",
    category: "Throat",
    chakraBind: [{
      chakra: "Throat",
      description: "You can utter two utterances as a single standard action. Once per day, you can utter a word of creation so powerful it functions as a 'Wish' spell.",
    }],
  },
  {
    name: "Talisman of the Void's Silence",
    levelReq: 31,
    essentia: "For every point of essentia invested, the radius of your silence aura increases by 5 feet.",
    description: "A piece of solidified silence hangs from your neck. You radiate an aura of 'Silence' in a 10-foot radius that moves with you and does not affect you.",
    category: "Throat",
    chakraBind: [{
      chakra: "Throat",
      description: "Your silence aura is now absolute. It negates all sound, including sonic damage and language-dependent effects, with no saving throw. You can extend its radius to up to 100 feet as a free action.",
    }],
  },
];
