// data/prestigeClasses/slayer.ts
import { PrestigeClass } from '../../types';

export const slayer: PrestigeClass = {
    name: "Slayer",
    description: "The slayer is a psionic assassin, a hunter who uses their mental powers to become the perfect killer. They are masters of stealth, infiltration, and psychic assassination.",
    requirements: [
        "Base Attack Bonus: +5.",
        "Skills: Hide 8 ranks, Move Silently 8 ranks.",
        "Feats: Psionic Meditation.",
        "Special: Must be able to manifest 1st-level psionic powers."
    ],
    prerequisites: {
        bab: 5,
        skills: { "Hide": 8, "Move Silently": 8 },
        feats: ["Psionic Meditation"],
        spells: { psionic: 1 }
    },
    hitDie: 6,
    skillPoints: 4,
    classSkills: ["Autohypnosis", "Balance", "Bluff", "Climb", "Concentration", "Craft", "Disguise", "Escape Artist", "Hide", "Intimidate", "Jump", "Listen", "Move Silently", "Profession", "Psicraft", "Sense Motive", "Spot", "Tumble", "Use Psionic Device"],
    bab: 'average',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Psychic Assassination", description: "After studying a target for 3 rounds, a successful attack can be paired with a psionic power to force a save or die." },
      { level: 2, name: "Uncanny Dodge", description: "Retains Dex bonus to AC when flat-footed." },
      { level: 3, name: "Mind Stab", description: "When you deal sneak attack damage, you can forgo 2d6 of the damage to deal 1 point of Intelligence damage instead." },
      { level: 4, name: "Manifester Level", description: "Advances psionic manifesting." },
      { level: 5, name: "Improved Uncanny Dodge", description: "Can no longer be flanked." },
      { level: 6, name: "Manifester Level", description: "Advances psionic manifesting." },
      { level: 7, name: "Mind Cripple", description: "When you deal sneak attack damage, you can forgo 4d6 of the damage to deal 1 point of Intelligence drain instead." },
      { level: 8, name: "Manifester Level", description: "Advances psionic manifesting." },
      { level: 9, name: "Hide in Plain Sight", description: "Can use the Hide skill even while being observed." },
      { level: 10, name: "Manifester Level", description: "Advances psionic manifesting." },
    ],
};