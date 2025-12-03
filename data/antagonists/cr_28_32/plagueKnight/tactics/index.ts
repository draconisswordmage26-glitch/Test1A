// data/antagonists/cr_28_32/plagueKnight/tactics/index.ts
import { Tactics } from '../../../../types';

export const plagueKnightTactics: Tactics = {
  name: "Plague-Knight of the Iron Lung",
  title: "Tactics: Plague-Knight",
  description: "The Plague-Knight is a slow, inexorable engine of disease and decay. It is a walking area-of-effect debuff that aims to soften up and demoralize enemies before crushing them in melee. It is not subtle, but its methods are terrifyingly effective.",
  sections: [
    {
      title: "Round 1: Area Denial",
      content: [
        "The Plague-Knight lumbers forward, its 'Aura of Sickness' immediately penalizing any hero who gets within 30 feet.",
        "Its first action is to throw a 'Blight Grenade' at the party's spellcasters or archers, creating a cloud of deadly poison that forces them to reposition or choke.",
        "It will then ready an action to attack anyone who charges it.",
      ]
    },
    {
      title: "Round 2: Spread the Blight",
      content: [
        "The Knight advances into melee with the party's toughest fighter.",
        "It uses a full attack with Power Attack, aiming to hit and infect the target with its 'Plague-Spreader' disease. The DC 40 Fortitude save is incredibly difficult to make.",
        "If it's a good-aligned fighter, it will use Smite Good to ensure the blow is devastating.",
      ]
    },
    {
      title: "Round 3+: The Inexorable Advance",
      content: [
        "By this point, the battlefield should be contaminated with poison clouds and several party members should be diseased and sickened.",
        "The Knight continues to advance, focusing its attacks on any character who is not yet diseased.",
        "It is a creature of immense toughness. It will absorb massive amounts of damage while its plagues and poisons do their slow, agonizing work."
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Plague-Knight is the anvil of the Empæryen's army. It works well with mobile attackers who can harry the enemy while they are trapped by the Knight's poison clouds and auras.",
        "Weaknesses: Its speed is very low, and its Reflex save is a major vulnerability. Spells that create difficult terrain can kite it indefinitely. It is immune to poison and disease, but not other status effects. Spells that target its Will save are also effective. A party with multiple sources of healing and disease removal can mitigate its primary threat."
      ]
    }
  ]
};