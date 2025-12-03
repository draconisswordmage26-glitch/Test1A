// data/prestigeClasses/alienist.ts
import { PrestigeClass } from '../../types';

export const alienist: PrestigeClass = {
    name: "Alienist",
    description: "The alienist is a spellcaster who has delved too deep into forbidden lore, forging a pact with the bizarre and alien entities of the Far Realm. They gain strange and unsettling powers at the cost of their own sanity and physical form.",
    requirements: [
        "Skills: Knowledge (the planes) 8 ranks.",
        "Feats: Spell Focus (Conjuration).",
        "Spells: Ability to cast 4th-level arcane spells."
    ],
    prerequisites: {
        skills: { "Knowledge (the planes)": 8 },
        feats: ["Spell Focus (Conjuration)"],
        spells: { arcane: 4 },
    },
    hitDie: 4,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (all)", "Profession", "Spellcraft"],
    bab: 'poor',
    saves: {
        fort: 'poor',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Caster Level Progression", description: "This class advances your existing arcane spellcasting progression at every level." },
      { level: 1, name: "Summon Alien", description: "When you summon a creature, you may choose to give it the pseudonatural template." },
      { level: 2, name: "Alien Blessing", description: "You gain a +1 insight bonus on saving throws." },
      { level: 3, name: "Madness", description: "You take a -2 penalty on Bluff, Diplomacy, and Handle Animal checks, but gain a +2 bonus on Intimidate checks." },
      { level: 4, name: "Alien Familiar", description: "Your familiar gains the pseudonatural template." },
      { level: 5, name: "Metamagic Secret", description: "Gain a bonus metamagic feat." },
      { level: 6, name: "Alien Form", description: "Your physical form begins to warp. You gain a +2 bonus to a physical ability score and a -2 penalty to a mental one." },
      { level: 7, name: "Extra Summoning", description: "You can cast Summon Monster one additional time per day for each spell level." },
      { level: 8, name: "Timeless Body", description: "You no longer age." },
      { level: 9, name: "Alien Form", description: "Your physical form continues to warp. You gain another +2 to a physical score and -2 to a mental one." },
      { level: 10, name: "True Alien Form", description: "Your type changes to Outsider. You are no longer subject to spells that affect humanoids, such as charm person." },
    ],
};