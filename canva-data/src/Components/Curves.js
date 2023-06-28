import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import customerData from '../Assets/customerData';

// const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Curves = () => {
  const [selectedCurve, setSelectedCurve] = useState(customerData[0].id);

  const handleCurveChange = (event) => {
    setSelectedCurve(event.target.value);
  };

  const options = {
    // Options configuration
    data: customerData.map(({ id, dataPoints }) => ({
      type: 'spline',
      name: id,
      showInLegend: true,
      dataPoints: dataPoints,
      visible: id === selectedCurve,
    })),
  };

  return (
    <div>
      <h1>Number of Crashes V Fatality Index</h1>
      <div>
        <label>
          Select Curve:
          <select value={selectedCurve} onChange={handleCurveChange}>
            {customerData.map(({ id }) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
        </label>
      </div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Curves;
