import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './pages/Home.jsx';
import BookMark from './pages/BookMark.jsx';
import Blogs from './pages/Blogs.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    // element: <App></App>,
    element: <Home></Home>,
  },
  {
    path: '/blogs',
    // element: <App></App>,
    element: <Blogs></Blogs>,
  },
  {
    path: '/bookMark',
    // element: <App></App>,
    element: <BookMark></BookMark>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
