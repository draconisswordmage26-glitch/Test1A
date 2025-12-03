// data/prestigeClasses/assassin.ts
import { PrestigeClass } from '../../types';

export const assassin: PrestigeClass = {
    name: "Assassin",
    description: "The assassin is a master of dealing death. They are stealthy killers who use poison and surprise to eliminate their targets with deadly efficiency.",
    requirements: [
        "Skills: Disguise 4 ranks, Hide 8 ranks, Move Silently 8 ranks.",
        "Alignment: Any evil.",
        "Special: Must have killed a creature for no other reason than to join the assassins."
    ],
    prerequisites: {
        skills: { "Disguise": 4, "Hide": 8, "Move Silently": 8 },
        alignment: ["Lawful Evil", "Neutral Evil", "Chaotic Evil"],
        special: "Must have killed a creature for no other reason than to join the assassins."
    },
    hitDie: 6,
    skillPoints: 4,
    classSkills: ["Balance", "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide", "Intimidate", "Jump", "Listen", "Move Silently", "Open Lock", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Swim", "Tumble", "Use Magic Device", "Use Rope"],
    bab: 'average',
    saves: {
        fort: 'poor',
        ref: 'good',
        will: 'poor'
    },
    features: [
      { level: 1, name: "Death Attack", description: "After studying a target for 3 rounds, a successful sneak attack can paralyze or kill the target." },
      { level: 1, name: "Sneak Attack", description: "Gains +1d6 sneak attack damage. This stacks with other sources." },
      { level: 1, name: "Poison Use", description: "Can use poison without any chance of accidentally poisoning oneself." },
      { level: 2, name: "Save Bonus vs. Poison", description: "Gains a +1 bonus on saving throws against poison." },
      { level: 3, name: "Sneak Attack", description: "Sneak attack damage increases to +2d6." },
      { level: 4, name: "Uncanny Dodge", description: "Retains Dex bonus to AC when flat-footed." },
      { level: 5, name: "Sneak Attack", description: "Sneak attack damage increases to +3d6." },
      { level: 6, name: "Improved Uncanny Dodge", description: "Can no longer be flanked." },
      { level: 7, name: "Sneak Attack", description: "Sneak attack damage increases to +4d6." },
      { level: 8, name: "Hide in Plain Sight", description: "Can use the Hide skill even while being observed." },
      { level: 9, name: "Sneak Attack", description: "Sneak attack damage increases to +5d6." },
      { level: 10, name: "Hide in Plain Sight", description: "Can hide in plain sight." },
    ],
    progression: ['Rogue'],
};