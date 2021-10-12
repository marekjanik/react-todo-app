import React from 'react';
import { useComponent } from './useComponent';
import styles from './styles.module.css';
import { Todo } from '../todo';
import { TodoType } from '../App/useComponent';

type onRemoveTodoType = (id: string) => void;

type TodoListPropsType = {
  todos: TodoType[];
  onRemoveTodo: onRemoveTodoType;
};

export const TodoList: React.FC<TodoListPropsType> = ({
  todos,
  onRemoveTodo,
}) => {
  const { isLoading } = useComponent();

  return (
    <section className={styles.todoListContainer}>
      <ul className={styles.todoList}>
        {renderTodos(isLoading, todos, onRemoveTodo)}
      </ul>
    </section>
  );
};

const renderTodos = (
  isLoading: boolean,
  todos: TodoType[],
  onRemoveTodo: onRemoveTodoType
) => {
  return isLoading ? (
    <p>🔍 Wondering what to do...</p>
  ) : (
    todos.map(({ name, id }) => (
      <Todo key={id} onRemoveTodo={onRemoveTodo} name={name} id={id} />
    ))
  );
};
