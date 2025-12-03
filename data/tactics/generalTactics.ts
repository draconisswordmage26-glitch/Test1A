import { Tactics } from '../../types';

export const generalTactics: Tactics = {
  name: "General Tactics",
  title: "A Primer on High-Level 3.5e Combat",
  description: "Welcome to the deep end. High-level D&D 3.5e and Pathfinder play is a different beast entirely. It's less about attrition and more about overwhelming force and strategic positioning. Understanding these core concepts is key to running these epic encounters effectively.",
  sections: [
    {
      title: "Action Economy is King",
      content: [
        "The side that can do more things in a round usually wins. Celerity, Haste, Swift/Immediate actions, and abilities that grant extra actions (like the Eternal Blade's 'Island in Time') are incredibly powerful.",
        "Conversely, denying actions to your opponent is the surest path to victory. Stunning, dazing, paralysis, and forcing enemies to use their actions to react to your threats are all prime tactics.",
        "Many of these builds have access to Quicken Spell/Power, Divine Metamagic, or other ways to cast spells as swift actions. Don't forget to use them."
      ]
    },
    {
        title: "The Buffing Routine (Going Nova)",
        content: [
            "Most high-level combatants don't enter a fight unprepared. They have a standard 'buffing routine' of spells and abilities they activate before combat, or in the first round.",
            "Spells with 24-hour durations are cast at the start of the day. A Cleric with 'Persist Spell' and 'Divine Metamagic' is a prime example, entering every fight with buffs like 'Divine Power' already active.",
            "'Going Nova' refers to activating all short-term, powerful buffs at once to end a fight quickly. This might include Raging, using a powerful maneuver, and casting a quickened spell all in one turn."
        ]
    },
    {
        title: "Debuffing & Save-or-Suck/Lose",
        content: [
            "Forcing saving throws is a core part of high-level play. A single failed save can take a powerful creature out of the fight ('Save-or-Lose') or kill it outright ('Save-or-Die').",
            "Target weak saves. A brutish fighter probably has a low Will save. A cunning wizard might have a low Fortitude save. These statblocks list the saves and their breakdowns to help identify weaknesses.",
            "Stacking debuffs is key. A 'Shaken' creature takes a -2 penalty on saves. A spell like 'Bestow Curse' can cripple an opponent's ability to resist your more powerful effects.",
            "Don't forget ability drain/damage. Reducing a caster's primary casting stat or a fighter's Strength can be more effective than just dealing hit point damage."
        ]
    },
    {
        title: "Battlefield Control is Everything",
        content: [
            "Reshaping the battlefield is often more powerful than direct damage. A well-placed 'Wall of Force' can split an enemy party, allowing you to eliminate them one by one.",
            "Difficult terrain, magical darkness, areas of silence, and summoned creatures can all be used to dictate the terms of engagement.",
            "Many monsters here have abilities that alter their surroundings, like the Kami's water control or the Verdant Prince's entangling aura. Use the environment as a weapon."
        ]
    },
    {
        title: "Rocket Tag and the Alpha Strike",
        content: [
            "High-level combat is often described as 'rocket tag' because everyone has a metaphorical rocket launcher. The first person to land a clean hit often wins.",
            "The 'Alpha Strike' is the concept of unloading your most powerful abilities in the first round of combat to eliminate the biggest threat before it can act. Winning initiative is crucial.",
            "These monster builds are designed to be devastating. Don't pull your punches. A CR 30+ encounter should feel like a fight for the fate of the world, because it often is."
        ]
    },
    {
      title: "Overcoming Defenses: Beyond the Numbers",
      content: [
        "Touch AC & Flat-Footed AC: Many powerful attacks target Touch AC (ignoring armor) or Flat-Footed AC (ignoring Dexterity). Identify your enemy's weakest AC type.",
        "Spell Resistance (SR): A major hurdle for casters. Feats like Spell Penetration are essential. Spells that have '(SR: No)' in their description are invaluable for bypassing this defense entirely.",
        "Damage Reduction (DR): Note the type of DR (e.g., DR 15/good and magic). You need both a magic weapon AND one that is good-aligned to bypass it. Some DR is only bypassed by certain materials (like Adamantine) or by epic weapons.",
        "Energy Resistance/Immunity: Diversify your damage types. If a monster is immune to fire, a 'Fireball' is useless. Spells that deal Force, Sonic, or untyped divine/profane damage are often more reliable.",
        "Miss Chances: Invisibility and other concealment effects grant a 'miss chance' (e.g., 50% for total concealment). Spells like 'Glitterdust' or 'True Seeing' are the answer.",
      ]
    },
    {
      title: "The 'Gish': Blending Might and Magic",
      content: [
        "A 'gish' is a character that excels at both melee combat and spellcasting. Many of the most powerful builds in this compendium (like the Planetar or Pit Fiend) are gishes.",
        "The power of a gish comes from their ability to self-buff. They use their spells not to attack from afar, but to enhance their own combat prowess to superhuman levels (e.g., a Cleric casting 'Divine Power' and 'Righteous Might').",
        "They break the action economy by using swift-action spells (via Quicken Spell or similar abilities) to cast spells and still make a full attack in the same round.",
      ]
    },
    {
      title: "Summoning & Minions: The Power of Numbers",
      content: [
        "Never underestimate the power of a summoned monster. Even a low-level summon can provide a flank for a rogue, block a hallway, or absorb a powerful attack that would have otherwise hit a player character.",
        "High-level summoning spells ('Summon Monster IX', 'Gate') can bring powerful allies to the field who can win the fight on their own.",
        "Many of the epic characters in this compendium have the 'Epic Leadership' feat. They should not be fought alone, but at the head of a powerful army of loyal followers.",
      ]
    },
    {
      title: "The Caster-Martial Disparity: Why it Matters",
      content: [
        "In D&D 3.5e, high-level spellcasters are generally considered more powerful than non-spellcasters ('martials'). This is because magic can do things that a sword simply cannot: teleport, control minds, stop time, and reshape reality.",
        "The martial characters in this compendium are built to be the absolute apex of what is possible, often using the 'Tome of Battle' rules (which give martial characters spell-like 'maneuvers') or insane physical stats to keep pace.",
        "When running these encounters, remember that the spellcasters are often the true threat. A CR 25 wizard is generally more dangerous than a CR 25 fighter. Prioritize your targets accordingly!",
      ]
    }
  ]
};