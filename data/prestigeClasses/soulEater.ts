// data/prestigeClasses/soulEater.ts
import { PrestigeClass } from '../../types';

export const soulEater: PrestigeClass = {
    name: "Soul Eater",
    description: "The Soul Eater learns to consume the very essence of their foes, adding the stolen spiritual energy to their own. They are terrifying combatants who grow stronger with every life they extinguish, their own soul a chorus of their devoured victims.",
    requirements: [
        "Base Attack Bonus: +15 or Caster Level 15th.",
        "Feats: Ability to drain energy or souls, or Totemist's Totem Bind.",
        "Alignment: Any evil."
    ],
    hitDie: 10,
    skillPoints: 4,
    classSkills: ["Bluff", "Concentration", "Craft", "Disguise", "Intimidate", "Knowledge (arcana/religion/the planes)", "Spellcraft"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full BAB or Caster Level", description: "Choose to advance either your Base Attack Bonus or your spellcasting at every level." },
      { level: 1, name: "Devour Soul", description: "When a living creature dies within 60 ft., you can use a free action to consume its soul. This heals you for 10d8 hit points." },
      { level: 2, name: "Soul Pool", description: "You can store an unlimited number of souls. You can expend a soul to fuel certain abilities." },
      { level: 3, name: "Steal Skill", description: "Expend a soul to gain proficiency and a number of ranks in one of the deceased's skills equal to their HD. This is permanent until you choose to replace it." },
      { level: 4, name: "Soulblast", description: "Expend a soul to create a 60-ft. burst of negative energy, dealing 2d6 damage per character level." },
      { level: 5, name: "Steal Power", description: "Expend a soul to gain the permanent benefit of one of the deceased's feats (you must meet the prerequisites)." },
      { level: 6, name: "Improved Devour Soul", description: "Your Devour Soul ability now also grants you 10 temporary hit points per HD of the slain creature." },
      { level: 7, name: "Soul Shield", description: "Expend a soul to gain a +10 profane bonus to AC for 10 minutes." },
      { level: 8, name: "Steal Life", description: "Expend a soul to use a quickened Energy Drain as a spell-like ability." },
      { level: 9, name: "Greater Soulblast", description: "Your Soulblast now deals 3d6 damage per character level and bestows 1d4 negative levels." },
      { level: 10, name: "Echo of the Slain", description: "Once per round, you can expend a soul to manifest any (Ex), (Su), or (Sp) ability of a creature whose soul you have devoured for 1 minute." },
    ],
    progression: ['Totemist'],
};