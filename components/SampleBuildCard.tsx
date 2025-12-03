// components/SampleBuildCard.tsx
import React from 'react';
import { SampleBuild } from '../types';
import Accordion from './Accordion';

interface SampleBuildCardProps {
    build: SampleBuild;
}

const SampleBuildCard: React.FC<SampleBuildCardProps> = ({ build }) => {
    const title = `[${build.category}] - ${build.title}`;

    return (
        <Accordion title={title}>
            <div className="space-y-4">
                <div>
                    <h4 className="text-md font-semibold text-blue-300">Class Progression (1-40)</h4>
                    <p className="text-gray-300">{build.progression}</p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-md font-semibold text-blue-300">Key Feats</h4>
                    <p className="text-gray-300">{build.feats}</p>
                </div>
                 <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-md font-semibold text-blue-300">Key Skills</h4>
                    <p className="text-gray-300">{build.skills}</p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-md font-semibold text-blue-300">Lore & Concept</h4>
                    <p className="text-gray-400 italic">{build.lore}</p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-md font-semibold text-blue-300">Tactics & Playstyle</h4>
                    <p className="text-gray-400">{build.tactics}</p>
                </div>
            </div>
        </Accordion>
    );
}

export default SampleBuildCard;