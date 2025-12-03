// data/prestigeClasses/soulBoundGladiator.ts
import { PrestigeClass } from '../../types';

export const soulBoundGladiator: PrestigeClass = {
    name: "Soul-Bound Gladiator",
    description: "The Soul-Bound Gladiator is a warrior who has learned to channel the raw power of their soulmelds not just as magical tools, but as extensions of their own body in brutal combat. They are living conduits of spiritual energy, their every blow infused with the might of the souls they have bound.",
    requirements: [
        "Base Attack Bonus: +5",
        "Feats: Power Attack, Toughness.",
        "Special: Totem Bind class feature."
    ],
    prerequisites: {
        bab: 5,
        feats: ["Power Attack", "Toughness"],
        special: "Totem Bind class feature"
    },
    hitDie: 12,
    skillPoints: 2,
    classSkills: ["Concentration", "Craft", "Intimidate", "Jump", "Sense Motive"],
    bab: 'good',
    saves: {
        fort: 'good',
        ref: 'poor',
        will: 'poor'
    },
    features: [
      { level: 1, name: "Full Base Attack Bonus", description: "This class grants a +1 base attack bonus at every level." },
      { level: 1, name: "Meldshaping", description: "At each level, you advance your meldshaping abilities, essentia pool, and soulmelds known as if you had gained a level in a meldshaping class you belonged to before adding the prestige class." },
      { level: 1, name: "Totem's Fury", description: "When you bind a soulmeld to your Totem chakra that grants natural attacks, those attacks deal damage as if you were one size category larger." },
      { level: 2, name: "Bonus Feat", description: "You gain a bonus feat from the Fighter bonus feat list." },
      { level: 3, name: "Soul Charge", description: "When you charge, you can invest essentia into the charge. For each point of essentia invested, you gain a +1 insight bonus on the attack roll and deal an extra 1d6 points of damage." },
      { level: 4, name: "Adamantine Soul", description: "You gain DR 2/adamantine. This stacks with other sources of damage reduction." },
      { level: 5, name: "Bonus Feat", description: "You gain a bonus feat from the Fighter bonus feat list." },
      { level: 6, name: "Improved Totem's Fury", description: "The natural weapons granted by your Totem bind now have their critical threat range doubled." },
      { level: 7, name: "Adamantine Soul", description: "Your damage reduction increases to 4/adamantine." },
      { level: 8, name: "Bonus Feat", description: "You gain a bonus feat from the Fighter bonus feat list." },
      { level: 10, name: "Gladiator's Apotheosis", description: "You can bind a second soulmeld to your Totem chakra. Both soulmelds grant their full Totem bind benefits simultaneously." },
    ],
};
