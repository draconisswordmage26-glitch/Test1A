
// data/antagonists/cr_13_17/mageBreakerAssassin/index.ts
import { Antagonist } from '../../../../types';
import { mageBreakerAssassinStats } from './stats';
import { mageBreakerAssassinTactics } from './tactics';

export const mageBreakerAssassin: Antagonist = {
    name: mageBreakerAssassinStats.name,
    stats: mageBreakerAssassinStats,
    tactics: mageBreakerAssassinTactics,
};
