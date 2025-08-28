import { useState } from 'react';
import { PostList } from '../widgets/PostList/PostList';
import { PostLengthFilter } from '../features/PostLengthFilter/ui/PostLengthFilter';
import { usePosts } from '../features/PostList/model/hooks/usePosts';
import styles from './PostsPage.module.css';

export const PostsPage = () => {
  const { posts, isLoading } = usePosts();
  const [maxPostCount, setMaxPostCount] = useState(5);

  return (
    <>
      <PostList posts={posts} maxPostCount={maxPostCount} isLoading={isLoading} />
      <div className={styles.filter}>
        <PostLengthFilter onChange={setMaxPostCount} />
      </div>
    </>
  );
};
