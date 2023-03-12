import React from 'react'
import Header from '../../components/partials/Header/Header'
import Menu from '../../components/partials/Menu/Menu'
import styles from './MainLayout.module.css'

const MainLayout = ({children}) => {
  return (
    <>
    <Header />
    <div className={styles.content}>
      <Menu />
      <main id={styles.main}>
        {children}
      </main>
    </div>
  </>
  )
}

export default MainLayout