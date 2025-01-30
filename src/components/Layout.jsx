// import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar';
// import { useLocation, useNavigate } from 'react-router-dom';

// function Layout({ sections }) {
//   const [activeSection, setActiveSection] = useState(sections[0].id);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const sectionId = location.hash.slice(1) || sections[0].id;
//     setActiveSection(sectionId);
//   }, [location, sections]);

//   const handleScroll = () => {
//     const sectionElements = sections.map(section => ({
//       id: section.id,
//       element: document.getElementById(section.id)
//     }));

//     const mostVisible = sectionElements.reduce((acc, section) => {
//       const rect = section.element?.getBoundingClientRect();
//       if (!rect) return acc;
      
//       const visibleHeight = Math.min(rect.bottom, window.innerHeight) - 
//                            Math.max(rect.top, 0);
      
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

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar 
//         sections={sections} 
//         activeSection={activeSection}
//         onSectionClick={(id) => {
//           document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//         }}
//       />
//       <main className="flex-1 overflow-auto pl-64">
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









// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import { useLocation, useNavigate } from 'react-router-dom';

// function Layout() {
//   const [activeSection, setActiveSection] = useState('dashboard');
//   const location = useLocation();
//   const navigate = useNavigate();

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar 
//         activeSection={activeSection}
//         onSectionClick={setActiveSection}
//       />
//       <main className={`flex-1 transition-all duration-300 ease-in-out ml-16`}>
//         <div className="p-8">
//           <h1 className="text-2xl font-bold mb-4">
//             Content for {activeSection}
//           </h1>
//           <p className="text-gray-600">
//             This is the main content area for {activeSection}
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Layout;






// import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Section1 from './sections/Section1';
// import Section2 from './sections/Section2';
// import Section3 from './sections/Section3';

// function Layout() {
//   const [activeSection, setActiveSection] = useState('section1');
//   const location = useLocation();
//   const navigate = useNavigate();

//   const sections = [
//     { id: 'section1', component: Section1, title: 'Section 1' },
//     { id: 'section2', component: Section2, title: 'Section 2' },
//     { id: 'section3', component: Section3, title: 'Section 3' }
//   ];

//   useEffect(() => {
//     // Handle initial load and navigation
//     const sectionId = location.hash.slice(1) || sections[0].id;
//     setActiveSection(sectionId);
//   }, [location]);

//   const handleScroll = () => {
//     // Find which section is most visible in the viewport
//     const sectionElements = sections.map(section => ({
//       id: section.id,
//       element: document.getElementById(section.id)
//     }));

//     const mostVisible = sectionElements.reduce((acc, section) => {
//       const rect = section.element?.getBoundingClientRect();
//       if (!rect) return acc;
      
//       const visibleHeight = Math.min(rect.bottom, window.innerHeight) - 
//                            Math.max(rect.top, 0);
      
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

// iveSection={activeSection}
//         onSectionClick={handleSectionClick}
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








// // src/components/Layout.jsx
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';

// function Layout() {
//   const [activeSection, setActiveSection] = useState('dashboard');
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Navigation sections configuration
//   const sections = [
//     {
//       id: 'section1',
//       content: (
//         <div className="p-4 bg-white rounded-lg shadow">
//           <h1 className="text-2xl font-bold mb-4">Section 1</h1>
//           <p className="text-gray-700">This is section 1 content.</p>
//           <div className="mt-4 p-4 bg-gray-100 rounded">
//             <p>Add your content here...</p>
//           </div>
//         </div>
//       )
//     },
//     {
//       id: 'section2',
//       content: (
//         <div className="p-4 bg-white rounded-lg shadow">
//           <h1 className="text-2xl font-bold mb-4">Section 2</h1>
//           <p className="text-gray-700">This is section 2 content.</p>
//           <div className="mt-4 p-4 bg-gray-100 rounded">
//             <p>Add your content here...</p>
//           </div>
//         </div>
//       )
//     },
//     {
//       id: 'section3',
//       content: (
//         <div className="p-4 bg-white rounded-lg shadow">
//           <h1 className="text-2xl font-bold mb-4">Section 3</h1>
//           <p className="text-gray-700">This is section 3 content.</p>
//           <div className="mt-4 p-4 bg-gray-100 rounded">
//             <p>Add your content here...</p>
//           </div>
//         </div>
//       )
//     }
//   ];

//   useEffect(() => {
//     // Handle initial load and navigation
//     const sectionId = location.hash.slice(1) || sections[0].id;
//     setActiveSection(sectionId);
//   }, [location, sections]);

//   const handleScroll = () => {
//     // Find which section is most visible in the viewport
//     const sectionElements = sections.map(section => ({
//       id: section.id,
//       element: document.getElementById(section.id)
//     }));

//     const mostVisible = sectionElements.reduce((acc, section) => {
//       const rect = section.element?.getBoundingClientRect();
//       if (!rect) return acc;
      
//       const visibleHeight = Math.min(rect.bottom, window.innerHeight) - 
//                            Math.max(rect.top, 0);
      
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
//       />
//       <main className="flex-1 ml-16 transition-all duration-300 ease-in-out">
//         {sections.map(({ id, content }) => (
//           <section
//             key={id}
//             id={id}
//             className="min-h-screen p-8"
//           >
//             {content}
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

// export default Layout;




// // src/components/Layout.jsx
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Section1 from './sections/Section1';
// import Section2 from './sections/Section2';
// import Section3 from './sections/Section3';
// import Section4 from './sections/Section4';
// import Section5 from './sections/Section5';
// import Section6 from './sections/Section6';
// import Section7 from './sections/Section7';

// function Layout() {
//   const [activeSection, setActiveSection] = useState('section1');
//   const location = useLocation();
//   const navigate = useNavigate();

//   const sections = [
//     { id: 'section1', component: Section1 },
//     { id: 'section2', component: Section2 },
//     { id: 'section3', component: Section3 },
//     { id: 'section4', component: Section4 },
//     { id: 'section5', component: Section5 },
//     { id: 'section5-earnings', component: () => <Section5 subSection="earnings" /> },
//     { id: 'section5-refunds', component: () => <Section5 subSection="refunds" /> },
//     { id: 'section5-declines', component: () => <Section5 subSection="declines" /> },
//     { id: 'section5-payouts', component: () => <Section5 subSection="payouts" /> },
//     { id: 'section6', component: Section6 },
//     { id: 'section7', component: Section7 }
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
//                            Math.max(rect.top, 0);
      
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
//       />
//       <main className="flex-1 ml-16 transition-all duration-300 ease-in-out">
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











// // src/components/Layout.jsx
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Section0 from './sections/Section0';
// import Section1 from './sections/Section1';
// import Section2 from './sections/Section2';
// import Section3 from './sections/Section3';
// import Section4 from './sections/Section4';
// import Section5 from './sections/Section5';
// import Section6 from './sections/Section6';
// import Section7 from './sections/Section7';

// function Layout() {
//   const [activeSection, setActiveSection] = useState('section1');
//   const [isExpanded, setIsExpanded] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const sections = [
//     { id: 'section0', component: Section0 }, 
//     { id: 'section1', component: Section1 },
//     { id: 'section2', component: Section2 },
//     { id: 'section3', component: Section3 },
//     { id: 'section4', component: Section4 },
//     { id: 'section5', component: Section5 },
//     { id: 'section5-earnings', component: () => <Section5 subSection="earnings" /> },
//     { id: 'section5-refunds', component: () => <Section5 subSection="refunds" /> },
//     { id: 'section5-declines', component: () => <Section5 subSection="declines" /> },
//     { id: 'section5-payouts', component: () => <Section5 subSection="payouts" /> },
//     { id: 'section6', component: Section6 },
//     { id: 'section7', component: Section7 }
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
//                            Math.max(rect.top, 0);
      
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
import SectionMinus1 from './sections/SectionMinus1';
import Section0 from './sections/Section0';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';
import Section7 from './sections/Section7';

function Layout() {
  const [activeSection, setActiveSection] = useState('section1');
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const sections = [
    { id: 'section-1', component: SectionMinus1 },
    { id: 'section0', component: Section0 },
    // { id: 'section1', component: Section1 },
    // { id: 'section2', component: Section2 },
    // { id: 'section3', component: Section3 },
    // { id: 'section4', component: Section4 },
    // { id: 'section5', component: Section5 },
    // { id: 'section5-earnings', component: () => <Section5 subSection="earnings" /> },
    // { id: 'section5-refunds', component: () => <Section5 subSection="refunds" /> },
    // { id: 'section5-declines', component: () => <Section5 subSection="declines" /> },
    // { id: 'section5-payouts', component: () => <Section5 subSection="payouts" /> },
    // { id: 'section6', component: Section6 },
    // { id: 'section7', component: Section7 }
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

    const mostVisible = sectionElements.reduce((acc, section) => {
      const rect = section.element?.getBoundingClientRect();
      if (!rect) return acc;

      const visibleHeight = Math.min(rect.bottom, window.innerHeight) -
                          Math.max(rect.top, 0);

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
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        isExpanded={isExpanded}
        onExpandedChange={setIsExpanded}
      />
      <main className={`
        flex-1 transition-all duration-300 ease-in-out
        ${isExpanded ? 'ml-64' : 'ml-16'}
      `}>
        {sections.map(({ id, component: Component }) => (
          <section
            key={id}
            id={id}
            className="min-h-screen p-8"
          >
            <Component />
          </section>
        ))}
      </main>
    </div>
  );
}

export default Layout;



