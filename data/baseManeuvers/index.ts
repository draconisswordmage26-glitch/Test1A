// data/baseManeuvers/index.ts
import { MartialManeuver } from '../../types';
import { baseDesertWindManeuvers } from './desertWind';
import { baseDevotedSpiritManeuvers } from './devotedSpirit';
import { baseDiamondMindManeuvers } from './diamondMind';
import { baseIronHeartManeuvers } from './ironHeart';
import { baseSettingSunManeuvers } from './settingSun';
import { baseShadowHandManeuvers } from './shadowHand';
import { baseStoneDragonManeuvers } from './stoneDragon';
import { baseTigerClawManeuvers } from './tigerClaw';
import { baseWhiteRavenManeuvers } from './whiteRaven';

export const baseManeuvers: MartialManeuver[] = [
    ...baseDesertWindManeuvers,
    ...baseDevotedSpiritManeuvers,
    ...baseDiamondMindManeuvers,
    ...baseIronHeartManeuvers,
    ...baseSettingSunManeuvers,
    ...baseShadowHandManeuvers,
    ...baseStoneDragonManeuvers,
    ...baseTigerClawManeuvers,
    ...baseWhiteRavenManeuvers,
];
