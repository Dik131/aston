import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from '../widgets/MainLayout/MainLayout';

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const AlbumPhotosPage = () => {
  const { id } = useParams<{ id: string }>();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then(res => res.json())
      .then(data => setPhotos(data))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <MainLayout>Загрузка...</MainLayout>;
  if (!photos.length) return <MainLayout>Фотографии не найдены</MainLayout>;

  return (
    <>
      <h1>Фотографии альбома {id}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 150px)', gap: '12px' }}>
        {photos.map(photo => (
          <div key={photo.id} style={{ textAlign: 'center' }}>
            <img src={photo.thumbnailUrl} alt={photo.title} width={150} height={150} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
