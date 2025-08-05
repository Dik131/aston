import styles from './PostCard.module.css'

type Props = {
  title: string
  body: string
}

export const PostCard = ({ title, body }: Props) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}
