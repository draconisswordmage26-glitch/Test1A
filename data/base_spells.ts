// data/base_spells.ts
import { BaseSpell } from '../types';
import { level0Spells } from './baseSpells/level0';
import { level1Spells } from './baseSpells/level1';
import { level2Spells } from './baseSpells/level2';
import { level3Spells } from './baseSpells/level3';
import { level4Spells } from './baseSpells/level4';
import { level5Spells } from './baseSpells/level5';
import { level6Spells } from './baseSpells/level6';
import { level7Spells } from './baseSpells/level7';
import { level8Spells } from './baseSpells/level8';
import { level9Spells } from './baseSpells/level9';

export const baseSpells: BaseSpell[] = [
    ...level0Spells,
    ...level1Spells,
    ...level2Spells,
    ...level3Spells,
    ...level4Spells,
    ...level5Spells,
    ...level6Spells,
    ...level7Spells,
    ...level8Spells,
    ...level9Spells,
].sort((a,b) => a.name.localeCompare(b.name));
