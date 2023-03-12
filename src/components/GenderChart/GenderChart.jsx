import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import styles from './GenderChart.module.css';

const chartOptions = {
  responsive: true,

  plugins: {
    legend: {
      position: 'right',
    }
  },
};

const GenderChart = ({labels, femaleData, maleData, title}) => {

  const chartData = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          label: 'Male',
          data: maleData,
          borderColor: 'rgb(36, 136, 253)',
          backgroundColor: 'rgb(36, 136, 253)',
        },
        {
          label: 'Female',
          data: femaleData,
          borderColor: 'rgb(80, 227, 194)',
          backgroundColor: 'rgb(80, 227, 194)',
        },
      ]
  }}, [labels, femaleData, maleData])

  return (
    <div className={styles.chart}>
    <h2 className={styles.chart__title}>{title}</h2>
    <div className={styles.chart__wrapper}>
      <Line 
        className={styles.chart__content} 
        data={chartData} 
        options={chartOptions}
      />
    </div>
  </div>
  )
}

GenderChart.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  femaleData: PropTypes.arrayOf(PropTypes.number),
  maleData: PropTypes.arrayOf(PropTypes.number),
  title: PropTypes.string
}

export default GenderChart