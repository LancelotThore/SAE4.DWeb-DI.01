import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import About from './routes/about.jsx';
import ErrorPage from './ui/ErrorPage/index.jsx';
import { loader as listLoader } from './ui/List/index.jsx';

import './index.css';
import Home from './routes/home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: listLoader,
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
