import { createBrowserRouter } from 'react-router';
import Blogs from '../pages/Blogs';
import Blog from '../pages/Blog';
import BookMark from '../pages/BookMark';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import Content from '../components/Content';
import Author from '../components/Author';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/blogs',
        loader: () => fetch('https://dev.to/api/articles?per page=20&top=7'),
        element: <Blogs></Blogs>,
      },
      {
        path: '/blog/:id',
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        element: <Blog></Blog>,
        children: [
          {
            index: true,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
            element: <Content></Content>,
          },
          {
            path: 'author',
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
            element: <Author></Author>,
          },
        ],
      },
      {
        path: '/bookMark',
        element: <BookMark></BookMark>,
      },
    ],
  },
]);
