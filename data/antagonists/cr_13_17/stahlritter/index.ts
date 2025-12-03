// data/antagonists/cr_13_17/stahlritter/index.ts
import { Antagonist } from '../../../../types';
import { stahlritterStats } from './stats';
import { stahlritterTactics } from './tactics';

export const stahlritter: Antagonist = {
    name: stahlritterStats.name,
    stats: stahlritterStats,
    tactics: stahlritterTactics,
};
