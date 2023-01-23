import React, { useState } from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className='input-field mt2'>
      <input
        onChange={changeHandler}
        value={title}
        type='text'
        id='title'
        placeholder='Введіть назву справи'
        onKeyDown={keyPressHandler}
      />
      <label htmlFor='title' className='active'>
        Введіть назву справи
      </label>
    </div>
  );
};

export default TodoForm;
