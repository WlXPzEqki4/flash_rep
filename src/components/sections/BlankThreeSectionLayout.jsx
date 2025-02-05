import React from 'react';

const BlankThreeSectionLayout = () => {
  return (
    <div className="w-full px-4 py-8">
      {/* Page title (optional) */}
      <h2 className="text-5xl font-bold mb-6 text-white">
        Placeholder Title
      </h2>

      {/* 
        Top row => two panels side-by-side on lg+ screens, 
        stacked on small screens. "gap-6" => space between them.
      */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* First panel */}
        <div className="flex-1 bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            Section One
          </h3>
          <p className="text-sm text-gray-300">
            Placeholder content for the first panel. 
            This section fills half the space on large screens, 
            and becomes full-width on smaller devices.
          </p>
        </div>

        {/* Second panel */}
        <div className="flex-1 bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            Section Two
          </h3>
          <p className="text-sm text-gray-300">
            Placeholder content for the second panel. 
            This also fills half the space on large screens, 
            and stacks below the first panel on smaller screens.
          </p>
        </div>
        
      </div>

      

      {/* 
        Third panel => single section beneath the first two, 
        spanning the full available width. 
      */}
      <div className="bg-gray-800/50 p-6 rounded-lg w-full mt-6">
        <h3 className="text-xl font-semibold text-white mb-4">
          Section Three
        </h3>
        <p className="text-sm text-gray-300">
          Placeholder content for a full-width panel. 
          This stretches across the entire layout.
        </p>
      </div>
    </div>
  );
};

export default BlankThreeSectionLayout;
