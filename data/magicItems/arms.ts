// data/magicItems/arms.ts
import { MagicItem } from '../../types';

export const armsItems: MagicItem[] = [
    { name: "Bracers of Armor +1", cost: 1000, description: "+1 armor bonus to AC.", equipSlot: 'arms', bonuses: [{ type: 'armor', target: 'ac', value: 1 }] },
    { name: "Bracers of Armor +8", cost: 64000, description: "+8 armor bonus to AC.", equipSlot: 'arms', bonuses: [{ type: 'armor', target: 'ac', value: 8 }] },
];
