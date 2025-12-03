
// data/antagonists/cr_60_plus/godEmperorZarthus/tactics/index.ts
import { Tactics } from '../../../../types';

export const godEmperorZarthusTactics: Tactics = {
  name: "God-Kaiser Zharov",
  title: "Tactics: God-Kaiser Zharov",
  description: "The God-Kaiser does not fight; he orchestrates slaughter. He is a being of supreme tactical intellect and overwhelming power, whose every action is calculated to inflict the maximum amount of suffering before the final, inevitable victory. He will use his mastery of magic, martial combat, and diabolical authority in a perfect, horrifying synthesis.",
  sections: [
    {
      title: "Pre-Combat / The First Moment",
      content: [
        "Zharov is never surprised. He has numerous 'Contingency' and epic spells active at all times. This includes 'Mind Blank', 'Foresight', and a custom epic spell that teleports him to his throne room if he is ever brought below 50% health.",
        "His first action in combat, before initiative is even rolled, is to use his Lord of the Nine ability, 'Word of Law'. This forces every non-lawful creature on the entire plane to make a DC 68 Will save or be stunned for 1d4 rounds. This can potentially end the fight before it begins.",
      ]
    },
    {
      title: "Round 1: Reshape Reality",
      content: [
        "Zharov uses his 'Automatic Quicken Spell' feat to cast a quickened epic spell like 'Calamitous Vortex' or 'Anathema of Unmaking' on the party's primary spellcaster.",
        "His standard action is to cast another epic spell, likely 'Isolate', on the party's primary damage dealer. This removes the target from the fight with no save if they fail to overcome his SR.",
        "With two of the party's key members potentially neutralized in the first round, he can then focus on torturing the rest.",
      ]
    },
    {
      title: "Round 2: The Legion and the Blade",
      content: [
        "As a swift action, Zharov uses his Scepter of Nessus to summon a legion of 20 Cornugon devils to bog down the remaining heroes.",
        "He then uses his move and standard action to engage a remaining hero in melee combat, using Power Attack to deliver a devastating blow with his scepter.",
        "He can use another quickened spell to further debuff the party or buff his new legion."
      ]
    },
    {
      title: "Round 3+: Absolute Dominion",
      content: [
        "Zharov continues to use his action economy advantage to cast multiple spells per round while making full attacks.",
        "He will use his 'Chains of Asmodeus' to bind any hero who proves particularly troublesome, forcing them into servitude.",
        "He is a god on his home plane. He can use 'Wish' at will to change the terrain, summon reinforcements, or undo the heroes' magic.",
        "He will not hesitate to use 'Hellfire Apocalypse' if the heroes are clustered, even if it means sacrificing some of his own devils. They are expendable tools for his perfect order."
      ]
    },
     {
      title: "Ultimate Goal & Weaknesses",
      content: [
        "Goal: Zharov's goal is not just to kill the heroes, but to break them utterly, to make them curse their own gods and beg for the release of oblivion. He will attempt to dominate, not destroy, the most powerful heroes to turn them into new, broken trophies for his collection.",
        "Weaknesses: His only true weakness is his supreme sadism and arrogance. He will draw out the suffering of his opponents, which a clever party might be able to exploit. Furthermore, while he is a demigod, he is not omnipotent. A coordinated alpha strike from four equally powerful epic characters, especially those wielding artifacts of Good or Chaos, could potentially overwhelm his defenses before he can react, though this is incredibly difficult to achieve."
      ]
    }
  ]
};
