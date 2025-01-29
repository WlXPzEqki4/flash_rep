// import React, { useState, useEffect } from 'react';

// const HeatmapCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const heatmaps = [
//     {
//       title: "S&P 500 Closing Bell Heatmap (Jan 27, 2025)",
//       image: "/public/images/S&P_Closing_27012025.jpg"
//     },
//     {
//       title: "S&P 500 Opening Bell Heatmap (Jan 27, 2025)",
//       image: "/public/images/S&P_Opening_27012025.png"
//     }
//   ];

//   // Auto-rotate every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((current) => (current === 0 ? 1 : 0));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Handle manual navigation
//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl h-full">
//       <div className="relative h-[300px]">
//         {/* Title */}
//         <h2 className="text-xl font-bold mb-4">{heatmaps[currentIndex].title}</h2>
        
//         {/* Images */}
//         <div className="relative h-[240px] overflow-hidden rounded">
//           {heatmaps.map((heatmap, index) => (
//             <div
//               key={index}
//               className={`absolute w-full h-full transition-opacity duration-500 ${
//                 index === currentIndex ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <img
//                 src={heatmap.image}
//                 alt={heatmap.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Navigation dots */}
//         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {heatmaps.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-2 h-2 rounded-full transition-colors duration-200 ${
//                 index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeatmapCarousel;
















// import React, { useState, useEffect } from 'react';

// const HeatmapCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const heatmaps = [
//     {
//       title: "S&P 500 Closing Bell Heatmap (Jan 27, 2025)",
//       image: "/public/images/S&P_Closing_27012025.jpg"
//     },
//     {
//       title: "S&P 500 Opening Bell Heatmap (Jan 27, 2025)",
//       image: "/public/images/S&P_Opening_27012025.png"
//     }
//   ];

//   // Auto-rotate every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((current) => (current === 0 ? 1 : 0));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Handle manual navigation
//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl h-full">
//       <div className="relative h-[300px]">
//         {/* Title */}
//         <h2 className="text-xl font-bold mb-4">{heatmaps[currentIndex].title}</h2>
        
//         {/* Images */}
//         <div className="relative h-[240px] overflow-hidden rounded">
//           {heatmaps.map((heatmap, index) => (
//             <div
//               key={index}
//               className={`absolute w-full h-full transition-opacity duration-500 ${
//                 index === currentIndex ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <img
//                 src={heatmap.image}
//                 alt={heatmap.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Navigation dots */}
//         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {heatmaps.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-2 h-2 rounded-full transition-colors duration-200 ${
//                 index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeatmapCarousel;



















import React, { useState, useEffect } from 'react';

const HeatmapCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const heatmaps = [
    {
      title: "S&P 500 Closing Bell Heatmap (Jan 27, 2025)",
      image: "/public/images/S&P_Closing_27012025.jpg"
    },
    {
      title: "S&P 500 Opening Bell Heatmap (Jan 27, 2025)",
      image: "/public/images/S&P_Opening_27012025.png"
    }
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl h-full flex flex-col">
      <div className="flex-1 flex flex-col min-h-0">
        {/* Title */}
        <h2 className="text-xl font-bold mb-4">{heatmaps[currentIndex].title}</h2>
        
        {/* Images */}
        <div className="relative flex-1 overflow-hidden rounded">
          {heatmaps.map((heatmap, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={heatmap.image}
                alt={heatmap.title}
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heatmaps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeatmapCarousel;