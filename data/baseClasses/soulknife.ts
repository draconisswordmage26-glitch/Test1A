// data/baseClasses/soulknife.ts
import { BaseClass } from "../../types";

export const soulknife: BaseClass = {
    name: "Soulknife",
    hitDie: 10,
    skillPoints: 4,
    classSkills: ["Autohypnosis", "Climb", "Concentration", "Craft", "Hide", "Jump", "Knowledge (psionics)", "Listen", "Move Silently", "Profession", "Psicraft", "Spot", "Tumble"],
    bab: 'good',
    saves: { fort: 'poor', ref: 'good', will: 'good' },
    primaryAbility: 'wis',
    role: 'psionic',
    classFeatures: [
        { level: 1, name: "Mind Blade", description: "Can form a semi-solid blade of psychic energy." },
        { level: 2, name: "Weapon Focus (Mind Blade)", description: "Gains Weapon Focus with their mind blade as a bonus feat." },
        { level: 3, name: "Throw Mind Blade", description: "Can throw their mind blade with a 30-foot range increment." },
        { level: 4, name: "Psychic Strike", description: "Can imbue their mind blade with a psychic strike, dealing an extra 1d8 damage." },
        { level: 5, name: "Speed of Thought", description: "Gains Speed of Thought as a bonus feat." },
        { level: 6, name: "Mind Blade Enhancement", description: "Can enhance their mind blade with magical properties (+1)." },
        { level: 8, name: "Psychic Strike", description: "Psychic strike damage increases to +2d8." },
        { level: 9, name: "Bladewind", description: "Can make a whirlwind attack with their mind blade." },
        { level: 10, name: "Mind Blade Enhancement", description: "Enhancement bonus increases to +2." },
        { level: 12, name: "Psychic Strike", description: "Psychic strike damage increases to +3d8." },
        { level: 14, name: "Mind Blade Enhancement", description: "Enhancement bonus increases to +3." },
        { level: 16, name: "Psychic Strike", description: "Psychic strike damage increases to +4d8." },
        { level: 18, name: "Mind Blade Enhancement", description: "Enhancement bonus increases to +4." },
        { level: 20, name: "Psychic Strike", description: "Psychic strike damage increases to +5d8." },
        { level: 20, name: "Mind Blade Enhancement", description: "Enhancement bonus increases to +5." },
    ]
};
