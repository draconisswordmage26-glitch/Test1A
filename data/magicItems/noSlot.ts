// data/magicItems/noSlot.ts
import { MagicItem } from '../../types';

export const noSlotItems: MagicItem[] = [
    { name: "Tome of Strength +1", cost: 27500, description: "Read to gain +1 inherent bonus to Strength.", equipSlot: 'no-slot' },
    { name: "Tome of Strength +5", cost: 137500, description: "Read to gain +5 inherent bonus to Strength.", equipSlot: 'no-slot' },
    { name: "Tome of Clear Thought +3", cost: 82500, description: "Read to gain +3 inherent bonus to Intelligence.", equipSlot: 'no-slot' },
    { name: "Tome of Clear Thought +5", cost: 137500, description: "Read to gain +5 inherent bonus to Intelligence.", equipSlot: 'no-slot' },
    { name: "Tome of Understanding +3", cost: 82500, description: "Read to gain +3 inherent bonus to Wisdom.", equipSlot: 'no-slot' },
    { name: "Tome of Understanding +5", cost: 137500, description: "Read to gain +5 inherent bonus to Wisdom.", equipSlot: 'no-slot' },
    { name: "Manual of Gainful Exercise +3", cost: 82500, description: "+3 inherent bonus to Strength.", equipSlot: 'no-slot' },
    { name: "Manual of Constitution +5", cost: 137500, description: "Read to gain +5 inherent bonus to Constitution.", equipSlot: 'no-slot' },
    { name: "Tome of Leadership and Influence +3", cost: 82500, description: "+3 inherent bonus to Charisma.", equipSlot: 'no-slot' },
    { name: "Tome of Leadership and Influence +5", cost: 137500, description: "Read to gain +5 inherent bonus to Charisma.", equipSlot: 'no-slot' },
    { name: "Ioun Stone (Dusty Rose Prism)", cost: 5000, description: "+1 insight bonus to AC.", equipSlot: 'no-slot', bonuses: [{ type: 'insight', target: 'ac', value: 1 }] },
];
