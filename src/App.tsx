import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<p>hi</p>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
