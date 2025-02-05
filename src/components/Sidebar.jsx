// import React from 'react';
// import * as Icons from 'lucide-react';

// function Sidebar({ sections, activeSection, onSectionClick }) {
//   return (
//     <nav className="w-64 bg-gray-800 text-white p-4 fixed h-screen">
//       <div className="space-y-4">
//         {sections.map(({ id, title, icon }) => {
//           const Icon = Icons[icon];
//           return (
//             <button
//               key={id}
//               onClick={() => onSectionClick(id)}
//               className={`
//                 flex items-center space-x-2 w-full p-2 rounded
//                 ${activeSection === id ? 'bg-gray-700' : 'hover:bg-gray-700'}
//               `}
//             >
//               {Icon && <Icon size={20} />}
//               <span>{title}</span>
//             </button>
//           )
//         })}
//       </div>
//     </nav>
//   )
// }

// export default Sidebar;









// import React, { useState } from 'react';
// import * as Icons from 'lucide-react';

// function Sidebar({ activeSection, onSectionClick }) {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const navigationItems = [
//     {
//       section: 'MAIN',
//       items: [
//         { id: 'dashboard', title: 'Dashboard', icon: 'LayoutDashboard' },
//         { id: 'audience', title: 'Audience', icon: 'Users' },
//         { id: 'posts', title: 'Posts', icon: 'FileText' },
//         { id: 'schedules', title: 'Schedules', icon: 'Calendar' },
//         {
//           id: 'income',
//           title: 'Income',
//           icon: 'LineChart',
//           subItems: [
//             { id: 'earnings', title: 'Earnings' },
//             { id: 'refunds', title: 'Refunds' },
//             { id: 'declines', title: 'Declines' },
//             { id: 'payouts', title: 'Payouts' }
//           ]
//         }
//       ]
//     },
//     {
//       section: 'SETTINGS',
//       items: [
//         { id: 'notification', title: 'Notification', icon: 'Bell' },
//         { id: 'settings', title: 'Settings', icon: 'Settings' }
//       ]
//     }
//   ];

//   return (
//     <nav
//       className={`fixed h-screen bg-white shadow-lg transition-all duration-300 ease-in-out ${
//         isExpanded ? 'w-64' : 'w-16'
//       }`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       {/* Logo Header */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-200">
//         <div className={`flex items-center ${!isExpanded && 'justify-center'}`}>
//           <div className="w-8 h-8 bg-gray-800 rounded-full flex-shrink-0" />
//           {isExpanded && (
//             <span className="ml-2 font-semibold truncate">Logoipsum</span>
//           )}
//         </div>
//         {isExpanded && (
//           <button className="text-gray-500 hover:text-gray-700">
//             {React.createElement(Icons.MoreVertical, { size: 20 })}
//           </button>
//         )}
//       </div>

//       {/* Navigation Sections */}
//       <div className="overflow-y-auto h-[calc(100vh-64px)]">
//         {navigationItems.map((navSection) => (
//           <div key={navSection.section} className="py-2">
//             {isExpanded && (
//               <div className="px-4 py-2 text-xs font-semibold text-gray-500">
//                 {navSection.section}
//               </div>
//             )}
            
//             {navSection.items.map((item) => (
//               <div key={item.id}>
//                 <button
//                   onClick={() => onSectionClick(item.id)}
//                   className={`
//                     w-full flex items-center px-4 py-2 text-sm
//                     ${!isExpanded ? 'justify-center' : ''}
//                     ${
//                       activeSection === item.id
//                         ? 'text-blue-600 bg-blue-50'
//                         : 'text-gray-700 hover:bg-gray-100'
//                     }
//                   `}
//                 >
//                   {item.icon && (
//                     <span className={
//                       activeSection === item.id ? 'text-blue-600' : 'text-gray-500'
//                     }>
//                       {React.createElement(Icons[item.icon], { size: 20 })}
//                     </span>
//                   )}
//                   {isExpanded && (
//                     <span className="ml-3 truncate">{item.title}</span>
//                   )}
//                 </button>

//                 {/* Sub Items */}
//                 {isExpanded && item.subItems && (
//                   <div className="ml-8 border-l border-gray-200">
//                     {item.subItems.map((subItem) => (
//                       <button
//                         key={subItem.id}
//                         onClick={() => onSectionClick(subItem.id)}
//                         className={`
//                           w-full flex items-center px-4 py-2 text-sm
//                           ${
//                             activeSection === subItem.id
//                               ? 'text-blue-600'
//                               : 'text-gray-700 hover:bg-gray-100'
//                           }
//                         `}
//                       >
//                         <span className="truncate">{subItem.title}</span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </nav>
//   );
// }

// export default Sidebar;







// // src/components/Sidebar.jsx
// import React, { useState } from 'react';
// import * as Icons from 'lucide-react';

// function Sidebar({ activeSection, onSectionClick }) {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const navigationItems = [
//     {
//       section: 'MAIN',
//       items: [
//         { id: 'dashboard', title: 'Dashboard', icon: 'LayoutDashboard' },
//         { id: 'audience', title: 'Audience', icon: 'Users' },
//         { id: 'posts', title: 'Posts', icon: 'FileText' },
//         { id: 'schedules', title: 'Schedules', icon: 'Calendar' },
//         {
//           id: 'income',
//           title: 'Income',
//           icon: 'LineChart',
//           subItems: [
//             { id: 'earnings', title: 'Earnings' },
//             { id: 'refunds', title: 'Refunds' },
//             { id: 'declines', title: 'Declines' },
//             { id: 'payouts', title: 'Payouts' }
//           ]
//         }
//       ]
//     },
//     {
//       section: 'SETTINGS',
//       items: [
//         { id: 'notification', title: 'Notification', icon: 'Bell' },
//         { id: 'settings', title: 'Settings', icon: 'Settings' }
//       ]
//     }
//   ];

//   return (
//     <nav
//       className={`
//         fixed h-screen bg-white shadow-lg
//         transition-all duration-300 ease-in-out
//         ${isExpanded ? 'w-64' : 'w-16'}
//       `}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       {/* Logo Header */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16">
//         <div className="flex items-center w-full">
//           <div className="w-8 h-8 bg-gray-800 rounded-full flex-shrink-0" />
//           <div className={`
//             ml-2 font-semibold whitespace-nowrap
//             transition-all duration-300 ease-in-out
//             ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
//           `}>
//             Logoipsum
//           </div>
//         </div>
//         <button className={`
//           text-gray-500 hover:text-gray-700
//           transition-all duration-300 ease-in-out
//           ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute'}
//         `}>
//           {React.createElement(Icons.MoreVertical, { size: 20 })}
//         </button>
//       </div>

//       {/* Navigation Sections */}
//       <div className="overflow-y-auto h-[calc(100vh-64px)]">
//         {navigationItems.map((navSection) => (
//           <div key={navSection.section} className="py-2">
//             <div className={`
//               px-4 py-2 text-xs font-semibold text-gray-500
//               transition-all duration-300 ease-in-out
//               ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
//             `}>
//               {navSection.section}
//             </div>
            
//             {navSection.items.map((item) => (
//               <div key={item.id}>
//                 <button
//                   onClick={() => onSectionClick(item.id)}
//                   className={`
//                     w-full flex items-center px-4 py-2 text-sm
//                     transition-all duration-300 ease-in-out
//                     ${!isExpanded ? 'justify-center' : ''}
//                     ${activeSection === item.id
//                       ? 'text-blue-600 bg-blue-50'
//                       : 'text-gray-700 hover:bg-gray-100'
//                     }
//                   `}
//                 >
//                   {item.icon && (
//                     <span className={`
//                       transition-colors duration-300 ease-in-out
//                       ${activeSection === item.id ? 'text-blue-600' : 'text-gray-500'}
//                     `}>
//                       {React.createElement(Icons[item.icon], { 
//                         size: 20,
//                         className: 'transition-transform duration-300 ease-in-out'
//                       })}
//                     </span>
//                   )}
//                   <span className={`
//                     ml-3 whitespace-nowrap
//                     transition-all duration-300 ease-in-out
//                     ${isExpanded 
//                       ? 'opacity-100 translate-x-0' 
//                       : 'opacity-0 -translate-x-4 absolute'
//                     }
//                   `}>
//                     {item.title}
//                   </span>
//                 </button>

//                 {/* Sub Items */}
//                 <div className={`
//                   ml-8 border-l border-gray-200
//                   transition-all duration-300 ease-in-out
//                   ${isExpanded 
//                     ? 'opacity-100 max-h-96' 
//                     : 'opacity-0 max-h-0 overflow-hidden'
//                   }
//                 `}>
//                   {item.subItems?.map((subItem) => (
//                     <button
//                       key={subItem.id}
//                       onClick={() => onSectionClick(subItem.id)}
//                       className={`
//                         w-full flex items-center px-4 py-2 text-sm
//                         transition-all duration-300 ease-in-out
//                         ${activeSection === subItem.id
//                           ? 'text-blue-600'
//                           : 'text-gray-700 hover:bg-gray-100'
//                         }
//                       `}
//                     >
//                       <span className="whitespace-nowrap">{subItem.title}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </nav>
//   );
// }

// export default Sidebar;








// import React, { useState } from 'react';
// import * as Icons from 'lucide-react';

// function Sidebar({ activeSection, onSectionClick }) {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const navigationItems = [
//     {
//       section: 'MAIN',
//       items: [
//         { id: 'section1', title: 'Dashboard', icon: 'LayoutDashboard' },
//         { id: 'section2', title: 'Audience', icon: 'Users' },
//         { id: 'section3', title: 'Posts', icon: 'FileText' },
//         { id: 'section4', title: 'Schedules', icon: 'Calendar' },
//         {
//           id: 'section5',
//           title: 'Income',
//           icon: 'LineChart',
//           subItems: [
//             { id: 'section5-earnings', title: 'Earnings' },
//             { id: 'section5-refunds', title: 'Refunds' },
//             { id: 'section5-declines', title: 'Declines' },
//             { id: 'section5-payouts', title: 'Payouts' }
//           ]
//         }
//       ]
//     },
//     {
//       section: 'SETTINGS',
//       items: [
//         { id: 'section6', title: 'Notification', icon: 'Bell' },
//         { id: 'section7', title: 'Settings', icon: 'Settings' }
//       ]
//     }
//   ];

//   return (
//     <nav
//       className={`
//         fixed h-screen bg-white shadow-lg
//         transition-all duration-300 ease-in-out
//         ${isExpanded ? 'w-64' : 'w-16'}
//       `}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       {/* Logo Header */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16">
//         <div className="flex items-center w-full">
//           <div className="w-8 h-8 bg-gray-800 rounded-full flex-shrink-0" />
//           <div className={`
//             ml-2 font-semibold whitespace-nowrap
//             transition-all duration-300 ease-in-out
//             ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
//           `}>
//             FLASH REP
//           </div>
//         </div>
//         <button className={`
//           text-gray-500 hover:text-gray-700
//           transition-all duration-300 ease-in-out
//           ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute'}
//         `}>
//           {React.createElement(Icons.MoreVertical, { size: 20 })}
//         </button>
//       </div>

//       {/* Navigation Sections */}
//       <div className="overflow-y-auto h-[calc(100vh-64px)]">
//         {navigationItems.map((navSection) => (
//           <div key={navSection.section} className="py-2">
//             <div className={`
//               px-4 py-2 text-xs font-semibold text-gray-500
//               transition-all duration-300 ease-in-out
//               ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
//             `}>
//               {navSection.section}
//             </div>
            
//             {navSection.items.map((item) => (
//               <div key={item.id}>
//                 <button
//                   onClick={() => onSectionClick(item.id)}
//                   className={`
//                     w-full flex items-center px-4 py-2 text-sm
//                     transition-all duration-300 ease-in-out
//                     ${!isExpanded ? 'justify-center' : ''}
//                     ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}
//                   `}
//                 >
//                   {item.icon && (
//                     <span className={`
//                       transition-colors duration-300 ease-in-out
//                       ${activeSection === item.id ? 'text-blue-600' : 'text-gray-500'}
//                     `}>
//                       {React.createElement(Icons[item.icon], { size: 20 })}
//                     </span>
//                   )}
//                   <span className={`
//                     ml-3 whitespace-nowrap
//                     transition-all duration-300 ease-in-out
//                     ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
//                   `}>
//                     {item.title}
//                   </span>
//                 </button>

//                 {/* Sub Items */}
//                 {item.subItems && (
//                   <div className={`
//                     ml-8 border-l border-gray-200
//                     transition-all duration-300 ease-in-out
//                     ${isExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}
//                   `}>
//                     {item.subItems.map((subItem) => (
//                       <button
//                         key={subItem.id}
//                         onClick={() => onSectionClick(subItem.id)}
//                         className={`
//                           w-full flex items-center px-4 py-2 text-sm
//                           transition-all duration-300 ease-in-out
//                           ${activeSection === subItem.id ? 'text-blue-600' : 'text-gray-700 hover:bg-gray-100'}
//                         `}
//                       >
//                         <span className="whitespace-nowrap">{subItem.title}</span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </nav>
//   );
// }

// export default Sidebar;











// import React from 'react';
// import * as Icons from 'lucide-react';

// function Sidebar({ activeSection, onSectionClick, isExpanded, onExpandedChange }) {
//   const navigationItems = [
//     {
//       section: 'MAIN',
//       items: [
//         { id: 'section1', title: 'Dashboard', icon: 'LayoutDashboard' },
//         { id: 'section2', title: 'Audience', icon: 'Users' },
//         { id: 'section3', title: 'Posts', icon: 'FileText' },
//         { id: 'section4', title: 'Schedules', icon: 'Calendar' },
//         {
//           id: 'section5',
//           title: 'Income',
//           icon: 'LineChart',
//           subItems: [
//             { id: 'section5-earnings', title: 'Earnings' },
//             { id: 'section5-refunds', title: 'Refunds' },
//             { id: 'section5-declines', title: 'Declines' },
//             { id: 'section5-payouts', title: 'Payouts' }
//           ]
//         }
//       ]
//     },
//     {
//       section: 'SETTINGS',
//       items: [
//         { id: 'section6', title: 'Notification', icon: 'Bell' },
//         { id: 'section7', title: 'Settings', icon: 'Settings' }
//       ]
//     }
//   ];

//   return (
//     <nav
//       className={`
//         fixed h-screen bg-white shadow-lg
//         transition-all duration-300 ease-in-out z-10
//         ${isExpanded ? 'w-64' : 'w-16'}
//       `}
//       onMouseEnter={() => onExpandedChange(true)}
//       onMouseLeave={() => onExpandedChange(false)}
//     >
//       {/* Logo Header */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16">
//         <div className="flex items-center w-full">
//           <div className="w-8 h-8 bg-gray-800 rounded-full flex-shrink-0" />
//           <div className={`
//             ml-2 font-semibold whitespace-nowrap
//             transition-all duration-300 ease-in-out
//             ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
//           `}>
//             MALL3
//           </div>
//         </div>
//         <button className={`
//           text-gray-500 hover:text-gray-700
//           transition-all duration-300 ease-in-out
//           ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute'}
//         `}>
//           {React.createElement(Icons.MoreVertical, { size: 20 })}
//         </button>
//       </div>

//       {/* Navigation Sections */}
//       <div className="overflow-y-auto h-[calc(100vh-64px)]">
//         {navigationItems.map((navSection) => (
//           <div key={navSection.section} className="py-2">
//             <div className={`
//               px-4 py-2 text-xs font-semibold text-gray-500
//               transition-all duration-300 ease-in-out
//               ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
//             `}>
//               {navSection.section}
//             </div>
            
//             {navSection.items.map((item) => (
//               <div key={item.id}>
//                 <button
//                   onClick={() => onSectionClick(item.id)}
//                   className={`
//                     w-full flex items-center px-4 py-2 text-sm
//                     transition-all duration-300 ease-in-out
//                     ${!isExpanded ? 'justify-center' : ''}
//                     ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}
//                   `}
//                 >
//                   {item.icon && (
//                     <span className={`
//                       transition-colors duration-300 ease-in-out
//                       ${activeSection === item.id ? 'text-blue-600' : 'text-gray-500'}
//                     `}>
//                       {React.createElement(Icons[item.icon], { size: 20 })}
//                     </span>
//                   )}
//                   <span className={`
//                     ml-3 whitespace-nowrap
//                     transition-all duration-300 ease-in-out
//                     ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
//                   `}>
//                     {item.title}
//                   </span>
//                 </button>

//                 {item.subItems && (
//                   <div className={`
//                     ml-8 border-l border-gray-200
//                     transition-all duration-300 ease-in-out
//                     ${isExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}
//                   `}>
//                     {item.subItems.map((subItem) => (
//                       <button
//                         key={subItem.id}
//                         onClick={() => onSectionClick(subItem.id)}
//                         className={`
//                           w-full flex items-center px-4 py-2 text-sm
//                           transition-all duration-300 ease-in-out
//                           ${activeSection === subItem.id ? 'text-blue-600' : 'text-gray-700 hover:bg-gray-100'}
//                         `}
//                       >
//                         <span className="whitespace-nowrap">{subItem.title}</span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </nav>
//   );
// }

// export default Sidebar;









import React from 'react';
import * as Icons from 'lucide-react';

function Sidebar({ activeSection, onSectionClick, isExpanded, onExpandedChange }) {
  const navigationItems = [
    {
      section: 'MAIN',
      items: [
        { id: 'section1', title: 'Dashboard', icon: 'LayoutDashboard' },
        { id: 'section2', title: 'Audience', icon: 'Users' },
        { id: 'section3', title: 'Posts', icon: 'FileText' },
        { id: 'section4', title: 'Schedules', icon: 'Calendar' },
        {
          id: 'section5',
          title: 'Income',
          icon: 'LineChart',
          subItems: [
            { id: 'section5-earnings', title: 'Earnings' },
            { id: 'section5-refunds', title: 'Refunds' },
            { id: 'section5-declines', title: 'Declines' },
            { id: 'section5-payouts', title: 'Payouts' }
          ]
        }
      ]
    },
    {
      section: 'SETTINGS',
      items: [
        { id: 'section6', title: 'Notification', icon: 'Bell' },
        { id: 'section7', title: 'Settings', icon: 'Settings' }
      ]
    }
  ];

  return (
    <nav
      className={`
        fixed h-screen bg-[#1f2837] shadow-lg
        transition-all duration-300 ease-in-out z-10
        ${isExpanded ? 'w-64' : 'w-16'}
      `}
      onMouseEnter={() => onExpandedChange(true)}
      onMouseLeave={() => onExpandedChange(false)}
    >
      {/* Logo Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 text-gray-300 h-16">
        <div className="flex items-center w-full">
          <div className="w-8 h-8 bg-gray-800 rounded-full  flex-shrink-0" />
          <div
            className={`
              ml-2 font-semibold whitespace-nowrap
              transition-all duration-300 ease-in-out
              ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
            `}
          >
            MALL3
          </div>
        </div>
        <button
          className={`
            text-gray-500 hover:text-gray-300
            transition-all duration-300 ease-in-out
            ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute'}
          `}
        >
          {React.createElement(Icons.MoreVertical, { size: 20 })}
        </button>
      </div>

      {/* Navigation Sections */}
      <div className="overflow-y-auto h-[calc(100vh-64px)]">
        {navigationItems.map((navSection) => (
          <div key={navSection.section} className="py-2">
            <div
              className={`
                px-4 py-2 text-xs font-semibold text-gray-300
                transition-all duration-300 ease-in-out
                ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
              `}
            >
              {navSection.section}
            </div>

            {navSection.items.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => onSectionClick(item.id)}
                  className={`
                    w-full flex items-center px-4 py-2 text-sm
                    transition-all duration-300 ease-in-out
                    ${!isExpanded ? 'justify-center' : ''}
                    ${activeSection === item.id ? 'text-blue-400 bg-blue-950/50' : 'text-gray-300 hover:bg-gray-700/50'}
                  `}
                >
                  {item.icon && (
                    <span
                      className={`
                        transition-colors duration-300 ease-in-out
                        ${activeSection === item.id ? 'text-blue-400' : 'text-gray-500'}
                      `}
                    >
                      {React.createElement(Icons[item.icon], { size: 20 })}
                    </span>
                  )}
                  <span
                    className={`
                      ml-3 whitespace-nowrap
                      transition-all duration-300 ease-in-out
                      ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
                    `}
                  >
                    {item.title}
                  </span>
                </button>

                {item.subItems && (
                  <div
                    className={`
                      ml-8 border-l border-gray-600
                      transition-all duration-300 ease-in-out
                      ${isExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}
                    `}
                  >
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => onSectionClick(subItem.id)}
                        className={`
                          w-full flex items-center px-4 py-2 text-sm
                          transition-all duration-300 ease-in-out
                          ${activeSection === subItem.id ? 'text-blue-400' : 'text-gray-300 hover:bg-gray-700/50'}
                        `}
                      >
                        <span className="whitespace-nowrap">{subItem.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;




