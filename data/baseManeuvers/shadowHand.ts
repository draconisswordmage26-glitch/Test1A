
// data/baseManeuvers/shadowHand.ts
import { MartialManeuver } from '../../types';

export const baseShadowHandManeuvers: MartialManeuver[] = [
    // 1st Level
    { name: "Child of Shadow", discipline: "Shadow Hand", level: 1, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain concealment as long as you move 10 feet." },
    { name: "Clinging Shadow Strike", discipline: "Shadow Hand", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack deals +1d6 damage and target suffers a 20% miss chance on attacks for 1 round." },
    { name: "Shadow Blade Technique", discipline: "Shadow Hand", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Roll 2d20 for attack. Use higher result to deal normal damage, or lower result to deal +1d6 cold damage." },
    { name: "Island of Blades", discipline: "Shadow Hand", level: 1, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You and allies flank any adjacent enemy." },

    // 2nd Level
    { name: "Shadow Jaunt", discipline: "Shadow Hand", level: 2, type: "Boost", action: "Standard", range: "50 ft.", target: "You", description: "You teleport 50 ft. through shadows." },
    { name: "Cloak of Deception", discipline: "Shadow Hand", level: 2, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "You turn greater invisible until the end of your turn." },
    
    // 3rd Level
    { name: "Drain Vitality", discipline: "Shadow Hand", level: 3, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Attack deals +2d6 damage and 2 points of Constitution damage (Fort negates Con dmg)." },
    { name: "Strength Draining Strike", discipline: "Shadow Hand", level: 3, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Attack deals +2d6 damage and 4 points of Strength damage (Fort negates Str dmg)." },
    
    // 4th Level
    { name: "Obscuring Shadow Veil", discipline: "Shadow Hand", level: 4, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack deals +5d6 damage and the target suffers a 50% miss chance for 1 round." },
    { name: "Hand of Death", discipline: "Shadow Hand", level: 4, type: "Strike", action: "Standard", range: "Melee touch attack", target: "One creature", description: "Touch attack deals 1d6 damage and paralyzes target for 1d3 rounds (Fort negates paralysis)." },

    // 5th Level
    { name: "Bloodletting Strike", discipline: "Shadow Hand", level: 5, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Attack deals 4 points of Constitution damage (Fort negates)." },
    { name: "Shadow Stride", discipline: "Shadow Hand", level: 5, type: "Boost", action: "Move", range: "50 ft.", target: "You", description: "You teleport 50 ft. through shadows." },

    // 6th Level
    { name: "Ghost Blade", discipline: "Shadow Hand", level: 6, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Target is flat-footed. Attack deals +1d6 damage." },
    { name: "Shadow Noose", discipline: "Shadow Hand", level: 6, type: "Strike", action: "Standard", range: "Melee touch attack", target: "One creature", description: "Touch attack deals 5d6 damage and stuns target for 1 round (Fort negates stun)." },

    // 7th Level
    { name: "Death in the Dark", discipline: "Shadow Hand", level: 7, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "If target is flat-footed, deal +15d6 damage. If not, deal +5d6 damage." },
    { name: "Shadow Blink", discipline: "Shadow Hand", level: 7, type: "Boost", action: "Swift", range: "50 ft.", target: "You", description: "You teleport 50 ft. through shadows." },

    // 8th Level
    { name: "One with Shadow", discipline: "Shadow Hand", level: 8, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You become incorporeal, gaining benefits but losing ability to use equipment." },
    { name: "Enervating Shadow Strike", discipline: "Shadow Hand", level: 8, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Attack imposes 1d4 negative levels (Fort negates)." },

    // 9th Level
    { name: "Five-Shadow Creeping Ice Enervation Strike", discipline: "Shadow Hand", level: 9, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Deal +15d6 damage. Target must make a Fort save or suffer random effects (ability damage to all stats, blindness, etc)." },
];
