import cn from 'classnames'
import React from 'react'
import styles from './OnlineStatus.module.css'

const OnlineStatus = ({isOnline = false}) => {


  return (
    <div className={cn(styles.status, isOnline && styles.online)}>
    </div>
  )
}

export default OnlineStatus