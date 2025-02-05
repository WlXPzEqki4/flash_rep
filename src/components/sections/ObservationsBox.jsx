// import React from 'react';

// const ObservationsBox = () => {
//   return (
//     <div>
//       {/* 
//         Heading at the top, styled like your "Synopsis" heading.
//         Adjust the size & colour as you see fit.
//       */}
//       <h2 className="text-3xl font-bold mb-4 text-white">
//         Observations
//       </h2>

//       {/* 
//         The box itself, styled to match your existing approach:
//         - Dark translucent background
//         - Rounded corners
//         - Some padding 
//       */}
//       <div className="bg-gray-800/50 p-6 rounded-lg">
//         {/* Icon + smaller heading row */}
//         <div className="flex items-center mb-4">
//           {/* Replace this SVG if desired */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="mr-3 h-6 w-6 text-white"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <circle cx="12" cy="12" r="10" />
//             <line x1="12" y1="16" x2="12" y2="12" />
//             <line x1="12" y1="8" x2="12" y2="8" />
//           </svg>
//           <h3 className="text-xl font-semibold text-white">
//             Placeholder Title
//           </h3>
//         </div>

//         {/* Placeholder text. Change to match your real content. */}
//         <p className="text-sm text-gray-300">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//           Praesent tristique consequat sapien a volutpat. Vivamus 
//           in sapien arcu. Cras sit amet ornare lectus, sed vulputate 
//           elit. Aenean dignissim dapibus nunc, nec vehicula lacus 
//           gravida at. 
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ObservationsBox;







// import React, { useState } from 'react';
// import { ForceGraph2D } from 'react-force-graph';

// const ObservationsBox = () => {
//   // Example data
//   const initialData = {
//     nodes: [
//       { id: 'Alpha', group: 1 },
//       { id: 'Beta', group: 1 },
//       { id: 'Gamma', group: 2 },
//       { id: 'Delta', group: 2 },
//       { id: 'Theta', group: 3 }
//     ],
//     links: [
//       { source: 'Alpha', target: 'Beta', label: 'Friends' },
//       { source: 'Alpha', target: 'Gamma', label: 'Co-worker' },
//       { source: 'Beta', target: 'Delta', label: 'Sibling' },
//       { source: 'Delta', target: 'Theta', label: 'Business Partner' }
//     ]
//   };

//   const [graphData] = useState(initialData);

//   // Example click handler
//   const handleNodeClick = (node) => {
//     console.log('Clicked node:', node);
//   };

//   return (
//     <div>
//       {/* Heading above the box */}
//       <h2 className="text-3xl font-bold mb-4 text-white">
//         Observations
//       </h2>

//       {/* The container "box" with a dark background */}
//       <div className="bg-gray-800/50 p-6 rounded-lg">
//         <div className="flex items-center mb-4">
//           {/* Example icon (optional) */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="mr-3 h-6 w-6 text-white"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <circle cx="12" cy="12" r="10" />
//             <line x1="12" y1="16" x2="12" y2="12" />
//             <line x1="12" y1="8" x2="12" y2="8" />
//           </svg>
//           <h3 className="text-xl font-semibold text-white">
//             Interactive Knowledge Graph
//           </h3>
//         </div>

//         <p className="text-sm text-gray-300 mb-4">
//           Pan, zoom, and drag nodes. Click any node to see details 
//           in the console or potentially expand/collapse related data.
//         </p>

//         {/*
//           1. A relatively-positioned parent div (so the canvas
//              can be absolutely positioned inside it).
//           2. A fixed height, e.g. 16rem on mobile (h-64),
//              24rem (h-96) on md+ screens. 
//           3. overflow-hidden ensures the graph can’t spill outside.
//         */}
//         <div className="relative w-full h-64 md:h-96 overflow-hidden">
//           <ForceGraph2D
//             // Absolutely position the ForceGraph canvas
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%'
//             }}
//             graphData={graphData}
//             nodeLabel={(node) => node.id}
//             linkLabel={(link) => link.label}
//             linkDirectionalArrowLength={5}
//             linkDirectionalArrowRelPos={1}
//             enableNodeDrag
//             enableZoomPanInteraction
//             onNodeClick={handleNodeClick}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ObservationsBox;


















// import React, { useState } from 'react';
// import { ForceGraph2D } from 'react-force-graph';

// const ObservationsBox = () => {
//   // Example data
//   const initialData = {
//     nodes: [
//       { id: 'Alpha', group: 1 },
//       { id: 'Beta', group: 1 },
//       { id: 'Gamma', group: 2 },
//       { id: 'Delta', group: 2 },
//       { id: 'Theta', group: 3 }
//     ],
//     links: [
//       { source: 'Alpha', target: 'Beta', label: 'Friends' },
//       { source: 'Alpha', target: 'Gamma', label: 'Co-worker' },
//       { source: 'Beta', target: 'Delta', label: 'Sibling' },
//       { source: 'Delta', target: 'Theta', label: 'Business Partner' }
//     ]
//   };

//   // Keep graph data in state so we can add child nodes on click
//   const [graphData, setGraphData] = useState(initialData);

//   // Track which nodes have already been expanded (so we only expand once)
//   const [expandedNodes, setExpandedNodes] = useState(new Set());

//   // Clicking a node => if not expanded yet, add one layer of children
//   const handleNodeClick = (node) => {
//     // If already expanded, do nothing
//     if (expandedNodes.has(node.id)) return;

//     // Add a new child node, linking from the clicked node
//     const newId = `child-of-${node.id}`;
//     setGraphData((prev) => ({
//       ...prev,
//       nodes: [...prev.nodes, { id: newId, group: 99 }],
//       links: [
//         ...prev.links,
//         { source: node.id, target: newId, label: 'Child' }
//       ]
//     }));

//     // Mark this node as expanded
//     setExpandedNodes((prev) => {
//       const copy = new Set(prev);
//       copy.add(node.id);
//       return copy;
//     });
//   };

//   return (
//     <div className="mx-auto px-4 max-w-7xl">
//       {/* Large heading above the box */}
//       <h2 className="text-3xl font-bold mb-4 text-white">
//         Observations
//       </h2>

//       {/* The container "box" with a dark translucent background + consistent spacing */}
//       <div className="bg-gray-800/50 p-6 rounded-lg">
//         <div className="flex items-center mb-4">
//           {/* Example icon (optional) */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="mr-3 h-6 w-6 text-white"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <circle cx="12" cy="12" r="10" />
//             <line x1="12" y1="16" x2="12" y2="12" />
//             <line x1="12" y1="8" x2="12" y2="8" />
//           </svg>
//           <h3 className="text-xl font-semibold text-white">
//             Interactive Knowledge Graph
//           </h3>
//         </div>

//         <p className="text-sm text-gray-300 mb-4">
//           Pan, zoom, and drag nodes. Click any node to expand one layer 
//           of child nodes. Edges are now thicker and light blue.
//         </p>

//         {/*
//           Use a relatively-positioned parent so the ForceGraph canvas
//           can be absolutely sized to fill it.
//           h-[48rem] => ~768px tall, creating a more "square" space.
//         */}
//         <div className="relative w-full h-[48rem] overflow-hidden">
//           <ForceGraph2D
//             // Absolutely position the graph within its parent
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%'
//             }}
//             graphData={graphData}
//             // Show node IDs + link labels
//             nodeLabel={(node) => node.id}
//             linkLabel={(link) => link.label}
//             // Thicker, light-blue edges
//             linkWidth={() => 3}
//             linkColor={() => '#7dd3fc'} // a Tailwind "light blue" (#7dd3fc)
//             // Show small directional arrow
//             linkDirectionalArrowLength={5}
//             linkDirectionalArrowRelPos={1}
//             // Interactivity
//             enableNodeDrag
//             enableZoomPanInteraction
//             onNodeClick={handleNodeClick}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ObservationsBox;



















// import React, { useState, useRef } from 'react';
// import { ForceGraph2D } from 'react-force-graph';

// const ObservationsBox = () => {
//   // Example data
//   const initialData = {
//     nodes: [
//       { id: 'Alpha', group: 1 },
//       { id: 'Beta', group: 1 },
//       { id: 'Gamma', group: 2 },
//       { id: 'Delta', group: 2 },
//       { id: 'Theta', group: 3 }
//     ],
//     links: [
//       { source: 'Alpha', target: 'Beta', label: 'Friends' },
//       { source: 'Alpha', target: 'Gamma', label: 'Co-worker' },
//       { source: 'Beta', target: 'Delta', label: 'Sibling' },
//       { source: 'Delta', target: 'Theta', label: 'Business Partner' }
//     ]
//   };

//   const [graphData, setGraphData] = useState(initialData);

//   // Keep track of whether we've already centred on Beta
//   const [hasPositionedBeta, setHasPositionedBeta] = useState(false);

//   // Reference to the ForceGraph2D instance
//   const fgRef = useRef();

//   // Expand child node on click (one layer)
//   const [expandedNodes, setExpandedNodes] = useState(new Set());
//   const handleNodeClick = (node) => {
//     // If node is already expanded or not in the data, do nothing
//     if (expandedNodes.has(node.id)) return;

//     // Add a child node
//     const newId = `child-of-${node.id}`;
//     setGraphData((prev) => ({
//       ...prev,
//       nodes: [...prev.nodes, { id: newId, group: 99 }],
//       links: [...prev.links, { source: node.id, target: newId, label: 'Child' }]
//     }));

//     // Mark as expanded
//     setExpandedNodes((prevSet) => {
//       const copy = new Set(prevSet);
//       copy.add(node.id);
//       return copy;
//     });
//   };

//   return (
//     <div className="mx-auto px-4 max-w-7xl">
//       <h2 className="text-3xl font-bold mb-4 text-white">
//         Observations
//       </h2>

//       <div className="bg-gray-800/50 p-6 rounded-lg">
//         <div className="flex items-center mb-4">
//           {/* Icon (optional) */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="mr-3 h-6 w-6 text-white"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <circle cx="12" cy="12" r="10" />
//             <line x1="12" y1="16" x2="12" y2="12" />
//             <line x1="12" y1="8" x2="12" y2="8" />
//           </svg>
//           <h3 className="text-xl font-semibold text-white">
//             Interactive Knowledge Graph
//           </h3>
//         </div>

//         <p className="text-sm text-gray-300 mb-4">
//           Pan, zoom, and drag nodes. We’ll auto-centre on “Beta” once the layout stabilises. 
//           Click any node to expand one layer of child nodes.
//         </p>

//         <div className="relative w-full h-[48rem] overflow-hidden">
//           <ForceGraph2D
//             ref={fgRef}
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%'
//             }}
//             graphData={graphData}
//             // Thicker, light-blue edges
//             linkWidth={() => 3}
//             linkColor={() => '#7dd3fc'}
//             linkDirectionalArrowLength={5}
//             linkDirectionalArrowRelPos={1}
//             nodeLabel={(node) => node.id}
//             linkLabel={(link) => link.label}
//             onNodeClick={handleNodeClick}
//             // Wait for the layout to stop => centre & zoom on "Beta"
//             onEngineStop={() => {
//               if (!hasPositionedBeta && fgRef.current) {
//                 // Find the Beta node
//                 const betaNode = graphData.nodes.find(
//                   (node) => node.id === 'Beta'
//                 );
//                 if (betaNode && betaNode.x && betaNode.y) {
//                   // Centre on Beta => move Beta to middle
//                   fgRef.current.centerAt(betaNode.x, betaNode.y, 500);
//                   // Zoom factor: adjust 2 => bigger or smaller
//                   fgRef.current.zoom(2, 500);
//                   setHasPositionedBeta(true);
//                 }
//               }
//             }}
//             enableNodeDrag
//             enableZoomPanInteraction
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ObservationsBox;




import React, { useState, useRef, useEffect } from 'react';
import { ForceGraph2D } from 'react-force-graph';

const ObservationsBox = () => {
  // We define manual positions for each node, so "Beta" is at (0,0).
  const initialData = {
    nodes: [
      { id: 'Beta', group: 1, x: 0, y: 0 },      // Center
      { id: 'Alpha', group: 1, x: -100, y: 0 },
      { id: 'Gamma', group: 2, x: 0,    y: 100 },
      { id: 'Delta', group: 2, x: 100,  y: 50 },
      { id: 'Theta', group: 3, x: 200,  y: 0 }
    ],
    links: [
      { source: 'Alpha', target: 'Beta', label: 'Friends' },
      { source: 'Alpha', target: 'Gamma', label: 'Co-worker' },
      { source: 'Beta',  target: 'Delta', label: 'Sibling' },
      { source: 'Delta', target: 'Theta', label: 'Business Partner' }
    ]
  };

  const [graphData, setGraphData] = useState(initialData);
  const [expandedNodes, setExpandedNodes] = useState(new Set());

  // Reference to the ForceGraph component, so we can zoom/centre.
  const fgRef = useRef();

  // Once the component mounts, centre on (0,0) and zoom in.
  useEffect(() => {
    if (fgRef.current) {
      // Put (0,0) in the middle of the view:
      fgRef.current.centerAt(100, 130, 0);
      // Zoom factor => 2.5. The third param is ms to animate. 0 => no animation.
      fgRef.current.zoom(4, 0);
    }
  }, []);

  // Clicking a node => add a child node once.
  const handleNodeClick = (node) => {
    if (expandedNodes.has(node.id)) return; // Only expand once per node

    // We'll place the child near the clicked node. For variety, random offset.
    const childId = `child-of-${node.id}`;
    const offsetX = (Math.random() - 0.5) * 50;
    const offsetY = (Math.random() - 0.5) * 50;

    setGraphData((prev) => ({
      ...prev,
      nodes: [
        ...prev.nodes,
        {
          id: childId,
          group: 99,
          x: (node.x ?? 0) + offsetX,
          y: (node.y ?? 0) + offsetY
        }
      ],
      links: [
        ...prev.links,
        { source: node.id, target: childId, label: 'Child' }
      ]
    }));

    setExpandedNodes((prev) => {
      const copy = new Set(prev);
      copy.add(node.id);
      return copy;
    });
  };

  return (
    <div className="mx-auto px-4 max-w-7xl">
      {/* Large heading above the box */}
      <h2 className="text-3xl font-bold mb-4 text-white">
        Observations
      </h2>

      {/* The "box" with a dark translucent background, consistent spacing, etc. */}
      <div className="bg-gray-800/50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          {/* Example icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3 h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="8" />
          </svg>
          <h3 className="text-xl font-semibold text-white">
            Interactive Knowledge Graph
          </h3>
        </div>

        <p className="text-sm text-gray-300 mb-4">
          Pan, zoom, drag nodes freely. 
          Click a node to expand a child once.
        </p>

        {/* A tall container for the graph => ~768px high */}
        <div className="relative w-full h-[48rem] overflow-hidden">
          <ForceGraph2D
            ref={fgRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            graphData={graphData}
            // Force engine "none" => no auto layout, we rely on our manual coords
            forceEngine="none"
            // Thicker, light-blue edges
            linkWidth={3}
            linkColor={() => '#7dd3fc'}
            linkDirectionalArrowLength={5}
            linkDirectionalArrowRelPos={1}
            nodeLabel={(node) => node.id}
            linkLabel={(link) => link.label}
            onNodeClick={handleNodeClick}
            // We can still drag nodes around if we like
            enableNodeDrag
            enableZoomPanInteraction
          />
        </div>
      </div>
    </div>
  );
};

export default ObservationsBox;





