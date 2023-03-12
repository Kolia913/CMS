import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import Button from '../atoms/Button/Button'
import PlainInput from '../atoms/PlainInput/PlainInput'
import styles from './AddPopup.module.css'

const AddPopup = ({text, onCreate, onClose}) => {

  const close = () => {
    onClose()
  }

  const create = () => {
    onCreate()
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.popup}>
        <div className={styles.popup__header}>
          <h3 className={styles.popup__headerTitle}>Add student</h3>
          <Button className={styles.popup__headerClose} outlineThin onClick={close}>
            <RxCross2 size={20} />
          </Button>
        </div>
        <div className={styles.popup__content}>
          <PlainInput />
        </div>
        <div className={styles.popup__footer}>
          <div className={styles.popup__footerButtons}>
            <Button text={'Ok'} outlineThin className={styles.popup__footerButtonsItem} onClick={close} />
            <Button text={'Create'} outlineThin className={styles.popup__footerButtonsItem} onClick={create} />
          </div>
        </div> 
      </div>
    </div>
  )
}

export default AddPopup