// // src/components/sections/TimelineComponent.jsx
// import React, { useState, useEffect } from 'react';
// import { Calendar, ArrowRight } from 'lucide-react';

// function TimelineComponent() {
//   const [activeEvent, setActiveEvent] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   const timelineEvents = [
//     {
//       date: "January 20, 2025",
//       title: "Announcement of DeepSeek-R1 Model",
//       description: "DeepSeek announces the release of its advanced AI model, rivaling ChatGPT in performance while developed at significantly lower cost."
//     },
//     {
//       date: "January 22, 2025",
//       title: "Open Code Release",
//       description: "DeepSeek publishes source code and technical documentation for DeepSeek-R1, promoting transparency in AI development."
//     },
//     {
//       date: "January 24, 2025",
//       title: "App Store Success & Market Impact",
//       description: "DeepSeek-R1 becomes #1 free app on US App Store. Major tech companies' shares decline, with Nvidia dropping 18%."
//     },
//     {
//       date: "January 25, 2025",
//       title: "Silicon Valley Response",
//       description: "AI developers express admiration for DeepSeek's capabilities. Discussions intensify about global AI race implications."
//     },
//     {
//       date: "January 27, 2025",
//       title: "Economic Analysis",
//       description: "Economists predict pressure on US AI companies to innovate or reduce costs. Calls increase for accelerated AI investment."
//     },
//     {
//       date: "January 28, 2025",
//       title: "Ongoing Impacts",
//       description: "DeepSeek's success sparks discussions about international AI collaboration and technology regulation."
//     }
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     const timer = setInterval(() => {
//       setActiveEvent((prev) => (prev + 1) % timelineEvents.length);
//     }, 5000); // Advance every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="mt-16 max-w-6xl mx-auto">
//       <div className={`
//         transform transition-all duration-1000
//         ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
//       `}>
//         <h2 className="text-2xl font-bold text-gray-900 mb-8">
//           Development Timeline
//         </h2>

//         {/* Timeline Progress Bar */}
//         <div className="relative h-2 bg-gray-200 rounded-full mb-8">
//           <div 
//             className="absolute h-full bg-blue-500 rounded-full transition-all duration-500"
//             style={{ 
//               width: `${((activeEvent + 1) / timelineEvents.length) * 100}%`
//             }}
//           />
//         </div>

//         {/* Timeline Events */}
//         <div className="relative">
//           {timelineEvents.map((event, index) => (
//             <div
//               key={index}
//               className={`
//                 absolute w-full transform transition-all duration-500
//                 ${index === activeEvent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
//               `}
//               style={{ 
//                 display: index === activeEvent ? 'block' : 'none'
//               }}
//             >
//               <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//                 <div className="flex items-center text-blue-500 mb-2">
//                   <Calendar size={20} className="mr-2" />
//                   <span className="font-semibold">{event.date}</span>
//                 </div>
                
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {event.title}
//                 </h3>
                
//                 <p className="text-gray-600">
//                   {event.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Dots */}
//         <div className="flex justify-center space-x-2 mt-6">
//           {timelineEvents.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveEvent(index)}
//               className={`
//                 w-2 h-2 rounded-full transition-all duration-300
//                 ${activeEvent === index ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}
//               `}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TimelineComponent;







// // src/components/sections/TimelineComponent.jsx
// import React, { useState, useEffect, useCallback } from 'react';

// function TimelineComponent() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isComplete, setIsComplete] = useState(false);

//   const timelineEvents = [
//     {
//       date: "January 20, 2025",
//       title: "Announcement of DeepSeek-R1 Model",
//       description: "DeepSeek announces the release of its advanced AI model, rivaling ChatGPT in performance while developed at significantly lower cost."
//     },
//     {
//       date: "January 22, 2025",
//       title: "Open Code Release",
//       description: "DeepSeek publishes source code and technical documentation for DeepSeek-R1, promoting transparency in AI development."
//     },
//     {
//       date: "January 24, 2025",
//       title: "App Store Success & Market Impact",
//       description: "DeepSeek-R1 becomes #1 free app on US App Store. Major tech companies' shares decline, with Nvidia dropping 18%."
//     },
//     {
//       date: "January 25, 2025",
//       title: "Silicon Valley Response",
//       description: "AI developers express admiration for DeepSeek's capabilities. Discussions intensify about global AI race implications."
//     },
//     {
//       date: "January 27, 2025",
//       title: "Economic Analysis",
//       description: "Economists predict pressure on US AI companies to innovate or reduce costs. Calls increase for accelerated AI investment."
//     },
//     {
//       date: "January 28, 2025",
//       title: "Ongoing Impacts",
//       description: "DeepSeek's success sparks discussions about international AI collaboration and technology regulation."
//     }
//   ];

//   const advanceTimeline = useCallback(() => {
//     if (currentIndex < timelineEvents.length - 1) {
//       setCurrentIndex(prev => prev + 1);
//     } else {
//       setIsComplete(true);
//     }
//   }, [currentIndex, timelineEvents.length]);

//   useEffect(() => {
//     if (!isComplete) {
//       const timer = setTimeout(advanceTimeline, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [currentIndex, isComplete, advanceTimeline]);

//   const visibleEvents = timelineEvents.slice(0, currentIndex + 1);
//   const progress = ((currentIndex + 1) / timelineEvents.length) * 100;

//   return (
//     <div className="mt-16 max-w-6xl mx-auto pb-8">
//       <h2 className="text-2xl font-bold mb-8">Development Timeline</h2>

//       <div className="relative h-1 bg-gray-200 rounded-full mb-12">
//         <div 
//           className="absolute h-full bg-blue-500 rounded-full transition-all duration-500 ease-in-out"
//           style={{ width: `${progress}%` }}
//         />
//       </div>

//       <div className="space-y-4">
//         {visibleEvents.map((event, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-sm p-6 opacity-0 animate-slideIn"
//             style={{
//               animationDelay: `${index * 100}ms`,
//               animationFillMode: 'forwards'
//             }}
//           >
//             <span className="text-sm text-blue-500">
//               {event.date}
//             </span>
//             <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
//               {event.title}
//             </h3>
//             <p className="text-gray-600 text-sm">
//               {event.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TimelineComponent;









// src/components/sections/TimelineComponent.jsx
import React, { useState, useEffect, useCallback } from 'react';

function TimelineComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const timelineEvents = [
    {
      date: "January 20, 2025",
      title: "Announcement of DeepSeek-R1 Model",
      description: "DeepSeek announces the release of its advanced AI model, rivaling ChatGPT in performance while developed at significantly lower cost."
    },
    {
      date: "January 22, 2025",
      title: "Open Code Release",
      description: "DeepSeek publishes source code and technical documentation for DeepSeek-R1, promoting transparency in AI development."
    },
    {
      date: "January 24, 2025",
      title: "App Store Success & Market Impact",
      description: "DeepSeek-R1 becomes #1 free app on US App Store. Major tech companies' shares decline, with Nvidia dropping 18%."
    },
    {
      date: "January 25, 2025",
      title: "Silicon Valley Response",
      description: "AI developers express admiration for DeepSeek's capabilities. Discussions intensify about global AI race implications."
    },
    {
      date: "January 27, 2025",
      title: "Economic Analysis",
      description: "Economists predict pressure on US AI companies to innovate or reduce costs. Calls increase for accelerated AI investment."
    },
    {
      date: "January 28, 2025",
      title: "Ongoing Impacts",
      description: "DeepSeek's success sparks discussions about international AI collaboration and technology regulation."
    }
  ];

  const advanceTimeline = useCallback(() => {
    if (currentIndex < timelineEvents.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, timelineEvents.length]);

  useEffect(() => {
    if (!isComplete) {
      const timer = setTimeout(advanceTimeline, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isComplete, advanceTimeline]);

  const visibleEvents = timelineEvents.slice(0, currentIndex + 1);
  const progress = ((currentIndex + 1) / timelineEvents.length) * 100;

  return (
    // <div className="mt-16 w-full lg:w-1/2 pb-8">
            <div className="w-full">

      {/* <h2 className="text-2xl font-bold mb-8">Development Timeline</h2> */}

      {/* <div className="relative h-1 bg-gray-200 rounded-full mb-12"> */}
      <div className="relative h-1 bg-gray-200 rounded-full mb-12">

        <div 
          className="absolute h-full bg-blue-500 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-4 pr-4">
        {visibleEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 opacity-0 animate-slideIn"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'forwards'
            }}
          >
            <span className="text-sm text-blue-500">
              {event.date}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineComponent;




