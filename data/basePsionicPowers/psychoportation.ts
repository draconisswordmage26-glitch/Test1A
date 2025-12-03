// data/basePsionicPowers/psychoportation.ts
import { PsionicPower } from '../../types';

export const basePsychoportationPowers: PsionicPower[] = [
    // Level 1
    { name: "Burst", discipline: "Psychoportation", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 swift action", range: "Personal", target: "You", duration: "1 round", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "Your speed increases by 10 feet.", augment: "For every additional power point, speed increases by 5 feet." },
    { name: "Detect Teleportation", discipline: "Psychoportation", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 standard action", range: "1 mile/level", area: "1 mile/level radius emanation centered on you", duration: "24 hours", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You are aware of all teleportation into or out of the area.", augment: "None." },
    
    // Level 2
    { name: "Levitate, Psionic", discipline: "Psychoportation", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 standard action", range: "Personal or Close (25 ft. + 5 ft./2 levels)", target: "You or one willing creature or object", duration: "1 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "3", description: "You or a target can move up and down at will.", augment: "None." },
    { name: "Dimension Swap", discipline: "Psychoportation", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "You and one willing creature", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "3", description: "You and an ally switch places.", augment: "None." },

    // Level 3
    { name: "Fly, Psionic", discipline: "Psychoportation", level: "Psion/Wilder 3", display: "Mental", manifestingTime: "1 standard action", range: "Personal or Touch", target: "You or creature touched", duration: "1 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "5", description: "You fly at a speed of 60 ft.", augment: "None." },
    { name: "Time Hop", discipline: "Psychoportation", level: "Psion/Wilder 3", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature or object", duration: "1 round/level (D)", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "5", description: "You psionically shunt a creature or object a few rounds into the future.", augment: "None." },

    // Level 4
    { name: "Dimension Door, Psionic", discipline: "Psychoportation", level: "Psion/Wilder 4", display: "Mental", manifestingTime: "1 standard action", range: "Long (400 ft. + 40 ft./level)", target: "You and touched objects or willing creatures", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "7", description: "You instantly transfer yourself from your current location to any other spot within range.", augment: "None." },
    { name: "Telekinetic Maneuver", discipline: "Psychoportation", level: "Psion/Wilder 4", display: "Mental", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", target: "One creature", duration: "Instantaneous", savingThrow: "None", powerResistance: "Yes", powerPoints: "7", description: "You can perform a bull rush, disarm, grapple, or trip attempt on a foe from a distance.", augment: "None." },
    
    // Level 5
    { name: "Teleport, Psionic", discipline: "Psychoportation", level: "Psion/Wilder 5", display: "Mental", manifestingTime: "1 standard action", range: "Personal and touch", target: "You and touched objects or willing creatures", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "9", description: "This power instantly transports you to a designated destination.", augment: "None." },
    { name: "Baleful Teleport", discipline: "Psychoportation", level: "Psion/Wilder 5", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature", duration: "Instantaneous", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "9", description: "You teleport an enemy to a dangerous location.", augment: "None." },

    // Level 6
    { name: "Disrupting Lure", discipline: "Psychoportation", level: "Psion/Wilder 6", display: "Mental", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", target: "One creature", duration: "1 round/level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "11", description: "You create a psychic lure that forces an enemy to move towards it.", augment: "None." },
    { name: "Temporal Acceleration", discipline: "Psychoportation", level: "Psion/Wilder 6", display: "Mental", manifestingTime: "1 swift action", range: "Personal", target: "You", duration: "1 round", savingThrow: "None", powerResistance: "No", powerPoints: "11", description: "You can take an extra standard action this turn.", augment: "None." },
    
    // Level 7
    { name: "Plane Shift, Psionic", discipline: "Psychoportation", level: "Psion/Wilder 7", display: "Mental", manifestingTime: "1 standard action", range: "Touch", target: "Creature touched or up to eight willing creatures joining hands", duration: "Instantaneous", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "13", description: "You move yourself or some other creature to another plane of existence.", augment: "None." },
    
    // Level 8
    { name: "Teleport, Greater Psionic", discipline: "Psychoportation", level: "Psion/Wilder 8", display: "Mental", manifestingTime: "1 standard action", range: "Personal and touch", target: "You and touched objects or willing creatures", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "15", description: "As psionic teleport, but with no range limit and you always arrive on target.", augment: "None." },
    { name: "Time Regression", discipline: "Psychoportation", level: "Psion/Wilder 8", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "15", description: "You re-live the last round, allowing you to change your actions.", augment: "None." },
    
    // Level 9
    { name: "Time Stop, Psionic", discipline: "Psychoportation", level: "Psion/Wilder 9", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1d4+1 rounds (apparent time)", savingThrow: "None", powerResistance: "No", powerPoints: "17", description: "You stop time for everyone but yourself for 1d4+1 rounds.", augment: "None." },
    { name: "Teleportation Circle, Psionic", discipline: "Psychoportation", level: "Psion/Wilder 9", display: "Visual", manifestingTime: "10 minutes", range: "0 ft.", area: "10-ft. diameter circle", duration: "10 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "17", description: "Creates a teleportation circle that can transport any creature to a designated spot.", augment: "None." },
];