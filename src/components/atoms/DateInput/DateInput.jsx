import cn from 'classnames'
import React from 'react'
import styles from './DateInput.module.css'

const DateInput = ({onValueChange, value, className, ...props}) => {

  const onDateChange = (event) => {
    const date = event.nativeEvent.target.value
    onValueChange(new Date(date));
  }

  return (
    <input type='date' value={value} onChange={onDateChange} className={cn(styles.input, className)} min={'1970-01-01'} {...props}/>
  )
}

export default DateInput