
// data/antagonists/cr_18_22/anathemaKnight/index.ts
import { Antagonist } from '../../../../types';
import { anathemaKnightStats } from './stats';
import { anathemaKnightTactics } from './tactics';

export const anathemaKnight: Antagonist = {
    name: anathemaKnightStats.name,
    stats: anathemaKnightStats,
    tactics: anathemaKnightTactics,
};
