// data/prestigeClasses/arcaneHierophant.ts
import { PrestigeClass } from '../../types';

export const arcaneHierophant: PrestigeClass = {
    name: "Arcane Hierophant",
    description: "The arcane hierophant walks the path between the raw power of nature and the ordered logic of arcane magic, weaving them together into a new, powerful synthesis. They are masters of both worlds, equally at home in a druid's grove or a wizard's tower.",
    requirements: [
        "Skills: Knowledge (arcana) 8 ranks, Knowledge (nature) 8 ranks.",
        "Feats: Skill Focus (Knowledge [nature]).",
        "Spells: Ability to cast 2nd-level divine spells and 2nd-level arcane spells."
    ],
    prerequisites: {
        skills: { "Knowledge (arcana)": 8, "Knowledge (nature)": 8 },
        feats: ["Skill Focus (Knowledge (nature))"],
        spells: { arcane: 2, divine: 2 },
    },
    hitDie: 6,
    skillPoints: 4,
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (arcana)", "Knowledge (nature)", "Profession", "Ride", "Spellcraft", "Survival", "Swim"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
        { level: 1, name: "Spellcasting", description: "At each level, you advance both your arcane and divine spellcasting abilities as if you had gained a level in both classes." },
        { level: 1, name: "Ignore Arcane Spell Failure", description: "You can ignore the arcane spell failure chance for light and medium armor." },
        { level: 2, name: "Companion Familiar", description: "Your animal companion and familiar merge into a single creature, gaining the benefits of both." },
        { level: 3, name: "Channel the Elements", description: "You can spontaneously convert any prepared arcane spell into a Summon Nature's Ally spell of the same level." },
        { level: 4, name: "Hierophant's Skill", description: "You gain a +4 competence bonus on all Knowledge (nature) and Survival checks." },
        { level: 5, name: "Ignore Arcane Spell Failure", description: "You can now ignore the arcane spell failure chance for heavy armor and shields." },
        { level: 6, name: "Mastery of the Wild", description: "Your Wild Shape ability now functions at +3 effective Druid levels." },
        { level: 7, name: "Channel the Arcane", description: "You can spontaneously convert any prepared divine spell into an arcane spell you know of the same level." },
        { level: 8, name: "Hierophant's Power", description: "The caster level for all your spells increases by 1." },
        { level: 9, name: "Spell-Like Ability", description: "You can choose one spell you know and can cast it twice per day as a spell-like ability." },
        { level: 10, name: "One with Nature", description: "You gain the timeless body and elemental shape druid class features." }
    ],
    advancesArcane: true,
    advancesDivine: true,
    progression: ['Druid', 'Wizard'],
};