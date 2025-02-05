// // src/components/Layout.jsx
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// import Sidebar from './Sidebar';
// import OpeningSequence from './sections/OpeningSequence';
// import Background from './sections/Background';

// // import TargetIntroduction from './sections/TargetIntroduction';
// import SectionMinus1 from './sections/SectionMinus1';
// import Section0 from './sections/Section0';

// // import Section1 from './sections/Section1';
// // import Section2 from './sections/Section2';
// // import Section3 from './sections/Section3';
// // import Section4 from './sections/Section4';
// // import Section5 from './sections/Section5';
// // import Section6 from './sections/Section6';
// // import Section7 from './sections/Section7';

// function Layout() {
//   const [activeSection, setActiveSection] = useState('section1');
//   const [isExpanded, setIsExpanded] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const sections = [
//     { id: 'OpeningSequence', component: OpeningSequence },
//     { id: 'Background', component: Background },

//     // { id: 'TargetIntroduction', component: TargetIntroduction },
//     { id: 'section-1', component: SectionMinus1 },
//     { id: 'section0', component: Section0 },
//     // { id: 'section1', component: Section1 },
//     // { id: 'section2', component: Section2 },
//     // { id: 'section3', component: Section3 },
//     // { id: 'section4', component: Section4 },
//     // { id: 'section5', component: Section5 },
//     // { id: 'section5-earnings', component: () => <Section5 subSection="earnings" /> },
//     // { id: 'section5-refunds', component: () => <Section5 subSection="refunds" /> },
//     // { id: 'section5-declines', component: () => <Section5 subSection="declines" /> },
//     // { id: 'section5-payouts', component: () => <Section5 subSection="payouts" /> },
//     // { id: 'section6', component: Section6 },
//     // { id: 'section7', component: Section7 }
//   ];

//   useEffect(() => {
//     const sectionId = location.hash.slice(1) || 'section1';
//     setActiveSection(sectionId);
//   }, [location]);

//   const handleScroll = () => {
//     const sectionElements = sections.map(section => ({
//       id: section.id,
//       element: document.getElementById(section.id)
//     }));

//     const mostVisible = sectionElements.reduce((acc, section) => {
//       const rect = section.element?.getBoundingClientRect();
//       if (!rect) return acc;

//       const visibleHeight = Math.min(rect.bottom, window.innerHeight) -
//                           Math.max(rect.top, 0);

//       return visibleHeight > acc.visibleHeight
//         ? { id: section.id, visibleHeight }
//         : acc;
//     }, { id: activeSection, visibleHeight: 0 });

//     if (mostVisible.id !== activeSection) {
//       setActiveSection(mostVisible.id);
//       navigate(`#${mostVisible.id}`, { replace: true });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [activeSection]);

//   const handleSectionClick = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar
//         activeSection={activeSection}
//         onSectionClick={handleSectionClick}
//         isExpanded={isExpanded}
//         onExpandedChange={setIsExpanded}
//       />
//       <main className={`
//         flex-1 transition-all duration-300 ease-in-out
//         ${isExpanded ? 'ml-64' : 'ml-16'}
//       `}>
//         {sections.map(({ id, component: Component }) => (
//           <section
//             key={id}
//             id={id}
//             className="min-h-screen p-8"
//           >
//             <Component />
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

// export default Layout;







// src/components/Layout.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar';
import OpeningSequence from './sections/OpeningSequence';
import Background from './sections/Background';
import ObservationsBox from './sections/ObservationsBox';


import CompanyInvestigation from './sections/CompanyInvestigation';
import CompanyInvestigation2 from './sections/CompanyInvestigation2';

import AnimatedNetworkAnalysis from './sections/AnimatedNetworkAnalysis';

import InteractiveNetwork from './sections/InteractiveNetwork';
import BlankPlaceholder from './sections/BlankPlaceholder';
import BlankThreeSectionLayout from './sections/BlankThreeSectionLayout';
import BlankFourSectionLayout from './sections/BlankFourSectionLayout';




import SectionMinus1 from './sections/SectionMinus1';
import Section0 from './sections/Section0';



function Layout() {
  const [activeSection, setActiveSection] = useState('section1');
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const sections = [
    { id: 'OpeningSequence', component: OpeningSequence },
    { id: 'Background', component: Background },

    // { id: 'ObservationsBox', component: ObservationsBox },
    // { id: 'AnimatedNetworkAnalysis', component: AnimatedNetworkAnalysis },

    { id: 'InteractiveNetwork', component: InteractiveNetwork },


    // { id: 'BlankPlaceholder', component: BlankPlaceholder },
    // { id: 'BlankThreeSectionLayout', component: BlankThreeSectionLayout },
    { id: 'BlankFourSectionLayout', component: BlankFourSectionLayout },


    { id: 'CompanyInvestigation', component: CompanyInvestigation },
    { id: 'CompanyInvestigation2', component: CompanyInvestigation2 }

    // { id: 'section-1', component: SectionMinus1 },
    // { id: 'section0', component: Section0 }
  ];

  useEffect(() => {
    const sectionId = location.hash.slice(1) || 'section1';
    setActiveSection(sectionId);
  }, [location]);


  const handleScroll = () => {
    const sectionElements = sections.map(section => ({
      id: section.id,
      element: document.getElementById(section.id)
    }));

    const mostVisible = sectionElements.reduce((acc, section) => {pwd
      const rect = section.element?.getBoundingClientRect();
      if (!rect) return acc;
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      return visibleHeight > acc.visibleHeight
        ? { id: section.id, visibleHeight }
        : acc;
    }, { id: activeSection, visibleHeight: 0 });

    if (mostVisible.id !== activeSection) {
      setActiveSection(mostVisible.id);
      navigate(`#${mostVisible.id}`, { replace: true });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleSectionClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen bg-gray-900"> 
      {/* Changed bg-gray-50 to bg-gray-900 to match your dark-blue look */}
      <Sidebar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        isExpanded={isExpanded}
        onExpandedChange={setIsExpanded}
      />

      <main
        className={`
          flex-1 transition-all duration-300 ease-in-out
          ${isExpanded ? 'ml-64' : 'ml-16'}
          p-8
        `}
      >
        {sections.map(({ id, component: Component }) => (
          <section key={id} id={id} className="mb-8">
            <Component />
          </section>
        ))}
      </main>


    </div>
  );
}

export default Layout;
























