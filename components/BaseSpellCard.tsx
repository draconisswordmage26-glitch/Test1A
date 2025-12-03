// components/BaseSpellCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { BaseSpell } from '../types';

const BaseSpellCard: React.FC<{ spell: BaseSpell }> = ({ spell }) => {
    const levelText = Object.entries(spell.level).map(([cls, lvl]) => `${cls.toUpperCase()} ${lvl}`).join(', ');
    return (
        <Accordion title={`${spell.name}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm">
            <div><strong>Level:</strong> {levelText}</div>
            <div><strong>School:</strong> {spell.school}</div>
            <div><strong>Components:</strong> {spell.components}</div>
            <div><strong>Casting Time:</strong> {spell.castingTime}</div>
            <div className="col-span-full"><strong>Range:</strong> {spell.range}</div>
            <div className="col-span-full"><strong>Duration:</strong> {spell.duration}</div>
            <div className="col-span-full"><strong>Saving Throw:</strong> {spell.savingThrow}</div>
            <div className="col-span-full"><strong>Spell Resistance:</strong> {spell.spellResistance}</div>
            {spell.target && <div className="col-span-full"><strong>Target:</strong> {spell.target}</div>}
            {spell.area && <div className="col-span-full"><strong>Area:</strong> {spell.area}</div>}
          </div>
          <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Description</h4>
          <p>{spell.description}</p>
        </Accordion>
    );
};
export default BaseSpellCard;
