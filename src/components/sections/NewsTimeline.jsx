


import React, { useState, useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

const NewsTimeline = ({ showPlaceholder2 }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  // Sample news data - you can replace this with your actual data
  const newsItems = [
    {
      date: "August 19, 2024",
      title: "UAE Announces Extradition Possibility",
      source: "Ultima Hora",
      summary: "United Arab Emirates announces that Diego Benitez can be extradited to Paraguay"
    },
    {
      date: "February 04, 2024",
      title: "Colombia Connection Investigation",
      source: "Ultima Hora",
      summary: "Alleged drug trafficker linked to businessman Diego Benitez arrested in Colombia"
    },
    {
      date: "December 02, 2023",
      title: "UAE Detention Report",
      source: "Ultima Hora",
      summary: "Diego Benítez is confirmed to be in custody in the United Arab Emirates"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set visible if the main animation trigger is also true
        if (entry.isIntersecting && showPlaceholder2) {
          setIsVisible(true);
        }
      },
      {
        // Adjust threshold to determine how much of the element needs to be visible
        threshold: 0.5, // 50% of the element needs to be visible
        rootMargin: '-50px' // Triggers slightly before the element comes into view
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, [showPlaceholder2]);

  useEffect(() => {
    if (isVisible) {
      newsItems.forEach((_, index) => {
        setTimeout(() => {
          setActiveIndex(index);
        }, index * 600);
      });
    } else {
      setActiveIndex(-1);
    }
  }, [isVisible]);

  return (
    <div 
      ref={timelineRef}
      className={`bg-gray-800/50 p-6 rounded-lg transform transition-all duration-700 ease-out
        ${showPlaceholder2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
    >
      <div className="flex items-center mb-4">
        <Clock className="mr-3" size={24} />
        <h3 className="text-xl font-semibold">News Timeline</h3>
      </div>

      <div className="relative">
        {newsItems.map((item, index) => {
          const isActive = index <= activeIndex;
          const offset = index * 2;
          
          return (
            <div
              key={index}
              className="relative mb-4"
            >
              <div
                className={`transform transition-all duration-500 ease-out
                  ${isActive ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-full translate-y-8 opacity-0'}
                `}
                style={{
                  transitionDelay: `${offset * 50}ms`
                }}
              >
                <div className={`bg-gray-800/80 p-4 rounded-lg relative z-10
                  hover:bg-gray-700/80 transition-all duration-300 cursor-pointer
                  transform hover:-translate-y-1 hover:shadow-lg
                  border-l-4 ${isActive ? 'border-blue-500' : 'border-gray-600'}`}
                >
                  <div className="absolute -right-2 -top-2 bg-gray-900/90 px-3 py-1 rounded-full
                    text-xs text-gray-300 shadow-lg border border-gray-700">
                    {item.date}
                  </div>

                  <div className="mt-4">
                    <div className="text-lg font-semibold text-gray-200">{item.title}</div>
                    <div className="text-sm text-blue-400 mt-1">{item.source}</div>
                    <div className="text-sm text-gray-400 mt-2">{item.summary}</div>
                  </div>

                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
                    <div className={`w-2 h-2 rounded-full 
                      ${isActive ? 'bg-blue-500' : 'bg-gray-600'} 
                      transition-colors duration-300`} 
                    />
                  </div>
                </div>

                {index < newsItems.length - 1 && (
                  <div className={`absolute left-0 bottom-0 w-0.5 h-4
                    ${isActive ? 'bg-blue-500/30' : 'bg-gray-700'}
                    transition-colors duration-300`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsTimeline;

