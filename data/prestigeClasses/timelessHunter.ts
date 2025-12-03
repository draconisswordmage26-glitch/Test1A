// data/prestigeClasses/timelessHunter.ts
import { PrestigeClass } from '../../types';

export const timelessHunter: PrestigeClass = {
    name: "Timeless Hunter",
    description: "The Timeless Hunter is a predator that exists outside the normal flow of time. It stalks its prey across their entire timeline, striking from the past and future to ensure a kill.",
    requirements: [
        "Base Attack Bonus: +21.",
        "Feats: Bounding Assault, Epic Dodge, Blinding Speed.",
        "Skills: Tumble 30 ranks.",
        "Special: Skirmish ability or similar mobility-based damage bonus."
    ],
    hitDie: 10,
    skillPoints: 8,
    classSkills: ["Balance", "Climb", "Hide", "Jump", "Listen", "Move Silently", "Search", "Spot", "Tumble"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'poor'
    },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Temporal Skirmish", description: "Your skirmish damage increases by +2d6 and your AC bonus increases by +2." },
      { level: 2, name: "Step from Time", description: "At will, you can become invisible and incorporeal for 1 round as a swift action." },
      { level: 3, name: "Acausal", description: "You are immune to paradoxes, effects that would alter your personal history, and all forms of scrying." },
      { level: 4, name: "Hunt Across the Timeline", description: "You can use Greater Teleport at will. Once you have damaged a creature, you can teleport to their location at any point in time within the last 24 hours." },
      { level: 5, name: "Temporal Flurry", description: "3/day, as a full-round action, you can make a full attack against a single target. The target is struck by three versions of you (past, present, future), taking the damage from three separate full attacks." },
      { level: 6, name: "Unstuck in Time", description: "You are permanently under the effects of Freedom of Movement and Haste." },
      { level: 7, name: "Temporal Skirmish", description: "Your skirmish damage increases by another +2d6 and your AC bonus by another +2." },
      { level: 8, name: "Prey's End", description: "You gain your class level as an insight bonus on attack and damage rolls against a creature you have designated as your prey (1/day)." },
      { level: 9, name: "Temporal Flurry", description: "You can now use Temporal Flurry 5/day." },
      { level: 10, name: "Paradox Strike", description: "Your attacks ignore all damage reduction, hardness, and miss chances. Furthermore, a creature damaged by your attacks must make a Fortitude save or have a past injury reappear, taking 5d6 points of Constitution drain." },
    ],
    progression: ["Scout"],
};