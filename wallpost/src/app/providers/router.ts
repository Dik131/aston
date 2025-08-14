import { createBrowserRouter } from 'react-router-dom';
import { PostsPage } from '../../pages/PostsPage'
import { PostDetailsPage } from '../../pages/PostDetailsPage';
import { UserAlbumsPage } from '../../pages/UserAlbumsPage';
import { AlbumPhotosPage } from '../../pages/AlbumPhotosPage';
import { UserTodosPage } from '../../pages/UserTodosPage';
import { UserPostsPage } from '../../pages/UserPostsPage';


export const router = createBrowserRouter([
  { path: '/posts', element: <PostsPage /> },
  { path: '/posts/:id', element: <PostDetailsPage /> },
  { path: '/users/:id/albums', element: <UserAlbumsPage /> },
  { path: '/albums/:id/photos', element: <AlbumPhotosPage /> },
  { path: '/users/:id/todos', element: <UserTodosPage /> },
  { path: '/users/:id/posts', element: <UserPostsPage /> },
]);
