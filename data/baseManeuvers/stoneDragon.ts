
// data/baseManeuvers/stoneDragon.ts
import { MartialManeuver } from '../../types';

export const baseStoneDragonManeuvers: MartialManeuver[] = [
    // 1st Level
    { name: "Stone Bones", discipline: "Stone Dragon", level: 1, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "You gain DR 5/adamantine for 1 round." },
    { name: "Charging Minotaur", discipline: "Stone Dragon", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "As part of a charge, your attack deals an extra 1d6 damage and you can make a free bull rush." },
    { name: "Stone Vise", discipline: "Stone Dragon", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack can pin an opponent to the ground, leaving them helpless for 1 round if they fail a reflex save." },
    
    // 2nd Level
    { name: "Mountain Hammer", discipline: "Stone Dragon", level: 2, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature or object", description: "Your attack ignores the target's damage reduction and hardness." },
    { name: "Stone Dragon's Fury", discipline: "Stone Dragon", level: 2, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "If you are standing on the ground, you deal an extra 1d6 damage." },
    
    // 3rd Level
    { name: "Crushing Weight of the Mountain", discipline: "Stone Dragon", level: 3, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain a +2 bonus on damage rolls and a +4 bonus on grapple, bull rush, and trip checks." },
    { name: "Bonecrusher", discipline: "Stone Dragon", level: 3, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack deals an extra 4d6 damage. If you hit, the target gains a -10 penalty on rolls to confirm critical hits." },
    { name: "Roots of the Mountain", discipline: "Stone Dragon", level: 3, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain a +10 bonus on checks to resist being bull rushed, tripped, or overrun, and you gain DR 2/-." },

    // 4th Level
    { name: "Overwhelming Mountain Strike", discipline: "Stone Dragon", level: 4, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You deal an extra 2d6 damage and the target loses its move action for the round (Fortitude negates movement loss)." },
    { name: "Boulder Roll", discipline: "Stone Dragon", level: 4, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "You gain a bonus on your next overrun attempt equal to your initiator level." },
    
    // 5th Level
    { name: "Mountain Avalanche", discipline: "Stone Dragon", level: 5, type: "Strike", action: "Full-Round", range: "Melee attack", target: "One creature", description: "As part of a charge, your attack deals an extra 4d6 damage and you can make a free trample attempt." },
    { name: "Elder Mountain Hammer", discipline: "Stone Dragon", level: 5, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack deals an extra 6d6 damage and ignores damage reduction and hardness." },
    
    // 6th Level
    { name: "Irresistible Mountain Strike", discipline: "Stone Dragon", level: 6, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack deals an extra 4d6 damage. The target must make a Fortitude save or lose their standard action for the round." },
    { name: "Giant's Stance", discipline: "Stone Dragon", level: 6, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You deal damage as if you were one size category larger." },

    // 7th Level
    { name: "Ancient Mountain Hammer", discipline: "Stone Dragon", level: 7, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature or object", description: "Your attack ignores DR and hardness and deals an extra 12d6 damage." },
    { name: "Colossus Strike", discipline: "Stone Dragon", level: 7, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack deals an extra 6d6 damage and knocks the opponent backwards 1d4 squares (Fortitude negates knockback)." },
    
    // 8th Level
    { name: "Adamantine Bones", discipline: "Stone Dragon", level: 8, type: "Strike", action: "Standard", range: "Personal", target: "You", description: "You gain DR 20/adamantine for 1 round." },
    { name: "Strength of Stone", discipline: "Stone Dragon", level: 8, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain immunity to critical hits." },
    
    // 9th Level
    { name: "Mountain Tombstone Strike", discipline: "Stone Dragon", level: 9, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You put all your weight into a single crushing blow. Your attack deals 2d6 points of Constitution damage." },
];
