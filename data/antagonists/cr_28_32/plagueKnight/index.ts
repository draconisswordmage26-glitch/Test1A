// data/antagonists/cr_28_32/plagueKnight/index.ts
import { Antagonist } from '../../../../types';
import { plagueKnightStats } from './stats';
import { plagueKnightTactics } from './tactics';

export const plagueKnight: Antagonist = {
    name: plagueKnightStats.name,
    stats: plagueKnightStats,
    tactics: plagueKnightTactics,
};