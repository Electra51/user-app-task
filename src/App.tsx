import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Home from "./Pages/HomePage/Home";
import Users from "./Pages/UsersPage/Users";
import Projects from "./Pages/ProjectsPage/Projects";
import Tasks from "./Pages/TasksPage/Tasks";
import Reporting from "./Pages/ReportingPage/Reporting";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { setUser } from "./redux/authSlice";
import Profile from "./Pages/ProfilePage/Profile";
import Dashboard from "./Pages/DashboardPage/Dashboard";
import Setting from "./Pages/SettingPage/Setting";
import PrivateRoute from "./Routes/PrivateRoutes";

const App = () => {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log("user", user);
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/setting"
        element={
          <PrivateRoute>
            <Setting />
          </PrivateRoute>
        }
      />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/report" element={<Reporting />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
