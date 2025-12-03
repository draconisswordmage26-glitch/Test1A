// data/prestigeClasses/legendaryLeader.ts
import { PrestigeClass } from '../../types';

export const legendaryLeader: PrestigeClass = {
    name: "Legendary Leader",
    description: "The Legendary Leader is a being whose force of personality and tactical genius can sway nations and command armies of demigods. Their words are weapons, their presence a banner that turns the tide of any conflict.",
    requirements: [
        "Charisma: 25+",
        "Feats: Epic Leadership, Legendary Commander.",
        "Skills: Diplomacy 30 ranks.",
        "Special: Must have commanded an army of at least 1,000 soldiers."
    ],
    prerequisites: {
        abilityScores: { cha: 25 },
        feats: ["Epic Leadership", "Legendary Commander"],
        skills: { "Diplomacy": 30 },
        special: "Commanded an army of 1000+ soldiers"
    },
    hitDie: 10,
    skillPoints: 6,
    classSkills: ["Bluff", "Diplomacy", "Handle Animal", "Intimidate", "Knowledge (any)", "Perform", "Ride", "Sense Motive"],
    bab: 'average',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'good'
    },
    features: [
      { level: 1, name: "3/4 Base Attack Bonus", description: "This class grants a base attack bonus equal to 3/4 its level." },
      { level: 1, name: "Legendary Aura", description: "The radius of any aura abilities you possess (such as a Marshal's aura) becomes line of sight." },
      { level: 2, name: "Coordinate Army", description: "3/day, you can grant all allies within your aura the benefit of all your combat feats for 3 rounds." },
      { level: 3, name: "Heart of the People", description: "You gain DR 10/- as long as at least 100 of your followers are alive and loyal. This increases to DR 20/- if your army numbers over 10,000." },
      { level: 4, name: "Inspire Apotheosis", description: "Your Inspire Courage ability (or similar) provides triple its normal bonus and can grant allies temporary epic feats you possess." },
      { level: 5, name: "Inherent Bonus", description: "You gain a +2 inherent bonus to Charisma." },
      { level: 6, name: "Unbreakable Morale", description: "Allies in your aura are immune to fear and all mind-affecting effects." },
      { level: 7, name: "Coordinate Army", description: "You can now use Coordinate Army at will." },
      { level: 8, name: "My Life for the Cause", description: "3/day, as an immediate action, you can redirect any damage or effect that would target you to a willing follower within your aura. The follower dies, but you are unharmed." },
      { level: 9, name: "Undying Loyalty", description: "Your Leadership score is tripled for the purpose of attracting followers. Your followers will never flee or surrender." },
      { level: 10, name: "Aura of Absolute Command", description: "Enemies within your aura must make a Will save (DC 20 + class level + Cha mod) or be affected as if by a Dominate Monster spell. Those who save are still Confused." },
    ],
};
