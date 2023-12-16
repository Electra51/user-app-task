import Dashboard from "../Pages/DashboardPage/Dashboard";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/LoginPage/Login";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Profile from "../Pages/ProfilePage/Profile";
import Projects from "../Pages/ProjectsPage/Projects";
import Register from "../Pages/RegisterPage/Register";
import Reporting from "../Pages/ReportingPage/Reporting";
import Setting from "../Pages/SettingPage/Setting";
import Tasks from "../Pages/TasksPage/Tasks";
import Users from "../Pages/UsersPage/Users";
import DashboardLayouts from "../components/Layouts/DashboardLayouts";
import Main from "../components/Layouts/Main";
import PrivateRoute from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/tasks",
        element: (
          <PrivateRoute>
            <Tasks />
          </PrivateRoute>
        ),
      },
      {
        path: "/report",
        element: <Reporting />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayouts />
      </PrivateRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/setting",
        element: (
          <PrivateRoute>
            <Setting />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
