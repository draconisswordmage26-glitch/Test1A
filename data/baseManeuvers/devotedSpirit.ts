// data/baseManeuvers/devotedSpirit.ts
import { MartialManeuver } from '../../types';

export const baseDevotedSpiritManeuvers: MartialManeuver[] = [
    // 1st Level
    { name: "Crusader's Strike", discipline: "Devoted Spirit", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your faith inspires you. If this strike hits, you or an ally within 10 feet heals 1d6 + your key ability modifier in hit points." },
    { name: "Vanguard Strike", discipline: "Devoted Spirit", level: 1, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack guides your allies. You and your allies gain a +4 morale bonus on attack rolls against the target for 1 round." },
    { name: "Iron Guard's Glare", discipline: "Devoted Spirit", level: 1, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "Your presence is a challenge. Foes you strike become shaken for 1 round." },
    { name: "Martial Spirit", discipline: "Devoted Spirit", level: 1, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "Your martial prowess heals your wounds. You or an ally within 30 feet heals 2 hit points each time you make a successful melee attack." },

    // 2nd Level
    { name: "Foehammer", discipline: "Devoted Spirit", level: 2, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack ignores the target's damage reduction." },
    { name: "Shield Block", discipline: "Devoted Spirit", level: 2, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "You can oppose an enemy's attack roll by making an attack roll of your own. If your result is higher, the attack is negated." },

    // 3rd Level
    { name: "Defensive Rebuke", discipline: "Devoted Spirit", level: 3, type: "Boost", action: "Swift", range: "Personal", target: "You", description: "Until your next turn, any opponent that attacks you provokes an attack of opportunity from you." },
    { name: "Revitalizing Strike", discipline: "Devoted Spirit", level: 3, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack heals your allies' wounds. If this strike hits, you and your allies within 30 feet heal 3d6 + your key ability modifier in hit points." },
    { name: "Thicket of Blades", discipline: "Devoted Spirit", level: 3, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You can make attacks of opportunity against any creature that moves into any square you threaten." },

    // 4th Level
    { name: "Divine Surge", discipline: "Devoted Spirit", level: 4, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "You channel divine power into your attack, dealing an extra 2d6 damage. This damage is doubled against a foe of an opposing alignment." },
    { name: "Entangling Blade", discipline: "Devoted Spirit", level: 4, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack entangles a foe as if by a 'web' spell for 1 minute (Reflex negates)." },
    
    // 5th Level
    { name: "Daunting Strike", discipline: "Devoted Spirit", level: 5, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your strike causes fear. The target becomes shaken for 1 minute (Will negates)." },
    { name: "Shield Counter", discipline: "Devoted Spirit", level: 5, type: "Counter", action: "Immediate", range: "Personal", target: "You", description: "When an enemy attacks you, you can negate it by succeeding on an opposed attack roll. If you do, you can immediately make an attack against them." },

    // 6th Level
    { name: "Aura of Chaos", discipline: "Devoted Spirit", level: 6, type: "Stance", action: "Swift", range: "Personal", area: "10-ft. aura", description: "Your chaotic aura confounds lawful creatures, giving them a -4 penalty on attack rolls against you." },
    { name: "Aura of Perfect Order", discipline: "Devoted Spirit", level: 6, type: "Stance", action: "Swift", range: "Personal", area: "10-ft. aura", description: "Your lawful aura confounds chaotic creatures, giving them a -4 penalty on attack rolls against you." },
    { name: "Tide of Chaos", discipline: "Devoted Spirit", level: 6, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your chaotic strike deals an extra 4d6 damage to a lawful creature and dazes them for 1 round (Fortitude negates daze)." },

    // 7th Level
    { name: "Rallying Strike", discipline: "Devoted Spirit", level: 7, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your successful strike inspires your allies, dispelling fear effects affecting them and granting them a morale bonus on their next attack roll." },
    { name: "Castigating Strike", discipline: "Devoted Spirit", level: 7, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your strike deals an extra 8d6 damage to a creature of an opposing alignment. You take half this extra damage as well." },

    // 8th Level
    { name: "Aura of Triumph", discipline: "Devoted Spirit", level: 8, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "When you strike a foe, you heal 4 hit points. Against an evil foe, you heal 8 hit points instead. This also applies to allies within 30 feet." },
    { name: "Immortal Fortitude", discipline: "Devoted Spirit", level: 8, type: "Stance", action: "Swift", range: "Personal", target: "You", description: "You cannot be killed by hit point damage. While in this stance, damage that would reduce you below -9 hit points is ignored. You still die if you reach -10 hit points from nonlethal damage." },
    { name: "Strike of the Pious", discipline: "Devoted Spirit", level: 8, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack deals an extra 50 points of damage against a creature of an opposing alignment." },

    // 9th Level
    { name: "Strike of Righteous Vitality", discipline: "Devoted Spirit", level: 9, type: "Strike", action: "Standard", range: "Melee attack", target: "One creature", description: "Your attack heals an ally for 5 times your key ability modifier in hit points, in addition to dealing normal damage." },
];
