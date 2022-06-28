import { useState, useEffect, useCallback, ChangeEventHandler } from 'react';
import { uuid } from '../../utils/uuid';

export type TodoType = {
  name: string;
  id: string;
};

type UseComponentType = {
  todos: TodoType[];
  value: string;
  onSubmit: ChangeEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onAddTodo: VoidFunction;
  onRemoveTodo: (id: string) => void;
};

export const useComponent = (): UseComponentType => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      fetch('http://www.boredapi.com/api/activity/')
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          const fetchedTodo: TodoType = {
            id: data.key,
            name: data.activity,
          };
          setTodos((prevTodos: TodoType[]) => [...prevTodos, fetchedTodo]);
        })
        .catch((error: string) => {
          console.log(error);
        });
    }
  }, []);

  const onSubmit = useCallback<ChangeEventHandler<HTMLFormElement>>((event) => {
    event.preventDefault();
  }, []);

  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const { value } = event.target;
      setValue(value);
    },
    []
  );

  const onAddTodo = () => {
    if (value.trim().length === 0) {
      return;
    }
    setValue(value);

    setTodos((prevTodos: TodoType[]) => {
      return [...prevTodos, { name: value, id: uuid() }];
    });

    setValue('');
  };

  const onRemoveTodo = (id: string) => {
    setTodos((prevTodos: TodoType[]) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return {
    todos,
    value,
    onSubmit,
    onChange,
    onAddTodo,
    onRemoveTodo,
  };
};
