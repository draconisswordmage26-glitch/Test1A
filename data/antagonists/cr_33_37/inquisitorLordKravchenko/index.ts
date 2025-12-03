// data/antagonists/cr_33_37/inquisitorLordKravchenko/index.ts
import { Antagonist } from '../../../../types';
import { inquisitorLordKravchenkoStats } from './stats';
import { inquisitorLordKravchenkoTactics } from './tactics';

export const inquisitorLordKravchenko: Antagonist = {
    name: inquisitorLordKravchenkoStats.name,
    stats: inquisitorLordKravchenkoStats,
    tactics: inquisitorLordKravchenkoTactics,
};