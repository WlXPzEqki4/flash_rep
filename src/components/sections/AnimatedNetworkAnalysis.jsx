
// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';

// import { 
//   Network,
// } from 'lucide-react';

// // Node component with simplified props
// const NetworkNode = ({ x, y, type, label, visible }) => {
//   const colors = {
//     primary: '#FF6B6B',    
//     associate: '#4ECDC4',  
//     unknown: '#95A5A6',    
//     business: '#F1C40F',
//     'third party entity': '#9B59B6',
//     'unknown associate': '#E74C3C',
//     'associate relative': '#3498DB',
//     'third party person': '#2ECC71',
//     'meeting location': '#F39C12',
//     device: '#1ABC9C'
//   };

//   const nodeSize = type === 'primary' ? 40 : 30;

//   return (
//     <motion.g
//       initial={{ opacity: 0, scale: 0 }}
//       animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {type === 'business' ? (
//         <motion.rect
//           x={x - 60}
//           y={y - 15}
//           width={120}
//           height={30}
//           fill={colors[type]}
//           opacity={0.8}
//           rx={5}
//         />
//       ) : (
//         <motion.circle
//           cx={x}
//           cy={y}
//           r={nodeSize}
//           fill={colors[type]}
//           opacity={0.8}
//         />
//       )}
//       <motion.text
//         x={x}
//         y={type === 'business' ? y + 5 : y + nodeSize + 20}
//         textAnchor="middle"
//         fill="white"
//         fontSize={12}
//         className="select-none"
//       >
//         {label}
//       </motion.text>
//     </motion.g>
//   );
// };

// // Edge component with simplified props
// const NetworkEdge = ({ start, end, label, visible }) => {
//   const mx = (start.x + end.x) / 2;
//   const my = (start.y + end.y) / 2;

//   return (
//     <motion.g
//       initial={{ opacity: 0 }}
//       animate={{ opacity: visible ? 1 : 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.line
//         x1={start.x}
//         y1={start.y}
//         x2={end.x}
//         y2={end.y}
//         stroke="white"
//         strokeWidth={2}
//         opacity={0.5}
//       />
//       <motion.g transform={`translate(${mx},${my})`}>
//         <rect
//           x={-50}
//           y={-10}
//           width={100}
//           height={20}
//           fill="#2C3E50"
//           opacity={0.8}
//           rx={5}
//         />
//         <text
//           x={0}
//           y={5}
//           textAnchor="middle"
//           fill="white"
//           fontSize={10}
//           className="select-none"
//         >
//           {label}
//         </text>
//       </motion.g>
//     </motion.g>
//   );
// };

// const AnimatedNetworkAnalysis = () => {
//   // State management
//   const [step, setStep] = useState(0);
//   const [isFocused, setIsFocused] = useState(false);  // Add it here


//   const [position, setPosition] = useState(() => {
//     // Center the view on Diego's coordinates (800, 800)
//     return {
//       x: window.innerWidth/3 - 800, // Adjust for the 2/3 width of main container
//       y: window.innerHeight/2 - 800,
//       scale: 0.8 // Slightly zoomed out to show context
//     };
//   });

//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

//   const nodes = [
//     // Core Subject at center
//     { id: 'diego', x: 800, y: 800, type: 'primary', label: 'Diego Isaac BENITEZ CANETE' },
    
//     // Direct Associates - First Ring (more spread out)
//     { id: 'amanda', x: 400, y: 600, type: 'associate', label: 'Amanda ACOSTA' },
//     { id: 'hayder', x: 1200, y: 600, type: 'associate', label: 'Hayder AL-NASHIE' },
//     { id: 'juma', x: 600, y: 1000, type: 'unknown associate', label: 'Mahmoud JUMA' },
//     { id: 'parents', x: 200, y: 700, type: 'third party entity', label: 'BENITEZ Parents' },
    
//     // Business Entities - Upper Quadrants (more spread)
//     { id: 'dash', x: 1400, y: 400, type: 'business', label: 'Dash Hospitality Group' },
//     { id: 'nashie', x: 1600, y: 600, type: 'business', label: 'Nashie Contracting LLC' },
//     { id: 'pinturas', x: 400, y: 400, type: 'business', label: 'Pinturas Tupa SA' },
//     { id: 'mansoor', x: 1800, y: 800, type: 'third party entity', label: 'MANSOOR ZOHER GENERAL TRADING LLC' },
//     { id: 'tadeeq', x: 1700, y: 1000, type: 'third party entity', label: 'TADEEQ RESTAURANTS CO. WLL' },
//     { id: 'aljisr', x: 1900, y: 1000, type: 'third party entity', label: 'AL JISR INTERNATIONAL TRADING COMPANY WLL' },
//     { id: 'nnuc', x: 1500, y: 800, type: 'third party entity', label: 'AL NASSER & AL NASHIE UNITED GENERAL TRADING COMPANY' },

//     // SPREE Network - Left Side (more spread)
//     { id: 'naspree', x: 200, y: 1000, type: 'unknown associate', label: 'Nathalie SPREE' },
//     { id: 'nispree', x: 200, y: 1200, type: 'unknown associate', label: 'Nick SPREE' },

//     // Nashie Family Cluster - Right Side (more spread)
//     { id: 'bashir', x: 1400, y: 1000, type: 'associate relative', label: 'Bashir AL-NASHIE' },
//     { id: 'salam', x: 1600, y: 1100, type: 'associate relative', label: 'Salam AL-NASHIE' },
//     { id: 'khaled', x: 1800, y: 1100, type: 'associate relative', label: 'Khaled AL-NASHIE' },
//     { id: 'fadi', x: 2000, y: 1100, type: 'associate relative', label: 'Fadi NASHIE' },

//     // Other Associates and Entities (more spread)
//     { id: 'ataei', x: 1800, y: 600, type: 'third party person', label: 'Shahin Mohammed Abdullah ATAEI' },
//     { id: 'karam', x: 1000, y: 400, type: 'third party person', label: 'Peter KARAM' },
//     { id: 'habtoor', x: 1000, y: 1200, type: 'meeting location', label: 'Al Habtoor Polo Resort' },

//     // Technical/Device Nodes (more spread)
//     { id: 'commonMSISDN', x: 600, y: 600, type: 'device', label: 'Common MSISDN' },
//     { id: 'green', x: 1400, y: 700, type: 'device', label: 'Device GREEN' }
//   ];

//   const edges = [
//     // Core Relationships
//     { from: 'diego', to: 'amanda', label: 'Reported Wife' },
//     { from: 'diego', to: 'hayder', label: 'Frequent contact at Al Habtoor Polo Resort' },
//     { from: 'amanda', to: 'parents', label: 'Active on social networks' },
//     { from: 'diego', to: 'juma', label: 'Unknown Association' },
//     { from: 'diego', to: 'commonMSISDN', label: 'Primary Selector' },
//     { from: 'diego', to: 'pinturas', label: 'BENÍTEZ President & shareholder Pinturas Tupa SA' },
    
//     // MSISDN and Spree Connections
//     { from: 'commonMSISDN', to: 'nispree', label: 'Associated with MSISDN' },
//     { from: 'nispree', to: 'naspree', label: 'Unknown Association' },
    
//     // Nashie Family and Business Network
//     { from: 'hayder', to: 'bashir', label: 'Father' },
//     { from: 'hayder', to: 'green', label: 'Connected' },
//     { from: 'hayder', to: 'dash', label: 'CEO' },
//     { from: 'hayder', to: 'nashie', label: 'Managing Director [p.6]' },
//     { from: 'nashie', to: 'ataei', label: '51% shareholder (majority control) [p.7]' },
//     { from: 'nashie', to: 'dash', label: 'Subsidiary/partner company' },
//     { from: 'ataei', to: 'mansoor', label: 'Sole beneficial owner' },
//     { from: 'ataei', to: 'tadeeq', label: 'Potentially also associated with' },
//     { from: 'ataei', to: 'aljisr', label: 'Potentially also associated with' },
//     { from: 'hayder', to: 'nnuc', label: 'Listed as Legal Representative' },
//     { from: 'bashir', to: 'nnuc', label: '-' },
    
//     // Location Connections
//     { from: 'diego', to: 'habtoor', label: 'Spends time with Hayder AL-NASHIE' },
//     { from: 'hayder', to: 'habtoor', label: 'Tagged in Instagram post here' },
    
//     // Additional Relationships
//     { from: 'hayder', to: 'karam', label: 'Photographed at event' },
//     { from: 'hayder', to: 'bashir', label: 'Member of NASHIE FAMILY' },
//     { from: 'hayder', to: 'salam', label: 'Member of NASHIE FAMILY' },
//     { from: 'hayder', to: 'khaled', label: 'Member of NASHIE FAMILY' },
//     { from: 'hayder', to: 'fadi', label: 'Member of NASHIE FAMILY' },
//   ];

//   const steps = [
//     // Step 1: Start with Diego
//     {
//         nodes: ['diego'],
//         edges: []
//     },

//     // Step 2: Immediate Family - Amanda and Parents
//     {
//         nodes: ['diego', 'amanda', 'parents'],
//         edges: ['diego-amanda', 'amanda-parents']
//     },

//     // Step 3: Key Business Associate - Hayder
//     {
//         nodes: ['diego', 'amanda', 'parents', 'hayder'],
//         edges: ['diego-amanda', 'amanda-parents', 'diego-hayder']
//     },

//     // Step 4: Business Network Core - Dash and Nashie
//     {
//         nodes: ['diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie'],
//         edges: ['diego-amanda', 'amanda-parents', 'diego-hayder',
//                 'hayder-dash', 'hayder-nashie', 'nashie-dash']
//     },

//     // Step 5: Technical Connections
//     {
//         nodes: ['diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
//                 'commonMSISDN', 'green', 'nispree', 'naspree'],
//         edges: ['diego-amanda', 'amanda-parents', 'diego-hayder',
//                 'hayder-dash', 'hayder-nashie', 'nashie-dash',
//                 'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green']
//     },

//     // Step 6: Nashie Family Network
//     {
//         nodes: ['diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
//                 'commonMSISDN', 'green', 'nispree', 'naspree',
//                 'bashir', 'salam', 'khaled', 'fadi'],
//         edges: ['diego-amanda', 'amanda-parents', 'diego-hayder',
//                 'hayder-dash', 'hayder-nashie', 'nashie-dash',
//                 'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green',
//                 'hayder-bashir', 'hayder-salam', 'hayder-khaled', 'hayder-fadi']
//     },

//     // Step 7: Business Ownership Structure
//     {
//         nodes: ['diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
//                 'commonMSISDN', 'green', 'nispree', 'naspree',
//                 'bashir', 'salam', 'khaled', 'fadi',
//                 'ataei', 'mansoor', 'tadeeq', 'aljisr', 'nnuc'],
//         edges: ['diego-amanda', 'amanda-parents', 'diego-hayder',
//                 'hayder-dash', 'hayder-nashie', 'nashie-dash',
//                 'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green',
//                 'hayder-bashir', 'hayder-salam', 'hayder-khaled', 'hayder-fadi',
//                 'nashie-ataei', 'ataei-mansoor', 'ataei-tadeeq', 'ataei-aljisr',
//                 'hayder-nnuc', 'bashir-nnuc']
//     },

//     // Step 8: Location and Meeting Points
//     {
//         nodes: ['diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
//                 'commonMSISDN', 'green', 'nispree', 'naspree',
//                 'bashir', 'salam', 'khaled', 'fadi',
//                 'ataei', 'mansoor', 'tadeeq', 'aljisr', 'nnuc',
//                 'habtoor', 'karam'],
//         edges: ['diego-amanda', 'amanda-parents', 'diego-hayder',
//                 'hayder-dash', 'hayder-nashie', 'nashie-dash',
//                 'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green',
//                 'hayder-bashir', 'hayder-salam', 'hayder-khaled', 'hayder-fadi',
//                 'nashie-ataei', 'ataei-mansoor', 'ataei-tadeeq', 'ataei-aljisr',
//                 'hayder-nnuc', 'bashir-nnuc',
//                 'diego-habtoor', 'hayder-habtoor', 'hayder-karam']
//     },

//     // Step 9: Pinturas Connection
//     {
//         nodes: ['diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
//                 'commonMSISDN', 'green', 'nispree', 'naspree',
//                 'bashir', 'salam', 'khaled', 'fadi',
//                 'ataei', 'mansoor', 'tadeeq', 'aljisr', 'nnuc',
//                 'habtoor', 'karam', 'pinturas'],
//         edges: ['diego-amanda', 'amanda-parents', 'diego-hayder',
//                 'hayder-dash', 'hayder-nashie', 'nashie-dash',
//                 'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green',
//                 'hayder-bashir', 'hayder-salam', 'hayder-khaled', 'hayder-fadi',
//                 'nashie-ataei', 'ataei-mansoor', 'ataei-tadeeq', 'ataei-aljisr',
//                 'hayder-nnuc', 'bashir-nnuc',
//                 'diego-habtoor', 'hayder-habtoor', 'hayder-karam',
//                 'diego-pinturas']
//     },

//     // Step 10: Juma Connection
//     {
//         nodes: ['diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
//                 'commonMSISDN', 'green', 'nispree', 'naspree',
//                 'bashir', 'salam', 'khaled', 'fadi',
//                 'ataei', 'mansoor', 'tadeeq', 'aljisr', 'nnuc',
//                 'habtoor', 'karam', 'pinturas', 'juma'],
//         edges: ['diego-amanda', 'amanda-parents', 'diego-hayder',
//                 'hayder-dash', 'hayder-nashie', 'nashie-dash',
//                 'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green',
//                 'hayder-bashir', 'hayder-salam', 'hayder-khaled', 'hayder-fadi',
//                 'nashie-ataei', 'ataei-mansoor', 'ataei-tadeeq', 'ataei-aljisr',
//                 'hayder-nnuc', 'bashir-nnuc',
//                 'diego-habtoor', 'hayder-habtoor', 'hayder-karam',
//                 'diego-pinturas', 'diego-juma']
//     }
// ];

//     const infoCards = [
//       {
//         title: "Initial Network Connection",
//         text: "This is an intelligence investigation into Diego Isaac BENÍTEZ CAÑETE with the aim of discovering his current location and unpacking his network of associates."
//       },
//       {
//         title: "Family Associations",
//         text: "Network analysis highlights likely social connections with BENÍTEZ's parents, while his wife Amanda ACOSTA exited the UAE on 10 Apr 2024."
//       },
//       {
//         title: "Business Network Expansion",
//         text: "Hayder AL-NASHIE is Managing Director at Nashie Contracting LLC and CEO of its subsidiary/partner company Dash Hospitality Group."
//       },
//       {
//         title: "Technical Infrastructure",
//         text: "The investigation was conducted using a sophisticated fused intelligence approach incorporating OSINT and SOCMED exploitation, Adtech geo-location, GSM tracking and covert surveillance."
//       },
//       {
//         title: "Extended Family Network",
//         text: "Analysis of the NASHIE family network through SOCMED identified several members in European countries - Salam in Hanover, Khaled in Plovdiv, and Fadi in Amsterdam."
//       },
//       {
//         title: "Corporate Structure Analysis",
//         text: "Shahin Mohammed Abdullah ATAEI is a 51% shareholder, giving this person control over the company."
//       },
//       {
//         title: "Location Relationships",
//         text: "Shahin Mohammed Abdullah ATAEI is a 51% shareholder, giving this person control over the company."
//       },
//       {
//         title: "Financial Connections",
//         text: "According to open-source reporting, BENÍTEZ is the President and shareholder of Pinturas Iupa SA, reportedly involved in the trafficking of cocaine to Europe."
//       },
//       {
//         title: "Complete Network Overview",
//         text: "Where possible every effort has been made to corroborate and substantiate single source reporting there is still the potential for error. It is assessed as highly likely that the target and his wife are security aware, with a minimal digital footprint."
//       }
//     ];

//   // Mouse event handlers
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setDragStart({ 
//       x: e.clientX - position.x, 
//       y: e.clientY - position.y 
//     });
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       setPosition({
//         ...position,  // Keep the current scale
//         x: e.clientX - dragStart.x,
//         y: e.clientY - dragStart.y
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleWheel = (e) => {
//     e.preventDefault();
    
//     // Get mouse position relative to SVG
//     const svgElement = e.currentTarget;
//     const rect = svgElement.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
  
//     // Calculate zoom factor based on wheel direction
//     const delta = e.deltaY < 0 ? 1.2 : 0.8;
//     const newScale = Math.max(0.1, Math.min(5, position.scale * delta));
    
//     // Calculate new position to keep mouse point fixed
//     const scaleChange = newScale / position.scale;
//     const newX = mouseX - (mouseX - position.x) * scaleChange;
//     const newY = mouseY - (mouseY - position.y) * scaleChange;
  
//     setPosition({
//       x: newX,
//       y: newY,
//       scale: newScale
//     });
//   };

//   // Node visibility helpers
//   const isNodeVisible = (nodeId) => steps[step].nodes.includes(nodeId);
//   const isEdgeVisible = (from, to) => steps[step].edges.includes(`${from}-${to}`);

// return (
//   <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 p-8">
//     <div className="w-full flex gap-8">


//       <div className="w-2/3">
//         {/* Title section */}
//         <div className="flex flex-col mb-8">
//           <h2 className="text-4xl font-bold text-white mb-4">Network Development</h2>
          

//           {/* <div className="flex justify-between items-start"> */}
//             {/* <div className="bg-gray-800/50 p-6 rounded-lg max-w-3xl"> */}
//             {/* <div className="bg-gray-800/50 p-6 rounded-lg w-[885px]"> */}
//             <div className="flex justify-between items-start space-x-12">
//             <div className="bg-gray-800/50 p-6 rounded-lg w-[800px]">


//               <div className="flex items-center gap-2 mb-2 text-white">
//                 <Network className="w-6 h-6" />
//                 <span className="text-xl text-white font-semibold">Network Analysis</span>
//               </div>
//               <p className="text-gray-300 leading-relaxed">
//                 Interactive visualisation of entity relationships and connections.
//                 Explore the network by dragging nodes and using zoom controls. Toggle
//                 additional information for detailed insights. This network contains all
//                 identified persons, entities, locations - including relevant additional
//                 information collected as part of Project MALL Phase 2
//               </p>
//             </div>

//             <div className="flex flex-col gap-2">
//               <button
//                 onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
//                 className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-500 disabled:opacity-50 font-medium text-white"
//                 disabled={step === steps.length - 1}
//               >
//                 Next
//               </button>
//               <button
//                 onClick={() => setStep(Math.max(0, step - 1))}
//                 className="px-6 py-2 bg-gray-700/50 rounded hover:bg-gray-600 disabled:opacity-50 font-medium text-white"
//                 disabled={step === 0}
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={() => {
//                   setStep(0); // Reset to first step
//                   setPosition({ // Center on Diego
//                     x: window.innerWidth/3 - 800,
//                     y: window.innerHeight/2 - 800,
//                     scale: 0.8
//                   });
//                 }}
//                 className="px-6 py-2 bg-green-600 rounded hover:bg-green-500 font-medium text-white"
//               >
//                 Reset View
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Network visualization */}
//         {/* <div className="bg-gray-800 p-8 rounded-lg mb-8 h-[800px] overflow-hidden"> */}

//         {/* <div className="bg-gray-800 p-8 rounded-lg mb-8 h-[950px] overflow-hidden"> */}


//         <div 
//           className={`bg-gray-800 p-8 rounded-lg mb-8 h-[950px] overflow-hidden transition-all duration-300 ${
//             isFocused ? 'ring-2 ring-blue-500' : ''
//           }`}
//           onMouseEnter={() => setIsFocused(true)}
//           onMouseLeave={() => setIsFocused(false)}
// >




//           {/* <div className="relative w-full h-full">
//             <svg 
//               width="100%" 
//               height="100%" 
//               className="cursor-move"
//               onMouseDown={handleMouseDown}
//               onMouseMove={handleMouseMove}
//               onMouseUp={handleMouseUp}
//               onMouseLeave={handleMouseUp}
//               onWheel={handleWheel}
//             > */}



// <div className="relative w-full h-full">
//     <svg 
//       width="100%" 
//       height="100%" 
//       className="cursor-move"
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//       onWheel={handleWheel}
//     >













//               <g transform={`translate(${position.x}, ${position.y}) scale(${position.scale})`}>
//                 {edges.map(edge => (
//                   <NetworkEdge
//                     key={`${edge.from}-${edge.to}`}
//                     start={nodes.find(n => n.id === edge.from)}
//                     end={nodes.find(n => n.id === edge.to)}
//                     label={edge.label}
//                     visible={isEdgeVisible(edge.from, edge.to)}
//                   />
//                 ))}
//                 {nodes.map(node => (
//                   <NetworkNode
//                     key={node.id}
//                     {...node}
//                     visible={isNodeVisible(node.id)}
//                   />
//                 ))}
//               </g>
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div className="w-1/3 pt-[56px]">
//         {/* <div className="bg-gray-800 p-8 rounded-lg h-[994px]"> */}
//         <div className="bg-gray-800 p-8 rounded-lg h-full"> {/* Changed from h-[994px] to h-full */}


//           <h2 className="text-2xl font-bold text-white mb-6">Network Information</h2>
//           <div className="space-y-4">
//             {infoCards.map((card, index) => (
//               index < step && (
//                 <motion.div
//                   key={index}
//                   initial={{ x: 100, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: -100, opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="bg-gray-700/50 p-4 rounded-lg"
//                 >
//                   <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
//                   <p className="text-sm text-gray-300">{card.text}</p>
//                 </motion.div>
//               )
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// };

// export default AnimatedNetworkAnalysis;
















import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import { 
  Network,
} from 'lucide-react';

// Node component with simplified props
const NetworkNode = ({ x, y, type, label, visible }) => {
  const colors = {
    primary: '#FF6B6B',    
    associate: '#4ECDC4',  
    unknown: '#95A5A6',    
    business: '#F1C40F',
    'third party entity': '#9B59B6',
    'unknown associate': '#E74C3C',
    'associate relative': '#3498DB',
    'third party person': '#2ECC71',
    'meeting location': '#F39C12',
    device: '#1ABC9C'
  };

  const nodeSize = type === 'primary' ? 40 : 30;

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {type === 'business' ? (
        <motion.rect
          x={x - 60}
          y={y - 15}
          width={120}
          height={30}
          fill={colors[type]}
          opacity={0.8}
          rx={5}
        />
      ) : (
        <motion.circle
          cx={x}
          cy={y}
          r={nodeSize}
          fill={colors[type]}
          opacity={0.8}
        />
      )}
      <motion.text
        x={x}
        y={type === 'business' ? y + 5 : y + nodeSize + 20}
        textAnchor="middle"
        fill="white"
        fontSize={12}
        className="select-none"
      >
        {label}
      </motion.text>
    </motion.g>
  );
};

// Edge component with simplified props
const NetworkEdge = ({ start, end, label, visible }) => {
  const mx = (start.x + end.x) / 2;
  const my = (start.y + end.y) / 2;

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke="white"
        strokeWidth={2}
        opacity={0.5}
      />
      <motion.g transform={`translate(${mx},${my})`}>
        <rect
          x={-50}
          y={-10}
          width={100}
          height={20}
          fill="#2C3E50"
          opacity={0.8}
          rx={5}
        />
        <text
          x={0}
          y={5}
          textAnchor="middle"
          fill="white"
          fontSize={10}
          className="select-none"
        >
          {label}
        </text>
      </motion.g>
    </motion.g>
  );
};

const AnimatedNetworkAnalysis = () => {
  // Refs and state
  const containerRef = useRef(null);
  const [step, setStep] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Position includes x, y, scale of the SVG transform
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 0.8 });

  // On mount, measure the container so we can centre on Diego (800, 800)
  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setPosition({
        x: width / 2 - 800,
        y: height / 2 - 800,
        scale: 0.8
      });
    }
  }, []);

  // Mouse event handlers for panning
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ 
      x: e.clientX - position.x, 
      y: e.clientY - position.y 
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        ...position,
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Zoom with mouse wheel
  const handleWheel = (e) => {
    e.preventDefault();
    if (!containerRef.current) return;

    const svgElement = e.currentTarget;
    const rect = svgElement.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const delta = e.deltaY < 0 ? 1.2 : 0.8;
    const newScale = Math.max(0.1, Math.min(5, position.scale * delta));
    const scaleChange = newScale / position.scale;

    // Keep mouse position fixed while zooming
    const newX = mouseX - (mouseX - position.x) * scaleChange;
    const newY = mouseY - (mouseY - position.y) * scaleChange;

    setPosition({
      x: newX,
      y: newY,
      scale: newScale
    });
  };

  // Handle "Reset View" – recentre and reset to step 0
  const handleResetView = () => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setStep(0);
      setPosition({
        x: width / 2 - 800,
        y: height / 2 - 800,
        scale: 0.8
      });
    }
  };

  // Node definitions
  const nodes = [
    // Core Subject at centre
    { id: 'diego', x: 800, y: 800, type: 'primary', label: 'Diego Isaac BENITEZ CANETE' },
    
    // Direct Associates
    { id: 'amanda', x: 400, y: 600, type: 'associate', label: 'Amanda ACOSTA' },
    { id: 'hayder', x: 1200, y: 600, type: 'associate', label: 'Hayder AL-NASHIE' },
    { id: 'juma', x: 600, y: 1000, type: 'unknown associate', label: 'Mahmoud JUMA' },
    { id: 'parents', x: 200, y: 700, type: 'third party entity', label: 'BENITEZ Parents' },
    
    // Business Entities
    { id: 'dash', x: 1400, y: 400, type: 'business', label: 'Dash Hospitality Group' },
    { id: 'nashie', x: 1600, y: 600, type: 'business', label: 'Nashie Contracting LLC' },
    { id: 'pinturas', x: 400, y: 400, type: 'business', label: 'Pinturas Tupa SA' },
    { id: 'mansoor', x: 1800, y: 800, type: 'third party entity', label: 'MANSOOR ZOHER GENERAL TRADING LLC' },
    { id: 'tadeeq', x: 1700, y: 1000, type: 'third party entity', label: 'TADEEQ RESTAURANTS CO. WLL' },
    { id: 'aljisr', x: 1900, y: 1000, type: 'third party entity', label: 'AL JISR INTERNATIONAL TRADING COMPANY WLL' },
    { id: 'nnuc', x: 1500, y: 800, type: 'third party entity', label: 'AL NASSER & AL NASHIE UNITED GENERAL TRADING COMPANY' },

    // SPREE Network
    { id: 'naspree', x: 200, y: 1000, type: 'unknown associate', label: 'Nathalie SPREE' },
    { id: 'nispree', x: 200, y: 1200, type: 'unknown associate', label: 'Nick SPREE' },

    // Nashie Family Cluster
    { id: 'bashir', x: 1400, y: 1000, type: 'associate relative', label: 'Bashir AL-NASHIE' },
    { id: 'salam', x: 1600, y: 1100, type: 'associate relative', label: 'Salam AL-NASHIE' },
    { id: 'khaled', x: 1800, y: 1100, type: 'associate relative', label: 'Khaled AL-NASHIE' },
    { id: 'fadi', x: 2000, y: 1100, type: 'associate relative', label: 'Fadi NASHIE' },

    // Other Associates and Entities
    { id: 'ataei', x: 1800, y: 600, type: 'third party person', label: 'Shahin Mohammed Abdullah ATAEI' },
    { id: 'karam', x: 1000, y: 400, type: 'third party person', label: 'Peter KARAM' },
    { id: 'habtoor', x: 1000, y: 1200, type: 'meeting location', label: 'Al Habtoor Polo Resort' },

    // Technical/Device Nodes
    { id: 'commonMSISDN', x: 600, y: 600, type: 'device', label: 'Common MSISDN' },
    { id: 'green', x: 1400, y: 700, type: 'device', label: 'Device GREEN' }
  ];

  // Edges
  const edges = [
    // Core Relationships
    { from: 'diego', to: 'amanda', label: 'Reported Wife' },
    { from: 'diego', to: 'hayder', label: 'Frequent contact at Al Habtoor Polo Resort' },
    { from: 'amanda', to: 'parents', label: 'Active on social networks' },
    { from: 'diego', to: 'juma', label: 'Unknown Association' },
    { from: 'diego', to: 'commonMSISDN', label: 'Primary Selector' },
    { from: 'diego', to: 'pinturas', label: 'BENÍTEZ President & shareholder Pinturas Tupa SA' },
    
    // MSISDN and Spree Connections
    { from: 'commonMSISDN', to: 'nispree', label: 'Associated with MSISDN' },
    { from: 'nispree', to: 'naspree', label: 'Unknown Association' },
    
    // Nashie Family and Business Network
    { from: 'hayder', to: 'bashir', label: 'Father' },
    { from: 'hayder', to: 'green', label: 'Connected' },
    { from: 'hayder', to: 'dash', label: 'CEO' },
    { from: 'hayder', to: 'nashie', label: 'Managing Director [p.6]' },
    { from: 'nashie', to: 'ataei', label: '51% shareholder (majority control) [p.7]' },
    { from: 'nashie', to: 'dash', label: 'Subsidiary/partner company' },
    { from: 'ataei', to: 'mansoor', label: 'Sole beneficial owner' },
    { from: 'ataei', to: 'tadeeq', label: 'Potentially also associated with' },
    { from: 'ataei', to: 'aljisr', label: 'Potentially also associated with' },
    { from: 'hayder', to: 'nnuc', label: 'Listed as Legal Representative' },
    { from: 'bashir', to: 'nnuc', label: '-' },
    
    // Location Connections
    { from: 'diego', to: 'habtoor', label: 'Spends time with Hayder AL-NASHIE' },
    { from: 'hayder', to: 'habtoor', label: 'Tagged in Instagram post here' },
    
    // Additional Relationships
    { from: 'hayder', to: 'karam', label: 'Photographed at event' },
    { from: 'hayder', to: 'bashir', label: 'Member of NASHIE FAMILY' },
    { from: 'hayder', to: 'salam', label: 'Member of NASHIE FAMILY' },
    { from: 'hayder', to: 'khaled', label: 'Member of NASHIE FAMILY' },
    { from: 'hayder', to: 'fadi', label: 'Member of NASHIE FAMILY' },
  ];

  // Step data
  const steps = [
    // Step 1: Start with Diego
    {
      nodes: ['diego'],
      edges: []
    },
    // Step 2: Immediate Family - Amanda and Parents
    {
      nodes: ['diego', 'amanda', 'parents'],
      edges: ['diego-amanda', 'amanda-parents']
    },
    // Step 3: Key Business Associate - Hayder
    {
      nodes: ['diego', 'amanda', 'parents', 'hayder'],
      edges: ['diego-amanda', 'amanda-parents', 'diego-hayder']
    },
    // Step 4: Business Network Core - Dash and Nashie
    {
      nodes: ['diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie'],
      edges: [
        'diego-amanda', 'amanda-parents', 'diego-hayder',
        'hayder-dash', 'hayder-nashie', 'nashie-dash'
      ]
    },
    // Step 5: Technical Connections
    {
      nodes: [
        'diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
        'commonMSISDN', 'green', 'nispree', 'naspree'
      ],
      edges: [
        'diego-amanda', 'amanda-parents', 'diego-hayder',
        'hayder-dash', 'hayder-nashie', 'nashie-dash',
        'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green'
      ]
    },
    // Step 6: Nashie Family Network
    {
      nodes: [
        'diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
        'commonMSISDN', 'green', 'nispree', 'naspree',
        'bashir', 'salam', 'khaled', 'fadi'
      ],
      edges: [
        'diego-amanda', 'amanda-parents', 'diego-hayder',
        'hayder-dash', 'hayder-nashie', 'nashie-dash',
        'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green',
        'hayder-bashir', 'hayder-salam', 'hayder-khaled', 'hayder-fadi'
      ]
    },
    // Step 7: Business Ownership Structure
    {
      nodes: [
        'diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
        'commonMSISDN', 'green', 'nispree', 'naspree',
        'bashir', 'salam', 'khaled', 'fadi',
        'ataei', 'mansoor', 'tadeeq', 'aljisr', 'nnuc'
      ],
      edges: [
        'diego-amanda', 'amanda-parents', 'diego-hayder',
        'hayder-dash', 'hayder-nashie', 'nashie-dash',
        'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green',
        'hayder-bashir', 'hayder-salam', 'hayder-khaled', 'hayder-fadi',
        'nashie-ataei', 'ataei-mansoor', 'ataei-tadeeq', 'ataei-aljisr',
        'hayder-nnuc', 'bashir-nnuc'
      ]
    },
    // Step 8: Location and Meeting Points
    {
      nodes: [
        'diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
        'commonMSISDN', 'green', 'nispree', 'naspree',
        'bashir', 'salam', 'khaled', 'fadi',
        'ataei', 'mansoor', 'tadeeq', 'aljisr', 'nnuc',
        'habtoor', 'karam'
      ],
      edges: [
        'diego-amanda', 'amanda-parents', 'diego-hayder',
        'hayder-dash', 'hayder-nashie', 'nashie-dash',
        'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green',
        'hayder-bashir', 'hayder-salam', 'hayder-khaled', 'hayder-fadi',
        'nashie-ataei', 'ataei-mansoor', 'ataei-tadeeq', 'ataei-aljisr',
        'hayder-nnuc', 'bashir-nnuc',
        'diego-habtoor', 'hayder-habtoor', 'hayder-karam'
      ]
    },
    // Step 9: Pinturas Connection
    {
      nodes: [
        'diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
        'commonMSISDN', 'green', 'nispree', 'naspree',
        'bashir', 'salam', 'khaled', 'fadi',
        'ataei', 'mansoor', 'tadeeq', 'aljisr', 'nnuc',
        'habtoor', 'karam', 'pinturas'
      ],
      edges: [
        'diego-amanda', 'amanda-parents', 'diego-hayder',
        'hayder-dash', 'hayder-nashie', 'nashie-dash',
        'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green',
        'hayder-bashir', 'hayder-salam', 'hayder-khaled', 'hayder-fadi',
        'nashie-ataei', 'ataei-mansoor', 'ataei-tadeeq', 'ataei-aljisr',
        'hayder-nnuc', 'bashir-nnuc',
        'diego-habtoor', 'hayder-habtoor', 'hayder-karam',
        'diego-pinturas'
      ]
    },
    // Step 10: Juma Connection
    {
      nodes: [
        'diego', 'amanda', 'parents', 'hayder', 'dash', 'nashie',
        'commonMSISDN', 'green', 'nispree', 'naspree',
        'bashir', 'salam', 'khaled', 'fadi',
        'ataei', 'mansoor', 'tadeeq', 'aljisr', 'nnuc',
        'habtoor', 'karam', 'pinturas', 'juma'
      ],
      edges: [
        'diego-amanda', 'amanda-parents', 'diego-hayder',
        'hayder-dash', 'hayder-nashie', 'nashie-dash',
        'diego-commonMSISDN', 'commonMSISDN-nispree', 'nispree-naspree', 'hayder-green',
        'hayder-bashir', 'hayder-salam', 'hayder-khaled', 'hayder-fadi',
        'nashie-ataei', 'ataei-mansoor', 'ataei-tadeeq', 'ataei-aljisr',
        'hayder-nnuc', 'bashir-nnuc',
        'diego-habtoor', 'hayder-habtoor', 'hayder-karam',
        'diego-pinturas', 'diego-juma'
      ]
    }
  ];

  // Info cards
  const infoCards = [
    {
      title: "Initial Network Connection",
      text: "This is an intelligence investigation into Diego Isaac BENÍTEZ CAÑETE with the aim of discovering his current location and unpacking his network of associates."
    },
    {
      title: "Family Associations",
      text: "Network analysis highlights likely social connections with BENÍTEZ's parents, while his wife Amanda ACOSTA exited the UAE on 10 Apr 2024."
    },
    {
      title: "Business Network Expansion",
      text: "Hayder AL-NASHIE is Managing Director at Nashie Contracting LLC and CEO of its subsidiary/partner company Dash Hospitality Group."
    },
    {
      title: "Technical Infrastructure",
      text: "The investigation was conducted using a sophisticated fused intelligence approach incorporating OSINT and SOCMED exploitation, Adtech geo-location, GSM tracking and covert surveillance."
    },
    {
      title: "Extended Family Network",
      text: "Analysis of the NASHIE family network through SOCMED identified several members in European countries - Salam in Hanover, Khaled in Plovdiv, and Fadi in Amsterdam."
    },
    {
      title: "Corporate Structure Analysis",
      text: "Shahin Mohammed Abdullah ATAEI is a 51% shareholder, giving this person control over the company."
    },
    {
      title: "Location Relationships",
      text: "Shahin Mohammed Abdullah ATAEI is a 51% shareholder, giving this person control over the company."
    },
    {
      title: "Financial Connections",
      text: "According to open-source reporting, BENÍTEZ is the President and shareholder of Pinturas Iupa SA, reportedly involved in the trafficking of cocaine to Europe."
    },
    {
      title: "Complete Network Overview",
      text: "Where possible every effort has been made to corroborate and substantiate single source reporting there is still the potential for error. It is assessed as highly likely that the target and his wife are security aware, with a minimal digital footprint."
    }
  ];

  // Helpers to determine whether a node/edge should be visible at the current step
  const isNodeVisible = (nodeId) => steps[step].nodes.includes(nodeId);
  const isEdgeVisible = (from, to) => steps[step].edges.includes(`${from}-${to}`);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="w-full flex gap-8">

        <div className="w-2/3">
          {/* Title / Intro Section */}
          <div className="flex flex-col mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Network Development</h2>
            
            <div className="flex justify-between items-start space-x-12">
              <div className="bg-gray-800/50 p-6 rounded-lg w-[800px]">
                <div className="flex items-center gap-2 mb-2 text-white">
                  <Network className="w-6 h-6" />
                  <span className="text-xl text-white font-semibold">Network Analysis</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Interactive visualisation of entity relationships and connections.
                  Explore the network by dragging nodes and using zoom controls. Toggle
                  additional information for detailed insights. This network contains all
                  identified persons, entities, locations - including relevant additional
                  information collected as part of Project MALL Phase 2
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                  className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-500 disabled:opacity-50 font-medium text-white"
                  disabled={step === steps.length - 1}
                >
                  Next
                </button>
                <button
                  onClick={() => setStep(Math.max(0, step - 1))}
                  className="px-6 py-2 bg-gray-700/50 rounded hover:bg-gray-600 disabled:opacity-50 font-medium text-white"
                  disabled={step === 0}
                >
                  Previous
                </button>
                <button
                  onClick={handleResetView}
                  className="px-6 py-2 bg-green-600 rounded hover:bg-green-500 font-medium text-white"
                >
                  Reset View
                </button>
              </div>
            </div>
          </div>

          {/* Network Visualisation Container */}
          <div 
            ref={containerRef}
            className={`bg-gray-800 p-8 rounded-lg mb-8 h-[950px] overflow-hidden transition-all duration-300 ${
              isFocused ? 'ring-2 ring-blue-500' : ''
            }`}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
          >
            <div className="relative w-full h-full">
              <svg
                width="100%"
                height="100%"
                className="cursor-move"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
              >
                <g transform={`translate(${position.x}, ${position.y}) scale(${position.scale})`}>
                  {edges.map(edge => (
                    <NetworkEdge
                      key={`${edge.from}-${edge.to}`}
                      start={nodes.find(n => n.id === edge.from)}
                      end={nodes.find(n => n.id === edge.to)}
                      label={edge.label}
                      visible={isEdgeVisible(edge.from, edge.to)}
                    />
                  ))}
                  {nodes.map(node => (
                    <NetworkNode
                      key={node.id}
                      {...node}
                      visible={isNodeVisible(node.id)}
                    />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Network Information Cards */}
        <div className="w-1/3 pt-[56px]">
          <div className="bg-gray-800 p-8 rounded-lg h-full">
            <h2 className="text-2xl font-bold text-white mb-6">Network Information</h2>
            <div className="space-y-4 text-white">
              {infoCards.map((card, index) => (
                index < step && (
                  <motion.div
                    key={index}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-700/50 p-4 rounded-lg"
                  >
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-300">{card.text}</p>
                  </motion.div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedNetworkAnalysis;
















