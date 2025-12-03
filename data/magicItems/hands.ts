// data/magicItems/hands.ts
import { MagicItem } from '../../types';

export const handsItems: MagicItem[] = [
    { name: "Gloves of Dexterity +2", cost: 4000, description: "+2 enhancement bonus to Dexterity.", equipSlot: 'hands', bonuses: [{ type: 'enhancement', target: 'dex', value: 2 }] },
    { name: "Gloves of Dexterity +6", cost: 36000, description: "+6 enhancement bonus to Dexterity.", equipSlot: 'hands', bonuses: [{ type: 'enhancement', target: 'dex', value: 6 }] },
];
