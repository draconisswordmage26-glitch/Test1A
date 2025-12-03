// data/antagonists/cr_28_32/generalGorn/index.ts
import { Antagonist } from '../../../../types';
import { generalGornStats } from './stats';
import { generalGornTactics } from './tactics';

export const generalGorn: Antagonist = {
    name: generalGornStats.name,
    stats: generalGornStats,
    tactics: generalGornTactics,
};