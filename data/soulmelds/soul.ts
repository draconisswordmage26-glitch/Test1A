// data/soulmelds/soul.ts
import { Soulmeld } from '../../types';

export const soulSoulmelds: Soulmeld[] = [
  {
    name: "Heart of the Unraveller",
    levelReq: 26,
    essentia: "For every point of essentia invested, the DC of your disjoining gaze increases by 1.",
    description: "A third eye opens in your forehead, granting you a constant True Seeing effect. You gain a +10 insight bonus on Spellcraft and Psicraft checks.",
    category: "Soul",
    chakraBind: [{
      chakra: "Soul",
      description: "You gain a gaze attack with a 60-foot range. Any creature you look at is targeted by a Mordenkainen's Disjunction effect (Caster Level = Character Level). A Will save (DC 15 + Cha mod + essentia) negates this. You can suppress or resume this ability as a free action.",
    }],
  },
  {
    name: "Shroud of the Restless Soul",
    levelReq: 30,
    essentia: "For every point of essentia invested, you gain a +1 deflection bonus to AC.",
    description: "A tattered, ghostly shroud clings to you. You gain the benefits of being incorporeal, granting you a 50% miss chance against corporeal attacks. You can suppress or resume this ability as a move action.",
    category: "Soul",
    chakraBind: [{
      chakra: "Soul",
      description: "You become a true ghost. Your type changes to Undead (Incorporeal). You gain a Constitution score of -- and use your Charisma modifier for hit points. You gain all other ghost traits.",
    }],
  },
  {
    name: "Phylactery of the Failed Lich",
    levelReq: 34,
    essentia: "For every point of essentia invested, your fast healing increases by 2.",
    description: "A small, ornate box hangs around your neck, whispering secrets of immortality. You gain Fast Healing 5 and are immune to all death effects.",
    category: "Soul",
    chakraBind: [{
      chakra: "Soul",
      description: "The phylactery functions as a true phylactery. If you are killed, your soul is drawn into the phylactery, and you can reform your body in 1d10 days unless the phylactery is destroyed.",
    }],
  },
  {
    name: "Heart-Lantern of the Wight",
    levelReq: 28,
    essentia: "For every point of essentia invested, the negative level bestowed by your touch persists for an additional hour.",
    description: "A ghostly lantern hangs in the center of your chest, its light draining the life from all around it. You gain a touch attack that bestows one negative level on a living creature.",
    category: "Soul",
    chakraBind: [{
      chakra: "Soul",
      description: "Your touch attack now bestows 1d4 negative levels. Any humanoid slain by your touch attack rises as a Wight under your control 1d4 rounds later.",
    }],
  },
  {
    name: "Soul-Gem of the Devourer",
    levelReq: 36,
    essentia: "For every point of essentia invested, the range of your soul trap increases by 10 feet.",
    description: "A black, soul-devouring gem is embedded in your chest. When a living creature dies within 30 feet of you, you can use an immediate action to trap its soul in the gem.",
    category: "Soul",
    chakraBind: [{
      chakra: "Soul",
      description: "You can consume a trapped soul as a standard action to heal yourself for 10 times the creature's HD in hit points, or to gain the benefits of a 'Heal' spell.",
    }],
  },
  {
    name: "Aura of the Ghast",
    levelReq: 24,
    essentia: "For every point of essentia invested, the radius of your aura increases by 5 feet.",
    description: "You emit a ghastly stench of decay in a 10-foot radius. Any creature in the area must make a Fortitude save (DC 15 + Con mod) or be sickened for as long as they remain in the aura and for 1d4 rounds after.",
    category: "Soul",
    chakraBind: [{
      chakra: "Soul",
      description: "The sickening effect of your aura now requires no save. Furthermore, your natural attacks carry a paralytic touch (Fort DC 15 + Con mod, paralysis for 1d4 rounds).",
    }],
  },
  {
    name: "Mantle of the Vampire Lord",
    levelReq: 38,
    essentia: "For every point of essentia invested, you gain a +2 bonus on Bluff and Intimidate checks.",
    description: "A regal, high-collared cape of black and red velvet drapes over you. You gain DR 10/silver and magic, and you can use 'Dominate Person' as a spell-like ability once per day.",
    category: "Soul",
    chakraBind: [{
      chakra: "Soul",
      description: "You gain a blood drain attack. When you successfully pin a foe, you can drain their blood, dealing 1d4 points of Constitution drain each round.",
    }],
  },
];
