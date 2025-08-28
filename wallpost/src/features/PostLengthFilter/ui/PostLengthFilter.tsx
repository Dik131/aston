import styles from './PostLengthFilter.module.css';

type PostLengthFilterProps = {
  value: number;
  onChange: (value: number) => void;
};

export const PostLengthFilter = ({ value, onChange }: PostLengthFilterProps) => {
  return (
    <select onChange={(e) => onChange(Number(e.target.value))} className={styles.filter} value={value}>
      <option value="0">Все посты</option>
      <option value="5">5 постов</option>
      <option value="10">10 постов</option>
      <option value="20">20 постов</option>
    </select>
  );
};
