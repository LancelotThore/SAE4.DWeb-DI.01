import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root, {loader as userLoader} from './routes/root.jsx';
import ErrorPage from './ui/ErrorPage/index.jsx';
import Home, { loader as homeLoader } from './routes/home.jsx';
import MoviePage, { loader as moviePageLoader } from './routes/moviePage.jsx';
import WatchMovie, { loader as watchMovieLoader} from './routes/watchMovie.jsx';

import './index.css';
import CataloguePage, { loader as catalogueLoader } from './routes/cataloguePage.jsx';
import SearchPage from './routes/searchPage.jsx';
import CategoryPage, { loader as categoryPageLoader } from './routes/categoryPage.jsx';
import Other, { loader as otherLoader } from './routes/other.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: userLoader,
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
        element: <SearchPage />,
        loader: catalogueLoader,
      },
      {
        path: '/other',
        element: <Other />,
        loader: otherLoader,
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
      {
        path: '/category/:categoryId',
        element: <CategoryPage />,
        loader: ({ params }) => categoryPageLoader({ id: params.categoryId }),
      }
    ]
  },
  {
    path: '/regarder/:movieId',
    element: <WatchMovie />,
    loader: ({ params }) => watchMovieLoader({ id: params.movieId }),
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
