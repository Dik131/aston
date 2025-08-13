type PostLengthFilterProps = {
  onChange: (value: number) => void;
};

export const PostLengthFilter = ({ onChange }: PostLengthFilterProps) => {
  return (
    <select onChange={(e) => onChange(Number(e.target.value))}>
      <option value="0">Все</option>
      <option value="20">&gt; 20 символов</option>
      <option value="50">&gt; 50 символов</option>
    </select>
  );
};
