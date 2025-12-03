
// data/antagonists/cr_33_37/theInviolate/index.ts
import { Antagonist } from '../../../../types';
import { theInviolateStats } from './stats';
import { theInviolateTactics } from './tactics';

export const theInviolate: Antagonist = {
    name: theInviolateStats.name,
    stats: theInviolateStats,
    tactics: theInviolateTactics,
};
