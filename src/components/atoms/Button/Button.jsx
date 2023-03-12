import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.module.css';

const Button = ({text, outlineThin = false, className, children, ...props}) => {
  return (
    <button 
      className={cn([styles.button, outlineThin && styles.borderThin, className])} 
      {...props}
    >
      {text && <span className={styles.button__text}>{text}</span>}
      {children && children}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
}

export default Button