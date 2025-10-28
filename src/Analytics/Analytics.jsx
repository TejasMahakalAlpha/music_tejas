import React from 'react';
import './Analytics.css';
import TotalRevenue from "./TotalRevenue";
import ProductPerformnaceBreakdown from "./ProductPerformanceBreakdown";
import MonthlyRevenueTrend from "./MonthlyRevenueTrend";

function Analytics() {
  return (
    <div className="analytics-wrapper">
      <TotalRevenue />
      <ProductPerformnaceBreakdown />
      <MonthlyRevenueTrend />
    </div>
  );
}

export default Analytics;