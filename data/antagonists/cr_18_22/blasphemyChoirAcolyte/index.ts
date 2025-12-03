
// data/antagonists/cr_18_22/blasphemyChoirAcolyte/index.ts
import { Antagonist } from '../../../../types';
import { blasphemyChoirAcolyteStats } from './stats';
import { blasphemyChoirAcolyteTactics } from './tactics';

export const blasphemyChoirAcolyte: Antagonist = {
    name: blasphemyChoirAcolyteStats.name,
    stats: blasphemyChoirAcolyteStats,
    tactics: blasphemyChoirAcolyteTactics,
};
