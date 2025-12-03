// data/weaponProperties.ts
import { WeaponProperty } from '../types';

// FIX: Added 'as const' to the 'type' property of each 'effect' object to satisfy the strict string literal union type of WeaponProperty['effect']['type'].
export const allWeaponProperties: WeaponProperty[] = [
    // +1 Bonus
    { name: 'Bane', cost: 1, description: 'Deals an extra 2d6 damage against a specific creature type.', effect: { type: 'damage' as const, value: '2d6', condition: 'vs chosen foe' } },
    { name: 'Defending', cost: 1, description: 'Allows transferring enhancement bonus to AC.', effect: { type: 'special' as const } },
    { name: 'Flaming', cost: 1, description: 'Deals an extra 1d6 fire damage on a successful hit.', effect: { type: 'damage' as const, value: '1d6 fire' } },
    { name: 'Frost', cost: 1, description: 'Deals an extra 1d6 cold damage on a successful hit.', effect: { type: 'damage' as const, value: '1d6 cold' } },
    { name: 'Ghost Touch', cost: 1, description: 'Weapon can harm incorporeal creatures normally.', effect: { type: 'special' as const } },
    { name: 'Keen', cost: 1, description: 'Doubles the threat range of the weapon.', effect: { type: 'crit' as const, value: 'double' } },
    { name: 'Merciful', cost: 1, description: 'Deals nonlethal damage instead of lethal. Also deals an extra 1d6 nonlethal damage.', effect: { type: 'damage' as const, value: '1d6 nonlethal' } },
    { name: 'Mighty Cleaving', cost: 1, description: 'Grants one additional Cleave attempt per round.', effect: { type: 'special' as const } },
    { name: 'Seeking', cost: 1, description: 'Ranged weapon negates all miss chances from concealment.', effect: { type: 'special' as const } },
    { name: 'Shock', cost: 1, description: 'Deals an extra 1d6 electricity damage on a successful hit.', effect: { type: 'damage' as const, value: '1d6 electricity' } },
    { name: 'Spell Storing', cost: 1, description: 'Stores one targeted spell of up to 3rd level, which can be cast upon a successful hit.', effect: { type: 'special' as const } },
    { name: 'Thundering', cost: 1, description: 'On a critical hit, deals an extra 1d8 sonic damage and deafens the target.', effect: { type: 'crit' as const, value: '1d8 sonic & deafen' } },

    // +2 Bonus
    { name: 'Anarchic', cost: 2, description: 'Deals an extra 2d6 chaotic damage against lawful creatures.', effect: { type: 'damage' as const, value: '2d6 chaotic', condition: 'vs lawful' } },
    { name: 'Axiomatic', cost: 2, description: 'Deals an extra 2d6 lawful damage against chaotic creatures.', effect: { type: 'damage' as const, value: '2d6 lawful', condition: 'vs chaotic' } },
    { name: 'Collision', cost: 2, description: 'Deals an extra 5 points of damage.', effect: { type: 'damage' as const, value: '5' } },
    { name: 'Disruption', cost: 2, description: 'Undead creatures struck must make a DC 14 Will save or be destroyed.', effect: { type: 'special' as const, value: 'vs Undead' } },
    { name: 'Flaming Burst', cost: 2, description: 'Deals 1d6 fire damage, plus an extra 1d10 fire damage on a critical hit.', effect: { type: 'damage' as const, value: '1d6 fire', condition: 'and 1d10 on crit' } },
    { name: 'Holy', cost: 2, description: 'Deals an extra 2d6 holy damage against evil creatures.', effect: { type: 'damage' as const, value: '2d6 holy', condition: 'vs evil' } },
    { name: 'Icy Burst', cost: 2, description: 'Deals 1d6 cold damage, plus an extra 1d10 cold damage on a critical hit.', effect: { type: 'damage' as const, value: '1d6 cold', condition: 'and 1d10 on crit' } },
    { name: 'Shocking Burst', cost: 2, description: 'Deals 1d6 electricity damage, plus an extra 1d10 electricity damage on a critical hit.', effect: { type: 'damage' as const, value: '1d6 electricity', condition: 'and 1d10 on crit' } },
    { name: 'Unholy', cost: 2, description: 'Deals an extra 2d6 unholy damage against good creatures.', effect: { type: 'damage' as const, value: '2d6 unholy', condition: 'vs good' } },
    { name: 'Wounding', cost: 2, description: 'Deals 1 point of Constitution damage on a successful hit.', effect: { type: 'ability_drain' as const, value: '1 Con' } },

    // +3 Bonus
    { name: 'Distance', cost: 3, description: 'Doubles the range increment of a ranged weapon.', effect: { type: 'special' as const } },

    // +4 Bonus
    { name: 'Brilliant Energy', cost: 4, description: 'Ignores nonliving matter, including armor and shields, but does not harm undead or constructs.', effect: { type: 'special' as const } },
    { name: 'Dancing', cost: 4, description: 'Can be released to fight on its own for 4 rounds.', effect: { type: 'special' as const } },
    { name: 'Speed', cost: 4, description: 'Grants one extra attack per round at the wielder\'s highest base attack bonus.', effect: { type: 'special' as const } },
    
    // +5 Bonus
    { name: 'Vorpal', cost: 5, description: 'On a natural 20 (and a confirmed critical hit), the weapon severs the opponent\'s head.', effect: { type: 'special' as const } },
].sort((a,b) => a.cost - b.cost || a.name.localeCompare(b.name));