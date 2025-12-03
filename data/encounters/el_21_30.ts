
// data/encounters/el_21_30.ts
import { Encounter } from '../../types';

export const el21_30_encounters: Encounter[] = [
    {
        name: "The Soul-Cage",
        el: 26,
        description: "A Stygian Dreadnought has been unleashed upon a celestial plane, its purpose to harvest the souls of angels to fuel the Empæryen's war machine. It is supported by a Blasphemy Choir, whose profane hymns protect the construct and weaken the celestial defenders. The party must destroy the soul-cage before it consumes the essence of this holy place.",
        setup: [
            "The battlefield is a pristine celestial meadow, now scarred by the Dreadnought's advance. The air is filled with the faint, discordant chanting of the Blasphemy Choir.",
            "The Stygian Dreadnought (CR 25) is the centerpiece, lumbering towards a celestial landmark (a temple, a sacred pool, etc.).",
            "Two Blasphemy Choir Acolytes (CR 22) stand 60 feet behind the Dreadnought, providing support."
        ],
        monsters: [
            { name: "Stygian Dreadnought", quantity: 1, notes: "CR 25" },
            { name: "Blasphemy Choir Acolyte", quantity: 2, notes: "CR 22. Note: The Choir needs 3 members for their main ability, so they are accompanied by a third, non-combatant conductor who flees if attacked." },
        ],
        tactics: [
            "The Acolytes' first action is to begin their 'Blasphemy Choir', targeting any good-aligned party members. This will be their primary action each round.",
            "The Dreadnought will ignore the party at first, its objective being the landmark. It will only attack players who directly impede it or deal significant damage.",
            "The Acolytes will use their swift actions to cast quickened spells, using 'Shield of Faith' on the Dreadnought and 'Bestow Curse' on any player who saves against their Blasphemy.",
            "The Dreadnought's 'Aura of Despair' and the Choir's song create a potent debuffing field. The primary threat is the Dreadnought's 'Soul Trap' ability, which can instantly kill a character and make the construct stronger."
        ],
        scaling: {
            increase: "Add a third combat-ready Blasphemy Choir Acolyte (EL 27). The Dreadnought has already trapped several souls and starts the fight with Fast Healing 15.",
            decrease: "There is only one Acolyte, preventing the use of the Blasphemy Choir ability (EL 25).",
        },
        treasure: [
            "The Dreadnought's chassis contains several trapped souls of powerful angels, which can be released if the construct is destroyed.",
            "The Acolytes' spellbooks and divine items.",
            "A large cache of Stygian Iron worth a considerable sum."
        ],
    },
    {
        name: "The Dragon's Chains",
        el: 23,
        description: "The Empæryen is laying siege to a fortified city. Their ultimate weapon, a Panzerdrake, is being unleashed. The party must find a way to break the dragon's chains and either defeat it or turn it against its masters before it reduces the city to rubble.",
        setup: [
            "The encounter takes place on a battlefield outside a city wall. The area is filled with trenches and siege equipment.",
            "The Panzerdrake (CR 22) is chained to massive iron pylons, goaded by several handlers.",
            "Four Glaubenskrieger (CR 14) act as the handlers, using their divine magic to enrage and direct the beast."
        ],
        monsters: [
            { name: "Panzerdrake", quantity: 1, notes: "CR 22. Initially chained and focused on attacking the city wall." },
            { name: "Glaubenskrieger", quantity: 4, notes: "CR 14. Handlers who will defend the pylons and buff the drake." },
        ],
        tactics: [
            "The Panzerdrake will use its Hellfire Cannon breath weapon on the city wall every round until it is breached.",
            "The Glaubenskrieger will form a defensive perimeter around the pylons, using spells like 'Blade Barrier' to protect them. They will cast 'Bull's Strength' and 'Righteous Might' on the Panzerdrake.",
            "If the party attacks the drake, it will use its tail and bite attacks to defend itself. If the party breaks its chains, it will go berserk, attacking everything in sight, including the Glaubenskrieger.",
            "The party's goal is not necessarily to kill the drake, but to free it, turning a siege encounter into a chaotic free-for-all."
        ],
        scaling: {
            increase: "The Panzerdrake is an adult and has more hit points and a more powerful breath weapon (EL 24). An Anathema Knight (CR 18) is overseeing the siege.",
            decrease: "There are only two Glaubenskrieger (EL 22). The chains are weaker and can be broken more easily.",
        },
        treasure: [
            "Standard treasure for an EL 23 encounter.",
            "The Panzerdrake's adamantine plating can be salvaged for an immense sum.",
            "The divine items of the Glaubenskrieger."
        ],
    },
];
