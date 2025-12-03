// data/psionicPowers/index.ts
import { PsionicPower } from '../../types';
import { clairsentiencePowers } from './clairsentience';
import { psychokinesisPowers } from './psychokinesis';
import { psychometabolismPowers } from './psychometabolism';
import { psychoportationPowers } from './psychoportation';
import { shaperPowers } from './shaper';
import { telepathyPowers } from './telepathy';
import { universalPowers } from './universal';

export const psionicPowers: PsionicPower[] = [
  ...clairsentiencePowers,
  ...psychokinesisPowers,
  ...psychometabolismPowers,
  ...psychoportationPowers,
  ...shaperPowers,
  ...telepathyPowers,
  ...universalPowers,
].sort((a, b) => a.name.localeCompare(b.name));
