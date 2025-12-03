
// data/antagonists/cr_50_60/kaisersVoice/index.ts
import { Antagonist } from '../../../../types';
import { kaisersVoiceStats } from './stats';
import { kaisersVoiceTactics } from './tactics';

export const kaisersVoice: Antagonist = {
    name: kaisersVoiceStats.name,
    stats: kaisersVoiceStats,
    tactics: kaisersVoiceTactics,
};
