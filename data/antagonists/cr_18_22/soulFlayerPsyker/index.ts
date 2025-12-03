// data/antagonists/cr_18_22/soulFlayerPsyker/index.ts
import { Antagonist } from '../../../../types';
import { soulFlayerPsykerStats } from './stats';
import { soulFlayerPsykerTactics } from './tactics';

export const soulFlayerPsyker: Antagonist = {
    name: soulFlayerPsykerStats.name,
    stats: soulFlayerPsykerStats,
    tactics: soulFlayerPsykerTactics,
};