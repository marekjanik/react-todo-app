import React from 'react';
import { useComponent } from './useComponent';
import styles from './styles.module.css';
import './styles.css';
import { TodoForm } from '../todo-form';
import { TodoList } from '../todo-list';

export const App: React.FC = () => {
  const { todos, value, onSubmit, onChange, onAddTodo, onRemoveTodo } =
    useComponent();

  return (
    <div className={styles.appContainer}>
      <TodoForm
        value={value}
        onSubmit={onSubmit}
        onChange={onChange}
        onAddTodo={onAddTodo}
      />
      <TodoList todos={todos} onRemoveTodo={onRemoveTodo} />
    </div>
  );
};
