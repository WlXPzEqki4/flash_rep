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











// src/components/sections/GoogleTrendsReconstructed.jsx
import React, { useEffect, useState } from 'react';
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
} from 'recharts';

// Import the map component
import WorldMapChart from './WorldMapChart';

// Simple date parser
function parseDateTime(dateString) {
  return new Date(dateString);
}

export default function GoogleTrendsReconstructed() {
  const [timeData, setTimeData] = useState([]);

  // Load CSV for time-series
  useEffect(() => {
    Papa.parse('/data/timeData.csv', {
      download: true,
      header: true,
      complete: (results) => {
        console.log('Parsed rows:', results.data);
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

  // Recharts tooltip
  const renderTimeTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    return (
      <div className="bg-white border border-gray-300 p-2 rounded text-xs">
        <div className="font-semibold">{label}</div>
        <div>Interest: {payload[0].value}</div>
      </div>
    );
  };

  return (
    // A light-grey container with a title at the top
    <div className="bg-gray-200 rounded shadow p-4 space-y-8">
      <h1 className="text-xl font-bold mb-4">Google Trends</h1>

      {/* Time-Series line chart in its own white box */}
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Google Trends: "Deepseek" Interest Over Time</h2>
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
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Map-based region chart below */}
      <WorldMapChart />
    </div>
  );
}
