import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import Resources from './components/Resources/Resources.jsx';
// import About from './components/About/About.jsx';

const browserRouterObj = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/resources',
        element:<Resources />,
      },
      {
        // path: '/aboutus',
        // element: <About/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={browserRouterObj} />
  </StrictMode>
);
