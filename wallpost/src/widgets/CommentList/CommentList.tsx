import { useState, useCallback } from 'react';
import { InlineButton } from '../../shared/ui/InlineButton/InlineButton';

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
      <InlineButton onClick={toggle}>
        Показать комментарии
      </InlineButton>
    );
  }

  return (
    <div>
      <InlineButton onClick={toggle}>
        Скрыть комментарии
      </InlineButton>
      <ul>
        {comments.map(c => (
          <li key={c.id}>{c.body}</li>
        ))}
      </ul>
    </div>
  );
};
