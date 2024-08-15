import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const NICPieChart = ({ fileNameCounts }) => {
  // Initialize an empty array for the chart data
  let data = [];
  
  // Create a counter for unique ids
  let idCounter = 0;

  // Populate the data array using fileNameCounts
  for (const [fileName, count] of Object.entries(fileNameCounts)) {
    data.push({
      id: idCounter++, // Incremental id for each entry
      value: count,
      label: fileName,
    });
  }

  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
  );
};

export default NICPieChart;

