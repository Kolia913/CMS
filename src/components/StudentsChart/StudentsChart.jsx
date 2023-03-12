import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import styles from './StudentsChart.module.css';
const chartOptions = {
  responsive: true,
  plugins: {
    legend: null,
  },
};

const StudentsChart = ({data, labels, title, isMonth}) => {

  const chartData = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          fill: true,
          data,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    }
  }, [data, labels])

  return (
    <div className={styles.chart}>
      <h2 className={styles.chart__title}>{title}</h2>
      <div className={styles.chart__wrapper}>
        <Line className={styles.chart__content} options={chartOptions} data={chartData} />
      </div>
      <h3 className={styles.chart__bottomLabel}>{isMonth ? 'Month' : 'Day'}</h3>
    </div>
  )
}

StudentsChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  labels: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  isMonth: PropTypes.bool
}

export default StudentsChart
