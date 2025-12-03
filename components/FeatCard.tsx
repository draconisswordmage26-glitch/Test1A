// components/FeatCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { Feat, FeatPrerequisites } from '../types';

const FeatCard: React.FC<{ feat: Feat }> = ({ feat }) => {
  const renderPrerequisites = () => {
    if (!feat.prerequisites && !feat.isEpic) return null;

    const prereqList: string[] = [];
    const { bab, feats, abilityScores, skills, special } = feat.prerequisites || {};

    if (feat.isEpic) {
      prereqList.push('Epic character level (21+)');
    }
    if (bab) {
      prereqList.push(`Base Attack Bonus +${bab}`);
    }
    if (abilityScores) {
      Object.entries(abilityScores).forEach(([ability, value]) => {
        prereqList.push(`${ability.toUpperCase()} ${value}+`);
      });
    }
    if (feats) {
      prereqList.push(`Feats: ${feats.join(', ')}`);
    }
    if (skills) {
      Object.entries(skills).forEach(([skill, value]) => {
        prereqList.push(`${skill} ${value} ranks`);
      });
    }
    if (special) {
      prereqList.push(special);
    }
    
    if (prereqList.length === 0) return null;

    return (
      <div className="mt-4 border-t border-gray-700 pt-2">
        <h4 className="text-md font-semibold text-blue-300 mb-1">Prerequisites</h4>
        <p className="text-sm text-gray-400">{prereqList.join('; ')}</p>
      </div>
    );
  };

  return (
    <Accordion title={feat.name}>
      <p>{feat.description}</p>
      {renderPrerequisites()}
    </Accordion>
  );
};

export default FeatCard;