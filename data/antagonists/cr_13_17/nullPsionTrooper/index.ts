
// data/antagonists/cr_13_17/nullPsionTrooper/index.ts
import { Antagonist } from '../../../../types';
import { nullPsionTrooperStats } from './stats';
import { nullPsionTrooperTactics } from './tactics';

export const nullPsionTrooper: Antagonist = {
    name: nullPsionTrooperStats.name,
    stats: nullPsionTrooperStats,
    tactics: nullPsionTrooperTactics,
};
