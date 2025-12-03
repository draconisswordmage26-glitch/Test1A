
// data/baseManeuvers/tigerClaw.ts
import { MartialManeuver } from '../../types';

export const baseTigerClawManeuvers: MartialManeuver[] = [
    // 1st Level
    { name: "Blood in the Water", discipline: "Tiger Claw", level: 1, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "Gain a +1 bonus on attack and damage rolls for each critical hit you score (bonuses stack)." },
    { name: "Sudden Leap", discipline: "Tiger Claw", level: 1, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "Make a Jump check as a swift action. You can move the distance determined by the check result." },
    { name: "Wolf Fang Strike", discipline: "Tiger Claw", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One or two creatures", description: "You make two attacks with two different weapons against one or two foes, each at a -2 penalty." },

    // 2nd Level
    { name: "Claw at the Moon", discipline: "Tiger Claw", level: 2, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Make a Jump check against target's AC. If successful, deal +2d6 damage and gain +4 to confirm criticals." },
    { name: "Hunter's Sense", discipline: "Tiger Claw", level: 2, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain the scent special ability." },

    // 3rd Level
    { name: "Flesh Ripper", discipline: "Tiger Claw", level: 3, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "If you hit, the target takes -4 to attacks and AC for 1 round. If you score a critical hit, this penalty lasts for the encounter." },
    { name: "Leaping Dragon Stance", discipline: "Tiger Claw", level: 3, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain a +10 foot enhancement bonus on Jump checks and are always considered running for jumps." },
    
    // 4th Level
    { name: "Fountain of Blood", discipline: "Tiger Claw", level: 4, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "If you drop a foe, cause fear in enemies within 30 feet (Will DC 14 + Str mod)." },
    { name: "Death from Above", discipline: "Tiger Claw", level: 4, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Make a Jump check against target's AC. If successful, deal +4d6 damage and target is flat-footed." },

    // 5th Level
    { name: "Pouncing Charge", discipline: "Tiger Claw", level: 5, type: "Strike", action: "Full-Round", range: "Melee attack", target: "One creature", description: "You can make a full attack at the end of a charge." },
    { name: "Dancing Mongoose", discipline: "Tiger Claw", level: 5, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "You gain two extra attacks on your next full attack action (one with each weapon held), at your highest base attack bonus but at a -2 penalty." },
    
    // 6th Level
    { name: "Wolf Climbs the Mountain", discipline: "Tiger Claw", level: 6, type: "Strike", action: "Full-Round", range: "Melee attack", target: "One creature", description: "Enter an opponent's square and make a full attack with a +5 bonus to damage on each hit. You gain cover from the opponent." },
    { name: "Rabid Bear Strike", discipline: "Tiger Claw", level: 6, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You gain +4 to attack and +10d6 damage, but take -4 to AC for 1 round." },
    
    // 7th Level
    { name: "Swooping Dragon Strike", discipline: "Tiger Claw", level: 7, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Jump over an opponent. If your Jump check exceeds their AC, deal +10d6 damage and stun them (Fort DC 17 + Str mod)." },
    { name: "Hamstring Attack", discipline: "Tiger Claw", level: 7, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Attack deals +1d8 Dex damage and reduces target's speed." },

    // 8th Level
    { name: "Raging Mongoose", discipline: "Tiger Claw", level: 8, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "You gain four extra attacks on your next full attack action (two with each weapon), at your highest base attack bonus but at a -2 penalty." },
    { name: "Girallon Windmill Flesh Rip", discipline: "Tiger Claw", level: 8, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "Gain the ability to rend with dual weapons. If you hit with two or more weapons, deal extra damage (8d6 or more)." },

    // 9th Level
    { name: "Feral Death Blow", discipline: "Tiger Claw", level: 9, type: "Strike", action: "Full-Round", range: "Melee attack", target: "One creature", description: "Leap onto a foe. If your Jump check exceeds their AC, they must make a Fortitude save (DC 19 + Str mod) or die. If they save, they take +20d6 damage." },
];
