// data/feats/index.ts
import { Feat } from '../../types';
import { a_e_feats } from './a_e';
import { f_l_feats } from './f_l';
import { m_r_feats } from './m_r';
import { s_z_feats } from './s_z';

export const feats: Feat[] = [
    ...a_e_feats,
    ...f_l_feats,
    ...m_r_feats,
    ...s_z_feats,
].sort((a, b) => a.name.localeCompare(b.name));