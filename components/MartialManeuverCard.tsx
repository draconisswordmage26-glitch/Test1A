// components/MartialManeuverCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { MartialManeuver } from '../types';

const MartialManeuverCard: React.FC<{ maneuver: MartialManeuver }> = ({ maneuver }) => {
  const title = `${maneuver.name} (${maneuver.discipline} ${maneuver.level})`;
  
  return (
    <Accordion title={title}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
        <div><strong>Discipline:</strong> {maneuver.discipline}</div>
        <div><strong>Level:</strong> {maneuver.level}</div>
        <div><strong>Type:</strong> {maneuver.type}</div>
        <div><strong>Action:</strong> {maneuver.action}</div>
        {maneuver.initiatorLevelReq && <div><strong>Initiator Lvl Req:</strong> {maneuver.initiatorLevelReq}</div>}
        <div className="col-span-full"><strong>Range:</strong> {maneuver.range}</div>
        {maneuver.target && <div className="col-span-full"><strong>Target:</strong> {maneuver.target}</div>}
        {maneuver.area && <div className="col-span-full"><strong>Area:</strong> {maneuver.area}</div>}
      </div>
      
      <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Description</h4>
      <p>{maneuver.description}</p>
    </Accordion>
  );
};

export default MartialManeuverCard;