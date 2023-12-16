import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { setUser } from "./redux/authSlice";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
const App = () => {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log("user", user);
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
