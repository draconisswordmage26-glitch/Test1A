// data/sampleBuilds/index.ts
import { MonsterSampleBuilds } from '../../types';
import { adamantineGolemBuilds } from './adamantineGolem';
import { adityanAgathionBuilds } from './adityanAgathion';
import { aelderBuilds } from './aelder';
import { ammutBuilds } from './ammut';
import { atropalBuilds } from './atropal';
import { balorBuilds } from './balor';
import { behemothBuilds } from './behemoth';
import { cornugonBuilds } from './cornugon';
import { dreamLarvaBuilds } from './dreamLarva';
import { forceDragonBuilds } from './forceDragon';
import { kamiBuilds } from './kami';
import { kitsuneBuilds } from './kitsune';
import { marilithBuilds } from './marilith';
import { minorXixecalBuilds } from './minorXixecal';
import { mithralDragonBuilds } from './mithralDragon';
import { nightwalkerBuilds } from './nightwalker';
import { nornBuilds } from './norn';
import { oniMageBuilds } from './oniMage';
import { phaneBuilds } from './phane';
import { pitFiendBuilds } from './pitFiend';
import { planetarBuilds } from './planetar';
import { pyroclasticDragonBuilds } from './pyroclasticDragon';
import { rakshasaMaharajaBuilds } from './rakshasaMaharaja';
import { starstoneGolemBuilds } from './starstoneGolem';
import { sunGiantBuilds } from './sunGiant';
import { titanBuilds } from './titan';
import { upasundaAsuraBuilds } from './upasundaAsura';
import { valkyrieBuilds } from './valkyrie';
import { verdantPrinceBuilds } from './verdantPrince';
import { wormThatWalksBuilds } from './wormThatWalks';


export const sampleBuilds: MonsterSampleBuilds[] = [
  adamantineGolemBuilds,
  adityanAgathionBuilds,
  aelderBuilds,
  ammutBuilds,
  atropalBuilds,
  balorBuilds,
  behemothBuilds,
  cornugonBuilds,
  dreamLarvaBuilds,
  forceDragonBuilds,
  kamiBuilds,
  kitsuneBuilds,
  marilithBuilds,
  minorXixecalBuilds,
  mithralDragonBuilds,
  nightwalkerBuilds,
  nornBuilds,
  oniMageBuilds,
  phaneBuilds,
  pitFiendBuilds,
  planetarBuilds,
  pyroclasticDragonBuilds,
  rakshasaMaharajaBuilds,
  starstoneGolemBuilds,
  sunGiantBuilds,
  titanBuilds,
  upasundaAsuraBuilds,
  valkyrieBuilds,
  verdantPrinceBuilds,
  wormThatWalksBuilds,
].sort((a, b) => a.monsterName.localeCompare(b.monsterName));