import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import Button from '../atoms/Button/Button'
import styles from './ConfirmPopup.module.css'

const ConfirmPopup = ({text, onConfirm, onClose}) => {

  const close = () => {
    onClose()
  }

  const confirm = () => {
    onConfirm()
    close()
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.popup}>
        <div className={styles.popup__header}>
          <h3 className={styles.popup__headerTitle}>Warning</h3>
          <Button className={styles.popup__headerClose} outlineThin onClick={close}>
            <RxCross2 size={20} />
          </Button>
        </div>
        <div className={styles.popup__content}>
          <span className={styles.popup__contentText}>{text}</span>
        </div>
        <div className={styles.popup__footer}>
          <div className={styles.popup__footerButtons}>
            <Button text={'Ok'} outlineThin className={styles.popup__footerButtonsItem} onClick={confirm} />
            <Button text={'Cancel'} outlineThin className={styles.popup__footerButtonsItem} onClick={close} />
          </div>
        </div> 
      </div>
    </div>
  )
}

export default ConfirmPopup