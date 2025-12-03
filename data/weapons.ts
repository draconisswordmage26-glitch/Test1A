// data/weapons.ts
import { Weapon } from '../types';

export const simpleWeapons: Weapon[] = [
    // Light Melee
    { name: 'Gauntlet', category: 'Simple', type: 'Melee', handedness: 'Light', cost: '2 gp', damage_s: '1d2', damage_m: '1d3', crit: 'x2', weight: '1 lb.', damage_type: 'Bludgeoning' },
    { name: 'Dagger', category: 'Simple', type: 'Melee', handedness: 'Light', cost: '2 gp', damage_s: '1d3', damage_m: '1d4', crit: '19-20/x2', range: '10 ft.', weight: '1 lb.', damage_type: 'Piercing or Slashing' },
    { name: 'Mace, Light', category: 'Simple', type: 'Melee', handedness: 'Light', cost: '5 gp', damage_s: '1d4', damage_m: '1d6', crit: 'x2', weight: '4 lb.', damage_type: 'Bludgeoning' },
    { name: 'Sickle', category: 'Simple', type: 'Melee', handedness: 'Light', cost: '6 gp', damage_s: '1d4', damage_m: '1d6', crit: 'x2', weight: '2 lb.', damage_type: 'Slashing' },
    // One-Handed Melee
    { name: 'Club', category: 'Simple', type: 'Melee', handedness: 'One-Handed', cost: '—', damage_s: '1d4', damage_m: '1d6', crit: 'x2', range: '10 ft.', weight: '3 lb.', damage_type: 'Bludgeoning' },
    { name: 'Mace, Heavy', category: 'Simple', type: 'Melee', handedness: 'One-Handed', cost: '12 gp', damage_s: '1d6', damage_m: '1d8', crit: 'x2', weight: '8 lb.', damage_type: 'Bludgeoning' },
    { name: 'Morningstar', category: 'Simple', type: 'Melee', handedness: 'One-Handed', cost: '8 gp', damage_s: '1d6', damage_m: '1d8', crit: 'x2', weight: '6 lb.', damage_type: 'Bludgeoning and Piercing' },
    // Two-Handed Melee
    { name: 'Quarterstaff', category: 'Simple', type: 'Melee', handedness: 'Two-Handed', cost: '—', damage_s: '1d4/1d4', damage_m: '1d6/1d6', crit: 'x2', weight: '4 lb.', damage_type: 'Bludgeoning' },
    { name: 'Spear', category: 'Simple', type: 'Melee', handedness: 'Two-Handed', cost: '2 gp', damage_s: '1d6', damage_m: '1d8', crit: 'x3', range: '20 ft.', weight: '6 lb.', damage_type: 'Piercing' },
    // Ranged
    { name: 'Crossbow, Light', category: 'Simple', type: 'Ranged', handedness: 'Ranged', cost: '35 gp', damage_s: '1d6', damage_m: '1d8', crit: '19-20/x2', range: '80 ft.', weight: '4 lb.', damage_type: 'Piercing' },
    { name: 'Crossbow, Heavy', category: 'Simple', type: 'Ranged', handedness: 'Ranged', cost: '50 gp', damage_s: '1d8', damage_m: '1d10', crit: '19-20/x2', range: '120 ft.', weight: '8 lb.', damage_type: 'Piercing' },
    { name: 'Javelin', category: 'Simple', type: 'Ranged', handedness: 'Ranged', cost: '1 gp', damage_s: '1d4', damage_m: '1d6', crit: 'x2', range: '30 ft.', weight: '2 lb.', damage_type: 'Piercing' },
    { name: 'Sling', category: 'Simple', type: 'Ranged', handedness: 'Ranged', cost: '—', damage_s: '1d3', damage_m: '1d4', crit: 'x2', range: '50 ft.', weight: '0 lb.', damage_type: 'Bludgeoning' },
];

export const martialWeapons: Weapon[] = [
    // Light Melee
    { name: 'Axe, Hand', category: 'Martial', type: 'Melee', handedness: 'Light', cost: '6 gp', damage_s: '1d4', damage_m: '1d6', crit: 'x3', range: '10 ft.', weight: '3 lb.', damage_type: 'Slashing' },
    { name: 'Kukri', category: 'Martial', type: 'Melee', handedness: 'Light', cost: '8 gp', damage_s: '1d3', damage_m: '1d4', crit: '18-20/x2', weight: '2 lb.', damage_type: 'Slashing' },
    { name: 'Sword, Short', category: 'Martial', type: 'Melee', handedness: 'Light', cost: '10 gp', damage_s: '1d4', damage_m: '1d6', crit: '19-20/x2', weight: '2 lb.', damage_type: 'Piercing' },
    // One-Handed Melee
    { name: 'Axe, Battle', category: 'Martial', type: 'Melee', handedness: 'One-Handed', cost: '10 gp', damage_s: '1d6', damage_m: '1d8', crit: 'x3', weight: '6 lb.', damage_type: 'Slashing' },
    { name: 'Flail', category: 'Martial', type: 'Melee', handedness: 'One-Handed', cost: '8 gp', damage_s: '1d6', damage_m: '1d8', crit: 'x2', weight: '5 lb.', damage_type: 'Bludgeoning' },
    { name: 'Longsword', category: 'Martial', type: 'Melee', handedness: 'One-Handed', cost: '15 gp', damage_s: '1d6', damage_m: '1d8', crit: '19-20/x2', weight: '4 lb.', damage_type: 'Slashing' },
    { name: 'Rapier', category: 'Martial', type: 'Melee', handedness: 'One-Handed', cost: '20 gp', damage_s: '1d4', damage_m: '1d6', crit: '18-20/x2', weight: '2 lb.', damage_type: 'Piercing' },
    { name: 'Scimitar', category: 'Martial', type: 'Melee', handedness: 'One-Handed', cost: '15 gp', damage_s: '1d4', damage_m: '1d6', crit: '18-20/x2', weight: '4 lb.', damage_type: 'Slashing' },
    { name: 'Trident', category: 'Martial', type: 'Melee', handedness: 'One-Handed', cost: '15 gp', damage_s: '1d6', damage_m: '1d8', crit: 'x2', range: '10 ft.', weight: '4 lb.', damage_type: 'Piercing' },
    { name: 'Warhammer', category: 'Martial', type: 'Melee', handedness: 'One-Handed', cost: '12 gp', damage_s: '1d6', damage_m: '1d8', crit: 'x3', weight: '5 lb.', damage_type: 'Bludgeoning' },
    // Two-Handed Melee
    { name: 'Falchion', category: 'Martial', type: 'Melee', handedness: 'Two-Handed', cost: '75 gp', damage_s: '1d6', damage_m: '2d4', crit: '18-20/x2', weight: '8 lb.', damage_type: 'Slashing' },
    { name: 'Glaive', category: 'Martial', type: 'Melee', handedness: 'Two-Handed', cost: '8 gp', damage_s: '1d8', damage_m: '1d10', crit: 'x3', weight: '10 lb.', damage_type: 'Slashing' },
    { name: 'Greataxe', category: 'Martial', type: 'Melee', handedness: 'Two-Handed', cost: '20 gp', damage_s: '1d10', damage_m: '1d12', crit: 'x3', weight: '12 lb.', damage_type: 'Slashing' },
    { name: 'Greatsword', category: 'Martial', type: 'Melee', handedness: 'Two-Handed', cost: '50 gp', damage_s: '1d10', damage_m: '2d6', crit: '19-20/x2', weight: '8 lb.', damage_type: 'Slashing' },
    { name: 'Halberd', category: 'Martial', type: 'Melee', handedness: 'Two-Handed', cost: '10 gp', damage_s: '1d8', damage_m: '1d10', crit: 'x3', weight: '12 lb.', damage_type: 'Piercing or Slashing' },
    { name: 'Lance', category: 'Martial', type: 'Melee', handedness: 'Two-Handed', cost: '10 gp', damage_s: '1d6', damage_m: '1d8', crit: 'x3', weight: '10 lb.', damage_type: 'Piercing' },
    { name: 'Scythe', category: 'Martial', type: 'Melee', handedness: 'Two-Handed', cost: '18 gp', damage_s: '1d6', damage_m: '2d4', crit: 'x4', weight: '10 lb.', damage_type: 'Piercing or Slashing' },
    // Ranged
    { name: 'Longbow', category: 'Martial', type: 'Ranged', handedness: 'Ranged', cost: '75 gp', damage_s: '1d6', damage_m: '1d8', crit: 'x3', range: '100 ft.', weight: '3 lb.', damage_type: 'Piercing' },
    { name: 'Shortbow', category: 'Martial', type: 'Ranged', handedness: 'Ranged', cost: '30 gp', damage_s: '1d4', damage_m: '1d6', crit: 'x3', range: '60 ft.', weight: '2 lb.', damage_type: 'Piercing' },
];

export const exoticWeapons: Weapon[] = [
    { name: 'Kama', category: 'Exotic', type: 'Melee', handedness: 'Light', cost: '2 gp', damage_s: '1d4', damage_m: '1d6', crit: 'x2', weight: '2 lb.', damage_type: 'Slashing' },
    { name: 'Nunchaku', category: 'Exotic', type: 'Melee', handedness: 'Light', cost: '2 gp', damage_s: '1d4', damage_m: '1d6', crit: 'x2', weight: '2 lb.', damage_type: 'Bludgeoning' },
    { name: 'Sai', category: 'Exotic', type: 'Melee', handedness: 'Light', cost: '1 gp', damage_s: '1d3', damage_m: '1d4', crit: 'x2', range: '10 ft.', weight: '1 lb.', damage_type: 'Bludgeoning' },
    { name: 'Siangham', category: 'Exotic', type: 'Melee', handedness: 'Light', cost: '3 gp', damage_s: '1d4', damage_m: '1d6', crit: 'x2', weight: '1 lb.', damage_type: 'Piercing' },
    { name: 'Sword, Bastard', category: 'Exotic', type: 'Melee', handedness: 'One-Handed', cost: '35 gp', damage_s: '1d8', damage_m: '1d10', crit: '19-20/x2', weight: '6 lb.', damage_type: 'Slashing' },
    { name: 'Waraxe, Dwarven', category: 'Exotic', type: 'Melee', handedness: 'One-Handed', cost: '30 gp', damage_s: '1d8', damage_m: '1d10', crit: 'x3', weight: '8 lb.', damage_type: 'Slashing' },
    { name: 'Whip', category: 'Exotic', type: 'Melee', handedness: 'One-Handed', cost: '1 gp', damage_s: '1d2', damage_m: '1d3', crit: 'x2', weight: '2 lb.', damage_type: 'Slashing' },
    { name: 'Axe, Orc Double', category: 'Exotic', type: 'Melee', handedness: 'Two-Handed', cost: '60 gp', damage_s: '1d6/1d6', damage_m: '1d8/1d8', crit: 'x3', weight: '15 lb.', damage_type: 'Slashing' },
    { name: 'Chain, Spiked', category: 'Exotic', type: 'Melee', handedness: 'Two-Handed', cost: '25 gp', damage_s: '1d6', damage_m: '2d4', crit: 'x2', weight: '10 lb.', damage_type: 'Piercing' },
    { name: 'Flail, Dire', category: 'Exotic', type: 'Melee', handedness: 'Two-Handed', cost: '90 gp', damage_s: '1d6/1d6', damage_m: '1d8/1d8', crit: 'x2', weight: '10 lb.', damage_type: 'Bludgeoning' },
    { name: 'Net', category: 'Exotic', type: 'Ranged', handedness: 'Ranged', cost: '20 gp', damage_s: '—', damage_m: '—', crit: '—', range: '10 ft.', weight: '6 lb.', damage_type: '—' },
];


export const allWeapons: Weapon[] = [
    ...simpleWeapons,
    ...martialWeapons,
    ...exoticWeapons,
].sort((a, b) => a.name.localeCompare(b.name));