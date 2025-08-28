import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostList } from '../../widgets/PostList/PostList';

interface Post {
  id: number;
  title: string;
  body: string;
}

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <>Загрузка...</>;
  if (!posts.length) return <>Посты не найдены</>;

  return (
    <>
      <h1>Посты пользователя {id}</h1>
      <PostList posts={posts} isLoading={isLoading} />
    </>
  );
};
