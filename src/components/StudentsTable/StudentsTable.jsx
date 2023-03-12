import cn from 'classnames'
import React, { useState } from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import Button from '../atoms/Button/Button'
import Checkbox from '../atoms/Checkbox/Checkbox'
import OnlineStatus from '../atoms/OnlineStatus/OnlineStatus'
import styles from './StudentsTable.module.css'

const StudentsTable = ({students = [], onRemove, onSelect, onEdit, className, ...props}) => {

  const [isAllChecked, setIsAllChecked] = useState(false)

  const checkAll = () => {
    setIsAllChecked(!isAllChecked)
  }

  const selectStudent = (id) => {
    onSelect(id)
  }

  const removeStudent = (id) => {
    onRemove(id)
  }

  const editStudent = (id) => {
    onEdit(id)
  }

  return (
    <table styles={cn(styles.table, className)} {...props}>
      <thead>
        <tr className={styles.table__bodyRow}>
            <th className={styles.table__headerItem}>
              <Checkbox className={styles.table__checkbox} onCheck={checkAll} checked={isAllChecked} />
            </th>
            <th className={styles.table__headerItem}>Group</th>
            <th className={styles.table__headerItem}>Name</th>
            <th className={styles.table__headerItem}>Gender</th>
            <th className={styles.table__headerItem}>Birthday</th>
            <th className={styles.table__headerItem}>Status</th>
            <th className={styles.table__headerItem}>Options</th>
          </tr>
      </thead>
      <tbody className={styles.table__body}>
        {students.map(item => (
                  <tr className={styles.table__bodyRow}>
                  <td className={styles.table__bodyColumn}>
                    <Checkbox 
                      className={styles.table__checkbox} 
                      onCheck={() => selectStudent(item.id)} 
                      checked={item.selected} 
                    />
                  </td>
                  <td className={styles.table__bodyColumn}>{item.group}</td>
                  <td className={styles.table__bodyColumn}>{item.name}</td>
                  <td className={styles.table__bodyColumn}>{item.gender}</td>
                  <td className={styles.table__bodyColumn}>{item.birthDay}</td>
                  <td className={styles.table__bodyColumn}><OnlineStatus isOnline={item.isOnline} /></td>
                  <td className={styles.table__bodyColumn}>
                    <Button className={styles.table__btnOption} outlineThin onClick={() => editStudent(item.id)}>
                      <MdOutlineEdit size={20} />
                    </Button>
                    <Button className={styles.table__btnOption} outlineThin onClick={() => removeStudent(item.id)}>
                      <RxCross2 size={20} />
                    </Button>
                  </td>
                </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StudentsTable