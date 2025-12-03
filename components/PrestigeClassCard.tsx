// components/PrestigeClassCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { PrestigeClass } from '../types';

const PrestigeClassCard: React.FC<{ pc: PrestigeClass }> = ({ pc }) => {
  return (
    <Accordion title={pc.name}>
      <p className="mb-4 italic">{pc.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
        <div><strong>Hit Die:</strong> d{pc.hitDie}</div>
        <div><strong>Skill Points:</strong> {pc.skillPoints} + Int modifier</div>
        <div className="md:col-span-3"><strong>Class Skills:</strong> {pc.classSkills.join(', ')}</div>
      </div>
      
      <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Requirements</h4>
      <ul className="list-disc list-inside space-y-1 mb-4">
        {pc.requirements.map((req, index) => <li key={index}>{req}</li>)}
      </ul>

      <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Class Features</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800/50">
              <th className="p-2 border border-gray-700">Level</th>
              <th className="p-2 border border-gray-700">Special</th>
            </tr>
          </thead>
          <tbody>
            {pc.features.map(feature => (
              <tr key={feature.level} className="border-t border-gray-700">
                <td className="p-2 border border-gray-700 align-top w-16 text-center">{feature.level}</td>
                <td className="p-2 border border-gray-700"><strong>{feature.name}:</strong> {feature.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Accordion>
  );
};

export default PrestigeClassCard;