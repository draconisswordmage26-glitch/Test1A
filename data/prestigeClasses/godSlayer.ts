// data/prestigeClasses/godSlayer.ts
import { PrestigeClass } from '../../types';

export const godSlayer: PrestigeClass = {
    name: "God-Slayer",
    description: "The God-Slayer is a mortal who has dedicated their life to the impossible: hunting and killing deities. They are masters of bypassing divine defenses and striking at the very essence of a god's power.",
    requirements: [
        "Base Attack Bonus: +21",
        "Feats: Epic Toughness, Epic Weapon Focus, any two other epic combat feats.",
        "Special: Must have slain a creature of CR 25 or higher."
    ],
    prerequisites: {
        bab: 21,
        feats: ["Epic Toughness", "Epic Weapon Focus"],
        special: "Must have slain a CR 25+ creature"
    },
    hitDie: 12,
    skillPoints: 2,
    classSkills: ["Climb", "Concentration", "Intimidate", "Jump", "Knowledge (religion)", "Sense Motive"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Sunder Divinity", description: "Your attacks bypass a divine creature's damage reduction. You gain a +2 inherent bonus to your primary combat ability score (Str or Dex)." },
      { level: 2, name: "Divine Rebuke", description: "You are immune to the fear auras of divine creatures." },
      { level: 3, name: "Bonus Epic Feat", description: "Gain a bonus epic feat from the Fighter bonus feat list." },
      { level: 4, name: "Unravel Miracle", description: "You can attempt to counter a divine spell as an immediate action by making a Will save (DC 20 + spell level)." },
      { level: 5, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to your primary combat ability score." },
      { level: 6, "name": "God-Hunter's Tenacity", "description": "You are immune to the divine spell-like abilities of any creature whose Divine Rank is less than 5." },
      { level: 7, name: "Bonus Epic Feat", description: "Gain a bonus epic feat." },
      { level: 8, "name": "Wound the God", "description": "Your critical hits against divine creatures ignore their immunity to critical hits." },
      { level: 9, name: "Inherent Bonus", description: "You gain another +2 inherent bonus to your primary combat ability score." },
      { level: 10, name: "Deicide", description: "Once per day, you can declare one attack as a Deicide blow. If it hits a divine creature, they must make a Fortitude save (DC 20 + class level + Str mod) or have their Divine Rank permanently reduced by 1. A creature whose Divine Rank is reduced to 0 in this way is slain and cannot be brought back by any means short of an over-deity's intervention." },
    ],
    progression: ["Fighter"],
};