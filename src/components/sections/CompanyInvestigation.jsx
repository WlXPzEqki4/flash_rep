// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   const sections = [
//     {
//       id: 'registration',
//       title: 'Company Registration',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
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
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, []);

//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   const DownChevronIcon = ({ isOpen }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`h-6 w-6 transform transition-transform text-gray-600 ${isOpen ? 'rotate-180' : ''}`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (
//     <Card className={`w-full bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="p-6">
//         <h2 className="text-4xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>

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
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center space-x-2">
//                       {section.icon}
//                       <h4 className="text-xl font-semibold text-white">
//                         {section.title}
//                       </h4>
//                     </div>
//                     <DownChevronIcon isOpen={isExpanded} />
//                   </div>

//                   <p className="text-gray-300">{section.content}</p>

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
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;














// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // The "in-between" panel background
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

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
//             d="M9 12h6m-6 4h6m2 5H7a2 
//                2 0 01-2-2V5a2 2 0 
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
//                0 005.516 5.516l1.13-2.257a1 
//                1 0 011.21-.502l4.493 
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

//   // Staggered fade-in for each section
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

//   // Larger chevron icon
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
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (

//     <Card className={`w-full !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>
//         <h3 className="text-3xl font-bold text-white">Summary</h3>


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
//                 {/* Outer box */}
//                 <div
//                   className="
//                     border border-gray-600 rounded-lg p-4 
//                     transition-all duration-300 cursor-pointer 
//                     bg-[#374051]
//                     hover:-translate-y-1 hover:shadow-lg
//                   "
//                   onClick={() => handleSectionClick(section.id)}
//                 >
//                   {/* Header (Icon, Title, Chevron) */}
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
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;
































// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // The "in-between" panel background
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

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
//             d="M9 12h6m-6 4h6m2 5H7a2 
//                2 0 01-2-2V5a2 2 0 
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
//                0 005.516 5.516l1.13-2.257a1 
//                1 0 011.21-.502l4.493 
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

//   // Staggered fade-in
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

//   // Chevron
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
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (

//     <Card className={`w-full md:w-1/2 !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>
//         <h3 className="text-3xl font-bold text-white">Summary</h3>

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
//                 {/* Outer box */}
//                 <div
//                   className="
//                     border border-gray-600 rounded-lg p-4 
//                     transition-all duration-300 cursor-pointer 
//                     bg-[#374051]
//                     hover:-translate-y-1 hover:shadow-lg
//                   "
//                   onClick={() => handleSectionClick(section.id)}
//                 >
//                   {/* Header (Icon, Title, Chevron) */}
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
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;





















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // The "in-between" panel background
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

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
//                0 005.516 5.516l1.13-2.257a1
//                1 0 011.21-.502l4.493
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

//   // Staggered fade-in for each section
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
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (
//     <Card className={`w-full !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>
        
//         {/* Add margin below the "Summary" heading to create a gap */}
//         <h3 className="text-3xl font-bold text-white mb-4">Summary</h3>

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
//                 {/* Outer box */}
//                 <div
//                   className="
//                     border border-gray-600 rounded-lg p-4 
//                     transition-all duration-300 cursor-pointer 
//                     bg-[#374051]
//                     hover:-translate-y-1 hover:shadow-lg
//                   "
//                   onClick={() => handleSectionClick(section.id)}
//                 >
//                   {/* Header (Icon, Title, Chevron) */}
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
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;

















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

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

//   // Chevron
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
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (

//     <Card className={`w-full md:w-1/2 !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>

//         {/* Add margin below heading to mirror existing gap in other layouts */}
//         <h3 className="text-3xl font-bold text-white mb-4">Summary</h3>

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
//                   {/* Header Row: Icon, Title, Chevron */}
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center space-x-2">
//                       {section.icon}
//                       <h4 className="text-xl font-semibold text-white">
//                         {section.title}
//                       </h4>
//                     </div>
//                     <DownChevronIcon isOpen={isExpanded} />
//                   </div>

//                   {/* Main content */}
//                   <p className="text-gray-300">{section.content}</p>

//                   {/* Expandable details */}
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
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;










// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // The "in-between" panel background
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

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

//   // Animate each section in a staggered fashion
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
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (

//     <Card className={`w-full md:w-1/2 !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>
//         {/* Extra margin for spacing below heading */}
//         <h3 className="text-3xl font-bold text-white mb-4">Summary</h3>


//         <div className="flex flex-col md:flex-row gap-8">
//           {/* LEFT SIDE: Collapsible Sections */}
//           <div className="md:w-1/2 space-y-6">
//             <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-6`}>
//               {sections.map(section => {
//                 const isExpanded = expandedSections.includes(section.id);
//                 const isVisible = visibleSections.includes(section.id);

//                 return (
//                   <div
//                     key={section.id}
//                     className={`
//                       transform transition-all duration-1000 ease-in-out
//                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                     `}
//                   >
//                     <div
//                       className="
//                         border border-gray-600 rounded-lg p-4 
//                         transition-all duration-300 cursor-pointer 
//                         bg-[#374051]
//                         hover:-translate-y-1 hover:shadow-lg
//                       "
//                       onClick={() => handleSectionClick(section.id)}
//                     >
//                       {/* Header row: Icon, Title, Chevron */}
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center space-x-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         <DownChevronIcon isOpen={isExpanded} />
//                       </div>

//                       {/* Short content */}
//                       <p className="text-gray-300">{section.content}</p>

//                       {/* Collapsible details */}
//                       <div
//                         className={`
//                           mt-4 overflow-hidden transition-all duration-500
//                           border-l border-gray-600 pl-4
//                           ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                         `}
//                       >
//                         <div className="space-y-2">
//                           {section.details.map((detail, i) => (
//                             <div
//                               key={i}
//                               className={`
//                                 flex items-start space-x-2 transform 
//                                 transition-all delay-${i * 100}
//                                 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                               `}
//                             >
//                               <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                               <p className="text-gray-300">{detail}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT SIDE: Google Maps Embed */}
//           <div className="md:w-1/2 space-y-6">
//             <div className={`${INTERMEDIATE_BLUE} p-6 rounded-md`}>
//               <h4 className="text-2xl font-bold text-white mb-2">
//                 Location
//               </h4>
//               <div className="bg-[#374051] p-4 rounded-lg border border-gray-600">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!4v1738661334412!6m8!1m7!1sWM5eRMYL4I9akILrMVKM_A!2m2!1d25.29039984610416!2d55.40128016125894!3f17.713859171695375!4f-9.330808807152607!5f0.4000000000000002"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   width="100%"
//                   height="450"
//                   title="Google Maps View"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;
















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // Panel background for the boxes
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // Collapsible sections data
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

//   // Staggered fade-in for each section
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
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (

//     <Card className={`w-full md:w-1/2 !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>
        
//         {/* Margin for spacing below heading */}
//         <h3 className="text-3xl font-bold text-white mb-4">Summary</h3>

//         {/* 
//           Two columns side-by-side from md+:
//           Left: collapsible sections
//           Right: Google Maps
//         */}
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* LEFT column: collapsible sections */}
//           <div className="md:w-1/2 space-y-6">
//             <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-6`}>
//               {sections.map(section => {
//                 const isExpanded = expandedSections.includes(section.id);
//                 const isVisible = visibleSections.includes(section.id);

//                 return (
//                   <div
//                     key={section.id}
//                     className={`
//                       transform transition-all duration-1000 ease-in-out
//                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                     `}
//                   >
//                     <div
//                       className="
//                         border border-gray-600 rounded-lg p-4 
//                         transition-all duration-300 cursor-pointer 
//                         bg-[#374051]
//                         hover:-translate-y-1 hover:shadow-lg
//                       "
//                       onClick={() => handleSectionClick(section.id)}
//                     >
//                       {/* Section header row: icon, title, chevron */}
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center space-x-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         <DownChevronIcon isOpen={isExpanded} />
//                       </div>

//                       {/* Short content */}
//                       <p className="text-gray-300">{section.content}</p>

//                       {/* Collapsible details */}
//                       <div
//                         className={`
//                           mt-4 overflow-hidden transition-all duration-500
//                           border-l border-gray-600 pl-4
//                           ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                         `}
//                       >
//                         <div className="space-y-2">
//                           {section.details.map((detail, i) => (
//                             <div
//                               key={i}
//                               className={`
//                                 flex items-start space-x-2 transform 
//                                 transition-all delay-${i * 100}
//                                 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                               `}
//                             >
//                               <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                               <p className="text-gray-300">{detail}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT column: Google Maps embed */}
//           <div className="md:w-1/2 space-y-6">
//             <div className={`${INTERMEDIATE_BLUE} p-6 rounded-md`}>
//               <h4 className="text-2xl font-bold text-white mb-2">
//                 Location
//               </h4>
//               <div className="bg-[#374051] p-4 rounded-lg border border-gray-600">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!4v1738661334412!6m8!1m7!1sWM5eRMYL4I9akILrMVKM_A!2m2!1d25.29039984610416!2d55.40128016125894!3f17.713859171695375!4f-9.330808807152607!5f0.4000000000000002"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   width="100%"
//                   height="450"
//                   title="Google Maps View"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;












// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // Panel background for the boxes
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // Collapsible sections data
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

//   // Staggered fade-in for each section
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
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (

//     <Card className={`w-full md:w-1/2 !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>
        
//         {/* Margin for spacing below heading */}
//         <h3 className="text-3xl font-bold text-white mb-4">Summary</h3>

//         {/* 
//           Two columns side-by-side from md+:
//           Left: collapsible sections
//           Right: Google Maps
//         */}
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* LEFT column: collapsible sections */}
//           <div className="md:w-1/2 space-y-6">
//             <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-6`}>
//               {sections.map(section => {
//                 const isExpanded = expandedSections.includes(section.id);
//                 const isVisible = visibleSections.includes(section.id);

//                 return (
//                   <div
//                     key={section.id}
//                     className={`
//                       transform transition-all duration-1000 ease-in-out
//                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                     `}
//                   >
//                     <div
//                       className="
//                         border border-gray-600 rounded-lg p-4 
//                         transition-all duration-300 cursor-pointer 
//                         bg-[#374051]
//                         hover:-translate-y-1 hover:shadow-lg
//                       "
//                       onClick={() => handleSectionClick(section.id)}
//                     >
//                       {/* Section header row: icon, title, chevron */}
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center space-x-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         <DownChevronIcon isOpen={isExpanded} />
//                       </div>

//                       {/* Short content */}
//                       <p className="text-gray-300">{section.content}</p>

//                       {/* Collapsible details */}
//                       <div
//                         className={`
//                           mt-4 overflow-hidden transition-all duration-500
//                           border-l border-gray-600 pl-4
//                           ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                         `}
//                       >
//                         <div className="space-y-2">
//                           {section.details.map((detail, i) => (
//                             <div
//                               key={i}
//                               className={`
//                                 flex items-start space-x-2 transform 
//                                 transition-all delay-${i * 100}
//                                 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                               `}
//                             >
//                               <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                               <p className="text-gray-300">{detail}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT column: Google Maps embed */}
//           <div className="md:w-1/2 space-y-6">
//             <div className={`${INTERMEDIATE_BLUE} p-6 rounded-md`}>
//               <h4 className="text-2xl font-bold text-white mb-2">
//                 Location
//               </h4>
//               <div className="bg-[#374051] p-4 rounded-lg border border-gray-600">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!4v1738661334412!6m8!1m7!1sWM5eRMYL4I9akILrMVKM_A!2m2!1d25.29039984610416!2d55.40128016125894!3f17.713859171695375!4f-9.330808807152607!5f0.4000000000000002"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   width="100%"
//                   height="450"
//                   title="Google Maps View"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // For the background behind each panel
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // Collapsible data
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

//   // Staggered fade-in
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   const [timelineVisible, setTimelineVisible] = useState(false);

//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   // Downward chevron icon
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
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (

//     <Card className={`w-full !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>
//         <h3 className="text-3xl font-bold text-white mb-4">
//           Summary
//         </h3>


//         <div className="flex flex-col md:flex-row gap-8">
//           {/* LEFT: summary (collapsible) */}
//           <div className="flex-1">
//             <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//               {sections.map(section => {
//                 const isExpanded = expandedSections.includes(section.id);
//                 const isVisible = visibleSections.includes(section.id);

//                 return (
//                   <div
//                     key={section.id}
//                     className={`
//                       transform transition-all duration-1000 ease-in-out
//                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                     `}
//                   >
//                     <div
//                       className="
//                         border border-gray-600 rounded-lg p-4 
//                         transition-all duration-300 cursor-pointer 
//                         bg-[#374051]
//                         hover:-translate-y-1 hover:shadow-lg
//                       "
//                       onClick={() => handleSectionClick(section.id)}
//                     >
//                       {/* Row: icon, title, chevron */}
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center space-x-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         <DownChevronIcon isOpen={isExpanded} />
//                       </div>

//                       {/* Summary text */}
//                       <p className="text-gray-300">{section.content}</p>

//                       {/* Collapsible details */}
//                       <div
//                         className={`
//                           mt-4 overflow-hidden transition-all duration-500
//                           border-l border-gray-600 pl-4
//                           ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                         `}
//                       >
//                         <div className="space-y-2">
//                           {section.details.map((detail, i) => (
//                             <div
//                               key={i}
//                               className={`
//                                 flex items-start space-x-2 transform 
//                                 transition-all delay-${i * 100}
//                                 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                               `}
//                             >
//                               <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                               <p className="text-gray-300">{detail}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT: Google Maps embed */}
          
//           <div className="flex-1">

//             <div className={`${INTERMEDIATE_BLUE} p-6 rounded-md`}>

//               {/* <h4 className="text-2xl font-bold text-white mb-2">
//                 Location
//               </h4> */}
//               <div className="bg-[#374051] p-4 rounded-lg border border-gray-600 m-2">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!4v1738661334412!6m8!1m7!1sWM5eRMYL4I9akILrMVKM_A!2m2!1d25.29039984610416!2d55.40128016125894!3f17.713859171695375!4f-9.330808807152607!5f0.4000000000000002"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   width="100%"
//                   height="450"
//                   title="Google Maps View"
//                 />
//               </div>
//               <div className="bg-[#374051] p-4 rounded-lg border border-gray-600 m-2">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!4v1738661334412!6m8!1m7!1sWM5eRMYL4I9akILrMVKM_A!2m2!1d25.29039984610416!2d55.40128016125894!3f17.713859171695375!4f-9.330808807152607!5f0.4000000000000002"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   width="100%"
//                   height="450"
//                   title="Google Maps View"
//                 />
//               </div>


//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;













// import React, { useState, useEffect, useRef } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// // For the background behind each panel
// const INTERMEDIATE_BLUE = "bg-[#1f2837]";

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // References for Mapbox
//   const mapContainerRef = useRef(null);
//   const mapRef = useRef(null);

//   // -- Mapbox logic
//   useEffect(() => {
//     // Only initialise once the component is loaded
//     if (!mapContainerRef.current) return;

//     // Replace with your own Mapbox access token
//     mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtMzVkZXJudTA5ejkya3B5NDU4Z2MyeHQifQ.aUk4eH5k3JC45Foxcbe2qQ';

//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//     //   style: 'mapbox://styles/mapbox/light-v11',
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [55.401368, 25.290541], // [longitude, latitude]
//       zoom: 15.5,
//       pitch: 25
//     });

//     function rotateCamera(timestamp) {
//       mapRef.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
//       requestAnimationFrame(rotateCamera);
//     }

//     mapRef.current.on('load', () => {
//       // Start rotation once the map loads
//       rotateCamera(0);

//       new mapboxgl.Marker()
//       .setLngLat([55.401368, 25.290541])
//       .addTo(mapRef.current);
    



//       // Remove any text labels, so they’re not ‘floating’ in 3D
//       const layers = mapRef.current.getStyle().layers;
//       for (const layer of layers) {
//         if (layer.type === 'symbol' && layer.layout['text-field']) {
//           mapRef.current.removeLayer(layer.id);
//         }
//       }

//       // Add 3D buildings
//       mapRef.current.addLayer({
//         id: '3d-buildings',
//         source: 'composite',
//         'source-layer': 'building',
//         filter: ['==', 'extrude', 'true'],
//         type: 'fill-extrusion',
//         minzoom: 15,
//         paint: {
//           'fill-extrusion-color': '#aaa',
//           'fill-extrusion-height': [
//             'interpolate',
//             ['linear'],
//             ['zoom'],
//             15,
//             0,
//             15.05,
//             ['get', 'height']
//           ],
//           'fill-extrusion-base': [
//             'interpolate',
//             ['linear'],
//             ['zoom'],
//             15,
//             0,
//             15.05,
//             ['get', 'min_height']
//           ],
//           'fill-extrusion-opacity': 0.6
//         }
//       });



      
//     });
//   }, []);

//   // Collapsible data
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

//   // Staggered fade-in for each section
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections(prev => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   // Toggling sections
//   const handleSectionClick = (sectionId) => {
//     setExpandedSections(prev =>
//       prev.includes(sectionId)
//         ? prev.filter(id => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   // Simple downward chevron icon
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
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (
//     <Card className={`w-full !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>
//         <h3 className="text-3xl font-bold text-white mb-4">
//           Summary
//         </h3>

//         <div className="flex flex-col md:flex-row gap-8">
//           {/* LEFT: Summary (collapsible) */}
//           <div className="flex-1">
//             <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//               {sections.map(section => {
//                 const isExpanded = expandedSections.includes(section.id);
//                 const isVisible = visibleSections.includes(section.id);

//                 return (
//                   <div
//                     key={section.id}
//                     className={`
//                       transform transition-all duration-1000 ease-in-out
//                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                     `}
//                   >
//                     <div
//                       className="
//                         border border-gray-600 rounded-lg p-4 
//                         transition-all duration-300 cursor-pointer 
//                         bg-[#374051]
//                         hover:-translate-y-1 hover:shadow-lg
//                       "
//                       onClick={() => handleSectionClick(section.id)}
//                     >
//                       {/* Row: Icon, Title, Chevron */}
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center space-x-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         <DownChevronIcon isOpen={isExpanded} />
//                       </div>

//                       {/* Summary Text */}
//                       <p className="text-gray-300">{section.content}</p>

//                       {/* Collapsible Details */}
//                       <div
//                         className={`
//                           mt-4 overflow-hidden transition-all duration-500
//                           border-l border-gray-600 pl-4
//                           ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                         `}
//                       >
//                         <div className="space-y-2">
//                           {section.details.map((detail, i) => (
//                             <div
//                               key={i}
//                               className={`
//                                 flex items-start space-x-2 transform 
//                                 transition-all delay-${i * 100}
//                                 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                               `}
//                             >
//                               <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                               <p className="text-gray-300">{detail}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT: Maps section */}
//           <div className="flex-1">
//             <div className={`${INTERMEDIATE_BLUE} p-6 rounded-md`}>
              
//               {/* Google Maps Embed */}
//               <div className="bg-[#374051] p-4 rounded-lg border border-gray-600 m-2">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!4v1738661334412!6m8!1m7!1sWM5eRMYL4I9akILrMVKM_A!2m2!1d25.29039984610416!2d55.40128016125894!3f17.713859171695375!4f-9.330808807152607!5f0.4000000000000002"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   width="100%"
//                   height="450"
//                   title="Google Maps View"
//                 />
//               </div>

//               {/* Mapbox 3D Buildings */}
//               <div
//                 className="bg-[#374051] p-4 rounded-lg border border-gray-600 m-2"
//                 style={{ width: '100%', height: '450px' }}
//               >
//                 {/* The Mapbox container is just a div with a ref */}
//                 <div
//                   ref={mapContainerRef}
//                   style={{ width: '100%', height: '100%' }}
//                 />
//               </div>

//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;




















// import React, { useState, useEffect, useRef } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// // For the background behind each panel
// const INTERMEDIATE_BLUE = 'bg-[#1f2837]';

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // References for Mapbox
//   const mapContainerRef = useRef(null);
//   const mapRef = useRef(null);

//   // -- Mapbox logic
//   useEffect(() => {
//     if (!mapContainerRef.current) return;

//     // Replace with your own Mapbox access token
//     mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtMzVkZXJudTA5ejkya3B5NDU4Z2MyeHQifQ.aUk4eH5k3JC45Foxcbe2qQ';

//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [55.401368, 25.290541], // [longitude, latitude]
//       zoom: 15.5,
//       pitch: 25
//     });

//     function rotateCamera(timestamp) {
//       mapRef.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
//       requestAnimationFrame(rotateCamera);
//     }

//     mapRef.current.on('load', () => {
//       // Start rotation once the map loads
//       rotateCamera(0);

//       // Add a marker at [55.401368, 25.290541]
//       new mapboxgl.Marker()
//         .setLngLat([55.401368, 25.290541])
//         .addTo(mapRef.current);

//       // Remove text labels so they don’t float in 3D
//       const layers = mapRef.current.getStyle().layers;
//       for (const layer of layers) {
//         if (layer.type === 'symbol' && layer.layout['text-field']) {
//           mapRef.current.removeLayer(layer.id);
//         }
//       }

//       // Add 3D buildings
//       mapRef.current.addLayer({
//         id: '3d-buildings',
//         source: 'composite',
//         'source-layer': 'building',
//         filter: ['==', 'extrude', 'true'],
//         type: 'fill-extrusion',
//         minzoom: 15,
//         paint: {
//           'fill-extrusion-color': '#aaa',
//           'fill-extrusion-height': [
//             'interpolate',
//             ['linear'],
//             ['zoom'],
//             15,
//             0,
//             15.05,
//             ['get', 'height']
//           ],
//           'fill-extrusion-base': [
//             'interpolate',
//             ['linear'],
//             ['zoom'],
//             15,
//             0,
//             15.05,
//             ['get', 'min_height']
//           ],
//           'fill-extrusion-opacity': 0.6
//         }
//       });
//     });
//   }, []);

//   // Collapsible data
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

//   // Staggered fade-in for each section
//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections((prev) => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   // Toggling sections
//   const handleSectionClick = (sectionId) => {
//     setExpandedSections((prev) =>
//       prev.includes(sectionId)
//         ? prev.filter((id) => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   // Simple downward chevron icon
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
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (
//     <Card className={`w-full !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>

//         {/* Headings side by side */}
//         <div className="flex flex-row justify-between items-center mb-4">
            
//           <h3 className="text-3xl font-bold text-white">Summary</h3>
//           <h3 className="text-3xl font-bold text-white ">Location</h3>
//         </div>

//         <div className="flex flex-col md:flex-row gap-8">
//           {/* LEFT: Summary (collapsible) */}
//           <div className="flex-1">
//             <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//               {sections.map((section) => {
//                 const isExpanded = expandedSections.includes(section.id);
//                 const isVisible = visibleSections.includes(section.id);

//                 return (
//                   <div
//                     key={section.id}
//                     className={`
//                       transform transition-all duration-1000 ease-in-out
//                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                     `}
//                   >
//                     <div
//                       className="
//                         border border-gray-600 rounded-lg p-4 
//                         transition-all duration-300 cursor-pointer 
//                         bg-[#374051]
//                         hover:-translate-y-1 hover:shadow-lg
//                       "
//                       onClick={() => handleSectionClick(section.id)}
//                     >
//                       {/* Row: Icon, Title, Chevron */}
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center space-x-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         <DownChevronIcon isOpen={isExpanded} />
//                       </div>

//                       {/* Summary text */}
//                       <p className="text-gray-300">{section.content}</p>

//                       {/* Collapsible details */}
//                       <div
//                         className={`
//                           mt-4 overflow-hidden transition-all duration-500
//                           border-l border-gray-600 pl-4
//                           ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                         `}
//                       >
//                         <div className="space-y-2">
//                           {section.details.map((detail, i) => (
//                             <div
//                               key={i}
//                               className={`
//                                 flex items-start space-x-2 transform 
//                                 transition-all delay-${i * 100}
//                                 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                               `}
//                             >
//                               <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                               <p className="text-gray-300">{detail}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT: Maps section */}
//           <div className="flex-1">
//             <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
              
//               {/* Google Maps Embed */}
//               <div className="bg-[#374051] p-4 rounded-lg border border-gray-600">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!4v1738661334412!6m8!1m7!1sWM5eRMYL4I9akILrMVKM_A!2m2!1d25.29039984610416!2d55.40128016125894!3f17.713859171695375!4f-9.330808807152607!5f0.4000000000000002"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   width="100%"
//                   height="450"
//                   title="Google Maps View"
//                 />
//               </div>

//               {/* Mapbox 3D Buildings */}
//               <div
//                 className="bg-[#374051] p-4 rounded-lg border border-gray-600"
//                 style={{ height: '450px' }}
//               >
//                 {/* Mapbox container */}
//                 <div
//                   ref={mapContainerRef}
//                   style={{ width: '100%', height: '100%' }}
//                 />
//               </div>

//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;



















// import React, { useState, useEffect, useRef } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const INTERMEDIATE_BLUE = 'bg-[#1f2837]';

// const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [expandedSections, setExpandedSections] = useState([]);

//   // References for Mapbox
//   const mapContainerRef = useRef(null);
//   const mapRef = useRef(null);

//   // -- Mapbox logic
//   useEffect(() => {
//     if (!mapContainerRef.current) return;

//     // Replace with your own Mapbox access token
//     mapboxgl.accessToken =
//       'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtMzVkZXJudTA5ejkya3B5NDU4Z2MyeHQifQ.aUk4eH5k3JC45Foxcbe2qQ';

//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [55.401368, 25.290541], // [longitude, latitude]
//       zoom: 15.5,
//       pitch: 25
//     });

//     function rotateCamera(timestamp) {
//       mapRef.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
//       requestAnimationFrame(rotateCamera);
//     }

//     mapRef.current.on('load', () => {
//       // Start rotation once the map loads
//       rotateCamera(0);

//       // Add a marker at [55.401368, 25.290541]
//       new mapboxgl.Marker()
//         .setLngLat([55.401368, 25.290541])
//         .addTo(mapRef.current);

//       // Remove text labels so they don’t float in 3D
//       const layers = mapRef.current.getStyle().layers;
//       for (const layer of layers) {
//         if (layer.type === 'symbol' && layer.layout['text-field']) {
//           mapRef.current.removeLayer(layer.id);
//         }
//       }

//       // Add 3D buildings
//       mapRef.current.addLayer({
//         id: '3d-buildings',
//         source: 'composite',
//         'source-layer': 'building',
//         filter: ['==', 'extrude', 'true'],
//         type: 'fill-extrusion',
//         minzoom: 15,
//         paint: {
//           'fill-extrusion-color': '#aaa',
//           'fill-extrusion-height': [
//             'interpolate',
//             ['linear'],
//             ['zoom'],
//             15,
//             0,
//             15.05,
//             ['get', 'height']
//           ],
//           'fill-extrusion-base': [
//             'interpolate',
//             ['linear'],
//             ['zoom'],
//             15,
//             0,
//             15.05,
//             ['get', 'min_height']
//           ],
//           'fill-extrusion-opacity': 0.6
//         }
//       });
//     });
//   }, []);

//   // Collapsible data
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

//   useEffect(() => {
//     sections.forEach((section, index) => {
//       setTimeout(() => {
//         setVisibleSections((prev) => [...prev, section.id]);
//       }, index * 1000);
//     });
//   }, [sections]);

//   const handleSectionClick = (sectionId) => {
//     setExpandedSections((prev) =>
//       prev.includes(sectionId)
//         ? prev.filter((id) => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

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
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );

//   return (
//     <Card className={`w-full !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
//       <CardContent className="!bg-[#101827] p-6">
//         <h2 className="text-5xl font-bold mb-8 text-white">
//           Company Investigation
//         </h2>

//         <div className="flex flex-col md:flex-row gap-8">
//           {/* LEFT COLUMN: Summary */}
//           <div className="flex-1">
//             <h3 className="text-3xl font-bold text-white mb-4">
//               Summary
//             </h3>
//             <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
//               {sections.map((section) => {
//                 const isExpanded = expandedSections.includes(section.id);
//                 const isVisible = visibleSections.includes(section.id);

//                 return (
//                   <div
//                     key={section.id}
//                     className={`
//                       transform transition-all duration-1000 ease-in-out
//                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                     `}
//                   >
//                     <div
//                       className="
//                         border border-gray-600 rounded-lg p-4 
//                         transition-all duration-300 cursor-pointer 
//                         bg-[#374051]
//                         hover:-translate-y-1 hover:shadow-lg
//                       "
//                       onClick={() => handleSectionClick(section.id)}
//                     >
//                       {/* Row: Icon, Title, Chevron */}
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center space-x-2">
//                           {section.icon}
//                           <h4 className="text-xl font-semibold text-white">
//                             {section.title}
//                           </h4>
//                         </div>
//                         <DownChevronIcon isOpen={isExpanded} />
//                       </div>

//                       {/* Summary text */}
//                       <p className="text-gray-300">{section.content}</p>

//                       {/* Collapsible details */}
//                       <div
//                         className={`
//                           mt-4 overflow-hidden transition-all duration-500
//                           border-l border-gray-600 pl-4
//                           ${isExpanded ? 'max-h-96' : 'max-h-0'}
//                         `}
//                       >
//                         <div className="space-y-2">
//                           {section.details.map((detail, i) => (
//                             <div
//                               key={i}
//                               className={`
//                                 flex items-start space-x-2 transform 
//                                 transition-all delay-${i * 100}
//                                 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//                               `}
//                             >
//                               <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
//                               <p className="text-gray-300">{detail}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT COLUMN: Location */}
//           <div className="flex-1">
//             <h3 className="text-3xl font-bold text-white mb-4">
//               Location
//             </h3>
//             <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
              
//               {/* Google Maps Embed */}
//               <div className="bg-[#374051] p-4 rounded-lg border border-gray-600">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!4v1738661334412!6m8!1m7!1sWM5eRMYL4I9akILrMVKM_A!2m2!1d25.29039984610416!2d55.40128016125894!3f17.713859171695375!4f-9.330808807152607!5f0.4000000000000002"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   width="100%"
//                   height="450"
//                   title="Google Maps View"
//                 />
//               </div>

//               {/* Mapbox 3D Buildings */}
//               <div
//                 className="bg-[#374051] p-4 rounded-lg border border-gray-600"
//                 style={{ height: '450px' }}
//               >
//                 {/* Mapbox container */}
//                 <div
//                   ref={mapContainerRef}
//                   style={{ width: '100%', height: '100%' }}
//                 />
//               </div>

//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyInvestigation;






























import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// If you're using lucide-react icons for <MessageSquare />
// import { MessageSquare } from 'lucide-react';

const INTERMEDIATE_BLUE = 'bg-[#1f2837]';

const CompanyInvestigation = ({ bottomSpace = 'mb-24' }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [expandedSections, setExpandedSections] = useState([]);

  // References for Mapbox
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  // -- Mapbox logic
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Replace with your own Mapbox access token
    mapboxgl.accessToken =
      'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtMzVkZXJudTA5ejkya3B5NDU4Z2MyeHQifQ.aUk4eH5k3JC45Foxcbe2qQ';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [55.401368, 25.290541], // [longitude, latitude]
      zoom: 15.5,
      pitch: 25
    });

    function rotateCamera(timestamp) {
      mapRef.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
      requestAnimationFrame(rotateCamera);
    }

    mapRef.current.on('load', () => {
      // Start rotation once the map loads
      rotateCamera(0);

      // Add a marker at [55.401368, 25.290541]
    //   new mapboxgl.Marker()
    //     .setLngLat([55.401368, 25.290541])
    //     .addTo(mapRef.current);


        // Add a marker at [55.401368, 25.290541], coloured orange (#ff5722)
        new mapboxgl.Marker({ color: '#ff5722' })
        .setLngLat([55.401368, 25.290541])
        .addTo(mapRef.current);


      // Remove text labels so they don’t float in 3D
      const layers = mapRef.current.getStyle().layers;
      for (const layer of layers) {
        if (layer.type === 'symbol' && layer.layout['text-field']) {
          mapRef.current.removeLayer(layer.id);
        }
      }

      // Add 3D buildings
      mapRef.current.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 15,
        paint: {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      });
    });
  }, []);





  // Collapsible data
  const sections = [
    {
      id: 'registration',
      title: 'Company Registration',
      content: 'Registered business entity with minimal verifiable information.',
      details: [
        'Registration Date: October 10, 2022',
        'Location: Speedex Center, Building 18, Dubai',
        'Trading Name: "Future Horizons for Transport LLC"',
        'Multiple unverified business identifiers'
      ]
    },
    {
      id: 'digital',
      title: 'Afaq Almustqbal Cargo & Transport',
      content: 'Limited and possibly deliberate minimal online footprint.',
      details: [
        'Defunct website: afaq-almustqbal.com',
        'Instagram: @afak.almstqbal (<50 followers)',
        'Sporadic social media updates',
        'Mixed Google reviews (<20 total)',
        'Last social media update: August 29, 2024'
      ]
    },
    {
      id: 'communications',
      title: 'Afaq Al-Mustqbal Transport LLC Network',
      content: 'Multiple communication channels with inconsistent listings.',
      details: [
        'Primary: +971 555659713, +971507371729',
        'Secondary: +971 50 560 6096, +971 50 221 5593',
        'Email: transportafaq@gmail.com',
        'Official email defunct: info@afaq-almustqbal.com'
      ]
    },
    {
      id: 'associations',
      title: 'Business Associations',
      content: 'Network of connected entities and individuals across multiple countries.',
      details: [
        'Al Wathba Al Jadeeda Transport LLC (UAE)',
        'Vixius Cargo (Turkey-based shipping)',
        'Connection via Alaa Al-Hariri (Syrian national)',
        'Links to Indian nationals in UAE'
      ]
    }
  ];

  useEffect(() => {
    sections.forEach((section, index) => {
      setTimeout(() => {
        setVisibleSections((prev) => [...prev, section.id]);
      }, index * 1000);
    });
  }, [sections]);

  const handleSectionClick = (sectionId) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

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
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  // Render
  return (
    <Card className={`w-full !bg-[#101827] rounded-lg shadow-lg text-white ${bottomSpace}`}>
      <CardContent className="!bg-[#101827] p-6">
        {/* <h2 className="text-5xl font-bold mb-8 text-white">
          Company Investigation: Afaq Almustqbal Cargo & Transport 
        </h2> */}
        {/* Wrap your image and heading together in a flex container */}
        <div className="flex items-center mb-8">
            <img
                src="/images/p1.png"
                alt="Company Logo"
                className="mr-4 h-32 w-32 object-contain"
            />
            <h2 className="text-5xl font-bold text-white">
                Company Investigation: Afaq Almustqbal Cargo &amp; Transport
            </h2>
            </div>





        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT COLUMN: Summary */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-white mb-4">
              Summary
            </h3>
            <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
              {sections.map((section) => {
                const isExpanded = expandedSections?.includes(section.id);
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
                      {/* Row: Title & Chevron */}
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-white">
                          {section.title}
                        </h4>
                        <DownChevronIcon isOpen={isExpanded} />
                      </div>

                      {/* Summary text */}
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

            {/* Platform Information (below Summary) */}
            <div className="bg-gray-800/50 p-6 rounded-lg mt-8">
              <div className="flex items-center mb-4">
                {/* If you're using lucide-react: <MessageSquare className="mr-3" size={24} /> */}
                {/* Otherwise, replace with your own icon or remove altogether */}
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
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>


                <h3 className="text-xl text-gray-300 font-semibold">Company Information</h3>
              </div>

        <div className="overflow-x-auto">
        <table className="w-full">
            <thead>
            <tr>
                <th className="text-left py-3 px-4 bg-gray-700/50 text-gray-300 font-semibold">Type</th>
                <th className="text-left py-3 px-4 bg-gray-700/50 text-gray-300 font-semibold">Identifier</th>
                <th className="text-left py-3 px-4 bg-gray-700/50 text-gray-300 font-semibold">Details</th>
            </tr>
            </thead>
            <tbody className="text-xs text-gray-400">
            <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 font-mono">Company Name</td>
                <td className="py-3 px-4 font-mono">AFAQ ALMUSTQBAL TRANSPORT L.L.C</td>
                <td className="py-3 px-4 font-mono">Also known as: Future Horizons for Transport LLC; Arabic: افاق المستقبل للنقليات ش.ذ.م.م</td>
            </tr>
            <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 font-mono">License</td>
                <td className="py-3 px-4 font-mono">1094190</td>
                <td className="py-3 px-4 font-mono">Registration Date: 2022-10-10</td>
            </tr>
            <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 font-mono">Commercial Register</td>
                <td className="py-3 px-4 font-mono">1789675, 2006594</td>
                <td className="py-3 px-4 font-mono">Multiple registration IDs found</td>
            </tr>
            <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 font-mono">Chamber Of Commerce</td>
                <td className="py-3 px-4 font-mono">422564</td>
                <td className="py-3 px-4 font-mono">Cedar Rose ID: AEC222400971</td>
            </tr>
            <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 font-mono">Physical Location</td>
                <td className="py-3 px-4 font-mono">Speedex Center, Building 18</td>
                <td className="py-3 px-4 font-mono">24b street, Shop 42, Al Qusais Industrial 4, Deira, Dubai; Building ID: 39081 98117</td>
            </tr>
            <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 font-mono">Coordinates</td>
                <td className="py-3 px-4 font-mono">25.290541, 55.401368</td>
                <td className="py-3 px-4 font-mono">Dubai, UAE location</td>
            </tr>
            <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 font-mono">Phone</td>
                <td className="py-3 px-4 font-mono">+971 555659713</td>
                <td className="py-3 px-4 font-mono">Primary contact number</td>
            </tr>
            <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 font-mono">Phone</td>
                <td className="py-3 px-4 font-mono">+971 507371729</td>
                <td className="py-3 px-4 font-mono">Secondary contact number</td>
            </tr>
            <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 font-mono">Instagram</td>
                <td className="py-3 px-4 font-mono">@afak.almstqbal</td>
                <td className="py-3 px-4 font-mono">Social media presence</td>
            </tr>
            <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 font-mono">Facebook</td>
                <td className="py-3 px-4 font-mono">afaq.almustqbal.cargo</td>
                <td className="py-3 px-4 font-mono">Social media presence</td>
            </tr>
            <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 font-mono">Business Type</td>
                <td className="py-3 px-4 font-mono">Land Transport</td>
                <td className="py-3 px-4 font-mono">Transport and logistics services</td>
            </tr>
            </tbody>
        </table>
        </div>









            </div>
          </div>

          {/* RIGHT COLUMN: Location */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-white mb-4">
              Location
            </h3>
            <div className={`${INTERMEDIATE_BLUE} p-8 rounded-md space-y-8`}>
              
              {/* Google Maps Embed */}
              <div className="bg-[#374051] p-4 rounded-lg border border-gray-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1738661334412!6m8!1m7!1sWM5eRMYL4I9akILrMVKM_A!2m2!1d25.29039984610416!2d55.40128016125894!3f17.713859171695375!4f-9.330808807152607!5f0.4000000000000002"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  width="100%"
                  height="450"
                  title="Google Maps View"
                />
              </div>

              {/* Mapbox 3D Buildings */}
              <div
                className="bg-[#374051] p-4 rounded-lg border border-gray-600"
                style={{ height: '450px' }}
              >
                {/* Mapbox container */}
                <div
                  ref={mapContainerRef}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyInvestigation;


















