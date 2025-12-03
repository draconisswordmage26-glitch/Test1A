// data/prestigeClasses/kensai.ts
import { PrestigeClass } from '../../types';

export const kensai: PrestigeClass = {
    name: "Kensai",
    description: "The kensai is a warrior who has formed an unbreakable bond with a single weapon. Through intense discipline and meditation, they learn to channel their own life force into their chosen weapon, making it an extension of their own body and soul.",
    requirements: [
        "Base Attack Bonus: +5",
        "Feats: Weapon Focus with chosen weapon, Combat Expertise.",
        "Skills: Concentration 4 ranks, Craft (weaponsmithing) 4 ranks."
    ],
    prerequisites: {
        bab: 5,
        feats: ["Weapon Focus", "Combat Expertise"],
        skills: { "Concentration": 4, "Craft (weaponsmithing)": 4 }
    },
    hitDie: 10,
    skillPoints: 2,
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Intimidate", "Jump", "Tumble"],
    bab: 'good',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Signature Weapon", description: "You forge a bond with one specific weapon. You can never lose this weapon, and you can summon it to your hand as a free action." },
      { level: 2, name: "Power Surge", description: "1/day, you can gain a +8 bonus to Strength for 1 round." },
      { level: 3, name: "Withstand", description: "1/day, you can gain DR 5/- for 1 round." },
      { level: 4, name: "Instill", description: "You can imbue your signature weapon with magical properties by spending experience points." },
      { level: 5, name: "Ki Warlord", description: "You can spend a turn/rebuke attempt to gain a +4 bonus to Str or Dex for 1 round." },
      { level: 6, name: "Power Surge", description: "You can use Power Surge 2/day." },
      { level: 7, name: "Withstand", description: "You can use Withstand 2/day, and the DR increases to 10/-." },
      { level: 8, name: "Ki Critical", description: "You can spend a turn/rebuke attempt to automatically confirm a critical threat." },
      { level: 9, name: "Instill", description: "You can imbue your weapon with more powerful abilities." },
      { level: 10, name: "One with the Blade", description: "You and your weapon are one. You can never be disarmed, and your weapon can never be sundered. You gain a +2 bonus on attack and damage rolls with it." },
    ],
    progression: ['Fighter'],
};