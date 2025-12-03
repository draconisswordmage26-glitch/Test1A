// data/base_psionic_powers.ts
import { PsionicPower } from '../types';
import { baseClairsentiencePowers } from './basePsionicPowers/clairsentience';
import { basePsychokinesisPowers } from './basePsionicPowers/psychokinesis';
import { basePsychometabolismPowers } from './basePsionicPowers/psychometabolism';
import { basePsychoportationPowers } from './basePsionicPowers/psychoportation';
import { baseShaperPowers } from './basePsionicPowers/shaper';
import { baseTelepathyPowers } from './basePsionicPowers/telepathy';
import { baseUniversalPowers } from './basePsionicPowers/universal';

export const basePsionicPowers: PsionicPower[] = [
  ...baseClairsentiencePowers,
  ...basePsychokinesisPowers,
  ...basePsychometabolismPowers,
  ...basePsychoportationPowers,
  ...baseShaperPowers,
  ...baseTelepathyPowers,
  ...baseUniversalPowers,
].sort((a, b) => a.name.localeCompare(b.name));
