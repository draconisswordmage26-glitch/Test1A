// data/antagonists/cr_18_22/soulFlayerPsyker/tactics/index.ts
import { Tactics } from '../../../../types';

export const soulFlayerPsykerTactics: Tactics = {
  name: "Soul-Flayer Psyker",
  title: "Tactics: Soul-Flayer Psyker",
  description: "The Soul-Flayer is an apex predator of the mind. It avoids physical conflict, instead using its immense telepathic power to turn its enemies into puppets or vegetables. Its tactics are a cold, cruel, and efficient application of psychic force.",
  sections: [
    {
      title: "Round 1: Identify and Isolate",
      content: [
        "With its high initiative, the Psyker will almost always act first.",
        "It will identify the enemy with the weakest Will save (typically a fighter or rogue).",
        "It will use a quickened 'Ego Whip' to debuff their Will save further, then follow up with its standard action to manifest 'Dominate, Psionic' or 'Mindscape Prison'. A failed save on either of these effectively removes the target from the fight.",
      ]
    },
    {
      title: "Round 2: The Puppet Master",
      content: [
        "If it successfully dominated a foe, it will use its new puppet to attack the other party members, focusing on the spellcasters.",
        "It will use its own powers to continue disabling other foes, using powers like 'Id Insinuation' to cause confusion or another 'Dominate' attempt.",
        "It will always stay at a distance, protected by its powers and its new minions.",
      ]
    },
    {
      title: "Psychic Assassination",
      content: [
        "Against a single, powerful target, the Psyker will use its Slayer abilities. It will use stealth and powers like 'Greater Invisibility, Psionic' to study its target for 3 rounds.",
        "It will then unleash its death attack, pairing it with a devastating power like 'Psychic Crush'. The save DC for this attack will be incredibly high (DC 10 + 5 Slayer + 10 Int = DC 25), making it a near-certain kill.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: The Soul-Flayer is a perfect commander for mindless troops like constructs or undead, who are immune to its mind-affecting powers. It can direct them while it focuses on dismantling the enemy's minds.",
        "Weaknesses: Its greatest weakness is any creature immune to mind-affecting effects, such as a golem or another creature under a 'Mind Blank' effect. It has few direct damage options and is physically fragile. A powerful martial character who can get close to it can be a major threat."
      ]
    }
  ]
};