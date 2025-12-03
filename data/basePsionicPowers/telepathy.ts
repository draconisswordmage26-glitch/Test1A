// data/basePsionicPowers/telepathy.ts
import { PsionicPower } from '../../types';

export const baseTelepathyPowers: PsionicPower[] = [
    // Level 1
    { name: "Mind Thrust", discipline: "Telepathy", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature", duration: "Instantaneous", savingThrow: "Will half", powerResistance: "Yes", powerPoints: "1", description: "You deal 1d10 points of damage to a single creature.", augment: "For every additional power point, damage increases by 1d10." },
    { name: "Psionic Daze", discipline: "Telepathy", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One humanoid creature with 4 HD or less", duration: "1 round", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "1", description: "A single humanoid creature with 4 HD or less is dazed for 1 round.", augment: "None." },
    { name: "Telempathic Projection", discipline: "Telepathy", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One or more creatures", duration: "1 min./level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "1", description: "You alter the subject’s mood.", augment: "None." },

    // Level 2
    { name: "Psionic Charm", discipline: "Telepathy", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One living creature", duration: "1 hour/level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "3", description: "You make a humanoid creature regard you as its trusted friend and ally.", augment: "You can spend more points to affect more creatures or non-humanoids." },
    { name: "Read Thoughts", discipline: "Telepathy", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 standard action", range: "60 ft.", area: "Cone-shaped emanation", duration: "Concentration, up to 1 min./level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "3", description: "You detect the surface thoughts of creatures in range.", augment: "None." },
    { name: "Suggestion, Psionic", discipline: "Telepathy", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One living creature", duration: "1 hour/level or until completed", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "3", description: "You compel the subject to follow a course of action.", augment: "None." },

    // Level 3
    { name: "Ego Whip", discipline: "Telepathy", level: "Psion/Wilder 3", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature", duration: "Instantaneous", savingThrow: "Will half", powerResistance: "Yes", powerPoints: "5", description: "You deal 2d4 points of Charisma damage.", augment: "For every 2 additional power points, damage increases by 1d4." },
    { name: "False Sensory Input", discipline: "Telepathy", level: "Psion/Wilder 3", display: "Mental", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", target: "One creature", duration: "1 hour/level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "5", description: "You rewrite the subject's current sensory input, making them see, hear, and feel things that are not there.", augment: "None." },
    
    // Level 4
    { name: "Dominate, Psionic", discipline: "Telepathy", level: "Psion/Wilder 4", display: "Mental", manifestingTime: "1 round", range: "Close (25 ft. + 5 ft./2 levels)", target: "One living creature", duration: "1 day/level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "7", description: "You control the target's actions telepathically.", augment: "None." },
    { name: "Mindwipe", discipline: "Telepathy", level: "Psion/Wilder 4", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature", duration: "Instantaneous", savingThrow: "Will partial", powerResistance: "Yes", powerPoints: "7", description: "You deal 4d6 points of Intelligence damage.", augment: "None." },

    // Level 5
    { name: "Mind Probe", discipline: "Telepathy", level: "Psion/Wilder 5", display: "Mental", manifestingTime: "1 minute", range: "Close (25 ft. + 5 ft./2 levels)", target: "One living creature", duration: "1 min./level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "9", description: "You can read the deep thoughts of a single creature.", augment: "None." },
    { name: "Psychic Crush", discipline: "Telepathy", level: "Psion/Wilder 5", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature", duration: "Instantaneous", savingThrow: "Will partial", powerResistance: "Yes", powerPoints: "9", description: "You crush the target's mind, leaving them stunned and dealing 9d6 damage.", augment: "None." },
    
    // Level 6
    { name: "Mind Switch", discipline: "Telepathy", level: "Psion/Wilder 6", display: "Mental", manifestingTime: "1 round", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature", duration: "1 min./level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "11", description: "You swap your mind with the target's. You control their body, and they control yours.", augment: "None." },
    { name: "Mass Suggestion, Psionic", discipline: "Telepathy", level: "Psion/Wilder 6", display: "Mental", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", target: "Several living creatures", duration: "1 hour/level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "11", description: "As psionic suggestion, but affects multiple creatures.", augment: "None." },

    // Level 7
    { name: "Crisis of Life", discipline: "Telepathy", level: "Psion/Wilder 7", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One living creature", duration: "Instantaneous", savingThrow: "Will partial", powerResistance: "Yes", powerPoints: "13", description: "You stop the target's heart. Fortitude save or die. If they save, they take 3d6+13 damage.", augment: "None." },
    { name: "Insanity", discipline: "Telepathy", level: "Psion/Wilder 7", display: "Mental", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", target: "One living creature", duration: "Instantaneous", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "13", description: "You inflict a permanent state of insanity.", augment: "None." },

    // Level 8
    { name: "Mind Seed", discipline: "Telepathy", level: "Psion/Wilder 8", display: "Mental", manifestingTime: "10 minutes", range: "Touch", target: "One creature", duration: "Permanent", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "15", description: "You implant a copy of your own personality and memories into the target. Over time, this seed grows and takes over the target's mind.", augment: "This power costs 300 XP." },
    
    // Level 9
    { name: "True Mind Switch", discipline: "Telepathy", level: "Psion/Wilder 9", display: "Mental", manifestingTime: "1 round", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature", duration: "Permanent", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "17", description: "You permanently swap bodies with the target.", augment: "None." },
    { name: "Microcosm", discipline: "Telepathy", level: "Psion/Wilder 9", display: "Mental", manifestingTime: "1 round", range: "Close (25 ft. + 5 ft./2 levels)", target: "One living creature", duration: "See text", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "17", description: "You trap the target's mind in a dream world, leaving their body catatonic.", augment: "None." },
];
