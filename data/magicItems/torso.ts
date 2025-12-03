
// data/magicItems/torso.ts
import { MagicItem } from '../../types';

export const torsoItems: MagicItem[] = [
    { name: "Vest of Escape", cost: 5200, description: "+4 competence bonus on Open Lock and +6 competence bonus on Escape Artist checks.", equipSlot: 'torso' },
    { name: "Robe of the Archmagi", cost: 75000, description: "+5 armor bonus, SR 18, +4 resistance bonus to saves, +2 enhancement bonus to caster level checks to overcome SR.", equipSlot: 'torso', bonuses: [{ type: 'armor', target: 'ac', value: 5 }, { type: 'resistance', target: 'saves', value: 4 }] },
    { name: "Robe of Eyes", cost: 120000, description: "+10 competence bonus on Search and Spot checks, retains Dex bonus to AC when flat-footed, cannot be flanked, darkvision 120 ft., see invisibility.", equipSlot: 'torso' },
    { name: "Robe of Stars", cost: 58000, description: "Use astral projection 1/day, +1 luck bonus to saves, can physically travel to Astral Plane.", equipSlot: 'torso', bonuses: [{ type: 'luck', target: 'saves', value: 1 }] },
    { name: "Shirt of Bone", cost: 9000, description: "Grants DR 5/bludgeoning.", equipSlot: 'torso' },
    { name: "Tunic of Steady Spellcasting", cost: 2500, description: "+5 competence bonus on Concentration checks.", equipSlot: 'torso' },
];
