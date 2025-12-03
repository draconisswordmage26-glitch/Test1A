
// components/AntagonistCard.tsx
import React from 'react';
import Accordion from './Accordion';
import TacticsCard from './TacticsCard';
import DivinityCard from './DivinityCard';
import DanmakuCard from './DanmakuCard';
import { Antagonist } from '../types';
import FullBuildCard from './FullBuildCard';

const AntagonistCard: React.FC<{ antagonist: Antagonist }> = ({ antagonist }) => {
  const build = antagonist.stats.builds[0];
  const title = `${antagonist.name} (CR ${build.challengeRating})`;

  return (
    <Accordion title={title}>
      <Accordion title="Stat Block & Lore" startOpen={true}>
         <FullBuildCard build={build} monster={antagonist.stats} />
      </Accordion>
      <Accordion title="Tactics & Strategy" startOpen={true}>
        <TacticsCard tactics={antagonist.tactics} />
      </Accordion>
      {antagonist.divinity && (
        <Accordion title="Divine & Cosmic Abilities" startOpen={true}>
          <DivinityCard divinity={antagonist.divinity} />
        </Accordion>
      )}
      {antagonist.danmaku && (
        <Accordion title="Danmaku Spell Cards" startOpen={true}>
          <DanmakuCard danmaku={antagonist.danmaku} />
        </Accordion>
      )}
    </Accordion>
  );
};

export default AntagonistCard;
