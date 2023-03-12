import cn from 'classnames'
import React from 'react'
import styles from './PlainInput.module.css'

const PlainInput = ({onValueChange, className, ...props}) => {

  const textChange = (event) => {
    const text = event.nativeEvent.target.value
    onValueChange(text.trim())
  }

  return (
    <input type='text' onChange={textChange} className={cn(styles.input, className)} {...props}/>
  )
}

export default PlainInput