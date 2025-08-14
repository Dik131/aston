import { PostList } from '../widgets/PostList/PostList';
import { usePosts } from '../features/PostList/model/hooks/usePosts';

export const PostsPage = () => {
  const { posts, isLoading } = usePosts();

  return (
      <PostList posts={posts} minTitleLength={0} isLoading={isLoading} />
  );
};
