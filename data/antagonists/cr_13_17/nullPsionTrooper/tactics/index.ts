
// data/antagonists/cr_13_17/nullPsionTrooper/tactics/index.ts
import { Tactics } from '../../../../types';

export const nullPsionTrooperTactics: Tactics = {
  name: "Null-Psion Trooper",
  title: "Tactics: Null-Psion Trooper",
  description: "The Null-Psion Trooper is a simple but effective tool. It has one job: hunt and kill psions. It is mindless and will pursue this goal with single-minded devotion. It should be played as an implacable hunter, ignoring all other threats to close with its designated psychic target.",
  sections: [
    {
      title: "The Psychic Anvil",
      content: [
        "The trooper's 'Cognition-Dampening Field' is its primary weapon. The DC to manifest powers within its aura is incredibly high (DC 25 + power level), effectively shutting down most psionic characters.",
        "It will always move towards the nearest creature it identifies as psionic (either through orders or by being targeted by a psionic power).",
        "It is a walking 'no-psionics' zone. A psion's best bet is to stay more than 30 feet away from it at all times.",
      ]
    },
    {
      title: "Mindless Aggression",
      content: [
        "Once it closes to melee, it will use a full attack action every round. It is not smart enough to use complex tactics like tripping or sundering.",
        "Its immunity to mind-affecting effects means that a Telepath's primary tools are useless against it. It cannot be dominated, confused, or feared.",
        "Its Power Resistance of 35 is very high for its CR, meaning that even if a psion gets a power off, it has a high chance of simply fizzling.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Null-Psion Troopers are often deployed with ranged support. While the trooper shuts down the enemy psion, imperial archers can rain down arrows with impunity.",
        "Weaknesses: It is completely vulnerable to arcane magic, divine magic, and martial maneuvers. It has low saves and is not particularly tough. Its single-mindedness can be used against it; a clever party can lure it into traps or away from the main fight. It is a highly specialized tool that is very effective at its one job, but almost useless against anything else."
      ]
    }
  ]
};
