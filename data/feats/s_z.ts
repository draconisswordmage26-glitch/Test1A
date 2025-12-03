// data/feats/s_z.ts
import { Feat } from '../../types';

export const s_z_feats: Feat[] = [
  { name: "Self-Concealment", description: "An epic feat that grants you total concealment for 10 rounds per day.", isEpic: true, prerequisites: { skills: { "Hide": 30 } } },
  { name: "Shape Soulmeld", description: "You can shape one additional soulmeld.", prerequisites: { abilityScores: { con: 13 } } },
  { name: "Shield Wall", description: "When adjacent to an ally who also has this feat, you both gain a +2 bonus to your shield AC." },
  { name: "Shock Trooper", description: "When charging, you can shift the penalty from Power Attack from your attack roll to your Armor Class.", prerequisites: { bab: 6, feats: ["Improved Bull Rush", "Power Attack"] } },
  { name: "Silent Spell", description: "A metamagic feat that allows you to cast a spell without any verbal components." },
  { name: "Skill Focus", description: "You get a +3 bonus on all checks involving a chosen skill." },
  { name: "Soul Eater", description: "A monstrous feat allowing the creature to consume the soul of a recently deceased creature to gain benefits." },
  { name: "Spell Focus", description: "Choose a school of magic. The save DC for all spells from that school increases by 1." },
  { name: "Spell Penetration", description: "You get a +2 bonus on caster level checks to overcome a creature's spell resistance." },
  { name: "Speed of Thought", description: "As a psionic character, you can add your Intelligence bonus as an enhancement bonus to your speed.", prerequisites: { abilityScores: { int: 13 } } },
  { name: "Spirited Charge", description: "When mounted and charging with a lance, you deal double damage with the lance.", prerequisites: { skills: { "Ride": 1 }, feats: ["Mounted Combat", "Ride-By Attack"] } },
  { name: "Spring Attack", description: "You can move, make a single attack, and then move again, as long as your total movement doesn't exceed your speed.", prerequisites: { bab: 4, feats: ["Dodge", "Mobility"] } },
  { name: "Still Spell", description: "A metamagic feat that allows you to cast a spell without any somatic (gestural) components." },
  { name: "Stone Power", description: "When you use a Stone Dragon maneuver, you gain temporary hit points.", prerequisites: { abilityScores: { str: 13 } } },
  { name: "Stormguard Warrior", description: "You can choose to forgo attacks of opportunity to gain bonuses to your AC or to your damage on your next turn.", prerequisites: { bab: 6, feats: ["Combat Reflexes"] } },
  { name: "Toughness", description: "You gain 3 bonus hit points." },
  { name: "Two-Weapon Fighting", description: "Your penalties for fighting with two weapons are reduced.", prerequisites: { abilityScores: { dex: 15 } } },
  { name: "Unstoppable Rage", description: "An epic feat that prevents your rage from being ended prematurely by any means.", isEpic: true, prerequisites: { special: "Rage or frenzy ability" } },
  { name: "Weapon Finesse", description: "With a light weapon, you can use your Dexterity modifier instead of your Strength modifier on attack rolls." },
  { name: "Weapon Focus", description: "You gain a +1 bonus on all attack rolls you make using a selected weapon.", prerequisites: { bab: 1 } },
  { name: "Weapon Specialization", description: "You gain a +2 bonus on all damage rolls you make using a selected weapon.", prerequisites: { bab: 4, feats: ["Weapon Focus"], special: "Fighter level 4th" } },
  { name: "Widen Power", description: "A metapsionic feat that doubles the area of a psionic power." },
  { name: "Widen Spell", description: "A metamagic feat that doubles the area of a spell's effect." },
  { name: "Zone of Animation", description: "An epic feat allowing you to animate all dead bodies within a large radius as undead minions.", isEpic: true, prerequisites: { special: "Rebuke undead" } },
];
