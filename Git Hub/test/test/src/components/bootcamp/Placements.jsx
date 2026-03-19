import React, { useEffect, useRef } from 'react';

const PlacementStats = () => {
  // Data for stipend statistics
  const data = {
    averageStipend: 26333.33,
    medianStipend: 25000,
    top20AvgStipend: 44166,
    minStipend: 15000,
    maxStipend: 45000,
    percentile25: 15000,
    percentile75: 30000,
  };

  // Ref for the chart container
  const chartRef = useRef(null);

  useEffect(() => {
    // Function to create the bar chart
    const createBarChart = () => {
      const canvas = chartRef.current;
      const ctx = canvas.getContext('2d');

      // Define data points
      const dataPoints = [
        { label: 'Average Stipend', value: data.averageStipend },
        { label: 'Median Stipend', value: data.medianStipend },
        { label: 'Top 20% Avg. Stipend', value: data.top20AvgStipend },
        { label: '25th Percentile Stipend', value: data.percentile25 },
        { label: '75th Percentile Stipend', value: data.percentile75 },
      ];

      // Calculate the maximum value for scaling
      const maxDataValue = Math.max(...dataPoints.map((point) => point.value));

      // Set canvas dimensions
      canvas.width = 400;
      canvas.height = 300;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Define chart parameters
      const barWidth = 30;
      const spacing = 40;
      const startX = 50;
      const startY = 50;

      // Draw bars
      dataPoints.forEach((point, index) => {
        const barHeight = (point.value / maxDataValue) * 200;
        const x = startX + index * (barWidth + spacing);
        const y = startY + 200 - barHeight;

        // Draw the bar
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, barWidth, barHeight);

        // Draw the label
        ctx.fillStyle = 'black';
        ctx.fillText(point.label, x - 5, startY + 220);
      });
    };

    createBarChart();
  }, []);

  return (
    <div className="placement-stats">
      <h2>Previous Students Placement Stats</h2>
      <p>
        {`Average (Mean) Stipend: ₹${data.averageStipend.toFixed(2)}`}
        <br />
        {`Median Stipend: ₹${data.medianStipend}`}
        <br />
        {`Top 20% Avg. Stipend: ₹${data.top20AvgStipend}`}
        <br />
        {`Stipend Range: ₹${data.minStipend} - ₹${data.maxStipend}`}
        <br />
        {`25th Percentile Stipend: ₹${data.percentile25} (25% of students)`}
        <br />
        {`75th Percentile Stipend: ₹${data.percentile75} (75% of students)`}
      </p>
      <canvas ref={chartRef}></canvas>
      <style>
        {`
          .placement-stats {
            color: black;
            background-color: white;
            padding: 30px;
            margin: 20px auto;
            max-width: 800px;
            border: 2px solid #000;
            border-radius: 8px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
          }

          .placement-stats h2 {
            border-bottom: 2px solid black;
            padding-bottom: 15px;
            margin-bottom: 30px;
            font-size: 28px;
          }

          .placement-stats p {
            line-height: 1.6;
            margin-bottom: 20px;
            font-size: 16px;
            text-align: justify;
          }

          canvas {
            margin-top: 20px;
          }

          @media (max-width: 600px) {
            .placement-stats {
              padding: 20px;
              margin: 10px;
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PlacementStats;
