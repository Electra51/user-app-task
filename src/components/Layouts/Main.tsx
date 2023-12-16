import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      {/* {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer></Footer>
      )} */}
    </>
  );
};

export default Main;
