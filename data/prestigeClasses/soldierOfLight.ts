// data/prestigeClasses/soldierOfLight.ts
import { PrestigeClass } from '../../types';

export const soldierOfLight: PrestigeClass = {
    name: "Soldier of Light",
    description: "The Soldier of Light is the pinnacle of divine martial might, a holy warrior whose very presence consecrates the battlefield and whose attacks are infused with pure positive energy. They are the champions of the gods, sent to turn the tide in the endless war against evil.",
    requirements: [
      "Base Attack Bonus: +21",
      "Feats: Great Smiting, Power Attack",
      "Alignment: Any Good",
      "Special: Ability to turn undead or smite evil."
    ],
    prerequisites: {
        bab: 21,
        feats: ["Great Smiting", "Power Attack"],
        alignment: ["Lawful Good", "Neutral Good", "Chaotic Good"],
        special: "Turn or rebuke undead|Smite evil"
    },
    hitDie: 12,
    skillPoints: 4,
    classSkills: ["Climb", "Concentration", "Craft", "Diplomacy", "Heal", "Intimidate", "Jump", "Knowledge (religion)", "Ride", "Sense Motive"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'good',
        will: 'good'
    },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Consecrated Aura", description: "Your presence consecrates the ground in a 60-ft. radius that follows you. Evil creatures take a -4 penalty on all rolls, and good creatures gain a +4 sacred bonus to turning checks." },
      { level: 2, name: "Sacred Armor", description: "Add your full Charisma bonus as a sacred bonus to your Armor Class and all saving throws. This bonus stacks with all other types." },
      { level: 3, name: "Positive Energy Burst", description: "3/day, you can release a 100-ft. burst of positive energy, healing living creatures for 20d8 and damaging undead for 20d8." },
      { level: 4, name: "Holy Strike", description: "Your weapons are treated as having the 'holy' and 'axiomatic'/'anarchic' properties and deal an extra 4d6 damage to evil creatures." },
      { level: 5, name: "Smite Evil", description: "You gain three additional uses of Smite Evil per day. Your smite attacks bypass all damage reduction." },
      { level: 6, name: "Aura of Sanctity", description: "Your Consecrated Aura now sickens and dazes evil creatures within it for one round (Will save negates daze)." },
      { level: 7, name: "Divine Champion", description: "You gain DR 10/epic and evil. Your natural weapons and any weapon you wield are considered epic and good-aligned for bypassing DR." },
      { level: 8, name: "Smite Evil", description: "You gain another three additional uses of Smite Evil per day." },
      { level: 9, name: "Apotheosis of Light", description: "You become immune to negative energy and death effects. You gain regeneration 10 (bypassed by epic evil weapons)." },
      { level: 10, name: "Hand of the Deity", description: "3/day, you can channel divine power through your touch to replicate a Destruction, Banishment, or Mass Heal spell with a caster level equal to your character level." },
    ],
    progression: ["Crusader", "Pious Templar"],
};