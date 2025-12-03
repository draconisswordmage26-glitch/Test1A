// components/DivinityCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { DivinityCategory } from '../types';

interface DivinityCardProps {
  divinity: DivinityCategory[];
}

const DivinityCard: React.FC<DivinityCardProps> = ({ divinity }) => {
  return (
    <div>
      {divinity.map((category, index) => (
        <Accordion key={index} title={category.name} startOpen={index === 0}>
          <p className="mb-4 italic text-gray-400">{category.description}</p>
          <ul className="list-disc list-inside space-y-2">
            {category.abilities.map((ability, aIndex) => (
              <li key={aIndex}>
                <strong>{ability.name}:</strong> {ability.description}
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </div>
  );
};

export default DivinityCard;
