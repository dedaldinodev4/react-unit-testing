import React, { useState, useEffect } from 'react';

type IProps = {
  initialStatus: string[];
}


export const List: React.FC<IProps> = ({initialStatus}) => {
  const [status, setStatus] = useState<string[]>([]);

  setTimeout(() => {
    setStatus(initialStatus)
  }, 500);

  const add = () => {
    setStatus( status => [...status, 'Novo'])
  }

  const remove = (item: string) => {
    setStatus(status => status.filter(obj => obj !== item));
  }
  return (
    <>
      <label htmlFor="item">Item</label>
      <input name='item' placeholder='New item' />
      <button name='add' onClick={add}>Add</button>

      <ul>
        {status.map((item) => (
            <li key={item}>
              {item}
              <button onClick={() => remove('Novo')}>Delete</button>
            </li> 
           
          
        ))}
      </ul>
    </>
  );
}