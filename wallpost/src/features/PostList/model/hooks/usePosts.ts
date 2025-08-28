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
    const postsData = await res.json();
    
    // Fetch comments for each post
    const postsWithComments = await Promise.all(
      postsData.map(async (post: Post) => {
        const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
        const comments = await commentsRes.json();
        return { ...post, comments };
      })
    );
    
    setPosts(postsWithComments);
    setIsLoading(false);
  }, [userId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, isLoading };
};
