// data/tactics/index.ts
import { Tactics } from '../../types';
import { generalTactics } from './generalTactics';
import { newTo35Tactics } from './newTo35';
import { intermediate35Tactics } from './intermediate35';
import { uberchargerTactics } from './ubercharger';
import { buffSuitesTactics } from './buffSuites';

// Epic General Tactics
import { powerfulSpells } from './powerfulSpells';
import { powerfulManeuvers } from './powerfulManeuvers';
import { powerfulPsionics } from './powerfulPsionics';
import { powerfulSoulmelds } from './powerfulSoulmelds';

// New Non-Epic General Tactics
import { powerfulNonEpicSpells } from './powerfulNonEpicSpells';
import { powerfulNonEpicManeuvers } from './powerfulNonEpicManeuvers';
import { powerfulNonEpicPsionics } from './powerfulNonEpicPsionics';
import { powerfulNonEpicSoulmelds } from './powerfulNonEpicSoulmelds';

// Monster Tactics imports
import { adamantineGolemTactics } from './monsterTactics/adamantineGolem';
import { adityanAgathionTactics } from './monsterTactics/adityanAgathion';
import { aelderTactics } from './monsterTactics/aelder';
import { ammutTactics } from './monsterTactics/ammut';
import { atropalTactics } from './monsterTactics/atropal';

import { behemothTactics } from './monsterTactics/behemoth';
import { cornugonTactics } from './monsterTactics/cornugon';
import { dreamLarvaTactics } from './monsterTactics/dreamLarva';
import { forceDragonTactics } from './monsterTactics/forceDragon';
import { kamiTactics } from './monsterTactics/kami';
import { kitsuneTactics } from './monsterTactics/kitsune';
import { marilithTactics } from './monsterTactics/marilith';
import { minorXixecalTactics } from './monsterTactics/minorXixecal';
import { mithralDragonTactics } from './monsterTactics/mithralDragon';
import { nightwalkerTactics } from './monsterTactics/nightwalker';
import { nornTactics } from './monsterTactics/norn';
import { oniMageTactics } from './monsterTactics/oniMage';
import { phaneTactics } from './monsterTactics/phane';

import { planetarTactics } from './monsterTactics/planetar';
import { pyroclasticDragonTactics } from './monsterTactics/pyroclasticDragon';
import { rakshasaMaharajaTactics } from './monsterTactics/rakshasaMaharaja';
import { starstoneGolemTactics } from './monsterTactics/starstoneGolem';
import { sunGiantTactics } from './monsterTactics/sunGiant';
import { titanTactics } from './monsterTactics/titan';
import { upasundaAsuraTactics } from './monsterTactics/upasundaAsura';
import { valkyrieTactics } from './monsterTactics/valkyrie';
import { verdantPrinceTactics } from './monsterTactics/verdantPrince';
import { wormThatWalksTactics } from './monsterTactics/wormThatWalks';

export const tactics: Tactics[] = [
  newTo35Tactics,
  intermediate35Tactics,
  generalTactics,
  uberchargerTactics,
  buffSuitesTactics,
  powerfulSpells,
  powerfulNonEpicSpells,
  powerfulManeuvers,
  powerfulNonEpicManeuvers,
  powerfulPsionics,
  powerfulNonEpicPsionics,
  powerfulSoulmelds,
  powerfulNonEpicSoulmelds,
  adamantineGolemTactics,
  adityanAgathionTactics,
  aelderTactics,
  ammutTactics,
  atropalTactics,

  behemothTactics,
  cornugonTactics,
  dreamLarvaTactics,
  forceDragonTactics,
  kamiTactics,
  kitsuneTactics,
  marilithTactics,
  minorXixecalTactics,
  mithralDragonTactics,
  nightwalkerTactics,
  nornTactics,
  oniMageTactics,
  phaneTactics,

  planetarTactics,
  pyroclasticDragonTactics,
  rakshasaMaharajaTactics,
  starstoneGolemTactics,
  sunGiantTactics,
  titanTactics,
  upasundaAsuraTactics,
  valkyrieTactics,
  verdantPrinceTactics,
  wormThatWalksTactics,
];