// data/basePsionicPowers/psychometabolism.ts
import { PsionicPower } from '../../types';

export const basePsychometabolismPowers: PsionicPower[] = [
    // Level 1
    { name: "Vigor", discipline: "Psychometabolism", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You gain 5 temporary hit points.", augment: "For every additional power point, you gain 5 more temporary hit points." },
    { name: "Biofeedback", discipline: "Psychometabolism", level: "Psion/Wilder 1", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You gain DR 2/—.", augment: "For every 3 additional power points, the DR increases by 1." },
    { name: "Chameleon", discipline: "Psychometabolism", level: "Psion/Wilder 1", display: "Visual", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "10 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "1", description: "You gain a +10 competence bonus on Hide checks.", augment: "None." },
    
    // Level 2
    { name: "Animal Affinity", discipline: "Psychometabolism", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "3", description: "You gain a +4 enhancement bonus to one physical ability score (Str, Dex, or Con).", augment: "You can manifest this on another willing creature." },
    { name: "Share Pain", discipline: "Psychometabolism", level: "Psion/Wilder 2", display: "Mental", manifestingTime: "1 standard action", range: "Touch", target: "One willing creature", duration: "1 hour/level", savingThrow: "None", powerResistance: "No", powerPoints: "3", description: "A willing subject takes half the damage you would take.", augment: "None." },
    
    // Level 3
    { name: "Ectoplasmic Form", discipline: "Psychometabolism", level: "Psion/Wilder 3", display: "Visual", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "5", description: "You become incorporeal, able to pass through solid objects.", augment: "None." },
    { name: "Hustle", discipline: "Psychometabolism", level: "Psion/Wilder 3", display: "Mental", manifestingTime: "1 swift action", range: "Personal", target: "You", duration: "Instantaneous", savingThrow: "None", powerResistance: "No", powerPoints: "5", description: "Instantly gain a move action.", augment: "None." },

    // Level 4
    { name: "Death Urge", discipline: "Psychometabolism", level: "Psion/Wilder 4", display: "Mental", manifestingTime: "1 standard action", range: "Medium (100 ft. + 10 ft./level)", target: "One living creature", duration: "1 round/level", savingThrow: "Will negates", powerResistance: "Yes", powerPoints: "7", description: "You compel a creature to attempt suicide.", augment: "None." },
    { name: "Psionic Freedom of Movement", discipline: "Psychometabolism", level: "Psion/Wilder 4", display: "Mental", manifestingTime: "1 standard action", range: "Personal or Touch", target: "You or creature touched", duration: "10 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "7", description: "You move normally despite impediments.", augment: "None." },
    
    // Level 5
    { name: "Psychofeedback", discipline: "Psychometabolism", level: "Psion/Wilder 5", display: "Mental", manifestingTime: "1 swift action", range: "Personal", target: "You", duration: "1 round", savingThrow: "None", powerResistance: "No", powerPoints: "9", description: "You trade ability score points for a bonus on attack, damage, or saves.", augment: "None." },
    { name: "Adapt Body", discipline: "Psychometabolism", level: "Psion/Wilder 5", display: "Mental", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 hour/level", savingThrow: "None", powerResistance: "No", powerPoints: "9", description: "You can survive in any environment, including the vacuum of space.", augment: "None." },

    // Level 6
    { name: "Breath of the Black Dragon, Psionic", discipline: "Psychometabolism", level: "Psion/Wilder 6", display: "Visual", manifestingTime: "1 standard action", range: "60 ft.", area: "60-ft. line", duration: "Instantaneous", savingThrow: "Reflex half", powerResistance: "Yes", powerPoints: "11", description: "You breathe a line of acid, dealing 11d6 acid damage.", augment: "None." },
    { name: "Form of Doom", discipline: "Psychometabolism", level: "Psion/Wilder 6", display: "Visual", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "11", description: "You assume a terrifying form, gaining a frightful presence and several natural attacks.", augment: "None." },

    // Level 7
    { name: "Metamorphosis", discipline: "Psychometabolism", level: "Psion/Wilder 7", display: "Visual", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "13", description: "You assume the form of another creature, as the Polymorph spell, but you can change into creatures with more Hit Dice.", augment: "None." },
    { name: "Oak Body", discipline: "Psychometabolism", level: "Psion/Wilder 7", display: "Visual", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 min./level", savingThrow: "None", powerResistance: "No", powerPoints: "13", description: "You become a treant, gaining its abilities.", augment: "None." },

    // Level 8
    { name: "Iron Body, Psionic", discipline: "Psychometabolism", level: "Psion/Wilder 8", display: "Visual", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "15", description: "Your body becomes living iron, granting DR 15/adamantine and other immunities.", augment: "None." },
    
    // Level 9
    { name: "Fission", discipline: "Psychometabolism", level: "Psion/Wilder 9", display: "Visual", manifestingTime: "1 standard action", range: "Personal", target: "You", duration: "1 round/level", savingThrow: "None", powerResistance: "No", powerPoints: "17", description: "You create a duplicate of yourself that has all your abilities and equipment. The duplicate is under your control.", augment: "None." },
    { name: "Affinity Field", discipline: "Psychometabolism", level: "Psion/Wilder 9", display: "Mental", manifestingTime: "1 standard action", range: "20 ft.", area: "20-ft.-radius emanation centered on you", duration: "10 min./level (D)", savingThrow: "None", powerResistance: "No", powerPoints: "17", description: "You can share any psychometabolism powers you manifest on yourself with all allies in the area.", augment: "None." },
];
