// data/antagonists/cr_13_17/imperialPhalanx/index.ts
import { Antagonist } from '../../../../types';
import { imperialPhalanxStats } from './stats';
import { imperialPhalanxTactics } from './tactics';

export const imperialPhalanx: Antagonist = {
    name: imperialPhalanxStats.name,
    stats: imperialPhalanxStats,
    tactics: imperialPhalanxTactics,
};