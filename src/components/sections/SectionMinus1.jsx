// import React from 'react';

// function SectionMinus1() {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">Welcome</h1>
//       <p className="text-gray-700">Introduction to your dashboard</p>
//     </div>
//   );
// }

// export default SectionMinus1;


















// // src/components/sections/SectionMinus1.jsx
// import React, { useState, useEffect } from 'react';
// import TimelineComponent from './TimelineComponent';

// import { ArrowRight, Globe, Code, TrendingDown } from 'lucide-react';

// function SectionMinus1() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % 3);
//     }, 2000); // Rotate every 2 seconds

//     return () => clearInterval(timer);
//   }, []);

//   const sections = [
//     {
//       icon: Globe,
//       title: "Breakthrough Development",
//       content: "DeepSeek's AI model, DeepSeek-R1, has emerged as a significant competitor to Western AI systems, achieving top position on Apple's App Store while being developed at a fraction of the cost.",
//       highlight: "DeepSeek-R1"
//     },
//     {
//       icon: Code,
//       title: "Open Source Approach",
//       content: "Unlike many American AI companies, DeepSeek maintains an open model, making their code and technical documentation publicly available for global research and modification.",
//       highlight: "Open Innovation"
//     },
//     {
//       icon: TrendingDown,
//       title: "Market Impact",
//       content: "The emergence has affected major tech companies' shares, including Nvidia, Microsoft, and Alphabet, while intensifying discussions about the global AI race.",
//       highlight: "Global Impact"
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto space-y-8">
//       <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           Flash Report: Emerging Technology Brief
//         </h1>
//         <p className="text-lg text-gray-600">
//           Executive Summary - DeepSeek AI Development
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6 mt-8">
//         {sections.map((section, index) => {
//           const isActive = index === activeIndex;
//           const Icon = section.icon;
          
//           return (
//             <div
//               key={index}
//               className={`
//                 transform transition-all duration-500
//                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
//                 ${isActive ? 'ring-2 ring-blue-500 shadow-lg scale-105' : 'hover:shadow-md'}
//               `}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <div className="bg-white rounded-xl p-6 h-full">
//                 <div className={`
//                   transition-all duration-300
//                   ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                 `}>
//                   <Icon size={24} />
//                 </div>
                
//                 <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-900">
//                   {section.title}
//                 </h2>
                
//                 <p className="text-gray-600 mb-4">
//                   {section.content}
//                 </p>
                
//                 <div className={`
//                   inline-flex items-center text-sm font-medium
//                   ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                 `}>
//                   {section.highlight}
//                   <ArrowRight size={16} className="ml-1" />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* <div className="flex justify-center space-x-2 mt-6"> */}
//       <div className="max-w-6xl mx-auto space-y-8 px-4 lg:px-8">

//         {sections.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`
//               w-2 h-2 rounded-full transition-all duration-300
//               ${activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}
//             `}
//           />
//         ))}
//       </div>
//             {/* Add TimelineComponent here */}
//             <TimelineComponent />
//     </div>
//   );
// }

// export default SectionMinus1;




// // src/components/sections/SectionMinus1.jsx
// import React, { useState, useEffect } from 'react';
// import TimelineComponent from './TimelineComponent';
// import NarrativeComponent from './NarrativeComponent';
// import { ArrowRight, Globe, Code, TrendingDown } from 'lucide-react';

// function SectionMinus1() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % 3);
//     }, 2000); // Rotate every 2 seconds

//     return () => clearInterval(timer);
//   }, []);

//   const sections = [
//     {
//       icon: Globe,
//       title: "Breakthrough Development",
//       content: "DeepSeek's AI model, DeepSeek-R1, has emerged as a significant competitor to Western AI systems, achieving top position on Apple's App Store while being developed at a fraction of the cost.",
//       highlight: "DeepSeek-R1"
//     },
//     {
//       icon: Code,
//       title: "Open Source Approach",
//       content: "Unlike many American AI companies, DeepSeek maintains an open model, making their code and technical documentation publicly available for global research and modification.",
//       highlight: "Open Innovation"
//     },
//     {
//       icon: TrendingDown,
//       title: "Market Impact",
//       content: "The emergence has affected major tech companies' shares, including Nvidia, Microsoft, and Alphabet, while intensifying discussions about the global AI race.",
//       highlight: "Global Impact"
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto space-y-8">
//       {/* Header Section */}
//       <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           Flash Report: Emerging Technology Brief
//         </h1>
//         <p className="text-lg text-gray-600">
//           Executive Summary - DeepSeek AI Development
//         </p>
//       </div>

//       {/* Cards Grid Section */}
//       <div className="grid md:grid-cols-3 gap-6 mt-8">
//         {sections.map((section, index) => {
//           const isActive = index === activeIndex;
//           const Icon = section.icon;
          
//           return (
//             <div
//               key={index}
//               className={`
//                 transform transition-all duration-500
//                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
//                 ${isActive ? 'ring-2 ring-blue-500 shadow-lg scale-105' : 'hover:shadow-md'}
//               `}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <div className="bg-white rounded-xl p-6 h-full">
//                 <div className={`
//                   transition-all duration-300
//                   ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                 `}>
//                   <Icon size={24} />
//                 </div>
                
//                 <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-900">
//                   {section.title}
//                 </h2>
                
//                 <p className="text-gray-600 mb-4">
//                   {section.content}
//                 </p>
                
//                 <div className={`
//                   inline-flex items-center text-sm font-medium
//                   ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                 `}>
//                   {section.highlight}
//                   <ArrowRight size={16} className="ml-1" />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex justify-center space-x-2 mt-6">
//         {sections.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`
//               w-2 h-2 rounded-full transition-all duration-300
//               ${activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}
//             `}
//           />
//         ))}
//       </div>

//       {/* Timeline and Narrative Section */}
//       <div className="flex flex-col lg:flex-row gap-8">
//         <TimelineComponent />
//         <NarrativeComponent />
//       </div>
      
//     </div>
//   );
// }

// export default SectionMinus1;







// // src/components/sections/SectionMinus1.jsx
// import React, { useState, useEffect } from 'react';
// import TimelineComponent from './TimelineComponent';
// import NarrativeComponent from './NarrativeComponent';
// import { ArrowRight, Globe, Code, TrendingDown } from 'lucide-react';

// function SectionMinus1() {
//  const [activeIndex, setActiveIndex] = useState(0);
//  const [isVisible, setIsVisible] = useState(false);

//  useEffect(() => {
//    setIsVisible(true);
//    const timer = setInterval(() => {
//      setActiveIndex((prev) => (prev + 1) % 3);
//    }, 2000); // Rotate every 2 seconds

//    return () => clearInterval(timer);
//  }, []);

//  const sections = [
//    {
//      icon: Globe,
//      title: "Breakthrough Development", 
//      content: "DeepSeek's AI model, DeepSeek-R1, has emerged as a significant competitor to Western AI systems, achieving top position on Apple's App Store while being developed at a fraction of the cost.",
//      highlight: "DeepSeek-R1"
//    },
//    {
//      icon: Code,
//      title: "Open Source Approach",
//      content: "Unlike many American AI companies, DeepSeek maintains an open model, making their code and technical documentation publicly available for global research and modification.",
//      highlight: "Open Innovation"
//    },
//    {
//      icon: TrendingDown,
//      title: "Market Impact",
//      content: "The emergence has affected major tech companies' shares, including Nvidia, Microsoft, and Alphabet, while intensifying discussions about the global AI race.",
//      highlight: "Global Impact"
//    }
//  ];

//  return (
//    <div className="max-w-6xl mx-auto space-y-8">
//      {/* Header Section */}
//      <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//        <h1 className="text-3xl font-bold text-gray-900 mb-2">
//          Flash Report: Emerging Technology Brief
//        </h1>
//        <p className="text-lg text-gray-600">
//          Executive Summary - DeepSeek AI Development
//        </p>
//      </div>

//      {/* Cards Grid Section */}
//      <div className="grid md:grid-cols-3 gap-6 mt-8">
//        {sections.map((section, index) => {
//          const isActive = index === activeIndex;
//          const Icon = section.icon;
         
//          return (
//            <div
//              key={index}
//              className={`
//                transform transition-all duration-500
//                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
//                ${isActive ? 'ring-2 ring-blue-500 shadow-lg scale-105' : 'hover:shadow-md'}
//              `}
//              style={{ transitionDelay: `${index * 200}ms` }}
//            >
//              <div className="bg-white rounded-xl p-6 h-full">
//                <div className={`
//                  transition-all duration-300
//                  ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                `}>
//                  <Icon size={24} />
//                </div>
               
//                <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-900">
//                  {section.title}
//                </h2>
               
//                <p className="text-gray-600 mb-4">
//                  {section.content}
//                </p>
               
//                <div className={`
//                  inline-flex items-center text-sm font-medium
//                  ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                `}>
//                  {section.highlight}
//                  <ArrowRight size={16} className="ml-1" />
//                </div>
//              </div>
//            </div>
//          );
//        })}
//      </div>

//      {/* Navigation Dots */}
//      <div className="flex justify-center space-x-2 mt-6">
//        {sections.map((_, index) => (
//          <button
//            key={index}
//            onClick={() => setActiveIndex(index)}
//            className={`
//              w-2 h-2 rounded-full transition-all duration-300
//              ${activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}
//            `}
//          />
//        ))}
//      </div>

//     {/* Timeline and Narrative Section */}
//     <div className="flex flex-col lg:flex-row gap-8">
//     <div className="lg:w-1/2">
//         <h2 className="text-2xl font-bold mb-8">Development Timeline</h2>
//         <TimelineComponent />
//     </div>
//     <div className="lg:w-1/2 lg:pl-8">
//         <h2 className="text-2xl font-bold mb-8">Key Narrative</h2>
//         <NarrativeComponent />
//     </div>
//     </div>
//    </div>
//  );
// }

// export default SectionMinus1;












// import React, { useState, useEffect } from 'react';
// import TimelineComponent from './TimelineComponent';
// import NarrativeComponent from './NarrativeComponent';
// import ReportStructure from './ReportStructure';
// import ForceGraph2D from 'react-force-graph-2d';


// import { ArrowRight, Globe, Code, TrendingDown } from 'lucide-react';

// function SectionMinus1() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % 3);
//     }, 2000); // Rotate every 2 seconds

//     return () => clearInterval(timer);
//   }, []);

//   const sections = [
//     {
//       icon: Globe,
//       title: "Breakthrough Development", 
//       content: "DeepSeek's AI model, DeepSeek-R1, has emerged as a significant competitor to Western AI systems, achieving top position on Apple's App Store while being developed at a fraction of the cost.",
//       highlight: "DeepSeek-R1"
//     },
//     {
//       icon: Code,
//       title: "Open Source Approach",
//       content: "Unlike many American AI companies, DeepSeek maintains an open model, making their code and technical documentation publicly available for global research and modification.",
//       highlight: "Open Innovation"
//     },
//     {
//       icon: TrendingDown,
//       title: "Market Impact",
//       content: "The emergence has affected major tech companies' shares, including Nvidia, Microsoft, and Alphabet, while intensifying discussions about the global AI race.",
//       highlight: "Global Impact"
//     }
//   ];

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header Section */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h1 className="text-2xl font-bold mb-4">Flash Report: Emerging Technology Brief</h1>
//           <p className="text-gray-700">DeepSeek AI Development: 4th Week January 2025</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="w-full">
//           <ReportStructure />
//         </div>
//         <div className="w-full">
//           <RightPanel />
//         </div>
//       </div>

//       {/* Cards Grid Section */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {sections.map((section, index) => {
//           const isActive = index === activeIndex;
//           const Icon = section.icon;
          
//           return (
//             <div
//               key={index}
//               className={`
//                 transform transition-all duration-500
//                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
//                 ${isActive ? 'ring-2 ring-blue-500 shadow-lg scale-105' : 'hover:shadow-md'}
//                 bg-white rounded-lg shadow
//               `}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <div className="p-6 h-full">
//                 <div className={`
//                   transition-all duration-300
//                   ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                 `}>
//                   <Icon size={24} />
//                 </div>
                
//                 <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-900">
//                   {section.title}
//                 </h2>
                
//                 <p className="text-gray-600 mb-4">
//                   {section.content}
//                 </p>
                
//                 <div className={`
//                   inline-flex items-center text-sm font-medium
//                   ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                 `}>
//                   {section.highlight}
//                   <ArrowRight size={16} className="ml-1" />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex justify-center space-x-2">
//         {sections.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`
//               w-2 h-2 rounded-full transition-all duration-300
//               ${activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}
//             `}
//           />
//         ))}
//       </div>

//       {/* Timeline and Narrative Section */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         <div className="flex-1">
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-xl font-bold mb-4">Development Timeline</h2>
//             <TimelineComponent />
//           </div>
//         </div>
//         <div className="flex-1">
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-xl font-bold mb-4">Key Narrative</h2>
//             <NarrativeComponent />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SectionMinus1;
















// import React, { useState, useEffect, useRef } from 'react';
// import TimelineComponent from './TimelineComponent';
// import NarrativeComponent from './NarrativeComponent';
// import ReportStructure from './ReportStructure';
// import ForceGraph2D from 'react-force-graph-2d';
// import { ArrowRight, Globe, Code, TrendingDown } from 'lucide-react';

// const NetworkGraph = () => {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const containerRef = useRef(null);

//   const graphData = {
//     nodes: [
//       { id: "DeepSeek", group: 1, label: "DeepSeek AI", size: 20 },
//       { id: "OpenAI", group: 2, label: "OpenAI", size: 15 },
//       { id: "Microsoft", group: 2, label: "Microsoft", size: 15 },
//       { id: "Google", group: 2, label: "Google", size: 15 },
//       { id: "Investors", group: 3, label: "Investors", size: 10 },
//       { id: "Research", group: 4, label: "Research Community", size: 12 },
//       { id: "Users", group: 5, label: "User Base", size: 8 },
//       { id: "Policy", group: 6, label: "Policymakers", size: 10 }
//     ],
//     links: [
//       { source: "DeepSeek", target: "OpenAI", value: 5 },
//       { source: "DeepSeek", target: "Microsoft", value: 3 },
//       { source: "DeepSeek", target: "Google", value: 3 },
//       { source: "DeepSeek", target: "Investors", value: 4 },
//       { source: "DeepSeek", target: "Research", value: 5 },
//       { source: "DeepSeek", target: "Users", value: 4 },
//       { source: "DeepSeek", target: "Policy", value: 2 },
//       { source: "OpenAI", target: "Microsoft", value: 5 },
//       { source: "OpenAI", target: "Google", value: 3 },
//       { source: "Microsoft", target: "Google", value: 2 }
//     ]
//   };

//   useEffect(() => {
//     const updateDimensions = () => {
//       if (containerRef.current) {
//         setDimensions({
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight || 500
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full h-[600px] bg-white rounded-lg">
//       {dimensions.width > 0 && (
//         <ForceGraph2D
//           graphData={graphData}
//           nodeLabel="label"
//           nodeColor={node => {
//             const colors = [
//               '#4f46e5', // indigo
//               '#06b6d4', // cyan
//               '#10b981', // emerald
//               '#f59e0b', // amber
//               '#ef4444', // red
//               '#8b5cf6', // violet
//               '#ec4899'  // pink
//             ];
//             return colors[node.group - 1];
//           }}
//           nodeRelSize={6}
//           linkWidth={link => link.value}
//           linkColor={() => '#cccccc'}
//           backgroundColor="#ffffff"
//           width={dimensions.width}
//           height={dimensions.height}
//           onNodeDragEnd={node => {
//             node.fx = node.x;
//             node.fy = node.y;
//           }}
//           onNodeClick={node => {
//             node.fx = null;
//             node.fy = null;
//           }}
//           cooldownTicks={100}
//           enableZoom={true}
//           enableNodeDrag={true}
//           nodeCanvasObjectMode={() => 'after'}
//           nodeCanvasObject={(node, ctx, globalScale) => {
//             const label = node.label;
//             const fontSize = 12/globalScale;
//             ctx.font = `${fontSize}px Sans-Serif`;
//             ctx.textAlign = 'center';
//             ctx.textBaseline = 'middle';
//             ctx.fillStyle = 'black';
//             ctx.fillText(label, node.x, node.y + 12);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// function SectionMinus1() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % 3);
//     }, 2000);

//     return () => clearInterval(timer);
//   }, []);

//   const sections = [
//     {
//       icon: Globe,
//       title: "Breakthrough Development", 
//       content: "DeepSeek's AI model, DeepSeek-R1, has emerged as a significant competitor to Western AI systems, achieving top position on Apple's App Store while being developed at a fraction of the cost.",
//       highlight: "DeepSeek-R1"
//     },
//     {
//       icon: Code,
//       title: "Open Source Approach",
//       content: "Unlike many American AI companies, DeepSeek maintains an open model, making their code and technical documentation publicly available for global research and modification.",
//       highlight: "Open Innovation"
//     },
//     {
//       icon: TrendingDown,
//       title: "Market Impact",
//       content: "The emergence has affected major tech companies' shares, including Nvidia, Microsoft, and Alphabet, while intensifying discussions about the global AI race.",
//       highlight: "Global Impact"
//     }
//   ];

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header Section */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h1 className="text-2xl font-bold mb-4">Flash Report: Emerging Technology Brief</h1>
//           <p className="text-gray-700">DeepSeek AI Development: 4th Week January 2025</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="w-full">
//           <ReportStructure />
//         </div>
//         <div className="w-full">
//           <div className="w-full p-6 bg-white rounded-xl shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Stakeholder Network Analysis</h2>
//             <p className="text-gray-600 mb-4">
//               Interactive visualization of key stakeholders and their relationships.
//               Drag nodes to reposition, click to unpin, and scroll to zoom.
//             </p>
//             <NetworkGraph />
//           </div>
//         </div>
//       </div>

//       {/* Cards Grid Section */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {sections.map((section, index) => {
//           const isActive = index === activeIndex;
//           const Icon = section.icon;
          
//           return (
//             <div
//               key={index}
//               className={`
//                 transform transition-all duration-500
//                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
//                 ${isActive ? 'ring-2 ring-blue-500 shadow-lg scale-105' : 'hover:shadow-md'}
//                 bg-white rounded-lg shadow
//               `}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <div className="p-6 h-full">
//                 <div className={`
//                   transition-all duration-300
//                   ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                 `}>
//                   <Icon size={24} />
//                 </div>
                
//                 <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-900">
//                   {section.title}
//                 </h2>
                
//                 <p className="text-gray-600 mb-4">
//                   {section.content}
//                 </p>
                
//                 <div className={`
//                   inline-flex items-center text-sm font-medium
//                   ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                 `}>
//                   {section.highlight}
//                   <ArrowRight size={16} className="ml-1" />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex justify-center space-x-2">
//         {sections.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`
//               w-2 h-2 rounded-full transition-all duration-300
//               ${activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}
//             `}
//           />
//         ))}
//       </div>

//       {/* Timeline and Narrative Section */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         <div className="flex-1">
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-xl font-bold mb-4">Development Timeline</h2>
//             <TimelineComponent />
//           </div>
//         </div>
//         <div className="flex-1">
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-xl font-bold mb-4">Key Narrative</h2>
//             <NarrativeComponent />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SectionMinus1;
















import React, { useState, useEffect, useRef } from 'react';
import TimelineComponent from './TimelineComponent';
import NarrativeComponent from './NarrativeComponent';
import ReportStructure from './ReportStructure';
import ForceGraph2D from 'react-force-graph-2d';
import { ArrowRight, Globe, Code, TrendingDown } from 'lucide-react';

const NetworkGraph = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const fgRef = useRef();
  
  const [graphData] = useState({
    nodes: [
      { id: "DeepSeek", group: 1, label: "DeepSeek AI", size: 20, fx: 0, fy: 0 },
      { id: "OpenAI", group: 2, label: "OpenAI", size: 15, fx: 100, fy: -50 },
      { id: "Microsoft", group: 2, label: "Microsoft", size: 15, fx: -100, fy: -50 },
      { id: "Google", group: 2, label: "Google", size: 15, fx: 0, fy: -100 },
      { id: "Investors", group: 3, label: "Investors", size: 10, fx: 150, fy: 50 },
      { id: "Research", group: 4, label: "Research Community", size: 12, fx: -150, fy: 50 },
      { id: "Users", group: 5, label: "User Base", size: 8, fx: -75, fy: 100 },
      { id: "Policy", group: 6, label: "Policymakers", size: 10, fx: 75, fy: 100 }
    ],
    links: [
      { source: "DeepSeek", target: "OpenAI", value: 5, label: "Direct Competition" },
      { source: "DeepSeek", target: "Microsoft", value: 3, label: "Market Rivalry" },
      { source: "DeepSeek", target: "Google", value: 3, label: "Tech Competition" },
      { source: "DeepSeek", target: "Investors", value: 4, label: "Funding Channel" },
      { source: "DeepSeek", target: "Research", value: 5, label: "Open Innovation" },
      { source: "DeepSeek", target: "Users", value: 4, label: "User Growth" },
      { source: "DeepSeek", target: "Policy", value: 2, label: "Regulatory Impact" },
      { source: "OpenAI", target: "Microsoft", value: 5, label: "Strategic Partnership" },
      { source: "OpenAI", target: "Google", value: 3, label: "Industry Dynamics" },
      { source: "Microsoft", target: "Google", value: 2, label: "Market Competition" }
    ]
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight || 500
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[600px] bg-white rounded-lg">
      {dimensions.width > 0 && (
        <ForceGraph2D
          ref={fgRef}
          graphData={graphData}
          nodeLabel="label"
          nodeColor={node => {
            const colors = [
              '#4f46e5', // indigo
              '#06b6d4', // cyan
              '#10b981', // emerald
              '#f59e0b', // amber
              '#ef4444', // red
              '#8b5cf6', // violet
              '#ec4899'  // pink
            ];
            return colors[node.group - 1];
          }}
          nodeRelSize={6}
          linkWidth={link => link.value}
          linkColor={() => '#cccccc'}
          backgroundColor="#ffffff"
          width={dimensions.width}
          height={dimensions.height}
          onNodeDragEnd={node => {
            node.fx = node.x;
            node.fy = node.y;
            fgRef.current.d3Force('center', null);
          }}
          cooldownTime={Infinity}
          cooldownTicks={0}
          enableZoom={true}
          enableNodeDrag={true}
          nodeCanvasObjectMode={() => 'after'}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.label;
            const fontSize = 14/globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black';
            ctx.fillText(label, node.x, node.y + 12);
          }}
          linkCanvasObjectMode={() => 'after'}
          linkCanvasObject={(link, ctx, globalScale) => {
            const start = link.source;
            const end = link.target;
            const textPos = {
              x: start.x + (end.x - start.x) * 0.5,
              y: start.y + (end.y - start.y) * 0.5
            };
            const relLink = { x: end.x - start.x, y: end.y - start.y };
            const angle = Math.atan2(relLink.y, relLink.x);
            
            ctx.save();
            ctx.translate(textPos.x, textPos.y);
            ctx.rotate(angle);
            const fontSize = 14/globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#666';
            ctx.fillText(link.label, 0, -3);
            ctx.restore();
          }}
          forceEngine="d3"
          d3AlphaDecay={0}
          d3VelocityDecay={0.4}
          warmupTicks={0}
          cooldownTicks={0}
        />
      )}
    </div>
  );
};

function SectionMinus1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const sections = [
    {
      icon: Globe,
      title: "Breakthrough Development", 
      content: "DeepSeek's AI model, DeepSeek-R1, has emerged as a significant competitor to Western AI systems, achieving top position on Apple's App Store while being developed at a fraction of the cost.",
      highlight: "DeepSeek-R1"
    },
    {
      icon: Code,
      title: "Open Source Approach",
      content: "Unlike many American AI companies, DeepSeek maintains an open model, making their code and technical documentation publicly available for global research and modification.",
      highlight: "Open Innovation"
    },
    {
      icon: TrendingDown,
      title: "Market Impact",
      content: "The emergence has affected major tech companies' shares, including Nvidia, Microsoft, and Alphabet, while intensifying discussions about the global AI race.",
      highlight: "Global Impact"
    }
  ];

  return (
    <div className="p-4 space-y-8">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl font-bold mb-4">Flash Report: Emerging Technology Brief</h1>
          <p className="text-gray-700">DeepSeek AI Development: 4th Week January 2025</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
          <ReportStructure />
        </div>
        <div className="w-full">
          <div className="w-full p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stakeholder Network Analysis</h2>
            <p className="text-gray-600 mb-4">
              Interactive visualization of key stakeholders and their relationships.
              Drag nodes to reposition, click to unpin, and scroll to zoom.
            </p>
            <NetworkGraph />
          </div>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {sections.map((section, index) => {
          const isActive = index === activeIndex;
          const Icon = section.icon;
          
          return (
            <div
              key={index}
              className={`
                transform transition-all duration-500
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                ${isActive ? 'ring-2 ring-blue-500 shadow-lg scale-105' : 'hover:shadow-md'}
                bg-white rounded-lg shadow
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-6 h-full">
                <div className={`
                  transition-all duration-300
                  ${isActive ? 'text-blue-500' : 'text-gray-400'}
                `}>
                  <Icon size={24} />
                </div>
                
                <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-900">
                  {section.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {section.content}
                </p>
                
                <div className={`
                  inline-flex items-center text-sm font-medium
                  ${isActive ? 'text-blue-500' : 'text-gray-400'}
                `}>
                  {section.highlight}
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}
            `}
          />
        ))}
      </div>

      {/* Timeline and Narrative Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Development Timeline</h2>
            <TimelineComponent />
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Key Narrative</h2>
            <NarrativeComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionMinus1;
























// import React, { useState, useEffect, useRef } from 'react';
// import TimelineComponent from './TimelineComponent';
// import NarrativeComponent from './NarrativeComponent';
// import ReportStructure from './ReportStructure';
// import ForceGraph2D from 'react-force-graph-2d';
// import { ArrowRight, Globe, Code, TrendingDown } from 'lucide-react';

// const NetworkGraph = () => {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const containerRef = useRef(null);
//   const fgRef = useRef();

//   const graphData = {
//     nodes: [
//       { id: "DeepSeek", group: 1, label: "DeepSeek AI", size: 20, fx: null, fy: null },
//       { id: "OpenAI", group: 2, label: "OpenAI", size: 15, fx: null, fy: null },
//       { id: "Microsoft", group: 2, label: "Microsoft", size: 15, fx: null, fy: null },
//       { id: "Google", group: 2, label: "Google", size: 15, fx: null, fy: null },
//       { id: "Investors", group: 3, label: "Investors", size: 10, fx: null, fy: null },
//       { id: "Research", group: 4, label: "Research Community", size: 12, fx: null, fy: null },
//       { id: "Users", group: 5, label: "User Base", size: 8, fx: null, fy: null },
//       { id: "Policy", group: 6, label: "Policymakers", size: 10, fx: null, fy: null }
//     ],
//     links: [
//       { source: "DeepSeek", target: "OpenAI", value: 5, label: "Direct Competition" },
//       { source: "DeepSeek", target: "Microsoft", value: 3, label: "Market Rivalry" },
//       { source: "DeepSeek", target: "Google", value: 3, label: "Tech Competition" },
//       { source: "DeepSeek", target: "Investors", value: 4, label: "Funding Channel" },
//       { source: "DeepSeek", target: "Research", value: 5, label: "Open Innovation" },
//       { source: "DeepSeek", target: "Users", value: 4, label: "User Growth" },
//       { source: "DeepSeek", target: "Policy", value: 2, label: "Regulatory Impact" },
//       { source: "OpenAI", target: "Microsoft", value: 5, label: "Strategic Partnership" },
//       { source: "OpenAI", target: "Google", value: 3, label: "Industry Dynamics" },
//       { source: "Microsoft", target: "Google", value: 2, label: "Market Competition" }
//     ]
//   };

//   useEffect(() => {
//     const updateDimensions = () => {
//       if (containerRef.current) {
//         setDimensions({
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight || 500
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full h-[600px] bg-white rounded-lg">
//       {dimensions.width > 0 && (
//         <ForceGraph2D
//           ref={fgRef}
//           graphData={graphData}
//           nodeLabel="label"
//           nodeColor={node => {
//             const colors = [
//               '#4f46e5', // indigo
//               '#06b6d4', // cyan
//               '#10b981', // emerald
//               '#f59e0b', // amber
//               '#ef4444', // red
//               '#8b5cf6', // violet
//               '#ec4899'  // pink
//             ];
//             return colors[node.group - 1];
//           }}
//           nodeRelSize={6}
//           linkWidth={link => link.value}
//           linkColor={() => '#cccccc'}
//           backgroundColor="#ffffff"
//           width={dimensions.width}
//           height={dimensions.height}
//           onNodeDragEnd={node => {
//             // Permanently fix node position
//             node.fx = node.x;
//             node.fy = node.y;
//             // Stop simulation
//             fgRef.current.d3Force('center', null);
//           }}
//           cooldownTime={Infinity}
//           cooldownTicks={0}
//           enableZoom={true}
//           enableNodeDrag={true}
//           nodeCanvasObjectMode={() => 'after'}
//           nodeCanvasObject={(node, ctx, globalScale) => {
//             const label = node.label;
//             const fontSize = 12/globalScale;
//             ctx.font = `${fontSize}px Sans-Serif`;
//             ctx.textAlign = 'center';
//             ctx.textBaseline = 'middle';
//             ctx.fillStyle = 'black';
//             ctx.fillText(label, node.x, node.y + 12);
//           }}
//           linkCanvasObjectMode={() => 'after'}
//           linkCanvasObject={(link, ctx, globalScale) => {
//             const start = link.source;
//             const end = link.target;
//             const textPos = {
//               x: start.x + (end.x - start.x) * 0.5,
//               y: start.y + (end.y - start.y) * 0.5
//             };
//             const relLink = { x: end.x - start.x, y: end.y - start.y };
//             const angle = Math.atan2(relLink.y, relLink.x);
            
//             ctx.save();
//             ctx.translate(textPos.x, textPos.y);
//             ctx.rotate(angle);
//             const fontSize = 3.5/globalScale;
//             ctx.font = `${fontSize}px Sans-Serif`;
//             ctx.textAlign = 'center';
//             ctx.textBaseline = 'middle';
//             ctx.fillStyle = '#666';
//             ctx.fillText(link.label, 0, -3);
//             ctx.restore();
//           }}
//         />
//       )}
//     </div>
//   );
// };

// function SectionMinus1() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % 3);
//     }, 2000);

//     return () => clearInterval(timer);
//   }, []);

//   const sections = [
//     {
//       icon: Globe,
//       title: "Breakthrough Development", 
//       content: "DeepSeek's AI model, DeepSeek-R1, has emerged as a significant competitor to Western AI systems, achieving top position on Apple's App Store while being developed at a fraction of the cost.",
//       highlight: "DeepSeek-R1"
//     },
//     {
//       icon: Code,
//       title: "Open Source Approach",
//       content: "Unlike many American AI companies, DeepSeek maintains an open model, making their code and technical documentation publicly available for global research and modification.",
//       highlight: "Open Innovation"
//     },
//     {
//       icon: TrendingDown,
//       title: "Market Impact",
//       content: "The emergence has affected major tech companies' shares, including Nvidia, Microsoft, and Alphabet, while intensifying discussions about the global AI race.",
//       highlight: "Global Impact"
//     }
//   ];

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header Section */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h1 className="text-2xl font-bold mb-4">Flash Report: Emerging Technology Brief</h1>
//           <p className="text-gray-700">DeepSeek AI Development: 4th Week January 2025</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="w-full">
//           <ReportStructure />
//         </div>
//         <div className="w-full">
//           <div className="w-full p-6 bg-white rounded-xl shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Stakeholder Network Analysis</h2>
//             <p className="text-gray-600 mb-4">
//               Interactive visualization of key stakeholders and their relationships.
//               Drag nodes to reposition, click to unpin, and scroll to zoom.
//             </p>
//             <NetworkGraph />
//           </div>
//         </div>
//       </div>

//       {/* Cards Grid Section */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {sections.map((section, index) => {
//           const isActive = index === activeIndex;
//           const Icon = section.icon;
          
//           return (
//             <div
//               key={index}
//               className={`
//                 transform transition-all duration-500
//                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
//                 ${isActive ? 'ring-2 ring-blue-500 shadow-lg scale-105' : 'hover:shadow-md'}
//                 bg-white rounded-lg shadow
//               `}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <div className="p-6 h-full">
//                 <div className={`
//                   transition-all duration-300
//                   ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                 `}>
//                   <Icon size={24} />
//                 </div>
                
//                 <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-900">
//                   {section.title}
//                 </h2>
                
//                 <p className="text-gray-600 mb-4">
//                   {section.content}
//                 </p>
                
//                 <div className={`
//                   inline-flex items-center text-sm font-medium
//                   ${isActive ? 'text-blue-500' : 'text-gray-400'}
//                 `}>
//                   {section.highlight}
//                   <ArrowRight size={16} className="ml-1" />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex justify-center space-x-2">
//         {sections.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`
//               w-2 h-2 rounded-full transition-all duration-300
//               ${activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}
//             `}
//           />
//         ))}
//       </div>

//       {/* Timeline and Narrative Section */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         <div className="flex-1">
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-xl font-bold mb-4">Development Timeline</h2>
//             <TimelineComponent />
//           </div>
//         </div>
//         <div className="flex-1">
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-xl font-bold mb-4">Key Narrative</h2>
//             <NarrativeComponent />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SectionMinus1;






















