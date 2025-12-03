
// data/baseManeuvers/desertWind.ts
import { MartialManeuver } from '../../types';

export const baseDesertWindManeuvers: MartialManeuver[] = [
    // 1st Level
    { name: "Blistering Flourish", discipline: "Desert Wind", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack leaves a foe dazzled by the sun's glare. If your attack hits, the target is dazzled for 1 minute." },
    { name: "Burning Blade", discipline: "Desert Wind", level: 1, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "Your melee attacks deal an extra 1d6 fire damage plus 1 point per initiator level for 1 round." },
    { name: "Distracting Ember", discipline: "Desert Wind", level: 1, type: "Boost", action: "Swift", range: "30 ft.", target: "One creature", description: "A flash of fire appears, flanking the target for 1 round." },
    { name: "Wind Stride", discipline: "Desert Wind", level: 1, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You gain a +10-foot enhancement bonus to your land speed." },
    
    // 2nd Level
    { name: "Fan the Flames", discipline: "Desert Wind", level: 2, type: "Strike", action: "Standard", range: "30 ft.", area: "Ranged touch attack", description: "You launch a ball of fire dealing 6d6 fire damage." },
    { name: "Flashing Sun", discipline: "Desert Wind", level: 2, type: "Strike", action: "Full-Round", range: "Melee attack", target: "One or more creatures", description: "You gain one extra attack at your highest bonus, but all attacks take a -2 penalty." },
    { name: "Hatchling's Flame", discipline: "Desert Wind", level: 2, type: "Strike", action: "Standard", range: "30 ft.", area: "30-ft. cone", description: "You breathe a cone of fire that deals 2d6 fire damage (Reflex half)." },

    // 3rd Level
    { name: "Death Mark", discipline: "Desert Wind", level: 3, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You deal +6d6 fire damage in a spread centered on the target. You and the target are immune." },
    { name: "Fire Riposte", discipline: "Desert Wind", level: 3, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "When an enemy hits you, you can make a melee touch attack dealing 4d6 fire damage." },
    { name: "Holocaust Cloak", discipline: "Desert Wind", level: 3, type: "Stance", action: "Swift", range: "Personal", area: "5-ft. radius", description: "Adjacent creatures take 5 fire damage at the start of their turn." },

    // 4th Level
    { name: "Searing Blade", discipline: "Desert Wind", level: 4, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "Your melee attacks deal an extra 2d6 fire damage + 1 per level for 1 round." },
    { name: "Firesnake", discipline: "Desert Wind", level: 4, type: "Strike", action: "Standard", range: "60 ft.", area: "Line of fire", description: "A line of fire twists along the ground, dealing 6d6 fire damage (Reflex half)." },

    // 5th Level
    { name: "Desert Tempest", discipline: "Desert Wind", level: 5, type: "Strike", action: "Full-Round", range: "Personal", target: "Any square", description: "You move through enemies' squares, making attacks against each one you pass." },
    { name: "Dragon's Flame", discipline: "Desert Wind", level: 5, type: "Strike", action: "Standard", range: "30 ft.", area: "30-ft. cone", description: "You unleash a cone of fire that deals 6d6 fire damage (Reflex half)." },
    { name: "Leaping Flame", discipline: "Desert Wind", level: 5, type: "Counter", action: "Immediate", range: "60 ft.", target: "One creature", description: "Teleport adjacent to an enemy who attacks you." },

    // 6th Level
    { name: "Fiery Assault", discipline: "Desert Wind", level: 6, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "Your melee attacks deal an extra 1d6 fire damage." },
    { name: "Ring of Fire", discipline: "Desert Wind", level: 6, type: "Strike", action: "Full-Round", range: "Personal", area: "Enclosed area", description: "You move to surround enemies in a ring of fire. They take 12d6 fire damage." },

    // 7th Level
    { name: "Salamander Charge", discipline: "Desert Wind", level: 7, type: "Strike", action: "Full-Round", range: "Melee attack", target: "One creature", description: "Charge and create a wall of fire along your path. Your attack deals +6d6 fire damage." },

    // 8th Level
    { name: "Rising Phoenix", discipline: "Desert Wind", level: 8, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You can fly 10 feet above the ground with a speed of 60 feet. You deal fire damage to adjacent creatures." },

    // 9th Level
    { name: "Inferno Blast", discipline: "Desert Wind", level: 9, type: "Strike", action: "Standard", range: "60 ft.", area: "60-ft. radius burst", description: "You unleash a massive burst of fire dealing 100 points of fire damage (Reflex half)." },
];
