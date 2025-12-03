// App.tsx
import React, { useState, lazy, Suspense } from 'react';
import Accordion from './components/Accordion';
import PrestigeClassCard from './components/PrestigeClassCard';
import EpicSpellCard from './components/EpicSpellCard';
import PsionicPowerCard from './components/PsionicPowerCard';
import SoulmeldCard from './components/SoulmeldCard';
import MartialManeuverCard from './components/MartialManeuverCard';
import ArtifactCard from './components/ArtifactCard';
import TacticsCard from './components/TacticsCard';
import AntagonistCard from './components/AntagonistCard';
import EncounterCard from './components/EncounterCard';
import BaselineMonsterCard from './components/BaselineMonsterCard';
import FeatCard from './components/FeatCard';
import BaseSpellCard from './components/BaseSpellCard';

const TABS = [
    "Antagonists", "Encounters", "Tactics", 
    "Prestige Classes", "Base Classes", "Feats", 
    "Base Spells", "Epic Spells", 
    "Base Psionics", "Epic Psionics", 
    "Base Maneuvers", "Epic Maneuvers", 
    "Base Soulmelds", "Epic Soulmelds", 
    "Artifacts", "Baseline Monsters", "Character Builder", "Sample Builds"
];

const PROTECTED_TABS = ["Antagonists", "Encounters"];

// Lazy-loaded view components to split code and data loading
const AntagonistsView = lazy(() => import('./data/antagonists').then(module => ({ 
    default: () => module.antagonists.map(antagonist => <AntagonistCard key={antagonist.name} antagonist={antagonist} />)
})));

const EncountersView = lazy(() => import('./data/encounters').then(module => ({ 
    default: () => module.encounters.map(encounter => <EncounterCard key={encounter.name} encounter={encounter} />)
})));

const TacticsView = lazy(() => import('./data/tactics').then(module => ({
    default: () => module.tactics.map(tactic => <TacticsCard key={tactic.name} tactics={tactic} />)
})));

const PrestigeClassesView = lazy(() => import('./data/prestigeClasses').then(module => ({
    default: () => module.prestigeClasses.map(pc => <PrestigeClassCard key={pc.name} pc={pc} />)
})));

const BaseClassesView = lazy(() => import('./data/baseClasses').then(module => ({
    default: () => module.baseClasses.map(bc => <PrestigeClassCard key={bc.name} pc={{...bc, description: `Base class features for ${bc.name}.`, requirements:[], features: bc.classFeatures}} />)
})));

const FeatsView = lazy(() => import('./data/feats').then(module => ({
    default: () => module.feats.map(feat => <FeatCard key={feat.name} feat={feat} />)
})));

const EpicSpellsView = lazy(() => import('./data/epicSpells').then(module => ({
    default: () => module.epicSpells.map(spell => <EpicSpellCard key={spell.name} spell={spell} />)
})));

const EpicPsionicsView = lazy(() => import('./data/psionicPowers').then(module => ({
    default: () => module.psionicPowers.map(power => <PsionicPowerCard key={power.name} power={power} />)
})));

const EpicManeuversView = lazy(() => import('./data/martialManeuvers').then(module => ({
    default: () => module.martialManeuvers.map(maneuver => <MartialManeuverCard key={maneuver.name} maneuver={maneuver} />)
})));

const EpicSoulmeldsView = lazy(() => import('./data/soulmelds').then(module => ({
    default: () => module.soulmelds.map(soulmeld => <SoulmeldCard key={soulmeld.name} soulmeld={soulmeld} />)
})));

const ArtifactsView = lazy(() => import('./data/artifacts').then(module => ({
    default: () => module.artifacts.map(artifact => <ArtifactCard key={artifact.name} artifact={artifact} />)
})));

const BaselineMonstersView = lazy(() => import('./data/baselineMonsters').then(module => ({
    default: () => module.baselineMonsters.map(monster => <BaselineMonsterCard key={monster.name} monster={monster} />)
})));

const LazyCharacterBuilder = lazy(() => import('./components/CharacterBuilder'));
const LazySampleBuildsViewer = lazy(() => import('./components/SampleBuildsViewer'));

// New Base Views
const BaseSpellsView = lazy(() => import('./data/base_spells').then(module => ({
    default: () => {
        const spellsByLevel: { [level: number]: any[] } = {};
        module.baseSpells.forEach(spell => {
            const level = spell.level['Wiz'] ?? spell.level['Clr'] ?? spell.level['Drd'] ?? spell.level['Brd'] ?? 0;
            if (!spellsByLevel[level]) spellsByLevel[level] = [];
            spellsByLevel[level].push(spell);
        });
        return Object.keys(spellsByLevel).sort((a,b) => Number(a) - Number(b)).map(levelStr => {
            const level = Number(levelStr);
            return (
                <Accordion key={`level-${level}`} title={`Level ${level} Spells`} startOpen={level < 2}>
                    {spellsByLevel[level].map(spell => <BaseSpellCard key={spell.name} spell={spell} />)}
                </Accordion>
            );
        });
    }
})));

const BasePsionicsView = lazy(() => import('./data/base_psionic_powers').then(module => ({
    default: () => {
        const powersByDiscipline: { [discipline: string]: any[] } = {};
        module.basePsionicPowers.forEach(power => {
            const discipline = power.discipline;
            if (!powersByDiscipline[discipline]) powersByDiscipline[discipline] = [];
            powersByDiscipline[discipline].push(power);
        });
        return Object.keys(powersByDiscipline).sort().map(discipline => (
            <Accordion key={discipline} title={discipline} startOpen={true}>
                {powersByDiscipline[discipline].sort((a,b) => (parseInt(a.level) || 0) - (parseInt(b.level) || 0)).map(power => <PsionicPowerCard key={power.name} power={power} />)}
            </Accordion>
        ));
    }
})));

const BaseManeuversView = lazy(() => import('./data/base_maneuvers').then(module => ({
    default: () => {
        const maneuversByDiscipline: { [discipline: string]: any[] } = {};
        module.baseManeuvers.forEach(maneuver => {
            const discipline = maneuver.discipline;
            if (!maneuversByDiscipline[discipline]) maneuversByDiscipline[discipline] = [];
            maneuversByDiscipline[discipline].push(maneuver);
        });
        return Object.keys(maneuversByDiscipline).sort().map(discipline => (
            <Accordion key={discipline} title={discipline} startOpen={true}>
                {maneuversByDiscipline[discipline].sort((a,b) => a.level - b.level).map(maneuver => <MartialManeuverCard key={maneuver.name} maneuver={maneuver} />)}
            </Accordion>
        ));
    }
})));

const BaseSoulmeldsView = lazy(() => import('./data/base_soulmelds').then(module => ({
    default: () => {
        const soulmeldsByCategory: { [category: string]: any[] } = {};
        module.baseSoulmelds.forEach(soulmeld => {
            const category = soulmeld.category;
            if (!soulmeldsByCategory[category]) soulmeldsByCategory[category] = [];
            soulmeldsByCategory[category].push(soulmeld);
        });
        return Object.keys(soulmeldsByCategory).sort().map(category => (
            <Accordion key={category} title={`${category} Slot`} startOpen={true}>
                {soulmeldsByCategory[category].map(soulmeld => <SoulmeldCard key={soulmeld.name} soulmeld={soulmeld} />)}
            </Accordion>
        ));
    }
})));


const tabComponentMap: { [key: string]: React.ComponentType } = {
  'Antagonists': AntagonistsView,
  'Encounters': EncountersView,
  'Tactics': TacticsView,
  'Prestige Classes': PrestigeClassesView,
  'Base Classes': BaseClassesView,
  'Feats': FeatsView,
  'Epic Spells': EpicSpellsView,
  'Epic Psionics': EpicPsionicsView,
  'Epic Maneuvers': EpicManeuversView,
  'Epic Soulmelds': EpicSoulmeldsView,
  'Artifacts': ArtifactsView,
  'Baseline Monsters': BaselineMonstersView,
  'Character Builder': LazyCharacterBuilder,
  'Sample Builds': LazySampleBuildsViewer,
  'Base Spells': BaseSpellsView,
  'Base Psionics': BasePsionicsView,
  'Base Maneuvers': BaseManeuversView,
  'Base Soulmelds': BaseSoulmeldsView,
};

function App() {
  const [activeTab, setActiveTab] = useState('Character Builder');
  const [isDmUnlocked, setIsDmUnlocked] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [pendingTab, setPendingTab] = useState("");

  const handleTabClick = (tab: string) => {
    if (PROTECTED_TABS.includes(tab) && !isDmUnlocked) {
      setPendingTab(tab);
      setShowPasswordPrompt(true);
    } else {
      setActiveTab(tab);
    }
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'RitualOfTheDwarvenKing') {
        setIsDmUnlocked(true);
        setShowPasswordPrompt(false);
        setPasswordError("");
        setActiveTab(pendingTab);
        setPendingTab("");
        setPasswordInput("");
    } else {
        setPasswordError("Incorrect password.");
        setPasswordInput("");
    }
  };
  
  const isAntagonistTheme = isDmUnlocked && PROTECTED_TABS.includes(activeTab);

  return (
    <div className={`bg-gray-950 text-white min-h-screen font-sans ${isAntagonistTheme ? 'theme-antagonist' : ''}`}>
      {showPasswordPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center w-full max-w-sm">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">DM Section Locked</h2>
            <p className="text-gray-400 mb-6">Please enter the password to access this content.</p>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md mb-4 text-white focus:outline-none focus:border-blue-500"
                autoFocus
              />
              {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}
              <div className="flex justify-center space-x-4">
                <button type="button" onClick={() => { setShowPasswordPrompt(false); setPasswordError(""); setPasswordInput(""); }} className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-md font-semibold transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors">
                  Unlock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <header className="bg-gray-950 p-4 shadow-lg sticky top-0 z-10 no-print">
        <h1 className="text-3xl font-bold text-center text-blue-400">Epic Monster Compendium & Builder</h1>
        <nav className="mt-4 overflow-x-auto text-center">
          <ul className="inline-flex space-x-2 pb-3">
            {TABS.map(tab => (
              <li key={tab}>
                <button
                  onClick={() => handleTabClick(tab)}
                  className={`px-3 py-2 rounded-md text-lg font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab ? 'bg-blue-800 text-white' : 'text-blue-300 hover:bg-blue-700 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={<div className="text-center p-8 text-xl text-blue-400">Loading Content...</div>}>
            {/* Render Character Builder and control its visibility with CSS to persist its state */}
            <div style={{ display: activeTab === 'Character Builder' ? 'block' : 'none' }}>
              <LazyCharacterBuilder />
            </div>

            {/* Render other tabs conditionally (they will unmount on tab switch) */}
            {TABS.map(tab => {
              if (tab === 'Character Builder') return null;
              const Component = tabComponentMap[tab];
              return activeTab === tab && Component ? <Component key={tab} /> : null;
            })}
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
