// data/prestigeClasses/devilBinder.ts
import { PrestigeClass } from '../../types';

export const devilBinder: PrestigeClass = {
    name: "Devil-Binder",
    description: "The devil-binder is a master of diabolical contracts, able to summon and bind devils to their will. They are not mere conjurers, but lawyers of the infernal courts, their power derived from iron-clad pacts.",
    requirements: [
        "Skills: Knowledge (the planes) 15 ranks, Spellcraft 15 ranks.",
        "Feats: Spell Focus (Conjuration).",
        "Spells: Ability to cast Planar Binding.",
        "Alignment: Any lawful."
    ],
    prerequisites: {
        skills: { "Knowledge (the planes)": 15, "Spellcraft": 15 },
        feats: ["Spell Focus (Conjuration)"],
        spells: { arcane: 5 },
        alignment: ["Lawful Good", "Lawful Neutral", "Lawful Evil"]
    },
    hitDie: 6,
    skillPoints: 2,
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Forgery", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Profession", "Sense Motive", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing arcane spellcasting progression at every level." },
      { level: 1, name: "Infernal Pact", description: "You can add any [Lawful] or [Evil] spell to your spellbook. The DC for your conjuration spells increases by 1." },
      { level: 2, name: "Summon Devil", description: "Once per day, you can summon a devil whose CR is equal to or less than your character level. It serves you loyally for 1 hour." },
      { level: 3, name: "Iron Will of the Binder", description: "You are immune to the magical compulsions and telepathy of devils." },
      { level: 4, name: "Binding Contract", description: "When you use a Planar Binding spell on a devil, it is treated as a Calling spell, and the devil cannot resist if you win the Charisma check." },
      { level: 5, name: "Lord of a Legion", description: "You can have up to three devils bound to your service at any time. You gain a +4 bonus on all Charisma-based checks when interacting with devils." }
    ],
    advancesArcane: true,
};