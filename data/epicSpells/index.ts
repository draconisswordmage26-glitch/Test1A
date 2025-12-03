// data/epicSpells/index.ts
import { EpicSpell } from '../../types';
import { cl20_25_Spells } from './cl20_25';
import { cl26_30_Spells } from './cl26_30';
import { cl31_35_Spells } from './cl31_35';
import { cl36_40_Spells } from './cl36_40';

export const epicSpells: EpicSpell[] = [
  ...cl20_25_Spells,
  ...cl26_30_Spells,
  ...cl31_35_Spells,
  ...cl36_40_Spells,
].sort((a, b) => a.name.localeCompare(b.name));
