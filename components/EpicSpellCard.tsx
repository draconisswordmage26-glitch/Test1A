// components/EpicSpellCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { EpicSpell } from '../types';

const EpicSpellCard: React.FC<{ spell: EpicSpell }> = ({ spell }) => {
  return (
    <Accordion title={spell.name}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
        <div><strong>School:</strong> {spell.school}</div>
        <div><strong>Caster Level Req:</strong> {spell.casterLevelReq}</div>
        <div><strong>Range:</strong> {spell.range}</div>
        <div><strong>Duration:</strong> {spell.duration}</div>
        <div><strong>Casting Time:</strong> {spell.castingTime}</div>
        <div><strong>Saving Throw:</strong> {spell.savingThrow}</div>
        <div className="col-span-2"><strong>Spell Resistance:</strong> {spell.spellResistance}</div>
        {spell.target && <div className="col-span-2"><strong>Target:</strong> {spell.target}</div>}
        {spell.area && <div className="col-span-2"><strong>Area:</strong> {spell.area}</div>}
      </div>
       <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Description</h4>
      <p>{spell.description}</p>
    </Accordion>
  );
};

export default EpicSpellCard;