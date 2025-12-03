// components/DanmakuCard.tsx
import React from 'react';
import { DanmakuAttack } from '../types';

interface DanmakuCardProps {
  danmaku: DanmakuAttack[];
}

const DanmakuCard: React.FC<DanmakuCardProps> = ({ danmaku }) => {
  return (
    <div>
      <p className="mb-4 italic text-gray-400">Danmaku, or 'bullet hell', is a style of combat focused on overwhelming the opponent with a beautiful, intricate, and deadly pattern of projectiles. Yukariko treats this as a form of art or a game.</p>
      <ul className="list-disc list-inside space-y-3">
        {danmaku.map((attack, index) => (
          <li key={index}>
            <strong className="text-blue-300">{attack.name}:</strong> {attack.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DanmakuCard;