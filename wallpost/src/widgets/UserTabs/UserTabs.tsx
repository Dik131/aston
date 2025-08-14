import { NavLink } from 'react-router-dom';

export const UserTabs = ({ userId }: { userId: number }) => (
  <nav>
    <NavLink to={`/users/${userId}/posts`}>Посты</NavLink>
    <NavLink to={`/users/${userId}/albums`}>Альбомы</NavLink>
    <NavLink to={`/users/${userId}/todos`}>Задачи</NavLink>
  </nav>
);
