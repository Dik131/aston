import { CommentList } from '../../../widgets/CommentList/CommentList';
import type { Comment } from '../model/types';
import styles from './PostCard.module.css'
import { Link } from 'react-router-dom';

type Props = {
  title: string
  body: string
  comments?: Comment[]
}

export const PostCard = ({ title, body, userId, comments = [] }: Props) => {
  // временная заглушка
  const displayedComments = comments && comments.length > 0
    ? comments
    : [
        { id: 1, body: "Отличный пост!" },
        { id: 2, body: "Очень интересно." },
        { id: 3, body: "Спасибо за информацию!" },
      ];

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p className={styles.author}>
        Автор: <Link to={`/users/${userId}`}>Пользователь {userId}</Link>
      </p>
      <p>{body}</p>
      <CommentList comments={displayedComments} />
    </div>
  )
}
