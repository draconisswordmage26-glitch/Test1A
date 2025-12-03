// components/ArtifactCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { Artifact } from '../types';

const ArtifactCard: React.FC<{ artifact: Artifact }> = ({ artifact }) => {
  return (
    <Accordion title={artifact.name}>
      <div className="mb-4">
        <h4 className="text-md font-semibold text-blue-300">Wielder</h4>
        <p className="text-gray-300 italic">{artifact.user}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold text-blue-300 border-t border-gray-700 pt-2">Description</h4>
        <p>{artifact.description}</p>
      </div>
      <div>
        <h4 className="text-md font-semibold text-blue-300 border-t border-gray-700 pt-2">Powers</h4>
        <ul className="list-disc list-inside space-y-1">
          {artifact.powers.map((power, index) => (
            <li key={index}>{power}</li>
          ))}
        </ul>
      </div>
    </Accordion>
  );
};

export default ArtifactCard;
