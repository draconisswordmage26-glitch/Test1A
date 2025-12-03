
// data/antagonists/cr_28_32/dieGlocke/index.ts
import { Antagonist } from '../../../../types';
import { dieGlockeStats } from './stats';
import { dieGlockeTactics } from './tactics';

export const dieGlocke: Antagonist = {
    name: dieGlockeStats.name,
    stats: dieGlockeStats,
    tactics: dieGlockeTactics,
};
