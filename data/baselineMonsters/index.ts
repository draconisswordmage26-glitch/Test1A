// data/baselineMonsters/index.ts
import { BaselineMonster } from '../../types';

import { adamantineGolem } from './adamantineGolem';
import { adityanAgathion } from './adityanAgathion';
import { aelder } from './aelder';
import { ammut } from './ammut';
import { atropal } from './atropal';
import { balor } from './balor';
import { behemoth } from './behemoth';
import { cornugon } from './cornugon';
import { dreamLarva } from './dreamLarva';
import { forceDragon } from './forceDragon';
import { kami } from './kami';
import { kitsune } from './kitsune';
import { marilith } from './marilith';
import { minorXixecal } from './minorXixecal';
import { mithralDragon } from './mithralDragon';
import { nightwalker } from './nightwalker';
import { norn } from './norn';
import { oniMage } from './oniMage';
import { phane } from './phane';
import { pitFiend } from './pitFiend';
import { planetar } from './planetar';
import { pyroclasticDragon } from './pyroclasticDragon';
import { rakshasaMaharaja } from './rakshasaMaharaja';
import { starstoneGolem } from './starstoneGolem';
import { sunGiant } from './sunGiant';
import { titan } from './titan';
import { upasundaAsura } from './upasundaAsura';
import { valkyrie } from './valkyrie';
import { verdantPrince } from './verdantPrince';
import { wormThatWalks } from './wormThatWalks';

export const baselineMonsters: BaselineMonster[] = [
  adamantineGolem,
  adityanAgathion,
  aelder,
  ammut,
  atropal,
  balor,
  behemoth,
  cornugon,
  dreamLarva,
  forceDragon,
  kami,
  kitsune,
  marilith,
  minorXixecal,
  mithralDragon,
  nightwalker,
  norn,
  oniMage,
  phane,
  pitFiend,
  planetar,
  pyroclasticDragon,
  rakshasaMaharaja,
  starstoneGolem,
  sunGiant,
  titan,
  upasundaAsura,
  valkyrie,
  verdantPrince,
  wormThatWalks,
].sort((a, b) => a.name.localeCompare(b.name));
