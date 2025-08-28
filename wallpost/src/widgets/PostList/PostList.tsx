import { useState, useMemo } from 'react';
import { PostCard } from '../../entities/post/ui/PostCard';
import { withLoading } from '../../shared/lib/hoc/withLoading';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import type { Post } from '../../entities/post/model/types';
import styles from './PostList.module.css'

interface PostListBaseProps {
  posts: Post[];
  maxPostCount?: number;
}

export const PostListBase = ({ posts, maxPostCount = 0 }: PostListBaseProps) => {
  const [minTitleLength, setMinTitleLength] = useState(maxPostCount);

  const filteredPosts = useMemo(
    () => filterByLength(posts, minTitleLength),
    [posts, minTitleLength]
  );

  return (
    <div className={styles.container}>
      <div className={styles.filterWrapper}>
        <PostLengthFilter value={minTitleLength} onChange={setMinTitleLength} />
      </div>

      {filteredPosts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} userId={post.userId} comments={post.comments} />
      ))}
    </div>
  );
};

export const PostList = withLoading(PostListBase);
