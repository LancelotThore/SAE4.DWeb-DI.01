import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import About from './routes/about.jsx';
import ErrorPage from './ui/ErrorPage/index.jsx';
import { loader as listLoader } from './ui/List/index.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/direct',
        loader: listLoader,
        
      },
      {
        path: '/catalogue',
        
      },
      {
        path: '/search',
        
      },
      {
        path: '/other',
        
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
