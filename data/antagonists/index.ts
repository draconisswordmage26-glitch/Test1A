
// data/antagonists/index.ts
import { Antagonist } from '../../types';
import { cr_8_12_antagonists } from './cr_8_12';
import { cr_13_17_antagonists } from './cr_13_17';
import { cr_18_22_antagonists } from './cr_18_22';
import { cr_23_27_antagonists } from './cr_23_27';
import { cr_28_32_antagonists } from './cr_28_32';
import { cr_33_37_antagonists } from './cr_33_37';
import { cr_40_50_antagonists } from './cr_40_50';
import { cr_50_60_antagonists } from './cr_50_60';
import { cr_60_plus_antagonists } from './cr_60_plus';

export const antagonists: Antagonist[] = [
  ...cr_8_12_antagonists,
  ...cr_13_17_antagonists,
  ...cr_18_22_antagonists,
  ...cr_23_27_antagonists,
  ...cr_28_32_antagonists,
  ...cr_33_37_antagonists,
  ...cr_40_50_antagonists,
  ...cr_50_60_antagonists,
  ...cr_60_plus_antagonists,
];
