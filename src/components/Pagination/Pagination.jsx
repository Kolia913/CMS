import React from 'react'
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'
import Button from '../atoms/Button/Button'
import styles from './Pagination.module.css'

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <Button outlineThin className={styles.pagination__link}><MdOutlineNavigateBefore size={20} /></Button>
      <Button outlineThin text={'1'} className={styles.pagination__link} />
      <Button outlineThin text={'2'} className={styles.pagination__link} />
      <Button outlineThin text={'3'} className={styles.pagination__link} />
      <Button outlineThin text={'4'} className={styles.pagination__link} />
      <Button outlineThin className={styles.pagination__link}><MdOutlineNavigateNext size={20} /></Button>
    </div>
  )
}

export default Pagination