import React from 'react'
import RevenueData from './RevenueData';
import ExportData from './ExportData';
import PlatformWisePerformance from './PlatformWisePerformance';
function MonthWiseEarnings() {
  return (
    <div>

      <RevenueData/>
      
      <ExportData/>
      <PlatformWisePerformance/>
    </div>
  )
}

export default MonthWiseEarnings