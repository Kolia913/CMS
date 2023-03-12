import cn from 'classnames'
import React, { useState } from 'react'
import { BsBell } from 'react-icons/bs'
import animations from './BellAnimation.module.css'
import styles from './Header.module.css'

const Header = () => {

  const [isNewMessages, setIsNewMessages] = useState(false)
  const [isMessagesRead, setIsMessagesRead] = useState(false)

  const animate = () => {
    setIsNewMessages(true)
    
    setTimeout(() => {
      setIsNewMessages(false)
    }, 300)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <h1 className={styles.header__logoText}>CMS</h1>
      </div>
      <div className={styles.header__info}>
        <div 
          className={styles.header__notifications} 
          onClick={animate} 
          onDoubleClick={() => setIsMessagesRead(!isMessagesRead)}
        >
          {!isMessagesRead && <div className={styles.header__notificationsBadge}></div>}
          <BsBell className={cn(styles.header__notificationsIcon, isNewMessages && animations.bellAnimation)} />
        </div>
        <div className={styles.header__profile}>
          <img className={styles.header__profileImage} src="/assets/images/thumbnail.jpeg" alt="avatar" />
          <span className={styles.header__profileName}>James Bond</span>
        </div>
      </div>
    </header>
  )
}

export default Header