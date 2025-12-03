// data/baseSoulmelds/index.ts
import { Soulmeld } from '../../types';
import { baseArmsSoulmelds } from './arms';
import { baseBrowSoulmelds } from './brow';
import { baseCrownSoulmelds } from './crown';
import { baseFeetSoulmelds } from './feet';
import { baseHandsSoulmelds } from './hands';
import { baseHeartSoulmelds } from './heart';
import { baseShouldersSoulmelds } from './shoulders';
import { baseSoulSoulmelds } from './soul';
import { baseThroatSoulmelds } from './throat';
import { baseTotemSoulmelds } from './totem';
import { baseWaistSoulmelds } from './waist';

export const baseSoulmelds: Soulmeld[] = [
  ...baseArmsSoulmelds,
  ...baseBrowSoulmelds,
  ...baseCrownSoulmelds,
  ...baseFeetSoulmelds,
  ...baseHandsSoulmelds,
  ...baseHeartSoulmelds,
  ...baseShouldersSoulmelds,
  ...baseSoulSoulmelds,
  ...baseThroatSoulmelds,
  ...baseTotemSoulmelds,
  ...baseWaistSoulmelds,
];
