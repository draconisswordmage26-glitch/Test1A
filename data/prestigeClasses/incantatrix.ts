// data/prestigeClasses/incantatrix.ts
import { PrestigeClass } from '../../types';

export const incantatrix: PrestigeClass = {
    name: "Incantatrix",
    description: "The incantatrix is a master of metamagic, able to manipulate the raw energy of spells in ways that other mages can only dream of. They can alter, redirect, and empower magic with unparalleled skill.",
    requirements: [
        "Skills: Knowledge (arcana) 8 ranks, Spellcraft 8 ranks.",
        "Feats: Iron Will, any two metamagic feats."
    ],
    prerequisites: {
        skills: { "Knowledge (arcana)": 8, "Spellcraft": 8 },
        feats: ["Iron Will"] // Simplified
    },
    hitDie: 4,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Knowledge (arcana)", "Knowledge (the planes)", "Profession", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing arcane spellcasting progression at every level." },
        { level: 1, name: "Cooperative Metamagic", description: "You can apply your metamagic feats to spells cast by willing allies." },
        { level: 2, name: "Metamagic Effect", description: "You can apply a metamagic feat you know to an ongoing spell effect." },
        { level: 3, name: "Seize Spell", description: "You can attempt to seize control of a spell as it is being cast, turning its effect against the original caster." },
        { level: 4, name: "Metamagic Spell-Like Ability", description: "You can apply your metamagic feats to your spell-like abilities." },
        { level: 5, name: "Instant Metamagic", description: "Once per day, you can apply a metamagic feat to a spell without increasing its casting time." },
        { level: 6, name: "Improved Metamagic", description: "The spell level cost of all your metamagic feats is reduced by one." },
        { level: 7, name: "Instant Metamagic", description: "You can use Instant Metamagic twice per day." },
        { level: 8, name: "Persistent Spell", description: "You gain Persistent Spell as a bonus feat." },
        { level: 9, name: "Instant Metamagic", description: "You can use Instant Metamagic three times per day." },
        { level: 10, name: "Metamagic Freedom", description: "Once per day, you can apply any metamagic feat you know to a spell without increasing its spell level or casting time." }
    ]
};
