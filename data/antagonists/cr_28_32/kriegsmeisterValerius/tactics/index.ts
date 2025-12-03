
// data/antagonists/cr_28_32/kriegsmeisterValerius/tactics/index.ts
import { Tactics } from '../../../../types';

export const kriegsmeisterValeriusTactics: Tactics = {
  name: "Kriegsmeister Valerius",
  title: "Tactics: Kriegsmeister Valerius",
  description: "Valerius is the ultimate duelist. He does not use brute force. He wins through perfect technique and superior intellect. His tactics are a fencing match of feints, parries, and devastating ripostes. He aims to dismantle an opponent's fighting style, proving its inferiority before delivering the final, elegant blow.",
  sections: [
    {
      title: "Round 1: Analysis and Stance",
      content: [
        "Valerius will always win initiative thanks to his massive bonus.",
        "His first action is to enter his two preferred stances: 'Stance of the God-Slayer' to bypass all DR, and 'Atemporal Awareness' to gain Foresight and Mind Blank.",
        "He will then likely hold his action, inviting the opponent to make the first move.",
      ]
    },
    {
      title: "The Counter",
      content: [
        "When an enemy initiator attacks with a maneuver, Valerius uses his immediate action for 'Counter-Analysis'. The initiator must make a DC 45 Concentration check or their maneuver fails, wasting their action.",
        "If the maneuver fails, Valerius uses 'Steal Maneuver' to immediately use that same maneuver against them as a free action. This is the ultimate insult: being beaten with your own perfect technique.",
        "For example, if a Crusader initiates 'Revitalizing Strike' and fails the check, Valerius can immediately use 'Revitalizing Strike' himself, healing an ally and damaging the Crusader.",
      ]
    },
    {
      title: "The Riposte",
      content: [
        "Once Valerius has weathered or countered the enemy's attack, he takes his turn.",
        "He will use 'Time Stands Still' to make two full attacks, or 'Strike of Timeless Mind' to permanently remove a foe from the fight with no save.",
        "He is a master of every discipline and will always choose the perfect tool for the job. Against a heavily armored foe, he'll use a Stone Dragon maneuver that ignores hardness. Against a mobile foe, he'll use a Setting Sun throw to ground them.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Valerius is a solo artist. He is the Emperor's final solution for rogue martial adepts who have become too powerful.",
        "Weaknesses: While he is a master of martial combat, he is not a spellcaster. A powerful psion or wizard who can stay out of his reach and overcome his Mind Blank and high saves is his greatest threat. He is also only one man; a coordinated attack from multiple powerful epic foes could overwhelm his action economy."
      ]
    }
  ]
};
