// data/antagonists/cr_13_17/glaubenskrieger/index.ts
import { Antagonist } from '../../../../types';
import { glaubenskriegerStats } from './stats';
import { glaubenskriegerTactics } from './tactics';

export const glaubenskrieger: Antagonist = {
    name: glaubenskriegerStats.name,
    stats: glaubenskriegerStats,
    tactics: glaubenskriegerTactics,
};
