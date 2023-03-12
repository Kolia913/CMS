import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import Button from '../atoms/Button/Button'
import DateInput from '../atoms/DateInput/DateInput'
import PlainInput from '../atoms/PlainInput/PlainInput'
import SelectInput from '../atoms/SelectInput/SelectInput'
import styles from './AddPopup.module.css'

const genders = [
  {value: 'M', title: 'Male'},
  {value: 'F', title: 'Female'}
]

const AddPopup = ({groups = [], defaultStudent = null, onCreate, onEdit = undefined, onClose}) => {

  const [group, setGroup] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    if(defaultStudent) {
      setGroup(defaultStudent.group)
      setFirstName(defaultStudent.name.split(/\s+/)[0])
      setLastName(defaultStudent.name.split(/\s+/)[1])
      setGender(defaultStudent.gender)
      setDate(defaultStudent.birthDay)
    }
  }, [defaultStudent])
  
  const close = () => {
    onClose()
  }


  const onDateChange = (date) => {
    let dateString = date.toLocaleDateString().replace(/\.\//g, '/').split('/').reverse();
    console.log(dateString);
    setDate(dateString.join('-'))
  }

  const mapFormFieldsAndCreateUserObject = () => {
    let id = new Date().getTime()
    if(defaultStudent) {
      id = defaultStudent.id
    }
    return {
      id,
      name: firstName + " " + lastName,
      gender,
      birthDay: date,
      group,
      isOnline: false,
      selected: false,
    }
  }

  const create = () => {
    onCreate(mapFormFieldsAndCreateUserObject())
    close()
  }

  const edit = () => {
    onEdit(mapFormFieldsAndCreateUserObject())
    close()
  }

  const submitForm = (event) => {
    event.preventDefault()
    if(defaultStudent) {
      onCreate(mapFormFieldsAndCreateUserObject())
    } else {
      onEdit(mapFormFieldsAndCreateUserObject())
    }
    close()
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
          <form className={styles.popup__contentForm} onSubmit={submitForm}>
          <div className={styles.popup__contentFormGroup}>
                Group <SelectInput 
                  options={groups}
                  placeholder={'Select Group'}
                  onSelect={setGroup}
                  defaultValue={defaultStudent && defaultStudent.group}
                  className={styles.popup__contentFormInput}
                />
            </div>
            <div className={styles.popup__contentFormGroup}>
              First name <PlainInput 
                value={firstName} 
                onValueChange={setFirstName} 
                className={styles.popup__contentFormInput}
              />
            </div>
            <div className={styles.popup__contentFormGroup}>
              Last name <PlainInput 
                value={lastName}
                onValueChange={setLastName}
                className={styles.popup__contentFormInput}
              />
            </div>
            <div className={styles.popup__contentFormGroup}>
              Gender <SelectInput
                options={genders}
                placeholder={'Select Gender'}
                onSelect={setGender}
                defaultValue={defaultStudent && defaultStudent.gender}
                className={styles.popup__contentFormInput}
              />
            </div>
            <div className={styles.popup__contentFormGroup}>
              Birthday <DateInput
                onValueChange={onDateChange}
                value={date}
                className={styles.popup__contentFormInput}
              />
            </div>
          </form>
        </div>
        <div className={styles.popup__footer}>
          <div className={styles.popup__footerButtons}>
            <Button text={'Ok'} outlineThin className={styles.popup__footerButtonsItem} onClick={close} />
            {!defaultStudent && <Button text={'Create'} outlineThin className={styles.popup__footerButtonsItem} onClick={create} />}
            {defaultStudent && <Button text={'Save'} outlineThin className={styles.popup__footerButtonsItem} onClick={edit} />}
          </div>
        </div> 
      </div>
    </div>
  )
}

export default AddPopup