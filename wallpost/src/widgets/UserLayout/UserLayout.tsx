import { Outlet, useParams } from 'react-router-dom';
import { UserTabs } from '../UserTabs/UserTabs';

export const UserLayout = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return (
    <>
      <h1>Профиль пользователя {id}</h1>
      <UserTabs userId={+id}/>  
      <Outlet />
    </>
  );
};
