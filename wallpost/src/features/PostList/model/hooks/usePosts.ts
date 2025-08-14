import { useEffect, useState, useCallback } from 'react';
import type { Post } from '../../../../entities/post/model/types';

export const usePosts = (userId?: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    const url = userId
      ? `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      : 'https://jsonplaceholder.typicode.com/posts';
    const res = await fetch(url);
    const data = await res.json();
    setPosts(data);
    setIsLoading(false);
  }, [userId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, isLoading };
};
