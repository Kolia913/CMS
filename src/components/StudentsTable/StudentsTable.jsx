import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import Button from '../atoms/Button/Button'
import Checkbox from '../atoms/Checkbox/Checkbox'
import OnlineStatus from '../atoms/OnlineStatus/OnlineStatus'
import styles from './StudentsTable.module.css'

const StudentsTable = ({students = [], onRemove, onSelect, onEdit, onOnline, className, ...props}) => {

  const [isAllChecked, setIsAllChecked] = useState(false)
  const [editDisabled, setEditDisabled] = useState(false)

  useEffect(() => {
    if(students?.length) {
      const resUnselected = students.filter(item => item.selected === false)  
      resUnselected.length > 0 ? setIsAllChecked(false) : setIsAllChecked(true)
      const resSelected = students.filter(item => item.selected === true)  
      resSelected.length > 0 ? setEditDisabled(true) : setEditDisabled(false)
    }
  }, [students])

  const checkAll = () => {
    onSelect('all', !isAllChecked)
    setIsAllChecked(!isAllChecked)
  }

  const selectStudent = (id, selected) => {
    onSelect(id, !selected)
  }

  const removeStudent = (id) => {
    const resSelected = students.filter(item => item.selected === true)  
    if(resSelected.length < 1) {
      onRemove([id])
    } else {
      const ids = []
      resSelected.forEach(item => {
        ids.push(item.id)
      })
      onRemove(ids)
    }
  }

  const editStudent = (id) => {
    onEdit(id)
  }

  const changeStatus = (id, status) => {
    onOnline(id, status)
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
                  <tr className={styles.table__bodyRow} key={item.id}>
                  <td className={styles.table__bodyColumn}>
                    <Checkbox 
                      className={styles.table__checkbox} 
                      onCheck={() => selectStudent(item.id, item.selected)} 
                      checked={item.selected} 
                    />
                  </td>
                  <td className={styles.table__bodyColumn}>{item.group}</td>
                  <td className={styles.table__bodyColumn}>{item.name}</td>
                  <td className={styles.table__bodyColumn}>{item.gender}</td>
                  <td className={styles.table__bodyColumn}>{item.birthDay}</td>
                  <td className={styles.table__bodyColumn} onClick={() => changeStatus(item.id, !item.isOnline)} ><OnlineStatus isOnline={item.isOnline} /></td>
                  <td className={styles.table__bodyColumn}>
                    <Button disabled={editDisabled} className={styles.table__btnOption} outlineThin onClick={() => editStudent(item.id)}>
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