
// data/antagonists/cr_13_17/ironDisciplinarian/tactics/index.ts
import { Tactics } from '../../../../types';

export const ironDisciplinarianTactics: Tactics = {
  name: "Iron-Disciplinarian",
  title: "Tactics: Iron-Disciplinarian",
  description: "The Iron-Disciplinarian is a reactive fighter. It wins by letting the opponent make the first move and then punishing them brutally for it. It is a master of the immediate action and the attack of opportunity, turning the enemy's own turn into a deathtrap.",
  sections: [
    {
      title: "Round 1: The Patient Stance",
      content: [
        "The Disciplinarian will almost always hold its action until after its opponent acts.",
        "It will activate its stances, likely 'Thicket of Blades' (to control movement) and 'Hearing the Air' (to negate concealment).",
        "It will use its 'Robilar's Gambit' and 'Karmic Strike' feats. This makes it take a penalty to AC, but guarantees it an attack of opportunity against anyone who attacks it, whether they hit or miss. This is its core tactic.",
      ]
    },
    {
      title: "The Counter-Attack",
      content: [
        "When an enemy initiator uses a strike, the Disciplinarian uses its immediate action to counter it. 'Wall of Blades' can block a melee strike. 'Moment of Perfect Mind' can negate a failed Will save.",
        "Because the enemy attacked, the Disciplinarian gets an attack of opportunity from Robilar's Gambit. It will use this to make a powerful strike of its own, such as 'Finishing Move' if the target is wounded.",
        "It uses its high Tumble skill to move into a flanking position without provoking attacks of opportunity.",
      ]
    },
    {
      title: "Exploiting Openings",
      content: [
        "The Disciplinarian is a master of the 'Stormguard Warrior' feat. If it survives an enemy's full attack, it will often choose to take the 'Channel the Storm' option, forgoing its own attacks of opportunity to add all that potential damage to its next attack, creating a single, devastating blow.",
        "It is a smart fighter and will identify the enemy's most-used discipline. It will then use 'Adaptive Style' to swap its readied maneuvers to include the perfect counters for that discipline.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Disciplinarians work best in pairs, able to flank and provide overlapping zones of control. They are excellent bodyguards for high-value targets like Grand Strategos Vorn.",
        "Weaknesses: Its strategy relies on the enemy attacking it. A foe who can win through battlefield control or save-or-die spells without making attack rolls can bypass its primary defenses. Its Will save is decent but not unbeatable. A powerful psion or wizard is a major threat."
      ]
    }
  ]
};
