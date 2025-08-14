interface Album {
  userId: number;
  id: number;
  title: string;
}

interface AlbumListProps {
  albums: Album[];
  isLoading?: boolean;
}

export const AlbumList: React.FC<AlbumListProps> = ({ albums, isLoading = false }) => {
  if (isLoading) return <p>Загрузка альбомов...</p>;
  if (!albums.length) return <p>Альбомов нет</p>;

  return (
    <ul>
      {albums.map(album => (
        <li key={album.id}>
          {album.title} (ID: {album.id})
        </li>
      ))}
    </ul>
  );
};
