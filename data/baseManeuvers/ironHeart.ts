
// data/baseManeuvers/ironHeart.ts
import { MartialManeuver } from '../../types';

export const baseIronHeartManeuvers: MartialManeuver[] = [
    // 1st Level
    { name: "Punishing Stance", discipline: "Iron Heart", level: 1, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You take a -2 penalty to AC but gain a +1d6 bonus on melee damage rolls." },
    { name: "Steel Wind", discipline: "Iron Heart", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "Two creatures", description: "You can attack two non-adjacent enemies as a single standard action, provided they are within 5 feet of each other." },
    { name: "Steely Strike", discipline: "Iron Heart", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You gain a +4 bonus on your attack roll." },

    // 2nd Level
    { name: "Disarming Strike", discipline: "Iron Heart", level: 2, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You make a melee attack that also attempts to disarm your opponent." },
    { name: "Wall of Blades", discipline: "Iron Heart", level: 2, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "You can oppose an enemy's melee attack roll by making an attack roll of your own. If your result is higher, the attack is negated." },

    // 3rd Level
    { name: "Iron Heart Surge", discipline: "Iron Heart", level: 3, type: "Boost", action: "Standard", range: "Personal", target: "You", description: "You instantly end one spell, effect, or other condition currently affecting you that is measured in rounds." },
    { name: "Exorcism of Steel", discipline: "Iron Heart", level: 3, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack strikes the opponent's weapon. You deal damage to the weapon and only take a -4 penalty on the Sunder attempt." },
    { name: "Absolute Steel Stance", discipline: "Iron Heart", level: 3, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain a +10-foot bonus to your speed and a +2 dodge bonus to AC against attacks of opportunity." },
    
    // 4th Level
    { name: "Lightning Recovery", discipline: "Iron Heart", level: 4, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "Reroll a failed attack roll with a +2 bonus." },
    { name: "Mithral Tornado", discipline: "Iron Heart", level: 4, type: "Strike", action: "Standard", range: "Melee attack", area: "All adjacent opponents", description: "You make one melee attack against every adjacent opponent." },

    // 5th Level
    { name: "Dancing Blade Form", discipline: "Iron Heart", level: 5, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain a +5-foot bonus to your reach during your turn." },
    { name: "Dazing Strike", discipline: "Iron Heart", level: 5, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack deals normal damage and dazes the target for 1 round (Fortitude negates daze, DC 15 + Str mod)." },

    // 6th Level
    { name: "Manticore's Parry", discipline: "Iron Heart", level: 6, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "When an enemy attacks you, you can redirect the attack to an adjacent creature." },
    { name: "Iron Heart Endurance", discipline: "Iron Heart", level: 6, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "You heal hit points equal to 2 x your level." },
    
    // 7th Level
    { name: "Finishing Move", discipline: "Iron Heart", level: 7, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You deal an extra 4d6 damage. If the target is below full health, you deal 6d6 extra damage. If below half health, 14d6 extra damage." },
    { name: "Scything Blade", discipline: "Iron Heart", level: 7, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "If you hit with a melee attack, you can make a free attack against a different enemy." },
    
    // 8th Level
    { name: "Adamantine Hurricane", discipline: "Iron Heart", level: 8, type: "Strike", action: "Full-Round", range: "Melee attack", area: "All adjacent opponents", description: "You make two melee attacks against every adjacent opponent with a +4 bonus on each attack." },
    { name: "Supreme Blade Parry", discipline: "Iron Heart", level: 8, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain DR 5/-. Once per round, you can negate an attack by succeeding on an opposed attack roll." },
    
    // 9th Level
    { name: "Strike of Perfect Clarity", discipline: "Iron Heart", level: 9, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You focus your supreme martial skill into a single, perfect blow. Your attack deals an extra 100 points of damage." },
];
