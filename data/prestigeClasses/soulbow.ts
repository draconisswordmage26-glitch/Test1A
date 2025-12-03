// data/prestigeClasses/soulbow.ts
import { PrestigeClass } from '../../types';

export const soulbow: PrestigeClass = {
    name: "Soulbow",
    description: "The soulbow is a soulknife who has learned to shape their mind blade not as a melee weapon, but as a deadly ranged projectile. They are psionic archers, their arrows formed from pure thought.",
    requirements: [
        "Base Attack Bonus: +4.",
        "Feats: Weapon Focus (mind blade).",
        "Special: Mind blade class feature."
    ],
    prerequisites: {
        bab: 4,
        feats: ["Weapon Focus (mind blade)"],
        special: "Mind blade class feature"
    },
    hitDie: 8,
    skillPoints: 4,
    classSkills: ["Autohypnosis", "Climb", "Concentration", "Craft", "Hide", "Jump", "Listen", "Move Silently", "Profession", "Psicraft", "Spot", "Tumble"],
    bab: 'good',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Mind Arrow", description: "You can form your mind blade into arrows. These arrows can be fired from any bow." },
      { level: 2, name: "Psychic Strike", description: "You can imbue your mind arrows with your psychic strike ability." },
      { level: 3, name: "Phase Arrow", description: "Your mind arrows can pass through solid objects, ignoring cover." },
      { level: 4, name: "Bonus Feat", description: "Gain a bonus feat from the Soulbow bonus feat list (e.g., Point Blank Shot)." },
      { level: 5, name: "Mind Arrow Enhancement", description: "Your mind arrows gain a +1 enhancement bonus." },
      { level: 6, name: "Hail of Arrows", description: "As a full-round action, you can fire a mind arrow at every target within a 60-foot cone." },
      { level: 8, name: "Bonus Feat", description: "Gain another bonus feat." },
      { level: 10, name: "Mind Arrow Enhancement", description: "Your mind arrows gain an additional special property (e.g., seeking, keen)." },
    ],
    progression: ['Soulknife'],
};