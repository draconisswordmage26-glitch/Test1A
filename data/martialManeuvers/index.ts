// data/martialManeuvers/index.ts
import { MartialManeuver } from '../../types';

import { desertWindManeuvers } from './desertWind';
import { devotedSpiritManeuvers } from './devotedSpirit';
import { diamondMindManeuvers } from './diamondMind';
import { ironHeartManeuvers } from './ironHeart';
import { settingSunManeuvers } from './settingSun';
import { shadowHandManeuvers } from './shadowHand';
import { stoneDragonManeuvers } from './stoneDragon';
import { tigerClawManeuvers } from './tigerClaw';
import { whiteRavenManeuvers } from './whiteRaven';

export const martialManeuvers: MartialManeuver[] = [
  ...desertWindManeuvers,
  ...devotedSpiritManeuvers,
  ...diamondMindManeuvers,
  ...ironHeartManeuvers,
  ...settingSunManeuvers,
  ...shadowHandManeuvers,
  ...stoneDragonManeuvers,
  ...tigerClawManeuvers,
  ...whiteRavenManeuvers,
].sort((a, b) => {
  if (a.level !== b.level) return a.level - b.level;
  if (a.discipline !== b.discipline) return a.discipline.localeCompare(b.discipline);
  return a.name.localeCompare(b.name);
});
