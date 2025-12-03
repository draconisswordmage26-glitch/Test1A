// components/TacticsCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { Tactics, TacticSection } from '../types';

const TacticsCard: React.FC<{ tactics: Tactics }> = ({ tactics }) => {
  return (
    <Accordion title={tactics.title}>
      <p className="mb-4 italic">{tactics.description}</p>
      
      {tactics.sections.map((section: TacticSection, index: number) => (
        <Accordion key={index} title={section.title} startOpen={index === 0}>
           <ul className="list-disc list-inside space-y-2">
            {section.content.map((point, pIndex) => (
              <li key={pIndex}>{point}</li>
            ))}
          </ul>
        </Accordion>
      ))}
    </Accordion>
  );
};

export default TacticsCard;
