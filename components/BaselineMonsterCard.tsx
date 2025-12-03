// components/BaselineMonsterCard.tsx
import React from 'react';
import Accordion from './Accordion';
import { BaselineMonster, SpecialAbility } from '../types';

const BaselineMonsterCard: React.FC<{ monster: BaselineMonster }> = ({ monster }) => {
  const initiative = Math.floor((monster.abilities.dex - 10) / 2) + (monster.feats.includes("Improved Initiative") ? 4 : 0);
  return (
    <Accordion title={`${monster.name} (CR ${monster.challengeRating})`}>
      <p className="mb-2 italic">{monster.sizeAndType}</p>
      <p className="mb-4">{monster.description}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 text-sm">
        <div><strong>Hit Dice:</strong> {monster.racialHitDice}</div>
        <div><strong>Initiative:</strong> {initiative >= 0 ? '+' : ''}{initiative}</div>
        <div><strong>Speed:</strong> {monster.speed}</div>
        <div><strong>Armor Class:</strong> {monster.armorClass.base} ({monster.armorClass.breakdown})</div>
        <div><strong>Touch/Flat-Footed:</strong> {monster.armorClass.touch} / {monster.armorClass.flatFooted}</div>
        <div><strong>Base Attack/Grapple:</strong> +{monster.baseAttack}/{monster.grapple >= 0 ? '+' : ''}{monster.grapple}</div>
        <div><strong>Space/Reach:</strong> {monster.spaceReach}</div>
        <div><strong>Level Adjustment:</strong> {monster.levelAdjustment}</div>
      </div>
      
      <div className="mb-4 text-sm">
        <p><strong>Attack:</strong> {monster.attacks.join(' or ')}</p>
        <p><strong>Full Attack:</strong> {monster.fullAttack.join('; ')}</p>
      </div>

      <div className="grid grid-cols-6 gap-2 text-center border-t border-b border-gray-700 py-2 my-4">
        <div><strong>STR</strong><br/>{monster.abilities.str}</div>
        <div><strong>DEX</strong><br/>{monster.abilities.dex}</div>
        <div><strong>CON</strong><br/>{monster.abilities.con}</div>
        <div><strong>INT</strong><br/>{monster.abilities.int}</div>
        <div><strong>WIS</strong><br/>{monster.abilities.wis}</div>
        <div><strong>CHA</strong><br/>{monster.abilities.cha}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 text-sm">
          <div><strong>Fort Save:</strong> +{monster.saves.fort}</div>
          <div><strong>Ref Save:</strong> +{monster.saves.ref}</div>
          <div><strong>Will Save:</strong> +{monster.saves.will}</div>
      </div>
      
      {monster.specialAttacks.length > 0 && (
        <div className="mb-4">
          <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Special Attacks</h4>
          {monster.specialAttacks.map((ability: SpecialAbility) => (
              <p key={ability.name}><strong>{ability.name} ({ability.type}):</strong> {ability.description}</p>
          ))}
        </div>
      )}
      
      {monster.specialQualities.length > 0 && (
        <div className="mb-4">
          <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Special Qualities</h4>
          {monster.specialQualities.map((ability: SpecialAbility) => (
              <p key={ability.name}><strong>{ability.name} ({ability.type}):</strong> {ability.description}</p>
          ))}
        </div>
      )}
      
      <div className="mb-4">
        <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Skills</h4>
        <p>{monster.skills.map(s => `${s.name} +${s.bonus}`).join(', ')}</p>
      </div>
      
      <div className="mb-4">
        <h4 className="text-md font-semibold mt-4 mb-2 text-blue-300 border-t border-gray-700 pt-2">Feats</h4>
        <p>{monster.feats.join(', ')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 text-sm border-t border-gray-700 pt-2">
        <div><strong>Environment:</strong> {monster.environment}</div>
        <div><strong>Alignment:</strong> {monster.alignment}</div>
        <div><strong>Advancement:</strong> {monster.advancement}</div>
      </div>
    </Accordion>
  );
};

export default BaselineMonsterCard;
