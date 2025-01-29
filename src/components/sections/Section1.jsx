// import React from 'react';

// function Section1() {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">Section 1</h1>
//       <p className="text-gray-700">Welcome to section 1! This is your first content section.</p>
//       <div className="mt-4 p-4 bg-gray-100 rounded">
//         <p>Add your content here...</p>
//       </div>
//     </div>
//   );
// }

// export default Section1;


// import React from 'react';

// function Section1() {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">Section 1</h1>
//       <p className="text-gray-700">This is section 1 content.</p>
//       <div className="mt-4 p-4 bg-gray-100 rounded">
//         <p>Add your content here...</p>
//       </div>
//     </div>
//   );
// }

// export default Section1;




// import React from 'react';

// function Section1() {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <p className="text-gray-700">Dashboard overview and key metrics</p>
//     </div>
//   );
// }

// export default Section1;





// src/components/sections/Section1.jsx
import React from 'react';

function Section1() {
  return (
    <div className="p-4 space-y-8">
      {/* Header Section - Full Width */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-700">Dashboard overview and key metrics</p>
      </div>

      {/* Two Cards Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 1 (1x2 Grid - Left)</h2>
          <p className="text-gray-600">
            This card is part of a 1x2 grid layout. On mobile, it stacks vertically.
            The height adjusts automatically with content.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 2 (1x2 Grid - Right)</h2>
          <p className="text-gray-600">
            This card demonstrates equal height with its neighbor.
            Both cards in this row maintain the same height.
          </p>
        </div>
      </div>

      {/* Full Width Card */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-2">Full Width Card</h2>
        <p className="text-gray-600">
          This is a full-width container that spans the entire width of the section.
          It's useful for important information or wider content that needs more space.
          The height adjusts automatically based on content.
        </p>
      </div>

      {/* 2x2 Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 3 (2x2 Grid - Top Left)</h2>
          <p className="text-gray-600">Part of a 2x2 grid layout.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 4 (2x2 Grid - Top Right)</h2>
          <p className="text-gray-600">Part of a 2x2 grid layout.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 5 (2x2 Grid - Bottom Left)</h2>
          <p className="text-gray-600">Part of a 2x2 grid layout.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 6 (2x2 Grid - Bottom Right)</h2>
          <p className="text-gray-600">Part of a 2x2 grid layout.</p>
        </div>
      </div>

      {/* 3x1 Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 7 (3x1 Grid - Left)</h2>
          <p className="text-gray-600">Part of a 3x1 grid layout.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 8 (3x1 Grid - Center)</h2>
          <p className="text-gray-600">Part of a 3x1 grid layout.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 9 (3x1 Grid - Right)</h2>
          <p className="text-gray-600">Part of a 3x1 grid layout.</p>
        </div>
      </div>

      {/* 3x2 Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Card 10 (3x2 Grid - Wide Left)</h2>
          <p className="text-gray-600">
            This card spans two columns in a three-column grid.
            It demonstrates how to create wider cards within the grid system.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 11 (3x2 Grid - Right)</h2>
          <p className="text-gray-600">Single column card next to a wide card.</p>
        </div>
      </div>

      {/* Mixed Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Wide Content Card */}
        <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Card 12 (Wide Content)</h2>
          <p className="text-gray-600 mb-4">
            This is a wider card that's perfect for longer content.
            It spans two columns and can contain more detailed information.
          </p>
          <p className="text-gray-600 mb-4">
            You can add multiple paragraphs, lists, or other content here.
            The height will adjust automatically.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Example list item 1</li>
            <li>Example list item 2</li>
            <li>Example list item 3</li>
          </ul>
        </div>
        {/* Stacked Cards */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Card 13 (Stacked Top)</h2>
            <p className="text-gray-600">Part of a stacked layout.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Card 14 (Stacked Bottom)</h2>
            <p className="text-gray-600">Part of a stacked layout.</p>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="border-t border-gray-200 my-8">
        <div className="text-center -mt-3">
          <span className="bg-gray-50 px-4 text-sm text-gray-500">
            Section Divider
          </span>
        </div>
      </div>

      {/* Flexible Height Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 15 (Flexible Height)</h2>
          <p className="text-gray-600">
            This card demonstrates flexible height based on content.
            The more content you add, the taller it becomes.
          </p>
          <p className="text-gray-600 mt-4">
            Additional content makes this card taller than its neighbor,
            but the grid layout handles this gracefully.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Card 16 (Shorter Content)</h2>
          <p className="text-gray-600">This card has less content.</p>
        </div>
      </div>
    </div>
  );
}

export default Section1;































