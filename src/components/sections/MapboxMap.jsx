// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapboxMap = ({ isVisible }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
  
//   // Define our route coordinates
//   const coordinates = [
//     [55.401368, 25.290541], // Afaq Al-Mustqbal Transport
//     [55.040535, 25.023570], // Jebel Ali Port
//     [47.932724, 30.041533], // Umm Qasr Port
//     [47.8330645, 30.5023953] // Aswar Exchange
//   ];

//   useEffect(() => {
//     if (!isVisible) return;

//     // Add a slight delay to ensure container is fully expanded
//     const initializeMap = setTimeout(() => {
//       if (!map.current && mapContainer.current) {
//         mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtNXFrNTN4MzAwbnoybXB2cm96eXU2OTMifQ.kM-JP0TKpnNR5f2yzbDadg';

//         map.current = new mapboxgl.Map({
//           container: mapContainer.current,
//           style: 'mapbox://styles/mapbox/satellite-streets-v12',
//           center: coordinates[0],
//           zoom: 15,
//           pitch: 60,
//           bearing: 0
//         });

//         // Force a resize after map creation
//         setTimeout(() => {
//           map.current.resize();
//         }, 100);

//         map.current.on('style.load', () => {
//           // Add the route source with initial empty coordinates
//           map.current.addSource('route', {
//             type: 'geojson',
//             data: {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'LineString',
//                 coordinates: [coordinates[0]]
//               }
//             }
//           });

//           // Add the route line layer
//           map.current.addLayer({
//             id: 'route',
//             type: 'line',
//             source: 'route',
//             layout: {
//               'line-join': 'round',
//               'line-cap': 'round'
//             },
//             paint: {
//               'line-color': '#ff0000',
//               'line-width': 3,
//               'line-opacity': 0.8
//             }
//           });

//           // Add markers for each point
//           coordinates.forEach((coord, index) => {
//             new mapboxgl.Marker({
//               color: index === 0 ? "#00ff00" : 
//                      index === coordinates.length - 1 ? "#ff0000" : "#ffaa00"
//             })
//             .setLngLat(coord)
//             .addTo(map.current);
//           });

//           // Function to update the route
//           const animateRoute = async () => {
//             // Start with first point
//             let currentRoute = [coordinates[0]];
            
//             // For each segment
//             for (let i = 1; i < coordinates.length; i++) {
//               // Update route
//               currentRoute.push(coordinates[i]);
              
//               // Update map source
//               map.current.getSource('route').setData({
//                 type: 'Feature',
//                 properties: {},
//                 geometry: {
//                   type: 'LineString',
//                   coordinates: currentRoute
//                 }
//               });

//               // Fit bounds to show current segment
//               map.current.fitBounds([
//                 coordinates[i-1],
//                 coordinates[i]
//               ], {
//                 padding: 100,
//                 duration: 2000
//               });

//               // Wait before drawing next segment
//               await new Promise(resolve => setTimeout(resolve, 3000));
//             }

//             // Final fit to show entire route
//             map.current.fitBounds([
//               [Math.min(...coordinates.map(c => c[0])), Math.min(...coordinates.map(c => c[1]))],
//               [Math.max(...coordinates.map(c => c[0])), Math.max(...coordinates.map(c => c[1]))]
//             ], {
//               padding: 50,
//               duration: 2000
//             });
//           };

//           // Start the animation after a delay
//           setTimeout(animateRoute, 1000);
//         });

//         // Add resize observer to handle container size changes
//         const resizeObserver = new ResizeObserver(() => {
//           if (map.current) {
//             map.current.resize();
//           }
//         });

//         resizeObserver.observe(mapContainer.current);
//         return () => resizeObserver.disconnect();
//       }
//     }, 500);

//     return () => {
//       clearTimeout(initializeMap);
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, [isVisible]);

//   return (
//     <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
//   );
// };

// export default MapboxMap;











// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapboxMap = ({ isVisible }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   // Replace with your own Mapbox access token
//   mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtNXFrNTN4MzAwbnoybXB2cm96eXU2OTMifQ.kM-JP0TKpnNR5f2yzbDadg';

//   // We must use [lng, lat] for Mapbox
//   const routeCoordinates = [
//     [55.401368, 25.290541],   // Afaq Al-Mustqbal
//     [55.040535, 25.023570],   // Jebel Ali Port
//     [47.932724, 30.041533],   // Umm Qasr Port
//     [47.8330645, 30.5023953], // Aswar Exchange
//   ];

//   // Helper function to generate interpolated points
//   // between two coordinates. 'steps' defines the "smoothness".
//   function interpolatePoints(start, end, steps) {
//     const [startLng, startLat] = start;
//     const [endLng, endLat] = end;
//     const coordsArray = [];

//     for (let i = 0; i <= steps; i++) {
//       const t = i / steps;
//       const lng = startLng + t * (endLng - startLng);
//       const lat = startLat + t * (endLat - startLat);
//       coordsArray.push([lng, lat]);
//     }
//     return coordsArray;
//   }

//   // Combine all segments into one continuous array
//   // of coordinates for animation (each segment has 150 steps).
//   const allRoutePoints = [];
//   for (let i = 0; i < routeCoordinates.length - 1; i++) {
//     const segment = interpolatePoints(routeCoordinates[i], routeCoordinates[i + 1], 150);
//     // For a smoother transition between segments, don’t duplicate the last point of each segment (except the final one).
//     if (i < routeCoordinates.length - 2) {
//       segment.pop();
//     }
//     allRoutePoints.push(...segment);
//   }

//   // Compute bounding box for final "fit to route" step
//   function getBoundingBox(coords) {
//     let minX = Number.POSITIVE_INFINITY;
//     let minY = Number.POSITIVE_INFINITY;
//     let maxX = Number.NEGATIVE_INFINITY;
//     let maxY = Number.NEGATIVE_INFINITY;

//     coords.forEach(([lng, lat]) => {
//       if (lng < minX) minX = lng;
//       if (lng > maxX) maxX = lng;
//       if (lat < minY) minY = lat;
//       if (lat > maxY) maxY = lat;
//     });

//     return [[minX, minY], [maxX, maxY]];
//   }

//   useEffect(() => {
//     if (!isVisible) return;

//     // Slight delay to ensure container has the correct size
//     const initializeMap = setTimeout(() => {
//       if (!map.current && mapContainer.current) {
//         map.current = new mapboxgl.Map({
//           container: mapContainer.current,
//           style: 'mapbox://styles/mapbox/streets-v12',
//           center: routeCoordinates[0], // Start at the first location
//           zoom: 8,                     // Initial zoom
//           pitch: 0,
//           bearing: 0
//         });

//         // Slight extra delay to resize properly
//         setTimeout(() => {
//           map.current.resize();
//         }, 100);

//         map.current.on('load', () => {
//           // Add a source for our route (initially empty)
//           map.current.addSource('route', {
//             type: 'geojson',
//             data: {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'LineString',
//                 coordinates: []
//               }
//             }
//           });

//           // Add a layer to style the line
//           map.current.addLayer({
//             id: 'route-line',
//             type: 'line',
//             source: 'route',
//             paint: {
//               'line-color': '#FF0000',
//               'line-width': 4
//             }
//           });

//           // We will progressively update this array as we animate
//           let progressCoordinates = [routeCoordinates[0]];
//           let index = 1; // Start from the second coordinate in the allRoutePoints array

//           // Animate the line draw
//           const animationSpeed = 50; // ms per step (tweak for speed)

//           const drawInterval = setInterval(() => {
//             progressCoordinates.push(allRoutePoints[index]);

//             // Update the route source with the growing set of coordinates
//             map.current.getSource('route').setData({
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'LineString',
//                 coordinates: progressCoordinates
//               }
//             });

//             // Move camera to follow the latest point
//             map.current.easeTo({
//               center: allRoutePoints[index],
//               zoom: 5,       // Adjust the zoom level so that you can see movement
//               duration: animationSpeed
//             });

//             index++;

//             // Once we've reached the end of the route, stop the animation
//             if (index >= allRoutePoints.length) {
//               clearInterval(drawInterval);

//               // Fit the camera to show the entire route
//               const bounds = getBoundingBox(routeCoordinates);
//               map.current.fitBounds(bounds, {
//                 padding: 80,
//                 duration: 3000
//               });
//             }
//           }, animationSpeed);
//         });

//         // Observe container resizing
//         const resizeObserver = new ResizeObserver(() => {
//           if (map.current) {
//             map.current.resize();
//           }
//         });

//         resizeObserver.observe(mapContainer.current);

//         // Cleanup observer on unmount
//         return () => resizeObserver.disconnect();
//       }
//     }, 500);

//     // Cleanup: remove the map instance on unmount
//     return () => {
//       clearTimeout(initializeMap);
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, [isVisible]);

//   return (
//     <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
//   );
// };

// export default MapboxMap;








// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapboxMap = ({ isVisible }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   const locations = [
//         [55.401368, 25.290541], // Afaq Al-Mustqbal
//         [55.040535, 25.023570], // Jebel Ali Port
//         [47.932724, 30.041533], // Umm Qasr Port
//         [47.8330645, 30.5023953]  // Aswar Exchange
//   ];

//   useEffect(() => {
//     if (!isVisible) return;

//     const initializeMap = setTimeout(() => {
//         if (!map.current && mapContainer.current) {
//         mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtNXFrNTN4MzAwbnoybXB2cm96eXU2OTMifQ.kM-JP0TKpnNR5f2yzbDadg';

//         map.current = new mapboxgl.Map({
//           container: mapContainer.current,
//           style: 'mapbox://styles/mapbox/streets-v12',
//           center: locations[0],
//           zoom: 12,
//           pitch: 0,
//           bearing: 0
//         });

//         // Force a resize after map creation
//           setTimeout(() => {
//               map.current.resize();
//           }, 100);

//         map.current.on('style.load', () => {
//              map.current.addLayer({
//                 id: '3d-buildings',
//                 source: 'composite',
//                 'source-layer': 'building',
//                 type: 'fill-extrusion',
//                 minzoom: 14,
//                 paint: {
//                   'fill-extrusion-color': '#aaa',
//                   'fill-extrusion-height': ['get', 'height'],
//                   'fill-extrusion-base': ['get', 'min_height'],
//                   'fill-extrusion-opacity': 0.6
//                 }
//               });


//              const drawLine = async () => {
//                 let currentLineCoordinates = [];
//                 let animationProgress = 0;
//                 let currentStep = 0;
//                 let currentLineSource;


//                  const animateLine = () => {
//                       if(currentStep >= locations.length -1) {
//                         clearInterval(animationInterval);

//                            const bounds = new mapboxgl.LngLatBounds();

//                             locations.forEach(coord => {
//                                 bounds.extend(coord);
//                             });

//                             setTimeout(() => {
//                                 map.current.fitBounds(bounds, {
//                                    padding: 50,
//                                     duration: 2000
//                                 });
//                             }, 100);

//                         return;
//                     }

//                     const start = locations[currentStep];
//                     const end = locations[currentStep + 1];

//                     const totalFrames = 50;


//                     if(animationProgress < 1) {

//                        const interpLat = start[1] + (end[1] - start[1]) * animationProgress;
//                        const interpLng = start[0] + (end[0] - start[0]) * animationProgress;

//                         currentLineCoordinates.push([interpLng, interpLat])

//                         if(currentLineSource) {
//                             currentLineSource.setData({
//                                 type: 'Feature',
//                                 properties: {},
//                                 geometry: {
//                                     type: 'LineString',
//                                     coordinates: currentLineCoordinates
//                                 }
//                             })
//                         } else {
//                             map.current.addSource('line-source', {
//                                 type: 'geojson',
//                                 data: {
//                                     type: 'Feature',
//                                     properties: {},
//                                     geometry: {
//                                         type: 'LineString',
//                                         coordinates: currentLineCoordinates
//                                     }
//                                 }
//                             });
//                              currentLineSource = map.current.getSource('line-source')

//                              map.current.addLayer({
//                                 id: 'line-layer',
//                                 type: 'line',
//                                 source: 'line-source',
//                                 layout: {
//                                     'line-join': 'round',
//                                     'line-cap': 'round'
//                                 },
//                                 paint: {
//                                     'line-color': '#FF0000',
//                                     'line-width': 3
//                                 }
//                             });
//                         }

//                         map.current.flyTo({
//                            center: [interpLng, interpLat],
//                            zoom: 8, // Adjusted zoom for a better overview
//                             duration: 0, // set to zero because zoom happens fast
//                             essential: true,
//                          });

//                          animationProgress += 1/totalFrames;

//                     } else {
//                         currentStep++;
//                         animationProgress = 0;
//                     }
//                  };
//                 // Initial line draw
//                 const animationInterval = setInterval(animateLine, 20);
//             };

//             setTimeout(() => {
//                 map.current.resize();
//                 drawLine()
//             }, 1000);
//         });

//         // Add marker after animation
//         setTimeout(() => {
//           new mapboxgl.Marker({
//             color: "#FF0000"
//           })
//             .setLngLat(locations[0])
//             .addTo(map.current);
//         }, 2000);

//         // Add resize observer to handle container size changes
//         const resizeObserver = new ResizeObserver(() => {
//             if (map.current) {
//                 map.current.resize();
//             }
//         });

//         resizeObserver.observe(mapContainer.current);
//         return () => resizeObserver.disconnect();
//       }
//     }, 500); // Delay initialization

//     return () => {
//       clearTimeout(initializeMap);
//         if (map.current) {
//             map.current.remove();
//             map.current = null;
//         }
//     };
//   }, [isVisible]);

//   return (
//     <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
//   );
// };

// export default MapboxMap;

















// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapboxMap = ({ isVisible }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   // Replace with your own Mapbox access token
//   mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtNXFrNTN4MzAwbnoybXB2cm96eXU2OTMifQ.kM-JP0TKpnNR5f2yzbDadg';

//   // Coordinates in [lng, lat] format:
//   // 1) Afaq Al-Mustqbal
//   // 2) Jebel Ali Port
//   // 3) Umm Qasr Port
//   // 4) Aswar Exchange
//   const routeCoordinates = [
//     [55.401368, 25.290541],
//     [55.040535, 25.023570],
//     [47.932724, 30.041533],
//     [47.8330645, 30.5023953]
//   ];

//   // Helper to interpolate points between two coordinates
//   function interpolatePoints(start, end, steps) {
//     const [startLng, startLat] = start;
//     const [endLng, endLat] = end;
//     const coordsArray = [];

//     for (let i = 0; i <= steps; i++) {
//       const t = i / steps;
//       const lng = startLng + t * (endLng - startLng);
//       const lat = startLat + t * (endLat - startLat);
//       coordsArray.push([lng, lat]);
//     }
//     return coordsArray;
//   }

//   // Simple bounding box between two coords (start & end)
//   function getSegmentBoundingBox(start, end) {
//     const minLng = Math.min(start[0], end[0]);
//     const minLat = Math.min(start[1], end[1]);
//     const maxLng = Math.max(start[0], end[0]);
//     const maxLat = Math.max(start[1], end[1]);
//     return [
//       [minLng, minLat],
//       [maxLng, maxLat]
//     ];
//   }

//   // Bounding box for entire route
//   function getRouteBoundingBox(coords) {
//     let minLng = Number.POSITIVE_INFINITY;
//     let minLat = Number.POSITIVE_INFINITY;
//     let maxLng = Number.NEGATIVE_INFINITY;
//     let maxLat = Number.NEGATIVE_INFINITY;

//     coords.forEach(([lng, lat]) => {
//       if (lng < minLng) minLng = lng;
//       if (lng > maxLng) maxLng = lng;
//       if (lat < minLat) minLat = lat;
//       if (lat > maxLat) maxLat = lat;
//     });
//     return [
//       [minLng, minLat],
//       [maxLng, maxLat]
//     ];
//   }

//   // Draw the route in segments, zooming to each segment as it's drawn
//   function drawRouteInSegments() {
//     if (!map.current) return;

//     let overallProgress = [];
//     let currentSegmentIndex = 0;

//     // Recursively draw each segment
//     function drawNextSegment() {
//       if (currentSegmentIndex >= routeCoordinates.length - 1) {
//         // All segments drawn; fit to the full route
//         const routeBounds = getRouteBoundingBox(routeCoordinates);
//         map.current.fitBounds(routeBounds, { padding: 80, duration: 2000 });
//         return;
//       }

//       const start = routeCoordinates[currentSegmentIndex];
//       const end = routeCoordinates[currentSegmentIndex + 1];
//       const segmentPoints = interpolatePoints(start, end, 100); // 100 steps per segment
//       let stepIndex = 0;

//       // Fit the camera so both start and end of the segment are visible
//       const segmentBounds = getSegmentBoundingBox(start, end);
//       map.current.fitBounds(segmentBounds, {
//         padding: 80,
//         duration: 1500
//       });

//       // Animate the line
//       const segmentInterval = setInterval(() => {
//         overallProgress.push(segmentPoints[stepIndex]);

//         // Update our GeoJSON source
//         map.current.getSource('route').setData({
//           type: 'Feature',
//           properties: {},
//           geometry: {
//             type: 'LineString',
//             coordinates: overallProgress
//           }
//         });

//         stepIndex++;
//         if (stepIndex >= segmentPoints.length) {
//           clearInterval(segmentInterval);
//           currentSegmentIndex++;
//           drawNextSegment(); // Proceed to the next segment
//         }
//       }, 50); // Speed of drawing each step
//     }

//     // Start with the first segment
//     drawNextSegment();
//   }

//   useEffect(() => {
//     if (!isVisible) return;

//     // Slight delay to ensure container is properly sized
//     const initializeMap = setTimeout(() => {
//       if (!map.current && mapContainer.current) {
//         map.current = new mapboxgl.Map({
//           container: mapContainer.current,
//           style: 'mapbox://styles/mapbox/streets-v12',
//           center: routeCoordinates[0],
//           zoom: 6,
//           pitch: 0,
//           bearing: 0
//         });

//         // Resize after creation
//         setTimeout(() => {
//           if (map.current) {
//             map.current.resize();
//           }
//         }, 100);

//         map.current.on('load', () => {
//           // Add empty source for route
//           map.current.addSource('route', {
//             type: 'geojson',
//             data: {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'LineString',
//                 coordinates: []
//               }
//             }
//           });

//           // Add layer to style the route
//           map.current.addLayer({
//             id: 'route-line',
//             type: 'line',
//             source: 'route',
//             paint: {
//               'line-color': '#FF0000',
//               'line-width': 4
//             }
//           });

//           // Once map is loaded, draw the route in segments
//           drawRouteInSegments();
//         });

//         // Observe container resizing
//         const resizeObserver = new ResizeObserver(() => {
//           if (map.current) {
//             map.current.resize();
//           }
//         });
//         resizeObserver.observe(mapContainer.current);

//         // Cleanup observer on unmount
//         return () => resizeObserver.disconnect();
//       }
//     }, 500);

//     // Cleanup: remove map instance if component unmounts
//     return () => {
//       clearTimeout(initializeMap);
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, [isVisible]);

//   return (
//     <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
//   );
// };

// export default MapboxMap;










// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapboxMap = ({ isVisible }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   const locations = [
//         [55.401368, 25.290541], // Afaq Al-Mustqbal
//         [55.040535, 25.023570], // Jebel Ali Port
//         [47.932724, 30.041533], // Umm Qasr Port
//         [47.8330645, 30.5023953]  // Aswar Exchange
//   ];

//   useEffect(() => {
//     if (!isVisible) return;

//     const initializeMap = setTimeout(() => {
//         if (!map.current && mapContainer.current) {
//         mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtNXFrNTN4MzAwbnoybXB2cm96eXU2OTMifQ.kM-JP0TKpnNR5f2yzbDadg';

//         map.current = new mapboxgl.Map({
//           container: mapContainer.current,
//           style: 'mapbox://styles/mapbox/streets-v12',
//           center: locations[0],
//           zoom: 12,
//           pitch: 0,
//           bearing: 0
//         });

//         // Force a resize after map creation
//           setTimeout(() => {
//               map.current.resize();
//           }, 100);

//         map.current.on('style.load', () => {
//              map.current.addLayer({
//                 id: '3d-buildings',
//                 source: 'composite',
//                 'source-layer': 'building',
//                 type: 'fill-extrusion',
//                 minzoom: 14,
//                 paint: {
//                   'fill-extrusion-color': '#aaa',
//                   'fill-extrusion-height': ['get', 'height'],
//                   'fill-extrusion-base': ['get', 'min_height'],
//                   'fill-extrusion-opacity': 0.6
//                 }
//               });


//              const drawLine = async () => {
//                 let currentLineCoordinates = [];
//                 let animationProgress = 0;
//                 let currentStep = 0;
//                 let currentLineSource;


//                  const animateLine = () => {
//                       if(currentStep >= locations.length -1) {
//                         clearInterval(animationInterval);

//                            const bounds = new mapboxgl.LngLatBounds();

//                             locations.forEach(coord => {
//                                 bounds.extend(coord);
//                             });

//                             setTimeout(() => {
//                                 map.current.fitBounds(bounds, {
//                                    padding: 50,
//                                     duration: 2000
//                                 });
//                             }, 100);

//                         return;
//                     }

//                     const start = locations[currentStep];
//                     const end = locations[currentStep + 1];

//                     const totalFrames = 50;


//                     if(animationProgress < 1) {

//                        const interpLat = start[1] + (end[1] - start[1]) * animationProgress;
//                        const interpLng = start[0] + (end[0] - start[0]) * animationProgress;

//                         currentLineCoordinates.push([interpLng, interpLat])

//                         if(currentLineSource) {
//                             currentLineSource.setData({
//                                 type: 'Feature',
//                                 properties: {},
//                                 geometry: {
//                                     type: 'LineString',
//                                     coordinates: currentLineCoordinates
//                                 }
//                             })
//                         } else {
//                             map.current.addSource('line-source', {
//                                 type: 'geojson',
//                                 data: {
//                                     type: 'Feature',
//                                     properties: {},
//                                     geometry: {
//                                         type: 'LineString',
//                                         coordinates: currentLineCoordinates
//                                     }
//                                 }
//                             });
//                              currentLineSource = map.current.getSource('line-source')

//                              map.current.addLayer({
//                                 id: 'line-layer',
//                                 type: 'line',
//                                 source: 'line-source',
//                                 layout: {
//                                     'line-join': 'round',
//                                     'line-cap': 'round'
//                                 },
//                                 paint: {
//                                     'line-color': '#FF0000',
//                                     'line-width': 3
//                                 }
//                             });
//                         }

//                         map.current.flyTo({
//                            center: [interpLng, interpLat],
//                            zoom: 8, // Adjusted zoom for a better overview
//                             duration: 0, // set to zero because zoom happens fast
//                             essential: true,
//                          });

//                          animationProgress += 1/totalFrames;

//                     } else {
//                         currentStep++;
//                         animationProgress = 0;
//                     }
//                  };
//                 // Initial line draw
//                 const animationInterval = setInterval(animateLine, 20);
//             };

//             setTimeout(() => {
//                 map.current.resize();
//                 drawLine()
//             }, 1000);
//         });

//         // Add marker after animation
//         setTimeout(() => {
//           new mapboxgl.Marker({
//             color: "#FF0000"
//           })
//             .setLngLat(locations[0])
//             .addTo(map.current);
//         }, 2000);

//         // Add resize observer to handle container size changes
//         const resizeObserver = new ResizeObserver(() => {
//             if (map.current) {
//                 map.current.resize();
//             }
//         });

//         resizeObserver.observe(mapContainer.current);
//         return () => resizeObserver.disconnect();
//       }
//     }, 500); // Delay initialization

//     return () => {
//       clearTimeout(initializeMap);
//         if (map.current) {
//             map.current.remove();
//             map.current = null;
//         }
//     };
//   }, [isVisible]);

//   return (
//     <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
//   );
// };

// export default MapboxMap;







// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapboxMap = ({ isVisible }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   const locations = [
//         [55.401368, 25.290541], // Afaq Al-Mustqbal
//         [55.040535, 25.023570], // Jebel Ali Port
//         [47.932724, 30.041533], // Umm Qasr Port
//         [47.8330645, 30.5023953]  // Aswar Exchange
//   ];

//   useEffect(() => {
//     if (!isVisible) return;

//     const initializeMap = setTimeout(() => {
//         if (!map.current && mapContainer.current) {
//         mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtNXFrNTN4MzAwbnoybXB2cm96eXU2OTMifQ.kM-JP0TKpnNR5f2yzbDadg';

//         map.current = new mapboxgl.Map({
//           container: mapContainer.current,
//           style: 'mapbox://styles/mapbox/streets-v12',
//           center: locations[0],
//           zoom: 12,
//           pitch: 0,
//           bearing: 0
//         });

//         // Force a resize after map creation
//           setTimeout(() => {
//               map.current.resize();
//           }, 100);

//         map.current.on('style.load', () => {
//              map.current.addLayer({
//                 id: '3d-buildings',
//                 source: 'composite',
//                 'source-layer': 'building',
//                 type: 'fill-extrusion',
//                 minzoom: 14,
//                 paint: {
//                   'fill-extrusion-color': '#aaa',
//                   'fill-extrusion-height': ['get', 'height'],
//                   'fill-extrusion-base': ['get', 'min_height'],
//                   'fill-extrusion-opacity': 0.6
//                 }
//               });


//              const drawLine = async () => {
//                 let currentLineCoordinates = [];
//                 let animationProgress = 0;
//                 let currentStep = 0;
//                 let currentLineSource;


//                  const animateLine = () => {
//                       if(currentStep >= locations.length -1) {
//                         clearInterval(animationInterval);

//                            const bounds = new mapboxgl.LngLatBounds();

//                             locations.forEach(coord => {
//                                 bounds.extend(coord);
//                             });

//                             setTimeout(() => {
//                                 map.current.fitBounds(bounds, {
//                                    padding: 50,
//                                     duration: 2000
//                                 });
//                             }, 100);

//                         return;
//                     }

//                     const start = locations[currentStep];
//                     const end = locations[currentStep + 1];

//                     const totalFrames = 50;


//                     if(animationProgress < 1) {

//                        const interpLat = start[1] + (end[1] - start[1]) * animationProgress;
//                        const interpLng = start[0] + (end[0] - start[0]) * animationProgress;

//                         currentLineCoordinates.push([interpLng, interpLat])

//                         if(currentLineSource) {
//                             currentLineSource.setData({
//                                 type: 'Feature',
//                                 properties: {},
//                                 geometry: {
//                                     type: 'LineString',
//                                     coordinates: currentLineCoordinates
//                                 }
//                             })
//                         } else {
//                             map.current.addSource('line-source', {
//                                 type: 'geojson',
//                                 data: {
//                                     type: 'Feature',
//                                     properties: {},
//                                     geometry: {
//                                         type: 'LineString',
//                                         coordinates: currentLineCoordinates
//                                     }
//                                 }
//                             });
//                              currentLineSource = map.current.getSource('line-source')

//                              map.current.addLayer({
//                                 id: 'line-layer',
//                                 type: 'line',
//                                 source: 'line-source',
//                                 layout: {
//                                     'line-join': 'round',
//                                     'line-cap': 'round'
//                                 },
//                                 paint: {
//                                     'line-color': '#FF0000',
//                                     'line-width': 3
//                                 }
//                             });
//                         }

//                         map.current.flyTo({
//                            center: [interpLng, interpLat],
//                            zoom: 8, // Adjusted zoom for a better overview
//                             duration: 0, // set to zero because zoom happens fast
//                             essential: true,
//                          });

//                          animationProgress += 1/totalFrames;

//                     } else {
//                         currentStep++;
//                         animationProgress = 0;
//                     }
//                  };
//                 // Initial line draw
//                 const animationInterval = setInterval(animateLine, 20);
//             };

//             setTimeout(() => {
//                 map.current.resize();
//                 drawLine()
//             }, 1000);
//         });

//         // Add marker after animation
//         setTimeout(() => {
//           new mapboxgl.Marker({
//             color: "#FF0000"
//           })
//             .setLngLat(locations[0])
//             .addTo(map.current);
//         }, 2000);

//         // Add resize observer to handle container size changes
//         const resizeObserver = new ResizeObserver(() => {
//             if (map.current) {
//                 map.current.resize();
//             }
//         });

//         resizeObserver.observe(mapContainer.current);
//         return () => resizeObserver.disconnect();
//       }
//     }, 500); // Delay initialization

//     return () => {
//       clearTimeout(initializeMap);
//         if (map.current) {
//             map.current.remove();
//             map.current = null;
//         }
//     };
//   }, [isVisible]);

//   return (
//     <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
//   );
// };

// export default MapboxMap;



















// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapboxMap = ({ isVisible }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   // Replace with your own Mapbox access token
//   mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtNXFrNTN4MzAwbnoybXB2cm96eXU2OTMifQ.kM-JP0TKpnNR5f2yzbDadg';

//   // Coordinates in [lng, lat] format:
//   // 1) Afaq Al-Mustqbal
//   // 2) Jebel Ali Port
//   // 3) Umm Qasr Port
//   // 4) Aswar Exchange
//   const routeCoordinates = [
//     [55.401368, 25.290541],
//     [55.040535, 25.023570],
//     [47.932724, 30.041533],
//     [47.8330645, 30.5023953]
//   ];

//   // Labels to display above each point
//   const pointLabels = [
//     'Afaq Al-Mustqbal',
//     'Jebel Ali Port',
//     'Umm Qasr Port',
//     'Aswar Exchange'
//   ];

//   // Labels for each edge (optional). You can omit or change these as desired.
//   const edgeLabels = ['Segment 1', 'Segment 2', 'Segment 3'];

//   // Helper to interpolate points between two coordinates
//   function interpolatePoints(start, end, steps) {
//     const [startLng, startLat] = start;
//     const [endLng, endLat] = end;
//     const coordsArray = [];
//     for (let i = 0; i <= steps; i++) {
//       const t = i / steps;
//       const lng = startLng + t * (endLng - startLng);
//       const lat = startLat + t * (endLat - startLat);
//       coordsArray.push([lng, lat]);
//     }
//     return coordsArray;
//   }

//   // Compute bounding box for two points (useful for segments)
//   function getSegmentBoundingBox(start, end) {
//     const minLng = Math.min(start[0], end[0]);
//     const minLat = Math.min(start[1], end[1]);
//     const maxLng = Math.max(start[0], end[0]);
//     const maxLat = Math.max(start[1], end[1]);
//     return [[minLng, minLat], [maxLng, maxLat]];
//   }

//   // Compute bounding box for entire route
//   function getRouteBoundingBox(coords) {
//     let minLng = Number.POSITIVE_INFINITY;
//     let minLat = Number.POSITIVE_INFINITY;
//     let maxLng = Number.NEGATIVE_INFINITY;
//     let maxLat = Number.NEGATIVE_INFINITY;

//     coords.forEach(([lng, lat]) => {
//       if (lng < minLng) minLng = lng;
//       if (lng > maxLng) maxLng = lng;
//       if (lat < minLat) minLat = lat;
//       if (lat > maxLat) maxLat = lat;
//     });
//     return [[minLng, minLat], [maxLng, maxLat]];
//   }

//   // Add popups over each coordinate and optionally along edges.
//   // Called once the map has zoomed to the entire route.
//   function addPopups() {
//     if (!map.current) return;

//     // --- Fade-in popups at each point ---
//     routeCoordinates.forEach((coordinate, i) => {
//       new mapboxgl.Popup({
//         className: 'fade-in-popup', // see CSS note below
//         closeButton: false,
//         anchor: 'bottom'
//       })
//         .setLngLat(coordinate)
//         .setHTML(`<p>${pointLabels[i] || 'Point ' + (i + 1)}</p>`)
//         .addTo(map.current);
//     });

//     // --- (Optional) Fade-in popups on edges (midpoints) ---
//     for (let i = 0; i < routeCoordinates.length - 1; i++) {
//       const start = routeCoordinates[i];
//       const end = routeCoordinates[i + 1];
//       // Basic midpoint in (lng, lat) space:
//       const mid = [
//         (start[0] + end[0]) / 2,
//         (start[1] + end[1]) / 2
//       ];

//       new mapboxgl.Popup({
//         className: 'fade-in-popup', // see CSS note below
//         closeButton: false,
//         anchor: 'bottom'
//       })
//         .setLngLat(mid)
//         .setHTML(`<p>${edgeLabels[i] || 'Edge ' + (i + 1)}</p>`)
//         .addTo(map.current);
//     }
//   }

//   // Draw the route in segments, zooming to each segment as it's drawn
//   function drawRouteInSegments() {
//     if (!map.current) return;

//     let overallProgress = [];
//     let currentSegmentIndex = 0;

//     function drawNextSegment() {
//       if (currentSegmentIndex >= routeCoordinates.length - 1) {
//         // All segments drawn; fit the camera to show the full route
//         const routeBounds = getRouteBoundingBox(routeCoordinates);
//         map.current.fitBounds(routeBounds, { padding: 80, duration: 2000 });

//         // After final camera movement is done, fade in the popups
//         setTimeout(() => {
//           addPopups();
//         }, 2000);
//         return;
//       }

//       const start = routeCoordinates[currentSegmentIndex];
//       const end = routeCoordinates[currentSegmentIndex + 1];
//       const segmentPoints = interpolatePoints(start, end, 100); // 100 steps per segment
//       let stepIndex = 0;

//       // Fit the camera so both start & end of the segment are visible
//       const segmentBounds = getSegmentBoundingBox(start, end);
//       map.current.fitBounds(segmentBounds, {
//         padding: 80,
//         duration: 1500
//       });

//       // Animate the line drawing
//       const segmentInterval = setInterval(() => {
//         overallProgress.push(segmentPoints[stepIndex]);

//         // Update our GeoJSON source with the new set of coordinates
//         map.current.getSource('route').setData({
//           type: 'Feature',
//           properties: {},
//           geometry: {
//             type: 'LineString',
//             coordinates: overallProgress
//           }
//         });

//         stepIndex++;
//         if (stepIndex >= segmentPoints.length) {
//           clearInterval(segmentInterval);
//           currentSegmentIndex++;
//           drawNextSegment();
//         }
//       }, 50); // Speed of line drawing per step
//     }

//     // Start drawing the first segment
//     drawNextSegment();
//   }

//   useEffect(() => {
//     if (!isVisible) return;

//     // Slight delay to ensure container is properly sized
//     const initializeMap = setTimeout(() => {
//       if (!map.current && mapContainer.current) {
//         map.current = new mapboxgl.Map({
//           container: mapContainer.current,
//           style: 'mapbox://styles/mapbox/streets-v12',
//           center: routeCoordinates[0],
//           zoom: 6,
//           pitch: 0,
//           bearing: 0
//         });

//         // Resize after creation
//         setTimeout(() => {
//           if (map.current) {
//             map.current.resize();
//           }
//         }, 100);

//         map.current.on('load', () => {
//           // Add empty source for the route
//           map.current.addSource('route', {
//             type: 'geojson',
//             data: {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'LineString',
//                 coordinates: []
//               }
//             }
//           });

//           // Add layer to style the route
//           map.current.addLayer({
//             id: 'route-line',
//             type: 'line',
//             source: 'route',
//             paint: {
//               'line-color': '#FF0000',
//               'line-width': 4
//             }
//           });

//           // Once the map is loaded, draw the route in segments
//           drawRouteInSegments();
//         });

//         // Observe container resizing
//         const resizeObserver = new ResizeObserver(() => {
//           if (map.current) {
//             map.current.resize();
//           }
//         });
//         resizeObserver.observe(mapContainer.current);

//         // Cleanup observer on unmount
//         return () => resizeObserver.disconnect();
//       }
//     }, 500);

//     // Cleanup: remove map instance if component unmounts
//     return () => {
//       clearTimeout(initializeMap);
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, [isVisible]);

//   return (
//     <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
//   );
// };

// export default MapboxMap;




















// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapboxMap = ({ isVisible }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   // Replace with your own Mapbox access token
//   mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtNXFrNTN4MzAwbnoybXB2cm96eXU2OTMifQ.kM-JP0TKpnNR5f2yzbDadg';

//   // Coordinates in [lng, lat] format:
//   // 1) Afaq Al-Mustqbal
//   // 2) Jebel Ali Port
//   // 3) Umm Qasr Port
//   // 4) Aswar Exchange
//   const routeCoordinates = [
//     [55.401368, 25.290541],
//     [55.040535, 25.023570],
//     [47.932724, 30.041533],
//     [47.8330645, 30.5023953]
//   ];

//   // Labels to display above each point
//   const pointLabels = [
//     'Afaq Al-Mustqbal',
//     'Jebel Ali Port',
//     'Umm Qasr Port',
//     'Aswar Exchange'
//   ];

//   // Labels for each edge (optional). You can omit or change these as desired.
//   const edgeLabels = ['Segment 1', 'Segment 2', 'Segment 3'];

//   // Helper to interpolate points between two coordinates
//   function interpolatePoints(start, end, steps) {
//     const [startLng, startLat] = start;
//     const [endLng, endLat] = end;
//     const coordsArray = [];
//     for (let i = 0; i <= steps; i++) {
//       const t = i / steps;
//       const lng = startLng + t * (endLng - startLng);
//       const lat = startLat + t * (endLat - startLat);
//       coordsArray.push([lng, lat]);
//     }
//     return coordsArray;
//   }

//   // Compute bounding box for two points (useful for segments)
//   function getSegmentBoundingBox(start, end) {
//     const minLng = Math.min(start[0], end[0]);
//     const minLat = Math.min(start[1], end[1]);
//     const maxLng = Math.max(start[0], end[0]);
//     const maxLat = Math.max(start[1], end[1]);
//     return [[minLng, minLat], [maxLng, maxLat]];
//   }

//   // Compute bounding box for entire route
//   function getRouteBoundingBox(coords) {
//     let minLng = Number.POSITIVE_INFINITY;
//     let minLat = Number.POSITIVE_INFINITY;
//     let maxLng = Number.NEGATIVE_INFINITY;
//     let maxLat = Number.NEGATIVE_INFINITY;

//     coords.forEach(([lng, lat]) => {
//       if (lng < minLng) minLng = lng;
//       if (lng > maxLng) maxLng = lng;
//       if (lat < minLat) minLat = lat;
//       if (lat > maxLat) maxLat = lat;
//     });
//     return [[minLng, minLat], [maxLng, maxLat]];
//   }

//   // Add popups over each coordinate and optionally along edges
//   // Called once the map has zoomed to the entire route.
//   function addPopups() {
//     if (!map.current) return;

//     // --- Fade-in popups at each point ---
//     routeCoordinates.forEach((coordinate, i) => {
//       new mapboxgl.Popup({
//         className: 'fade-in-popup', // see CSS note below
//         closeButton: false,
//         closeOnClick: false,        // This makes them persistent
//         anchor: 'bottom'
//       })
//         .setLngLat(coordinate)
//         .setHTML(`<p>${pointLabels[i] || 'Point ' + (i + 1)}</p>`)
//         .addTo(map.current);
//     });

//     // --- (Optional) fade-in popups on edges (midpoints) ---
//     for (let i = 0; i < routeCoordinates.length - 1; i++) {
//       const start = routeCoordinates[i];
//       const end = routeCoordinates[i + 1];
//       // Basic midpoint in (lng, lat) space:
//       const mid = [
//         (start[0] + end[0]) / 2,
//         (start[1] + end[1]) / 2
//       ];

//       new mapboxgl.Popup({
//         className: 'fade-in-popup',
//         closeButton: false,
//         closeOnClick: false, // Persistent for edges as well
//         anchor: 'bottom'
//       })
//         .setLngLat(mid)
//         .setHTML(`<p>${edgeLabels[i] || 'Edge ' + (i + 1)}</p>`)
//         .addTo(map.current);
//     }
//   }

//   // Draw the route in segments, zooming to each segment as it's drawn
//   function drawRouteInSegments() {
//     if (!map.current) return;

//     let overallProgress = [];
//     let currentSegmentIndex = 0;

//     function drawNextSegment() {
//       if (currentSegmentIndex >= routeCoordinates.length - 1) {
//         // All segments drawn; fit the camera to show the full route
//         const routeBounds = getRouteBoundingBox(routeCoordinates);
//         map.current.fitBounds(routeBounds, { padding: 80, duration: 2000 });

//         // After final camera movement is done, fade in the popups
//         setTimeout(() => {
//           addPopups();
//         }, 2000);
//         return;
//       }

//       const start = routeCoordinates[currentSegmentIndex];
//       const end = routeCoordinates[currentSegmentIndex + 1];
//       const segmentPoints = interpolatePoints(start, end, 100); // 100 steps per segment
//       let stepIndex = 0;

//       // Fit the camera so both start & end of the segment are visible
//       const segmentBounds = getSegmentBoundingBox(start, end);
//       map.current.fitBounds(segmentBounds, {
//         padding: 80,
//         duration: 1500
//       });

//       // Animate the line drawing
//       const segmentInterval = setInterval(() => {
//         overallProgress.push(segmentPoints[stepIndex]);

//         // Update our GeoJSON source with the new set of coordinates
//         map.current.getSource('route').setData({
//           type: 'Feature',
//           properties: {},
//           geometry: {
//             type: 'LineString',
//             coordinates: overallProgress
//           }
//         });

//         stepIndex++;
//         if (stepIndex >= segmentPoints.length) {
//           clearInterval(segmentInterval);
//           currentSegmentIndex++;
//           drawNextSegment();
//         }
//       }, 50); // Speed of line drawing per step
//     }

//     // Start drawing the first segment
//     drawNextSegment();
//   }

//   useEffect(() => {
//     if (!isVisible) return;

//     // Slight delay to ensure container is properly sized
//     const initializeMap = setTimeout(() => {
//       if (!map.current && mapContainer.current) {
//         map.current = new mapboxgl.Map({
//           container: mapContainer.current,
//           style: 'mapbox://styles/mapbox/streets-v12',
//           center: routeCoordinates[0],
//           zoom: 6,
//           pitch: 0,
//           bearing: 0
//         });

//         // Resize after creation
//         setTimeout(() => {
//           if (map.current) {
//             map.current.resize();
//           }
//         }, 100);

//         map.current.on('load', () => {
//           // Add empty source for the route
//           map.current.addSource('route', {
//             type: 'geojson',
//             data: {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'LineString',
//                 coordinates: []
//               }
//             }
//           });

//           // Add layer to style the route
//           map.current.addLayer({
//             id: 'route-line',
//             type: 'line',
//             source: 'route',
//             paint: {
//               'line-color': '#FF0000',
//               'line-width': 4
//             }
//           });

//           // Once the map is loaded, draw the route in segments
//           drawRouteInSegments();
//         });

//         // Observe container resizing
//         const resizeObserver = new ResizeObserver(() => {
//           if (map.current) {
//             map.current.resize();
//           }
//         });
//         resizeObserver.observe(mapContainer.current);

//         // Cleanup observer on unmount
//         return () => resizeObserver.disconnect();
//       }
//     }, 500);

//     // Cleanup: remove map instance if component unmounts
//     return () => {
//       clearTimeout(initializeMap);
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, [isVisible]);

//   return (
//     <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
//   );
// };

// export default MapboxMap;














// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapboxMap = ({ isVisible }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   // Replace with your own Mapbox access token
//   mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtNXFrNTN4MzAwbnoybXB2cm96eXU2OTMifQ.kM-JP0TKpnNR5f2yzbDadg';

//   // Coordinates in [lng, lat] format:
//   // 1) Afaq Al-Mustqbal
//   // 2) Jebel Ali Port
//   // 3) Umm Qasr Port
//   // 4) Aswar Exchange
//   const routeCoordinates = [
//     [55.401368, 25.290541],
//     [55.040535, 25.023570],
//     [47.932724, 30.041533],
//     [47.8330645, 30.5023953]
//   ];

//   // Labels to display above each point
//   const pointLabels = [
//     'Afaq Al-Mustqbal',
//     'Jebel Ali Port',
//     'Umm Qasr Port',
//     'Aswar Exchange'
//   ];

//   // Labels for each edge (optional). You can omit or change these as desired.
//   const edgeLabels = ['Segment 1', 'Segment 2', 'Segment 3'];

//   // Helper to interpolate points between two coordinates
//   function interpolatePoints(start, end, steps) {
//     const [startLng, startLat] = start;
//     const [endLng, endLat] = end;
//     const coordsArray = [];
//     for (let i = 0; i <= steps; i++) {
//       const t = i / steps;
//       const lng = startLng + t * (endLng - startLng);
//       const lat = startLat + t * (endLat - startLat);
//       coordsArray.push([lng, lat]);
//     }
//     return coordsArray;
//   }

//   // Compute bounding box for two points (useful for segments)
//   function getSegmentBoundingBox(start, end) {
//     const minLng = Math.min(start[0], end[0]);
//     const minLat = Math.min(start[1], end[1]);
//     const maxLng = Math.max(start[0], end[0]);
//     const maxLat = Math.max(start[1], end[1]);
//     return [[minLng, minLat], [maxLng, maxLat]];
//   }

//   // Compute bounding box for entire route
//   function getRouteBoundingBox(coords) {
//     let minLng = Number.POSITIVE_INFINITY;
//     let minLat = Number.POSITIVE_INFINITY;
//     let maxLng = Number.NEGATIVE_INFINITY;
//     let maxLat = Number.NEGATIVE_INFINITY;

//     coords.forEach(([lng, lat]) => {
//       if (lng < minLng) minLng = lng;
//       if (lng > maxLng) maxLng = lng;
//       if (lat < minLat) minLat = lat;
//       if (lat > maxLat) maxLat = lat;
//     });
//     return [[minLng, minLat], [maxLng, maxLat]];
//   }

//   // Add popups over each coordinate and optionally along edges
//   // Called once the map has zoomed to the entire route.
//   function addPopups() {
//     if (!map.current) return;

//     // We'll embed some placeholder expanded content in each popup.
//     // The 'onclick' toggles a hidden div. For clarity, we are using inline JS.
//     const getExpandedHTML = (title) => `
//       <div class="popup-container" style="font-family: sans-serif;">
//         <div
//           class="popup-header"
//           style="cursor: pointer; font-weight: bold; display: flex; align-items: center; justify-content: space-between;"
//           onclick="
//             var content = this.nextElementSibling;
//             if(content.style.display === 'none' || !content.style.display) {
//               content.style.display = 'block';
//             } else {
//               content.style.display = 'none';
//             }
//           "
//         >
//           <span>${title}</span>
//           <span style="margin-left: 8px;">▼</span>
//         </div>

//         <div class="popup-content" style="display: none; margin-top: 8px;">
//           <p style="margin: 0; font-weight: bold;">Some Bold Heading</p>
//           <p>A single sentence of placeholder text describing something interesting.</p>
//           <ul style="padding-left: 20px; margin-top: 8px; margin-bottom: 8px;">
//             <li>First bullet point</li>
//             <li>Second bullet point</li>
//             <li>Third bullet point</li>
//           </ul>
//           <div style="width: 200px; margin-top: 8px;">
//             <img
//               src="public/images/Jebel_Ali_Port_2_Imresolt.jpg"
//               alt="Placeholder"
//               style="width: 100%; height: auto; border: 1px solid #ccc;"
//             />
//           </div>
//         </div>
//       </div>
//     `;

//     // --- Fade-in popups at each point (expandable) ---
//     routeCoordinates.forEach((coordinate, i) => {
//       const popupHTML = getExpandedHTML(pointLabels[i] || 'Point ' + (i + 1));
//       new mapboxgl.Popup({
//         className: 'fade-in-popup', // see CSS note below
//         closeButton: false,
//         closeOnClick: false,        // Make it persistent
//         anchor: 'bottom'
//       })
//         .setLngLat(coordinate)
//         .setHTML(popupHTML)
//         .addTo(map.current);
//     });

//     // --- (Optional) fade-in popups on edges (expandable) ---
//     for (let i = 0; i < routeCoordinates.length - 1; i++) {
//       const start = routeCoordinates[i];
//       const end = routeCoordinates[i + 1];
//       // Basic midpoint in (lng, lat) space:
//       const mid = [
//         (start[0] + end[0]) / 2,
//         (start[1] + end[1]) / 2
//       ];

//       const edgeHTML = getExpandedHTML(edgeLabels[i] || 'Edge ' + (i + 1));
//       new mapboxgl.Popup({
//         className: 'fade-in-popup',
//         closeButton: false,
//         closeOnClick: false, // persistent
//         anchor: 'bottom'
//       })
//         .setLngLat(mid)
//         .setHTML(edgeHTML)
//         .addTo(map.current);
//     }
//   }

//   // Draw the route in segments, zooming to each segment as it's drawn
//   function drawRouteInSegments() {
//     if (!map.current) return;

//     let overallProgress = [];
//     let currentSegmentIndex = 0;

//     function drawNextSegment() {
//       if (currentSegmentIndex >= routeCoordinates.length - 1) {
//         // All segments drawn; fit the camera to show the full route
//         const routeBounds = getRouteBoundingBox(routeCoordinates);
//         map.current.fitBounds(routeBounds, { padding: 80, duration: 2000 });

//         // After final camera movement is done, fade in the popups
//         setTimeout(() => {
//           addPopups();
//         }, 2000);
//         return;
//       }

//       const start = routeCoordinates[currentSegmentIndex];
//       const end = routeCoordinates[currentSegmentIndex + 1];
//       const segmentPoints = interpolatePoints(start, end, 100); // 100 steps per segment
//       let stepIndex = 0;

//       // Fit the camera so both start & end of the segment are visible
//       const segmentBounds = getSegmentBoundingBox(start, end);
//       map.current.fitBounds(segmentBounds, {
//         padding: 80,
//         duration: 1500
//       });

//       // Animate the line drawing
//       const segmentInterval = setInterval(() => {
//         overallProgress.push(segmentPoints[stepIndex]);

//         // Update our GeoJSON source with the new set of coordinates
//         map.current.getSource('route').setData({
//           type: 'Feature',
//           properties: {},
//           geometry: {
//             type: 'LineString',
//             coordinates: overallProgress
//           }
//         });

//         stepIndex++;
//         if (stepIndex >= segmentPoints.length) {
//           clearInterval(segmentInterval);
//           currentSegmentIndex++;
//           drawNextSegment();
//         }
//       }, 50); // Speed of line drawing per step
//     }

//     // Start drawing the first segment
//     drawNextSegment();
//   }

//   useEffect(() => {
//     if (!isVisible) return;

//     // Slight delay to ensure container is properly sized
//     const initializeMap = setTimeout(() => {
//       if (!map.current && mapContainer.current) {
//         map.current = new mapboxgl.Map({
//           container: mapContainer.current,
//           style: 'mapbox://styles/mapbox/streets-v12',
//           center: routeCoordinates[0],
//           zoom: 6,
//           pitch: 0,
//           bearing: 0
//         });

//         // Resize after creation
//         setTimeout(() => {
//           if (map.current) {
//             map.current.resize();
//           }
//         }, 100);

//         map.current.on('load', () => {
//           // Add empty source for the route
//           map.current.addSource('route', {
//             type: 'geojson',
//             data: {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'LineString',
//                 coordinates: []
//               }
//             }
//           });

//           // Add layer to style the route
//           map.current.addLayer({
//             id: 'route-line',
//             type: 'line',
//             source: 'route',
//             paint: {
//               'line-color': '#FF0000',
//               'line-width': 4
//             }
//           });

//           // Once the map is loaded, draw the route in segments
//           drawRouteInSegments();
//         });

//         // Observe container resizing
//         const resizeObserver = new ResizeObserver(() => {
//           if (map.current) {
//             map.current.resize();
//           }
//         });
//         resizeObserver.observe(mapContainer.current);

//         // Cleanup observer on unmount
//         return () => resizeObserver.disconnect();
//       }
//     }, 500);

//     // Cleanup: remove map instance if component unmounts
//     return () => {
//       clearTimeout(initializeMap);
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, [isVisible]);

//   return (
//     <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
//   );
// };

// export default MapboxMap;















import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxMap = ({ isVisible }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // Replace with your own Mapbox access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtNXFrNTN4MzAwbnoybXB2cm96eXU2OTMifQ.kM-JP0TKpnNR5f2yzbDadg';

  // ---- DATA STRUCTURES ----
  // Each array item includes: coordinates, a label/title, and the content for its "expanded" state.
  // const routePointsData = [
  //   {
  //     coordinates: [55.401368, 25.290541],
  //     label: 'Afaq Al-Mustqbal',
  //     heading: 'Some Bold Heading',
  //     sentence: 'A single sentence of placeholder text describing something interesting.',
  //     bulletPoints: ['First bullet point', 'Second bullet point', 'Third bullet point'],
  //     imageUrl: 'public/images/Screenshot 2025-02-04_2.png'
  //   },
  //   {
  //     coordinates: [55.040535, 25.023570],
  //     label: 'Jebel Ali Port',
  //     heading: 'Some Bold Heading',
  //     sentence: 'A single sentence of placeholder text describing something interesting.',
  //     bulletPoints: ['First bullet point', 'Second bullet point', 'Third bullet point'],
  //     imageUrl: 'public/images/Jebel_Ali_Port_2_Imresolt.jpg'
  //   },
  //   {
  //     coordinates: [47.932724, 30.041533],
  //     label: 'Umm Qasr Port',
  //     heading: 'Some Bold Heading',
  //     sentence: 'A single sentence of placeholder text describing something interesting.',
  //     bulletPoints: ['First bullet point', 'Second bullet point', 'Third bullet point'],
  //     imageUrl: 'public/images/FB_IMG_1707302444778-850x560.jpg'
  //   },
  //   {
  //     coordinates: [47.8330645, 30.5023953],
  //     label: 'Aswar Exchange',
  //     heading: 'Some Bold Heading',
  //     sentence: 'A single sentence of placeholder text describing something interesting.',
  //     bulletPoints: ['First bullet point', 'Second bullet point', 'Third bullet point'],
  //     imageUrl: 'public/images/Screenshot_2025_02_04.png'
  //   }
  // ];






  const routePointsData = [
    {
      coordinates: [55.401368, 25.290541],
      label: 'Afaq Al-Mustqbal Transport LLC',
      heading: 'Origin Point - Front Company',
      sentence: 'Initial collection point for USD 11 million cash transfer, operating under cover of legitimate transport business.',
      bulletPoints: [
        'Registered October 2022 in Speedex Center, Dubai',
        'Minimal online presence with defunct website',
        'Suspected front company for money movement operations'
      ],
      imageUrl: 'public/images/Screenshot 2025-02-04_2.png'
    },
    {
      coordinates: [55.040535, 25.023570],
      label: 'Jebel Ali Port',
      heading: 'First Transit Point - Maritime Loading',
      sentence: 'Strategic loading point where cash was transferred to AS CLEMENTINA vessel on December 5-6, 2024.',
      bulletPoints: [
        'Device PINK and CYAN tracked to this location',
        'Multiple visits between Dec 5-9 suggesting surveillance',
        'Departure point of AS CLEMENTINA at 17:30 UTC Dec 6'
      ],
      imageUrl: 'public/images/Jebel_Ali_Port_2_Imresolt.jpg'
    },
    {
      coordinates: [47.932724, 30.041533],
      label: 'Umm Qasr Port',
      heading: 'Iraqi Port Entry Point',
      sentence: 'Port arrival point in Iraq where device RED showed regular access patterns to port authority areas.',
      bulletPoints: [
        'AS CLEMENTINA arrived 15:00 UTC Dec 8',
        'RED device tracked to port authority buildings',
        'Evidence of established port access procedures'
      ],
      imageUrl: 'public/images/FB_IMG_1707302444778-850x560.jpg'
    },
    {
      coordinates: [47.8330645, 30.5023953],
      label: 'Aswar Exchange Company',
      heading: 'Final Destination - Money Exchange',
      sentence: 'Final delivery point in Basra where RED device was tracked at approximately midnight local time December 10.',
      bulletPoints: [
        'Limited public information available',
        'After-hours operation suggesting deliberate timing',
        'RED device showed distinct pattern of movement to this location'
      ],
      imageUrl: 'public/images/Screenshot_2025_02_04.png'
    }
]

  // Edge data. Each edge has its own label and popup content (could be the same or different).
  // There are 3 edges if there are 4 points.
  const routeEdgesData = [
    {
      label: 'Segment 1',
      heading: 'Some Bold Heading',
      sentence: 'A single sentence of placeholder text describing something interesting.',
      bulletPoints: ['First bullet point', 'Second bullet point', 'Third bullet point'],
      imageUrl: 'public/images/Jebel_Ali_Port_2_Imresolt.jpg'
    },
    {
      label: 'Segment 2',
      heading: 'Some Bold Heading',
      sentence: 'A single sentence of placeholder text describing something interesting.',
      bulletPoints: ['First bullet point', 'Second bullet point', 'Third bullet point'],
      imageUrl: 'public/images/Jebel_Ali_Port_2_Imresolt.jpg'
    },
    {
      label: 'Segment 3',
      heading: 'Some Bold Heading',
      sentence: 'A single sentence of placeholder text describing something interesting.',
      bulletPoints: ['First bullet point', 'Second bullet point', 'Third bullet point'],
      imageUrl: 'public/images/Jebel_Ali_Port_2_Imresolt.jpg'
    }
  ];

  // We'll pull out just the coordinates for the drawing logic:
  const routeCoordinates = routePointsData.map((p) => p.coordinates);

  // ---- HELPER FUNCTIONS ----

  // Return the bounding box for a pair of [lng, lat] coords
  function getSegmentBoundingBox(start, end) {
    const minLng = Math.min(start[0], end[0]);
    const minLat = Math.min(start[1], end[1]);
    const maxLng = Math.max(start[0], end[0]);
    const maxLat = Math.max(start[1], end[1]);
    return [[minLng, minLat], [maxLng, maxLat]];
  }

  // Return the bounding box for all coords in a route
  function getRouteBoundingBox(coords) {
    let minLng = Number.POSITIVE_INFINITY;
    let minLat = Number.POSITIVE_INFINITY;
    let maxLng = Number.NEGATIVE_INFINITY;
    let maxLat = Number.NEGATIVE_INFINITY;

    coords.forEach(([lng, lat]) => {
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    });
    return [[minLng, minLat], [maxLng, maxLat]];
  }

  // Interpolate a set of points between start & end
  function interpolatePoints(start, end, steps) {
    const [startLng, startLat] = start;
    const [endLng, endLat] = end;
    const coordsArray = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const lng = startLng + t * (endLng - startLng);
      const lat = startLat + t * (endLat - startLat);
      coordsArray.push([lng, lat]);
    }
    return coordsArray;
  }

  // Build the HTML with a toggleable "expanded" section
  // using the data for each point or edge.
  function buildPopupHTML({
    label,
    heading,
    sentence,
    bulletPoints,
    imageUrl
  }) {
    // We use an inline onClick in the heading to toggle the .popup-content
    // (hidden by default).
    // In a larger codebase, consider using React portals or the Mapbox setDOMContent approach for more complex UIs.
    return `
      <div class="popup-container" style="font-family: sans-serif;">
        <div
          class="popup-header"
          style="cursor: pointer; font-weight: bold; display: flex; align-items: center; justify-content: space-between;"
          onclick="
            var content = this.nextElementSibling;
            if (content.style.display === 'none' || !content.style.display) {
              content.style.display = 'block';
            } else {
              content.style.display = 'none';
            }
          "
        >
          <span>${label}</span>
          <span style="margin-left: 8px;">▼</span>
        </div>

        <div class="popup-content" style="display: none; margin-top: 8px;">
          <p style="margin: 0; font-weight: bold;">${heading}</p>
          <p>${sentence}</p>
          <ul style="padding-left: 20px; margin-top: 8px; margin-bottom: 8px;">
            ${bulletPoints.map((point) => `<li>${point}</li>`).join('')}
          </ul>
          <div style="width: 200px; margin-top: 8px;">
            <img
              src="${imageUrl}"
              alt="Placeholder"
              style="width: 100%; height: auto; border: 1px solid #ccc;"
            />
          </div>
        </div>
      </div>
    `;
  }

  // Create and add popups for each point and each edge (after the route is drawn)
  function addPopups() {
    if (!map.current) return;

    // 1) Popups for each route point
    routePointsData.forEach((pointData) => {
      const popupHTML = buildPopupHTML({
        label: pointData.label,
        heading: pointData.heading,
        sentence: pointData.sentence,
        bulletPoints: pointData.bulletPoints,
        imageUrl: pointData.imageUrl
      });

      new mapboxgl.Popup({
        className: 'fade-in-popup', // For optional fade-in CSS
        closeButton: false,
        closeOnClick: false, // Make them persistent
        anchor: 'bottom'
      })
        .setLngLat(pointData.coordinates)
        .setHTML(popupHTML)
        .addTo(map.current);
    });

    // 2) Popups for each edge midpoint
    for (let i = 0; i < routeCoordinates.length - 1; i++) {
      const start = routeCoordinates[i];
      const end = routeCoordinates[i + 1];
      // Basic midpoint of the segment
      const mid = [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2];

      const edgeData = routeEdgesData[i]; // match segment i
      const popupHTML = buildPopupHTML({
        label: edgeData.label,
        heading: edgeData.heading,
        sentence: edgeData.sentence,
        bulletPoints: edgeData.bulletPoints,
        imageUrl: edgeData.imageUrl
      });

      new mapboxgl.Popup({
        className: 'fade-in-popup',
        closeButton: false,
        closeOnClick: false,
        anchor: 'bottom'
      })
        .setLngLat(mid)
        .setHTML(popupHTML)
        .addTo(map.current);
    }
  }

  // Draw the route in segments, zooming to each segment as it's drawn
  function drawRouteInSegments() {
    if (!map.current) return;

    let overallProgress = [];
    let currentSegmentIndex = 0;

    function drawNextSegment() {
      if (currentSegmentIndex >= routeCoordinates.length - 1) {
        // All segments drawn; fit the camera to show the full route
        const routeBounds = getRouteBoundingBox(routeCoordinates);
        map.current.fitBounds(routeBounds, { padding: 80, duration: 2000 });

        // After final camera movement is done, fade in the popups
        setTimeout(() => {
          addPopups();
        }, 2000);
        return;
      }

      const start = routeCoordinates[currentSegmentIndex];
      const end = routeCoordinates[currentSegmentIndex + 1];
      const segmentPoints = interpolatePoints(start, end, 100); // 100 steps per segment
      let stepIndex = 0;

      // Fit the camera so both start & end of the segment are visible
      const segmentBounds = getSegmentBoundingBox(start, end);
      map.current.fitBounds(segmentBounds, {
        padding: 80,
        duration: 1500
      });

      // Animate the line drawing
      const segmentInterval = setInterval(() => {
        overallProgress.push(segmentPoints[stepIndex]);

        // Update our GeoJSON source with the new set of coordinates
        map.current.getSource('route').setData({
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: overallProgress
          }
        });

        stepIndex++;
        if (stepIndex >= segmentPoints.length) {
          clearInterval(segmentInterval);
          currentSegmentIndex++;
          drawNextSegment();
        }
      }, 50); // Speed of line drawing per step
    }

    // Start drawing the first segment
    drawNextSegment();
  }

  // ---- MAIN EFFECT HOOK ----
  useEffect(() => {
    if (!isVisible) return;

    // Slight delay to ensure container is properly sized
    const initializeMap = setTimeout(() => {
      if (!map.current && mapContainer.current) {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: routeCoordinates[0], // Start view at the first point
          zoom: 6,
          pitch: 0,
          bearing: 0
        });

        // Resize after creation
        setTimeout(() => {
          if (map.current) {
            map.current.resize();
          }
        }, 100);

        map.current.on('load', () => {
          // Add empty source for the route
          map.current.addSource('route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: []
              }
            }
          });

          // Add layer to style the route
          map.current.addLayer({
            id: 'route-line',
            type: 'line',
            source: 'route',
            paint: {
              'line-color': '#FF0000',
              'line-width': 4
            }
          });

          // Once the map is loaded, draw the route in segments
          drawRouteInSegments();
        });

        // Observe container resizing
        const resizeObserver = new ResizeObserver(() => {
          if (map.current) {
            map.current.resize();
          }
        });
        resizeObserver.observe(mapContainer.current);

        // Cleanup observer on unmount
        return () => resizeObserver.disconnect();
      }
    }, 500);

    // Cleanup: remove map instance if component unmounts
    return () => {
      clearTimeout(initializeMap);
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [isVisible]);

  return (
    <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
  );
};

export default MapboxMap;



