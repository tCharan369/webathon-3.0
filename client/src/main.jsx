import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import Resources from "./components/Resources/Resources.jsx";
import AdminPage from "./components/Pages/Admin/AdminPage.jsx";
import StudentPage from "./components/Pages/Student/StudentPage.jsx";
import FacultyPage from "./components/Pages/Faculty/FacultyPage.jsx";
import SigninStudent from "./components/SigninStudent";
import SigninAdmin from "./components/SigninAdmin";
import SigninFaculty from "./components/SigninFaculty";
import SignUpStudent from "./components/SignUpStudent";
import SignUpAdmin from "./components/SignUpAdmin";
import SignUpFaculty from "./components/SignUpFaculty";

const browserRouterObj = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/resources", element: <Resources /> },
      { path: "/admin", element: <AdminPage /> },
      { path: "/student", element: <StudentPage /> },
      { path: "/faculty", element: <FacultyPage /> },
      { path: "/signin/student", element: <SigninStudent /> },
      { path: "/signin/admin", element: <SigninAdmin /> },
      { path: "/signin/faculty", element: <SigninFaculty /> },
      { path: "/signup/student", element: <SignUpStudent /> },
      { path: "/signup/admin", element: <SignUpAdmin /> },
      { path: "/signup/faculty", element: <SignUpFaculty /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={browserRouterObj} />
  </StrictMode>        
);