
// data/antagonists/cr_60_plus/godEmperorZarthus/index.ts
import { Antagonist } from '../../../../types';
import { godEmperorZarthusStats } from './stats';
import { godEmperorZarthusTactics } from './tactics';

export const godEmperorZarthus: Antagonist = {
    name: godEmperorZarthusStats.name,
    stats: godEmperorZarthusStats,
    tactics: godEmperorZarthusTactics,
};
