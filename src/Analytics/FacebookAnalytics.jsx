import React from 'react';
import './FacebookAnalytics.css';
import TotalRevenue from "./TotalRevenue";
import ProductPerformnaceBreakdown from "./ProductPerformanceBreakdown";
import MonthlyRevenueTrend from "./MonthlyRevenueTrend";

function FacebookAnalytics() {
  return (
    <div className="analytics-wrapper">
      <TotalRevenue />
      <ProductPerformnaceBreakdown />
      <MonthlyRevenueTrend />
    </div>
  );
}

export default FacebookAnalytics;