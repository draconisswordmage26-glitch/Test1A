// data/magicItems/throat.ts
import { MagicItem } from '../../types';

export const throatItems: MagicItem[] = [
    { name: "Amulet of Natural Armor +1", cost: 2000, description: "+1 enhancement to natural armor.", equipSlot: 'throat', bonuses: [{ type: 'natural_armor', target: 'ac', value: 1 }] },
    { name: "Amulet of Natural Armor +5", cost: 50000, description: "+5 enhancement to natural armor.", equipSlot: 'throat', bonuses: [{ type: 'natural_armor', target: 'ac', value: 5 }] },
    { name: "Amulet of Health +2", cost: 4000, description: "+2 enhancement bonus to Constitution.", equipSlot: 'throat', bonuses: [{ type: 'enhancement', target: 'con', value: 2 }] },
    { name: "Amulet of Health +6", cost: 36000, description: "+6 enhancement bonus to Constitution.", equipSlot: 'throat', bonuses: [{ type: 'enhancement', target: 'con', value: 6 }] },
    { name: "Periapt of Wisdom +2", cost: 4000, description: "+2 enhancement bonus to Wisdom.", equipSlot: 'throat', bonuses: [{ type: 'enhancement', target: 'wis', value: 2 }] },
    { name: "Periapt of Wisdom +6", cost: 36000, description: "+6 enhancement bonus to Wisdom.", equipSlot: 'throat', bonuses: [{ type: 'enhancement', target: 'wis', value: 6 }] },
];
