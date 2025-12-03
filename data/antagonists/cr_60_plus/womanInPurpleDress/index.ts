
// data/antagonists/cr_60_plus/womanInPurpleDress/index.ts
import { Antagonist } from '../../../../types';
import { womanInPurpleDressStats } from './stats';
import { womanInPurpleDressTactics } from './tactics';
import { womanInPurpleDressDivinity } from './divinity';
import { womanInPurpleDressDanmaku } from './danmaku';

export const womanInPurpleDress: Antagonist = {
    name: womanInPurpleDressStats.name,
    stats: womanInPurpleDressStats,
    tactics: womanInPurpleDressTactics,
    divinity: womanInPurpleDressDivinity,
    danmaku: womanInPurpleDressDanmaku,
};
