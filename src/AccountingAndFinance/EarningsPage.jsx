import React, { useState } from 'react';
import EarningPaidToYou from './EarningPaidToYou';
import TransactionDetail from './TransactionDetail';
import './EarningsPage.css';

const EarningsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="earnings-page-container">
      <div className="tabs">
        <button 
          className={activeTab === 'overview' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'transaction' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('transaction')}
        >
          Transaction Detail
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'overview' && <EarningPaidToYou />}
        {activeTab === 'transaction' && <TransactionDetail />}
      </div>
    </div>
  );
};

export default EarningsPage;