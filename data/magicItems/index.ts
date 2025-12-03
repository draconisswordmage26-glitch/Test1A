// data/magicItems/index.ts
import { MagicItem } from '../../types';
import { armorItems } from './armor';
import { weaponItems } from './weapons';
import { ringItems } from './rings';
import { wondrousItems } from './wondrousItems';
import { headItems } from './head';
import { throatItems } from './throat';
import { shouldersItems } from './shoulders';
import { armsItems } from './arms';
import { handsItems } from './hands';
import { torsoItems } from './torso';
import { waistItems } from './waist';
import { feetItems } from './feet';
import { noSlotItems } from './noSlot';

export const allMagicItems: MagicItem[] = [
    ...armorItems,
    ...weaponItems,
    ...ringItems,
    ...wondrousItems,
    ...headItems,
    ...throatItems,
    ...shouldersItems,
    ...armsItems,
    ...handsItems,
    ...torsoItems,
    ...waistItems,
    ...feetItems,
    ...noSlotItems,
];
