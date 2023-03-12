import cn from 'classnames'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {

  const location = useLocation()
  

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__links}>
        <li>
          <Link 
            className={
              cn(styles.menu__linksItem, location.pathname === '/' && styles.menu__linksItem_active)
            } 
            to='/'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link 
            className={
              cn(styles.menu__linksItem, location.pathname === '/students' && styles.menu__linksItem_active)
            }
            to='/students'>
            Students
          </Link>
        </li>
        <li>
          <Link className={
            cn(styles.menu__linksItem, location.pathname === '/tasks' && styles.menu__linksItem_active)
          } 
          to='/tasks'>
            Tasks
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu