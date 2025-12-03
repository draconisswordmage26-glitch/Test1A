
// data/antagonists/cr_28_32/kriegsmeisterValerius/index.ts
import { Antagonist } from '../../../../types';
import { kriegsmeisterValeriusStats } from './stats';
import { kriegsmeisterValeriusTactics } from './tactics';

export const kriegsmeisterValerius: Antagonist = {
    name: kriegsmeisterValeriusStats.name,
    stats: kriegsmeisterValeriusStats,
    tactics: kriegsmeisterValeriusTactics,
};
