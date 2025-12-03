// data/antagonists/cr_13_17/hellfireShockTrooper/index.ts
import { Antagonist } from '../../../../types';
import { hellfireShockTrooperStats } from './stats';
import { hellfireShockTrooperTactics } from './tactics';

export const hellfireShockTrooper: Antagonist = {
    name: hellfireShockTrooperStats.name,
    stats: hellfireShockTrooperStats,
    tactics: hellfireShockTrooperTactics,
};