// data/basePsionicPowers/clairsentience.ts
import { PsionicPower } from '../../types';

export const baseClairsentiencePowers: PsionicPower[] = [
    // Level 1
    { name: "Precognition, Defensive", discipline: "Clairsentience", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You gain a +1 insight bonus to AC and saves.", augment: "For every 2 additional power points you spend, the insight bonus increases by 1." },
    { name: "Detect Psionics", discipline: "Clairsentience", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 standard action", range: "60 ft.", area: "Cone-shaped emanation", duration: "Concentration, up to 1 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You detect the presence of psionics.", augment: "None." },
    { name: "Know Direction and Location", discipline: "Clairsentience", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You know your precise location and what direction you face.", augment: "None." },

    // Level 2
    { name: "See Invisibility", discipline: "Clairsentience", level: "Psion/Wilder 2", display: "Visual", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "10 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "3", description: "You can see any invisible or ethereal creatures or objects within your range of vision.", augment: "You can manifest this power on another willing creature." },
    // FIX: Replaced invalid 'effect' property with 'target'.
    { name: "Object Reading", discipline: "Clairsentience", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 minute", range: "Touch", target: "One object", duration: "Concentration", savingThrow: "None", powerResistance: "No", powerPoints: "3", description: "You learn details about an object's previous owner.", augment: "None." },
    { name: "Detect Hostile Intent", discipline: "Clairsentience", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 standard action", range: "30 ft.", area: "30-ft.-radius emanation centered on you", duration: "10 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "3", description: "You can detect creatures with hostile intentions.", augment: "None." },

    // Level 3
    { name: "Clairvoyant Sense", discipline: "Clairsentience", level: "Psion/Wilder 3", display: "Mental", manifestingTime: "1 minute", range: "Long (400 ft. + 40 ft./level)", target: "You", duration: "1 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "5", description: "You can see and hear from a location of your choice, as if you were there.", augment: "None." },
    { name: "Danger Sense", discipline: "Clairsentience", level: "Psion/Wilder 3", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 hour/level", savingThrow: "None", powerResistance: "No", powerPoints: "5", description: "You gain a +2 insight bonus on Reflex saves and a +2 dodge bonus to AC against traps.", augment: "None." },
    { name: "Touchsight", discipline: "Clairsentience", level: "Psion/Wilder 3", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "5", description: "You can 'see' by feeling vibrations in the air and ground, gaining blindsight out to 30 ft.", augment: "None." },

    // Level 4
    { name: "Anchored Navigation", discipline: "Clairsentience", level: "Psion/Wilder 4", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "10 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "7", description: "You always know your precise location in relation to a chosen anchor point. This makes you immune to getting lost and provides a +10 bonus on Survival checks to navigate.", augment: "None." },
    { name: "Detect Remote Viewing", discipline: "Clairsentience", level: "Psion/Wilder 4", display: "Mental", manifestingTime: "1 standard action", range: "Personal", area: "40-ft.-radius emanation", duration: "24 hours", savingThrow: "None", powerResistance: "No", powerPoints: "7", description: "You know when others are spying on you with divination/clairsentience.", augment: "None." },

    // Level 5
    { name: "Clairtangent Hand", discipline: "Clairsentience", level: "Psion/Wilder 5", display: "Mental", manifestingTime: "1 standard action", range: "Long (400 ft. + 40 ft./level)", duration: "1 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "9", description: "You can use a telekinetic hand to manipulate objects from a distance, as if using a mage hand that can be used at long range and through your clairvoyant sensor.", augment: "None." },
    { name: "Second Chance", discipline: "Clairsentience", level: "Psion/Wilder 5", display: "Mental", manifestingTime: "1 immediate action", range: "Personal", target: "You", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "9", description: "You can reroll one d20 roll you just made. You must take the result of the second roll.", augment: "None." },

    // Level 6
    { name: "Precognition, Greater", discipline: "Clairsentience", level: "Psion/Wilder 6", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 round/level", savingThrow: "None", powerResistance: "No", powerPoints: "11", description: "You gain a +2 insight bonus to AC and on saving throws, and you are never flat-footed.", augment: "None." },
    { name: "Remote View Trap", discipline: "Clairsentience", level: "Psion/Wilder 6", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One scrying sensor", duration: "1 hour/level", savingThrow: "None", powerResistance: "No", powerPoints: "11", description: "You create a trap for scrying sensors. If a creature scries on the area, they must make a Will save or be affected by a 'Mind Seed' power.", augment: "None." },

    // Level 7
    { name: "Fate of One", discipline: "Clairsentience", level: "Psion/Wilder 7", display: "Mental", manifestingTime: "1 immediate action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature", duration: "1 round", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "13", description: "You force a creature to reroll a d20 roll they just made. You decide whether they use the better or worse result.", augment: "None." },
    
    // Level 8
    { name: "Foresight", discipline: "Clairsentience", level: "Psion/Wilder 8", display: "Mental", manifestingTime: "1 standard action", range: "Personal or Touch", target: "You or creature touched", duration: "10 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "15", description: "You are never surprised or caught flat-footed. In addition, you gain a +2 insight bonus to AC and on Reflex saves.", augment: "None." },
    
    // Level 9
    { name: "Metafaculty", discipline: "Clairsentience", level: "Psion/Wilder 9", display: "Mental", manifestingTime: "10 minutes", range: "Personal", target: "You", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "17", description: "You gain a brief, overwhelming insight into a single topic, as if you had taken 20 on a relevant Knowledge check with ranks equal to your manifester level.", augment: "This power costs 500 XP." },
];