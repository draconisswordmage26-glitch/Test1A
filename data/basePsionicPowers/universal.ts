// data/basePsionicPowers/universal.ts
import { PsionicPower } from '../../types';

export const baseUniversalPowers: PsionicPower[] = [
    // Level 1
    { name: "Decoy", discipline: "Universal", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 standard action", range: "20 ft.", area: "20-ft.-radius spread", duration: "1 round/level", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You create a psychic decoy that draws the attention of unintelligent creatures.", augment: "None." },
    { name: "My Light", discipline: "Universal", level: "Psion/Wilder 1", display: "Visual", manifestingTime: "1 standard action", range: "10 ft.", area: "10-ft.-radius glow", duration: "10 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You create a globe of light that follows you.", augment: "None." },
    { name: "Inertial Armor", discipline: "Psychokinesis", level: "Psion/Wilder 1", display: "Visual", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 hour/level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "A field of force grants you a +4 armor bonus to AC.", augment: "For every 2 additional power points, the bonus increases by 1." },

    // Level 2
    { name: "Conceal Thoughts", discipline: "Universal", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 hour/level", savingThrow: "None", powerResistance: "No", powerPoints: "3", description: "You conceal your thoughts and alignment from detection.", augment: "None." },
    { name: "Detect Hostile Intent", discipline: "Clairsentience", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 standard action", range: "30 ft.", area: "30-ft.-radius emanation centered on you", duration: "10 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "3", description: "You can detect creatures with hostile intentions.", augment: "None." },

    // Level 3
    { name: "Dispel Psionics", discipline: "Universal", level: "Psion/Wilder 3", display: "Mental", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", target: "One manifester, creature, or object", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "5", description: "You can cancel psionic powers and effects.", augment: "None." },
    { name: "Suppress Schism", discipline: "Universal", level: "Psion/Wilder 3", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature", duration: "1 round/level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "5", description: "You suppress the target's ability to use the Schism power.", augment: "None." },

    // Level 4
    { name: "Schism", discipline: "Universal", level: "Psion/Wilder 4", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 round/level", savingThrow: "None", powerResistance: "No", powerPoints: "7", description: "Your mind splits into two independent parts. You gain an extra mental-only standard action each round.", augment: "None." },
    // FIX: Replaced invalid 'effect' property with 'area'.
    { name: "Wall of Ectoplasm", discipline: "Shaper", level: "Psion/Wilder 4", display: "Visual", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", area: "Ectoplasmic wall whose area is up to one 10-ft. square/level", duration: "1 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "7", description: "You create a wall of sticky ectoplasm that traps creatures who touch it.", augment: "None." },

    // Level 5
    { name: "Power Resistance", discipline: "Universal", level: "Psion/Wilder 5", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "9", description: "You gain power resistance equal to 12 + your manifester level.", augment: "None." },
    { name: "True Seeing, Psionic", discipline: "Universal", level: "Psion/Wilder 5", display: "Visual", manifestingTime: "1 standard action", range: "Touch", target: "Creature touched", duration: "1 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "9", description: "You see all things as they truly are.", augment: "None." },

    // Level 6
    { name: "Antipsionic Field", discipline: "Universal", level: "Psion/Wilder 6", display: "Mental", manifestingTime: "1 standard action", range: "10 ft.", area: "10-ft.-radius emanation, centered on you", duration: "10 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "11", description: "Negates psionics within 10 ft.", augment: "None." },
    { name: "Dispel Psionics, Greater", discipline: "Universal", level: "Psion/Wilder 6", display: "Mental", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", target: "One manifester, creature, or object", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "11", description: "As dispel psionics, but with a +20 limit on the dispel check.", augment: "None." },

    // Level 7
    { name: "Sequester, Psionic", discipline: "Universal", level: "Psion/Wilder 7", display: "Mental", manifestingTime: "1 standard action", range: "Touch", target: "One willing creature or object", duration: "1 day/level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "13", description: "You hide a creature from location and scrying.", augment: "None." },

    // Level 8
    { name: "Bend Reality", discipline: "Universal", level: "Psion/Wilder 8", display: "Mental", manifestingTime: "1 standard action", range: "See text", target: "See text", duration: "See text", savingThrow: "See text", powerResistance: "See text", powerPoints: "15", description: "This power functions like a Limited Wish, duplicating lower-level powers.", augment: "This power costs 300 XP." },

    // Level 9
    { name: "Reality Revision", discipline: "Universal", level: "Psion/Wilder 9", display: "Mental", manifestingTime: "1 standard action", range: "See text", target: "See text", duration: "See text", savingThrow: "See text", powerResistance: "See text", powerPoints: "17", description: "This power functions like a Wish, duplicating powers and creating other effects.", augment: "This power costs 5000 XP." },
    { name: "Apopsi", discipline: "Universal", level: "Psion/Wilder 9", display: "Mental", manifestingTime: "1 standard action", range: "20 ft.", area: "20-ft.-radius burst", duration: "1 round/level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "17", description: "You create a psychic dead zone where psionic creatures lose their power points.", augment: "None." },
];