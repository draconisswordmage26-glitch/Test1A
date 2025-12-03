
// data/antagonists/cr_23_27/silentSybil/index.ts
import { Antagonist } from '../../../../types';
import { silentSybilStats } from './stats';
import { silentSybilTactics } from './tactics';

export const silentSybil: Antagonist = {
    name: silentSybilStats.name,
    stats: silentSybilStats,
    tactics: silentSybilTactics,
};
