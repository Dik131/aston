type PostLengthFilterProps = {
  onChange: (value: number) => void;
};

export const PostLengthFilter = ({ onChange }: PostLengthFilterProps) => {
  return (
    <select onChange={(e) => onChange(Number(e.target.value))}>
      <option value="5">5 постов</option>
      <option value="10">10 постов</option>
      <option value="20">20 постов</option>
      <option value="0">Все посты</option>
    </select>
  );
};
