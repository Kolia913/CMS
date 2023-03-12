import cn from 'classnames'
import React from 'react'
import { MdOutlineDone } from 'react-icons/md'
import styles from './Checkbox.module.css'

const Checkbox = ({checked = false, onCheck, className, ...props}) => {

  const onCheckClick = () => {
    onCheck(!checked)
  }

  return (
    <button onClick={onCheckClick} className={cn(styles.checkbox, className)} {...props}>
      {checked && <MdOutlineDone />}
    </button>
  )
}

export default Checkbox