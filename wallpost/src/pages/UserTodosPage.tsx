import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from '../widgets/MainLayout/MainLayout';

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

  if (isLoading) return <MainLayout>Загрузка...</MainLayout>;
  if (!todos.length) return <MainLayout>Задачи не найдены</MainLayout>;

  return (
    <MainLayout>
      <h1>Задачи пользователя {id}</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" checked={todo.completed} readOnly />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};
