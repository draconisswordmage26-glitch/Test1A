
// data/antagonists/cr_40_50/grandStrategos/index.ts
import { Antagonist } from '../../../../types';
import { grandStrategosStats } from './stats';
import { grandStrategosTactics } from './tactics';

export const grandStrategos: Antagonist = {
    name: grandStrategosStats.name,
    stats: grandStrategosStats,
    tactics: grandStrategosTactics,
};
