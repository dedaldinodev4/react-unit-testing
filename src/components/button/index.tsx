import React, { useState, ReactChild } from 'react'

type IProps = {
  variant?: 'primary' | 'secondary',
  children: ReactChild
}

const _COLORS = {
  LIGHT: 'light',
  DARK: 'dark' 
}

export const Button: React.FC<IProps> = ({ variant, children}) => {
  const [status, setStatus] = useState<string>(_COLORS.LIGHT)

  const onMouseEnter = () => {
    setStatus(_COLORS.DARK)
  }

  const onMouseLeave = () => {
    setStatus(_COLORS.LIGHT)
  }

  return (
    <button 
      className={variant ?? ''}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      title={status}
      name="Submit"
    >
      { children }
    </button>
  );

}