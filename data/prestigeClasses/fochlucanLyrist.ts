// data/prestigeClasses/fochlucanLyrist.ts
import { PrestigeClass } from '../../types';

export const fochlucanLyrist: PrestigeClass = {
    name: "Fochlucan Lyrist (Adapted)",
    description: "A legendary figure of fey lore, the Fochlucan Lyrist is a master of many arts, seamlessly blending the skills of a rogue, the songs of a bard, and the magic of both the arcane and the divine. This adapted path allows a uniquely talented individual to progress all their gifts in harmony.",
    requirements: [
        "Skills: Perform 10 ranks, Knowledge (nature) 5 ranks, Spellcraft 10 ranks.",
        "Spells: Ability to cast 2nd-level arcane spells and 2nd-level divine spells.",
        "Special: Bardic Music class feature, Sneak Attack class feature."
    ],
    prerequisites: {
        skills: { "Perform": 10, "Knowledge (nature)": 5, "Spellcraft": 10 },
        spells: { arcane: 2, divine: 2 },
        special: "Bardic Music, Sneak Attack"
    },
    hitDie: 6,
    skillPoints: 6,
    classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Disguise", "Escape Artist", "Gather Information", "Hide", "Jump", "Knowledge (all)", "Listen", "Move Silently", "Open Lock", "Perform", "Profession", "Search", "Sense Motive", "Sleight of Hand", "Speak Language", "Spellcraft", "Tumble", "Use Magic Device"],
    bab: 'average',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Harmonious Progression", description: "At each level, you advance your arcane spellcasting, divine spellcasting, bardic music abilities, and rogue special abilities (like sneak attack and trapfinding) as if you had gained a level in all of your original base classes." },
      { level: 1, name: "Sneak Attack", description: "You gain +1d6 sneak attack damage. This stacks with sneak attack from other sources." },
      { level: 2, name: "Lore of the Ages", description: "Your class levels stack with your Archivist levels for determining the effects of your Lore Mastery ability. You can make a bardic knowledge check with a +10 bonus." },
      { level: 3, name: "Sneak Attack", description: "You gain +1d6 sneak attack damage." },
      { level: 4, name: "Song of the Spirit", description: "You can expend a daily use of your bardic music to spontaneously cast any divine spell you know." },
      { level: 5, name: "Sneak Attack", description: "You gain +1d6 sneak attack damage." },
      { level: 6, name: "Song of the Arcane", description: "You can expend a daily use of your bardic music to spontaneously cast any arcane spell you know." },
      { level: 7, name: "Sneak Attack", description: "You gain +1d6 sneak attack damage." },
      { level: 8, name: "Uncanny Dodge", description: "You retain your Dexterity bonus to AC even if you are caught flat-footed or struck by an invisible attacker." },
      { level: 9, name: "Sneak Attack", description: "You gain +1d6 sneak attack damage." },
      { level: 10, name: "One with the Song", description: "You have become a being of pure story and magic. You are immune to all language-dependent and sonic effects. Once per day, you can use your bardic music to cast 'Wish' as a spell-like ability, using your combined caster level." },
    ],
    advancesArcane: true,
    advancesDivine: true,
    progression: ['Bard', 'Rogue', 'Wizard', 'Archivist'],
};