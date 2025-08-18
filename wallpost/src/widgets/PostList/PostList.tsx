import { useMemo, useCallback } from 'react';
import { PostCard } from '../../entities/post/ui/PostCard';
import { withLoading } from '../../shared/lib/hoc/withLoading';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
import type { Post } from '../../entities/post/model/types';

interface PostListBaseProps {
  posts: Post[];
  minTitleLength?: number;
}

export const PostListBase = ({ posts, minTitleLength = 0 }: PostListBaseProps) => {
  const filteredPosts = useMemo(
    () => filterByLength(posts, minTitleLength),
    [posts, minTitleLength]
  );

  const renderPost = useCallback(
    (post: Post) => <PostCard key={post.id} title={post.title} body={post.body} />,
    []
  );

  return <ItemList<Post> items={filteredPosts} renderItem={renderPost} />;
};

export const PostList = withLoading(PostListBase);
