
// data/antagonists/cr_13_17/truthBearerCleric/index.ts
import { Antagonist } from '../../../../types';
import { truthBearerClericStats } from './stats';
import { truthBearerClericTactics } from './tactics';

export const truthBearerCleric: Antagonist = {
    name: truthBearerClericStats.name,
    stats: truthBearerClericStats,
    tactics: truthBearerClericTactics,
};
