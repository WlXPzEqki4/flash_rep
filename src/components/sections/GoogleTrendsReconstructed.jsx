// // src/components/sections/GoogleTrendsReconstructed.jsx
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// // Simple date parser
// function parseDateTime(dateString) {
//   return new Date(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);

//   // Load CSV for time-series
//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         console.log('Parsed rows:', results.data);
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   // Recharts tooltip
//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   return (
//     <div className="space-y-8">
//       {/* Time-Series line chart */}
//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Here is the map-based region chart */}
//       <WorldMapChart />
//     </div>
//   );
// }











// // src/components/sections/GoogleTrendsReconstructed.jsx
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// // Simple date parser
// function parseDateTime(dateString) {
//   return new Date(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);

//   // Load CSV for time-series
//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         console.log('Parsed rows:', results.data);
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   // Recharts tooltip
//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   return (
//     // A light-grey container with a title at the top
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       {/* Time-Series line chart in its own white box */}
//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Map-based region chart below */}
//       <WorldMapChart />
//     </div>
//   );
// }




















// // src/components/sections/GoogleTrendsReconstructed.jsx
// import React, { useEffect, useState } from 'react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';




// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge"
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-28T19:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-30T08:00:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline"
//   },
//   {
//     timestamp: "2025-01-30T12:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline"
//   }
// ];


// // Simple date parser
// function parseDateTime(dateString) {
//   return new Date(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);

//   // Load CSV for time-series
//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         console.log('Parsed rows:', results.data);
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   // Recharts tooltip
//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   return (
//     // A light-grey container with a title at the top
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       {/* Time-Series line chart in its own white box */}
//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>


//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>


//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Placeholder Title</h2>
//         {/* Add your new content here */}
//       </div>



//       {/* Map-based region chart below */}
//       <WorldMapChart />

//     </div>
//   );
// }














// import React, { useEffect, useState } from 'react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge"
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-28T19:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-30T08:00:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline"
//   },
//   {
//     timestamp: "2025-01-30T12:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline"
//   }
// ];

// function parseDateTime(dateString) {
//   return new Date(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);

//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Annotations</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {annotations.map((annotation, index) => (
//             <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
//               <h3 className="text-lg font-semibold mb-2">{annotation.label}</h3>
//               <p className="text-gray-600">{annotation.description}</p>
//               <p className="text-gray-500 text-xs mt-2">Timestamp: {annotation.timestamp}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <WorldMapChart />
//     </div>
//   );
// }









// import React, { useEffect, useState } from 'react';
// import { format, parseISO } from 'date-fns';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge"
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-28T19:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-30T08:00:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline"
//   },
//   {
//     timestamp: "2025-01-30T12:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline"
//   }
// ];

// function parseDateTime(dateString) {
//   return parseISO(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);

//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Annotations</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {annotations.map((annotation, index) => (
//             <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
//               <div className="flex items-center mb-2">
//                 <span className="text-gray-500 mr-2">#{index + 1}</span>
//                 {annotation.type === 'surge' && <ArrowUpCircle size={18} className="text-green-500 mr-2" />}
//                 {annotation.type === 'peak' && <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />}
//                 {annotation.type === 'decline' && <ArrowDownCircle size={18} className="text-red-500 mr-2" />}
//                 <h3 className="text-lg font-semibold">{annotation.label}</h3>
//               </div>
//               <p className="text-gray-600">{annotation.description}</p>
//               <p className="text-gray-500 text-xs mt-2">Timestamp: {format(parseISO(annotation.timestamp), 'yyyy-MM-dd HH:mm')}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <WorldMapChart />
//     </div>
//   );
// }

























// import React, { useEffect, useState } from 'react';
// import { format, parseISO } from 'date-fns';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge"
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-28T19:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-30T08:00:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline"
//   },
//   {
//     timestamp: "2025-01-30T12:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline"
//   }
// ];

// function parseDateTime(dateString) {
//   return parseISO(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);

//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Annotations</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {annotations.map((annotation, index) => (
//             <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
//               <div className="flex items-center mb-2">
//                 <span className="text-gray-500 mr-2">#{index + 1}</span>
//                 {annotation.type === 'surge' && <ArrowUpCircle size={18} className="text-green-500 mr-2" />}
//                 {annotation.type === 'peak' && <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />}
//                 {annotation.type === 'decline' && <ArrowDownCircle size={18} className="text-red-500 mr-2" />}
//                 <h3 className="text-lg font-semibold">{annotation.label}</h3>
//               </div>
//               <p className="text-gray-600">{annotation.description}</p>
//               <p className="text-gray-500 text-xs mt-2">Timestamp: {format(parseISO(annotation.timestamp), 'yyyy-MM-dd HH:mm')}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <WorldMapChart />
//     </div>
//   );
// }







// import React, { useEffect, useState } from 'react';
// import { format, parseISO } from 'date-fns';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge"
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-28T19:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-30T08:00:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline"
//   },
//   {
//     timestamp: "2025-01-30T12:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline"
//   }
// ];

// function parseDateTime(dateString) {
//   return parseISO(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);

//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Activity Phases</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


//           <div className="bg-gray-100 rounded-lg p-4 shadow-md">
//           <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 1</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Peak Interest</h3>
//             </div>
//             <p>Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 18:00</p>
//           </div>


//           <div className="bg-gray-100 rounded-lg p-4 shadow-md">
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-lg font-semibold">Secondary Peak</h3>
//             </div>
//             <p>Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 19:00</p>
//           </div>
//           <div className="bg-gray-100 rounded-lg p-4 shadow-md">
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-lg font-semibold">Decline Begins</h3>
//             </div>
//             <p>Interest wanes as market reactions stabilize and news cycle progresses.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 08:00</p>
//           </div>
//           <div className="bg-gray-100 rounded-lg p-4 shadow-md">
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-lg font-semibold">Continued Decline</h3>
//             </div>
//             <p>Downward trend persists as initial public attention subsides.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 12:00</p>
//           </div>
//           <div className="bg-gray-100 rounded-lg p-4 shadow-md">
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-green-500 mr-2" />
//               <h3 className="text-lg font-semibold">Initial Surge</h3>
//             </div>
//             <p>Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-27 12:00</p>
//           </div>
//         </div>
//       </div>

//       <WorldMapChart />
//     </div>
//   );
// }













// import React, { useEffect, useState } from 'react';
// import { format, parseISO } from 'date-fns';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge"
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-28T19:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak"
//   },
//   {
//     timestamp: "2025-01-30T08:00:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline"
//   },
//   {
//     timestamp: "2025-01-30T12:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline"
//   }
// ];

// function parseDateTime(dateString) {
//   return parseISO(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);

//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Activity Phases</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


//         <div className="bg-gray-100 rounded-lg p-4 shadow-md">
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 1</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-green-500 mr-2" />
//               <h3 className="text-m font-semibold">Initial Surge</h3>
//             </div>
//             <p>Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-27 12:00</p>
//           </div>


//           <div className="bg-gray-100 rounded-lg p-4 shadow-md">
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 2</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Peak Interest</h3>
//             </div>
//             <p>Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 18:00</p>
//           </div>

//           <div className="bg-gray-100 rounded-lg p-4 shadow-md">
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 3</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Decline Begins</h3>
//             </div>
//             <p>Interest wanes as market reactions stabilize and news cycle progresses.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 08:00</p>
//           </div>


//           <div className="bg-gray-100 rounded-lg p-4 shadow-md">
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 4</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Secondary Peak</h3>
//             </div>
//             <p>Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 19:00</p>
//           </div>






//           <div className="bg-gray-100 rounded-lg p-4 shadow-md">
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 5</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Continued Decline</h3>
//             </div>
//             <p>Downward trend persists as initial public attention subsides.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 12:00</p>
//           </div>





//         </div>
//       </div>

//       <WorldMapChart />
//     </div>
//   );
// }


















// import React, { useEffect, useState } from 'react';
// import { format, parseISO } from 'date-fns';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ReferenceLine,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge",
//     phase: 1
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak",
//     phase: 2
//   },
//   {
//     timestamp: "2025-01-28T19:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak",
//     phase: 4
//   },
//   {
//     timestamp: "2025-01-30T08:00:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline",
//     phase: 3
//   },
//   {
//     timestamp: "2025-01-30T12:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline",
//     phase: 5
//   }
// ];

// function parseDateTime(dateString) {
//   return parseISO(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);
//   const [hoveredPhase, setHoveredPhase] = useState(null);

//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   const getPhaseAnnotation = (phase) => {
//     return annotations.find(a => a.phase === phase);
//   };

//   return (
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//               {hoveredPhase && getPhaseAnnotation(hoveredPhase) && (
//                 <ReferenceLine
//                   x={getPhaseAnnotation(hoveredPhase).timestamp}
//                   stroke="#FF0000"
//                   label={`Phase ${hoveredPhase}`}
//                 />
//               )}
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Activity Phases</h2>
        
//         {/* New Summary Box */}
//         <div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
//           {/* <h3 className="text-xl font-bold mb-4">Summary Overview</h3> */}
//           <p className="text-gray-700">
//             This analysis tracks the surge in public interest around DeepSeek's emergence 
//             in the AI landscape, from initial discovery through peak attention and subsequent 
//             market stabilization. The data reveals distinct phases of public engagement and 
//             market response.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(1)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 1</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-green-500 mr-2" />
//               <h3 className="text-m font-semibold">Initial Surge</h3>
//             </div>
//             <p>Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-27 12:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(2)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 2</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Peak Interest</h3>
//             </div>
//             <p>Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 18:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(3)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 3</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Decline Begins</h3>
//             </div>
//             <p>Interest wanes as market reactions stabilize and news cycle progresses.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 08:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(4)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 4</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Secondary Peak</h3>
//             </div>
//             <p>Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 19:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(5)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 5</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Continued Decline</h3>
//             </div>
//             <p>Downward trend persists as initial public attention subsides.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 12:00</p>
//           </div>
//         </div>
//       </div>

//       <WorldMapChart />
//     </div>
//   );
// }







// import React, { useEffect, useState } from 'react';
// import { format, parseISO } from 'date-fns';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ReferenceLine,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge",
//     phase: 1
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak",
//     phase: 2
//   },
//   {
//     timestamp: "2025-01-28T19:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak",
//     phase: 4
//   },
//   {
//     timestamp: "2025-01-28T08:20:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline",
//     phase: 3
//   },
//   {
//     timestamp: "2025-01-30T12:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline",
//     phase: 5
//   }
// ];

// function parseDateTime(dateString) {
//   return parseISO(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);
//   const [hoveredPhase, setHoveredPhase] = useState(null);

//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   const getPhaseAnnotation = (phase) => {
//     const annotation = annotations.find(a => a.phase === phase);
//     if (!annotation) return null;
    
//     // Find the closest data point to our annotation timestamp
//     const annotationDate = parseDateTime(annotation.timestamp);
//     const closestDataPoint = timeData.reduce((prev, curr) => {
//       const prevDiff = Math.abs(parseDateTime(prev.label) - annotationDate);
//       const currDiff = Math.abs(parseDateTime(curr.label) - annotationDate);
//       return currDiff < prevDiff ? curr : prev;
//     }, timeData[0]);
    
//     return {
//       ...annotation,
//       timestamp: closestDataPoint?.label
//     };
//   };

//   console.log('Hovered Phase:', hoveredPhase);
//   console.log('Phase Annotation:', hoveredPhase ? getPhaseAnnotation(hoveredPhase) : null);

//   return (
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//               {hoveredPhase && getPhaseAnnotation(hoveredPhase) && (
//                 <ReferenceLine
//                   x={getPhaseAnnotation(hoveredPhase).timestamp}
//                   stroke="#FF0000"
//                   strokeWidth={2}
//                   label={{
//                     value: `Phase ${hoveredPhase}`,
//                     position: 'top',
//                     fill: '#FF0000',
//                     fontSize: 12
//                   }}
//                 />
//               )}
//               {/* Debug reference line */}
//               <ReferenceLine
//                 x="2025-01-28T18:00:00"
//                 stroke="#00FF00"
//                 label="Debug Line"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Activity Phases</h2>
        
//         {/* New Summary Box */}
//         <div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
//           {/* <h3 className="text-xl font-bold mb-4">Summary Overview</h3> */}
//           <p className="text-gray-700">
//             This analysis tracks the surge in public interest around DeepSeek's emergence 
//             in the AI landscape, from initial discovery through peak attention and subsequent 
//             market stabilization. The data reveals distinct phases of public engagement and 
//             market response.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(1)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 1</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-green-500 mr-2" />
//               <h3 className="text-m font-semibold">Initial Surge</h3>
//             </div>
//             <p>Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-27 12:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(2)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 2</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Peak Interest</h3>
//             </div>
//             <p>Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 18:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(3)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 3</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Decline Begins</h3>
//             </div>
//             <p>Interest wanes as market reactions stabilize and news cycle progresses.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 23:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(4)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 4</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Secondary Peak</h3>
//             </div>
//             <p>Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 19:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(5)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 5</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Continued Decline</h3>
//             </div>
//             <p>Downward trend persists as initial public attention subsides.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 12:00</p>
//           </div>
//         </div>
//       </div>

//       <WorldMapChart />
//     </div>
//   );
// }

















// import React, { useEffect, useState } from 'react';
// import { format, parseISO } from 'date-fns';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ReferenceLine,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge",
//     phase: 1
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak",
//     phase: 2
//   },
//   {
//     timestamp: "2025-01-29T17:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak",
//     phase: 4
//   },
//   {
//     timestamp: "2025-01-28T23:00:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline",
//     phase: 3
//   },
//   {
//     timestamp: "2025-01-29T20:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline",
//     phase: 5
//   }
// ];

// function parseDateTime(dateString) {
//   return parseISO(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);
//   const [hoveredPhase, setHoveredPhase] = useState(null);

//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   const getPhaseAnnotation = (phase) => {
//     const annotation = annotations.find(a => a.phase === phase);
//     if (!annotation) return null;
    
//     // Find the closest data point to our annotation timestamp
//     const annotationDate = parseDateTime(annotation.timestamp);
//     const closestDataPoint = timeData.reduce((prev, curr) => {
//       const prevDiff = Math.abs(parseDateTime(prev.label) - annotationDate);
//       const currDiff = Math.abs(parseDateTime(curr.label) - annotationDate);
//       return currDiff < prevDiff ? curr : prev;
//     }, timeData[0]);
    
//     return {
//       ...annotation,
//       timestamp: closestDataPoint?.label
//     };
//   };

//   console.log('Hovered Phase:', hoveredPhase);
//   console.log('Phase Annotation:', hoveredPhase ? getPhaseAnnotation(hoveredPhase) : null);

//   return (
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//               {hoveredPhase && getPhaseAnnotation(hoveredPhase) && (
//                 <ReferenceLine
//                   x={getPhaseAnnotation(hoveredPhase).timestamp}
//                   stroke="#FF0000"
//                   strokeWidth={2}
//                   label={{
//                     value: `Phase ${hoveredPhase}`,
//                     position: 'top',
//                     fill: '#FF0000',
//                     fontSize: 12
//                   }}
//                 />
//               )}
//               {/* Debug reference line */}
//               <ReferenceLine
//                 x="2025-01-28T18:00:00"
//                 stroke="#00FF00"
//                 label="Debug Line"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Activity Phases</h2>
        
//         {/* New Summary Box */}
//         <div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
//           {/* <h3 className="text-xl font-bold mb-4">Summary Overview</h3> */}
//           <p className="text-gray-700">
//             This analysis tracks the surge in public interest around DeepSeek's emergence 
//             in the AI landscape, from initial discovery through peak attention and subsequent 
//             market stabilization. The data reveals distinct phases of public engagement and 
//             market response.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(1)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 1</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-green-500 mr-2" />
//               <h3 className="text-m font-semibold">Initial Surge</h3>
//             </div>
//             <p>Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.</p>
//             {/* <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-27 12:00</p> */}
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(2)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 2</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Peak Interest</h3>
//             </div>
//             <p>Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.</p>
//             {/* <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 18:00</p> */}
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(3)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 3</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Decline Begins</h3>
//             </div>
//             <p>Interest wanes as market reactions stabilize and news cycle progresses.</p>
//             {/* <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 08:00</p> */}
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(4)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 4</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Secondary Peak</h3>
//             </div>
//             <p>Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.</p>
//             {/* <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 19:00</p> */}
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(5)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 5</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Continued Decline</h3>
//             </div>
//             <p>Downward trend persists as initial public attention subsides.</p>
//             {/* <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 12:00</p> */}
//           </div>
//         </div>
//       </div>

//       <WorldMapChart />
//     </div>
//   );
// }











// import React, { useEffect, useState } from 'react';
// import { format, parseISO } from 'date-fns';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ReferenceLine,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge",
//     phase: 1
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak",
//     phase: 2
//   },
//   {
//     timestamp: "2025-01-28T19:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak",
//     phase: 4
//   },
//   {
//     timestamp: "2025-01-30T08:00:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline",
//     phase: 3
//   },
//   {
//     timestamp: "2025-01-30T12:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline",
//     phase: 5
//   }
// ];

// function parseDateTime(dateString) {
//   return parseISO(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);
//   const [hoveredPhase, setHoveredPhase] = useState(null);

//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   const getPhaseAnnotation = (phase) => {
//     const annotation = annotations.find(a => a.phase === phase);
//     if (!annotation) return null;
    
//     // Find the closest data point to our annotation timestamp
//     const annotationDate = parseDateTime(annotation.timestamp);
//     const closestDataPoint = timeData.reduce((prev, curr) => {
//       const prevDiff = Math.abs(parseDateTime(prev.label) - annotationDate);
//       const currDiff = Math.abs(parseDateTime(curr.label) - annotationDate);
//       return currDiff < prevDiff ? curr : prev;
//     }, timeData[0]);
    
//     return {
//       ...annotation,
//       timestamp: closestDataPoint?.label
//     };
//   };

//   console.log('Hovered Phase:', hoveredPhase);
//   console.log('Phase Annotation:', hoveredPhase ? getPhaseAnnotation(hoveredPhase) : null);

//   return (
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//               {hoveredPhase && getPhaseAnnotation(hoveredPhase) && (
//                 <ReferenceLine
//                   x={getPhaseAnnotation(hoveredPhase).timestamp}
//                   stroke="#FF0000"
//                   strokeWidth={2}
//                   label={{
//                     value: `Phase ${hoveredPhase}`,
//                     position: 'top',
//                     fill: '#FF0000',
//                     fontSize: 12
//                   }}
//                 />
//               )}
//               {/* Debug reference line */}
//               <ReferenceLine
//                 x="2025-01-28T18:00:00"
//                 stroke="#00FF00"
//                 label="Debug Line"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Activity Phases</h2>
        
//         {/* New Summary Box */}
//         <div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
//           {/* <h3 className="text-xl font-bold mb-4">Summary Overview</h3> */}
//           <p className="text-gray-700">
//             This analysis tracks the surge in public interest around DeepSeek's emergence 
//             in the AI landscape, from initial discovery through peak attention and subsequent 
//             market stabilization<sup className="text-blue-600 hover:text-blue-800 cursor-pointer ml-0.5">[1]</sup>. The data reveals distinct phases of public engagement and 
//             market response.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(1)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 1</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-green-500 mr-2" />
//               <h3 className="text-m font-semibold">Initial Surge</h3>
//             </div>
//             <p>Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-27 12:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(2)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 2</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Peak Interest</h3>
//             </div>
//             <p>Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 18:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(3)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 3</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Decline Begins</h3>
//             </div>
//             <p>Interest wanes as market reactions stabilize and news cycle progresses.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 08:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(4)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 4</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Secondary Peak</h3>
//             </div>
//             <p>Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 19:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(5)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 5</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Continued Decline</h3>
//             </div>
//             <p>Downward trend persists as initial public attention subsides.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 12:00</p>
//           </div>
//         </div>
//       </div>

//       <WorldMapChart />
//     </div>
//   );
// }








// import React, { useEffect, useState } from 'react';
// import { format, parseISO } from 'date-fns';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ReferenceLine,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge",
//     phase: 1
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak",
//     phase: 2
//   },
//   {
//     timestamp: "2025-01-28T19:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak",
//     phase: 4
//   },
//   {
//     timestamp: "2025-01-30T08:00:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline",
//     phase: 3
//   },
//   {
//     timestamp: "2025-01-30T12:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline",
//     phase: 5
//   }
// ];

// function parseDateTime(dateString) {
//   return parseISO(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);
//   const [hoveredPhase, setHoveredPhase] = useState(null);

//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   const getPhaseAnnotation = (phase) => {
//     const annotation = annotations.find(a => a.phase === phase);
//     if (!annotation) return null;
    
//     // Find the closest data point to our annotation timestamp
//     const annotationDate = parseDateTime(annotation.timestamp);
//     const closestDataPoint = timeData.reduce((prev, curr) => {
//       const prevDiff = Math.abs(parseDateTime(prev.label) - annotationDate);
//       const currDiff = Math.abs(parseDateTime(curr.label) - annotationDate);
//       return currDiff < prevDiff ? curr : prev;
//     }, timeData[0]);
    
//     return {
//       ...annotation,
//       timestamp: closestDataPoint?.label
//     };
//   };

//   console.log('Hovered Phase:', hoveredPhase);
//   console.log('Phase Annotation:', hoveredPhase ? getPhaseAnnotation(hoveredPhase) : null);

//   return (
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//               {hoveredPhase && getPhaseAnnotation(hoveredPhase) && (
//                 <ReferenceLine
//                   x={getPhaseAnnotation(hoveredPhase).timestamp}
//                   stroke="#FF0000"
//                   strokeWidth={2}
//                   label={{
//                     value: `Phase ${hoveredPhase}`,
//                     position: 'top',
//                     fill: '#FF0000',
//                     fontSize: 12
//                   }}
//                 />
//               )}
//               {/* Debug reference line */}
//               <ReferenceLine
//                 x="2025-01-28T18:00:00"
//                 stroke="#00FF00"
//                 label="Debug Line"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Activity Phases</h2>
        
//         {/* New Summary Box */}
//         <div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
//           {/* <h3 className="text-xl font-bold mb-4">Summary Overview</h3> */}
//           <p className="text-gray-700">
//             This analysis tracks the surge in public interest around DeepSeek's emergence 
//             in the AI landscape, from initial discovery through peak attention and subsequent 
//             market stabilization<sup className="text-blue-600 hover:text-blue-800 cursor-pointer ml-0.5">[1]</sup>. The data reveals distinct phases of public engagement and 
//             market response.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(1)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 1</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-green-500 mr-2" />
//               <h3 className="text-m font-semibold">Initial Surge</h3>
//             </div>
//             <p>Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-27 12:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(2)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 2</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Peak Interest</h3>
//             </div>
//             <p>Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 18:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(3)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 3</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Decline Begins</h3>
//             </div>
//             <p>Interest wanes as market reactions stabilize and news cycle progresses.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 08:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(4)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 4</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Secondary Peak</h3>
//             </div>
//             <p>Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-28 19:00</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(5)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 5</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Continued Decline</h3>
//             </div>
//             <p>Downward trend persists as initial public attention subsides.</p>
//             <p className="text-gray-500 text-xs mt-2">Timestamp: 2025-01-30 12:00</p>
//           </div>
//         </div>
//       </div>

//       <WorldMapChart />
//     </div>
//   );
// }














// import React, { useEffect, useState } from 'react';
// import { format, parseISO } from 'date-fns';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// import Papa from 'papaparse';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ReferenceLine,
// } from 'recharts';

// // Import the map component
// import WorldMapChart from './WorldMapChart';

// const annotations = [
//   {
//     timestamp: "2025-01-27T12:00:00",
//     label: "Initial Surge",
//     description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
//     type: "surge",
//     phase: 1
//   },
//   {
//     timestamp: "2025-01-28T18:00:00",
//     label: "Peak Interest",
//     description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
//     type: "peak",
//     phase: 2
//   },
//   {
//     timestamp: "2025-01-29T17:00:00",
//     label: "Secondary Peak",
//     description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
//     type: "peak",
//     phase: 4
//   },
//   {
//     timestamp: "2025-01-28T23:00:00",
//     label: "Decline Begins",
//     description: "Interest wanes as market reactions stabilize and news cycle progresses.",
//     type: "decline",
//     phase: 3
//   },
//   {
//     timestamp: "2025-01-29T20:00:00",
//     label: "Continued Decline",
//     description: "Downward trend persists as initial public attention subsides.",
//     type: "decline",
//     phase: 5
//   }
// ];

// function parseDateTime(dateString) {
//   return parseISO(dateString);
// }

// export default function GoogleTrendsReconstructed() {
//   const [timeData, setTimeData] = useState([]);
//   const [hoveredPhase, setHoveredPhase] = useState(null);

//   useEffect(() => {
//     Papa.parse('/data/timeData.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const parsed = results.data
//           .filter(r => r.Time && r.DeepSeek)
//           .map(r => ({
//             label: r.Time,
//             value: Number(r.DeepSeek) || 0,
//             dateObj: parseDateTime(r.Time),
//           }))
//           .sort((a, b) => a.dateObj - b.dateObj);
//         setTimeData(parsed);
//       },
//     });
//   }, []);

//   const renderTimeTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     return (
//       <div className="bg-white border border-gray-300 p-2 rounded text-xs">
//         <div className="font-semibold">{label}</div>
//         <div>Interest: {payload[0].value}</div>
//       </div>
//     );
//   };

//   const getPhaseAnnotation = (phase) => {
//     const annotation = annotations.find(a => a.phase === phase);
//     if (!annotation) return null;
    
//     // Find the closest data point to our annotation timestamp
//     const annotationDate = parseDateTime(annotation.timestamp);
//     const closestDataPoint = timeData.reduce((prev, curr) => {
//       const prevDiff = Math.abs(parseDateTime(prev.label) - annotationDate);
//       const currDiff = Math.abs(parseDateTime(curr.label) - annotationDate);
//       return currDiff < prevDiff ? curr : prev;
//     }, timeData[0]);
    
//     return {
//       ...annotation,
//       timestamp: closestDataPoint?.label
//     };
//   };

//   console.log('Hovered Phase:', hoveredPhase);
//   console.log('Phase Annotation:', hoveredPhase ? getPhaseAnnotation(hoveredPhase) : null);

//   return (
//     <div className="bg-gray-200 rounded shadow p-4 space-y-8">
//       <h1 className="text-xl font-bold mb-4">Google Trends</h1>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
//         <div style={{ width: '100%', height: 300 }}>
//           <ResponsiveContainer>
//             <LineChart data={timeData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
//               <YAxis />
//               <Tooltip content={renderTimeTooltip} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//                 dot={false}
//               />
//               {hoveredPhase && getPhaseAnnotation(hoveredPhase) && (
//                 <ReferenceLine
//                   x={getPhaseAnnotation(hoveredPhase).timestamp}
//                   stroke="#FF0000"
//                   strokeWidth={2}
//                   label={{
//                     value: `Phase ${hoveredPhase}`,
//                     position: 'top',
//                     fill: '#FF0000',
//                     fontSize: 12
//                   }}
//                 />
//               )}
//               {/* Debug reference line */}
//               <ReferenceLine
//                 x="2025-01-28T18:00:00"
//                 stroke="#00FF00"
//                 label="Debug Line"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="bg-white rounded shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Activity Phases</h2>
        
//         {/* New Summary Box */}
//         <div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
//           <p className="text-gray-700">
//             This analysis tracks the surge in public interest around DeepSeek's emergence 
//             in the AI landscape, from initial discovery through peak attention and subsequent 
//             market stabilization. The data reveals distinct phases of public engagement and 
//             market response.{" "}
//             <span className="inline-flex items-center relative">
//               <a href="https://www.theverge.com/2025/1/27/24352801/deepseek-ai-chatbot-chatgpt-ios-app-store?utm_source=chatgpt.com" 
//                  target="_blank" 
//                  rel="noopener noreferrer" 
//                  className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors cursor-pointer group">
//                 THEVERGE.COM
//                 <span className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 -left-2 mt-8 whitespace-nowrap">
//                   theverge.com<br />
//                   China's DeepSeek AI is hitting Nvidia where it hurts
//                 </span>
//               </a>
//             </span>
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(1)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 1</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-green-500 mr-2" />
//               <h3 className="text-m font-semibold">Initial Surge</h3>
//             </div>
//             <p>Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(2)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 2</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Peak Interest</h3>
//             </div>
//             <p>Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(3)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 3</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Decline Begins</h3>
//             </div>
//             <p>Interest wanes as market reactions stabilize and news cycle progresses.</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(4)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 4</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
//               <h3 className="text-m font-semibold">Secondary Peak</h3>
//             </div>
//             <p>Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.</p>
//           </div>

//           <div 
//             className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//             onMouseEnter={() => setHoveredPhase(5)}
//             onMouseLeave={() => setHoveredPhase(null)}
//           >
//             <div className="flex items-center mb-2">
//               <h2 className="text-lg font-bold">Phase 5</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <ArrowDownCircle size={18} className="text-red-500 mr-2" />
//               <h3 className="text-m font-semibold">Continued Decline</h3>
//             </div>
//             <p>Downward trend persists as initial public attention subsides.</p>
//           </div>
//         </div>
//       </div>

//       <WorldMapChart />
//     </div>
//   );
// }




import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

import Papa from 'papaparse';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';

// Import the map component
import WorldMapChart from './WorldMapChart';

const annotations = [
  {
    timestamp: "2025-01-27T12:00:00",
    label: "Initial Surge",
    description: "Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.",
    type: "surge",
    phase: 1
  },
  {
    timestamp: "2025-01-28T18:00:00",
    label: "Peak Interest",
    description: "Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.",
    type: "peak",
    phase: 2
  },
  {
    timestamp: "2025-01-29T17:00:00",
    label: "Secondary Peak",
    description: "Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.",
    type: "peak",
    phase: 4
  },
  {
    timestamp: "2025-01-28T23:00:00",
    label: "Decline Begins",
    description: "Interest wanes as market reactions stabilize and news cycle progresses.",
    type: "decline",
    phase: 3
  },
  {
    timestamp: "2025-01-29T20:00:00",
    label: "Continued Decline",
    description: "Downward trend persists as initial public attention subsides.",
    type: "decline",
    phase: 5
  }
];

function parseDateTime(dateString) {
  return parseISO(dateString);
}

export default function GoogleTrendsReconstructed() {
  const [timeData, setTimeData] = useState([]);
  const [hoveredPhase, setHoveredPhase] = useState(null);

  useEffect(() => {
    Papa.parse('/data/timeData.csv', {
      download: true,
      header: true,
      complete: (results) => {
        const parsed = results.data
          .filter(r => r.Time && r.DeepSeek)
          .map(r => ({
            label: r.Time,
            value: Number(r.DeepSeek) || 0,
            dateObj: parseDateTime(r.Time),
          }))
          .sort((a, b) => a.dateObj - b.dateObj);
        setTimeData(parsed);
      },
    });
  }, []);

  const renderTimeTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    return (
      <div className="bg-white border border-gray-300 p-2 rounded text-xs">
        <div className="font-semibold">{label}</div>
        <div>Interest: {payload[0].value}</div>
      </div>
    );
  };

  const getPhaseAnnotation = (phase) => {
    const annotation = annotations.find(a => a.phase === phase);
    if (!annotation) return null;
    
    // Find the closest data point to our annotation timestamp
    const annotationDate = parseDateTime(annotation.timestamp);
    const closestDataPoint = timeData.reduce((prev, curr) => {
      const prevDiff = Math.abs(parseDateTime(prev.label) - annotationDate);
      const currDiff = Math.abs(parseDateTime(curr.label) - annotationDate);
      return currDiff < prevDiff ? curr : prev;
    }, timeData[0]);
    
    return {
      ...annotation,
      timestamp: closestDataPoint?.label
    };
  };

  console.log('Hovered Phase:', hoveredPhase);
  console.log('Phase Annotation:', hoveredPhase ? getPhaseAnnotation(hoveredPhase) : null);

  return (
    <div className="bg-gray-200 rounded shadow p-4 space-y-8">
      <h1 className="text-xl font-bold mb-4">Google Trends</h1>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time (7 days to 30 Jan 2025)</h2>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={timeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" tick={{ fontSize: 10 }} minTickGap={10} />
              <YAxis />
              <Tooltip content={renderTimeTooltip} />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2196F3"
                strokeWidth={2}
                dot={false}
              />
              {hoveredPhase && getPhaseAnnotation(hoveredPhase) && (
                <ReferenceLine
                  x={getPhaseAnnotation(hoveredPhase).timestamp}
                  stroke="#FF0000"
                  strokeWidth={2}
                  label={{
                    value: `Phase ${hoveredPhase}`,
                    position: 'top',
                    fill: '#FF0000',
                    fontSize: 12
                  }}
                />
              )}
              {/* Debug reference line */}
              <ReferenceLine
                x="2025-01-28T18:00:00"
                stroke="#00FF00"
                label="Debug Line"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Activity Phases</h2>
        
        {/* New Summary Box */}
        {/* <div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
              <p className="text-gray-700">
                This analysis tracks the surge in public interest around DeepSeek's emergence 
                in the AI landscape, from initial discovery through peak attention and subsequent 
                market stabilization. The data reveals distinct phases of public engagement and 
                market response.{" "}
                <span className="inline-flex items-center relative">
                  <a href="https://www.theverge.com/2025/1/27/24352801/deepseek-ai-chatbot-chatgpt-ios-app-store?utm_source=chatgpt.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors cursor-pointer group uppercase tracking-wider">
                    theverge.com
                    <span className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 -left-2 mt-8 whitespace-nowrap">
                      theverge.com<br />
                      China's DeepSeek AI is hitting Nvidia where it hurts
                    </span>
                  </a>
                </span>
              </p>
            </div>
    */}




 {/* New Summary Box */}
{/*  
 <div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
          <div className="text-gray-700 space-y-4">
            <p>
              In late January 2025, the release of DeepSeek's R1 model, an open-source AI reasoning system, garnered significant attention. The model's advanced capabilities and cost-effective development led to widespread media coverage and public interest. Notably, DeepSeek's AI assistant quickly became the most downloaded free app on the U.S. iOS App Store, surpassing established applications like ChatGPT.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.theverge.com/2025/1/27/24352801/deepseek-ai-chatbot-chatgpt-ios-app-store?utm_source=chatgpt.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors cursor-pointer group uppercase tracking-wider">
                  theverge.com
                  <span className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 -left-2 mt-8 whitespace-nowrap z-10">
                    theverge.com<br />
                    China's DeepSeek AI is hitting Nvidia where it hurts
                  </span>
                </a>
              </span>
            </p>

            <p>
              This surge in interest coincided with a substantial decline in major tech stocks. Companies such as Nvidia, Microsoft, and Alphabet experienced significant stock value decreases, attributed to concerns over DeepSeek's disruptive potential in the AI sector.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.ft.com/content/b98e4903-ac05-4462-8ad1-eda619b6a9c4" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors cursor-pointer group uppercase tracking-wider">
                  ft.com
                  <span className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 -left-2 mt-8 whitespace-nowrap z-10">
                    ft.com<br />
                    Tech stocks tumble as DeepSeek disrupts AI landscape
                  </span>
                </a>
              </span>
            </p>

            <p>
              Following these developments, industry leaders responded to DeepSeek's emergence. OpenAI's CEO, Sam Altman, pledged to expedite product releases and enhance model quality to maintain competitiveness. Meta's Chief AI Scientist, Yann LeCun, highlighted DeepSeek's success as evidence that open-source models can surpass proprietary ones.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.theguardian.com/commentisfree/2025/jan/28/deepseek-r1-ai-world-chinese-chatbot-tech-world-western" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors cursor-pointer group uppercase tracking-wider">
                  theguardian.com
                  <span className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 -left-2 mt-8 whitespace-nowrap z-10">
                    theguardian.com<br />
                    DeepSeek R1 sends shockwaves through tech world
                  </span>
                </a>
              </span>
            </p>

            <p>
              As the initial excitement subsided, public interest began to wane, and tech stocks showed signs of stabilization. The rapid rise and subsequent decline in attention underscore the volatile nature of the AI industry and the market's sensitivity to technological advancements.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://nymag.com/intelligencer/article/deepseek-r1-ai-panic-impact-commentary-analysis.html?utm_campaign=feed-part&utm_medium=social_acct" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors cursor-pointer group uppercase tracking-wider">
                  nymag.com
                  <span className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 -left-2 mt-8 whitespace-nowrap z-10">
                    nymag.com<br />
                    The DeepSeek R1 panic: Impact analysis
                  </span>
                </a>
              </span>
            </p>
          </div>
        </div> */}




{/* New Summary Box */}
{/* 
<div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
          <div className="text-gray-700 space-y-4">
            <p>
              In late January 2025, the release of DeepSeek's R1 model, an open-source AI reasoning system, garnered significant attention. The model's advanced capabilities and cost-effective development led to widespread media coverage and public interest. Notably, DeepSeek's AI assistant quickly became the most downloaded free app on the U.S. iOS App Store, surpassing established applications like ChatGPT.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.theverge.com/2025/1/27/24352801/deepseek-ai-chatbot-chatgpt-ios-app-store?utm_source=chatgpt.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  theverge.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-2 -left-2 mt-8 whitespace-nowrap z-10">
                    theverge.com<br />
                    China's DeepSeek AI is hitting Nvidia where it hurts
                  </span>
                </a>
              </span>
            </p>

            <p>
              This surge in interest coincided with a substantial decline in major tech stocks. Companies such as Nvidia, Microsoft, and Alphabet experienced significant stock value decreases, attributed to concerns over DeepSeek's disruptive potential in the AI sector.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.ft.com/content/b98e4903-ac05-4462-8ad1-eda619b6a9c4" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  ft.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-2 -left-2 mt-8 whitespace-nowrap z-10">
                    ft.com<br />
                    Tech stocks tumble as DeepSeek disrupts AI landscape
                  </span>
                </a>
              </span>
            </p>

            <p>
              Following these developments, industry leaders responded to DeepSeek's emergence. OpenAI's CEO, Sam Altman, pledged to expedite product releases and enhance model quality to maintain competitiveness. Meta's Chief AI Scientist, Yann LeCun, highlighted DeepSeek's success as evidence that open-source models can surpass proprietary ones.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.theguardian.com/commentisfree/2025/jan/28/deepseek-r1-ai-world-chinese-chatbot-tech-world-western" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  theguardian.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-2 -left-2 mt-8 whitespace-nowrap z-10">
                    theguardian.com<br />
                    DeepSeek R1 sends shockwaves through tech world
                  </span>
                </a>
              </span>
            </p>

            <p>
              As the initial excitement subsided, public interest began to wane, and tech stocks showed signs of stabilization. The rapid rise and subsequent decline in attention underscore the volatile nature of the AI industry and the market's sensitivity to technological advancements.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://nymag.com/intelligencer/article/deepseek-r1-ai-panic-impact-commentary-analysis.html?utm_campaign=feed-part&utm_medium=social_acct" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  nymag.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-2 -left-2 mt-8 whitespace-nowrap z-10">
                    nymag.com<br />
                    The DeepSeek R1 panic: Impact analysis
                  </span>
                </a>
              </span>
            </p>
          </div>
        </div>
 */}







{/* New Summary Box */}
{/* 
<div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
          <div className="text-gray-700 space-y-4">
            <p>
              In late January 2025, the release of DeepSeek's R1 model, an open-source AI reasoning system, garnered significant attention. The model's advanced capabilities and cost-effective development led to widespread media coverage and public interest. Notably, DeepSeek's AI assistant quickly became the most downloaded free app on the U.S. iOS App Store, surpassing established applications like ChatGPT.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.theverge.com/2025/1/27/24352801/deepseek-ai-chatbot-chatgpt-ios-app-store?utm_source=chatgpt.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  theverge.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded-md p-3 left-0 mt-2 whitespace-nowrap z-10 min-w-[300px] shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <img src="/api/placeholder/16/16" alt="The Verge" className="rounded-full" />
                      theverge.com
                    </div>
                    <div className="font-medium mb-1">China's DeepSeek AI is hitting Nvidia where it hurts</div>
                    <div className="text-gray-400 text-[10px]">27 january 2025</div>
                  </span>
                </a>
              </span>
            </p>

            <p>
              This surge in interest coincided with a substantial decline in major tech stocks. Companies such as Nvidia, Microsoft, and Alphabet experienced significant stock value decreases, attributed to concerns over DeepSeek's disruptive potential in the AI sector.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.ft.com/content/b98e4903-ac05-4462-8ad1-eda619b6a9c4" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  ft.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded-md p-3 left-0 mt-2 whitespace-nowrap z-10 min-w-[300px] shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <img src="/api/placeholder/16/16" alt="Financial Times" className="rounded-full" />
                      ft.com
                    </div>
                    <div className="font-medium mb-1">Tech stocks tumble as DeepSeek disrupts AI landscape</div>
                    <div className="text-gray-400 text-[10px]">28 january 2025</div>
                  </span>
                </a>
              </span>
            </p>

            <p>
              Following these developments, industry leaders responded to DeepSeek's emergence. OpenAI's CEO, Sam Altman, pledged to expedite product releases and enhance model quality to maintain competitiveness. Meta's Chief AI Scientist, Yann LeCun, highlighted DeepSeek's success as evidence that open-source models can surpass proprietary ones.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.theguardian.com/commentisfree/2025/jan/28/deepseek-r1-ai-world-chinese-chatbot-tech-world-western" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  theguardian.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded-md p-3 left-0 mt-2 whitespace-nowrap z-10 min-w-[300px] shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <img src="/api/placeholder/16/16" alt="The Guardian" className="rounded-full" />
                      theguardian.com
                    </div>
                    <div className="font-medium mb-1">DeepSeek R1 sends shockwaves through tech world</div>
                    <div className="text-gray-400 text-[10px]">28 january 2025</div>
                  </span>
                </a>
              </span>
            </p>

            <p>
              As the initial excitement subsided, public interest began to wane, and tech stocks showed signs of stabilization. The rapid rise and subsequent decline in attention underscore the volatile nature of the AI industry and the market's sensitivity to technological advancements.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://nymag.com/intelligencer/article/deepseek-r1-ai-panic-impact-commentary-analysis.html?utm_campaign=feed-part&utm_medium=social_acct" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  nymag.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded-md p-3 left-0 mt-2 whitespace-nowrap z-10 min-w-[300px] shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <img src="/api/placeholder/16/16" alt="NY Mag" className="rounded-full" />
                      nymag.com
                    </div>
                    <div className="font-medium mb-1">The DeepSeek R1 panic: Impact analysis</div>
                    <div className="text-gray-400 text-[10px]">30 january 2025</div>
                  </span>
                </a>
              </span>
            </p>
          </div>
        </div> */}






{/* New Summary Box */}

{/* 
<div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
          <div className="text-gray-700 space-y-4">
            <p>
              In late January 2025, the release of DeepSeek's R1 model, an open-source AI reasoning system, garnered significant attention. The model's advanced capabilities and cost-effective development led to widespread media coverage and public interest. Notably, DeepSeek's AI assistant quickly became the most downloaded free app on the U.S. iOS App Store, surpassing established applications like ChatGPT.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.theverge.com/2025/1/27/24352801/deepseek-ai-chatbot-chatgpt-ios-app-store?utm_source=chatgpt.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  theverge.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 whitespace-nowrap z-10 w-[320px] shadow-lg">
                    <div className="flex items-center gap-2">
                      <img src="/images/publications/theverge-icon.png" alt="The Verge" className="w-4 h-4 rounded-full" />
                      <span className="text-[13px] opacity-80">theverge.com</span>
                    </div>
                    <div className="font-medium text-[14px] mt-2">China's DeepSeek AI is hitting Nvidia where it hurts</div>
                    <div className="text-gray-400 text-[11px] mt-1">27 january 2025</div>
                  </span>
                </a>
              </span>
            </p>

            <p>
              This surge in interest coincided with a substantial decline in major tech stocks. Companies such as Nvidia, Microsoft, and Alphabet experienced significant stock value decreases, attributed to concerns over DeepSeek's disruptive potential in the AI sector.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.ft.com/content/b98e4903-ac05-4462-8ad1-eda619b6a9c4" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  ft.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 whitespace-nowrap z-10 w-[320px] shadow-lg">
                    <div className="flex items-center gap-2">
                      <img src="/images/publications/ft-icon.png" alt="Financial Times" className="w-4 h-4 rounded-full" />
                      <span className="text-[13px] opacity-80">ft.com</span>
                    </div>
                    <div className="font-medium text-[14px] mt-2">Tech stocks tumble as DeepSeek disrupts AI landscape</div>
                    <div className="text-gray-400 text-[11px] mt-1">28 january 2025</div>
                  </span>
                </a>
              </span>
            </p>

            <p>
              Following these developments, industry leaders responded to DeepSeek's emergence. OpenAI's CEO, Sam Altman, pledged to expedite product releases and enhance model quality to maintain competitiveness. Meta's Chief AI Scientist, Yann LeCun, highlighted DeepSeek's success as evidence that open-source models can surpass proprietary ones.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.theguardian.com/commentisfree/2025/jan/28/deepseek-r1-ai-world-chinese-chatbot-tech-world-western" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  theguardian.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 whitespace-nowrap z-10 w-[320px] shadow-lg">
                    <div className="flex items-center gap-2">
                      <img src="/images/publications/guardian-icon.png" alt="The Guardian" className="w-4 h-4 rounded-full" />
                      <span className="text-[13px] opacity-80">theguardian.com</span>
                    </div>
                    <div className="font-medium text-[14px] mt-2">DeepSeek R1 sends shockwaves through tech world</div>
                    <div className="text-gray-400 text-[11px] mt-1">28 january 2025</div>
                  </span>
                </a>
              </span>
            </p>

            <p>
              As the initial excitement subsided, public interest began to wane, and tech stocks showed signs of stabilization. The rapid rise and subsequent decline in attention underscore the volatile nature of the AI industry and the market's sensitivity to technological advancements.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://nymag.com/intelligencer/article/deepseek-r1-ai-panic-impact-commentary-analysis.html?utm_campaign=feed-part&utm_medium=social_acct" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  nymag.com
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 whitespace-nowrap z-10 w-[320px] shadow-lg">
                    <div className="flex items-center gap-2">
                      <img src="/images/publications/nymag-icon.png" alt="NY Mag" className="w-4 h-4 rounded-full" />
                      <span className="text-[13px] opacity-80">nymag.com</span>
                    </div>
                    <div className="font-medium text-[14px] mt-2">The DeepSeek R1 panic: Impact analysis</div>
                    <div className="text-gray-400 text-[11px] mt-1">30 january 2025</div>
                  </span>
                </a>
              </span>
            </p>
          </div>
        </div>

 */}






{/* New Summary Box */}
<div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
          <div className="text-gray-700 space-y-4">
            <p>
              In late January 2025, the release of DeepSeek's R1 model, an open-source AI reasoning system, garnered significant attention. The model's advanced capabilities and cost-effective development led to widespread media coverage and public interest. Notably, DeepSeek's AI assistant quickly became the most downloaded free app on the U.S. iOS App Store, surpassing established applications like ChatGPT.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.theverge.com/2025/1/27/24352801/deepseek-ai-chatbot-chatgpt-ios-app-store?utm_source=chatgpt.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  theverge.com
                  {/* <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 z-10 max-w-[280px] shadow-lg"> */}
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 z-10 w-[250px] shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5">
                        <img src="/images/publications/theverge-icon.png" alt="The Verge" className="w-full h-full rounded-full" />
                      </div>
                      <span className="text-[11px] opacity-80">theverge.com</span>
                    </div>
                    <div className="font-medium text-[11px] mt-2 break-words">China's Deepseek AI is hitting Nvidia where it hurts</div>
                    <div className="text-gray-400 text-[10px] mt-1">27 january 2025</div>
                  </span>
                </a>
              </span>
            </p>

            <p>
              This surge in interest coincided with a substantial decline in major tech stocks. Companies such as Nvidia, Microsoft, and Alphabet experienced significant stock value decreases, attributed to concerns over DeepSeek's disruptive potential in the AI sector.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.ft.com/content/b98e4903-ac05-4462-8ad1-eda619b6a9c4" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  ft.com
                  {/* <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 z-10 max-w-[280px] shadow-lg"> */}
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 z-10 w-[250px] shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5">
                        <img src="/images/publications/ft-icon.png" alt="Financial Times" className="w-full h-full rounded-full" />
                      </div>
                      <span className="text-[11px] opacity-80">ft.com</span>
                    </div>
                    <div className="font-medium text-[11px] mt-2 break-words">Tech stocks tumble as Deepseek disrupts AI landscape</div>
                    <div className="text-gray-400 text-[10px] mt-1">28 january 2025</div>
                  </span>
                </a>
              </span>
            </p>

            <p>
              Following these developments, industry leaders responded to DeepSeek's emergence. OpenAI's CEO, Sam Altman, pledged to expedite product releases and enhance model quality to maintain competitiveness. Meta's Chief AI Scientist, Yann LeCun, highlighted DeepSeek's success as evidence that open-source models can surpass proprietary ones.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://www.theguardian.com/commentisfree/2025/jan/28/deepseek-r1-ai-world-chinese-chatbot-tech-world-western" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  theguardian.com
                  {/* <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 z-10 max-w-[280px] shadow-lg"> */}
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 z-10 w-[250px] shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5">
                        <img src="/images/publications/guardian-icon.png" alt="The Guardian" className="w-full h-full rounded-full" />
                      </div>
                      <span className="text-[11px] opacity-80">theguardian.com</span>
                    </div>
                    <div className="font-medium text-[11px] mt-2 break-words">Deepseek R1 sends shockwaves through tech world</div>
                    <div className="text-gray-400 text-[10px] mt-1">28 january 2025</div>
                  </span>
                </a>
              </span>
            </p>

            <p>
              As the initial excitement subsided, public interest began to wane, and tech stocks showed signs of stabilization. The rapid rise and subsequent decline in attention underscore the volatile nature of the AI industry and the market's sensitivity to technological advancements.{" "}
              <span className="inline-flex items-center relative">
                <a href="https://nymag.com/intelligencer/article/deepseek-r1-ai-panic-impact-commentary-analysis.html?utm_campaign=feed-part&utm_medium=social_acct" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium bg-[#1a1a1a] text-[#e6e6e6] rounded-full hover:bg-[#333333] transition-colors cursor-pointer group uppercase tracking-wider">
                  nymag.com
                  {/* <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 z-10 max-w-[280px] shadow-lg"> */}
                  <span className="absolute invisible group-hover:visible bg-[#1a1a1a] text-[#e6e6e6] text-[11px] rounded p-3 left-0 mt-2 z-10 w-[250px] shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5">
                        <img src="/images/publications/nymag-icon.png" alt="NY Mag" className="w-full h-full rounded-full" />
                      </div>
                      <span className="text-[11px] opacity-80">nymag.com</span>
                    </div>
                    <div className="font-medium text-[11px] mt-2 break-words">The Deepseek R1 panic: Impact analysis</div>
                    <div className="text-gray-400 text-[10px] mt-1">30 january 2025</div>
                  </span>
                </a>
              </span>
            </p>
          </div>
        </div>















        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div 
            className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
            onMouseEnter={() => setHoveredPhase(1)}
            onMouseLeave={() => setHoveredPhase(null)}
          >
            <div className="flex items-center mb-2">
              <h2 className="text-lg font-bold">Phase 1</h2>
            </div>
            <div className="flex items-center mb-2">
              <ArrowUpCircle size={18} className="text-green-500 mr-2" />
              <h3 className="text-m font-semibold">Initial Surge</h3>
            </div>
            <p>Public attention began to rise notably, coinciding with media coverage of DeepSeek's R1 model surpassing ChatGPT on iOS App Store.</p>
          </div>

          <div 
            className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
            onMouseEnter={() => setHoveredPhase(2)}
            onMouseLeave={() => setHoveredPhase(null)}
          >
            <div className="flex items-center mb-2">
              <h2 className="text-lg font-bold">Phase 2</h2>
            </div>
            <div className="flex items-center mb-2">
              <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
              <h3 className="text-m font-semibold">Peak Interest</h3>
            </div>
            <p>Interest peaked as major tech stocks declined due to DeepSeek's disruptive potential.</p>
          </div>

          <div 
            className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
            onMouseEnter={() => setHoveredPhase(3)}
            onMouseLeave={() => setHoveredPhase(null)}
          >
            <div className="flex items-center mb-2">
              <h2 className="text-lg font-bold">Phase 3</h2>
            </div>
            <div className="flex items-center mb-2">
              <ArrowDownCircle size={18} className="text-red-500 mr-2" />
              <h3 className="text-m font-semibold">Decline Begins</h3>
            </div>
            <p>Interest wanes as market reactions stabilize and news cycle progresses.</p>
          </div>

          <div 
            className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
            onMouseEnter={() => setHoveredPhase(4)}
            onMouseLeave={() => setHoveredPhase(null)}
          >
            <div className="flex items-center mb-2">
              <h2 className="text-lg font-bold">Phase 4</h2>
            </div>
            <div className="flex items-center mb-2">
              <ArrowUpCircle size={18} className="text-yellow-500 mr-2" />
              <h3 className="text-m font-semibold">Secondary Peak</h3>
            </div>
            <p>Secondary peak following industry leader reactions, including OpenAI CEO's acknowledgment.</p>
          </div>

          <div 
            className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
            onMouseEnter={() => setHoveredPhase(5)}
            onMouseLeave={() => setHoveredPhase(null)}
          >
            <div className="flex items-center mb-2">
              <h2 className="text-lg font-bold">Phase 5</h2>
            </div>
            <div className="flex items-center mb-2">
              <ArrowDownCircle size={18} className="text-red-500 mr-2" />
              <h3 className="text-m font-semibold">Continued Decline</h3>
            </div>
            <p>Downward trend persists as initial public attention subsides.</p>
          </div>
        </div>
      </div>

      <WorldMapChart />
    </div>
  );
}

