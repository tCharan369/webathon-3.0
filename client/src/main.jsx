import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import Resources from './components/Resources/Resources.jsx';
import AdminPage from './components/Pages/Admin/AdminPage.jsx';
import StudentPage from './components/Pages/Student/StudentPage.jsx';
import FacultyPage from './components/Pages/Faculty/FacultyPage.jsx';
import AboutUs from './components/AboutUs.jsx/AboutUs.jsx';

const browserRouterObj = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/student",
        element: <StudentPage />,
      },
      {
        path: "/faculty",
        element: <FacultyPage />,
      },
      {
         path: "/aboutus",
         element: <AboutUs/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={browserRouterObj} />
  </StrictMode>
);