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
  
//   const [graphData] = useState({
//     nodes: [
//       { id: "DeepSeek", group: 1, label: "DeepSeek AI", size: 20, fx: 0, fy: 0 },
//       { id: "OpenAI", group: 2, label: "OpenAI", size: 15, fx: 100, fy: -50 },
//       { id: "Microsoft", group: 2, label: "Microsoft", size: 15, fx: -100, fy: -50 },
//       { id: "Google", group: 2, label: "Google", size: 15, fx: 0, fy: -100 },
//       { id: "Investors", group: 3, label: "Investors", size: 10, fx: 150, fy: 50 },
//       { id: "Research", group: 4, label: "Research Community", size: 12, fx: -150, fy: 50 },
//       { id: "Users", group: 5, label: "User Base", size: 8, fx: -75, fy: 100 },
//       { id: "Policy", group: 6, label: "Policymakers", size: 10, fx: 75, fy: 100 }
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
//   });

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
//             node.fx = node.x;
//             node.fy = node.y;
//             fgRef.current.d3Force('center', null);
//           }}
//           cooldownTime={Infinity}
//           cooldownTicks={0}
//           enableZoom={true}
//           enableNodeDrag={true}
//           nodeCanvasObjectMode={() => 'after'}
//           nodeCanvasObject={(node, ctx, globalScale) => {
//             const label = node.label;
//             const fontSize = 14/globalScale;
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
//             const fontSize = 14/globalScale;
//             ctx.font = `${fontSize}px Sans-Serif`;
//             ctx.textAlign = 'center';
//             ctx.textBaseline = 'middle';
//             ctx.fillStyle = '#666';
//             ctx.fillText(link.label, 0, -3);
//             ctx.restore();
//           }}
//           forceEngine="d3"
//           d3AlphaDecay={0}
//           d3VelocityDecay={0.4}
//           warmupTicks={0}
//           cooldownTicks={0}
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
//   }, []);

//   useEffect(() => {
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
//       {/* <div className="bg-white rounded-lg shadow p-6"> */}
//       <div className="bg-blue-300 p-8 border-b border-gray-200 mb-6">

//         <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h1 className="text-4xl font-bold mb-4">Flash Report: Emerging Technology Brief</h1>
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



//       <div className="bg-blue-100 p-8 border-b border-gray-200 mb-6">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//         DeepSeek-R1: Unpacking the Key Themes Behind the AI Disruption
//         </h1>
//         <p className="text-gray-600 text-lg">
//         Exploring the dominant narratives shaping the DeepSeek-R1 story—technological breakthroughs, market upheaval, backlash, strategic responses, and long-term implications.
//         </p>
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




//       <div className="bg-blue-100 p-8 border-b border-gray-200 mb-6">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           DeepSeek-R1: Market Impact Overview
//         </h1>
//         <p className="text-gray-600 text-lg">
//         Real-time market performance tracker
//         </p>
//       </div>




//       {/* Timeline and Narrative Section */}
//       {/* <div className="grid grid-cols-12 gap-6 items-stretch"> */}
//       {/* <div className="grid grid-cols-12 gap-6 items-stretch mb-8"> */}
//       <div className="grid grid-cols-12 gap-6 items-stretch mb-0">
//         {/* Left: Development Timeline */}
//         <div className="col-span-12 lg:col-span-6 flex flex-col h-full">
//           <div className="bg-gray-200 rounded-lg shadow p-6 h-full">
//             <h2 className="text-xl font-bold mb-4">Development Timeline</h2>
//             <TimelineComponent />
//           </div>
//         </div>

//         {/* Right: Key Narrative */}
//         <div className="col-span-12 lg:col-span-6 flex flex-col h-full">
//           <div className="bg-gray-200 rounded-lg shadow p-6 h-full">
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
import { 
  ArrowRight, 
  Globe, 
  Code, 
  TrendingDown, 
  Info, 
  ChevronDown, 
  ChevronUp,
  Database,
  Users,
  Shield,
  Briefcase,
  Flame,
  Cpu,
  DollarSign,
  BarChart,
  Scale,
  Zap,
  Clock,
  FileText,
  Github,
  Video,
  BookOpen
} from 'lucide-react';







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
  const [expandedNotice, setExpandedNotice] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 6); 
    }, 2000);

    return () => clearInterval(timer);
}, []);


  const notice = {
    short: "ADVISORY: This is a fast-moving story with ongoing developments, current as of the time of release, with its full impact still unfolding.",
    full: "This story is evolving rapidly with far-reaching implications. DeepSeek-R1’s impact is still unfolding, and our coverage highlights key trends rather than providing a final analysis. As new information emerges, perspectives and risks will continue to develop. We encourage readers to stay informed as the landscape shifts."
  };

  const resources = [
    {
      title: "Research Paper",
      description: "DeepSeek's official research paper, titled 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning,' details the model's development and capabilities.",
      link: "https://arxiv.org/abs/2501.12948",
      icon: FileText,
      category: "Official Releases"
    },
    {
      title: "GitHub Repository",
      description: "The official DeepSeek-R1 code repository is available on GitHub, providing access to the model's code and technical documentation.",
      link: "https://github.com/deepseek-ai/DeepSeek-R1",
      icon: Github,
      category: "Official Releases"
    },
    {
      title: "Technical Report",
      description: "The technical report for DeepSeek-R1 is accessible within the GitHub repository, offering in-depth insights into the model's architecture and training methodology.",
      link: "https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf",
      icon: BookOpen,
      category: "Technical Documentation"
    },
    {
      title: "Industry Analysis",
      description: "An article from The Atlantic provides an in-depth analysis of DeepSeek-R1's impact on the AI industry, comparing it to models from OpenAI and discussing its implications for global AI development.",
      link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/",
      icon: BarChart,
      category: "Assessments and Comparisons"
    },
    {
      title: "Technical Breakdown",
      description: "A video titled 'A Slightly Technical Breakdown of DeepSeek-R1' offers a detailed examination of the model's architecture and performance.",
      link: "https://www.youtube.com/watch?v=CiS9gDfYZ-w&utm_source=chatgpt.com",
      icon: Video,
      category: "Assessments and Comparisons"
    }
  ];

const sections = [
    {
      icon: Globe,
      title: "Technological Breakthroughs", 
      content: "DeepSeek-R1 has emerged as a major competitor to Western AI models, demonstrating advanced reasoning capabilities while achieving top ranking on Apple's App Store. Developed at a fraction of the cost of its competitors, it challenges traditional AI scaling assumptions.",
      highlight: "DeepSeek-R1 Innovation"
    },
    {
      icon: Code,
      title: "Open Source Approach",
      content: "Unlike many proprietary AI models, DeepSeek has embraced an open-source strategy, making its model weights, code, and research openly available. This approach has accelerated global collaboration while sparking regulatory and security debates.",
      highlight: "Open Innovation"
    },
    {
      icon: TrendingDown,
      title: "Market Disruptions",
      content: "DeepSeek-R1’s release triggered market volatility, causing sharp declines in tech stocks, including Nvidia, Microsoft, and Alphabet. The event has intensified discussions about AI infrastructure investments and the long-term viability of proprietary models.",
      highlight: "Global Impact"
    },
    {
      icon: Briefcase,
      title: "Strategic Industry Responses",
      content: "Tech giants like OpenAI, Microsoft, and Meta have moved quickly to counter DeepSeek’s unexpected competitive pressure. Responses include accelerated product rollouts, increased investment in open-source alternatives, and strategic realignments in AI development.",
      highlight: "AI Industry Shift"
    },
    {
      icon: Shield,
      title: "Geopolitical and Security Concerns",
      content: "DeepSeek’s rapid adoption has raised concerns over AI governance, data security, and national security risks. U.S. officials have flagged potential risks linked to AI-driven data collection and China’s expanding role in the global AI race.",
      highlight: "AI and National Security"
    },
    {
      icon: Flame,
      title: "Backlash and Controversies",
      content: "DeepSeek-R1 has ignited debates on AI ethics, data privacy, and potential censorship in model outputs. While some praise its accessibility, critics warn of misuse, model bias, and regulatory gaps in governing powerful open-source AI.",
      highlight: "AI Ethics & Public Debate"
    }
];


  return (
    <div className="p-4 space-y-8">


      {/* Header Section */}
      <div className="bg-blue-300 p-8 border-b border-gray-200 mb-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl font-bold mb-4">Flash Report: Emerging Technology Brief</h1>
          <p className="text-gray-700">DeepSeek AI Development: 4th Week January 2025</p>
        </div>
      </div>

      {/* Expandable Notice */}
      <div className="max-w-full my-4">
        <div className="bg-red-50 rounded-lg shadow-sm border border-red-100">
          <button
            onClick={() => setExpandedNotice(!expandedNotice)}
            className="w-full px-4 py-3 flex items-center justify-between text-red-800 hover:bg-red-100 transition-colors"
          >
            <div className="flex items-center space-x-2">
              <Info className="text-red-800" size={24} />
              <span className="text-lg font-medium">
                {expandedNotice ? "ADVISORY" : notice.short}
              </span>
            </div>
            {expandedNotice ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedNotice && (
            <div className="px-4 py-3 border-t border-red-200 bg-red-50">
              <p className="text-lg font-medium text-red-800">{notice.full}</p>
            </div>
          )}
        </div>
      </div>





      {/* Two Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">

          {/* <h2 className="text-2xl font-bold text-gray-900 mb-4">Stakeholder Network Analysis</h2> */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>

          <h4 className="text-l font-semibold mb-4">DeepSeek-R1’s Disruptive Emergence and Global Impact:</h4>

          <p className="text-gray-600">          
          DeepSeek-R1, a <strong>Chinese-developed</strong>, open-source AI model, has rapidly reshaped the AI landscape, sparking <strong>market turmoil</strong>, <strong>industry realignment</strong>, <strong>geopolitical scrutiny</strong>, and <strong>regulatory debates</strong>. The model, released on <strong>January 20, 2025</strong>, quickly gained traction for its <strong>high reasoning capabilities</strong> while being developed at a fraction of the cost of its Western counterparts. Its rapid adoption—topping the <strong>U.S. App Store</strong>—triggered <strong>stock market declines</strong> for major AI-driven companies, including <strong>Nvidia</strong>, <strong>Microsoft</strong>, and <strong>Alphabet</strong>. <br />
          <br />
          </p>

          <p className="text-gray-600">
          As <strong>DeepSeek’s influence</strong> grows, so do <strong>national security concerns</strong> in the <strong>U.S.</strong>, with the <strong>White House</strong> reviewing potential risks and the <strong>U.S. Navy</strong> banning the app on security grounds. Meanwhile, <strong>privacy advocates</strong> have raised alarms over <strong>data governance</strong> and <strong>censorship risks</strong>, prompting discussions on <strong>AI regulation</strong>. Industry leaders are recalibrating strategies, with <strong>OpenAI</strong>, <strong>Microsoft</strong>, and <strong>Alibaba</strong> responding to the <strong>unexpected competitive pressure</strong>. The story remains <strong>fast-moving</strong>, with implications for <strong>global AI leadership</strong>, <strong>economic investments</strong>, and <strong>regulatory policies</strong> still unfolding.
          </p>

          <br />
          <h3 className="text-l font-semibold mb-4">Key Takeaways & Strategic Implications:</h3>
          {/* <h3 className="text-xl font-bold text-gray-900 mb-2">Key Takeaways & Strategic Implications:</h3> */}
          <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-4">
            <li>
              <strong>AI Market Disruption:</strong> DeepSeek’s rapid success has forced a reassessment of AI investment strategies, raising competitive pressure on incumbents like OpenAI and Microsoft.
            </li>
            <li>
              <strong>Global AI Power Shift:</strong> DeepSeek’s emergence challenges U.S. dominance in AI, with China solidifying its influence in AI research and development.
            </li>
            <li>
              <strong>Security & Regulation Risks:</strong> The U.S. government has begun evaluating AI national security concerns, with potential regulatory actions on the horizon.
            </li>
            <li>
              <strong>Backlash & Ethical Questions:</strong> Data privacy concerns, potential censorship issues, and AI safety vulnerabilities remain under scrutiny.
            </li>
          </ul>


          <h4 className="text-l font-semibold mb-4">The situation remains fluid. DeepSeek-R1’s trajectory continues to evolve, with policy responses, technological adaptations, and market shifts shaping the next phase.</h4>










        </div>



{/* 

<div className="bg-white p-6 rounded-lg shadow">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Readings</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {resources.map((resource, index) => {
      const Icon = resource.icon;
      return (
        <a
          key={index}
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"

          className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">{resource.category}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </div>
          </div>
        </a>
      );
    })}
  </div>
</div> */}



{/* 
<div className="bg-white p-8 rounded-lg shadow-sm">
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Readings</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {resources.map((resource, index) => {
      const Icon = resource.icon;
      return (
        <a
          key={index}
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:shadow-md"
        >
          <div className="space-y-4">
            <div className="flex items-center mb-2">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-500 ml-3">{resource.category}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{resource.description}</p>
            </div>
          </div>
        </a>
      )
    })}
  </div>
</div> */}




{/* 

<div className="bg-white p-8 rounded-lg shadow-sm">
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Readings</h2>
  <div className="grid grid-cols-1 gap-8"> 
    {resources.map((resource, index) => {
      const Icon = resource.icon;
      return (
        <a
          key={index}
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:shadow-md"
        >
          <div className="space-y-4">
            <div className="flex items-center mb-2">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-500 ml-3">{resource.category}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{resource.description}</p>
            </div>
          </div>
        </a>
      )
    })}
  </div>
</div>


 */}


<div className="bg-white p-4 rounded-lg shadow-sm">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Readings</h2>
  <div className="grid grid-cols-1 gap-4">
    {resources.map((resource, index) => {
      const Icon = resource.icon;
      return (
        <a
          key={index}
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-sm"
        >
          <div className="space-y-2">
            <div className="flex items-center mb-1">
              <div className="p-1.5 bg-blue-50 rounded-md">
                <Icon className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-sm text-gray-500 ml-2">{resource.category}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{resource.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{resource.description}</p>
            </div>
          </div>
        </a>
      )
    })}
  </div>
</div>












      </div>


      {/* Two Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Key Statistics</h3>
          <h4 className="text-l font-semibold mb-4">DeepSeek-R1’s Disruptive Emergence and Global Impact</h4>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div> */}









<div className="bg-white p-6 rounded-lg shadow">
 <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Statistics</h2>
 <h4 className="text-l font-semibold mb-4">Summary: DeepSeek-R1's Disruptive Emergence and Global Impact</h4>


        <p className="text-gray-600">
          {/* As <strong>DeepSeek’s influence</strong> grows, so do <strong>national security concerns</strong> in the <strong>U.S.</strong>, with the <strong>White House</strong> reviewing potential risks and the <strong>U.S. Navy</strong> banning the app on security grounds. Meanwhile, <strong>privacy advocates</strong> have raised alarms over <strong>data governance</strong> and <strong>censorship risks</strong>, prompting discussions on <strong>AI regulation</strong>. Industry leaders are recalibrating strategies, with <strong>OpenAI</strong>, <strong>Microsoft</strong>, and <strong>Alibaba</strong> responding to the <strong>unexpected competitive pressure</strong>. The story remains <strong>fast-moving</strong>, with implications for <strong>global AI leadership</strong>, <strong>economic investments</strong>, and <strong>regulatory policies</strong> still unfolding. */}
          DeepSeek-R1 has <strong>fundamentally disrupted the AI landscape</strong> by delivering <strong>state-of-the-art performance</strong> at a <strong>fraction of the cost and time</strong> of its competitors. Its <strong>low-cost, high-efficiency model</strong> has triggered a <strong>$1 trillion market cap loss</strong>, with <strong>Nvidia alone losing $593B</strong>. The model’s <strong>open-source approach</strong> is accelerating <strong>global AI collaboration</strong> while raising <strong>national security</strong> and <strong>regulatory concerns</strong>. With <strong>20-50x lower operational costs</strong> and <strong>faster deployment</strong>, DeepSeek-R1 is <strong>reshaping AI economics, industry strategy, and geopolitical competition</strong> in real time.
          <br />
          <br />
          </p>


 
 {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3"> */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">

   <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
     <div className="flex items-center gap-2 mb-1">
       <DollarSign className="w-5 h-5 text-blue-600" />
       <h5 className="font-semibold text-sm text-gray-700">Development Cost</h5>
     </div>
     <div className="flex justify-between items-center gap-2">
       <div className="text-center flex-1">
         <div className="text-3xl font-bold text-blue-600">$6M</div>
         <div className="text-xs text-gray-600">DeepSeek-R1</div>
       </div>
       <div className="text-gray-400 text-xs">vs</div>
       <div className="text-center flex-1">
         <div className="text-3xl font-bold text-gray-600">$60M</div>
         <div className="text-xs text-gray-600">Industry Standard</div>
       </div>
     </div>
   </div>

   <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
     <div className="flex items-center gap-2 mb-1">
       <Cpu className="w-5 h-5 text-blue-600" />
       <h5 className="font-semibold text-sm text-gray-700">GPU Resources</h5>
     </div>
     <div className="flex justify-between items-center gap-2">
       <div className="text-center flex-1">
         <div className="text-3xl font-bold text-blue-600">2K</div>
         <div className="text-xs text-gray-600">DeepSeek-R1</div>
       </div>
       <div className="text-gray-400 text-xs">vs</div>
       <div className="text-center flex-1">
         <div className="text-3xl font-bold text-gray-600">16K</div>
         <div className="text-xs text-gray-600">Industry Standard</div>
       </div>
     </div>
   </div>
 </div>




 <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
     <div className="flex items-center gap-2 mb-1">
       <Clock className="w-5 h-5 text-blue-600" />
       <h5 className="font-semibold text-sm text-gray-700">Training Duration</h5>
     </div>
     <div className="flex justify-between items-center gap-2">
       <div className="text-center flex-1">
         <div className="text-3xl font-bold text-blue-600">2</div>
         <div className="text-xs text-gray-600">Months for DeepSeek-R1</div>
       </div>
     </div>
   </div>




   
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
   <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-red-500">
     <div className="flex items-center gap-2 mb-1">
       <TrendingDown className="w-5 h-5 text-blue-600" />
       <h5 className="font-semibold text-sm text-gray-700">Nvidia Market Impact</h5>
     </div>
     <div className="flex justify-between items-center gap-2">
       <div className="text-center flex-1">
         <div className="text-3xl font-bold text-blue-600">$593B</div>
         <div className="text-xs text-gray-600">Market value decrease</div>
       </div>
     </div>
   </div>

   <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-red-500">
     <div className="flex items-center gap-2 mb-1">
       <BarChart className="w-5 h-5 text-blue-600" />
       <h5 className="font-semibold text-sm text-gray-700">Total Market Effect</h5>
     </div>
     <div className="flex justify-between items-center gap-2">
       <div className="text-center flex-1">
         <div className="text-3xl font-bold text-blue-600">$1T</div>
         <div className="text-xs text-gray-600">Global tech market cap reduction</div>
       </div>
     </div>
   </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
   <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-green-500">
     <div className="flex items-center gap-2 mb-1">
       <Scale className="w-5 h-5 text-blue-600" />
       <h5 className="font-semibold text-sm text-gray-700">Token Costs (1M tokens)</h5>
     </div>
     <div className="flex justify-between items-center gap-2">
       <div className="text-center flex-1">
         <div className="text-3xl font-bold text-blue-600">$0.55</div>
         <div className="text-xs text-gray-600">Input Cost</div>
       </div>
       <div className="text-gray-400 text-xs">vs</div>
       <div className="text-center flex-1">
         <div className="text-3xl font-bold text-gray-600">$2.19</div>
         <div className="text-xs text-gray-600">Output Cost</div>
       </div>
     </div>
   </div>

   <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-green-500">
     <div className="flex items-center gap-2 mb-1">
       <Zap className="w-5 h-5 text-blue-600" />
       <h5 className="font-semibold text-sm text-gray-700">Cost Efficiency</h5>
     </div>
     <div className="flex justify-between items-center gap-2">
       <div className="text-center flex-1">
         <div className="text-3xl font-bold text-blue-600">20-50x</div>
         <div className="text-xs text-gray-600">More cost-efficient than competitors</div>
       </div>
     </div>
   </div>
 </div>


 <h4 className="text-l font-semibold mb-4"> <br /> <br />So What?</h4>


 <p className="text-gray-600">
          {/* As <strong>DeepSeek’s influence</strong> grows, so do <strong>national security concerns</strong> in the <strong>U.S.</strong>, with the <strong>White House</strong> reviewing potential risks and the <strong>U.S. Navy</strong> banning the app on security grounds. Meanwhile, <strong>privacy advocates</strong> have raised alarms over <strong>data governance</strong> and <strong>censorship risks</strong>, prompting discussions on <strong>AI regulation</strong>. Industry leaders are recalibrating strategies, with <strong>OpenAI</strong>, <strong>Microsoft</strong>, and <strong>Alibaba</strong> responding to the <strong>unexpected competitive pressure</strong>. The story remains <strong>fast-moving</strong>, with implications for <strong>global AI leadership</strong>, <strong>economic investments</strong>, and <strong>regulatory policies</strong> still unfolding. */}

          DeepSeek-R1 is a <strong>game-changer</strong> that <strong>rewrites the rules</strong> of <strong>AI development</strong>, <strong>cost structures</strong>, and <strong>global competition</strong>. It forces <strong>tech giants</strong> to adapt quickly or risk <strong>obsolescence</strong>, while <strong>governments scramble</strong> to assess its <strong>security risks</strong>. The <strong>AI race</strong> is no longer just about <strong>capability</strong>—it’s now about <strong>access, cost, and control</strong>. This shift accelerates <strong>open-source adoption</strong>, reshapes <strong>AI investment strategies</strong>, and intensifies <strong>geopolitical tensions</strong> over <strong>AI leadership</strong>.
          </p>

</div>




        {/* <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deepseek Company</h2>
          <p className="text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div> */}
{/* 
<div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deepseek Company</h2>
          <p className="text-gray-600 mb-4">
            DeepSeek, officially known as Hangzhou DeepSeek Artificial Intelligence Basic Technology Research Co., Ltd., is a Chinese artificial intelligence company based in Hangzhou, Zhejiang Province. Founded in 2023 by entrepreneur Liang Wenfeng, the company specializes in developing open-source large language models (LLMs).
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Background:</h3>
          <p className="text-gray-600 mb-4">
            Before establishing DeepSeek, Liang Wenfeng co-founded the hedge fund High-Flyer in 2016, focusing on AI-driven trading algorithms. By 2021, High-Flyer exclusively utilized AI for trading. In April 2023, High-Flyer initiated an artificial general intelligence lab dedicated to AI research, which evolved into DeepSeek in May 2023. The company is solely funded by High-Flyer.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Key Releases:</h3>
          <p className="text-gray-600 mb-2">
            <strong>DeepSeek-Coder (November 2023):</strong> An open-source model designed for coding tasks, marking the company's initial foray into AI model development.
          </p>
          <p className="text-gray-600 mb-2">
            <strong>DeepSeek-LLM Series (November 2023):</strong> Released models with 7B and 67B parameters in both 'Base' and 'Chat' forms, developed to compete with other LLMs available at the time.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>DeepSeek-R1 (January 2025):</strong> A significant advancement, this model was developed at a fraction of the cost of comparable models and required only a tenth of the computing power. Upon its release, DeepSeek-R1 quickly surpassed ChatGPT as the most-downloaded free app on the U.S. iOS App Store, leading to a notable 18% drop in Nvidia's share price.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Innovations and Impact:</h3>
          <p className="text-gray-600 mb-4">
            DeepSeek's models have been recognized for their efficiency and performance, challenging the notion that only large tech firms with vast financial resources can dominate the AI field. The company's open-source approach has fostered collaborative innovation, potentially challenging current U.S. AI export limitations.
          </p>
          <p className="text-gray-600 mb-4">
            The company's success has disrupted the stock market, with notable dips in tech stocks, including Nvidia. DeepSeek's R1 model is more cost-effective for users, potentially pressuring U.S. companies' margins and investment incentives.
          </p>
          <p className="text-gray-600 mb-4">
            DeepSeek's emergence underscores China's growing capabilities in AI technology, highlighting the nation's potential to compete with the U.S. in AI advancements.
          </p>
          <p className="text-gray-600">
            Through its innovative approaches and rapid development, DeepSeek has positioned itself as a significant player in the global AI landscape.
          </p>
        </div>

 */}





        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deepseek Company</h2>
          <p className="text-gray-600 mb-4">
            DeepSeek, officially known as Hangzhou DeepSeek Artificial Intelligence Basic Technology Research Co., Ltd., is a Chinese artificial intelligence company based in Hangzhou, Zhejiang Province. Founded in 2023 by entrepreneur Liang Wenfeng, the company specializes in developing open-source large language models (LLMs).
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Background:</h3>
          <p className="text-gray-600 mb-4">
            Before establishing DeepSeek, Liang Wenfeng co-founded the hedge fund High-Flyer in 2016, focusing on AI-driven trading algorithms. By 2021, High-Flyer exclusively utilized AI for trading. In April 2023, High-Flyer initiated an artificial general intelligence lab dedicated to AI research, which evolved into DeepSeek in May 2023. The company is solely funded by High-Flyer.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Key Releases:</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-4">
            <li>
              <strong>DeepSeek-Coder (November 2023):</strong> An open-source model designed for coding tasks, marking the company's initial foray into AI model development.
            </li>
            <li>
              <strong>DeepSeek-LLM Series (November 2023):</strong> Released models with 7B and 67B parameters in both 'Base' and 'Chat' forms, developed to compete with other LLMs available at the time.
            </li>
            <li>
              <strong>DeepSeek-R1 (January 2025):</strong> A significant advancement, this model was developed at a fraction of the cost of comparable models and required only a tenth of the computing power. Upon its release, DeepSeek-R1 quickly surpassed ChatGPT as the most-downloaded free app on the U.S. iOS App Store, leading to a notable 18% drop in Nvidia's share price.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Innovations and Impact:</h3>
          <p className="text-gray-600 mb-4">
            DeepSeek's models have been recognized for their efficiency and performance, challenging the notion that only large tech firms with vast financial resources can dominate the AI field. The company's open-source approach has fostered collaborative innovation, potentially challenging current U.S. AI export limitations.
          </p>
          <p className="text-gray-600 mb-4">
            The company's success has disrupted the stock market, with notable dips in tech stocks, including Nvidia. DeepSeek's R1 model is more cost-effective for users, potentially pressuring U.S. companies' margins and investment incentives.
          </p>
          <p className="text-gray-600 mb-4">
            DeepSeek's emergence underscores China's growing capabilities in AI technology, highlighting the nation's potential to compete with the U.S. in AI advancements.
          </p>
          <p className="text-gray-600">
            Through its innovative approaches and rapid development, DeepSeek has positioned itself as a significant player in the global AI landscape.
          </p>
        </div>












      </div>







      {/* Stakeholder Network Analysis */}

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

      <div className="bg-blue-100 p-8 border-b border-gray-200 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
        DeepSeek-R1: Unpacking the Key Themes Behind the AI Disruption
        </h1>
        <p className="text-gray-600 text-lg">
        Exploring the dominant narratives shaping the DeepSeek-R1 story—technological breakthroughs, market upheaval, backlash, strategic responses, and long-term implications.
        </p>
      </div>



      <div className="bg-white p-4 rounded-lg shadow">
  <h3 className="text-lg font-bold mb-2">Narrative Timeline Analysis</h3>
  <h4 className="text-sm font-semibold mb-4">Phases and Thematic Clusters of DeepSeek-R1's Impact</h4>

  <div className="relative mt-4">
    {/* Phase Headers */}
    <div className="grid grid-cols-3 mb-2 text-xs font-medium text-gray-600 border-b">
      <div className="px-1">Early Awareness (20-22 Jan)</div>
      <div className="px-1">Peak Interest & Market Shock (24-25 Jan)</div>
      <div className="px-1">Economic & Policy Phase (27 Jan+)</div>
    </div>

    {/* Timeline Rows */}
    <div className="space-y-2">
      {/* Tech Breakthroughs */}
      <div className="h-8 relative">
        <div className="absolute left-0 w-1/3 h-6 bg-blue-100 rounded-md border border-blue-200 flex items-center px-2 text-xs">
          Tech Breakthroughs
        </div>
        <div className="absolute left-1/3 w-1/3 h-6 bg-blue-100 rounded-md border border-blue-200 flex items-center px-2 text-xs">
          App Store Success
        </div>
      </div>

      {/* Open Source */}
      <div className="h-8 relative">
        <div className="absolute left-[10%] w-1/4 h-6 bg-green-100 rounded-md border border-green-200 flex items-center px-2 text-xs">
          Open Source Release
        </div>
      </div>

      {/* Market Disruption */}
      <div className="h-8 relative">
        <div className="absolute left-1/3 w-2/3 h-6 bg-red-100 rounded-md border border-red-200 flex items-center px-2 text-xs">
          Market Reactions & Economic Impact
        </div>
      </div>

      {/* Strategic Response */}
      <div className="h-8 relative">
        <div className="absolute left-[45%] w-[45%] h-6 bg-purple-100 rounded-md border border-purple-200 flex items-center px-2 text-xs">
          Industry Strategic Response
        </div>
      </div>

      {/* Geopolitical */}
      <div className="h-8 relative">
        <div className="absolute left-1/2 w-1/2 h-6 bg-orange-100 rounded-md border border-orange-200 flex items-center px-2 text-xs">
          Geopolitical Concerns
        </div>
      </div>

      {/* Controversies */}
      <div className="h-8 relative">
        <div className="absolute left-2/3 w-1/3 h-6 bg-red-200 rounded-md border border-red-200 flex items-center px-2 text-xs ">
          Emerging Controversies
        </div>
      </div>
    </div>

    {/* Legend */}
    <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
      <div className="flex items-center">
        <div className="w-3 h-3 bg-blue-100 border border-blue-200 rounded mr-1"></div>
        <span>Technology</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-green-100 border border-green-200 rounded mr-1"></div>
        <span>Open Source</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-red-100 border border-red-200 rounded mr-1"></div>
        <span>Market Impact</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-purple-100 border border-purple-200 rounded mr-1"></div>
        <span>Strategic</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-orange-100 border border-orange-200 rounded mr-1"></div>
        <span>Geopolitical</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-red-200 border border-red-200 rounded mr-1"></div>
        <span>Controversies</span>
      </div>
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

      <div className="bg-blue-100 p-8 border-b border-gray-200 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          DeepSeek-R1: Market Impact Overview
        </h1>
        <p className="text-gray-600 text-lg">
        Real-time market performance tracker
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 items-stretch mb-0">
        {/* Left: Development Timeline */}
        <div className="col-span-12 lg:col-span-6 flex flex-col h-full">
          <div className="bg-gray-200 rounded-lg shadow p-6 h-full">
            <h2 className="text-xl font-bold mb-4">Development Timeline</h2>
            <TimelineComponent />
          </div>
        </div>

        {/* Right: Key Narrative */}
        <div className="col-span-12 lg:col-span-6 flex flex-col h-full">
          <div className="bg-gray-200 rounded-lg shadow p-6 h-full">
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






















