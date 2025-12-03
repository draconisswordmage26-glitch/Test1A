// data/antagonists/cr_13_17/imperialPhalanx/tactics/index.ts
import { Tactics } from '../../../../types';

export const imperialPhalanxTactics: Tactics = {
  name: "Imperial Phalanx",
  title: "Tactics: Imperial Phalanx",
  description: "The Imperial Phalanx is the anvil upon which enemy charges are broken. Their tactics are simple, disciplined, and brutally effective. They fight as a single unit, their strength derived from their unbreakable formation.",
  sections: [
    {
      title: "Formation is Everything",
      content: [
        "Phalanx troopers should always be deployed in a line, two ranks deep, with troopers adjacent to one another to benefit from their Shield Wall ability.",
        "The front rank provides cover for the back rank, which can attack over them with their longspears.",
        "They are slow and should be positioned defensively to take advantage of terrain chokepoints.",
      ]
    },
    {
      title: "The Charge Stopper",
      content: [
        "The Phalanx's primary tactic against powerful chargers (like Behemoths or Pyroclastic Dragons) is the readied action.",
        "Each trooper will ready an action to set their spear against a charge. When the enemy charges, they will all get an attack that deals double damage.",
        "The Hold the Line feat grants them an additional attack of opportunity when the charger enters their reach. This means a single charging enemy could face a dozen spear thrusts before it even makes contact.",
      ]
    },
    {
      title: "Grinding Advance",
      content: [
        "Once the initial enemy charge is broken, the Phalanx will advance slowly, 5 feet at a time.",
        "They will use their attacks of opportunity and trip attempts to control the space around them, preventing enemies from maneuvering.",
        "Their goal is to form a moving wall of steel that grinds the enemy down through attrition and disciplined, focused fire."
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: They are the perfect screen for vulnerable units like imperial archers or spellcasters. They work best when buffed by a commander like Grand Strategos Vorn.",
        "Weaknesses: They are highly vulnerable to area-of-effect spells, as they are always tightly packed. Spells like 'Fireball' or a dragon's breath weapon can devastate their formation. They have no answer to flight or teleportation."
      ]
    }
  ]
};