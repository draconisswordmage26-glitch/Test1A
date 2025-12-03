// data/antagonists/cr_33_37/hexLegionnaire/index.ts
import { Antagonist } from '../../../../types';
import { hexLegionnaireStats } from './stats';
import { hexLegionnaireTactics } from './tactics';

export const hexLegionnaire: Antagonist = {
    name: hexLegionnaireStats.name,
    stats: hexLegionnaireStats,
    tactics: hexLegionnaireTactics,
};