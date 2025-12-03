// data/base_maneuvers.ts
import { MartialManeuver } from '../types';
import { baseDesertWindManeuvers } from './baseManeuvers/desertWind';
import { baseDevotedSpiritManeuvers } from './baseManeuvers/devotedSpirit';
import { baseDiamondMindManeuvers } from './baseManeuvers/diamondMind';
import { baseIronHeartManeuvers } from './baseManeuvers/ironHeart';
import { baseSettingSunManeuvers } from './baseManeuvers/settingSun';
import { baseShadowHandManeuvers } from './baseManeuvers/shadowHand';
import { baseStoneDragonManeuvers } from './baseManeuvers/stoneDragon';
import { baseTigerClawManeuvers } from './baseManeuvers/tigerClaw';
import { baseWhiteRavenManeuvers } from './baseManeuvers/whiteRaven';

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
].sort((a, b) => a.name.localeCompare(b.name));
