import PropTypes from 'prop-types'
import React from 'react'
import styles from './Notification.module.css'

const Notification = ({author}) => {
  return (
    <div className={styles.notification}>
      <div className={styles.notification__author}>
        <img 
          className={styles.notification__authorAvatar} 
          src="/assets/images/thumbnail.jpeg" 
          alt="avatar" 
        />
        <span className={styles.notification__authorName}>{author}</span>
      </div>
      <div className={styles.notification__content}>
        {/* <p>Message</p> */}
        <div className={styles.notification__contentPointer}></div>
      </div>
    </div>
  )
}

Notification.propTypes = {
  author: PropTypes.string,
}

export default Notification