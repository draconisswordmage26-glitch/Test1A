// data/basePsionicPowers/index.ts
import { PsionicPower } from '../../types';
import { baseClairsentiencePowers } from './clairsentience';
import { basePsychokinesisPowers } from './psychokinesis';
import { basePsychometabolismPowers } from './psychometabolism';
import { basePsychoportationPowers } from './psychoportation';
import { baseShaperPowers } from './shaper';
import { baseTelepathyPowers } from './telepathy';
import { baseUniversalPowers } from './universal';

export const basePsionicPowers: PsionicPower[] = [
  ...baseClairsentiencePowers,
  ...basePsychokinesisPowers,
  ...basePsychometabolismPowers,
  ...basePsychoportationPowers,
  ...baseShaperPowers,
  ...baseTelepathyPowers,
  ...baseUniversalPowers,
];
