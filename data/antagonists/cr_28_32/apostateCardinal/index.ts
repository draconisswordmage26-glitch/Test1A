// data/antagonists/cr_28_32/apostateCardinal/index.ts
import { Antagonist } from '../../../../types';
import { apostateCardinalStats } from './stats';
import { apostateCardinalTactics } from './tactics';

export const apostateCardinal: Antagonist = {
    name: apostateCardinalStats.name,
    stats: apostateCardinalStats,
    tactics: apostateCardinalTactics,
};