import React, { useState, ReactChild } from 'react'

type IProps = {
  page?: string;
  children?: ReactChild
}

const _STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
};

export const Link: React.FC<IProps> = ({ page, children}) => {
  const [status, setStatus] = useState(_STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(_STATUS.HOVERED)
  }

  const onMouseLeave = () => {
    setStatus(_STATUS.NORMAL)
  }

  return (
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a> 

  )
}