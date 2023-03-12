import React from 'react'
import styles from './InformationsWidget.module.css'

const InformationsWidget = () => {
  return (
    <div className={styles.widget}>
      <h2 className={styles.widget__title}>
        Informations
      </h2>
      <div className={styles.widget__content}>
        <ul className={styles.widget__contentList}>
          <li className={styles.widget__contentListItem}>
            <span>27.02</span> - <span>Beggining of studies</span>
          </li>
          <li className={styles.widget__contentListItem}>
            <span>10.03</span> - <span>Task #1</span>
          </li>
          <li className={styles.widget__contentListItem}>
            <span>20.03</span> - <span>Task #1</span>
          </li>
          <li className={styles.widget__contentListItem}>
            <span>25.03</span> - <span>Task #1</span>
          </li>
          <li className={styles.widget__contentListItem}>
            <span>30.03</span> - <span>Task #1</span>
          </li>
          <li className={styles.widget__contentListItem}>
            <span>02.04</span> - <span>Task #1</span>
          </li>
          <li className={styles.widget__contentListItem}>
            <span>05.04</span> - <span>The end</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default InformationsWidget