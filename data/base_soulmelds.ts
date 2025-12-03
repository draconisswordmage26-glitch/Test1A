// data/base_soulmelds.ts
import { Soulmeld } from '../types';
import { baseArmsSoulmelds } from './baseSoulmelds/arms';
import { baseBrowSoulmelds } from './baseSoulmelds/brow';
import { baseCrownSoulmelds } from './baseSoulmelds/crown';
import { baseFeetSoulmelds } from './baseSoulmelds/feet';
import { baseHandsSoulmelds } from './baseSoulmelds/hands';
import { baseHeartSoulmelds } from './baseSoulmelds/heart';
import { baseShouldersSoulmelds } from './baseSoulmelds/shoulders';
import { baseSoulSoulmelds } from './baseSoulmelds/soul';
import { baseThroatSoulmelds } from './baseSoulmelds/throat';
import { baseTotemSoulmelds } from './baseSoulmelds/totem';
import { baseWaistSoulmelds } from './baseSoulmelds/waist';

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
].sort((a, b) => a.name.localeCompare(b.name));
