import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../../widgets/MainLayout/MainLayout';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { PostsPage } from '../../pages/PostsPage/PostsPage';
import { PostDetailsPage } from '../../pages/PostDetailsPage/PostDetailsPage';
import { UserAlbumsPage } from '../../pages/UserAlbumsPage/UserAlbumsPage';
import { AlbumPhotosPage } from '../../pages/AlbumPhotosPage/AlbumPhotosPage';
import { UserTodosPage } from '../../pages/UserTodosPage/UserTodosPage';
import { UserPostsPage } from '../../pages/UserPostsPage/UserPostsPage';
import { UserLayout } from '../../widgets/UserLayout/UserLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Layout как обёртка
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/posts" replace /> },

      // Posts
      { path: 'posts', element: <PostsPage /> },
      { path: 'posts/:id', element: <PostDetailsPage /> },

      // Albums and Photos
      { path: 'users/:id/albums', element: <UserAlbumsPage /> },
      { path: 'albums/:id/photos', element: <AlbumPhotosPage /> },

      // Users
      { path: 'users/:id/todos', element: <UserTodosPage /> },
      { path: 'users/:id/posts', element: <UserPostsPage /> },
    ],
  },
  {
  path: 'users/:id',
  element: <UserLayout />,
  children: [
    { path: 'posts', element: <UserPostsPage /> },
    { path: 'albums', element: <UserAlbumsPage /> },
    { path: 'todos', element: <UserTodosPage /> },
  ],
}
]);

