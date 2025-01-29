// import React from 'react';

// function Section2() {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">Section 2</h1>
//       <p className="text-gray-700">This is section 2 of your application.</p>
//       <div className="mt-4 p-4 bg-gray-100 rounded">
//         <p>Add your content here...</p>
//       </div>
//     </div>
//   );
// }

// export default Section2;











// import React from 'react';

// function Section2() {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">Section 2</h1>
//       <p className="text-gray-700">This is section 2 content.</p>
//       <div className="mt-4 p-4 bg-gray-100 rounded">
//         <p>Add your content here...</p>
//       </div>
//     </div>
//   );
// }

// export default Section2;










// import React from 'react';

// function Section2() {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">Audience</h1>
//       <p className="text-gray-700">Audience analytics and insights</p>
//     </div>
//   );
// }

// export default Section2;














// // src/components/sections/Section1.jsx
// import React, { useEffect, useState } from 'react';

// function Section2() {
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({
//               ...prev,
//               [entry.target.id]: true
//             }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('.animate-on-scroll').forEach(
//       el => observer.observe(el)
//     );

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header Section - Full Width */}
//       <div className="p-4 bg-white rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">Audience</h1>
//       <p className="text-gray-700">Audience analytics and insights</p>
//     </div>

//       {/* Two Cards Side by Side */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-lg font-semibold mb-2">Card 1 (1x2 Grid - Left)</h2>
//           <p className="text-gray-600">
//             This card is part of a 1x2 grid layout. On mobile, it stacks vertically.
//             The height adjusts automatically with content.
//           </p>
//         </div>
//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-lg font-semibold mb-2">Card 2 (1x2 Grid - Right)</h2>
//           <p className="text-gray-600">
//             This card demonstrates equal height with its neighbor.
//             Both cards in this row maintain the same height.
//           </p>
//         </div>
//       </div>

//       {/* Timeline Sections with Different Styles */}
//       <div className="bg-white rounded-lg shadow p-8">
//         <h2 className="text-xl font-bold mb-6">Project Progress</h2>
//         <div className="space-y-8">
//           {/* Style 1: Simple Line with Dots */}
//           <div className="relative pl-8 border-l-2 border-blue-200">
//             <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-blue-500" />
//             <h3 className="font-semibold">Planning Phase</h3>
//             <p className="text-gray-600">Initial project planning and scope definition</p>
//           </div>
          
//           {/* Style 2: Connected Timeline with Check Marks */}
//           <div className="relative pl-8 border-l-2 border-green-200">
//             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-green-500 flex items-center justify-center">
//               <div className="w-2 h-2 rounded-full bg-green-500" />
//             </div>
//             <h3 className="font-semibold">Development</h3>
//             <p className="text-gray-600">Core functionality implementation</p>
//           </div>

//           {/* Style 3: Numbered Timeline */}
//           <div className="relative pl-8 border-l-2 border-purple-200">
//             <div className="absolute -left-[14px] top-0 w-7 h-7 rounded-full bg-purple-100 border-2 border-purple-400 flex items-center justify-center text-sm font-semibold text-purple-600">
//               3
//             </div>
//             <h3 className="font-semibold">Testing</h3>
//             <p className="text-gray-600">Quality assurance and bug fixes</p>
//           </div>

//           {/* Style 4: Icon Timeline */}
//           <div className="relative pl-8 border-l-2 border-orange-200">
//             <div className="absolute -left-[12px] top-0 w-6 h-6 rounded-full bg-orange-100 border-2 border-orange-400 flex items-center justify-center">
//               ★
//             </div>
//             <h3 className="font-semibold">Launch</h3>
//             <p className="text-gray-600">Product deployment and release</p>
//           </div>
//         </div>
//       </div>

//       {/* Animated Cards Section */}
//       <div className="space-y-8">
//         <h2 className="text-xl font-bold">Animated Content</h2>
        
//         {/* Left Slide-in Card */}
//         <div 
//           id="slide-left" 
//           className={`
//             animate-on-scroll bg-white rounded-lg shadow p-6 transform transition-all duration-1000
//             ${isVisible['slide-left'] ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
//           `}
//         >
//           <h3 className="text-lg font-semibold mb-2">Slides in from Left</h3>
//           <p className="text-gray-600">This card animates in from the left side of the screen.</p>
//         </div>

//         {/* Right Slide-in Card */}
//         <div 
//           id="slide-right" 
//           className={`
//             animate-on-scroll bg-white rounded-lg shadow p-6 transform transition-all duration-1000
//             ${isVisible['slide-right'] ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
//           `}
//         >
//           <h3 className="text-lg font-semibold mb-2">Slides in from Right</h3>
//           <p className="text-gray-600">This card animates in from the right side of the screen.</p>
//         </div>

//         {/* Staggered Fade-in Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[1, 2, 3].map((i) => (
//             <div
//               key={i}
//               id={`fade-${i}`}
//               className={`
//                 animate-on-scroll bg-white rounded-lg shadow p-6
//                 transform transition-all duration-1000
//                 ${isVisible[`fade-${i}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
//               `}
//               style={{ transitionDelay: `${i * 200}ms` }}
//             >
//               <h3 className="text-lg font-semibold mb-2">Fade In Card {i}</h3>
//               <p className="text-gray-600">This card fades in with a slight upward motion.</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Progress Dots */}
//       <div className="bg-white rounded-lg shadow p-8">
//         <h2 className="text-xl font-bold mb-6">Progress Steps</h2>
//         <div className="relative flex justify-between max-w-2xl mx-auto">
//           {['Start', 'Planning', 'Development', 'Testing', 'Launch'].map((step, i) => (
//             <div key={i} className="flex flex-col items-center relative">
//               <div className={`
//                 w-4 h-4 rounded-full 
//                 ${i < 2 ? 'bg-blue-500' : i === 2 ? 'bg-blue-500 animate-pulse' : 'bg-gray-200'}
//               `} />
//               <div className={`
//                 mt-2 text-sm font-medium
//                 ${i <= 2 ? 'text-blue-500' : 'text-gray-400'}
//               `}>
//                 {step}
//               </div>
//             </div>
//           ))}
//           {/* Connection lines */}
//           <div className="absolute top-2 left-0 right-0 h-[1px] bg-gray-200 -z-10">
//             <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '40%' }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section2;












// src/components/sections/Section2.jsx
import React, { useEffect, useState } from 'react';

function Section2() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.9 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(
      el => observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-4 space-y-8">
      {/* Header Section - Full Width */}
      <div className="p-4 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Audience</h1>
        <p className="text-gray-700">Audience analytics and insights</p>
      </div>

      {/* Two Cards Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 1 (1x2 Grid - Left)</h2>
          <p className="text-gray-600">
            This card is part of a 1x2 grid layout. On mobile, it stacks vertically.
            The height adjusts automatically with content.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 2 (1x2 Grid - Right)</h2>
          <p className="text-gray-600">
            This card demonstrates equal height with its neighbor.
            Both cards in this row maintain the same height.
          </p>
        </div>
      </div>

      {/* Timeline Sections with Different Styles */}
      <div className="bg-white rounded-lg shadow p-8">
        <h2 className="text-xl font-bold mb-6">Project Progress</h2>
        <div className="space-y-8">
          {/* Style 1: Simple Line with Dots */}
          <div className="relative pl-8 border-l-2 border-blue-200">
            <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-blue-500" />
            <h3 className="font-semibold">Planning Phase</h3>
            <p className="text-gray-600">Initial project planning and scope definition</p>
          </div>
          
          {/* Style 2: Connected Timeline with Check Marks */}
          <div className="relative pl-8 border-l-2 border-green-200">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-green-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <h3 className="font-semibold">Development</h3>
            <p className="text-gray-600">Core functionality implementation</p>
          </div>

          {/* Style 3: Numbered Timeline */}
          <div className="relative pl-8 border-l-2 border-purple-200">
            <div className="absolute -left-[14px] top-0 w-7 h-7 rounded-full bg-purple-100 border-2 border-purple-400 flex items-center justify-center text-sm font-semibold text-purple-600">
              3
            </div>
            <h3 className="font-semibold">Testing</h3>
            <p className="text-gray-600">Quality assurance and bug fixes</p>
          </div>

          {/* Style 4: Icon Timeline */}
          <div className="relative pl-8 border-l-2 border-orange-200">
            <div className="absolute -left-[12px] top-0 w-6 h-6 rounded-full bg-orange-100 border-2 border-orange-400 flex items-center justify-center">
              ★
            </div>
            <h3 className="font-semibold">Launch</h3>
            <p className="text-gray-600">Product deployment and release</p>
          </div>
        </div>
      </div>

      {/* Animated Cards Section */}
      <div className="space-y-8">
        <h2 className="text-xl font-bold">Animated Content</h2>

        {/* Multi-Column Slide-in Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Left side card */}
          <div 
            id="slide-left-auto" 
            className={`
              animate-on-scroll bg-white rounded-lg shadow p-6 transform transition-all duration-1000
              ${isVisible['slide-left-auto'] ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
            `}
          >
            <h3 className="text-lg font-semibold mb-2">Auto Slide Left</h3>
            <p className="text-gray-600">Sliding in from the left side.</p>
          </div>

          {/* Center card */}
          <div 
            id="slide-center" 
            className={`
              animate-on-scroll bg-white rounded-lg shadow p-6 transform transition-all duration-1000
              ${isVisible['slide-center'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}
          >
            <h3 className="text-lg font-semibold mb-2">Drop In Center</h3>
            <p className="text-gray-600">Dropping in from above.</p>
          </div>

          {/* Right side card */}
          <div 
            id="slide-right-auto" 
            className={`
              animate-on-scroll bg-white rounded-lg shadow p-6 transform transition-all duration-1000
              ${isVisible['slide-right-auto'] ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            `}
          >
            <h3 className="text-lg font-semibold mb-2">Auto Slide Right</h3>
            <p className="text-gray-600">Sliding in from the right side.</p>
          </div>
        </div>
        
        {/* Left Slide-in Card */}
        <div 
          id="slide-left" 
          className={`
            animate-on-scroll bg-white rounded-lg shadow p-6 transform transition-all duration-1000
            ${isVisible['slide-left'] ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          `}
        >
          <h3 className="text-lg font-semibold mb-2">Slides in from Left</h3>
          <p className="text-gray-600">This card animates in from the left side of the screen.</p>
        </div>

        {/* Right Slide-in Card */}
        <div 
          id="slide-right" 
          className={`
            animate-on-scroll bg-white rounded-lg shadow p-6 transform transition-all duration-1000
            ${isVisible['slide-right'] ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}
        >
          <h3 className="text-lg font-semibold mb-2">Slides in from Right</h3>
          <p className="text-gray-600">This card animates in from the right side of the screen.</p>
        </div>

        {/* Staggered Fade-in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              id={`fade-${i}`}
              className={`
                animate-on-scroll bg-white rounded-lg shadow p-6
                transform transition-all duration-1000
                ${isVisible[`fade-${i}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <h3 className="text-lg font-semibold mb-2">Fade In Card {i}</h3>
              <p className="text-gray-600">This card fades in with a slight upward motion.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="bg-white rounded-lg shadow p-8">
        <h2 className="text-xl font-bold mb-6">Progress Steps</h2>
        <div className="relative flex justify-between max-w-2xl mx-auto">
          {['Start', 'Planning', 'Development', 'Testing', 'Launch'].map((step, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <div className={`
                w-4 h-4 rounded-full 
                ${i < 2 ? 'bg-blue-500' : i === 2 ? 'bg-blue-500 animate-pulse' : 'bg-gray-200'}
              `} />
              <div className={`
                mt-2 text-sm font-medium
                ${i <= 2 ? 'text-blue-500' : 'text-gray-400'}
              `}>
                {step}
              </div>
            </div>
          ))}
          {/* Connection lines */}
          <div className="absolute top-2 left-0 right-0 h-[1px] bg-gray-200 -z-10">
            <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '40%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;