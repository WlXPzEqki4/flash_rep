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
// import HeatmapCarousel from './HeatmapCarousel';


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
//           heading: "DeepSeek Unveils R1 AI Model",
//           content:
//             "DeepSeek, a Hangzhou-based AI start-up, announces the release of its open-source AI model, DeepSeek-R1. Developed in just two months at a cost of $6 million, R1 outperforms industry leaders in various benchmarks, challenging existing AI development paradigms.",
//           source: "Financial Times"
//         }
//       ]
//     },
//     {
//       date: "22/01/2025",
//       articles: [
//         {
//           heading: "DeepSeek-R1 Source Code Released",
//           content:
//             "DeepSeek publishes the source code and technical documentation for R1 under an open-source MIT license, promoting transparency and enabling widespread use and commercialization.",
//           source: "Business Insider"
//         }
//       ]
//     },
//     {
//       date: "24/01/2025",
//       articles: [
//         {
//           heading: "DeepSeek-R1 Tops Apple's App Store",
//           content:
//             "DeepSeek's R1 model becomes the most-downloaded app on Apple's App Store, surpassing ChatGPT. This milestone highlights its rapid adoption and the shifting dynamics in the AI industry.",
//           source: "New York Magazine"
//         },
//         {
//           heading: "Tech Stocks Plummet Amid DeepSeek's Rise",
//           content:
//             "Following DeepSeek-R1's release, major tech stocks, including Nvidia, Microsoft, and Alphabet, experience significant declines. Nvidia's market value drops by nearly $600 billion in a single day, reflecting investor concerns over the disruptive potential of DeepSeek's advancements.",
//           source: "New York Magazine"
//         }
//       ]
//     },
//     {
//       date: "25/01/2025",
//       articles: [
//         {
//           heading: "U.S. Tech Industry Reacts to DeepSeek's Breakthrough",
//           content:
//             "American tech companies and researchers express astonishment at DeepSeek's rapid progress in AI, acknowledging the model's capabilities and the efficiency of its development.",
//           source: "The Atlantic"
//         },
//         {
//           heading: "Debate Over Global AI Leadership Intensifies",
//           content:
//             "DeepSeek's achievements spark discussions about the shifting balance in global AI leadership, with analysts considering the implications for U.S. dominance in the field.",
//           source: "Barron's"
//         }
//       ]
//     },
//     {
//       date: "27/01/2025",
//       articles: [
//         {
//           heading: "Economic Analysts Assess DeepSeek's Impact",
//           content:
//             "Economists analyze the potential long-term effects of DeepSeek's cost-effective AI model on the tech industry, suggesting it may lead to a reevaluation of investment strategies and resource allocation.",
//           source: "Time"
//         }
//       ]
//     },
//     {
//       date: "28/01/2025",
//       articles: [
//         {
//           heading: "DeepSeek R1 Now Available on Azure AI Foundry and GitHub",
//           content:
//             "DeepSeek R1 is now accessible in the model catalog on Azure AI Foundry and GitHub, enabling businesses to integrate advanced AI capabilities seamlessly.",
//           source: "Azure AI Blog"
//         }
//       ]
//     },
//     {
//       date: "29/01/2025",
//       articles: [
//         {
//           heading: "Alibaba Releases AI Model Surpassing DeepSeek",
//           content:
//             "Alibaba unveils a new AI model that it claims outperforms DeepSeek-R1, marking a significant advancement in the competitive AI landscape.",
//           source: "Reuters"
//         },
//         {
//           heading: "DeepSeek-R1 Distilled Models Deployed in Amazon Bedrock",
//           content:
//             "Distilled versions of DeepSeek-R1 are now deployable using Amazon Bedrock Custom Model Import, making advanced AI capabilities more accessible to organizations within AWS infrastructure.",
//           source: "AWS Machine Learning Blog"
//         }
//       ]
//     },
//     {
//       date: "30/01/2025",
//       articles: [
//         {
//           heading: "DeepSeek's Open-Source Model Sparks Global Collaboration",
//           content:
//             "The open-source release of DeepSeek-R1 leads to a surge in international collaboration, with developers worldwide contributing to its improvement and adaptation across various industries.",
//           source: "TechCrunch"
//         },
//         {
//           heading: "Concerns Raised Over Data Privacy in DeepSeek-R1 Deployments",
//           content:
//             "Privacy advocates express concerns regarding the data handling practices of applications built on DeepSeek-R1, urging for stricter data protection measures.",
//           source: "The Guardian"
//         },
//         {
//           heading: "DeepSeek Announces Upcoming R2 Model with Enhanced Security Features",
//           content:
//             "In response to recent security concerns, DeepSeek reveals plans for the R2 model, emphasizing improved security protocols and data privacy measures.",
//           source: "The Verge"
//         }
//       ]
//     }
//   ];
  

//   // Generate dummy data & set intervals
//   useEffect(() => {
//     const generateStockData = (basePrice, volatility) => {
//       const data = [];
//       let currentPrice = basePrice;
//       let previousClose = basePrice;
//       let high = basePrice;
//       let low = basePrice;

//       // Changed to 3 weeks => 21 days
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

//   // Combined chart (half width, aligned left)
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
//       <div className="bg-blue-100 p-8 border-b border-gray-200 mb-6">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           DeepSeek-R1: Market Impact Overview
//         </h1>
//         <p className="text-gray-600 text-lg">
//         Real-time market performance tracker
//         </p>
//       </div>


//       {/* Single-stock charts in a row */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {renderStockChart('S&P 500', stockData.SPY, '#2196F3')}
//         {renderStockChart('MSFT', stockData.MSFT, '#4CAF50')}
//         {renderStockChart('NVDA', stockData.NVDA, '#9C27B0')}
//       </div>




// {/* Combined chart and Heatmap Carousel */}
// <div className="flex flex-col lg:flex-row gap-6">
//         <div className="w-full lg:w-1/2">{renderCombinedChart()}</div>
//         <div className="w-full lg:w-1/2">
//           <HeatmapCarousel />
//         </div>
//       </div>

//       <div className="bg-blue-100 p-8 border-b border-gray-200 mb-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           DeepSeek-R1: The Rise and Ripple Effects of a Game-Changing AI
//         </h1>
//         <p className="text-gray-600 text-lg">
//         Tracking the surge, peak, and fallout of global attention on DeepSeek’s AI breakthrough—market reactions, industry shifts, and the evolving narrative over time.
//         </p>
//       </div>


//       <div className="grid grid-cols-12 gap-6 items-stretch">
//         {/* Left: our CSV-based Trends */}
//         <div className="col-span-12 xl:col-span-7 flex flex-col h-full">
//           <GoogleTrendsReconstructed />
//         </div>

//         {/* Right: Key Events box */}
//         <div className="col-span-12 xl:col-span-5 flex flex-col h-full">
//           <div className="bg-gray-200 rounded shadow p-4 space-y-4 flex-1">
//             <h1 className="text-xl font-bold mb-4">Key Events in Timeline</h1>
//             {renderNoteCards()}
//           </div>
//         </div>
//       </div>


      
//     </div>
//   );
// }

// export default Section0;










































































































// src/components/sections/Section0.jsx
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

// Import the CSV-based Trends component
import GoogleTrendsReconstructed from "./GoogleTrendsReconstructed";
import HeatmapCarousel from "./HeatmapCarousel";

// Format date as DD/MM/YYYY
function formatDateUK(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function Section0() {
  const [stockData, setStockData] = useState({
    SPY: { data: [], metrics: {} },
    MSFT: { data: [], metrics: {} },
    NVDA: { data: [], metrics: {} },
  });

  // Controls how many reference lines have “faded in”
  const [showReferenceLine, setShowReferenceLine] = useState(0);

  // Reference-line dates
  const referenceDates = [
    "20/01/2025",
    "22/01/2025",
    "24/01/2025",
    "25/01/2025",
    "27/01/2025",
  ];

  const notesData = [
    {
      date: "20/01/2025",
      articles: [
        {
          heading: "DeepSeek Unveils R1 AI Model",
          content:
            "DeepSeek, a Hangzhou-based AI start-up, announces the release of its open-source AI model, DeepSeek-R1. Developed in just two months at a cost of $6 million, R1 outperforms industry leaders in various benchmarks, challenging existing AI development paradigms.",
          source: "Financial Times",
        },
      ],
    },
    {
      date: "22/01/2025",
      articles: [
        {
          heading: "DeepSeek-R1 Source Code Released",
          content:
            "DeepSeek publishes the source code and technical documentation for R1 under an open-source MIT license, promoting transparency and enabling widespread use and commercialization.",
          source: "Business Insider",
        },
      ],
    },
    {
      date: "24/01/2025",
      articles: [
        {
          heading: "DeepSeek-R1 Tops Apple's App Store",
          content:
            "DeepSeek's R1 model becomes the most-downloaded app on Apple's App Store, surpassing ChatGPT. This milestone highlights its rapid adoption and the shifting dynamics in the AI industry.",
          source: "New York Magazine",
        },
        {
          heading: "Tech Stocks Plummet Amid DeepSeek's Rise",
          content:
            "Following DeepSeek-R1's release, major tech stocks, including Nvidia, Microsoft, and Alphabet, experience significant declines. Nvidia's market value drops by nearly $600 billion in a single day, reflecting investor concerns over the disruptive potential of DeepSeek's advancements.",
          source: "New York Magazine",
        },
      ],
    },
    {
      date: "25/01/2025",
      articles: [
        {
          heading: "U.S. Tech Industry Reacts to DeepSeek's Breakthrough",
          content:
            "American tech companies and researchers express astonishment at DeepSeek's rapid progress in AI, acknowledging the model's capabilities and the efficiency of its development.",
          source: "The Atlantic",
        },
        {
          heading: "Debate Over Global AI Leadership Intensifies",
          content:
            "DeepSeek's achievements spark discussions about the shifting balance in global AI leadership, with analysts considering the implications for U.S. dominance in the field.",
          source: "Barron's",
        },
      ],
    },
    {
      date: "27/01/2025",
      articles: [
        {
          heading: "Economic Analysts Assess DeepSeek's Impact",
          content:
            "Economists analyze the potential long-term effects of DeepSeek's cost-effective AI model on the tech industry, suggesting it may lead to a reevaluation of investment strategies and resource allocation.",
          source: "Time",
        },
      ],
    },
    {
      date: "28/01/2025",
      articles: [
        {
          heading: "DeepSeek R1 Now Available on Azure AI Foundry and GitHub",
          content:
            "DeepSeek R1 is now accessible in the model catalog on Azure AI Foundry and GitHub, enabling businesses to integrate advanced AI capabilities seamlessly.",
          source: "Azure AI Blog",
        },
      ],
    },
    {
      date: "29/01/2025",
      articles: [
        {
          heading: "Alibaba Releases AI Model Surpassing DeepSeek",
          content:
            "Alibaba unveils a new AI model that it claims outperforms DeepSeek-R1, marking a significant advancement in the competitive AI landscape.",
          source: "Reuters",
        },
        {
          heading: "DeepSeek-R1 Distilled Models Deployed in Amazon Bedrock",
          content:
            "Distilled versions of DeepSeek-R1 are now deployable using Amazon Bedrock Custom Model Import, making advanced AI capabilities more accessible to organizations within AWS infrastructure.",
          source: "AWS Machine Learning Blog",
        },
      ],
    },
    {
      date: "30/01/2025",
      articles: [
        {
          heading: "DeepSeek's Open-Source Model Sparks Global Collaboration",
          content:
            "The open-source release of DeepSeek-R1 leads to a surge in international collaboration, with developers worldwide contributing to its improvement and adaptation across various industries.",
          source: "TechCrunch",
        },
        {
          heading:
            "Concerns Raised Over Data Privacy in DeepSeek-R1 Deployments",
          content:
            "Privacy advocates express concerns regarding the data handling practices of applications built on DeepSeek-R1, urging for stricter data protection measures.",
          source: "The Guardian",
        },
        {
          heading:
            "DeepSeek Announces Upcoming R2 Model with Enhanced Security Features",
          content:
            "In response to recent security concerns, DeepSeek reveals plans for the R2 model, emphasizing improved security protocols and data privacy measures.",
          source: "The Verge",
        },
      ],
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
        currentPrice *= 1 + change;

        high = Math.max(high, currentPrice);
        low = Math.min(low, currentPrice);

        data.push({
          date: formatDateUK(date),
          price: parseFloat(currentPrice.toFixed(2)),
          volume: Math.floor(Math.random() * 1_000_000),
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
          volume: Math.floor(Math.random() * 10_000_000),
        },
      };
    };

    setStockData({
      SPY: generateStockData(475, 0.01),
      MSFT: generateStockData(390, 0.015),
      NVDA: generateStockData(550, 0.02),
    });

    // Live updates every 2s
    const updateInterval = setInterval(() => {
      setStockData((prevData) => {
        const newData = { ...prevData };
        Object.keys(newData).forEach((symbol) => {
          const lastPrice = newData[symbol].metrics.currentPrice;
          const change = (Math.random() - 0.5) * 0.002 * lastPrice;
          const newPrice = parseFloat((lastPrice + change).toFixed(2));

          newData[symbol].metrics.currentPrice = newPrice;
          newData[symbol].metrics.dayChange = parseFloat(
            (newPrice - lastPrice).toFixed(2)
          );
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
          <p
            className={`text-lg font-bold ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? "+" : ""}
            {metrics.dayChange.toFixed(2)} ({isPositive ? "+" : ""}
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
                  domain={["dataMin", "dataMax"]}
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
                        transition: "opacity 0.6s ease-in",
                      }}
                      label={{
                        value: date.slice(0, 5), // e.g. "20/01"
                        position: "top",
                        fontSize: 12,
                        dy: isEven ? -10 : -25,
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
      NVDA: NVDA.data[i].price,
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
              <LineChart
                data={combinedData}
                margin={{ top: 60, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis
                  domain={["dataMin", "dataMax"]}
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
                            <p
                              key={idx}
                              className="text-sm"
                              style={{ color: entry.color }}
                            >
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
                        transition: "opacity 0.6s ease-in",
                      }}
                      label={{
                        value: date.slice(0, 5),
                        position: "top",
                        fontSize: 12,
                        dy: isEven ? -10 : -25,
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
              <p className="text-xs text-gray-600 italic">
                Source: {article.source}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-4 space-y-8">
      <div className="bg-blue-100 p-8 border-b border-gray-200 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          DeepSeek-R1: Market Impact Overview
        </h1>
        <p className="text-gray-600 text-lg">
          Real-time market performance tracker
        </p>
      </div>

      {/* Single-stock charts in a row */}
      <div className="flex flex-col lg:flex-row gap-6">
        {renderStockChart("S&P 500", stockData.SPY, "#2196F3")}
        {renderStockChart("MSFT", stockData.MSFT, "#4CAF50")}
        {renderStockChart("NVDA", stockData.NVDA, "#9C27B0")}
      </div>

      {/* Combined chart and Heatmap Carousel */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">{renderCombinedChart()}</div>
        <div className="w-full lg:w-1/2">
          <HeatmapCarousel />
        </div>
      </div>

      <div className="bg-blue-100 p-8 border-b border-gray-200 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          DeepSeek-R1: The Rise and Ripple Effects of a Game-Changing AI
        </h1>
        <p className="text-gray-600 text-lg">
          Tracking the surge, peak, and fallout of global attention on
          DeepSeek’s AI breakthrough—market reactions, industry shifts, and the
          evolving narrative over time.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 items-stretch">
        {/* Left: our CSV-based Trends */}
        <div className="col-span-12 xl:col-span-7 flex flex-col h-full">
          <GoogleTrendsReconstructed />
        </div>

        {/* Right: Key Events box */}
        <div className="col-span-12 xl:col-span-5 flex flex-col h-full">
          <div className="bg-gray-200 rounded shadow p-4 space-y-4 flex-1">
            <h1 className="text-xl font-bold mb-4">Key Events in Timeline</h1>
            {renderNoteCards()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section0;








