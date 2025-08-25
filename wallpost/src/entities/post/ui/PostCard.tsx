import { CommentList } from '../../../widgets/CommentList/CommentList';
import type { Comment } from '../model/types';
import styles from './PostCard.module.css'

type Props = {
  title: string
  body: string
  comments?: Comment[]
}

export const PostCard = ({ title, body, comments = [] }: Props) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{body}</p>
      <CommentList comments={comments} />
    </div>
  )
}
