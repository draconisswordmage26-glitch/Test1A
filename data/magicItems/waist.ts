// data/magicItems/waist.ts
import { MagicItem } from '../../types';

export const waistItems: MagicItem[] = [
    { name: "Belt of Giant Strength +2", cost: 4000, description: "+2 enhancement bonus to Strength.", equipSlot: 'waist', bonuses: [{ type: 'enhancement', target: 'str', value: 2 }] },
    { name: "Belt of Giant Strength +6", cost: 36000, description: "+6 enhancement bonus to Strength.", equipSlot: 'waist', bonuses: [{ type: 'enhancement', target: 'str', value: 6 }] },
    { name: "Belt of Magnificence +6", cost: 200000, description: "+6 enhancement bonus to all ability scores.", equipSlot: 'waist', bonuses: [
        { type: 'enhancement', target: 'str', value: 6 },
        { type: 'enhancement', target: 'dex', value: 6 },
        { type: 'enhancement', target: 'con', value: 6 },
        { type: 'enhancement', target: 'int', value: 6 },
        { type: 'enhancement', target: 'wis', value: 6 },
        { type: 'enhancement', target: 'cha', value: 6 },
    ]},
];
