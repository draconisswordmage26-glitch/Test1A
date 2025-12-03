
// data/encounters/index.ts
import { Encounter } from '../../types';

import { el10_20_encounters } from './el_10_20';
import { el21_30_encounters } from './el_21_30';
import { el31_40_encounters } from './el_31_40';
import { el41_50_encounters } from './el_41_50';
import { el51_plus_encounters } from './el_51_plus';

export const encounters: Encounter[] = [
    ...el10_20_encounters,
    ...el21_30_encounters,
    ...el31_40_encounters,
    ...el41_50_encounters,
    ...el51_plus_encounters,
].sort((a, b) => a.el - b.el);
