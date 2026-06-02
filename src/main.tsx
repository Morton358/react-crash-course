import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NewPost from './routes/NewPost/NewPost.tsx';
import MainLayout from './routes/MainLayout/MainLayout.tsx';
import Posts from './routes/Posts/Posts.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/', element: <Posts />, loader: () => {}, children: [{ path: '/new-post', element: <NewPost /> }] }],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
