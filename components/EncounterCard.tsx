// components/EncounterCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { Encounter } from '../types';

const EncounterCard: React.FC<{ encounter: Encounter }> = ({ encounter }) => {
  return (
    <Accordion title={`${encounter.name} (EL ${encounter.el})`}>
      <p className="mb-4 italic">{encounter.description}</p>
      
      <Accordion title="Setup & Environment" startOpen={true}>
        <ul className="list-disc list-inside space-y-1">
          {encounter.setup.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
      </Accordion>

      <Accordion title="Combatants">
        <h4 className="text-md font-semibold mb-2 text-blue-300">Initial Forces</h4>
        <ul className="list-disc list-inside space-y-1 mb-4">
          {encounter.monsters.map((monster, index) => (
            <li key={index}>
              <strong>{monster.quantity}x {monster.name}</strong>
              {monster.notes && <span className="text-gray-400 italic"> - {monster.notes}</span>}
            </li>
          ))}
        </ul>
        {encounter.reinforcements && encounter.reinforcements.length > 0 && (
          <>
            <h4 className="text-md font-semibold mb-2 text-blue-300 border-t border-gray-700 pt-2">Reinforcements</h4>
            <ul className="list-disc list-inside space-y-1">
              {encounter.reinforcements.map((point, index) => <li key={index}>{point}</li>)}
            </ul>
          </>
        )}
      </Accordion>

      <Accordion title="Tactics">
        <ul className="list-disc list-inside space-y-1">
          {encounter.tactics.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
      </Accordion>

      <Accordion title="Scaling & Treasure">
        <h4 className="text-md font-semibold mb-2 text-blue-300">Scaling the Encounter</h4>
        <p className="mb-2"><strong>To Increase EL:</strong> {encounter.scaling.increase}</p>
        <p className="mb-4"><strong>To Decrease EL:</strong> {encounter.scaling.decrease}</p>
        
        <h4 className="text-md font-semibold mb-2 text-blue-300 border-t border-gray-700 pt-2">Treasure</h4>
         <ul className="list-disc list-inside space-y-1">
          {encounter.treasure.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
      </Accordion>
    </Accordion>
  );
};

export default EncounterCard;