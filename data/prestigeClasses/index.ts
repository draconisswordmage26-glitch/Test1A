// data/prestigeClasses/index.ts
import { PrestigeClass } from '../../types';

import { abjurantChampion } from './abjurantChampion';
import { adamantineHurricane } from './adamantineHurricane';
import { alienist } from './alienist';
import { allBeast } from './allBeast';
import { animaMage } from './animaMage';
import { archlich } from './archlich';
import { archmage } from './archmage';
import { arcaneHierophant } from './arcaneHierophant';
import { assassin } from './assassin';
import { blackguard } from './blackguard';
import { celestialParagon } from './celestialParagon';
import { chronomancer } from './chronomancer';
import { contemplative } from './contemplative';
import { demonicLord } from './demonicLord';
import { dervish } from './dervish';
import { devilBinder } from './devilBinder';
import { divineAgent } from './divineAgent';
import { dreadPirate } from './dreadPirate';
import { dreamweaver } from './dreamweaver';
import { drunkenMaster } from './drunkenMaster';
import { duelist } from './duelist';
import { eternalBlade } from './eternalBlade';
import { exoticWeaponMaster } from './exoticWeaponMaster';
import { fateEnder } from './fateEnder';
import { fatespinner } from './fatespinner';
import { fochlucanLyrist } from './fochlucanLyrist';
import { frenziedBerserker } from './frenziedBerserker';
import { genesisAvatar } from './genesisAvatar';
import { godOfCausality } from './godOfCausality';
import { godOfDestruction } from './godOfDestruction';
import { godOfMagic } from './godOfMagic';
import { godOfOblivion } from './godOfOblivion';
import { godOfPacts } from './godOfPacts';
import { godOfRage } from './godOfRage';
import { godOfTheWild } from './godOfTheWild';
import { godKing } from './godKing';
import { godMind } from './godMind';
import { hellfireWarlock } from './hellfireWarlock';
import { horizonWalker } from './horizonWalker';
import { initiateOfTheSevenfoldVeil } from './initiateOfTheSevenfoldVeil';
import { ironDisciplinarian } from './ironDisciplinarian';
import { ironGolemParagon } from './ironGolemParagon';
import { kensai } from './kensai';
import { kitsuneSpiritGrandmaster } from './kitsuneSpiritGrandmaster';
import { lawgiver } from './lawgiver';
import { legendaryHierophant } from './legendaryHierophant';
import { legendaryLeader } from './legendaryLeader';
import { lordOfTheNine } from './lordOfTheNine';
import { loremaster } from './loremaster';
import { masterOfManyForms } from './masterOfManyForms';
import { mindBender } from './mindBender';
import { mysticTheurge } from './mysticTheurge';
import { paladinOfTyranny } from './paladinOfTyranny';
import { phantomKnight } from './phantomKnight';
import { piousTemplar } from './piousTemplar';
import { planarShepherd } from './planarShepherd';
import { seer } from './seer';
import { shadowcraftMage } from './shadowcraftMage';
import { shadowdancer } from './shadowdancer';
import { shifter30 } from './shifter30';
import { slayer } from './slayer';
import { soldierOfLight } from './soldierOfLight';
import { soulbow } from './soulbow';
import { soulBoundGladiator } from './soulBoundGladiator';
import { soulEater } from './soulEater';
import { stormcaster } from './stormcaster';
import { swiftblade } from './swiftblade';
import { tempest } from './tempest';
import { thrallherd } from './thrallherd';
import { timelessHunter } from './timelessHunter';
import { trueNecromancer } from './trueNecromancer';
import { unstoppableWhirlwind } from './unstoppableWhirlwind';
import { warGolem } from './warGolem';
import { warshaper } from './warshaper';
import { worldEnder } from './worldEnder';
import { worldSmasher } from './worldSmasher';

export const prestigeClasses: PrestigeClass[] = [
    abjurantChampion,
    adamantineHurricane,
    alienist,
    allBeast,
    animaMage,
    // apostateCardinal, // This is an antagonist, not a prestige class definition
    archlich,
    archmage,
    arcaneHierophant,
    assassin,
    blackguard,
    celestialParagon,
    chronomancer,
    contemplative,
    demonicLord,
    dervish,
    devilBinder,
    divineAgent,
    dreadPirate,
    dreamweaver,
    drunkenMaster,
    duelist,
    eternalBlade,
    exoticWeaponMaster,
    fateEnder,
    fatespinner,
    fochlucanLyrist,
    frenziedBerserker,
    genesisAvatar,
    godOfCausality,
    godOfDestruction,
    godOfMagic,
    godOfOblivion,
    godOfPacts,
    godOfRage,
    godOfTheWild,
    godKing,
    godMind,
    hellfireWarlock,
    horizonWalker,
    initiateOfTheSevenfoldVeil,
    ironDisciplinarian,
    ironGolemParagon,
    kensai,
    kitsuneSpiritGrandmaster,
    lawgiver,
    legendaryHierophant,
    legendaryLeader,
    lordOfTheNine,
    loremaster,
    masterOfManyForms,
    mindBender,
    mysticTheurge,
    paladinOfTyranny,
    phantomKnight,
    piousTemplar,
    planarShepherd,
    seer,
    shadowcraftMage,
    shadowdancer,
    shifter30,
    slayer,
    soldierOfLight,
    soulbow,
    soulBoundGladiator,
    soulEater,
    stormcaster,
    swiftblade,
    tempest,
    thrallherd,
    timelessHunter,
    trueNecromancer,
    unstoppableWhirlwind,
    warGolem,
    warshaper,
    worldEnder,
    worldSmasher,
].sort((a, b) => a.name.localeCompare(b.name));
