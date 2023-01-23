import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      const initialValue = JSON.parse(saved);
      return initialValue;
    }
    return null;
  });

  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
  //   setTodos(saved);
  // }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandle = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm(
      'Ви впевнені, що хочете видалити елемент?'
    );
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <TodoForm onAdd={addHandle} />
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  );
};

export default App;
