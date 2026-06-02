import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { action as newPostAction } from './actions/newPostActions.ts';
import { loader as postsLoader } from './loaders/postsLoader.ts';
import MainLayout from './routes/MainLayout/MainLayout.tsx';
import NewPost from './routes/NewPost/NewPost.tsx';
import Posts from './routes/Posts/Posts.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [{ path: '/new-post', element: <NewPost />, action: newPostAction }],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
