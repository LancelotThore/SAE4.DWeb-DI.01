import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import About from './routes/about.jsx';
import ErrorPage from './ui/ErrorPage/index.jsx';
import Home, { loader as homeLoader } from './routes/home.jsx';
import MoviePage, { loader as moviePageLoader } from './routes/moviePage.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: '/direct',
      },
      {
        path: '/catalogue',

      },
      {
        path: '/search',

      },
      {
        path: '/other',

      },
      {
        path: '/settings',

      },
      {
        path: '/support',
      },
      {
        path: '/playlist',
      },
      {
        path: '/:movieId',
        element: <MoviePage />,
        loader: ({ params }) => moviePageLoader({ id: params.movieId }),
      }
]
  },
{
  path: '/about',
    element: <About />
},
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
