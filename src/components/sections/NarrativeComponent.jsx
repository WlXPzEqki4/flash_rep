// // src/components/sections/NarrativeComponent.jsx
// import React from 'react';

// function NarrativeComponent() {
//   return (
//     // <div className="w-full lg:w-1/2 pb-8 pl-8">
//             <div className="w-full">

//       {/* <h2 className="text-2xl font-bold mb-8">Key Narrative</h2> */}
      
//       {/* <div className="space-y-6 text-gray-700"> */}
//       <div className="space-y-6 text-gray-700">

//         <p className="leading-relaxed">
//           In the past week, the Chinese artificial intelligence start-up DeepSeek has made a significant breakthrough with the release of its AI model, DeepSeek-R1. This model rivals leading Western AI systems, such as OpenAI's ChatGPT, in capabilities but was developed at a fraction of the cost. Notably, DeepSeek-R1 has surpassed ChatGPT as the top free application on Apple's App Store in the United States.
//         </p>

//         <p className="leading-relaxed">
//           DeepSeek's approach contrasts with that of many American AI companies by maintaining a relatively open model. The company has made the program's final code and a detailed technical explanation publicly available, allowing researchers and developers worldwide to study and modify the model. This openness has been lauded by many in the tech community.
//         </p>

//         <p className="leading-relaxed">
//           The emergence of DeepSeek has had significant impacts on the technology sector. Shares of major tech companies, including Nvidia, Microsoft, and Alphabet, have experienced declines amid concerns over the competitive threat posed by DeepSeek's cost-effective AI model. The development has also intensified discussions about the global AI race and the need for continued innovation and investment in AI technologies.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default NarrativeComponent;





// import React, { useState } from 'react';

// // Define our tooltip data in a structured way for easy maintenance
// const tooltipData = {
//   "DeepSeek": {
//     id: "deepseek",
//     description: "A Chinese artificial intelligence company founded in 2023, focused on developing large language models and AI applications. The company is known for its cost-effective approach to AI development and open-source philosophy.",
//     type: "Company"
//   },
//   "Chinese artificial intelligence": {
//     id: "chinese-ai",
//     description: "The rapidly growing AI industry in China, characterized by significant government support, large-scale data availability, and innovative approaches to AI development that often emphasize cost-effectiveness and practical applications.",
//     type: "Industry Sector"
//   }
// };

// function NarrativeComponent() {
//   const [activeTooltip, setActiveTooltip] = useState(null);

//   // Helper function to replace terms with bold, hoverable spans
//   const renderTextWithTooltips = (text) => {
//     let result = text;
    
//     // Sort terms by length (longest first) to handle overlapping matches properly
//     const terms = Object.keys(tooltipData).sort((a, b) => b.length - a.length);
    
//     terms.forEach(term => {
//       const regex = new RegExp(`(${term})`, 'g');
//       result = result.replace(regex, (match) => (
//         `&&&&<span 
//           class="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
//           data-tooltip="${tooltipData[match].id}"
//         >${match}</span>&&&&`
//       ));
//     });
    
//     // Split by our marker and map to React elements
//     return result.split('&&&&').map((part, index) => {
//       if (part.startsWith('<span')) {
//         // Extract the tooltip id and content
//         const tooltipId = part.match(/data-tooltip="([^"]+)"/)[1];
//         const content = part.match(/>(.*?)<\/span>/)[1];
        
//         return (
//           <span
//             key={index}
//             className="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
//             onMouseEnter={() => setActiveTooltip(tooltipId)}
//             onMouseLeave={() => setActiveTooltip(null)}
//           >
//             {content}
//           </span>
//         );
//       }
//       return part;
//     });
//   };

//   return (
//     <div className="w-full relative">
//       <div className="space-y-6 text-gray-700">
//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "In the past week, the Chinese artificial intelligence start-up DeepSeek has made a significant breakthrough with the release of its AI model, DeepSeek-R1. This model rivals leading Western AI systems, such as OpenAI's ChatGPT, in capabilities but was developed at a fraction of the cost. Notably, DeepSeek-R1 has surpassed ChatGPT as the top free application on Apple's App Store in the United States."
//           )}
//         </p>

//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "DeepSeek's approach contrasts with that of many American AI companies by maintaining a relatively open model. The company has made the program's final code and a detailed technical explanation publicly available, allowing researchers and developers worldwide to study and modify the model. This openness has been lauded by many in the tech community."
//           )}
//         </p>

//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "The emergence of DeepSeek has had significant impacts on the technology sector. Shares of major tech companies, including Nvidia, Microsoft, and Alphabet, have experienced declines amid concerns over the competitive threat posed by DeepSeek's cost-effective AI model. The development has also intensified discussions about the global AI race and the need for continued innovation and investment in AI technologies."
//           )}
//         </p>
//       </div>

//       {/* Tooltip display */}
//       {activeTooltip && (
//         <div className="absolute left-0 right-0 bottom-0 transform translate-y-full mt-4">
//           <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 max-w-md">
//             <div className="flex flex-col space-y-2">
//               <span className="text-sm font-semibold text-gray-500">
//                 {tooltipData[Object.keys(tooltipData).find(key => 
//                   tooltipData[key].id === activeTooltip
//                 )].type}
//               </span>
//               <p className="text-sm text-gray-700">
//                 {tooltipData[Object.keys(tooltipData).find(key => 
//                   tooltipData[key].id === activeTooltip
//                 )].description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NarrativeComponent;








// import React, { useState } from 'react';
// import { Building2, Globe, Cpu, Calendar, Users, Briefcase, Award, Activity } from 'lucide-react';

// // Enhanced ontological structure with richer metadata
// const tooltipData = {
//   "DeepSeek": {
//     id: "deepseek",
//     type: "COMPANY",
//     icon: Building2,
//     color: "text-indigo-500",
//     bgColor: "bg-indigo-50",
//     metadata: {
//       Founded: "2023",
//       Headquarters: "Beijing, China",
//       Industry: "Artificial Intelligence",
//       Specialization: "Large Language Models",
//       Notable_Product: "DeepSeek-R1",
//       Development_Approach: "Open Source",
//       Market_Position: "Emerging Leader"
//     },
//     description: "A Chinese artificial intelligence company founded in 2023, focused on developing large language models and AI applications. The company is known for its cost-effective approach to AI development and open-source philosophy."
//   },
//   "Chinese artificial intelligence": {
//     id: "chinese-ai",
//     type: "INDUSTRY",
//     icon: Globe,
//     color: "text-emerald-500",
//     bgColor: "bg-emerald-50",
//     metadata: {
//       Market_Size: "$50B+ (2024)",
//       Growth_Rate: "35% YoY",
//       Key_Players: "DeepSeek, Baidu, SenseTime",
//       Government_Support: "High",
//       Global_Rank: "2nd after US",
//       Key_Focus_Areas: "LLMs, Computer Vision",
//       Competitive_Edge: "Cost-Effective Development"
//     },
//     description: "The rapidly growing AI industry in China, characterized by significant government support, large-scale data availability, and innovative approaches to AI development that often emphasize cost-effectiveness and practical applications."
//   }
// };

// // Icon and color mapping for different entity types
// const entityTypeConfig = {
//   COMPANY: { icon: Building2, color: "text-indigo-500", bgColor: "bg-indigo-50" },
//   INDUSTRY: { icon: Globe, color: "text-emerald-500", bgColor: "bg-emerald-50" },
//   PERSON: { icon: Users, color: "text-blue-500", bgColor: "bg-blue-50" },
//   PRODUCT: { icon: Cpu, color: "text-purple-500", bgColor: "bg-purple-50" },
//   EVENT: { icon: Calendar, color: "text-amber-500", bgColor: "bg-amber-50" },
//   CONCEPT: { icon: Briefcase, color: "text-rose-500", bgColor: "bg-rose-50" },
//   METRIC: { icon: Activity, color: "text-cyan-500", bgColor: "bg-cyan-50" },
//   ACHIEVEMENT: { icon: Award, color: "text-orange-500", bgColor: "bg-orange-50" }
// };

// function NarrativeComponent() {
//   const [activeTooltip, setActiveTooltip] = useState(null);

//   const renderTextWithTooltips = (text) => {
//     let result = text;
//     const terms = Object.keys(tooltipData).sort((a, b) => b.length - a.length);
    
//     terms.forEach(term => {
//       const regex = new RegExp(`(${term})`, 'g');
//       result = result.replace(regex, (match) => (
//         `&&&&<span 
//           class="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
//           data-tooltip="${tooltipData[match].id}"
//         >${match}</span>&&&&`
//       ));
//     });
    
//     return result.split('&&&&').map((part, index) => {
//       if (part.startsWith('<span')) {
//         const tooltipId = part.match(/data-tooltip="([^"]+)"/)[1];
//         const content = part.match(/>(.*?)<\/span>/)[1];
        
//         return (
//           <span
//             key={index}
//             className="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
//             onMouseEnter={() => setActiveTooltip(tooltipId)}
//             onMouseLeave={() => setActiveTooltip(null)}
//           >
//             {content}
//           </span>
//         );
//       }
//       return part;
//     });
//   };

//   const renderTooltipCard = (tooltipId) => {
//     const term = Object.keys(tooltipData).find(key => tooltipData[key].id === tooltipId);
//     if (!term) return null;
    
//     const data = tooltipData[term];
//     const Icon = data.icon;

//     return (
//       <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
//         <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-96">
//           {/* Header with icon and type */}
//           <div className={`flex items-center gap-3 p-4 ${data.bgColor} rounded-t-lg border-b border-gray-200`}>
//             <Icon size={32} className={`${data.color}`} />
//             <div>
//               <h3 className="font-bold text-lg">{term}</h3>
//               <span className={`text-sm ${data.color}`}>{data.type}</span>
//             </div>
//           </div>

//           {/* Description */}
//           <div className="p-4 border-b border-gray-200">
//             <p className="text-sm text-gray-700">{data.description}</p>
//           </div>

//           {/* Metadata Grid */}
//           <div className="p-4 grid grid-cols-2 gap-3">
//             {Object.entries(data.metadata).map(([key, value], idx) => (
//               <div key={idx} className="space-y-1">
//                 <span className="text-xs text-gray-500 font-medium">{key}</span>
//                 <p className="text-sm font-medium text-gray-900">{value}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full relative">
//       <div className="space-y-6 text-gray-700">
//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "In the past week, the Chinese artificial intelligence start-up DeepSeek has made a significant breakthrough with the release of its AI model, DeepSeek-R1. This model rivals leading Western AI systems, such as OpenAI's ChatGPT, in capabilities but was developed at a fraction of the cost. Notably, DeepSeek-R1 has surpassed ChatGPT as the top free application on Apple's App Store in the United States."
//           )}
//         </p>

//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "DeepSeek's approach contrasts with that of many American AI companies by maintaining a relatively open model. The company has made the program's final code and a detailed technical explanation publicly available, allowing researchers and developers worldwide to study and modify the model. This openness has been lauded by many in the tech community."
//           )}
//         </p>

//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "The emergence of DeepSeek has had significant impacts on the technology sector. Shares of major tech companies, including Nvidia, Microsoft, and Alphabet, have experienced declines amid concerns over the competitive threat posed by DeepSeek's cost-effective AI model. The development has also intensified discussions about the global AI race and the need for continued innovation and investment in AI technologies."
//           )}
//         </p>
//       </div>

//       {activeTooltip && renderTooltipCard(activeTooltip)}
//     </div>
//   );
// }

// export default NarrativeComponent;










// import React, { useState } from 'react';
// import { Building2, Globe, Cpu, Calendar, Users, Briefcase, Award, Activity } from 'lucide-react';

// const tooltipData = {
//   "DeepSeek": {
//     id: "deepseek",
//     type: "COMPANY",
//     icon: Building2,
//     color: "text-indigo-500",
//     bgColor: "bg-indigo-50",
//     metadata: {
//       Founded: "2023",
//       Headquarters: "Beijing, China",
//       Industry: "Artificial Intelligence",
//       Specialization: "Large Language Models",
//       Notable_Product: "DeepSeek-R1",
//       Development_Approach: "Open Source",
//       Market_Position: "Emerging Leader"
//     },
//     description: "A Chinese artificial intelligence company founded in 2023, focused on developing large language models and AI applications. The company is known for its cost-effective approach to AI development and open-source philosophy."
//   },
//   "Chinese artificial intelligence": {
//     id: "chinese-ai",
//     type: "INDUSTRY",
//     icon: Globe,
//     color: "text-emerald-500",
//     bgColor: "bg-emerald-50",
//     metadata: {
//       Market_Size: "$50B+ (2024)",
//       Growth_Rate: "35% YoY",
//       Key_Players: "DeepSeek, Baidu, SenseTime",
//       Government_Support: "High",
//       Global_Rank: "2nd after US",
//       Key_Focus_Areas: "LLMs, Computer Vision",
//       Competitive_Edge: "Cost-Effective Development"
//     },
//     description: "The rapidly growing AI industry in China, characterized by significant government support, large-scale data availability, and innovative approaches to AI development that often emphasize cost-effectiveness and practical applications."
//   }
// };

// function NarrativeComponent() {
//   const [activeTooltip, setActiveTooltip] = useState(null);

//   const renderTextWithTooltips = (text) => {
//     let result = text;
//     const terms = Object.keys(tooltipData).sort((a, b) => b.length - a.length);
    
//     terms.forEach(term => {
//       const regex = new RegExp(`(${term})`, 'g');
//       result = result.replace(regex, (match) => (
//         `&&&&<span 
//           class="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
//           data-tooltip="${tooltipData[match].id}"
//         >${match}</span>&&&&`
//       ));
//     });
    
//     return result.split('&&&&').map((part, index) => {
//       if (part.startsWith('<span')) {
//         const tooltipId = part.match(/data-tooltip="([^"]+)"/)[1];
//         const content = part.match(/>(.*?)<\/span>/)[1];
        
//         return (
//           <span
//             key={index}
//             className="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
//             onMouseEnter={() => setActiveTooltip(tooltipId)}
//             onMouseLeave={() => setActiveTooltip(null)}
//           >
//             {content}
//           </span>
//         );
//       }
//       return part;
//     });
//   };

//   const renderTooltipCard = (tooltipId) => {
//     const term = Object.keys(tooltipData).find(key => tooltipData[key].id === tooltipId);
//     if (!term) return null;
    
//     const data = tooltipData[term];
//     const Icon = data.icon;

//     return (
//       <div className="bg-white rounded-lg shadow-lg border border-gray-100 w-[600px]">
//         {/* Header */}
//         <div className={`flex items-center gap-3 p-4 ${data.bgColor} rounded-t-lg`}>
//           <Icon size={24} className={`${data.color}`} />
//           <div>
//             <h3 className="text-lg font-medium">{term}</h3>
//             <p className={`text-sm ${data.color} font-medium`}>{data.type}</p>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="p-4 text-sm text-gray-600 border-b border-gray-100">
//           {data.description}
//         </div>

//         {/* Metadata Grid */}
//         <div className="p-4 grid grid-cols-2 gap-x-8 gap-y-4">
//           {Object.entries(data.metadata).map(([key, value]) => (
//             <div key={key} className="flex flex-col">
//               <span className="text-xs text-gray-500">
//                 {key.split('_').join(' ')}
//               </span>
//               <span className="text-sm font-medium text-gray-900">{value}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full relative min-h-[500px]">
//       <div className="space-y-6 text-gray-700 mb-24">
//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "In the past week, the Chinese artificial intelligence start-up DeepSeek has made a significant breakthrough with the release of its AI model, DeepSeek-R1. This model rivals leading Western AI systems, such as OpenAI's ChatGPT, in capabilities but was developed at a fraction of the cost. Notably, DeepSeek-R1 has surpassed ChatGPT as the top free application on Apple's App Store in the United States."
//           )}
//         </p>

//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "DeepSeek's approach contrasts with that of many American AI companies by maintaining a relatively open model. The company has made the program's final code and a detailed technical explanation publicly available, allowing researchers and developers worldwide to study and modify the model. This openness has been lauded by many in the tech community."
//           )}
//         </p>

//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "The emergence of DeepSeek has had significant impacts on the technology sector. Shares of major tech companies, including Nvidia, Microsoft, and Alphabet, have experienced declines amid concerns over the competitive threat posed by DeepSeek's cost-effective AI model. The development has also intensified discussions about the global AI race and the need for continued innovation and investment in AI technologies."
//           )}
//         </p>
//       </div>

//       {activeTooltip && (
//         // <div className="absolute top-full left-0 mt-6">
//         // <div className="absolute top-full left-0 mt-8 ml-[-8px]">
//                     <div className="absolute top-full left-0 mt-10 ml-[-24px]">

//           {renderTooltipCard(activeTooltip)}
//         </div>
//       )}
//     </div>
//   );
// }

// export default NarrativeComponent;







// import React, { useState } from 'react';
// import { Building2, Globe, Cpu, Calendar, Users, Briefcase, Award, Activity } from 'lucide-react';

// const tooltipData = {
//   "DeepSeek": {
//     id: "deepseek",
//     type: "COMPANY",
//     icon: Building2,
//     color: "text-indigo-500",
//     bgColor: "bg-indigo-50",
//     metadata: {
//       Founded: "2023",
//       Headquarters: "Beijing, China",
//       Industry: "Artificial Intelligence",
//       Specialization: "Large Language Models",
//       Notable_Product: "DeepSeek-R1",
//       Development_Approach: "Open Source",
//       Market_Position: "Emerging Leader"
//     },
//     description: "A Chinese artificial intelligence company founded in 2023, focused on developing large language models and AI applications. The company is known for its cost-effective approach to AI development and open-source philosophy."
//   },
//   "Chinese artificial intelligence": {
//     id: "chinese-ai",
//     type: "INDUSTRY",
//     icon: Globe,
//     color: "text-emerald-500",
//     bgColor: "bg-emerald-50",
//     metadata: {
//       Market_Size: "$50B+ (2024)",
//       Growth_Rate: "35% YoY",
//       Key_Players: "DeepSeek, Baidu, SenseTime",
//       Government_Support: "High",
//       Global_Rank: "2nd after US",
//       Key_Focus_Areas: "LLMs, Computer Vision",
//       Competitive_Edge: "Cost-Effective Development"
//     },
//     description: "The rapidly growing AI industry in China, characterized by significant government support, large-scale data availability, and innovative approaches to AI development that often emphasize cost-effectiveness and practical applications."
//   }
// };

// function NarrativeComponent() {
//   const [activeTooltip, setActiveTooltip] = useState(null);

//   const renderTextWithTooltips = (text) => {
//     // Keep track of which terms we've processed across ALL paragraphs
//     const processedTerms = new Set();
    
//     let result = text;
//     const terms = Object.keys(tooltipData).sort((a, b) => b.length - a.length);
    
//     terms.forEach(term => {
//       if (result.includes(term) && !processedTerms.has(term)) {
//         // Find the first occurrence and replace only that one
//         const regex = new RegExp(`(${term})`, '');
//         result = result.replace(regex, (match) => {
//           processedTerms.add(term);
//           return `&&&&<span 
//             class="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
//             data-tooltip="${tooltipData[match].id}"
//           >${match}</span>&&&&`;
//         });
//       }
//     });
    
//     return result.split('&&&&').map((part, index) => {
//       if (part.startsWith('<span')) {
//         const tooltipId = part.match(/data-tooltip="([^"]+)"/)[1];
//         const content = part.match(/>(.*?)<\/span>/)[1];
        
//         return (
//           <span
//             key={index}
//             className="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
//             onMouseEnter={() => setActiveTooltip(tooltipId)}
//             onMouseLeave={() => setActiveTooltip(null)}
//           >
//             {content}
//           </span>
//         );
//       }
//       return part;
//     });
//   };

//   const renderTooltipCard = (tooltipId) => {
//     const term = Object.keys(tooltipData).find(key => tooltipData[key].id === tooltipId);
//     if (!term) return null;
    
//     const data = tooltipData[term];
//     const Icon = data.icon;

//     return (
//       <div className="bg-white rounded-lg shadow-lg border border-gray-100 w-[600px]">
//         <div className={`flex items-center gap-3 p-4 ${data.bgColor} rounded-t-lg`}>
//           <Icon size={24} className={`${data.color}`} />
//           <div>
//             <h3 className="text-lg font-medium">{term}</h3>
//             <p className={`text-sm ${data.color} font-medium`}>{data.type}</p>
//           </div>
//         </div>

//         <div className="p-4 text-sm text-gray-600 border-b border-gray-100">
//           {data.description}
//         </div>

//         <div className="p-4 grid grid-cols-2 gap-x-8 gap-y-4">
//           {Object.entries(data.metadata).map(([key, value]) => (
//             <div key={key} className="flex flex-col">
//               <span className="text-xs text-gray-500">
//                 {key.split('_').join(' ')}
//               </span>
//               <span className="text-sm font-medium text-gray-900">{value}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full relative min-h-[500px]">
//       <div className="space-y-6 text-gray-700 mb-24">
//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "In the past week, the Chinese artificial intelligence start-up DeepSeek has made a significant breakthrough with the release of its AI model, DeepSeek-R1. This model rivals leading Western AI systems, such as OpenAI's ChatGPT, in capabilities but was developed at a fraction of the cost. Notably, DeepSeek-R1 has surpassed ChatGPT as the top free application on Apple's App Store in the United States."
//           )}
//         </p>

//         <p className="leading-relaxed">
//           {processText(
//             "DeepSeek's approach contrasts with that of many American AI companies by maintaining a relatively open model. The company has made the program's final code and a detailed technical explanation publicly available, allowing researchers and developers worldwide to study and modify the model. This openness has been lauded by many in the tech community."
//           )}
//         </p>

//         <p className="leading-relaxed">
//           {processText(
//             "The emergence of DeepSeek has had significant impacts on the technology sector. Shares of major tech companies, including Nvidia, Microsoft, and Alphabet, have experienced declines amid concerns over the competitive threat posed by DeepSeek's cost-effective AI model. The development has also intensified discussions about the global AI race and the need for continued innovation and investment in AI technologies."
//           )}
//         </p>
//       </div>

//       {activeTooltip && (
//         <div className="absolute top-full left-0 mt-10 ml-[-24px]">
//           {renderTooltipCard(activeTooltip)}
//         </div>
//       )}
//     </div>
//   );
// }

// export default NarrativeComponent;






// import React, { useState } from 'react';
// import { Building2, Globe, Cpu, Calendar, Users, Briefcase, Award, Activity } from 'lucide-react';

// const tooltipData = {
//   "DeepSeek": {
//     id: "deepseek",
//     type: "COMPANY",
//     icon: Building2,
//     color: "text-indigo-500",
//     bgColor: "bg-indigo-50",
//     metadata: {
//       Founded: "2023",
//       Headquarters: "Beijing, China",
//       Industry: "Artificial Intelligence",
//       Specialization: "Large Language Models",
//       Notable_Product: "DeepSeek-R1",
//       Development_Approach: "Open Source",
//       Market_Position: "Emerging Leader"
//     },
//     description: "A Chinese artificial intelligence company founded in 2023, focused on developing large language models and AI applications. The company is known for its cost-effective approach to AI development and open-source philosophy."
//   },
//   "Chinese artificial intelligence": {
//     id: "chinese-ai",
//     type: "INDUSTRY",
//     icon: Globe,
//     color: "text-emerald-500",
//     bgColor: "bg-emerald-50",
//     metadata: {
//       Market_Size: "$50B+ (2024)",
//       Growth_Rate: "35% YoY",
//       Key_Players: "DeepSeek, Baidu, SenseTime",
//       Government_Support: "High",
//       Global_Rank: "2nd after US",
//       Key_Focus_Areas: "LLMs, Computer Vision",
//       Competitive_Edge: "Cost-Effective Development"
//     },
//     description: "The rapidly growing AI industry in China, characterized by significant government support, large-scale data availability, and innovative approaches to AI development that often emphasize cost-effectiveness and practical applications."
//   }
// };

// function NarrativeComponent() {
//   const [activeTooltip, setActiveTooltip] = useState(null);
//   const [firstOccurrences] = useState(() => {
//     // Initialize with all terms mapped to false (not found yet)
//     return Object.keys(tooltipData).reduce((acc, term) => {
//       acc[term] = false;
//       return acc;
//     }, {});
//   });

//   const renderTextWithTooltips = (text) => {
//     let result = text;
//     const terms = Object.keys(tooltipData).sort((a, b) => b.length - a.length);
    
//     terms.forEach(term => {
//       if (result.includes(term) && !firstOccurrences[term]) {
//         // Find the first occurrence and replace only that one
//         const regex = new RegExp(`(${term})`, '');
//         result = result.replace(regex, (match) => {
//           firstOccurrences[term] = true;
//           return `&&&&<span 
//             class="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
//             data-tooltip="${tooltipData[match].id}"
//           >${match}</span>&&&&`;
//         });
//       }
//     });
    
//     return result.split('&&&&').map((part, index) => {
//       if (part.startsWith('<span')) {
//         const tooltipId = part.match(/data-tooltip="([^"]+)"/)[1];
//         const content = part.match(/>(.*?)<\/span>/)[1];
        
//         return (
//           <span
//             key={index}
//             className="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
//             onMouseEnter={() => setActiveTooltip(tooltipId)}
//             onMouseLeave={() => setActiveTooltip(null)}
//           >
//             {content}
//           </span>
//         );
//       }
//       return part;
//     });
//   };

//   const renderTooltipCard = (tooltipId) => {
//     const term = Object.keys(tooltipData).find(key => tooltipData[key].id === tooltipId);
//     if (!term) return null;
    
//     const data = tooltipData[term];
//     const Icon = data.icon;

//     return (
//       <div className="bg-white rounded-lg shadow-lg border border-gray-100 w-[600px]">
//         <div className={`flex items-center gap-3 p-4 ${data.bgColor} rounded-t-lg`}>
//           <Icon size={24} className={`${data.color}`} />
//           <div>
//             <h3 className="text-lg font-medium">{term}</h3>
//             <p className={`text-sm ${data.color} font-medium`}>{data.type}</p>
//           </div>
//         </div>

//         <div className="p-4 text-sm text-gray-600 border-b border-gray-100">
//           {data.description}
//         </div>

//         <div className="p-4 grid grid-cols-2 gap-x-8 gap-y-4">
//           {Object.entries(data.metadata).map(([key, value]) => (
//             <div key={key} className="flex flex-col">
//               <span className="text-xs text-gray-500">
//                 {key.split('_').join(' ')}
//               </span>
//               <span className="text-sm font-medium text-gray-900">{value}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full relative min-h-[500px]">
//       <div className="space-y-6 text-gray-700 mb-24">
//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "In the past week, the Chinese artificial intelligence start-up DeepSeek has made a significant breakthrough with the release of its AI model, DeepSeek-R1. This model rivals leading Western AI systems, such as OpenAI's ChatGPT, in capabilities but was developed at a fraction of the cost. Notably, DeepSeek-R1 has surpassed ChatGPT as the top free application on Apple's App Store in the United States."
//           )}
//         </p>

//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "DeepSeek's approach contrasts with that of many American AI companies by maintaining a relatively open model. The company has made the program's final code and a detailed technical explanation publicly available, allowing researchers and developers worldwide to study and modify the model. This openness has been lauded by many in the tech community."
//           )}
//         </p>

//         <p className="leading-relaxed">
//           {renderTextWithTooltips(
//             "The emergence of DeepSeek has had significant impacts on the technology sector. Shares of major tech companies, including Nvidia, Microsoft, and Alphabet, have experienced declines amid concerns over the competitive threat posed by DeepSeek's cost-effective AI model. The development has also intensified discussions about the global AI race and the need for continued innovation and investment in AI technologies."
//           )}
//         </p>
//       </div>

//       {activeTooltip && (
//         <div className="absolute top-full left-0 mt-10 ml-[-24px]">
//           {renderTooltipCard(activeTooltip)}
//         </div>
//       )}
//     </div>
//   );
// }

// export default NarrativeComponent;







import React, { useState } from 'react';
// import { Building2, Globe, Cpu, Calendar, Users, Briefcase, Award, Activity } from 'lucide-react';
import { Building2, Globe, Cpu, Calendar, Users, Briefcase, Award, Activity, Rocket, Code } from 'lucide-react';



// const tooltipData = {
//   "DeepSeek": {
//     id: "deepseek",
//     type: "COMPANY",
//     icon: Building2,
//     color: "text-indigo-500",
//     bgColor: "bg-indigo-50",
//     metadata: {
//       Founded: "2023",
//       Headquarters: "Beijing, China",
//       Industry: "Artificial Intelligence",
//       Specialization: "Large Language Models",
//       Notable_Product: "DeepSeek-R1",
//       Development_Approach: "Open Source",
//       Market_Position: "Emerging Leader"
//     },
//     description: "A Chinese artificial intelligence company founded in 2023, focused on developing large language models and AI applications. The company is known for its cost-effective approach to AI development and open-source philosophy."
//   },
//   "Chinese artificial intelligence": {
//     id: "chinese-ai",
//     type: "INDUSTRY",
//     icon: Globe,
//     color: "text-emerald-500",
//     bgColor: "bg-emerald-50",
//     metadata: {
//       Market_Size: "$50B+ (2024)",
//       Growth_Rate: "35% YoY",
//       Key_Players: "DeepSeek, Baidu, SenseTime",
//       Government_Support: "High",
//       Global_Rank: "2nd after US",
//       Key_Focus_Areas: "LLMs, Computer Vision",
//       Competitive_Edge: "Cost-Effective Development"
//     },
//     description: "The rapidly growing AI industry in China, characterized by significant government support, large-scale data availability, and innovative approaches to AI development that often emphasize cost-effectiveness and practical applications."
//   }
// };


const tooltipData = {
    "DeepSeek": {
      id: "deepseek",
      type: "COMPANY",
      icon: Building2,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      metadata: {
        Founded: "2023",
        Headquarters: "Beijing, China",
        Industry: "Artificial Intelligence",
        Specialization: "Large Language Models",
        Notable_Product: "DeepSeek-R1",
        Development_Approach: "Open Source",
        Market_Position: "Emerging Leader"
      },
      description: "A Chinese artificial intelligence company founded in 2023, focused on developing large language models and AI applications. The company is known for its cost-effective approach to AI development and open-source philosophy."
    },
    "Chinese artificial intelligence": {
      id: "chinese-ai",
      type: "INDUSTRY",
      icon: Globe,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      metadata: {
        Market_Size: "$50B+ (2024)",
        Growth_Rate: "35% YoY",
        Key_Players: "DeepSeek, Baidu, SenseTime",
        Government_Support: "High",
        Global_Rank: "2nd after US",
        Key_Focus_Areas: "LLMs, Computer Vision",
        Competitive_Edge: "Cost-Effective Development"
      },
      description: "The rapidly growing AI industry in China, characterized by significant government support, large-scale data availability, and innovative approaches to AI development that often emphasize cost-effectiveness and practical applications."
    },
    "significant breakthrough": {
      id: "breakthrough",
      type: "EVENT",
      icon: Rocket,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      metadata: {
        Event_Date: "January 2025",
        Impact_Level: "Industry-Wide",
        Market_Response: "Major Tech Stock Decline",
        Key_Achievement: "Top App Store Position",
        Cost_Efficiency: "90% Lower Than Competitors",
        User_Adoption: "Rapid Global Growth",
        Technical_Validation: "Peer Reviewed"
      },
      description: "A pivotal moment in AI development where DeepSeek demonstrated the ability to create a ChatGPT-competitive model at a fraction of the cost, challenging the established notion that state-of-the-art AI requires massive resources and establishing a new paradigm for efficient AI development."
    },
    "DeepSeek-R1": {
      id: "deepseek-r1",
      type: "PRODUCT",
      icon: Cpu,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      metadata: {
        Release_Date: "January 2025",
        Architecture: "Large Language Model",
        Training_Approach: "Cost-Optimized",
        Code_Availability: "Open Source",
        Performance_Level: "ChatGPT Competitive",
        Key_Features: "Efficiency, Accessibility",
        Market_Status: "#1 Free iOS App (US)"
      },
      description: "DeepSeek's flagship AI model that achieves competitive performance with leading Western AI systems while requiring significantly fewer resources to develop and deploy. The model represents a major advancement in efficient AI development and has been made open source for global research and modification."
    }
  };
  







function NarrativeComponent() {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [firstOccurrences] = useState(() => {
    // Initialize with all terms mapped to false (not found yet)
    return Object.keys(tooltipData).reduce((acc, term) => {
      acc[term] = false;
      return acc;
    }, {});
  });

  const renderTextWithTooltips = (text, isFirstParagraph) => {
    let result = text;
    const terms = Object.keys(tooltipData).sort((a, b) => b.length - a.length);
    
    // Only process terms if this is the first paragraph
    if (isFirstParagraph) {
      terms.forEach(term => {
        if (result.includes(term)) {
          // Find the first occurrence and replace only that one
          const regex = new RegExp(`(${term})`, '');
          result = result.replace(regex, (match) => {
            return `&&&&<span 
              class="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
              data-tooltip="${tooltipData[match].id}"
            >${match}</span>&&&&`;
          });
        }
      });
    }
    
    return result.split('&&&&').map((part, index) => {
      if (part.startsWith('<span')) {
        const tooltipId = part.match(/data-tooltip="([^"]+)"/)[1];
        const content = part.match(/>(.*?)<\/span>/)[1];
        
        return (
          <span
            key={index}
            className="font-bold cursor-help hover:text-blue-600 transition-colors duration-200"
            onMouseEnter={() => setActiveTooltip(tooltipId)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            {content}
          </span>
        );
      }
      return part;
    });
  };

  const renderTooltipCard = (tooltipId) => {
    const term = Object.keys(tooltipData).find(key => tooltipData[key].id === tooltipId);
    if (!term) return null;
    
    const data = tooltipData[term];
    const Icon = data.icon;

    return (
      <div className="bg-white rounded-lg shadow-lg border border-gray-100 w-[600px]">
        <div className={`flex items-center gap-3 p-4 ${data.bgColor} rounded-t-lg`}>
          <Icon size={24} className={`${data.color}`} />
          <div>
            <h3 className="text-lg font-medium">{term}</h3>
            <p className={`text-sm ${data.color} font-medium`}>{data.type}</p>
          </div>
        </div>

        <div className="p-4 text-sm text-gray-600 border-b border-gray-100">
          {data.description}
        </div>

        <div className="p-4 grid grid-cols-2 gap-x-8 gap-y-4">
          {Object.entries(data.metadata).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-xs text-gray-500">
                {key.split('_').join(' ')}
              </span>
              <span className="text-sm font-medium text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative min-h-[500px]">
      <div className="space-y-6 text-gray-700 mb-24">
        <p className="leading-relaxed">
          {renderTextWithTooltips(
            "In the past week, the Chinese artificial intelligence start-up DeepSeek has made a significant breakthrough with the release of its AI model, DeepSeek-R1. This model rivals leading Western AI systems, such as OpenAI's ChatGPT, in capabilities but was developed at a fraction of the cost. Notably, DeepSeek-R1 has surpassed ChatGPT as the top free application on Apple's App Store in the United States.",
            true
          )}
        </p>

        <p className="leading-relaxed">
          {renderTextWithTooltips(
            "DeepSeek's approach contrasts with that of many American AI companies by maintaining a relatively open model. The company has made the program's final code and a detailed technical explanation publicly available, allowing researchers and developers worldwide to study and modify the model. This openness has been lauded by many in the tech community.",
            false
          )}
        </p>

        <p className="leading-relaxed">
          {renderTextWithTooltips(
            "The emergence of DeepSeek has had significant impacts on the technology sector. Shares of major tech companies, including Nvidia, Microsoft, and Alphabet, have experienced declines amid concerns over the competitive threat posed by DeepSeek's cost-effective AI model. The development has also intensified discussions about the global AI race and the need for continued innovation and investment in AI technologies.",
            false
          )}
        </p>
      </div>

      {activeTooltip && (
        <div className="absolute top-full left-0 mt-10 ml-[-24px]">
          {renderTooltipCard(activeTooltip)}
        </div>
      )}
    </div>
  );
}

export default NarrativeComponent;













