import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Home from "./Pages/HomePage/Home";
import Users from "./Pages/UsersPage/Users";
import Projects from "./Pages/ProjectsPage/Projects";
import Tasks from "./Pages/TasksPage/Tasks";
import Reporting from "./Pages/ReportingPage/Reporting";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
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
