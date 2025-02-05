import MapboxMap from './MapboxMap';
import React, { useState } from 'react';


const SummaryPoint = ({ point, details, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pointDetails = {
    "Intelligence Analysis: Dec 2024 - Jan 22 2025": [
      "Multi-jurisdictional money movement operation",
      "Coordinated monitoring across UAE and Iraq",
      "AdTech and human intelligence sources",
      "Pattern of life analysis across multiple devices"
    ],
    "Target: Money Movement Operation": [
      "USD 11 million cash transfer",
      "Led by Salman Alwan SALIM and Abu Shaheen AL-AITHAWI",
      "Front company utilization",
      "Professional tradecraft evident"
    ],
    "Objective: Track money movement and map network": [
      "Primary location: Dubai (Speedex Center)",
      "Secondary location: Basra",
      "Maritime transport component",
      "Network of legitimate businesses used as cover"
    ],
    "Status: Active intelligence development across jurisdictions": [
      "UAE-side network partially mapped",
      "Iraq-side operations emerging",
      "Multiple device patterns identified",
      "Port authority connections under investigation"
    ],
    "Money Movement Pattern: Dubai to Basra (Dec 2024)": []
  };

  // Special handling for the location point
  const isLocationPoint = point === "Money Movement Pattern: Dubai to Basra (Dec 2024)";
  
  return (
    <div className="flex items-start space-x-3 group">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-3 h-3 rounded-full bg-blue-500 mt-2 transition-all duration-300 cursor-pointer
          ${isExpanded ? 'scale-125 bg-blue-400' : 'hover:scale-110 hover:bg-blue-400'}`}
      />
      <div className="flex-1">
        <div className="flex items-center">
          <p className="text-gray-400 cursor-pointer hover:text-gray-300 transition-colors"
             onClick={() => setIsExpanded(!isExpanded)}>
            {point}
          </p>
        </div>
        
        {/* Regular expandable content */}
        {!isLocationPoint && (
                <div className={`pl-4 border-l-2 border-blue-500/30 mt-4 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                    {pointDetails[point]?.map((detail, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center space-x-2 mb-2 transform transition-all duration-500 ease-out
                            ${isExpanded ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'}`}
                        style={{ 
                            transitionDelay: `${idx * 100}ms`
                        }}
                    >
                        <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                        <p className="text-gray-500 text-sm">{detail}</p>
                    </div>
                    ))}
                </div>
                )}

        {isLocationPoint && (
        <div 
            className={`mt-4 transform transition-all duration-1000 ease-out overflow-hidden relative
            ${isExpanded ? 'h-[800px] opacity-100 w-[800px]' : 'h-0 w-0 opacity-0'}`}
        >
            <div className="absolute inset-0 bg-gray-800/50 rounded-lg overflow-hidden">
            <MapboxMap isVisible={isExpanded} />
            </div>
        </div>
        )}
      </div>
    </div>
  );
};



const ExpandableSummary = ({ show = true }) => {
  const summaryPoints = [
    "Intelligence Analysis: Dec 2024 - Jan 22 2025",
    "Target: Money Movement Operation",
    "Objective: Track money movement and map network",
    "Status: Active intelligence development across jurisdictions",
    "Money Movement Pattern: Dubai to Basra (Dec 2024)"
  ];

    return (
        <div className={`max-w-7xl transition-all duration-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg transition-all duration-1000">
            <h2 className="text-xl font-semibold text-gray-300 mb-8">Executive Summary</h2>
            <div className="space-y-6">
            {summaryPoints.map((point, index) => (
                <SummaryPoint
                key={index}
                point={point}
                delay={index * 200}
                />
            ))}
            </div>
        </div>
        </div>
    );
    };

export default ExpandableSummary;




















