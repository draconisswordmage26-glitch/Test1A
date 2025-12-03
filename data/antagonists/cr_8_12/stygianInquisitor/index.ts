
// data/antagonists/cr_8_12/stygianInquisitor/index.ts
import { Antagonist } from '../../../../types';
import { stygianInquisitorStats } from './stats';
import { stygianInquisitorTactics } from './tactics';

export const stygianInquisitor: Antagonist = {
    name: stygianInquisitorStats.name,
    stats: stygianInquisitorStats,
    tactics: stygianInquisitorTactics,
};
