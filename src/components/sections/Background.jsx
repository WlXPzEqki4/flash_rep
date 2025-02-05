// import React, { useState, useEffect } from 'react';
// // import { Card, CardContent } from '@/components/ui/card';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Background = () => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expanded, setExpanded] = useState(false);

//   // Content sections
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       content: 'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       content: 'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       content: 'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       content: 'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Trigger section visibility with delay
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, []);

//   return (
//     <Card className="w-full bg-slate-900 text-white">
//       <CardContent className="p-6">
//         <div className="space-y-6">
//           <h2 className="text-2xl font-bold mb-8 opacity-0 animate-fade-in">
//             Background
//           </h2>

//           <div className="space-y-6">
//             {sections.map((section, index) => (
//               <div
//                 key={section.id}
//                 className={`transform transition-all duration-1000 ease-in-out
//                   ${visibleSections.includes(section.id) 
//                     ? 'opacity-100 translate-y-0' 
//                     : 'opacity-0 translate-y-10'}`}
//               >
//                 <div 
//                   className="border border-slate-700 rounded-lg p-4 hover:border-blue-500 
//                     transition-colors duration-300 cursor-pointer bg-slate-800"
//                   onClick={() => setExpanded(expanded === section.id ? null : section.id)}
//                 >
//                   <h3 className="text-xl font-semibold text-blue-400 mb-2">
//                     {section.title}
//                   </h3>
//                   <p className="text-slate-300">
//                     {section.content}
//                   </p>
                  
//                   <div 
//                     className={`mt-4 space-y-2 overflow-hidden transition-all duration-500
//                       ${expanded === section.id ? 'max-h-96' : 'max-h-0'}`}
//                   >
//                     {section.details.map((detail, i) => (
//                       <div 
//                         key={i}
//                         className={`flex items-start space-x-2 transform transition-all delay-${i * 100}
//                           ${expanded === section.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//                       >
//                         <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                         <p className="text-slate-300">{detail}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;



















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Background = () => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expanded, setExpanded] = useState(false);

//   // Content sections
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       content: 'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       content: 'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       content: 'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       content: 'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Trigger section visibility with delay
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, []);

//   return (
//     <Card className="w-full bg-blue-900 text-white">
//       <CardContent className="p-6">
//         <div className="space-y-6">
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="space-y-6">
//             {sections.map((section, index) => (
//               <div
//                 key={section.id}
//                 className={`transform transition-all duration-1000 ease-in-out
//                   ${visibleSections.includes(section.id) 
//                     ? 'opacity-100 translate-y-0' 
//                     : 'opacity-0 translate-y-10'}`}
//               >
//                 <div 
//                   className="border border-blue-800 rounded-lg p-4 hover:border-blue-500 
//                     transition-colors duration-300 cursor-pointer bg-blue-950"
//                   onClick={() => setExpanded(expanded === section.id ? null : section.id)}
//                 >
//                   <h3 className="text-xl font-semibold text-blue-400 mb-2">
//                     {section.title}
//                   </h3>
//                   <p className="text-slate-300">
//                     {section.content}
//                   </p>
                  
//                   <div 
//                     className={`mt-4 space-y-2 overflow-hidden transition-all duration-500
//                       ${expanded === section.id ? 'max-h-96' : 'max-h-0'}`}
//                   >
//                     {section.details.map((detail, i) => (
//                       <div 
//                         key={i}
//                         className={`flex items-start space-x-2 transform transition-all delay-${i * 100}
//                           ${expanded === section.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//                       >
//                         <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                         <p className="text-slate-300">{detail}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;

















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Background = () => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expanded, setExpanded] = useState(false);

//   // Content sections
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       content: 'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       content: 'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       content: 'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       content: 'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Trigger section visibility with delay
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, []);

//   return (
//     <Card className="w-full bg-blue-950 text-white">
//       <CardContent className="p-6">
//         <div className="space-y-6">
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="space-y-6">
//             {sections.map((section, index) => (
//               <div
//                 key={section.id}
//                 className={`transform transition-all duration-1000 ease-in-out
//                   ${visibleSections.includes(section.id) 
//                     ? 'opacity-100 translate-y-0' 
//                     : 'opacity-0 translate-y-10'}`}
//               >
//                 <div 
//                   className="border border-blue-800 rounded-lg p-4 hover:border-blue-500 
//                     transition-colors duration-300 cursor-pointer bg-blue-950"
//                   onClick={() => setExpanded(expanded === section.id ? null : section.id)}
//                 >
//                   <h3 className="text-xl font-semibold text-blue-400 mb-2">
//                     {section.title}
//                   </h3>
//                   <p className="text-slate-300">
//                     {section.content}
//                   </p>
                  
//                   <div 
//                     className={`mt-4 space-y-2 overflow-hidden transition-all duration-500
//                       ${expanded === section.id ? 'max-h-96' : 'max-h-0'}`}
//                   >
//                     {section.details.map((detail, i) => (
//                       <div 
//                         key={i}
//                         className={`flex items-start space-x-2 transform transition-all delay-${i * 100}
//                           ${expanded === section.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//                       >
//                         <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                         <p className="text-slate-300">{detail}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;














// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Background = () => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expanded, setExpanded] = useState(false);

//   // Content sections
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       content: 'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       content: 'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       content: 'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       content: 'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Trigger section visibility with delay
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, []);

//   return (
//     <Card className="w-full bg-blue-950 rounded-lg shadow-lg text-white">
//       <CardContent className="p-6">
//         <div className="space-y-6">
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="space-y-6">
//             {sections.map((section, index) => (
//               <div
//                 key={section.id}
//                 className={`transform transition-all duration-1000 ease-in-out
//                   ${visibleSections.includes(section.id) 
//                     ? 'opacity-100 translate-y-0' 
//                     : 'opacity-0 translate-y-10'}`}
//               >
//                 <div 
//                   className="border border-blue-800 rounded-lg p-4 hover:border-blue-500 
//                     transition-colors duration-300 cursor-pointer bg-blue-950"
//                   onClick={() => setExpanded(expanded === section.id ? null : section.id)}
//                 >
//                   <h3 className="text-xl font-semibold text-blue-400 mb-2">
//                     {section.title}
//                   </h3>
//                   <p className="text-slate-300">
//                     {section.content}
//                   </p>
                  
//                   <div 
//                     className={`mt-4 space-y-2 overflow-hidden transition-all duration-500
//                       ${expanded === section.id ? 'max-h-96' : 'max-h-0'}`}
//                   >
//                     {section.details.map((detail, i) => (
//                       <div 
//                         key={i}
//                         className={`flex items-start space-x-2 transform transition-all delay-${i * 100}
//                           ${expanded === section.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//                       >
//                         <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                         <p className="text-slate-300">{detail}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;













// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Background = () => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expanded, setExpanded] = useState(false);

//   // Content sections
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       content: 'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       content: 'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       content: 'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       content: 'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Trigger section visibility with a staggered delay
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, []);

//   return (
//     <Card className="w-full !bg-blue-950 rounded-lg shadow-lg !text-white">
//       {/* 
//         1) Use !bg-blue-950 to override the default Card background.
//         2) Also override CardContent to ensure no white shows through. 
//       */}
//       <CardContent className="!bg-blue-950 p-6">
//         <div className="space-y-6">
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="space-y-6">
//             {sections.map(section => (
//               <div
//                 key={section.id}
//                 className={`transform transition-all duration-1000 ease-in-out
//                   ${visibleSections.includes(section.id) 
//                     ? 'opacity-100 translate-y-0' 
//                     : 'opacity-0 translate-y-10'}`}
//               >
//                 <div 
//                   className="border border-blue-800 rounded-lg p-4 hover:border-blue-500 
//                     transition-colors duration-300 cursor-pointer !bg-blue-950"
//                   onClick={() => setExpanded(expanded === section.id ? null : section.id)}
//                 >
//                   <h3 className="text-xl font-semibold text-blue-400 mb-2">
//                     {section.title}
//                   </h3>
//                   <p className="text-slate-300">
//                     {section.content}
//                   </p>
                  
//                   <div 
//                     className={`mt-4 space-y-2 overflow-hidden transition-all duration-500
//                       ${expanded === section.id ? 'max-h-96' : 'max-h-0'}`}
//                   >
//                     {section.details.map((detail, i) => (
//                       <div
//                         key={i}
//                         className={`flex items-start space-x-2 transform transition-all delay-${i * 100}
//                           ${expanded === section.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//                       >
//                         <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                         <p className="text-slate-300">{detail}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;








// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Background = () => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expanded, setExpanded] = useState(false);

//   // Content sections
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       content: 'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       content: 'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       content: 'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       content: 'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Trigger section visibility with a staggered delay
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, []);

//   return (
//     // Use Tailwind's `bg-gray-900` to match the Project MALL background.
//     <Card className="w-full bg-gray-900 rounded-lg shadow-lg text-white">
//       {/* 
//         Override the default CardContent background to ensure
//         there's no white behind the sections.
//       */}
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="space-y-6">
//             {sections.map(section => (
//               <div
//                 key={section.id}
//                 className={`transform transition-all duration-1000 ease-in-out
//                   ${visibleSections.includes(section.id) 
//                     ? 'opacity-100 translate-y-0' 
//                     : 'opacity-0 translate-y-10'}`}
//               >
//                 <div 
//                   className="border border-gray-700 rounded-lg p-4 hover:border-gray-500 
//                     transition-colors duration-300 cursor-pointer bg-gray-900"
//                   onClick={() =>
//                     setExpanded(expanded === section.id ? null : section.id)
//                   }
//                 >
//                   <h3 className="text-xl font-semibold text-blue-400 mb-2">
//                     {section.title}
//                   </h3>
//                   <p className="text-gray-300">
//                     {section.content}
//                   </p>
                  
//                   <div 
//                     className={`mt-4 space-y-2 overflow-hidden transition-all duration-500
//                       ${expanded === section.id ? 'max-h-96' : 'max-h-0'}`}
//                   >
//                     {section.details.map((detail, i) => (
//                       <div
//                         key={i}
//                         className={`flex items-start space-x-2 transform transition-all delay-${i * 100}
//                           ${expanded === section.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//                       >
//                         <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                         <p className="text-gray-300">{detail}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;





















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Background = () => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // Content sections
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       content: 'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       content: 'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       content: 'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       content: 'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Trigger section visibility with a staggered delay
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, []);

//   // Toggle a section's "expanded" state
//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev => {
//       // If it’s already in the array, remove it; otherwise add it
//       return prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId];
//     });
//   };

//   return (
//     <Card className="w-full bg-gray-900 rounded-lg shadow-lg text-white">
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="space-y-6">
//             {sections.map(section => {
//               const isExpanded = expandedSections.includes(section.id);
//               return (
//                 <div
//                   key={section.id}
//                   className={`transform transition-all duration-1000 ease-in-out
//                     ${visibleSections.includes(section.id)
//                       ? 'opacity-100 translate-y-0' 
//                       : 'opacity-0 translate-y-10'
//                     }`}
//                 >
//                   <div
//                     className="border border-gray-700 rounded-lg p-4 hover:border-gray-500 
//                       transition-colors duration-300 cursor-pointer bg-gray-900"
//                     onClick={() => handleSectionClick(section.id)}
//                   >
//                     <h3 className="text-xl font-semibold text-blue-400 mb-2">
//                       {section.title}
//                     </h3>
//                     <p className="text-gray-300">
//                       {section.content}
//                     </p>

//                     <div 
//                       className={`mt-4 space-y-2 overflow-hidden transition-all duration-500
//                         ${isExpanded ? 'max-h-96' : 'max-h-0'}`}
//                     >
//                       {section.details.map((detail, i) => (
//                         <div
//                           key={i}
//                           className={`flex items-start space-x-2 transform transition-all delay-${i * 100}
//                             ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//                         >
//                           <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                           <p className="text-gray-300">{detail}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;
























// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Background = () => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // Content sections
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       content: 'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       content: 'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       content: 'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       content: 'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Trigger section visibility with a staggered delay
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, []);

//   // Toggle a section's "expanded" state
//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       // If it’s already in the array, remove it; otherwise add it
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   return (
//     <Card className="w-full bg-gray-900 rounded-lg shadow-lg text-white">
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           {/*
//             We'll wrap all tabs in a flex container so we can left-align them;
//             each tab is half the width on medium screens (md) and above.
//           */}
//           <div className="flex flex-col items-start space-y-6">
//             {sections.map(section => {
//               const isExpanded = expandedSections.includes(section.id);
//               const isVisible = visibleSections.includes(section.id);

//               return (
//                 <div
//                   key={section.id}
//                   className={`
//                     transform transition-all duration-1000 ease-in-out
//                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                     w-full md:w-1/2
//                   `}
//                 >
//                   <div
//                     className="border border-gray-600 rounded-lg p-4 hover:border-gray-400
//                       transition-colors duration-300 cursor-pointer
//                       bg-gray-800"
//                     onClick={() => handleSectionClick(section.id)}
//                   >
//                     <h3 className="text-xl font-semibold text-blue-400 mb-2">
//                       {section.title}
//                     </h3>
//                     <p className="text-gray-300">{section.content}</p>

//                     <div
//                       className={`
//                         mt-4 space-y-2 overflow-hidden transition-all duration-500
//                         ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                       `}
//                     >
//                       {section.details.map((detail, i) => (
//                         <div
//                           key={i}
//                           className={`
//                             flex items-start space-x-2 transform transition-all delay-${i * 100}
//                             ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                           `}
//                         >
//                           <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                           <p className="text-gray-300">{detail}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }

//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;

























// import React from 'react';

// const DetailsPanel = () => {
//   return (
//     <div className="space-y-6">
//       {/* --- Key Details --- */}
//       <div className="bg-gray-800 p-4 rounded-lg">
//         <div className="flex items-center space-x-2 mb-2">
//           {/* Exclamation icon (Heroicons: outline/exclamation-circle) */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-yellow-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 8v4m0 4h.01M12 2
//                  C6.48 2 2 6.48 2 12s4.48 10
//                  10 10 10-4.48 10-10S17.52 2 12 2z"
//             />
//           </svg>
//           <h3 className="text-white text-lg font-semibold">Key Details</h3>
//         </div>
//         <ul className="text-gray-300 list-disc list-inside ml-5 space-y-1">
//           <li>Major drug trafficking suspect</li>
//           <li>16t cocaine smuggling attempt</li>
//           <li>Previously detained in UAE</li>
//           <li>Filed appeal against extradition</li>
//         </ul>
//       </div>

//       {/* --- Additional Information --- */}
//       <div className="bg-gray-800 p-4 rounded-lg">
//         <div className="flex items-center space-x-2 mb-2">
//           {/* Info icon (Heroicons: outline/information-circle) */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-blue-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13 16h-1v-4h-1m1-2h.01M12
//                  2C6.48 2 2 6.48 2 12s4.48 10
//                  10 10 10-4.48 10-10S17.52 2 12 2z"
//             />
//           </svg>
//           <h3 className="text-white text-lg font-semibold">Additional Information</h3>
//         </div>
//         <ul className="text-gray-300 list-disc list-inside ml-5 space-y-1">
//           <li>Association: Target of international narcotics investigation</li>
//           <li>Paraguayan national residing in Dubai</li>
//           <li>Potential aliases: Ricardo Azeña; Ricardo Abu Dhabi</li>
//           <li>Alleged involvement in smuggling 16t of cocaine in 2021</li>
//           <li>Diplomatic attempts to extradite from the UAE</li>
//           <li>BENÍTEZ was detained in the UAE in 2022</li>
//           <li>Possible attempts to delay extradition</li>
//         </ul>
//       </div>

//       {/* --- Analyst Comment --- */}
//       <div className="bg-gray-800 p-4 rounded-lg">
//         <div className="flex items-center space-x-2 mb-2">
//           {/* Pencil icon (Heroicons: outline/pencil-alt) */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-pink-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M11 5H6a2 2 0 00-2 2v10a2 2
//                  0 002 2h10a2 2 0 002-2v-5M12 
//                  7l5 5m-3-5.2l1.8 1.8c.2.2.2.5 
//                  0 .7l-6.2 6.2a1 1 0 01-.7.3H8m0 
//                  0H7m1 0v-1"
//             />
//           </svg>
//           <h3 className="text-white text-lg font-semibold">Analyst Comment</h3>
//         </div>
//         <p className="text-gray-300">
//           BENÍTEZ is highly unlikely to maintain an active online presence due
//           to deliberate operational security measures...
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DetailsPanel;































// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Background = () => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // Content sections
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       icon: (
//         // Example: "Information Circle" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-2h.01
//                M12 2C6.48 2 2 6.48 2 12s4.48
//                10 10 10 10-4.48 10-10S17.52 2
//                12 2z"
//           />
//         </svg>
//       ),
//       content:
//         'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       icon: (
//         // Example: "User Group" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a4 4 0 00-3-3.87 
//                M12 20H7v-2a4 4 0 013-3.87
//                M12 4a4 4 0 110 8 4 4 0 010-8
//                M6 11.08a4 4 0 100 5.84"
//           />
//         </svg>
//       ),
//       content:
//         'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       icon: (
//         // Example: "Map" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 20l-5.447-2.724A2 2 0 013 
//                15.446V5.554a2 2 0 011.105-1.79l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                c.555.278 1.213.278 1.768 0l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                A2 2 0 0121 5.554v9.892a2 2 0 01-1.105
//                1.79L15 20c-.555.278-1.213.278-1.768
//                0L9.89 18.105c-.555-.278-1.213-.278-1.768
//                0L9 20z"
//           />
//         </svg>
//       ),
//       content:
//         'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       icon: (
//         // Example: "Office Building" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 7V4a1 1 0 011-1h3M13
//                16h-1v-4h-1m1-2h.01M12 2C6.48 
//                2 2 6.48 2 12s4.48 10 10 10 
//                10-4.48 10-10S17.52 2 12 2z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 7h16v13H4z 
//                M9 7V4h6v3"
//           />
//         </svg>
//       ),
//       content:
//         'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Show sections with a staggered delay
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, []);

//   // Toggle expanded state (multiple open at once)
//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   return (
//     <Card className="w-full bg-gray-900 rounded-lg shadow-lg text-white">
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           {/* 
//             Each tab is half-width on md+ screens (w-1/2),
//             with full width on smaller screens (w-full).
//           */}
//           <div className="flex flex-col items-start space-y-6">
//             {sections.map(section => {
//               const isExpanded = expandedSections.includes(section.id);
//               const isVisible = visibleSections.includes(section.id);

//               return (
//                 <div
//                   key={section.id}
//                   className={`
//                     transform transition-all duration-1000 ease-in-out
//                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                     w-full md:w-1/2
//                   `}
//                 >
//                   <div
//                     className="border border-gray-600 rounded-lg p-4 hover:border-gray-400
//                       transition-colors duration-300 cursor-pointer bg-gray-800"
//                     onClick={() => handleSectionClick(section.id)}
//                   >
//                     {/* HEADER WITH ICON & TITLE */}
//                     <div className="flex items-center space-x-2 mb-2">
//                       {section.icon}
//                       <h3 className="text-xl font-semibold text-white">
//                         {section.title}
//                       </h3>
//                     </div>

//                     {/* COLLAPSED CONTENT */}
//                     <p className="text-gray-300">{section.content}</p>
//                     <div
//                       className={`mt-4 space-y-2 overflow-hidden transition-all duration-500
//                         ${isExpanded ? 'max-h-96' : 'max-h-0'}`}
//                     >
//                       {section.details.map((detail, i) => (
//                         <div
//                           key={i}
//                           className={`flex items-start space-x-2 transform transition-all delay-${i * 100}
//                             ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//                         >
//                           <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                           <p className="text-gray-300">{detail}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;



























// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Background = () => {
//   // Declare both states once, at the top
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // Our array of content sections

//   // Content sections
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       icon: (
//         // Example: "Information Circle" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-2h.01
//                M12 2C6.48 2 2 6.48 2 12s4.48
//                10 10 10 10-4.48 10-10S17.52 2
//                12 2z"
//           />
//         </svg>
//       ),
//       content:
//         'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       icon: (
//         // Example: "User Group" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a4 4 0 00-3-3.87 
//                M12 20H7v-2a4 4 0 013-3.87
//                M12 4a4 4 0 110 8 4 4 0 010-8
//                M6 11.08a4 4 0 100 5.84"
//           />
//         </svg>
//       ),
//       content:
//         'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       icon: (
//         // Example: "Map" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 20l-5.447-2.724A2 2 0 013 
//                15.446V5.554a2 2 0 011.105-1.79l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                c.555.278 1.213.278 1.768 0l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                A2 2 0 0121 5.554v9.892a2 2 0 01-1.105
//                1.79L15 20c-.555.278-1.213.278-1.768
//                0L9.89 18.105c-.555-.278-1.213-.278-1.768
//                0L9 20z"
//           />
//         </svg>
//       ),
//       content:
//         'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       icon: (
//         // Example: "Office Building" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 7V4a1 1 0 011-1h3M13
//                16h-1v-4h-1m1-2h.01M12 2C6.48 
//                2 2 6.48 2 12s4.48 10 10 10 
//                10-4.48 10-10S17.52 2 12 2z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 7h16v13H4z 
//                M9 7V4h6v3"
//           />
//         </svg>
//       ),
//       content:
//         'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Staggered fade-in for each section
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections((prev) => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   // Toggle expanded state (multiple open at once)
//   const handleSectionClick = (sectionId) => {
//     setExpandedSections((prev) =>
//       prev.includes(sectionId)
//         ? prev.filter((id) => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   return (
//     <Card className="w-full bg-gray-900 rounded-lg shadow-lg text-white">
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="flex flex-col items-start space-y-6">
//             {sections.map((section) => {
//               const isExpanded = expandedSections.includes(section.id);
//               const isVisible = visibleSections.includes(section.id);

//               return (
//                 <div
//                   key={section.id}
//                   className={`
//                     transform transition-all duration-1000 ease-in-out
//                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                     w-full md:w-1/2
//                   `}
//                 >
//                   <div
//                     className="border border-gray-600 rounded-lg p-4 hover:border-gray-400
//                       transition-colors duration-300 cursor-pointer bg-gray-800"
//                     onClick={() => handleSectionClick(section.id)}
//                   >
//                     <div className="flex items-center space-x-2 mb-2">
//                       {section.icon}
//                       <h3 className="text-xl font-semibold text-white">
//                         {section.title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-300">{section.content}</p>
//                     <div
//                       className={`
//                         mt-4 overflow-hidden transition-all duration-500
//                         border-l border-gray-600 pl-4
//                         ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                       `}
//                     >
//                       <div className="space-y-2">
//                         {section.details.map((detail, i) => (
//                           <div
//                             key={i}
//                             className={`
//                               flex items-start space-x-2 transform 
//                               transition-all delay-${i * 100}
//                               ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                             `}
//                           >
//                             <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                             <p className="text-gray-300">{detail}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }

//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;























// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Background = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);


//   // Content sections
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       icon: (
//         // Example: "Information Circle" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-2h.01
//                M12 2C6.48 2 2 6.48 2 12s4.48
//                10 10 10 10-4.48 10-10S17.52 2
//                12 2z"
//           />
//         </svg>
//       ),
//       content:
//         'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       icon: (
//         // Example: "User Group" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a4 4 0 00-3-3.87 
//                M12 20H7v-2a4 4 0 013-3.87
//                M12 4a4 4 0 110 8 4 4 0 010-8
//                M6 11.08a4 4 0 100 5.84"
//           />
//         </svg>
//       ),
//       content:
//         'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       icon: (
//         // Example: "Map" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 20l-5.447-2.724A2 2 0 013 
//                15.446V5.554a2 2 0 011.105-1.79l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                c.555.278 1.213.278 1.768 0l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                A2 2 0 0121 5.554v9.892a2 2 0 01-1.105
//                1.79L15 20c-.555.278-1.213.278-1.768
//                0L9.89 18.105c-.555-.278-1.213-.278-1.768
//                0L9 20z"
//           />
//         </svg>
//       ),
//       content:
//         'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       icon: (
//         // Example: "Office Building" icon from Heroicons
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 7V4a1 1 0 011-1h3M13
//                16h-1v-4h-1m1-2h.01M12 2C6.48 
//                2 2 6.48 2 12s4.48 10 10 10 
//                10-4.48 10-10S17.52 2 12 2z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 7h16v13H4z 
//                M9 7V4h6v3"
//           />
//         </svg>
//       ),
//       content:
//         'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];


//   // Fade-in logic
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   // Click to toggle expansion
//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   return (

//     <Card className={`w-full bg-gray-900 rounded-lg shadow-lg text-white ${bottomSpace}`}>

//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="flex flex-col items-start space-y-6">
//             {sections.map(section => {
//               const isExpanded = expandedSections.includes(section.id);
//               const isVisible = visibleSections.includes(section.id);

//               return (
//                 <div
//                   key={section.id}
//                   className={`
//                     transform transition-all duration-1000 ease-in-out
//                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                     w-full md:w-1/2
//                   `}
//                 >
//                   <div
//                     className="border border-gray-600 rounded-lg p-4 hover:border-gray-400
//                       transition-colors duration-300 cursor-pointer bg-gray-800"
//                     onClick={() => handleSectionClick(section.id)}
//                   >
//                     <div className="flex items-center space-x-2 mb-2">
//                       {section.icon}
//                       <h3 className="text-xl font-semibold text-white">
//                         {section.title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-300">{section.content}</p>
//                     <div
//                       className={`
//                         mt-4 overflow-hidden transition-all duration-500
//                         border-l border-gray-600 pl-4
//                         ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                       `}
//                     >
//                       <div className="space-y-2">
//                         {section.details.map((detail, i) => (
//                           <div
//                             key={i}
//                             className={`
//                               flex items-start space-x-2 transform 
//                               transition-all delay-${i * 100}
//                               ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                             `}
//                           >
//                             <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                             <p className="text-gray-300">{detail}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;

























// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // Choose a shade in between bg-gray-900 (background) and bg-gray-800 (boxes).
// // For example, a custom hex like "#2a2f38" or "#1f2530".
// const INTERMEDIATE_BLUE = "bg-[#2a2f38]";

// const Background = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // Content sections (left panel)
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-2h.01
//                M12 2C6.48 2 2 6.48 2 12s4.48
//                10 10 10 10-4.48 10-10S17.52 2
//                12 2z"
//           />
//         </svg>
//       ),
//       content:
//         'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a4 4 0 00-3-3.87 
//                M12 20H7v-2a4 4 0 013-3.87
//                M12 4a4 4 0 110 8 4 4 0 010-8
//                M6 11.08a4 4 0 100 5.84"
//           />
//         </svg>
//       ),
//       content:
//         'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 20l-5.447-2.724A2 2 0 013
//                15.446V5.554a2 2 0 011.105-1.79l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                c.555.278 1.213.278 1.768 0l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                A2 2 0 0121 5.554v9.892a2 2 0 01-1.105
//                1.79L15 20c-.555.278-1.213.278-1.768
//                0L9.89 18.105c-.555-.278-1.213-.278-1.768
//                0L9 20z"
//           />
//         </svg>
//       ),
//       content:
//         'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 7V4a1 1 0 011-1h3M13
//                16h-1v-4h-1m1-2h.01M12 2C6.48 
//                2 2 6.48 2 12s4.48 10 10 10 
//                10-4.48 10-10S17.52 2 12 2z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 7h16v13H4z 
//                M9 7V4h6v3"
//           />
//         </svg>
//       ),
//       content:
//         'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Staggered fade-in for each section
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   // Handle expand/collapse
//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   return (
//     // The Card, with configurable bottom margin
//     <Card className={`w-full bg-gray-900 rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">

//           {/* Main Title (center or left) */}
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           {/*
//             Two responsive columns:
//             Left column: "Left Panel Title" + intermediate blue box containing your four sections
//             Right column: "Right Panel Title" + matching intermediate blue box (currently empty)
//           */}
//           <div className="flex flex-col md:flex-row gap-8">
            
//             {/* Left Column */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white">
//                 Left Panel Title
//               </h3>
              
//               {/* Intermediate Blue Container */}
//               <div className={`${INTERMEDIATE_BLUE} p-4 rounded-md space-y-6`}>
//                 {/* Loop over your four sections */}
//                 {sections.map(section => {
//                   const isExpanded = expandedSections.includes(section.id);
//                   const isVisible = visibleSections.includes(section.id);

//                   return (
//                     <div
//                       key={section.id}
//                       className={`
//                         transform transition-all duration-1000 ease-in-out
//                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                       `}
//                     >
//                       <div
//                         className="border border-gray-600 rounded-lg p-4 hover:border-gray-400
//                           transition-colors duration-300 cursor-pointer bg-gray-800"
//                         onClick={() => handleSectionClick(section.id)}
//                       >
//                         {/* Section Header */}
//                         <div className="flex items-center space-x-2 mb-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         {/* Section Content */}
//                         <p className="text-gray-300">{section.content}</p>
//                         <div
//                           className={`
//                             mt-4 overflow-hidden transition-all duration-500
//                             border-l border-gray-600 pl-4
//                             ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                           `}
//                         >
//                           <div className="space-y-2">
//                             {section.details.map((detail, i) => (
//                               <div
//                                 key={i}
//                                 className={`
//                                   flex items-start space-x-2 transform 
//                                   transition-all delay-${i * 100}
//                                   ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                                 `}
//                               >
//                                 <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                                 <p className="text-gray-300">{detail}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white text-right">
//                 Right Panel Title
//               </h3>
              
//               {/* Another Intermediate Blue Container, empty for now */}
//               <div className={`${INTERMEDIATE_BLUE} p-4 rounded-md space-y-6`}>
//                 <p className="text-gray-300">
//                   {/* Placeholder content or future panel */}
//                   This panel is currently empty. We'll fill it later!
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // Choose a shade in between bg-gray-900 (background) and bg-gray-800 (boxes).
// // For example, a custom hex like "#2a2f38" or "#1f2530".
// const INTERMEDIATE_BLUE = "bg-[#2a2f38]";

// const Background = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // Content sections (left panel)
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-2h.01
//                M12 2C6.48 2 2 6.48 2 12s4.48
//                10 10 10 10-4.48 10-10S17.52 2
//                12 2z"
//           />
//         </svg>
//       ),
//       content:
//         'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a4 4 0 00-3-3.87 
//                M12 20H7v-2a4 4 0 013-3.87
//                M12 4a4 4 0 110 8 4 4 0 010-8
//                M6 11.08a4 4 0 100 5.84"
//           />
//         </svg>
//       ),
//       content:
//         'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 20l-5.447-2.724A2 2 0 013
//                15.446V5.554a2 2 0 011.105-1.79l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                c.555.278 1.213.278 1.768 0l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                A2 2 0 0121 5.554v9.892a2 2 0 01-1.105
//                1.79L15 20c-.555.278-1.213.278-1.768
//                0L9.89 18.105c-.555-.278-1.213-.278-1.768
//                0L9 20z"
//           />
//         </svg>
//       ),
//       content:
//         'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 7V4a1 1 0 011-1h3M13
//                16h-1v-4h-1m1-2h.01M12 2C6.48 
//                2 2 6.48 2 12s4.48 10 10 10 
//                10-4.48 10-10S17.52 2 12 2z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 7h16v13H4z 
//                M9 7V4h6v3"
//           />
//         </svg>
//       ),
//       content:
//         'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Staggered fade-in for each section
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   // Handle expand/collapse
//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   return (
//     // The Card, with configurable bottom margin
//     <Card className={`w-full bg-gray-900 rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">

//           {/* Main Title (center or left) */}
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           {/*
//             Two responsive columns:
//             Left column: "Left Panel Title" + intermediate blue box containing your four sections
//             Right column: "Right Panel Title" + matching intermediate blue box (currently empty)
//           */}
//           <div className="flex flex-col md:flex-row gap-8">
            
//             {/* Left Column */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white">
//                 Left Panel Title
//               </h3>
              
//               {/* Intermediate Blue Container */}
//               <div className={`${INTERMEDIATE_BLUE} p-4 rounded-md space-y-6`}>
//                 {/* Loop over your four sections */}
//                 {sections.map(section => {
//                   const isExpanded = expandedSections.includes(section.id);
//                   const isVisible = visibleSections.includes(section.id);

//                   return (
//                     <div
//                       key={section.id}
//                       className={`
//                         transform transition-all duration-1000 ease-in-out
//                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                       `}
//                     >
//                       <div
//                         className="border border-gray-600 rounded-lg p-4 hover:border-gray-400
//                           transition-colors duration-300 cursor-pointer bg-gray-800"
//                         onClick={() => handleSectionClick(section.id)}
//                       >
//                         {/* Section Header */}
//                         <div className="flex items-center space-x-2 mb-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         {/* Section Content */}
//                         <p className="text-gray-300">{section.content}</p>
//                         <div
//                           className={`
//                             mt-4 overflow-hidden transition-all duration-500
//                             border-l border-gray-600 pl-4
//                             ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                           `}
//                         >
//                           <div className="space-y-2">
//                             {section.details.map((detail, i) => (
//                               <div
//                                 key={i}
//                                 className={`
//                                   flex items-start space-x-2 transform 
//                                   transition-all delay-${i * 100}
//                                   ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                                 `}
//                               >
//                                 <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                                 <p className="text-gray-300">{detail}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white text-right">
//                 Right Panel Title
//               </h3>
              
//               {/* Another Intermediate Blue Container, empty for now */}
//               <div className={`${INTERMEDIATE_BLUE} p-4 rounded-md space-y-6`}>
//                 <p className="text-gray-300">
//                   {/* Placeholder content or future panel */}
//                   This panel is currently empty. We'll fill it later!
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // Choose a shade in between bg-gray-900 (background) and bg-gray-800 (boxes).
// const INTERMEDIATE_BLUE = "bg-[#2a2f38]";

// const Background = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // Content sections (left panel)
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-2h.01
//                M12 2C6.48 2 2 6.48 2 12s4.48
//                10 10 10 10-4.48 10-10S17.52 2
//                12 2z"
//           />
//         </svg>
//       ),
//       content:
//         'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a4 4 0 00-3-3.87 
//                M12 20H7v-2a4 4 0 013-3.87
//                M12 4a4 4 0 110 8 4 4 0 010-8
//                M6 11.08a4 4 0 100 5.84"
//           />
//         </svg>
//       ),
//       content:
//         'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 20l-5.447-2.724A2 2 0 013
//                15.446V5.554a2 2 0 011.105-1.79l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                c.555-.278 1.213-.278 1.768 0l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                A2 2 0 0121 5.554v9.892a2 2 0 01-1.105
//                1.79L15 20c-.555.278-1.213.278-1.768
//                0L9.89 18.105c-.555-.278-1.213-.278-1.768
//                0L9 20z"
//           />
//         </svg>
//       ),
//       content:
//         'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 7V4a1 1 0 011-1h3M13
//                16h-1v-4h-1m1-2h.01M12 2C6.48 
//                2 2 6.48 2 12s4.48 10 10 10 
//                10-4.48 10-10S17.52 2 12 2z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 7h16v13H4z 
//                M9 7V4h6v3"
//           />
//         </svg>
//       ),
//       content:
//         'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // Staggered fade-in for each section
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   // Handle expand/collapse
//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   return (
//     // The Card, with configurable bottom margin
//     <Card className={`w-full bg-gray-900 rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">

//           {/* Main Title (center or left) */}
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           {/*
//             Two responsive columns:
//             Left column: "Left Panel Title" + medium blue box containing your four sections
//             Right column: "Right Panel Title" + matching box (currently empty)
//           */}
//           <div className="flex flex-col md:flex-row gap-8">
            
//             {/* Left Column */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white">
//                 Left Panel Title
//               </h3>
              
//               {/* Intermediate Blue Container */}
//               <div className="bg-[#1f2837] p-8 rounded-md space-y-8">
//                 {/* Loop over your four sections */}
//                 {sections.map(section => {
//                   const isExpanded = expandedSections.includes(section.id);
//                   const isVisible = visibleSections.includes(section.id);

//                   return (
//                     <div
//                       key={section.id}
//                       className={`
//                         transform transition-all duration-1000 ease-in-out
//                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                       `}
//                     >
//                       <div
//                         // Removed hover:border-gray-400
//                         // Added transform/transition/hover classes
//                         className="
//                           border border-gray-600 rounded-lg p-4 
//                           transition-all duration-300 cursor-pointer 
//                           bg-[#374051]
//                           hover:-translate-y-1 hover:shadow-lg
//                         "
//                         onClick={() => handleSectionClick(section.id)}
//                       >
//                         {/* Section Header */}
//                         <div className="flex items-center space-x-2 mb-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         {/* Section Content */}
//                         <p className="text-gray-300">{section.content}</p>
//                         <div
//                           className={`
//                             mt-4 overflow-hidden transition-all duration-500
//                             border-l border-gray-600 pl-4
//                             ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                           `}
//                         >
//                           <div className="space-y-2">
//                             {section.details.map((detail, i) => (
//                               <div
//                                 key={i}
//                                 className={`
//                                   flex items-start space-x-2 transform 
//                                   transition-all delay-${i * 100}
//                                   ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                                 `}
//                               >
//                                 <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                                 <p className="text-gray-300">{detail}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white text-right">
//                 Right Panel Title
//               </h3>
              
//               {/* Another Intermediate Blue Container, empty for now */}
//               <div className="bg-[#1f2837] p-4 rounded-md space-y-6">
//                 <p className="text-gray-300">
//                   {/* Placeholder content or future panel */}
//                   This panel is currently empty. We'll fill it later!
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;














// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // The "in-between" blue for the panel backgrounds
// // (darker than #374051 but lighter than #141a24, for example)
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// // This is your unified "Background" component
// const Background = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // ------------------------------
//   // Left Panel Sections (Operation Overview, etc.)
//   // ------------------------------
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-2h.01
//                M12 2C6.48 2 2 6.48 2 12s4.48
//                10 10 10 10-4.48 10-10S17.52 2
//                12 2z"
//           />
//         </svg>
//       ),
//       content:
//         'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a4 4 0 00-3-3.87 
//                M12 20H7v-2a4 4 0 013-3.87
//                M12 4a4 4 0 110 8 4 4 0 010-8
//                M6 11.08a4 4 0 100 5.84"
//           />
//         </svg>
//       ),
//       content:
//         'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 20l-5.447-2.724A2 2 0 013
//                15.446V5.554a2 2 0 011.105-1.79l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                c.555-.278 1.213-.278 1.768 0l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                A2 2 0 0121 5.554v9.892a2 2 0 01-1.105
//                1.79L15 20c-.555.278-1.213.278-1.768
//                0L9.89 18.105c-.555-.278-1.213-.278-1.768
//                0L9 20z"
//           />
//         </svg>
//       ),
//       content:
//         'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 7V4a1 1 0 011-1h3M13
//                16h-1v-4h-1m1-2h.01M12 2C6.48 
//                2 2 6.48 2 12s4.48 10 10 10 
//                10-4.48 10-10S17.52 2 12 2z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 7h16v13H4z 
//                M9 7V4h6v3"
//           />
//         </svg>
//       ),
//       content:
//         'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // ------------------------------
//   // Right Panel: Operation Timeline
//   // ------------------------------
//   const timelineEvents = [
//     {
//       date: "January 24, 2024",
//       time: null,
//       event: "Device PINK Activation",
//       details: "Initial activation of PINK device. Shows low activity pattern in workers' accommodation areas of Dubai Investments Park."
//     },
//     {
//       date: "December 2, 2024",
//       time: "0600-0641 UTC",
//       event: "PINK Device Movement",
//       details: "First activity of PINK device at Dubai International Airport."
//     },
//     {
//       date: "December 4, 2024",
//       time: null,
//       event: "PINK Location Change",
//       details: "PINK device becomes active at Premier Inn Dubai Investments Park."
//     },
//     {
//       date: "December 5, 2024",
//       time: "Afternoon local",
//       event: "Initial Money Movement",
//       details: "USD 11 million cash moved from Afaq Al-Mustqbal Transport Company, Speedex Center."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1700-1800 local",
//       event: "Transport Company Activity",
//       details: "PINK and CYAN devices present at Al Wathba Al Jadedeh Transport."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1800-2000 local",
//       event: "Port Arrival",
//       details: "Devices tracked to Jebel Ali Port."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1430 UTC",
//       event: "AS CLEMENTINA Arrival",
//       details: "Vessel arrives UAE waters."
//     },
//     {
//       date: "December 6, 2024",
//       time: "1730 UTC",
//       event: "Maritime Departure",
//       details: "AS CLEMENTINA departs UAE."
//     },
//     {
//       date: "December 8, 2024",
//       time: "1500 UTC",
//       event: "Iraq Arrival",
//       details: "AS CLEMENTINA arrives at Umm Qasr Port, Iraq."
//     },
//     {
//       date: "December 10, 2024",
//       time: "0900 UTC",
//       event: "Port Processing",
//       details: "AS CLEMENTINA completes port operations at Umm Qasr."
//     },
//     {
//       date: "December 10, 2024",
//       time: "1957 UTC",
//       event: "Final Delivery",
//       details: "Device RED tracked to Aswar Exchange Company location. Movement occurs around midnight local time."
//     },
//     {
//       date: "December 10, 2024",
//       time: "Early hours",
//       event: "Operation Completion",
//       details: "Last recorded activity of PINK device at Premier Inn hotel. Device ceases all activity."
//     },
//     {
//       date: "December 26, 2024",
//       time: null,
//       event: "Surveillance End",
//       details: "Final activity of device RED recorded."
//     }
//   ];

//   // ------------------------------
//   // Fading & Expansion Logic
//   // ------------------------------
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   const [timelineVisible, setTimelineVisible] = useState(false);
//   // We’ll also fade in the timeline after the sections are loaded, or immediately
//   useEffect(() => {
//     setTimeout(() => {
//       setTimelineVisible(true);
//     }, sections.length * 1000 + 500);
//   }, [sections.length]);

//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   // ------------------------------
//   // Main Return
//   // ------------------------------
//   return (
//     <Card className={`w-full bg-gray-900 rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">
//           {/* Main Title */}
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="flex flex-col md:flex-row gap-8">
//             {/* ---- LEFT COLUMN ---- */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white">
//                 Synopsis
//               </h3>

//               {/* "Intermediate" background container */}
//               <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//                 {sections.map(section => {
//                   const isExpanded = expandedSections.includes(section.id);
//                   const isVisible = visibleSections.includes(section.id);

//                   return (
//                     <div
//                       key={section.id}
//                       className={`
//                         transform transition-all duration-1000 ease-in-out
//                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                       `}
//                     >
//                       <div
//                         className="
//                           border border-gray-600 rounded-lg p-4 
//                           transition-all duration-300 cursor-pointer 
//                           bg-[#374051]
//                           hover:-translate-y-1 hover:shadow-lg
//                         "
//                         onClick={() => handleSectionClick(section.id)}
//                       >
//                         {/* Section Header */}
//                         <div className="flex items-center space-x-2 mb-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         {/* Section Content */}
//                         <p className="text-gray-300">{section.content}</p>
//                         <div
//                           className={`
//                             mt-4 overflow-hidden transition-all duration-500
//                             border-l border-gray-600 pl-4
//                             ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                           `}
//                         >
//                           <div className="space-y-2">
//                             {section.details.map((detail, i) => (
//                               <div
//                                 key={i}
//                                 className={`
//                                   flex items-start space-x-2 transform 
//                                   transition-all delay-${i * 100}
//                                   ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                                 `}
//                               >
//                                 <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                                 <p className="text-gray-300">{detail}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* ---- RIGHT COLUMN ---- */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white text-right">
//               Operation Timeline
//               </h3>

//               <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//                 {/* Fade in the timeline similarly */}
//                 <div
//                   className={`
//                     transform transition-all duration-1000 ease-in-out
//                     ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                   `}
//                 >
//                   {/* <h2 className="text-2xl font-bold mb-6">Operation Timeline</h2> */}
//                   <div className="relative">
//                     {timelineEvents.map((event, index) => (
//                       <div 
//                         key={index} 
//                         className="mb-8 relative pl-8 border-l-2 border-blue-500"
//                       >
//                         {/* Dot indicator */}
//                         <div className="absolute -left-2 top-0">
//                           <div className="w-4 h-4 bg-blue-500 rounded-full" />
//                         </div>

//                         {/* Event box */}
//                         <div className="bg-[#374051] p-4 rounded-lg">
//                           <div className="flex justify-between mb-2">
//                             <span className="text-blue-400 font-semibold">{/* time - top left  */}
//                               {event.date}
//                             </span>
//                             {event.time && (
//                               <span className="text-slate-400"> {/* time on the right up */}
//                                 {event.time}
//                               </span>
//                             )}
//                           </div>
//                           <h3 className="text-lg text-slate-300 font-semibold mb-2"> {/* title */}
//                             {event.event}
//                           </h3>
//                           <p className="text-slate-400"> {/* detail at the bottom */}
//                             {event.details}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;





















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // The "in-between" blue for the panel backgrounds
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// // Our unified "Background" component
// const Background = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // For timeline grouping
//   const [expandedGroups, setExpandedGroups] = useState([]);

//   // ------------------------------
//   // Left Panel Sections 
//   // ------------------------------
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-2h.01
//                M12 2C6.48 2 2 6.48 2 12s4.48
//                10 10 10 10-4.48 10-10S17.52 2
//                12 2z"
//           />
//         </svg>
//       ),
//       content:
//         'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a4 4 0 00-3-3.87 
//                M12 20H7v-2a4 4 0 013-3.87
//                M12 4a4 4 0 110 8 4 4 0 010-8
//                M6 11.08a4 4 0 100 5.84"
//           />
//         </svg>
//       ),
//       content:
//         'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 20l-5.447-2.724A2 2 0 013
//                15.446V5.554a2 2 0 011.105-1.79l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342 1.671
//                c.555-.278 1.213-.278 1.768 0l3.342-1.671
//                c.555-.278 1.213-.278 1.768 0l3.342-1.671
//                A2 2 0 0121 5.554v9.892a2 2 0 01-1.105
//                1.79L15 20c-.555.278-1.213.278-1.768
//                0L9.89 18.105c-.555-.278-1.213-.278-1.768
//                0L9 20z"
//           />
//         </svg>
//       ),
//       content:
//         'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 7V4a1 1 0 011-1h3M13
//                16h-1v-4h-1m1-2h.01M12 2C6.48 
//                2 2 6.48 2 12s4.48 10 10 10 
//                10-4.48 10-10S17.52 2 12 2z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 7h16v13H4z 
//                M9 7V4h6v3"
//           />
//         </svg>
//       ),
//       content:
//         'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // ------------------------------
//   // Right Panel: Operation Timeline
//   // ------------------------------
//   const timelineEvents = [
//     {
//       date: "January 24, 2024",
//       time: null,
//       event: "Device PINK Activation",
//       details: "Initial activation of PINK device. Shows low activity pattern in workers' accommodation areas of Dubai Investments Park."
//     },
//     {
//       date: "December 2, 2024",
//       time: "0600-0641 UTC",
//       event: "PINK Device Movement",
//       details: "First activity of PINK device at Dubai International Airport."
//     },
//     {
//       date: "December 4, 2024",
//       time: null,
//       event: "PINK Location Change",
//       details: "PINK device becomes active at Premier Inn Dubai Investments Park."
//     },
//     {
//       date: "December 5, 2024",
//       time: "Afternoon local",
//       event: "Initial Money Movement",
//       details: "USD 11 million cash moved from Afaq Al-Mustqbal Transport Company, Speedex Center."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1700-1800 local",
//       event: "Transport Company Activity",
//       details: "PINK and CYAN devices present at Al Wathba Al Jadedeh Transport."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1800-2000 local",
//       event: "Port Arrival",
//       details: "Devices tracked to Jebel Ali Port."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1430 UTC",
//       event: "AS CLEMENTINA Arrival",
//       details: "Vessel arrives UAE waters."
//     },
//     {
//       date: "December 6, 2024",
//       time: "1730 UTC",
//       event: "Maritime Departure",
//       details: "AS CLEMENTINA departs UAE."
//     },
//     {
//       date: "December 8, 2024",
//       time: "1500 UTC",
//       event: "Iraq Arrival",
//       details: "AS CLEMENTINA arrives at Umm Qasr Port, Iraq."
//     },
//     {
//       date: "December 10, 2024",
//       time: "0900 UTC",
//       event: "Port Processing",
//       details: "AS CLEMENTINA completes port operations at Umm Qasr."
//     },
//     {
//       date: "December 10, 2024",
//       time: "1957 UTC",
//       event: "Final Delivery",
//       details: "Device RED tracked to Aswar Exchange Company location. Movement occurs around midnight local time."
//     },
//     {
//       date: "December 10, 2024",
//       time: "Early hours",
//       event: "Operation Completion",
//       details: "Last recorded activity of PINK device at Premier Inn hotel. Device ceases all activity."
//     },
//     {
//       date: "December 26, 2024",
//       time: null,
//       event: "Surveillance End",
//       details: "Final activity of device RED recorded."
//     }
//   ];

//   // ------------------------------
//   // Group the timeline events by date
//   // ------------------------------
//   const groupedEventsObj = timelineEvents.reduce((acc, ev) => {
//     if (!acc[ev.date]) acc[ev.date] = [];
//     acc[ev.date].push(ev);
//     return acc;
//   }, {});
//   // Convert object to an array of { date, events: [ ... ] }
//   const groupedEvents = Object.entries(groupedEventsObj).map(([date, events]) => ({
//     date,
//     events
//   }));

//   // ------------------------------
//   // Fading & Expansion Logic
//   // ------------------------------
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   const [timelineVisible, setTimelineVisible] = useState(false);

//   // We'll fade in the timeline after the sections are loaded
//   useEffect(() => {
//     setTimeout(() => {
//       setTimelineVisible(true);
//     }, sections.length * 1000 + 500);
//   }, [sections.length]);

//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   // Manage collapsible date groups
//   const toggleDateGroup = (date) => {
//     setExpandedGroups(prev =>
//       prev.includes(date)
//         ? prev.filter(d => d !== date)
//         : [...prev, date]
//     );
//   };

//   // ------------------------------
//   // Main Return
//   // ------------------------------
//   return (
//     <Card className={`w-full bg-gray-900 rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">
//           {/* Main Title */}
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="flex flex-col md:flex-row gap-8">
//             {/* ---- LEFT COLUMN ---- */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white">
//                 Synopsis
//               </h3>

//               {/* "Intermediate" background container */}
//               <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//                 {sections.map(section => {
//                   const isExpanded = expandedSections.includes(section.id);
//                   const isVisible = visibleSections.includes(section.id);

//                   return (
//                     <div
//                       key={section.id}
//                       className={`
//                         transform transition-all duration-1000 ease-in-out
//                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                       `}
//                     >
//                       <div
//                         className="
//                           border border-gray-600 rounded-lg p-4 
//                           transition-all duration-300 cursor-pointer 
//                           bg-[#374051]
//                           hover:-translate-y-1 hover:shadow-lg
//                         "
//                         onClick={() => handleSectionClick(section.id)}
//                       >
//                         {/* Section Header */}
//                         <div className="flex items-center space-x-2 mb-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         {/* Section Content */}
//                         <p className="text-gray-300">{section.content}</p>
//                         <div
//                           className={`
//                             mt-4 overflow-hidden transition-all duration-500
//                             border-l border-gray-600 pl-4
//                             ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                           `}
//                         >
//                           <div className="space-y-2">
//                             {section.details.map((detail, i) => (
//                               <div
//                                 key={i}
//                                 className={`
//                                   flex items-start space-x-2 transform 
//                                   transition-all delay-${i * 100}
//                                   ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                                 `}
//                               >
//                                 <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                                 <p className="text-gray-300">{detail}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* ---- RIGHT COLUMN ---- */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white text-right">
//                 Operation Timeline
//               </h3>

//               <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//                 {/* Fade in the timeline similarly */}
//                 <div
//                   className={`
//                     transform transition-all duration-1000 ease-in-out
//                     ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                   `}
//                 >
//                   <div className="space-y-6">
//                     {groupedEvents.map(({ date, events }) => {
//                       const isGroupExpanded = expandedGroups.includes(date);

//                       return (
//                         <div key={date}>
//                           {/* Collapsible group heading */}
//                           <div
//                             className="flex items-center justify-between cursor-pointer mb-2"
//                             onClick={() => toggleDateGroup(date)}
//                           >
//                             <h4 className="text-blue-400 font-bold text-xl">
//                               {date}
//                             </h4>
//                             <span className="text-slate-400">
//                               {isGroupExpanded ? 'Hide' : 'Show'}
//                             </span>
//                           </div>

//                           {/* Only show the events if group is expanded */}
//                           <div
//                             className={`
//                               transition-all overflow-hidden pl-4 border-l-2 border-blue-500
//                               ${isGroupExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
//                             `}
//                           >
//                             {events.map((ev, idx) => (
//                               <div key={idx} className="relative mt-6 ml-4">
//                                 {/* Dot indicator */}
//                                 <div className="absolute -left-8 top-0">
//                                   <div className="w-4 h-4 bg-blue-500 rounded-full" />
//                                 </div>

//                                 {/* Time & Event box */}
//                                 <div className="bg-[#374051] p-4 rounded-lg shadow-md">
//                                   <div className="flex justify-between mb-2">
//                                     {/* If there's a time, display on the right */}
//                                     {ev.time ? (
//                                       <>
//                                         <span className="text-slate-400 font-semibold">
//                                           {ev.time}
//                                         </span>
//                                       </>
//                                     ) : (
//                                       <span className="text-slate-400">
//                                         {/* no time */}
//                                       </span>
//                                     )}
//                                   </div>
//                                   <h5 className="text-lg text-slate-300 font-semibold mb-2">
//                                     {ev.event}
//                                   </h5>
//                                   <p className="text-slate-400">
//                                     {ev.details}
//                                   </p>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // The "in-between" blue for the panel backgrounds
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const Background = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);
//   const [expandedGroups, setExpandedGroups] = useState([]);
//   const [timelineVisible, setTimelineVisible] = useState(false);

//   // ----- Left Panel Sections -----
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-2h.01 
//                M12 2C6.48 2 2 6.48 2 12s4.48 
//                10 10 10 10-4.48 10-10S17.52 
//                2 12 2z"
//           />
//         </svg>
//       ),
//       content:
//         'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a4 4 0 00-3-3.87 
//                M12 20H7v-2a4 4 0 013-3.87 
//                M12 4a4 4 0 110 8 4 4 0 010-8 
//                M6 11.08a4 4 0 100 5.84"
//           />
//         </svg>
//       ),
//       content:
//         'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 20l-5.447-2.724A2 2 
//                0 013 15.446V5.554a2 2 0 
//                011.105-1.79l3.342-1.671 
//                c.555-.278 1.213-.278 1.768 
//                0l3.342 1.671 c.555-.278 
//                1.213-.278 1.768 0l3.342 
//                -1.671 c.555-.278 1.213
//                -.278 1.768 0l3.342 1.671 
//                A2 2 0 0121 5.554v9.892a2 
//                2 0 01-1.105 1.79L15 20 
//                c-.555.278-1.213.278-1.768 
//                0L9.89 18.105c-.555-.278
//                -1.213-.278-1.768 0L9 20z"
//           />
//         </svg>
//       ),
//       content:
//         'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 7V4a1 1 0 011-1h3 
//                M13 16h-1v-4h-1m1-2h.01 
//                M12 2C6.48 2 2 6.48 2 
//                12s4.48 10 10 10 10-4.48 
//                10-10S17.52 2 12 2z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 7h16v13H4z M9 7V4h6v3"
//           />
//         </svg>
//       ),
//       content:
//         'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // ----- Right Panel: Operation Timeline -----
//   const timelineEvents = [
//     {
//       date: "January 24, 2024",
//       time: null,
//       event: "Device PINK Activation",
//       details: "Initial activation of PINK device. Shows low activity pattern in workers' accommodation areas of Dubai Investments Park."
//     },
//     {
//       date: "December 2, 2024",
//       time: "0600-0641 UTC",
//       event: "PINK Device Movement",
//       details: "First activity of PINK device at Dubai International Airport."
//     },
//     {
//       date: "December 4, 2024",
//       time: null,
//       event: "PINK Location Change",
//       details: "PINK device becomes active at Premier Inn Dubai Investments Park."
//     },
//     {
//       date: "December 5, 2024",
//       time: "Afternoon local",
//       event: "Initial Money Movement",
//       details: "USD 11 million cash moved from Afaq Al-Mustqbal Transport Company, Speedex Center."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1700-1800 local",
//       event: "Transport Company Activity",
//       details: "PINK and CYAN devices present at Al Wathba Al Jadedeh Transport."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1800-2000 local",
//       event: "Port Arrival",
//       details: "Devices tracked to Jebel Ali Port."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1430 UTC",
//       event: "AS CLEMENTINA Arrival",
//       details: "Vessel arrives UAE waters."
//     },
//     {
//       date: "December 6, 2024",
//       time: "1730 UTC",
//       event: "Maritime Departure",
//       details: "AS CLEMENTINA departs UAE."
//     },
//     {
//       date: "December 8, 2024",
//       time: "1500 UTC",
//       event: "Iraq Arrival",
//       details: "AS CLEMENTINA arrives at Umm Qasr Port, Iraq."
//     },
//     {
//       date: "December 10, 2024",
//       time: "0900 UTC",
//       event: "Port Processing",
//       details: "AS CLEMENTINA completes port operations at Umm Qasr."
//     },
//     {
//       date: "December 10, 2024",
//       time: "1957 UTC",
//       event: "Final Delivery",
//       details: "Device RED tracked to Aswar Exchange Company location. Movement occurs around midnight local time."
//     },
//     {
//       date: "December 10, 2024",
//       time: "Early hours",
//       event: "Operation Completion",
//       details: "Last recorded activity of PINK device at Premier Inn hotel. Device ceases all activity."
//     },
//     {
//       date: "December 26, 2024",
//       time: null,
//       event: "Surveillance End",
//       details: "Final activity of device RED recorded."
//     }
//   ];

//   // ----- Group the timeline events by date -----
//   const groupedEventsObj = timelineEvents.reduce((acc, ev) => {
//     if (!acc[ev.date]) acc[ev.date] = [];
//     acc[ev.date].push(ev);
//     return acc;
//   }, {});
//   const groupedEvents = Object.entries(groupedEventsObj).map(([date, events]) => ({
//     date,
//     events
//   }));

//   // ----- Fade/Expansion Logic -----
//   useEffect(() => {
//     // fade in left side boxes
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   useEffect(() => {
//     // fade in timeline after left sections
//     setTimeout(() => {
//       setTimelineVisible(true);
//     }, sections.length * 1000 + 500);
//   }, [sections.length]);

//   // left side expansions
//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   // right side expansions
//   const toggleDateGroup = (date) => {
//     setExpandedGroups(prev =>
//       prev.includes(date)
//         ? prev.filter(d => d !== date)
//         : [...prev, date]
//     );
//   };

//   // Icon for downward/upward chevron
//   const DownChevronIcon = ({ isOpen }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`h-5 w-5 transform transition-transform 
//         ${isOpen ? 'rotate-180' : ''}`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path 
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M19 9l-7 7-7-7"
//       />
//     </svg>
//   );

//   // ----- Main Return -----
//   return (
//     <Card className={`w-full bg-gray-900 rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">

//           {/* Main Title */}
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="flex flex-col md:flex-row gap-8">
//             {/* ---- LEFT COLUMN ---- */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white">
//                 Synopsis
//               </h3>

//               {/* "Intermediate" background container */}
//               <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//                 {sections.map(section => {
//                   const isExpanded = expandedSections.includes(section.id);
//                   const isVisible = visibleSections.includes(section.id);

//                   return (
//                     <div
//                       key={section.id}
//                       className={`
//                         transform transition-all duration-1000 ease-in-out
//                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                       `}
//                     >
//                       {/* Tab-like container */}
//                       <div
//                         className="
//                           border border-gray-600 rounded-lg p-4 
//                           transition-all duration-300 cursor-pointer 
//                           bg-[#374051]
//                           hover:-translate-y-1 hover:shadow-lg
//                         "
//                         onClick={() => handleSectionClick(section.id)}
//                       >
//                         {/* Section Header Row: Icon, Title, Chevron */}
//                         <div className="flex items-center justify-between mb-2">
//                           <div className="flex items-center space-x-2">
//                             {section.icon}
//                             <h4 className="text-xl font-semibold text-white">
//                               {section.title}
//                             </h4>
//                           </div>
//                           <DownChevronIcon isOpen={isExpanded} />
//                         </div>

//                         {/* Section Content */}
//                         <p className="text-gray-300">{section.content}</p>

//                         {/* Collapsible details */}
//                         <div
//                           className={`
//                             mt-4 overflow-hidden transition-all duration-500
//                             border-l border-gray-600 pl-4
//                             ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                           `}
//                         >
//                           <div className="space-y-2">
//                             {section.details.map((detail, i) => (
//                               <div
//                                 key={i}
//                                 className={`
//                                   flex items-start space-x-2 transform 
//                                   transition-all delay-${i * 100}
//                                   ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                                 `}
//                               >
//                                 <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                                 <p className="text-gray-300">{detail}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* ---- RIGHT COLUMN ---- */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white text-right">
//                 Operation Timeline
//               </h3>

//               <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//                 {/* Fade in the timeline similarly */}
//                 <div
//                   className={`
//                     transform transition-all duration-1000 ease-in-out
//                     ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                   `}
//                 >
//                   <div className="space-y-6">
//                     {groupedEvents.map(({ date, events }) => {
//                       const isGroupExpanded = expandedGroups.includes(date);

//                       // Provide a short summary for each date:
//                       // e.g. "3 events" or a quick label, or you could store in the data structure
//                       const shortSummary = `${events.length} event${events.length > 1 ? 's' : ''}`;

//                       return (
//                         <div
//                           key={date}
//                           className="
//                             border border-gray-600 rounded-lg p-4 
//                             transition-all duration-300 cursor-pointer 
//                             bg-[#374051]
//                             hover:-translate-y-1 hover:shadow-lg
//                           "
//                           onClick={() => toggleDateGroup(date)}
//                         >
//                           {/* Date heading row: Title, Chevron */}
//                           <div className="flex items-center justify-between">
//                             <h4 className="text-blue-400 font-bold text-xl">
//                               {date}
//                             </h4>
//                             <div className="flex items-center space-x-4">
//                               <span className="text-slate-400 text-sm">
//                                 {shortSummary}
//                               </span>
//                               <DownChevronIcon isOpen={isGroupExpanded} />
//                             </div>
//                           </div>

//                           {/* Expandable content */}
//                           <div
//                             className={`
//                               transition-all overflow-hidden mt-4 border-l-2 border-blue-500 pl-4
//                               ${isGroupExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
//                             `}
//                           >
//                             {events.map((ev, idx) => (
//                               <div key={idx} className="relative mt-6 ml-4">
//                                 {/* Dot indicator */}
//                                 <div className="absolute -left-8 top-0">
//                                   <div className="w-4 h-4 bg-blue-500 rounded-full" />
//                                 </div>

//                                 {/* Time & Event box */}
//                                 <div className="bg-[#2b3240] p-4 rounded-lg shadow-md">
//                                   <div className="flex justify-between mb-2">
//                                     {ev.time ? (
//                                       <span className="text-slate-400 font-semibold">
//                                         {ev.time}
//                                       </span>
//                                     ) : (
//                                       <span className="text-slate-400" />
//                                     )}
//                                   </div>
//                                   <h5 className="text-lg text-slate-300 font-semibold mb-2">
//                                     {ev.event}
//                                   </h5>
//                                   <p className="text-slate-400">
//                                     {ev.details}
//                                   </p>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;





















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // The "in-between" blue for the panel backgrounds
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const Background = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);
//   const [expandedGroups, setExpandedGroups] = useState([]);
//   const [timelineVisible, setTimelineVisible] = useState(false);

//   // ----- Left Panel Sections (Synopsis) -----
//   const sections = [
//     {
//       id: 'overview',
//       title: 'Operation Overview',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-2h.01 
//                M12 2C6.48 2 2 6.48 2 12s4.48 
//                10 10 10 10-4.48 10-10S17.52 
//                2 12 2z"
//           />
//         </svg>
//       ),
//       content:
//         'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
//       details: [
//         'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
//         'Cross-border operation: UAE to Iraq',
//         'Sophisticated money transfer procedure'
//       ]
//     },
//     {
//       id: 'actors',
//       title: 'Key Actors',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a4 4 0 00-3-3.87 
//                M12 20H7v-2a4 4 0 013-3.87
//                M12 4a4 4 0 110 8 4 4 0 010-8
//                M6 11.08a4 4 0 100 5.84"
//           />
//         </svg>
//       ),
//       content:
//         'Operation planned by Iraqi nationals specializing in money transfers.',
//       details: [
//         'Lead Operator: Salman Alwan SALIM',
//         'Key Collaborator: Abu Shaheen AL-AITHAWI',
//         'Network includes UAE residents and Iraqi specialists'
//       ]
//     },
//     {
//       id: 'route',
//       title: 'Movement Route',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 20l-5.447-2.724A2 2 
//                0 013 15.446V5.554a2 2 0 
//                011.105-1.79l3.342-1.671 
//                c.555-.278 1.213-.278 1.768 
//                0l3.342 1.671 c.555-.278 
//                1.213-.278 1.768 0l3.342 
//                -1.671 c.555-.278 1.213
//                -.278 1.768 0l3.342 1.671 
//                A2 2 0 0121 5.554v9.892a2 
//                2 0 01-1.105 1.79L15 20 
//                c-.555.278-1.213.278-1.768 
//                0L9.89 18.105c-.555-.278
//                -1.213-.278-1.768 0L9 20z"
//           />
//         </svg>
//       ),
//       content:
//         'Complex route utilizing multiple transport methods and locations.',
//       details: [
//         'Origin: Afaq Al-Mustqbal Transport (Dubai)',
//         'Transit: Jebel Ali Port via HGV',
//         'Sea Transport: Commercial shipping to Umm Qasr Port',
//         'Final Destination: Aswar Exchange Company (Basra)'
//       ]
//     },
//     {
//       id: 'entities',
//       title: 'Key Entities',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 7V4a1 1 0 011-1h3 
//                M13 16h-1v-4h-1m1-2h.01
//                M12 2C6.48 2 2 6.48 2 
//                12s4.48 10 10 10 10-4.48 
//                10-10S17.52 2 12 2z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 7h16v13H4z 
//                M9 7V4h6v3"
//           />
//         </svg>
//       ),
//       content:
//         'Investigation revealed sophisticated use of legitimate businesses.',
//       details: [
//         'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
//         'Maritime shipping services utilized',
//         'Aswar Exchange Company: Limited public information',
//         'Evidence of permanent UAE resident involvement'
//       ]
//     }
//   ];

//   // ----- Right Panel: Operation Timeline -----
//   const timelineEvents = [
//     {
//       date: "January 24, 2024",
//       time: null,
//       event: "Device PINK Activation",
//       details: "Initial activation of PINK device. Shows low activity pattern in workers' accommodation areas of Dubai Investments Park."
//     },
//     {
//       date: "December 2, 2024",
//       time: "0600-0641 UTC",
//       event: "PINK Device Movement",
//       details: "First activity of PINK device at Dubai International Airport."
//     },
//     {
//       date: "December 4, 2024",
//       time: null,
//       event: "PINK Location Change",
//       details: "PINK device becomes active at Premier Inn Dubai Investments Park."
//     },
//     {
//       date: "December 5, 2024",
//       time: "Afternoon local",
//       event: "Initial Money Movement",
//       details: "USD 11 million cash moved from Afaq Al-Mustqbal Transport Company, Speedex Center."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1700-1800 local",
//       event: "Transport Company Activity",
//       details: "PINK and CYAN devices present at Al Wathba Al Jadedeh Transport."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1800-2000 local",
//       event: "Port Arrival",
//       details: "Devices tracked to Jebel Ali Port."
//     },
//     {
//       date: "December 5, 2024",
//       time: "1430 UTC",
//       event: "AS CLEMENTINA Arrival",
//       details: "Vessel arrives UAE waters."
//     },
//     {
//       date: "December 6, 2024",
//       time: "1730 UTC",
//       event: "Maritime Departure",
//       details: "AS CLEMENTINA departs UAE."
//     },
//     {
//       date: "December 8, 2024",
//       time: "1500 UTC",
//       event: "Iraq Arrival",
//       details: "AS CLEMENTINA arrives at Umm Qasr Port, Iraq."
//     },
//     {
//       date: "December 10, 2024",
//       time: "0900 UTC",
//       event: "Port Processing",
//       details: "AS CLEMENTINA completes port operations at Umm Qasr."
//     },
//     {
//       date: "December 10, 2024",
//       time: "1957 UTC",
//       event: "Final Delivery",
//       details: "Device RED tracked to Aswar Exchange Company location. Movement occurs around midnight local time."
//     },
//     {
//       date: "December 10, 2024",
//       time: "Early hours",
//       event: "Operation Completion",
//       details: "Last recorded activity of PINK device at Premier Inn hotel. Device ceases all activity."
//     },
//     {
//       date: "December 26, 2024",
//       time: null,
//       event: "Surveillance End",
//       details: "Final activity of device RED recorded."
//     }
//   ];

//   // Provide short subheadings for each date
//   // (just placeholders for a "high-level" summary)
//   const dateSummaries = {
//     "January 24, 2024": "Initial PINK device activation in DIP",
//     "December 2, 2024": "First PINK device movement at DXB",
//     "December 4, 2024": "PINK device relocates to Premier Inn",
//     "December 5, 2024": "Major money movement & shipping operations",
//     "December 6, 2024": "AS CLEMENTINA departs UAE",
//     "December 8, 2024": "Arrival in Iraqi waters",
//     "December 10, 2024": "Final deliveries in Umm Qasr & closure",
//     "December 26, 2024": "Last known device activity"
//   };

//   // Group timeline events by date
//   const groupedEventsObj = timelineEvents.reduce((acc, ev) => {
//     if (!acc[ev.date]) acc[ev.date] = [];
//     acc[ev.date].push(ev);
//     return acc;
//   }, {});
//   const groupedEvents = Object.entries(groupedEventsObj).map(([date, events]) => ({
//     date,
//     events
//   }));

//   // ----- Fade/Expansion Logic -----
// //   const [timelineVisible, setTimelineVisible] = useState(false);

//   useEffect(() => {
//     // fade in left side boxes
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   useEffect(() => {
//     // fade in timeline after left sections
//     setTimeout(() => {
//       setTimelineVisible(true);
//     }, sections.length * 1000 + 500);
//   }, [sections.length]);

//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

// //   const [expandedGroups, setExpandedGroups] = useState([]);

//   const toggleDateGroup = (date) => {
//     setExpandedGroups(prev =>
//       prev.includes(date)
//         ? prev.filter(d => d !== date)
//         : [...prev, date]
//     );
//   };

//   // Downward/upward chevron icon
//   const DownChevronIcon = ({ isOpen }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`h-5 w-5 transform transition-transform 
//         ${isOpen ? 'rotate-180' : ''}`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path 
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M19 9l-7 7-7-7"
//       />
//     </svg>
//   );

//   // ----- Main Return -----
//   return (
//     <Card className={`w-full bg-gray-900 rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="bg-gray-900 p-6">
//         <div className="space-y-6">

//           {/* Main Title */}
//           <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
//             Background
//           </h2>

//           <div className="flex flex-col md:flex-row gap-8">
//             {/* ---- LEFT COLUMN (Synopsis) ---- */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white">
//                 Synopsis
//               </h3>

//               {/* "Intermediate" background container */}
//               <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//                 {sections.map(section => {
//                   const isExpanded = expandedSections.includes(section.id);
//                   const isVisible = visibleSections.includes(section.id);

//                   return (
//                     <div
//                       key={section.id}
//                       className={`
//                         transform transition-all duration-1000 ease-in-out
//                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                       `}
//                     >
//                       {/* Tab-like container */}
//                       <div
//                         className="
//                           border border-gray-600 rounded-lg p-4 
//                           transition-all duration-300 cursor-pointer 
//                           bg-[#374051]
//                           hover:-translate-y-1 hover:shadow-lg
//                         "
//                         onClick={() => handleSectionClick(section.id)}
//                       >
//                         {/* Section Header Row: Icon, Title, Chevron */}
//                         <div className="flex items-center justify-between mb-2">
//                           <div className="flex items-center space-x-2">
//                             {section.icon}
//                             <h4 className="text-xl font-semibold text-white">
//                               {section.title}
//                             </h4>
//                           </div>
//                           <DownChevronIcon isOpen={isExpanded} />
//                         </div>

//                         {/* Section Content */}
//                         <p className="text-gray-300">{section.content}</p>

//                         {/* Collapsible details */}
//                         <div
//                           className={`
//                             mt-4 overflow-hidden transition-all duration-500
//                             border-l border-gray-600 pl-4
//                             ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                           `}
//                         >
//                           <div className="space-y-2">
//                             {section.details.map((detail, i) => (
//                               <div
//                                 key={i}
//                                 className={`
//                                   flex items-start space-x-2 transform 
//                                   transition-all delay-${i * 100}
//                                   ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                                 `}
//                               >
//                                 <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                                 <p className="text-gray-300">{detail}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* ---- RIGHT COLUMN (Timeline) ---- */}
//             <div className="md:w-1/2 flex flex-col space-y-4">
//               <h3 className="text-2xl font-bold text-white text-right">
//                 Operation Timeline
//               </h3>

//               <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//                 {/* Fade in the timeline similarly */}
//                 <div
//                   className={`
//                     transform transition-all duration-1000 ease-in-out
//                     ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                   `}
//                 >
//                   <div className="space-y-6">
//                     {groupedEvents.map(({ date, events }) => {
//                       const isGroupExpanded = expandedGroups.includes(date);

//                       // Summaries from our dateSummaries dictionary
//                       const summary = dateSummaries[date] || "No summary available";
//                       const numEvents = events.length === 1 ? '1 event' : `${events.length} events`;

//                       return (
//                         <div
//                           key={date}
//                           className="
//                             border border-gray-600 rounded-lg p-4 
//                             transition-all duration-300 cursor-pointer 
//                             bg-[#374051]
//                             hover:-translate-y-1 hover:shadow-lg
//                           "
//                           onClick={() => toggleDateGroup(date)}
//                         >
//                           {/* Date heading row: Title & Chevron */}
//                           <div className="flex items-center justify-between">
//                             <h4 className="text-blue-400 font-bold text-xl">
//                               {date}
//                             </h4>
//                             <div className="flex items-center space-x-4">
//                               <span className="text-slate-400 text-sm">
//                                 {numEvents}
//                               </span>
//                               <DownChevronIcon isOpen={isGroupExpanded} />
//                             </div>
//                           </div>

//                           {/* Subheading under the date (high-level description) */}
//                           <p className="text-slate-300 mt-2">
//                             {summary}
//                           </p>

//                           {/* Expandable content */}
//                           <div
//                             className={`
//                               transition-all overflow-hidden mt-4 border-l-2 border-blue-500 pl-4
//                               ${isGroupExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
//                             `}
//                           >
//                             {events.map((ev, idx) => (
//                               <div key={idx} className="relative mt-6">
//                                 {/* Dot indicator: vertically center */}
//                                 <div className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2">
//                                   <div className="w-4 h-4 bg-blue-500 rounded-full" />
//                                 </div>

//                                 {/* Time & Event box */}
//                                 <div className="bg-[#2b3240] p-4 rounded-lg shadow-md">
//                                   {/* If there's a time, show top-right or left side */}
//                                   <div className="flex justify-between mb-2">
//                                     {ev.time ? (
//                                       <span className="text-slate-400 font-semibold">
//                                         {ev.time}
//                                       </span>
//                                     ) : (
//                                       <span className="text-slate-400" />
//                                     )}
//                                   </div>
//                                   <h5 className="text-lg text-slate-300 font-semibold mb-2">
//                                     {ev.event}
//                                   </h5>
//                                   <p className="text-slate-400">
//                                     {ev.details}
//                                   </p>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Fade-in keyframes */}
//           <style jsx>{`
//             @keyframes fadeIn {
//               from { opacity: 0; }
//               to { opacity: 1; }
//             }
            
//             .animate-fade-in {
//               animation: fadeIn 1s ease-in forwards;
//             }
//           `}</style>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Background;

















import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// The "in-between" blue for the panel backgrounds
const INTERMEDIATE_BLUE = "bg-[#1f2837]";

const Background = ({ bottomSpace = 'mb-24' }) => {
  // ----- Left Panel State -----
  const [visibleSections, setVisibleSections] = useState([]);
  const [expandedSections, setExpandedSections] = useState([]);

  // ----- Right Panel State -----
  const [expandedGroups, setExpandedGroups] = useState([]);
  const [timelineVisible, setTimelineVisible] = useState(false);

  // ----- Left Panel Sections (Synopsis) -----
  const sections = [
    {
      id: 'overview',
      title: 'Operation Overview',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-2h.01 
               M12 2C6.48 2 2 6.48 2 12s4.48 
               10 10 10 10-4.48 10-10S17.52 
               2 12 2z"
          />
        </svg>
      ),
      content:
        'Intelligence sources identified an illicit movement of USD 11 million in cash from UAE to Iraq on December 5, 2024.',
      details: [
        'Multi-source intelligence corroboration: HUMINT, ADINT, OSINT',
        'Cross-border operation: UAE to Iraq',
        'Sophisticated money transfer procedure'
      ]
    },
    {
      id: 'actors',
      title: 'Key Actors',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path 
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a4 4 0 00-3-3.87 
               M12 20H7v-2a4 4 0 013-3.87
               M12 4a4 4 0 110 8 4 4 0 010-8
               M6 11.08a4 4 0 100 5.84"
          />
        </svg>
      ),
      content:
        'Operation planned by Iraqi nationals specializing in money transfers.',
      details: [
        'Lead Operator: Salman Alwan SALIM',
        'Key Collaborator: Abu Shaheen AL-AITHAWI',
        'Network includes UAE residents and Iraqi specialists'
      ]
    },
    {
      id: 'route',
      title: 'Movement Route',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 20l-5.447-2.724A2 2 
               0 013 15.446V5.554a2 2 0 
               011.105-1.79l3.342-1.671 
               c.555-.278 1.213-.278 1.768 
               0l3.342 1.671 c.555-.278 
               1.213-.278 1.768 0l3.342 
               -1.671 c.555-.278 1.213
               -.278 1.768 0l3.342 1.671 
               A2 2 0 0121 5.554v9.892a2 
               2 0 01-1.105 1.79L15 20 
               c-.555.278-1.213.278-1.768 
               0L9.89 18.105c-.555-.278
               -1.213-.278-1.768 0L9 20z"
          />
        </svg>
      ),
      content:
        'Complex route utilizing multiple transport methods and locations.',
      details: [
        'Origin: Afaq Al-Mustqbal Transport (Dubai)',
        'Transit: Jebel Ali Port via HGV',
        'Sea Transport: Commercial shipping to Umm Qasr Port',
        'Final Destination: Aswar Exchange Company (Basra)'
      ]
    },
    {
      id: 'entities',
      title: 'Key Entities',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7V4a1 1 0 011-1h3 
               M13 16h-1v-4h-1m1-2h.01
               M12 2C6.48 2 2 6.48 2 
               12s4.48 10 10 10 10-4.48 
               10-10S17.52 2 12 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7h16v13H4z 
               M9 7V4h6v3"
          />
        </svg>
      ),
      content:
        'Investigation revealed sophisticated use of legitimate businesses.',
      details: [
        'Afaq Al-Mustqbal Transport: Minimal online presence, defunct website',
        'Maritime shipping services utilized',
        'Aswar Exchange Company: Limited public information',
        'Evidence of permanent UAE resident involvement'
      ]
    }
  ];

  // ----- Right Panel: Operation Timeline -----
  const timelineEvents = [
    {
      date: "January 24, 2024",
      time: null,
      event: "Device PINK Activation",
      details: "Initial activation of Device PINK. Shows low activity pattern in workers' accommodation areas of Dubai Investments Park."
    },
    {
      date: "December 2, 2024",
      time: "0600-0641 UTC",
      event: "Device PINK Movement",
      details: "First activity of Device PINK at Dubai International Airport."
    },
    {
      date: "December 4, 2024",
      time: null,
      event: "Device PINK Location Change",
      details: "Device PINK becomes active at Premier Inn Dubai Investments Park."
    },
    {
      date: "December 5, 2024",
      time: "Afternoon local",
      event: "Initial Money Movement",
      details: "USD 11 million cash moved from Afaq Al-Mustqbal Transport Company, Speedex Center."
    },
    {
      date: "December 5, 2024",
      time: "1700-1800 local",
      event: "Transport Company Activity",
      details: "Devices PINK and CYAN present at Al Wathba Al Jadedeh Transport."
    },
    {
      date: "December 5, 2024",
      time: "1800-2000 local",
      event: "Port Arrival",
      details: "Devices tracked to Jebel Ali Port."
    },
    {
      date: "December 5, 2024",
      time: "1430 UTC",
      event: "AS CLEMENTINA Arrival",
      details: "Vessel arrives UAE waters."
    },
    {
      date: "December 6, 2024",
      time: "1730 UTC",
      event: "Maritime Departure",
      details: "AS CLEMENTINA departs UAE."
    },
    {
      date: "December 8, 2024",
      time: "1500 UTC",
      event: "Iraq Arrival",
      details: "AS CLEMENTINA arrives at Umm Qasr Port, Iraq."
    },
    {
      date: "December 10, 2024",
      time: "0900 UTC",
      event: "Port Processing",
      details: "AS CLEMENTINA completes port operations at Umm Qasr."
    },
    {
      date: "December 10, 2024",
      time: "1957 UTC",
      event: "Final Delivery",
      details: "Device RED tracked to Aswar Exchange Company location. Movement occurs around midnight local time."
    },
    {
      date: "December 10, 2024",
      time: "Early hours",
      event: "Operation Completion",
      details: "Last recorded activity of Device PINK at Premier Inn hotel. Device ceases all activity."
    },
    {
      date: "December 26, 2024",
      time: null,
      event: "Surveillance End",
      details: "Final activity of Device RED recorded."
    }
  ];

  // Provide short subheadings for each date
  const dateSummaries = {
    "January 24, 2024": "Initial Device PINK activation in DIP",
    "December 2, 2024": "First Device PINK movement at DXB",
    "December 4, 2024": "Device PINK relocates to Premier Inn",
    "December 5, 2024": "Major money movement & shipping operations",
    "December 6, 2024": "AS CLEMENTINA departs UAE",
    "December 8, 2024": "Arrival in Iraqi waters",
    "December 10, 2024": "Final deliveries in Umm Qasr & closure",
    "December 26, 2024": "Last known Device activity"
  };

  // Group timeline events by date
  const groupedEventsObj = timelineEvents.reduce((acc, ev) => {
    if (!acc[ev.date]) acc[ev.date] = [];
    acc[ev.date].push(ev);
    return acc;
  }, {});
  const groupedEvents = Object.entries(groupedEventsObj).map(([date, events]) => ({
    date,
    events
  }));

  // Fade-in logic for left side
  useEffect(() => {
    sections.forEach((section, index) => {
      setTimeout(() => {
        setVisibleSections(prev => [...prev, section.id]);
      }, index * 1000);
    });
  }, [sections]);

  // Fade-in logic for right side (timeline)
  useEffect(() => {
    setTimeout(() => {
      setTimelineVisible(true);
    }, sections.length * 1000 + 500);
  }, [sections.length]);

  // Expand/collapse left side
  const handleSectionClick = (sectionId) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Expand/collapse date groups
  const toggleDateGroup = (date) => {
    setExpandedGroups(prev =>
      prev.includes(date)
        ? prev.filter(d => d !== date)
        : [...prev, date]
    );
  };

  // Larger chevron icon, text-gray-600
  const DownChevronIcon = ({ isOpen }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 transform transition-transform text-gray-600
        ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path 
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  return (
    <Card className={`w-full bg-gray-900 rounded-lg shadow-lg text-white ${bottomSpace}`}>
      <CardContent className="bg-gray-900 p-6">
        <div className="space-y-6">
          {/* Main Title */}
          <h2 className="text-5xl font-bold mb-8 opacity-0 animate-fade-in text-white">
            Background
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* ---- LEFT COLUMN (Synopsis) ---- */}
            <div className="md:w-1/2 flex flex-col space-y-4">
              <h3 className="text-3xl font-bold text-white">Synopsis</h3>

              {/* "Intermediate" background container */}
              <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
                {sections.map(section => {
                  const isExpanded = expandedSections.includes(section.id);
                  const isVisible = visibleSections.includes(section.id);

                  return (
                    <div
                      key={section.id}
                      className={`
                        transform transition-all duration-1000 ease-in-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                      `}
                    >
                      <div
                        className="
                          border border-gray-600 rounded-lg p-4 
                          transition-all duration-300 cursor-pointer 
                          bg-[#374051]
                          hover:-translate-y-1 hover:shadow-lg
                        "
                        onClick={() => handleSectionClick(section.id)}
                      >
                        {/* Section Header Row: Icon, Title, Chevron */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {section.icon}
                            <h4 className="text-xl font-semibold text-white">
                              {section.title}
                            </h4>
                          </div>
                          <DownChevronIcon isOpen={isExpanded} />
                        </div>

                        {/* Section Content */}
                        <p className="text-gray-300">{section.content}</p>

                        {/* Collapsible details */}
                        <div
                          className={`
                            mt-4 overflow-hidden transition-all duration-500
                            border-l border-gray-600 pl-4
                            ${isExpanded ? 'max-h-96' : 'max-h-0'}
                          `}
                        >
                          <div className="space-y-2">
                            {section.details.map((detail, i) => (
                              <div
                                key={i}
                                className={`
                                  flex items-start space-x-2 transform 
                                  transition-all delay-${i * 100}
                                  ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                                `}
                              >
                                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                                <p className="text-gray-300">{detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ---- RIGHT COLUMN (Timeline) ---- */}
            <div className="md:w-1/2 flex flex-col space-y-4">
              <h3 className="text-3xl font-bold text-white text-left">
                Operation Timeline
              </h3>

              <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
                {/* Fade in the timeline */}
                <div
                  className={`
                    transform transition-all duration-1000 ease-in-out
                    ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                >
                  <div className="space-y-6">
                    {Object.entries(
                      timelineEvents.reduce((acc, ev) => {
                        if (!acc[ev.date]) acc[ev.date] = [];
                        acc[ev.date].push(ev);
                        return acc;
                      }, {})
                    ).map(([date, events]) => {
                      const isGroupExpanded = expandedGroups.includes(date);
                      const summary = dateSummaries[date] || "No summary available";
                      const numEvents = events.length === 1 ? '1 event' : `${events.length} events`;

                      return (
                        <div
                          key={date}
                          className="
                            border border-gray-600 rounded-lg p-4 
                            transition-all duration-300 cursor-pointer 
                            bg-[#374051]
                            hover:-translate-y-1 hover:shadow-lg
                          "
                          onClick={() => toggleDateGroup(date)}
                        >
                          {/* Date heading row: Title & Chevron */}
                          <div className="flex items-center justify-between">
                            <h4 className="text-blue-400 font-bold text-xl">
                              {date}
                            </h4>
                            <div className="flex items-center space-x-4">
                              <span className="text-slate-400 text-sm">
                                {numEvents}
                              </span>
                              <DownChevronIcon isOpen={isGroupExpanded} />
                            </div>
                          </div>

                          {/* Subheading under the date (high-level description) */}
                          <p className="text-slate-300 mt-2">
                            {summary}
                          </p>

                          {/* Expandable content */}
                          <div
                            className={`
                              transition-all overflow-hidden mt-2 border-l-2 border-blue-500 pl-4
                              ${isGroupExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                            `}
                          >
                            {events.map((ev, idx) => (
                              <div key={idx} className="relative mt-2">
                                {/* Dot indicator: vertically center */}
                                <div className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2">
                                  <div className="w-4 h-4 bg-blue-500 rounded-full" />
                                </div>

                                {/* Time & Event box */}
                                <div className="bg-[#2b3240] p-4 rounded-lg shadow-md">
                                  {/* If there's a time, show top-right */}
                                  <div className="flex justify-between mb-1">
                                    {ev.time ? (
                                      <span className="text-slate-400 font-semibold">
                                        {ev.time}
                                      </span>
                                    ) : (
                                      <span className="text-slate-400" />
                                    )}
                                  </div>
                                  <h5 className="text-lg text-slate-300 font-semibold mb-1">
                                    {ev.event}
                                  </h5>
                                  <p className="text-slate-400">
                                    {ev.details}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fade-in keyframes */}
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            
            .animate-fade-in {
              animation: fadeIn 1s ease-in forwards;
            }
          `}</style>
        </div>
      </CardContent>
    </Card>
  );
};

export default Background;




















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // The "in-between" panel background
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // Your collapsible sections, as before
//   const sections = [
//     {
//       id: 'registration',
//       title: 'Company Registration',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round" 
//             strokeLinejoin="round"
//             d="M9 12h6m-6 4h6m2 5H7
//                a2 2 0 01-2-2V5a2 2 0 
//                012-2h5.586a1 1 0 
//                01.707.293l5.414 
//                5.414a1 1 0 
//                01.293.707V19a2 2 0 
//                01-2 2z"
//           />
//         </svg>
//       ),
//       content: 'Registered business entity with minimal verifiable information.',
//       details: [
//         'Registration Date: October 10, 2022',
//         'Location: Speedex Center, Building 18, Dubai',
//         'Trading Name: "Future Horizons for Transport LLC"',
//         'Multiple unverified business identifiers'
//       ]
//     },
//     {
//       id: 'digital',
//       title: 'Digital Presence',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round" 
//             strokeLinejoin="round"
//             d="M21 12a9 9 0 
//                01-9 9m9-9a9 9 0 
//                00-9-9m9 9H3m9 
//                9a9 9 0 
//                01-9-9m9 9c1.657 
//                0 3-4.03 3-9s-1.343-9-3-9m0
//                18c-1.657 0-3-4.03-3-9s1.343-9
//                3-9m-9 9a9 9 0 019-9"
//           />
//         </svg>
//       ),
//       content: 'Limited and possibly deliberate minimal online footprint.',
//       details: [
//         'Defunct website: afaq-almustqbal.com',
//         'Instagram: @afak.almstqbal (<50 followers)',
//         'Sporadic social media updates',
//         'Mixed Google reviews (<20 total)',
//         'Last social media update: August 29, 2024'
//       ]
//     },
//     {
//       id: 'communications',
//       title: 'Communication Network',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round" 
//             strokeLinejoin="round"
//             d="M3 5a2 2 0 
//                012-2h3.28a1 1 0 
//                01.948.684l1.498 
//                4.493a1 1 0 
//                01-.502 1.21l-2.257 
//                1.13a11.042 11.042 
//                0 005.516 5.516l1.13-2.257
//                a1 1 0 011.21-.502l4.493 
//                1.498a1 1 0 
//                01.684.949V19a2 
//                2 0 01-2 2h-1C9.716 
//                21 3 14.284 
//                3 6V5z"
//           />
//         </svg>
//       ),
//       content: 'Multiple communication channels with inconsistent listings.',
//       details: [
//         'Primary: +971 555659713, +971507371729',
//         'Secondary: +971 50 560 6096, +971 50 221 5593',
//         'Email: transportafaq@gmail.com',
//         'Official email defunct: info@afaq-almustqbal.com'
//       ]
//     },
//     {
//       id: 'associations',
//       title: 'Business Associations',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-blue-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path 
//             strokeLinecap="round" 
//             strokeLinejoin="round"
//             d="M17 20h5v-2a3 
//                3 0 00-5.356-1.857M17 
//                20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 
//                20H2v-2a3 3 0 
//                015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 
//                0a5.002 5.002 0 
//                019.288 0M15 7a3 3 0 
//                11-6 0 3 3 0 016 0zm6 
//                3a2 2 0 
//                11-4 0 2 2 0 
//                014 0zM7 10a2 2 0 
//                11-4 0 2 2 0 
//                014 0z"
//           />
//         </svg>
//       ),
//       content: 'Network of connected entities and individuals across multiple countries.',
//       details: [
//         'Al Wathba Al Jadeeda Transport LLC (UAE)',
//         'Vixius Cargo (Turkey-based shipping)',
//         'Connection via Alaa Al-Hariri (Syrian national)',
//         'Links to Indian nationals in UAE'
//       ]
//     }
//   ];

//   // Animate sections in a staggered sequence
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   // Chevron icon
//   const DownChevronIcon = ({ isOpen }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`h-6 w-6 transform transition-transform text-gray-600 
//         ${isOpen ? 'rotate-180' : ''}`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path 
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M19 9l-7 7-7-7" 
//       />
//     </svg>
//   );

//   return (

//     <Card className={`w-full md:w-1/2 !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>

//         {/* Extra margin to match the gap you'd like */}
//         <h3 className="text-3xl font-bold text-white mb-4">Summary</h3>

//         {/* The collapsible sections container */}
//         <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-6`}>
//           {sections.map(section => {
//             const isExpanded = expandedSections.includes(section.id);
//             const isVisible = visibleSections.includes(section.id);

//             return (
//               <div
//                 key={section.id}
//                 className={`
//                   transform transition-all duration-1000 ease-in-out
//                   ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                 `}
//               >
//                 <div
//                   className="
//                     border border-gray-600 rounded-lg p-4 
//                     transition-all duration-300 cursor-pointer 
//                     bg-[#374051]
//                     hover:-translate-y-1 hover:shadow-lg
//                   "
//                   onClick={() => handleSectionClick(section.id)}
//                 >
//                   {/* Header row: icon, title, chevron */}
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center space-x-2">
//                       {section.icon}
//                       <h4 className="text-xl font-semibold text-white">
//                         {section.title}
//                       </h4>
//                     </div>
//                     <DownChevronIcon isOpen={isExpanded} />
//                   </div>

//                   {/* Short content */}
//                   <p className="text-gray-300">{section.content}</p>

//                   {/* Collapsible details */}
//                   <div
//                     className={`
//                       mt-4 overflow-hidden transition-all duration-500
//                       border-l border-gray-600 pl-4
//                       ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                     `}
//                   >
//                     <div className="space-y-2">
//                       {section.details.map((detail, i) => (
//                         <div
//                           key={i}
//                           className={`
//                             flex items-start space-x-2 transform 
//                             transition-all delay-${i * 100}
//                             ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                           `}
//                         >
//                           <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                           <p className="text-gray-300">{detail}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* 
//           Add the "box on the right" with the embedded Google Maps link
//           in the same color style. For demonstration, let's place it below
//           the collapsible sections. If you prefer side-by-side, you'd wrap
//           them in a flex container. 
//         */}
//         <div className={`${INTERMEDIATE_BLUE} p-6 rounded-md mt-8`}>
//           <h4 className="text-2xl font-bold text-white mb-2">
//             Location
//           </h4>
//           {/* A similarly styled box for the iFrame */}
//           <div className="bg-[#374051] p-4 rounded-lg border border-gray-600">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!4v1738661334412!6m8!1m7!1sWM5eRMYL4I9akILrMVKM_A!2m2!1d25.29039984610416!2d55.40128016125894!3f17.713859171695375!4f-9.330808807152607!5f0.4000000000000002"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               width="100%"
//               height="450"
//               title="Google Maps View"
//             />
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;





















































