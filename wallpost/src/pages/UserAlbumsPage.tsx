import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumList } from '../widgets/AlbumList/AlbumList';
import { MainLayout } from '../widgets/MainLayout/MainLayout';

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
    <MainLayout>
      <AlbumList albums={albums} isLoading={isLoading} />
    </MainLayout>
  );
};
