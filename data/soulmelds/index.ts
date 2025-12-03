// data/soulmelds/index.ts
import { Soulmeld } from '../../types';
import { armsSoulmelds } from './arms';
import { browSoulmelds } from './brow';
import { crownSoulmelds } from './crown';
import { feetSoulmelds } from './feet';
import { handsSoulmelds } from './hands';
import { heartSoulmelds } from './heart';
import { shouldersSoulmelds } from './shoulders';
import { soulSoulmelds } from './soul';
import { throatSoulmelds } from './throat';
import { totemSoulmelds } from './totem';
import { waistSoulmelds } from './waist';

export const soulmelds: Soulmeld[] = [
  ...armsSoulmelds,
  ...browSoulmelds,
  ...crownSoulmelds,
  ...feetSoulmelds,
  ...handsSoulmelds,
  ...heartSoulmelds,
  ...shouldersSoulmelds,
  ...soulSoulmelds,
  ...throatSoulmelds,
  ...totemSoulmelds,
  ...waistSoulmelds,
];