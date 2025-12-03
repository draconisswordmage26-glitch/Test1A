// data/soulmelds/brow.ts
import { Soulmeld } from '../../types';

export const browSoulmelds: Soulmeld[] = [
  {
    name: "Gaze of the All-Seer",
    levelReq: 34,
    essentia: "For every point of essentia invested, you gain a +2 insight bonus on initiative checks.",
    description: "Your eyes glow with cosmic light. You gain a constant Foresight effect, making you immune to being surprised or flat-footed.",
    category: "Brow",
    chakraBind: [{
      chakra: "Brow",
      description: "You are constantly under the effects of a Moment of Prescience spell, which refreshes every round. Once per round, as an immediate action, you can add your character level as an insight bonus to any single d20 roll you make.",
    }],
  },
  {
    name: "Third Eye of the Chronovore",
    levelReq: 30,
    essentia: "For every point of essentia invested, you gain a +1 insight bonus on initiative checks.",
    description: "A third eye of swirling, temporal energy opens on your forehead. You gain the benefit of the Improved Initiative feat and are constantly under the effect of a 'Haste' spell.",
    category: "Brow",
    chakraBind: [{
      chakra: "Brow",
      description: "You can see a few seconds into the future. Once per round, you can force an enemy to reroll any single d20 roll they have just made. You choose which of the two rolls is used.",
    }],
  },
  {
    name: "Circlet of the Legion",
    levelReq: 26,
    essentia: "For every point of essentia invested, your summoned creatures gain a +1 morale bonus on attack and damage rolls.",
    description: "This simple iron circlet marks you as a commander. You gain the benefit of the Leadership feat, and your Leadership score is treated as 4 points higher than it is.",
    category: "Brow",
    chakraBind: [{
      chakra: "Brow",
      description: "You can create a telepathic link with all of your allies and followers within 1 mile, allowing for instantaneous, silent communication. Once per day, you can grant all allies in this network the benefit of one of your teamwork feats for 10 minutes.",
    }],
  },
  {
    name: "Browband of the Mind-Eater",
    levelReq: 32,
    essentia: "For every point of essentia invested, the DC of your mind-affecting abilities increases by 1.",
    description: "A circlet of glistening, organic-looking material wraps around your head. You gain a gaze attack that deals 2d6 Intelligence damage to any creature you look at within 30 feet (Will save negates, DC 20 + Cha mod).",
    category: "Brow",
    chakraBind: [{
      chakra: "Brow",
      description: "Your gaze attack now deals 1d4 points of Intelligence drain instead of damage. Any creature whose Intelligence is drained to 0 by this attack becomes a mindless thrall under your permanent control.",
    }],
  },
  {
    name: "Headband of the Raging Beast",
    levelReq: 24,
    essentia: "For every point of essentia invested, you gain a +1 bonus on Will saves to resist fear.",
    description: "This leather headband is adorned with the teeth of ferocious predators. Once per day, you can enter a barbarian rage, even if you are not a barbarian. If you are a barbarian, you gain two additional daily uses of your rage.",
    category: "Brow",
    chakraBind: [{
      chakra: "Brow",
      description: "You can enter a Frenzy, as the Frenzied Berserker prestige class ability. You are not required to attack your allies, but you still take the AC penalty and cannot end the frenzy voluntarily.",
    }],
  },
  {
    name: "Gem of the True Form",
    levelReq: 28,
    essentia: "For every point of essentia invested, you gain a +2 bonus on Disguise checks.",
    description: "A single, clear gem rests on your forehead. You gain a constant 'True Seeing' effect.",
    category: "Brow",
    chakraBind: [{
      chakra: "Brow",
      description: "You are immune to all illusion spells and effects. As a standard action, you can emit a 120-foot cone of truth that functions as a targeted 'Greater Dispel Magic' against all illusions it touches.",
    }],
  },
  {
    name: "Eye of the Storm Lord",
    levelReq: 27,
    essentia: "For every point of essentia invested, your electricity resistance increases by 5.",
    description: "Your eyes crackle with stored lightning. You gain electricity resistance 20 and can cast 'Call Lightning' as a spell-like ability 3 times per day.",
    category: "Brow",
    chakraBind: [{
      chakra: "Brow",
      description: "You are immune to electricity. Once per day, you can cast 'Storm of Vengeance' as a spell-like ability.",
    }],
  },
  {
    name: "Diadem of the Spell-Thief",
    levelReq: 33,
    essentia: "For every point of essentia invested, you gain a +1 bonus on caster level checks to counterspell.",
    description: "This silver diadem is etched with broken arcane symbols. You gain the benefit of the Improved Counterspell feat.",
    category: "Brow",
    chakraBind: [{
      chakra: "Brow",
      description: "When you successfully counterspell a spell, you can 'steal' it. You can cast that spell on your next turn as a spell-like ability, using your own caster level. The spell does not need to be on your spell list.",
    }],
  },
];
