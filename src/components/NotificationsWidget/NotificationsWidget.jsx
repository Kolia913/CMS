import PropTypes from 'prop-types'
import React from 'react'
import Notification from '../Notification/Notification'
import styles from './NotificationsWidget.module.css'

const NotificationsWidget = ({isDropdown}) => {
  return (
    <div className={styles.widget}>
      { !isDropdown && <h2 className={styles.widget__title}>
      Notifications
      </h2> }
      <div className={styles.widget__content}>
        <ul className={styles.widget__contentList}>
          <li className={styles.widget__contentListItem}>
            <Notification author={'Admin'} />
          </li>
          <li className={styles.widget__contentListItem}>
            <Notification author={'John K.'} />
          </li>
          <li className={styles.widget__contentListItem}>
            <Notification author={'Marry J.'} /> 
          </li>
        </ul>
      </div>
    </div>
  )
}

NotificationsWidget.propTypes = {
  isDropdown: PropTypes.bool
}

export default NotificationsWidget