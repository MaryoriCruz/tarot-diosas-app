// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CardDetail from './pages/CardDetail';
import Reading from './pages/Reading';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/card/:id',
        element: <CardDetail />
      },
      {
        path: '/reading',
        element: <Reading />
      }
    ]
  }
]);