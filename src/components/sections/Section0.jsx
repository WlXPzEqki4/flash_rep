// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import { 
//   LineChart, 
//   Line, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   Legend,
//   ResponsiveContainer 
// } from 'recharts';

// function Section0() {
//   const [stockData, setStockData] = useState({
//     AAPL: [],
//     GOOGL: [],
//     MSFT: []
//   });

//   // Generate simulated stock data
//   useEffect(() => {
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
      
//       // Generate 30 days of data
//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
        
//         // Simulate price movement
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice = currentPrice * (1 + change);
        
//         data.push({
//           date: date.toLocaleDateString(),
//           price: currentPrice.toFixed(2),
//           volume: Math.floor(Math.random() * 1000000)
//         });
//       }
//       return data;
//     };

//     setStockData({
//       AAPL: generateStockData(180, 0.02),  // Apple starting around $180
//       GOOGL: generateStockData(140, 0.015), // Google starting around $140
//       MSFT: generateStockData(370, 0.018)   // Microsoft starting around $370
//     });
//   }, []);

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-4 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           <p className="text-sm text-gray-600">
//             Price: ${Number(payload[0].value).toFixed(2)}
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   const renderStockChart = (symbol, data, color) => (
//     <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//       <h2 className="text-xl font-bold mb-4">{symbol} Stock Price</h2>
//       <div className="h-[400px]"> {/* Fixed height for consistent sizing */}
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             data={data}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//             <XAxis 
//               dataKey="date" 
//               tick={{ fontSize: 12 }}
//               interval="preserveStartEnd"
//             />
//             <YAxis 
//               domain={['auto', 'auto']}
//               tick={{ fontSize: 12 }}
//               tickFormatter={(value) => `$${value}`}
//             />
//             <Tooltip content={<CustomTooltip />} />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="price"
//               stroke={color}
//               strokeWidth={2}
//               dot={false}
//               activeDot={{ r: 6 }}
//               animationDuration={1500}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time stock market performance and analysis</p>
//       </div>

//       {/* Stock Charts Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {renderStockChart('AAPL', stockData.AAPL, '#2196F3')}
//         {renderStockChart('GOOGL', stockData.GOOGL, '#4CAF50')}
//         {renderStockChart('MSFT', stockData.MSFT, '#9C27B0')}
//       </div>
//     </div>
//   );
// }

// export default Section0;














// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import { 
//   LineChart, 
//   Line, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   Legend,
//   ResponsiveContainer 
// } from 'recharts';

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: [],   // S&P 500 ETF
//     MSFT: [],  // Microsoft
//     NVDA: []   // NVIDIA
//   });

//   // Simulated stock data generator
//   useEffect(() => {
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;
      
//       // Generate 30 days of data
//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
        
//         // Simulate price movement
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice = currentPrice * (1 + change);
//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);
        
//         data.push({
//           date: date.toLocaleDateString(),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1000000)
//         });
//       }

//       // Calculate metrics
//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10000000)
//         }
//       };
//     };

//     // Initialize with simulated data
//     setStockData({
//       SPY: generateStockData(475, 0.01),   // S&P 500 around $475
//       MSFT: generateStockData(390, 0.015), // Microsoft around $390
//       NVDA: generateStockData(550, 0.02)   // NVIDIA around $550
//     });

//     // Simulate periodic updates
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = lastPrice + change;
          
//           newData[symbol].metrics.currentPrice = parseFloat(newPrice.toFixed(2));
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(((newPrice - lastPrice) / lastPrice * 100).toFixed(2));
          
//           // Update the last data point
//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000); // Update every 2 seconds

//     return () => clearInterval(updateInterval);
//   }, []);

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-4 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           <p className="text-sm text-gray-600">
//             Price: ${Number(payload[0].value).toFixed(2)}
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   const MetricsCard = ({ metrics, symbol }) => {
//     if (!metrics) return null;
    
//     const isPositive = metrics.dayChange > 0;
    
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}{metrics.dayChange.toFixed(2)} 
//             ({isPositive ? '+' : ''}{metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data) return null;
    
//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis 
//                   dataKey="date" 
//                   tick={{ fontSize: 12 }}
//                   interval="preserveStartEnd"
//                 />
//                 <YAxis 
//                   domain={['auto', 'auto']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   animationDuration={500}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} symbol={symbol} />
//       </div>
//     );
//   };

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Stock Charts Grid */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>
//     </div>
//   );
// }

// export default Section0;










// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import { 
//   LineChart, 
//   Line, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine 
// } from 'recharts';

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });
  
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   const referenceDates = [
//     '1/20/2025',
//     '1/22/2025',
//     '1/24/2025',
//     '1/25/2025',
//     '1/27/2025'
//   ];

//   // Generate simulated stock data
//   useEffect(() => {
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;
      
//       // Generate 30 days of data
//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
        
//         // Simulate price movement
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice = currentPrice * (1 + change);
//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);
        
//         data.push({
//           date: date.toLocaleDateString(),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1000000)
//         });
//       }

//       // Calculate metrics
//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10000000)
//         }
//       };
//     };

//     // Initialize with simulated data
//     setStockData({
//       SPY: generateStockData(475, 0.01),   // S&P 500 around $475
//       MSFT: generateStockData(390, 0.015), // Microsoft around $390
//       NVDA: generateStockData(550, 0.02)   // NVIDIA around $550
//     });

//     // Simulate periodic updates
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = lastPrice + change;
          
//           newData[symbol].metrics.currentPrice = parseFloat(newPrice.toFixed(2));
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(((newPrice - lastPrice) / lastPrice * 100).toFixed(2));
          
//           // Update the last data point
//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000); // Update every 2 seconds

//     // Effect for animating reference lines in combined chart
//     let currentIndex = 0;
//     const refLineInterval = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refLineInterval);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refLineInterval);
//     };
//   }, []);

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-4 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, index) => (
//             <p key={index} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };






// //   const MetricsCard = ({ metrics, symbol }) => {
// //     if (!metrics) return null;
    
// //     const isPositive = metrics.dayChange > 0;
    
// //     return (
// //       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
// //         <div>
// //           <p className="text-sm text-gray-500">Current Price</p>
// //           <p className="text-lg font-bold">${metrics.currentPrice}</p>
// //         </div>
// //         <div>
// //           <p className="text-sm text-gray-500">Change</p>
// //           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
// //             {isPositive ? '+' : ''}{metrics.dayChange.toFixed(2)} 
// //             ({isPositive ? '+' : ''}{metrics.dayChangePercent.toFixed(2)}%)
// //           </p>
// //         </div>
// //         <div>
// //           <p className="text-sm text-gray-500">Day High</p>
// //           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
// //         </div>
// //         <div>
// //           <p className="text-sm text-gray-500">Day Low</p>
// //           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
// //         </div>
// //       </div>
// //     );
// //   };





// const MetricsCard = ({ metrics, symbol }) => {
//     // If metrics or dayChange is missing, return nothing (or a loading message).
//     if (!metrics || metrics.dayChange === undefined) {
//       return null;
//     }
  
//     const isPositive = metrics.dayChange > 0;
  
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p
//             className={`text-lg font-bold ${
//               isPositive ? 'text-green-500' : 'text-red-500'
//             }`}
//           >
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} (
//             {isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };
  






//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data) return null;
    
//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis 
//                   dataKey="date" 
//                   tick={{ fontSize: 12 }}
//                   interval="preserveStartEnd"
//                 />
//                 <YAxis 
//                   domain={['auto', 'auto']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <ReferenceLine 
//                   x="1/20/2025" 
//                   stroke="#666" 
//                   strokeDasharray="3 3"
//                   label={{ value: '1/20', position: 'top' }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   animationDuration={500}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} symbol={symbol} />
//       </div>
//     );
//   };

//   const renderCombinedChart = () => (
//     <div id="combined-chart" className="mx-auto w-1/2 mt-12 opacity-0 transform translate-y-10 transition-all duration-500" 
//          style={{ 
//            opacity: stockData.SPY.data.length > 0 ? 1 : 0,
//            transform: stockData.SPY.data.length > 0 ? 'translateY(0)' : 'translateY(2.5rem)'
//          }}>
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//         <div className="h-[400px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart
//               margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//               <XAxis 
//                 dataKey="date" 
//                 tick={{ fontSize: 12 }}
//               />
//               <YAxis 
//                 tick={{ fontSize: 12 }}
//                 tickFormatter={(value) => `$${value}`}
//               />
//               <Tooltip content={<CustomTooltip />} />
//               <Legend />
              
//               {/* Reference Lines */}
//               {referenceDates.map((date, index) => (
//                 showReferenceLine >= index && (
//                   <ReferenceLine 
//                     key={date}
//                     x={date}
//                     stroke="#666"
//                     strokeDasharray="3 3"
//                     label={{ 
//                       value: date.split('/')[1], // Show day only
//                       position: 'top',
//                       fontSize: 12
//                     }}
//                   />
//                 )
//               ))}

//               <Line
//                 type="monotone"
//                 dataKey="price"
//                 data={stockData.SPY.data}
//                 name="S&P 500"
//                 stroke="#2196F3"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="price"
//                 data={stockData.MSFT.data}
//                 name="MSFT"
//                 stroke="#4CAF50"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="price"
//                 data={stockData.NVDA.data}
//                 name="NVDA"
//                 stroke="#9C27B0"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Stock Charts Grid */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* Combined Chart */}
//       {renderCombinedChart()}
//     </div>
//   );
// }

// export default Section0;










// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // Controls the "stepwise" reveal of reference lines in the combined chart
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // The dates we want to mark with reference lines
//   const referenceDates = [
//     '1/20/2025',
//     '1/22/2025',
//     '1/24/2025',
//     '1/25/2025',
//     '1/27/2025'
//   ];

//   // Simulated stock data generation
//   useEffect(() => {
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       // Generate 30 days + current day = 31 points
//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);

//         // Simulate daily price movement
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice = currentPrice * (1 + change);

//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: date.toLocaleDateString(), // e.g. "1/28/2025"
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       // Last item in data array is the most recent price
//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     // Generate initial data for each stock
//     setStockData({
//       SPY: generateStockData(475, 0.01),   // S&P 500
//       MSFT: generateStockData(390, 0.015), // Microsoft
//       NVDA: generateStockData(550, 0.02)   // NVIDIA
//     });

//     // Simulate a small “live” update every 2 seconds
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };

//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           // Small +/- moves
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = lastPrice + change;

//           newData[symbol].metrics.currentPrice = parseFloat(newPrice.toFixed(2));
//           newData[symbol].metrics.dayChange = parseFloat(
//             (newPrice - lastPrice).toFixed(2)
//           );
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           // Also update the last data point’s price
//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Gradually reveal reference lines in the combined chart
//     let currentIndex = 0;
//     const refLineInterval = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refLineInterval);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refLineInterval);
//     };
//   }, []);

//   // Recharts custom tooltip for each single-stock chart
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, index) => (
//             <p key={index} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Metrics card for each individual stock
//   const MetricsCard = ({ metrics, symbol }) => {
//     // If the metrics haven’t been populated yet, skip rendering
//     if (!metrics || metrics.dayChange === undefined) {
//       return null;
//     }

//     const isPositive = metrics.dayChange > 0;

//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)}
//             ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Render a single stock's chart + metrics
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={stockInfo.data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis
//                   dataKey="date"
//                   tick={{ fontSize: 12 }}
//                   interval="preserveStartEnd"
//                 />
//                 <YAxis
//                   domain={['auto', 'auto']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 {/* Example: single reference line—only if you want one in each chart */}
//                 <ReferenceLine
//                   x="1/20/2025"
//                   stroke="#666"
//                   strokeDasharray="3 3"
//                   label={{ value: '1/20', position: 'top' }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   animationDuration={500}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} symbol={symbol} />
//       </div>
//     );
//   };

//   // Build a single combined data array so all lines share the same X-axis points
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) {
//       return [];
//     }
//     // We assume each has the same length & matching dates in the same order
//     // because our "generateStockData" loop is identical across stocks
//     return SPY.data.map((spyPoint, index) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[index].price,
//       NVDA: NVDA.data[index].price
//     }));
//   };

//   // Render one combined chart with all three lines
//   const renderCombinedChart = () => {
//     // Build the consolidated array for the chart
//     const combinedData = buildCombinedData();

//     // If there's no data yet, bail out
//     if (!combinedData.length) return null;

//     return (
//       <div
//         id="combined-chart"
//         className="mx-auto w-1/2 mt-12 opacity-0 transform translate-y-10 transition-all duration-500"
//         style={{
//           opacity: 1,
//           transform: 'translateY(0)'
//         }}
//       >
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//           <div className="h-[400px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={combinedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-white p-3 rounded shadow border border-gray-200">
//                           <p className="text-sm font-semibold">{label}</p>
//                           {payload.map((entry, idx) => (
//                             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                               {entry.name}: ${Number(entry.value).toFixed(2)}
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Legend />
//                 {/* Gradually shown reference lines */}
//                 {referenceDates.map((date, index) =>
//                   showReferenceLine >= index && (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       label={{
//                         value: date.split('/')[1], // Show just the day (e.g. "20" from "1/20/2025")
//                         position: 'top',
//                         fontSize: 12
//                       }}
//                     />
//                   )
//                 )}

//                 {/* Three lines, each pulling from different keys of combinedData */}
//                 <Line
//                   type="monotone"
//                   dataKey="SPY"
//                   name="S&P 500"
//                   stroke="#2196F3"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="MSFT"
//                   name="MSFT"
//                   stroke="#4CAF50"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="NVDA"
//                   name="NVDA"
//                   stroke="#9C27B0"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Individual Stock Charts in a responsive row (or column on small screens) */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* Combined Chart */}
//       {renderCombinedChart()}
//     </div>
//   );
// }

// export default Section0;






// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // Controls which reference lines have been revealed so far.
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // These dates will have reference lines.
//   const referenceDates = [
//     '1/20/2025',
//     '1/22/2025',
//     '1/24/2025',
//     '1/25/2025',
//     '1/27/2025'
//   ];

//   // Generate and update data.
//   useEffect(() => {
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       // Generate data for the last 30 days plus today = 31 data points.
//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);

//         // Simulate a daily volatility-based price change.
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);

//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: date.toLocaleDateString(), // e.g. "1/28/2025"
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     // Initialise with generated data for each symbol.
//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     // Update current price periodically to simulate "live" changes.
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           // Small day-to-day change
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = lastPrice + change;

//           newData[symbol].metrics.currentPrice = parseFloat(newPrice.toFixed(2));
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           // Update the last data point's price
//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Reveal each reference line in sequence, once per second.
//     let currentIndex = 0;
//     const refLineInterval = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refLineInterval);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refLineInterval);
//     };
//   }, []);

//   // Custom tooltip for single charts
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, index) => (
//             <p key={index} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Renders the metrics for one stock.
//   const MetricsCard = ({ metrics, symbol }) => {
//     if (!metrics || metrics.dayChange === undefined) {
//       return null;
//     }
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Render a single-stock chart (SPY, MSFT, or NVDA).
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={stockInfo.data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 {/* Domain auto-scales from lowest to highest price. */}
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />

//                 {/* Reference lines, shown in sequence based on showReferenceLine */}
//                 {referenceDates.map((date, idx) =>
//                   showReferenceLine >= idx && (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       label={{
//                         value: date.split('/')[1], // Just the day number
//                         position: 'top',
//                         fontSize: 12
//                       }}
//                     />
//                   )
//                 )}

//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   animationDuration={500}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} symbol={symbol} />
//       </div>
//     );
//   };

//   // Build one combined data array so all lines share the same X-axis points.
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     // If any dataset is missing, bail out
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];

//     // Assuming each .data has the same dates in the same order
//     return SPY.data.map((spyPoint, index) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[index].price,
//       NVDA: NVDA.data[index].price
//     }));
//   };

//   // Render the combined performance chart.
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       <div
//         id="combined-chart"
//         className="mx-auto w-1/2 mt-12 opacity-0 transform translate-y-10 transition-all duration-500"
//         style={{
//           opacity: 1,
//           transform: 'translateY(0)'
//         }}
//       >
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//           <div className="h-[400px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={combinedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 {/* Auto-scale to the min & max data points across all three stocks. */}
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-white p-3 rounded shadow border border-gray-200">
//                           <p className="text-sm font-semibold">{label}</p>
//                           {payload.map((entry, idx) => (
//                             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                               {entry.name}: ${Number(entry.value).toFixed(2)}
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Legend />

//                 {/* Reference lines for the combined chart, fading in over time. */}
//                 {referenceDates.map((date, index) =>
//                   showReferenceLine >= index && (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       label={{
//                         value: date.split('/')[1], // just the day number
//                         position: 'top',
//                         fontSize: 12
//                       }}
//                     />
//                   )
//                 )}

//                 {/* The three lines from our combined array keys: SPY, MSFT, NVDA */}
//                 <Line
//                   type="monotone"
//                   dataKey="SPY"
//                   name="S&P 500"
//                   stroke="#2196F3"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="MSFT"
//                   name="MSFT"
//                   stroke="#4CAF50"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="NVDA"
//                   name="NVDA"
//                   stroke="#9C27B0"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Individual stock charts in a responsive grid/row */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* Combined chart */}
//       {renderCombinedChart()}
//     </div>
//   );
// }

// export default Section0;








// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // Helper to consistently format dates as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // Controls which reference lines have been revealed so far
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // Reference lines in DD/MM/YYYY format
//   const referenceDates = [
//     '20/01/2025',
//     '22/01/2025',
//     '24/01/2025',
//     '25/01/2025',
//     '27/01/2025'
//   ];

//   useEffect(() => {
//     // Generate one stock's data over 31 days, in the DD/MM/YYYY format
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       // 30 days + "today" = 31 data points
//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);

//         // Simulate daily fluctuation
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);

//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           // Force UK format: DD/MM/YYYY
//           date: formatDateUK(date),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     // Initial data for each symbol
//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     // Simulate small price updates every 2 seconds
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           // Slight change
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = lastPrice + change;

//           newData[symbol].metrics.currentPrice = parseFloat(newPrice.toFixed(2));
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           // Update the latest data point
//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Reveal each reference line in sequence, once per second
//     let currentIndex = 0;
//     const refLineInterval = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refLineInterval);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refLineInterval);
//     };
//   }, []);

//   // Tooltip for single‐stock charts
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, index) => (
//             <p key={index} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Metrics block
//   const MetricsCard = ({ metrics, symbol }) => {
//     if (!metrics || metrics.dayChange === undefined) {
//       return null;
//     }
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p
//             className={`text-lg font-bold ${
//               isPositive ? 'text-green-500' : 'text-red-500'
//             }`}
//           >
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Renders a single stock's chart
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 {/* Auto-scale so it uses the min and max from the data */}
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />

//                 {/* Reference lines that fade in sequentially */}
//                 {referenceDates.map((date, idx) =>
//                   showReferenceLine >= idx && (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       label={{
//                         value: date.slice(0, 5), // e.g. "20/01"
//                         position: 'top',
//                         fontSize: 12
//                       }}
//                     />
//                   )
//                 )}

//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   animationDuration={500}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} symbol={symbol} />
//       </div>
//     );
//   };

//   // For the combined chart, unify all data sets into one array
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     // If any set is still empty, skip
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];

//     // We assume SPY.data etc. share the same 31 dates in matching order
//     return SPY.data.map((spyPoint, index) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[index].price,
//       NVDA: NVDA.data[index].price
//     }));
//   };

//   // Combined chart with all three lines
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       <div
//         id="combined-chart"
//         className="mx-auto w-1/2 mt-12 opacity-0 transform translate-y-10 transition-all duration-500"
//         style={{
//           opacity: 1,
//           transform: 'translateY(0)'
//         }}
//       >
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//           <div className="h-[400px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={combinedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-white p-3 rounded shadow border border-gray-200">
//                           <p className="text-sm font-semibold">{label}</p>
//                           {payload.map((entry, idx) => (
//                             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                               {entry.name}: ${Number(entry.value).toFixed(2)}
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Legend />

//                 {/* Reference lines fade in one by one */}
//                 {referenceDates.map((date, index) =>
//                   showReferenceLine >= index && (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       label={{
//                         value: date.slice(0, 5), // e.g. "20/01"
//                         position: 'top',
//                         fontSize: 12
//                       }}
//                     />
//                   )
//                 )}

//                 <Line
//                   type="monotone"
//                   dataKey="SPY"
//                   name="S&P 500"
//                   stroke="#2196F3"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="MSFT"
//                   name="MSFT"
//                   stroke="#4CAF50"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="NVDA"
//                   name="NVDA"
//                   stroke="#9C27B0"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Individual Stock Charts */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* Combined Chart */}
//       {renderCombinedChart()}
//     </div>
//   );
// }

// export default Section0;





// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // Helper: format dates as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // Controls how many reference lines are currently visible
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // List of reference dates in DD/MM/YYYY format
//   const referenceDates = [
//     '20/01/2025',
//     '22/01/2025',
//     '24/01/2025',
//     '25/01/2025',
//     '27/01/2025'
//   ];

//   useEffect(() => {
//     // Generate data for a single stock
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       // 31 data points (30 days + today)
//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);

//         // Random daily move
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);
//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: formatDateUK(date),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     // Initialise data
//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     // Small live updates every 2 seconds
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = parseFloat((lastPrice + change).toFixed(2));

//           newData[symbol].metrics.currentPrice = newPrice;
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           // Update the last data point
//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Reveal reference lines one by one
//     let currentIndex = 0;
//     const refLineInterval = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refLineInterval);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refLineInterval);
//     };
//   }, []);

//   // Single-stock tooltip
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, idx) => (
//             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Info cards under each chart
//   const MetricsCard = ({ metrics }) => {
//     if (!metrics || metrics.dayChange === undefined) return null;
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p
//             className={`text-lg font-bold ${
//               isPositive ? 'text-green-500' : 'text-red-500'
//             }`}
//           >
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Renders a single chart (SPY, MSFT, NVDA)
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />

//                 {/* Reference lines always at top, but fade in & get offset to avoid overlap */}
//                 {referenceDates.map((date, idx) => {
//                   // We'll vary the dy offset to separate lines
//                   // e.g. even lines => -10, odd lines => -25
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5), // e.g. "20/01"
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 {/* Disable line animation so we don’t re-draw everything each time */}
//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} />
//       </div>
//     );
//   };

//   // Combine data for the triple chart
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
//     return SPY.data.map((spyPoint, index) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[index].price,
//       NVDA: NVDA.data[index].price
//     }));
//   };

//   // Renders the combined chart
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       <div
//         id="combined-chart"
//         className="mx-auto w-1/2 mt-12 opacity-0 transform translate-y-10 transition-all duration-500"
//         style={{
//           opacity: 1,
//           transform: 'translateY(0)'
//         }}
//       >
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//           <div className="h-[400px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={combinedData}
//                 margin={{ top: 60, right: 30, left: 20, bottom: 20 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-white p-3 rounded shadow border border-gray-200">
//                           <p className="text-sm font-semibold">{label}</p>
//                           {payload.map((entry, idx) => (
//                             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                               {entry.name}: ${Number(entry.value).toFixed(2)}
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Legend />

//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5), // "20/01"
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="SPY"
//                   name="S&P 500"
//                   stroke="#2196F3"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="MSFT"
//                   name="MSFT"
//                   stroke="#4CAF50"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="NVDA"
//                   name="NVDA"
//                   stroke="#9C27B0"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Individual charts in a responsive row or column */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* Combined chart */}
//       {renderCombinedChart()}
//     </div>
//   );
// }

// export default Section0;












// // src/components/sections/Section0.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // Helper: format date as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // Show how many reference lines have appeared so far
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // List of reference dates (DD/MM/YYYY). They’ll fade in one by one.
//   const referenceDates = [
//     '20/01/2025',
//     '22/01/2025',
//     '24/01/2025',
//     '25/01/2025',
//     '27/01/2025'
//   ];

//   // We will observe the combined chart so we know when to animate the note cards.
//   const combinedChartRef = useRef(null);
//   const [cardsVisible, setCardsVisible] = useState(false);

//   // Example placeholder data for the five note cards:
//   const notesData = [
//     {
//       date: '20/01/2025',
//       heading: 'Placeholder Heading 1',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       date: '22/01/2025',
//       heading: 'Placeholder Heading 2',
//       content: 'Proin aliquet pharetra urna, eget placerat ex pellentesque nec.'
//     },
//     {
//       date: '24/01/2025',
//       heading: 'Placeholder Heading 3',
//       content: 'Sed lacinia nunc non nisl feugiat, sed dapibus elit tempus.'
//     },
//     {
//       date: '25/01/2025',
//       heading: 'Placeholder Heading 4',
//       content: 'Nullam sit amet diam commodo, malesuada sem at, lobortis erat.'
//     },
//     {
//       date: '27/01/2025',
//       heading: 'Placeholder Heading 5',
//       content: 'Etiam tincidunt quam vel metus porta, eget venenatis nulla cursus.'
//     }
//   ];

//   useEffect(() => {
//     // Generate data for each stock
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       // 31 data points
//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);

//         // Simulate daily movement
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);
//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: formatDateUK(date), // e.g. 20/01/2025
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     // Initialise all stocks
//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     // Small live updates
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = parseFloat((lastPrice + change).toFixed(2));

//           newData[symbol].metrics.currentPrice = newPrice;
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           // Update the last data item
//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Reveal reference lines one at a time
//     let currentIndex = 0;
//     const refLineInterval = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refLineInterval);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refLineInterval);
//     };
//   }, []);

//   // Once the combined chart is in view, animate in the note cards from the right.
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setCardsVisible(true);
//             // Disconnect so it only happens once
//             observer.disconnect();
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (combinedChartRef.current) {
//       observer.observe(combinedChartRef.current);
//     }
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   // Custom tooltip for single‐stock charts
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, idx) => (
//             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Info card below each stock chart
//   const MetricsCard = ({ metrics }) => {
//     if (!metrics || metrics.dayChange === undefined) return null;
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Single chart
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />

//                 {/* Reference lines fade in and labels are offset to avoid overlap */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5),
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} />
//       </div>
//     );
//   };

//   // Combine data for the triple chart
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
//     return SPY.data.map((spyPoint, index) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[index].price,
//       NVDA: NVDA.data[index].price
//     }));
//   };

//   // Combined chart
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       <div
//         id="combined-chart"
//         ref={combinedChartRef}
//         className="opacity-0 transform translate-y-10 transition-all duration-500"
//         style={{
//           opacity: 1,
//           transform: 'translateY(0)'
//         }}
//       >
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//           <div className="h-[400px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={combinedData}
//                 margin={{ top: 60, right: 30, left: 20, bottom: 20 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-white p-3 rounded shadow border border-gray-200">
//                           <p className="text-sm font-semibold">{label}</p>
//                           {payload.map((entry, idx) => (
//                             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                               {entry.name}: ${Number(entry.value).toFixed(2)}
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Legend />

//                 {/* Reference lines fade in, label at top, offset up/down */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5),
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="SPY"
//                   name="S&P 500"
//                   stroke="#2196F3"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="MSFT"
//                   name="MSFT"
//                   stroke="#4CAF50"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="NVDA"
//                   name="NVDA"
//                   stroke="#9C27B0"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Render five note cards on the right
//   const renderNoteCards = () => {
//     return (
//       <div className="flex flex-col gap-4 w-full lg:w-[300px] xl:w-[350px]">
//         {notesData.map((note, idx) => (
//           <div
//             key={idx}
//             className={`
//               bg-white rounded-lg shadow p-4
//               transform transition-all duration-700
//               ${cardsVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
//             `}
//             style={{ transitionDelay: `${0.1 * idx}s` }} // small stagger if you like
//           >
//             <h3 className="text-sm text-gray-400 mb-1">{note.date}</h3>
//             <h4 className="text-md font-semibold mb-2">{note.heading}</h4>
//             <p className="text-sm text-gray-600">{note.content}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Row of individual stock charts */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* Combined chart + note cards side by side */}
//       <div className="flex flex-col lg:flex-row items-start gap-6">
//         {/* Left half: combined chart (fixed width or flex-1) */}
//         <div className="w-full lg:w-1/2">{renderCombinedChart()}</div>

//         {/* Right half: stack of 5 note cards */}
//         {renderNoteCards()}
//       </div>
//     </div>
//   );
// }

// export default Section0;









// // src/components/sections/Section0.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // Helper to format date as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   const [showReferenceLine, setShowReferenceLine] = useState(0);
//   const referenceDates = ['20/01/2025', '22/01/2025', '24/01/2025', '25/01/2025', '27/01/2025'];

//   // Observe the combined chart to animate note cards
//   const combinedChartRef = useRef(null);
//   const [cardsVisible, setCardsVisible] = useState(false);

//   // Example placeholder data for your five “note” cards
//   const notesData = [
//     {
//       date: '20/01/2025',
//       heading: 'Placeholder Heading 1',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       date: '22/01/2025',
//       heading: 'Placeholder Heading 2',
//       content: 'Proin aliquet pharetra urna, eget placerat ex pellentesque nec.'
//     },
//     {
//       date: '24/01/2025',
//       heading: 'Placeholder Heading 3',
//       content: 'Sed lacinia nunc non nisl feugiat, sed dapibus elit tempus.'
//     },
//     {
//       date: '25/01/2025',
//       heading: 'Placeholder Heading 4',
//       content: 'Nullam sit amet diam commodo, malesuada sem at, lobortis erat.'
//     },
//     {
//       date: '27/01/2025',
//       heading: 'Placeholder Heading 5',
//       content: 'Etiam tincidunt quam vel metus porta, eget venenatis nulla cursus.'
//     }
//   ];

//   useEffect(() => {
//     // 1) Generate data for each symbol
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);
//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: formatDateUK(date),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     // 2) Simulate live updates
//     const updateInterval = setInterval(() => {
//       setStockData(prev => {
//         const newData = { ...prev };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = parseFloat((lastPrice + change).toFixed(2));

//           newData[symbol].metrics.currentPrice = newPrice;
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // 3) Reveal reference lines in sequence
//     let currentIndex = 0;
//     const refInterval = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refInterval);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refInterval);
//     };
//   }, []);

//   // Intersection observer to show note cards
//   useEffect(() => {
//     // If there's no element to observe, skip
//     if (!combinedChartRef.current) return;

//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             // Chart scrolled into view => show the cards
//             setCardsVisible(true);
//             // Unobserve so it won't toggle off again
//             observer.disconnect();
//           }
//         });
//       },
//       {
//         // "rootMargin" shifts the "trigger point" upward:
//         // e.g. "0px 0px -20% 0px" means the bottom 20% of the viewport 
//         // must pass the element before counting as intersection.
//         // Tweak to suit your layout
//         rootMargin: '0px 0px -20% 0px',
//         threshold: 0
//       }
//     );

//     observer.observe(combinedChartRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Single‐stock chart tooltip
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, idx) => (
//             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Metrics card under each single chart
//   const MetricsCard = ({ metrics }) => {
//     if (!metrics || metrics.dayChange === undefined) return null;
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Renders a single stock chart
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />

//                 {/* Reference lines fade in with partial overlap offset */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5), // e.g. "20/01"
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} />
//       </div>
//     );
//   };

//   // Build combined data for the triple chart
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
//     return SPY.data.map((spyPoint, index) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[index].price,
//       NVDA: NVDA.data[index].price
//     }));
//   };

//   // Combined chart
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       <div
//         id="combined-chart"
//         ref={combinedChartRef}
//         // Extra top padding so you must scroll to see it
//         className="mt-32" 
//       >
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//           <div className="h-[400px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={combinedData} margin={{ top: 60, right: 30, left: 20, bottom: 20 }}>
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-white p-3 rounded shadow border border-gray-200">
//                           <p className="text-sm font-semibold">{label}</p>
//                           {payload.map((entry, idx) => (
//                             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                               {entry.name}: ${Number(entry.value).toFixed(2)}
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Legend />

//                 {/* Fade-in reference lines, top labels offset up or further up */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5),
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="SPY"
//                   name="S&P 500"
//                   stroke="#2196F3"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="MSFT"
//                   name="MSFT"
//                   stroke="#4CAF50"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="NVDA"
//                   name="NVDA"
//                   stroke="#9C27B0"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Five note cards on the right
//   const renderNoteCards = () => (
//     <div className="flex flex-col gap-4 w-full lg:w-[300px] xl:w-[350px]">
//       {notesData.map((note, idx) => (
//         <div
//           key={idx}
//           className={`
//             bg-white rounded-lg shadow p-4
//             transform transition-all duration-700
//             ${cardsVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
//           `}
//           style={{ transitionDelay: `${0.1 * idx}s` }}
//         >
//           <h3 className="text-sm text-gray-400 mb-1">{note.date}</h3>
//           <h4 className="text-md font-semibold mb-2">{note.heading}</h4>
//           <p className="text-sm text-gray-600">{note.content}</p>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Row of individual stock charts */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* Combined chart + note cards side by side */}
//       <div className="flex flex-col lg:flex-row items-start gap-6">
//         {/* Left: combined chart (extra top margin forces scrolling) */}
//         <div className="w-full lg:w-1/2">
//           {renderCombinedChart()}
//         </div>

//         {/* Right: the stack of note cards */}
//         {renderNoteCards()}
//       </div>
//     </div>
//   );
// }

// export default Section0;



// // src/components/sections/Section0.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // Format date as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // How many reference lines are shown so far
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // IntersectionObserver for the combined chart
//   const combinedChartRef = useRef(null);
//   const [cardsVisible, setCardsVisible] = useState(false);

//   const referenceDates = [
//     '20/01/2025',
//     '22/01/2025',
//     '24/01/2025',
//     '25/01/2025',
//     '27/01/2025'
//   ];

//   // Example notes data for the 5 stacked cards
//   const notesData = [
//     {
//       date: '20/01/2025',
//       heading: 'Placeholder Heading 1',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       date: '22/01/2025',
//       heading: 'Placeholder Heading 2',
//       content: 'Proin aliquet pharetra urna, eget placerat ex pellentesque nec.'
//     },
//     {
//       date: '24/01/2025',
//       heading: 'Placeholder Heading 3',
//       content: 'Sed lacinia nunc non nisl feugiat, sed dapibus elit tempus.'
//     },
//     {
//       date: '25/01/2025',
//       heading: 'Placeholder Heading 4',
//       content: 'Nullam sit amet diam commodo, malesuada sem at, lobortis erat.'
//     },
//     {
//       date: '27/01/2025',
//       heading: 'Placeholder Heading 5',
//       content: 'Etiam tincidunt quam vel metus porta, eget venenatis nulla cursus.'
//     }
//   ];

//   // Generate initial stock data + start live updates + reference line reveal
//   useEffect(() => {
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);

//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: formatDateUK(date),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = parseFloat((lastPrice + change).toFixed(2));

//           newData[symbol].metrics.currentPrice = newPrice;
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           // Update last data point
//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Show reference lines in sequence
//     let currentIndex = 0;
//     const refTimer = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refTimer);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refTimer);
//     };
//   }, []);

//   // IntersectionObserver to slide in the note cards from right
//   useEffect(() => {
//     if (!combinedChartRef.current) return;

//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setCardsVisible(true);
//             observer.disconnect();
//           }
//         });
//       },
//       {
//         // Adjust rootMargin or threshold if needed
//         rootMargin: '0px 0px -20% 0px',
//         threshold: 0
//       }
//     );

//     observer.observe(combinedChartRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Single-stock chart tooltip
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, idx) => (
//             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Info card under each single-stock chart
//   const MetricsCard = ({ metrics }) => {
//     if (!metrics || metrics.dayChange === undefined) return null;
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Single-stock chart
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;
//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />

//                 {/* Reference lines fade in, label offset for even/odd */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5),
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} />
//       </div>
//     );
//   };

//   // Build combined dataset
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
//     return SPY.data.map((spyPoint, i) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[i].price,
//       NVDA: NVDA.data[i].price
//     }));
//   };

//   // Combined chart
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       <div ref={combinedChartRef}>
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//           <div className="h-[400px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={combinedData} margin={{ top: 60, right: 30, left: 20, bottom: 20 }}>
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-white p-3 rounded shadow border border-gray-200">
//                           <p className="text-sm font-semibold">{label}</p>
//                           {payload.map((entry, idx) => (
//                             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                               {entry.name}: ${Number(entry.value).toFixed(2)}
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Legend />

//                 {/* Fade-in reference lines */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5),
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="SPY"
//                   name="S&P 500"
//                   stroke="#2196F3"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="MSFT"
//                   name="MSFT"
//                   stroke="#4CAF50"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="NVDA"
//                   name="NVDA"
//                   stroke="#9C27B0"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Five note cards
//   const renderNoteCards = () => (
//     <div className="flex flex-col gap-4">
//       {notesData.map((note, idx) => (
//         <div
//           key={idx}
//           className={`
//             bg-white rounded-lg shadow p-4
//             transform transition-all duration-700
//             ${cardsVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
//           `}
//           style={{ transitionDelay: `${0.1 * idx}s` }}
//         >
//           <h3 className="text-sm text-gray-400 mb-1">{note.date}</h3>
//           <h4 className="text-md font-semibold mb-2">{note.heading}</h4>
//           <p className="text-sm text-gray-600">{note.content}</p>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Top row: 3 single-stock charts */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* 
//         Combined chart + 5 cards side by side in a forced 12-column grid:
//         - Chart in col-span-7
//         - Cards in col-span-5
//       */}
//       <div className="grid grid-cols-12 gap-6">
//         {/* Left side: col-span-7 for the combined chart */}
//         <div className="col-span-12 md:col-span-7">
//           {renderCombinedChart()}
//         </div>

//         {/* Right side: col-span-5 for the stacked note cards */}
//         <div className="col-span-12 md:col-span-5">
//           {renderNoteCards()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section0;









// // src/components/sections/Section0.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // Format date as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // How many reference lines are shown so far
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // IntersectionObserver for the combined chart
//   const combinedChartRef = useRef(null);
//   const [cardsVisible, setCardsVisible] = useState(false);

//   const referenceDates = [
//     '20/01/2025',
//     '22/01/2025',
//     '24/01/2025',
//     '25/01/2025',
//     '27/01/2025'
//   ];

//   // Example notes data for the 5 stacked cards
//   const notesData = [
//     {
//       date: '20/01/2025',
//       heading: 'Placeholder Heading 1',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       date: '22/01/2025',
//       heading: 'Placeholder Heading 2',
//       content: 'Proin aliquet pharetra urna, eget placerat ex pellentesque nec.'
//     },
//     {
//       date: '24/01/2025',
//       heading: 'Placeholder Heading 3',
//       content: 'Sed lacinia nunc non nisl feugiat, sed dapibus elit tempus.'
//     },
//     {
//       date: '25/01/2025',
//       heading: 'Placeholder Heading 4',
//       content: 'Nullam sit amet diam commodo, malesuada sem at, lobortis erat.'
//     },
//     {
//       date: '27/01/2025',
//       heading: 'Placeholder Heading 5',
//       content: 'Etiam tincidunt quam vel metus porta, eget venenatis nulla cursus.'
//     }
//   ];

//   // Generate initial stock data + start live updates + reference line reveal
//   useEffect(() => {
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);

//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: formatDateUK(date),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = parseFloat((lastPrice + change).toFixed(2));

//           newData[symbol].metrics.currentPrice = newPrice;
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           // Update last data point
//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Show reference lines in sequence
//     let currentIndex = 0;
//     const refTimer = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refTimer);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refTimer);
//     };
//   }, []);

//   // IntersectionObserver to slide in the note cards from right
//   useEffect(() => {
//     if (!combinedChartRef.current) return;

//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setCardsVisible(true);
//             observer.disconnect();
//           }
//         });
//       },
//       {
//         // Adjust rootMargin or threshold if needed
//         rootMargin: '0px 0px -20% 0px',
//         threshold: 0
//       }
//     );

//     observer.observe(combinedChartRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Single-stock chart tooltip
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, idx) => (
//             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Info card under each single-stock chart
//   const MetricsCard = ({ metrics }) => {
//     if (!metrics || metrics.dayChange === undefined) return null;
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Single-stock chart
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;
//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />

//                 {/* Reference lines fade in, label offset for even/odd */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5),
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} />
//       </div>
//     );
//   };

//   // Build combined dataset
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
//     return SPY.data.map((spyPoint, i) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[i].price,
//       NVDA: NVDA.data[i].price
//     }));
//   };

//   // Combined chart
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       <div ref={combinedChartRef}>
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//           <div className="h-[400px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={combinedData} margin={{ top: 60, right: 30, left: 20, bottom: 20 }}>
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-white p-3 rounded shadow border border-gray-200">
//                           <p className="text-sm font-semibold">{label}</p>
//                           {payload.map((entry, idx) => (
//                             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                               {entry.name}: ${Number(entry.value).toFixed(2)}
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Legend />

//                 {/* Fade-in reference lines */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5),
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="SPY"
//                   name="S&P 500"
//                   stroke="#2196F3"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="MSFT"
//                   name="MSFT"
//                   stroke="#4CAF50"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="NVDA"
//                   name="NVDA"
//                   stroke="#9C27B0"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Five note cards
//   const renderNoteCards = () => (
//     <div className="flex flex-col gap-4">
//       {notesData.map((note, idx) => (
//         <div
//           key={idx}
//           className={`
//             bg-white rounded-lg shadow p-4
//             transform transition-all duration-700
//             ${cardsVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
//           `}
//           style={{ transitionDelay: `${0.1 * idx}s` }}
//         >
//           <h3 className="text-sm text-gray-400 mb-1">{note.date}</h3>
//           <h4 className="text-md font-semibold mb-2">{note.heading}</h4>
//           <p className="text-sm text-gray-600">{note.content}</p>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Top row: 3 single-stock charts */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* 
//         Combined chart + 5 cards side by side in a forced 12-column grid:
//         - Chart in col-span-7
//         - Cards in col-span-5
//       */}
//       <div className="grid grid-cols-12 gap-6">
//         {/* Left side: col-span-7 for the combined chart */}
//         <div className="col-span-12 md:col-span-7">
//           {renderCombinedChart()}
//         </div>

//         {/* Right side: col-span-5 for the stacked note cards */}
//         <div className="col-span-12 md:col-span-5">
//           {renderNoteCards()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section0;







// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // Helper: format dates as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // How many reference lines have been revealed so far
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // Reference lines for each date
//   const referenceDates = [
//     '20/01/2025',
//     '22/01/2025',
//     '24/01/2025',
//     '25/01/2025',
//     '27/01/2025'
//   ];

//   // Example data for the five "smaller cards"
//   const notesData = [
//     {
//       date: '20/01/2025',
//       heading: 'Placeholder Heading 1',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       date: '22/01/2025',
//       heading: 'Placeholder Heading 2',
//       content: 'Proin aliquet pharetra urna, eget placerat ex pellentesque nec.'
//     },
//     {
//       date: '24/01/2025',
//       heading: 'Placeholder Heading 3',
//       content: 'Sed lacinia nunc non nisl feugiat, sed dapibus elit tempus.'
//     },
//     {
//       date: '25/01/2025',
//       heading: 'Placeholder Heading 4',
//       content: 'Nullam sit amet diam commodo, malesuada sem at, lobortis erat.'
//     },
//     {
//       date: '27/01/2025',
//       heading: 'Placeholder Heading 5',
//       content: 'Etiam tincidunt quam vel metus porta, eget venenatis nulla cursus.'
//     }
//   ];

//   // Set up stock data, live updates, and reference line fade‐in
//   useEffect(() => {
//     // Generate dummy data for one stock
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);

//         // Price movement
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);

//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: formatDateUK(date),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     // Initialise data for each symbol
//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     // Simulate a small "live" update
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = parseFloat((lastPrice + change).toFixed(2));

//           newData[symbol].metrics.currentPrice = newPrice;
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           // Update the final data point
//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Reveal reference lines in sequence
//     let currentIndex = 0;
//     const refTimer = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refTimer);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refTimer);
//     };
//   }, []);

//   // Tooltip for single charts
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, idx) => (
//             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Basic metrics card
//   const MetricsCard = ({ metrics }) => {
//     if (!metrics || metrics.dayChange === undefined) return null;
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Single chart (SPY, MSFT, NVDA)
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={stockInfo.data} margin={{ top: 60, right: 10, left: 10, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(value) => `$${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />
//                 {/* Reference lines fade in sequentially */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5),
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} />
//       </div>
//     );
//   };

//   // Build combined data
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
//     return SPY.data.map((spyPoint, i) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[i].price,
//       NVDA: NVDA.data[i].price
//     }));
//   };

//   // Combined chart
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//         <div className="h-[400px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={combinedData} margin={{ top: 60, right: 30, left: 20, bottom: 20 }}>
//               <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//               <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//               <YAxis
//                 domain={['dataMin', 'dataMax']}
//                 tick={{ fontSize: 12 }}
//                 tickFormatter={(val) => `$${val}`}
//               />
//               <Tooltip
//                 content={({ active, payload, label }) => {
//                   if (active && payload && payload.length) {
//                     return (
//                       <div className="bg-white p-3 rounded shadow border border-gray-200">
//                         <p className="text-sm font-semibold">{label}</p>
//                         {payload.map((entry, idx) => (
//                           <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                             {entry.name}: ${Number(entry.value).toFixed(2)}
//                           </p>
//                         ))}
//                       </div>
//                     );
//                   }
//                   return null;
//                 }}
//               />
//               <Legend />

//               {/* Reference lines fade in, label at top with offset */}
//               {referenceDates.map((date, idx) => {
//                 const isEven = idx % 2 === 0;
//                 return (
//                   <ReferenceLine
//                     key={date}
//                     x={date}
//                     stroke="#666"
//                     strokeDasharray="3 3"
//                     style={{
//                       opacity: showReferenceLine >= idx ? 1 : 0,
//                       transition: 'opacity 0.6s ease-in'
//                     }}
//                     label={{
//                       value: date.slice(0, 5),
//                       position: 'top',
//                       fontSize: 12,
//                       dy: isEven ? -10 : -25
//                     }}
//                   />
//                 );
//               })}

//               <Line
//                 type="monotone"
//                 dataKey="SPY"
//                 name="S&P 500"
//                 stroke="#2196F3"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="MSFT"
//                 name="MSFT"
//                 stroke="#4CAF50"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="NVDA"
//                 name="NVDA"
//                 stroke="#9C27B0"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     );
//   };

//   // The five smaller "cards" in a vertical stack
//   const renderNoteCards = () => (
//     <div className="flex flex-col gap-4">
//       {notesData.map((note, idx) => (
//         <div key={idx} className="bg-white rounded-lg shadow p-4">
//           <h3 className="text-sm text-gray-400 mb-1">{note.date}</h3>
//           <h4 className="text-md font-semibold mb-2">{note.heading}</h4>
//           <p className="text-sm text-gray-600">{note.content}</p>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* 3 single-stock charts in a row */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* Two columns: combined chart on left, smaller note cards on right */}
//       <div className="grid grid-cols-12 gap-6">
//         {/* Chart: col-span-7 */}
//         <div className="col-span-12 xl:col-span-7">
//           {renderCombinedChart()}
//         </div>
//         {/* Cards: col-span-5 */}
//         <div className="col-span-12 xl:col-span-5">
//           {renderNoteCards()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section0;









// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // Format date as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // Controls how many reference lines have “faded in”
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // Your chosen reference-line dates
//   const referenceDates = [
//     '20/01/2025',
//     '22/01/2025',
//     '24/01/2025',
//     '25/01/2025',
//     '27/01/2025'
//   ];

//   const notesData = [
//     {
//       date: "20/01/2025",
//       heading: "Announcement of DeepSeek-R1 Model",
//       content:
//         "DeepSeek, a Chinese AI start-up, announces the release of its advanced AI model, DeepSeek-R1. The announcement emphasises that the model rivals OpenAI's ChatGPT in performance while being developed at a significantly lower cost.",
//     },
//     {
//       date: "22/01/2025",
//       heading: "Open Code and Technical Documentation Released",
//       content:
//         "DeepSeek publishes the source code and detailed technical documentation for DeepSeek-R1, a move applauded globally for promoting transparency and collaboration in AI development.",
//     },
//     {
//       date: "24/01/2025",
//       heading: "DeepSeek-R1 Hits No. 1 on Apple's App Store in the US",
//       content:
//         "DeepSeek-R1 overtakes ChatGPT to become the most downloaded free app on Apple's App Store in the United States. This milestone signals its growing popularity and competitive edge.",
//     },
//     {
//       date: "25/01/2025",
//       heading: "Silicon Valley Reactions",
//       content:
//         "Prominent AI developers and companies in Silicon Valley express surprise and admiration for DeepSeek’s capabilities. Analysts note the model’s high performance at a fraction of the cost, highlighting it as a game-changer in the global AI race.",
//     },
//     {
//       date: "27/01/2025",
//       heading: "Analysts Highlight Economic Impacts",
//       content:
//         "Economists predict that DeepSeek’s low-cost model could pressure US-based AI companies to innovate faster or reduce costs to remain competitive. Tech industry leaders urge governments to accelerate investments in AI.",
//     },
//   ];
  
//   useEffect(() => {
//     // Generate dummy data for a single stock
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);

//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: formatDateUK(date),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     // Initialise data for each symbol
//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     // Live updates every 2s
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = parseFloat((lastPrice + change).toFixed(2));

//           newData[symbol].metrics.currentPrice = newPrice;
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Reveal reference lines in sequence
//     let currentIndex = 0;
//     const refLineTimer = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refLineTimer);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refLineTimer);
//     };
//   }, []);

//   // Tooltips for the single-stock charts
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, idx) => (
//             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Metrics card for single stocks
//   const MetricsCard = ({ metrics }) => {
//     if (!metrics || metrics.dayChange === undefined) return null;
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Renders a single-stock chart
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(val) => `$${val}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />

//                 {/* Fade in reference lines one by one */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5), // e.g. "20/01"
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} />
//       </div>
//     );
//   };

//   // Build data for the combined chart
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
//     return SPY.data.map((spyPoint, i) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[i].price,
//       NVDA: NVDA.data[i].price
//     }));
//   };

//   // Render the combined chart
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       // Use flex & full height so it can stretch to match the right column
//       <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
//         <h2 className="text-xl font-bold mb-4">Combined Performance</h2>

//         {/* This container flex-1 ensures the chart can expand vertically */}
//         <div className="flex-1 min-h-0">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={combinedData} margin={{ top: 60, right: 30, left: 20, bottom: 20 }}>
//               <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//               <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//               <YAxis
//                 domain={['dataMin', 'dataMax']}
//                 tick={{ fontSize: 12 }}
//                 tickFormatter={(val) => `$${val}`}
//               />
//               <Tooltip
//                 content={({ active, payload, label }) => {
//                   if (active && payload && payload.length) {
//                     return (
//                       <div className="bg-white p-3 rounded shadow border border-gray-200">
//                         <p className="text-sm font-semibold">{label}</p>
//                         {payload.map((entry, idx) => (
//                           <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                             {entry.name}: ${Number(entry.value).toFixed(2)}
//                           </p>
//                         ))}
//                       </div>
//                     );
//                   }
//                   return null;
//                 }}
//               />
//               <Legend />

//               {/* Fade-in reference lines */}
//               {referenceDates.map((date, idx) => {
//                 const isEven = idx % 2 === 0;
//                 return (
//                   <ReferenceLine
//                     key={date}
//                     x={date}
//                     stroke="#666"
//                     strokeDasharray="3 3"
//                     style={{
//                       opacity: showReferenceLine >= idx ? 1 : 0,
//                       transition: 'opacity 0.6s ease-in'
//                     }}
//                     label={{
//                       value: date.slice(0, 5),
//                       position: 'top',
//                       fontSize: 12,
//                       dy: isEven ? -10 : -25
//                     }}
//                   />
//                 );
//               })}

//               <Line
//                 type="monotone"
//                 dataKey="SPY"
//                 name="S&P 500"
//                 stroke="#2196F3"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="MSFT"
//                 name="MSFT"
//                 stroke="#4CAF50"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="NVDA"
//                 name="NVDA"
//                 stroke="#9C27B0"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     );
//   };

//   // The five smaller cards
//   const renderNoteCards = () => (
//     <div className="flex flex-col gap-4 h-full">
//       {notesData.map((note, idx) => (
//         <div key={idx} className="bg-white rounded-lg shadow p-4">
//           <h3 className="text-sm text-gray-400 mb-1">{note.date}</h3>
//           <h4 className="text-md font-semibold mb-2">{note.heading}</h4>
//           <p className="text-sm text-gray-600">{note.content}</p>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Single-stock charts in a row */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/*
//         2-column grid:
//         - left (chart) => 7 columns
//         - right (cards) => 5 columns
//         - items-stretch => both columns share the same row height
//       */}
//       <div className="grid grid-cols-12 gap-6 items-stretch">
//         {/* Left: combined chart. We add flex-col & h-full so it can stretch. */}
//         <div className="col-span-12 xl:col-span-7 flex flex-col h-full">
//           {renderCombinedChart()}
//         </div>

//         {/* Right: the 5 note cards. Also use h-full so they fill the row. */}
//         <div className="col-span-12 xl:col-span-5 flex flex-col h-full">
//           {renderNoteCards()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section0;














// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // Format date as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // Controls how many reference lines have “faded in”
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // Your chosen reference-line dates
//   const referenceDates = [
//     '20/01/2025',
//     '22/01/2025',
//     '24/01/2025',
//     '25/01/2025',
//     '27/01/2025'
//   ];

//   // Now each date can contain multiple articles, each with heading/content/source
//   const notesData = [
//     {
//       date: "20/01/2025",
//       articles: [
//         {
//           heading: "Announcement of DeepSeek-R1 Model",
//           content:
//             "DeepSeek, a Chinese AI start-up, announces the release of its advanced AI model, DeepSeek-R1. The announcement emphasises that the model rivals OpenAI's ChatGPT in performance while being developed at a significantly lower cost.",
//           source: "The Atlantic",
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"
//         }
//       ]
//     },
//     {
//       date: "22/01/2025",
//       articles: [
//         {
//           heading: "Open Code and Technical Documentation Released",
//           content:
//             "DeepSeek publishes the source code and detailed technical documentation for DeepSeek-R1, a move applauded globally for promoting transparency and collaboration in AI development.",
//           source: "The Atlantic", 
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"

//         }
//       ]
//     },
//     {
//       date: "24/01/2025",
//       articles: [
//         {
//           heading: "DeepSeek-R1 Hits No. 1 on Apple's App Store in the US",
//           content:
//             "DeepSeek-R1 overtakes ChatGPT to become the most downloaded free app on Apple's App Store in the United States. This milestone signals its growing popularity and competitive edge.",
//           source: "The Atlantic",
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"

//         },
//         {
//           heading: "Market Reaction",
//           content:
//             "Shares of major US tech companies, including Nvidia, Microsoft, and Alphabet, see significant declines amid investor concerns over DeepSeek's disruptive potential in the AI industry. Nvidia, in particular, experiences an 18% drop in share value.",
//           source: "Business Insider",
//           link: "https://markets.businessinsider.com/news/stocks/nvidia-tech-stocks-deepseek-ai-race-nasdaq-2025-1?utm_source=chatgpt.com"

//         }
//       ]
//     },
//     {
//       date: "25/01/2025",
//       articles: [
//         {
//           heading: "Silicon Valley Reactions",
//           content:
//             "Prominent AI developers and companies in Silicon Valley express surprise and admiration for DeepSeek’s capabilities. Analysts note the model’s high performance at a fraction of the cost, highlighting it as a game-changer in the global AI race.",
//           source: "The Wall Street Journal",
//           link: "https://www.wsj.com/tech/ai/china-ai-deepseek-chatbot-6ac4ad33?utm_source=chatgpt.com"

//         },
//         {
//           heading: "Discussions on the Global AI Race Intensify",
//           content:
//             "Experts and policymakers debate the implications of DeepSeek’s rise, particularly for US-led AI innovation. The event underscores the shifting dynamics in the global AI race, with China demonstrating significant advancements.",
//           source: "The Atlantic",
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"

//         }
//       ]
//     },
//     {
//       date: "27/01/2025",
//       articles: [
//         {
//           heading: "Analysts Highlight Economic Impacts",
//           content:
//             "Economists predict that DeepSeek’s low-cost model could pressure US-based AI companies to innovate faster or reduce costs to remain competitive. Tech industry leaders urge governments to accelerate investments in AI.",
//           source: "Business Insider",
//           link: "https://markets.businessinsider.com/news/stocks/nvidia-tech-stocks-deepseek-ai-race-nasdaq-2025-1?utm_source=chatgpt.com"

//         }
//       ]
//     },
//   ];

//   useEffect(() => {
//     // Generate dummy data for a single stock
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);

//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: formatDateUK(date),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     // Initialise data for each symbol
//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     // Live updates every 2s
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = parseFloat((lastPrice + change).toFixed(2));

//           newData[symbol].metrics.currentPrice = newPrice;
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Reveal reference lines in sequence
//     let currentIndex = 0;
//     const refLineTimer = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refLineTimer);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refLineTimer);
//     };
//   }, []);

//   // Tooltips for the single-stock charts
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, idx) => (
//             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Metrics card for single stocks
//   const MetricsCard = ({ metrics }) => {
//     if (!metrics || metrics.dayChange === undefined) return null;
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Renders a single-stock chart
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(val) => `$${val}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />

//                 {/* Fade in reference lines one by one */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5), // e.g. "20/01"
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} />
//       </div>
//     );
//   };

//   // Build data for the combined chart
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
//     return SPY.data.map((spyPoint, i) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[i].price,
//       NVDA: NVDA.data[i].price
//     }));
//   };

//   // Render the combined chart
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       // Use flex & full height so it can stretch to match the right column
//       <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
//         <h2 className="text-xl font-bold mb-4">Combined Performance</h2>

//         {/* This container flex-1 ensures the chart can expand vertically */}
//         <div className="flex-1 min-h-0">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={combinedData} margin={{ top: 60, right: 30, left: 20, bottom: 20 }}>
//               <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//               <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//               <YAxis
//                 domain={['dataMin', 'dataMax']}
//                 tick={{ fontSize: 12 }}
//                 tickFormatter={(val) => `$${val}`}
//               />
//               <Tooltip
//                 content={({ active, payload, label }) => {
//                   if (active && payload && payload.length) {
//                     return (
//                       <div className="bg-white p-3 rounded shadow border border-gray-200">
//                         <p className="text-sm font-semibold">{label}</p>
//                         {payload.map((entry, idx) => (
//                           <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                             {entry.name}: ${Number(entry.value).toFixed(2)}
//                           </p>
//                         ))}
//                       </div>
//                     );
//                   }
//                   return null;
//                 }}
//               />
//               <Legend />

//               {/* Fade-in reference lines */}
//               {referenceDates.map((date, idx) => {
//                 const isEven = idx % 2 === 0;
//                 return (
//                   <ReferenceLine
//                     key={date}
//                     x={date}
//                     stroke="#666"
//                     strokeDasharray="3 3"
//                     style={{
//                       opacity: showReferenceLine >= idx ? 1 : 0,
//                       transition: 'opacity 0.6s ease-in'
//                     }}
//                     label={{
//                       value: date.slice(0, 5),
//                       position: 'top',
//                       fontSize: 12,
//                       dy: isEven ? -10 : -25
//                     }}
//                   />
//                 );
//               })}

//               <Line
//                 type="monotone"
//                 dataKey="SPY"
//                 name="S&P 500"
//                 stroke="#2196F3"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="MSFT"
//                 name="MSFT"
//                 stroke="#4CAF50"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="NVDA"
//                 name="NVDA"
//                 stroke="#9C27B0"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     );
//   };

//   // The five smaller cards, each date can have multiple articles (heading/content/source).
//   const renderNoteCards = () => (
//     <div className="flex flex-col gap-4 h-full">
//       {notesData.map((note, idx) => (
//         <div key={idx} className="bg-white rounded-lg shadow p-4">
//           <h3 className="text-sm text-gray-400 mb-1">{note.date}</h3>
//           {note.articles.map((article, aIdx) => (
//             <div key={aIdx} className="mb-4">
//               <h4 className="text-md font-semibold mb-2">{article.heading}</h4>
//               <p className="text-sm text-gray-600">{article.content}</p>
//               <p className="text-sm text-gray-600 italic">Source: {article.source}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Single-stock charts in a row */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/*
//         2-column grid:
//         - left (chart) => 7 columns
//         - right (cards) => 5 columns
//         - items-stretch => both columns share the same row height
//       */}
//       <div className="grid grid-cols-12 gap-6 items-stretch">
//         {/* Left: combined chart. We add flex-col & h-full so it can stretch. */}
//         <div className="col-span-12 xl:col-span-7 flex flex-col h-full">
//           {renderCombinedChart()}
//         </div>

//         {/* Right: the note cards. Also use h-full so they fill the row. */}
//         <div className="col-span-12 xl:col-span-5 flex flex-col h-full">
//           {renderNoteCards()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section0;













// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // Format date as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // Controls how many reference lines have “faded in”
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // Your chosen reference-line dates
//   const referenceDates = [
//     '20/01/2025',
//     '22/01/2025',
//     '24/01/2025',
//     '25/01/2025',
//     '27/01/2025'
//   ];

//   // Now each date can contain multiple articles, each with heading/content/source
//   const notesData = [
//     {
//       date: "20/01/2025",
//       articles: [
//         {
//           heading: "Announcement of DeepSeek-R1 Model",
//           content:
//             "DeepSeek, a Chinese AI start-up, announces the release of its advanced AI model, DeepSeek-R1. The announcement emphasises that the model rivals OpenAI's ChatGPT in performance while being developed at a significantly lower cost.",
//           source: "The Atlantic",
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"
//         }
//       ]
//     },
//     {
//       date: "22/01/2025",
//       articles: [
//         {
//           heading: "Open Code and Technical Documentation Released",
//           content:
//             "DeepSeek publishes the source code and detailed technical documentation for DeepSeek-R1, a move applauded globally for promoting transparency and collaboration in AI development.",
//           source: "The Atlantic", 
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"
//         }
//       ]
//     },
//     {
//       date: "24/01/2025",
//       articles: [
//         {
//           heading: "DeepSeek-R1 Hits No. 1 on Apple's App Store in the US",
//           content:
//             "DeepSeek-R1 overtakes ChatGPT to become the most downloaded free app on Apple's App Store in the United States. This milestone signals its growing popularity and competitive edge.",
//           source: "The Atlantic",
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"
//         },
//         {
//           heading: "Market Reaction",
//           content:
//             "Shares of major US tech companies, including Nvidia, Microsoft, and Alphabet, see significant declines amid investor concerns over DeepSeek's disruptive potential in the AI industry. Nvidia, in particular, experiences an 18% drop in share value.",
//           source: "Business Insider",
//           link: "https://markets.businessinsider.com/news/stocks/nvidia-tech-stocks-deepseek-ai-race-nasdaq-2025-1?utm_source=chatgpt.com"
//         }
//       ]
//     },
//     {
//       date: "25/01/2025",
//       articles: [
//         {
//           heading: "Silicon Valley Reactions",
//           content:
//             "Prominent AI developers and companies in Silicon Valley express surprise and admiration for DeepSeek’s capabilities. Analysts note the model’s high performance at a fraction of the cost, highlighting it as a game-changer in the global AI race.",
//           source: "The Wall Street Journal",
//           link: "https://www.wsj.com/tech/ai/china-ai-deepseek-chatbot-6ac4ad33?utm_source=chatgpt.com"
//         },
//         {
//           heading: "Discussions on the Global AI Race Intensify",
//           content:
//             "Experts and policymakers debate the implications of DeepSeek’s rise, particularly for US-led AI innovation. The event underscores the shifting dynamics in the global AI race, with China demonstrating significant advancements.",
//           source: "The Atlantic",
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"
//         }
//       ]
//     },
//     {
//       date: "27/01/2025",
//       articles: [
//         {
//           heading: "Analysts Highlight Economic Impacts",
//           content:
//             "Economists predict that DeepSeek’s low-cost model could pressure US-based AI companies to innovate faster or reduce costs to remain competitive. Tech industry leaders urge governments to accelerate investments in AI.",
//           source: "Business Insider",
//           link: "https://markets.businessinsider.com/news/stocks/nvidia-tech-stocks-deepseek-ai-race-nasdaq-2025-1?utm_source=chatgpt.com"
//         }
//       ]
//     },
//   ];

//   useEffect(() => {
//     // Generate dummy data for a single stock
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);

//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: formatDateUK(date),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     // Initialise data for each symbol
//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     // Live updates every 2s
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = parseFloat((lastPrice + change).toFixed(2));

//           newData[symbol].metrics.currentPrice = newPrice;
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Reveal reference lines in sequence
//     let currentIndex = 0;
//     const refLineTimer = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refLineTimer);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refLineTimer);
//     };
//   }, []);

//   // Tooltips for the single-stock charts
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, idx) => (
//             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Metrics card for single stocks
//   const MetricsCard = ({ metrics }) => {
//     if (!metrics || metrics.dayChange === undefined) return null;
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Renders a single-stock chart
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(val) => `$${val}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />

//                 {/* Fade in reference lines one by one */}
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5), // e.g. "20/01"
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}

//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} />
//       </div>
//     );
//   };

//   // Build data for the combined chart
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
//     return SPY.data.map((spyPoint, i) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[i].price,
//       NVDA: NVDA.data[i].price
//     }));
//   };

//   // Render the combined chart
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       // Use flex & full height so it can stretch to match the right column
//       <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
//         <h2 className="text-xl font-bold mb-4">Combined Performance</h2>

//         {/* This container flex-1 ensures the chart can expand vertically */}
//         <div className="flex-1 min-h-0">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={combinedData} margin={{ top: 60, right: 30, left: 20, bottom: 20 }}>
//               <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//               <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//               <YAxis
//                 domain={['dataMin', 'dataMax']}
//                 tick={{ fontSize: 12 }}
//                 tickFormatter={(val) => `$${val}`}
//               />
//               <Tooltip
//                 content={({ active, payload, label }) => {
//                   if (active && payload && payload.length) {
//                     return (
//                       <div className="bg-white p-3 rounded shadow border border-gray-200">
//                         <p className="text-sm font-semibold">{label}</p>
//                         {payload.map((entry, idx) => (
//                           <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                             {entry.name}: ${Number(entry.value).toFixed(2)}
//                           </p>
//                         ))}
//                       </div>
//                     );
//                   }
//                   return null;
//                 }}
//               />
//               <Legend />

//               {/* Fade-in reference lines */}
//               {referenceDates.map((date, idx) => {
//                 const isEven = idx % 2 === 0;
//                 return (
//                   <ReferenceLine
//                     key={date}
//                     x={date}
//                     stroke="#666"
//                     strokeDasharray="3 3"
//                     style={{
//                       opacity: showReferenceLine >= idx ? 1 : 0,
//                       transition: 'opacity 0.6s ease-in'
//                     }}
//                     label={{
//                       value: date.slice(0, 5),
//                       position: 'top',
//                       fontSize: 12,
//                       dy: isEven ? -10 : -25
//                     }}
//                   />
//                 );
//               })}

//               <Line
//                 type="monotone"
//                 dataKey="SPY"
//                 name="S&P 500"
//                 stroke="#2196F3"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="MSFT"
//                 name="MSFT"
//                 stroke="#4CAF50"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="NVDA"
//                 name="NVDA"
//                 stroke="#9C27B0"
//                 dot={false}
//                 activeDot={{ r: 6 }}
//                 isAnimationActive={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     );
//   };

//   // The five smaller cards, each date can have multiple articles (heading/content/source).
//   const renderNoteCards = () => (
//     <div className="flex flex-col gap-4 h-full">
//       {notesData.map((note, idx) => (
//         <div key={idx} className="bg-white rounded-lg shadow p-2">
//           <h3 className="text-xs text-gray-400 mb-1">{note.date}</h3>
//           {note.articles.map((article, aIdx) => (
//             <div key={aIdx} className="mb-4">
//               <h4 className="text-sm font-semibold mb-2">{article.heading}</h4>
//               <p className="text-xs text-gray-600">{article.content}</p>
//               <p className="text-xs text-gray-600 italic">Source: {article.source}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Single-stock charts in a row */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/*
//         2-column grid:
//         - left (chart) => 7 columns
//         - right (cards) => 5 columns
//         - items-stretch => both columns share the same row height
//       */}
//       <div className="grid grid-cols-12 gap-6 items-stretch">
//         {/* Left: combined chart. We add flex-col & h-full so it can stretch. */}
//         <div className="col-span-12 xl:col-span-7 flex flex-col h-full">
//           {renderCombinedChart()}
//         </div>

//         {/* Right: the note cards. Also use h-full so they fill the row. */}
//         <div className="col-span-12 xl:col-span-5 flex flex-col h-full">
//           {renderNoteCards()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section0;










// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // A custom hook that dynamically loads the Google Trends embed code
// function useGoogleTrends() {
//   useEffect(() => {
//     // 1) Load Google Trends embed loader:
//     const scriptLoader = document.createElement('script');
//     scriptLoader.src = 'https://ssl.gstatic.com/trends_nrtr/3975_RC01/embed_loader.js';
//     scriptLoader.async = true;
//     document.body.appendChild(scriptLoader);

//     // 2) After the loader is in place, we add another script that calls the embed API:
//     //    We'll wait for the first script to finish loading before calling the embed code.
//     scriptLoader.onload = () => {
//       const scriptEmbed = document.createElement('script');
//       scriptEmbed.innerHTML = `
//         // Render the TIMESERIES widget into #timeseriesContainer:
//         trends.embed.renderExploreWidgetTo(
//           document.getElementById('timeseriesContainer'),
//           "TIMESERIES",
//           {
//             "comparisonItem": [
//               { "keyword": "/g/11wxpfc4h2", "geo": "", "time": "now 7-d" }
//             ],
//             "category": 0,
//             "property": ""
//           },
//           {
//             "exploreQuery": "q=%2Fg%2F11wxpfc4h2&date=now%207-d",
//             "guestPath": "https://trends.google.com:443/trends/embed/"
//           }
//         );

//         // Render the GEO_MAP widget into #geomapContainer:
//         trends.embed.renderExploreWidgetTo(
//           document.getElementById('geomapContainer'),
//           "GEO_MAP",
//           {
//             "comparisonItem": [
//               { "keyword": "/g/11wxpfc4h2", "geo": "", "time": "now 7-d" }
//             ],
//             "category": 0,
//             "property": ""
//           },
//           {
//             "exploreQuery": "q=%2Fg%2F11wxpfc4h2&date=now%207-d",
//             "guestPath": "https://trends.google.com:443/trends/embed/"
//           }
//         );
//       `;
//       document.body.appendChild(scriptEmbed);
//     };

//     // (Optional) Cleanup: remove scripts if this component unmounts
//     return () => {
//       document.body.removeChild(scriptLoader);
//     };
//   }, []);
// }

// // A small component that provides two DIVs for Google Trends to render into
// function GoogleTrendsWidgets() {
//   // Trigger the script loading & embedding
//   useGoogleTrends();
//   return (
//     <div className="flex flex-col space-y-6">
//       <div
//         id="timeseriesContainer"
//         style={{ width: '100%', height: '300px', minHeight: '300px' }}
//       />
//       <div
//         id="geomapContainer"
//         style={{ width: '100%', height: '300px', minHeight: '300px' }}
//       />
//     </div>
//   );
// }

// // Format date as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // Controls how many reference lines have “faded in”
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // Your chosen reference-line dates
//   const referenceDates = [
//     '20/01/2025',
//     '22/01/2025',
//     '24/01/2025',
//     '25/01/2025',
//     '27/01/2025'
//   ];

//   // Now each date can contain multiple articles, each with heading/content/source
//   const notesData = [
//     {
//       date: "20/01/2025",
//       articles: [
//         {
//           heading: "Announcement of DeepSeek-R1 Model",
//           content:
//             "DeepSeek, a Chinese AI start-up, announces the release of its advanced AI model, DeepSeek-R1. The announcement emphasises that the model rivals OpenAI's ChatGPT in performance while being developed at a significantly lower cost.",
//           source: "The Atlantic",
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"
//         }
//       ]
//     },
//     {
//       date: "22/01/2025",
//       articles: [
//         {
//           heading: "Open Code and Technical Documentation Released",
//           content:
//             "DeepSeek publishes the source code and detailed technical documentation for DeepSeek-R1, a move applauded globally for promoting transparency and collaboration in AI development.",
//           source: "The Atlantic",
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"
//         }
//       ]
//     },
//     {
//       date: "24/01/2025",
//       articles: [
//         {
//           heading: "DeepSeek-R1 Hits No. 1 on Apple's App Store in the US",
//           content:
//             "DeepSeek-R1 overtakes ChatGPT to become the most downloaded free app on Apple's App Store in the United States. This milestone signals its growing popularity and competitive edge.",
//           source: "The Atlantic",
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"
//         },
//         {
//           heading: "Market Reaction",
//           content:
//             "Shares of major US tech companies, including Nvidia, Microsoft, and Alphabet, see significant declines amid investor concerns over DeepSeek's disruptive potential in the AI industry. Nvidia, in particular, experiences an 18% drop in share value.",
//           source: "Business Insider",
//           link: "https://markets.businessinsider.com/news/stocks/nvidia-tech-stocks-deepseek-ai-race-nasdaq-2025-1?utm_source=chatgpt.com"
//         }
//       ]
//     },
//     {
//       date: "25/01/2025",
//       articles: [
//         {
//           heading: "Silicon Valley Reactions",
//           content:
//             "Prominent AI developers and companies in Silicon Valley express surprise and admiration for DeepSeek’s capabilities. Analysts note the model’s high performance at a fraction of the cost, highlighting it as a game-changer in the global AI race.",
//           source: "The Wall Street Journal",
//           link: "https://www.wsj.com/tech/ai/china-ai-deepseek-chatbot-6ac4ad33?utm_source=chatgpt.com"
//         },
//         {
//           heading: "Discussions on the Global AI Race Intensify",
//           content:
//             "Experts and policymakers debate the implications of DeepSeek’s rise, particularly for US-led AI innovation. The event underscores the shifting dynamics in the global AI race, with China demonstrating significant advancements.",
//           source: "The Atlantic",
//           link: "https://www.theatlantic.com/technology/archive/2025/01/deepseek-china-ai/681481/?utm_source=chatgpt.com"
//         }
//       ]
//     },
//     {
//       date: "27/01/2025",
//       articles: [
//         {
//           heading: "Analysts Highlight Economic Impacts",
//           content:
//             "Economists predict that DeepSeek’s low-cost model could pressure US-based AI companies to innovate faster or reduce costs to remain competitive. Tech industry leaders urge governments to accelerate investments in AI.",
//           source: "Business Insider",
//           link: "https://markets.businessinsider.com/news/stocks/nvidia-tech-stocks-deepseek-ai-race-nasdaq-2025-1?utm_source=chatgpt.com"
//         }
//       ]
//     },
//   ];

//   // Generate dummy data & set intervals for updates
//   useEffect(() => {
//     // Generate dummy data for a single stock
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       for (let i = 30; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);

//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: formatDateUK(date),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     // Initialise data for each symbol
//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     // Live updates every 2s
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = parseFloat((lastPrice + change).toFixed(2));

//           newData[symbol].metrics.currentPrice = newPrice;
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Reveal reference lines in sequence
//     let currentIndex = 0;
//     const refLineTimer = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refLineTimer);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refLineTimer);
//     };
//   }, []);

//   // Tooltips for the single-stock charts
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, idx) => (
//             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Metrics card for single stocks
//   const MetricsCard = ({ metrics }) => {
//     if (!metrics || metrics.dayChange === undefined) return null;
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Render a single-stock chart
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(val) => `$${val}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5), // e.g. "20/01"
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}
//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} />
//       </div>
//     );
//   };

//   // Build data for the combined chart
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
//     return SPY.data.map((spyPoint, i) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[i].price,
//       NVDA: NVDA.data[i].price
//     }));
//   };

//   // A revised combined chart, styled similarly to the single-stock charts
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={combinedData} margin={{ top: 60, right: 30, left: 20, bottom: 20 }}>
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(val) => `$${val}`}
//                 />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-white p-3 rounded shadow border border-gray-200">
//                           <p className="text-sm font-semibold">{label}</p>
//                           {payload.map((entry, idx) => (
//                             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                               {entry.name}: ${Number(entry.value).toFixed(2)}
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Legend />
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5),
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}
//                 <Line
//                   type="monotone"
//                   dataKey="SPY"
//                   name="S&P 500"
//                   stroke="#2196F3"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="MSFT"
//                   name="MSFT"
//                   stroke="#4CAF50"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="NVDA"
//                   name="NVDA"
//                   stroke="#9C27B0"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // The five smaller cards, each date can have multiple articles (heading/content/source).
//   const renderNoteCards = () => (
//     <div className="flex flex-col gap-4 h-full">
//       {notesData.map((note, idx) => (
//         <div key={idx} className="bg-white rounded-lg shadow p-2">
//           <h3 className="text-xs text-gray-400 mb-1">{note.date}</h3>
//           {note.articles.map((article, aIdx) => (
//             <div key={aIdx} className="mb-4">
//               <h4 className="text-sm font-semibold mb-2">{article.heading}</h4>
//               <p className="text-xs text-gray-600">{article.content}</p>
//               <p className="text-xs text-gray-600 italic">Source: {article.source}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Single-stock charts in a row */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* Combined chart in the same row style */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderCombinedChart()}
//       </div>

//       {/*
//         2-column grid:
//         - left => Google Trends widgets (instead of raw <script> tags)
//         - right => the note cards
//       */}
//       <div className="grid grid-cols-12 gap-6 items-stretch">
//         {/* Left: Google Trends timeseries & geomap */}
//         <div className="col-span-12 xl:col-span-7 flex flex-col h-full">
//           <GoogleTrendsWidgets />
//         </div>

//         {/* Right: the note cards */}
//         <div className="col-span-12 xl:col-span-5 flex flex-col h-full">
//           {renderNoteCards()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section0;







// // src/components/sections/Section0.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine
// } from 'recharts';

// // Import the CSV-based Trends component
// import GoogleTrendsReconstructed from './GoogleTrendsReconstructed';

// // Format date as DD/MM/YYYY
// function formatDateUK(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// function Section0() {
//   const [stockData, setStockData] = useState({
//     SPY: { data: [], metrics: {} },
//     MSFT: { data: [], metrics: {} },
//     NVDA: { data: [], metrics: {} }
//   });

//   // Controls how many reference lines have “faded in”
//   const [showReferenceLine, setShowReferenceLine] = useState(0);

//   // Reference-line dates
//   const referenceDates = [
//     '20/01/2025',
//     '22/01/2025',
//     '24/01/2025',
//     '25/01/2025',
//     '27/01/2025'
//   ];

//   const notesData = [
//     {
//       date: "20/01/2025",
//       articles: [
//         {
//           heading: "Announcement of DeepSeek-R1 Model",
//           content:
//             "DeepSeek, a Chinese AI start-up, announces the release of its advanced AI model, DeepSeek-R1. The announcement emphasises that the model rivals OpenAI's ChatGPT in performance while being developed at a significantly lower cost.",
//           source: "The Atlantic"
//         }
//       ]
//     },
//     {
//       date: "22/01/2025",
//       articles: [
//         {
//           heading: "Open Code and Technical Documentation Released",
//           content:
//             "DeepSeek publishes the source code and detailed technical documentation for DeepSeek-R1, a move applauded globally for promoting transparency and collaboration in AI development.",
//           source: "The Atlantic"
//         }
//       ]
//     },
//     {
//       date: "24/01/2025",
//       articles: [
//         {
//           heading: "DeepSeek-R1 Hits No. 1 on Apple's App Store in the US",
//           content:
//             "DeepSeek-R1 overtakes ChatGPT to become the most downloaded free app on Apple's App Store in the United States. This milestone signals its growing popularity and competitive edge.",
//           source: "The Atlantic"
//         },
//         {
//           heading: "Market Reaction",
//           content:
//             "Shares of major US tech companies, including Nvidia, Microsoft, and Alphabet, see significant declines amid investor concerns over DeepSeek's disruptive potential in the AI industry. Nvidia, in particular, experiences an 18% drop in share value.",
//           source: "Business Insider"
//         }
//       ]
//     },
//     {
//       date: "25/01/2025",
//       articles: [
//         {
//           heading: "Silicon Valley Reactions",
//           content:
//             "Prominent AI developers and companies in Silicon Valley express surprise and admiration for DeepSeek’s capabilities. Analysts note the model’s high performance at a fraction of the cost, highlighting it as a game-changer in the global AI race.",
//           source: "The Wall Street Journal"
//         },
//         {
//           heading: "Discussions on the Global AI Race Intensify",
//           content:
//             "Experts and policymakers debate the implications of DeepSeek’s rise, particularly for US-led AI innovation. The event underscores the shifting dynamics in the global AI race, with China demonstrating significant advancements.",
//           source: "The Atlantic"
//         }
//       ]
//     },
//     {
//       date: "27/01/2025",
//       articles: [
//         {
//           heading: "Analysts Highlight Economic Impacts",
//           content:
//             "Economists predict that DeepSeek’s low-cost model could pressure US-based AI companies to innovate faster or reduce costs to remain competitive. Tech industry leaders urge governments to accelerate investments in AI.",
//           source: "Business Insider"
//         }
//       ]
//     },
//   ];

//   // Generate dummy data & set intervals
//   useEffect(() => {
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       // for (let i = 30; i >= 0; i--) { // 1 month
//       for (let i = 21; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
//         const change = (Math.random() - 0.5) * volatility;
//         currentPrice *= (1 + change);

//         high = Math.max(high, currentPrice);
//         low = Math.min(low, currentPrice);

//         data.push({
//           date: formatDateUK(date),
//           price: parseFloat(currentPrice.toFixed(2)),
//           volume: Math.floor(Math.random() * 1_000_000)
//         });
//       }

//       const lastPrice = data[data.length - 1].price;
//       const dayChange = lastPrice - previousClose;
//       const dayChangePercent = (dayChange / previousClose) * 100;

//       return {
//         data,
//         metrics: {
//           currentPrice: lastPrice,
//           high,
//           low,
//           dayChange,
//           dayChangePercent,
//           volume: Math.floor(Math.random() * 10_000_000)
//         }
//       };
//     };

//     setStockData({
//       SPY: generateStockData(475, 0.01),
//       MSFT: generateStockData(390, 0.015),
//       NVDA: generateStockData(550, 0.02)
//     });

//     // Simulate real-time updates
//     const updateInterval = setInterval(() => {
//       setStockData(prevData => {
//         const newData = { ...prevData };
//         Object.keys(newData).forEach(symbol => {
//           const lastPrice = newData[symbol].metrics.currentPrice;
//           const change = (Math.random() - 0.5) * 0.002 * lastPrice;
//           const newPrice = parseFloat((lastPrice + change).toFixed(2));

//           newData[symbol].metrics.currentPrice = newPrice;
//           newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
//           newData[symbol].metrics.dayChangePercent = parseFloat(
//             (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
//           );

//           const updatedData = [...newData[symbol].data];
//           updatedData[updatedData.length - 1].price = newPrice;
//           newData[symbol].data = updatedData;
//         });
//         return newData;
//       });
//     }, 2000);

//     // Reveal reference lines in sequence
//     let currentIndex = 0;
//     const refLineTimer = setInterval(() => {
//       if (currentIndex < referenceDates.length) {
//         setShowReferenceLine(currentIndex);
//         currentIndex++;
//       } else {
//         clearInterval(refLineTimer);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(updateInterval);
//       clearInterval(refLineTimer);
//     };
//   }, []);

//   // Tooltip for single-stock charts
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded shadow border border-gray-200">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((entry, idx) => (
//             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: ${Number(entry.value).toFixed(2)}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Single-stock metrics
//   const MetricsCard = ({ metrics }) => {
//     if (!metrics || metrics.dayChange === undefined) return null;
//     const isPositive = metrics.dayChange > 0;
//     return (
//       <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Current Price</p>
//           <p className="text-lg font-bold">${metrics.currentPrice}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Change</p>
//           <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '+' : ''}
//             {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
//             {metrics.dayChangePercent.toFixed(2)}%)
//           </p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day High</p>
//           <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Day Low</p>
//           <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
//         </div>
//       </div>
//     );
//   };

//   // Render a single-stock chart
//   const renderStockChart = (symbol, stockInfo, color) => {
//     if (!stockInfo?.data?.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">{symbol}</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={stockInfo.data}
//                 margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(val) => `$${val}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5), // e.g. "20/01"
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}
//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={color}
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                   name={symbol}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <MetricsCard metrics={stockInfo.metrics} />
//       </div>
//     );
//   };

//   // Build data for combined chart
//   const buildCombinedData = () => {
//     const { SPY, MSFT, NVDA } = stockData;
//     if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
//     return SPY.data.map((spyPoint, i) => ({
//       date: spyPoint.date,
//       SPY: spyPoint.price,
//       MSFT: MSFT.data[i].price,
//       NVDA: NVDA.data[i].price
//     }));
//   };

//   // Combined chart
//   const renderCombinedChart = () => {
//     const combinedData = buildCombinedData();
//     if (!combinedData.length) return null;

//     return (
//       <div className="flex-1">
//         <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
//           <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={combinedData} margin={{ top: 60, right: 30, left: 20, bottom: 20 }}>
//                 <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis
//                   domain={['dataMin', 'dataMax']}
//                   tick={{ fontSize: 12 }}
//                   tickFormatter={(val) => `$${val}`}
//                 />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-white p-3 rounded shadow border border-gray-200">
//                           <p className="text-sm font-semibold">{label}</p>
//                           {payload.map((entry, idx) => (
//                             <p key={idx} className="text-sm" style={{ color: entry.color }}>
//                               {entry.name}: ${Number(entry.value).toFixed(2)}
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Legend />
//                 {referenceDates.map((date, idx) => {
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <ReferenceLine
//                       key={date}
//                       x={date}
//                       stroke="#666"
//                       strokeDasharray="3 3"
//                       style={{
//                         opacity: showReferenceLine >= idx ? 1 : 0,
//                         transition: 'opacity 0.6s ease-in'
//                       }}
//                       label={{
//                         value: date.slice(0, 5),
//                         position: 'top',
//                         fontSize: 12,
//                         dy: isEven ? -10 : -25
//                       }}
//                     />
//                   );
//                 })}
//                 <Line
//                   type="monotone"
//                   dataKey="SPY"
//                   name="S&P 500"
//                   stroke="#2196F3"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="MSFT"
//                   name="MSFT"
//                   stroke="#4CAF50"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="NVDA"
//                   name="NVDA"
//                   stroke="#9C27B0"
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                   isAnimationActive={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Note cards
//   const renderNoteCards = () => (
//     <div className="flex flex-col gap-4 h-full">
//       {notesData.map((note, idx) => (
//         <div key={idx} className="bg-white rounded-lg shadow p-2">
//           <h3 className="text-xs text-gray-400 mb-1">{note.date}</h3>
//           {note.articles.map((article, aIdx) => (
//             <div key={aIdx} className="mb-4">
//               <h4 className="text-sm font-semibold mb-2">{article.heading}</h4>
//               <p className="text-xs text-gray-600">{article.content}</p>
//               <p className="text-xs text-gray-600 italic">Source: {article.source}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-8">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
//         <p className="text-gray-700">Real-time market performance tracker</p>
//       </div>

//       {/* Single-stock charts in a row */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>

//       {/* Combined chart */}
//       {/* <div className="flex flex-col lg:flex-row gap-6">
//         {renderCombinedChart()}
//       </div> */}


//       {/* Combined chart (half width, aligned left) */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         <div className="w-full lg:w-1/2">
//           {renderCombinedChart()}
//         </div>
//       </div>





//       {/*
//         2-column grid:
//         - left => the CSV-based “GoogleTrendsReconstructed” charts
//         - right => the note cards
//       */}
//       <div className="grid grid-cols-12 gap-6 items-stretch">
//         {/* Left: our CSV-based Trends */}
//         <div className="col-span-12 xl:col-span-7 flex flex-col h-full">
//           <GoogleTrendsReconstructed />
//         </div>


//         {/* Right: the note cards */}
//         <div className="col-span-12 xl:col-span-5 flex flex-col h-full">
//           {renderNoteCards()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section0;








// src/components/sections/Section0.jsx
import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

// Import the CSV-based Trends component
import GoogleTrendsReconstructed from './GoogleTrendsReconstructed';
import HeatmapCarousel from './HeatmapCarousel';


// Format date as DD/MM/YYYY
function formatDateUK(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function Section0() {
  const [stockData, setStockData] = useState({
    SPY: { data: [], metrics: {} },
    MSFT: { data: [], metrics: {} },
    NVDA: { data: [], metrics: {} }
  });

  // Controls how many reference lines have “faded in”
  const [showReferenceLine, setShowReferenceLine] = useState(0);

  // Reference-line dates
  const referenceDates = [
    '20/01/2025',
    '22/01/2025',
    '24/01/2025',
    '25/01/2025',
    '27/01/2025'
  ];

  const notesData = [
    {
      date: "20/01/2025",
      articles: [
        {
          heading: "Announcement of DeepSeek-R1 Model",
          content:
            "DeepSeek, a Chinese AI start-up, announces the release of its advanced AI model, DeepSeek-R1. The announcement emphasises that the model rivals OpenAI's ChatGPT in performance while being developed at a significantly lower cost.",
          source: "The Atlantic"
        }
      ]
    },
    {
      date: "22/01/2025",
      articles: [
        {
          heading: "Open Code and Technical Documentation Released",
          content:
            "DeepSeek publishes the source code and detailed technical documentation for DeepSeek-R1, a move applauded globally for promoting transparency and collaboration in AI development.",
          source: "The Atlantic"
        }
      ]
    },
    {
      date: "24/01/2025",
      articles: [
        {
          heading: "DeepSeek-R1 Hits No. 1 on Apple's App Store in the US",
          content:
            "DeepSeek-R1 overtakes ChatGPT to become the most downloaded free app on Apple's App Store in the United States. This milestone signals its growing popularity and competitive edge.",
          source: "The Atlantic"
        },
        {
          heading: "Market Reaction",
          content:
            "Shares of major US tech companies, including Nvidia, Microsoft, and Alphabet, see significant declines amid investor concerns over DeepSeek's disruptive potential in the AI industry. Nvidia, in particular, experiences an 18% drop in share value.",
          source: "Business Insider"
        }
      ]
    },
    {
      date: "25/01/2025",
      articles: [
        {
          heading: "Silicon Valley Reactions",
          content:
            "Prominent AI developers and companies in Silicon Valley express surprise and admiration for DeepSeek’s capabilities. Analysts note the model’s high performance at a fraction of the cost, highlighting it as a game-changer in the global AI race.",
          source: "The Wall Street Journal"
        },
        {
          heading: "Discussions on the Global AI Race Intensify",
          content:
            "Experts and policymakers debate the implications of DeepSeek’s rise, particularly for US-led AI innovation. The event underscores the shifting dynamics in the global AI race, with China demonstrating significant advancements.",
          source: "The Atlantic"
        }
      ]
    },
    {
      date: "27/01/2025",
      articles: [
        {
          heading: "Analysts Highlight Economic Impacts",
          content:
            "Economists predict that DeepSeek’s low-cost model could pressure US-based AI companies to innovate faster or reduce costs to remain competitive. Tech industry leaders urge governments to accelerate investments in AI.",
          source: "Business Insider"
        }
      ]
    },
  ];

  // Generate dummy data & set intervals
  useEffect(() => {
    const generateStockData = (basePrice, volatility) => {
      const data = [];
      let currentPrice = basePrice;
      let previousClose = basePrice;
      let high = basePrice;
      let low = basePrice;

      // Changed to 3 weeks => 21 days
      for (let i = 21; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const change = (Math.random() - 0.5) * volatility;
        currentPrice *= (1 + change);

        high = Math.max(high, currentPrice);
        low = Math.min(low, currentPrice);

        data.push({
          date: formatDateUK(date),
          price: parseFloat(currentPrice.toFixed(2)),
          volume: Math.floor(Math.random() * 1_000_000)
        });
      }

      const lastPrice = data[data.length - 1].price;
      const dayChange = lastPrice - previousClose;
      const dayChangePercent = (dayChange / previousClose) * 100;

      return {
        data,
        metrics: {
          currentPrice: lastPrice,
          high,
          low,
          dayChange,
          dayChangePercent,
          volume: Math.floor(Math.random() * 10_000_000)
        }
      };
    };

    setStockData({
      SPY: generateStockData(475, 0.01),
      MSFT: generateStockData(390, 0.015),
      NVDA: generateStockData(550, 0.02)
    });

    // Live updates every 2s
    const updateInterval = setInterval(() => {
      setStockData(prevData => {
        const newData = { ...prevData };
        Object.keys(newData).forEach(symbol => {
          const lastPrice = newData[symbol].metrics.currentPrice;
          const change = (Math.random() - 0.5) * 0.002 * lastPrice;
          const newPrice = parseFloat((lastPrice + change).toFixed(2));

          newData[symbol].metrics.currentPrice = newPrice;
          newData[symbol].metrics.dayChange = parseFloat((newPrice - lastPrice).toFixed(2));
          newData[symbol].metrics.dayChangePercent = parseFloat(
            (((newPrice - lastPrice) / lastPrice) * 100).toFixed(2)
          );

          const updatedData = [...newData[symbol].data];
          updatedData[updatedData.length - 1].price = newPrice;
          newData[symbol].data = updatedData;
        });
        return newData;
      });
    }, 2000);

    // Reveal reference lines in sequence
    let currentIndex = 0;
    const refLineTimer = setInterval(() => {
      if (currentIndex < referenceDates.length) {
        setShowReferenceLine(currentIndex);
        currentIndex++;
      } else {
        clearInterval(refLineTimer);
      }
    }, 1000);

    return () => {
      clearInterval(updateInterval);
      clearInterval(refLineTimer);
    };
  }, []);

  // Tooltip for single-stock charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded shadow border border-gray-200">
          <p className="text-sm font-semibold">{label}</p>
          {payload.map((entry, idx) => (
            <p key={idx} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: ${Number(entry.value).toFixed(2)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Single-stock metrics
  const MetricsCard = ({ metrics }) => {
    if (!metrics || metrics.dayChange === undefined) return null;
    const isPositive = metrics.dayChange > 0;
    return (
      <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow p-4 mt-4">
        <div>
          <p className="text-sm text-gray-500">Current Price</p>
          <p className="text-lg font-bold">${metrics.currentPrice}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Change</p>
          <p className={`text-lg font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}
            {metrics.dayChange.toFixed(2)} ({isPositive ? '+' : ''}
            {metrics.dayChangePercent.toFixed(2)}%)
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Day High</p>
          <p className="text-lg font-semibold">${metrics.high.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Day Low</p>
          <p className="text-lg font-semibold">${metrics.low.toFixed(2)}</p>
        </div>
      </div>
    );
  };

  // Render a single-stock chart
  const renderStockChart = (symbol, stockInfo, color) => {
    if (!stockInfo?.data?.length) return null;

    return (
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
          <h2 className="text-xl font-bold mb-4">{symbol}</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={stockInfo.data}
                margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis
                  domain={['dataMin', 'dataMax']}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(val) => `$${val}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                {referenceDates.map((date, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <ReferenceLine
                      key={date}
                      x={date}
                      stroke="#666"
                      strokeDasharray="3 3"
                      style={{
                        opacity: showReferenceLine >= idx ? 1 : 0,
                        transition: 'opacity 0.6s ease-in'
                      }}
                      label={{
                        value: date.slice(0, 5), // e.g. "20/01"
                        position: 'top',
                        fontSize: 12,
                        dy: isEven ? -10 : -25
                      }}
                    />
                  );
                })}
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke={color}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                  isAnimationActive={false}
                  name={symbol}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <MetricsCard metrics={stockInfo.metrics} />
      </div>
    );
  };

  // Build data for combined chart
  const buildCombinedData = () => {
    const { SPY, MSFT, NVDA } = stockData;
    if (!SPY.data.length || !MSFT.data.length || !NVDA.data.length) return [];
    return SPY.data.map((spyPoint, i) => ({
      date: spyPoint.date,
      SPY: spyPoint.price,
      MSFT: MSFT.data[i].price,
      NVDA: NVDA.data[i].price
    }));
  };

  // Combined chart (half width, aligned left)
  const renderCombinedChart = () => {
    const combinedData = buildCombinedData();
    if (!combinedData.length) return null;

    return (
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
          <h2 className="text-xl font-bold mb-4">Combined Performance</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={combinedData} margin={{ top: 60, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis
                  domain={['dataMin', 'dataMax']}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(val) => `$${val}`}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-3 rounded shadow border border-gray-200">
                          <p className="text-sm font-semibold">{label}</p>
                          {payload.map((entry, idx) => (
                            <p key={idx} className="text-sm" style={{ color: entry.color }}>
                              {entry.name}: ${Number(entry.value).toFixed(2)}
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
                {referenceDates.map((date, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <ReferenceLine
                      key={date}
                      x={date}
                      stroke="#666"
                      strokeDasharray="3 3"
                      style={{
                        opacity: showReferenceLine >= idx ? 1 : 0,
                        transition: 'opacity 0.6s ease-in'
                      }}
                      label={{
                        value: date.slice(0, 5),
                        position: 'top',
                        fontSize: 12,
                        dy: isEven ? -10 : -25
                      }}
                    />
                  );
                })}
                <Line
                  type="monotone"
                  dataKey="SPY"
                  name="S&P 500"
                  stroke="#2196F3"
                  dot={false}
                  activeDot={{ r: 6 }}
                  isAnimationActive={false}
                />
                <Line
                  type="monotone"
                  dataKey="MSFT"
                  name="MSFT"
                  stroke="#4CAF50"
                  dot={false}
                  activeDot={{ r: 6 }}
                  isAnimationActive={false}
                />
                <Line
                  type="monotone"
                  dataKey="NVDA"
                  name="NVDA"
                  stroke="#9C27B0"
                  dot={false}
                  activeDot={{ r: 6 }}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };

  // Note cards
  const renderNoteCards = () => (
    <div className="flex flex-col gap-4 h-full">
      {notesData.map((note, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-2">
          <h3 className="text-xs text-gray-400 mb-1">{note.date}</h3>
          {note.articles.map((article, aIdx) => (
            <div key={aIdx} className="mb-4">
              <h4 className="text-sm font-semibold mb-2">{article.heading}</h4>
              <p className="text-xs text-gray-600">{article.content}</p>
              <p className="text-xs text-gray-600 italic">Source: {article.source}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-4 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
        <p className="text-gray-700">Real-time market performance tracker</p>
      </div>

      {/* Single-stock charts in a row */}
      <div className="flex flex-col lg:flex-row gap-6">
        {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
        {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
        {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
      </div>

      {/* Combined chart (half width, aligned left) */}
      {/* <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">{renderCombinedChart()}</div>
      </div> */}


{/* Combined chart and Heatmap Carousel */}
<div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">{renderCombinedChart()}</div>
        <div className="w-full lg:w-1/2">
          <HeatmapCarousel />
        </div>
      </div>





      {/*
        2-column grid:
        - left => the CSV-based “GoogleTrendsReconstructed” charts
        - right => the note cards
      */}
      <div className="grid grid-cols-12 gap-6 items-stretch">
        {/* Left: our CSV-based Trends */}
        <div className="col-span-12 xl:col-span-7 flex flex-col h-full">
          <GoogleTrendsReconstructed />
        </div>

        {/* Right: Key Events box */}
        <div className="col-span-12 xl:col-span-5 flex flex-col h-full">
          <div className="bg-gray-200 rounded shadow p-4 space-y-4 flex-1">
            <h1 className="text-xl font-bold mb-4">Key Events</h1>
            {renderNoteCards()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section0;













