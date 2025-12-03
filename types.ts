// types.ts

export type AbilityName = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';
export type BonusTarget = AbilityName | 'ac' | 'attack' | 'damage' | 'saves' | 'skill';
export type BonusType = 'enhancement' | 'morale' | 'insight' | 'sacred' | 'profane' | 'circumstance' | 'deflection' | 'armor' | 'shield' | 'natural_armor' | 'resistance' | 'untyped' | 'luck';
export type EquipSlot = 'head' | 'throat' | 'shoulders' | 'armor' | 'torso' | 'waist' | 'hands' | 'arms' | 'feet' | 'ring' | 'weapon' | 'shield' | 'no-slot';


export interface AbilityScores {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

export interface Save {
  bonus: number;
  breakdown: string;
}

export interface Skill {
  name: string;
  bonus: number;
  breakdown?: string;
}

export interface Attack {
  name: string;
  bonus: string;
  damage: string;
  crit: string;
  type: string;
}

export interface SpecialAbility {
  name: string;
  type: string;
  description: string;
}

export interface EquipmentItem {
  name: string;
  cost: string;
  description: string;
}

export interface Sheet {
  baseAtk: number;
  grapple: number;
  fullAttack: Attack[];
  attackRoutine?: string[];
  spaceReach: string;
  specialAttacks: SpecialAbility[];
  specialQualities: SpecialAbility[];
  saves: {
    fort: Save;
    ref: Save;
    will: Save;
  };
  abilities: AbilityScores;
  skills: Skill[];
  feats: { name: string; description: string }[];
  flaws: { name: string; description: string }[];
  environment: string;
  organization: string;
  alignment: string;
  levelAdjustment: string;
  advancement: string;
  equipment: {
    totalValue: string;
    items: EquipmentItem[];
  };
}

export interface Build {
  level: number;
  title: string;
  class: string;
  hitDice: string;
  challengeRating: number;
  speed?: string;
  armorClass: {
    total: number;
    breakdown: string;
    touch?: number;
    flatFooted?: number;
  };
  initiative: {
    bonus: number;
    breakdown: string;
  };
  buildNotes: string[];
  selectedSpells?: string[];
  selectedPowers?: string[];
  selectedManeuvers?: string[];
  // FIX: Added missing 'sheet' property to the Build interface.
  sheet: Sheet;
}

export interface Monster {
  name: string;
  description: string;
  roleplayGuide: string[];
  builds: Build[];
}

export interface ClassFeature {
  level: number;
  name: string;
  description: string;
}

export type SaveProgression = 'good' | 'poor';
export type BabProgression = 'good' | 'average' | 'poor';

export interface BaseClass {
  name: string;
  hitDie: number;
  skillPoints: number;
  classSkills: string[];
  bab: BabProgression;
  saves: {
    fort: SaveProgression;
    ref: SaveProgression;
    will: SaveProgression;
  };
  classFeatures: ClassFeature[];
  primaryAbility?: AbilityName;
  role?: 'melee' | 'ranged' | 'arcane' | 'divine' | 'psionic' | 'skill';
  casterType?: 'arcane' | 'divine';
  casterProgression?: 'full' | 'half';
}


export interface FeatPrerequisites {
    bab?: number;
    feats?: string[];
    abilityScores?: Partial<AbilityScores>;
    skills?: { [key: string]: number };
    special?: string;
}

export interface Feat {
    name: string;
    description: string;
    prerequisites?: FeatPrerequisites;
    isEpic?: boolean;
}

export interface PrestigeClassPrerequisites {
    bab?: number;
    feats?: (string | string[])[];
    abilityScores?: Partial<AbilityScores>;
    skills?: { [key: string]: any };
    spells?: { arcane?: number; divine?: number; psionic?: number };
    special?: string;
    alignment?: string[];
    type?: string;
}

export interface PrestigeClass {
    name: string;
    description: string;
    requirements: string[];
    prerequisites?: PrestigeClassPrerequisites;
    hitDie: number;
    skillPoints: number;
    classSkills: string[];
    bab: BabProgression;
    saves: {
        fort: SaveProgression;
        ref: SaveProgression;
        will: SaveProgression;
    };
    features: ClassFeature[];
    advancesArcane?: boolean;
    advancesDivine?: boolean;
    progression?: string[];
}

export interface BaseSpell {
  name: string;
  school: string;
  level: { [className: string]: number };
  components: string;
  castingTime: string;
  range: string;
  target?: string;
  area?: string;
  duration: string;
  savingThrow: string;
  spellResistance: string;
  description: string;
}

export interface EpicSpell {
  name: string;
  casterLevelReq: number;
  school: string;
  components?: string;
  castingTime: string;
  range: string;
  target?: string;
  area?: string;
  duration: string;
  savingThrow: string;
  spellResistance: string;
  description: string;
}

export interface PsionicPower {
    name: string;
    discipline: string;
    level: string;
    manifesterLevel?: number;
    display: string;
    manifestingTime: string;
    range: string;
    target?: string;
    area?: string;
    duration: string;
    savingThrow: string;
    powerResistance: string;
    powerPoints: string;
    description: string;
    augment: string;
}

export interface ChakraBind {
    chakra: string;
    description: string;
}

export interface Soulmeld {
    name: string;
    levelReq?: number;
    essentia: string;
    description: string;
    category: string;
    chakraBind: ChakraBind[];
}

export interface MartialManeuver {
    name: string;
    discipline: string;
    level: number;
    initiatorLevelReq?: number;
    type: "Stance" | "Strike" | "Boost" | "Counter";
    action: "Standard" | "Full-Round" | "Swift" | "Immediate" | "Free" | "Move";
    range: string;
    target?: string;
    area?: string;
    description: string;
}

export interface Artifact {
    name: string;
    user: string;
    description: string;
    powers: string[];
}

export interface TacticSection {
    title: string;
    content: string[];
}

export interface Tactics {
    name: string;
    title: string;
    description: string;
    sections: TacticSection[];
}

export interface EncounterMonster {
    name: string;
    quantity: number;
    notes?: string;
}

export interface Encounter {
    name: string;
    el: number;
    description: string;
    setup: string[];
    monsters: EncounterMonster[];
    reinforcements?: string[];
    tactics: string[];
    scaling: {
        increase: string;
        decrease: string;
    };
    treasure: string[];
}

export interface DivinityAbility {
    name: string;
    description: string;
}

export interface DivinityCategory {
    name: string;
    description: string;
    abilities: DivinityAbility[];
}

export interface DanmakuAttack {
    name: string;
    description: string;
}

export interface Antagonist {
    name: string;
    stats: Monster;
    tactics: Tactics;
    divinity?: DivinityCategory[];
    danmaku?: DanmakuAttack[];
}

export interface BaselineMonster {
    name: string;
    description: string;
    racialHitDice: string;
    sizeAndType: string;
    sizeModifier: number;
    naturalArmor: number;
    speed: string;
    armorClass: {
        base: number;
        breakdown: string;
        touch: number;
        flatFooted: number;
    };
    baseAttack: number;
    grapple: number;
    attacks: string[];
    fullAttack: string[];
    spaceReach: string;
    specialAttacks: SpecialAbility[];
    specialQualities: SpecialAbility[];
    saves: {
        fort: number;
        ref: number;
        will: number;
    };
    abilities: AbilityScores;
    skills: { name: string; bonus: number }[];
    feats: string[];
    environment: string;
    challengeRating: number;
    levelAdjustment: string;
    advancement: string;
    alignment: string;
}

export interface ItemBonus {
    type: BonusType;
    target: BonusTarget;
    value: number;
    special?: string;
}

export interface MagicItem {
    name: string;
    cost: number;
    description: string;
    equipSlot: EquipSlot;
    bonuses?: ItemBonus[];
}

export interface AppliedClassLevel {
    class: BaseClass | PrestigeClass;
    level: number;
}

export interface CharacterBuild {
    base: BaselineMonster;
    levels: AppliedClassLevel[];
    selectedFeats: { [key: string]: string };
    allocatedSkills: { [key: string]: number };
    selectedItems: MagicItem[];
    equippedWeapons: EquippedWeapon[];
    // Legacy arrays kept for compatibility
    selectedSpells?: string[];
    selectedPowers?: string[];
    selectedManeuvers?: string[];
    // New structured ability selections
    abilitySelections?: { [sourceName: string]: string[] };
}

export interface SampleBuild {
  category: 'Basic' | 'Beginner' | 'Standard' | 'Expert' | 'Legend';
  title: string;
  progression: string;
  feats: string;
  skills: string;
  lore: string;
  tactics: string;
}

export interface MonsterSampleBuilds {
  monsterName: string;
  builds: SampleBuild[];
}

export interface Weapon {
    name: string;
    category: 'Simple' | 'Martial' | 'Exotic';
    type: 'Melee' | 'Ranged';
    handedness: 'Light' | 'One-Handed' | 'Two-Handed' | 'Ranged';
    cost: string;
    damage_s: string;
    damage_m: string;
    crit: string;
    range?: string;
    weight: string;
    damage_type: string;
}

export interface WeaponProperty {
    name: string;
    cost: number; // e.g., Holy is a +2 bonus, so cost is 2
    description: string;
    effect: {
        type: 'damage' | 'crit' | 'special' | 'ability_drain';
        value?: string; // e.g., "1d6 fire" or "double"
        condition?: string; // e.g., "vs evil"
    };
}

export interface EquippedWeapon {
    baseWeapon: Weapon;
    enhancement: number;
    properties: WeaponProperty[];
    name: string;
}