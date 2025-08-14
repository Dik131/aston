import { MainLayout } from '../widgets/MainLayout/MainLayout';
import { PostList } from '../widgets/PostList/PostList'
import { usePosts } from '../features/PostList/model/hooks/usePosts';

const App = () => {
  const { posts, isLoading } = usePosts()


  return (
    <MainLayout>
      <PostList posts={posts} minTitleLength={0} isLoading={isLoading}/>
    </MainLayout>
  )
}

export default App;
