
// data/antagonists/cr_8_12/hellboundOutrider/index.ts
import { Antagonist } from '../../../../types';
import { hellboundOutriderStats } from './stats';
import { hellboundOutriderTactics } from './tactics';

export const hellboundOutrider: Antagonist = {
    name: hellboundOutriderStats.name,
    stats: hellboundOutriderStats,
    tactics: hellboundOutriderTactics,
};
