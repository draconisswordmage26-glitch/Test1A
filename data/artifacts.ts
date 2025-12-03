// data/artifacts.ts
import { Artifact } from '../types';

export const artifacts: Artifact[] = [
    {
        name: "+10 Full Plate of Celestial Command",
        user: "Avatar of a God (Planetar)",
        description: "Armor forged in the heart of Mount Celestia, tempered in the light of a thousand suns. It is less a suit of armor and more a mobile seat of divine authority.",
        powers: [
            "Functions as +10 Full Plate Armor.",
            "Grants DR 25/epic and evil.",
            "The wearer is immune to death effects, ability drain, and negative energy.",
            "The wearer can issue a Greater Command (DC 30) at will.",
            "Allies within 120 feet gain a +5 morale bonus to saves against fear and compulsion.",
        ],
    },
    {
        name: "Amulet of the Abyssal Storm",
        user: "Embodiment of the Blade (Marilith)",
        description: "This amulet contains the heart of a maelstrom from the Abyss. It swirls with chaotic energy, empowering the wearer's attacks with the fury of the storm.",
        powers: [
            "Grants a +10 deflection bonus to AC.",
            "The wearer is immune to electricity and is under a constant 'Freedom of Movement' effect.",
            "All of the wearer's melee attacks deal an additional 2d6 points of electricity damage.",
            "Once per day, the wearer can cast 'Storm of Vengeance' as a spell-like ability.",
        ],
    },
    {
        name: "Armor of the Einherjar",
        user: "Goddess of the Final Charge (Valkyrie)",
        description: "Gleaming plate armor that is not worn, but 'remembered' into existence by the souls of fallen heroes. It is the collective valor of the slain, given form.",
        powers: [
            "Functions as +9 Full Plate armor.",
            "The wearer and their mount can become ethereal at will.",
            "The armor grants DR 20/epic and evil.",
            "While at -10 or more hit points, the wearer cannot be killed by any non-deific source of damage.",
        ],
    },
    {
        name: "Atropos, the Final Cut",
        user: "The Final Moment (Norn)",
        description: "A simple, unadorned dagger that seems to absorb all light. It is not made to cut flesh, but to sever the threads of destiny that bind a creature to existence.",
        powers: [
            "Functions as a +10 Dagger.",
            "This weapon bypasses all damage reduction, hardness, and regeneration.",
            "This weapon can harm any creature, regardless of immunities or defenses.",
            "On a successful hit, the wielder can choose to activate the 'Cut the Thread' epic prestige class ability without expending a daily use. It can be used to sunder other artifacts.",
        ],
    },
    {
        name: "Bracers of the Cosmic Wheel",
        user: "Nexus of Dead Gods (Upasunda Asura)",
        description: "These bracers are forged from the remnants of a dead universe's axle. They hum with the power of cosmic cycles, allowing the wearer to manipulate the laws of motion and entropy.",
        powers: [
            "Grants a +12 insight bonus to AC and on all saving throws.",
            "The wearer is under a constant 'Freedom of Movement' effect.",
            "The wearer is immune to all time-altering effects and temporal paradoxes.",
            "Once per day, the wearer can cast 'Time Stop' as a spell-like ability.",
        ]
    },
    {
        name: "Chassis of the Unstoppable Force",
        user: "Worldbreaker (Adamantine Golem)",
        description: "The golem's very frame has been imbued with the concept of 'unstoppable'. It is not just a machine; it is a law of physics given form.",
        powers: [
            "Grants the golem a +15 enhancement bonus to its natural armor and Hardness 50.",
            "The golem is immune to any effect that would stop its movement, including 'Imprisonment', 'Temporal Stasis', and solid walls.",
            "The golem gains regeneration 20 (bypassed by epic chaotic weapons).",
        ],
    },
    {
        name: "Chrysalis of the First Dream",
        user: "God of Dreams (Dream Larva)",
        description: "The larval god's original chrysalis, now hardened into a psychic resonator. It is the source of its power to shape the dreams of others into reality.",
        powers: [
            "Grants a +12 inherent bonus to Constitution and Charisma.",
            "The wielder is immune to all mind-affecting effects and divinations.",
            "The wielder's psionic powers that create illusions or phantasms are treated as real.",
            "The wielder can create a permanent 'Genesis' demiplane once per year.",
        ],
    },
    {
        name: "Core of Scintillating Logic",
        user: "The Unmoving Watcher (Starstone Golem)",
        description: "The golem's power source, a constantly shifting crystal that processes information at the speed of light. It grants the mindless golem a semblance of tactical genius.",
        powers: [
            "Grants a +15 insight bonus to AC.",
            "The golem gains the benefit of the Combat Expertise feat and can use its Intelligence modifier for attack rolls.",
            "The golem is immune to all mind-affecting effects and divinations.",
            "The core has Hardness 40 and cannot be removed or stolen without destroying the golem.",
        ],
    },
    {
        name: "Crown of the Fallen Star",
        user: "The Unmaker (Balor)",
        description: "A crown forged from a star that fell from the Upper Planes, now corrupted by the Abyss. It burns with a cold, black fire, a symbol of divine power inverted.",
        powers: [
            "Grants a +12 inherent bonus to Strength and Charisma.",
            "The wearer is immune to fire and cold.",
            "The wearer can cast 'Implosion' as a spell-like ability three times per day.",
        ],
    },
    {
        name: "Crown of the Over-King",
        user: "Avatar of a God (Planetar)",
        description: "A simple, elegant crown of gold and silver that seems to shine with an inner light. It is a symbol of absolute, benevolent authority, granting the wearer the wisdom and presence of a truly great king.",
        powers: [
            "Grants a +12 inherent bonus to Wisdom and Charisma.",
            "The wearer is immune to all mind-affecting effects.",
            "Once per day, the wearer can cast a Mass Dominate Monster spell (DC 45).",
        ],
    },
     {
        name: "Crown of the Sun",
        user: "Emperor of the Sun (Sun Giant)",
        description: "A crown forged from the heart of a sun, radiating a light that inspires unwavering loyalty and reveals all truths.",
        powers: [
            "Grants a +12 inherent bonus to Wisdom and Charisma.",
            "The wearer is under a constant 'True Seeing' effect.",
            "The wearer's leadership auras are twice as effective and have a range of 10 miles.",
            "The wearer is immune to blindness and gaze attacks."
        ],
    },
    {
        name: "Crown of the Verdant King",
        user: "The Verdant King (Verdant Prince)",
        description: "A crown of woven, petrified wood that sprouts with living flowers. It is a symbol of dominion over the natural world, granting the wearer the allegiance of all things that grow.",
        powers: [
            "Grants a +12 inherent bonus to Wisdom and Charisma.",
            "The wielder can communicate with all plants and animals.",
            "The wielder can animate any tree or plant to serve them, as per the 'Animate Plants' spell, at will.",
            "The wearer is immune to poison and disease."
        ],
    },
    {
        name: "Crown of Thunder",
        user: "God of the Sky (Am-mut)",
        description: "A crown of solidified lightning that crackles with the fury of the storm. It grants the wearer mastery over the sky and its wrath.",
        powers: [
            "Grants a +12 inherent bonus to all mental stats.",
            "The wearer can call down a bolt of lightning as a standard action that deals 20d6 electricity damage.",
            "The wearer can summon an epic storm at will, as per the 'Control Weather' spell."
        ],
    },
    {
        name: "Fists of the Worldbreaker",
        user: "Worldbreaker (Adamantine Golem)",
        description: "The integrated fists of the golem have been magically hardened beyond the properties of mere adamantine. They strike with the force of tectonic plates.",
        powers: [
            "Function as +10 Adamantine Gauntlets.",
            "The golem's slam attacks bypass all hardness and damage reduction.",
            "On a successful critical hit, the target must make a Fortitude save (DC 40) or be stunned for 1d6 rounds.",
            "Grants the golem the Awesome Blow feat."
        ],
    },
    {
        name: "Gauntlets of Utter Annihilation",
        user: "The Last Constant (Nightwalker)",
        description: "Gauntlets made of solidified negative energy. They do not protect the hands, but rather project an aura of unmaking that can erase matter from existence.",
        powers: [
            "Function as +8 Gauntlets of Strength.",
            "The wearer's slam attacks deal an additional 4d6 points of negative energy damage and bestow one negative level.",
            "On a successful critical hit, the target is affected by a 'Disintegrate' spell (DC 35).",
        ],
    },
    {
        name: "God-Hand, the +10 Holy Axiomatic Greatsword of God-Slaying",
        user: "Avatar of a God (Planetar)",
        description: "A colossal greatsword forged from a fallen star, humming with the pure, orderly power of the celestial planes. Its edge is sharp enough to sever the threads of fate, and its light is anathema to all who stand against the divine.",
        powers: [
            "Functions as a +10 Holy Axiomatic Greatsword.",
            "God-Slaying: Deals an extra 10d6 points of divine damage to gods, demigods, and their direct servants.",
            "This weapon bypasses all damage reduction.",
            "On a confirmed critical hit, the target must make a Will save (DC 40) or be affected by a Banishment spell.",
            "Can cast Holy Word at will as a free action.",
        ],
    },
    {
        name: "Greaves of the Meteor",
        user: "The Unstoppable Force (Pyroclastic Dragon)",
        description: "A pair of massive greaves forged from a fallen meteor. They allow the wearer to charge with the irresistible force of a celestial body.",
        powers: [
            "The wielder's charge attacks cannot be intercepted or stopped by any means, even magical walls.",
            "The wielder deals an additional 15d6 points of fire and 15d6 points of force damage on a charge.",
            "The wielder is immune to fire and force effects.",
        ],
    },
    {
        name: "Greaves of the Solar Charge",
        user: "God-King of Nirvana (Adityan Agathion)",
        description: "Golden greaves that burn with the light of a righteous sun. They allow the wearer to charge with the speed and force of a comet.",
        powers: [
            "The wearer's base speed is tripled.",
            "The wearer can charge over any terrain, including water and air, and does not provoke attacks of opportunity while charging.",
            "Any charge attack made by the wearer deals an additional 10d6 points of holy damage and forces the target to make a Fortitude save (DC 40) or be blinded permanently.",
        ],
    },
    {
        name: "Gungnir",
        user: "Goddess of the Final Charge (Valkyrie)",
        description: "The legendary spear that never misses its mark. It is a symbol of divine authority and martial perfection, a streak of lightning in the hands of a goddess.",
        powers: [
            "Functions as a +9 Holy Axiomatic Spear.",
            "The spear never misses. All attack rolls made with it are automatically treated as a natural 20.",
            "It bypasses all damage reduction and regeneration.",
            "Can be thrown with a range of 1000 feet, and it returns to the wielder's hand immediately.",
        ],
    },
    {
        name: "Heart of the Grave",
        user: "God of the Final Rest (Atropal)",
        description: "The Atropal's phylactery, a black, withered heart that beats with the pulse of negative energy. As long as it exists, the concept of undeath can never be truly destroyed.",
        powers: [
            "Functions as a phylactery, allowing the Atropal to reform in 1d10 days.",
            "Grants a +12 inherent bonus to all mental stats.",
            "The wielder can cast 'Create Undead' at will, creating any kind of undead up to CR 25.",
        ],
    },
    {
        name: "Heart of the Maelstrom",
        user: "God of the Sky (Am-mut)",
        description: "The creature's original mortal heart, now encased in a sphere of crackling lightning. It is the calm center of the storm, the anchor of its consciousness.",
        powers: [
            "Grants a +12 inherent bonus to Constitution and Wisdom.",
            "The wielder is immune to all mind-affecting effects and electricity.",
            "The wielder's electrical attacks deal an additional 10d6 damage.",
        ]
    },
    {
        name: "Heart of the Mithral Mountain",
        user: "Nexus of Infinity (Mithral Dragon)",
        description: "The solidified, psionically-charged heart of a mountain that existed on a plane of pure thought. It is a nexus of psionic power and physical endurance.",
        powers: [
            "Grants a +12 inherent bonus to Strength, Constitution, and Intelligence.",
            "The wielder gains Regeneration 20 (bypassed by chaotic attacks).",
            "The wielder's Power Point reserve is doubled.",
        ],
    },
    {
        name: "Heart of the Ocean",
        user: "The First River (Kami)",
        description: "A flawless, ever-shifting sphere of water that contains the essence of all the world's oceans. It is the source of all tides, the wellspring of all life that began in the sea.",
        powers: [
            "Grants a +12 inherent bonus to all ability scores.",
            "The wielder gains absolute control over all bodies of water on their current plane.",
            "The wielder can summon a Kraken (as the spell) once per day.",
        ],
    },
    {
        name: "Heart of the Rage",
        user: "The Unmaker (Balor)",
        description: "The still-beating heart of a slain god of war, now a source of unending, apocalyptic fury for the Balor. It is a font of pure, chaotic power.",
        powers: [
            "Grants a +12 inherent bonus to Constitution and Strength.",
            "The wearer's Rage/Frenzy ability provides double its normal bonuses.",
            "The wearer is immune to fatigue and exhaustion.",
        ],
    },
    {
        name: "Heart of the Void",
        user: "The Last Constant (Nightwalker)",
        description: "Not a physical object, but a point of absolute nothingness that has been given form. It is a sphere of perfect blackness that absorbs all light and heat, the ultimate expression of entropy.",
        powers: [
            "Grants a +12 inherent bonus to all ability scores.",
            "The wielder is immune to ability drain and negative levels.",
            "Once per day, can create a Sphere of Annihilation that the wielder can control mentally.",
        ],
    },
    {
        name: "Helm of the Iron Phalanx",
        user: "The Unbreakable Law (Cornugon)",
        description: "A fearsome helm forged in the fires of Avernus, granting its wearer unparalleled tactical genius and the unwavering discipline of the legions of Hell.",
        powers: [
            "Grants a +12 inherent bonus to Intelligence and Wisdom.",
            "The wearer can use 'White Raven Tactics' as a swift action at will.",
            "The wearer is immune to fear and compulsion effects.",
        ],
    },
    {
        name: "Hide of the Comet",
        user: "The Unstoppable Force (Pyroclastic Dragon)",
        description: "The hardened, meteoric hide of a creature that once swam through the void between stars. It is impossibly dense and radiates a faint, cosmic heat.",
        powers: [
            "Grants a +15 sacred bonus to AC and saves.",
            "The wielder is immune to force effects and gains DR 20/-.",
            "The wielder can fly through space and does not need to breathe.",
        ],
    },
    {
        name: "Horn of the Apocalypse",
        user: "King of the Forgotten Wilds (Behemoth)",
        description: "One of the Behemoth's own horns, broken in its final battle and now carried as a weapon. It can shatter the earth and sunder the heavens.",
        powers: [
            "Functions as a +10 Adamantine Greatclub.",
            "On a successful critical hit, the horn casts a maximized 'Meteor Swarm' centered on the target.",
            "The wielder can sound the horn once per day to create an 'Earthquake' effect and demoralize all enemies within 1 mile.",
        ],
    },
     {
        name: "Jewel of the World-Coil",
        user: "The First River (Kami)",
        description: "A great, serpentine pearl that rests on the Kami's brow. It contains the river's memory, the knowledge of all things that have lived and died in its waters since the dawn of time.",
        powers: [
            "Grants a +12 inherent bonus to Wisdom and Intelligence.",
            "The wielder has access to all knowledge as if they had 100 ranks in every Knowledge skill.",
            "The wielder can speak with all living creatures and is immune to all language-dependent effects."
        ],
    },
    {
        name: "Mantle of Living Seasons",
        user: "The Verdant King (Verdant Prince)",
        description: "A cloak of living leaves that constantly changes with the seasons, from the fresh green of spring to the fiery red of autumn. It grants the wearer mastery over the cycle of nature.",
        powers: [
            "Grants a +15 sacred bonus to AC and saves.",
            "The wielder is immune to all weather effects and can cast 'Control Weather' at will.",
            "The wielder can, as a full-round action, shift the season in a 1-mile radius, with all the associated effects.",
        ],
    },
    {
        name: "Mantle of the Lost World",
        user: "King of the Forgotten Wilds (Behemoth)",
        description: "The hide of the Behemoth's mate, preserved by its sorrow. It is a cloak of impossible toughness that carries the memory of a world that no longer exists.",
        powers: [
            "Grants a +15 sacred bonus to AC and saves.",
            "Creates an aura of profound silence in a 120-foot radius.",
            "Grants the wielder DR 25/epic.",
            "Grants immunity to all sonic and language-dependent effects."
        ],
    },
    {
        name: "Mantle of the Spirit Lord",
        user: "King of a Thousand Souls (Oni Mage)",
        description: "A cloak woven from the ectoplasmic residue of a thousand powerful spirits. It allows the wearer to command the spirits of the dead and walk among them as a king.",
        powers: [
            "Grants a +12 inherent bonus to all mental ability scores (Int, Wis, Cha).",
            "The wearer can see and speak with incorporeal undead as if they were solid, and their attacks deal full damage to them.",
            "The wearer can cast 'Command Undead' at will.",
        ],
    },
    {
        name: "Mask of a Thousand Faces",
        user: "The Final Form (Rakshasa Maharaja)",
        description: "A simple, porcelain mask that is blank until worn. It then becomes the face of whoever the wearer wishes to be, a perfect, undetectable disguise.",
        powers: [
            "Grants a +12 inherent bonus to all mental stats.",
            "The wearer is under a constant Mind Blank effect.",
            "The wearer's disguises cannot be penetrated by any means short of deific intervention.",
        ],
    },
    {
        name: "Mask of the Oni Emperor",
        user: "King of a Thousand Souls (Oni Mage)",
        description: "A fearsome, demonic mask that allows the wearer to assume any face or form. It is the ultimate tool of deception and illusion.",
        powers: [
            "The wearer can use 'Change Shape' at will to assume the form of any creature, as the Shapechange spell.",
            "The wearer gains a +20 bonus on Bluff and Disguise checks.",
            "The wearer is under a constant 'Nondetection' effect (CL 50).",
        ],
    },
    {
        name: "Orb of Absolute Zero",
        user: "Heart of Absolute Zero (Minor Xixecal)",
        description: "A sphere of perfectly smooth, black ice that does not melt. It is not cold, but rather the absence of all heat, a physical representation of the universe's final temperature.",
        powers: [
            "The wielder's cold-based spells and abilities bypass all resistance and immunity.",
            "The wielder can cast 'Control Weather' at will to create unnatural cold.",
            "Once per day, can create a 1-mile radius area where the temperature drops to absolute zero for one minute, dealing 20d6 cold damage per round to all creatures within.",
        ],
    },
    {
        name: "Robe of a Thousand Stories",
        user: "Empress of Fleeting Dreams (Kitsune)",
        description: "A silken robe embroidered with constantly shifting patterns that tell every story ever dreamed. To wear it is to be cloaked in the power of narrative itself.",
        powers: [
            "Grants a +12 inherent bonus to Intelligence and Charisma.",
            "The wearer can cast 'Programmed Image' at will.",
            "Once per day, the wearer can bring an illusion to life, making it permanently real, as if by a 'Wish' spell.",
            "Grants immunity to all language-dependent and pattern effects."
        ],
    },
    {
        name: "Robes of the Perfected Self",
        user: "The Final Form (Rakshasa Maharaja)",
        description: "Robes that shift in color and fabric, always becoming the perfect attire for the form the wearer has assumed. They are the ultimate expression of adaptable perfection.",
        powers: [
            "Grants a +15 sacred bonus to AC and saves.",
            "The robes magically adapt to any form, granting the wearer all the natural abilities of that form's skin (e.g., a dragon's scales, a troll's regeneration).",
            "The wearer gains a +10 bonus on all skill checks and is immune to critical hits.",
        ],
    },
     {
        name: "Scepter of Command",
        user: "Emperor of the Sun (Sun Giant)",
        description: "A rod of sun-gold that functions as a badge of office and a devastating weapon. It can unleash the sun's fury or issue commands that cannot be disobeyed.",
        powers: [
            "Functions as a +10 Holy Greatsword.",
            "The wielder can cast 'Sunburst' at will.",
            "The wielder can issue a 'Mass Hold Monster' command once per day (DC 50).",
        ],
    },
    {
        name: "Scythe of the Unborn",
        user: "God of the Final Rest (Atropal)",
        description: "A scythe made of solidified despair. It does not harvest the living, but rather harvests the potential for life, ensuring that what it reaps can never be born.",
        powers: [
            "Functions as a +10 Unholy Scythe that bypasses all DR and regeneration.",
            "Any living creature struck by the scythe is treated as if it were undead for the purposes of positive and negative energy effects for 24 hours.",
            "On a critical hit, the target is rendered permanently sterile and cannot produce offspring.",
        ],
    },
     {
        name: "Shield of the Dawnflower",
        user: "God-King of Nirvana (Adityan Agathion)",
        description: "A golden shield that captures the first light of dawn. It is a symbol of hope and renewal, capable of turning back the deepest darkness.",
        powers: [
            "Functions as a +10 Heavy Steel Shield.",
            "Once per round, as an immediate action, it can reflect a single spell targeting the wielder back at its source.",
            "The wielder can cast 'Mass Heal' three times per day.",
            "The shield emits a constant 'Daylight' effect that dispels all magical darkness."
        ],
    },
    {
        name: "Shroud of the Stillborn",
        user: "God of the Final Rest (Atropal)",
        description: "The burial shroud intended for the Atropal's divine birth, now a relic of profound sorrow and negative energy. It drains the life and warmth from all around it.",
        powers: [
            "Grants a +15 insight bonus to AC and saves.",
            "The wielder is immune to positive energy effects and ability drain.",
            "The wielder has a constant 'Aura of Death' that bestows 5 negative levels on all living creatures within 100 feet (Fortitude DC 50 negates).",
        ],
    },
    {
        name: "Staff of the Thousand-Fold Thought",
        user: "The Final Syllable (Worm that Walks)",
        description: "A staff made from the fused spines of a thousand liches. It is not a single mind, but a chorus of intellects, allowing the wielder to process magical information at an impossible rate.",
        powers: [
            "Functions as a +10 Staff of Power.",
            "The wielder can apply any two metamagic feats they know to any spell they cast, without increasing the spell level or casting time.",
            "The wielder can maintain concentration on up to ten spells at once.",
            "Grants a +10 insight bonus to all Knowledge and Spellcraft checks."
        ],
    },
    {
        name: "Svalinn, the Sun-Shield",
        user: "Goddess of the Final Charge (Valkyrie)",
        description: "A shield said to be forged from a piece of the sun, protecting the wearer from all harm. Its polished surface reflects not light, but the courage of the wielder's soul.",
        powers: [
            "Functions as a +9 Living Steel Heavy Shield.",
            "Once per round, as an immediate action, it can completely absorb the damage and effects of a single attack or spell.",
            "It grants the wielder and all allies within 60 feet immunity to fire.",
        ],
    },
    {
        name: "The Asuran Crown",
        user: "Nexus of Dead Gods (Upasunda Asura)",
        description: "A crown woven from the solidified last breaths of forgotten gods. It grants the wearer the authority to speak with the voices of the dead and command the echoes of their power.",
        powers: [
            "Grants a +12 inherent bonus to Charisma and Wisdom.",
            "The wearer can communicate with any dead creature as if via a 'Speak with Dead' spell.",
            "Once per day, the wearer can channel a dead god, gaining one of its domain powers for 10 minutes.",
            "The wearer is protected by a constant 'Death Ward' effect."
        ]
    },
    {
        name: "The Armor of Final Judgment",
        user: "The Unbreakable Law (Cornugon)",
        description: "A suit of jet-black plate armor inscribed with every law ever broken. It is a prison for the wearer's foes, a physical manifestation of absolute, inescapable judgment.",
        powers: [
            "Functions as +10 Full Plate.",
            "Any creature that strikes the wearer in melee must make a Will save (DC 45) or be affected by a 'Hold Monster' spell.",
            "Grants DR 20/epic and chaotic.",
        ],
    },
    {
        name: "The Chain of Inevitability",
        user: "The Unbreakable Law (Cornugon)",
        description: "A spiked chain forged from the first law of the multiverse. Each link represents an unbreakable rule, and its touch can bind a creature to the absolute letter of the law.",
        powers: [
            "Functions as a +9 Lawful Spiked Chain.",
            "Bypasses all damage reduction.",
            "A creature struck by the chain is subject to a 'Dimensional Anchor' effect for 24 hours.",
        ],
    },
    {
        name: "The Chains of Asmodeus",
        user: "The Final Contract (Pit Fiend)",
        description: "The original chains that bind the lord of the Nine Hells, a physical representation of the first contract. They can bind any being, mortal or god, to the letter of the law.",
        powers: [
            "Grants a +20 profane bonus to AC and saves.",
            "The wielder can, as a standard action, force any creature to make a Will save (DC 55) or be bound by the chains, unable to take any action that violates a command given by the wielder.",
            "The chains can function as a reach weapon that deals 5d6 lawful damage and automatically grapples and constricts.",
        ],
    },
    {
        name: "The Chains That Were",
        user: "The Last Titan (Titan)",
        description: "The shattered remnants of the chains used by the gods to imprison the titan. Now worn as a symbol of defiance, they grant the wearer absolute freedom.",
        powers: [
            "Grants a +15 sacred bonus to AC and saves.",
            "The wearer is under a constant 'Freedom of Movement' effect.",
            "The wearer is immune to all forms of magical imprisonment and cannot be grappled against their will.",
        ],
    },
    {
        name: "The Chorus of a Thousand Souls",
        user: "King of a Thousand Souls (Oni Mage)",
        description: "An amulet that is a vortex of screaming, captured souls. It is not just a tool, but a prison and a choir, its power drawn from the wails of the damned.",
        powers: [
            "Grants the wearer the Soul Eater's 'Devour Soul' ability.",
            "The wearer can consume a trapped soul as a standard action to replicate any spell or power known by the creature in life.",
            "For each soul trapped (max 100), the wearer gains +10 temporary hit points.",
        ],
    },
    {
        name: "The Crystalline Mind",
        user: "The Constant (Force Dragon)",
        description: "A flawless, multifaceted gem that floats before the dragon's brow. It is a psionic amplifier of immense power, focusing the dragon's thoughts into reality-shaping force.",
        powers: [
            "Grants a +12 inherent bonus to Intelligence and Wisdom.",
            "All of the wielder's power point costs are halved.",
            "The wielder's force-based powers and attacks bypass all hardness, damage reduction, and miss chances.",
        ],
    },
    {
        name: "The Dreamer's Eye",
        user: "God of Dreams (Dream Larva)",
        description: "A flawless, fist-sized pearl that is not a pearl at all, but a solidified dream. Looking into it reveals the dreams of all sentient creatures, a swirling cosmos of thought and desire.",
        powers: [
            "Grants a +12 inherent bonus to all mental stats.",
            "Allows the user to see into the dreams of any creature in the multiverse.",
            "Functions as a Crystal Ball of True Seeing and grants a constant 'Mind Blank' effect.",
        ],
    },
    {
        name: "The Emperor's Regalia",
        user: "Emperor of the Sun (Sun Giant)",
        description: "A suit of golden full plate armor that shines with the light of the sun. It is a symbol of absolute, divinely-appointed authority, inspiring awe and loyalty in all who behold it.",
        powers: [
            "Functions as +10 Full Plate Armor.",
            "Grants a +15 sacred bonus to AC and saves.",
            "The wearer's voice can be heard clearly by all allies within 10 miles, and their commands are treated as 'Suggestion' spells.",
        ],
    },
    {
        name: "The Final Contract",
        user: "The Final Contract (Pit Fiend)",
        description: "A scroll of flayed angel skin, inscribed with a single, perfect contract that binds reality itself. To wield it is to be the ultimate arbiter of cosmic law.",
        powers: [
            "Grants a +12 inherent bonus to all mental stats.",
            "The wielder can cast 'Wish' at will, but only to enforce the terms of a contract or punish those who break one.",
            "The wielder can produce a contract that is magically binding on any non-deity who signs it.",
        ],
    },
    {
        name: "The First Thought",
        user: "The Shaper of Ways (Aelder)",
        description: "A perfectly smooth, crystalline sphere that contains the first coherent thought ever conceived in the multiverse. It is the seed of all consciousness, the origin of logic and reason.",
        powers: [
            "Grants a +12 inherent bonus to all mental stats.",
            "The wielder can manifest any psionic power as a free action, with no power point cost, three times per day.",
            "The wielder is immune to all forms of psionic and magical detection.",
        ],
    },
    {
        name: "The Fox-Fire Jewel",
        user: "Empress of Fleeting Dreams (Kitsune)",
        description: "A warm, glowing gem that contains the Kitsune's life essence. It is a font of magical power, a source of light in the world of dreams.",
        powers: [
            "Grants a +15 sacred bonus to AC and saves.",
            "The wearer's spell save DCs are increased by 5.",
            "The wearer's caster level is treated as 10 levels higher for the purpose of dispelling and overcoming spell resistance.",
        ],
    },
    {
        name: "The Impossible Labyrinth",
        user: "The Shaper of Ways (Aelder)",
        description: "A Rubik's cube of impossible geometry that contains an infinite, ever-shifting labyrinth. To solve it is to understand the true nature of space.",
        powers: [
            "The wielder can cast 'Maze' at will.",
            "The wielder can create a personal demiplane as per the 'Genesis' spell once per day.",
            "The wielder can bend space, granting them a +20 insight bonus to AC and immunity to flanking.",
        ],
    },
    {
        name: "The Iron Crown of Hell",
        user: "The Final Contract (Pit Fiend)",
        description: "A simple, unadorned band of cold iron that is the ultimate symbol of diabolical authority. To wear it is to be the law of the Nine Hells.",
        powers: [
            "Grants a +12 inherent bonus to all mental stats.",
            "Grants 'True Sight' at will.",
            "The wearer can cast 'Dominate Monster' at will (DC 50).",
        ],
    },
    {
        name: "The Last Tear",
        user: "King of the Forgotten Wilds (Behemoth)",
        description: "A solidified tear shed by the Behemoth for its lost mate. It is a diamond of impossible size and hardness that radiates an aura of profound sorrow and immovable strength.",
        powers: [
            "Grants a +12 inherent bonus to all physical stats.",
            "The wielder cannot be killed by mortal means (non-epic, non-deific sources).",
            "Grants the wielder Hardness 20.",
            "Once per day, the wielder can unleash a 'Wave of Grief', forcing all creatures in a 1-mile radius to make a Will save (DC 50) or be overcome with sorrow, unable to take any action for 1d4 rounds.",
        ],
    },
    {
        name: "The Lexicon of Infinity",
        user: "The Final Syllable (Worm that Walks)",
        description: "A book whose pages are a swarm of microscopic worms, constantly rewriting themselves to contain every spell, formula, and piece of knowledge in the multiverse.",
        powers: [
            "Grants a +12 inherent bonus to all mental stats.",
            "The wielder is considered to have every spell in existence on their spell list and in their spellbook.",
            "The wielder can change their prepared spells at will as a free action.",
        ],
    },
    {
        name: "The Loom of Fate",
        user: "The Final Moment (Norn)",
        description: "Not a physical object, but a manifestation of the Norn's power over causality. It appears as a great loom whose threads are the lives of every creature in the multiverse.",
        powers: [
            "Grants a +12 inherent bonus to all mental stats.",
            "Grants a constant 'True Seeing' effect.",
            "Once per month, the Norn can re-weave a thread, allowing them to cast 'Rewrite History' with no XP or component cost.",
        ],
    },
    {
        name: "The Moment's Edge",
        user: "Paradox Incarnate (Phane)",
        description: "A pair of claws forged from crystallized time. They do not cut flesh, but sever the connection between the past and the present, causing cascading wounds across a creature's timeline.",
        powers: [
            "Function as a +10 Amulet of Mighty Fists.",
            "Grants a +12 inherent bonus to Dexterity and Constitution.",
            "A creature struck by the claws takes an additional 5d6 points of untyped damage at the start of its next turn as the wound 'catches up' to it.",
        ],
    },
    {
        name: "The Moon's Reflection",
        user: "Empress of Fleeting Dreams (Kitsune)",
        description: "A perfect sphere of polished silver that does not reflect what is, but what is dreamed. It is a gateway to the minds of all sleeping creatures and a wellspring of endless stories.",
        powers: [
            "Grants a +12 inherent bonus to all mental stats.",
            "Allows the user to enter any creature's dream anywhere in the multiverse.",
            "Functions as a Crystal Ball of True Seeing and grants immunity to divinations.",
        ],
    },
    {
        name: "The Mountain's Heart",
        user: "The Unstoppable Force (Pyroclastic Dragon)",
        description: "The still-beating heart of a mountain that was also a god of the earth. It is a source of unstoppable momentum and geological power.",
        powers: [
            "Grants a +12 inherent bonus to all physical stats.",
            "The wielder's charge attacks ignore all terrain and barriers, including walls of force.",
            "Any Power Attack made by the wielder deals double damage.",
            "Grants the wielder Hardness 30.",
        ],
    },
    {
        name: "The Paradox Engine",
        user: "Paradox Incarnate (Phane)",
        description: "A device of impossible, shifting geometry that seems to exist in multiple moments at once. It is the Phane's anchor to a single timeline, and the source of its power to manipulate it.",
        powers: [
            "Grants a +12 inherent bonus to Dexterity and Intelligence.",
            "The wielder can take an extra standard action each round.",
            "The wearer is immune to all time-altering effects.",
            "Once per day, can create a 'paradox field' in a 100-ft radius. All d20 rolls within the field are rolled three times, and the wielder chooses which result is used."
        ]
    },
    {
        name: "The Prime Axiom",
        user: "The Constant (Force Dragon)",
        description: "A sphere of perfect, unmoving force that contains the single, fundamental law of the multiverse from which all others are derived. To hold it is to hold the key to reality's operating system.",
        powers: [
            "Grants a +12 inherent bonus to all ability scores.",
            "The wielder is immune to all chaos-descriptor spells and effects.",
            "Once per day, the wielder can issue a 'Lawful Edict' that functions as the epic spell 'Axiomatic Edict' but affects all creatures on the plane.",
        ],
    },
    {
        name: "The Prime Clay",
        user: "The Final Form (Rakshasa Maharaja)",
        description: "A shapeless, silvery mass that is the primordial, unformed substance of creation. It is life's ultimate potential, and in the hands of a master shapeshifter, it can become anything.",
        powers: [
            "Grants a +12 inherent bonus to all physical stats.",
            "Allows the wearer to use their 'Wild Shape' or 'Change Shape' ability as a free action.",
            "The wearer can now assume the form of unique creatures, including demigods and archfiends, perfectly replicating their (Ex) and (Su) abilities.",
        ],
    },
    {
        name: "The Seed of the First Tree",
        user: "The Verdant King (Verdant Prince)",
        description: "A simple, unassuming acorn that contains the genetic memory of the first tree ever to grow. It is the alpha and omega of all plant life, a source of unimaginable natural power.",
        powers: [
            "Grants a +12 inherent bonus to all physical stats.",
            "The wielder can cast 'Control Plants' at will.",
            "Once per year, the wielder can plant the seed to create a new, continent-spanning forest in a barren land. The seed magically reappears in their possession.",
        ],
    },
    {
        name: "The Shaper's Heart",
        user: "The Shaper of Ways (Aelder)",
        description: "An object that is constantly changing form, from a beating heart to a complex geometric shape to a miniature galaxy. It is the essence of creation, the potential for all things to become other things.",
        powers: [
            "Grants a +15 sacred bonus to AC and saves.",
            "The wielder is immune to all anti-psionic effects and transmutation effects.",
            "The wielder's powers that create or shape matter have their duration made permanent.",
        ],
    },
    {
        name: "The Sunstone of Invictus",
        user: "God-King of Nirvana (Adityan Agathion)",
        description: "A gem that contains the light of a newborn sun. It radiates an aura of unbearable righteousness and burns evil with its very presence.",
        powers: [
            "Grants a +12 inherent bonus to Strength and Charisma.",
            "Functions as a Periapt of Wound Closure, healing 2 points of damage per round.",
            "Emits a constant 'Sunburst' effect in a 120-ft radius that only harms evil creatures.",
            "Grants immunity to death effects and negative energy.",
        ],
    },
    {
        name: "The Threads of What-Will-Be",
        user: "The Final Moment (Norn)",
        description: "A cloak that seems to be woven from pure potential, shimmering with all the colors that might exist. It allows the wearer to exist in multiple possibilities at once.",
        powers: [
            "Grants a +15 sacred bonus to AC and Saves.",
            "The wearer exists simultaneously in multiple places, granting the benefits of a constant 'Displacement' and 'Blink' effect.",
            "The wearer can be in up to three places at once on the same plane.",
        ],
    },
    {
        name: "The Unbreakable Core",
        user: "Worldbreaker (Adamantine Golem)",
        description: "A sphere of solidified magical force that serves as the golem's power source. It is the pinnacle of the arcane art of artifice, granting the construct a semblance of tactical cunning and immense physical power.",
        powers: [
            "Grants a +12 inherent bonus to Strength.",
            "Grants a +10 insight bonus to AC.",
            "The golem can use its martial maneuvers as if it were intelligent, and gains a +10 bonus to its Initiative.",
        ],
    },
    {
        name: "The Unmaker's Edge",
        user: "The Unmaker (Balor)",
        description: "A greatsword forged from the Balor's own despair, quenched in the fires of its fallen divinity. The blade does not cut, it unmakes, erasing existence with a touch of pure, sorrowful rage.",
        powers: [
            "Functions as a +9 Vorpal Anarchic Greatsword.",
            "Grants a +12 inherent bonus to Strength and Constitution.",
            "Bypasses all DR, hardness, and regeneration.",
            "On a successful critical hit, the sword can sunder artifacts or force a creature to make a Fortitude save (DC 50) or be erased from existence.",
        ],
    },
    {
        name: "The Warden's Cage",
        user: "The Constant (Force Dragon)",
        description: "A network of force-lines that orbit the dragon's body. It is not armor, but a cage for reality itself, reinforcing the laws of physics around the dragon.",
        powers: [
            "Grants a +15 insight bonus to AC and saves.",
            "The wielder can manifest 'Forcecage' at will as a psionic power.",
            "The wielder can create a 1-mile 'reality anchor' where no extra-planar travel is possible.",
        ],
    },
    {
        name: "The World-Hammer",
        user: "The Last Titan (Titan)",
        description: "A warhammer of such immense size and density that it seems to have its own gravity. It was used by the titans to forge the mountains in the dawn of time, and its blows can still reshape the world.",
        powers: [
            "Functions as a +9 Adamantine Warhammer.",
            "Grants a +12 inherent bonus to Strength and Constitution.",
            "On a successful hit, the wielder can choose to create an 'Earthquake' effect centered on the target.",
            "The wielder's Strength is treated as 10 points higher for the purpose of lifting, carrying, and sundering.",
        ],
    },
    {
        name: "The World-Heart Diamond",
        user: "Heart of Absolute Zero (Minor Xixecal)",
        description: "A flawless, house-sized diamond that contains the perfect, conceptual blueprint of a silent, crystalline world. It pulses with a cold, internal light, radiating an aura of absolute order.",
        powers: [
            "Grants a +12 inherent bonus to all ability scores.",
            "The wielder is under a constant True Seeing effect and is immune to chaos effects.",
            "Grants the ability to cast the epic spell 'World-Heart Forge' once per year with no XP cost.",
        ],
    },
    {
        name: "The Worm-Skin Robe",
        user: "The Final Syllable (Worm that Walks)",
        description: "Robes that appear to be made of silk, but are actually woven from the shed skins of the billions of worms that make up the wearer. The robes writhe with a life of their own, protecting their collective consciousness.",
        powers: [
            "Grants a +15 sacred bonus to AC and saves.",
            "Grants Regeneration 30 (bypassed by epic good weapons).",
            "The wielder can discorporate into an invulnerable swarm of worms as an immediate action, reforming 1d4 rounds later.",
        ],
    },
    {
        name: "Third Eye of the Chronovore",
        user: "Nexus of Infinity (Mithral Dragon)",
        description: "A crystalline third eye that floats on the wielder's brow. It does not see what is, but what will be, and what could have been.",
        powers: [
            "Grants a constant 'Foresight' effect.",
            "The wielder can see into the past, present, and future of any object or creature it focuses on.",
            "Once per day, the wielder can manifest 'Temporal Stasis' as a free action, with no save.",
        ],
    },
    {
        name: "Vest of the Unseen Blade",
        user: "Embodiment of the Blade (Marilith)",
        description: "A vest of shimmering, displaced air that makes the wearer's movements almost impossible to track. It is the perfect defense for a warrior who is always in motion.",
        powers: [
            "Grants a +12 armor bonus to AC.",
            "The wearer is under a constant 'Displacement' effect (50% miss chance).",
            "Grants the wearer DR 15/epic and lawful.",
            "Three times per day, the wearer can become completely invisible for 10 rounds.",
        ],
    },
    {
        name: "Vestments of the First Pact",
        user: "Nexus of Dead Gods (Upasunda Asura)",
        description: "Robes inscribed with the true names of forgotten gods and the terms of the first pacts ever made. To wear them is to wield the authority of primal, forgotten laws.",
        powers: [
            "Grants a +12 insight bonus to AC and saves.",
            "The wearer's Binder level is treated as 10 levels higher for determining the powers of vestiges.",
            "The wearer can make a binding check as a free action once per round.",
            "Grants immunity to all compulsion effects."
        ],
    },
];