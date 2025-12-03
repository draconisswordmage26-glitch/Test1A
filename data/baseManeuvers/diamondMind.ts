
// data/baseManeuvers/diamondMind.ts
import { MartialManeuver } from '../../types';

export const baseDiamondMindManeuvers: MartialManeuver[] = [
    // 1st Level
    { name: "Moment of Perfect Mind", discipline: "Diamond Mind", level: 1, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "Your mental focus allows you to overcome adversity. Make a Concentration check instead of a Will save." },
    { name: "Sapphire Nightmare Blade", discipline: "Diamond Mind", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You feint with psionic speed. Make a Concentration check vs opponent's AC. If successful, target is flat-footed and you deal +1d6 damage." },
    { name: "Stance of Clarity", discipline: "Diamond Mind", level: 1, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain a +2 insight bonus to AC against one opponent and a -2 penalty to AC against all others." },

    // 2nd Level
    { name: "Action Before Thought", discipline: "Diamond Mind", level: 2, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "Your instincts guide your body. Make a Concentration check instead of a Reflex save." },
    { name: "Emerald Razor", discipline: "Diamond Mind", level: 2, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your melee attack is resolved as a touch attack." },
    
    // 3rd Level
    { name: "Insightful Strike", discipline: "Diamond Mind", level: 3, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You strike at a foe's weak points. You use a Concentration check result to determine the damage dealt." },
    { name: "Pearl of Black Doubt", discipline: "Diamond Mind", level: 3, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "Every time an opponent misses you in melee, you gain a +2 dodge bonus to AC for the round." },
    
    // 4th Level
    { name: "Mind Over Body", discipline: "Diamond Mind", level: 4, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "Your will is your fortress. Make a Concentration check instead of a Fortitude save." },
    { name: "Ruby Nightmare Blade", discipline: "Diamond Mind", level: 4, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Make a Concentration check vs AC. If successful, deal double damage. If failed, -2 penalty to attack." },

    // 5th Level
    { name: "Disrupting Blow", discipline: "Diamond Mind", level: 5, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "If your attack hits, the target cannot cast spells or use abilities for 1 round unless they succeed on a Concentration check (DC = damage dealt)." },
    { name: "Rapid Counter", discipline: "Diamond Mind", level: 5, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "When an enemy attacks you and misses, you can make an attack of opportunity against them." },
    
    // 6th Level
    { name: "Moment of Alacrity", discipline: "Diamond Mind", level: 6, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "You gain a +20 bonus on your initiative check for the next round." },
    { name: "Quicksilver Motion", discipline: "Diamond Mind", level: 6, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "You can move up to your speed as a swift action." },

    // 7th Level
    { name: "Avalanche of Blades", discipline: "Diamond Mind", level: 7, type: "Strike", action: "Full-Round", range: "Melee attack", target: "One creature", description: "You make a melee attack. If successful, you can make another at -4 penalty, continuing with cumulative -4 penalties until you miss." },
    { name: "Stance of Alacrity", discipline: "Diamond Mind", level: 7, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You can use an additional counter each round without using an immediate action." },
    
    // 8th Level
    { name: "Diamond Defense", discipline: "Diamond Mind", level: 8, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "You gain a bonus to your save equal to your initiator level." },
    { name: "Hearing the Air", discipline: "Diamond Mind", level: 8, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain blindsense out to 30 feet and a +5 insight bonus on Listen checks." },
    { name: "Diamond Nightmare Blade", discipline: "Diamond Mind", level: 8, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Make a Concentration check vs AC. If successful, your attack deals quadruple damage. If failed, -2 penalty to attack." },

    // 9th Level
    { name: "Time Stands Still", discipline: "Diamond Mind", level: 9, type: "Strike", action: "Full-Round", range: "Melee attack", target: "One or more creatures", description: "You can make two full attacks this round." },
];
