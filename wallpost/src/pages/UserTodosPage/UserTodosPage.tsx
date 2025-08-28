import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './ui/UserTodosPage.module.css';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const UserTodosPage = () => {
  const { id } = useParams<{ id: string }>();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then(res => res.json())
      .then(data => setTodos(data))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <>Загрузка...</>;
  if (!todos.length) return <>Задачи не найдены</>;

  return (
    <>
      <h1>Задачи пользователя {id}</h1>
      <ul className={style.todoList}>
        {todos.map(todo => (
          <li key={todo.id} className={style.todoItem}>
            <label className={style.todoLabel}>
              <input type="checkbox" checked={todo.completed} readOnly />
              <span className={todo.completed ? style.completed : undefined}>
                {todo.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
