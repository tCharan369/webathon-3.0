import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
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
import AboutUs from "./components/AboutUs/AboutUs.jsx";

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
      { path: "/aboutus", element: <AboutUs /> },
      // Wildcard route for Clerk's internal routes
      { path: "*", element: <div>404 Not Found</div> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey="pk_test_cGlja2VkLWthbmdhcm9vLTc1LmNsZXJrLmFjY291bnRzLmRldiQ">
      <RouterProvider router={browserRouterObj} />
    </ClerkProvider>
  </StrictMode>
);