
// data/antagonists/cr_23_27/stygianDreadnought/index.ts
import { Antagonist } from '../../../../types';
import { stygianDreadnoughtStats } from './stats';
import { stygianDreadnoughtTactics } from './tactics';

export const stygianDreadnought: Antagonist = {
    name: stygianDreadnoughtStats.name,
    stats: stygianDreadnoughtStats,
    tactics: stygianDreadnoughtTactics,
};
