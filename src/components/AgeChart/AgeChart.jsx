import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './AgeChart.module.css';

const AgeChart = ({title, labels, data}) => {

  const chartOptions = useMemo (() => {
    return {
      responsive: false,
      plugins: {
        legend: {
          display: false
        },
      },
      layout: {
        padding: 40
      }
    }
  }, [])

  const chartData = useMemo(() => {
    return {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            'rgb(35, 136, 253)',
            'rgb(79, 227, 193)',
            'rgb(245, 165, 36)',
            'rgb(255, 100, 85)',
          ],
          borderColor: [
            'rgb(35, 136, 253)',
            'rgb(79, 227, 193)',
            'rgb(245, 165, 36)',
            'rgb(255, 100, 85)',
          ],
          borderWidth: 1,
        }
      ]
    }
  }, [data, labels])

  const counter = {
    id: 'counter',
    afterDatasetDraw(chart, _args, _options) {
      const {ctx, chartArea: {top, width, height}} = chart
      ctx.save()

      setFontParams(ctx, {size: 24, color: '#A4A4A4', alignment: 'center'})
      const total = chart.getDatasetMeta(0).total
      ctx.fillText(total, (width / 2) + 26 , top + (height / 2) - 10)
      setFontParams(ctx, {size: 16, color: '#A4A4A4', alignment: 'center'})
      ctx.fillText("ANSWERS", (width / 2) , top + (height / 2) + 14)
    }
  }

  const doughnutLabels = {
    id: 'doughnutLabels',
    afterDraw(chart, _args, _options) {
      const {ctx, chartArea: {width, height}} = chart
      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
          const {x,y} = datapoint.tooltipPosition()
          const halfWidth = width / 2
          const halfHeight = height / 2

          const rightHalf = isRightHalf(x-40, halfWidth)
          const topHalf = isTopHalf(y-40, halfHeight)

          const xLine = rightHalf ? x + 45 : x - 45
          const yLine = topHalf ? y + 30 : y - 30

          ctx.beginPath()
          ctx.moveTo(xLine, yLine)
          drawRects(ctx, {
              x: xLine, 
              y: yLine, 
              color: dataset.borderColor[index],
              isRightHalf: rightHalf,
              isTopHalf: topHalf
            }
          )
          setFontParams(ctx, {size: 14, color: '#333333', alignment: 'middle'})
          let currentValue = dataset.data[index]
          fillText(ctx, currentValue, {
            x: xLine,
            y: yLine,
            isRightHalf: rightHalf,
            isTopHalf: topHalf
          })
          let total = dataset.data.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
          });
          setFontParams(ctx, {size: 10, color: '#A4A4A4', alignment: 'baseline'})
          fillText(ctx, `${Math.floor(((currentValue/total) * 100)+0.5)}%`, {
            x: xLine,
            y: yLine,
            isRightHalf: rightHalf,
            isTopHalf: topHalf,
            offsetX: 18,
            offsetY: 1
          })
          setFontParams(ctx, {size: 14, color: '#333333', alignment: 'baseline'})
          fillText(ctx, chart.data.labels[index], {
            x: xLine,
            y: yLine,
            isRightHalf: rightHalf,
            isTopHalf: topHalf,
            offsetX: -24,
            offsetY: -24
          })
        })
      })
    }
  }
  const drawRects = (ctx, {x, y, color, isRightHalf, isTopHalf}) => {
    const {xRect, yRect} = getCordinates(x,y, {isRightHalf, isTopHalf})

    ctx.moveTo(x, y)
    ctx.strokeStyle = "rgba(0,0,0,0.1)"
    ctx.fillStyle = color
    configureShadow(ctx)
    ctx.roundRect(xRect, yRect, 65,25, 5)
    ctx.stroke()
    configureShadow(ctx, {shadowColor: 'rgba(0,0,0,0)'})
    ctx.fillRect(xRect+5, yRect+5, 15,15)
  }

  const getCordinates = (x, y, {isRightHalf, isTopHalf}) => {
    const xOffset = isRightHalf ? 0 : 54
    const yOffset = isTopHalf ? 0 : 20

    return {
      xRect: x - xOffset,
      yRect: y - yOffset
    }
  }

  const isRightHalf = (x, halfWidth) => x >= halfWidth
  const isTopHalf = (y, halfHeight) => y >= halfHeight

  const configureShadow = (ctx, {
    shadowOffsetX = 0,
    shadowOffsetY = 2,
    shadowBlur = 3,
    shadowColor = "rgba(0, 0, 0, 0.9)"
  } = {}) => {
    ctx.shadowOffsetX = shadowOffsetX;
    ctx.shadowOffsetY = shadowOffsetY;
    ctx.shadowBlur = shadowBlur;
    ctx.shadowColor = shadowColor;
  }

  const setFontParams = (ctx, {size, color, alignment}) => {
    ctx.fillStyle = color
    ctx.textBaseline = alignment
    ctx.font = `${size}px sans-serif`
  }

  const fillText = (ctx, text, 
      {
        x, 
        y, 
        isRightHalf, 
        isTopHalf, 
        offsetX = 0, 
        offsetY = 0
      }
    ) => {
    const textOffsetX = isRightHalf ? 24 : -30
    const textOffsetY = !isTopHalf ? -6 : 14
    ctx.fillText(text, x + textOffsetX + offsetX, y + textOffsetY + offsetY)
  }

  return (
    <div className={styles.chart}>
      <h2 className={styles.chart__title}>{title}</h2>
      <div className={styles.chart__wrapper}>
        <Doughnut 
          className={styles.chart__content} 
          data={chartData} 
          height="300px"
          width="500px"
          options={chartOptions}
          plugins={[counter, doughnutLabels]}
        />
      </div>
    </div>
  )
}

AgeChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  labels: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default AgeChart