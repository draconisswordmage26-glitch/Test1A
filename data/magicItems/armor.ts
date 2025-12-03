// data/magicItems/armor.ts
import { MagicItem } from '../../types';

export const armorItems: MagicItem[] = [
    { name: "+1 Full Plate", cost: 2650, description: "Standard full plate with a +1 enhancement bonus.", equipSlot: 'armor', bonuses: [{ type: 'armor', target: 'ac', value: 9 }] },
    { name: "+5 Mithral Full Plate", cost: 34000, description: "Lightweight, flexible plate with a +5 enhancement bonus.", equipSlot: 'armor', bonuses: [{ type: 'armor', target: 'ac', value: 13 }] },
    { name: "+2 Animated Heavy Steel Shield", cost: 4170, description: "A shield that floats and defends on its own.", equipSlot: 'shield', bonuses: [{ type: 'shield', target: 'ac', value: 4 }] },
    { name: "+4 Full Plate", cost: 17650, description: "Full plate with a +4 enhancement bonus.", equipSlot: 'armor', bonuses: [{ type: 'armor', target: 'ac', value: 12 }] },
    { name: "+5 Full Plate", cost: 26650, description: "Full plate with a +5 enhancement bonus.", equipSlot: 'armor', bonuses: [{ type: 'armor', target: 'ac', value: 13 }] },
    { name: "+5 Mithral Shirt", cost: 26100, description: "A light mithral shirt with a +5 enhancement bonus.", equipSlot: 'armor', bonuses: [{ type: 'armor', target: 'ac', value: 9 }] },
    { name: "+3 Heavy Shield", cost: 9170, description: "A heavy steel shield with a +3 enhancement bonus.", equipSlot: 'shield', bonuses: [{ type: 'shield', target: 'ac', value: 5 }] },
];
