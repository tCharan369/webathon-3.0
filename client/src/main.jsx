import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout and Pages
import RootLayout from "./components/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import Resources from "./components/Resources/Resources.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";

// Role Dashboards

// SignIn and SignUp
import SignInWithRole from "./components/SignInWithRole.jsx";
import SignUpStudent from "./components/SignUpStudent.jsx";
import SignUpAdmin from "./components/SignUpAdmin.jsx";
import SignUpFaculty from "./components/SignUpFaculty.jsx";

// Context
import AllUsersContext from "./contexts/AllUsersContext.jsx";
import StudentPage from "./components/Pages/Student/StudentPage.jsx";
import Dashboard from "./components/Pages/Student/DashBoard.jsx";
import RepositoryPage from "./components/Pages/Student/RepositoryPage.jsx";
import ForumPage from "./components/Pages/Student/ForumPage.jsx";
import BookmarksPage from "./components/Pages/Student/BookmarksPage.jsx";
import RequestMaterialPage from "./components/Pages/Student/RequestMaterialPage.jsx";

// ✅ Routing Configuration
const browserRouterObj = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/resources", element: <Resources /> },
      { path: "/aboutus", element: <AboutUs /> },

      // ✅ SignUp Routes (static)
      { path: "/signup/student", element: <SignUpStudent /> },
      { path: "/signup/faculty", element: <SignUpFaculty /> },
      { path: "/signup/admin", element: <SignUpAdmin /> },

      // ✅ SignIn Route (dynamic)
      { path: "/signin/:role", element: <SignInWithRole /> },

      // ✅ Dashboards for each role
      {
        path: "student-dashboard",
        element: <StudentPage />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "repository",
            element: <RepositoryPage />,
          },
          {
            path: "request-material",
            element: <RequestMaterialPage />,
          },

          {
            path: "forums",
            element: <ForumPage />,
          },
          {
            path: "bookmarks",
            element: <BookmarksPage />,
          },
        ],
      },

      // { path: "/faculty-dashboard", element: <FacultyPage /> },
      // { path: "/admin-dashboard", element: <AdminPage /> },

      // 404 fallback
      { path: "*", element: <div>404 Not Found</div> },
    ],
  },
]);

// App Bootstrap
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllUsersContext>
      <RouterProvider router={browserRouterObj} />
    </AllUsersContext>
  </StrictMode>
);
