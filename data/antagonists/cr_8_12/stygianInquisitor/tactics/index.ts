
// data/antagonists/cr_8_12/stygianInquisitor/tactics/index.ts
import { Tactics } from '../../../../types';

export const stygianInquisitorTactics: Tactics = {
  name: "Imperium Inquisitor",
  title: "Tactics: Imperium Inquisitor",
  description: "The Imperium Inquisitor is a battlefield controller and debuffer. Its primary goal is to use its superior reach and fear effects to break enemy formations and morale before its allies move in for the kill. It is a disciplined soldier and will focus on tactical objectives over personal glory.",
  sections: [
    {
      title: "Round 1: Establish Control and Fear",
      content: [
        "The Inquisitor should be positioned behind a line of tougher melee combatants, using its 15-foot reach to attack over them.",
        "Its first action is to use its Fear Gaze (DC 21) on a key enemy, likely a rogue or arcane spellcaster, to apply the Shaken condition.",
        "With Combat Reflexes, it can make multiple attacks of opportunity. It should use these to trip enemies or simply deal damage to anyone foolish enough to move within its reach.",
      ]
    },
    {
      title: "Round 2: Stack Debuffs",
      content: [
        "The Inquisitor uses its full attack on a target already Shaken by its gaze. Each hit from its chain forces another Will save (DC 21). A failure on this save stacks the fear, turning Shaken into Frightened, forcing the target to flee.",
        "It uses its 5-foot step to maintain optimal positioning, keeping multiple enemies within its threatened area if possible.",
        "If a foe is repeatedly saving against its fear effects, it will switch to using Power Attack to maximize damage."
      ]
    },
    {
      title: "Round 3+: Enforce Order",
      content: [
        "By this round, several enemies should be suffering from fear penalties or actively fleeing. The Inquisitor continues to make full attacks, focusing fire with its allies to eliminate one target at a time.",
        "It will use its attacks of opportunity to trip any spellcasters attempting to cast defensively.",
        "The Inquisitor is a zealot but not a fool. If the tide of battle turns, it will provide covering fire with its reach while its commander organizes a tactical retreat."
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Inquisitor works best with other creatures that can capitalize on fear. It is an excellent guard for artillery or command units, creating a wide zone of control.",
        "Weaknesses: Its Will save is its weakest, making it vulnerable to spells like 'Confusion' or 'Dominate Person'. Spells that grant immunity to fear (like 'Remove Fear') completely negate its primary debuffing tool. It has no answer to flying or invisible opponents."
      ]
    }
  ]
};
