// components/FullBuildCard.tsx
import React from 'react';
import { Build, Monster } from '../types';

const FullBuildCard: React.FC<{ build: Build, monster: Monster }> = ({ build, monster }) => {
  const abilityMod = (score: number | undefined) => score ? Math.floor((score - 10) / 2) : 0;
  const modSign = (score: number) => score >= 0 ? '+' : '';

  return (
    <div className="bg-gray-900/50 print-bg-white p-4 rounded-lg text-gray-200 print-text-black">
        <p className="mb-4 italic text-gray-400 print-text-black">{monster.description}</p>
        
        {build.buildNotes.length > 0 && (
        <div className="mb-4">
            <h4 className="text-md font-semibold mt-2 mb-2 text-blue-300">Build Notes</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 prose prose-invert prose-sm">
                {build.buildNotes.map((note, index) => <li key={index}>{note}</li>)}
            </ul>
        </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 mb-4 text-sm">
            <div><strong>HP:</strong> {build.hitDice}</div>
            <div><strong>Initiative:</strong> {modSign(build.initiative.bonus)}{build.initiative.bonus} <span className="text-gray-400 text-xs">{build.initiative.breakdown}</span></div>
            <div><strong>Speed:</strong> {build.speed}</div>
            <div className="col-span-full"><strong>AC:</strong> {build.armorClass.total} <span className="text-gray-400 text-xs">{build.armorClass.breakdown}</span></div>
            <div><strong>Touch/Flat-Footed:</strong> {build.armorClass.touch} / {build.armorClass.flatFooted}</div>
            <div className="col-span-2"><strong>Base Attack/Grapple:</strong> +{build.sheet.baseAtk} / +{build.sheet.grapple}</div>
        </div>
        
        {build.sheet.fullAttack.length > 0 && (
            <div className="mb-4 text-sm">
                <p><strong>Full Attack:</strong> {build.sheet.fullAttack.map(a => `${a.name} ${a.bonus} (${a.damage})`).join('; ')}</p>
            </div>
        )}

        {build.sheet.attackRoutine && build.sheet.attackRoutine.length > 0 && (
             <div className="mb-4 text-sm prose prose-sm prose-invert max-w-none">
                <h4 className="text-md font-semibold text-blue-300">Attack Routine</h4>
                <ul className="list-disc list-inside">
                    {build.sheet.attackRoutine.map((routine, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: routine }}></li>
                    ))}
                </ul>
            </div>
        )}

        <div className="grid grid-cols-6 gap-2 text-center border-t border-b border-gray-700 print-border-gray py-2 my-4">
            {Object.entries(build.sheet.abilities).map(([key, value]) => {
                const isNoScore = (key === 'con' || key === 'int') && value === 0;
                return (
                    // FIX: Cast value to number to fix 'unknown' type from Object.entries
                    <div key={key}><strong>{key.toUpperCase()}</strong><br/>{isNoScore ? '—' : (value as number)} {isNoScore ? '' : `(${modSign(abilityMod(value as number))}${abilityMod(value as number)})`}</div>
                )
            })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-4 mb-4 text-sm">
            <div><strong>Fort:</strong> +{build.sheet.saves.fort.bonus} <span className="text-gray-400 text-xs">{build.sheet.saves.fort.breakdown}</span></div>
            <div><strong>Ref:</strong> +{build.sheet.saves.ref.bonus} <span className="text-gray-400 text-xs">{build.sheet.saves.ref.breakdown}</span></div>
            <div><strong>Will:</strong> +{build.sheet.saves.will.bonus} <span className="text-gray-400 text-xs">{build.sheet.saves.will.breakdown}</span></div>
        </div>

        {build.sheet.specialAttacks.length > 0 && (
             <div className="mb-4">
                <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Special Attacks</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                    {build.sheet.specialAttacks.map(a => <li key={a.name}><strong>{a.name} ({a.type}):</strong> {a.description}</li>)}
                </ul>
            </div>
        )}

        {build.sheet.specialQualities.length > 0 && (
             <div className="mb-4">
                <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Special Qualities</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                    {build.sheet.specialQualities.map(a => <li key={a.name}><strong>{a.name} ({a.type}):</strong> {a.description}</li>)}
                </ul>
            </div>
        )}
        
        {build.selectedSpells && build.selectedSpells.length > 0 && (
             <div className="mb-4">
                <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Spells</h4>
                <p className="text-sm">{build.selectedSpells.join(', ')}</p>
            </div>
        )}
        {build.selectedPowers && build.selectedPowers.length > 0 && (
             <div className="mb-4">
                <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Powers</h4>
                <p className="text-sm">{build.selectedPowers.join(', ')}</p>
            </div>
        )}
        {build.selectedManeuvers && build.selectedManeuvers.length > 0 && (
             <div className="mb-4">
                <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Maneuvers</h4>
                <p className="text-sm">{build.selectedManeuvers.join(', ')}</p>
            </div>
        )}

        <div className="mb-4">
          <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Skills</h4>
          <p className="text-sm">{(build.sheet.skills && build.sheet.skills.length > 0) ? build.sheet.skills.map(s => `${s.name} +${s.bonus}${s.breakdown ? ` (${s.breakdown})` : ''}`).join(', ') : 'None'}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Feats</h4>
          <p className="text-sm">{(build.sheet.feats && build.sheet.feats.length > 0) ? build.sheet.feats.map(f => f.name).join(', ') : 'None'}</p>
        </div>
        
        {build.sheet.equipment && build.sheet.equipment.items.length > 0 && (
             <div className="mb-4">
                 <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 print-text-black border-t border-gray-700 print-border-gray pt-2">Equipment ({build.sheet.equipment.totalValue})</h4>
                <ul className="list-disc list-inside text-sm">
                    {build.sheet.equipment.items.map((item, i) => <li key={`${item.name}-${i}`}>{item.name}{item.cost && ` (${item.cost})`}</li>)}
                </ul>
            </div>
        )}

        <div className="text-xs text-gray-500 border-t border-gray-700 pt-2 mt-4">
            <p><strong>Environment:</strong> {build.sheet.environment || 'N/A'} | <strong>Organization:</strong> {build.sheet.organization || 'N/A'} | <strong>Alignment:</strong> {build.sheet.alignment || 'N/A'}</p>
        </div>

    </div>
  );
};
export default FullBuildCard;