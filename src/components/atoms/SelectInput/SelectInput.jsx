import cn from 'classnames'
import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import styles from './SelectInput.module.css'

const SelectInput = ({options, onSelect, defaultValue = '', className, ...props}) => {

  const onValueSelect = (event) => {
    const value = event.nativeEvent.target.value
    onSelect(value);
  }


  return (
    <div className={cn(styles.wrapper, className)}>
      <select className={styles.select} onChange={onValueSelect} {...props}>
      <option disabled selected value="" className={styles.placeholder}>{props.placeholder}</option>
        {options.map(item => {
          return <option value={item.value} key={item.value} selected={defaultValue === item.value} >{item.title}</option>
        })}
      </select>
      <MdArrowDropDown size={40} className={styles.arrow} />
    </div>
  )
}

export default SelectInput