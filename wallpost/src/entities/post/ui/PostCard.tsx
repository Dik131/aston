import { CommentList } from '../../../widgets/CommentList/CommentList';
import { useGetCommentsByPostQuery } from '../../commentsApi/api/commentsApi';
import styles from './PostCard.module.css'

type Props = {
  id: number
  title: string
  body: string
}

export const PostCard = ({ id, title, body }: Props) => {
  const { data: comments = [], isLoading } = useGetCommentsByPostQuery(id);

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{body}</p>
      {!isLoading && <CommentList comments={comments} />}
    </div>
  )
}
