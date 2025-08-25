import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from '../widgets/MainLayout/MainLayout';
import { CommentList } from '../widgets/CommentList/CommentList';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const PostDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()),
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.json())
    ])
    .then(([postData, commentsData]) => {
      setPost(postData);
      setComments(commentsData);
    })
    .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <MainLayout>Загрузка...</MainLayout>;
  if (!post) return <MainLayout>Пост не найден</MainLayout>;

  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Комментарии</h2>
      <CommentList comments={comments} />
    </MainLayout>
  );
};
