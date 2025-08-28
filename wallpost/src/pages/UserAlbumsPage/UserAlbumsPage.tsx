import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumList } from '../../widgets/AlbumList/AlbumList';

export const UserAlbumsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [albums, setAlbums] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
      .then(res => res.json())
      .then(data => setAlbums(data))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      <AlbumList albums={albums} isLoading={isLoading} />
    </>
  );
};
