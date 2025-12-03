// data/prestigeClasses/ironDisciplinarian.ts
import { PrestigeClass } from '../../types';

export const ironDisciplinarian: PrestigeClass = {
    name: "Iron Disciplinarian",
    description: "The Iron Disciplinarian is a warrior who has studied every martial discipline for the sole purpose of learning how to break them. They are the ultimate counter-punchers, turning an enemy's perfect strike into their final, fatal mistake.",
    requirements: [
        "Base Attack Bonus: +15",
        "Feats: Combat Reflexes, Robilar's Gambit, Adaptive Style.",
        "Skills: Martial Lore 18 ranks, Sense Motive 18 ranks."
    ],
    prerequisites: {
        bab: 15,
        feats: ["Combat Reflexes", "Robilar's Gambit", "Adaptive Style"],
        skills: { "Martial Lore": 18, "Sense Motive": 18 }
    },
    hitDie: 12,
    skillPoints: 4,
    classSkills: ["Balance", "Concentration", "Craft", "Intimidate", "Jump", "Martial Lore", "Sense Motive", "Tumble"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Initiator Level Progression", description: "This class advances your existing martial maneuver progression at every level." },
      { level: 1, name: "Counter-Analysis", description: "As an immediate action when an enemy initiates a maneuver, you can identify it and force the initiator to make a Concentration check (DC 15 + your class level + your Int mod) or the maneuver fails." },
      { level: 2, name: "Bonus Feat", description: "Gain a bonus feat from the Fighter bonus feat list." },
      { level: 3, name: "Steal Maneuver", description: "If an enemy's maneuver fails due to your Counter-Analysis, you can immediately use that same maneuver yourself as a free action, even if you don't know it." },
      { level: 4, name: "Perfect Clarity", description: "You are immune to feints and gain a +5 bonus on Sense Motive checks." },
      { level: 5, name: "Break the Flow", description: "When you successfully counter a maneuver, the enemy cannot initiate any more maneuvers for 1 round." },
      { level: 6, name: "Bonus Feat", description: "Gain a bonus feat from the Fighter bonus feat list." },
      { level: 7, name: "Master's Riposte", description: "When you use Steal Maneuver, the stolen maneuver is automatically quickened if it is a strike." },
      { level: 8, name: "Unbreakable Mind", description: "You are immune to all mind-affecting effects." },
      { level: 9, name: "Bonus Feat", description: "Gain a bonus feat from the Fighter bonus feat list." },
      { level: 10, "name": "One with the Blade", "description": "You have achieved martial perfection. You may have three stances active at once. Once per day, you can initiate 'Strike of Timeless Mind' as if you knew the maneuver." }
    ],
};
