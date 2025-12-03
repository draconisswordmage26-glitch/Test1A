// data/basePsionicPowers/shaper.ts
import { PsionicPower } from '../../types';

export const baseShaperPowers: PsionicPower[] = [
    // Level 1
    // FIX: Replaced invalid 'effect' property with 'target'.
    { name: "Astral Construct", discipline: "Shaper", level: "Psion/Wilder 1", display: "Visual", manifestingTime: "1 round", range: "Close (25 ft. + 5 ft./2 levels)", target: "One summoned creature", duration: "1 round/level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You summon an ectoplasmic construct that fights for you. Its abilities are determined by the number of power points you spend.", augment: "This power has a long list of augments that allow you to customize the construct's abilities." },
    // FIX: Replaced invalid 'effect' property with 'target'.
    { name: "Minor Creation, Psionic", discipline: "Shaper", level: "Psion/Wilder 1", display: "Visual", manifestingTime: "1 minute", range: "0 ft.", target: "Unattended, nonmagical object of nonliving vegetable matter", duration: "1 hour/level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You create a small, temporary object of vegetable matter.", augment: "None." },
    
    // Level 2
    { name: "Ectoplasmic Cocoon", discipline: "Shaper", level: "Psion/Wilder 2", display: "Visual", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One creature", duration: "1 round/level (D)", savingThrow: "Reflex partial", powerResistance: "Yes", powerPoints: "3", description: "You encase a foe in a sticky, ectoplasmic cocoon, entangling them with no save. A Reflex save allows them to avoid being grappled.", augment: "You can spend more points to make the cocoon tougher." },
    { name: "Psionic Repair Damage", discipline: "Shaper", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 standard action", range: "Touch", target: "Construct touched", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "3", description: "You repair 3d8+5 points of damage to a construct.", augment: "None." },

    // Level 3
    // FIX: Replaced invalid 'effect' property with 'area'.
    { name: "Ectoplasmic Grapnel", discipline: "Shaper", level: "Psion/Wilder 3", display: "Visual", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", area: "A line of ectoplasm", duration: "1 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "5", description: "You create an ectoplasmic rope that can be used for climbing or as a grappling hook.", augment: "None." },
    { name: "Astral Caravan", discipline: "Shaper", level: "Psion/Wilder 3", display: "Mental", manifestingTime: "1 standard action", range: "Close (25 ft. + 5 ft./2 levels)", target: "One astral construct/3 levels", duration: "10 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "5", description: "You can combine your astral constructs into a single, larger, more powerful construct.", augment: "None." },
    
    // Level 4
    // FIX: Replaced invalid 'effect' property with 'area'.
    { name: "Wall of Ectoplasm", discipline: "Shaper", level: "Psion/Wilder 4", display: "Visual", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", area: "Ectoplasmic wall whose area is up to one 10-ft. square/level", duration: "1 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "7", description: "You create a wall of sticky ectoplasm that traps creatures who touch it.", augment: "None." },
    // FIX: Replaced invalid 'effect' property with 'target'.
    { name: "Major Creation, Psionic", discipline: "Shaper", level: "Psion/Wilder 4", display: "Visual", manifestingTime: "10 minutes", range: "Close (25 ft. + 5 ft./2 levels)", target: "Unattended, nonmagical object of mineral matter", duration: "1 hour/level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "7", description: "You create a temporary object of mineral matter.", augment: "None." },
    
    // Level 5
    { name: "Fabricate, Psionic", discipline: "Shaper", level: "Psion/Wilder 5", display: "Visual", manifestingTime: "See text", range: "Close (25 ft. + 5 ft./2 levels)", target: "Up to 10 cu. ft./level of raw material", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "9", description: "You convert raw materials into finished items of the same material.", augment: "None." },
    { name: "Hail of Crystals", discipline: "Shaper", level: "Psion/Wilder 5", display: "Visual", manifestingTime: "1 standard action", range: "Long (400 ft. + 40 ft./level)", area: "Cylinder (40-ft. radius, 20 ft. high)", duration: "Instantaneous", savingThrow: "Reflex half", powerResistance: "Yes", powerPoints: "9", description: "You create a shower of sharp crystals, dealing 9d4 slashing damage.", augment: "None." },

    // Level 6
    { name: "Crystallize", discipline: "Shaper", level: "Psion/Wilder 6", display: "Visual", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", target: "One creature", duration: "Instantaneous", savingThrow: "Fortitude negates", powerResistance: "Yes", powerPoints: "11", description: "You turn a creature into a crystal statue, as Flesh to Stone.", augment: "None." },
    
    // Level 7
    // FIX: Replaced invalid 'effect' property with 'area'.
    { name: "Quintessence", discipline: "Shaper", level: "Psion/Wilder 7", display: "Visual", manifestingTime: "1 round", range: "Close (25 ft. + 5 ft./2 levels)", area: "5 cu. ft. of ectoplasm", duration: "Permanent", savingThrow: "None", powerResistance: "No", powerPoints: "13", description: "You create a block of permanent, inert, non-magical ectoplasm. This can be used to build structures.", augment: "None." },
    
    // Level 8
    // FIX: Replaced invalid 'effect' property with 'target'.
    { name: "True Creation, Psionic", discipline: "Shaper", level: "Psion/Wilder 8", display: "Visual", manifestingTime: "10 minutes", range: "Close (25 ft. + 5 ft./2 levels)", target: "Unattended, nonmagical object of any matter", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "15", description: "You create a permanent, nonmagical object of any type of matter.", augment: "This power costs 200 XP." },
    
    // Level 9
    // FIX: Replaced invalid 'effect' property with 'area'.
    { name: "Genesis", discipline: "Shaper", level: "Psion/Wilder 9", display: "Mental", manifestingTime: "1 week", range: "180 ft.", area: "A demiplane with a radius of 180 ft.", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "17", description: "You create a new, finite demiplane.", augment: "This power costs 500 XP." },
    // FIX: Replaced invalid 'effect' property with 'target'.
    { name: "Ectoplasmic Shambler", discipline: "Shaper", level: "Psion/Wilder 9", display: "Visual", manifestingTime: "1 round", range: "Close (25 ft. + 5 ft./2 levels)", target: "One summoned creature", duration: "1 round/level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "17", description: "You create a Huge shambling mound made of ectoplasm that fights for you.", augment: "None." },
];