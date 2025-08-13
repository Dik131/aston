import { useEffect, useState } from 'react';
import { MainLayout } from '../widgets/MainLayout/MainLayout';
import { PostList } from '../widgets/PostList/PostList'
import type { Post } from '../entities/post/model/types';

const mockPosts: Post[] = [
  { id: 1, title: 'Заглушка 1', body: 'Контент поста 1' },
  { id: 2, title: 'Заглушка 2', body: 'Контент поста 2' },
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 секунды имитации загрузки
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <PostList posts={mockPosts} minTitleLength={0} isLoading={isLoading}/>
    </MainLayout>
  )
}

export default App;
