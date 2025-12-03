// components/SoulmeldCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { Soulmeld } from '../types';

const SoulmeldCard: React.FC<{ soulmeld: Soulmeld }> = ({ soulmeld }) => {
  const title = soulmeld.levelReq ? `${soulmeld.name} (Lvl Req: ${soulmeld.levelReq})` : soulmeld.name;

  return (
    <Accordion title={title}>
      <p className="mb-4">{soulmeld.description}</p>
      
      <div className="mb-4 text-sm">
        <strong>Essentia:</strong> {soulmeld.essentia}
      </div>

      {soulmeld.chakraBind.length > 0 && (
        <>
          <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Chakra Binds</h4>
          <ul className="space-y-2">
            {soulmeld.chakraBind.map(bind => (
              <li key={bind.chakra}>
                <strong>{bind.chakra}:</strong> {bind.description}
              </li>
            ))}
          </ul>
        </>
      )}
    </Accordion>
  );
};

export default SoulmeldCard;