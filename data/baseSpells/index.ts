// data/baseSpells/index.ts
import { BaseSpell } from '../../types';
import { level0Spells } from './level0';
import { level1Spells } from './level1';
import { level2Spells } from './level2';
import { level3Spells } from './level3';
import { level4Spells } from './level4';
import { level5Spells } from './level5';
import { level6Spells } from './level6';
import { level7Spells } from './level7';
import { level8Spells } from './level8';
import { level9Spells } from './level9';

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
];
