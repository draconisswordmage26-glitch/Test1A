// data/magicItems/rings.ts
import { MagicItem } from '../../types';

export const ringItems: MagicItem[] = [
    { name: "Ring of Protection +1", cost: 2000, description: "+1 deflection bonus to AC.", equipSlot: 'ring', bonuses: [{ type: 'deflection', target: 'ac', value: 1 }] },
    { name: "Ring of Protection +5", cost: 50000, description: "+5 deflection bonus to AC.", equipSlot: 'ring', bonuses: [{ type: 'deflection', target: 'ac', value: 5 }] },
    { name: "Ring of Evasion", cost: 25000, description: "Take no damage on successful Reflex saves.", equipSlot: 'ring' },
];
