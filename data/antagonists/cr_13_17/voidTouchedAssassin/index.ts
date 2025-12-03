// data/antagonists/cr_13_17/voidTouchedAssassin/index.ts
import { Antagonist } from '../../../../types';
import { voidTouchedAssassinStats } from './stats';
import { voidTouchedAssassinTactics } from './tactics';

export const voidTouchedAssassin: Antagonist = {
    name: voidTouchedAssassinStats.name,
    stats: voidTouchedAssassinStats,
    tactics: voidTouchedAssassinTactics,
};