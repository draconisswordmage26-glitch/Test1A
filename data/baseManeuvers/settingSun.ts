// data/baseManeuvers/settingSun.ts
import { MartialManeuver } from '../../types';

export const baseSettingSunManeuvers: MartialManeuver[] = [
    // 1st Level
    { name: "Counter Charge", discipline: "Setting Sun", level: 1, type: "Counter", action: "Immediate", range: "Melee touch attack", target: "One charging creature", description: "You can stop a creature's charge. Make a Sense Motive check against the target's attack roll. If you succeed, the charge is negated." },
    { name: "Mighty Throw", discipline: "Setting Sun", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You can make a free trip attempt. If successful, you can throw the opponent into an adjacent square, where they land prone." },
    { name: "Step of the Wind", discipline: "Setting Sun", level: 1, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You ignore penalties for moving through difficult terrain and gain a +4 bonus on Balance checks." },

    // 2nd Level
    { name: "Baffling Defense", discipline: "Setting Sun", level: 2, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "If an enemy misses you with a melee attack, they are considered flat-footed until their next turn." },
    { name: "Clever Riposte", discipline: "Setting Sun", level: 2, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Make a melee attack. If the target attacks you and misses before your next turn, you can make an attack of opportunity against them." },

    // 3rd Level
    { name: "Devastating Throw", discipline: "Setting Sun", level: 3, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You throw an opponent with such force that they take falling damage as if they had fallen 10 feet, in addition to normal damage from your attack." },
    { name: "Feigned Opening", discipline: "Setting Sun", level: 3, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "When you are hit by a melee attack, you can make an immediate trip attempt against the attacker." },
    { name: "Giant's Stance", discipline: "Setting Sun", level: 3, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain a +4 bonus on checks to resist being bull rushed and on trip attempts, and your melee attacks deal an extra 1d6 damage." },
    
    // 4th Level
    { name: "Mirrored Pursuit", discipline: "Setting Sun", level: 4, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "When an enemy adjacent to you uses a 5-foot step, you can also take a 5-foot step to an adjacent square." },
    { name: "Soaring Throw", discipline: "Setting Sun", level: 4, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You throw your opponent into another creature within 20 feet. Both take damage and are knocked prone." },
    
    // 5th Level
    { name: "Hydra's Throw", discipline: "Setting Sun", level: 5, type: "Strike", action: "Standard", range: "Melee attack", target: "One or more creatures", description: "As a standard action, you can make a trip attempt against every adjacent opponent." },
    { name: "Shifting Defense", discipline: "Setting Sun", level: 5, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "Once per round, when an enemy attacks you, you can take a 5-foot step as an immediate action." },

    // 6th Level
    { name: "Ballista Throw", discipline: "Setting Sun", level: 6, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You can throw an opponent in a 60-foot line. All other creatures in the line must make a Reflex save or be knocked prone and take damage." },
    { name: "Scorpion Parry", discipline: "Setting Sun", level: 6, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "Negate a melee attack against you. You must have a free hand." },

    // 7th Level
    { name: "Ghostly Defense", discipline: "Setting Sun", level: 7, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "You become incorporeal for a moment, gaining a 50% miss chance against a single melee or ranged attack." },
    { name: "Comet Throw", discipline: "Setting Sun", level: 7, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You throw your opponent, and they take falling damage as if they had fallen 40 feet." },

    // 8th Level
    { name: "Almighty Throw", discipline: "Setting Sun", level: 8, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You can throw a creature of any size. The creature is hurled 100 feet and is stunned for 1d4 rounds." },
    { name: "Ghostly Evasion", discipline: "Setting Sun", level: 8, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain a 20% miss chance against all attacks." },
    
    // 9th Level
    { name: "Tornado Throw", discipline: "Setting Sun", level: 9, type: "Strike", action: "Full-Round", range: "Melee attack", area: "All adjacent enemies", description: "You can attempt a trip against every adjacent opponent and throw each of them up to 50 feet away in any direction. They take 6d6 falling damage and are stunned for 1 round." },
];
