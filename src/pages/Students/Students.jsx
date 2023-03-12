import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import AddPopup from '../../components/AddPopup/AddPopup'
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup'
import Pagination from '../../components/Pagination/Pagination'
import StudentsTable from '../../components/StudentsTable/StudentsTable'
import Button from '../../components/atoms/Button/Button'
import withLayout from '../../layouts/withLayout'
import styles from './Students.module.css'

const groups = [
  {value: 'PZ-21', title: 'PZ-21'},
  {value: 'PZ-22', title: 'PZ-22'},
  {value: 'PZ-23', title: 'PZ-23'},
  {value: 'PZ-24', title: 'PZ-24'},
  {value: 'PZ-25', title: 'PZ-25'},
  {value: 'PZ-26', title: 'PZ-26'},
]


const Students = () => {

  const [showConfirm, setShowConfirm] = useState(false)
  const [isAddPopupOpen, setIsAddPopupOpen] = useState()
  const [students, setStudents] = useState([])
  const [defaultStudentToEdit, setDefaultStudentToEdit] = useState(null)
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false)
  const [idsToRemove, setIdsToRemove] = useState([])
  const [userToDelete, setUserToDelete] = useState('')

  const deletionConfirmed = () => {
    setStudents(prevState => {
      return prevState.filter(item => !idsToRemove.includes(item.id))
    })
  }

  const deletionCanceled = () => {
    setShowConfirm(false)
  }

  const removeStudents = (ids) => {
    setIdsToRemove(ids)
    if(ids.length === 1) {
      setUserToDelete('user ' + students.find(item => item.id === ids[0]).name)
    } else {
      setUserToDelete(ids.length + ' users')
    }
    setShowConfirm(true)
  }

  const editStudentPopupOpen = (id) => {
    const student = students.find(item => item.id === id)
    if(student) {
      setDefaultStudentToEdit(student)
      setIsEditPopupOpen(true)
    }
  }

  const editStudent = (student) => {
      setStudents(prevState => {
        const index = prevState.findIndex(item => item.id === student.id)
        if(index !== -1) {
          prevState.splice(index, 1, student)
        };
        return prevState
      })
  }

  const onSelect = (id, state) => {
    if(id === 'all') {
      setStudents(prevState => {
        return prevState.map(item => ({...item, selected: state}))
      })
    } else {
      setStudents(prevState => {
        return prevState.map(item => {
          if(item.id === id) {
            return {...item, selected: state}
          }
          return item
        })
      })
    }
  }

  const addStudent = (student) => {
    setStudents(prevState => {
      prevState.push(student)
      return prevState
    })
  }

  const onOnline = (id, status) => {
    setStudents(prevState => {
      return prevState.map(item => {
        if(item.id === id) {
          return {...item, isOnline: status}
        }
        return item
      })
    })
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
          <StudentsTable 
            students={students} 
            onEdit={editStudentPopupOpen}
            onRemove={removeStudents}
            onSelect={onSelect}
            onOnline={onOnline}
          />
        </div>
      </div>
      <div className={styles.students__pagination}>
        <Pagination />
      </div>
      {showConfirm && 
        <ConfirmPopup 
          onClose={deletionCanceled} 
          onConfirm={deletionConfirmed} 
          text={`Are you sure you want to delete ${userToDelete}?`} 
        />
      }
      {isAddPopupOpen && <AddPopup onCreate={addStudent} groups={groups} onClose={() => setIsAddPopupOpen(false)} />}
      {isEditPopupOpen && 
        <AddPopup 
          onEdit={editStudent} 
          groups={groups} 
          defaultStudent={defaultStudentToEdit} 
          onClose={() => setIsEditPopupOpen(false)}  
        />}
    </div>
  )
}

export default withLayout(Students)