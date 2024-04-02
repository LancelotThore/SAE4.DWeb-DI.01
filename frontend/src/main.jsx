import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import About from './routes/about.jsx';
import ErrorPage from './ui/ErrorPage/index.jsx';
import Home, { loader as homeLoader } from './routes/home.jsx';
import MoviePage, { loader as moviePageLoader } from './routes/moviePage.jsx';
import WatchMovie, { loader as watchMovieLoader} from './routes/watchMovie.jsx';

import './index.css';
import CataloguePage, { loader as catalogueLoader } from './routes/cataloguePage.jsx';

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
        element: <CataloguePage />,
        loader: catalogueLoader,
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
        path: '/film/:movieId',
        element: <MoviePage />,
        loader: ({ params }) => moviePageLoader({ id: params.movieId }),
      },
    ]
  },
  {
    path: '/regarder/:movieId',
    element: <WatchMovie />,
    loader: ({ params }) => watchMovieLoader({ id: params.movieId }),
  }
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
