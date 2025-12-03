// data/sampleBuilds/phane.ts
import { MonsterSampleBuilds } from '../../types';

export const phaneBuilds: MonsterSampleBuilds = {
    monsterName: "Phane, The Timeless Hunter",
    builds: [
        {
            category: 'Basic',
            title: 'The Chronal Skirmisher',
            progression: 'Scout 40',
            feats: 'Dodge, Mobility, Spring Attack, Bounding Assault, Rapid Blitz, and epic feats that enhance speed and skirmish damage.',
            skills: 'Tumble, Hide, Move Silently, Listen, Spot',
            lore: 'This build perfects the Phane\'s natural talent for hit-and-run combat. It becomes a blur on the battlefield, a ghost that strikes from nowhere and vanishes before its victims can retaliate.',
            tactics: 'A pure skirmisher. It must move every round to activate its Skirmish damage. It uses feats like Bounding Assault to move, attack, and move away in a single turn. Its high speed and Tumble skill make it nearly impossible to pin down.',
        },
        {
            category: 'Beginner',
            title: 'The Temporal Assassin',
            progression: 'Scout 20 / Assassin 10 / Epic Scout 10',
            feats: 'Focuses on feats that enhance its stealth and its Death Attack.',
            skills: 'Hide, Move Silently, Disguise',
            lore: 'The Phane hones its predatory instincts, becoming a true assassin. It uses its temporal abilities not just to move, but to study its prey, learning its weaknesses before delivering a single, perfect killing blow.',
            tactics: 'A patient hunter. It uses its stealth and \'Time Stop\' ability to study a target for 3 rounds, setting up its devastating Death Attack. It strikes from the future, its kill already decided.'
        },
        {
            category: 'Standard',
            title: 'The Paradox Blade',
            progression: 'Scout 20 / Warblade 10 / Eternal Blade 10',
            feats: 'Blade Meditation and feats that blend its mobility with tactical maneuvers.',
            skills: 'Tumble, Martial Lore, Concentration',
            lore: 'The Phane learns the martial art of the Eternal Blade, blending its innate time manipulation with a warrior\'s discipline. Its movements are not just fast, but precognitive, its strikes perfectly timed to exploit openings that have not yet appeared.',
            tactics: 'A temporal duelist. It uses its Eternal Blade abilities to gain extra actions and add its high Intelligence to its AC and damage. It combines its Scout mobility with Warblade maneuvers to be a confusing and deadly opponent.'
        },
        {
            category: 'Expert',
            title: 'The Timeless Hunter',
            progression: 'Scout 20 / Timeless Hunter 10 / Epic Scout 10',
            feats: 'Epic Dodge, Blinding Speed, and other epic feats that enhance its temporal abilities.',
            skills: 'Hide, Move Silently, Tumble, Survival',
            lore: 'This Phane embraces its destiny, becoming a true Timeless Hunter. It exists in multiple moments at once, its attacks coming from the past, present, and future simultaneously. It is a living paradox, a predator of causality itself.',
            tactics: 'A reality-bending assassin. Its \'Temporal Flurry\' ability allows it to unleash three full attacks in a single action, a devastating alpha strike. Its \'Acausal\' nature makes it immune to paradoxes. It is a nearly unstoppable killer.'
        },
        {
            category: 'Legend',
            title: 'The Chronomancer',
            progression: 'Scout 10 / Psion 10 / Chronomancer 10 / Epic Psion 10',
            feats: 'Epic Spellcasting (to qualify for Chronomancer with psionics), Quicken Power, and feats that enhance its control over time.',
            skills: 'Psicraft, Knowledge (The Planes), Concentration',
            lore: 'The Phane transcends its predatory nature, its alien mind grasping the fundamental laws of time. It becomes a Chronomancer, a true master of the timeline. Its goal is no longer just to hunt, but to preserve the integrity of time itself from those who would unravel it.',
            tactics: 'A psionic god of time. It combines its Scout mobility with the reality-warping power of a Chronomancer. It can stop time, rewind events, and even erase creatures from the timeline. It is a being of immense power, a guardian of causality whose methods are as alien as its origins.',
        }
    ]
};
