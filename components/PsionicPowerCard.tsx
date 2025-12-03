// components/PsionicPowerCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { PsionicPower } from '../types';

const PsionicPowerCard: React.FC<{ power: PsionicPower }> = ({ power }) => {
  return (
    <Accordion title={`${power.name} (${power.discipline})`}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm">
        <div><strong>Level:</strong> {power.level}</div>
        <div><strong>Display:</strong> {power.display}</div>
        <div><strong>Manifesting Time:</strong> {power.manifestingTime}</div>
        <div><strong>Range:</strong> {power.range}</div>
        <div><strong>Duration:</strong> {power.duration}</div>
        <div><strong>Power Points:</strong> {power.powerPoints}</div>
        <div className="col-span-full"><strong>Saving Throw:</strong> {power.savingThrow}</div>
        <div className="col-span-full"><strong>Power Resistance:</strong> {power.powerResistance}</div>
        {power.target && <div className="col-span-full"><strong>Target:</strong> {power.target}</div>}
        {power.area && <div className="col-span-full"><strong>Area:</strong> {power.area}</div>}
      </div>
      
      <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Description</h4>
      <p className="mb-4">{power.description}</p>
      
      <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Augment</h4>
      <p>{power.augment}</p>
    </Accordion>
  );
};

export default PsionicPowerCard;