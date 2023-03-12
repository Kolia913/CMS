import React from 'react'
import styles from './TasksWidget.module.css'

const TasksWidget = () => {
  return (
    <div className={styles.widget}>
      <h2 className={styles.widget__title}>
        Tasks
      </h2>
      <div className={styles.widget__content}>
        <ul className={styles.widget__contentList}>
          <li className={styles.widget__contentListItem}>
            <span>Introductory information</span> - <span 
            className={styles.widget__contentListItem_done}
            >Done</span>
          </li>
          <li className={styles.widget__contentListItem}>
            <span>Task #1</span> - <span
              className={styles.widget__contentListItem_inProgress}
            >In progress</span>
          </li>
          <li className={styles.widget__contentListItem}>
            <span>Task #2</span> - <span
              className={styles.widget__contentListItem_todo}
            >To Do</span>
          </li>
          <li className={styles.widget__contentListItem}>
            <span>Task #4</span> - <span
              className={styles.widget__contentListItem_todo}
            >To Do</span>
          </li>
          <li className={styles.widget__contentListItem}>
            <span>Task #5</span> - <span
              className={styles.widget__contentListItem_todo}
            >To Do</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TasksWidget