// data/magicItems/shoulders.ts
import { MagicItem } from '../../types';

export const shouldersItems: MagicItem[] = [
    { name: "Cloak of Resistance +1", cost: 1000, description: "+1 resistance bonus to all saves.", equipSlot: 'shoulders', bonuses: [{ type: 'resistance', target: 'saves', value: 1 }] },
    { name: "Cloak of Resistance +5", cost: 25000, description: "+5 resistance bonus to all saves.", equipSlot: 'shoulders', bonuses: [{ type: 'resistance', target: 'saves', value: 5 }] },
    { name: "Cloak of Elvenkind", cost: 2500, description: "+5 competence bonus to Hide checks.", equipSlot: 'shoulders' },
    { name: "Cloak of Charisma +2", cost: 4000, description: "+2 enhancement bonus to Charisma.", equipSlot: 'shoulders', bonuses: [{ type: 'enhancement', target: 'cha', value: 2 }] },
    { name: "Cloak of Charisma +6", cost: 36000, description: "+6 enhancement bonus to Charisma.", equipSlot: 'shoulders', bonuses: [{ type: 'enhancement', target: 'cha', value: 6 }] },
];
