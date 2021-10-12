import React from 'react';
import { useComponent } from './useComponent';
import styles from './styles.module.css';
import { Button } from '../button';
import { faCheck, faTrash } from '../../utils/font-awesome';

type TodoPropsType = {
  name: string;
  id: string;
  onRemoveTodo: (id: string) => void;
};

export const Todo: React.FC<TodoPropsType> = ({ name, id, onRemoveTodo }) => {
  const { isCompleted, onCompleteTodo } = useComponent();

  const classNames = `${isCompleted && styles.completed} ${styles.todoInput}`;

  return (
    <li key={id} id={id} className={styles.todo}>
      <input type="text" defaultValue={name} className={classNames} />
      <Button
        type="button"
        onClick={onCompleteTodo}
        icon={faCheck}
        className={styles.completeButton}
      />
      <Button
        type="button"
        onClick={() => {
          onRemoveTodo(id);
        }}
        icon={faTrash}
        className={styles.trashButton}
      />
    </li>
  );
};
