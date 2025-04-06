import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllUsersContext from "./contexts/AllUsersContext.jsx";

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
import SignInUpWithRole from "./components/SignInUpWithRole.jsx";

// Context

// ✅ Routing Configuration
const browserRouterObj = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/resources", element: <Resources /> },
      { path: "/aboutus", element: <AboutUs /> },

      //  SignUp Routes (static)
      { path: "/signup/student", element: <SignUpStudent /> },
      { path: "/signup/faculty", element: <SignUpFaculty /> },
      { path: "/signup/admin", element: <SignUpAdmin /> },

      // ✅ SignIn Route (dynamic)
      { path: "/signin/:role", element: <SignInUpWithRole /> },
      { path: "/signin/:role", element: <SignInWithRole /> },

      //  Dashboards for each role
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

      {
        path: "/faculty-dashboard",
        element: <FacultyPage />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "profile",
            element: <FacultyProfile />,
          },
          {
            path: "upload-materials",
            element: <UploadMaterials />,
          },
        ],
      },
      { path: "/admin-dashboard", 
        element: <AdminPage />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "dashboard-overview",
            element: <Dashboard />,
          },
          {
            path: "user-management",
            element: <UserManagement  />,
          },
          {
            path: "content-management",
            element: <ContentManagement  />,
          }
        ]},

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
