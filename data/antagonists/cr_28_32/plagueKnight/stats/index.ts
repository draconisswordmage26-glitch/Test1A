// data/antagonists/cr_28_32/plagueKnight/stats/index.ts
import { Monster } from '../../../../types';

export const plagueKnightStats: Monster = {
    name: "Plague-Knight of the Iron Lung",
    description: "The Plague-Knights are the Empæryen's ultimate terror weapon, deployed to break the morale of worlds that will not yield. Each knight is a 'volunteer' who has been alchemically bloated and surgically fused into a suit of baroque, steam-powered armor. This 'Iron Lung' armor constantly pumps their bodies with a cocktail of stimulants and necrotizing agents, turning them into walking incubators for the most virulent plagues imaginable. They are living chemical weapons, whose only purpose is to spread a slow, agonizing, and utterly terrifying death.",
    roleplayGuide: [],
    builds: [
        {
            level: 45, // ECL
            title: "Harbinger of Pestilence",
            class: "Human Fighter 20 / Blackguard 10 / War Hulk 10 / Epic Fighter 5",
            hitDice: "45d12+810 (Max HD) + 60 (Epic Toughness) = 1410 hp",
            challengeRating: 30,
            armorClass: {
                total: 55,
                breakdown: "(-1 size, +1 Dex, +20 armor, +15 natural, +10 deflection)",
            },
            initiative: {
                bonus: 5,
                breakdown: "(+1 Dex, +4 feat)",
            },
            buildNotes: [
                "A CR 30 area-denial brute and debuffer.",
                "Its strength comes from its massive physical stats (enhanced by War Hulk) and its plague-based special abilities.",
                "It is designed to be a terrifying anchor for a battle line, slowly advancing while its auras and weapons cripple the enemy."
            ],
            sheet: {
                baseAtk: 40,
                grapple: 65,
                fullAttack: [
                    { name: "+5 Unholy Plague-Spreader Greatclub", bonus: "+65/+60/+55/+50", damage: "2d8+25 plus disease", crit: "19-20/x2", type: "Melee" },
                ],
                attackRoutine: [
                    "<b>Full Attack:</b> 4 greatclub swings (+65/+60/+55/+50, avg. 34 dmg + Disease).",
                    "<b>Power Attack:</b> Can take up to -40 penalty for +40 damage on each hit.",
                    "<b>Typical Round DPR:</b> ~136 damage.",
                    "<b>Primary Tactic:</b> Uses 'Blight Grenade' (30ft cloud, DC 40 Fort, 2d6 Con dmg) to control areas. Its 'Aura of Sickness' debuffs all nearby enemies. In melee, every hit forces a DC 40 Fort save to avoid a supernatural disease (1d6 Con/Cha drain).",
                ],
                spaceReach: "10 ft.",
                specialAttacks: [
                    { name: "Aura of Sickness", type: "Su", description: "All creatures within 30 feet are sickened (no save)." },
                    { name: "Plague-Spreader", type: "Ex", description: "Any creature struck by the Knight's greatclub must make a DC 40 Fortitude save or contract a supernaturally virulent disease (1d6 Con and 1d6 Cha damage per day, cannot be magically cured below CL 30)." },
                    { name: "Blight Grenades", type: "Ex", description: "3/day, can throw a grenade that creates a 30-ft cloud of poison gas that lasts for 1 minute (Fort DC 40, 2d6 Con damage/round)." },
                    { name: "Smite Good", type: "Su", description: "4/day, +10 to attack, +45 to damage."}
                ],
                specialQualities: [
                    { name: "Damage Reduction", type: "Su", description: "25/epic and good" },
                    { name: "Spell Resistance", type: "Ex", description: "38" },
                    { name: "Iron Lung", type: "Ex", description: "Immune to all poison, diseases, inhaled effects, stunning, and critical hits." },
                    { name: "Immunities", type: "Ex", description: "Immune to acid and ability drain." },
                ],
                saves: {
                    fort: { bonus: 42, breakdown: "+24 class, +16 Con, +2 feat" },
                    ref: { bonus: 21, breakdown: "+11 class, +1 Dex, +9 item" },
                    will: { bonus: 25, breakdown: "+17 class, +8 Wis" },
                },
                abilities: { str: 50, dex: 12, con: 42, int: 8, wis: 26, cha: 30 },
                skills: [
                    { name: "Intimidate", bonus: 58, breakdown: "48 ranks + 10 Cha" },
                    { name: "Jump", bonus: 64, breakdown: "44 ranks + 20 Str" },
                ],
                feats: [
                    { name: "Power Attack", description: "Trade attack for damage." },
                    { name: "Cleave", description: "Extra attack on felling a foe." },
                    { name: "Great Cleave", description: "More Cleave attacks." },
                    { name: "Improved Sunder", description: "+4 to sunder, no AoO." },
                    { name: "Improved Initiative", description: "+4 to initiative." },
                    { name: "Weapon Focus (Greatclub)", description: "+1 to attack." },
                    { name: "Greater Weapon Focus (Greatclub)", description: "+1 to attack." },
                    { name: "Epic Weapon Focus (Greatclub)", description: "+2 to attack." },
                    { name: "Epic Prowess", description: "+1 to all attacks." },
                    { name: "Epic Toughness", description: "+30 HP (x2)." },
                    { name: "Armor Skin", description: "+1 to natural armor." },
                    { name: "Great Strength", description: "+1 to Strength (x5)." },
                    { name: "Great Constitution", description: "+1 to Constitution (x5)." },
                    { name: "Epic Fortitude", description: "+4 to Fortitude saves." },
                    { name: "Ability Focus (Plague-Spreader)", description: "+2 to save DC." },
                ],
                flaws: [],
                environment: "Any",
                organization: "Solitary or Plague-Quartet (4)",
                alignment: "Lawful Evil",
                advancement: "-",
                levelAdjustment: "-",
                equipment: {
                    totalValue: "1,200,000 gp",
                    items: [
                        { name: "+5 Unholy Greatclub", cost: "98,300 gp", description: "" },
                        { name: "+8 Full Plate of Heavy Fortification", cost: "89,650 gp", description: "" },
                        { name: "Belt of Magnificence +8", cost: "324,000 gp", description: "" },
                        { name: "Tome of Strength +5", cost: "137,500 gp", description: "" },
                        { name: "Tome of Constitution +5", cost: "137,500 gp", description: "" },
                    ]
                }
            }
        },
    ]
};