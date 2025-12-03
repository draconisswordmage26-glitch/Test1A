
// data/antagonists/cr_28_32/dieGlocke/tactics/index.ts
import { Tactics } from '../../../../types';

export const dieGlockeTactics: Tactics = {
  name: "Die Glocke",
  title: "Tactics: Die Glocke",
  description: "Die Glocke is not a creature; it is a doomsday device. It does not have tactics in the traditional sense. It is a puzzle and a hazardous environment that the party must overcome. The challenge is not in 'fighting' the bell, but in surviving its effects and its guardians long enough to disable it.",
  sections: [
    {
      title: "The Temporal battlefield",
      content: [
        "The 'Temporal Distortion Field' is the primary feature of this encounter. The constant DC 40 Will save to avoid being slowed will quickly drain the party's resources and action economy.",
        "Characters with high Will saves or immunity to mind-affecting effects (though 'Slow' is not mind-affecting, a DM might rule otherwise for flavor) are crucial.",
        "The field also negates 'Haste' and 'Time Stop', shutting down two of the most powerful high-level spells.",
      ]
    },
    {
      title: "The Chronal Cannon",
      content: [
        "The bell will fire its cannon every round at the nearest creature that is not a designated ally.",
        "The aging effect is terrifying. A few failed saves can turn a young elf into a venerable ancient, crippling their physical stats.",
        "Creatures with high Fortitude saves or immunity to ability score penalties are best suited to brave the cannon's fire.",
      ]
    },
    {
      title: "Objective: Destroy the Bell",
      content: [
        "The bell is stationary and has a massive pool of hit points, high DR, and Hardness. It is a pure damage race.",
        "The party will need to find a way to deal a massive amount of epic, adamantine damage in a short amount of time, all while being slowed and bombarded by the cannon.",
        "A martial character with a powerful adamantine weapon and feats like Improved Sunder is likely the party's best bet for destroying the device.",
        "Alternatively, there may be a control panel or power source elsewhere in the room that can be disabled to shut down the bell, turning the encounter into a puzzle instead of a straight fight."
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Die Glocke is always deployed with a powerful guard. The Silent Sybil and her Null-Psion troopers are a perfect fit, as their psionic abilities are unaffected by the anti-magic properties of the temporal field if a DM rules it that way.",
        "Weaknesses: The bell is stationary. Ranged attackers who can stay outside its 200-foot aura can attack it with impunity, though they will still be targeted by its 1000-foot range cannon. It has no way to deal with subterranean or ethereal creatures."
      ]
    }
  ]
};
