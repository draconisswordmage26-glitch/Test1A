// data/antagonists/cr_18_22/boundSeraph/index.ts
import { Antagonist } from '../../../../types';
import { boundSeraphStats } from './stats';
import { boundSeraphTactics } from './tactics';

export const boundSeraph: Antagonist = {
    name: boundSeraphStats.name,
    stats: boundSeraphStats,
    tactics: boundSeraphTactics,
};