import cn from 'classnames'
import React from 'react'
import styles from './PlainInput.module.css'

const PlainInput = ({className, onValueChange, ...props}) => {
  return (
    <input type='text' className={cn(styles.input)} {...props}/>
  )
}

export default PlainInput