// components/SampleBuildsViewer.tsx
import React, { useState } from 'react';
import { sampleBuilds } from '../data/sampleBuilds';
import SampleBuildCard from './SampleBuildCard';
import Accordion from './Accordion';

const SampleBuildsViewer: React.FC = () => {
    const [selectedMonster, setSelectedMonster] = useState<string>(sampleBuilds[0]?.monsterName || "");

    const handleSelectMonster = (monsterName: string) => {
        setSelectedMonster(monsterName);
    };
    
    const selectedBuilds = sampleBuilds.find(b => b.monsterName === selectedMonster);

    return (
        <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Sample Builds</h3>
            
            {sampleBuilds.length === 0 ? (
                <p className="text-gray-400 italic mt-2">No sample builds are currently available. This feature is under development.</p>
            ) : (
                <>
                    <div className="mb-6">
                        <label htmlFor="monster-build-select" className="block text-sm font-medium text-gray-300 mb-2">Select a Monster to see its Build Progressions:</label>
                        <select
                            id="monster-build-select"
                            onChange={(e) => handleSelectMonster(e.target.value)}
                            className="w-full max-w-md px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                            value={selectedMonster}
                        >
                            {sampleBuilds.map(m => <option key={m.monsterName} value={m.monsterName}>{m.monsterName}</option>)}
                        </select>
                    </div>

                    {selectedBuilds && (
                        <div>
                            {selectedBuilds.builds.map((build, index) => (
                                <SampleBuildCard key={index} build={build} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default SampleBuildsViewer;