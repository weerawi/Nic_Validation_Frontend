import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const FileDataBarChart = ({ validCounts = {}, invalidCounts = {} }) => {
  // Transform data for the BarChart
  const fileNames = Object.keys(validCounts);
  const validCountsArray = fileNames.map(fileName => validCounts[fileName] || 0);
  const invalidCountsArray = fileNames.map(fileName => invalidCounts[fileName] || 0);

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: fileNames }]}
      series={[
        { label: 'Valid', data: validCountsArray },
        { label: 'Invalid', data: invalidCountsArray }
      ]}
      width={500}
      height={400}
    />
  );
};

export default FileDataBarChart;

