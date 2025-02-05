import React, { useState, useEffect } from 'react';
import ExpandableSummary from './ExpandableSummary';

const OpeningSequence = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  
  useEffect(() => {
    // Sequence the animations
    setTimeout(() => setShowBackground(true), 500);
    setTimeout(() => setShowTitle(true), 1500);
    setTimeout(() => setShowTimeline(true), 2500);
    setTimeout(() => setShowSummary(true), 3500);
  }, []);

  return (
    <section className={`min-h-screen relative overflow-hidden transition-colors duration-1000 ${showBackground ? 'bg-gray-900' : 'bg-black'}`}>
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900 transition-opacity duration-1000 ${showBackground ? 'opacity-100' : 'opacity-0'}`} />

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        {/* Classification marking */}
        <div className={`mb-16 transition-all duration-1000 ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="text-red-500 text-sm font-mono border border-red-500 px-4 py-2">
            COMMERCIAL-IN-CONFIDENCE // PROJECT MALL PHASE 3
          </div>
        </div>

        {/* Main title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-6xl font-bold text-white mb-4">Project MALL</h1>
          <div className="h-1 w-24 mx-auto bg-blue-500"/>
        </div>

        {/* Timeline */}
        <div className={`mb-16 transition-all duration-1000 ${showTimeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* <div className="bg-gray-800/50 backdrop-blur px-6 py-3 rounded-full"> */}
          <div className="bg-gray-800/50 backdrop-blur px-6 py-3 text-center">

            <span className="text-l text-gray-300">Analysis Phase 1: ICOD December 20, 2024</span> <br /> <br />
            <span className="text-l text-gray-300">Analysis Phase 2: ICOD January 22, 2025</span>
          </div>
        </div>

        {/* Expandable Executive Summary */}
        <ExpandableSummary show={showSummary} />
      </div>
    </section>
  );
};

export default OpeningSequence;







