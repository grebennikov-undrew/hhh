import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const HeatMap = (props) => {
  const {actualValues} = props;
  const currentYear = new Date().getFullYear();
  return (
    <div >
        <CalendarHeatmap
        startDate={new Date(`${currentYear-1}-12-31`)}
        endDate={new Date(`${currentYear}-12-31`)}
        values={actualValues}
        />
    </div>
  )
};

export default HeatMap