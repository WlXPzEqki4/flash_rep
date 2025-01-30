// import React, { useState } from 'react';
// import { ChevronRight, ScrollText, BookOpen, Laptop, Globe, LineChart, Users, Building2, ShieldAlert, Bell, Lightbulb } from 'lucide-react';

// const execSummarySubsections = {
//   "Overview of DeepSeek-R1's launch and significance": [
//     "DeepSeek-R1 is a groundbreaking AI model rivaling ChatGPT in capabilities",
//     "It was developed at a significantly lower cost compared to Western counterparts",
//     "Achieved rapid public adoption, becoming the #1 free app on Apple's App Store in the U.S",
//     "Represents a major milestone for China's AI industry on the global stage"
//   ],
//   "Key impacts on the global AI landscape": [
//     "Heightened competition in the AI space, with China challenging Western dominance",
//     "Shift in focus toward cost-effective yet high-performing AI solutions",
//     "Growing adoption and influence of open-source principles in AI development",
//     "Increased pressure on Western companies to accelerate innovation and reduce costs"
//   ],
//   "Summary of immediate reactions": [
//     "OpenAI CEO Sam Altman acknowledged the \"impressive\" nature of DeepSeek-R1",
//     "Yann LeCun (Meta) praised DeepSeek's open-source approach as a model for collaboration",
//     "Investors expressed concerns, leading to share declines for Nvidia, Microsoft, and Alphabet",
//     "Policymakers began discussions on regulating and competing with open-source AI models"
//   ],
//   "Implications for international competition": [
//     "Reinforces China's position as a serious contender in the global AI race",
//     "Raises questions about the balance between openness and security in AI development",
//     "Encourages other nations to strengthen domestic AI capabilities and partnerships",
//     "Highlights the need for policies addressing potential misuse of open-source AI tools"
//   ]
// };

// const reportSections = [
//   {
//     id: 1,
//     title: "Executive Summary",
//     icon: ScrollText,
//     color: "text-purple-500",
//     bgColor: "bg-purple-50",
//     bulletColor: "bg-purple-500",
//     subsections: execSummarySubsections
//   },
//   {
//     id: 2,
//     title: "Context and Background",
//     icon: BookOpen,
//     color: "text-blue-500",
//     bgColor: "bg-blue-50",
//     bulletColor: "bg-blue-500",
//     subsections: {
//       "DeepSeek's Origin and Development": [
//         "Founded in Beijing in early 2023",
//         "Initial focus on efficient AI model development",
//         "Rapid growth to over 200 employees",
//         "Strategic partnerships with key research institutions"
//       ],
//       "Why It Matters": [
//         "Represents shift in global AI development landscape",
//         "Demonstrates viability of cost-effective AI approaches",
//         "Challenges traditional AI development paradigms",
//         "Sets new benchmarks for model efficiency"
//       ]
//     }
//   },
//   {
//     id: 3,
//     title: "The Event: DeepSeek-R1 Launch",
//     icon: Laptop,
//     color: "text-green-500",
//     bgColor: "bg-green-50",
//     bulletColor: "bg-green-500",
//     subsections: {
//       "Technical Details": [
//         "Novel architecture optimized for efficiency",
//         "Comparable performance metrics to GPT-4",
//         "Significantly reduced training compute requirements",
//         "Innovative data preprocessing techniques"
//       ],
//       "Global Reception": [
//         "Widespread adoption in developer community",
//         "Positive reviews from AI researchers",
//         "Strong performance in benchmark tests",
//         "Notable media coverage and industry attention"
//       ]
//     }
//   },
//   {
//     id: 4,
//     title: "Strategic Implications",
//     icon: Globe,
//     color: "text-indigo-500",
//     bgColor: "bg-indigo-50",
//     bulletColor: "bg-indigo-500",
//     subsections: {
//       "Geopolitical Impact": [
//         "Shift in AI development power dynamics",
//         "Impact on international tech partnerships",
//         "Changes in national AI strategies",
//         "Effects on global standards development"
//       ],
//       "Technological Rivalry": [
//         "Competition in model architecture design",
//         "Race for computational efficiency",
//         "Open vs closed source debate",
//         "Innovation in training methodologies"
//       ]
//     }
//   },
//   {
//     id: 5,
//     title: "Economic and Market Reactions",
//     icon: LineChart,
//     color: "text-red-500",
//     bgColor: "bg-red-50",
//     bulletColor: "bg-red-500",
//     subsections: {
//       "Market Volatility": [
//         "Impact on tech stock valuations",
//         "Changes in investment patterns",
//         "Sector-wide market adjustments",
//         "Long-term market implications"
//       ],
//       "Competitor Strategies": [
//         "Response from major tech companies",
//         "Shifts in R&D investment",
//         "Changes in business models",
//         "Strategic partnerships and acquisitions"
//       ]
//     }
//   },
//   {
//     id: 6,
//     title: "Key Stakeholder Analysis",
//     icon: Users,
//     color: "text-amber-500",
//     bgColor: "bg-amber-50",
//     bulletColor: "bg-amber-500",
//     subsections: {
//       "DeepSeek": [
//         "Leadership vision and strategy",
//         "Technical capabilities and resources",
//         "Market positioning",
//         "Future development roadmap"
//       ],
//       "Competitors": [
//         "OpenAI's strategic response",
//         "Microsoft's market position",
//         "Google's AI initiatives",
//         "Other emerging players"
//       ],
//       "Governments and Policymakers": [
//         "Regulatory considerations",
//         "National security implications",
//         "Policy development initiatives",
//         "International cooperation frameworks"
//       ]
//     }
//   },
//   {
//     id: 7,
//     title: "Global Impacts",
//     icon: Building2,
//     color: "text-emerald-500",
//     bgColor: "bg-emerald-50",
//     bulletColor: "bg-emerald-500",
//     subsections: {
//       "AI Ecosystem": [
//         "Changes in development practices",
//         "Impact on research community",
//         "Open source contributions",
//         "Industry standards evolution"
//       ],
//       "Geopolitical Dynamics": [
//         "US-China tech relations",
//         "Global AI leadership",
//         "International collaborations",
//         "Regional development hubs"
//       ],
//       "Broader Implications": [
//         "Democratization of AI",
//         "Economic impacts",
//         "Social considerations",
//         "Future of AI development"
//       ]
//     }
//   },
//   {
//     id: 8,
//     title: "Risks and Challenges",
//     icon: ShieldAlert,
//     color: "text-rose-500",
//     bgColor: "bg-rose-50",
//     bulletColor: "bg-rose-500",
//     subsections: {
//       "Economic Risks": [
//         "Market disruption potential",
//         "Investment uncertainty",
//         "Competition dynamics",
//         "Resource allocation challenges"
//       ],
//       "Security Risks": [
//         "Data privacy concerns",
//         "Model security issues",
//         "Misuse potential",
//         "Protection measures"
//       ],
//       "Technological Risks": [
//         "System reliability",
//         "Integration challenges",
//         "Scalability concerns",
//         "Technical limitations"
//       ]
//     }
//   },
//   {
//     id: 9,
//     title: "Indicators and Warning Signs",
//     icon: Bell,
//     color: "text-orange-500",
//     bgColor: "bg-orange-50",
//     bulletColor: "bg-orange-500",
//     subsections: {
//       "Technological Indicators": [
//         "Performance metrics",
//         "Development milestones",
//         "Technical breakthroughs",
//         "Implementation challenges"
//       ],
//       "Economic Indicators": [
//         "Market reactions",
//         "Investment trends",
//         "Industry adoption rates",
//         "Cost-benefit analyses"
//       ],
//       "Geopolitical Indicators": [
//         "Policy changes",
//         "International agreements",
//         "Regulatory developments",
//         "Strategic partnerships"
//       ]
//     }
//   },
//   {
//     id: 10,
//     title: "Strategic Recommendations",
//     icon: Lightbulb,
//     color: "text-cyan-500",
//     bgColor: "bg-cyan-50",
//     bulletColor: "bg-cyan-500",
//     subsections: {
//       "For Governments": [
//         "Policy framework updates",
//         "Investment strategies",
//         "Security measures",
//         "International cooperation"
//       ],
//       "For Industry": [
//         "Innovation strategies",
//         "Competition response",
//         "Resource allocation",
//         "Partnership opportunities"
//       ],
//       "For International Organizations": [
//         "Standards development",
//         "Collaboration frameworks",
//         "Risk management",
//         "Global coordination"
//       ]
//     }
//   }
// ];

// const SubsectionDetail = ({ content, isLast, parentColor }) => (
//   <div className="relative">
//     <div className="absolute left-[-24px] top-0 bottom-0">
//       <div className={`w-px h-full ${isLast ? 'h-1/2' : ''} bg-gray-200`} />
//     </div>
//     <div className="ml-6 p-2 rounded hover:bg-gray-50 transition-all duration-200 flex items-start">
//       <div className={`w-2 h-2 rounded-full ${parentColor} mt-2 mr-3 flex-shrink-0`} />
//       <span>{content}</span>
//     </div>
//   </div>
// );

// const Subsection = ({ title, details, isExpanded, onToggle, isLast, parentColor, bgColor }) => (
//   <div className="relative">
//     <div className="absolute left-[-24px] top-0 bottom-0">
//       <div className={`w-px h-full ${isLast ? 'h-1/2' : ''} bg-gray-200`} />
//     </div>
//     <div
//       className={`
//         flex items-center p-2 rounded cursor-pointer
//         transition-all duration-200
//         ${bgColor} hover:bg-opacity-75
//       `}
//       onClick={onToggle}
//     >
//       <ChevronRight 
//         className={`
//           text-gray-400 w-4 h-4 mr-2
//           transition-transform duration-200
//           ${isExpanded ? 'transform rotate-90' : ''}
//         `}
//       />
//       {title}
//     </div>
//     <div 
//       className={`
//         ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
//         ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
//       `}
//     >
//       {details.map((detail, idx) => (
//         <SubsectionDetail
//           key={idx}
//           content={detail}
//           isLast={idx === details.length - 1}
//           parentColor={parentColor}
//         />
//       ))}
//     </div>
//   </div>
// );

// const ReportSection = ({ section, isExpanded, onToggle, expandedSubsections, toggleSubsection }) => {
//   const Icon = section.icon;
  
//   return (
//     <div className="mb-2">
//       <div 
//         className={`
//           flex items-center p-3 rounded-lg cursor-pointer
//           transition-all duration-200 ease-in-out
//           hover:bg-gray-50
//           ${isExpanded ? section.bgColor : ''}
//         `}
//         onClick={onToggle}
//       >
//         <Icon className={`${section.color} mr-3`} size={20} />
//         <span className="flex-grow font-medium">{section.title}</span>
//         <ChevronRight 
//           className={`
//             text-gray-400 transition-transform duration-200
//             ${isExpanded ? 'transform rotate-90' : ''}
//           `} 
//           size={20} 
//         />
//       </div>
      
//       <div 
//         className={`
//           overflow-hidden transition-all duration-300 ease-in-out
//           ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
//         `}
//       >
//         <div className="ml-9 mt-2 space-y-2">
//           {Object.entries(section.subsections).map(([subsection, details], idx, arr) => (
//             <Subsection
//               key={subsection}
//               title={subsection}
//               details={details}
//               isExpanded={expandedSubsections[section.id]?.[subsection]}
//               onToggle={() => toggleSubsection(section.id, subsection)}
//               isLast={idx === arr.length - 1}
//               parentColor={section.bulletColor}
//               bgColor={section.bgColor}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ReportStructure = () => {
//   const [expandedSections, setExpandedSections] = useState(new Set([1]));
//   const [expandedSubsections, setExpandedSubsections] = useState({});

//   const toggleSection = (sectionId) => {
//     const newExpanded = new Set(expandedSections);
//     if (newExpanded.has(sectionId)) {
//       newExpanded.delete(sectionId);
//     } else {
//       newExpanded.add(sectionId);
//     }
//     setExpandedSections(newExpanded);
//   };

//   const toggleSubsection = (sectionId, subsection) => {
//     setExpandedSubsections(prev => ({
//       ...prev,
//       [sectionId]: {
//         ...prev[sectionId],
//         [subsection]: !prev[sectionId]?.[subsection]
//       }
//     }));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">OSINT Report Structure</h2>
//         <p className="text-gray-600 mt-2">
//           Click sections to expand/collapse and explore the report's structure
//         </p>
//       </div>
      
//       <div className="space-y-2">
//         {reportSections.map((section) => (
//           <ReportSection
//             key={section.id}
//             section={section}
//             isExpanded={expandedSections.has(section.id)}
//             onToggle={() => toggleSection(section.id)}
//             expandedSubsections={expandedSubsections}
//             toggleSubsection={toggleSubsection}
//           />
//         ))}
//       </div>

//       <div className="mt-6 pt-4 border-t">
//         <button
//           className="text-sm text-blue-500 hover:text-blue-600 font-medium"
//           onClick={() => {
//             if (expandedSections.size === reportSections.length) {
//               setExpandedSections(new Set());
//             } else {
//               setExpandedSections(new Set(reportSections.map(s => s.id)));
//             }
//           }}
//         >
//           {expandedSections.size === reportSections.length ? 'Collapse All' : 'Expand All'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReportStructure;








// import React, { useState } from 'react';
// import { ChevronRight, ScrollText, BookOpen, Laptop, Globe, LineChart, Users, Building2, ShieldAlert, Bell, Lightbulb } from 'lucide-react';

// const execSummarySubsections = {
//   "Overview of DeepSeek-R1's launch and significance": [
//     "DeepSeek-R1 is a groundbreaking AI model rivaling ChatGPT in capabilities",
//     "It was developed at a significantly lower cost compared to Western counterparts",
//     "Achieved rapid public adoption, becoming the #1 free app on Apple's App Store in the U.S",
//     "Represents a major milestone for China's AI industry on the global stage"
//   ],
//   "Key impacts on the global AI landscape": [
//     "Heightened competition in the AI space, with China challenging Western dominance",
//     "Shift in focus toward cost-effective yet high-performing AI solutions",
//     "Growing adoption and influence of open-source principles in AI development",
//     "Increased pressure on Western companies to accelerate innovation and reduce costs"
//   ],
//   "Summary of immediate reactions": [
//     "OpenAI CEO Sam Altman acknowledged the \"impressive\" nature of DeepSeek-R1",
//     "Yann LeCun (Meta) praised DeepSeek's open-source approach as a model for collaboration",
//     "Investors expressed concerns, leading to share declines for Nvidia, Microsoft, and Alphabet",
//     "Policymakers began discussions on regulating and competing with open-source AI models"
//   ],
//   "Implications for international competition": [
//     "Reinforces China's position as a serious contender in the global AI race",
//     "Raises questions about the balance between openness and security in AI development",
//     "Encourages other nations to strengthen domestic AI capabilities and partnerships",
//     "Highlights the need for policies addressing potential misuse of open-source AI tools"
//   ]
// };

// const reportSections = [
//   {
//     id: 1,
//     title: "Executive Summary",
//     icon: ScrollText,
//     color: "text-purple-500",
//     bgColor: "bg-purple-50",
//     bulletColor: "bg-purple-500",
//     subsections: execSummarySubsections
//   },
//   {
//     id: 2,
//     title: "Context and Background",
//     icon: BookOpen,
//     color: "text-blue-500",
//     bgColor: "bg-blue-50",
//     bulletColor: "bg-blue-500",
//     subsections: {
//       "DeepSeek's Origin and Development": [
//         "Founded in Beijing in early 2023",
//         "Initial focus on efficient AI model development",
//         "Rapid growth to over 200 employees",
//         "Strategic partnerships with key research institutions"
//       ],
//       "Why It Matters": [
//         "Represents shift in global AI development landscape",
//         "Demonstrates viability of cost-effective AI approaches",
//         "Challenges traditional AI development paradigms",
//         "Sets new benchmarks for model efficiency"
//       ]
//     }
//   },
//   {
//     id: 3,
//     title: "The Event: DeepSeek-R1 Launch",
//     icon: Laptop,
//     color: "text-green-500",
//     bgColor: "bg-green-50",
//     bulletColor: "bg-green-500",
//     subsections: {
//       "Technical Details": [
//         "Novel architecture optimized for efficiency",
//         "Comparable performance metrics to GPT-4",
//         "Significantly reduced training compute requirements",
//         "Innovative data preprocessing techniques"
//       ],
//       "Global Reception": [
//         "Widespread adoption in developer community",
//         "Positive reviews from AI researchers",
//         "Strong performance in benchmark tests",
//         "Notable media coverage and industry attention"
//       ]
//     }
//   },
//   {
//     id: 4,
//     title: "Strategic Implications",
//     icon: Globe,
//     color: "text-indigo-500",
//     bgColor: "bg-indigo-50",
//     bulletColor: "bg-indigo-500",
//     subsections: {
//       "Geopolitical Impact": [
//         "Shift in AI development power dynamics",
//         "Impact on international tech partnerships",
//         "Changes in national AI strategies",
//         "Effects on global standards development"
//       ],
//       "Technological Rivalry": [
//         "Competition in model architecture design",
//         "Race for computational efficiency",
//         "Open vs closed source debate",
//         "Innovation in training methodologies"
//       ]
//     }
//   },
//   {
//     id: 5,
//     title: "Economic and Market Reactions",
//     icon: LineChart,
//     color: "text-red-500",
//     bgColor: "bg-red-50",
//     bulletColor: "bg-red-500",
//     subsections: {
//       "Market Volatility": [
//         "Impact on tech stock valuations",
//         "Changes in investment patterns",
//         "Sector-wide market adjustments",
//         "Long-term market implications"
//       ],
//       "Competitor Strategies": [
//         "Response from major tech companies",
//         "Shifts in R&D investment",
//         "Changes in business models",
//         "Strategic partnerships and acquisitions"
//       ]
//     }
//   },
//   {
//     id: 6,
//     title: "Key Stakeholder Analysis",
//     icon: Users,
//     color: "text-amber-500",
//     bgColor: "bg-amber-50",
//     bulletColor: "bg-amber-500",
//     subsections: {
//       "DeepSeek": [
//         "Leadership vision and strategy",
//         "Technical capabilities and resources",
//         "Market positioning",
//         "Future development roadmap"
//       ],
//       "Competitors": [
//         "OpenAI's strategic response",
//         "Microsoft's market position",
//         "Google's AI initiatives",
//         "Other emerging players"
//       ],
//       "Governments and Policymakers": [
//         "Regulatory considerations",
//         "National security implications",
//         "Policy development initiatives",
//         "International cooperation frameworks"
//       ]
//     }
//   },
//   {
//     id: 7,
//     title: "Global Impacts",
//     icon: Building2,
//     color: "text-emerald-500",
//     bgColor: "bg-emerald-50",
//     bulletColor: "bg-emerald-500",
//     subsections: {
//       "AI Ecosystem": [
//         "Changes in development practices",
//         "Impact on research community",
//         "Open source contributions",
//         "Industry standards evolution"
//       ],
//       "Geopolitical Dynamics": [
//         "US-China tech relations",
//         "Global AI leadership",
//         "International collaborations",
//         "Regional development hubs"
//       ],
//       "Broader Implications": [
//         "Democratization of AI",
//         "Economic impacts",
//         "Social considerations",
//         "Future of AI development"
//       ]
//     }
//   },
//   {
//     id: 8,
//     title: "Risks and Challenges",
//     icon: ShieldAlert,
//     color: "text-rose-500",
//     bgColor: "bg-rose-50",
//     bulletColor: "bg-rose-500",
//     subsections: {
//       "Economic Risks": [
//         "Market disruption potential",
//         "Investment uncertainty",
//         "Competition dynamics",
//         "Resource allocation challenges"
//       ],
//       "Security Risks": [
//         "Data privacy concerns",
//         "Model security issues",
//         "Misuse potential",
//         "Protection measures"
//       ],
//       "Technological Risks": [
//         "System reliability",
//         "Integration challenges",
//         "Scalability concerns",
//         "Technical limitations"
//       ]
//     }
//   },
//   {
//     id: 9,
//     title: "Indicators and Warning Signs",
//     icon: Bell,
//     color: "text-orange-500",
//     bgColor: "bg-orange-50",
//     bulletColor: "bg-orange-500",
//     subsections: {
//       "Technological Indicators": [
//         "Performance metrics",
//         "Development milestones",
//         "Technical breakthroughs",
//         "Implementation challenges"
//       ],
//       "Economic Indicators": [
//         "Market reactions",
//         "Investment trends",
//         "Industry adoption rates",
//         "Cost-benefit analyses"
//       ],
//       "Geopolitical Indicators": [
//         "Policy changes",
//         "International agreements",
//         "Regulatory developments",
//         "Strategic partnerships"
//       ]
//     }
//   },
//   {
//     id: 10,
//     title: "Strategic Recommendations",
//     icon: Lightbulb,
//     color: "text-cyan-500",
//     bgColor: "bg-cyan-50",
//     bulletColor: "bg-cyan-500",
//     subsections: {
//       "For Governments": [
//         "Policy framework updates",
//         "Investment strategies",
//         "Security measures",
//         "International cooperation"
//       ],
//       "For Industry": [
//         "Innovation strategies",
//         "Competition response",
//         "Resource allocation",
//         "Partnership opportunities"
//       ],
//       "For International Organizations": [
//         "Standards development",
//         "Collaboration frameworks",
//         "Risk management",
//         "Global coordination"
//       ]
//     }
//   }
// ];

// const SubsectionDetail = ({ content, isLast, parentColor }) => (
//   <div className="relative">
//     <div className="absolute left-[-24px] top-0 bottom-0">
//       <div className={`w-px h-full ${isLast ? 'h-1/2' : ''} bg-gray-200`} />
//     </div>
//     <div className="ml-6 p-2 rounded hover:bg-gray-50 transition-all duration-200 flex items-start">
//       <div className={`w-2 h-2 rounded-full ${parentColor} mt-2 mr-3 flex-shrink-0`} />
//       <span>{content}</span>
//     </div>
//   </div>
// );

// const Subsection = ({ title, details, isExpanded, onToggle, isLast, parentColor, bgColor }) => (
//   <div className="relative">
//     <div className="absolute left-[-24px] top-0 bottom-0">
//       <div className={`w-px h-full ${isLast ? 'h-1/2' : ''} bg-gray-200`} />
//     </div>
//     <div
//       className={`
//         flex items-center p-2 rounded cursor-pointer
//         transition-all duration-200
//         ${bgColor} hover:bg-opacity-75
//       `}
//       onClick={onToggle}
//     >
//       <ChevronRight 
//         className={`
//           text-gray-400 w-4 h-4 mr-2
//           transition-transform duration-200
//           ${isExpanded ? 'transform rotate-90' : ''}
//         `}
//       />
//       {title}
//     </div>
//     <div 
//       className={`
//         ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
//         ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
//       `}
//     >
//       {details.map((detail, idx) => (
//         <SubsectionDetail
//           key={idx}
//           content={detail}
//           isLast={idx === details.length - 1}
//           parentColor={parentColor}
//         />
//       ))}
//     </div>
//   </div>
// );

// const ReportSection = ({ section, isExpanded, onToggle, expandedSubsections, toggleSubsection }) => {
//   const Icon = section.icon;
  
//   return (
//     <div className="mb-2">
//       <div 
//         className={`
//           flex items-center p-3 rounded-lg cursor-pointer
//           transition-all duration-200 ease-in-out
//           hover:bg-gray-50
//           ${isExpanded ? section.bgColor : ''}
//         `}
//         onClick={onToggle}
//       >
//         <Icon className={`${section.color} mr-3`} size={20} />
//         <span className="flex-grow font-medium">{section.title}</span>
//         <ChevronRight 
//           className={`
//             text-gray-400 transition-transform duration-200
//             ${isExpanded ? 'transform rotate-90' : ''}
//           `} 
//           size={20} 
//         />
//       </div>
      
//       <div 
//         className={`
//           overflow-hidden transition-all duration-300 ease-in-out
//           ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
//         `}
//       >
//         <div className="ml-9 mt-2 space-y-2">
//           {Object.entries(section.subsections).map(([subsection, details], idx, arr) => (
//             <Subsection
//               key={subsection}
//               title={subsection}
//               details={details}
//               isExpanded={expandedSubsections[section.id]?.[subsection]}
//               onToggle={() => toggleSubsection(section.id, subsection)}
//               isLast={idx === arr.length - 1}
//               parentColor={section.bulletColor}
//               bgColor={section.bgColor}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ReportStructure = () => {
//   const [expandedSections, setExpandedSections] = useState(new Set([1]));
//   const [expandedSubsections, setExpandedSubsections] = useState({});

//   const toggleSection = (sectionId) => {
//     const newExpanded = new Set(expandedSections);
//     if (newExpanded.has(sectionId)) {
//       newExpanded.delete(sectionId);
//     } else {
//       newExpanded.add(sectionId);
//     }
//     setExpandedSections(newExpanded);
//   };

//   const toggleSubsection = (sectionId, subsection) => {
//     setExpandedSubsections(prev => ({
//       ...prev,
//       [sectionId]: {
//         ...prev[sectionId],
//         [subsection]: !prev[sectionId]?.[subsection]
//       }
//     }));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
//       <div className="mb-6 flex justify-between items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900">Analysis</h2>
//           <p className="text-gray-600 mt-2">
//             Click sections to expand/collapse and explore the report's structure
//           </p>
//         </div>
//         <button
//           className="text-sm text-blue-500 hover:text-blue-600 font-medium"
//           onClick={() => {
//             if (expandedSections.size === reportSections.length) {
//               setExpandedSections(new Set());
//             } else {
//               setExpandedSections(new Set(reportSections.map(s => s.id)));
//             }
//           }}
//         >
//           {expandedSections.size === reportSections.length ? 'Collapse All' : 'Expand All'}
//         </button>
//       </div>
      
//       <div className="space-y-2">
//         {reportSections.map((section) => (
//           <ReportSection
//             key={section.id}
//             section={section}
//             isExpanded={expandedSections.has(section.id)}
//             onToggle={() => toggleSection(section.id)}
//             expandedSubsections={expandedSubsections}
//             toggleSubsection={toggleSubsection}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReportStructure;


















import React, { useState } from 'react';
import { ChevronRight, ScrollText, BookOpen, Laptop, Globe, LineChart, Users, Building2, ShieldAlert, Bell, Lightbulb } from 'lucide-react';

const execSummarySubsections = {
  "Overview of DeepSeek-R1's launch and significance": [
    "DeepSeek-R1 is a groundbreaking AI model rivaling ChatGPT in capabilities",
    "It was developed at a significantly lower cost compared to Western counterparts",
    "Achieved rapid public adoption, becoming the #1 free app on Apple's App Store in the U.S",
    "Represents a major milestone for China's AI industry on the global stage"
  ],
  "Key impacts on the global AI landscape": [
    "Heightened competition in the AI space, with China challenging Western dominance",
    "Shift in focus toward cost-effective yet high-performing AI solutions",
    "Growing adoption and influence of open-source principles in AI development",
    "Increased pressure on Western companies to accelerate innovation and reduce costs"
  ],
  "Summary of immediate reactions": [
    "OpenAI CEO Sam Altman acknowledged the \"impressive\" nature of DeepSeek-R1",
    "Yann LeCun (Meta) praised DeepSeek's open-source approach as a model for collaboration",
    "Investors expressed concerns, leading to share declines for Nvidia, Microsoft, and Alphabet",
    "Policymakers began discussions on regulating and competing with open-source AI models"
  ],
  "Implications for international competition": [
    "Reinforces China's position as a serious contender in the global AI race",
    "Raises questions about the balance between openness and security in AI development",
    "Encourages other nations to strengthen domestic AI capabilities and partnerships",
    "Highlights the need for policies addressing potential misuse of open-source AI tools"
  ]
};

const reportSections = [
  {
    id: 1,
    title: "Executive Summary",
    icon: ScrollText,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    bulletColor: "bg-purple-500",
    subsections: execSummarySubsections
  },
  {
    id: 2,
    title: "Context and Background",
    icon: BookOpen,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    bulletColor: "bg-blue-500",
    subsections: {
      "DeepSeek's Origin and Development": [
        "Founded in Beijing in early 2023",
        "Initial focus on efficient AI model development",
        "Rapid growth to over 200 employees",
        "Strategic partnerships with key research institutions"
      ],
      "Why It Matters": [
        "Represents shift in global AI development landscape",
        "Demonstrates viability of cost-effective AI approaches",
        "Challenges traditional AI development paradigms",
        "Sets new benchmarks for model efficiency"
      ]
    }
  },
  {
    id: 3,
    title: "The Event: DeepSeek-R1 Launch",
    icon: Laptop,
    color: "text-green-500",
    bgColor: "bg-green-50",
    bulletColor: "bg-green-500",
    subsections: {
      "Technical Details": [
        "Novel architecture optimized for efficiency",
        "Comparable performance metrics to GPT-4",
        "Significantly reduced training compute requirements",
        "Innovative data preprocessing techniques"
      ],
      "Global Reception": [
        "Widespread adoption in developer community",
        "Positive reviews from AI researchers",
        "Strong performance in benchmark tests",
        "Notable media coverage and industry attention"
      ]
    }
  },
  {
    id: 4,
    title: "Strategic Implications",
    icon: Globe,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    bulletColor: "bg-indigo-500",
    subsections: {
      "Geopolitical Impact": [
        "Shift in AI development power dynamics",
        "Impact on international tech partnerships",
        "Changes in national AI strategies",
        "Effects on global standards development"
      ],
      "Technological Rivalry": [
        "Competition in model architecture design",
        "Race for computational efficiency",
        "Open vs closed source debate",
        "Innovation in training methodologies"
      ]
    }
  },
  {
    id: 5,
    title: "Economic and Market Reactions",
    icon: LineChart,
    color: "text-red-500",
    bgColor: "bg-red-50",
    bulletColor: "bg-red-500",
    subsections: {
      "Market Volatility": [
        "Impact on tech stock valuations",
        "Changes in investment patterns",
        "Sector-wide market adjustments",
        "Long-term market implications"
      ],
      "Competitor Strategies": [
        "Response from major tech companies",
        "Shifts in R&D investment",
        "Changes in business models",
        "Strategic partnerships and acquisitions"
      ]
    }
  },
  {
    id: 6,
    title: "Key Stakeholder Analysis",
    icon: Users,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    bulletColor: "bg-amber-500",
    subsections: {
      "DeepSeek": [
        "Leadership vision and strategy",
        "Technical capabilities and resources",
        "Market positioning",
        "Future development roadmap"
      ],
      "Competitors": [
        "OpenAI's strategic response",
        "Microsoft's market position",
        "Google's AI initiatives",
        "Other emerging players"
      ],
      "Governments and Policymakers": [
        "Regulatory considerations",
        "National security implications",
        "Policy development initiatives",
        "International cooperation frameworks"
      ]
    }
  },
  {
    id: 7,
    title: "Global Impacts",
    icon: Building2,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    bulletColor: "bg-emerald-500",
    subsections: {
      "AI Ecosystem": [
        "Changes in development practices",
        "Impact on research community",
        "Open source contributions",
        "Industry standards evolution"
      ],
      "Geopolitical Dynamics": [
        "US-China tech relations",
        "Global AI leadership",
        "International collaborations",
        "Regional development hubs"
      ],
      "Broader Implications": [
        "Democratization of AI",
        "Economic impacts",
        "Social considerations",
        "Future of AI development"
      ]
    }
  },
  {
    id: 8,
    title: "Risks and Challenges",
    icon: ShieldAlert,
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    bulletColor: "bg-rose-500",
    subsections: {
      "Economic Risks": [
        "Market disruption potential",
        "Investment uncertainty",
        "Competition dynamics",
        "Resource allocation challenges"
      ],
      "Security Risks": [
        "Data privacy concerns",
        "Model security issues",
        "Misuse potential",
        "Protection measures"
      ],
      "Technological Risks": [
        "System reliability",
        "Integration challenges",
        "Scalability concerns",
        "Technical limitations"
      ]
    }
  },
  {
    id: 9,
    title: "Indicators and Warning Signs",
    icon: Bell,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    bulletColor: "bg-orange-500",
    subsections: {
      "Technological Indicators": [
        "Performance metrics",
        "Development milestones",
        "Technical breakthroughs",
        "Implementation challenges"
      ],
      "Economic Indicators": [
        "Market reactions",
        "Investment trends",
        "Industry adoption rates",
        "Cost-benefit analyses"
      ],
      "Geopolitical Indicators": [
        "Policy changes",
        "International agreements",
        "Regulatory developments",
        "Strategic partnerships"
      ]
    }
  },
  {
    id: 10,
    title: "Strategic Recommendations",
    icon: Lightbulb,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
    bulletColor: "bg-cyan-500",
    subsections: {
      "For Governments": [
        "Policy framework updates",
        "Investment strategies",
        "Security measures",
        "International cooperation"
      ],
      "For Industry": [
        "Innovation strategies",
        "Competition response",
        "Resource allocation",
        "Partnership opportunities"
      ],
      "For International Organizations": [
        "Standards development",
        "Collaboration frameworks",
        "Risk management",
        "Global coordination"
      ]
    }
  }
];





const SubsectionDetail = ({ content, isLast, parentColor }) => (
  <div className="relative">
    <div className="absolute left-[-24px] top-0 bottom-0">
      <div className={`w-px h-full ${isLast ? 'h-1/2' : ''} bg-gray-200`} />
    </div>
    <div className="ml-6 p-2 rounded hover:bg-gray-50 transition-all duration-200 flex items-start">
      <div className={`w-2 h-2 rounded-full ${parentColor} mt-1.5 mr-3 flex-shrink-0`} />
      <span className="text-sm text-gray-600">{content}</span>
    </div>
  </div>
);

const Subsection = ({ title, details, isExpanded, onToggle, isLast, parentColor, bgColor }) => (
  <div className="relative">
    <div className="absolute left-[-24px] top-0 bottom-0">
      <div className={`w-px h-full ${isLast ? 'h-1/2' : ''} bg-gray-200`} />
    </div>
    <div
      className={`
        flex items-center p-2 rounded cursor-pointer
        transition-all duration-200
        ${bgColor} hover:bg-opacity-75
      `}
      onClick={onToggle}
    >
      <ChevronRight 
        className={`
          text-gray-400 w-4 h-4 mr-2
          transition-transform duration-200
          ${isExpanded ? 'transform rotate-90' : ''}
        `}
      />
      {title}
    </div>
    <div 
      className={`
        ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
        ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
      `}
    >
      {details.map((detail, idx) => (
        <SubsectionDetail
          key={idx}
          content={detail}
          isLast={idx === details.length - 1}
          parentColor={parentColor}
        />
      ))}
    </div>
  </div>
);

const ReportSection = ({ section, isExpanded, onToggle, expandedSubsections, toggleSubsection }) => {
  const Icon = section.icon;
  
  return (
    <div className="mb-2">
      <div 
        className={`
          flex items-center p-3 rounded-lg cursor-pointer
          transition-all duration-200 ease-in-out
          hover:bg-gray-50
          ${isExpanded ? section.bgColor : ''}
        `}
        onClick={onToggle}
      >
        <Icon className={`${section.color} mr-3`} size={20} />
        <span className="flex-grow font-medium">{section.title}</span>
        <ChevronRight 
          className={`
            text-gray-400 transition-transform duration-200
            ${isExpanded ? 'transform rotate-90' : ''}
          `} 
          size={20} 
        />
      </div>
      
      <div 
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="ml-9 mt-2 space-y-2">
          {Object.entries(section.subsections).map(([subsection, details], idx, arr) => (
            <Subsection
              key={subsection}
              title={subsection}
              details={details}
              isExpanded={expandedSubsections[section.id]?.[subsection]}
              onToggle={() => toggleSubsection(section.id, subsection)}
              isLast={idx === arr.length - 1}
              parentColor={section.bulletColor}
              bgColor={section.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ReportStructure = () => {
  const [expandedSections, setExpandedSections] = useState(new Set([1]));
  const [expandedSubsections, setExpandedSubsections] = useState({});

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const toggleSubsection = (sectionId, subsection) => {
    setExpandedSubsections(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [subsection]: !prev[sectionId]?.[subsection]
      }
    }));
  };


  return (





      <div className="h-full p-6 bg-white rounded-xl shadow-lg">

      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analysis</h2>
          <p className="text-gray-600 mt-2">
            Click sections to expand/collapse and explore the report's structure
          </p>
        </div>
        <button
          className="text-sm text-blue-500 hover:text-blue-600 font-medium"
          onClick={() => {
            if (expandedSections.size === reportSections.length) {
              setExpandedSections(new Set());
            } else {
              setExpandedSections(new Set(reportSections.map(s => s.id)));
            }
          }}
        >
          {expandedSections.size === reportSections.length ? 'Collapse All' : 'Expand All'}
        </button>
      </div>
      
      <div className="space-y-2">
        {reportSections.map((section) => (
          <ReportSection
            key={section.id}
            section={section}
            isExpanded={expandedSections.has(section.id)}
            onToggle={() => toggleSection(section.id)}
            expandedSubsections={expandedSubsections}
            toggleSubsection={toggleSubsection}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportStructure;
















