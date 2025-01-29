import React from 'react';

function Section5({ subSection }) {
  const subSectionTitles = {
    earnings: 'Earnings Overview',
    refunds: 'Refunds Management',
    declines: 'Declined Transactions',
    payouts: 'Payout History',
    default: 'Income Dashboard'
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">
        {subSection ? subSectionTitles[subSection] : subSectionTitles.default}
      </h1>
      <p className="text-gray-700">
        {subSection ? `View and manage your ${subSection}` : 'Income overview and analytics'}
      </p>
    </div>
  );
}

export default Section5;
