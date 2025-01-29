import React from 'react';
import NetworkGraph from './NetworkGraph';

const RightPanel = () => {
  return (
    <div className="w-full h-full p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Stakeholder Network Analysis</h2>
      <p className="text-gray-600 mb-4">
        Interactive visualization of key stakeholders and their relationships.
        Drag nodes to reposition, click to unpin, and scroll to zoom.
      </p>
      <NetworkGraph />
    </div>
  );
};

export default RightPanel;