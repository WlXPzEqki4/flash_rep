// import React from 'react';

// const BlankFourSectionLayout = () => {
//   return (
//     <div className="w-full px-4 py-8">
//       {/* Page Title */}
//       <h2 className="text-5xl font-bold mb-6 text-white">
//       Investigation and Analysis
//       </h2>

//       {/*
//         Top-level flex container. 
//         On larger screens (lg+), Section 1 is on the left, 
//         while Sections 2 & 3 stack on the right. 
//         On smaller screens, they stack top-to-bottom.
//       */}
//       <div className="flex flex-col lg:flex-row gap-6 w-full">
        
//         {/* -- Section 1: Left column, made taller by default -- */}
//         <div className="w-full lg:w-1/2 bg-gray-800/50 p-6 rounded-lg min-h-[24rem]">
//           <h3 className="text-xl font-semibold text-white mb-4">
//             Section One
//           </h3>
//           <p className="text-sm text-gray-300">
//             Placeholder content for the first panel. 
//             This box is set to have a taller minimum height. 
//             You can adjust the "min-h-[24rem]" class for a different default size.
//           </p>
//         </div>

//         {/* -- Right column: two stacked boxes (Section 2, Section 3) -- */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-6">
//           {/* Section 2 */}
//           <div className="bg-gray-800/50 p-6 rounded-lg">
//             <h3 className="text-xl font-semibold text-white mb-4">
//               Section Two
//             </h3>
//             <p className="text-sm text-gray-300">
//               Placeholder content for the second panel. 
//               This sits above Section Three on the right side.
//             </p>
//           </div>

//           {/* Section 3 */}
//           <div className="bg-gray-800/50 p-6 rounded-lg">
//             <h3 className="text-xl font-semibold text-white mb-4">
//               Section Three
//             </h3>
//             <p className="text-sm text-gray-300">
//               Placeholder content for the third panel, 
//               stacked below Section Two on larger screens.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* -- Section 4: Full-width panel below everything -- */}
//       <div className="bg-gray-800/50 p-6 rounded-lg w-full mt-6">
//         <h3 className="text-xl font-semibold text-white mb-4">
//           Section Four
//         </h3>
//         <p className="text-sm text-gray-300">
//           Placeholder content for a full-width panel 
//           that stretches across the entire layout below Sections 1–3.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BlankFourSectionLayout;



















// import React from 'react';

// // Data for Section 1's summary boxes
// const sectionOneData = [
//   {
//     title: 'Lead',
//     content: 'Investigation into Dubai-based front company Afaq Al-Mustqbal Transport LLC revealed possibly 2 related entities.'
//   },
//   {
//     title: 'Digital Presence',
//     content: 'Limited and possibly deliberate minimal online footprint.'
//   },
//   {
//     title: 'Communication Network',
//     content: 'Multiple communication channels with inconsistent listings.'
//   },
//   {
//     title: 'Business Associations',
//     content: 'Network of connected entities and individuals across multiple countries.'
//   }
// ];

// const BlankFourSectionLayout = () => {
//   return (
//     <div className="w-full px-4 py-8">
//       {/* Page Title */}
//       <h2 className="text-5xl font-bold mb-6 text-white">
//       Investigation and Analysis
//       </h2>

//       {/*
//         Top-level flex container. 
//         On larger screens (lg+), Section 1 is on the left, 
//         while Sections 2 & 3 stack on the right. 
//         On smaller screens, they stack top-to-bottom.
//       */}
//       <div className="flex flex-col lg:flex-row gap-6 w-full">
        
//         {/* -- Section 1: Left column, taller by default -- */}
//         <div className="w-full lg:w-1/2 bg-gray-800/50 p-6 rounded-lg min-h-[24rem]">
//           <h3 className="text-3xl font-semibold text-white mb-4">
//             Section One
//           </h3>
          
//           {/* 
//             Instead of static text, we map over sectionOneData 
//             to create multiple summary boxes.
//           */}
//           <div className=" space-y-4">
//             {sectionOneData.map((item, idx) => (
//               <div 
//                 key={idx}
//                 className="bg-gray-700 rounded-lg p-4 flex items-start justify-between"
//               >
//                 {/* Title & content */}
//                 <div>
//                   <h4 className="text-white font-semibold text-xl mb-1">
//                     {item.title}
//                   </h4>
//                   <p className="text-lg text-gray-300">
//                     {item.content}
//                   </p>
//                 </div>

//                 {/* Caret icon on the right (placeholder for expand/collapse) */}
//                 <div className="text-gray-400 ml-4 flex-shrink-0">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     {/* A right-facing chevron */}
//                     {/* <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M9 5l7 7-7 7"
//                     /> */}
//                   </svg>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>





//         {/* -- Right column: two stacked boxes (Section 2, Section 3) -- */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-6">
//           <div className="bg-gray-800/50 p-6 rounded-lg">
//             <h3 className="text-xl font-semibold text-white mb-4">
//               Section Two
//             </h3>
//             <p className="text-sm text-gray-300">
//               Placeholder content for the second panel. 
//               This sits above Section Three on the right side.
//             </p>
//           </div>

//           <div className="bg-gray-800/50 p-6 rounded-lg">
//             <h3 className="text-xl font-semibold text-white mb-4">
//               Section Three
//             </h3>
//             <p className="text-sm text-gray-300">
//               Placeholder content for the third panel, 
//               stacked below Section Two on larger screens.
//             </p>
//           </div>
//         </div>
//       </div>






//       {/* -- Section 4: Full-width panel below everything -- */}
//       <div className="bg-gray-800/50 p-6 rounded-lg w-full mt-6">
//         <h3 className="text-xl font-semibold text-white mb-4">
//           Section Four
//         </h3>
//         <p className="text-sm text-gray-300">
//           Placeholder content for a full-width panel 
//           that stretches across the entire layout below Sections 1–3.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BlankFourSectionLayout;












// // import React from 'react';
// import React, {useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';


// // We mark the first item as main (sub: false)
// // and the next three as sub: true
// const sectionOneData = [
//   {
//     title: 'Lead',
//     content: 'Investigation into Dubai-based front company Afaq Al-Mustqbal Transport LLC revealed possibly 2 related entities.',
//     sub: false
//   },
//   {
//     title: 'Digital Presence',
//     content: 'Limited and possibly deliberate minimal online footprint.',
//     sub: true
//   },
//   {
//     title: 'Communication Network',
//     content: 'Multiple communication channels with inconsistent listings.',
//     sub: true
//   },
//   {
//     title: 'Business Associations',
//     content: 'Network of connected entities and individuals across multiple countries.',
//     sub: true
//   }
// ];

// const BlankFourSectionLayout = () => {

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
//       new mapboxgl.Marker()
//         .setLngLat([55.40013385682388, 25.29065286825747])
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

//   return (
//     <div className="w-full px-4 py-8">
//       {/* Page Title */}
//       <h2 className="text-5xl font-bold mb-6 text-white">
//         Investigation and Analysis
//       </h2>

//       {/* Top-level flex container */}
//       <div className="flex flex-col lg:flex-row gap-6 w-full">
        
//         {/* -- Section 1: Left column -- */}
//         <div className="w-full lg:w-1/2 bg-gray-800/50 p-6 rounded-lg min-h-[24rem]">
//           <h3 className="text-3xl font-semibold text-white mb-4">
//             Section One
//           </h3>

//           {/* Container for the 4 summary boxes */}
//           <div className="space-y-4">
//             {sectionOneData.map((item, idx) => {
//               // If item.sub = true => indent with vertical line & dot
//               if (item.sub) {
//                 return (
//                   <div
//                     key={idx}
//                     className="relative bg-gray-700 rounded-lg p-4 ml-8 pl-6 border-l border-gray-600"
//                   >
//                     {/* Blue dot in the vertical line (positioned roughly centre vertically) */}
//                     <div
//                       className="absolute -left-[0.52rem] top-6 h-3 w-3 rounded-full bg-blue-500"
//                       style={{ transform: 'translateY(-50%)' }}
//                     />
//                     <h4 className="text-white font-semibold text-xl mb-1">
//                       {item.title}
//                     </h4>
//                     <p className="text-lg text-gray-300">
//                       {item.content}
//                     </p>
//                   </div>
//                 );
//               }

//               // Otherwise (not sub) => normal top-level box
//               return (
//                 <div
//                   key={idx}
//                   className="bg-gray-700 rounded-lg p-4 flex items-start justify-between"
//                 >
//                   <div>
//                     <h4 className="text-white font-semibold text-xl mb-1">
//                       {item.title}
//                     </h4>
//                     <p className="text-lg text-gray-300">
//                       {item.content}
//                     </p>
//                   </div>
//                   {/* Placeholder for caret icon (optional) */}
//                   <div className="text-gray-400 ml-4 flex-shrink-0" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* -- Right column: two stacked boxes (Section 2, Section 3) -- */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-6">
//           {/* Section 2 */}
//           <div className="bg-gray-800/50 p-6 rounded-lg">
//             <h3 className="text-xl font-semibold text-white mb-4">
//             Afaq Al-Mustqbal Transport LLC
//             </h3>
//             {/* <p className="text-sm text-gray-300">
//               Placeholder content for the second panel. 
//               This sits above Section Three on the right side.
//             </p> */}
//             <img
//               src="public/images/Screenshot 2025-02-05_2.png"
//               alt="Screenshot 2025-02-05_2"
//               className="w-full h-auto rounded-lg"
//             />
//           </div>

//           {/* Section 3 */}
//           <div className="bg-gray-800/50 p-6 rounded-lg">
//             <h3 className="text-xl font-semibold text-white mb-4">
//             Afaq Almustqbal Transport 
//             </h3>
//             {/* <p className="text-sm text-gray-300">
//               Placeholder content for the third panel, 
//               stacked below Section Two on larger screens.
//             </p> */}
//             <img
//               src="/images/Screenshot 2025-02-05_1.png"
//               alt="Screenshot 2025-02-05_1"
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* -- Section 4: Full-width panel below everything -- */}
//       <div className="bg-gray-800/50 p-6 rounded-lg w-full mt-6">
//         <h3 className="text-xl font-semibold text-white mb-4">
//           Section Four
//         </h3>
//         <p className="text-sm text-gray-300">
//           Placeholder content for a full-width panel 
//           that stretches across the entire layout below Sections 1–3.
//         </p>
//               {/* Mapbox 3D Buildings */}
//               <div
//                 className="bg-[#374051] p-4 rounded-lg border border-gray-600"
//                 style={{ height: '850px' }}
//               >
//                 {/* Mapbox container */}
//                 <div
//                   ref={mapContainerRef}
//                   style={{ width: '100%', height: '100%' }}
//                 />
//               </div>
//       </div>
//     </div>
//   );
// };

// export default BlankFourSectionLayout;















// // import React from 'react';
// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// // We mark the first item as main (sub: false)
// // and the next three as sub: true
// const sectionOneData = [
//   {
//     title: 'Lead',
//     content: 'Investigation into Dubai-based front company Afaq Al-Mustqbal Transport LLC revealed possibly 2 related entities in close proximity to each other.',
//     sub: false
//   },
//   {
//     title: 'Afaq Almustqbal Cargo & Transport',
//     content: 'Limited and possibly deliberate minimal online footprint.Limited and possibly deliberate minimal online footprintLimited and possibly deliberate minimal online footprintLimited and possibly deliberate minimal online footprint',
//     sub: true
//   },
//   {
//     title: 'Afaq Al-Mustqba Transport LLC',
//     content: 'Multiple communication channels with inconsistent listings.',
//     sub: true
//    },
//   // {
//   //   title: 'Business Associations',
//   //   content: 'Network of connected entities and individuals across multiple countries.',
//   //   sub: true
//   // }
// ];

// // Marker data, each with a colour, coordinates, plus popup info.
// const markersData = [
//   {
//     color: '#ff5722', // e.g. orange
//     coordinates: [55.401368, 25.290541], // [lng, lat]
//     popupImage: 'images/p1.png', // Example image URL
//     popupHeading: 'Afaq Almustqbal Cargo & Transport',
//     popupText: 'Location: Speedex Center Building 18, 24b street, Shop 42, 39081 98117, Al Qusais Industrial 4, Deira, Dubai, Dubai Municipality.'
//   },
//   {
//     color: '#0070f3', // e.g. bright blue
//     coordinates: [55.40013385682388, 25.29065286825747],
//     popupImage: 'images/p2.jpg', // Another example
//     popupHeading: 'Afaq Al-Mustqbal Transport LLC',
//     popupText: 'Location: Al Qusais next to Galadari Driving School, Dubai, Dubai, United Arab Emirates.'
//   }
// ];

// const BlankFourSectionLayout = () => {
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

//     // Spin the map slowly 360 degrees
//     function rotateCamera(timestamp) {
//       if (!mapRef.current) return;
//       mapRef.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
//       requestAnimationFrame(rotateCamera);
//     }

//     mapRef.current.on('load', () => {
//       // Start rotation once the map loads
//       rotateCamera(0);

//       // Add markers from markersData
//       markersData.forEach((marker) => {
//         // Popup content => bold heading, line of text, plus an image
//         const popupHtml = `
//           <div style="width: 200px;">
//             <img 
//               src="${marker.popupImage}" 
//               alt="Marker image" 
//               style="width: 100%; height: auto; border-radius: 4px;" 
//             />
//             <h3 style="font-weight: bold; margin-top: 8px;">
//               ${marker.popupHeading}
//             </h3>
//             <p style="margin-top: 4px;">
//               ${marker.popupText}
//             </p>
//           </div>
//         `;

//         const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml);

//         // Create the marker with colour & attach popup
//         new mapboxgl.Marker({ color: marker.color })
//           .setLngLat(marker.coordinates)
//           .setPopup(popup)
//           .addTo(mapRef.current);
//       });

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

//   return (
//     <div className="w-full px-4 py-8">
//       {/* Page Title */}
//       <h2 className="text-5xl font-bold mb-6 text-white">
//         Investigation and Analysis
//       </h2>

//       {/* Top-level flex container */}
//       <div className="flex flex-col lg:flex-row gap-6 w-full">
        
//         {/* -- Section 1: Left column -- */}
//         <div className="w-full lg:w-1/2 bg-gray-800/50 p-6 rounded-lg min-h-[24rem]">
//           <h3 className="text-3xl font-semibold text-white mb-4">
//             Initial Discovery
//           </h3>

//           {/* Container for the 4 summary boxes */}
//           <div className="space-y-4">
//             {sectionOneData.map((item, idx) => {
//               // If item.sub = true => indent with vertical line & dot
//               if (item.sub) {
//                 return (
//                   <div
//                     key={idx}
//                     className="relative bg-gray-700 rounded-lg p-4 ml-8 pl-6 border-l border-gray-600"
//                   >
//                     {/* Blue dot in the vertical line (positioned roughly centre vertically) */}
//                     <div
//                       className="absolute -left-[0.52rem] top-6 h-3 w-3 rounded-full bg-blue-500"
//                       style={{ transform: 'translateY(-50%)' }}
//                     />
//                     <h4 className="text-white font-semibold text-xl mb-1">
//                       {item.title}
//                     </h4>
//                     <p className="text-lg text-gray-300">
//                       {item.content}
//                     </p>
//                   </div>
//                 );
//               }

//               // Otherwise (not sub) => normal top-level box
//               return (
//                 <div
//                   key={idx}
//                   className="bg-gray-700 rounded-lg p-4 flex items-start justify-between"
//                 >
//                   <div>
//                     <h4 className="text-white font-semibold text-xl mb-1">
//                       {item.title}
//                     </h4>
//                     <p className="text-lg text-gray-300">
//                       {item.content}
//                     </p>
//                   </div>
//                   {/* Placeholder for caret icon (optional) */}
//                   <div className="text-gray-400 ml-4 flex-shrink-0" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* -- Right column: two stacked boxes (Section 2, Section 3) -- */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-6">
//           {/* Section 2 */}
//           <div className="bg-gray-800/50 p-6 rounded-lg">
//             <h3 className="text-xl font-semibold text-white mb-4">
//               Afaq Al-Mustqbal Transport LLC
//             </h3>
//             <img
//               src="public/images/Screenshot 2025-02-05_2.png"
//               alt="Screenshot 2025-02-05_2"
//               className="w-full h-auto rounded-lg"
//             />
//           </div>

//           {/* Section 3 */}
//           <div className="bg-gray-800/50 p-6 rounded-lg">
//             <h3 className="text-xl font-semibold text-white mb-4">
//               Afaq Almustqbal Transport 
//             </h3>
//             <img
//               src="/images/Screenshot 2025-02-05_1.png"
//               alt="Screenshot 2025-02-05_1"
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* -- Section 4: Full-width panel below everything -- */}
//       <div className="bg-gray-800/50 p-6 rounded-lg w-full mt-6">
//         <h3 className="text-xl font-semibold text-white mb-4">
//           Co-location of the transport companies
//         </h3>
//         {/* <p className="text-sm text-gray-300">
//           Placeholder content for a full-width panel 
//           that stretches across the entire layout below Sections 1–3.
//         </p> */}

//         {/* Mapbox 3D Buildings */}
//         <div
//           className="bg-[#374051] p-4 rounded-lg border border-gray-600"
//           style={{ height: '850px' }}
//         >
//           {/* Mapbox container */}
//           <div
//             ref={mapContainerRef}
//             style={{ width: '100%', height: '100%' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlankFourSectionLayout;







import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Updated: we now have a "content" for the first item and "image" for the others
// The second and third items use an image instead of textual content.
const sectionOneData = [
  {
    title: 'Lead',
    content:
      'Investigation into Dubai-based front company Afaq Al-Mustqbal Transport LLC revealed possibly 2 related entities in close proximity to each other.',
    sub: false
  },
  {
    title: 'Afaq Almustqbal Cargo & Transport',
    // image: 'public/images/Screenshot 2025-02-05 at 6.09.04 pm.png',
    image: 'public/images/Screenshot 2025-02-05 at 6.09.16 pm.png',

    sub: true
  },
  {
    title: 'Afaq Al-Mustqba Transport LLC',
    // image: 'public/images/Screenshot 2025-02-05 at 6.09.16 pm.png',
    image: 'public/images/Screenshot 2025-02-05 at 6.09.04 pm.png',

    sub: true
  }
  // {
  //   title: 'Business Associations',
  //   content: 'Network of connected entities and individuals across multiple countries.',
  //   sub: true
  // }
];

// Marker data, each with a colour, coordinates, plus popup info.
const markersData = [
  {
    color: '#ff5722', // e.g. orange
    coordinates: [55.401368, 25.290541], // [lng, lat]
    popupImage: 'images/p1.png', // Example image URL
    popupHeading: 'Afaq Almustqbal Cargo & Transport',
    popupText:
      'Location: Speedex Center Building 18, 24b street, Shop 42, 39081 98117, Al Qusais Industrial 4, Deira, Dubai, Dubai Municipality.'
  },
  {
    color: '#0070f3', // e.g. bright blue
    coordinates: [55.40013385682388, 25.29065286825747],
    popupImage: 'images/p2.jpg', // Another example
    popupHeading: 'Afaq Al-Mustqbal Transport LLC',
    popupText:
      'Location: Al Qusais next to Galadari Driving School, Dubai, Dubai, United Arab Emirates.'
  }
];

const BlankFourSectionLayout = () => {
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

    // Spin the map slowly 360 degrees
    function rotateCamera(timestamp) {
      if (!mapRef.current) return;
      mapRef.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
      requestAnimationFrame(rotateCamera);
    }

    mapRef.current.on('load', () => {
      // Start rotation once the map loads
      rotateCamera(0);

      // Add markers from markersData
      markersData.forEach((marker) => {
        // Popup content => bold heading, line of text, plus an image
        const popupHtml = `
          <div style="width: 200px;">
            <img 
              src="${marker.popupImage}" 
              alt="Marker image" 
              style="width: 100%; height: auto; border-radius: 4px;" 
            />
            <h3 style="font-weight: bold; margin-top: 8px;">
              ${marker.popupHeading}
            </h3>
            <p style="margin-top: 4px;">
              ${marker.popupText}
            </p>
          </div>
        `;

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml);

        // Create the marker with colour & attach popup
        new mapboxgl.Marker({ color: marker.color })
          .setLngLat(marker.coordinates)
          .setPopup(popup)
          .addTo(mapRef.current);
      });

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

  return (
    <div className="w-full px-4 py-8">
      {/* Page Title */}
      <h2 className="text-5xl font-bold mb-6 text-white">
        Investigation and Analysis
      </h2>

      {/* Top-level flex container */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        
        {/* -- Section 1: Left column -- */}
        <div className="w-full lg:w-1/2 bg-gray-800/50 p-6 rounded-lg min-h-[24rem]">
          <h3 className="text-3xl font-semibold text-white mb-4">
            Initial Discovery
          </h3>

          {/* Container for the summary boxes */}
          <div className="space-y-4">
            {sectionOneData.map((item, idx) => {
              // If item.sub = true => indent with vertical line & dot
              if (item.sub) {
                return (
                  <div
                    key={idx}
                    className="relative bg-gray-700 rounded-lg p-4 ml-8 pl-6 border-l border-gray-600"
                  >
                    {/* Blue dot in the vertical line */}
                    <div
                      className="absolute -left-[0.52rem] top-6 h-3 w-3 rounded-full bg-blue-500"
                      style={{ transform: 'translateY(-50%)' }}
                    />
                    <h4 className="text-white font-semibold text-xl mb-2">
                      {item.title}
                    </h4>
                    {/* Render an image if provided, otherwise text */}
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto rounded-lg"
                      />
                    ) : (
                      <p className="text-lg text-gray-300">{item.content}</p>
                    )}
                  </div>
                );
              }

              // Otherwise => main top-level box
              return (
                <div
                  key={idx}
                  className="bg-gray-700 rounded-lg p-4 flex items-start justify-between"
                >
                  <div>
                    <h4 className="text-white font-semibold text-xl mb-2">
                      {item.title}
                    </h4>
                    {/* Render an image if provided, otherwise text */}
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto rounded-lg"
                      />
                    ) : (
                      <p className="text-lg text-gray-300">{item.content}</p>
                    )}
                  </div>
                  {/* Placeholder for caret icon or any extra content (optional) */}
                  <div className="text-gray-400 ml-4 flex-shrink-0" />
                </div>
              );
            })}
          </div>
        </div>

        {/* -- Right column: two stacked boxes (Section 2, Section 3) -- */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Section 2 */}
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Afaq Al-Mustqbal Transport LLC
            </h3>
            <img
              src="public/images/Screenshot 2025-02-05_2.png"
              alt="Screenshot 2025-02-05_2"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Section 3 */}
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Afaq Almustqbal Transport
            </h3>
            <img
              src="/images/Screenshot 2025-02-05_1.png"
              alt="Screenshot 2025-02-05_1"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* -- Section 4: Full-width panel below everything -- */}
      <div className="bg-gray-800/50 p-6 rounded-lg w-full mt-6">
        <h3 className="text-3xl font-semibold text-white mb-4">
          Co-location of the transport companies
        </h3>
        <h4 className="text-2xl font-bold mb-6 text-gray-500">
        Click on markers for more information
      </h4>
{/* <br/> */}
        {/* Mapbox 3D Buildings */}
        <div
          className="bg-[#374051] p-4 rounded-lg border border-gray-600"
          style={{ height: '850px' }}
        >
          {/* Mapbox container */}
          <div
            ref={mapContainerRef}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlankFourSectionLayout;
