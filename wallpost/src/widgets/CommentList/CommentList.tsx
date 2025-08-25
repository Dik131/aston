import { useState, useCallback } from 'react';
import styles from './CommentList.module.css';

type Comment = {
  id: string | number;
  body: string;
};

type CommentListProps = {
  comments: Comment[];
};

export const CommentList = ({ comments }: CommentListProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  if (collapsed) {
    return (
      <button onClick={toggle} className={styles.textButton}>
        Показать комментарии
      </button>
    );
  }

  return (
    <div>
      <button onClick={toggle} className={styles.textButton}>
        Скрыть комментарии
      </button>
      <ul>
        {comments.map(c => (
          <li key={c.id}>{c.body}</li>
        ))}
      </ul>
    </div>
  );
};
