// // src/components/sections/WorldMapChart.jsx
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import { scaleLinear } from 'd3-scale';

// const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

// export default function WorldMapChart() {
//   const [countryData, setCountryData] = useState({});
//   const [maxValue, setMaxValue] = useState(100);

//   useEffect(() => {
//     Papa.parse('/data/regionData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         console.log('Parsed rows:', results.data);
//         const dataMap = {};
//         let maxVal = 0;

//         results.data.forEach((row) => {
//           const country = row.Country?.trim();
//           const val = Number(row.DeepSeek || 0);
//           if (country) {
//             dataMap[country] = val;
//             if (val > maxVal) maxVal = val;
//           }
//         });

//         setCountryData(dataMap);
//         setMaxValue(maxVal);
//       },
//     });
//   }, []);

//   const colorScale = scaleLinear()
//     .domain([0, maxValue])
//     .range(['#E0F2FE', '#0284C7']); // light to dark blue

//   function getCountryColor(name) {
//     const value = countryData[name] || 0;
//     return colorScale(value);
//   }

//   return (
//     <div className="bg-white rounded shadow p-4">
//       <h2 className="text-lg font-semibold mb-4">Interest by Region (Map)</h2>
//       <div style={{ width: '100%', height: '500px' }}>
//         <ComposableMap projectionConfig={{ scale: 140 }}>
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const countryName = geo.properties.NAME;
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={getCountryColor(countryName)}
//                     stroke="#FFF"
//                     style={{
//                       default: { outline: 'none' },
//                       hover: { outline: 'none', opacity: 0.7 },
//                       pressed: { outline: 'none' },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </div>
//   );
// }







// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { ComposableMap, Geographies } from 'react-simple-maps';
// import { feature } from 'topojson-client';

// const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

// export default function WorldMapChart() {
//   const [mapCountries, setMapCountries] = useState([]);   // store all country names from the map
//   const [csvCountries, setCsvCountries] = useState([]);   // store all country names from CSV

//   useEffect(() => {
//     // 1) Fetch the world map
//     fetch(geoUrl)
//       .then(res => res.json())
//       .then(worldData => {
//         const { features } = feature(worldData, worldData.objects.countries);
//         const allNames = features.map(f => f.properties.NAME);  // e.g. "Russian Federation"
//         setMapCountries(allNames);
//       });

//     // 2) Fetch the CSV
//     Papa.parse('/data/regionData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         // build an array of country names from CSV
//         const cNames = results.data
//           .filter(row => row.Country)
//           .map(row => row.Country.trim());
//         setCsvCountries(cNames);
//       },
//     });
//   }, []);

//   // 3) Compare them
//   //    Once both mapCountries and csvCountries are loaded, do a quick mismatch check:
//   useEffect(() => {
//     if (mapCountries.length && csvCountries.length) {
//       // Convert to sets for easier membership checks
//       const mapSet = new Set(mapCountries);
//       const csvSet = new Set(csvCountries);

//       // Which CSV countries not in map
//       const missingInMap = [...csvSet].filter(name => !mapSet.has(name));
//       // Which map countries not in CSV
//       const missingInCsv = [...mapSet].filter(name => !csvSet.has(name));

//       console.log('CSV countries NOT found in map:', missingInMap);
//       console.log('Map countries NOT in CSV:', missingInCsv);
//     }
//   }, [mapCountries, csvCountries]);

//   return (
//     <div>
//       {/* minimal rendering just so the code runs in your component */}
//       <ComposableMap>
//         <Geographies geography={geoUrl}>
//           {({ geographies }) => (
//             <>
//               {/* ... or omit; the key is we fetch & parse the names above */}
//             </>
//           )}
//         </Geographies>
//       </ComposableMap>
//     </div>
//   );
// }











// // src/components/sections/WorldMapChart.jsx
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';

// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import { scaleLinear } from 'd3-scale';

// const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

// export default function WorldMapChart() {
//   const [countryData, setCountryData] = useState({});
//   const [maxValue, setMaxValue] = useState(100);

//   useEffect(() => {
//     Papa.parse('/data/regionData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         console.log('Parsed rows:', results.data);
//         const dataMap = {};
//         let maxVal = 0;

//         results.data.forEach((row) => {
//           const country = row.Country?.trim();
//           const val = Number(row.DeepSeek || 0);
//           if (country) {
//             dataMap[country] = val;
//             if (val > maxVal) maxVal = val;
//           }
//         });

//         // *** Here's where you log the final dataMap ***
//         console.log('Final countryData object:', dataMap, 'maxVal:', maxVal);

//         setCountryData(dataMap);
//         setMaxValue(maxVal);
//       },
//     });
//   }, []);


//   const colorScale = scaleLinear()
//     .domain([0, maxValue])
//     .range(['#E0F2FE', '#0284C7']); // light to dark blue


// // const colorScale = scaleLinear()
// //   .domain([0, maxValue])
// //   .range(['#cfe9ff', '#001B43']); // or whatever deeper blues you like


//   // const colorScale = scaleLinear()
//   // .domain([0, maxValue * 0.5, maxValue])      // e.g. 0, half, full
//   // .range(['#E0F2FE', '#3B82F6', '#1E3A8A']);  // light → medium → dark



//   function getCountryColor(name) {
//     const value = countryData[name] || 0;
//     return colorScale(value);
//   }

//   return (
//     <div className="bg-white rounded shadow p-4">
//       <h2 className="text-lg font-semibold mb-4">Interest by Region (Map)</h2>
//       <div style={{ width: '100%', height: '500px' }}>
//         <ComposableMap projectionConfig={{ scale: 140 }}>
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 // IMPORTANT: If the map uses .name instead of .NAME,
//                 // change this to geo.properties.name
//                 const countryName = geo.properties.name;
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={getCountryColor(countryName)}
//                     stroke="#FFF"
//                     style={{
//                       default: { outline: 'none' },
//                       hover: { outline: 'none', opacity: 0.7 },
//                       pressed: { outline: 'none' },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </div>
//   );
// }













// // src/components/sections/WorldMapChart.jsx
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// // Import scaleSequential + the chosen colour scheme
// import { scaleSequential } from 'd3-scale';
// import { interpolateBlues } from 'd3-scale-chromatic'; // <-- this is the gradient

// const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

// export default function WorldMapChart() {
//   const [countryData, setCountryData] = useState({});
//   const [maxValue, setMaxValue] = useState(100);

//   useEffect(() => {
//     Papa.parse('/data/regionData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         console.log('Parsed rows:', results.data);
//         const dataMap = {};
//         let maxVal = 0;

//         results.data.forEach((row) => {
//           const country = row.Country?.trim();
//           const val = Number(row.DeepSeek || 0);
//           if (country) {
//             dataMap[country] = val;
//             if (val > maxVal) maxVal = val;
//           }
//         });

//         console.log('Final countryData object:', dataMap, 'maxVal:', maxVal);
//         setCountryData(dataMap);
//         setMaxValue(maxVal);
//       },
//     });
//   }, []);

//   // Instead of scaleLinear + range([...]),
//   // we use scaleSequential + interpolateBlues
//   const colorScale = scaleSequential(interpolateBlues)
//     .domain([0, maxValue]); 

//   function getCountryColor(name) {
//     const value = countryData[name] || 0;
//     return colorScale(value); // returns a colour along the 'Blues' gradient
//   }

//   return (
//     <div className="bg-white rounded shadow p-4">
//       <h2 className="text-lg font-semibold mb-4">Interest by Region (Map)</h2>
//       <div style={{ width: '100%', height: '500px' }}>
//         <ComposableMap projectionConfig={{ scale: 140 }}>
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 // Make sure you use .name if that's where the map stores it
//                 const countryName = geo.properties.name; 
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={getCountryColor(countryName)}
//                     stroke="#FFF"
//                     style={{
//                       default: { outline: 'none' },
//                       hover: { outline: 'none', opacity: 0.8 },
//                       pressed: { outline: 'none' },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </div>
//   );
// }




// // src/components/sections/WorldMapChart.jsx
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import { scaleSequential } from 'd3-scale';
// import { interpolateBlues } from 'd3-scale-chromatic';

// const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

// // You can pick any threshold you like. Everything above CAP shares the same colour.
// const CAP = 50;

// export default function WorldMapChart() {
//   const [countryData, setCountryData] = useState({});
//   const [maxValue, setMaxValue] = useState(100);

//   useEffect(() => {
//     Papa.parse('/data/regionData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         console.log('Parsed rows:', results.data);
//         const dataMap = {};
//         let maxVal = 0;

//         results.data.forEach((row) => {
//           const country = row.Country?.trim();
//           const val = Number(row.DeepSeek || 0);
//           if (country) {
//             dataMap[country] = val;
//             if (val > maxVal) maxVal = val;
//           }
//         });

//         console.log('Final countryData object:', dataMap, 'maxVal:', maxVal);
//         setCountryData(dataMap);
//         setMaxValue(maxVal);
//       },
//     });
//   }, []);

//   // We create a scale from 0...CAP (instead of 0...maxValue) so
//   // anything above CAP is clamped to CAP's colour.
//   const colorScale = scaleSequential(interpolateBlues)
//     .domain([0, CAP])
//     .clamp(true);

//   function getCountryColor(name) {
//     // Retrieve actual interest value
//     const actualValue = countryData[name] || 0;
//     // The scale will treat anything above CAP as CAP
//     return colorScale(actualValue);
//   }

//   return (
//     <div className="bg-white rounded shadow p-4">
//       <h2 className="text-lg font-semibold mb-4">Interest by Region (Map)</h2>
//       <div style={{ width: '100%', height: '500px' }}>
//         <ComposableMap projectionConfig={{ scale: 140 }}>
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 // Make sure to use the property actually present in this TopoJSON.
//                 // If it's "geo.properties.name", then do that:
//                 const countryName = geo.properties.name; 
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={getCountryColor(countryName)}
//                     stroke="#FFF"
//                     style={{
//                       default: { outline: 'none' },
//                       hover: { outline: 'none', opacity: 0.8 },
//                       pressed: { outline: 'none' },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </div>
//   );
// }













// // src/components/sections/WorldMapChart.jsx
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// // Notice we import scaleSequentialPow for an exponent-based scale
// import { scaleSequentialPow } from 'd3-scale';
// import { interpolateBlues } from 'd3-scale-chromatic';

// const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';
// const CAP = 50; // same clamp as before

// export default function WorldMapChart() {
//   const [countryData, setCountryData] = useState({});
//   const [maxValue, setMaxValue] = useState(100);

//   useEffect(() => {
//     Papa.parse('/data/regionData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         console.log('Parsed rows:', results.data);
//         const dataMap = {};
//         let maxVal = 0;

//         results.data.forEach((row) => {
//           const country = row.Country?.trim();
//           const val = Number(row.DeepSeek || 0);
//           if (country) {
//             dataMap[country] = val;
//             if (val > maxVal) maxVal = val;
//           }
//         });

//         console.log('Final countryData object:', dataMap, 'maxVal:', maxVal);
//         setCountryData(dataMap);
//         setMaxValue(maxVal);
//       },
//     });
//   }, []);

//   // Use a power scale with exponent(0.5) to emphasise mid/lower values
//   const colorScale = scaleSequentialPow(interpolateBlues)
//     .exponent(0.5)
//     .domain([0, CAP])
//     .clamp(true);

//   function getCountryColor(name) {
//     const value = countryData[name] || 0;
//     return colorScale(value);
//   }

//   return (
//     <div className="bg-white rounded shadow p-4">
//       <h2 className="text-lg font-semibold mb-4">Interest by Region (Map)</h2>
//       <div style={{ width: '100%', height: '500px' }}>
//         <ComposableMap projectionConfig={{ scale: 140 }}>
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const countryName = geo.properties.name;
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={getCountryColor(countryName)}
//                     stroke="#FFF"
//                     style={{
//                       default: { outline: 'none' },
//                       hover: { outline: 'none', opacity: 0.8 },
//                       pressed: { outline: 'none' },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </div>
//   );
// }

















// // src/components/sections/WorldMapChart.jsx
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import { scaleSequentialPow } from 'd3-scale';
// import { interpolateBlues } from 'd3-scale-chromatic';

// const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';
// const CAP = 50;

// export default function WorldMapChart() {
//   const [countryData, setCountryData] = useState({});
//   const [maxValue, setMaxValue] = useState(100);

//   useEffect(() => {
//     Papa.parse('/data/regionData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         console.log('Parsed rows:', results.data);
//         const dataMap = {};
//         let maxVal = 0;

//         results.data.forEach((row) => {
//           const country = row.Country?.trim();
//           const val = Number(row.DeepSeek || 0);
//           if (country) {
//             dataMap[country] = val;
//             if (val > maxVal) maxVal = val;
//           }
//         });

//         console.log('Final countryData object:', dataMap, 'maxVal:', maxVal);
//         setCountryData(dataMap);
//         setMaxValue(maxVal);
//       },
//     });
//   }, []);

//   // Use a sqrt scale so mid-range countries get a bit more colour
//   const colorScale = scaleSequentialPow(interpolateBlues)
//     .exponent(0.5)
//     .domain([0, CAP])
//     .clamp(true);

//   function getCountryColor(name) {
//     const value = countryData[name] || 0;
//     return colorScale(value);
//   }

//   return (
//     <div className="bg-white rounded shadow p-4">
//       <h2 className="text-lg font-semibold mb-4">Interest by Region (Map)</h2>
//       <div style={{ width: '100%', height: '500px' }}>
//         <ComposableMap
//           // Shift and scale the map to better centre it
//           projectionConfig={{
//             scale: 140,
//             center: [10, 0],
//           }}
//           // Margin auto to centre horizontally in a wide parent container
//           style={{ margin: '0 auto' }}
//         >
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const countryName = geo.properties.name;
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={getCountryColor(countryName)}
//                     stroke="#FFF"
//                     style={{
//                       default: { outline: 'none' },
//                       hover: { outline: 'none', opacity: 0.8 },
//                       pressed: { outline: 'none' },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </div>
//   );
// }










// // src/components/sections/WorldMapChart.jsx
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import { scaleSequentialPow } from 'd3-scale';
// import { interpolateBlues } from 'd3-scale-chromatic';

// const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';
// const CAP = 40;

// export default function WorldMapChart() {
//   const [countryData, setCountryData] = useState({});
//   const [maxValue, setMaxValue] = useState(100);

//   useEffect(() => {
//     Papa.parse('/data/regionData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         console.log('Parsed rows:', results.data);
//         const dataMap = {};
//         let maxVal = 0;

//         results.data.forEach((row) => {
//           const country = row.Country?.trim();
//           const val = Number(row.DeepSeek || 0);
//           if (country) {
//             dataMap[country] = val;
//             if (val > maxVal) maxVal = val;
//           }
//         });

//         console.log('Final countryData object:', dataMap, 'maxVal:', maxVal);
//         setCountryData(dataMap);
//         setMaxValue(maxVal);
//       },
//     });
//   }, []);

//   // Use a sqrt scale, capping at 50
//   const colorScale = scaleSequentialPow(interpolateBlues)
//     .exponent(0.5)
//     .domain([0, CAP])
//     .clamp(true);

//   function getCountryColor(name) {
//     const value = countryData[name] || 0;
//     return colorScale(value);
//   }

//   return (
//     <div className="bg-white rounded shadow p-4">
//       <h2 className="text-lg font-semibold mb-4">Interest by Region (Map)</h2>

//       {/* 
//         A responsive container:
//         - position: relative => can hold an absolutely placed child
//         - width: 100% => takes available width
//         - paddingBottom: '50%' => sets a 2:1 aspect ratio 
//           (adjust to e.g. '60%' or '75%' for a different ratio).
//       */}
//       <div style={{ position: 'relative', width: '100%', paddingBottom: '75%' }}>
//         <ComposableMap
//           projectionConfig={{
//             scale: 140,
//             center: [20, 0],
//           }}
//           // Absolutely fill the container
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//           }}
//         >
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const countryName = geo.properties.name;
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={getCountryColor(countryName)}
//                     stroke="#FFF"
//                     style={{
//                       default: { outline: 'none' },
//                       hover: { outline: 'none', opacity: 0.8 },
//                       pressed: { outline: 'none' },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </div>
//   );
// }












// // src/components/sections/WorldMapChart.jsx
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import { scaleSequentialPow } from 'd3-scale';
// import { interpolateBlues } from 'd3-scale-chromatic';

// // IMPORTANT: new react-tooltip import
// import { Tooltip as ReactTooltip } from 'react-tooltip';

// const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';
// const CAP = 40;

// export default function WorldMapChart() {
//   const [countryData, setCountryData] = useState({});
//   const [maxValue, setMaxValue] = useState(100);

//   useEffect(() => {
//     Papa.parse('/data/regionData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         console.log('Parsed rows:', results.data);
//         const dataMap = {};
//         let maxVal = 0;

//         results.data.forEach((row) => {
//           const country = row.Country?.trim();
//           const val = Number(row.DeepSeek || 0);
//           if (country) {
//             dataMap[country] = val;
//             if (val > maxVal) maxVal = val;
//           }
//         });

//         console.log('Final countryData object:', dataMap, 'maxVal:', maxVal);
//         setCountryData(dataMap);
//         setMaxValue(maxVal);
//       },
//     });
//   }, []);

//   // A sqrt scale, capping at CAP
//   const colorScale = scaleSequentialPow(interpolateBlues)
//     .exponent(0.5)
//     .domain([0, CAP])
//     .clamp(true);

//   function getCountryColor(name) {
//     const value = countryData[name] || 0;
//     return colorScale(value);
//   }

//   return (
//     <div className="bg-white rounded shadow p-4">
//       <h2 className="text-lg font-semibold mb-4">Interest by Region (Map)</h2>

//       {/* Responsive container with 60% aspect ratio, etc. */}
//       <div style={{ position: 'relative', width: '100%', paddingBottom: '60%' }}>
//         <ComposableMap
//           projectionConfig={{
//             scale: 140,
//             center: [20, 0],
//           }}
//           // This data attribute signals to react-tooltip that we can show tooltips here
//           data-tooltip-id="map-tooltip"
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//           }}
//         >
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const countryName = geo.properties.name;
//                 const value = countryData[countryName] || 0;

//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={getCountryColor(countryName)}
//                     stroke="#FFF"
//                     // ReactTooltip picks up these data attributes to show a hover pop-up
//                     data-tooltip-content={`${countryName}: ${value}`}
//                     style={{
//                       default: { outline: 'none' },
//                       hover: { outline: 'none', opacity: 0.8 },
//                       pressed: { outline: 'none' },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>

//         {/* The actual tooltip. 
//             "id" must match data-tooltip-id="map-tooltip" from ComposableMap above. */}
//         <ReactTooltip id="map-tooltip" />
//       </div>
//     </div>
//   );
// }













// // src/components/sections/WorldMapChart.jsx
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import { scaleSequentialPow } from 'd3-scale';
// import { interpolateBlues } from 'd3-scale-chromatic';

// // IMPORTANT: v5+ requires a named import + the CSS:
// import { Tooltip as ReactTooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';

// const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';
// const CAP = 40;

// export default function WorldMapChart() {
//   const [countryData, setCountryData] = useState({});
//   const [maxValue, setMaxValue] = useState(100);

//   useEffect(() => {
//     Papa.parse('/data/regionData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const dataMap = {};
//         let maxVal = 0;

//         results.data.forEach((row) => {
//           const country = row.Country?.trim();
//           const val = Number(row.DeepSeek || 0);
//           if (country) {
//             dataMap[country] = val;
//             if (val > maxVal) maxVal = val;
//           }
//         });
//         setCountryData(dataMap);
//         setMaxValue(maxVal);
//       },
//     });
//   }, []);

//   // A sqrt scale, capping at CAP
//   const colorScale = scaleSequentialPow(interpolateBlues)
//     .exponent(0.5)
//     .domain([0, CAP])
//     .clamp(true);

//   function getCountryColor(name) {
//     const value = countryData[name] || 0;
//     return colorScale(value);
//   }

//   return (
//     <div className="bg-white rounded shadow p-4">
//       <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest by Region</h2>

//       {/* A responsive container with aspect ratio */}
//       <div style={{ position: 'relative', width: '100%', paddingBottom: '60%' }}>
//         <ComposableMap
//           projectionConfig={{ scale: 200, center: [20, 0] }}
//           // data-tooltip-id => parent "map-tooltip"
//           data-tooltip-id="map-tooltip"
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             // If you suspect pointer issues:
//             // pointerEvents: 'auto',
//           }}
//         >
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const countryName = geo.properties.name;
//                 const value = countryData[countryName] || 0;
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={getCountryColor(countryName)}
//                     stroke="#FFF"
//                     data-tooltip-content={`${countryName}: ${value}`}
//                     style={{
//                       default: { outline: 'none' },
//                       hover: { outline: 'none', opacity: 0.8 },
//                       pressed: { outline: 'none' },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>

//         {/* This matches data-tooltip-id="map-tooltip" above */}
//         <ReactTooltip id="map-tooltip" />
//       </div>
//     </div>
//   );
// }







// src/components/sections/WorldMapChart.jsx
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleSequentialPow } from 'd3-scale';
import { interpolateBlues } from 'd3-scale-chromatic';

// react-tooltip v5+ => named import + CSS
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';
const CAP = 40;

export default function WorldMapChart() {
  const [countryData, setCountryData] = useState({});
  const [maxValue, setMaxValue] = useState(100);

  useEffect(() => {
    Papa.parse('/data/regionData.csv', {
      download: true,
      header: true,
      complete: (results) => {
        const dataMap = {};
        let maxVal = 0;

        results.data.forEach((row) => {
          const country = row.Country?.trim();
          const val = Number(row.DeepSeek || 0);
          if (country) {
            dataMap[country] = val;
            if (val > maxVal) maxVal = val;
          }
        });
        setCountryData(dataMap);
        setMaxValue(maxVal);
      },
    });
  }, []);

  // A sqrt scale, capping at CAP
  const colorScale = scaleSequentialPow(interpolateBlues)
    .exponent(0.5)
    .domain([0, CAP])
    .clamp(true);

  function getCountryColor(name) {
    const value = countryData[name] || 0;
    return colorScale(value);
  }

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest by Region (7 days to 30 Jan 2025)</h2>

      {/* A responsive container with aspect ratio */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '60%' }}>
        <ComposableMap
          projectionConfig={{ scale: 200, center: [20, 0] }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // If needed: pointerEvents: 'auto',
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name;
                const value = countryData[countryName] || 0;
                // Make each Geography the tooltip target:
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getCountryColor(countryName)}
                    stroke="#FFF"

                    // Each country has data-tooltip-id + data-tooltip-content
                    data-tooltip-id="map-tooltip"
                    data-tooltip-content={`${countryName}: ${value}`}

                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', opacity: 0.8 },
                      pressed: { outline: 'none' },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {/* The Tooltip that matches data-tooltip-id="map-tooltip" above */}
        <ReactTooltip id="map-tooltip" />
      </div>
    </div>
  );
}
