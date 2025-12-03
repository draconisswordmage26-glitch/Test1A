// data/basePsionicPowers/psychokinesis.ts
import { PsionicPower } from '../../types';

export const basePsychokinesisPowers: PsionicPower[] = [
    // Level 1
    // FIX: Removed invalid 'effect' property.
    { name: "Energy Ray", discipline: "Psychokinesis", level: "Psion/Wilder 1", display: "Visual", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", duration: "Instantaneous", savingThrow: "None", powerResistance: "Yes", powerPoints: "1", description: "You fire a ray of energy that deals 1d6 damage. You choose the energy type (cold, electricity, fire, or sonic).", augment: "For every additional power point you spend, the damage increases by 1d6." },
    { name: "Control Light", discipline: "Psychokinesis", level: "Psion/Wilder 1", display: "Visual", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", area: "20-ft. radius", duration: "Concentration", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You can raise or lower the level of light in an area.", augment: "None." },
    { name: "Far Hand", discipline: "Psychokinesis", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One unattended object weighing up to 5 lb.", duration: "Concentration", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You can move a small object telekinetically.", augment: "None." },

    // Level 2
    { name: "Control Flames", discipline: "Psychokinesis", level: "Psion/Wilder 2", display: "Visual", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", area: "One fire source", duration: "Concentration", savingThrow: "None", powerResistance: "No", powerPoints: "3", description: "You can raise or lower the intensity of a fire, or move it around within its area.", augment: "None." },
    // FIX: Replaced invalid 'effect' property with 'target'.
    { name: "Energy Stun", discipline: "Psychokinesis", level: "Psion/Wilder 2", display: "Visual", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature", duration: "Instantaneous", savingThrow: "Fortitude negates", powerResistance: "Yes", powerPoints: "3", description: "You deal 1d6 electricity damage and stun the target for 1 round.", augment: "None." },
    // FIX: Removed invalid 'effect' property.
    { name: "Swarm of Crystals", discipline: "Psychokinesis", level: "Psion/Wilder 2", display: "Visual", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", duration: "Instantaneous", savingThrow: "None", powerResistance: "Yes", powerPoints: "3", description: "A ray of sharp crystals deals 3d4 slashing damage.", augment: "None." },

    // Level 3
    { name: "Energy Cone", discipline: "Psychokinesis", level: "Psion/Wilder 3", display: "Visual", manifestingTime: "1 standard action", range: "30 ft.", area: "Cone-shaped burst", duration: "Instantaneous", savingThrow: "Reflex half", powerResistance: "Yes", powerPoints: "5", description: "You create a cone of energy that deals 5d6 damage of your chosen type.", augment: "For every additional power point, damage increases by 1d6." },
    // FIX: Replaced invalid 'effect' property with 'area'.
    { name: "Energy Wall", discipline: "Psychokinesis", level: "Psion/Wilder 3", display: "Visual", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", area: "Wall up to 10 ft. long/level or a ring of 5 ft. radius/2 levels", duration: "Concentration + 1 round/level", savingThrow: "None", powerResistance: "Yes", powerPoints: "5", description: "You create a wall of your chosen energy type.", augment: "None." },
    
    // Level 4
    { name: "Telekinetic Thrust", discipline: "Psychokinesis", level: "Psion/Wilder 4", display: "Mental", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", target: "One creature or object up to 250 lbs.", duration: "Instantaneous", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "7", description: "You can telekinetically hurl a creature or object, dealing 4d6 damage and knocking them prone.", augment: "None." },
    { name: "Energy Adaptation", discipline: "Psychokinesis", level: "Psion/Wilder 4", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "10 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "7", description: "You gain resistance 10 to an energy type of your choice.", augment: "None." },

    // Level 5
    { name: "Energy Ball", discipline: "Psychokinesis", level: "Psion/Wilder 5", display: "Visual", manifestingTime: "1 standard action", range: "Long (400 ft. + 40 ft./level)", area: "20-ft.-radius burst", duration: "Instantaneous", savingThrow: "Reflex half", powerResistance: "Yes", powerPoints: "9", description: "You create a ball of energy that explodes, dealing 9d6 damage of your chosen type.", augment: "For every additional power point, damage increases by 1d6." },
    { name: "Fiery Discorporation", discipline: "Psychokinesis", level: "Psion/Wilder 5", display: "Visual", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 round/level", savingThrow: "None", powerResistance: "No", powerPoints: "9", description: "You transform into a swirling cloud of fire, gaining damage reduction and the ability to fly.", augment: "None." },

    // Level 6
    { name: "Disintegrate, Psionic", discipline: "Psychokinesis", level: "Psion/Wilder 6", display: "Visual", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", duration: "Instantaneous", savingThrow: "Fortitude partial", powerResistance: "Yes", powerPoints: "11", description: "A thin, green ray springs from your finger. A creature struck takes 2d6 points of damage per manifester level (max 40d6).", augment: "None." },
    { name: "Breath of the Black Dragon", discipline: "Psychokinesis", level: "Psion/Wilder 6", display: "Visual", manifestingTime: "1 standard action", range: "60 ft.", area: "60-ft. line", duration: "Instantaneous", savingThrow: "Reflex half", powerResistance: "Yes", powerPoints: "11", description: "You breathe a line of acid, dealing 11d6 acid damage.", augment: "None." },
    
    // Level 7
    { name: "Energy Wave", discipline: "Psychokinesis", level: "Psion/Wilder 7", display: "Visual", manifestingTime: "1 standard action", range: "60-ft. cone", area: "Cone-shaped burst", duration: "Instantaneous", savingThrow: "Reflex half", powerResistance: "Yes", powerPoints: "13", description: "You create a wave of energy that deals 13d6 damage of your chosen type.", augment: "For every additional power point, damage increases by 1d6." },
    
    // Level 8
    { name: "Telekinetic Sphere", discipline: "Psychokinesis", level: "Psion/Wilder 8", display: "Visual", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature or object", duration: "1 min./level (D)", savingThrow: "Reflex negates", powerResistance: "Yes", powerPoints: "15", description: "You create a globe of force that traps a creature. It is immobile and cannot be damaged.", augment: "None." },
    { name: "Mass Concussion", discipline: "Psychokinesis", level: "Psion/Wilder 8", display: "Auditory", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", area: "20-ft. radius burst", duration: "Instantaneous", savingThrow: "Fortitude negates", powerResistance: "Yes", powerPoints: "15", description: "You deal 1d6 damage and stun all creatures in the area for 1 round.", augment: "None." },

    // Level 9
    { name: "Tornado Blast", discipline: "Psychokinesis", level: "Psion/Wilder 9", display: "Visual", manifestingTime: "1 standard action", range: "Long (400 ft. + 40 ft./level)", area: "Cylinder (30-ft. radius, 60 ft. high)", duration: "1 round", savingThrow: "Reflex half", powerResistance: "Yes", powerPoints: "17", description: "You create a tornado of roaring wind, dealing 17d6 bludgeoning damage and potentially blowing creatures away.", augment: "None." },
    { name: "Detonation", discipline: "Psychokinesis", level: "Psion/Wilder 9", display: "Visual", manifestingTime: "1 standard action", range: "Long (400 ft. + 40 ft./level)", area: "30-ft. radius burst", duration: "Instantaneous", savingThrow: "Reflex half", powerResistance: "Yes", powerPoints: "17", description: "You create a massive explosion of force, dealing 17d6 damage.", augment: "None." },
];