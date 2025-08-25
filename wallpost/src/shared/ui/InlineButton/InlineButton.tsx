import type { ReactNode } from 'react';
import styles from './InlineButton.module.css';

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const InlineButton = ({ onClick, children }: Props) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};
