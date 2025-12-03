
// data/antagonists/cr_13_17/ironDisciplinarian/index.ts
import { Antagonist } from '../../../../types';
import { ironDisciplinarianStats } from './stats';
import { ironDisciplinarianTactics } from './tactics';

export const ironDisciplinarian: Antagonist = {
    name: ironDisciplinarianStats.name,
    stats: ironDisciplinarianStats,
    tactics: ironDisciplinarianTactics,
};
