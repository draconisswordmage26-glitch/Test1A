// data/baseClasses/index.ts
import { BaseClass } from '../../types';

import { barbarian } from './barbarian';
import { bard } from './bard';
import { cleric } from './cleric';
import { druid } from './druid';
import { fighter } from './fighter';
import { monk } from './monk';
import { paladin } from './paladin';
import { ranger } from './ranger';
import { rogue } from './rogue';
import { sorcerer } from './sorcerer';
import { wizard } from './wizard';
// Tome of Battle
import { crusader } from './crusader';
import { warblade } from './warblade';
// Tome of Magic
import { binder } from './binder';
// Magic of Incarnum
import { totemist } from './totemist';
// Complete Arcane
import { warlock } from './warlock';
// Miniatures Handbook
import { marshal } from './marshal';
// Complete Adventurer
import { scout } from './scout';
// Heroes of Horror
import { archivist } from './archivist';
// Psionics
import { psion } from './psion';
import { psychicWarrior } from './psychicWarrior';
import { soulknife } from './soulknife';
// Player's Handbook II
import { knight } from './knight';

export const baseClasses: BaseClass[] = [
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  ranger,
  rogue,
  sorcerer,
  wizard,
  crusader,
  warblade,
  binder,
  totemist,
  warlock,
  marshal,
  scout,
  archivist,
  psion,
  psychicWarrior,
  soulknife,
  knight,
].sort((a, b) => a.name.localeCompare(b.name));
