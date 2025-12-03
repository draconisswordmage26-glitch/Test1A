// data/soulmelds/heart.ts
import { Soulmeld } from '../../types';

export const heartSoulmelds: Soulmeld[] = [
  {
    name: "Aura of the Abnegator",
    levelReq: 27,
    essentia: "For every point of essentia invested, you gain a +1 bonus on caster level checks to counterspell or dispel magic.",
    description: "A shimmering gray aura surrounds you in a 30-foot radius. This aura functions as an Antimagic Field, suppressing all magical effects within it.",
    category: "Heart",
    chakraBind: [{
      chakra: "Heart",
      description: "You become the master of the null-magic zone. You can selectively exclude a number of creatures or items equal to your Constitution modifier from the effects of your aura. Furthermore, you can expend your psionic or divine focus as an immediate action to counter any spell cast within 120 feet of you, as if with a perfect Dispel Magic.",
    }],
  },
  {
    name: "Carapace of the Unbreakable",
    levelReq: 30,
    essentia: "For every point of essentia invested, your damage reduction increases by 2.",
    description: "A shell of shimmering, iridescent force covers your body. This grants you DR 10/epic and immunity to critical hits and sneak attacks.",
    category: "Heart",
    chakraBind: [{
      chakra: "Heart",
      description: "Your immunity to critical hits becomes absolute. Furthermore, whenever you are struck by a critical hit, the attacker must make a Fortitude save (DC 20 + Con mod) or be stunned for 1 round as their weapon harmlessly ricochets.",
    }],
  },
  {
    name: "Heart of the Phoenix",
    levelReq: 35,
    essentia: "For every point of essentia invested, your fire resistance increases by 5.",
    description: "Your heart burns with an unquenchable flame. You gain Fire Resistance 30 and Fast Healing 10.",
    category: "Heart",
    chakraBind: [{
      chakra: "Heart",
      description: "If you are slain, your body explodes in a 100-foot-radius burst of fire, dealing 20d6 fire damage to all creatures and objects. One round later, you are reborn from the ashes at full health, as per the True Resurrection spell. This ability is usable once per day.",
    }],
  },
  {
    name: "Soul-Vessel of the Martyr",
    levelReq: 26,
    essentia: "For every point of essentia invested, your damage reduction from this soulmeld increases by 1.",
    description: "Your chest glows with a soft light, marking you as a protector. You gain DR 5/-. As an immediate action, you can redirect any attack or targeted spell from an adjacent ally to yourself.",
    category: "Heart",
    chakraBind: [{
      chakra: "Heart",
      description: "When you take damage on behalf of an ally, that damage is halved. You can cast 'Shield Other' as a spell-like ability at will.",
    }],
  },
  {
    name: "Heart-Gem of the Primal Beast",
    levelReq: 28,
    essentia: "For every point of essentia invested, you gain a +1 bonus on attack and damage rolls while raging or in a frenzy.",
    description: "A raw, uncut gem of blood-red color embeds itself in your chest. You can enter a barbarian Rage for a number of rounds per day equal to your Constitution modifier.",
    category: "Heart",
    chakraBind: [{
      chakra: "Heart",
      description: "You can enter a Frenzy, as the Frenzied Berserker prestige class ability, once per day.",
    }],
  },
  {
    name: "Core of the Living Mountain",
    levelReq: 33,
    essentia: "For every point of essentia invested, you gain a +2 bonus on checks to resist being moved.",
    description: "Your torso becomes as solid as granite. You gain DR 10/adamantine and a +10 bonus on checks to resist bull rush, trip, or overrun attempts.",
    category: "Heart",
    chakraBind: [{
      chakra: "Heart",
      description: "You are immune to petrification and any effect that would alter your form. You are constantly under the effect of an 'Anchor' spell and cannot be moved from your space against your will.",
    }],
  },
  {
    name: "Heart of the Lion",
    levelReq: 21,
    essentia: "For every point of essentia invested, the morale bonus from this soulmeld increases by 1.",
    description: "Your heart swells with courage. You are immune to fear, and you gain a +2 morale bonus on saving throws against mind-affecting effects.",
    category: "Heart",
    chakraBind: [{
      chakra: "Heart",
      description: "You project an aura of courage in a 30-foot radius, granting all allies within it immunity to fear and a +4 morale bonus on saving throws against other mind-affecting effects.",
    }],
  },
  {
    name: "Soul of the Ancestors",
    levelReq: 29,
    essentia: "For every point of essentia invested, you gain a +1 insight bonus on Will saves.",
    description: "The spirits of your ancestors surround you, whispering guidance and warnings. You gain a +5 insight bonus on all saves against spells and spell-like abilities.",
    category: "Heart",
    chakraBind: [{
      chakra: "Heart",
      description: "You can channel an ancestor's spirit. Once per day, you can gain proficiency with any one weapon or skill for 24 hours.",
    }],
  },
];
