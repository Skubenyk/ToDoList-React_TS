import React from 'react';
import { ITodo } from '../interfaces';
import classNames from 'classnames';

interface TodoListProps {
  todos: ITodo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
  if (todos.length === 0) {
    return <p className='center'>Зараз справ не має!</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        // const classes = ['todo'];
        // if (todo.completed) {
        //   classes.push('completed');
        // }
        return (
          // <li className={classes.join(' ')} key={todo.id}>
          <li
            className={
              todo.completed ? classNames('todo ', 'completed') : 'todo'
            }
            key={todo.id}
          >
            <label>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className='material-icons red-text'
                onClick={(event) => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
