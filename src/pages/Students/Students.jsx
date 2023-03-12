import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import AddPopup from '../../components/AddPopup/AddPopup'
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup'
import Pagination from '../../components/Pagination/Pagination'
import StudentsTable from '../../components/StudentsTable/StudentsTable'
import Button from '../../components/atoms/Button/Button'
import withLayout from '../../layouts/withLayout'
import styles from './Students.module.css'

const Students = () => {

  const [showConfirm, setShowConfirm] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState()

  const deletionConfirmed = () => {

  }

  const deletionCanceled = () => {

  }

  return (
    <div className={styles.students}>
      <div className={styles.students__title}>
        <h2>
            Students
        </h2>
      </div>
      <div className={styles.students__table}>
        <div className={styles.students__table__add}>
          <Button className={styles.students__table__addBtn} onClick={() => setIsAddPopupOpen(true)}>
            <BiPlus size={20} />
          </Button>
        </div>
        <div className={styles.students__table__content}>
          <StudentsTable />
        </div>
      </div>
      <div className={styles.students__pagination}>
        <Pagination />
      </div>
      {showConfirm && 
        <ConfirmPopup 
          onClose={deletionCanceled} 
          onConfirm={deletionConfirmed} 
          text={'Are you sure you want to delete user Ann Bond?'} 
        />
      }
      {isAddPopupOpen && <AddPopup onClose={() => setIsAddPopupOpen(false)} />}
    </div>
  )
}

export default withLayout(Students)