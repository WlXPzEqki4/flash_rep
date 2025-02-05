// import React, { useEffect, useState } from 'react';
// import { AlertTriangle } from 'lucide-react';

// // Data structure for our network
// const initialNodes = [
//   { 
//     id: 1, 
//     type: 'suspicious', 
//     label: 'Afaq Al-Mustqbal Transport LLC',
//     subtext: 'Front Company',
//     details: 'Located in Deira, Dubai. Primary orchestrator of the cash movement operation.',
//     x: 100, 
//     y: 100 
//   },
//   { 
//     id: 2, 
//     type: 'legitimate', 
//     label: 'Wathba Al Jadeeda Transport LLC',
//     subtext: 'Subcontractor',
//     details: 'Legitimate transport company used as subcontractor for physical movement.',
//     x: 100, 
//     y: 250 
//   },
//   { 
//     id: 3, 
//     type: 'location', 
//     label: 'Deira',
//     details: 'Starting point of the operation in Dubai, UAE.',
//     x: 350, 
//     y: 175 
//   },
//   { 
//     id: 4, 
//     type: 'location', 
//     label: 'Jebel Ali Port',
//     details: 'Major port in Dubai. Transfer point from land to sea transport.',
//     x: 500, 
//     y: 175 
//   },
//   { 
//     id: 5, 
//     type: 'location', 
//     label: 'Umm Qasr Port',
//     details: 'Iraqi port in Basra. Entry point for the cash shipment.',
//     x: 650, 
//     y: 175 
//   },
//   { 
//     id: 6, 
//     type: 'suspicious', 
//     label: 'Aswar Exchange Company',
//     subtext: 'Final Destination',
//     details: 'Exchange company in Basra, Iraq. Final recipient of the cash shipment.',
//     x: 800, 
//     y: 250 
//   },
//   { 
//     id: 7, 
//     type: 'asset', 
//     label: 'USD 11M',
//     subtext: 'Cash',
//     details: 'Cash shipment tracked through the entire movement.',
//     x: 350, 
//     y: 400 
//   }
// ];

// const edges = [
//   { from: 1, to: 3, label: 'orchestrates' },
//   { from: 2, to: 3, label: 'provides transport' },
//   { from: 3, to: 4, label: 'HGV' },
//   { from: 4, to: 5, label: 'Iraqi vessel' },
//   { from: 5, to: 6, label: 'transfer' },
//   { from: 7, to: 4, label: 'cash movement' }
// ];

// const InteractiveNetwork = () => {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [dragging, setDragging] = useState(null);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (e, nodeId) => {
//     const node = nodes.find(n => n.id === nodeId);
//     setDragging(nodeId);
//     setDragOffset({
//       x: e.clientX - node.x,
//       y: e.clientY - node.y
//     });
//   };

//   const handleMouseMove = (e) => {
//     if (dragging !== null) {
//       setNodes(nodes.map(node => {
//         if (node.id === dragging) {
//           return {
//             ...node,
//             x: e.clientX - dragOffset.x,
//             y: e.clientY - dragOffset.y
//           };
//         }
//         return node;
//       }));
//     }
//   };

//   const handleMouseUp = () => {
//     setDragging(null);
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseup', handleMouseUp);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [dragging, dragOffset]);

//   const getNodeColor = (type) => {
//     switch (type) {
//       case 'suspicious': return 'fill-[#ffcccc]';
//       case 'legitimate': return 'fill-[#cce5ff]';
//       case 'location': return 'fill-[#d4edda]';
//       case 'asset': return 'fill-[#FFD700]';
//       default: return 'fill-gray-200';
//     }
//   };

//   const renderEdge = (edge) => {
//     const fromNode = nodes.find(n => n.id === edge.from);
//     const toNode = nodes.find(n => n.id === edge.to);
    
//     if (!fromNode || !toNode) return null;

//     return (
//       <g key={`${edge.from}-${edge.to}`} className="transition-all duration-200 ease-in-out">
//         <line
//           x1={fromNode.x}
//           y1={fromNode.y}
//           x2={toNode.x}
//           y2={toNode.y}
//           stroke="#666"
//           strokeWidth="2"
//           markerEnd="url(#arrowhead)"
//         />
//         <text
//           x={(fromNode.x + toNode.x) / 2}
//           y={(fromNode.y + toNode.y) / 2 - 10}
//           textAnchor="middle"
//           className="text-xs fill-gray-600"
//         >
//           {edge.label}
//         </text>
//       </g>
//     );
//   };

//   return (
//     <div className="relative w-full h-96 bg-white">
//       <svg className="w-full h-full">
//         <defs>
//           <marker
//             id="arrowhead"
//             markerWidth="10"
//             markerHeight="7"
//             refX="9"
//             refY="3.5"
//             orient="auto"
//           >
//             <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
//           </marker>
//         </defs>

//         {/* Render edges */}
//         {edges.map(renderEdge)}

//         {/* Render nodes */}
//         {nodes.map((node) => (
//           <g
//             key={node.id}
//             transform={`translate(${node.x},${node.y})`}
//             onMouseDown={(e) => handleMouseDown(e, node.id)}
//             onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
//             className="cursor-pointer transition-transform duration-200 ease-in-out"
//           >
//             {node.type === 'location' ? (
//               <ellipse
//                 rx="70"
//                 ry="40"
//                 style={{fill: node.type === 'location' ? '#d4edda' : ''}}
//                 className="stroke-gray-400 transition-colors duration-200"
//               />
//             ) : node.type === 'asset' ? (
//               <polygon
//                 points="-30,-50 0,-100 30,-50 0,0"
//                 style={{fill: '#FFD700'}}
//                 className="transition-colors duration-200"
//               />
//             ) : (
//               <rect
//                 x="-90"
//                 y="-30"
//                 width="180"
//                 height="60"
//                 rx="5"
//                 style={{fill: node.type === 'suspicious' ? '#ffcccc' : '#cce5ff'}}
//                 className="stroke-gray-400 transition-colors duration-200"
//               />
//             )}
//             <text
//               textAnchor="middle"
//               className="text-sm font-medium"
//             >
//               {node.label}
//             </text>
//             {node.subtext && (
//               <text
//                 y="15"
//                 textAnchor="middle"
//                 className="text-xs fill-gray-600"
//               >
//                 ({node.subtext})
//               </text>
//             )}
//           </g>
//         ))}
//       </svg>

//       {/* Details panel */}
//       {selectedNode !== null && (
//         <div className="absolute top-4 right-4 w-64 p-4 bg-white shadow-lg rounded-lg transition-opacity duration-200">
//           <div className="flex items-start gap-2">
//             {nodes.find(n => n.id === selectedNode).type === 'suspicious' && (
//               <AlertTriangle className="w-5 h-5 text-red-500" />
//             )}
//             <div>
//               <h3 className="font-bold">{nodes.find(n => n.id === selectedNode).label}</h3>
//               <p className="text-sm text-gray-600 mt-2">
//                 {nodes.find(n => n.id === selectedNode).details}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Legend */}
//       <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
//         <div className="flex flex-col gap-2">
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4" style={{backgroundColor: '#ffcccc'}}></div>
//             <span className="text-sm">Suspicious Entity</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4" style={{backgroundColor: '#cce5ff'}}></div>
//             <span className="text-sm">Legitimate Entity</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4" style={{backgroundColor: '#d4edda'}}></div>
//             <span className="text-sm">Location</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4" style={{backgroundColor: '#FFD700'}}></div>
//             <span className="text-sm">Asset</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveNetwork;











// import React, { useEffect, useState } from 'react';
// import { AlertTriangle } from 'lucide-react';

// // Data structure for our network
// const initialNodes = [
//   { 
//     id: 1, 
//     type: 'suspicious', 
//     label: 'Afaq Al-Mustqbal Transport LLC',
//     subtext: 'Front Company',
//     details: 'Located in Deira, Dubai. Primary orchestrator of the cash movement operation.',
//     x: 100, 
//     y: 100 
//   },
//   { 
//     id: 2, 
//     type: 'legitimate', 
//     label: 'Wathba Al Jadeeda Transport LLC',
//     subtext: 'Subcontractor',
//     details: 'Legitimate transport company used as subcontractor for physical movement.',
//     x: 100, 
//     y: 250 
//   },
//   { 
//     id: 3, 
//     type: 'location', 
//     label: 'Deira',
//     details: 'Starting point of the operation in Dubai, UAE.',
//     x: 350, 
//     y: 175 
//   },
//   { 
//     id: 4, 
//     type: 'location', 
//     label: 'Jebel Ali Port',
//     details: 'Major port in Dubai. Transfer point from land to sea transport.',
//     x: 500, 
//     y: 175 
//   },
//   { 
//     id: 5, 
//     type: 'location', 
//     label: 'Umm Qasr Port',
//     details: 'Iraqi port in Basra. Entry point for the cash shipment.',
//     x: 650, 
//     y: 175 
//   },
//   { 
//     id: 6, 
//     type: 'suspicious', 
//     label: 'Aswar Exchange Company',
//     subtext: 'Final Destination',
//     details: 'Exchange company in Basra, Iraq. Final recipient of the cash shipment.',
//     x: 800, 
//     y: 250 
//   },
//   { 
//     id: 7, 
//     type: 'asset', 
//     label: 'USD 11M',
//     subtext: 'Cash',
//     details: 'Cash shipment tracked through the entire movement.',
//     x: 350, 
//     y: 400 
//   }
// ];

// const edges = [
//   { from: 1, to: 3, label: 'orchestrates' },
//   { from: 2, to: 3, label: 'provides transport' },
//   { from: 3, to: 4, label: 'HGV' },
//   { from: 4, to: 5, label: 'Iraqi vessel' },
//   { from: 5, to: 6, label: 'transfer' },
//   { from: 7, to: 4, label: 'cash movement' }
// ];

// const InteractiveNetwork = () => {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [dragging, setDragging] = useState(null);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (e, nodeId) => {
//     const node = nodes.find(n => n.id === nodeId);
//     setDragging(nodeId);
//     setDragOffset({
//       x: e.clientX - node.x,
//       y: e.clientY - node.y
//     });
//   };

//   const handleMouseMove = (e) => {
//     if (dragging !== null) {
//       setNodes(nodes.map(node => {
//         if (node.id === dragging) {
//           return {
//             ...node,
//             x: e.clientX - dragOffset.x,
//             y: e.clientY - dragOffset.y
//           };
//         }
//         return node;
//       }));
//     }
//   };

//   const handleMouseUp = () => {
//     setDragging(null);
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseup', handleMouseUp);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [dragging, dragOffset]);

//   const renderEdge = (edge) => {
//     const fromNode = nodes.find(n => n.id === edge.from);
//     const toNode = nodes.find(n => n.id === edge.to);
    
//     if (!fromNode || !toNode) return null;

//     return (
//       <g key={`${edge.from}-${edge.to}`} className="transition-all duration-200 ease-in-out">
//         <line
//           x1={fromNode.x}
//           y1={fromNode.y}
//           x2={toNode.x}
//           y2={toNode.y}
//           stroke="#666"
//           strokeWidth="2"
//           markerEnd="url(#arrowhead)"
//         />
//         <text
//           x={(fromNode.x + toNode.x) / 2}
//           y={(fromNode.y + toNode.y) / 2 - 10}
//           textAnchor="middle"
//           className="text-xs fill-gray-600"
//         >
//           {edge.label}
//         </text>
//       </g>
//     );
//   };

//   return (
//     <div className="mx-auto px-4 max-w-7xl">
//       {/* Large heading (similar to the “Observations” box) */}
//       <h2 className="text-3xl font-bold mb-4 text-white">
//         Observations
//       </h2>

//       {/* Outer box with dark translucent background */}
//       <div className="bg-gray-800/50 p-6 rounded-lg">
//         {/* Title row with icon + subheading */}
//         <div className="flex items-center mb-4">
//           {/* Example SVG icon; feel free to replace with another if you prefer */}
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
//             Interactive Network Graph
//           </h3>
//         </div>

//         {/* Optional instructions or note, matching the smaller text style */}
//         <p className="text-sm text-gray-300 mb-4">
//           Drag nodes to reposition, click a node for details, 
//           and zoom or pan freely within the graph.
//         </p>

//         {/* Graph container – increased height to match the style of the first example */}
//         <div className="relative w-full h-[48rem] overflow-hidden bg-gray-900">
//           <svg className="w-full h-full">
//             <defs>
//               <marker
//                 id="arrowhead"
//                 markerWidth="10"
//                 markerHeight="7"
//                 refX="9"
//                 refY="3.5"
//                 orient="auto"
//               >
//                 <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
//               </marker>
//             </defs>

//             {/* Render edges */}
//             {edges.map(renderEdge)}

//             {/* Render nodes */}
//             {nodes.map((node) => {
//               const isSelected = selectedNode === node.id;

//               return (
//                 <g
//                   key={node.id}
//                   transform={`translate(${node.x},${node.y})`}
//                   onMouseDown={(e) => handleMouseDown(e, node.id)}
//                   onClick={() => setSelectedNode(isSelected ? null : node.id)}
//                   className="cursor-pointer transition-transform duration-200 ease-in-out"
//                 >
//                   {node.type === 'location' ? (
//                     <ellipse
//                       rx="70"
//                       ry="40"
//                       style={{ fill: '#d4edda' }}
//                       className="stroke-gray-400 transition-colors duration-200"
//                     />
//                   ) : node.type === 'asset' ? (
//                     <polygon
//                       points="-30,-50 0,-100 30,-50 0,0"
//                       style={{ fill: '#FFD700' }}
//                       className="transition-colors duration-200"
//                     />
//                   ) : (
//                     <rect
//                       x="-90"
//                       y="-30"
//                       width="180"
//                       height="60"
//                       rx="5"
//                       style={{
//                         fill: node.type === 'suspicious' ? '#ffcccc' : '#cce5ff'
//                       }}
//                       className="stroke-gray-400 transition-colors duration-200"
//                     />
//                   )}
//                   <text
//                     textAnchor="middle"
//                     className="text-sm font-medium"
//                   >
//                     {node.label}
//                   </text>
//                   {node.subtext && (
//                     <text
//                       y="15"
//                       textAnchor="middle"
//                       className="text-xs fill-gray-600"
//                     >
//                       ({node.subtext})
//                     </text>
//                   )}
//                 </g>
//               );
//             })}
//           </svg>

//           {/* Details panel – remains white for contrast */}
//           {selectedNode !== null && (
//             <div className="absolute top-4 right-4 w-64 p-4 bg-white shadow-lg rounded-lg transition-opacity duration-200">
//               <div className="flex items-start gap-2">
//                 {nodes.find(n => n.id === selectedNode).type === 'suspicious' && (
//                   <AlertTriangle className="w-5 h-5 text-red-500" />
//                 )}
//                 <div>
//                   <h3 className="font-bold">
//                     {nodes.find(n => n.id === selectedNode).label}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-2">
//                     {nodes.find(n => n.id === selectedNode).details}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Legend – also kept white for readability */}
//           <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#ffcccc'}}></div>
//                 <span className="text-sm">Suspicious Entity</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#cce5ff'}}></div>
//                 <span className="text-sm">Legitimate Entity</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#d4edda'}}></div>
//                 <span className="text-sm">Location</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#FFD700'}}></div>
//                 <span className="text-sm">Asset</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveNetwork;



















// import React, { useEffect, useState } from 'react';
// import { AlertTriangle } from 'lucide-react';

// // Data structure for our network
// const initialNodes = [
//   { 
//     id: 1, 
//     type: 'suspicious', 
//     label: 'Afaq Al-Mustqbal Transport LLC',
//     subtext: 'Front Company',
//     details: 'Located in Deira, Dubai. Primary orchestrator of the cash movement operation.',
//     x: 100, 
//     y: 100 
//   },
//   { 
//     id: 2, 
//     type: 'legitimate', 
//     label: 'Wathba Al Jadeeda Transport LLC',
//     subtext: 'Subcontractor',
//     details: 'Legitimate transport company used as subcontractor for physical movement.',
//     x: 100, 
//     y: 250 
//   },
//   { 
//     id: 3, 
//     type: 'location', 
//     label: 'Deira',
//     details: 'Starting point of the operation in Dubai, UAE.',
//     x: 350, 
//     y: 175 
//   },
//   { 
//     id: 4, 
//     type: 'location', 
//     label: 'Jebel Ali Port',
//     details: 'Major port in Dubai. Transfer point from land to sea transport.',
//     x: 500, 
//     y: 175 
//   },
//   { 
//     id: 5, 
//     type: 'location', 
//     label: 'Umm Qasr Port',
//     details: 'Iraqi port in Basra. Entry point for the cash shipment.',
//     x: 650, 
//     y: 175 
//   },
//   { 
//     id: 6, 
//     type: 'suspicious', 
//     label: 'Aswar Exchange Company',
//     subtext: 'Final Destination',
//     details: 'Exchange company in Basra, Iraq. Final recipient of the cash shipment.',
//     x: 800, 
//     y: 250 
//   },
//   { 
//     id: 7, 
//     type: 'asset', 
//     label: 'USD 11M',
//     subtext: 'Cash',
//     details: 'Cash shipment tracked through the entire movement.',
//     x: 350, 
//     y: 400 
//   }
// ];

// const edges = [
//   { from: 1, to: 3, label: 'orchestrates' },
//   { from: 2, to: 3, label: 'provides transport' },
//   { from: 3, to: 4, label: 'HGV' },
//   { from: 4, to: 5, label: 'Iraqi vessel' },
//   { from: 5, to: 6, label: 'transfer' },
//   { from: 7, to: 4, label: 'cash movement' }
// ];

// const InteractiveNetwork = () => {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [dragging, setDragging] = useState(null);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (e, nodeId) => {
//     const node = nodes.find(n => n.id === nodeId);
//     setDragging(nodeId);
//     setDragOffset({
//       x: e.clientX - node.x,
//       y: e.clientY - node.y
//     });
//   };

//   const handleMouseMove = (e) => {
//     if (dragging !== null) {
//       setNodes(nodes.map(node => {
//         if (node.id === dragging) {
//           return {
//             ...node,
//             x: e.clientX - dragOffset.x,
//             y: e.clientY - dragOffset.y
//           };
//         }
//         return node;
//       }));
//     }
//   };

//   const handleMouseUp = () => {
//     setDragging(null);
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseup', handleMouseUp);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [dragging, dragOffset]);

//   const renderEdge = (edge) => {
//     const fromNode = nodes.find(n => n.id === edge.from);
//     const toNode = nodes.find(n => n.id === edge.to);
    
//     if (!fromNode || !toNode) return null;

//     return (
//       <g key={`${edge.from}-${edge.to}`} className="transition-all duration-200 ease-in-out">
//         <line
//           x1={fromNode.x}
//           y1={fromNode.y}
//           x2={toNode.x}
//           y2={toNode.y}
//           stroke="#666"
//           strokeWidth="2"
//           markerEnd="url(#arrowhead)"
//         />
//         <text
//           x={(fromNode.x + toNode.x) / 2}
//           y={(fromNode.y + toNode.y) / 2 - 10}
//           textAnchor="middle"
//           className="text-xs fill-gray-600"
//         >
//           {edge.label}
//         </text>
//       </g>
//     );
//   };

//   return (
//     // <div className="mx-auto px-4 max-w-7xl">
//     <div className="mx-auto px-4 max-w-[90rem]">

//       {/* Large heading (similar to the “Observations” box) */}
//       <h2 className="text-3xl font-bold mb-4 text-white">
//         Inciting Event
//       </h2>


//       {/* Outer box with dark translucent background */}
//       <div className="bg-gray-800/50 p-6 rounded-lg">
//         {/* Title row with icon + subheading */}
//         <div className="flex items-center mb-4">
//           {/* Example SVG icon; feel free to replace with another if you prefer */}
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
//             Interactive Network Graph
//           </h3>
//         </div>

//         {/* Optional instructions or note, matching the smaller text style */}
//         <p className="text-sm text-gray-300 mb-4">
//           Drag nodes to reposition, click a node for details, 
//           and zoom or pan freely within the graph.
//         </p>

//         {/*
//           Graph container – currently has "bg-gray-900" which sets the dark grey background.
//           If you want to change it, simply change "bg-gray-900" below to something else.
//         */}
//         {/* <div className="relative w-full h-[48rem] overflow-hidden bg-gray-100"> */}
//         <div className="relative w-full h-[60rem] overflow-hidden bg-gray-100">
//           <svg className="w-full h-full">
//             <defs>
//               <marker
//                 id="arrowhead"
//                 markerWidth="10"
//                 markerHeight="7"
//                 refX="9"
//                 refY="3.5"
//                 orient="auto"
//               >
//                 <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
//               </marker>
//             </defs>

//             {/* We wrap all edges and nodes in one group with a translate offset 
//                 so the whole graph is shifted toward the centre. 
//                 Adjust translate(300,200) as needed. */}
//             <g transform="translate(300, 200)">
//               {/* Render edges */}
//               {edges.map(renderEdge)}

//               {/* Render nodes */}
//               {nodes.map((node) => {
//                 const isSelected = selectedNode === node.id;

//                 return (
//                   <g
//                     key={node.id}
//                     transform={`translate(${node.x},${node.y})`}
//                     onMouseDown={(e) => handleMouseDown(e, node.id)}
//                     onClick={() => setSelectedNode(isSelected ? null : node.id)}
//                     className="cursor-pointer transition-transform duration-200 ease-in-out"
//                   >
//                     {/* Location -> Ellipse, Asset -> Polygon, Suspicious/Legitimate -> Rect */}
//                     {node.type === 'location' ? (
//                       <ellipse
//                         rx="70"
//                         ry="40"
//                         style={{ fill: '#d4edda' }}
//                         className="stroke-gray-400 transition-colors duration-200"
//                       />
//                     ) : node.type === 'asset' ? (
//                       <polygon
//                         points="-30,-50 0,-100 30,-50 0,0"
//                         style={{ fill: '#FFD700' }}
//                         className="transition-colors duration-200"
//                       />
//                     ) : (
//                       <rect
//                         x="-90"
//                         y="-30"
//                         width="180"
//                         height="60"
//                         rx="5"
//                         style={{
//                           fill: node.type === 'suspicious' ? '#ffcccc' : '#cce5ff'
//                         }}
//                         className="stroke-gray-400 transition-colors duration-200"
//                       />
//                     )}
//                     <text
//                       textAnchor="middle"
//                       className="text-sm font-medium"
//                     >
//                       {node.label}
//                     </text>
//                     {node.subtext && (
//                       <text
//                         y="15"
//                         textAnchor="middle"
//                         className="text-xs fill-gray-600"
//                       >
//                         ({node.subtext})
//                       </text>
//                     )}
//                   </g>
//                 );
//               })}
//             </g>
//           </svg>

//           {/* Details panel – remains white for contrast */}
//           {selectedNode !== null && (
//             <div className="absolute top-4 right-4 w-64 p-4 bg-white shadow-lg rounded-lg transition-opacity duration-200">
//               <div className="flex items-start gap-2">
//                 {nodes.find(n => n.id === selectedNode).type === 'suspicious' && (
//                   <AlertTriangle className="w-5 h-5 text-red-500" />
//                 )}
//                 <div>
//                   <h3 className="font-bold">
//                     {nodes.find(n => n.id === selectedNode).label}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-2">
//                     {nodes.find(n => n.id === selectedNode).details}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Legend – also kept white for readability */}
//           <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#ffcccc'}}></div>
//                 <span className="text-sm">Suspicious Entity</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#cce5ff'}}></div>
//                 <span className="text-sm">Legitimate Entity</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#d4edda'}}></div>
//                 <span className="text-sm">Location</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#FFD700'}}></div>
//                 <span className="text-sm">Asset</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveNetwork;












// import React, { useEffect, useState } from 'react';
// import { AlertTriangle } from 'lucide-react';

// // ======================
// // 1) Updated data arrays
// // ======================
// const initialNodes = [
//   {
//     id: 'salman',
//     type: 'suspicious',
//     label: 'Salman Alwan Salim',
//     subtext: 'Iraqi Planner',
//     details: 'Key Iraqi planner behind the operation.',
//     x: 140,
//     y: 80
//   },
//   {
//     id: 'abu',
//     type: 'suspicious',
//     label: 'Abu Shaheen Al-Aithawi',
//     subtext: 'Iraqi Planner',
//     details: 'Another Iraqi planner for the scheme.',
//     x: 140,
//     y: 180
//   },
//   {
//     id: 'afaq',
//     type: 'suspicious',
//     label: 'Afaq Al-Mustqbal Transport LLC',
//     subtext: 'Front Company',
//     details: 'Speedex Center Bldg 18\n(25.2907078, 55.4011003)',
//     x: 140,
//     y: 340
//   },
//   {
//     id: 'usd',
//     type: 'asset',
//     label: 'USD 11M',
//     subtext: 'Cash',
//     details: 'Monetary value handled through the chain.',
//     x: 300,
//     y: 390
//   },
//   {
//     id: 'wathba',
//     type: 'legitimate',
//     label: 'Wathba Al Jadeeda Transport LLC',
//     subtext: 'Subcontractor - legitimate transport company',
//     details: 'Provides legitimate transport services.',
//     x: 500,
//     y: 340
//   },
//   {
//     id: 'deira',
//     type: 'location',
//     label: 'Deira',
//     subtext: 'Dubai',
//     details: 'District in Dubai, UAE.',
//     x: 700,
//     y: 340
//   },
//   {
//     id: 'jebelAli',
//     type: 'location',
//     label: 'Jebel Ali Port',
//     subtext: 'Dubai',
//     details: 'Major port in Dubai.',
//     x: 900,
//     y: 340
//   },
//   {
//     id: 'ummQasr',
//     type: 'location',
//     label: 'Umm Qasr Port',
//     subtext: 'Basra',
//     details: 'Iraqi port, entry for shipments.',
//     x: 1100,
//     y: 340
//   },
//   {
//     id: 'aswar',
//     type: 'suspicious',
//     label: 'Aswar Exchange Company',
//     subtext: 'Final Destination',
//     details: 'Basra Governorate\n(30.5023953, 47.8330645)',
//     x: 1340,
//     y: 340
//   }
// ];

// const edges = [
//   // planners => front company
//   { from: 'salman', to: 'afaq', label: 'plans' },
//   { from: 'abu',    to: 'afaq', label: 'plans' },
//   // front company => subcontractor
//   { from: 'afaq',   to: 'wathba', label: 'orchestrate' },
//   // subcontractor => deira
//   { from: 'wathba', to: 'deira', label: 'transport to' },
//   // deira => jebel ali
//   { from: 'deira',  to: 'jebelAli', label: 'HGV' },
//   // jebel ali => umm qasr
//   { from: 'jebelAli', to: 'ummQasr', label: '"Al-Rafidain"' },
//   // umm qasr => aswar
//   { from: 'ummQasr', to: 'aswar', label: 'transfer' },

//   // special "cash movement" edges in gold
//   {
//     from: 'afaq',
//     to: 'usd',
//     label: '', // or 'cash movement'
//     color: '#ffd700',
//     dashed: true,
//     markerEnd: 'yellowarrow'
//   },
//   {
//     from: 'usd',
//     to: 'wathba',
//     label: '', // or 'cash movement'
//     color: '#ffd700',
//     dashed: false,
//     markerEnd: 'yellowarrow'
//   }
// ];

// // ======================================
// // 2) The interactive React component
// // ======================================
// const InteractiveNetwork = () => {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [dragging, setDragging] = useState(null);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

//   // Start dragging on mousedown
//   const handleMouseDown = (e, nodeId) => {
//     e.stopPropagation(); // prevents triggering parent SVG handlers
//     const node = nodes.find(n => n.id === nodeId);
//     if (!node) return;
//     setDragging(nodeId);
//     // store offset so node doesn't jump to cursor top-left
//     setDragOffset({
//       x: e.clientX - (node.x || 0),
//       y: e.clientY - (node.y || 0)
//     });
//   };

//   // Move the dragged node
//   const handleMouseMove = (e) => {
//     if (dragging === null) return;
//     setNodes(prevNodes =>
//       prevNodes.map(node => {
//         if (node.id !== dragging) return node;
//         return {
//           ...node,
//           x: e.clientX - dragOffset.x,
//           y: e.clientY - dragOffset.y
//         };
//       })
//     );
//   };

//   // End drag on mouseup
//   const handleMouseUp = () => {
//     setDragging(null);
//   };

//   // Add global event listeners for mouse move/up
//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseup', handleMouseUp);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [dragging, dragOffset]);

//   // Custom edge rendering
//   const renderEdge = (edge) => {
//     const fromNode = nodes.find(n => n.id === edge.from);
//     const toNode   = nodes.find(n => n.id === edge.to);
//     if (!fromNode || !toNode) return null;

//     // Default line style
//     let strokeColor = '#666';
//     let strokeDash  = '';
//     let markerId    = 'arrowhead';

//     // If the edge has custom styling
//     if (edge.color) strokeColor = edge.color;
//     if (edge.dashed) strokeDash = '5,5';
//     if (edge.markerEnd === 'yellowarrow') markerId = 'yellowarrow';

//     return (
//       <g key={`${edge.from}-${edge.to}`} className="transition-all duration-200 ease-in-out">
//         <line
//           x1={fromNode.x}
//           y1={fromNode.y}
//           x2={toNode.x}
//           y2={toNode.y}
//           stroke={strokeColor}
//           strokeWidth="2"
//           strokeDasharray={strokeDash}
//           markerEnd={`url(#${markerId})`}
//         />
//         {edge.label && (
//           <text
//             x={(fromNode.x + toNode.x) / 2}
//             y={(fromNode.y + toNode.y) / 2 - 10}
//             textAnchor="middle"
//             className="text-xs fill-gray-600"
//           >
//             {edge.label}
//           </text>
//         )}
//       </g>
//     );
//   };

//   return (
//     <div className="mx-auto px-4 max-w-[90rem]">
//       {/* Large heading */}
//       <h2 className="text-3xl font-bold mb-4 text-white">
//         Inciting Event
//       </h2>

//       {/* Outer box with dark translucent background */}
//       <div className="bg-gray-800/50 p-6 rounded-lg">
//         {/* Title row with icon + subheading */}
//         <div className="flex items-center mb-4">
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
//             Interactive Network Graph
//           </h3>
//         </div>

//         {/* Optional instructions */}
//         <p className="text-sm text-gray-300 mb-4">
//           Drag nodes to reposition, click a node for details,
//           and zoom or pan freely within the graph.
//         </p>

//         {/* Graph container */}
//         <div className="relative w-full h-[60rem] overflow-hidden bg-gray-100">
//           <svg className="w-full h-full">
//             <defs>
//               {/* Default grey arrow */}
//               <marker
//                 id="arrowhead"
//                 markerWidth="10"
//                 markerHeight="7"
//                 refX="9"
//                 refY="3.5"
//                 orient="auto"
//               >
//                 <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
//               </marker>

//               {/* Yellow arrow for special "cash movement" lines */}
//               <marker
//                 id="yellowarrow"
//                 markerWidth="10"
//                 markerHeight="7"
//                 refX="9"
//                 refY="3.5"
//                 orient="auto"
//               >
//                 <polygon points="0 0, 10 3.5, 0 7" fill="#ffd700" />
//               </marker>
//             </defs>

//             {/* Edges */}
//             {edges.map(renderEdge)}

//             {/* Nodes */}
//             {nodes.map((node) => {
//               const isSelected = selectedNode === node.id;
//               // On click => toggle selected node
//               const handleClick = (e) => {
//                 e.stopPropagation();
//                 setSelectedNode(isSelected ? null : node.id);
//               };

//               return (
//                 <g
//                   key={node.id}
//                   transform={`translate(${node.x},${node.y})`}
//                   onMouseDown={(e) => handleMouseDown(e, node.id)}
//                   onClick={handleClick}
//                   className="cursor-pointer transition-transform duration-200 ease-in-out"
//                 >
//                   {node.type === 'location' ? (
//                     <ellipse
//                       rx="70"
//                       ry="40"
//                       style={{ fill: '#d4edda' }}
//                       className="stroke-gray-400 transition-colors duration-200"
//                     />
//                   ) : node.type === 'asset' ? (
//                     <polygon
//                       points="-30,-50 0,-100 30,-50 0,0"
//                       style={{ fill: '#FFD700' }}
//                       className="transition-colors duration-200"
//                     />
//                   ) : (
//                     // suspicious or legitimate => rect
//                     <rect
//                       x="-90"
//                       y="-30"
//                       width="180"
//                       height="60"
//                       rx="5"
//                       style={{
//                         fill: node.type === 'suspicious' ? '#ffcccc' : '#cce5ff'
//                       }}
//                       className="stroke-gray-400 transition-colors duration-200"
//                     />
//                   )}

//                   {/* Label */}
//                   <text
//                     textAnchor="middle"
//                     className="text-sm font-medium"
//                   >
//                     {node.label}
//                   </text>

//                   {/* Subtext (optional) */}
//                   {node.subtext && (
//                     <text
//                       y="15"
//                       textAnchor="middle"
//                       className="text-xs fill-gray-600"
//                     >
//                       ({node.subtext})
//                     </text>
//                   )}
//                 </g>
//               );
//             })}
//           </svg>

//           {/* Details panel: show only if a node is selected */}
//           {selectedNode !== null && (
//             <div className="absolute top-4 right-4 w-64 p-4 bg-white shadow-lg rounded-lg transition-opacity duration-200">
//               <div className="flex items-start gap-2">
//                 {/* If suspicious, show red alert icon */}
//                 {nodes.find(n => n.id === selectedNode)?.type === 'suspicious' && (
//                   <AlertTriangle className="w-5 h-5 text-red-500" />
//                 )}
//                 <div>
//                   <h3 className="font-bold">
//                     {nodes.find(n => n.id === selectedNode)?.label}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">
//                     {nodes.find(n => n.id === selectedNode)?.details}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Tailwind-based Legend (optional).
//               This duplicates the text in your new static legend. */}
//           <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#ffcccc'}}></div>
//                 <span className="text-sm">Suspicious Entity</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#cce5ff'}}></div>
//                 <span className="text-sm">Legitimate Entity</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#d4edda'}}></div>
//                 <span className="text-sm">Location</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4" style={{backgroundColor: '#FFD700'}}></div>
//                 <span className="text-sm">Asset</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveNetwork;








// import React, { useEffect, useState } from 'react';
// import { AlertTriangle } from 'lucide-react';

// // ======================================
// // 1) Data for the interactive network
// // ======================================
// const initialNodes = [
//   { 
//     id: 1, 
//     type: 'suspicious', 
//     label: 'Afaq Al-Mustqbal Transport LLC',
//     subtext: 'Front Company',
//     details: 'Located in Deira, Dubai. Primary orchestrator of the cash movement operation.',
//     x: 100, 
//     y: 100 
//   },
//   { 
//     id: 2, 
//     type: 'legitimate', 
//     label: 'Wathba Al Jadeeda Transport LLC',
//     subtext: 'Subcontractor',
//     details: 'Legitimate transport company used as subcontractor for physical movement.',
//     x: 100, 
//     y: 250 
//   },
//   { 
//     id: 3, 
//     type: 'location', 
//     label: 'Deira',
//     details: 'Starting point of the operation in Dubai, UAE.',
//     x: 350, 
//     y: 175 
//   },
//   { 
//     id: 4, 
//     type: 'location', 
//     label: 'Jebel Ali Port',
//     details: 'Major port in Dubai. Transfer point from land to sea transport.',
//     x: 500, 
//     y: 175 
//   },
//   { 
//     id: 5, 
//     type: 'location', 
//     label: 'Umm Qasr Port',
//     details: 'Iraqi port in Basra. Entry point for the cash shipment.',
//     x: 650, 
//     y: 175 
//   },
//   { 
//     id: 6, 
//     type: 'suspicious', 
//     label: 'Aswar Exchange Company',
//     subtext: 'Final Destination',
//     details: 'Exchange company in Basra, Iraq. Final recipient of the cash shipment.',
//     x: 800, 
//     y: 250 
//   },
//   { 
//     id: 7, 
//     type: 'asset', 
//     label: 'USD 11M',
//     subtext: 'Cash',
//     details: 'Cash shipment tracked through the entire movement.',
//     x: 350, 
//     y: 400 
//   }
// ];

// const edges = [
//   { from: 1, to: 3, label: 'orchestrates' },
//   { from: 2, to: 3, label: 'provides transport' },
//   { from: 3, to: 4, label: 'HGV' },
//   { from: 4, to: 5, label: 'Iraqi vessel' },
//   { from: 5, to: 6, label: 'transfer' },
//   { from: 7, to: 4, label: 'cash movement' }
// ];

// // ======================================
// // 2) Data for the new right-side panel
// // ======================================
// const rightPanelData = [
//   {
//     title: 'Box One',
//     content: 'Placeholder text for Box One. You can edit this later.'
//   },
//   {
//     title: 'Box Two',
//     content: 'Placeholder text for Box Two. Lorem ipsum...'
//   },
//   {
//     title: 'Box Three',
//     content: 'Placeholder text for Box Three. Lorem ipsum...'
//   },
//   {
//     title: 'Box Four',
//     content: 'Placeholder text for Box Four. Lorem ipsum...'
//   },
//   {
//     title: 'Box Five',
//     content: 'Placeholder text for Box Five. Lorem ipsum...'
//   },
//   {
//     title: 'Box Six',
//     content: 'Placeholder text for Box Six. Lorem ipsum...'
//   }
// ];

// // ======================================
// // 3) The InteractiveNetwork component
// // ======================================
// const InteractiveNetwork = () => {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [dragging, setDragging] = useState(null);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

//   // Handle dragging a node
//   const handleMouseDown = (e, nodeId) => {
//     e.stopPropagation();
//     const node = nodes.find(n => n.id === nodeId);
//     if (!node) return;
//     setDragging(nodeId);
//     setDragOffset({
//       x: e.clientX - node.x,
//       y: e.clientY - node.y
//     });
//   };

//   const handleMouseMove = (e) => {
//     if (dragging === null) return;
//     setNodes(prevNodes =>
//       prevNodes.map(node => {
//         if (node.id !== dragging) return node;
//         return {
//           ...node,
//           x: e.clientX - dragOffset.x,
//           y: e.clientY - dragOffset.y
//         };
//       })
//     );
//   };

//   const handleMouseUp = () => {
//     setDragging(null);
//   };

//   // Attach global listeners for dragging
//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseup', handleMouseUp);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [dragging, dragOffset]);

//   // Render each edge
//   const renderEdge = (edge) => {
//     const fromNode = nodes.find(n => n.id === edge.from);
//     const toNode = nodes.find(n => n.id === edge.to);
//     if (!fromNode || !toNode) return null;

//     return (
//       <g key={`${edge.from}-${edge.to}`} className="transition-all duration-200 ease-in-out">
//         <line
//           x1={fromNode.x}
//           y1={fromNode.y}
//           x2={toNode.x}
//           y2={toNode.y}
//           stroke="#666"
//           strokeWidth="2"
//           markerEnd="url(#arrowhead)"
//         />
//         <text
//           x={(fromNode.x + toNode.x) / 2}
//           y={(fromNode.y + toNode.y) / 2 - 10}
//           textAnchor="middle"
//           className="text-xs fill-gray-600"
//         >
//           {edge.label}
//         </text>
//       </g>
//     );
//   };

//   return (
//     <div className="mx-auto px-4 max-w-[90rem]">
//       {/* Page Title */}
//       <h2 className="text-3xl font-bold mb-4 text-white">
//         Inciting Event
//       </h2>

//       {/*
//         We use a flex container so the box is on the left
//         and the new panel is on the right. "gap-6" creates space.
//       */}
//       <div className="flex flex-col lg:flex-row items-start gap-6">

//         {/* Left column: the existing interactive graph box */}
//         <div className="flex-1">
//           <div className="bg-gray-800/50 p-6 rounded-lg">
//             {/* Header row inside the box */}
//             <div className="flex items-center mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="mr-3 h-6 w-6 text-white"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="12" cy="12" r="10" />
//                 <line x1="12" y1="16" x2="12" y2="12" />
//                 <line x1="12" y1="8" x2="12" y2="8" />
//               </svg>
//               <h3 className="text-xl font-semibold text-white">
//                 Interactive Network Graph
//               </h3>
//             </div>

//             {/* Small instructions */}
//             <p className="text-sm text-gray-300 mb-4">
//               Drag nodes to reposition, click a node for details,
//               and zoom or pan freely within the graph.
//             </p>

//             {/* The graph container */}
//             <div className="relative w-full h-[60rem] overflow-hidden bg-gray-100">
//               <svg className="w-full h-full">
//                 <defs>
//                   <marker
//                     id="arrowhead"
//                     markerWidth="10"
//                     markerHeight="7"
//                     refX="9"
//                     refY="3.5"
//                     orient="auto"
//                   >
//                     <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
//                   </marker>
//                 </defs>

//                 {/* Render edges */}
//                 {edges.map(renderEdge)}

//                 {/* Render nodes */}
//                 {nodes.map((node) => {
//                   const isSelected = selectedNode === node.id;

//                   return (
//                     <g
//                       key={node.id}
//                       transform={`translate(${node.x},${node.y})`}
//                       onMouseDown={(e) => handleMouseDown(e, node.id)}
//                       onClick={() => setSelectedNode(isSelected ? null : node.id)}
//                       className="cursor-pointer transition-transform duration-200 ease-in-out"
//                     >
//                       {/* Node shape */}
//                       {node.type === 'location' ? (
//                         <ellipse
//                           rx="70"
//                           ry="40"
//                           style={{ fill: '#d4edda' }}
//                           className="stroke-gray-400 transition-colors duration-200"
//                         />
//                       ) : node.type === 'asset' ? (
//                         <polygon
//                           points="-30,-50 0,-100 30,-50 0,0"
//                           style={{ fill: '#FFD700' }}
//                           className="transition-colors duration-200"
//                         />
//                       ) : (
//                         <rect
//                           x="-90"
//                           y="-30"
//                           width="180"
//                           height="60"
//                           rx="5"
//                           style={{
//                             fill: node.type === 'suspicious' ? '#ffcccc' : '#cce5ff'
//                           }}
//                           className="stroke-gray-400 transition-colors duration-200"
//                         />
//                       )}

//                       {/* Node label */}
//                       <text
//                         textAnchor="middle"
//                         className="text-sm font-medium"
//                       >
//                         {node.label}
//                       </text>

//                       {/* Subtext if present */}
//                       {node.subtext && (
//                         <text
//                           y="15"
//                           textAnchor="middle"
//                           className="text-xs fill-gray-600"
//                         >
//                           ({node.subtext})
//                         </text>
//                       )}
//                     </g>
//                   );
//                 })}
//               </svg>

//               {/* Details panel (white box) for the selected node */}
//               {selectedNode !== null && (
//                 <div className="absolute top-4 right-4 w-64 p-4 bg-white shadow-lg rounded-lg transition-opacity duration-200">
//                   <div className="flex items-start gap-2">
//                     {nodes.find(n => n.id === selectedNode)?.type === 'suspicious' && (
//                       <AlertTriangle className="w-5 h-5 text-red-500" />
//                     )}
//                     <div>
//                       <h3 className="font-bold">
//                         {nodes.find(n => n.id === selectedNode)?.label}
//                       </h3>
//                       <p className="text-sm text-gray-600 mt-2">
//                         {nodes.find(n => n.id === selectedNode)?.details}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Tailwind-based legend (bottom-left) */}
//               <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
//                 <div className="flex flex-col gap-2">
//                   <div className="flex items-center gap-2">
//                     <div className="w-4 h-4" style={{backgroundColor: '#ffcccc'}}></div>
//                     <span className="text-sm">Suspicious Entity</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-4 h-4" style={{backgroundColor: '#cce5ff'}}></div>
//                     <span className="text-sm">Legitimate Entity</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-4 h-4" style={{backgroundColor: '#d4edda'}}></div>
//                     <span className="text-sm">Location</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-4 h-4" style={{backgroundColor: '#FFD700'}}></div>
//                     <span className="text-sm">Asset</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right column: new panel with 6 boxes (placeholder data) */}
//         <div className="w-full lg:w-[28rem] flex-shrink-0">
//           <h3 className="text-2xl font-bold mb-4 text-white">
//             Additional Analysis
//           </h3>
//           {/* For each box in rightPanelData */}
//           {rightPanelData.map((box, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-800/50 p-6 rounded-lg mb-4"
//             >
//               <h4 className="text-white text-lg font-semibold mb-1">
//                 {box.title}
//               </h4>
//               <p className="text-sm text-gray-300">
//                 {box.content}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveNetwork;









import React, { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';

// ======================
// 1) Updated Data Arrays
// (New node set with gold edges for cash movement)
// ======================
const initialNodes = [
  {
    id: 'salman',
    type: 'suspicious',
    label: 'Salman Alwan Salim',
    subtext: 'Iraqi Planner',
    details: 'Key Iraqi planner behind the operation.',
    x: 140,
    y: 80
  },
  {
    id: 'abu',
    type: 'suspicious',
    label: 'Abu Shaheen Al-Aithawi',
    subtext: 'Iraqi Planner',
    details: 'Another Iraqi planner for the scheme.',
    x: 140,
    y: 180
  },
  {
    id: 'afaq',
    type: 'suspicious',
    label: 'Afaq Al-Mustqbal Transport LLC',
    subtext: 'Front Company',
    details: 'Speedex Center Bldg 18\n(25.2907078, 55.4011003)',
    x: 140,
    y: 340
  },
  {
    id: 'usd',
    type: 'asset',
    label: 'USD 11M',
    subtext: 'Cash',
    details: 'Monetary value handled through the chain.',
    x: 300,
    y: 390
  },
  {
    id: 'wathba',
    type: 'legitimate',
    label: 'Wathba Al Jadeeda Transport LLC',
    subtext: 'Subcontractor - legitimate transport company',
    details: 'Provides legitimate transport services.',
    x: 500,
    y: 340
  },
  {
    id: 'deira',
    type: 'location',
    label: 'Deira',
    subtext: 'Dubai',
    details: 'District in Dubai, UAE.',
    x: 700,
    y: 340
  },
  {
    id: 'jebelAli',
    type: 'location',
    label: 'Jebel Ali Port',
    subtext: 'Dubai',
    details: 'Major port in Dubai.',
    x: 900,
    y: 340
  },
  {
    id: 'ummQasr',
    type: 'location',
    label: 'Umm Qasr Port',
    subtext: 'Basra',
    details: 'Iraqi port, entry for shipments.',
    x: 1100,
    y: 340
  },
  {
    id: 'aswar',
    type: 'suspicious',
    label: 'Aswar Exchange Company',
    subtext: 'Final Destination',
    details: 'Basra Governorate\n(30.5023953, 47.8330645)',
    x: 1340,
    y: 340
  }
];

// Each edge references node IDs and can have custom styling (gold/dashed lines).
const edges = [
  // Planner => front company
  { from: 'salman', to: 'afaq', label: 'plans' },
  { from: 'abu',    to: 'afaq', label: 'plans' },
  // Front company => subcontractor
  { from: 'afaq',   to: 'wathba', label: 'orchestrate' },
  // Subcontractor => Deira
  { from: 'wathba', to: 'deira', label: 'transport to' },
  // Deira => Jebel Ali
  { from: 'deira',  to: 'jebelAli', label: 'HGV' },
  // Jebel Ali => Umm Qasr
  { from: 'jebelAli', to: 'ummQasr', label: '"Al-Rafidain"' },
  // Umm Qasr => Aswar
  { from: 'ummQasr', to: 'aswar', label: 'transfer' },

  // Gold lines (cash movement)
  {
    from: 'afaq',
    to: 'usd',
    label: '',
    color: '#ffd700',
    dashed: true,
    markerEnd: 'yellowarrow'
  },
  {
    from: 'usd',
    to: 'wathba',
    label: '',
    color: '#ffd700',
    dashed: false,
    markerEnd: 'yellowarrow'
  }
];

// ===============================
// 2) Right Panel (6 Boxes) Data
// ===============================
const rightPanelData = [
    {
    title: 'Timing',
    content: 'USD 11M cash movement on Dec 5, 2024'
    },
    {
    title: 'Planners',
    content: 'Two Iraqi nationals: Salman Alwan Salim and Abu Shaheen Al-Aithawi'
    },
    {
    title: 'Origin Entity',
    content: 'Front company: Afaq Al-Mustqbal Transport LLC in Deira (25.2907078, 55.4011003)'
    },
    {
    title: 'Logistics Provider',
    content: 'Legitimate subcontractor: Wathba Al Jadeeda Transport LLC'
    },
    {
    title: 'Initial Movement',
    content: 'Truck transport from Deira to Jebel Ali port'
    },
    {
    title: 'Maritime Transport',
    content: "Iraqi vessel 'Al-Rafidain' from Jebel Ali"
    },
    {
    title: 'Port of Entry',
    content: 'Maritime arrival at Umm Qasr Port, Basra'
    },
    {
    title: 'Destination Entity',
    content: 'Aswar Exchange Company in Basra (30.5023953, 47.8330645)'
    },
    {
    title: 'Cash Source',
    content: 'Cash movement initiated from Speedex Center Building 18, Al Qusais Industrial 4'
    }
    ];

// ===============================
// 3) The Interactive Component
// ===============================
const InteractiveNetwork = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [selectedNode, setSelectedNode] = useState(null);
  const [dragging, setDragging] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Start dragging a node
  const handleMouseDown = (e, nodeId) => {
    e.stopPropagation();
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;
    setDragging(nodeId);
    // store offset so node doesn't jump
    setDragOffset({
      x: e.clientX - (node.x || 0),
      y: e.clientY - (node.y || 0)
    });
  };

  // Mouse move => update dragged node coords
  const handleMouseMove = (e) => {
    if (dragging === null) return;
    setNodes(prevNodes =>
      prevNodes.map(node => {
        if (node.id !== dragging) return node;
        return {
          ...node,
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        };
      })
    );
  };

  // End drag on mouseup
  const handleMouseUp = () => {
    setDragging(null);
  };

  // Global listeners for dragging
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, dragOffset]);

  // Render edges with optional custom styling
  const renderEdge = (edge) => {
    const fromNode = nodes.find(n => n.id === edge.from);
    const toNode   = nodes.find(n => n.id === edge.to);
    if (!fromNode || !toNode) return null;

    // Defaults
    let strokeColor = '#666';
    let strokeDash  = '';
    let markerId    = 'arrowhead';

    if (edge.color)      strokeColor = edge.color;
    if (edge.dashed)     strokeDash  = '5,5';
    if (edge.markerEnd)  markerId    = edge.markerEnd;

    return (
      <g key={`${edge.from}-${edge.to}`} className="transition-all duration-200 ease-in-out">
        <line
          x1={fromNode.x}
          y1={fromNode.y}
          x2={toNode.x}
          y2={toNode.y}
          stroke={strokeColor}
          strokeWidth="2"
          strokeDasharray={strokeDash}
          markerEnd={`url(#${markerId})`}
        />
        {edge.label && (
          <text
            x={(fromNode.x + toNode.x) / 2}
            y={(fromNode.y + toNode.y) / 2 - 10}
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            {edge.label}
          </text>
        )}
      </g>
    );
  };

  // Render nodes
  const renderNode = (node) => {
    const isSelected = selectedNode === node.id;
    const handleClick = (e) => {
      e.stopPropagation();
      setSelectedNode(isSelected ? null : node.id);
    };

    // shape depends on node.type
    let shape = null;
    if (node.type === 'location') {
      shape = (
        <ellipse
          rx="70"
          ry="40"
          style={{ fill: '#d4edda' }}
          className="stroke-gray-400 transition-colors duration-200"
        />
      );
    } else if (node.type === 'asset') {
      shape = (
        <polygon
          points="-30,-50 0,-100 30,-50 0,0"
          style={{ fill: '#FFD700' }}
          className="transition-colors duration-200"
        />
      );
    } else {
      // suspicious or legitimate => rect
      shape = (
        <rect
          x="-90"
          y="-30"
          width="180"
          height="60"
          rx="5"
          style={{
            fill: node.type === 'suspicious' ? '#ffcccc' : '#cce5ff'
          }}
          className="stroke-gray-400 transition-colors duration-200"
        />
      );
    }

    return (
      <g
        key={node.id}
        transform={`translate(${node.x},${node.y})`}
        onMouseDown={(e) => handleMouseDown(e, node.id)}
        onClick={handleClick}
        className="cursor-pointer transition-transform duration-200 ease-in-out"
      >
        {shape}
        <text
          textAnchor="middle"
          className="text-sm font-medium"
        >
          {node.label}
        </text>
        {node.subtext && (
          <text
            y="15"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            ({node.subtext})
          </text>
        )}
      </g>
    );
  };

  return (

    <div className="w-full px-4 py-8">
      {/* Top heading */}
      <h2 className="text-5xl font-bold mb-6 text-white">
        Inciting Event
      </h2>


      <div className="flex flex-col lg:flex-row items-start gap-6">

        {/* Left column: The interactive graph, taking up remaining space */}
        <div className="flex-1">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            {/* Subheading row */}
            <div className="flex items-center mb-4">
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
              <h3 className="text-3xl font-semibold text-white">
                Interactive Network Graph
              </h3>
            </div>

            {/* Instructions */}
            <p className="text-2xl font-bold text-red-500 mb-2">
            An Iraqi-orchestrated movement of USD 11M in cash from Dubai-located front company through legitimate transport networks to Basra exchange, December 5th 2024.
            </p>
            <br/>
            <p className="text-2xl font-bold mb-6 text-gray-500">
              Drag nodes to reposition, click a node for details,
              and zoom or pan freely within the graph.
            </p>




            {/* The SVG container – keep it large, 60rem tall */}
            <div className="relative w-full h-[60rem] bg-gray-100 overflow-hidden">
              <svg className="w-full h-full">
                <defs>
                  {/* Default grey arrow */}
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
                  </marker>
                  {/* Yellow arrow for cash movement lines */}
                  <marker
                    id="yellowarrow"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ffd700" />
                  </marker>
                </defs>

                {/* Render edges and nodes */}
                {edges.map(renderEdge)}
                {nodes.map(renderNode)}
              </svg>

              {/* White details panel if a node is selected */}
              {selectedNode !== null && (
                <div className="absolute top-4 right-4 w-64 p-4 bg-white shadow-lg rounded-lg transition-opacity duration-200">
                  <div className="flex items-start gap-2">
                    {/* Red alert icon if suspicious */}
                    {nodes.find(n => n.id === selectedNode)?.type === 'suspicious' && (
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    )}
                    <div>
                      <h3 className="font-bold">
                        {nodes.find(n => n.id === selectedNode)?.label}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">
                        {nodes.find(n => n.id === selectedNode)?.details}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Legend in bottom-left corner */}
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4" style={{backgroundColor: '#ffcccc'}}></div>
                    <span className="text-sm">Suspicious Entity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4" style={{backgroundColor: '#cce5ff'}}></div>
                    <span className="text-sm">Legitimate Entity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4" style={{backgroundColor: '#d4edda'}}></div>
                    <span className="text-sm">Location</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4" style={{backgroundColor: '#FFD700'}}></div>
                    <span className="text-sm">Asset</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: 6 boxes (placeholder text) */}
        <div className="w-full lg:w-[42rem] flex-shrink-0">
          {/* <h3 className="text-2xl font-bold mb-4 text-white">
            Additional Analysis
          </h3> */}
          {/* Render each "box" from rightPanelData */}
          {rightPanelData.map((box, idx) => (
            <div key={idx} className="bg-gray-800/50 p-6 rounded-lg mb-4">
              <h4 className="text-white text-lg font-semibold mb-1">
                {box.title}
              </h4>
              <p className="text-m text-gray-300">
                {box.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveNetwork;













