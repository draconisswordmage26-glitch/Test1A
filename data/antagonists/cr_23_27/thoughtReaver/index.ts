// data/antagonists/cr_23_27/thoughtReaver/index.ts
import { Antagonist } from '../../../../types';
import { thoughtReaverStats } from './stats';
import { thoughtReaverTactics } from './tactics';

export const thoughtReaver: Antagonist = {
    name: thoughtReaverStats.name,
    stats: thoughtReaverStats,
    tactics: thoughtReaverTactics,
};