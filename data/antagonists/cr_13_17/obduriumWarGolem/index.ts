// data/antagonists/cr_13_17/obduriumWarGolem/index.ts
import { Antagonist } from '../../../../types';
import { obduriumWarGolemStats } from './stats';
import { obduriumWarGolemTactics } from './tactics';

export const obduriumWarGolem: Antagonist = {
    name: obduriumWarGolemStats.name,
    stats: obduriumWarGolemStats,
    tactics: obduriumWarGolemTactics,
};