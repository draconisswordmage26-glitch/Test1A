
// data/baseManeuvers/whiteRaven.ts
import { MartialManeuver } from '../../types';

export const baseWhiteRavenManeuvers: MartialManeuver[] = [
    // 1st Level
    { name: "Leading the Attack", discipline: "White Raven", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "If your attack hits, your allies gain a +4 bonus on attack rolls against the target for 1 round." },
    { name: "Bolstering Voice", discipline: "White Raven", level: 1, type: "Stance", action: "Swift", range: "60 ft.", area: "Allies in 60-ft. emanation", description: "Allies in the aura gain a +2 morale bonus on Will saves and a +4 bonus against fear." },
    { name: "Douse the Flames", discipline: "White Raven", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack prevents the target from making attacks of opportunity for 1 round." },
    { name: "Leading the Charge", discipline: "White Raven", level: 1, type: "Stance", action: "Swift", range: "60 ft.", area: "Allies in 60-ft. emanation", description: "You and your allies deal extra damage on a charge equal to your initiator level." },

    // 2nd Level
    { name: "Tactical Strike", discipline: "White Raven", level: 2, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Deal +2d6 damage. Allies adjacent to target can move 5 feet without provoking AoOs." },
    { name: "Battle Leader's Charge", discipline: "White Raven", level: 2, type: "Strike", action: "Full-Round", range: "Melee attack", target: "One creature", description: "Charge without provoking AoOs, dealing +10 damage." },

    // 3rd Level
    { name: "White Raven Tactics", discipline: "White Raven", level: 3, type: "Boost", action: "Swift", range: "10 ft.", target: "One ally", description: "The target ally moves their initiative count to immediately after yours, allowing them to act again." },
    { name: "Lion's Roar", discipline: "White Raven", level: 3, type: "Boost", action: "Swift", range: "60 ft.", area: "Allies in 60-ft. emanation", description: "After you defeat a foe, allies deal +5 damage on attacks for 1 round." },
    { name: "Tactics of the Wolf", discipline: "White Raven", level: 3, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You and allies deal +1 damage per 2 initiator levels against flanked targets." },

    // 4th Level
    { name: "White Raven Strike", discipline: "White Raven", level: 4, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Deal +4d6 damage and the target becomes flat-footed." },
    { name: "Covering Strike", discipline: "White Raven", level: 4, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Boost. After you attack, opponent cannot make AoOs for 3 rounds." },
    
    // 5th Level
    { name: "Flanking Maneuver", discipline: "White Raven", level: 5, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "If you hit, allies flanking the target can make a free attack against it." },
    { name: "Press the Advantage", discipline: "White Raven", level: 5, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You can take a 5-foot step even if you have moved in the round. If you take a 5-foot step, you can take another." },
    
    // 6th Level
    { name: "Order Forged from Chaos", discipline: "White Raven", level: 6, type: "Boost", action: "Move", range: "Personal", target: "You", description: "Allies within 30 feet can move up to their speed without provoking AoOs." },
    { name: "War Leader's Charge", discipline: "White Raven", level: 6, type: "Strike", action: "Full-Round", range: "Melee attack", target: "One creature", description: "Charge attack deals +35 damage and does not provoke AoOs." },

    // 7th Level
    { name: "Swarming Assault", discipline: "White Raven", level: 7, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "If you hit, allies threatening the target can make a free attack against it." },
    { name: "Clarion Call", discipline: "White Raven", level: 7, type: "Boost", action: "Swift", range: "60 ft.", area: "Allies in 60-ft. emanation", description: "If you drop an opponent, all allies can make a free attack or take a move action." },

    // 8th Level
    { name: "White Raven Hammer", discipline: "White Raven", level: 8, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack deals an extra 6d6 damage and stuns the target for 1 round (no save)." },

    // 9th Level
    { name: "War Master's Charge", discipline: "White Raven", level: 9, type: "Strike", action: "Full-Round", range: "Melee attack", target: "One creature", description: "You and all allies charge the target. You deal +50 damage; allies deal +25. No AoOs." },
];
