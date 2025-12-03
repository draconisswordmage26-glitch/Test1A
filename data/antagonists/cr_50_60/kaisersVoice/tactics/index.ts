
// data/antagonists/cr_50_60/kaisersVoice/tactics/index.ts
import { Tactics } from '../../../../types';

export const kaisersVoiceTactics: Tactics = {
  name: "The Kaiser's Voice",
  title: "Tactics: The Kaiser's Voice",
  description: "The Kaiser's Voice is a siege weapon, not a duelist. It does not engage directly. It sits on a hill miles from the battlefield and rains down sonic and psychological devastation. An encounter with it is a race against time: breach its defenses and destroy it before its relentless bombardment grinds the entire region to dust and despair.",
  sections: [
    {
      title: "Opening Salvo (Miles Away)",
      content: [
        "The battle begins with the Voice firing its Vox Cannon from its maximum range of 5 miles. It will target strategic locations: castles, temples, city centers.",
        "Its 'Propaganda Broadcast' immediately affects the entire battlefield, debuffing the heroes and buffing its own troops.",
        "It will deploy its legion of soldiers to form a defensive perimeter, preventing anyone from getting close.",
      ]
    },
    {
      title: "Relentless Bombardment",
      content: [
        "The Voice will fire its Vox Cannon every round. It will alternate targets between enemy fortifications and any concentrations of heroes or their allies.",
        "The constant -10 penalty to Will saves from its aura makes the 'Symbol of Despair' effect from its cannon incredibly difficult to resist.",
        "Its goal is attrition. It will wear down the heroes' resources, morale, and hit points from a position of near-perfect safety.",
      ]
    },
    {
      title: "Close-Range Defense",
      content: [
        "If heroes manage to close the distance (likely via flight or teleportation), the Voice will use its Siege Hammers to defend itself.",
        "With its colossal size and high strength, its melee attacks are devastating, but this is its secondary function. It will rely on its deployed troops to handle close-range threats.",
        "Its high DR, SR, and hardness make it incredibly difficult to damage. Heroes will need powerful epic spells or adamantine siege weapons of their own to breach its hull."
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Kaiser's Voice is the ultimate support unit for a large-scale invasion. Its auras and bombardment can break an army's morale before the first sword is even swung.",
        "Weaknesses: It is incredibly slow and not agile. It has no defense against subterranean attacks. A party that can burrow beneath it or teleport directly inside could bypass its main defenses. Spells that create earthquakes or transmute its hull could also be effective, if they can overcome its massive SR and hardness."
      ]
    }
  ]
};
