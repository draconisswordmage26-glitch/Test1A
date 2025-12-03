
// data/antagonists/cr_18_22/panzerdrake/index.ts
import { Antagonist } from '../../../../types';
import { panzerdrakeStats } from './stats';
import { panzerdrakeTactics } from './tactics';

export const panzerdrake: Antagonist = {
    name: panzerdrakeStats.name,
    stats: panzerdrakeStats,
    tactics: panzerdrakeTactics,
};
