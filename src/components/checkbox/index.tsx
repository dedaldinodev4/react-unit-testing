import React, { useState } from 'react'

type IProps = {
  labelOn: string;
  labelOff: string; 
}

export const CheckBoxWithLabel: React.FC<IProps> = ({labelOn, labelOff}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const onChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label>
      <input 
        type={'checkbox'} 
        checked={isChecked} 
        onChange={onChange}
      />
      { isChecked ? labelOn : labelOff }
    </label>
  )
}