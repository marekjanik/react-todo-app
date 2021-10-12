import React, { ChangeEventHandler } from 'react';
import styles from './styles.module.css';
import { Header } from '../header';
import { Button } from '../button';
import { faPlus } from '../../utils/font-awesome';

type TodoFormPropsType = {
  value: string;
  onSubmit: ChangeEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onAddTodo: VoidFunction;
};

export const TodoForm: React.FC<TodoFormPropsType> = ({
  value,
  onSubmit,
  onChange,
  onAddTodo,
}) => {
  return (
    <section className={styles.todoFormContainer}>
      <Header />
      <form action="" onSubmit={onSubmit} className={styles.todoForm}>
        <input
          type="text"
          onChange={onChange}
          value={value}
          className={styles.todoFormInput}
        />
        <Button
          type="submit"
          onClick={onAddTodo}
          icon={faPlus}
          className={styles.submitButton}
        />
      </form>
    </section>
  );
};
