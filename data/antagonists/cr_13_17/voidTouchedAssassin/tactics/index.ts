// data/antagonists/cr_13_17/voidTouchedAssassin/tactics/index.ts
import { Tactics } from '../../../../types';

export const voidTouchedAssassinTactics: Tactics = {
  name: "Void-Touched Assassin",
  title: "Tactics: Void-Touched Assassin",
  description: "The Void-Touched Assassin is a patient and methodical killer. It will never engage in a fair fight, preferring to use its supernatural mobility and stealth to strike from the shadows and disappear before the enemy can retaliate.",
  sections: [
    {
      title: "The Ambush",
      content: [
        "The assassin will always initiate combat from stealth, preferably after studying a target for 3 rounds to enable its Death Attack.",
        "Its opening move is to use 'Shadow Jump' as a move action to teleport into a flanking position behind a vulnerable target, like a wizard or sorcerer.",
        "It then uses its full attack action to deliver as many sneak attacks as possible.",
      ]
    },
    {
      title: "Hit and Fade",
      content: [
        "After its initial attack, the assassin will use its Tumble skill and another 'Shadow Jump' to retreat into the darkness.",
        "It will use its Hide in Plain Sight ability to become unseen, study a new target, and repeat the process.",
        "Its Wounding weapons and Despair Toxin are designed to wear down opponents over time. It is a war of attrition that the assassin is well-equipped to win.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Works well with battlefield controllers who can create areas of darkness or fog for it to hide in. A pair of assassins working together can be devastating.",
        "Weaknesses: Its main weakness is any ability that negates stealth or concealment, such as 'True Seeing' or 'Glitterdust'. It is not exceptionally durable and can be brought down quickly if it is unable to hide. Creatures immune to critical hits and sneak attacks are its worst nightmare."
      ]
    }
  ]
};