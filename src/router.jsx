// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cards from './pages/Cards';
import CardDetail from './pages/CardDetail';
import Reading from './pages/Reading';

export const router = createBrowserRouter([
  {
    path: '/',   // Home ahora está FUERA del Layout
    element: <Home />
  },
  {
    path: '/',   // El resto sí usa el Layout
    element: <Layout />,
    children: [
      {
        path: '/cards',
        element: <Cards />
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
