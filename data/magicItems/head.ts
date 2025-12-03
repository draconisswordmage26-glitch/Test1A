// data/magicItems/head.ts
import { MagicItem } from '../../types';

export const headItems: MagicItem[] = [
    { name: "Headband of Intellect +2", cost: 4000, description: "+2 enhancement bonus to Intelligence.", equipSlot: 'head', bonuses: [{ type: 'enhancement', target: 'int', value: 2 }] },
    { name: "Headband of Intellect +6", cost: 36000, description: "+6 enhancement bonus to Intelligence.", equipSlot: 'head', bonuses: [{ type: 'enhancement', target: 'int', value: 6 }] },
    { name: "Headband of Wisdom +2", cost: 4000, description: "+2 enhancement bonus to Wisdom.", equipSlot: 'head', bonuses: [{ type: 'enhancement', target: 'wis', value: 2 }] },
    { name: "Headband of Wisdom +6", cost: 36000, description: "+6 enhancement bonus to Wisdom.", equipSlot: 'head', bonuses: [{ type: 'enhancement', target: 'wis', value: 6 }] },
    { name: "Headband of Charisma +2", cost: 4000, description: "+2 enhancement bonus to Charisma.", equipSlot: 'head', bonuses: [{ type: 'enhancement', target: 'cha', value: 2 }] },
    { name: "Headband of Charisma +6", cost: 36000, description: "+6 enhancement bonus to Charisma.", equipSlot: 'head', bonuses: [{ type: 'enhancement', target: 'cha', value: 6 }] },
];
