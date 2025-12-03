
// data/antagonists/cr_40_50/grandStrategos/tactics/index.ts
import { Tactics } from '../../../../types';

export const grandStrategosTactics: Tactics = {
  name: "Grand Strategos Vorn",
  title: "Tactics: Grand Strategos Vorn",
  description: "Vorn is a puppet master. He never fights directly. An encounter with Vorn is a grueling gauntlet against his endless legions and his perfect control of the battlefield. The heroes should feel like rats in a maze designed by a sadistic god.",
  sections: [
    {
      title: "The Gauntlet",
      content: [
        "The approach to Vorn's command center is the battle itself. It will be a series of kill-zones, ambushes, and perfectly orchestrated waves of his minions.",
        "He will use his at-will 'Wall of Force' and 'Solid Fog' to separate the party, funnel them into traps, and block their retreat.",
        "He will use 'Summon Legion' to constantly replenish his forces, sending in fresh waves of Inquisitors or Hex-Legionnaires to wear the party down.",
      ]
    },
    {
      title: "Psychological Warfare",
      content: [
        "Vorn will be a constant presence, his amplified voice taunting the heroes, analyzing their tactics aloud, and pointing out their deepest fears and failures.",
        "His auras will turn the party's own summons or charmed allies against them.",
        "He will focus his forces with brutal efficiency, identifying the party's weakest link and exploiting it relentlessly.",
      ]
    },
    {
      title: "The Final Confrontation",
      content: [
        "If the heroes manage to breach his throne room, they will find him physically helpless but surrounded by his most elite guard (likely several Plague-Knights and Hex-Legionnaires).",
        "The throne itself is a powerful artifact that grants him significant defenses, but if it is destroyed, Vorn himself is easily killed.",
        "Vorn's ultimate goal is not to kill the party himself, but to make them exhaust every resource, every spell, and every last drop of hope in the meat grinder of his army, only to find a frail old man at the center of their torment.",
      ]
    },
    {
      title: "Synergies & Weaknesses",
      content: [
        "Synergies: Vorn is the ultimate force multiplier. His auras and tactical commands can turn a simple imperial soldier into a deadly threat.",
        "Weaknesses: Vorn himself is the weakness. Any ability that can bypass his army and teleport directly into his sealed bunker (perhaps through scry-and-die tactics) can end the threat quickly. He is utterly reliant on his throne; destroying it renders him powerless. Anti-magic fields can disrupt his battlefield control and summoning abilities."
      ]
    }
  ]
};
