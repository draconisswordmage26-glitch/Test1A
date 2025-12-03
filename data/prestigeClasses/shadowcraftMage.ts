// data/prestigeClasses/shadowcraftMage.ts
import { PrestigeClass } from '../../types';

export const shadowcraftMage: PrestigeClass = {
    name: "Shadowcraft Mage",
    description: "The shadowcraft mage is a master of illusion who has learned the secret of weaving substance from shadow. Their illusions are not mere tricks of light and sound, but quasi-real creations that can have tangible effects on the world.",
    requirements: [
        "Race: Gnome.",
        "Skills: Spellcraft 8 ranks, Knowledge (arcana) 8 ranks.",
        "Feats: Spell Focus (Illusion), Greater Spell Focus (Illusion)."
    ],
    hitDie: 4,
    skillPoints: 2,
    classSkills: ["Bluff", "Concentration", "Craft", "Disguise", "Hide", "Knowledge (arcana)", "Profession", "Sleight of Hand", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing arcane spellcasting progression at every level." },
        { level: 1, name: "Shadow Illusion", description: "Your Silent Image spell is now treated as being 20% real. Creatures interacting with it get a Will save to disbelieve; if they fail, they are subject to its real effects." },
        { level: 2, name: "Extended Illusion", description: "You can double the duration of your illusion spells." },
        { level: 3, name: "Silent Illusion", description: "You gain Silent Spell as a bonus feat, but it only applies to illusion spells." },
        { level: 4, name: "Shadow Simulacrum", description: "You can use your Silent Image spell to create a quasi-real duplicate of a creature, as the Simulacrum spell." },
        { level: 5, name: "Greater Shadow Illusion", description: "Your illusion spells are now 60% real. You can use Silent Image to mimic sorcerer or wizard conjuration (creation) spells of 4th level or lower." }
    ],
    progression: ['Wizard'],
};